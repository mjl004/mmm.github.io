// 声明页面参数的集合
var PageParams = {
    NewsArticleInfoID: SilverSoft.Robot.QueryString('id')   // 文章ID
    //, DeviceCode: SilverSoft.Robot.QueryString('DeviceCode')    //设备唯一码
    //, ApplicationType: SilverSoft.Robot.QueryString('ApplicationType')   //应用分类【1-iOS客户端、2-Android客户端、3-Web】
    //, Operate: SilverSoft.Robot.QueryString('Operate')   //具体操作【1-查看、2-下载、3-转发、4-分享】
    //, OperateDetail: SilverSoft.Robot.QueryString('OperateDetail') //操作详情【201-项目内分享、202-微信朋友圈分享、203-QQ空间分享、204-新浪微博分享、205-App分享；301-项目内转发、302-微信朋友圈转发、303-QQ空间转发、304-新浪微博转发、305-App转发】
    , FromNewsShareCommentID: SilverSoft.Robot.QueryString('FromID') //来源资讯统计ID
    , QuestionnaireInfoID: ""
    , FromIndex: SilverSoft.Robot.QueryString('fromsign')
    , isApplets: SilverSoft.Robot.QueryString('isApplets')
};

$(function () {
    fnGetArticleContents();
    fnGetArticleReview();//加载评论
    fnAddCensus();//查阅统计
    if (!SilverSoft.Robot.IsNullOrWhiteSpace(PageParams.isApplets)) {
        localStorage.setItem('isApplets', PageParams.isApplets);
    }
    //利多支持
    $("#btn_MoreVote").one("click", function () {
        fnVote('1');
    });

    //利空支持
    $("#btn_BadVote").one("click", function () {
        fnVote('2');
    });
});

//返回页面
function fnReturnUrl() {
    if (SilverSoft.Robot.IsNullOrWhiteSpace(PageParams.FromIndex)) {
        window.location.href = "CMSIndex.aspx";
    } else {
        if (PageParams.FromIndex == "my") {
            window.location.href = "NewsCollectList.aspx";
        }
        else if (PageParams.FromIndex == "index") {
            window.location.href = "CMSIndex.aspx";
        }
        else if (PageParams.FromIndex == "main") {
            window.location.href = "MainPage.aspx";
        }
        else if (PageParams.FromIndex == "club") {
            window.location.href = "ElephantClub.aspx";
        }
        else if (PageParams.FromIndex == "live") {
            window.location.href = "LiveNews.aspx";
        }
        else {
            window.location.href = "CMSIndex.aspx";
        }
    }
}

//查阅统计
function fnAddCensus() {
    if (!SilverSoft.Robot.IsNullOrWhiteSpace(PageParams.FromNewsShareCommentID)) {
        var param = new SilverSoft.Param("CiticsfFinance.NewsShareComment.AddDownloadCensus");
        param.Model.NewsArticleInfoID = PageParams.NewsArticleInfoID;
        param.Model.DeviceCode = tokenValue;//web端读取设备浏览器cookie唯一值，客户端获取设备唯一码
        param.Model.ApplicationType = 3;//web端
        param.Model.Operate = 1;//具体操作【1-查看、2-下载、3-转发、4-分享】
        //param.Model.OperateDetail = null;//web端查看不需要该项
        param.Model.FromNewsShareCommentID = PageParams.FromNewsShareCommentID;
        var box = SilverSoft.Robot.Call(param);
    }
}

/*
*	方法：获取资讯详情 add by zdl 20150812
*/
function fnGetArticleContents() {
    var param = new SilverSoft.Param("CiticsfFinance.NewsChannelBll.GetNewsArticleContentsWeb", null, "#NewsInfo");
    param.Model.NewsArticleInfoID = PageParams.NewsArticleInfoID;
    param.Model.IsEnabled = 1;
    SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Data.length > 0) {
            window.document.title = box.Data[0].ArticleTitle;
            $("#keywords").attr("content", box.Data[0].ChannelName);
            $("#description").attr("content", box.Data[0].Brief);

            //----------------------徐飞----update:2016-06-29----------
            $(box.Data).each(function () {
                if (SilverSoft.Robot.IsNullOrWhiteSpace(this.NewsSourceID)) {
                    this.SourceName = this.PPIsource;
                }
            });
            //$("#ChannelName").html(SilverSoft.Robot.HTMLEncode(box.Data[0].ChannelName));
            $("#div_Contents").html(box.Data[0].Contents);

            //暂时注掉二维码，以后可能打开  xufei  2016-01-28
            //if (!SilverSoft.Robot.IsNullOrWhiteSpace(box.Data[0].QRCodeImgUrl)) {
            //    $("#qrcode").show();
            //    $("#span_QRCode").html("<img style='width:150px;height:150px;' src='../Handler/FileSvc/Image.ashx?str=" + box.Data[0].QRCodeImgUrl + "'/>");//二维码
            //}
            $("#reviewCount").val(SilverSoft.Robot.HTMLEncode(box.Data[0].ReviewNo + "评"));
            if (!SilverSoft.Robot.IsNullOrWhiteSpace(box.Data[0].NewsChannelInfoID)) {
                if (box.Data[0].NewsChannelInfoID.toUpperCase() == "CE22B39A-0847-4C30-8767-4FC1FBC5677D")//今日快讯
                {
                    $("#div_boyi").show();
                    var voteHtml = fnVoteValue(box.Data[0].MoreNumber, box.Data[0].BadNumber, false);//算出利多利空权重比例
                    $("#VoteHtml").html(voteHtml);
                }
            }
            if (PageParams.QRCodeID == null || PageParams.QRCodeID == "") {//add by zdl 20151026
                PageParams.QRCodeID = box.Data[0].QRCodeID;
            }
            box.Data[0].SaveTime = DateDiff(box.Data[0].SaveTime);

            box.Bind();

            if (box.Data[0].IsSurvey == "1") {
                $("#question_div").show();//启用问卷调查
                var param = new SilverSoft.Param("CiticsfFinance.QuestionManage.QueryByNewsArticleInfoID");
                param.NewsArticleInfoID = PageParams.NewsArticleInfoID;
                param.Model.IsEnabled = 1;
                param.Select("QuestionnaireInfo_QuestionnaireInfoID,QuestionnaireInfo_SubjectTitle");
                SilverSoft.Robot.CallAsync(param, function (box) {
                    if (box.RowCount > 0) {
                        $("#SubjectTitle").html(box.Data[0].QuestionnaireInfo_SubjectTitle);
                        GetQuestionList(box.Data[0].QuestionnaireInfo_QuestionnaireInfoID);//绑定问卷试题和选项                        
                    }
                });
            }

            window.WxShareData.gz_desc = box.Data[0].Brief;
            window.WxShareData.gz_imgUrl = box.Data[0].CoverImg != "" ? domainName + "CiticsfFinance/Handler/FileSvc/Image.ashx?str=" + box.Data[0].CoverImg : "../Images/nopic_cover.png";
        }
    });
}


//绑定所有问卷试题和选项
function GetQuestionList(QuestionnaireInfoID) {
    var strHtml = "";
    if (!SilverSoft.Robot.IsNullOrWhiteSpace(QuestionnaireInfoID)) {
        PageParams.QuestionnaireInfoID = QuestionnaireInfoID;//取问卷主题ID
        var boxQuestionTitle = GetQuestionTitleList(QuestionnaireInfoID);//获取题目列表        
        if (boxQuestionTitle != null && boxQuestionTitle.RowCount > 0) {
            for (var i = 0; i < boxQuestionTitle.RowCount; i++) {
                var type = "";
                if (boxQuestionTitle.Data[i].QuestionType == "0") type = "（单选）";
                else if (boxQuestionTitle.Data[i].QuestionType == "1") type = "（多选）";
                else if (boxQuestionTitle.Data[i].QuestionType == "2") type = "（问答）";
                else type = "";
                strHtml += "<div lang = 'question' qtype='" + boxQuestionTitle.Data[i].QuestionType + "' id=" + boxQuestionTitle.Data[i].QuestionTitleInfoID + " class=\"maxtop\">";
                strHtml += "<div class=\"title\">" + boxQuestionTitle.Data[i].RowNum + ". " + boxQuestionTitle.Data[i].TitleDesc + type + "</div>";
                strHtml += "<div style=\"text-indent: 5px;\">";
                strHtml += "<div id = 'tip_" + boxQuestionTitle.Data[i].QuestionTitleInfoID + "' class='tip_red'></div>";
                strHtml += GetStrSelectHtml(boxQuestionTitle.Data[i].QuestionTitleInfoID, boxQuestionTitle.Data[i].QuestionType);
                strHtml += "</div>";
                strHtml += "</div>";
            }
            $("#question_box").append(strHtml);
        }
    } else {
        $("#div_NoQuestion").show();
    }
}


//获取题目列表
function GetQuestionTitleList(QuestionnaireInfoID) {
    var param = new SilverSoft.Param("CiticsfFinance.QuestionManage.GetQuestionTitleList");
    param.Model.QuestionnaireInfoID = QuestionnaireInfoID;
    param.Select("QuestionTitleInfoID,TitleDesc,QuestionType,QuestionnaireInfoID,IsEnabled,RowNum");
    var box = SilverSoft.Robot.Call(param)
    return box;
}

//绑定选项列表   QuestionType:【1-单选、2-多选、3-问答】
function GetStrSelectHtml(QuestionTitleInfoID, QuestionType) {
    var strHtml = "";
    if (!SilverSoft.Robot.IsNullOrWhiteSpace(QuestionTitleInfoID)) {
        var boxSelect = GetQuestionDetailList(QuestionTitleInfoID);//获取选项列表
        if (boxSelect != null && boxSelect.RowCount > 0) {
            for (var i = 0; i < boxSelect.RowCount; i++) {
                if (QuestionType == "0" && boxSelect.Data[i].IsOther == "0") {
                    strHtml += "<div class=\"icheckbox_div\">";
                    strHtml += "<span class=\"jqRadioWrapper\">";
                    strHtml += "<input name='radio_" + QuestionTitleInfoID + "' value=" + boxSelect.Data[i].QuestionDetailInfoID + "  type=\"radio\" /></span><label>" + boxSelect.Data[i].QuestionDesc + "</label>";
                    strHtml += "</div>";
                } else if (QuestionType == "0" && boxSelect.Data[i].IsOther == "1") {
                    strHtml += "<div class=\"icheckbox_div\">";
                    strHtml += "<span class=\"jqRadioWrapper\">";
                    strHtml += "<input name='radio_" + QuestionTitleInfoID + "' value=" + boxSelect.Data[i].QuestionDetailInfoID + " type=\"radio\" /></span><label>" + boxSelect.Data[i].QuestionDesc + "</label>";
                    strHtml += "<input id='text_" + QuestionTitleInfoID + "' type=\"text\" class=\"input-text\" style='vertical-align:middle;'/>";
                    strHtml += "</div>";
                } else if (QuestionType == "1" && boxSelect.Data[i].IsOther == "0") {
                    strHtml += "<div class=\"icheckbox_div\">";
                    strHtml += "<span class=\"jqCheckboxWrapper\">";
                    strHtml += "<input  name='check_" + QuestionTitleInfoID + "' value=" + boxSelect.Data[i].QuestionDetailInfoID + " type=\"checkbox\" /></span><label>" + boxSelect.Data[i].QuestionDesc + "</label>";
                    strHtml += "</div>";
                } else if (QuestionType == "1" && boxSelect.Data[i].IsOther == "1") {
                    strHtml += "<div class=\"icheckbox_div\">";
                    strHtml += "<span class=\"jqCheckboxWrapper\">";
                    strHtml += "<input name='check_" + QuestionTitleInfoID + "' value=" + boxSelect.Data[i].QuestionDetailInfoID + " type=\"checkbox\" /></span><label>" + boxSelect.Data[i].QuestionDesc + "</label>";
                    strHtml += "<input id='text_" + QuestionTitleInfoID + "' type=\"text\" class=\"input-text\" style='vertical-align:middle;'/>";
                    strHtml += "</div>";
                }
                else {
                    strHtml += "<span id=" + boxSelect.Data[i].QuestionDetailInfoID + " style=\"display: inline-block; vertical-align: middle;\">";
                    strHtml += "<textarea rows=\"1\" style=\"height: 25px; line-height: 25px; width: 270px;\" cols=\"40\" class=\"input-textarea\"></textarea>";
                    strHtml += "</span>";
                }
            }
        }
    }
    return strHtml;
}


//获取选项列表
function GetQuestionDetailList(QuestionTitleInfoID) {
    var param = new SilverSoft.Param("CiticsfFinance.QuestionManage.GetQuestionDetail");
    param.Model.QuestionTitleInfoID = QuestionTitleInfoID;
    param.Select("QuestionDetailInfoID,QuestionNo,QuestionDesc,QuestionTitleInfoID,IsAnswer,IsEnabled,IsOther");
    var box = SilverSoft.Robot.Call(param)
    return box;
}


//保存问卷答案
function fnQuestionSubmit() {
    var arrAnswers = new Array();//答案集合    
    var flag = true;
    $("#question_box div[lang = 'question']").each(function () {
        var id = $(this).attr("id");
        if ($(this).attr("qtype") == "0") {//单选            
            if ($('input:radio[name="radio_' + id + '"]').is(":checked")) {
                $("#tip_" + id).html("");//去掉提示
                var obj = new Object();
                obj.QuestionTitleInfoID = id;
                obj.QuestionDetailInfoID = $('input:radio[name="radio_' + id + '"]:checked').val();
                if ($("#text_" + id).val() != undefined) {
                    obj.OtherAnswer = $("#text_" + id).val();
                }
                arrAnswers.push(obj);
            }
            else {
                $("#tip_" + id).html("请选择一个选项");
                flag = false;
                return flag;
            }
        }
        else if ($(this).attr("qtype") == "1") {//多选    
            var checkList = $(this).find("input[type='checkbox']");
            if (checkList.length > 0) {
                var m = 0;
                for (var i = 0; i < checkList.length; i++) {
                    var obj = new Object();
                    if (checkList[i].checked) {
                        m++;
                        obj.QuestionTitleInfoID = id;
                        obj.QuestionDetailInfoID = $(checkList[i]).attr('value');
                        //多选的其他先暂时不加
                        arrAnswers.push(obj);
                    }
                }
            }
            if (m > 0) {
                $("#tip_" + id).html("");//去掉提示               
            }
            else {
                $("#tip_" + id).html("请选择选项");
                flag = false;
                $("#tip_" + id).focus();
                return flag;
            }
        }
        else if ($(this).attr("qtype") == "2") {//问答
            if (!SilverSoft.Robot.IsNullOrWhiteSpace($(this).find("textarea").val())) {
                $("#tip_" + id).html("");//去掉提示
                var obj = new Object();
                obj.QuestionTitleInfoID = id;
                obj.QuestionDetailInfoID = $(this).find('span').attr("id");
                obj.OtherAnswer = $(this).find("textarea").val();
                arrAnswers.push(obj);
            }
            else {
                $("#tip_" + id).html("请输入内容");
                flag = false;
                return flag;
            }
        }
    });
    if (flag == true) {
        $("#tip_submit").html("");
        var param = new SilverSoft.Param("CiticsfFinance.QuestionManage.SaveAnswer");
        param.Expand.ExtraString001 = JSON.stringify(arrAnswers);
        param.Expand.Expand.ExtraGuid001 = PageParams.QuestionnaireInfoID;
        var box = SilverSoft.Robot.Call(param);
        if (box.Success) {
            alert("您已完成本次问卷，感谢您的帮助与参与!");
        }
    }
    else {
        $("#tip_submit").html("请确保所有内容填写完整");
    }
}



function fnVote(mark) {
    var param = new SilverSoft.Param("CiticsfFinance.VoteLog.Save");
    param.Model.NewsArticleInfoID = PageParams.NewsArticleInfoID;
    param.Model.VoteCode = mark;
    param.Model.IsEnabled = 1;
    SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            fnGetArticleContents();
        }
    });
}


/// 跳转页面
function turnTo(url) {
    window.location.href = url;
}

/*
*	方法：下载APP add by zdl 20151026
*/
function fnDownApp() {
    var url = "../AppUpload.aspx?QRCodeID=" + PageParams.QRCodeID;
    $("#aDownApp,#aDownApp1").attr("href", url);

}


function fnGetArticleReview() {
    var param = new SilverSoft.Param("CiticsfFinance.NewsArticleReview.GetAllReview", null, "#reviewList");
    param.Model.IsEnabled = 1;
    param.Model.NewsArticleInfoID = PageParams.NewsArticleInfoID;
    param.AndSelect("FinanceUserInfoID,NewNewsArticleReview_FinanceUserInfoID,NewFinanceUserInfo_NickName,FromReviewID,NewNewsArticleReview_ReviewContents,AddIP");
    SilverSoft.Robot.CallAsync(param, function (box) {
        var rowCount = box.RowCount;
        if (rowCount > 0) {
            $("#reviewCount").html("最新评论(" + rowCount + ")");
        }
        else {
            $("#reviewCount").html("点赞是成功者的习惯，分享是智慧者的语言!").css("color", "gray");
        }
        $(box.Data).each(function () {
            if (SilverSoft.Robot.IsNullOrWhiteSpace(this.FinanceUserInfo_NickName)) {
                this.FinanceUserInfo_NickName = "游客";
                this.FinanceUserInfo_AvatarUrl = "../Images/head.jpg";
            }
            if (SilverSoft.Robot.IsNullOrWhiteSpace(this.NewNewsArticleReview_FinanceUserInfoID)) {
                this.NewFinanceUserInfo_NickName = "游客";
                this.FinanceUserInfo_AvatarUrl = "../Images/head.jpg";
            }
            if (SilverSoft.Robot.IsNullOrWhiteSpace(this.FinanceUserInfo_AvatarUrl)) {
                this.FinanceUserInfo_AvatarUrl = "../Images/head.jpg";
            }
            if (SilverSoft.Robot.IsNullOrWhiteSpace(this.Location)) {
                this.Location = "未知地区";
            }
            if (this.ReviewTime) {
                this.ReviewTime = DateDiff(this.ReviewTime);
            }
            if (this.FromReviewID) {
                this.ReviewContents = SilverSoft.Robot.HTMLEncode(this.ReviewContents) + "&nbsp;&nbsp;||&nbsp;&nbsp;" + "<span style='color:#0065a2;'>" + this.NewFinanceUserInfo_NickName + "：</span><span style='color:gray;'>" + SilverSoft.Robot.HTMLEncode(this.NewNewsArticleReview_ReviewContents) + "</span>";
            }
        });
        box.Bind();
    });
}
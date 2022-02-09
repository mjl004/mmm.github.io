var QuestionnaireInfoID = "";


$(document).ready(function () {
    // QuestionnaireInfoID = getUrlParam("QuestionnaireInfoID");
    QuestionnaireInfoID = "E4E79885-EC86-408B-9A70-AD99E55B33E3";
    if (QuestionnaireInfoID == null || QuestionnaireInfoID == "undefined" || QuestionnaireInfoID == "") {
        QuestionnaireInfoID = "";
    }
    GetQuestionnaireInfo();
    GetQuestionList();
    $("#btn_submit").click(function () {
        SaveAnswer();
    });
});

function GetQuestionnaireInfo() {
    if (QuestionnaireInfoID.length == 36) {
        var param = new SilverSoft.Param("CiticsfFinance.QuestionManage.GetQuestionnaireList");
        param.Model.QuestionnaireInfoID = QuestionnaireInfoID;
        param.Select("QuestionnaireInfoID,HasShowTitle,SubjectTitle,EndTime,Descripiton,OverThanks");
        var box = SilverSoft.Robot.Call(param)
        $("#lbl_Title").html(box.Data[0].SubjectTitle);
        $("#lbl_description").html(box.Data[0].Descripiton);
        //$("#lbl_OverThanks").html(box.Data[0].OverThanks);
    }
}
//获取所有试题HTML刷新到页面上去
function GetQuestionList() {
    var strHtml = "";
    if (QuestionnaireInfoID.length == 36) {
        var boxQuestionTitle = GetQuestionTitleList();
        if (boxQuestionTitle != "undefined") {
            if (boxQuestionTitle.RowCount > 0) {
                $("#div_QuestionDetailPage").html("");
                $("#NoQuestion").hide();
                strHtml = "<ul id=\"ul_" + QuestionnaireInfoID + "\">";
                for (var i = 0; i < boxQuestionTitle.RowCount; i++) {
                    strHtml += "<li id=\"" + boxQuestionTitle.Data[i].QuestionTitleInfoID + "\">";
                    strHtml += "<span id=\"questiontype\" style=\"display:none\">" + boxQuestionTitle.Data[i].QuestionType + "</span>"
                    strHtml += "<table class=\"input-table\" style=\"text-align: left; width: 100%\">";
                    strHtml += "<tr style=\"background-color: #EFEFEF\">";
                    strHtml += "<td colspan=\"2\">";
                    strHtml += "Q" + (i + 1) + ". " + boxQuestionTitle.Data[i].TitleDesc
                    strHtml += "</td>";
                    strHtml += "</tr>";
                    strHtml += GetStrSelectHtml(boxQuestionTitle.Data[i].QuestionTitleInfoID, boxQuestionTitle.Data[i].QuestionType);
                    strHtml += "</table>";
                    strHtml += "</li>";
                }
                strHtml += "</ul>";
                $("#div_QuestionDetailPage").append(strHtml);
            }
        } else {
            $("#div_NoQuestion").show();
        }
    } else {
        $("#div_NoQuestion").show();
    }
}
function GetStrSelectHtml(QuestionTitleInfoID, QuestionType) {
    var strHtml = "";
    var boxSelect = GetQuestionDetailList(QuestionTitleInfoID);
    if (boxSelect != "undefined") {
        if (boxSelect.RowCount > 0) {
            strHtml = " <tr><td colspan=\"2\">";
            for (var i = 0; i < boxSelect.RowCount; i++) {
                if (QuestionType == "0" && boxSelect.Data[i].IsOther == "0") {
                    strHtml += "<input type=\"radio\" style=\"margin-right:10px\" name=\"rd_" + boxSelect.Data[i].QuestionTitleInfoID + "\" value=\"" + boxSelect.Data[i].QuestionDetailInfoID + "\">" + boxSelect.Data[i].QuestionDesc + " <input type=\"hidden\" id=\"hid_" + boxSelect.Data[i].QuestionDetailInfoID + "\" value=\"" + boxSelect.Data[i].IsOther + "\"/><br/>";
                } else if (QuestionType == "0" && boxSelect.Data[i].IsOther == "1") {
                    strHtml += "<input type=\"radio\" style=\"margin-right:10px\" name=\"rd_" + boxSelect.Data[i].QuestionTitleInfoID + "\" value=\"" + boxSelect.Data[i].QuestionDetailInfoID + "\">" + boxSelect.Data[i].QuestionDesc + "<input type=\"text\" class=\"input-text\"><br/>";
                } if (QuestionType == "1" && boxSelect.Data[i].IsOther == "0") {
                    strHtml += "<input type=\"checkbox\" style=\"margin-right:10px\" name=\"ck_" + boxSelect.Data[i].QuestionTitleInfoID + "\" value=\"" + boxSelect.Data[i].QuestionDetailInfoID + "\">" + boxSelect.Data[i].QuestionDesc + "<br/>";
                } if (QuestionType == "1" && boxSelect.Data[i].IsOther == "1") {
                    strHtml += "<input type=\"checkbox\" style=\"margin-right:10px\" name=\"ck_" + boxSelect.Data[i].QuestionTitleInfoID + "\" value=\"" + boxSelect.Data[i].QuestionDetailInfoID + "\">" + boxSelect.Data[i].QuestionDesc + "<input type=\"text\" class=\"input-text\"><br/>";
                }
            }
            strHtml += " </td></tr>";
        }
    }
    return strHtml;
}
function GetQuestionTitleList() {
    if (QuestionnaireInfoID.length == 36) {
        var param = new SilverSoft.Param("CiticsfFinance.QuestionManage.GetQuestionTitleList");
        param.Model.QuestionnaireInfoID = QuestionnaireInfoID;
        param.Select("QuestionTitleInfoID,TitleDesc,QuestionType,QuestionnaireInfoID,IsEnabled");
        var box = SilverSoft.Robot.Call(param)
        return box;
    }
}

function GetQuestionDetailList(QuestionTitleInfoID) {
    if (QuestionTitleInfoID.length == 36) {
        var param = new SilverSoft.Param("CiticsfFinance.QuestionManage.GetQuestionDetail");
        param.Model.QuestionTitleInfoID = QuestionTitleInfoID;
        param.Select("QuestionDetailInfoID,QuestionNo,QuestionDesc,QuestionTitleInfoID,IsAnswer,IsEnabled,IsOther");
        var box = SilverSoft.Robot.Call(param)
        return box;
    }
}
//保存问卷调查
function SaveAnswer() {
    if (QuestionnaireInfoID.length == 36) {
        IsSelected();



    } else {
        alert("获取信息出错");
        return;
    }

}
//判断是否全部答题完毕
function IsSelected() {
    var oul = $("#ul_" + QuestionnaireInfoID);
    var oli = oul.children();
    oli.each(function (index) {
        var strSelect = "";
        var TitleID = $(this).attr("id");
        //单选
        if ($(this).find("#questiontype").html()  == "0") {
             strSelect = $(this).find("input:radio[name=rd_" + TitleID + "]:checked").val();
        } else if ($(this).find("#questiontype").html() == "1") {
            var ckobj;
            ckobj = $(this).find("input[name=ck_" + TitleID + "]:checked");
            ckobj.each(function () {
                strSelect += $(this).val() + "|";
            });
        }
        if (strSelect == undefined || strSelect=="") {
            alert("问题" + (index+1) + "还没有回答.");
            return false;
        }
    });
}

var strProtocols = "C63A021A-4853-4543-92CB-0CE5537F2DF9,5859B41A-8BA5-4AC4-B660-30A8EBEA1228";
var PositiveIDPicFlag = false;
var NegativeIDPicFlag = false;
var SignIDPicFlag = false;
var IsBottom = false;
SilverSoft.Robot.Ready(function () {
    var nScrollHight = 0; //滚动距离总长(注意不是滚动条的长度)
    var nScrollTop = 0;   //滚动到的当前位置
    var nDivHight = $("#div_content").height();
    bindPortotol();
    $("#div_content").scroll(function () {
        nScrollHight = $(this)[0].scrollHeight;
        nScrollTop = $(this)[0].scrollTop;
        if (nScrollTop + nDivHight >= nScrollHight) {
            IsBottom = true;
        } else {
            IsBottom = false;
        }
    });
    $("#btn_SaveProtocolAndNext").click(function () {
        if ($("#chk_agree").attr("checked") != "checked") {
            alert("请阅读并接受以上所有协议和业务规则内容");
            return;
        } else {
            Saveprotocal();
            ShowImgInfo();
        }
    });
    $("#btn_ShowUserInfo").click(function () {
        if (!PositiveIDPicFlag) {
            alert("请上传身份证正面照！")
            return false;
        }
        if (!NegativeIDPicFlag) {
            alert("请上传身份证反面照！")
            return false;
        }
        if (!SignIDPicFlag) {
            alert("请上传手写签名照！")
            return false;
        }
        ShowBaseInfo();
    });
    $("#btn_ShowTest").click(function () {

    });
    $("#chk_agree").click(function () {
        if ($("#chk_agree").attr("checked") == "checked" && IsBottom == false) {
            alert("请移动滚动条到底部阅读完相关协议");
            $("#chk_agree").attr("checked", false);
        }
    });
    //上传身份证正面照片
    new swfUploadFinanceImage("span_PositiveIDPicUrl"
			    , "div_PositiveIDPicUrl"
			    , '<span class="button">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点击上传 <span class="buttonSmall"></span></span>'
			    , "1 MB"
			    , "*.gif;*.GIF;*.jpg;*.JPG;*.jpeg;*.JPEG;*.bmp;*.BMP"
			    , "图片格式"
                , callbackPositiveIDPicUrl);

    new swfUploadFinanceImage("span_NegativeIDPicUrl"
            , "div_NegativeIDPicUrl"
            , '<span class="button">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点击上传 <span class="buttonSmall"></span></span>'
            , "1 MB"
            , "*.gif;*.GIF;*.jpg;*.JPG;*.jpeg;*.JPEG;*.bmp;*.BMP"
            , "图片格式"
            , callbackNegativeIDPicUrl);

    new swfUploadFinanceImage("span_SignIDPicUrl"
            , "div_SignIDPicUrl"
            , '<span class="button">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点击上传 <span class="buttonSmall"></span></span>'
            , "1 MB"
            , "*.gif;*.GIF;*.jpg;*.JPG;*.jpeg;*.JPEG;*.bmp;*.BMP"
            , "图片格式"
            , callbackSignIDPicUrl);
});
//上传身份证正面照成功后的事件
function callbackPositiveIDPicUrl() {
    url = arguments[1];
    var param = new SilverSoft.Param("CiticsfFinance.AccountManage.getImagePath");
    param.ImageUrl = url;
    param.Width = "200";
    param.Height = "140";
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        avatarUrl = box.Message;
        PositiveIDPicFlag = true;
        $("#img_PositiveIDPic").attr("src", box.Message);
    });

}
//上传身份证反面照成功后的事件
function callbackNegativeIDPicUrl() {
    url = arguments[1];
    var param = new SilverSoft.Param("CiticsfFinance.AccountManage.getImagePath");
    param.ImageUrl = url;
    param.Width = "200";
    param.Height = "140";
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        NegativeIDPicFlag = true;
        avatarUrl = box.Message;
        $("#img_NegativeIDPic").attr("src", box.Message);

    });
}
//上传手写签名成功后的事件
function callbackSignIDPicUrl() {
    url = arguments[1];
    var param = new SilverSoft.Param("CiticsfFinance.AccountManage.getImagePath");
    param.ImageUrl = url;
    param.Width = "200";
    param.Height = "140";
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        avatarUrl = box.Message;
        SignIDPicFlag = true;
        $("#img_SignIDPic").attr("src", box.Message);
    });
}
//保存签署的协议
function Saveprotocal() {
   
    var param = new SilverSoft.Param("CiticsfFinance.AccountManage.SaveUserProtocol");
    param.strProtocols = strProtocols;
    var box = SilverSoft.Robot.Call(param);
    if (box.Success) {
        alert("签署成功")
    }
}
//显示身份证照片上传
function ShowImgInfo() {
    $("#protocalInfo").hide();
    $("#CardImgInfo").show();
    $("#UserBaseInfo").hide();
}
function ShowBaseInfo() {
    $("#protocalInfo").hide();
    $("#CardImgInfo").hide();
    $("#UserBaseInfo").show();
}

//绑定需要签署的协议
function bindPortotol() {
    var param = new SilverSoft.Param("CiticsfFinance.AccountManage.GetProtocol");
    param.Model.ProtocolType = 1;
    param.Model.IsVisable = 1;
    var box = SilverSoft.Robot.Call(param);
    var strHtml = "";
    if (box.RowCount > 0) {
        for (var i = 0; i < box.RowCount; i++) {

            strHtml += box.Data[i].Content;
        }
    }
    $("#lbl_content").html(strHtml);
    if ($("#div_content").height() > $("#pre2").height()) {
        IsBottom = true;
    }
    else {
        IsBottom = false;
    }


}
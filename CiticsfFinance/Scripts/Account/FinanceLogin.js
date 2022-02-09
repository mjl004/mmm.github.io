

$(function () {
    var brow = $.browser;
    var bInfo = "";
    if (brow.msie) { bInfo = "Microsoft Internet Explorer " + brow.version; }
    if (brow.mozilla) { bInfo = "Mozilla Firefox " + brow.version; }
    if (brow.safari) { bInfo = "Apple Safari " + brow.version; }
    if (brow.opera) { bInfo = "Opera " + brow.version; }

    //页面加载时从COOKIE中读取员工账号和密码
    if (cookie.GET("FinanceUsername")) {
        $("#txt_LoginName").val(cookie.GET("FinanceUsername"));
    }
    if (cookie.GET("FinancePassWord")) {
        $("#txt_Password").val(cookie.GET("FinancePassWord"));
        $("#chb_Remember").attr("checked", true);
        //$("input[type='checkbox']").attr("checked", true).checkboxradio("refresh");
    }

    //账号密码登录
    $("#btn_login01").click(function () {
        var param = new SilverSoft.Param("CiticsfFinance.AccountManage.FinanceLogin");
        //param.loadingButtonID = "btn_login"
        var UserName = $("#txt_LoginName").val();
        var PassWord = $("#txt_Password").val();
        if (SilverSoft.Robot.IsNullOrWhiteSpace(UserName)) {
            $.alert("请输入手机号码！", "登录提示");
            return;
        }
        if (SilverSoft.Robot.IsNullOrWhiteSpace(PassWord)) {
            $.alert("请输入密码！", "登录提示");
            return;
        }        
        param.Model.UserName = encryptByDES(UserName);
        param.Model.PassWord = encryptByDES(PassWord);
        SilverSoft.Robot.CallAsync(param, function (box) {
            if (box.RowCount > 0) {
                var oldUserName = cookie.GET("FinanceUsername");
                cookie.SET("FinanceUsername", UserName, 30, 1);
                if ($("#chb_Remember").attr("checked") == "checked") {
                    if (oldUserName == UserName) {
                        cookie.SET("FinancePassWord", PassWord, 30, 1);//不管密码保存没保存，再保存，永久保存的意思。
                    }
                    else {
                        cookie.SET("FinancePassWord", PassWord, 7, 1);
                    }
                }
                else {
                    cookie.DELETE("FinancePassWord");
                }

                location.href = "../User/MeIndex.aspx";
                //选择身份登录
                //var paramCorrelationAccount = new SilverSoft.Param("CiticsfFinance.AccountManage.GetCorrelationAccount", null, "#radio_Select");
                //SilverSoft.Robot.CallAsync(paramCorrelationAccount, function (boxCorrelationAccount) {
                //    if (boxCorrelationAccount.RowCount > 1) {
                //        $(boxCorrelationAccount.Data).each(function () {
                //            if (this.IsSelf == 1) {
                //                this.Show_AccountCategory = '<input type="radio" class="weui_check" name="radio_AccountType" value="' + this.AccountCategory + '" checked="checked" />';
                //            } else {
                //                this.Show_AccountCategory = '<input type="radio" class="weui_check" name="radio_AccountType" value="' + this.AccountCategory + '"/>';
                //            }
                //        });
                //        boxCorrelationAccount.Bind();
                //        $("#div_CorrelationAccount").show();
                //    } else {
                //        location.href = "../User/MeIndex.aspx";
                //    }
                //});
            }
            else {
                $.alert(box.Error, "登录提示");
                return false;
            }
            return false;
        });
    });

    //动态密码登录
    $("#btn_login02").click(function () {
        var param = new SilverSoft.Param("CiticsfFinance.AccountManage.LoginByCode");
        param.Model.Phone = $("#txt_Phone2").val();
        if (SilverSoft.Robot.IsNullOrWhiteSpace(param.Model.Phone)) {
            $.alert("请输入手机号码！", "登录提示");
            return;
        }
        param.Expand.ExtraString001 = $("#txt_ValidateCode").val();
        if (SilverSoft.Robot.IsNullOrWhiteSpace(param.Expand.ExtraString001)) {
            $.alert("请输入动态密码！", "登录提示");
            return;
        }
        param.Model.Phone = encryptByDES(param.Model.Phone);
        param.Expand.ExtraString001 = encryptByDES(param.Expand.ExtraString001);
        SilverSoft.Robot.CallAsync(param, function (box) {
            if (box.RowCount > 0) {
                location.href = "../User/MeIndex.aspx";
            }
            else {
                $.alert(box.Error, "登录提示");
                return false;
            }
        });
    });

    //获取动态密码
    $("#btn_ValidateCode").click(function () {
        var param = new SilverSoft.Param('../AppHandler/Common/SendCode.ashx');
        param.RobotKey = "4F29E1B5-555F-47CE-9DAE-8481916CBAA5";
        var input_Phone = $("#txt_Phone2").val();
        if (SilverSoft.Robot.IsNullOrWhiteSpace(input_Phone)) {
            $.alert("请输入手机号码！");
            return false;
        }
        if (!CheckNum(input_Phone)) {
            $.alert("请输入正确的手机号码！");
            return false;
        }
        var Parms = new Object();
        Parms['Moblie'] = input_Phone
        Parms['ValidateType'] = 7;
        param.inputbody = encryptByDES(ToJsonStr(Parms));
        settime();//倒计时60秒
        SilverSoft.Robot.CallAsync(param, function (box) {
            if (box.ErrorCode != 0) {
                $.alert(box.Error);
                return false;
            }
        });
    });

    $("#weixinLogin").click(function () {
        //在微信内打开页面
        if (isWeiXin()) {
            location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + WxAppID + "&redirect_uri=" + WxWeb + "Weixin/OAuth/WXTokenProcess.aspx?reurl=" + reurl + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
        }
        else {
            $.alert("请在微信客户端打开链接！", "温馨提醒");
        }
    });

    $("#confirm_Ok").click(function () {
        var checkValue = $('input:radio[name=radio_AccountType]:checked').val();
        if (!SilverSoft.Robot.IsNullOrWhiteSpace(checkValue)) {
            var param = new SilverSoft.Param("CiticsfFinance.AccountManage.AccountAutoLogin");
            param.AccountCategory = checkValue;
            var box = SilverSoft.Robot.Call(param);
            if (box.RowCount > 0) {
                $("#div_CorrelationAccount").hide();
                location.href = "../User/MeIndex.aspx";
            }
            else {
                $.alert(box.Error, "提醒");
            }
        }
        else {
            $.alert("数据异常！", "提醒");
        }
    });

    $("#confirm_Cancel").click(function () {
        $("#div_CorrelationAccount").hide();
        location.href = "../User/MeIndex.aspx";
    });
});

//是否在微信中打开
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
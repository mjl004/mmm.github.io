
$(function () {
    $("#btn_OK").click(function () {
        if ($('#chb_CheckRead').attr('checked')) {
            if ($("#txt_UserName").val() == "") {
                WeUI.Alter("请输入手机号码！");
                return false;
            }
            if (!$("#txt_UserName").val().match(/^0?(13[0-9]|15[012356789]|18[0-9]|14[57]|170)[0-9]{8}$/)) {
                WeUI.Alter("请输入正确的手机号！");
                return false;
            }
            if ($("#txt_Password").val() == "") {
                WeUI.Alter("请输入密码！");
                return false;
            }
            var regex = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z]).{6,16}');
            if (regex.test($("#txt_Password").val()) == false) {
                WeUI.Alter("密码要求至少6位,且同时包含数字和字母！");
                return;
            }
            if ($("#txt_ConfirmPWD").val() == "") {
                WeUI.Alter("请输入确认密码！");
                return false;
            }
            if ($("#txt_Password").val() != $("#txt_ConfirmPWD").val()) {
                WeUI.Alter("两次密码输入不一致,请重新输入！");
                return false;
            }
            var param = new SilverSoft.Param("CiticsfFinance.AccountManage.CheckByUserName");
            param.Model.UserName = $("#txt_UserName").val();
            var box = SilverSoft.Robot.Call(param);
            if (box.RowCount > 0) {
                WeUI.Alter("注册的手机号已存在！");
                return false;
            }

            var param = new SilverSoft.Param("CiticsfFinance.AccountManage.AddNewFinanceUser");
            param.Model.UserName = $("#txt_UserName").val();
            param.Model.Phone = param.Model.UserName;
            param.Model.PassWord = $("#txt_Password").val();
            param.Model.Flatfrom = 1;//不是第三方登录的用户,新增用户类型为1；
            param.Model.RegisteUserCategory = 1;//手动注册
            SilverSoft.Robot.CallAsync(param, function (box) {
                if (box.Success) {
                    location.href = "../User/MeIndex.aspx";
                } else {
                    WeUI.Alter(box.Error);
                    return false;
                }
            });
        }
        else {
            WeUI.Alter("请先阅读并同意《免责申明》，才可以注册账户哦！");
        }
    });
});

//返回页面
function fnReturnUrl() {
    window.location.href = "FinanceLogin.aspx";
}


/*****************************************************
简单实用的jQuery提示框美化插件(支持alert、confirm和toast)
版本：V1.0
开发：
******************************************************/
var xr_alert_bg = 0.3;                         //页面背景遮挡层的透明度
var xr_alert_bgcolor = "#000000";              //页面背景遮挡层的颜色
var xr_alert_box_bgcolor = "#ffffff";          //alert弹出框颜色
var xr_alert_title_color = "#333333";          //alert标题颜色
var xr_alert_titleline_color = "#3475f5";      //alert标题下分隔线颜色
var xr_alert_message_color = "#333333";        //alert提示信息颜色
var xr_alert_btn_color = "#ffffff";            //alert按钮字体颜色
var xr_alert_btn_bgcolor = "#3475f5";          //alert按钮背景颜色
var xr_confirm_bg = 0.3;                       //页面背景遮挡层的透明度
var xr_confirm_bgcolor = "#000000";            //页面背景遮挡层的颜色
var xr_confirm_box_bgcolor = "#ffffff";        //confirm弹出框颜色
var xr_confirm_title_color = "#333333";        //confirm标题颜色
var xr_confirm_titleline_color = "#3475f5";    //confirm标题下分隔线颜色
var xr_confirm_message_color = "#333333";      //confirm提示信息颜色
var xr_confirm_okbtn_color = "#ffffff";        //confirm确定按钮字体颜色
var xr_confirm_okbtn_bgcolor = "#3475f5";      //confirm确定按钮背景颜色
var xr_confirm_cancelbtn_color = "#333333";    //confirm取消按钮字体颜色
var xr_confirm_cancelbtn_bgcolor = "#ffffff";  //confirm取消按钮背景颜色
var xr_toast_bg = 0.3;                 //页面背景遮挡层的透明度
var xr_toast_bgcolor = "#000000";      //页面背景遮挡层的颜色
var xr_toast_box_bg = 0.5;             //Toast框的透明度
var xr_toast_box_bgcolor = "#000000";  //Toast弹出框颜色
var xr_toast_color = "#ffffff";        //Toast字体颜色
var xr_toast_close = true;             //Toast框不设置自动关闭时间时，是否允许点击关闭（true允许，flase不允许）




/*****************************************************
简单实用的jQuery提示框美化插件(支持alert、confirm和toast)
版本：V1.0
开发：www.fytxsoft.com
******************************************************/
var xr_toast_box = "";
var xr_toast_background = "";
var xr_toast_time = 0;
function Xr_Tips() {
    var _this = this;
    xr_toast_background = $('<div class="xr_toast_background"></div>');
    _this.Xr_alert = function (obj) {
        if ($("div").is(".xr_alert_background")) $('.xr_alert_background').remove();
        if (!obj.title) {
            obj.title = "提示";
        }
        if (!obj.btnValue) {
            obj.btnValue = "确定";
        }
        var xr_alert_background = '<div class="xr_alert_background"><div class="xr_alert_box">' + '<div class="xr_alert_title">' + obj.title + '</div>' + '<div class="xr_alert_message">' + obj.message + '</div>' + '<span class="xr_alert_btn">' + obj.btnValue + '</span>' + '</div></div>';
        $('body').append(xr_alert_background);
        if (xr_alert_bg != "") {
            var xr_bgcolor = $.hextorgb(xr_alert_bgcolor);
            $('.xr_alert_background').css("background", "rgb(" + xr_bgcolor + "," + xr_alert_bg + ")");
        }
        if (xr_alert_box_bgcolor != "") $('.xr_alert_box').css("background-color", xr_alert_box_bgcolor);
        if (xr_alert_title_color != "") $('.xr_alert_title').css("color", xr_alert_title_color);
        if (xr_alert_titleline_color != "") $('.xr_alert_title').css("border-bottom", xr_alert_titleline_color + " 1px solid");
        if (xr_alert_message_color != "") $('.xr_alert_message').css("color", xr_alert_message_color);
        if (xr_alert_btn_bgcolor != "") $('.xr_alert_btn').css("background-color", xr_alert_btn_bgcolor);
        if (xr_alert_btn_color != "") $('.xr_alert_btn').css("color", xr_alert_btn_color);
    }
    _this.Xr_confirm = function (obj) {
        if ($("div").is(".xr_confirm_background")) $('.xr_confirm_background').remove();
        var xr_confirm_background = '<div class="xr_confirm_background"><div class="xr_confirm_box"><div class="xr_confirm_title">' + obj.title + '</div><div class="xr_confirm_message">' + obj.message + '</div><span class="xr_confirm_okbtn">确定</span><span class="xr_confirm_cancelbtn">取消</span></div></div>';
        $('body').append(xr_confirm_background);
        if (xr_confirm_bg != "") {
            var xr_bgcolor = $.hextorgb(xr_confirm_bgcolor);
            $('.xr_confirm_background').css("background", "rgb(" + xr_bgcolor + "," + xr_confirm_bg + ")");
        }
        if (xr_confirm_box_bgcolor != "") $('.xr_confirm_box').css("background-color", xr_confirm_box_bgcolor);
        if (xr_confirm_title_color != "") $('.xr_confirm_title').css("color", xr_confirm_title_color);
        if (xr_confirm_titleline_color != "") $('.xr_confirm_title').css("border-bottom", xr_confirm_titleline_color + " 1px solid");
        if (xr_confirm_message_color != "") $('.xr_confirm_message').css("color", xr_confirm_message_color);
        if (xr_confirm_okbtn_bgcolor != "") $('.xr_confirm_okbtn').css("background-color", xr_confirm_okbtn_bgcolor);
        if (xr_confirm_okbtn_color != "") $('.xr_confirm_okbtn').css("color", xr_confirm_okbtn_color);
        if (xr_confirm_cancelbtn_bgcolor != "") $('.xr_confirm_cancelbtn').css("background-color", xr_confirm_cancelbtn_bgcolor);
        if (xr_confirm_cancelbtn_color != "") $('.xr_confirm_cancelbtn').css("color", xr_confirm_cancelbtn_color);
    },
	_this.Xr_toast = function (mes, time) {
	    if (!xr_toast_background.is(':hidden')) xr_toast_box.remove();
	    xr_toast_box = $('<div class="xr_toast_box">' + mes + '</div>');
	    xr_toast_background.append(xr_toast_box);
	    $('body').append(xr_toast_background);
	    xr_toast_box.css({ 'marginTop': -xr_toast_box.outerHeight() / 2 + 'px' });
	    if (xr_toast_bg != "") {
	        var xr_bgcolor = $.hextorgb(xr_toast_bgcolor);
	        $('.xr_toast_background').css("background", "rgb(" + xr_bgcolor + "," + xr_toast_bg + ")");
	    }
	    if (xr_toast_box_bg != "") {
	        var xr_bgcolors = $.hextorgb(xr_toast_box_bgcolor);
	        $('.xr_toast_box').css("background", "rgb(" + xr_bgcolors + "," + xr_toast_box_bg + ")");
	    }
	    if (xr_toast_color != "") $('.xr_toast_box').css("color", xr_toast_color);
	    if (time > 0) {
	        var Etimer = null;
	        clearInterval(Etimer);
	        xr_toast_time = time;
	        Etimer = setInterval(function () {
	            xr_toast_time--;
	            if (xr_toast_time <= 0) {
	                clearInterval(Etimer);
	                xr_toast_background.remove();
	                xr_toast_box.remove();
	            }
	        }, 1000);
	    }
	},
	_this.Xr_removetoast = function () {
	    xr_toast_background.remove();
	    xr_toast_box.remove();
	},
	$("body").on("click", ".xr_toast_box", function () {
	    if (xr_toast_time > 0 && xr_toast_close) {
	        xr_toast_background.remove();
	        xr_toast_box.remove();
	        xr_toast_time = 0;
	    }
	});
}
$(document).ready(function () {
    var xr_alert_callback = "";
    var xr_confirm_isokstr = "";
    var xr_confirm_iscancelstr = "";
    var Xr = new Xr_Tips();
    $.alert = function (message, title, btnvalue, callback) {
        if (typeof message === 'undefined') {
            return;
        } else {
            if (typeof title === 'function') {
                callback = title;
                title = null;
                btnvalue = null;
            } else if (typeof btnvalue === 'function') {
                callback = btnvalue;
                btnvalue = null;
            }
        }
        xr_alert_callback = callback;
        Xr.Xr_alert({
            title: title,
            message: message,
            btnValue: btnvalue,
            callback: callback
        })
    },
	$("body").on("click", ".xr_alert_btn", function () {
	    $(".xr_alert_background").hide();
	    if (typeof xr_alert_callback === "function") {
	        xr_alert_callback();
	    }
	});
    $.confirm = function (message, title, isokstr, iscancelstr) {
        xr_confirm_isokstr = arguments[2] ? arguments[2] : "";
        xr_confirm_iscancelstr = arguments[3] ? arguments[3] : "";
        Xr.Xr_confirm({ title: title, message: message });
    },
	$("body").on("click", ".xr_confirm_okbtn", function () {
	    $(".xr_confirm_background").hide();
	    if (typeof $.isok === "function") {
	        if (xr_confirm_isokstr == "") {
	            $.isok();
	        } else {
	            $.isok(xr_confirm_isokstr);
	        }
	    }
	});
    $("body").on("click", ".xr_confirm_cancelbtn", function () {
        $(".xr_confirm_background").hide();
        if (typeof $.iscancel === "function") {
            if (xr_confirm_iscancelstr == "") {
                $.iscancel();
            } else {
                $.iscancel(xr_confirm_iscancelstr);
            }
        }
    });
    $.toast = function (msg, time, state) {
        time = arguments[1] ? arguments[1] : ((arguments[1] == 0) ? 0 : 3);
        state = arguments[2] ? arguments[2] : ((arguments[2] == 0) ? 0 : undefined);
        if (state != undefined) {
            if (state == 1) {
                xr_toast_close = true;
            }
            else if (state == 0) {
                xr_toast_close = false;
            }
            else {
                _xr_toast_close = state;
            }
        }
        Xr.Xr_toast(msg, time);
    },
	$.removetoast = function () {
	    Xr.Xr_removetoast();
	}
    $.hextorgb = function (str) {
        if (str != "") {
            str = str.replace("#", "");
            if (str.length == 3) str = str.substr(0, 1) + str.substr(0, 1) + str.substr(1, 1) + str.substr(1, 1) + str.substr(2, 1) + str.substr(2, 1);
            var hex = str.match(/../g);
            for (var i = 0; i < 3; i++) hex[i] = parseInt(hex[i], 16);
            return hex;
        }
        else {
            return "0,0,0";
        }
    }
});

/*
    方法：注入配置信息的全局变量 add by zdl 20160106
*/
window.WxConfig = {
    appId: '', // 必填，公众号的唯一标识
    timestamp: '', // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '',// 必填，签名，见附录1
};

var param = new SilverSoft.Param("../../../Weixin/Handler/MiniProgramConfig.ashx?licensekey=2BB39048-822B-4AB1-96C8-00BB5DC50409");
param.currUrl = window.location.href;
var box = SilverSoft.Robot.Call(param);
if (box.Data.length > 0) {
    window.WxConfig.appId = box.Data[0].appId;
    window.WxConfig.timestamp = box.Data[0].timestamp;
    window.WxConfig.nonceStr = box.Data[0].nonceStr;
    window.WxConfig.signature = box.Data[0].signature;
}

wx.config({
    debug: false,// 开启调试模式，调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: window.WxConfig.appId, // 必填，公众号的唯一标识
    timestamp: window.WxConfig.timestamp, // 必填，生成签名的时间戳
    nonceStr: window.WxConfig.nonceStr, // 必填，生成签名的随机串
    signature: window.WxConfig.signature,// 必填，签名，见附录1
    jsApiList:
    [
        'checkJsApi',//判断当前客户端版本是否支持指定JS接口
        'onMenuShareAppMessage'
    ]
});
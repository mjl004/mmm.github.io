wx.config({
    debug: false,// 开启调试模式，调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: window.WxShareData.gz_appId, // 必填，公众号的唯一标识
    timestamp: window.WxShareData.timestamp, // 必填，生成签名的时间戳
    nonceStr: window.WxShareData.nonceStr, // 必填，生成签名的随机串
    signature: window.WxShareData.signature,// 必填，签名，见附录1
    jsApiList:
    [
        'checkJsApi',//判断当前客户端版本是否支持指定JS接口
        'onMenuShareAppMessage',
        'onMenuShareTimeline'
    ]
});



wx.ready(function () {


    window.WxShareData.gz_title = window.document.title;
    //window.WxShareData.gz_desc = "";
    //window.WxShareData.gz_imgUrl = "../Images/nopic_cover.png";
    window.WxShareData.gz_type = "link";
    window.WxShareData.gz_dataUrl = "";

    //alert(window.WxShareData.gz_link);
    ///alert("bbbbb");
    wx.onMenuShareAppMessage(


        {
            title: window.WxShareData.gz_title, // 分享标题
            desc: window.WxShareData.gz_desc, // 分享描述
            link: window.WxShareData.gz_link, // 分享链接
            imgUrl: window.WxShareData.gz_imgUrl, // 分享图标
            type: window.WxShareData.gz_type, // 分享类型,music、video或link，不填默认为link
            dataUrl: window.WxShareData.gz_dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
            success: function (res) {

            },
            cancel: function () {

            }
        });

    wx.onMenuShareTimeline({
        title: window.WxShareData.gz_title, // 分享标题
        link: window.WxShareData.gz_link, // 分享链接
        imgUrl: window.WxShareData.gz_imgUrl, // 分享图标
        success: function (res) {

        },
        cancel: function (res) {

        }
    });

});

wx.checkJsApi({
    jsApiList: [
        'checkJsApi',//判断当前客户端版本是否支持指定JS接口
        'onMenuShareAppMessage',
        'onMenuShareTimeline'
    ], // 需要检测的JS接口列表，所有JS接口列表见附录2,
    success: function (res) {
        //alert(res);
    }
});

wx.onMenuShareAppMessage({
            title: window.WxShareData.gz_title, // 分享标题
            desc: window.WxShareData.gz_desc, // 分享描述
            link: window.WxShareData.gz_link, // 分享链接
            imgUrl: window.WxShareData.gz_imgUrl, // 分享图标
            type: window.WxShareData.gz_type, // 分享类型,music、video或link，不填默认为link
            dataUrl: window.WxShareData.gz_dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
            success: function (res) {

            },
            cancel: function () {

            }
        });

wx.error(function (res) {
});
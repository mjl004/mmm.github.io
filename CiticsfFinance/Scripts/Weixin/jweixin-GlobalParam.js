/*
    方法：全局变量 add by zdl 20160106
*/
window.WxShareData = {
    gz_appId: "",   //必填，公众号的唯一标识
    timestamp: "",  //必填，生成签名的时间戳
    nonceStr: "",   //必填，生成签名的随机串
    signature: "",  //必填，签名，见附录1
    gz_wxWeb: "",   //域名地址
    gz_title: "",   //分享标题
    gz_desc: "",    //分享描述
    gz_link: "",    //分享链接
    gz_imgUrl: "",  //分享图标
    gz_type: "",    //分享类型,music、video或link，不填默认为link
    gz_dataUrl: ""  //如果type是music或video，则要提供数据链接，默认为空
};
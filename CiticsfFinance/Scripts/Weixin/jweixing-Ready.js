document.addEventListener('WeixinJSBridgeReady', function () {
    WeixinJSBridge.call("hideOptionMenu");
}, false);

//if (typeof WeixinJSBridge == "undefined") {
//    if (document.addEventListener) {
//        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
//    }
//} else {
//    onBridgeReady();
//}
//function onBridgeReady() {
//    WeixinJSBridge.call("hideOptionMenu");
//}
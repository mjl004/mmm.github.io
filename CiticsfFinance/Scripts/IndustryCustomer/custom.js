function OpenView(pageurl) {
    var ids = pageurl.split('.');
    if (ids.length > 0) {
        var strid = ids[0] + 'View';
        mui.openWindow({
            url: pageurl,
            id: strid,
            createNew: false,
            show: {
                autoShow: true, //页面loaded事件发生后自动显示，默认为true
                aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
                duration: 100 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
            },
            waiting: {
                autoShow: true, //自动显示等待框，默认为true//进入跳转页面前禁止显示加载雪花，进入页面后按需显示（如果有数据请求需要等待）
                title: '正在加载...', //等待对话框上显示的提示内容
                options: {
                    width: 100, //等待框背景区域宽度，默认根据内容自动计算合适宽度
                    height: 100, //等待框背景区域高度，默认根据内容自动计算合适高度
                }
            }
        });
    } else {
        mui.alert("跳转页面地址异常,请重新尝试", "提示", "OK", "", "div");
    }
}
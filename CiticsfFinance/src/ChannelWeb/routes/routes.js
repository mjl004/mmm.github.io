define(function (require, exports, module) {
	var router = new VueRouter({
		routes: [
			{
				path: '/ZLYYMakeOpenAccount_Common1',
				component: function component(resolve, reject) {
					require.async(['../js/ZLYYMakeOpenAccount_Common1'], function (res) {
						resolve(res);
					});
				},
				meta: {
					title: '中信期货有限公司'
				}
			},
			{
				path: '/ZLYYMakeOpenAccount_Common2',
				component: function component(resolve, reject) {
					require.async(['../js/ZLYYMakeOpenAccount_Common2'], function (res) {
						resolve(res);
					});
				},
				meta: {
					title: '中信期货有限公司'
				}
			},
		]
	});

	router.beforeEach(function (to, from, next) {
		/* 路由发生变化修改页面title */
		if (to.params.titleName) {
			document.title = to.params.titleName;
		} else if (to.query.title) {
			document.title = to.query.title;
		} else if (to.meta.title) {
			document.title = to.meta.title;
		}
		next();
	});

	module.exports = router;
});
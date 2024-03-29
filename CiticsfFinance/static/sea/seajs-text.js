!function() {
	function a(a) {
		h[a.name] = a
	}
	function b(a) {
		return a && h.hasOwnProperty(a)
	}
	function c(a) {
		for (var c in h)
			if (b(c)) {
				var d = "," + h[c].ext.join(",") + ",";
				if (d.indexOf("," + a + ",") > -1)
					return c
			}
	}
	function d(a, b) {
		var c = g.XMLHttpRequest ? new g.XMLHttpRequest : new g.ActiveXObject("Microsoft.XMLHTTP");
		return c.open("GET", a, !0),
		c.onreadystatechange = function() {
			if (4 === c.readyState) {
				if (c.status > 399 && c.status < 600)
					throw new Error("Could not load: " + a + ", status = " + c.status);
				b(c.responseText)
			}
		}
		,
		c.send(null)
	}
	function e(a) {
		a && /\S/.test(a) && (g.execScript || function(a) {
			(g.eval || eval).call(g, a)
		}
		)(a)
	}
	function f(a) {
		return a.replace(/(["\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
	}
	var g = window
	  , h = {}
	  , i = {};
	a({
		name: "text",
		ext: [".tpl", ".html"],
		exec: function(a, b) {
			e('define("' + a + '#", [], "' + f(b) + '")')
		}
	}),
	a({
		name: "json",
		ext: [".json"],
		exec: function(a, b) {
			e('define("' + a + '#", [], ' + b + ")")
		}
	}),
	a({
		name: "handlebars",
		ext: [".handlebars"],
		exec: function(a, b) {
			var c = ['define("' + a + '#", ["handlebars"], function(require, exports, module) {', '  var source = "' + f(b) + '"', '  var Handlebars = require("handlebars")["default"]', "  module.exports = function(data, options) {", "    options || (options = {})", "    options.helpers || (options.helpers = {})", "    for (var key in Handlebars.helpers) {", "      options.helpers[key] = options.helpers[key] || Handlebars.helpers[key]", "    }", "    return Handlebars.compile(source)(data, options)", "  }", "})"].join("\n");
			e(c)
		}
	}),
	seajs.on("resolve", function(a) {
		var d = a.id;
		if (!d)
			return "";
		var e, f;
		(f = d.match(/^(\w+)!(.+)$/)) && b(f[1]) ? (e = f[1],
		d = f[2]) : (f = d.match(/[^?]+(\.\w+)(?:\?|#|$)/)) && (e = c(f[1])),
		e && -1 === d.indexOf("#") && (d += "#");
		var g = seajs.resolve(d, a.refUri);
		e && (i[g] = e),
		a.uri = g
	}),
	seajs.on("request", function(a) {
		var b = i[a.uri];
		b && (d(a.requestUri, function(c) {
			h[b].exec(a.uri, c),
			a.onRequest()
		}),
		a.requested = !0)
	}),
	define("seajs/seajs-text/1.1.1/seajs-text", [], {})
}();
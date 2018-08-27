/*

     (c) 2012 by C?dric Mesnil. All rights reserved.

     Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

     - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
     - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

     THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

 Counter block mode compatible with  Dr Brian Gladman fileenc.c
 derived from CryptoJS.mode.CTR
 Jan Hruby jhruby.web@gmail.com
*/
(function(a, d) {
    function b(c) {
        return e.isWindow(c) ? c : 9 === c.nodeType ? c.defaultView || c.parentWindow : !1
    }
    function f(c) {
        if (!ic[c]) {
            var o = B.body
              , H = e("<" + c + ">").appendTo(o)
              , a = H.css("display");
            H.remove();
            if ("none" === a || "" === a) {
                ua || (ua = B.createElement("iframe"),
                ua.frameBorder = ua.width = ua.height = 0);
                o.appendChild(ua);
                if (!ib || !ua.createElement)
                    ib = (ua.contentWindow || ua.contentDocument).document,
                    ib.write((e.support.boxModel ? "<!doctype html>" : "") + "<html><body>"),
                    ib.close();
                H = ib.createElement(c);
                ib.body.appendChild(H);
                a = e.css(H, "display");
                o.removeChild(ua)
            }
            ic[c] = a
        }
        return ic[c]
    }
    function h(c, o) {
        var H = {};
        e.each(Qb.concat.apply([], Qb.slice(0, o)), function() {
            H[this] = c
        });
        return H
    }
    function l() {
        xb = d
    }
    function q() {
        setTimeout(l, 0);
        return xb = e.now()
    }
    function s() {
        try {
            return new a.XMLHttpRequest
        } catch (c) {}
    }
    function r(c, o, H, a) {
        if (e.isArray(o))
            e.each(o, function(o, e) {
                H || Ic.test(c) ? a(c, e) : r(c + "[" + ("object" == typeof e ? o : "") + "]", e, H, a)
            });
        else if (!H && "object" === e.type(o))
            for (var X in o)
                r(c + "[" + X + "]", o[X], H, a);
        else
            a(c, o)
    }
    function t(c, o) {
        var H, a, X = e.ajaxSettings.flatOptions || {};
        for (H in o)
            o[H] !== d && ((X[H] ? c : a || (a = {}))[H] = o[H]);
        a && e.extend(!0, c, a)
    }
    function E(c, o, H, a, e, g) {
        e = e || o.dataTypes[0];
        g = g || {};
        g[e] = !0;
        for (var e = c[e], b = 0, p = e ? e.length : 0, l = c === Rb, f; b < p && (l || !f); b++)
            f = e[b](o, H, a),
            "string" == typeof f && (!l || g[f] ? f = d : (o.dataTypes.unshift(f),
            f = E(c, o, H, a, f, g)));
        (l || !f) && !g["*"] && (f = E(c, o, H, a, "*", g));
        return f
    }
    function R(c) {
        return function(o, H) {
            "string" != typeof o && (H = o,
            o = "*");
            if (e.isFunction(H))
                for (var a = o.toLowerCase().split(na), X = 0, d = a.length, g, b; X < d; X++)
                    g = a[X],
                    (b = /^\+/.test(g)) && (g = g.substr(1) || "*"),
                    g = c[g] = c[g] || [],
                    g[b ? "unshift" : "push"](H)
        }
    }
    function F(c, o, H) {
        var a = "width" === o ? c.offsetWidth : c.offsetHeight
          , X = "width" === o ? 1 : 0;
        if (0 < a) {
            if ("border" !== H)
                for (; 4 > X; X += 2)
                    H || (a -= parseFloat(e.css(c, "padding" + Ba[X])) || 0),
                    "margin" === H ? a += parseFloat(e.css(c, H + Ba[X])) || 0 : a -= parseFloat(e.css(c, "border" + Ba[X] + "Width")) || 0;
            return a + "px"
        }
        a = Ta(c, o);
        if (0 > a || null == a)
            a = c.style[o];
        if (jc.test(a))
            return a;
        a = parseFloat(a) || 0;
        if (H)
            for (; 4 > X; X += 2)
                a += parseFloat(e.css(c, "padding" + Ba[X])) || 0,
                "padding" !== H && (a += parseFloat(e.css(c, "border" + Ba[X] + "Width")) || 0),
                "margin" === H && (a += parseFloat(e.css(c, H + Ba[X])) || 0);
        return a + "px"
    }
    function w(c) {
        var o = (c.nodeName || "").toLowerCase();
        "input" === o ? T(c) : "script" !== o && "undefined" != typeof c.getElementsByTagName && e.grep(c.getElementsByTagName("input"), T)
    }
    function T(c) {
        if ("checkbox" === c.type || "radio" === c.type)
            c.defaultChecked = c.checked
    }
    function I(c) {
        return "undefined" != typeof c.getElementsByTagName ? c.getElementsByTagName("*") : "undefined" != typeof c.querySelectorAll ? c.querySelectorAll("*") : []
    }
    function K(c, o) {
        var H;
        1 === o.nodeType && (o.clearAttributes && o.clearAttributes(),
        o.mergeAttributes && o.mergeAttributes(c),
        H = o.nodeName.toLowerCase(),
        "object" === H ? o.outerHTML = c.outerHTML : "input" !== H || "checkbox" !== c.type && "radio" !== c.type ? "option" === H ? o.selected = c.defaultSelected : "input" === H || "textarea" === H ? o.defaultValue = c.defaultValue : "script" === H && o.text !== c.text && (o.text = c.text) : (c.checked && (o.defaultChecked = o.checked = c.checked),
        o.value !== c.value && (o.value = c.value)),
        o.removeAttribute(e.expando),
        o.removeAttribute("_submit_attached"),
        o.removeAttribute("_change_attached"))
    }
    function U(c, o) {
        if (1 === o.nodeType && e.hasData(c)) {
            var H, a, X;
            a = e._data(c);
            var d = e._data(o, a)
              , g = a.events;
            if (g)
                for (H in delete d.handle,
                d.events = {},
                g) {
                    a = 0;
                    for (X = g[H].length; a < X; a++)
                        e.event.add(o, H, g[H][a])
                }
            d.data && (d.data = e.extend({}, d.data))
        }
    }
    function C(c) {
        var o = Jc.split("|")
          , c = c.createDocumentFragment();
        if (c.createElement)
            for (; o.length; )
                c.createElement(o.pop());
        return c
    }
    function V(c, o, H) {
        o = o || 0;
        if (e.isFunction(o))
            return e.grep(c, function(c, a) {
                return !!o.call(c, a, c) === H
            });
        if (o.nodeType)
            return e.grep(c, function(c) {
                return c === o === H
            });
        if ("string" == typeof o) {
            var a = e.grep(c, function(c) {
                return 1 === c.nodeType
            });
            if (yb.test(o))
                return e.filter(o, a, !H);
            o = e.filter(o, a)
        }
        return e.grep(c, function(c) {
            return 0 <= e.inArray(c, o) === H
        })
    }
    function P() {
        return !0
    }
    function oa() {
        return !1
    }
    function La(c, o, a) {
        var N = o + "defer"
          , d = o + "queue"
          , g = o + "mark"
          , b = e._data(c, N);
        b && ("queue" === a || !e._data(c, d)) && ("mark" === a || !e._data(c, g)) && setTimeout(function() {
            !e._data(c, d) && !e._data(c, g) && (e.removeData(c, N, !0),
            b.fire())
        }, 0)
    }
    function jb(c) {
        for (var o in c)
            if (!("data" === o && e.isEmptyObject(c[o])) && "toJSON" !== o)
                return !1;
        return !0
    }
    function Ma(c, o, a) {
        if (a === d && 1 === c.nodeType)
            if (a = "data-" + o.replace(kc, "-$1").toLowerCase(),
            a = c.getAttribute(a),
            "string" == typeof a) {
                try {
                    a = "true" === a ? !0 : "false" === a ? !1 : "null" === a ? null : e.isNumeric(a) ? +a : cd.test(a) ? e.parseJSON(a) : a
                } catch (N) {}
                e.data(c, o, a)
            } else
                a = d;
        return a
    }
    var B = a.document, x = a.location, e, Na = function() {
        if (!G.isReady) {
            try {
                B.documentElement.doScroll("left")
            } catch (c) {
                setTimeout(Na, 1);
                return
            }
            G.ready()
        }
    }, G = function(c, o) {
        return new G.fn.init(c,o,ba)
    }, M = a.jQuery, kb = a.$, ba, va = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, Oa = /\S/, fa = /^\s+/, aa = /\s+$/, lb = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, zb = /^[\],:{}\s]*$/, Pa = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, g = /(?:^|:|,)(?:\s*\[)+/g, A = /(webkit)[ \/]([\w.]+)/, y = /(opera)(?:.*version)?[ \/]([\w.]+)/, Z = /(msie) ([\w.]+)/, L = /(mozilla)(?:.*? rv:([\w.]+))?/, z = /-([a-z]|[0-9])/ig, D = /^-ms-/, ka = function(c, o) {
        return (o + "").toUpperCase()
    }, Ab = a.navigator.userAgent, da, wa, pa, mb = Object.prototype.toString, ca = Object.prototype.hasOwnProperty, u = Array.prototype.push, nb = Array.prototype.slice, Ca = String.prototype.trim, qa = Array.prototype.indexOf, ga = {};
    G.fn = G.prototype = {
        constructor: G,
        init: function(c, o, a) {
            var e, X;
            if (!c)
                return this;
            if (c.nodeType)
                return this.context = this[0] = c,
                this.length = 1,
                this;
            if ("body" === c && !o && B.body)
                return this.context = B,
                this[0] = B.body,
                this.selector = c,
                this.length = 1,
                this;
            if ("string" == typeof c) {
                "<" !== c.charAt(0) || ">" !== c.charAt(c.length - 1) || 3 > c.length ? e = va.exec(c) : e = [null, c, null];
                if (e && (e[1] || !o)) {
                    if (e[1])
                        return X = (o = o instanceof G ? o[0] : o) ? o.ownerDocument || o : B,
                        (a = lb.exec(c)) ? G.isPlainObject(o) ? (c = [B.createElement(a[1])],
                        G.fn.attr.call(c, o, !0)) : c = [X.createElement(a[1])] : (a = G.buildFragment([e[1]], [X]),
                        c = (a.cacheable ? G.clone(a.fragment) : a.fragment).childNodes),
                        G.merge(this, c);
                    if ((o = B.getElementById(e[2])) && o.parentNode) {
                        if (o.id !== e[2])
                            return a.find(c);
                        this.length = 1;
                        this[0] = o
                    }
                    this.context = B;
                    this.selector = c;
                    return this
                }
                return !o || o.jquery ? (o || a).find(c) : this.constructor(o).find(c)
            }
            if (G.isFunction(c))
                return a.ready(c);
            c.selector !== d && (this.selector = c.selector,
            this.context = c.context);
            return G.makeArray(c, this)
        },
        selector: "",
        jquery: "1.7.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return nb.call(this, 0)
        },
        get: function(c) {
            return null == c ? this.toArray() : 0 > c ? this[this.length + c] : this[c]
        },
        pushStack: function(c, o, a) {
            var e = this.constructor();
            G.isArray(c) ? u.apply(e, c) : G.merge(e, c);
            e.prevObject = this;
            e.context = this.context;
            "find" === o ? e.selector = this.selector + (this.selector ? " " : "") + a : o && (e.selector = this.selector + "." + o + "(" + a + ")");
            return e
        },
        each: function(c, o) {
            return G.each(this, c, o)
        },
        ready: function(c) {
            G.bindReady();
            wa.add(c);
            return this
        },
        eq: function(c) {
            c = +c;
            return -1 === c ? this.slice(c) : this.slice(c, c + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(nb.apply(this, arguments), "slice", nb.call(arguments).join(","))
        },
        map: function(c) {
            return this.pushStack(G.map(this, function(o, a) {
                return c.call(o, a, o)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: u,
        sort: [].sort,
        splice: [].splice
    };
    G.fn.init.prototype = G.fn;
    G.extend = G.fn.extend = function() {
        var c, o, a, e, X, g, b = arguments[0] || {}, p = 1, f = arguments.length, l = !1;
        "boolean" == typeof b && (l = b,
        b = arguments[1] || {},
        p = 2);
        "object" != typeof b && !G.isFunction(b) && (b = {});
        for (f === p && (b = this,
        --p); p < f; p++)
            if (null != (c = arguments[p]))
                for (o in c)
                    a = b[o],
                    e = c[o],
                    b !== e && (l && e && (G.isPlainObject(e) || (X = G.isArray(e))) ? (X ? (X = !1,
                    g = a && G.isArray(a) ? a : []) : g = a && G.isPlainObject(a) ? a : {},
                    b[o] = G.extend(l, g, e)) : e !== d && (b[o] = e));
        return b
    }
    ;
    G.extend({
        noConflict: function(c) {
            a.$ === G && (a.$ = kb);
            c && a.jQuery === G && (a.jQuery = M);
            return G
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(c) {
            c ? G.readyWait++ : G.ready(!0)
        },
        ready: function(c) {
            if (!0 === c && !--G.readyWait || !0 !== c && !G.isReady) {
                if (!B.body)
                    return setTimeout(G.ready, 1);
                G.isReady = !0;
                !0 !== c && 0 < --G.readyWait || (wa.fireWith(B, [G]),
                G.fn.trigger && G(B).trigger("ready").off("ready"))
            }
        },
        bindReady: function() {
            if (!wa) {
                wa = G.Callbacks("once memory");
                if ("complete" === B.readyState)
                    return setTimeout(G.ready, 1);
                if (B.addEventListener)
                    B.addEventListener("DOMContentLoaded", pa, !1),
                    a.addEventListener("load", G.ready, !1);
                else if (B.attachEvent) {
                    B.attachEvent("onreadystatechange", pa);
                    a.attachEvent("onload", G.ready);
                    var c = !1;
                    try {
                        c = null == a.frameElement
                    } catch (o) {}
                    B.documentElement.doScroll && c && Na()
                }
            }
        },
        isFunction: function(c) {
            return "function" === G.type(c)
        },
        isArray: Array.isArray || function(c) {
            return "array" === G.type(c)
        }
        ,
        isWindow: function(c) {
            return null != c && c == c.window
        },
        isNumeric: function(c) {
            return !isNaN(parseFloat(c)) && isFinite(c)
        },
        type: function(c) {
            return null == c ? String(c) : ga[mb.call(c)] || "object"
        },
        isPlainObject: function(c) {
            if (!c || "object" !== G.type(c) || c.nodeType || G.isWindow(c))
                return !1;
            try {
                if (c.constructor && !ca.call(c, "constructor") && !ca.call(c.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (o) {
                return !1
            }
            for (var a in c)
                ;
            return a === d || ca.call(c, a)
        },
        isEmptyObject: function(c) {
            for (var o in c)
                return !1;
            return !0
        },
        error: function(c) {
            throw Error(c);
        },
        parseJSON: function(c) {
            if ("string" != typeof c || !c)
                return null;
            c = G.trim(c);
            if (a.JSON && a.JSON.parse)
                return a.JSON.parse(c);
            if (zb.test(c.replace(Pa, "@").replace(p, "]").replace(g, "")))
                return (new Function("return " + c))();
            G.error("Invalid JSON: " + c)
        },
        parseXML: function(c) {
            if ("string" != typeof c || !c)
                return null;
            var o, H;
            try {
                a.DOMParser ? (H = new DOMParser,
                o = H.parseFromString(c, "text/xml")) : (o = new ActiveXObject("Microsoft.XMLDOM"),
                o.async = "false",
                o.loadXML(c))
            } catch (e) {
                o = d
            }
            (!o || !o.documentElement || o.getElementsByTagName("parsererror").length) && G.error("Invalid XML: " + c);
            return o
        },
        noop: function() {},
        globalEval: function(c) {
            c && Oa.test(c) && (a.execScript || function(c) {
                a.eval.call(a, c)
            }
            )(c)
        },
        camelCase: function(c) {
            return c.replace(D, "ms-").replace(z, ka)
        },
        nodeName: function(c, o) {
            return c.nodeName && c.nodeName.toUpperCase() === o.toUpperCase()
        },
        each: function(c, o, a) {
            var e, g = 0, b = c.length, p = b === d || G.isFunction(c);
            if (a)
                if (p)
                    for (e in c) {
                        if (!1 === o.apply(c[e], a))
                            break
                    }
                else
                    for (; g < b && !1 !== o.apply(c[g++], a); )
                        ;
            else if (p)
                for (e in c) {
                    if (!1 === o.call(c[e], e, c[e]))
                        break
                }
            else
                for (; g < b && !1 !== o.call(c[g], g, c[g++]); )
                    ;
            return c
        },
        trim: Ca ? function(c) {
            return null == c ? "" : Ca.call(c)
        }
        : function(c) {
            return null == c ? "" : (c + "").replace(fa, "").replace(aa, "")
        }
        ,
        makeArray: function(c, o) {
            var a = o || [];
            if (null != c) {
                var e = G.type(c);
                null == c.length || "string" === e || "function" === e || "regexp" === e || G.isWindow(c) ? u.call(a, c) : G.merge(a, c)
            }
            return a
        },
        inArray: function(c, o, a) {
            var e;
            if (o) {
                if (qa)
                    return qa.call(o, c, a);
                e = o.length;
                for (a = a ? 0 > a ? Math.max(0, e + a) : a : 0; a < e; a++)
                    if (a in o && o[a] === c)
                        return a
            }
            return -1
        },
        merge: function(c, o) {
            var a = c.length
              , e = 0;
            if ("number" == typeof o.length)
                for (var g = o.length; e < g; e++)
                    c[a++] = o[e];
            else
                for (; o[e] !== d; )
                    c[a++] = o[e++];
            c.length = a;
            return c
        },
        grep: function(c, o, a) {
            for (var e = [], d, a = !!a, g = 0, b = c.length; g < b; g++)
                d = !!o(c[g], g),
                a !== d && e.push(c[g]);
            return e
        },
        map: function(c, o, a) {
            var e, g, b = [], p = 0, f = c.length;
            if (c instanceof G || f !== d && "number" == typeof f && (0 < f && c[0] && c[f - 1] || 0 === f || G.isArray(c)))
                for (; p < f; p++)
                    e = o(c[p], p, a),
                    null != e && (b[b.length] = e);
            else
                for (g in c)
                    e = o(c[g], g, a),
                    null != e && (b[b.length] = e);
            return b.concat.apply([], b)
        },
        guid: 1,
        proxy: function(c, o) {
            if ("string" == typeof o)
                var a = c[o]
                  , o = c
                  , c = a;
            if (!G.isFunction(c))
                return d;
            var e = nb.call(arguments, 2)
              , a = function() {
                return c.apply(o, e.concat(nb.call(arguments)))
            };
            a.guid = c.guid = c.guid || a.guid || G.guid++;
            return a
        },
        access: function(c, o, a, e, g, b, p) {
            var f, l = null == a, h = 0, q = c.length;
            if (a && "object" == typeof a) {
                for (h in a)
                    G.access(c, o, h, a[h], 1, b, e);
                g = 1
            } else if (e !== d) {
                f = p === d && G.isFunction(e);
                l && (f ? (f = o,
                o = function(c, o, a) {
                    return f.call(G(c), a)
                }
                ) : (o.call(c, e),
                o = null));
                if (o)
                    for (; h < q; h++)
                        o(c[h], a, f ? e.call(c[h], h, o(c[h], a)) : e, p);
                g = 1
            }
            return g ? c : l ? o.call(c) : q ? o(c[0], a) : b
        },
        now: function() {
            return (new Date).getTime()
        },
        uaMatch: function(c) {
            c = c.toLowerCase();
            c = A.exec(c) || y.exec(c) || Z.exec(c) || 0 > c.indexOf("compatible") && L.exec(c) || [];
            return {
                browser: c[1] || "",
                version: c[2] || "0"
            }
        },
        sub: function() {
            function c(o, a) {
                return new c.fn.init(o,a)
            }
            G.extend(!0, c, this);
            c.superclass = this;
            c.fn = c.prototype = this();
            c.fn.constructor = c;
            c.sub = this.sub;
            c.fn.init = function(a, e) {
                e && e instanceof G && !(e instanceof c) && (e = c(e));
                return G.fn.init.call(this, a, e, o)
            }
            ;
            c.fn.init.prototype = c.fn;
            var o = c(B);
            return c
        },
        browser: {}
    });
    G.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(c, o) {
        ga["[object " + o + "]"] = o.toLowerCase()
    });
    da = G.uaMatch(Ab);
    da.browser && (G.browser[da.browser] = !0,
    G.browser.version = da.version);
    G.browser.webkit && (G.browser.safari = !0);
    Oa.test("\u00a0") && (fa = /^[\s\xA0]+/,
    aa = /[\s\xA0]+$/);
    ba = G(B);
    B.addEventListener ? pa = function() {
        B.removeEventListener("DOMContentLoaded", pa, !1);
        G.ready()
    }
    : B.attachEvent && (pa = function() {
        "complete" === B.readyState && (B.detachEvent("onreadystatechange", pa),
        G.ready())
    }
    );
    e = G;
    var Bb = {};
    e.Callbacks = function(c) {
        var o;
        if (c) {
            if (!(o = Bb[c])) {
                o = c;
                var a = Bb[o] = {}, N, g;
                o = o.split(/\s+/);
                N = 0;
                for (g = o.length; N < g; N++)
                    a[o[N]] = !0;
                o = a
            }
        } else
            o = {};
        var c = o, b = [], p = [], f, l, h, q, A, w, y = function(o) {
            var a, H, N, g;
            a = 0;
            for (H = o.length; a < H; a++)
                N = o[a],
                g = e.type(N),
                "array" === g ? y(N) : "function" === g && (!c.unique || !I.has(N)) && b.push(N)
        }, K = function(o, a) {
            a = a || [];
            f = !c.memory || [o, a];
            h = l = !0;
            w = q || 0;
            q = 0;
            for (A = b.length; b && w < A; w++)
                if (!1 === b[w].apply(o, a) && c.stopOnFalse) {
                    f = !0;
                    break
                }
            h = !1;
            b && (c.once ? !0 === f ? I.disable() : b = [] : p && p.length && (f = p.shift(),
            I.fireWith(f[0], f[1])))
        }, I = {
            add: function() {
                if (b) {
                    var c = b.length;
                    y(arguments);
                    h ? A = b.length : f && !0 !== f && (q = c,
                    K(f[0], f[1]))
                }
                return this
            },
            remove: function() {
                if (b)
                    for (var o = arguments, a = 0, e = o.length; a < e; a++)
                        for (var H = 0; H < b.length && !(o[a] === b[H] && (h && H <= A && (A--,
                        H <= w && w--),
                        b.splice(H--, 1),
                        c.unique)); H++)
                            ;
                return this
            },
            has: function(c) {
                if (b)
                    for (var o = 0, a = b.length; o < a; o++)
                        if (c === b[o])
                            return !0;
                return !1
            },
            empty: function() {
                b = [];
                return this
            },
            disable: function() {
                b = p = f = d;
                return this
            },
            disabled: function() {
                return !b
            },
            lock: function() {
                p = d;
                (!f || !0 === f) && I.disable();
                return this
            },
            locked: function() {
                return !p
            },
            fireWith: function(o, a) {
                p && (h ? c.once || p.push([o, a]) : (!c.once || !f) && K(o, a));
                return this
            },
            fire: function() {
                I.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !!l
            }
        };
        return I
    }
    ;
    var lc = [].slice;
    e.extend({
        Deferred: function(c) {
            var o = e.Callbacks("once memory"), a = e.Callbacks("once memory"), N = e.Callbacks("memory"), g = "pending", b = {
                resolve: o,
                reject: a,
                notify: N
            }, d = {
                done: o.add,
                fail: a.add,
                progress: N.add,
                state: function() {
                    return g
                },
                isResolved: o.fired,
                isRejected: a.fired,
                then: function(c, o, a) {
                    p.done(c).fail(o).progress(a);
                    return this
                },
                always: function() {
                    p.done.apply(p, arguments).fail.apply(p, arguments);
                    return this
                },
                pipe: function(c, o, a) {
                    return e.Deferred(function(H) {
                        e.each({
                            done: [c, "resolve"],
                            fail: [o, "reject"],
                            progress: [a, "notify"]
                        }, function(c, o) {
                            var a = o[0], N = o[1], g;
                            e.isFunction(a) ? p[c](function() {
                                (g = a.apply(this, arguments)) && e.isFunction(g.promise) ? g.promise().then(H.resolve, H.reject, H.notify) : H[N + "With"](this === p ? H : this, [g])
                            }) : p[c](H[N])
                        })
                    }).promise()
                },
                promise: function(c) {
                    if (null == c)
                        c = d;
                    else
                        for (var o in d)
                            c[o] = d[o];
                    return c
                }
            }, p = d.promise({}), f;
            for (f in b)
                p[f] = b[f].fire,
                p[f + "With"] = b[f].fireWith;
            p.done(function() {
                g = "resolved"
            }, a.disable, N.lock).fail(function() {
                g = "rejected"
            }, o.disable, N.lock);
            c && c.call(p, p);
            return p
        },
        when: function(c) {
            function o(c) {
                return function(o) {
                    d[c] = 1 < arguments.length ? lc.call(arguments, 0) : o;
                    f.notifyWith(l, d)
                }
            }
            function a(c) {
                return function(o) {
                    N[c] = 1 < arguments.length ? lc.call(arguments, 0) : o;
                    --p || f.resolveWith(f, N)
                }
            }
            var N = lc.call(arguments, 0)
              , g = 0
              , b = N.length
              , d = Array(b)
              , p = b
              , f = 1 >= b && c && e.isFunction(c.promise) ? c : e.Deferred()
              , l = f.promise();
            if (1 < b) {
                for (; g < b; g++)
                    N[g] && N[g].promise && e.isFunction(N[g].promise) ? N[g].promise().then(a(g), f.reject, o(g)) : --p;
                p || f.resolveWith(f, N)
            } else
                f !== c && f.resolveWith(f, b ? [c] : []);
            return l
        }
    });
    var fd = e, mc;
    var ha, nc, ob, Sb, Cb, ia, Wa, Xa, Db, Tb, pb, O = B.createElement("div");
    O.setAttribute("className", "t");
    O.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
    nc = O.getElementsByTagName("*");
    ob = O.getElementsByTagName("a")[0];
    if (!nc || !nc.length || !ob)
        mc = {};
    else {
        Sb = B.createElement("select");
        Cb = Sb.appendChild(B.createElement("option"));
        ia = O.getElementsByTagName("input")[0];
        ha = {
            leadingWhitespace: 3 === O.firstChild.nodeType,
            tbody: !O.getElementsByTagName("tbody").length,
            htmlSerialize: !!O.getElementsByTagName("link").length,
            style: /top/.test(ob.getAttribute("style")),
            hrefNormalized: "/a" === ob.getAttribute("href"),
            opacity: /^0.55/.test(ob.style.opacity),
            cssFloat: !!ob.style.cssFloat,
            checkOn: "on" === ia.value,
            optSelected: Cb.selected,
            getSetAttribute: "t" !== O.className,
            enctype: !!B.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== B.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        };
        e.boxModel = ha.boxModel = "CSS1Compat" === B.compatMode;
        ia.checked = !0;
        ha.noCloneChecked = ia.cloneNode(!0).checked;
        Sb.disabled = !0;
        ha.optDisabled = !Cb.disabled;
        try {
            delete O.test
        } catch (vd) {
            ha.deleteExpando = !1
        }
        !O.addEventListener && O.attachEvent && O.fireEvent && (O.attachEvent("onclick", function() {
            ha.noCloneEvent = !1
        }),
        O.cloneNode(!0).fireEvent("onclick"));
        ia = B.createElement("input");
        ia.value = "t";
        ia.setAttribute("type", "radio");
        ha.radioValue = "t" === ia.value;
        ia.setAttribute("checked", "checked");
        ia.setAttribute("name", "t");
        O.appendChild(ia);
        Wa = B.createDocumentFragment();
        Wa.appendChild(O.lastChild);
        ha.checkClone = Wa.cloneNode(!0).cloneNode(!0).lastChild.checked;
        ha.appendChecked = ia.checked;
        Wa.removeChild(ia);
        Wa.appendChild(O);
        if (O.attachEvent)
            for (Tb in {
                submit: 1,
                change: 1,
                focusin: 1
            })
                Db = "on" + Tb,
                (pb = Db in O) || (O.setAttribute(Db, "return;"),
                pb = "function" == typeof O[Db]),
                ha[Tb + "Bubbles"] = pb;
        Wa.removeChild(O);
        Wa = Sb = Cb = O = ia = null;
        e(function() {
            var c, o, H, N, g, b, d = B.getElementsByTagName("body")[0];
            !d || (c = B.createElement("div"),
            c.style.cssText = "padding:0;margin:0;border:0;visibility:hidden;width:0;height:0;position:static;top:0;margin-top:1px",
            d.insertBefore(c, d.firstChild),
            O = B.createElement("div"),
            c.appendChild(O),
            O.innerHTML = "<table><tr><td style='padding:0;margin:0;border:0;display:none'></td><td>t</td></tr></table>",
            Xa = O.getElementsByTagName("td"),
            pb = 0 === Xa[0].offsetHeight,
            Xa[0].style.display = "",
            Xa[1].style.display = "none",
            ha.reliableHiddenOffsets = pb && 0 === Xa[0].offsetHeight,
            a.getComputedStyle && (O.innerHTML = "",
            b = B.createElement("div"),
            b.style.width = "0",
            b.style.marginRight = "0",
            O.style.width = "2px",
            O.appendChild(b),
            ha.reliableMarginRight = 0 === (parseInt((a.getComputedStyle(b, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)),
            "undefined" != typeof O.style.zoom && (O.innerHTML = "",
            O.style.width = O.style.padding = "1px",
            O.style.border = 0,
            O.style.overflow = "hidden",
            O.style.display = "inline",
            O.style.zoom = 1,
            ha.inlineBlockNeedsLayout = 3 === O.offsetWidth,
            O.style.display = "block",
            O.style.overflow = "visible",
            O.innerHTML = "<div style='width:5px;'></div>",
            ha.shrinkWrapBlocks = 3 !== O.offsetWidth),
            O.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:0;visibility:hidden;",
            O.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",
            o = O.firstChild,
            H = o.firstChild,
            N = o.nextSibling.firstChild.firstChild,
            g = {
                doesNotAddBorder: 5 !== H.offsetTop,
                doesAddBorderForTableAndCells: 5 === N.offsetTop
            },
            H.style.position = "fixed",
            H.style.top = "20px",
            g.fixedPosition = 20 === H.offsetTop || 15 === H.offsetTop,
            H.style.position = H.style.top = "",
            o.style.overflow = "hidden",
            o.style.position = "relative",
            g.subtractsBorderForOverflowNotVisible = -5 === H.offsetTop,
            g.doesNotIncludeMarginInBodyOffset = 1 !== d.offsetTop,
            a.getComputedStyle && (O.style.marginTop = "1%",
            ha.pixelMargin = "1%" !== (a.getComputedStyle(O, null) || {
                marginTop: 0
            }).marginTop),
            "undefined" != typeof c.style.zoom && (c.style.zoom = 1),
            d.removeChild(c),
            O = null,
            e.extend(ha, g))
        });
        mc = ha
    }
    fd.support = mc;
    var cd = /^(?:\{.*\}|\[.*\])$/
      , kc = /([A-Z])/g;
    e.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(c) {
            c = c.nodeType ? e.cache[c[e.expando]] : c[e.expando];
            return !!c && !jb(c)
        },
        data: function(c, o, a, N) {
            if (e.acceptData(c)) {
                var g, b;
                g = e.expando;
                var p = "string" == typeof o
                  , f = c.nodeType
                  , l = f ? e.cache : c
                  , h = f ? c[g] : c[g] && g
                  , q = "events" === o;
                if (h && l[h] && (q || N || l[h].data) || !(p && a === d)) {
                    h || (f ? c[g] = h = ++e.uuid : h = g);
                    l[h] || (l[h] = {},
                    f || (l[h].toJSON = e.noop));
                    if ("object" == typeof o || "function" == typeof o)
                        N ? l[h] = e.extend(l[h], o) : l[h].data = e.extend(l[h].data, o);
                    c = g = l[h];
                    N || (g.data || (g.data = {}),
                    g = g.data);
                    a !== d && (g[e.camelCase(o)] = a);
                    if (q && !g[o])
                        return c.events;
                    p ? (b = g[o],
                    null == b && (b = g[e.camelCase(o)])) : b = g;
                    return b
                }
            }
        },
        removeData: function(c, o, a) {
            if (e.acceptData(c)) {
                var N, g, b, d = e.expando, p = c.nodeType, f = p ? e.cache : c, l = p ? c[d] : d;
                if (f[l]) {
                    if (o && (N = a ? f[l] : f[l].data)) {
                        e.isArray(o) || (o in N ? o = [o] : (o = e.camelCase(o),
                        o in N ? o = [o] : o = o.split(" ")));
                        g = 0;
                        for (b = o.length; g < b; g++)
                            delete N[o[g]];
                        if (!(a ? jb : e.isEmptyObject)(N))
                            return
                    }
                    if (!a && (delete f[l].data,
                    !jb(f[l])))
                        return;
                    e.support.deleteExpando || !f.setInterval ? delete f[l] : f[l] = null;
                    p && (e.support.deleteExpando ? delete c[d] : c.removeAttribute ? c.removeAttribute(d) : c[d] = null)
                }
            }
        },
        _data: function(c, o, a) {
            return e.data(c, o, a, !0)
        },
        acceptData: function(c) {
            if (c.nodeName) {
                var o = e.noData[c.nodeName.toLowerCase()];
                if (o)
                    return !0 !== o && c.getAttribute("classid") === o
            }
            return !0
        }
    });
    e.fn.extend({
        data: function(c, o) {
            var a, N, g, b, p, f = this[0], l = 0, h = null;
            if (c === d) {
                if (this.length && (h = e.data(f),
                1 === f.nodeType && !e._data(f, "parsedAttrs"))) {
                    g = f.attributes;
                    for (p = g.length; l < p; l++)
                        b = g[l].name,
                        0 === b.indexOf("data-") && (b = e.camelCase(b.substring(5)),
                        Ma(f, b, h[b]));
                    e._data(f, "parsedAttrs", !0)
                }
                return h
            }
            if ("object" == typeof c)
                return this.each(function() {
                    e.data(this, c)
                });
            a = c.split(".", 2);
            a[1] = a[1] ? "." + a[1] : "";
            N = a[1] + "!";
            return e.access(this, function(o) {
                if (o === d)
                    return h = this.triggerHandler("getData" + N, [a[0]]),
                    h === d && f && (h = e.data(f, c),
                    h = Ma(f, c, h)),
                    h === d && a[1] ? this.data(a[0]) : h;
                a[1] = o;
                this.each(function() {
                    var g = e(this);
                    g.triggerHandler("setData" + N, a);
                    e.data(this, c, o);
                    g.triggerHandler("changeData" + N, a)
                })
            }, null, o, 1 < arguments.length, null, !1)
        },
        removeData: function(c) {
            return this.each(function() {
                e.removeData(this, c)
            })
        }
    });
    e.extend({
        _mark: function(c, o) {
            c && (o = (o || "fx") + "mark",
            e._data(c, o, (e._data(c, o) || 0) + 1))
        },
        _unmark: function(c, o, a) {
            !0 !== c && (a = o,
            o = c,
            c = !1);
            if (o) {
                var a = a || "fx"
                  , g = a + "mark";
                (c = c ? 0 : (e._data(o, g) || 1) - 1) ? e._data(o, g, c) : (e.removeData(o, g, !0),
                La(o, a, "mark"))
            }
        },
        queue: function(c, o, a) {
            var g;
            if (c)
                return o = (o || "fx") + "queue",
                g = e._data(c, o),
                a && (!g || e.isArray(a) ? g = e._data(c, o, e.makeArray(a)) : g.push(a)),
                g || []
        },
        dequeue: function(c, o) {
            var o = o || "fx"
              , a = e.queue(c, o)
              , g = a.shift()
              , b = {};
            "inprogress" === g && (g = a.shift());
            g && ("fx" === o && a.unshift("inprogress"),
            e._data(c, o + ".run", b),
            g.call(c, function() {
                e.dequeue(c, o)
            }, b));
            a.length || (e.removeData(c, o + "queue " + o + ".run", !0),
            La(c, o, "queue"))
        }
    });
    e.fn.extend({
        queue: function(c, o) {
            var a = 2;
            "string" != typeof c && (o = c,
            c = "fx",
            a--);
            return arguments.length < a ? e.queue(this[0], c) : o === d ? this : this.each(function() {
                var a = e.queue(this, c, o);
                "fx" === c && "inprogress" !== a[0] && e.dequeue(this, c)
            })
        },
        dequeue: function(c) {
            return this.each(function() {
                e.dequeue(this, c)
            })
        },
        delay: function(c, o) {
            c = e.fx ? e.fx.speeds[c] || c : c;
            return this.queue(o || "fx", function(o, a) {
                var e = setTimeout(o, c);
                a.stop = function() {
                    clearTimeout(e)
                }
            })
        },
        clearQueue: function(c) {
            return this.queue(c || "fx", [])
        },
        promise: function(c, o) {
            function a() {
                --f || g.resolveWith(b, [b])
            }
            "string" != typeof c && (o = c,
            c = d);
            for (var c = c || "fx", g = e.Deferred(), b = this, p = b.length, f = 1, l = c + "defer", h = c + "queue", q = c + "mark", A; p--; )
                if (A = e.data(b[p], l, d, !0) || (e.data(b[p], h, d, !0) || e.data(b[p], q, d, !0)) && e.data(b[p], l, e.Callbacks("once memory"), !0))
                    f++,
                    A.add(a);
            a();
            return g.promise(o)
        }
    });
    var oc = /[\n\t\r]/g, Eb = /\s+/, gd = /\r/g, Lc = /^(?:button|input)$/i, hd = /^(?:button|input|object|select|textarea)$/i, Ub = /^a(?:rea)?$/i, Mc = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, pc = e.support.getSetAttribute, ra, qc, rc;
    e.fn.extend({
        attr: function(c, o) {
            return e.access(this, e.attr, c, o, 1 < arguments.length)
        },
        removeAttr: function(c) {
            return this.each(function() {
                e.removeAttr(this, c)
            })
        },
        prop: function(c, o) {
            return e.access(this, e.prop, c, o, 1 < arguments.length)
        },
        removeProp: function(c) {
            c = e.propFix[c] || c;
            return this.each(function() {
                try {
                    this[c] = d,
                    delete this[c]
                } catch (o) {}
            })
        },
        addClass: function(c) {
            var o, a, g, b, d, p, f;
            if (e.isFunction(c))
                return this.each(function(o) {
                    e(this).addClass(c.call(this, o, this.className))
                });
            if (c && "string" == typeof c) {
                o = c.split(Eb);
                a = 0;
                for (g = this.length; a < g; a++)
                    if (b = this[a],
                    1 === b.nodeType)
                        if (!b.className && 1 === o.length)
                            b.className = c;
                        else {
                            d = " " + b.className + " ";
                            p = 0;
                            for (f = o.length; p < f; p++)
                                ~d.indexOf(" " + o[p] + " ") || (d += o[p] + " ");
                            b.className = e.trim(d)
                        }
            }
            return this
        },
        removeClass: function(c) {
            var o, a, g, b, p, f, l;
            if (e.isFunction(c))
                return this.each(function(o) {
                    e(this).removeClass(c.call(this, o, this.className))
                });
            if (c && "string" == typeof c || c === d) {
                o = (c || "").split(Eb);
                a = 0;
                for (g = this.length; a < g; a++)
                    if (b = this[a],
                    1 === b.nodeType && b.className)
                        if (c) {
                            p = (" " + b.className + " ").replace(oc, " ");
                            f = 0;
                            for (l = o.length; f < l; f++)
                                p = p.replace(" " + o[f] + " ", " ");
                            b.className = e.trim(p)
                        } else
                            b.className = ""
            }
            return this
        },
        toggleClass: function(c, o) {
            var a = typeof c
              , g = "boolean" == typeof o;
            return e.isFunction(c) ? this.each(function(a) {
                e(this).toggleClass(c.call(this, a, this.className, o), o)
            }) : this.each(function() {
                if ("string" === a)
                    for (var b, d = 0, p = e(this), f = o, l = c.split(Eb); b = l[d++]; )
                        f = g ? f : !p.hasClass(b),
                        p[f ? "addClass" : "removeClass"](b);
                else if ("undefined" === a || "boolean" === a)
                    this.className && e._data(this, "__className__", this.className),
                    this.className = this.className || !1 === c ? "" : e._data(this, "__className__") || ""
            })
        },
        hasClass: function(c) {
            for (var c = " " + c + " ", o = 0, a = this.length; o < a; o++)
                if (1 === this[o].nodeType && -1 < (" " + this[o].className + " ").replace(oc, " ").indexOf(c))
                    return !0;
            return !1
        },
        val: function(c) {
            var o, a, g, b = this[0];
            if (arguments.length)
                return g = e.isFunction(c),
                this.each(function(a) {
                    var H = e(this), b;
                    if (1 === this.nodeType && (g ? b = c.call(this, a, H.val()) : b = c,
                    null == b ? b = "" : "number" == typeof b ? b += "" : e.isArray(b) && (b = e.map(b, function(c) {
                        return c == null ? "" : c + ""
                    })),
                    o = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()],
                    !o || !("set"in o) || o.set(this, b, "value") === d))
                        this.value = b
                });
            if (b) {
                if ((o = e.valHooks[b.type] || e.valHooks[b.nodeName.toLowerCase()]) && "get"in o && (a = o.get(b, "value")) !== d)
                    return a;
                a = b.value;
                return "string" == typeof a ? a.replace(gd, "") : null == a ? "" : a
            }
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function(c) {
                    var o = c.attributes.value;
                    return !o || o.specified ? c.value : c.text
                }
            },
            select: {
                get: function(c) {
                    var o, a, g = c.selectedIndex, b = [], d = c.options, p = "select-one" === c.type;
                    if (0 > g)
                        return null;
                    c = p ? g : 0;
                    for (a = p ? g + 1 : d.length; c < a; c++)
                        if (o = d[c],
                        o.selected && (e.support.optDisabled ? !o.disabled : null === o.getAttribute("disabled")) && (!o.parentNode.disabled || !e.nodeName(o.parentNode, "optgroup"))) {
                            o = e(o).val();
                            if (p)
                                return o;
                            b.push(o)
                        }
                    return p && !b.length && d.length ? e(d[g]).val() : b
                },
                set: function(c, o) {
                    var a = e.makeArray(o);
                    e(c).find("option").each(function() {
                        this.selected = 0 <= e.inArray(e(this).val(), a)
                    });
                    a.length || (c.selectedIndex = -1);
                    return a
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(c, o, a, g) {
            var b, p, f = c.nodeType;
            if (c && 3 !== f && 8 !== f && 2 !== f) {
                if (g && o in e.attrFn)
                    return e(c)[o](a);
                if ("undefined" == typeof c.getAttribute)
                    return e.prop(c, o, a);
                (g = 1 !== f || !e.isXMLDoc(c)) && (o = o.toLowerCase(),
                p = e.attrHooks[o] || (Mc.test(o) ? qc : ra));
                if (a !== d) {
                    if (null === a) {
                        e.removeAttr(c, o);
                        return
                    }
                    if (p && "set"in p && g && (b = p.set(c, a, o)) !== d)
                        return b;
                    c.setAttribute(o, "" + a);
                    return a
                }
                if (p && "get"in p && g && null !== (b = p.get(c, o)))
                    return b;
                b = c.getAttribute(o);
                return null === b ? d : b
            }
        },
        removeAttr: function(c, o) {
            var a, g, b, d, p, f = 0;
            if (o && 1 === c.nodeType) {
                g = o.toLowerCase().split(Eb);
                for (d = g.length; f < d; f++)
                    (b = g[f]) && (a = e.propFix[b] || b,
                    p = Mc.test(b),
                    p || e.attr(c, b, ""),
                    c.removeAttribute(pc ? b : a),
                    p && a in c && (c[a] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(c, o) {
                    if (Lc.test(c.nodeName) && c.parentNode)
                        e.error("type property can't be changed");
                    else if (!e.support.radioValue && "radio" === o && e.nodeName(c, "input")) {
                        var a = c.value;
                        c.setAttribute("type", o);
                        a && (c.value = a);
                        return o
                    }
                }
            },
            value: {
                get: function(c, o) {
                    return ra && e.nodeName(c, "button") ? ra.get(c, o) : o in c ? c.value : null
                },
                set: function(c, o, a) {
                    if (ra && e.nodeName(c, "button"))
                        return ra.set(c, o, a);
                    c.value = o
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(c, o, a) {
            var g, b, p;
            p = c.nodeType;
            if (c && 3 !== p && 8 !== p && 2 !== p)
                return (p = 1 !== p || !e.isXMLDoc(c)) && (o = e.propFix[o] || o,
                b = e.propHooks[o]),
                a !== d ? b && "set"in b && (g = b.set(c, a, o)) !== d ? g : c[o] = a : b && "get"in b && null !== (g = b.get(c, o)) ? g : c[o]
        },
        propHooks: {
            tabIndex: {
                get: function(c) {
                    var o = c.getAttributeNode("tabindex");
                    return o && o.specified ? parseInt(o.value, 10) : hd.test(c.nodeName) || Ub.test(c.nodeName) && c.href ? 0 : d
                }
            }
        }
    });
    e.attrHooks.tabindex = e.propHooks.tabIndex;
    qc = {
        get: function(c, o) {
            var a, g = e.prop(c, o);
            return !0 === g || "boolean" != typeof g && (a = c.getAttributeNode(o)) && !1 !== a.nodeValue ? o.toLowerCase() : d
        },
        set: function(c, o, a) {
            var g;
            !1 === o ? e.removeAttr(c, a) : (g = e.propFix[a] || a,
            g in c && (c[g] = !0),
            c.setAttribute(a, a.toLowerCase()));
            return a
        }
    };
    pc || (rc = {
        name: !0,
        id: !0,
        coords: !0
    },
    ra = e.valHooks.button = {
        get: function(c, o) {
            var a;
            return (a = c.getAttributeNode(o)) && (rc[o] ? "" !== a.nodeValue : a.specified) ? a.nodeValue : d
        },
        set: function(c, o, a) {
            var e = c.getAttributeNode(a);
            e || (e = B.createAttribute(a),
            c.setAttributeNode(e));
            return e.nodeValue = o + ""
        }
    },
    e.attrHooks.tabindex.set = ra.set,
    e.each(["width", "height"], function(c, o) {
        e.attrHooks[o] = e.extend(e.attrHooks[o], {
            set: function(c, a) {
                if ("" === a)
                    return c.setAttribute(o, "auto"),
                    a
            }
        })
    }),
    e.attrHooks.contenteditable = {
        get: ra.get,
        set: function(c, o, a) {
            "" === o && (o = "false");
            ra.set(c, o, a)
        }
    });
    e.support.hrefNormalized || e.each(["href", "src", "width", "height"], function(c, o) {
        e.attrHooks[o] = e.extend(e.attrHooks[o], {
            get: function(c) {
                c = c.getAttribute(o, 2);
                return null === c ? d : c
            }
        })
    });
    e.support.style || (e.attrHooks.style = {
        get: function(c) {
            return c.style.cssText.toLowerCase() || d
        },
        set: function(c, o) {
            return c.style.cssText = "" + o
        }
    });
    e.support.optSelected || (e.propHooks.selected = e.extend(e.propHooks.selected, {
        get: function(c) {
            c = c.parentNode;
            c && (c.selectedIndex,
            c.parentNode && c.parentNode.selectedIndex);
            return null
        }
    }));
    e.support.enctype || (e.propFix.enctype = "encoding");
    e.support.checkOn || e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = {
            get: function(c) {
                return null === c.getAttribute("value") ? "on" : c.value
            }
        }
    });
    e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = e.extend(e.valHooks[this], {
            set: function(c, o) {
                if (e.isArray(o))
                    return c.checked = 0 <= e.inArray(e(c).val(), o)
            }
        })
    });
    var Vb = /^(?:textarea|input|select)$/i
      , Wb = /^([^\.]*)?(?:\.(.+))?$/
      , id = /(?:^|\s)hover(\.\S+)?\b/
      , Nc = /^key/
      , jd = /^(?:mouse|contextmenu)|click/
      , qb = /^(?:focusinfocus|focusoutblur)$/
      , Oc = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/
      , kd = function(c) {
        (c = Oc.exec(c)) && (c[1] = (c[1] || "").toLowerCase(),
        c[3] = c[3] && RegExp("(?:^|\\s)" + c[3] + "(?:\\s|$)"));
        return c
    }
      , rb = function(c) {
        return e.event.special.hover ? c : c.replace(id, "mouseenter$1 mouseleave$1")
    };
    e.event = {
        add: function(c, o, a, g, b) {
            var p, f, l, h, q, A, w, y, K;
            if (!(3 === c.nodeType || 8 === c.nodeType || !o || !a || !(p = e._data(c)))) {
                a.handler && (w = a,
                a = w.handler,
                b = w.selector);
                a.guid || (a.guid = e.guid++);
                (l = p.events) || (p.events = l = {});
                (f = p.handle) || (p.handle = f = function(c) {
                    return "undefined" != typeof e && (!c || e.event.triggered !== c.type) ? e.event.dispatch.apply(f.elem, arguments) : d
                }
                ,
                f.elem = c);
                o = e.trim(rb(o)).split(" ");
                for (p = 0; p < o.length; p++) {
                    h = Wb.exec(o[p]) || [];
                    q = h[1];
                    A = (h[2] || "").split(".").sort();
                    K = e.event.special[q] || {};
                    q = (b ? K.delegateType : K.bindType) || q;
                    K = e.event.special[q] || {};
                    h = e.extend({
                        type: q,
                        origType: h[1],
                        data: g,
                        handler: a,
                        guid: a.guid,
                        selector: b,
                        quick: b && kd(b),
                        namespace: A.join(".")
                    }, w);
                    y = l[q];
                    if (!y && (y = l[q] = [],
                    y.delegateCount = 0,
                    !K.setup || !1 === K.setup.call(c, g, A, f)))
                        c.addEventListener ? c.addEventListener(q, f, !1) : c.attachEvent && c.attachEvent("on" + q, f);
                    K.add && (K.add.call(c, h),
                    h.handler.guid || (h.handler.guid = a.guid));
                    b ? y.splice(y.delegateCount++, 0, h) : y.push(h);
                    e.event.global[q] = !0
                }
                c = null
            }
        },
        global: {},
        remove: function(c, o, a, g, b) {
            var d = e.hasData(c) && e._data(c), p, f, l, h, q, A, w, y, K, I, T;
            if (d && (w = d.events)) {
                o = e.trim(rb(o || "")).split(" ");
                for (p = 0; p < o.length; p++)
                    if (f = Wb.exec(o[p]) || [],
                    l = h = f[1],
                    f = f[2],
                    l) {
                        y = e.event.special[l] || {};
                        l = (g ? y.delegateType : y.bindType) || l;
                        I = w[l] || [];
                        q = I.length;
                        f = f ? RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                        for (A = 0; A < I.length; A++)
                            T = I[A],
                            (b || h === T.origType) && (!a || a.guid === T.guid) && (!f || f.test(T.namespace)) && (!g || g === T.selector || "**" === g && T.selector) && (I.splice(A--, 1),
                            T.selector && I.delegateCount--,
                            y.remove && y.remove.call(c, T));
                        0 === I.length && q !== I.length && ((!y.teardown || !1 === y.teardown.call(c, f)) && e.removeEvent(c, l, d.handle),
                        delete w[l])
                    } else
                        for (l in w)
                            e.event.remove(c, l + o[p], a, g, !0);
                e.isEmptyObject(w) && (K = d.handle,
                K && (K.elem = null),
                e.removeData(c, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, o, g, b) {
            if (!g || 3 !== g.nodeType && 8 !== g.nodeType) {
                var p = c.type || c, f = [], l, h, q, A, w, y;
                if (!qb.test(p + e.event.triggered) && (0 <= p.indexOf("!") && (p = p.slice(0, -1),
                l = !0),
                0 <= p.indexOf(".") && (f = p.split("."),
                p = f.shift(),
                f.sort()),
                g && !e.event.customEvent[p] || e.event.global[p]))
                    if (c = "object" == typeof c ? c[e.expando] ? c : new e.Event(p,c) : new e.Event(p),
                    c.type = p,
                    c.isTrigger = !0,
                    c.exclusive = l,
                    c.namespace = f.join("."),
                    c.namespace_re = c.namespace ? RegExp("(^|\\.)" + f.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                    l = 0 > p.indexOf(":") ? "on" + p : "",
                    g) {
                        if (c.result = d,
                        c.target || (c.target = g),
                        o = null != o ? e.makeArray(o) : [],
                        o.unshift(c),
                        A = e.event.special[p] || {},
                        !(A.trigger && !1 === A.trigger.apply(g, o))) {
                            y = [[g, A.bindType || p]];
                            if (!b && !A.noBubble && !e.isWindow(g)) {
                                h = A.delegateType || p;
                                f = qb.test(h + p) ? g : g.parentNode;
                                for (q = null; f; f = f.parentNode)
                                    y.push([f, h]),
                                    q = f;
                                q && q === g.ownerDocument && y.push([q.defaultView || q.parentWindow || a, h])
                            }
                            for (h = 0; h < y.length && !c.isPropagationStopped(); h++)
                                f = y[h][0],
                                c.type = y[h][1],
                                (w = (e._data(f, "events") || {})[c.type] && e._data(f, "handle")) && w.apply(f, o),
                                (w = l && f[l]) && e.acceptData(f) && !1 === w.apply(f, o) && c.preventDefault();
                            c.type = p;
                            !b && !c.isDefaultPrevented() && (!A._default || !1 === A._default.apply(g.ownerDocument, o)) && ("click" !== p || !e.nodeName(g, "a")) && e.acceptData(g) && l && g[p] && ("focus" !== p && "blur" !== p || 0 !== c.target.offsetWidth) && !e.isWindow(g) && (q = g[l],
                            q && (g[l] = null),
                            e.event.triggered = p,
                            g[p](),
                            e.event.triggered = d,
                            q && (g[l] = q));
                            return c.result
                        }
                    } else
                        for (h in g = e.cache,
                        g)
                            g[h].events && g[h].events[p] && e.event.trigger(c, o, g[h].handle.elem, !0)
            }
        },
        dispatch: function(c) {
            var c = e.event.fix(c || a.event), o = (e._data(this, "events") || {})[c.type] || [], g = o.delegateCount, b = [].slice.call(arguments, 0), p = !c.exclusive && !c.namespace, f = e.event.special[c.type] || {}, l = [], h, q, A, w, y, K, I;
            b[0] = c;
            c.delegateTarget = this;
            if (!f.preDispatch || !1 !== f.preDispatch.call(this, c)) {
                if (g && (!c.button || "click" !== c.type)) {
                    A = e(this);
                    A.context = this.ownerDocument || this;
                    for (q = c.target; q != this; q = q.parentNode || this)
                        if (!0 !== q.disabled) {
                            y = {};
                            K = [];
                            A[0] = q;
                            for (h = 0; h < g; h++) {
                                w = o[h];
                                I = w.selector;
                                if (y[I] === d) {
                                    var T = y, s = I, U;
                                    if (w.quick) {
                                        U = w.quick;
                                        var Z = q.attributes || {};
                                        U = (!U[1] || q.nodeName.toLowerCase() === U[1]) && (!U[2] || (Z.id || {}).value === U[2]) && (!U[3] || U[3].test((Z["class"] || {}).value))
                                    } else
                                        U = A.is(I);
                                    T[s] = U
                                }
                                y[I] && K.push(w)
                            }
                            K.length && l.push({
                                elem: q,
                                matches: K
                            })
                        }
                }
                o.length > g && l.push({
                    elem: this,
                    matches: o.slice(g)
                });
                for (h = 0; h < l.length && !c.isPropagationStopped(); h++) {
                    g = l[h];
                    c.currentTarget = g.elem;
                    for (o = 0; o < g.matches.length && !c.isImmediatePropagationStopped(); o++)
                        if (w = g.matches[o],
                        p || !c.namespace && !w.namespace || c.namespace_re && c.namespace_re.test(w.namespace))
                            c.data = w.data,
                            c.handleObj = w,
                            w = ((e.event.special[w.origType] || {}).handle || w.handler).apply(g.elem, b),
                            w !== d && (c.result = w,
                            !1 === w && (c.preventDefault(),
                            c.stopPropagation()))
                }
                f.postDispatch && f.postDispatch.call(this, c);
                return c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(c, o) {
                null == c.which && (c.which = null != o.charCode ? o.charCode : o.keyCode);
                return c
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(c, o) {
                var a, e, g, b = o.button, p = o.fromElement;
                null == c.pageX && null != o.clientX && (a = c.target.ownerDocument || B,
                e = a.documentElement,
                g = a.body,
                c.pageX = o.clientX + (e && e.scrollLeft || g && g.scrollLeft || 0) - (e && e.clientLeft || g && g.clientLeft || 0),
                c.pageY = o.clientY + (e && e.scrollTop || g && g.scrollTop || 0) - (e && e.clientTop || g && g.clientTop || 0));
                !c.relatedTarget && p && (c.relatedTarget = p === c.target ? o.toElement : p);
                !c.which && b !== d && (c.which = b & 1 ? 1 : b & 2 ? 3 : b & 4 ? 2 : 0);
                return c
            }
        },
        fix: function(c) {
            if (c[e.expando])
                return c;
            var o, a, g = c, b = e.event.fixHooks[c.type] || {}, p = b.props ? this.props.concat(b.props) : this.props, c = e.Event(g);
            for (o = p.length; o; )
                a = p[--o],
                c[a] = g[a];
            c.target || (c.target = g.srcElement || B);
            3 === c.target.nodeType && (c.target = c.target.parentNode);
            c.metaKey === d && (c.metaKey = c.ctrlKey);
            return b.filter ? b.filter(c, g) : c
        },
        special: {
            ready: {
                setup: e.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(c, o, a) {
                    e.isWindow(this) && (this.onbeforeunload = a)
                },
                teardown: function(c, o) {
                    this.onbeforeunload === o && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(c, o, a, g) {
            c = e.extend(new e.Event, a, {
                type: c,
                isSimulated: !0,
                originalEvent: {}
            });
            g ? e.event.trigger(c, null, o) : e.event.dispatch.call(o, c);
            c.isDefaultPrevented() && a.preventDefault()
        }
    };
    e.event.handle = e.event.dispatch;
    e.removeEvent = B.removeEventListener ? function(c, o, a) {
        c.removeEventListener && c.removeEventListener(o, a, !1)
    }
    : function(c, o, a) {
        c.detachEvent && c.detachEvent("on" + o, a)
    }
    ;
    e.Event = function(c, o) {
        if (!(this instanceof e.Event))
            return new e.Event(c,o);
        c && c.type ? (this.originalEvent = c,
        this.type = c.type,
        this.isDefaultPrevented = c.defaultPrevented || !1 === c.returnValue || c.getPreventDefault && c.getPreventDefault() ? P : oa) : this.type = c;
        o && e.extend(this, o);
        this.timeStamp = c && c.timeStamp || e.now();
        this[e.expando] = !0
    }
    ;
    e.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = P;
            var c = this.originalEvent;
            !c || (c.preventDefault ? c.preventDefault() : c.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = P;
            var c = this.originalEvent;
            !c || (c.stopPropagation && c.stopPropagation(),
            c.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = P;
            this.stopPropagation()
        },
        isDefaultPrevented: oa,
        isPropagationStopped: oa,
        isImmediatePropagationStopped: oa
    };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(c, o) {
        e.event.special[c] = {
            delegateType: o,
            bindType: o,
            handle: function(c) {
                var a = c.relatedTarget, g = c.handleObj, b;
                if (!a || a !== this && !e.contains(this, a))
                    c.type = g.origType,
                    b = g.handler.apply(this, arguments),
                    c.type = o;
                return b
            }
        }
    });
    e.support.submitBubbles || (e.event.special.submit = {
        setup: function() {
            if (e.nodeName(this, "form"))
                return !1;
            e.event.add(this, "click._submit keypress._submit", function(c) {
                c = c.target;
                (c = e.nodeName(c, "input") || e.nodeName(c, "button") ? c.form : d) && !c._submit_attached && (e.event.add(c, "submit._submit", function(c) {
                    c._submit_bubble = !0
                }),
                c._submit_attached = !0)
            })
        },
        postDispatch: function(c) {
            c._submit_bubble && (delete c._submit_bubble,
            this.parentNode && !c.isTrigger && e.event.simulate("submit", this.parentNode, c, !0))
        },
        teardown: function() {
            if (e.nodeName(this, "form"))
                return !1;
            e.event.remove(this, "._submit")
        }
    });
    e.support.changeBubbles || (e.event.special.change = {
        setup: function() {
            if (Vb.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type)
                    e.event.add(this, "propertychange._change", function(c) {
                        "checked" === c.originalEvent.propertyName && (this._just_changed = !0)
                    }),
                    e.event.add(this, "click._change", function(c) {
                        this._just_changed && !c.isTrigger && (this._just_changed = !1,
                        e.event.simulate("change", this, c, !0))
                    });
                return !1
            }
            e.event.add(this, "beforeactivate._change", function(c) {
                c = c.target;
                Vb.test(c.nodeName) && !c._change_attached && (e.event.add(c, "change._change", function(c) {
                    this.parentNode && !c.isSimulated && !c.isTrigger && e.event.simulate("change", this.parentNode, c, !0)
                }),
                c._change_attached = !0)
            })
        },
        handle: function(c) {
            var o = c.target;
            if (this !== o || c.isSimulated || c.isTrigger || "radio" !== o.type && "checkbox" !== o.type)
                return c.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            e.event.remove(this, "._change");
            return Vb.test(this.nodeName)
        }
    });
    e.support.focusinBubbles || e.each({
        focus: "focusin",
        blur: "focusout"
    }, function(c, o) {
        var a = 0
          , g = function(c) {
            e.event.simulate(o, c.target, e.event.fix(c), !0)
        };
        e.event.special[o] = {
            setup: function() {
                0 === a++ && B.addEventListener(c, g, !0)
            },
            teardown: function() {
                0 === --a && B.removeEventListener(c, g, !0)
            }
        }
    });
    e.fn.extend({
        on: function(c, o, a, g, b) {
            var p, f;
            if ("object" == typeof c) {
                "string" != typeof o && (a = a || o,
                o = d);
                for (f in c)
                    this.on(f, o, a, c[f], b);
                return this
            }
            null == a && null == g ? (g = o,
            a = o = d) : null == g && ("string" == typeof o ? (g = a,
            a = d) : (g = a,
            a = o,
            o = d));
            if (!1 === g)
                g = oa;
            else if (!g)
                return this;
            1 === b && (p = g,
            g = function(c) {
                e().off(c);
                return p.apply(this, arguments)
            }
            ,
            g.guid = p.guid || (p.guid = e.guid++));
            return this.each(function() {
                e.event.add(this, c, g, a, o)
            })
        },
        one: function(c, o, a, e) {
            return this.on(c, o, a, e, 1)
        },
        off: function(c, o, a) {
            if (c && c.preventDefault && c.handleObj) {
                var g = c.handleObj;
                e(c.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler);
                return this
            }
            if ("object" == typeof c) {
                for (g in c)
                    this.off(g, o, c[g]);
                return this
            }
            if (!1 === o || "function" == typeof o)
                a = o,
                o = d;
            !1 === a && (a = oa);
            return this.each(function() {
                e.event.remove(this, c, a, o)
            })
        },
        bind: function(c, o, a) {
            return this.on(c, null, o, a)
        },
        unbind: function(c, o) {
            return this.off(c, null, o)
        },
        live: function(c, o, a) {
            e(this.context).on(c, this.selector, o, a);
            return this
        },
        die: function(c, o) {
            e(this.context).off(c, this.selector || "**", o);
            return this
        },
        delegate: function(c, o, a, e) {
            return this.on(o, c, a, e)
        },
        undelegate: function(c, o, a) {
            return 1 == arguments.length ? this.off(c, "**") : this.off(o, c, a)
        },
        trigger: function(c, o) {
            return this.each(function() {
                e.event.trigger(c, o, this)
            })
        },
        triggerHandler: function(c, o) {
            if (this[0])
                return e.event.trigger(c, o, this[0], !0)
        },
        toggle: function(c) {
            var o = arguments
              , a = c.guid || e.guid++
              , g = 0
              , b = function(a) {
                var b = (e._data(this, "lastToggle" + c.guid) || 0) % g;
                e._data(this, "lastToggle" + c.guid, b + 1);
                a.preventDefault();
                return o[b].apply(this, arguments) || !1
            };
            for (b.guid = a; g < o.length; )
                o[g++].guid = a;
            return this.click(b)
        },
        hover: function(c, o) {
            return this.mouseenter(c).mouseleave(o || c)
        }
    });
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(c, o) {
        e.fn[o] = function(c, a) {
            a == null && (a = c,
            c = null);
            return arguments.length > 0 ? this.on(o, null, c, a) : this.trigger(o)
        }
        ;
        e.attrFn && (e.attrFn[o] = true);
        Nc.test(o) && (e.event.fixHooks[o] = e.event.keyHooks);
        jd.test(o) && (e.event.fixHooks[o] = e.event.mouseHooks)
    });
    var Xb = function(c, o, a, e, g, b) {
        for (var g = 0, p = e.length; g < p; g++) {
            var d = e[g];
            if (d) {
                for (var f = !1, d = d[c]; d; ) {
                    if (d[Ya] === a) {
                        f = e[d.sizset];
                        break
                    }
                    if (1 === d.nodeType)
                        if (b || (d[Ya] = a,
                        d.sizset = g),
                        "string" != typeof o) {
                            if (d === o) {
                                f = !0;
                                break
                            }
                        } else if (0 < Q.filter(o, [d]).length) {
                            f = d;
                            break
                        }
                    d = d[c]
                }
                e[g] = f
            }
        }
    }
      , Pc = function(c, a, e, g, b, p) {
        for (var b = 0, d = g.length; b < d; b++) {
            var f = g[b];
            if (f) {
                for (var l = !1, f = f[c]; f; ) {
                    if (f[Ya] === e) {
                        l = g[f.sizset];
                        break
                    }
                    1 === f.nodeType && !p && (f[Ya] = e,
                    f.sizset = b);
                    if (f.nodeName.toLowerCase() === a) {
                        l = f;
                        break
                    }
                    f = f[c]
                }
                g[b] = l
            }
        }
    }
      , Yb = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
      , Ya = "sizcache" + (Math.random() + "").replace(".", "")
      , Zb = 0
      , Da = Object.prototype.toString
      , ma = !1
      , Fb = !0
      , sb = /\\/g
      , Gb = /\r\n/g
      , tb = /\W/;
    [0, 0].sort(function() {
        Fb = !1;
        return 0
    });
    var Q = function(c, a, e, g) {
        var e = e || []
          , b = a = a || B;
        if (1 !== a.nodeType && 9 !== a.nodeType)
            return [];
        if (!c || "string" != typeof c)
            return e;
        var p, d, f, l, h, q, A = !0, w = Q.isXML(a), y = [], K = c;
        do
            if (Yb.exec(""),
            p = Yb.exec(K))
                if (K = p[3],
                y.push(p[1]),
                p[2]) {
                    l = p[3];
                    break
                }
        while (p);if (1 < y.length && $b.exec(c))
            if (2 === y.length && S.relative[y[0]])
                d = Hb(y[0] + y[1], a, g);
            else
                for (d = S.relative[y[0]] ? [a] : Q(y.shift(), a); y.length; )
                    c = y.shift(),
                    S.relative[c] && (c += y.shift()),
                    d = Hb(c, d, g);
        else if (!g && 1 < y.length && 9 === a.nodeType && !w && S.match.ID.test(y[0]) && !S.match.ID.test(y[y.length - 1]) && (h = Q.find(y.shift(), a, w),
        a = h.expr ? Q.filter(h.expr, h.set)[0] : h.set[0]),
        a) {
            h = g ? {
                expr: y.pop(),
                set: sa(g)
            } : Q.find(y.pop(), 1 === y.length && ("~" === y[0] || "+" === y[0]) && a.parentNode ? a.parentNode : a, w);
            d = h.expr ? Q.filter(h.expr, h.set) : h.set;
            for (0 < y.length ? f = sa(d) : A = !1; y.length; )
                p = q = y.pop(),
                S.relative[q] ? p = y.pop() : q = "",
                null == p && (p = a),
                S.relative[q](f, p, w)
        } else
            f = [];
        f || (f = d);
        f || Q.error(q || c);
        if ("[object Array]" === Da.call(f))
            if (A)
                if (a && 1 === a.nodeType)
                    for (c = 0; null != f[c]; c++)
                        f[c] && (!0 === f[c] || 1 === f[c].nodeType && Q.contains(a, f[c])) && e.push(d[c]);
                else
                    for (c = 0; null != f[c]; c++)
                        f[c] && 1 === f[c].nodeType && e.push(d[c]);
            else
                e.push.apply(e, f);
        else
            sa(f, e);
        l && (Q(l, b, e, g),
        Q.uniqueSort(e));
        return e
    };
    Q.uniqueSort = function(c) {
        if (Ra && (ma = Fb,
        c.sort(Ra),
        ma))
            for (var a = 1; a < c.length; a++)
                c[a] === c[a - 1] && c.splice(a--, 1);
        return c
    }
    ;
    Q.matches = function(c, a) {
        return Q(c, null, null, a)
    }
    ;
    Q.matchesSelector = function(c, a) {
        return 0 < Q(a, null, null, [c]).length
    }
    ;
    Q.find = function(c, a, e) {
        var g, b, p, d, f, l;
        if (!c)
            return [];
        b = 0;
        for (p = S.order.length; b < p; b++)
            if (f = S.order[b],
            d = S.leftMatch[f].exec(c))
                if (l = d[1],
                d.splice(1, 1),
                "\\" !== l.substr(l.length - 1) && (d[1] = (d[1] || "").replace(sb, ""),
                g = S.find[f](d, a, e),
                null != g)) {
                    c = c.replace(S.match[f], "");
                    break
                }
        g || (g = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : []);
        return {
            set: g,
            expr: c
        }
    }
    ;
    Q.filter = function(c, a, e, g) {
        for (var b, p, f, l, h, q, A, w, y = c, K = [], I = a, T = a && a[0] && Q.isXML(a[0]); c && a.length; ) {
            for (f in S.filter)
                if (null != (b = S.leftMatch[f].exec(c)) && b[2])
                    if (q = S.filter[f],
                    h = b[1],
                    p = !1,
                    b.splice(1, 1),
                    "\\" !== h.substr(h.length - 1)) {
                        I === K && (K = []);
                        if (S.preFilter[f])
                            if (b = S.preFilter[f](b, I, e, K, g, T)) {
                                if (!0 === b)
                                    continue
                            } else
                                p = l = !0;
                        if (b)
                            for (A = 0; null != (h = I[A]); A++)
                                h && (l = q(h, b, A, I),
                                w = g ^ l,
                                e && null != l ? w ? p = !0 : I[A] = !1 : w && (K.push(h),
                                p = !0));
                        if (l !== d) {
                            e || (I = K);
                            c = c.replace(S.match[f], "");
                            if (!p)
                                return [];
                            break
                        }
                    }
            if (c === y)
                if (null == p)
                    Q.error(c);
                else
                    break;
            y = c
        }
        return I
    }
    ;
    Q.error = function(c) {
        throw Error("Syntax error, unrecognized expression: " + c);
    }
    ;
    var Ib = Q.getText = function(c) {
        var a, e;
        a = c.nodeType;
        var g = "";
        if (a)
            if (1 === a || 9 === a || 11 === a) {
                if ("string" == typeof c.textContent)
                    return c.textContent;
                if ("string" == typeof c.innerText)
                    return c.innerText.replace(Gb, "");
                for (c = c.firstChild; c; c = c.nextSibling)
                    g += Ib(c)
            } else {
                if (3 === a || 4 === a)
                    return c.nodeValue
            }
        else
            for (a = 0; e = c[a]; a++)
                8 !== e.nodeType && (g += Ib(e));
        return g
    }
    , S = Q.selectors = {
        order: ["ID", "NAME", "TAG"],
        match: {
            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
            CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
            PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
        },
        leftMatch: {},
        attrMap: {
            "class": "className",
            "for": "htmlFor"
        },
        attrHandle: {
            href: function(c) {
                return c.getAttribute("href")
            },
            type: function(c) {
                return c.getAttribute("type")
            }
        },
        relative: {
            "+": function(c, a) {
                var e = "string" == typeof a
                  , g = e && !tb.test(a)
                  , e = e && !g;
                g && (a = a.toLowerCase());
                for (var g = 0, b = c.length, p; g < b; g++)
                    if (p = c[g]) {
                        for (; (p = p.previousSibling) && 1 !== p.nodeType; )
                            ;
                        c[g] = e || p && p.nodeName.toLowerCase() === a ? p || !1 : p === a
                    }
                e && Q.filter(a, c, !0)
            },
            ">": function(c, a) {
                var e, g = "string" == typeof a, b = 0, p = c.length;
                if (g && !tb.test(a))
                    for (a = a.toLowerCase(); b < p; b++) {
                        if (e = c[b])
                            e = e.parentNode,
                            c[b] = e.nodeName.toLowerCase() === a ? e : !1
                    }
                else {
                    for (; b < p; b++)
                        (e = c[b]) && (c[b] = g ? e.parentNode : e.parentNode === a);
                    g && Q.filter(a, c, !0)
                }
            },
            "": function(c, a, e) {
                var g, b = Zb++, p = Xb;
                "string" == typeof a && !tb.test(a) && (a = a.toLowerCase(),
                g = a,
                p = Pc);
                p("parentNode", a, b, c, g, e)
            },
            "~": function(c, a, e) {
                var g, b = Zb++, p = Xb;
                "string" == typeof a && !tb.test(a) && (a = a.toLowerCase(),
                g = a,
                p = Pc);
                p("previousSibling", a, b, c, g, e)
            }
        },
        find: {
            ID: function(c, a, e) {
                if ("undefined" != typeof a.getElementById && !e)
                    return (c = a.getElementById(c[1])) && c.parentNode ? [c] : []
            },
            NAME: function(c, a) {
                if ("undefined" != typeof a.getElementsByName) {
                    for (var e = [], g = a.getElementsByName(c[1]), b = 0, p = g.length; b < p; b++)
                        g[b].getAttribute("name") === c[1] && e.push(g[b]);
                    return 0 === e.length ? null : e
                }
            },
            TAG: function(c, a) {
                if ("undefined" != typeof a.getElementsByTagName)
                    return a.getElementsByTagName(c[1])
            }
        },
        preFilter: {
            CLASS: function(c, a, e, g, b, p) {
                c = " " + c[1].replace(sb, "") + " ";
                if (p)
                    return c;
                for (var p = 0, d; null != (d = a[p]); p++)
                    d && (b ^ (d.className && 0 <= (" " + d.className + " ").replace(/[\t\n\r]/g, " ").indexOf(c)) ? e || g.push(d) : e && (a[p] = !1));
                return !1
            },
            ID: function(c) {
                return c[1].replace(sb, "")
            },
            TAG: function(c) {
                return c[1].replace(sb, "").toLowerCase()
            },
            CHILD: function(c) {
                if ("nth" === c[1]) {
                    c[2] || Q.error(c[0]);
                    c[2] = c[2].replace(/^\+|\s*/g, "");
                    var a = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === c[2] && "2n" || "odd" === c[2] && "2n+1" || !/\D/.test(c[2]) && "0n+" + c[2] || c[2]);
                    c[2] = a[1] + (a[2] || 1) - 0;
                    c[3] = a[3] - 0
                } else
                    c[2] && Q.error(c[0]);
                c[0] = Zb++;
                return c
            },
            ATTR: function(c, a, e, g, b, p) {
                a = c[1] = c[1].replace(sb, "");
                !p && S.attrMap[a] && (c[1] = S.attrMap[a]);
                c[4] = (c[4] || c[5] || "").replace(sb, "");
                "~=" === c[2] && (c[4] = " " + c[4] + " ");
                return c
            },
            PSEUDO: function(c, a, e, g, b) {
                if ("not" === c[1])
                    if (1 < (Yb.exec(c[3]) || "").length || /^\w/.test(c[3]))
                        c[3] = Q(c[3], null, null, a);
                    else
                        return c = Q.filter(c[3], a, e, 1 ^ b),
                        e || g.push.apply(g, c),
                        !1;
                else if (S.match.POS.test(c[0]) || S.match.CHILD.test(c[0]))
                    return !0;
                return c
            },
            POS: function(c) {
                c.unshift(!0);
                return c
            }
        },
        filters: {
            enabled: function(c) {
                return !1 === c.disabled && "hidden" !== c.type
            },
            disabled: function(c) {
                return !0 === c.disabled
            },
            checked: function(c) {
                return !0 === c.checked
            },
            selected: function(c) {
                c.parentNode && c.parentNode.selectedIndex;
                return !0 === c.selected
            },
            parent: function(c) {
                return !!c.firstChild
            },
            empty: function(c) {
                return !c.firstChild
            },
            has: function(c, a, e) {
                return !!Q(e[3], c).length
            },
            header: function(c) {
                return /h\d/i.test(c.nodeName)
            },
            text: function(c) {
                var a = c.getAttribute("type")
                  , e = c.type;
                return "input" === c.nodeName.toLowerCase() && "text" === e && (a === e || null === a)
            },
            radio: function(c) {
                return "input" === c.nodeName.toLowerCase() && "radio" === c.type
            },
            checkbox: function(c) {
                return "input" === c.nodeName.toLowerCase() && "checkbox" === c.type
            },
            file: function(c) {
                return "input" === c.nodeName.toLowerCase() && "file" === c.type
            },
            password: function(c) {
                return "input" === c.nodeName.toLowerCase() && "password" === c.type
            },
            submit: function(c) {
                var a = c.nodeName.toLowerCase();
                return ("input" === a || "button" === a) && "submit" === c.type
            },
            image: function(c) {
                return "input" === c.nodeName.toLowerCase() && "image" === c.type
            },
            reset: function(c) {
                var a = c.nodeName.toLowerCase();
                return ("input" === a || "button" === a) && "reset" === c.type
            },
            button: function(c) {
                var a = c.nodeName.toLowerCase();
                return "input" === a && "button" === c.type || "button" === a
            },
            input: function(c) {
                return /input|select|textarea|button/i.test(c.nodeName)
            },
            focus: function(c) {
                return c === c.ownerDocument.activeElement
            }
        },
        setFilters: {
            first: function(c, a) {
                return 0 === a
            },
            last: function(c, a, e, g) {
                return a === g.length - 1
            },
            even: function(c, a) {
                return 0 === a % 2
            },
            odd: function(c, a) {
                return 1 === a % 2
            },
            lt: function(c, a, e) {
                return a < e[3] - 0
            },
            gt: function(c, a, e) {
                return a > e[3] - 0
            },
            nth: function(c, a, e) {
                return e[3] - 0 === a
            },
            eq: function(c, a, e) {
                return e[3] - 0 === a
            }
        },
        filter: {
            PSEUDO: function(c, a, e, g) {
                var b = a[1]
                  , p = S.filters[b];
                if (p)
                    return p(c, e, a, g);
                if ("contains" === b)
                    return 0 <= (c.textContent || c.innerText || Ib([c]) || "").indexOf(a[3]);
                if ("not" === b) {
                    a = a[3];
                    e = 0;
                    for (g = a.length; e < g; e++)
                        if (a[e] === c)
                            return !1;
                    return !0
                }
                Q.error(b)
            },
            CHILD: function(c, a) {
                var e, g, b, p, d, f;
                e = a[1];
                f = c;
                switch (e) {
                case "only":
                case "first":
                    for (; f = f.previousSibling; )
                        if (1 === f.nodeType)
                            return !1;
                    if ("first" === e)
                        return !0;
                    f = c;
                case "last":
                    for (; f = f.nextSibling; )
                        if (1 === f.nodeType)
                            return !1;
                    return !0;
                case "nth":
                    e = a[2];
                    g = a[3];
                    if (1 === e && 0 === g)
                        return !0;
                    b = a[0];
                    if ((p = c.parentNode) && (p[Ya] !== b || !c.nodeIndex)) {
                        d = 0;
                        for (f = p.firstChild; f; f = f.nextSibling)
                            1 === f.nodeType && (f.nodeIndex = ++d);
                        p[Ya] = b
                    }
                    f = c.nodeIndex - g;
                    return 0 === e ? 0 === f : 0 === f % e && 0 <= f / e
                }
            },
            ID: function(c, a) {
                return 1 === c.nodeType && c.getAttribute("id") === a
            },
            TAG: function(c, a) {
                return "*" === a && 1 === c.nodeType || !!c.nodeName && c.nodeName.toLowerCase() === a
            },
            CLASS: function(c, a) {
                return -1 < (" " + (c.className || c.getAttribute("class")) + " ").indexOf(a)
            },
            ATTR: function(c, a) {
                var e = a[1]
                  , e = Q.attr ? Q.attr(c, e) : S.attrHandle[e] ? S.attrHandle[e](c) : null != c[e] ? c[e] : c.getAttribute(e)
                  , g = e + ""
                  , b = a[2]
                  , p = a[4];
                return null == e ? "!=" === b : !b && Q.attr ? null != e : "=" === b ? g === p : "*=" === b ? 0 <= g.indexOf(p) : "~=" === b ? 0 <= (" " + g + " ").indexOf(p) : p ? "!=" === b ? g !== p : "^=" === b ? 0 === g.indexOf(p) : "$=" === b ? g.substr(g.length - p.length) === p : "|=" === b ? g === p || g.substr(0, p.length + 1) === p + "-" : !1 : g && !1 !== e
            },
            POS: function(c, a, e, g) {
                var b = S.setFilters[a[2]];
                if (b)
                    return b(c, e, a, g)
            }
        }
    }, $b = S.match.POS, Ea = function(c, a) {
        return "\\" + (a - 0 + 1)
    }, Za;
    for (Za in S.match)
        S.match[Za] = RegExp(S.match[Za].source + /(?![^\[]*\])(?![^\(]*\))/.source),
        S.leftMatch[Za] = RegExp(/(^(?:.|\r|\n)*?)/.source + S.match[Za].source.replace(/\\(\d+)/g, Ea));
    S.match.globalPOS = $b;
    var sa = function(c, a) {
        c = Array.prototype.slice.call(c, 0);
        return a ? (a.push.apply(a, c),
        a) : c
    };
    try {
        Array.prototype.slice.call(B.documentElement.childNodes, 0)[0].nodeType
    } catch (J) {
        sa = function(c, a) {
            var e = 0
              , g = a || [];
            if ("[object Array]" === Da.call(c))
                Array.prototype.push.apply(g, c);
            else if ("number" == typeof c.length)
                for (var b = c.length; e < b; e++)
                    g.push(c[e]);
            else
                for (; c[e]; e++)
                    g.push(c[e]);
            return g
        }
    }
    var Ra, Sa;
    B.documentElement.compareDocumentPosition ? Ra = function(c, a) {
        return c === a ? (ma = !0,
        0) : !c.compareDocumentPosition || !a.compareDocumentPosition ? c.compareDocumentPosition ? -1 : 1 : c.compareDocumentPosition(a) & 4 ? -1 : 1
    }
    : (Ra = function(c, a) {
        if (c === a)
            return ma = !0,
            0;
        if (c.sourceIndex && a.sourceIndex)
            return c.sourceIndex - a.sourceIndex;
        var e, g, b = [], p = [];
        e = c.parentNode;
        g = a.parentNode;
        var f = e;
        if (e === g)
            return Sa(c, a);
        if (!e)
            return -1;
        if (!g)
            return 1;
        for (; f; )
            b.unshift(f),
            f = f.parentNode;
        for (f = g; f; )
            p.unshift(f),
            f = f.parentNode;
        e = b.length;
        g = p.length;
        for (f = 0; f < e && f < g; f++)
            if (b[f] !== p[f])
                return Sa(b[f], p[f]);
        return f === e ? Sa(c, p[f], -1) : Sa(b[f], a, 1)
    }
    ,
    Sa = function(c, a, e) {
        if (c === a)
            return e;
        for (c = c.nextSibling; c; ) {
            if (c === a)
                return -1;
            c = c.nextSibling
        }
        return 1
    }
    );
    var Jb = B.createElement("div")
      , xa = "script" + (new Date).getTime()
      , ac = B.documentElement;
    Jb.innerHTML = "<a name='" + xa + "'/>";
    ac.insertBefore(Jb, ac.firstChild);
    B.getElementById(xa) && (S.find.ID = function(c, a, e) {
        if ("undefined" != typeof a.getElementById && !e)
            return (a = a.getElementById(c[1])) ? a.id === c[1] || "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id").nodeValue === c[1] ? [a] : d : []
    }
    ,
    S.filter.ID = function(c, a) {
        var e = "undefined" != typeof c.getAttributeNode && c.getAttributeNode("id");
        return 1 === c.nodeType && e && e.nodeValue === a
    }
    );
    ac.removeChild(Jb);
    var ac = Jb = null
      , $a = B.createElement("div");
    $a.appendChild(B.createComment(""));
    0 < $a.getElementsByTagName("*").length && (S.find.TAG = function(c, a) {
        var e = a.getElementsByTagName(c[1]);
        if ("*" === c[1]) {
            for (var g = [], b = 0; e[b]; b++)
                1 === e[b].nodeType && g.push(e[b]);
            e = g
        }
        return e
    }
    );
    $a.innerHTML = "<a href='#'></a>";
    $a.firstChild && "undefined" != typeof $a.firstChild.getAttribute && "#" !== $a.firstChild.getAttribute("href") && (S.attrHandle.href = function(c) {
        return c.getAttribute("href", 2)
    }
    );
    $a = null;
    if (B.querySelectorAll) {
        var sc = Q
          , Fa = B.createElement("div");
        Fa.innerHTML = "<p class='TEST'></p>";
        if (!Fa.querySelectorAll || 0 !== Fa.querySelectorAll(".TEST").length) {
            var Q = function(c, a, e, g) {
                a = a || B;
                if (!g && !Q.isXML(a)) {
                    var b = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(c);
                    if (b && (1 === a.nodeType || 9 === a.nodeType)) {
                        if (b[1])
                            return sa(a.getElementsByTagName(c), e);
                        if (b[2] && S.find.CLASS && a.getElementsByClassName)
                            return sa(a.getElementsByClassName(b[2]), e)
                    }
                    if (9 === a.nodeType) {
                        if ("body" === c && a.body)
                            return sa([a.body], e);
                        if (b && b[3]) {
                            var p = a.getElementById(b[3]);
                            if (!p || !p.parentNode)
                                return sa([], e);
                            if (p.id === b[3])
                                return sa([p], e)
                        }
                        try {
                            return sa(a.querySelectorAll(c), e)
                        } catch (f) {}
                    } else if (1 === a.nodeType && "object" !== a.nodeName.toLowerCase()) {
                        var b = a
                          , d = (p = a.getAttribute("id")) || "__sizzle__"
                          , l = a.parentNode
                          , h = /^\s*[+~]/.test(c);
                        p ? d = d.replace(/'/g, "\\$&") : a.setAttribute("id", d);
                        h && l && (a = a.parentNode);
                        try {
                            if (!h || l)
                                return sa(a.querySelectorAll("[id='" + d + "'] " + c), e)
                        } catch (q) {} finally {
                            p || b.removeAttribute("id")
                        }
                    }
                }
                return sc(c, a, e, g)
            }, Kb;
            for (Kb in sc)
                Q[Kb] = sc[Kb];
            Fa = null
        }
    }
    var Lb = B.documentElement
      , ab = Lb.matchesSelector || Lb.mozMatchesSelector || Lb.webkitMatchesSelector || Lb.msMatchesSelector;
    if (ab) {
        var Qc = !ab.call(B.createElement("div"), "div")
          , Ga = !1;
        try {
            ab.call(B.documentElement, "[test!='']:sizzle")
        } catch (wd) {
            Ga = !0
        }
        Q.matchesSelector = function(c, a) {
            a = a.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
            if (!Q.isXML(c))
                try {
                    if (Ga || !S.match.PSEUDO.test(a) && !/!=/.test(a)) {
                        var e = ab.call(c, a);
                        if (e || !Qc || c.document && 11 !== c.document.nodeType)
                            return e
                    }
                } catch (g) {}
            return 0 < Q(a, null, null, [c]).length
        }
    }
    var bb = B.createElement("div");
    bb.innerHTML = "<div class='test e'></div><div class='test'></div>";
    bb.getElementsByClassName && 0 !== bb.getElementsByClassName("e").length && (bb.lastChild.className = "e",
    1 !== bb.getElementsByClassName("e").length && (S.order.splice(1, 0, "CLASS"),
    S.find.CLASS = function(c, a, e) {
        if ("undefined" != typeof a.getElementsByClassName && !e)
            return a.getElementsByClassName(c[1])
    }
    ,
    bb = null));
    B.documentElement.contains ? Q.contains = function(c, a) {
        return c !== a && (c.contains ? c.contains(a) : true)
    }
    : B.documentElement.compareDocumentPosition ? Q.contains = function(c, a) {
        return !!(c.compareDocumentPosition(a) & 16)
    }
    : Q.contains = function() {
        return false
    }
    ;
    Q.isXML = function(c) {
        return (c = (c ? c.ownerDocument || c : 0).documentElement) ? c.nodeName !== "HTML" : false
    }
    ;
    var Hb = function(c, a, e) {
        for (var g, b = [], p = "", a = a.nodeType ? [a] : a; g = S.match.PSEUDO.exec(c); ) {
            p = p + g[0];
            c = c.replace(S.match.PSEUDO, "")
        }
        c = S.relative[c] ? c + "*" : c;
        g = 0;
        for (var f = a.length; g < f; g++)
            Q(c, a[g], b, e);
        return Q.filter(p, b)
    };
    Q.attr = e.attr;
    Q.selectors.attrMap = {};
    e.find = Q;
    e.expr = Q.selectors;
    e.expr[":"] = e.expr.filters;
    e.unique = Q.uniqueSort;
    e.text = Q.getText;
    e.isXMLDoc = Q.isXML;
    e.contains = Q.contains;
    var Rc = /Until$/
      , cb = /^(?:parents|prevUntil|prevAll)/
      , ya = /,/
      , yb = /^.[^:#\[\.,]*$/
      , Mb = Array.prototype.slice
      , tc = e.expr.match.globalPOS
      , Sc = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    e.fn.extend({
        find: function(c) {
            var a = this, g, b;
            if (typeof c != "string")
                return e(c).filter(function() {
                    g = 0;
                    for (b = a.length; g < b; g++)
                        if (e.contains(a[g], this))
                            return true
                });
            var p = this.pushStack("", "find", c), f, d, l;
            g = 0;
            for (b = this.length; g < b; g++) {
                f = p.length;
                e.find(c, this[g], p);
                if (g > 0)
                    for (d = f; d < p.length; d++)
                        for (l = 0; l < f; l++)
                            if (p[l] === p[d]) {
                                p.splice(d--, 1);
                                break
                            }
            }
            return p
        },
        has: function(c) {
            var a = e(c);
            return this.filter(function() {
                for (var c = 0, g = a.length; c < g; c++)
                    if (e.contains(this, a[c]))
                        return true
            })
        },
        not: function(c) {
            return this.pushStack(V(this, c, false), "not", c)
        },
        filter: function(c) {
            return this.pushStack(V(this, c, true), "filter", c)
        },
        is: function(c) {
            return !!c && (typeof c == "string" ? tc.test(c) ? e(c, this.context).index(this[0]) >= 0 : e.filter(c, this).length > 0 : this.filter(c).length > 0)
        },
        closest: function(c, a) {
            var g = [], b, p, f = this[0];
            if (e.isArray(c)) {
                for (p = 1; f && f.ownerDocument && f !== a; ) {
                    for (b = 0; b < c.length; b++)
                        e(f).is(c[b]) && g.push({
                            selector: c[b],
                            elem: f,
                            level: p
                        });
                    f = f.parentNode;
                    p++
                }
                return g
            }
            var d = tc.test(c) || typeof c != "string" ? e(c, a || this.context) : 0;
            b = 0;
            for (p = this.length; b < p; b++)
                for (f = this[b]; f; ) {
                    if (d ? d.index(f) > -1 : e.find.matchesSelector(f, c)) {
                        g.push(f);
                        break
                    }
                    f = f.parentNode;
                    if (!f || !f.ownerDocument || f === a || f.nodeType === 11)
                        break
                }
            g = g.length > 1 ? e.unique(g) : g;
            return this.pushStack(g, "closest", c)
        },
        index: function(c) {
            return !c ? this[0] && this[0].parentNode ? this.prevAll().length : -1 : typeof c == "string" ? e.inArray(this[0], e(c)) : e.inArray(c.jquery ? c[0] : c, this)
        },
        add: function(c, a) {
            var g = typeof c == "string" ? e(c, a) : e.makeArray(c && c.nodeType ? [c] : c)
              , b = e.merge(this.get(), g);
            return this.pushStack(!g[0] || !g[0].parentNode || g[0].parentNode.nodeType === 11 || !b[0] || !b[0].parentNode || b[0].parentNode.nodeType === 11 ? b : e.unique(b))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    });
    e.each({
        parent: function(c) {
            return (c = c.parentNode) && c.nodeType !== 11 ? c : null
        },
        parents: function(c) {
            return e.dir(c, "parentNode")
        },
        parentsUntil: function(c, a, g) {
            return e.dir(c, "parentNode", g)
        },
        next: function(c) {
            return e.nth(c, 2, "nextSibling")
        },
        prev: function(c) {
            return e.nth(c, 2, "previousSibling")
        },
        nextAll: function(c) {
            return e.dir(c, "nextSibling")
        },
        prevAll: function(c) {
            return e.dir(c, "previousSibling")
        },
        nextUntil: function(c, a, g) {
            return e.dir(c, "nextSibling", g)
        },
        prevUntil: function(c, a, g) {
            return e.dir(c, "previousSibling", g)
        },
        siblings: function(c) {
            return e.sibling((c.parentNode || {}).firstChild, c)
        },
        children: function(c) {
            return e.sibling(c.firstChild)
        },
        contents: function(c) {
            return e.nodeName(c, "iframe") ? c.contentDocument || c.contentWindow.document : e.makeArray(c.childNodes)
        }
    }, function(c, a) {
        e.fn[c] = function(g, b) {
            var p = e.map(this, a, g);
            Rc.test(c) || (b = g);
            b && typeof b == "string" && (p = e.filter(b, p));
            p = this.length > 1 && !Sc[c] ? e.unique(p) : p;
            (this.length > 1 || ya.test(b)) && cb.test(c) && (p = p.reverse());
            return this.pushStack(p, c, Mb.call(arguments).join(","))
        }
    });
    e.extend({
        filter: function(c, a, g) {
            g && (c = ":not(" + c + ")");
            return a.length === 1 ? e.find.matchesSelector(a[0], c) ? [a[0]] : [] : e.find.matches(c, a)
        },
        dir: function(c, a, g) {
            for (var b = [], c = c[a]; c && c.nodeType !== 9 && (g === d || c.nodeType !== 1 || !e(c).is(g)); ) {
                c.nodeType === 1 && b.push(c);
                c = c[a]
            }
            return b
        },
        nth: function(c, a, e) {
            for (var a = a || 1, g = 0; c; c = c[e])
                if (c.nodeType === 1 && ++g === a)
                    break;
            return c
        },
        sibling: function(c, a) {
            for (var e = []; c; c = c.nextSibling)
                c.nodeType === 1 && c !== a && e.push(c);
            return e
        }
    });
    var Jc = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , bc = / jQuery\d+="(?:\d+|null)"/g
      , uc = /^\s+/
      , vc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
      , ub = /<([\w:]+)/
      , ld = /<tbody/i
      , md = /<|&#?\w+;/
      , wc = /<(?:script|style)/i
      , nd = /<(?:script|object|embed|option|style)/i
      , db = RegExp("<(?:" + Jc + ")[\\s/>]", "i")
      , Tc = /checked\s*(?:[^=]|=\s*.checked.)/i
      , xc = /\/(java|ecma)script/i
      , od = /^\s*<!(?:\[CDATA\[|\-\-)/
      , la = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , eb = C(B);
    la.optgroup = la.option;
    la.tbody = la.tfoot = la.colgroup = la.caption = la.thead;
    la.th = la.td;
    e.support.htmlSerialize || (la._default = [1, "div<div>", "</div>"]);
    e.fn.extend({
        text: function(c) {
            return e.access(this, function(c) {
                return c === d ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || B).createTextNode(c))
            }, null, c, arguments.length)
        },
        wrapAll: function(c) {
            if (e.isFunction(c))
                return this.each(function(a) {
                    e(this).wrapAll(c.call(this, a))
                });
            if (this[0]) {
                var a = e(c, this[0].ownerDocument).eq(0).clone(true);
                this[0].parentNode && a.insertBefore(this[0]);
                a.map(function() {
                    for (var c = this; c.firstChild && c.firstChild.nodeType === 1; )
                        c = c.firstChild;
                    return c
                }).append(this)
            }
            return this
        },
        wrapInner: function(c) {
            return e.isFunction(c) ? this.each(function(a) {
                e(this).wrapInner(c.call(this, a))
            }) : this.each(function() {
                var a = e(this)
                  , g = a.contents();
                g.length ? g.wrapAll(c) : a.append(c)
            })
        },
        wrap: function(c) {
            var a = e.isFunction(c);
            return this.each(function(g) {
                e(this).wrapAll(a ? c.call(this, g) : c)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, true, function(c) {
                this.nodeType === 1 && this.appendChild(c)
            })
        },
        prepend: function() {
            return this.domManip(arguments, true, function(c) {
                this.nodeType === 1 && this.insertBefore(c, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, false, function(c) {
                    this.parentNode.insertBefore(c, this)
                });
            if (arguments.length) {
                var c = e.clean(arguments);
                c.push.apply(c, this.toArray());
                return this.pushStack(c, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, false, function(c) {
                    this.parentNode.insertBefore(c, this.nextSibling)
                });
            if (arguments.length) {
                var c = this.pushStack(this, "after", arguments);
                c.push.apply(c, e.clean(arguments));
                return c
            }
        },
        remove: function(c, a) {
            for (var g = 0, b; (b = this[g]) != null; g++)
                if (!c || e.filter(c, [b]).length) {
                    !a && b.nodeType === 1 && (e.cleanData(b.getElementsByTagName("*")),
                    e.cleanData([b]));
                    b.parentNode && b.parentNode.removeChild(b)
                }
            return this
        },
        empty: function() {
            for (var c = 0, a; (a = this[c]) != null; c++)
                for (a.nodeType === 1 && e.cleanData(a.getElementsByTagName("*")); a.firstChild; )
                    a.removeChild(a.firstChild);
            return this
        },
        clone: function(c, a) {
            c = c == null ? false : c;
            a = a == null ? c : a;
            return this.map(function() {
                return e.clone(this, c, a)
            })
        },
        html: function(c) {
            return e.access(this, function(c) {
                var a = this[0] || {}
                  , g = 0
                  , b = this.length;
                if (c === d)
                    return a.nodeType === 1 ? a.innerHTML.replace(bc, "") : null;
                if (typeof c == "string" && !wc.test(c) && (e.support.leadingWhitespace || !uc.test(c)) && !la[(ub.exec(c) || ["", ""])[1].toLowerCase()]) {
                    c = c.replace(vc, "<$1></$2>");
                    try {
                        for (; g < b; g++) {
                            a = this[g] || {};
                            a.nodeType === 1 && (e.cleanData(a.getElementsByTagName("*")),
                            a.innerHTML = c)
                        }
                        a = 0
                    } catch (p) {}
                }
                a && this.empty().append(c)
            }, null, c, arguments.length)
        },
        replaceWith: function(c) {
            if (this[0] && this[0].parentNode) {
                if (e.isFunction(c))
                    return this.each(function(a) {
                        var g = e(this)
                          , b = g.html();
                        g.replaceWith(c.call(this, a, b))
                    });
                typeof c != "string" && (c = e(c).detach());
                return this.each(function() {
                    var a = this.nextSibling
                      , g = this.parentNode;
                    e(this).remove();
                    a ? e(a).before(c) : e(g).append(c)
                })
            }
            return this.length ? this.pushStack(e(e.isFunction(c) ? c() : c), "replaceWith", c) : this
        },
        detach: function(c) {
            return this.remove(c, true)
        },
        domManip: function(c, a, g) {
            var b, p, f, l = c[0], h = [];
            if (!e.support.checkClone && arguments.length === 3 && typeof l == "string" && Tc.test(l))
                return this.each(function() {
                    e(this).domManip(c, a, g, true)
                });
            if (e.isFunction(l))
                return this.each(function(b) {
                    var p = e(this);
                    c[0] = l.call(this, b, a ? p.html() : d);
                    p.domManip(c, a, g)
                });
            if (this[0]) {
                f = l && l.parentNode;
                e.support.parentNode && f && f.nodeType === 11 && f.childNodes.length === this.length ? b = {
                    fragment: f
                } : b = e.buildFragment(c, this, h);
                f = b.fragment;
                f.childNodes.length === 1 ? p = f = f.firstChild : p = f.firstChild;
                if (p) {
                    a = a && e.nodeName(p, "tr");
                    p = 0;
                    for (var q = this.length, A = q - 1; p < q; p++)
                        g.call(a ? e.nodeName(this[p], "table") ? this[p].getElementsByTagName("tbody")[0] || this[p].appendChild(this[p].ownerDocument.createElement("tbody")) : this[p] : this[p], b.cacheable || q > 1 && p < A ? e.clone(f, true, true) : f)
                }
                h.length && e.each(h, function(c, a) {
                    a.src ? e.ajax({
                        type: "GET",
                        global: false,
                        url: a.src,
                        async: false,
                        dataType: "script"
                    }) : e.globalEval((a.text || a.textContent || a.innerHTML || "").replace(od, "/*$0*/"));
                    a.parentNode && a.parentNode.removeChild(a)
                })
            }
            return this
        }
    });
    e.buildFragment = function(c, a, g) {
        var b, p, f, d, l = c[0];
        a && a[0] && (d = a[0].ownerDocument || a[0]);
        d.createDocumentFragment || (d = B);
        c.length === 1 && typeof l == "string" && l.length < 512 && d === B && l.charAt(0) === "<" && !nd.test(l) && (e.support.checkClone || !Tc.test(l)) && (e.support.html5Clone || !db.test(l)) && (p = true,
        f = e.fragments[l],
        f && f !== 1 && (b = f));
        b || (b = d.createDocumentFragment(),
        e.clean(c, d, b, g));
        p && (e.fragments[l] = f ? b : 1);
        return {
            fragment: b,
            cacheable: p
        }
    }
    ;
    e.fragments = {};
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(c, a) {
        e.fn[c] = function(g) {
            var b = []
              , g = e(g)
              , p = this.length === 1 && this[0].parentNode;
            if (p && p.nodeType === 11 && p.childNodes.length === 1 && g.length === 1) {
                g[a](this[0]);
                return this
            }
            for (var p = 0, f = g.length; p < f; p++) {
                var d = (p > 0 ? this.clone(true) : this).get();
                e(g[p])[a](d);
                b = b.concat(d)
            }
            return this.pushStack(b, c, g.selector)
        }
    });
    e.extend({
        clone: function(c, a, g) {
            var b, p, f;
            if (e.support.html5Clone || e.isXMLDoc(c) || !db.test("<" + c.nodeName + ">"))
                b = c.cloneNode(true);
            else {
                b = B.createElement("div");
                eb.appendChild(b);
                b.innerHTML = c.outerHTML;
                b = b.firstChild
            }
            var d = b;
            if ((!e.support.noCloneEvent || !e.support.noCloneChecked) && (c.nodeType === 1 || c.nodeType === 11) && !e.isXMLDoc(c)) {
                K(c, d);
                b = I(c);
                p = I(d);
                for (f = 0; b[f]; ++f)
                    p[f] && K(b[f], p[f])
            }
            if (a) {
                U(c, d);
                if (g) {
                    b = I(c);
                    p = I(d);
                    for (f = 0; b[f]; ++f)
                        U(b[f], p[f])
                }
            }
            return d
        },
        clean: function(c, a, g, b) {
            var p, f = [], a = a || B;
            typeof a.createElement == "undefined" && (a = a.ownerDocument || a[0] && a[0].ownerDocument || B);
            for (var d = 0, l; (l = c[d]) != null; d++) {
                typeof l == "number" && (l = l + "");
                if (l) {
                    if (typeof l == "string")
                        if (md.test(l)) {
                            l = l.replace(vc, "<$1></$2>");
                            p = (ub.exec(l) || ["", ""])[1].toLowerCase();
                            var h = la[p] || la._default, q = h[0], A = a.createElement("div"), y = eb.childNodes, K;
                            a === B ? eb.appendChild(A) : C(a).appendChild(A);
                            for (A.innerHTML = h[1] + l + h[2]; q--; )
                                A = A.lastChild;
                            if (!e.support.tbody) {
                                q = ld.test(l);
                                h = p === "table" && !q ? A.firstChild && A.firstChild.childNodes : h[1] === "<table>" && !q ? A.childNodes : [];
                                for (p = h.length - 1; p >= 0; --p)
                                    e.nodeName(h[p], "tbody") && !h[p].childNodes.length && h[p].parentNode.removeChild(h[p])
                            }
                            !e.support.leadingWhitespace && uc.test(l) && A.insertBefore(a.createTextNode(uc.exec(l)[0]), A.firstChild);
                            l = A.childNodes;
                            A && (A.parentNode.removeChild(A),
                            y.length > 0 && (K = y[y.length - 1],
                            K && K.parentNode && K.parentNode.removeChild(K)))
                        } else
                            l = a.createTextNode(l);
                    var I;
                    if (!e.support.appendChecked)
                        if (l[0] && typeof (I = l.length) == "number")
                            for (p = 0; p < I; p++)
                                w(l[p]);
                        else
                            w(l);
                    l.nodeType ? f.push(l) : f = e.merge(f, l)
                }
            }
            if (g) {
                c = function(c) {
                    return !c.type || xc.test(c.type)
                }
                ;
                for (d = 0; f[d]; d++) {
                    a = f[d];
                    if (b && e.nodeName(a, "script") && (!a.type || xc.test(a.type)))
                        b.push(a.parentNode ? a.parentNode.removeChild(a) : a);
                    else {
                        if (a.nodeType === 1) {
                            l = e.grep(a.getElementsByTagName("script"), c);
                            f.splice.apply(f, [d + 1, 0].concat(l))
                        }
                        g.appendChild(a)
                    }
                }
            }
            return f
        },
        cleanData: function(c) {
            for (var a, g, b = e.cache, p = e.event.special, f = e.support.deleteExpando, d = 0, l; (l = c[d]) != null; d++)
                if (!l.nodeName || !e.noData[l.nodeName.toLowerCase()])
                    if (g = l[e.expando]) {
                        if ((a = b[g]) && a.events) {
                            for (var h in a.events)
                                p[h] ? e.event.remove(l, h) : e.removeEvent(l, h, a.handle);
                            a.handle && (a.handle.elem = null)
                        }
                        f ? delete l[e.expando] : l.removeAttribute && l.removeAttribute(e.expando);
                        delete b[g]
                    }
        }
    });
    var yc = /alpha\([^)]*\)/i, Nb = /opacity=([^)]*)/, pd = /([A-Z]|^ms)/g, cc = /^[\-+]?(?:\d*\.)?\d+$/i, jc = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, zc = /^([\-+])=([\-+.\de]+)/, qd = /^margin/, Uc = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ba = ["Top", "Right", "Bottom", "Left"], Ta, Vc, ja;
    e.fn.css = function(c, a) {
        return e.access(this, function(c, a, g) {
            return g !== d ? e.style(c, a, g) : e.css(c, a)
        }, c, a, arguments.length > 1)
    }
    ;
    e.extend({
        cssHooks: {
            opacity: {
                get: function(c, a) {
                    if (a) {
                        var g = Ta(c, "opacity");
                        return g === "" ? "1" : g
                    }
                    return c.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": e.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(c, a, g, b) {
            if (c && c.nodeType !== 3 && c.nodeType !== 8 && c.style) {
                var p, f = e.camelCase(a), l = c.style, h = e.cssHooks[f], a = e.cssProps[f] || f;
                if (g === d)
                    return h && "get"in h && (p = h.get(c, false, b)) !== d ? p : l[a];
                b = typeof g;
                b === "string" && (p = zc.exec(g)) && (g = +(p[1] + 1) * +p[2] + parseFloat(e.css(c, a)),
                b = "number");
                if (!(g == null || b === "number" && isNaN(g))) {
                    b === "number" && !e.cssNumber[f] && (g = g + "px");
                    if (!h || !("set"in h) || (g = h.set(c, g)) !== d)
                        try {
                            l[a] = g
                        } catch (q) {}
                }
            }
        },
        css: function(c, a, g) {
            var b, p, a = e.camelCase(a);
            p = e.cssHooks[a];
            a = e.cssProps[a] || a;
            a === "cssFloat" && (a = "float");
            if (p && "get"in p && (b = p.get(c, true, g)) !== d)
                return b;
            if (Ta)
                return Ta(c, a)
        },
        swap: function(c, a, g) {
            var e = {}, b;
            for (b in a) {
                e[b] = c.style[b];
                c.style[b] = a[b]
            }
            g = g.call(c);
            for (b in a)
                c.style[b] = e[b];
            return g
        }
    });
    e.curCSS = e.css;
    B.defaultView && B.defaultView.getComputedStyle && (Vc = function(c, a) {
        var g, b, p, f, d = c.style, a = a.replace(pd, "-$1").toLowerCase();
        (b = c.ownerDocument.defaultView) && (p = b.getComputedStyle(c, null)) && (g = p.getPropertyValue(a),
        g === "" && !e.contains(c.ownerDocument.documentElement, c) && (g = e.style(c, a)));
        !e.support.pixelMargin && p && qd.test(a) && jc.test(g) && (f = d.width,
        d.width = g,
        g = p.width,
        d.width = f);
        return g
    }
    );
    B.documentElement.currentStyle && (ja = function(c, a) {
        var g, e, b, p = c.currentStyle && c.currentStyle[a], f = c.style;
        p == null && f && (b = f[a]) && (p = b);
        jc.test(p) && (g = f.left,
        e = c.runtimeStyle && c.runtimeStyle.left,
        e && (c.runtimeStyle.left = c.currentStyle.left),
        f.left = a === "fontSize" ? "1em" : p,
        p = f.pixelLeft + "px",
        f.left = g,
        e && (c.runtimeStyle.left = e));
        return p === "" ? "auto" : p
    }
    );
    Ta = Vc || ja;
    e.each(["height", "width"], function(c, a) {
        e.cssHooks[a] = {
            get: function(c, g, b) {
                if (g)
                    return c.offsetWidth !== 0 ? F(c, a, b) : e.swap(c, Uc, function() {
                        return F(c, a, b)
                    })
            },
            set: function(c, a) {
                return cc.test(a) ? a + "px" : a
            }
        }
    });
    e.support.opacity || (e.cssHooks.opacity = {
        get: function(c, a) {
            return Nb.test((a && c.currentStyle ? c.currentStyle.filter : c.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : a ? "1" : ""
        },
        set: function(c, a) {
            var g = c.style
              , b = c.currentStyle
              , p = e.isNumeric(a) ? "alpha(opacity=" + a * 100 + ")" : ""
              , f = b && b.filter || g.filter || "";
            g.zoom = 1;
            if (a >= 1 && e.trim(f.replace(yc, "")) === "") {
                g.removeAttribute("filter");
                if (b && !b.filter)
                    return
            }
            g.filter = yc.test(f) ? f.replace(yc, p) : f + " " + p
        }
    });
    e(function() {
        e.support.reliableMarginRight || (e.cssHooks.marginRight = {
            get: function(c, a) {
                return e.swap(c, {
                    display: "inline-block"
                }, function() {
                    return a ? Ta(c, "margin-right") : c.style.marginRight
                })
            }
        })
    });
    e.expr && e.expr.filters && (e.expr.filters.hidden = function(c) {
        var a = c.offsetHeight;
        return c.offsetWidth === 0 && a === 0 || !e.support.reliableHiddenOffsets && (c.style && c.style.display || e.css(c, "display")) === "none"
    }
    ,
    e.expr.filters.visible = function(c) {
        return !e.expr.filters.hidden(c)
    }
    );
    e.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(c, a) {
        e.cssHooks[c + a] = {
            expand: function(g) {
                for (var e = typeof g == "string" ? g.split(" ") : [g], b = {}, g = 0; g < 4; g++)
                    b[c + Ba[g] + a] = e[g] || e[g - 2] || e[0];
                return b
            }
        }
    });
    var Wc = /%20/g, Ic = /\[\]$/, Ac = /\r?\n/g, Xc = /#.*$/, Yc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Bc = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Cc = /^(?:GET|HEAD)$/, Dc = /^\/\//, dc = /\?/, za = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Ha = /^(?:select|textarea)/i, na = /\s+/, Ia = /([?&])_=[^&]*/, ta = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, Ob = e.fn.load, Rb = {}, Ec = {}, ea, fb, Zc = ["*/"] + ["*"];
    try {
        ea = x.href
    } catch (Pb) {
        ea = B.createElement("a"),
        ea.href = "",
        ea = ea.href
    }
    fb = ta.exec(ea.toLowerCase()) || [];
    e.fn.extend({
        load: function(c, a, g) {
            if (typeof c != "string" && Ob)
                return Ob.apply(this, arguments);
            if (!this.length)
                return this;
            var b = c.indexOf(" ");
            if (b >= 0)
                var p = c.slice(b, c.length)
                  , c = c.slice(0, b);
            b = "GET";
            a && (e.isFunction(a) ? (g = a,
            a = d) : typeof a == "object" && (a = e.param(a, e.ajaxSettings.traditional),
            b = "POST"));
            var f = this;
            e.ajax({
                url: c,
                type: b,
                dataType: "html",
                data: a,
                complete: function(c, a, b) {
                    b = c.responseText;
                    c.isResolved() && (c.done(function(c) {
                        b = c
                    }),
                    f.html(p ? e("<div>").append(b.replace(za, "")).find(p) : b));
                    g && f.each(g, [b, a, c])
                }
            });
            return this
        },
        serialize: function() {
            return e.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? e.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Ha.test(this.nodeName) || Bc.test(this.type))
            }).map(function(c, a) {
                var g = e(this).val();
                return g == null ? null : e.isArray(g) ? e.map(g, function(c) {
                    return {
                        name: a.name,
                        value: c.replace(Ac, "\r\n")
                    }
                }) : {
                    name: a.name,
                    value: g.replace(Ac, "\r\n")
                }
            }).get()
        }
    });
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(c, a) {
        e.fn[a] = function(c) {
            return this.on(a, c)
        }
    });
    e.each(["get", "post"], function(c, a) {
        e[a] = function(c, g, b, p) {
            e.isFunction(g) && (p = p || b,
            b = g,
            g = d);
            return e.ajax({
                type: a,
                url: c,
                data: g,
                success: b,
                dataType: p
            })
        }
    });
    e.extend({
        getScript: function(c, a) {
            return e.get(c, d, a, "script")
        },
        getJSON: function(c, a, g) {
            return e.get(c, a, g, "json")
        },
        ajaxSetup: function(c, a) {
            a ? t(c, e.ajaxSettings) : (a = c,
            c = e.ajaxSettings);
            t(c, a);
            return c
        },
        ajaxSettings: {
            url: ea,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(fb[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Zc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": e.parseJSON,
                "text xml": e.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: R(Rb),
        ajaxTransport: R(Ec),
        ajax: function(c, a) {
            function g(c, a, o, Aa) {
                if (Z !== 2) {
                    Z = 2;
                    U && clearTimeout(U);
                    T = d;
                    K = Aa || "";
                    L.readyState = c > 0 ? 4 : 0;
                    var w, y, I, Aa = a;
                    if (o) {
                        var s = b, H = L, C = s.contents, D = s.dataTypes, t = s.responseFields, z, u, P, V;
                        for (u in t)
                            u in o && (H[t[u]] = o[u]);
                        for (; D[0] === "*"; ) {
                            D.shift();
                            z === d && (z = s.mimeType || H.getResponseHeader("content-type"))
                        }
                        if (z)
                            for (u in C)
                                if (C[u] && C[u].test(z)) {
                                    D.unshift(u);
                                    break
                                }
                        if (D[0]in o)
                            P = D[0];
                        else {
                            for (u in o) {
                                if (!D[0] || s.converters[u + " " + D[0]]) {
                                    P = u;
                                    break
                                }
                                V || (V = u)
                            }
                            P = P || V
                        }
                        if (P) {
                            P !== D[0] && D.unshift(P);
                            o = o[P]
                        } else
                            o = void 0
                    } else
                        o = d;
                    if (c >= 200 && c < 300 || c === 304) {
                        if (b.ifModified) {
                            if (z = L.getResponseHeader("Last-Modified"))
                                e.lastModified[A] = z;
                            if (z = L.getResponseHeader("Etag"))
                                e.etag[A] = z
                        }
                        if (c === 304) {
                            Aa = "notmodified";
                            w = true
                        } else
                            try {
                                z = b;
                                z.dataFilter && (o = z.dataFilter(o, z.dataType));
                                var x = z.dataTypes;
                                u = {};
                                var G, B, Bd = x.length, $c, vb = x[0], ec, E, J, ca, ka;
                                for (G = 1; G < Bd; G++) {
                                    if (G === 1)
                                        for (B in z.converters)
                                            typeof B == "string" && (u[B.toLowerCase()] = z.converters[B]);
                                    ec = vb;
                                    vb = x[G];
                                    if (vb === "*")
                                        vb = ec;
                                    else if (ec !== "*" && ec !== vb) {
                                        E = ec + " " + vb;
                                        J = u[E] || u["* " + vb];
                                        if (!J) {
                                            ka = d;
                                            for (ca in u) {
                                                $c = ca.split(" ");
                                                if ($c[0] === ec || $c[0] === "*")
                                                    if (ka = u[$c[1] + " " + vb]) {
                                                        ca = u[ca];
                                                        ca === true ? J = ka : ka === true && (J = ca);
                                                        break
                                                    }
                                            }
                                        }
                                        !J && !ka && e.error("No conversion from " + E.replace(" ", " to "));
                                        J !== true && (o = J ? J(o) : ka(ca(o)))
                                    }
                                }
                                y = o;
                                Aa = "success";
                                w = true
                            } catch (R) {
                                Aa = "parsererror";
                                I = R
                            }
                    } else {
                        I = Aa;
                        if (!Aa || c) {
                            Aa = "error";
                            c < 0 && (c = 0)
                        }
                    }
                    L.status = c;
                    L.statusText = "" + (a || Aa);
                    w ? l.resolveWith(p, [y, Aa, L]) : l.rejectWith(p, [L, Aa, I]);
                    L.statusCode(q);
                    q = d;
                    r && f.trigger("ajax" + (w ? "Success" : "Error"), [L, b, w ? y : I]);
                    h.fireWith(p, [L, Aa]);
                    r && (f.trigger("ajaxComplete", [L, b]),
                    --e.active || e.event.trigger("ajaxStop"))
                }
            }
            typeof c == "object" && (a = c,
            c = d);
            var a = a || {}, b = e.ajaxSetup({}, a), p = b.context || b, f = p !== b && (p.nodeType || p instanceof e) ? e(p) : e.event, l = e.Deferred(), h = e.Callbacks("once memory"), q = b.statusCode || {}, A, w = {}, y = {}, K, I, T, U, s, Z = 0, r, C, L = {
                readyState: 0,
                setRequestHeader: function(c, a) {
                    if (!Z) {
                        var g = c.toLowerCase()
                          , c = y[g] = y[g] || c;
                        w[c] = a
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return Z === 2 ? K : null
                },
                getResponseHeader: function(c) {
                    var a;
                    if (Z === 2) {
                        if (!I)
                            for (I = {}; a = Yc.exec(K); )
                                I[a[1].toLowerCase()] = a[2];
                        a = I[c.toLowerCase()]
                    }
                    return a === d ? null : a
                },
                overrideMimeType: function(c) {
                    Z || (b.mimeType = c);
                    return this
                },
                abort: function(c) {
                    c = c || "abort";
                    T && T.abort(c);
                    g(0, c);
                    return this
                }
            };
            l.promise(L);
            L.success = L.done;
            L.error = L.fail;
            L.complete = h.add;
            L.statusCode = function(c) {
                if (c) {
                    var a;
                    if (Z < 2)
                        for (a in c)
                            q[a] = [q[a], c[a]];
                    else {
                        a = c[L.status];
                        L.then(a, a)
                    }
                }
                return this
            }
            ;
            b.url = ((c || b.url) + "").replace(Xc, "").replace(Dc, fb[1] + "//");
            b.dataTypes = e.trim(b.dataType || "*").toLowerCase().split(na);
            b.crossDomain == null && (s = ta.exec(b.url.toLowerCase()),
            b.crossDomain = !(!s || s[1] == fb[1] && s[2] == fb[2] && (s[3] || (s[1] === "http:" ? 80 : 443)) == (fb[3] || (fb[1] === "http:" ? 80 : 443))));
            b.data && b.processData && typeof b.data != "string" && (b.data = e.param(b.data, b.traditional));
            E(Rb, b, a, L);
            if (Z === 2)
                return false;
            r = b.global;
            b.type = b.type.toUpperCase();
            b.hasContent = !Cc.test(b.type);
            r && e.active++ === 0 && e.event.trigger("ajaxStart");
            if (!b.hasContent) {
                b.data && (b.url = b.url + ((dc.test(b.url) ? "&" : "?") + b.data),
                delete b.data);
                A = b.url;
                if (b.cache === false) {
                    s = e.now();
                    var D = b.url.replace(Ia, "$1_=" + s);
                    b.url = D + (D === b.url ? (dc.test(b.url) ? "&" : "?") + "_=" + s : "")
                }
            }
            (b.data && b.hasContent && b.contentType !== false || a.contentType) && L.setRequestHeader("Content-Type", b.contentType);
            b.ifModified && (A = A || b.url,
            e.lastModified[A] && L.setRequestHeader("If-Modified-Since", e.lastModified[A]),
            e.etag[A] && L.setRequestHeader("If-None-Match", e.etag[A]));
            L.setRequestHeader("Accept", b.dataTypes[0] && b.accepts[b.dataTypes[0]] ? b.accepts[b.dataTypes[0]] + (b.dataTypes[0] !== "*" ? ", " + Zc + "; q=0.01" : "") : b.accepts["*"]);
            for (C in b.headers)
                L.setRequestHeader(C, b.headers[C]);
            if (b.beforeSend && (b.beforeSend.call(p, L, b) === false || Z === 2)) {
                L.abort();
                return false
            }
            for (C in {
                success: 1,
                error: 1,
                complete: 1
            })
                L[C](b[C]);
            if (T = E(Ec, b, a, L)) {
                L.readyState = 1;
                r && f.trigger("ajaxSend", [L, b]);
                b.async && b.timeout > 0 && (U = setTimeout(function() {
                    L.abort("timeout")
                }, b.timeout));
                try {
                    Z = 1;
                    T.send(w, g)
                } catch (t) {
                    if (Z < 2)
                        g(-1, t);
                    else
                        throw t;
                }
            } else
                g(-1, "No Transport");
            return L
        },
        param: function(c, a) {
            var g = []
              , b = function(c, a) {
                a = e.isFunction(a) ? a() : a;
                g[g.length] = encodeURIComponent(c) + "=" + encodeURIComponent(a)
            };
            a === d && (a = e.ajaxSettings.traditional);
            if (e.isArray(c) || c.jquery && !e.isPlainObject(c))
                e.each(c, function() {
                    b(this.name, this.value)
                });
            else
                for (var p in c)
                    r(p, c[p], a, b);
            return g.join("&").replace(Wc, "+")
        }
    });
    e.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var fc = e.now()
      , gb = /(\=)\?(&|$)|\?\?/i;
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return e.expando + "_" + fc++
        }
    });
    e.ajaxPrefilter("json jsonp", function(c, g, b) {
        g = typeof c.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(c.contentType);
        if (c.dataTypes[0] === "jsonp" || c.jsonp !== false && (gb.test(c.url) || g && gb.test(c.data))) {
            var p, f = c.jsonpCallback = e.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, d = a[f], l = c.url, h = c.data, q = "$1" + f + "$2";
            c.jsonp !== false && (l = l.replace(gb, q),
            c.url === l && (g && (h = h.replace(gb, q)),
            c.data === h && (l = l + ((/\?/.test(l) ? "&" : "?") + c.jsonp + "=" + f))));
            c.url = l;
            c.data = h;
            a[f] = function(c) {
                p = [c]
            }
            ;
            b.always(function() {
                a[f] = d;
                p && e.isFunction(d) && a[f](p[0])
            });
            c.converters["script json"] = function() {
                p || e.error(f + " was not called");
                return p[0]
            }
            ;
            c.dataTypes[0] = "json";
            return "script"
        }
    });
    e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(c) {
                e.globalEval(c);
                return c
            }
        }
    });
    e.ajaxPrefilter("script", function(c) {
        c.cache === d && (c.cache = false);
        c.crossDomain && (c.type = "GET",
        c.global = false)
    });
    e.ajaxTransport("script", function(c) {
        if (c.crossDomain) {
            var a, g = B.head || B.getElementsByTagName("head")[0] || B.documentElement;
            return {
                send: function(b, e) {
                    a = B.createElement("script");
                    a.async = "async";
                    c.scriptCharset && (a.charset = c.scriptCharset);
                    a.src = c.url;
                    a.onload = a.onreadystatechange = function(c, b) {
                        if (b || !a.readyState || /loaded|complete/.test(a.readyState)) {
                            a.onload = a.onreadystatechange = null;
                            g && a.parentNode && g.removeChild(a);
                            a = d;
                            b || e(200, "success")
                        }
                    }
                    ;
                    g.insertBefore(a, g.firstChild)
                },
                abort: function() {
                    a && a.onload(0, 1)
                }
            }
        }
    });
    var gc = a.ActiveXObject ? function() {
        for (var c in Ja)
            Ja[c](0, 1)
    }
    : !1, Fc = 0, Ja;
    e.ajaxSettings.xhr = a.ActiveXObject ? function() {
        var c;
        if (!(c = !this.isLocal && s()))
            a: {
                try {
                    c = new a.ActiveXObject("Microsoft.XMLHTTP");
                    break a
                } catch (g) {}
                c = void 0
            }
        return c
    }
    : s;
    var hc = e.ajaxSettings.xhr();
    e.extend(e.support, {
        ajax: !!hc,
        cors: !!hc && "withCredentials"in hc
    });
    e.support.ajax && e.ajaxTransport(function(c) {
        if (!c.crossDomain || e.support.cors) {
            var g;
            return {
                send: function(b, p) {
                    var f = c.xhr(), l, h;
                    c.username ? f.open(c.type, c.url, c.async, c.username, c.password) : f.open(c.type, c.url, c.async);
                    if (c.xhrFields)
                        for (h in c.xhrFields)
                            f[h] = c.xhrFields[h];
                    c.mimeType && f.overrideMimeType && f.overrideMimeType(c.mimeType);
                    !c.crossDomain && !b["X-Requested-With"] && (b["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in b)
                            f.setRequestHeader(h, b[h])
                    } catch (q) {}
                    f.send(c.hasContent && c.data || null);
                    g = function(a, b) {
                        var h, q, A, w, y;
                        try {
                            if (g && (b || f.readyState === 4)) {
                                g = d;
                                l && (f.onreadystatechange = e.noop,
                                gc && delete Ja[l]);
                                if (b)
                                    f.readyState !== 4 && f.abort();
                                else {
                                    h = f.status;
                                    A = f.getAllResponseHeaders();
                                    w = {};
                                    (y = f.responseXML) && y.documentElement && (w.xml = y);
                                    try {
                                        w.text = f.responseText
                                    } catch (K) {}
                                    try {
                                        q = f.statusText
                                    } catch (I) {
                                        q = ""
                                    }
                                    !h && c.isLocal && !c.crossDomain ? h = w.text ? 200 : 404 : h === 1223 && (h = 204)
                                }
                            }
                        } catch (T) {
                            b || p(-1, T)
                        }
                        w && p(h, q, w, A)
                    }
                    ;
                    !c.async || f.readyState === 4 ? g() : (l = ++Fc,
                    gc && (Ja || (Ja = {},
                    e(a).unload(gc)),
                    Ja[l] = g),
                    f.onreadystatechange = g)
                },
                abort: function() {
                    g && g(0, 1)
                }
            }
        }
    });
    var ic = {}, ua, ib, rd = /^(?:toggle|show|hide)$/, sd = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, hb, Qb = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], xb;
    e.fn.extend({
        show: function(c, a, g) {
            var b;
            if (c || c === 0)
                return this.animate(h("show", 3), c, a, g);
            a = 0;
            for (g = this.length; a < g; a++) {
                c = this[a];
                c.style && (b = c.style.display,
                !e._data(c, "olddisplay") && b === "none" && (b = c.style.display = ""),
                (b === "" && e.css(c, "display") === "none" || !e.contains(c.ownerDocument.documentElement, c)) && e._data(c, "olddisplay", f(c.nodeName)))
            }
            for (a = 0; a < g; a++) {
                c = this[a];
                if (c.style) {
                    b = c.style.display;
                    if (b === "" || b === "none")
                        c.style.display = e._data(c, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function(c, a, g) {
            if (c || c === 0)
                return this.animate(h("hide", 3), c, a, g);
            for (var b, a = 0, g = this.length; a < g; a++) {
                c = this[a];
                c.style && (b = e.css(c, "display"),
                b !== "none" && !e._data(c, "olddisplay") && e._data(c, "olddisplay", b))
            }
            for (a = 0; a < g; a++)
                this[a].style && (this[a].style.display = "none");
            return this
        },
        _toggle: e.fn.toggle,
        toggle: function(c, a, g) {
            var b = typeof c == "boolean";
            e.isFunction(c) && e.isFunction(a) ? this._toggle.apply(this, arguments) : c == null || b ? this.each(function() {
                var a = b ? c : e(this).is(":hidden");
                e(this)[a ? "show" : "hide"]()
            }) : this.animate(h("toggle", 3), c, a, g);
            return this
        },
        fadeTo: function(c, a, g, b) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: a
            }, c, g, b)
        },
        animate: function(c, a, g, b) {
            function p() {
                d.queue === false && e._mark(this);
                var a = e.extend({}, d), g = this.nodeType === 1, b = g && e(this).is(":hidden"), o, l, h, q, A, w, y, K, I;
                a.animatedProperties = {};
                for (h in c) {
                    o = e.camelCase(h);
                    h !== o && (c[o] = c[h],
                    delete c[h]);
                    if ((l = e.cssHooks[o]) && "expand"in l) {
                        q = l.expand(c[o]);
                        delete c[o];
                        for (h in q)
                            h in c || (c[h] = q[h])
                    }
                }
                for (o in c) {
                    l = c[o];
                    e.isArray(l) ? (a.animatedProperties[o] = l[1],
                    l = c[o] = l[0]) : a.animatedProperties[o] = a.specialEasing && a.specialEasing[o] || a.easing || "swing";
                    if (l === "hide" && b || l === "show" && !b)
                        return a.complete.call(this);
                    g && (o === "height" || o === "width") && (a.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
                    e.css(this, "display") === "inline" && e.css(this, "float") === "none" && (!e.support.inlineBlockNeedsLayout || f(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                a.overflow != null && (this.style.overflow = "hidden");
                for (h in c) {
                    g = new e.fx(this,a,h);
                    l = c[h];
                    rd.test(l) ? (I = e._data(this, "toggle" + h) || (l === "toggle" ? b ? "show" : "hide" : 0),
                    I ? (e._data(this, "toggle" + h, I === "show" ? "hide" : "show"),
                    g[I]()) : g[l]()) : (A = sd.exec(l),
                    w = g.cur(),
                    A ? (y = parseFloat(A[2]),
                    K = A[3] || (e.cssNumber[h] ? "" : "px"),
                    K !== "px" && (e.style(this, h, (y || 1) + K),
                    w = (y || 1) / g.cur() * w,
                    e.style(this, h, w + K)),
                    A[1] && (y = (A[1] === "-=" ? -1 : 1) * y + w),
                    g.custom(w, y, K)) : g.custom(w, l, ""))
                }
                return true
            }
            var d = e.speed(a, g, b);
            if (e.isEmptyObject(c))
                return this.each(d.complete, [false]);
            c = e.extend({}, c);
            return d.queue === false ? this.each(p) : this.queue(d.queue, p)
        },
        stop: function(c, a, g) {
            typeof c != "string" && (g = a,
            a = c,
            c = d);
            a && c !== false && this.queue(c || "fx", []);
            return this.each(function() {
                var a, b = false, p = e.timers, f = e._data(this);
                g || e._unmark(true, this);
                if (c == null)
                    for (a in f) {
                        if (f[a] && f[a].stop && a.indexOf(".run") === a.length - 4) {
                            var d = f[a];
                            e.removeData(this, a, true);
                            d.stop(g)
                        }
                    }
                else if (f[a = c + ".run"] && f[a].stop) {
                    f = f[a];
                    e.removeData(this, a, true);
                    f.stop(g)
                }
                for (a = p.length; a--; )
                    p[a].elem === this && (c == null || p[a].queue === c) && (g ? p[a](true) : p[a].saveState(),
                    b = true,
                    p.splice(a, 1));
                (!g || !b) && e.dequeue(this, c)
            })
        }
    });
    e.each({
        slideDown: h("show", 1),
        slideUp: h("hide", 1),
        slideToggle: h("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(c, a) {
        e.fn[c] = function(c, g, b) {
            return this.animate(a, c, g, b)
        }
    });
    e.extend({
        speed: function(c, a, g) {
            var b = c && typeof c == "object" ? e.extend({}, c) : {
                complete: g || !g && a || e.isFunction(c) && c,
                duration: c,
                easing: g && a || a && !e.isFunction(a) && a
            };
            b.duration = e.fx.off ? 0 : typeof b.duration == "number" ? b.duration : b.duration in e.fx.speeds ? e.fx.speeds[b.duration] : e.fx.speeds._default;
            if (b.queue == null || b.queue === true)
                b.queue = "fx";
            b.old = b.complete;
            b.complete = function(c) {
                e.isFunction(b.old) && b.old.call(this);
                b.queue ? e.dequeue(this, b.queue) : c !== false && e._unmark(this)
            }
            ;
            return b
        },
        easing: {
            linear: function(c) {
                return c
            },
            swing: function(c) {
                return -Math.cos(c * Math.PI) / 2 + 0.5
            }
        },
        timers: [],
        fx: function(c, a, g) {
            this.options = a;
            this.elem = c;
            this.prop = g;
            a.orig = a.orig || {}
        }
    });
    e.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (e.fx.step[this.prop] || e.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
                return this.elem[this.prop];
            var c, a = e.css(this.elem, this.prop);
            return isNaN(c = parseFloat(a)) ? !a || a === "auto" ? 0 : a : c
        },
        custom: function(c, a, g) {
            function b(c) {
                return p.step(c)
            }
            var p = this
              , f = e.fx;
            this.startTime = xb || q();
            this.end = a;
            this.now = this.start = c;
            this.pos = this.state = 0;
            this.unit = g || this.unit || (e.cssNumber[this.prop] ? "" : "px");
            b.queue = this.options.queue;
            b.elem = this.elem;
            b.saveState = function() {
                e._data(p.elem, "fxshow" + p.prop) === d && (p.options.hide ? e._data(p.elem, "fxshow" + p.prop, p.start) : p.options.show && e._data(p.elem, "fxshow" + p.prop, p.end))
            }
            ;
            b() && e.timers.push(b) && !hb && (hb = setInterval(f.tick, f.interval))
        },
        show: function() {
            var c = e._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = c || e.style(this.elem, this.prop);
            this.options.show = true;
            c !== d ? this.custom(this.cur(), c) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            e(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = e._data(this.elem, "fxshow" + this.prop) || e.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function(c) {
            var a, g, b = xb || q(), p = true, f = this.elem, d = this.options;
            if (c || b >= d.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                d.animatedProperties[this.prop] = true;
                for (a in d.animatedProperties)
                    d.animatedProperties[a] !== true && (p = false);
                if (p) {
                    d.overflow != null && !e.support.shrinkWrapBlocks && e.each(["", "X", "Y"], function(c, a) {
                        f.style["overflow" + a] = d.overflow[c]
                    });
                    d.hide && e(f).hide();
                    if (d.hide || d.show)
                        for (a in d.animatedProperties) {
                            e.style(f, a, d.orig[a]);
                            e.removeData(f, "fxshow" + a, true);
                            e.removeData(f, "toggle" + a, true)
                        }
                    (c = d.complete) && (d.complete = false,
                    c.call(f))
                }
                return false
            }
            d.duration == Infinity ? this.now = b : (g = b - this.startTime,
            this.state = g / d.duration,
            this.pos = e.easing[d.animatedProperties[this.prop]](this.state, g, 0, 1, d.duration),
            this.now = this.start + (this.end - this.start) * this.pos);
            this.update();
            return true
        }
    };
    e.extend(e.fx, {
        tick: function() {
            for (var c, a = e.timers, g = 0; g < a.length; g++) {
                c = a[g];
                !c() && a[g] === c && a.splice(g--, 1)
            }
            a.length || e.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(hb);
            hb = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(c) {
                e.style(c.elem, "opacity", c.now)
            },
            _default: function(c) {
                c.elem.style && c.elem.style[c.prop] != null ? c.elem.style[c.prop] = c.now + c.unit : c.elem[c.prop] = c.now
            }
        }
    });
    e.each(Qb.concat.apply([], Qb), function(c, a) {
        a.indexOf("margin") && (e.fx.step[a] = function(c) {
            e.style(c.elem, a, Math.max(0, c.now) + c.unit)
        }
        )
    });
    e.expr && e.expr.filters && (e.expr.filters.animated = function(c) {
        return e.grep(e.timers, function(a) {
            return c === a.elem
        }).length
    }
    );
    var wb, Gc = /^t(?:able|d|h)$/i, Hc = /^(?:body|html)$/i;
    "getBoundingClientRect"in B.documentElement ? wb = function(c, a, g, p) {
        try {
            p = c.getBoundingClientRect()
        } catch (f) {}
        if (!p || !e.contains(g, c))
            return p ? {
                top: p.top,
                left: p.left
            } : {
                top: 0,
                left: 0
            };
        c = a.body;
        a = b(a);
        return {
            top: p.top + (a.pageYOffset || e.support.boxModel && g.scrollTop || c.scrollTop) - (g.clientTop || c.clientTop || 0),
            left: p.left + (a.pageXOffset || e.support.boxModel && g.scrollLeft || c.scrollLeft) - (g.clientLeft || c.clientLeft || 0)
        }
    }
    : wb = function(c, a, g) {
        var b, p = c.offsetParent, f = a.body;
        b = (a = a.defaultView) ? a.getComputedStyle(c, null) : c.currentStyle;
        for (var d = c.offsetTop, l = c.offsetLeft; (c = c.parentNode) && c !== f && c !== g; ) {
            if (e.support.fixedPosition && b.position === "fixed")
                break;
            b = a ? a.getComputedStyle(c, null) : c.currentStyle;
            d = d - c.scrollTop;
            l = l - c.scrollLeft;
            c === p && (d = d + c.offsetTop,
            l = l + c.offsetLeft,
            e.support.doesNotAddBorder && (!e.support.doesAddBorderForTableAndCells || !Gc.test(c.nodeName)) && (d = d + (parseFloat(b.borderTopWidth) || 0),
            l = l + (parseFloat(b.borderLeftWidth) || 0)),
            p = c.offsetParent);
            e.support.subtractsBorderForOverflowNotVisible && b.overflow !== "visible" && (d = d + (parseFloat(b.borderTopWidth) || 0),
            l = l + (parseFloat(b.borderLeftWidth) || 0))
        }
        if (b.position === "relative" || b.position === "static") {
            d = d + f.offsetTop;
            l = l + f.offsetLeft
        }
        e.support.fixedPosition && b.position === "fixed" && (d = d + Math.max(g.scrollTop, f.scrollTop),
        l = l + Math.max(g.scrollLeft, f.scrollLeft));
        return {
            top: d,
            left: l
        }
    }
    ;
    e.fn.offset = function(c) {
        if (arguments.length)
            return c === d ? this : this.each(function(a) {
                e.offset.setOffset(this, c, a)
            });
        var a = this[0]
          , g = a && a.ownerDocument;
        return !g ? null : a === g.body ? e.offset.bodyOffset(a) : wb(a, g, g.documentElement)
    }
    ;
    e.offset = {
        bodyOffset: function(c) {
            var a = c.offsetTop
              , g = c.offsetLeft;
            e.support.doesNotIncludeMarginInBodyOffset && (a = a + (parseFloat(e.css(c, "marginTop")) || 0),
            g = g + (parseFloat(e.css(c, "marginLeft")) || 0));
            return {
                top: a,
                left: g
            }
        },
        setOffset: function(c, a, g) {
            var b = e.css(c, "position");
            b === "static" && (c.style.position = "relative");
            var p = e(c), f = p.offset(), d = e.css(c, "top"), l = e.css(c, "left"), h = {}, q = {}, A, w;
            (b === "absolute" || b === "fixed") && e.inArray("auto", [d, l]) > -1 ? (q = p.position(),
            A = q.top,
            w = q.left) : (A = parseFloat(d) || 0,
            w = parseFloat(l) || 0);
            e.isFunction(a) && (a = a.call(c, g, f));
            a.top != null && (h.top = a.top - f.top + A);
            a.left != null && (h.left = a.left - f.left + w);
            "using"in a ? a.using.call(c, h) : p.css(h)
        }
    };
    e.fn.extend({
        position: function() {
            if (!this[0])
                return null;
            var a = this[0]
              , g = this.offsetParent()
              , b = this.offset()
              , p = Hc.test(g[0].nodeName) ? {
                top: 0,
                left: 0
            } : g.offset();
            b.top = b.top - (parseFloat(e.css(a, "marginTop")) || 0);
            b.left = b.left - (parseFloat(e.css(a, "marginLeft")) || 0);
            p.top = p.top + (parseFloat(e.css(g[0], "borderTopWidth")) || 0);
            p.left = p.left + (parseFloat(e.css(g[0], "borderLeftWidth")) || 0);
            return {
                top: b.top - p.top,
                left: b.left - p.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || B.body; a && !Hc.test(a.nodeName) && e.css(a, "position") === "static"; )
                    a = a.offsetParent;
                return a
            })
        }
    });
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, g) {
        var p = /Y/.test(g);
        e.fn[a] = function(f) {
            return e.access(this, function(a, c, f) {
                var l = b(a);
                if (f === d)
                    return l ? g in l ? l[g] : e.support.boxModel && l.document.documentElement[c] || l.document.body[c] : a[c];
                l ? l.scrollTo(p ? e(l).scrollLeft() : f, p ? f : e(l).scrollTop()) : a[c] = f
            }, a, f, arguments.length, null)
        }
    });
    e.each({
        Height: "height",
        Width: "width"
    }, function(a, g) {
        var b = "client" + a
          , p = "scroll" + a
          , f = "offset" + a;
        e.fn["inner" + a] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(e.css(a, g, "padding")) : this[g]() : null
        }
        ;
        e.fn["outer" + a] = function(a) {
            var c = this[0];
            return c ? c.style ? parseFloat(e.css(c, g, a ? "margin" : "border")) : this[g]() : null
        }
        ;
        e.fn[g] = function(a) {
            return e.access(this, function(a, c, g) {
                if (e.isWindow(a)) {
                    c = a.document;
                    a = c.documentElement[b];
                    return e.support.boxModel && a || c.body && c.body[b] || a
                }
                if (a.nodeType === 9) {
                    c = a.documentElement;
                    return c[b] >= c[p] ? c[b] : Math.max(a.body[p], c[p], a.body[f], c[f])
                }
                if (g === d) {
                    a = e.css(a, c);
                    c = parseFloat(a);
                    return e.isNumeric(c) ? c : a
                }
                e(a).css(c, g)
            }, g, a, arguments.length, null)
        }
    });
    a.jQuery = a.$ = e;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return e
    })
}
)(window);
(function(a) {
    a.browserTest = function(d, b) {
        var f = function(a, b) {
            for (var f = 0; f < b.length; f += 1)
                a = a.replace(b[f][0], b[f][1]);
            return a
        }
          , h = function(b, d, h, r) {
            d = {
                name: f((d.exec(b) || ["unknown", "unknown"])[1], h)
            };
            d[d.name] = !0;
            d.version = (r.exec(b) || ["X", "X", "X", "X"])[3];
            d.name.match(/safari/) && 400 < d.version && (d.version = "2.0");
            "presto" === d.name && (d.version = 9.27 < a.browser.version ? "futhark" : "linear_b");
            d.versionNumber = parseFloat(d.version, 10) || 0;
            d.versionX = "X" !== d.version ? (d.version + "").substr(0, 1) : "X";
            d.className = d.name + d.versionX;
            return d
        }
          , d = (d.match(/Opera|Navigator|Minefield|KHTML|Chrome/) ? f(d, [[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/, ""], ["Chrome Safari", "Chrome"], ["KHTML", "Konqueror"], ["Minefield", "Firefox"], ["Navigator", "Netscape"]]) : d).toLowerCase();
        a.browser = a.extend(!b ? a.browser : {}, h(d, /(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/, [], /(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));
        a.layout = h(d, /(gecko|konqueror|msie|opera|webkit)/, [["konqueror", "khtml"], ["msie", "trident"], ["opera", "presto"]], /(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);
        a.os = {
            name: (/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase()) || ["unknown"])[0].replace("sunos", "solaris")
        };
        b || a("html").addClass([a.os.name, a.browser.name, a.browser.className, a.layout.name, a.layout.className].join(" "))
    }
    ;
    a.browserTest(navigator.userAgent)
}
)(jQuery);
jQuery.cookie = function(a, d, b) {
    if ("undefined" != typeof d) {
        b = b || {};
        null === d && (d = "",
        b.expires = -1);
        var f = "";
        if (b.expires && ("number" == typeof b.expires || b.expires.toUTCString))
            "number" == typeof b.expires ? (f = new Date,
            f.setTime(f.getTime() + 864E5 * b.expires)) : f = b.expires,
            f = "; expires=" + f.toUTCString();
        var h = b.path ? "; path=" + b.path : ""
          , l = b.domain ? "; domain=" + b.domain : ""
          , b = b.secure ? "; secure" : "";
        document.cookie = [a, "=", encodeURIComponent(d), f, h, l, b].join("")
    } else {
        d = null;
        if (document.cookie && "" != document.cookie) {
            b = document.cookie.split(";");
            for (f = 0; f < b.length; f++)
                if (h = jQuery.trim(b[f]),
                h.substring(0, a.length + 1) == a + "=") {
                    d = decodeURIComponent(h.substring(a.length + 1));
                    break
                }
        }
        return d
    }
}
;
(function(a) {
    var d = a.browser.msie && 6 === parseInt(a.browser.version) && "object" !== typeof window.XMLHttpRequest
      , b = a.browser.msie && 7 === parseInt(a.browser.version)
      , f = null
      , h = [];
    a.modal = function(b, f) {
        return a.modal.impl.init(b, f)
    }
    ;
    a.modal.close = function() {
        a.modal.impl.close()
    }
    ;
    a.modal.focus = function(b) {
        a.modal.impl.focus(b)
    }
    ;
    a.modal.setContainerDimensions = function() {
        a.modal.impl.setContainerDimensions()
    }
    ;
    a.modal.setPosition = function() {
        a.modal.impl.setPosition()
    }
    ;
    a.modal.update = function(b, f) {
        a.modal.impl.update(b, f)
    }
    ;
    a.fn.modal = function(b) {
        return a.modal.impl.init(this, b)
    }
    ;
    a.modal.defaults = {
        appendTo: "body",
        focus: !0,
        opacity: 50,
        overlayId: "simplemodal-overlay",
        overlayCss: {},
        containerId: "simplemodal-container",
        containerCss: {},
        dataId: "simplemodal-data",
        dataCss: {},
        minHeight: null,
        minWidth: null,
        maxHeight: null,
        maxWidth: null,
        autoResize: !1,
        autoPosition: !0,
        zIndex: 1E3,
        close: !0,
        closeHTML: '<a class="modalCloseImg" title="Close"></a>',
        closeClass: "simplemodal-close",
        escClose: !0,
        overlayClose: !1,
        position: null,
        persist: !1,
        modal: !0,
        onOpen: null,
        onShow: null,
        onClose: null
    };
    a.modal.impl = {
        d: {},
        init: function(b, d) {
            if (this.d.data)
                return !1;
            f = a.browser.msie && !a.boxModel;
            this.o = a.extend({}, a.modal.defaults, d);
            this.zIndex = this.o.zIndex;
            this.occb = !1;
            if ("object" === typeof b)
                b = b instanceof jQuery ? b : a(b),
                this.d.placeholder = !1,
                0 < b.parent().parent().size() && (b.before(a("<span></span>").attr("id", "simplemodal-placeholder").css({
                    display: "none"
                })),
                this.d.placeholder = !0,
                this.display = b.css("display"),
                this.o.persist || (this.d.orig = b.clone(!0)));
            else if ("string" === typeof b || "number" === typeof b)
                b = a("<div></div>").html(b);
            else
                return alert("SimpleModal Error: Unsupported data type: " + typeof b),
                this;
            this.create(b);
            this.open();
            a.isFunction(this.o.onShow) && this.o.onShow.apply(this, [this.d]);
            return this
        },
        create: function(b) {
            h = this.getDimensions();
            this.o.modal && d && (this.d.iframe = a('<iframe src="javascript:false;"></iframe>').css(a.extend(this.o.iframeCss, {
                display: "none",
                opacity: 0,
                position: "fixed",
                height: h[0],
                width: h[1],
                zIndex: this.o.zIndex,
                top: 0,
                left: 0
            })).appendTo(this.o.appendTo));
            this.d.overlay = a("<div></div>").attr("id", this.o.overlayId).addClass("simplemodal-overlay").css(a.extend(this.o.overlayCss, {
                display: "none",
                opacity: this.o.opacity / 100,
                height: this.o.modal ? h[0] : 0,
                width: this.o.modal ? h[1] : 0,
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: this.o.zIndex + 1
            })).appendTo(this.o.appendTo);
            this.d.container = a("<div></div>").attr("id", this.o.containerId).addClass("simplemodal-container").css(a.extend(this.o.containerCss, {
                display: "none",
                position: "fixed",
                zIndex: this.o.zIndex + 2
            })).append(this.o.close && this.o.closeHTML ? a(this.o.closeHTML).addClass(this.o.closeClass) : "").appendTo(this.o.appendTo);
            this.d.wrap = a("<div></div>").attr("tabIndex", -1).addClass("simplemodal-wrap").css({
                height: "100%",
                outline: 0,
                width: "100%"
            }).appendTo(this.d.container);
            this.d.data = b.attr("id", b.attr("id") || this.o.dataId).addClass("simplemodal-data").css(a.extend(this.o.dataCss, {
                display: "none"
            })).appendTo("body");
            this.setContainerDimensions();
            this.d.data.appendTo(this.d.wrap);
            (d || f) && this.fixIE()
        },
        bindEvents: function() {
            var b = this;
            a("." + b.o.closeClass).bind("click.simplemodal", function(a) {
                a.preventDefault();
                b.close()
            });
            b.o.modal && b.o.close && b.o.overlayClose && b.d.overlay.bind("click.simplemodal", function(a) {
                a.preventDefault();
                b.close()
            });
            a(document).bind("keydown.simplemodal", function(a) {
                b.o.modal && 9 === a.keyCode ? b.watchTab(a) : b.o.close && (b.o.escClose && 27 === a.keyCode) && (a.preventDefault(),
                b.close())
            });
            a(window).bind("resize.simplemodal", function() {
                h = b.getDimensions();
                b.o.autoResize ? b.setContainerDimensions() : b.o.autoPosition && b.setPosition();
                d || f ? b.fixIE() : b.o.modal && (b.d.iframe && b.d.iframe.css({
                    height: h[0],
                    width: h[1]
                }),
                b.d.overlay.css({
                    height: h[0],
                    width: h[1]
                }))
            })
        },
        unbindEvents: function() {
            a("." + this.o.closeClass).unbind("click.simplemodal");
            a(document).unbind("keydown.simplemodal");
            a(window).unbind("resize.simplemodal");
            this.d.overlay.unbind("click.simplemodal")
        },
        fixIE: function() {
            var b = this.o.position;
            a.each([this.d.iframe || null, !this.o.modal ? null : this.d.overlay, this.d.container], function(a, f) {
                if (f) {
                    var d = f[0].style;
                    d.position = "absolute";
                    if (2 > a)
                        d.removeExpression("height"),
                        d.removeExpression("width"),
                        d.setExpression("height", 'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'),
                        d.setExpression("width", 'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');
                    else {
                        var h;
                        b && b.constructor === Array ? (a = b[0] ? "number" === typeof b[0] ? b[0].toString() : b[0].replace(/px/, "") : f.css("top").replace(/px/, ""),
                        a = -1 === a.indexOf("%") ? a + ' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"' : parseInt(a.replace(/%/, "")) + ' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',
                        b[1] && (h = "number" === typeof b[1] ? b[1].toString() : b[1].replace(/px/, ""),
                        h = -1 === h.indexOf("%") ? h + ' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"' : parseInt(h.replace(/%/, "")) + ' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')) : (a = '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',
                        h = '(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"');
                        d.removeExpression("top");
                        d.removeExpression("left");
                        d.setExpression("top", a);
                        d.setExpression("left", h)
                    }
                }
            })
        },
        focus: function(b) {
            var f = this
              , b = b && -1 !== a.inArray(b, ["first", "last"]) ? b : "first"
              , d = a(":input:enabled:visible:" + b, f.d.wrap);
            setTimeout(function() {
                0 < d.length ? d.focus() : f.d.wrap.focus()
            }, 10)
        },
        getDimensions: function() {
            var b = a(window);
            return [a.browser.opera && "9.5" < a.browser.version && "1.3" > a.fn.jquery || a.browser.opera && "9.5" > a.browser.version && "1.2.6" < a.fn.jquery ? b[0].innerHeight : b.height(), b.width()]
        },
        getVal: function(a, b) {
            return a ? "number" === typeof a ? a : "auto" === a ? 0 : 0 < a.indexOf("%") ? parseInt(a.replace(/%/, "")) / 100 * ("h" === b ? h[0] : h[1]) : parseInt(a.replace(/px/, "")) : null
        },
        update: function(a, b) {
            if (!this.d.data)
                return !1;
            this.d.origHeight = this.getVal(a, "h");
            this.d.origWidth = this.getVal(b, "w");
            this.d.data.hide();
            a && this.d.container.css("height", a);
            b && this.d.container.css("width", b);
            this.setContainerDimensions();
            this.d.data.show();
            this.o.focus && this.focus();
            this.unbindEvents();
            this.bindEvents()
        },
        setContainerDimensions: function() {
            var f = d || b
              , q = this.d.origHeight ? this.d.origHeight : a.browser.opera ? this.d.container.height() : this.getVal(f ? this.d.container[0].currentStyle.height : this.d.container.css("height"), "h")
              , f = this.d.origWidth ? this.d.origWidth : a.browser.opera ? this.d.container.width() : this.getVal(f ? this.d.container[0].currentStyle.width : this.d.container.css("width"), "w")
              , s = this.d.data.outerHeight(!0)
              , r = this.d.data.outerWidth(!0);
            this.d.origHeight = this.d.origHeight || q;
            this.d.origWidth = this.d.origWidth || f;
            var t = this.o.maxHeight ? this.getVal(this.o.maxHeight, "h") : null
              , E = this.o.maxWidth ? this.getVal(this.o.maxWidth, "w") : null
              , t = t && t < h[0] ? t : h[0]
              , E = E && E < h[1] ? E : h[1]
              , R = this.o.minHeight ? this.getVal(this.o.minHeight, "h") : "auto"
              , q = q ? this.o.autoResize && q > t ? t : q < R ? R : q : s ? s > t ? t : this.o.minHeight && "auto" !== R && s < R ? R : s : R
              , t = this.o.minWidth ? this.getVal(this.o.minWidth, "w") : "auto"
              , f = f ? this.o.autoResize && f > E ? E : f < t ? t : f : r ? r > E ? E : this.o.minWidth && "auto" !== t && r < t ? t : r : t;
            this.d.container.css({
                height: q,
                width: f
            });
            this.d.wrap.css({
                overflow: s > q || r > f ? "auto" : "visible"
            });
            this.o.autoPosition && this.setPosition()
        },
        setPosition: function() {
            var a, b;
            a = h[0] / 2 - this.d.container.outerHeight(!0) / 2;
            b = h[1] / 2 - this.d.container.outerWidth(!0) / 2;
            this.o.position && "[object Array]" === Object.prototype.toString.call(this.o.position) && (a = this.o.position[0] || a,
            b = this.o.position[1] || b);
            this.d.container.css({
                left: b,
                top: a
            })
        },
        watchTab: function(b) {
            if (0 < a(b.target).parents(".simplemodal-container").length) {
                if (this.inputs = a(":input:enabled:visible:first, :input:enabled:visible:last", this.d.data[0]),
                !b.shiftKey && b.target === this.inputs[this.inputs.length - 1] || b.shiftKey && b.target === this.inputs[0] || 0 === this.inputs.length)
                    b.preventDefault(),
                    this.focus(b.shiftKey ? "last" : "first")
            } else
                b.preventDefault(),
                this.focus()
        },
        open: function() {
            this.d.iframe && this.d.iframe.show();
            a.isFunction(this.o.onOpen) ? this.o.onOpen.apply(this, [this.d]) : (this.d.overlay.show(),
            this.d.container.show(),
            this.d.data.show());
            this.o.focus && this.focus();
            this.bindEvents()
        },
        close: function() {
            var b = this;
            if (!b.d.data)
                return !1;
            b.unbindEvents();
            if (a.isFunction(b.o.onClose) && !b.occb)
                b.occb = !0,
                b.o.onClose.apply(b, [b.d]);
            else {
                if (b.d.placeholder) {
                    var f = a("#simplemodal-placeholder");
                    b.o.persist ? f.replaceWith(b.d.data.removeClass("simplemodal-data").css("display", b.display)) : (b.d.data.hide().remove(),
                    f.replaceWith(b.d.orig))
                } else
                    b.d.data.hide().remove();
                b.d.container.hide().remove();
                b.d.overlay && b.d.overlay.hide();
                b.d.iframe && b.d.iframe.hide().remove();
                setTimeout(function() {
                    b.d.overlay && b.d.overlay.remove();
                    b.d = {}
                }, 10)
            }
        }
    }
}
)(jQuery);
var QRCode;
(function() {
    function a(a) {
        this.mode = q.MODE_8BIT_BYTE;
        this.data = a;
        this.parsedData = [];
        for (var a = 0, b = this.data.length; a < b; a++) {
            var f = []
              , d = this.data.charCodeAt(a);
            65536 < d ? (f[0] = 240 | (d & 1835008) >>> 18,
            f[1] = 128 | (d & 258048) >>> 12,
            f[2] = 128 | (d & 4032) >>> 6,
            f[3] = 128 | d & 63) : 2048 < d ? (f[0] = 224 | (d & 61440) >>> 12,
            f[1] = 128 | (d & 4032) >>> 6,
            f[2] = 128 | d & 63) : 128 < d ? (f[0] = 192 | (d & 1984) >>> 6,
            f[1] = 128 | d & 63) : f[0] = d;
            this.parsedData.push(f)
        }
        this.parsedData = Array.prototype.concat.apply([], this.parsedData);
        this.parsedData.length != this.data.length && (this.parsedData.unshift(191),
        this.parsedData.unshift(187),
        this.parsedData.unshift(239))
    }
    function d(a, b) {
        this.typeNumber = a;
        this.errorCorrectLevel = b;
        this.modules = null;
        this.moduleCount = 0;
        this.dataCache = null;
        this.dataList = []
    }
    function b(a, b) {
        if (void 0 == a.length)
            throw Error(a.length + "/" + b);
        for (var f = 0; f < a.length && 0 == a[f]; )
            f++;
        this.num = Array(a.length - f + b);
        for (var d = 0; d < a.length - f; d++)
            this.num[d] = a[d + f]
    }
    function f(a, b) {
        this.totalCount = a;
        this.dataCount = b
    }
    function h() {
        this.buffer = [];
        this.length = 0
    }
    function l() {
        var a = !1
          , b = navigator.userAgent;
        /android/i.test(b) && (a = !0,
        (aMat = b.toString().match(/android ([0-9]\.[0-9])/i)) && aMat[1] && (a = parseFloat(aMat[1])));
        return a
    }
    a.prototype = {
        getLength: function() {
            return this.parsedData.length
        },
        write: function(a) {
            for (var b = 0, f = this.parsedData.length; b < f; b++)
                a.put(this.parsedData[b], 8)
        }
    };
    d.prototype = {
        addData: function(b) {
            b = new a(b);
            this.dataList.push(b);
            this.dataCache = null
        },
        isDark: function(a, b) {
            if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b)
                throw Error(a + "," + b);
            return this.modules[a][b]
        },
        getModuleCount: function() {
            return this.moduleCount
        },
        make: function() {
            this.makeImpl(!1, this.getBestMaskPattern())
        },
        makeImpl: function(a, b) {
            this.moduleCount = 4 * this.typeNumber + 17;
            this.modules = Array(this.moduleCount);
            for (var f = 0; f < this.moduleCount; f++) {
                this.modules[f] = Array(this.moduleCount);
                for (var h = 0; h < this.moduleCount; h++)
                    this.modules[f][h] = null
            }
            this.setupPositionProbePattern(0, 0);
            this.setupPositionProbePattern(this.moduleCount - 7, 0);
            this.setupPositionProbePattern(0, this.moduleCount - 7);
            this.setupPositionAdjustPattern();
            this.setupTimingPattern();
            this.setupTypeInfo(a, b);
            7 <= this.typeNumber && this.setupTypeNumber(a);
            null == this.dataCache && (this.dataCache = d.createData(this.typeNumber, this.errorCorrectLevel, this.dataList));
            this.mapData(this.dataCache, b)
        },
        setupPositionProbePattern: function(a, b) {
            for (var f = -1; 7 >= f; f++)
                if (!(-1 >= a + f || this.moduleCount <= a + f))
                    for (var d = -1; 7 >= d; d++)
                        -1 >= b + d || this.moduleCount <= b + d || (this.modules[a + f][b + d] = 0 <= f && 6 >= f && (0 == d || 6 == d) || 0 <= d && 6 >= d && (0 == f || 6 == f) || 2 <= f && 4 >= f && 2 <= d && 4 >= d ? !0 : !1)
        },
        getBestMaskPattern: function() {
            for (var a = 0, b = 0, f = 0; 8 > f; f++) {
                this.makeImpl(!0, f);
                var d = r.getLostPoint(this);
                if (0 == f || a > d)
                    a = d,
                    b = f
            }
            return b
        },
        createMovieClip: function(a, b, f) {
            a = a.createEmptyMovieClip(b, f);
            this.make();
            for (b = 0; b < this.modules.length; b++)
                for (var f = 1 * b, d = 0; d < this.modules[b].length; d++) {
                    var h = 1 * d;
                    this.modules[b][d] && (a.beginFill(0, 100),
                    a.moveTo(h, f),
                    a.lineTo(h + 1, f),
                    a.lineTo(h + 1, f + 1),
                    a.lineTo(h, f + 1),
                    a.endFill())
                }
            return a
        },
        setupTimingPattern: function() {
            for (var a = 8; a < this.moduleCount - 8; a++)
                null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
            for (a = 8; a < this.moduleCount - 8; a++)
                null == this.modules[6][a] && (this.modules[6][a] = 0 == a % 2)
        },
        setupPositionAdjustPattern: function() {
            for (var a = r.getPatternPosition(this.typeNumber), b = 0; b < a.length; b++)
                for (var f = 0; f < a.length; f++) {
                    var d = a[b]
                      , h = a[f];
                    if (null == this.modules[d][h])
                        for (var l = -2; 2 >= l; l++)
                            for (var q = -2; 2 >= q; q++)
                                this.modules[d + l][h + q] = -2 == l || 2 == l || -2 == q || 2 == q || 0 == l && 0 == q ? !0 : !1
                }
        },
        setupTypeNumber: function(a) {
            for (var b = r.getBCHTypeNumber(this.typeNumber), f = 0; 18 > f; f++) {
                var d = !a && 1 == (b >> f & 1);
                this.modules[Math.floor(f / 3)][f % 3 + this.moduleCount - 8 - 3] = d
            }
            for (f = 0; 18 > f; f++)
                d = !a && 1 == (b >> f & 1),
                this.modules[f % 3 + this.moduleCount - 8 - 3][Math.floor(f / 3)] = d
        },
        setupTypeInfo: function(a, b) {
            for (var f = r.getBCHTypeInfo(this.errorCorrectLevel << 3 | b), d = 0; 15 > d; d++) {
                var h = !a && 1 == (f >> d & 1);
                6 > d ? this.modules[d][8] = h : 8 > d ? this.modules[d + 1][8] = h : this.modules[this.moduleCount - 15 + d][8] = h
            }
            for (d = 0; 15 > d; d++)
                h = !a && 1 == (f >> d & 1),
                8 > d ? this.modules[8][this.moduleCount - d - 1] = h : 9 > d ? this.modules[8][15 - d - 1 + 1] = h : this.modules[8][15 - d - 1] = h;
            this.modules[this.moduleCount - 8][8] = !a
        },
        mapData: function(a, b) {
            for (var f = -1, d = this.moduleCount - 1, h = 7, l = 0, q = this.moduleCount - 1; 0 < q; q -= 2)
                for (6 == q && q--; ; ) {
                    for (var s = 0; 2 > s; s++)
                        if (null == this.modules[d][q - s]) {
                            var t = !1;
                            l < a.length && (t = 1 == (a[l] >>> h & 1));
                            r.getMask(b, d, q - s) && (t = !t);
                            this.modules[d][q - s] = t;
                            h--;
                            -1 == h && (l++,
                            h = 7)
                        }
                    d += f;
                    if (0 > d || this.moduleCount <= d) {
                        d -= f;
                        f = -f;
                        break
                    }
                }
        }
    };
    d.PAD0 = 236;
    d.PAD1 = 17;
    d.createData = function(a, b, l) {
        for (var b = f.getRSBlocks(a, b), q = new h, s = 0; s < l.length; s++) {
            var C = l[s];
            q.put(C.mode, 4);
            q.put(C.getLength(), r.getLengthInBits(C.mode, a));
            C.write(q)
        }
        for (s = a = 0; s < b.length; s++)
            a += b[s].dataCount;
        if (q.getLengthInBits() > 8 * a)
            throw Error("code length overflow. (" + q.getLengthInBits() + ">" + 8 * a + ")");
        for (q.getLengthInBits() + 4 <= 8 * a && q.put(0, 4); 0 != q.getLengthInBits() % 8; )
            q.putBit(!1);
        for (; !(q.getLengthInBits() >= 8 * a); ) {
            q.put(d.PAD0, 8);
            if (q.getLengthInBits() >= 8 * a)
                break;
            q.put(d.PAD1, 8)
        }
        return d.createBytes(q, b)
    }
    ;
    d.createBytes = function(a, f) {
        for (var d = 0, h = 0, l = 0, q = Array(f.length), s = Array(f.length), t = 0; t < f.length; t++) {
            var E = f[t].dataCount
              , R = f[t].totalCount - E
              , h = Math.max(h, E)
              , l = Math.max(l, R);
            q[t] = Array(E);
            for (var F = 0; F < q[t].length; F++)
                q[t][F] = 255 & a.buffer[F + d];
            d += E;
            F = r.getErrorCorrectPolynomial(R);
            E = (new b(q[t],F.getLength() - 1)).mod(F);
            s[t] = Array(F.getLength() - 1);
            for (F = 0; F < s[t].length; F++)
                R = F + E.getLength() - s[t].length,
                s[t][F] = 0 <= R ? E.get(R) : 0
        }
        for (F = t = 0; F < f.length; F++)
            t += f[F].totalCount;
        d = Array(t);
        for (F = E = 0; F < h; F++)
            for (t = 0; t < f.length; t++)
                F < q[t].length && (d[E++] = q[t][F]);
        for (F = 0; F < l; F++)
            for (t = 0; t < f.length; t++)
                F < s[t].length && (d[E++] = s[t][F]);
        return d
    }
    ;
    for (var q = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
    }, s = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    }, r = {
        PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function(a) {
            for (var b = a << 10; 0 <= r.getBCHDigit(b) - r.getBCHDigit(r.G15); )
                b ^= r.G15 << r.getBCHDigit(b) - r.getBCHDigit(r.G15);
            return (a << 10 | b) ^ r.G15_MASK
        },
        getBCHTypeNumber: function(a) {
            for (var b = a << 12; 0 <= r.getBCHDigit(b) - r.getBCHDigit(r.G18); )
                b ^= r.G18 << r.getBCHDigit(b) - r.getBCHDigit(r.G18);
            return a << 12 | b
        },
        getBCHDigit: function(a) {
            for (var b = 0; 0 != a; )
                b++,
                a >>>= 1;
            return b
        },
        getPatternPosition: function(a) {
            return r.PATTERN_POSITION_TABLE[a - 1]
        },
        getMask: function(a, b, f) {
            switch (a) {
            case 0:
                return 0 == (b + f) % 2;
            case 1:
                return 0 == b % 2;
            case 2:
                return 0 == f % 3;
            case 3:
                return 0 == (b + f) % 3;
            case 4:
                return 0 == (Math.floor(b / 2) + Math.floor(f / 3)) % 2;
            case 5:
                return 0 == b * f % 2 + b * f % 3;
            case 6:
                return 0 == (b * f % 2 + b * f % 3) % 2;
            case 7:
                return 0 == (b * f % 3 + (b + f) % 2) % 2;
            default:
                throw Error("bad maskPattern:" + a);
            }
        },
        getErrorCorrectPolynomial: function(a) {
            for (var f = new b([1],0), d = 0; d < a; d++)
                f = f.multiply(new b([1, t.gexp(d)],0));
            return f
        },
        getLengthInBits: function(a, b) {
            if (1 <= b && 10 > b)
                switch (a) {
                case q.MODE_NUMBER:
                    return 10;
                case q.MODE_ALPHA_NUM:
                    return 9;
                case q.MODE_8BIT_BYTE:
                    return 8;
                case q.MODE_KANJI:
                    return 8;
                default:
                    throw Error("mode:" + a);
                }
            else if (27 > b)
                switch (a) {
                case q.MODE_NUMBER:
                    return 12;
                case q.MODE_ALPHA_NUM:
                    return 11;
                case q.MODE_8BIT_BYTE:
                    return 16;
                case q.MODE_KANJI:
                    return 10;
                default:
                    throw Error("mode:" + a);
                }
            else if (41 > b)
                switch (a) {
                case q.MODE_NUMBER:
                    return 14;
                case q.MODE_ALPHA_NUM:
                    return 13;
                case q.MODE_8BIT_BYTE:
                    return 16;
                case q.MODE_KANJI:
                    return 12;
                default:
                    throw Error("mode:" + a);
                }
            else
                throw Error("type:" + b);
        },
        getLostPoint: function(a) {
            for (var b = a.getModuleCount(), f = 0, d = 0; d < b; d++)
                for (var h = 0; h < b; h++) {
                    for (var l = 0, q = a.isDark(d, h), s = -1; 1 >= s; s++)
                        if (!(0 > d + s || b <= d + s))
                            for (var t = -1; 1 >= t; t++)
                                0 > h + t || b <= h + t || 0 == s && 0 == t || q == a.isDark(d + s, h + t) && l++;
                    5 < l && (f += 3 + l - 5)
                }
            for (d = 0; d < b - 1; d++)
                for (h = 0; h < b - 1; h++)
                    if (l = 0,
                    a.isDark(d, h) && l++,
                    a.isDark(d + 1, h) && l++,
                    a.isDark(d, h + 1) && l++,
                    a.isDark(d + 1, h + 1) && l++,
                    0 == l || 4 == l)
                        f += 3;
            for (d = 0; d < b; d++)
                for (h = 0; h < b - 6; h++)
                    a.isDark(d, h) && (!a.isDark(d, h + 1) && a.isDark(d, h + 2) && a.isDark(d, h + 3) && a.isDark(d, h + 4) && !a.isDark(d, h + 5) && a.isDark(d, h + 6)) && (f += 40);
            for (h = 0; h < b; h++)
                for (d = 0; d < b - 6; d++)
                    a.isDark(d, h) && (!a.isDark(d + 1, h) && a.isDark(d + 2, h) && a.isDark(d + 3, h) && a.isDark(d + 4, h) && !a.isDark(d + 5, h) && a.isDark(d + 6, h)) && (f += 40);
            for (h = l = 0; h < b; h++)
                for (d = 0; d < b; d++)
                    a.isDark(d, h) && l++;
            a = Math.abs(100 * l / b / b - 50) / 5;
            return f + 10 * a
        }
    }, t = {
        glog: function(a) {
            if (1 > a)
                throw Error("glog(" + a + ")");
            return t.LOG_TABLE[a]
        },
        gexp: function(a) {
            for (; 0 > a; )
                a += 255;
            for (; 256 <= a; )
                a -= 255;
            return t.EXP_TABLE[a]
        },
        EXP_TABLE: Array(256),
        LOG_TABLE: Array(256)
    }, E = 0; 8 > E; E++)
        t.EXP_TABLE[E] = 1 << E;
    for (E = 8; 256 > E; E++)
        t.EXP_TABLE[E] = t.EXP_TABLE[E - 4] ^ t.EXP_TABLE[E - 5] ^ t.EXP_TABLE[E - 6] ^ t.EXP_TABLE[E - 8];
    for (E = 0; 255 > E; E++)
        t.LOG_TABLE[t.EXP_TABLE[E]] = E;
    b.prototype = {
        get: function(a) {
            return this.num[a]
        },
        getLength: function() {
            return this.num.length
        },
        multiply: function(a) {
            for (var f = Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++)
                for (var h = 0; h < a.getLength(); h++)
                    f[d + h] ^= t.gexp(t.glog(this.get(d)) + t.glog(a.get(h)));
            return new b(f,0)
        },
        mod: function(a) {
            if (0 > this.getLength() - a.getLength())
                return this;
            for (var f = t.glog(this.get(0)) - t.glog(a.get(0)), d = Array(this.getLength()), h = 0; h < this.getLength(); h++)
                d[h] = this.get(h);
            for (h = 0; h < a.getLength(); h++)
                d[h] ^= t.gexp(t.glog(a.get(h)) + f);
            return (new b(d,0)).mod(a)
        }
    };
    f.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
    f.getRSBlocks = function(a, b) {
        var d = f.getRsBlockTable(a, b);
        if (void 0 == d)
            throw Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
        for (var h = d.length / 3, l = [], q = 0; q < h; q++)
            for (var s = d[3 * q + 0], t = d[3 * q + 1], r = d[3 * q + 2], E = 0; E < s; E++)
                l.push(new f(t,r));
        return l
    }
    ;
    f.getRsBlockTable = function(a, b) {
        switch (b) {
        case s.L:
            return f.RS_BLOCK_TABLE[4 * (a - 1) + 0];
        case s.M:
            return f.RS_BLOCK_TABLE[4 * (a - 1) + 1];
        case s.Q:
            return f.RS_BLOCK_TABLE[4 * (a - 1) + 2];
        case s.H:
            return f.RS_BLOCK_TABLE[4 * (a - 1) + 3]
        }
    }
    ;
    h.prototype = {
        get: function(a) {
            return 1 == (this.buffer[Math.floor(a / 8)] >>> 7 - a % 8 & 1)
        },
        put: function(a, b) {
            for (var f = 0; f < b; f++)
                this.putBit(1 == (a >>> b - f - 1 & 1))
        },
        getLengthInBits: function() {
            return this.length
        },
        putBit: function(a) {
            var b = Math.floor(this.length / 8);
            this.buffer.length <= b && this.buffer.push(0);
            a && (this.buffer[b] |= 128 >>> this.length % 8);
            this.length++
        }
    };
    var R = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]]
      , E = function(a, b) {
        this._el = a;
        this._htOption = b
    };
    E.prototype.draw = function(a) {
        function b(a, f) {
            var d = document.createElementNS("http://www.w3.org/2000/svg", a), h;
            for (h in f)
                f.hasOwnProperty(h) && d.setAttribute(h, f[h]);
            return d
        }
        var f = this._htOption
          , d = this._el
          , h = a.getModuleCount();
        this.clear();
        var l = b("svg", {
            viewBox: "0 0 " + String(h) + " " + String(h),
            width: "100%",
            height: "100%",
            fill: f.colorLight
        });
        l.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        d.appendChild(l);
        l.appendChild(b("rect", {
            fill: f.colorDark,
            width: "1",
            height: "1",
            id: "template"
        }));
        for (f = 0; f < h; f++)
            for (d = 0; d < h; d++)
                if (a.isDark(f, d)) {
                    var q = b("use", {
                        x: String(f),
                        y: String(d)
                    });
                    q.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template");
                    l.appendChild(q)
                }
    }
    ;
    E.prototype.clear = function() {
        for (; this._el.hasChildNodes(); )
            this._el.removeChild(this._el.lastChild)
    }
    ;
    "svg" !== document.documentElement.tagName.toLowerCase() && ("undefined" == typeof CanvasRenderingContext2D ? (E = function(a, b) {
        this._el = a;
        this._htOption = b
    }
    ,
    E.prototype.draw = function(a) {
        for (var b = this._htOption, f = this._el, d = a.getModuleCount(), h = Math.floor(b.width / d), l = Math.floor(b.height / d), q = ['<table style="border:0;border-collapse:collapse;">'], s = 0; s < d; s++) {
            q.push("<tr>");
            for (var t = 0; t < d; t++)
                q.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + h + "px;height:" + l + "px;background-color:" + (a.isDark(s, t) ? b.colorDark : b.colorLight) + ';"></td>');
            q.push("</tr>")
        }
        q.push("</table>");
        f.innerHTML = q.join("");
        a = f.childNodes[0];
        f = (b.width - a.offsetWidth) / 2;
        b = (b.height - a.offsetHeight) / 2;
        0 < f && 0 < b && (a.style.margin = b + "px " + f + "px")
    }
    ,
    E.prototype.clear = function() {
        this._el.innerHTML = ""
    }
    ) : E = function() {
        function a() {
            this._elImage.src = this._elCanvas.toDataURL("image/png");
            this._elImage.style.display = "block";
            this._elCanvas.style.display = "none"
        }
        if (this._android && 2.1 >= this._android) {
            var b = 1 / window.devicePixelRatio
              , f = CanvasRenderingContext2D.prototype.drawImage;
            CanvasRenderingContext2D.prototype.drawImage = function(a, d, h, l, q, s, w, t, r) {
                if ("nodeName"in a && /img/i.test(a.nodeName))
                    for (var E = arguments.length - 1; 1 <= E; E--)
                        arguments[E] *= b;
                else
                    "undefined" == typeof t && (arguments[1] *= b,
                    arguments[2] *= b,
                    arguments[3] *= b,
                    arguments[4] *= b);
                f.apply(this, arguments)
            }
        }
        var d = function(a, b) {
            this._bIsPainted = !1;
            this._android = l();
            this._htOption = b;
            this._elCanvas = document.createElement("canvas");
            this._elCanvas.width = b.width;
            this._elCanvas.height = b.height;
            a.appendChild(this._elCanvas);
            this._el = a;
            this._oContext = this._elCanvas.getContext("2d");
            this._bIsPainted = !1;
            this._elImage = document.createElement("img");
            this._elImage.alt = "Scan me!";
            this._elImage.style.display = "none";
            this._el.appendChild(this._elImage);
            this._bSupportDataURI = null
        };
        d.prototype.draw = function(a) {
            var b = this._elImage
              , f = this._oContext
              , d = this._htOption
              , h = a.getModuleCount()
              , l = d.width / h
              , q = d.height / h
              , s = Math.round(l)
              , w = Math.round(q);
            b.style.display = "none";
            this.clear();
            for (b = 0; b < h; b++)
                for (var t = 0; t < h; t++) {
                    var e = a.isDark(b, t)
                      , r = t * l
                      , I = b * q;
                    f.strokeStyle = e ? d.colorDark : d.colorLight;
                    f.lineWidth = 1;
                    f.fillStyle = e ? d.colorDark : d.colorLight;
                    f.fillRect(r, I, l, q);
                    f.strokeRect(Math.floor(r) + 0.5, Math.floor(I) + 0.5, s, w);
                    f.strokeRect(Math.ceil(r) - 0.5, Math.ceil(I) - 0.5, s, w)
                }
            this._bIsPainted = !0
        }
        ;
        d.prototype.makeImage = function() {
            if (this._bIsPainted) {
                var b = this;
                b._fFail = void 0;
                b._fSuccess = a;
                if (null === b._bSupportDataURI) {
                    var f = document.createElement("img")
                      , d = function() {
                        b._bSupportDataURI = !1;
                        b._fFail && _fFail.call(b)
                    };
                    f.onabort = d;
                    f.onerror = d;
                    f.onload = function() {
                        b._bSupportDataURI = !0;
                        b._fSuccess && b._fSuccess.call(b)
                    }
                    ;
                    f.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
                } else
                    !0 === b._bSupportDataURI && b._fSuccess ? b._fSuccess.call(b) : !1 === b._bSupportDataURI && b._fFail && b._fFail.call(b)
            }
        }
        ;
        d.prototype.isPainted = function() {
            return this._bIsPainted
        }
        ;
        d.prototype.clear = function() {
            this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
            this._bIsPainted = !1
        }
        ;
        d.prototype.round = function(a) {
            return !a ? a : Math.floor(1E3 * a) / 1E3
        }
        ;
        return d
    }());
    var F = E;
    QRCode = function(a, b) {
        this._htOption = {
            width: 256,
            height: 256,
            typeNumber: 4,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: s.H
        };
        typeof b === "string" && (b = {
            text: b
        });
        if (b)
            for (var f in b)
                this._htOption[f] = b[f];
        typeof a == "string" && (a = document.getElementById(a));
        this._android = l();
        this._el = a;
        this._oQRCode = null;
        this._oDrawing = new F(this._el,this._htOption);
        this._htOption.text && this.makeCode(this._htOption.text)
    }
    ;
    QRCode.prototype.makeCode = function(a) {
        var b = this._htOption.correctLevel, f = 1, h;
        h = encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        h = h.length + (h.length != a ? 3 : 0);
        for (var l = 0, q = R.length; l <= q; l++) {
            var t = 0;
            switch (b) {
            case s.L:
                t = R[l][0];
                break;
            case s.M:
                t = R[l][1];
                break;
            case s.Q:
                t = R[l][2];
                break;
            case s.H:
                t = R[l][3]
            }
            if (h <= t)
                break;
            else
                f++
        }
        if (f > R.length)
            throw Error("Too long data");
        this._oQRCode = new d(f,this._htOption.correctLevel);
        this._oQRCode.addData(a);
        this._oQRCode.make();
        this._el.title = a;
        this._oDrawing.draw(this._oQRCode);
        this.makeImage()
    }
    ;
    QRCode.prototype.makeImage = function() {
        typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
    }
    ;
    QRCode.prototype.clear = function() {
        this._oDrawing.clear()
    }
    ;
    QRCode.CorrectLevel = s
}
)();
function UPOP() {}
function importUP(a, d, b, f) {
    if ("object" == typeof a)
        try {
            d = a.UP_ROOT_NOI18,
            b = a.UP_ROOT_URL,
            f = a.TYPE,
            a = a.UP_ROOT
        } catch (h) {}
    UPOP.PATH_STATIC_I18 = a;
    UPOP.PATH_STATIC = d;
    UPOP.PATH_URL = b;
    UPOP.TYPE = f;
    d = a.split("/");
    UPOP.localeStr = d.pop();
    importICO(a + "/images/global/favicon.ico");
    importLib(a + "/js/up/up.i18.js" + UPOP.version);
    UPOP.showUPEditor = function() {
        0 < $("#_ocx_password").length && 0 < $("#mockLoginPassword").length && ($("#_ocx_password").show(),
        $("#mockLoginPassword").addClass("dn"));
        0 < $("#_ocx_cvn2").length && 0 < $("#mockCVN2").length && ($("#_ocx_cvn2").show(),
        $("#mockCVN2").addClass("dn"))
    }
    ;
    UPOP.hideUPEditor = function() {
        0 < $("#_ocx_password").length && 0 < $("#mockLoginPassword").length && ($("#_ocx_password").hide(),
        $("#mockLoginPassword").removeClass("dn"));
        0 < $("#_ocx_cvn2").length && 0 < $("#mockCVN2").length && ($("#_ocx_cvn2").hide(),
        $("#mockCVN2").removeClass("dn"))
    }
}
function importUPWithTest(a) {
    importPOR(a);
    importLib(a + "/js/xbDebug.js");
    importLib(a + "/js/jsUnitCore.js");
    importLib(a + "/js/jsUnitTestSuite.js")
}
importLib = function(a) {
    document.write('<script charset="utf-8" type="text/javascript" src="' + a + '"><\/script>')
}
;
importCSS = function(a) {
    document.write('<link href="' + a + '" rel="stylesheet"  charset="utf-8" type="text/css"/>')
}
;
importICO = function(a) {
    document.write('<link href="' + a + '" rel="shortcut icon" charset="utf-8" type="image/x-icon"/>')
}
;
function UPOPUtils() {}
UPOPUtils.KEY_CODE = {
    Backspace: 8,
    Tab: 9,
    Shift: 16,
    Space: 32,
    Del: 46,
    "0": 48,
    9: 57,
    zero: 96,
    nine: 105,
    ";": 59,
    "=": 61,
    A: 65,
    C: 67,
    F: 70,
    V: 86,
    Z: 90,
    "-": 109,
    ",": 188,
    ".": 190,
    dot: 110,
    "/": 191,
    "`": 192,
    "[": 219,
    "\\": 220,
    "]": 221,
    "'": 222
};
UPOPUtils.isNull = function(a) {
    return void 0 === a || null === a
}
;
UPOPUtils.isInputKey = function(a) {
    var d = UPOPUtils.KEY_CODE;
    return "17" == a || a >= d["0"] && a <= d["9"] || a >= d.zero && a <= d.nine
}
;
UPOPUtils.isValidKey = function(a) {
    var d = UPOPUtils.KEY_CODE;
    return a >= d["0"] && a <= d["9"] || a >= d.zero && a <= d.nine || a == d.Backspace ? !0 : !1
}
;
UPOPUtils.setCursor = function(a, d, b) {
    a.setSelectionRange ? (a.focus(),
    a.setSelectionRange(d, b)) : a.createTextRange && (range = a.createTextRange(),
    range.collapse(!0),
    range.moveEnd("character", b),
    range.moveStart("character", d),
    range.select())
}
;
UPOPUtils.getCursorPosition = function(a) {
    var d = 0;
    if (document.selection)
        a.focus(),
        d = document.selection.createRange(),
        d.moveStart("character", -a.value.length),
        d = d.text.length;
    else if (a.selectionStart || "0" == a.selectionStart)
        d = a.selectionStart;
    return d
}
;
UPOPUtils.isSMSCode = function(a) {
    a = a.replace(/[ ]/g, "");
    return UPOPUtils.isValidSmsCode(a)
}
;
UPOPUtils.isMobilePhone = function(a) {
    a = a.replace(/[ ]/g, "");
    return UPOPUtils.isValidCellPhone(a)
}
;
UPOPUtils.isNull = function(a) {
    return void 0 === a || null === a
}
;
UPOPUtils.display = function(a, d) {
    if (null == a.value || 0 == a.value.length) {
        var b = $(a).parent("td").children("span");
        b.attr("class", "hintshow");
        b.html(d)
    }
}
;
UPOPUtils.isNumber = function(a) {
    return $.browser.msie ? 47 < event.keyCode && 58 > event.keyCode || 8 == event.keyCode ? !0 : !1 : 47 < a.which && 58 > a.which || 8 == a.which ? !0 : !1
}
;
UPOPUtils.isValidLoginName = function(a) {
    return /(^[\w]{6,20}$)|(^(?=.{0,64})\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/.test(a) ? !0 : !1
}
;
UPOPUtils.isValidCustomLoginName = function(a) {
    var d = /(^[\d]{6,20}$)/;
    return /(^[\w]{6,20}$)/.test(a) && !d.test(a) ? !0 : !1
}
;
UPOPUtils.isValidCardNumber = function(a) {
    return /^\d{13,19}$/.test(a) ? !0 : !1
}
;
UPOPUtils.isValidCellPhone = function(a) {
    return RegExp(/^1\d{10}$/).test(a) ? !0 : !1
}
;
UPOPUtils.isValidEmail = function(a) {
    return RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(a) && 64 >= a.length ? !0 : !1
}
;
UPOPUtils.isValidSecurityInfo = function(a) {
    return RegExp(/^[^!$%\^&*?<>\s]{2,16}$/).test(a) ? !0 : !1
}
;
UPOPUtils.isValidProblems = function(a) {
    return RegExp(/^[^!$%\^&*?<>\s]{2,16}$/).test(a) ? !0 : !1
}
;
UPOPUtils.isValidAnswer = function(a) {
    return RegExp(/^[^!$%\^&*?<>\s]{2,16}$/).test(a) ? !0 : !1
}
;
UPOPUtils.isValidCaptcha = function(a) {
    return RegExp(/^[\da-zA-Z]{4}$/).test(a) ? !0 : !1
}
;
UPOPUtils.isValidSmsCode = function(a) {
    return RegExp(/^\d{6}$/).test(a) ? !0 : !1
}
;
UPOPUtils.menuLocate = function(a) {
    $("#imenus0 li a").removeClass("selected");
    $("#imenus0_" + a + " a").addClass("selected current")
}
;
UPOPUtils.leftMenuLocate = function(a) {
    $(".menu_lf li").removeClass("m_focus");
    $(".menu_lf #" + a).addClass("m_focus")
}
;
UPOPUtils.doSmsCountingBack = function(a, d, b, f, h) {
    0 <= a ? (d.val("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001"),
    f && "true" != f.attr("onClickFlag") && (h || (h = "hintright"),
    f.attr("className", h).html("\u5982\u679c" + a + "\u79d2\u540e\u4ecd\u672a\u6536\u5230\u77ed\u4fe1\uff0c\u8bf7\u91cd\u65b0\u83b7\u53d6")),
    --a,
    setTimeout(function() {
        doSmsCountingBack(a, d, b, f, h)
    }, 1E3)) : (d.removeClass("mes_loading").removeAttr("disabled", "disabled"),
    d.val("\u91cd\u65b0\u83b7\u53d6\u9a8c\u8bc1\u7801"),
    f && $("#smsCodeTip").attr("onClickFlag", "false"))
}
;
UPOPUtils.cardnumberFormat = function(a) {
    return a.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ")
}
;
UPOPUtils.removeSpace = function(a) {
    return a.replace(/\s/g, "")
}
;
UPOPUtils.sendMsgCallBack = function(a, d, b, f) {
    function h(a, b, f, r) {
        0 < a ? (d.find("span").html(a),
        d.find("span").html(a),
        --a,
        UPOPUtils.trySend = setTimeout(function() {
            h(a, b, f, r)
        }, 1E3)) : (b.removeClass(r).removeAttr("disabled"),
        b.val($.getI18Text("smsCode_Retrieves")),
        d.find("div").removeClass("txt_success").show("fast").html($.getI18Text("smsCode_if_failed")),
        UPOPUtils.trySend = null)
    }
    UPOPUtils.trySend = null;
    a.addClass("yzm_btn_dis");
    a.val($.getI18Text("smsCode_alreadySend")).attr("disabled", "disabled");
    d.show();
    b ? d.find("div").removeClass().addClass(b) : d.find("div").removeClass().addClass("text_c CardSmsText txt_success");
    null != f ? d.find("div").html(f + $.getI18Text("smsCode_get_SMS_60").replace("{60}", "<span>60</span>")) : d.find("div").html($.getI18Text("smsCode_get_SMS_60").replace("{60}", "<span>60</span>"));
    h(60, a, $.getI18Text("smsCode_get_SMS"), "yzm_btn_dis")
}
;
UPOPUtils.getWinHeight = function() {
    return $.browser.msie ? "CSS1Compat" == document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight : self.innerHeight
}
;
UPOPUtils.getWinWidth = function() {
    return $.browser.msie ? "CSS1Compat" == document.compatMode ? document.documentElement.clientWidth : document.body.clientWidth : self.innerWidth
}
;
UPOPUtils.getTopWinHeight = function() {
    return $.browser.msie ? "CSS1Compat" == window.top.document.compatMode ? window.top.document.documentElement.clientHeight : window.top.document.body.clientHeight : window.top.innerHeight
}
;
UPOPUtils.getTopWinWidth = function() {
    return $.browser.msie ? "CSS1Compat" == window.top.document.compatMode ? window.top.document.documentElement.clientWidth : window.top.document.body.clientWidth : window.top.innerWidth
}
;
UPOPUtils.getExpireYearStr = function() {
    var a = (new Date).getFullYear()
      , d = [];
    for (i = 0; 12 > i; i++)
        d.push((a + "").substring(2)),
        a++;
    return d.join(",")
}
;
UPOPUtils.getExpireYearSplitStr = function() {
    return "," + UPOPUtils.getExpireYearStr() + ","
}
;
UPOPUtils.showUPEditInstall = function() {}
;
UPOPUtils.strto8 = function(a) {
    var d, b, f, h;
    d = "";
    f = a.length;
    for (b = 0; b < f; b++)
        h = a.charCodeAt(b),
        1 <= h && 127 >= h ? d += a.charAt(b) : (2047 < h ? (d += String.fromCharCode(224 | h >> 12 & 15),
        d += String.fromCharCode(128 | h >> 6 & 63)) : d += String.fromCharCode(192 | h >> 6 & 31),
        d += String.fromCharCode(128 | h >> 0 & 63));
    return d
}
;
UPOPUtils.checkIDCard = function(a) {
    var d = []
      , d = a.split("");
    if (null == {
        11: "\u5317\u4eac",
        12: "\u5929\u6d25",
        13: "\u6cb3\u5317",
        14: "\u5c71\u897f",
        15: "\u5185\u8499\u53e4",
        21: "\u8fbd\u5b81",
        22: "\u5409\u6797",
        23: "\u9ed1\u9f99\u6c5f",
        31: "\u4e0a\u6d77",
        32: "\u6c5f\u82cf",
        33: "\u6d59\u6c5f",
        34: "\u5b89\u5fbd",
        35: "\u798f\u5efa",
        36: "\u6c5f\u897f",
        37: "\u5c71\u4e1c",
        41: "\u6cb3\u5357",
        42: "\u6e56\u5317",
        43: "\u6e56\u5357",
        44: "\u5e7f\u4e1c",
        45: "\u5e7f\u897f",
        46: "\u6d77\u5357",
        50: "\u91cd\u5e86",
        51: "\u56db\u5ddd",
        52: "\u8d35\u5dde",
        53: "\u4e91\u5357",
        54: "\u897f\u85cf",
        61: "\u9655\u897f",
        62: "\u7518\u8083",
        63: "\u9752\u6d77",
        64: "\u5b81\u590f",
        65: "\u65b0\u7586",
        71: "\u53f0\u6e7e",
        81: "\u9999\u6e2f",
        82: "\u6fb3\u95e8",
        91: "\u56fd\u5916"
    }[parseInt(a.substr(0, 2))])
        return !1;
    switch (a.length) {
    case 15:
        return ereg = 0 == (parseInt(a.substr(6, 2)) + 1900) % 4 || 0 == (parseInt(a.substr(6, 2)) + 1900) % 100 && 0 == (parseInt(a.substr(6, 2)) + 1900) % 4 ? /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/ : /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/,
        ereg.test(a) ? !0 : !1;
    case 18:
        return ereg = 0 == parseInt(a.substr(6, 4)) % 4 || 0 == parseInt(a.substr(6, 4)) % 100 && 0 == parseInt(a.substr(6, 4)) % 4 ? /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/ : /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/,
        ereg.test(a) ? (a = 7 * (parseInt(d[0]) + parseInt(d[10])) + 9 * (parseInt(d[1]) + parseInt(d[11])) + 10 * (parseInt(d[2]) + parseInt(d[12])) + 5 * (parseInt(d[3]) + parseInt(d[13])) + 8 * (parseInt(d[4]) + parseInt(d[14])) + 4 * (parseInt(d[5]) + parseInt(d[15])) + 2 * (parseInt(d[6]) + parseInt(d[16])) + 1 * parseInt(d[7]) + 6 * parseInt(d[8]) + 3 * parseInt(d[9]),
        a = "10X98765432".substr(a % 11, 1),
        a == d[17].toUpperCase() ? !0 : !1) : !1;
    default:
        return !1
    }
}
;
UPOPUtils.isValidZipCode = function(a) {
    a = a.replace(/[ ]/g, "");
    return RegExp(/^\d{6}$/).test(a)
}
;
UPOPUtils.leftMenuLocate_new = function(a) {
    $("a", ".up_app_menu").removeClass("selected");
    $("#" + a).addClass("selected")
}
;
UPOPUtils.menuLocate_new = function(a) {
    $("li", "#imenus0").removeClass("up_selected");
    $("#imenus0_" + a).addClass("up_selected")
}
;
UPOPUtils.phoneNumberFormat = function(a) {
    if (5 >= parseInt(a.length))
        a = a.replace(/\s/g, "").replace(/(\d{3})(?=\d)/g, "$1 ");
    else
        var d = a.substring(0, 3)
          , a = a.substring(3)
          , a = a.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 ")
          , a = d + " " + a;
    return a
}
;
UPOPUtils.checkBankCard = function(a) {
    try {
        if (!a)
            return !1;
        for (var d = a.split(""), a = 0, b = d.length - 2, f = 0; 0 <= b; b--,
        f++) {
            var h = d[b] - 0;
            0 == f % 2 && (h *= 2,
            h = Math.floor(h / 10) + h % 10);
            a += h
        }
        return (0 == a % 10 ? 0 : 10 - a % 10) == d[d.length - 1] ? !0 : !1
    } catch (l) {
        return !1
    }
}
;
UPOPUtils.tplParse = function(a, d) {
    return a.replace(/\{([^}]+)\}/ig, function(a, f) {
        return null != d[f] && void 0 != d[f] ? d[f] : a
    })
}
;
var UPService = {
    send: function(a, d, b, f, h) {
        "getJsonp" == d ? $.getJSON(a + "&" + function(a) {
            var b = [], f;
            for (f in a)
                a[f] && b.push(encodeURIComponent(f) + "=" + encodeURIComponent(a[f]));
            return b.join("&")
        }(b) + "&callback=?", {}, function(a) {
            try {
                if (a) {
                    if (f.onSuccess(a),
                    "object" == typeof f && "function" == typeof f.onComplete)
                        f.onComplete()
                } else
                    f.onFail(a)
            } catch (b) {
                f.onFail(a)
            }
        }) : (!0 != h && (h = !1),
        $.ajax({
            type: "POST",
            async: h,
            url: a,
            data: b,
            dataType: d,
            success: function(a) {
                if ("object" == typeof f && null != f && "function" == typeof f.onSuccess)
                    f.onSuccess(a)
            },
            error: function(a, b, d) {
                if ("object" == typeof f && "function" == typeof f.onFail)
                    f.onFail(a, b, d)
            },
            complete: function() {
                if ("object" == typeof f && "function" == typeof f.onComplete)
                    f.onComplete()
            }
        }))
    },
    $send: function(a, d, b) {
        $.ajax({
            type: "POST",
            async: !1,
            url: a,
            data: d,
            dataType: "json",
            success: function(a) {
                b.onSuccess(a)
            },
            error: function(a, d, l) {
                b.onFail(a, d, l)
            }
        })
    }
};
(function(a) {
    a.fn.upfloatable = function() {
        return a(this).each(function() {
            a(this).bind("keypress", function(a) {
                var b = a.which;
                return 0 == b || 8 == b || (46 == b || 48 <= b && 57 >= b) || a.ctrlKey && (99 == b || 97 == b || 118 == b || 120 == b) ? !0 : !1
            });
            a(this).bind("paste", function() {
                var d = a(this);
                setTimeout(function() {
                    var b = a(d).val();
                    /[^\d]/.test(b) && (alert(a.getI18Text("up_component_tips")),
                    a(d).val(""))
                }, 100)
            });
            a(this).bind("dragenter", function() {
                return !1
            })
        })
    }
    ;
    a.fn.upnumeral = function() {
        return a(this).each(function() {
            a(this).bind("keypress", function(a) {
                var b = a.which;
                return 0 == b || 8 == b || (46 == b || 48 <= b && 57 >= b) || a.ctrlKey && (99 == b || 97 == b || 118 == b || 120 == b) ? !0 : !1
            });
            a(this).bind("paste", function() {
                var d = a(this);
                setTimeout(function() {
                    var b = a(d).val();
                    /[^\d]/.test(b) && (alert(a.getI18Text("up_component_tips")),
                    a(d).val(""))
                }, 100)
            });
            a(this).bind("dragenter", function() {
                return !1
            })
        })
    }
}
)(jQuery);
(function(a) {
    a.fn.upbankcard = function() {
        return a(this).each(function() {
            var d = a(this).val();
            a(this).val(d.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 "));
            a(this).bind("keypress", function(a) {
                var f = a.which;
                return 0 == f || 8 == f || (46 == f || 48 <= f && 57 >= f) || a.ctrlKey && (99 == f || 97 == f || 118 == f || 120 == f) ? !0 : !1
            });
            a(this).bind("keyup", function(b) {
                b = b.which;
                if (46 == b || 48 <= b && 57 >= b || 96 <= b && 105 >= b) {
                    var b = UPOPUtils.getCursorPosition(a(this)[0])
                      , f = 0
                      , d = a(this).val()
                      , f = d.split(" ").length
                      , d = d.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 ")
                      , f = d.split(" ").length - f;
                    a(this).val(d);
                    UPOPUtils.setCursor(a(this)[0], b + f, b + f);
                    return !0
                }
                return !1
            });
            a(this).change(function() {
                var b = a(this).val().replace(/[ ]/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
                a(this).val(b)
            });
            a(this).bind("paste", function() {
                var b = a(this);
                setTimeout(function() {
                    var f = a(b).val().replace(/[ ]/g, "");
                    /[^\d]/.test(f) ? (alert(a.getI18Text("up_component_tips")),
                    a(b).val("")) : (f = a(b).val().replace(/[ ]/g, "").replace(/(\d{4})(?=\d)/g, "$1 "),
                    a(b).val(f))
                }, 100)
            });
            a(this).bind("dragenter", function() {
                return !1
            })
        })
    }
}
)(jQuery);
(function(a) {
    a.fn.uptelephone = function() {
        return a(this).each(function() {
            var d = a(this)
              , b = function() {
                var a = d.val().replace(/[ ]/g, "");
                if (5 >= parseInt(a.length))
                    a = a.replace(/\s/g, "").replace(/(\d{3})(?=\d)/g, "$1 ");
                else
                    var b = a.substring(0, 3)
                      , a = a.substring(3)
                      , a = a.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 ")
                      , a = b + " " + a;
                d.val(a)
            };
            b();
            a(this).bind("keypress", function(a) {
                var b = a.which;
                return 0 == b || 8 == b || (46 == b || 48 <= b && 57 >= b) || a.ctrlKey && (99 == b || 97 == b || 118 == b || 120 == b) ? 11 < d.val().replace(/[ ]/g, "").length && 8 != b ? !1 : !0 : !1
            });
            a(this).bind("keyup", function(b) {
                b = b.which;
                if (46 == b || 48 <= b && 57 >= b || 96 <= b && 105 >= b) {
                    var b = UPOPUtils.getCursorPosition(a(this)[0])
                      , d = 0
                      , l = a(this).val()
                      , d = l.split(" ").length;
                    if (5 >= parseInt(l.length))
                        l = l.replace(/\s/g, "").replace(/(\d{3})(?=\d)/g, "$1 ");
                    else {
                        var q = l.substring(0, 3)
                          , l = l.substring(3)
                          , l = l.replace(/\s/g, "");
                        8 < l.length && (l = l.substring(0, 8));
                        l = l.replace(/(\d{4})(?=\d)/g, "$1 ");
                        l = q + " " + l
                    }
                    d = l.split(" ").length - d;
                    a(this).val(l);
                    UPOPUtils.setCursor(a(this)[0], b + d, b + d);
                    return !0
                }
                return !1
            });
            a(this).change(function() {
                b()
            });
            a(this).bind("paste", function() {
                var f = a(this);
                setTimeout(function() {
                    var d = a(f).val().replace(/[ ]/g, "");
                    /[^\d]/.test(d) ? (alert(a.getI18Text("up_component_tips")),
                    a(f).val("")) : (d = a(f).val().replace(/[ ]/g, ""),
                    11 < d.length && (d = d.substring(0, 11),
                    a(f).val(d)),
                    b())
                }, 100)
            });
            a(this).bind("dragenter", function() {
                return !1
            })
        })
    }
}
)(jQuery);
(function(a) {
    a.fn.upselectlist = function(d) {
        var b = a(this)
          , d = a.extend({}, {
            boxClass: "upselect_out_box",
            listClass: "upselect_list_box",
            focusClass: "upselect_focus_box",
            markCalss: "upselect_hlight",
            zIndex: 200,
            data: "",
            textHint: !1,
            hintText: "",
            focusColor: "#333",
            blurColor: "#999"
        }, d || {})
          , f = d.listClass
          , h = d.focusClass;
        data = d.data.split(",");
        var l = a(this).get(0);
        void 0 == l.upselectsettings && (l.upselectsettings = d);
        a.createHtml = function(d, l, q, s) {
            var w = "upSelect_" + s.attr("id") + "_"
              , r = "";
            b.val();
            a.isArray(l) && a.each(l, function(a) {
                r = a === q ? r + ('<div class="mailHover ' + h + '" id="' + w + a + '">' + l[a] + "</div>") : r + ('<div class="mailHover ' + f + '" id="' + w + a + '">' + l[a] + "</div>")
            });
            return r
        }
        ;
        var q = 0, s, r = '<iframe src="https://static.95516.com/static/cms/img/30/6460cf5d-dd11-43fe-bebc-ac3b7d2adaf1.gif" frameborder="0" scrolling="no" style="border:none;position:absolute; visibility:inherit; top:0px; left:0px; width:100%; height:100%; z-index:1; filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";"></iframe>';
        UPOP && "pad" == UPOP.acpAgent && (r = "");
        return a(this).each(function() {
            var b = a(this).get(0).upselectsettings
              , f = b.boxClass
              , d = b.zIndex;
            data = b.data.split(",");
            var h = a(this)
              , b = a(".upselectbox").size()
              , l = h.outerWidth() - 2
              , T = h.outerHeight();
            h.wrap('<div style="display:inline-block;position:relative;z-index:2;"></div>').before('<div id="upSelectBox_' + b + '" class="upselectbox ' + f + '" style="min-width:' + l + "px;_width:" + l + "px;position:absolute;left:-6000px;top:" + T + "px;z-index:" + d + ';"></div>');
            var I = a("#upSelectBox_" + b), K;
            I.show();
            h.focus(function() {
                var b = a(this).get(0).upselectsettings
                  , f = b.listClass
                  , d = b.focusClass
                  , h = b.zIndex
                  , l = data = b.data.split(",")
                  , t = b.textHint
                  , w = b.hintText
                  , b = b.focusColor;
                a(this).css("color", b).parent().css("z-index", h);
                t && w && a.trim(a(this).val()) === w && a(this).val("");
                s = v = a.trim(a(this).val());
                for (var h = RegExp(s), E = b = 0; E < data.length; E++)
                    if (h.test(data[E])) {
                        b = E;
                        break
                    }
                I.show();
                I.html(r + '<div style="position:relative;z-index:10;">' + a.createHtml(s, data, b, a(this)) + "</div>").css("left", 0);
                I.find("iframe").width(I.width());
                I.find("iframe").height(I.height());
                a(this).keyup(function(b) {
                    I.show();
                    s = v = a.trim(a(this).val());
                    if (b.keyCode === 38) {
                        if (q <= 0)
                            q = l.length;
                        q--
                    } else if (b.keyCode === 40) {
                        q >= l.length - 1 && (q = -1);
                        q++
                    } else if (b.keyCode === 13)
                        q > -1 && q < l.length && a(this).val(a("#upSelect_" + a(this).attr("id") + "_" + q).text());
                    else {
                        q = 0;
                        var f = v;
                        l = a.map(data, function(a) {
                            if (RegExp(f).test(a))
                                return a
                        })
                    }
                    I.html(r + '<div style="position:relative;z-index:10">' + a.createHtml(s, l, q, a(this)) + "</div>").css("left", 0);
                    l.length == 0 && I.hide();
                    I.find("iframe").width(I.width());
                    I.find("iframe").height(I.height());
                    b.keyCode === 13 && q > -1 && q < l.length && I.css("left", "-6000px")
                }).blur(function() {
                    t && w && a.trim(a(this).val()) === "" && a(this).val(w);
                    a(this).unbind("keyup").parent().css("z-index", 200);
                    I.css("left", "-6000px")
                });
                var B = this;
                a(".mailHover").live("mouseover", function() {
                    q = Number(a(this).attr("id").split("_")[2]);
                    K = a("#upSelect_" + B.id + "_" + q).text();
                    I.find("div").children("." + d).removeClass(d).addClass(f);
                    a(this).addClass(d).removeClass(f)
                })
            });
            I.bind("mousedown", function() {
                h.val(K)
            })
        })
    }
}
)(jQuery);
(function(a) {
    a.fn.extend({
        Scroll: function(a) {
            a || (a = {});
            var b = this.eq(0).find("ul:first")
              , f = b.find("li:first").height()
              , h = a.line ? parseInt(a.line, 10) : parseInt(this.height() / f, 10)
              , l = a.speed ? parseInt(a.speed, 10) : 500
              , q = a.timer ? parseInt(a.timer, 10) : 3E3;
            0 == h && (h = 1);
            var s = 0 - h * f;
            scrollUp = function() {
                b.animate({
                    marginTop: s
                }, l, function() {
                    for (i = 1; i <= h; i++)
                        b.find("li:first").appendTo(b);
                    b.css({
                        marginTop: 0
                    })
                })
            }
            ;
            b.hover(function() {
                clearInterval(timerID)
            }, function() {
                timerID = setInterval("scrollUp()", q)
            }).mouseout()
        }
    })
}
)(jQuery);
function UPWidget() {}
function UPComponent() {
    UPWidget.apply(this, arguments)
}
UPComponent.prototype = new UPWidget;
UPComponent.prototype.id = function(a) {
    this._id = a;
    return this
}
;
UPOP.VALIDATOR = {
    REGEX: {
        number: /^[0-9]*$/,
        username: /(^[\w]{6,20}$)|(^(?=.{0,64})\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/,
        customUserName: /(^[\w]{6,20}$)/,
        captcha: /^[\da-zA-Z]{1,4}$/,
        emailandphone: /(^1\d{10}$)|(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/,
        smsCode: /^\d{6}$/,
        areaCode: /^\d{2,4}$/,
        foreignPhone: /^\d{4,15}$/,
        secureInfo: /^[^!$%\^&*?<>\s]{1,1}[^!$%\^&*?<>]{0,14}[^!$%\^&*?<>\s]{1,1}$/,
        realname: /^[^!$%\\^&*?<>]{2,10}$/,
        email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        mobilephone: /^1\d{10}$/,
        address: /^[^!$%\\^&*?<>]*$/,
        postcode: /^\d{6}$/,
        certid: /^(\d{15}|\d{17}[xX\d])$/,
        othercertid: /^[^!$%\^&*?<>]{5,18}$/,
        cardNumber: /^\d{13,19}$/,
        expireDate: /^\d{2}$/
    },
    TIP_MODE: {
        FixTip: "FixTip",
        AlertTip: "AlertTip"
    },
    TIP_CSS: {
        onShowTextClass: "txt_show_ipt act_element",
        onErrorShowTextClass: "txt_show_ipt act_element ipt_error",
        onShowClass: "txt_ipt act_element",
        onFocusClass: "txt_ipt act_element reg_ipt_click",
        onErrorClass: "txt_ipt act_element ipt_error",
        onCorrectClass: "txt_ipt act_element"
    },
    TIP_HTML: {
        onShowHtml: "<div class='note_info'>$data$</div>",
        onFocusHtml: "<div class='note_info'>$data$</div>",
        onErrorHtml: "<div class='note_info write_error'>$data$</div>",
        onCorrectHtml: "<div class='note_info write_success'>$data$</div>"
    },
    validatorGroup_setting: [],
    functionValidator_setting: {
        isValid: !0,
        fun: function() {
            this.isValid = !0
        },
        validateType: "functionValidator",
        onError: "\u8f93\u5165\u9519\u8bef"
    },
    regexValidator_setting: {
        isValid: !1,
        regExp: "",
        param: "i",
        dataType: "string",
        onError: "\u8f93\u5165\u7684\u683c\u5f0f\u4e0d\u6b63\u786e",
        validateType: "regexValidator"
    },
    inputValidator_setting: {
        isValid: !1,
        type: "size",
        min: 0,
        max: 99999,
        onError: "\u8f93\u5165\u9519\u8bef",
        validateType: "inputValidator",
        empty: {
            leftEmpty: !0,
            rightEmpty: !0,
            leftEmptyError: null,
            rightEmptyError: null
        }
    },
    formValidator_setting: {
        validatorGroup: "1",
        onShowText: "",
        onShowTextColor: {
            mouseOnColor: "#000000",
            mouseOutColor: "#999999",
            fontSize: "12px"
        },
        onShowFixText: "",
        onShow: "",
        onFocus: "",
        onCorrect: "",
        onEmpty: "",
        empty: !1,
        validate: !0,
        autoModify: !1,
        defaultValue: null,
        bind: !0,
        ajax: !1,
        validateType: "formValidator",
        tipCss: {
            left: 10,
            top: -4,
            height: 20,
            width: 280
        },
        triggerEvent: "blur",
        forceValid: !1,
        tipID: null,
        pwdTipID: null,
        fixTipID: null,
        relativeID: null,
        index: 0,
        leftTrim: !1,
        rightTrim: !1
    },
    initConfig_setting: {
        style: "unionpay",
        theme: "Default",
        validatorGroup: "1",
        formID: "",
        submitOnce: !1,
        mode: "FixTip",
        errorFocus: !1,
        wideWord: !0,
        forceValid: !1,
        debug: !1,
        inIframe: !1,
        preSubmit: function() {
            return !0
        },
        onSuccess: function() {
            return !0
        },
        onError: $.noop,
        status: "",
        validCount: 0,
        validObjects: [],
        showTextObjects: "",
        validateType: "initConfig"
    }
};
(function(a) {
    var d = UPOP.VALIDATOR;
    a.formValidator = {
        initConfig: function(b) {
            var f = {};
            a.extend(!0, f, d.initConfig_setting, b || {});
            "" != f.formID && a("#" + f.formID).submit(function() {
                return f.preSubmit() ? a.formValidator.bindSubmit(f) : !1
            });
            d.validatorGroup_setting.push(f)
        },
        bindSubmit: function(b) {
            return a.formValidator.pageIsValid(b.validatorGroup)
        },
        sustainType: function(a, f) {
            var d = a.tagName
              , l = a.type;
            switch (f) {
            case "formValidator":
                return !0;
            case "inputValidator":
                return "INPUT" == d || "TEXTAREA" == d || "SELECT" == d;
            case "regexValidator":
                return "INPUT" == d || "TEXTAREA" == d ? "checkbox" != l && "radio" != l : !1;
            case "functionValidator":
                return !0
            }
        },
        appendValid: function(b, f) {
            var d = a("#" + b).get(0)
              , l = f.validateType;
            if (!a.formValidator.sustainType(d, l))
                return -1;
            if ("formValidator" == l || void 0 == d.settings)
                d.settings = [];
            l = d.settings.push(f);
            d.settings[l - 1].index = l - 1;
            return l - 1
        },
        getInitConfig: function(b) {
            var f = null;
            a.each(d.validatorGroup_setting, function(a) {
                if (d.validatorGroup_setting[a].validatorGroup == b)
                    return f = d.validatorGroup_setting[a],
                    !1
            });
            return f
        },
        setTipMsg: function(b, f, h) {
            b = a(b);
            if (null == h || "" == h)
                b.hide();
            else {
                var l = "onShow" == f ? d.TIP_HTML.onShowHtml : "onFocus" == f ? d.TIP_HTML.onFocusHtml : "onCorrect" == f ? d.TIP_HTML.onCorrectHtml : d.TIP_HTML.onErrorHtml;
                (l.length = "" == h) ? b.hide() : (l = l.replace(/\$class\$/g, f).replace(/\$data\$/g, h),
                b.html(l).show())
            }
        },
        setTipState: function(b, f, h) {
            a.formValidator.getInitConfig(b.validatorGroup);
            var l = a("#" + b.settings[0].tipID);
            if (null == h || "" == h)
                l.hide();
            else {
                var q = "onShow" == f ? d.TIP_HTML.onShowHtml : "onFocus" == f ? d.TIP_HTML.onFocusHtml : "onCorrect" == f ? d.TIP_HTML.onCorrectHtml : d.TIP_HTML.onErrorHtml;
                if (q.length = "" == h)
                    l.hide();
                else if ("onFocus" == f) {
                    if (b.settings[0].onFocusCallBack && b.settings[0].onFocusCallBack() || !b.settings[0].onFocusCallBack)
                        q = q.replace(/\$class\$/g, f).replace(/\$data\$/g, h),
                        l.html(q).show()
                } else if ("onShow" == f) {
                    if (b.settings[0].onShowCallBack && b.settings[0].onShowCallBack() || !b.settings[0].onShowCallBack)
                        q = q.replace(/\$class\$/g, f).replace(/\$data\$/g, h),
                        l.html(q).show()
                } else if ("onError" == f) {
                    if (b.settings[0].onErrorCallBack && b.settings[0].onErrorCallBack() || !b.settings[0].onErrorCallBack)
                        q = q.replace(/\$class\$/g, f).replace(/\$data\$/g, h),
                        l.html(q).show()
                } else
                    q = q.replace(/\$class\$/g, f).replace(/\$data\$/g, h),
                    l.html(q).show();
                h = b.type;
                if ("password" == h || "text" == h || "file" == h || "select" == b.tagname)
                    jqobj = a(b),
                    "" != d.TIP_CSS.onShowClass && "onShow" == f && ("" != b.settings[0].onShowText && b.value == b.settings[0].onShowText && d.TIP_CSS.onShowTextClass ? jqobj.removeClass().addClass(d.TIP_CSS.onShowTextClass) : jqobj.removeClass().addClass(d.TIP_CSS.onShowClass)),
                    "" != d.TIP_CSS.onFocusClass && "onFocus" == f && jqobj.removeClass().addClass(d.TIP_CSS.onFocusClass),
                    "" != d.TIP_CSS.onCorrectClass && "onCorrect" == f && jqobj.removeClass().addClass(d.TIP_CSS.onCorrectClass),
                    "" != d.TIP_CSS.onErrorClass && "onError" == f && ("" != b.settings[0].onShowText && b.value == b.settings[0].onShowText && d.TIP_CSS.onErrorShowTextClass ? jqobj.removeClass().addClass(d.TIP_CSS.onErrorShowTextClass) : jqobj.removeClass().addClass(d.TIP_CSS.onErrorClass))
            }
        },
        resetTipState: function(b) {
            void 0 == b && (b = "1");
            b = a.formValidator.getInitConfig(b);
            a.each(b.validObjects, function() {
                var b = this.settings[0]
                  , d = b.defaultPassed;
                a.formValidator.setTipState(this, d ? "onCorrect" : "onShow", d ? a.formValidator.getStatusText(this, b.onCorrect) : b.onShow)
            })
        },
        setFailState: function(b, f) {
            a.formValidator.setTipState(a("#" + b).get(0), "onError", f)
        },
        showMessage: function(b) {
            var f = b.id
              , d = a("#" + f).get(0)
              , l = b.isValid
              , q = b.setting
              , s = ""
              , r = ""
              , t = a.formValidator.getInitConfig(d.validatorGroup);
            l ? (s = a.formValidator.isEmpty(f) ? q.onEmpty : a.formValidator.getStatusText(d, q.onCorrect),
            a.formValidator.setTipState(d, "onCorrect", s)) : (r = "onError",
            s = "" == b.errormsg ? a.formValidator.getStatusText(d, q.onError) : b.errormsg,
            "AlertTip" == t.mode ? d.validValueOld != a(d).val() && alert(s) : a.formValidator.setTipState(d, r, s));
            return s
        },
        getLength: function(b) {
            var f = a("#" + b)
              , d = f.get(0)
              , l = d.type
              , b = 0;
            switch (l) {
            case "text":
            case "hidden":
            case "password":
            case "textarea":
            case "file":
                f = f.val();
                l = d.settings[0];
                d.isInputControl && d.value == l.onShowText && (f = "");
                if (a.formValidator.getInitConfig(d.validatorGroup).wideWord)
                    for (d = 0; d < f.length; d++)
                        b += 19968 <= f.charCodeAt(d) && 40869 >= f.charCodeAt(d) ? 2 : 1;
                else
                    b = f.length;
                break;
            case "checkbox":
            case "radio":
                b = a("input[type='" + l + "'][name='" + f.attr("name") + "']:checked").length;
                break;
            case "select-one":
                b = d.options ? d.options.selectedIndex : -1;
                break;
            case "select-multiple":
                b = a("select[name=" + d.name + "] option:selected").length
            }
            return b
        },
        isEmpty: function(b) {
            return a("#" + b).get(0).settings[0].empty && 0 == a.formValidator.getLength(b)
        },
        isOneValid: function(b) {
            return a.formValidator.oneIsValid(b).isValid
        },
        oneIsValid: function(b) {
            var f = {}
              , d = a("#" + b).get(0)
              , l = a.formValidator.getInitConfig(d.validatorGroup);
            f.initConfig = l;
            f.id = b;
            f.errormsg = "";
            var q = d.settings, s = q.length, r;
            1 == s && (q[0].bind = !1);
            if (!q[0].bind)
                return null;
            a.formValidator.resetInputValue(!0, l, b);
            for (var t = 0; t < s; t++)
                if (0 == t) {
                    if (a.formValidator.isEmpty(b)) {
                        f.isValid = !0;
                        f.setting = q[0];
                        break
                    }
                } else {
                    f.setting = q[t];
                    r = q[t].validateType;
                    switch (r) {
                    case "inputValidator":
                        a.formValidator.inputValid(f);
                        break;
                    case "regexValidator":
                        a.formValidator.regexValid(f);
                        break;
                    case "functionValidator":
                        a.formValidator.functionValid(f)
                    }
                    d.onceValided = !0;
                    if (q[t].isValid)
                        f.isValid = !0,
                        f.setting = q[0];
                    else {
                        f.isValid = !1;
                        f.setting = q[t];
                        break
                    }
                }
            "index" == a("#PageEname").val() && ("" != a.trim(a.cookie("up_b2")) && a("#" + b).get(0).value == a.cookie("up_b2").split("_")[1]) && (f.isValid = !0);
            a.formValidator.resetInputValue(!1, l, b);
            return f
        },
        pageIsValid: function(b) {
            var f = a.formValidator.getInitConfig(b);
            return a.formValidator.areaIsValid(b, f.validObjects, !0)
        },
        areaIsValid: function(b, f, d) {
            var l = a.formValidator.getInitConfig(b);
            f || (f = l.validObjects);
            d || (d = !1);
            void 0 == b && (b = "1");
            var q = !0, s, r = "", t, E = "^", R, F, w = "^", T = [];
            l.status = "sumbiting";
            a.each(f, function() {
                if (a(this).length == 0)
                    return true;
                if (this.settings[0].bind) {
                    F = this.name;
                    if (w.indexOf("^" + F + "^") == -1) {
                        onceValided = this.onceValided == void 0 ? false : this.onceValided;
                        F && (w = w + F + "^");
                        if (s = a.formValidator.oneIsValid(this.id)) {
                            if (!s.isValid) {
                                q = false;
                                t = s.errormsg == "" ? s.setting.onError : s.errormsg;
                                T[T.length] = t;
                                if (R == null)
                                    R = s.id;
                                r == "" && (r = t)
                            }
                            if (l.mode != "AlertTip") {
                                var b = this.settings[0].tipID;
                                if (E.indexOf("^" + b + "^") == -1) {
                                    s.isValid || (E = E + b + "^");
                                    a.formValidator.showMessage(s)
                                }
                            }
                        }
                    }
                }
            });
            if (d)
                if (q)
                    if (l.pageUPEditor && 0 < l.pageUPEditor.length)
                        q = !1,
                        1 == l.pageUPEditor.length ? l.pageUPEditor[0].result(l.pageUPEditor[0].keyName, function() {
                            l.pageUPEditor[0].machineInfo(l.pageUPEditor[0].keyName, function() {
                                l.pageUPEditor[0].callback();
                                if (!l.onSuccess())
                                    return false;
                                l.submitOnce && a(":submit,:button,:reset").attr("disabled", true)
                            })
                        }) : 2 == l.pageUPEditor.length && l.pageUPEditor[0].result(l.pageUPEditor[0].keyName, function() {
                            l.pageUPEditor[0].machineInfo(l.pageUPEditor[0].keyName, function() {
                                l.pageUPEditor[1].result(l.pageUPEditor[1].keyName, function() {
                                    l.pageUPEditor[1].machineInfo(l.pageUPEditor[1].keyName, function() {
                                        l.pageUPEditor[0].callback();
                                        l.pageUPEditor[1].callback();
                                        if (!l.onSuccess())
                                            return false;
                                        l.submitOnce && a(":submit,:button,:reset").attr("disabled", true)
                                    })
                                })
                            })
                        });
                    else {
                        if (!l.onSuccess())
                            return !1;
                        l.submitOnce && a(":submit,:button,:reset").attr("disabled", !0)
                    }
                else
                    l.pageUPEditor && 0 < l.pageUPEditor.length ? 1 == l.pageUPEditor.length ? l.pageUPEditor[0].result(l.pageUPEditor[0].keyName, function() {
                        l.pageUPEditor[0].callback();
                        l.onError(r, a("#" + R).get(0), T);
                        R && l.errorFocus && a("#" + R).focus()
                    }) : 2 == l.pageUPEditor.length && l.pageUPEditor[0].result(l.pageUPEditor[0].keyName, function() {
                        l.pageUPEditor[1].result(l.pageUPEditor[1].keyName, function() {
                            l.pageUPEditor[0].callback();
                            l.pageUPEditor[1].callback();
                            l.onError(r, a("#" + R).get(0), T);
                            R && l.errorFocus && a("#" + R).focus()
                        })
                    }) : (l.onError(r, a("#" + R).get(0), T),
                    R && l.errorFocus && a("#" + R).focus());
            l.status = "init";
            q && l.debug && alert("\u73b0\u5728\u6b63\u5904\u4e8e\u8c03\u8bd5\u6a21\u5f0f(debug:true)\uff0c\u4e0d\u80fd\u63d0\u4ea4");
            return !l.debug && q
        },
        regexValid: function(b) {
            var f = b.id
              , b = b.setting;
            a("#" + f).get(0);
            var d = a("#" + f).get(0), l;
            d.settings[0].empty && "" == d.value ? b.isValid = !0 : (f = [],
            f.push(b.regExp),
            b.isValid = !1,
            a.each(f, function() {
                l = RegExp(this).test(a(d).val())
            }),
            b.isValid || (b.isValid = l))
        },
        functionValid: function(b) {
            var d = b.setting
              , h = a("#" + b.id)
              , h = d.fun(h.val(), h.get(0));
            void 0 != h ? "string" === typeof h ? (d.isValid = !1,
            b.errormsg = h) : d.isValid = h : d.isValid = !0
        },
        inputValid: function(b) {
            var d = b.id
              , h = b.setting
              , l = a("#" + d)
              , q = l.get(0)
              , l = l.val()
              , q = q.type
              , d = a.formValidator.getLength(d)
              , s = h.empty
              , r = !1;
            switch (q) {
            case "text":
            case "hidden":
            case "password":
            case "textarea":
            case "file":
                "size" == h.type && (s = h.empty,
                s.leftEmpty || (r = l.replace(/^[ \s]+/, "").length != l.length),
                !r && !s.rightEmpty && (r = l.replace(/[ \s]+$/, "").length != l.length),
                r && s.emptyError && (b.errormsg = s.emptyError));
            case "checkbox":
            case "select-one":
            case "select-multiple":
            case "radio":
                s = !1;
                if ("select-one" == q || "select-multiple" == q)
                    h.type = "size";
                q = h.type;
                "size" == q ? (r || (s = !0),
                s && (l = d)) : "date" == q || "datetime" == q ? ("date" == q && (s = isDate(l)),
                "datetime" == q && (s = isDate(l)),
                s && (l = new Date(l),
                h.min = new Date(h.min),
                h.max = new Date(h.max))) : (stype = typeof h.min,
                "number" == stype && (l = (new Number(l)).valueOf(),
                isNaN(l) || (s = !0)),
                "string" == stype && (s = !0));
                h.isValid = !1;
                if (s)
                    if (l < h.min || l > h.max) {
                        if (l < h.min && h.onErrorMin && (b.errormsg = h.onErrorMin),
                        l > h.min && h.onErrorMax)
                            b.errormsg = h.onErrorMax
                    } else
                        h.isValid = !0
            }
        },
        getStatusText: function(b, d) {
            return a.isFunction(d) ? d(a(b).val()) : d
        },
        resetInputValue: function(b, d, h) {
            (h ? a("#" + h) : a(d.showTextObjects)).each(function(a, d) {
                if (d.isInputControl) {
                    var f = d.settings[0].onShowText;
                    b && f == d.value && (d.value = "");
                    !b && ("" != f && "" == d.value) && (d.value = f)
                }
            })
        }
    };
    a.fn.removeFormValidator = function(b) {
        var d = UPOP.VALIDATOR
          , b = b || {};
        void 0 == b.validatorGroup && (b.validatorGroup = "1");
        a.extend(!0, {}, d.formValidator_setting);
        b = a.formValidator.getInitConfig(b.validatorGroup);
        b.validCount -= 1;
        b.validObjects;
        for (var h in b.validObjects)
            b.validObjects[h].id == this.attr("id") && b.validObjects.splice(h, 1);
        for (h in b.validObjects)
            b.validObjects[h].validatorIndex = h;
        return this
    }
    ;
    a.fn.formValidator = function(b) {
        var d = UPOP.VALIDATOR
          , b = b || {}
          , h = {};
        void 0 == b.validatorGroup && (b.validatorGroup = "1");
        a.extend(!0, h, d.formValidator_setting);
        var l = a.formValidator.getInitConfig(b.validatorGroup);
        l.validCount += 1;
        "AlertTip" == l.mode && (h.autoModify = !0);
        a.extend(!0, h, b || {});
        return this.each(function() {
            this.validatorIndex = l.validCount - 1;
            this.validatorGroup = b.validatorGroup;
            var q = a(this)
              , s = {};
            a.extend(true, s, h);
            var r = q.attr("id");
            if (!r) {
                r = Math.ceil(Math.random() * 5E7);
                q.attr("id", r)
            }
            var t = s.tipID ? s.tipID : r + "Tip";
            l.mode == "FixTip" && a("#" + t).css("margin", "0px").css("padding", "0px").css("background", "transparent");
            h.tipID = t;
            h.pwdTipID = s.pwdTipID ? s.pwdTipID : h.tipID;
            h.fixTipID = s.fixTipID ? s.fixTipID : r + "FixTip";
            a.formValidator.appendValid(r, h);
            s = a.inArray(q, l.validObjects);
            s == -1 ? l.validObjects.push(this) : l.validObjects[s] = this;
            a.formValidator.setTipState(this, "onShow", h.onShow);
            var s = this.tagName.toLowerCase()
              , E = this.type
              , R = h.defaultValue
              , F = E == "password" || E == "text" || E == "textarea";
            this.isInputControl = F;
            R && q.val(R);
            var w = a("#" + h.fixTipID)
              , T = h.onShowFixText;
            if (w.length == 1 && onMouseOutFixTextHtml != "" && onMouseOnFixTextHtml != "" && T != "") {
                q.hover(function() {
                    w.html(onMouseOnFixTextHtml.replace(/\$data\$/g, T))
                }, function() {
                    w.html(onMouseOutFixTextHtml.replace(/\$data\$/g, T))
                });
                w.css("padding", "0px 0px 0px 0px").css("margin", "0px 0px 0px 0px").html(onMouseOutFixTextHtml.replace(/\$data\$/g, h.onShowFixText))
            }
            var I = h.onShowText;
            if (s == "input" || s == "textarea") {
                if (F && I != "" && q.val() == "") {
                    showObjs = l.showTextObjects;
                    l.showTextObjects = showObjs + (showObjs != "" ? ",#" : "#") + r;
                    q.val(I);
                    q.css("color", h.onShowTextColor.mouseOutColor);
                    d.TIP_CSS.onShowTextClass && q.removeClass().addClass(d.TIP_CSS.onShowTextClass)
                }
                q.focus(function() {
                    if (F) {
                        var b = q.val();
                        this.validValueOld = b;
                        if (I == b) {
                            this.value = "";
                            q.css("color", h.onShowTextColor.mouseOnColor)
                        }
                    }
                    b = a("#" + t);
                    this.lastshowclass = b.attr("class");
                    this.lastshowmsg = b.text();
                    a.formValidator.setTipState(this, "onFocus", h.onFocus)
                });
                q.bind("keyup", function() {});
                q.bind(h.triggerEvent, function() {
                    var b = this.settings;
                    if (b[0].leftTrim)
                        this.value = this.replace(/^\s*/g, "");
                    if (b[0].rightTrim)
                        this.value = this.replace(/\s*$/g, "");
                    if (F) {
                        if (this.value == "" && I != "")
                            this.value = I;
                        this.value == I && q.css("color", h.onShowTextColor.mouseOutColor)
                    }
                    if (b[0].validate != false && l.mode != "AlertTip") {
                        var s = a.formValidator.oneIsValid(r);
                        if (s != null) {
                            var t = a.formValidator.showMessage(s);
                            if (s.isValid)
                                b[0].empty && a("#" + r).get(0).value == "" && a.formValidator.setTipState(this, "onShow", a.formValidator.getStatusText(this, b[0].onShow));
                            else {
                                if (h.autoModify && F) {
                                    a(this).val(this.validValueOld);
                                    a.formValidator.setTipState(this, "onShow", a.formValidator.getStatusText(this, h.onCorrect))
                                } else if (l.forceValid || h.forceValid) {
                                    alert(t);
                                    this.focus()
                                }
                                if (d.initConfig_setting.style == "unionpay") {
                                    t = s.id;
                                    (a("#" + t).get(0).value == "" || a("#" + t).get(0).value == b[0].onShowText || a("#PageEname").val() == "index" && a.trim(a.cookie("up_b2")) != "" && a("#" + t).get(0).value == a.cookie("up_b2").split("_")[1]) && a.formValidator.setTipState(this, "onShow", a.formValidator.getStatusText(this, b[0].onShow))
                                }
                            }
                            b[0].valiCallback && b[0].valiCallback(this, s)
                        }
                    } else
                        l.mode == "AlertTip" && a.formValidator.setTipState(this, "onShow", b[0].onShow)
                })
            } else
                s == "select" && q.bind({
                    focus: function() {
                        a.formValidator.setTipState(this, "onFocus", h.onFocus)
                    },
                    blur: function() {
                        (this.validValueOld == void 0 || this.validValueOld == q.val()) && a(this).trigger("change")
                    },
                    change: function() {
                        var b = a.formValidator.oneIsValid(r);
                        b != null && a.formValidator.showMessage(b)
                    }
                })
        })
    }
    ;
    a.fn.inputValidator = function(b) {
        var f = {};
        a.extend(!0, f, d.inputValidator_setting, b || {});
        return this.each(function() {
            a.formValidator.appendValid(this.id, f)
        })
    }
    ;
    a.fn.regexValidator = function(b) {
        var f = {};
        a.extend(!0, f, d.regexValidator_setting, b || {});
        return this.each(function() {
            a.formValidator.appendValid(this.id, f)
        })
    }
    ;
    a.fn.functionValidator = function(b) {
        var f = {};
        a.extend(!0, f, d.functionValidator_setting, b || {});
        return this.each(function() {
            a.formValidator.appendValid(this.id, f)
        })
    }
    ;
    a.fn.upsmsCodeValidate = function() {
        return this.each(function() {
            a(this).formValidator({
                onShowText: "",
                onShow: "&nbsp;",
                onFocus: "&nbsp;",
                onCorrect: "&nbsp;",
                validatorGroup: "1"
            }).functionValidator({
                fun: function(b, d) {
                    if ("" == b)
                        return d.settings[1].onError = a.getI18Text("smsCode_must_tips"),
                        !1;
                    var h = b.replace(/[ ]/g, "");
                    if (6 > h.length)
                        return d.settings[1].onError = "" != h.replace(/[\d]/g, "") ? a.getI18Text("smsCode_error_tips") : a.getI18Text("smsCode_error_limit"),
                        !1;
                    if (UPOP.VALIDATOR.REGEX.smsCode.test(b.replace(/[ ]/g, "")))
                        return !0;
                    d.settings[1].onError = a.getI18Text("smsCode_error_tips");
                    return !1
                },
                onError: a.getI18Text("smsCode_error_tips")
            })
        })
    }
    ;
    a.fn.upcaptchaValidate = function() {
        return this.each(function() {
            a(this).formValidator({
                onShow: "&nbsp;",
                onFocus: "&nbsp;",
                onError: a.getI18Text("captcha_error_tips"),
                onCorrect: "&nbsp;",
                validatorGroup: "1"
            }).functionValidator({
                fun: function(a) {
                    return "" == a ? !1 : !0
                },
                onError: a.getI18Text("captcha_error_must")
            }).inputValidator({
                min: 1,
                max: 4,
                onError: a.getI18Text("captcha_error_limit")
            }).regexValidator({
                regExp: UPOP.VALIDATOR.REGEX.captcha,
                onError: a.getI18Text("captcha_error_tips")
            })
        })
    }
    ;
    a.fn.upcardTelephoneValidate = function() {
        return this.each(function() {
            a(this).formValidator({
                onShowText: "",
                onShow: a.getI18Text("mobilephone_onFocus_tips"),
                onFocus: a.getI18Text("mobilephone_onFocus_tips"),
                onError: a.getI18Text("mobilephone_error_limit"),
                onCorrect: a.getI18Text("mobilephone_onFocus_tips"),
                validatorGroup: "1"
            }).functionValidator({
                fun: function(b, d) {
                    if ("" == b)
                        return d.settings[1].onError = a.getI18Text("mobilephone_onFocus_tips"),
                        !1;
                    var h = b.replace(/[ ]/g, "");
                    if (11 > h.length)
                        return d.settings[1].onError = "" != h.replace(/[\d]/g, "") ? a.getI18Text("mobilephone_error_tips") : a.getI18Text("mobilephone_error_limit"),
                        !1;
                    if (UPOP.VALIDATOR.REGEX.mobilephone.test(b.replace(/[ ]/g, ""))) {
                        try {
                            if (0 < a("#bankActivatePhoneNumberDisplay").length && "" != a("#bankActivatePhoneNumberDisplay").val()) {
                                var l = b.replace(/[ ]/g, "").substring(0, 3);
                                if (a("#bankActivatePhoneNumberDisplay").val().substring(0, 3) != l)
                                    return d.settings[1].onError = a.getI18Text("mobilephone_error_tips34"),
                                    !1;
                                l = b.replace(/[ ]/g, "").substring(7, 11);
                                if (a("#bankActivatePhoneNumberDisplay").val().substring(7, 11) != l)
                                    return d.settings[1].onError = a.getI18Text("mobilephone_error_tips34"),
                                    !1
                            }
                        } catch (q) {
                            return d.settings[1].onError = a.getI18Text("mobilephone_error_tips"),
                            !1
                        }
                        return !0
                    }
                    d.settings[1].onError = a.getI18Text("mobilephone_error_tips");
                    return !1
                },
                onError: a.getI18Text("mobilephone_error_tips")
            })
        })
    }
}
)(jQuery);
(function(a, d) {
    "object" === typeof exports ? module.exports = exports = d() : "function" === typeof define && define.amd ? define([], d) : a.CryptoJS = d()
}
)(this, function() {
    var a;
    if (!(a = w)) {
        var d = Math
          , b = {}
          , f = b.lib = {}
          , h = function() {}
          , l = f.Base = {
            extend: function(a) {
                h.prototype = this;
                var c = new h;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function() {
                    c.$super.init.apply(this, arguments)
                }
                );
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function() {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function() {},
            mixIn: function(a) {
                for (var c in a)
                    a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        }
          , q = f.WordArray = l.extend({
            init: function(a, c) {
                a = this.words = a || [];
                this.sigBytes = void 0 != c ? c : 4 * a.length
            },
            toString: function(a) {
                return (a || r).stringify(this)
            },
            concat: function(a) {
                var c = this.words
                  , b = a.words
                  , g = this.sigBytes
                  , a = a.sigBytes;
                this.clamp();
                if (g % 4)
                    for (var d = 0; d < a; d++)
                        c[g + d >>> 2] |= (b[d >>> 2] >>> 24 - 8 * (d % 4) & 255) << 24 - 8 * ((g + d) % 4);
                else
                    for (d = 0; d < a; d += 4)
                        c[g + d >>> 2] = b[d >>> 2];
                this.sigBytes += a;
                return this
            },
            clamp: function() {
                var a = this.words
                  , c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                a.length = d.ceil(c / 4)
            },
            clone: function() {
                var a = l.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function(a) {
                for (var c = [], b = function(a) {
                    var c = 987654321;
                    return function() {
                        c = 36969 * (c & 65535) + (c >> 16) & 4294967295;
                        a = 18E3 * (a & 65535) + (a >> 16) & 4294967295;
                        var b = (c << 16) + a & 4294967295;
                        return (b / 4294967296 + 0.5) * (0.5 < d.random() ? 1 : -1)
                    }
                }, g = 0, e; g < a; g += 4) {
                    var f = b(4294967296 * (e || d.random()));
                    e = 987654071 * f();
                    c.push(4294967296 * f() | 0)
                }
                return new q.init(c,a)
            }
        })
          , s = b.enc = {}
          , r = s.Hex = {
            stringify: function(a) {
                for (var c = a.words, a = a.sigBytes, b = [], g = 0; g < a; g++) {
                    var d = c[g >>> 2] >>> 24 - 8 * (g % 4) & 255;
                    b.push((d >>> 4).toString(16));
                    b.push((d & 15).toString(16))
                }
                return b.join("")
            },
            parse: function(a) {
                for (var c = a.length, b = [], g = 0; g < c; g += 2)
                    b[g >>> 3] |= parseInt(a.substr(g, 2), 16) << 24 - 4 * (g % 8);
                return new q.init(b,c / 2)
            }
        }
          , t = s.Latin1 = {
            stringify: function(a) {
                for (var c = a.words, a = a.sigBytes, b = [], g = 0; g < a; g++)
                    b.push(String.fromCharCode(c[g >>> 2] >>> 24 - 8 * (g % 4) & 255));
                return b.join("")
            },
            parse: function(a) {
                for (var c = a.length, b = [], g = 0; g < c; g++)
                    b[g >>> 2] |= (a.charCodeAt(g) & 255) << 24 - 8 * (g % 4);
                return new q.init(b,c)
            }
        }
          , E = s.Utf8 = {
            stringify: function(a) {
                try {
                    return decodeURIComponent(escape(t.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function(a) {
                return t.parse(unescape(encodeURIComponent(a)))
            }
        }
          , R = f.BufferedBlockAlgorithm = l.extend({
            reset: function() {
                this._data = new q.init;
                this._nDataBytes = 0
            },
            _append: function(a) {
                "string" == typeof a && (a = E.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes
            },
            _process: function(a) {
                var c = this._data
                  , b = c.words
                  , g = c.sigBytes
                  , e = this.blockSize
                  , f = g / (4 * e)
                  , f = a ? d.ceil(f) : d.max((f | 0) - this._minBufferSize, 0)
                  , a = f * e
                  , g = d.min(4 * a, g);
                if (a) {
                    for (var p = 0; p < a; p += e)
                        this._doProcessBlock(b, p);
                    p = b.splice(0, a);
                    c.sigBytes -= g
                }
                return new q.init(p,g)
            },
            clone: function() {
                var a = l.clone.call(this);
                a._data = this._data.clone();
                return a
            },
            _minBufferSize: 0
        });
        f.Hasher = R.extend({
            cfg: l.extend(),
            init: function(a) {
                this.cfg = this.cfg.extend(a);
                this.reset()
            },
            reset: function() {
                R.reset.call(this);
                this._doReset()
            },
            update: function(a) {
                this._append(a);
                this._process();
                return this
            },
            finalize: function(a) {
                a && this._append(a);
                return this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(a) {
                return function(c, b) {
                    return (new a.init(b)).finalize(c)
                }
            },
            _createHmacHelper: function(a) {
                return function(c, b) {
                    return (new F.HMAC.init(a,b)).finalize(c)
                }
            }
        });
        var F = b.algo = {};
        a = b
    }
    var w = a
      , T = w
      , I = T.lib.WordArray;
    T.enc.Base64 = {
        stringify: function(a) {
            var c = a.words
              , b = a.sigBytes
              , g = this._map;
            a.clamp();
            for (var a = [], d = 0; d < b; d += 3)
                for (var e = (c[d >>> 2] >>> 24 - 8 * (d % 4) & 255) << 16 | (c[d + 1 >>> 2] >>> 24 - 8 * ((d + 1) % 4) & 255) << 8 | c[d + 2 >>> 2] >>> 24 - 8 * ((d + 2) % 4) & 255, f = 0; 4 > f && d + 0.75 * f < b; f++)
                    a.push(g.charAt(e >>> 6 * (3 - f) & 63));
            if (c = g.charAt(64))
                for (; a.length % 4; )
                    a.push(c);
            return a.join("")
        },
        parse: function(a) {
            var c = a.length
              , b = this._map
              , g = b.charAt(64);
            g && (g = a.indexOf(g),
            -1 != g && (c = g));
            for (var g = [], d = 0, e = 0; e < c; e++)
                if (e % 4) {
                    var f = b.indexOf(a.charAt(e - 1)) << 2 * (e % 4)
                      , p = b.indexOf(a.charAt(e)) >>> 6 - 2 * (e % 4);
                    g[d >>> 2] |= (f | p) << 24 - 8 * (d % 4);
                    d++
                }
            return I.create(g, d)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    };
    for (var K = Math, U = function(a, c, b, g, d, e, f) {
        a = a + (c & b | ~c & g) + d + f;
        return (a << e | a >>> 32 - e) + c
    }, C = function(a, c, b, g, d, e, f) {
        a = a + (c & g | b & ~g) + d + f;
        return (a << e | a >>> 32 - e) + c
    }, V = function(a, c, b, g, d, e, f) {
        a = a + (c ^ b ^ g) + d + f;
        return (a << e | a >>> 32 - e) + c
    }, P = function(a, c, b, g, d, e, f) {
        a = a + (b ^ (c | ~g)) + d + f;
        return (a << e | a >>> 32 - e) + c
    }, oa = w, La = oa.lib, jb = La.WordArray, Ma = La.Hasher, B = oa.algo, x = [], e = 0; 64 > e; e++)
        x[e] = 4294967296 * K.abs(K.sin(e + 1)) | 0;
    var Na = B.MD5 = Ma.extend({
        _doReset: function() {
            this._hash = new jb.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function(a, c) {
            for (var b = 0; 16 > b; b++) {
                var g = c + b
                  , d = a[g];
                a[g] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360
            }
            var b = this._hash.words
              , g = a[c + 0]
              , d = a[c + 1]
              , e = a[c + 2]
              , f = a[c + 3]
              , p = a[c + 4]
              , o = a[c + 5]
              , h = a[c + 6]
              , l = a[c + 7]
              , q = a[c + 8]
              , A = a[c + 9]
              , y = a[c + 10]
              , s = a[c + 11]
              , Z = a[c + 12]
              , L = a[c + 13]
              , t = a[c + 14]
              , w = a[c + 15]
              , r = b[0]
              , D = b[1]
              , z = b[2]
              , u = b[3]
              , r = U(r, D, z, u, g, 7, x[0])
              , u = U(u, r, D, z, d, 12, x[1])
              , z = U(z, u, r, D, e, 17, x[2])
              , D = U(D, z, u, r, f, 22, x[3])
              , r = U(r, D, z, u, p, 7, x[4])
              , u = U(u, r, D, z, o, 12, x[5])
              , z = U(z, u, r, D, h, 17, x[6])
              , D = U(D, z, u, r, l, 22, x[7])
              , r = U(r, D, z, u, q, 7, x[8])
              , u = U(u, r, D, z, A, 12, x[9])
              , z = U(z, u, r, D, y, 17, x[10])
              , D = U(D, z, u, r, s, 22, x[11])
              , r = U(r, D, z, u, Z, 7, x[12])
              , u = U(u, r, D, z, L, 12, x[13])
              , z = U(z, u, r, D, t, 17, x[14])
              , D = U(D, z, u, r, w, 22, x[15])
              , r = C(r, D, z, u, d, 5, x[16])
              , u = C(u, r, D, z, h, 9, x[17])
              , z = C(z, u, r, D, s, 14, x[18])
              , D = C(D, z, u, r, g, 20, x[19])
              , r = C(r, D, z, u, o, 5, x[20])
              , u = C(u, r, D, z, y, 9, x[21])
              , z = C(z, u, r, D, w, 14, x[22])
              , D = C(D, z, u, r, p, 20, x[23])
              , r = C(r, D, z, u, A, 5, x[24])
              , u = C(u, r, D, z, t, 9, x[25])
              , z = C(z, u, r, D, f, 14, x[26])
              , D = C(D, z, u, r, q, 20, x[27])
              , r = C(r, D, z, u, L, 5, x[28])
              , u = C(u, r, D, z, e, 9, x[29])
              , z = C(z, u, r, D, l, 14, x[30])
              , D = C(D, z, u, r, Z, 20, x[31])
              , r = V(r, D, z, u, o, 4, x[32])
              , u = V(u, r, D, z, q, 11, x[33])
              , z = V(z, u, r, D, s, 16, x[34])
              , D = V(D, z, u, r, t, 23, x[35])
              , r = V(r, D, z, u, d, 4, x[36])
              , u = V(u, r, D, z, p, 11, x[37])
              , z = V(z, u, r, D, l, 16, x[38])
              , D = V(D, z, u, r, y, 23, x[39])
              , r = V(r, D, z, u, L, 4, x[40])
              , u = V(u, r, D, z, g, 11, x[41])
              , z = V(z, u, r, D, f, 16, x[42])
              , D = V(D, z, u, r, h, 23, x[43])
              , r = V(r, D, z, u, A, 4, x[44])
              , u = V(u, r, D, z, Z, 11, x[45])
              , z = V(z, u, r, D, w, 16, x[46])
              , D = V(D, z, u, r, e, 23, x[47])
              , r = P(r, D, z, u, g, 6, x[48])
              , u = P(u, r, D, z, l, 10, x[49])
              , z = P(z, u, r, D, t, 15, x[50])
              , D = P(D, z, u, r, o, 21, x[51])
              , r = P(r, D, z, u, Z, 6, x[52])
              , u = P(u, r, D, z, f, 10, x[53])
              , z = P(z, u, r, D, y, 15, x[54])
              , D = P(D, z, u, r, d, 21, x[55])
              , r = P(r, D, z, u, q, 6, x[56])
              , u = P(u, r, D, z, w, 10, x[57])
              , z = P(z, u, r, D, h, 15, x[58])
              , D = P(D, z, u, r, L, 21, x[59])
              , r = P(r, D, z, u, p, 6, x[60])
              , u = P(u, r, D, z, s, 10, x[61])
              , z = P(z, u, r, D, e, 15, x[62])
              , D = P(D, z, u, r, A, 21, x[63]);
            b[0] = b[0] + r | 0;
            b[1] = b[1] + D | 0;
            b[2] = b[2] + z | 0;
            b[3] = b[3] + u | 0
        },
        _doFinalize: function() {
            var a = this._data
              , c = a.words
              , b = 8 * this._nDataBytes
              , g = 8 * a.sigBytes;
            c[g >>> 5] |= 128 << 24 - g % 32;
            var d = K.floor(b / 4294967296);
            c[(g + 64 >>> 9 << 4) + 15] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360;
            c[(g + 64 >>> 9 << 4) + 14] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360;
            a.sigBytes = 4 * (c.length + 1);
            this._process();
            a = this._hash;
            c = a.words;
            for (b = 0; 4 > b; b++)
                g = c[b],
                c[b] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
            return a
        },
        clone: function() {
            var a = Ma.clone.call(this);
            a._hash = this._hash.clone();
            return a
        }
    });
    oa.MD5 = Ma._createHelper(Na);
    oa.HmacMD5 = Ma._createHmacHelper(Na);
    var G = w
      , M = G.lib
      , kb = M.WordArray
      , ba = M.Hasher
      , va = []
      , Oa = G.algo.SHA1 = ba.extend({
        _doReset: function() {
            this._hash = new kb.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
        },
        _doProcessBlock: function(a, c) {
            for (var b = this._hash.words, g = b[0], d = b[1], e = b[2], f = b[3], p = b[4], o = 0; 80 > o; o++) {
                if (16 > o)
                    va[o] = a[c + o] | 0;
                else {
                    var h = va[o - 3] ^ va[o - 8] ^ va[o - 14] ^ va[o - 16];
                    va[o] = h << 1 | h >>> 31
                }
                h = (g << 5 | g >>> 27) + p + va[o];
                h = 20 > o ? h + ((d & e | ~d & f) + 1518500249) : 40 > o ? h + ((d ^ e ^ f) + 1859775393) : 60 > o ? h + ((d & e | d & f | e & f) - 1894007588) : h + ((d ^ e ^ f) - 899497514);
                p = f;
                f = e;
                e = d << 30 | d >>> 2;
                d = g;
                g = h
            }
            b[0] = b[0] + g | 0;
            b[1] = b[1] + d | 0;
            b[2] = b[2] + e | 0;
            b[3] = b[3] + f | 0;
            b[4] = b[4] + p | 0
        },
        _doFinalize: function() {
            var a = this._data
              , c = a.words
              , b = 8 * this._nDataBytes
              , g = 8 * a.sigBytes;
            c[g >>> 5] |= 128 << 24 - g % 32;
            c[(g + 64 >>> 9 << 4) + 14] = Math.floor(b / 4294967296);
            c[(g + 64 >>> 9 << 4) + 15] = b;
            a.sigBytes = 4 * c.length;
            this._process();
            return this._hash
        },
        clone: function() {
            var a = ba.clone.call(this);
            a._hash = this._hash.clone();
            return a
        }
    });
    G.SHA1 = ba._createHelper(Oa);
    G.HmacSHA1 = ba._createHmacHelper(Oa);
    for (var fa = Math, aa = w, lb = aa.lib, zb = lb.WordArray, Pa = lb.Hasher, p = aa.algo, g = [], A = [], y = function(a) {
        return 4294967296 * (a - (a | 0)) | 0
    }, Z = 2, L = 0; 64 > L; ) {
        var z;
        a: {
            for (var D = Z, ka = fa.sqrt(D), Ab = 2; Ab <= ka; Ab++)
                if (!(D % Ab)) {
                    z = !1;
                    break a
                }
            z = !0
        }
        z && (8 > L && (g[L] = y(fa.pow(Z, 0.5))),
        A[L] = y(fa.pow(Z, 1 / 3)),
        L++);
        Z++
    }
    var da = []
      , wa = p.SHA256 = Pa.extend({
        _doReset: function() {
            this._hash = new zb.init(g.slice(0))
        },
        _doProcessBlock: function(a, c) {
            for (var b = this._hash.words, g = b[0], d = b[1], e = b[2], f = b[3], p = b[4], o = b[5], h = b[6], l = b[7], q = 0; 64 > q; q++) {
                if (16 > q)
                    da[q] = a[c + q] | 0;
                else {
                    var y = da[q - 15]
                      , r = da[q - 2];
                    da[q] = ((y << 25 | y >>> 7) ^ (y << 14 | y >>> 18) ^ y >>> 3) + da[q - 7] + ((r << 15 | r >>> 17) ^ (r << 13 | r >>> 19) ^ r >>> 10) + da[q - 16]
                }
                y = l + ((p << 26 | p >>> 6) ^ (p << 21 | p >>> 11) ^ (p << 7 | p >>> 25)) + (p & o ^ ~p & h) + A[q] + da[q];
                r = ((g << 30 | g >>> 2) ^ (g << 19 | g >>> 13) ^ (g << 10 | g >>> 22)) + (g & d ^ g & e ^ d & e);
                l = h;
                h = o;
                o = p;
                p = f + y | 0;
                f = e;
                e = d;
                d = g;
                g = y + r | 0
            }
            b[0] = b[0] + g | 0;
            b[1] = b[1] + d | 0;
            b[2] = b[2] + e | 0;
            b[3] = b[3] + f | 0;
            b[4] = b[4] + p | 0;
            b[5] = b[5] + o | 0;
            b[6] = b[6] + h | 0;
            b[7] = b[7] + l | 0
        },
        _doFinalize: function() {
            var a = this._data
              , c = a.words
              , b = 8 * this._nDataBytes
              , g = 8 * a.sigBytes;
            c[g >>> 5] |= 128 << 24 - g % 32;
            c[(g + 64 >>> 9 << 4) + 14] = fa.floor(b / 4294967296);
            c[(g + 64 >>> 9 << 4) + 15] = b;
            a.sigBytes = 4 * c.length;
            this._process();
            return this._hash
        },
        clone: function() {
            var a = Pa.clone.call(this);
            a._hash = this._hash.clone();
            return a
        }
    });
    aa.SHA256 = Pa._createHelper(wa);
    aa.HmacSHA256 = Pa._createHmacHelper(wa);
    var pa = w
      , mb = pa.lib.WordArray
      , ca = pa.enc;
    ca.Utf16 = ca.Utf16BE = {
        stringify: function(a) {
            for (var c = a.words, a = a.sigBytes, b = [], g = 0; g < a; g += 2)
                b.push(String.fromCharCode(c[g >>> 2] >>> 16 - 8 * (g % 4) & 65535));
            return b.join("")
        },
        parse: function(a) {
            for (var c = a.length, b = [], g = 0; g < c; g++)
                b[g >>> 1] |= a.charCodeAt(g) << 16 - 16 * (g % 2);
            return mb.create(b, 2 * c)
        }
    };
    ca.Utf16LE = {
        stringify: function(a) {
            for (var c = a.words, a = a.sigBytes, b = [], g = 0; g < a; g += 2)
                b.push(String.fromCharCode((c[g >>> 2] >>> 16 - 8 * (g % 4) & 65535) << 8 & 4278255360 | (c[g >>> 2] >>> 16 - 8 * (g % 4) & 65535) >>> 8 & 16711935));
            return b.join("")
        },
        parse: function(a) {
            for (var c = a.length, b = [], g = 0; g < c; g++) {
                var d = b
                  , e = g >>> 1
                  , f = d[e]
                  , p = a.charCodeAt(g) << 16 - 16 * (g % 2);
                d[e] = f | p << 8 & 4278255360 | p >>> 8 & 16711935
            }
            return mb.create(b, 2 * c)
        }
    };
    if ("function" == typeof ArrayBuffer) {
        var u = w.lib.WordArray
          , nb = u.init;
        (u.init = function(a) {
            a instanceof ArrayBuffer && (a = new Uint8Array(a));
            if (a instanceof Int8Array || "undefined" !== typeof Uint8ClampedArray && a instanceof Uint8ClampedArray || a instanceof Int16Array || a instanceof Uint16Array || a instanceof Int32Array || a instanceof Uint32Array || a instanceof Float32Array || a instanceof Float64Array)
                a = new Uint8Array(a.buffer,a.byteOffset,a.byteLength);
            if (a instanceof Uint8Array) {
                for (var c = a.byteLength, b = [], g = 0; g < c; g++)
                    b[g >>> 2] |= a[g] << 24 - 8 * (g % 4);
                nb.call(this, b, c)
            } else
                nb.apply(this, arguments)
        }
        ).prototype = u
    }
    var Ca = w
      , qa = Ca.lib
      , ga = qa.WordArray
      , Bb = qa.Hasher
      , lc = Ca.algo
      , fd = ga.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13])
      , mc = ga.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11])
      , ha = ga.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6])
      , nc = ga.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11])
      , ob = ga.create([0, 1518500249, 1859775393, 2400959708, 2840853838])
      , Sb = ga.create([1352829926, 1548603684, 1836072691, 2053994217, 0])
      , Cb = lc.RIPEMD160 = Bb.extend({
        _doReset: function() {
            this._hash = ga.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
        },
        _doProcessBlock: function(a, c) {
            for (var b = 0; 16 > b; b++) {
                var g = c + b
                  , d = a[g];
                a[g] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360
            }
            var g = this._hash.words, d = ob.words, e = Sb.words, f = fd.words, p = mc.words, o = ha.words, h = nc.words, l, q, A, y, r, s, D, z, u, Z;
            s = l = g[0];
            D = q = g[1];
            z = A = g[2];
            u = y = g[3];
            Z = r = g[4];
            for (var L, b = 0; 80 > b; b += 1)
                L = l + a[c + f[b]] | 0,
                L = 16 > b ? L + ((q ^ A ^ y) + d[0]) : 32 > b ? L + ((q & A | ~q & y) + d[1]) : 48 > b ? L + (((q | ~A) ^ y) + d[2]) : 64 > b ? L + ((q & y | A & ~y) + d[3]) : L + ((q ^ (A | ~y)) + d[4]),
                L |= 0,
                L = L << o[b] | L >>> 32 - o[b],
                L = L + r | 0,
                l = r,
                r = y,
                y = A << 10 | A >>> 22,
                A = q,
                q = L,
                L = s + a[c + p[b]] | 0,
                L = 16 > b ? L + ((D ^ (z | ~u)) + e[0]) : 32 > b ? L + ((D & u | z & ~u) + e[1]) : 48 > b ? L + (((D | ~z) ^ u) + e[2]) : 64 > b ? L + ((D & z | ~D & u) + e[3]) : L + ((D ^ z ^ u) + e[4]),
                L |= 0,
                L = L << h[b] | L >>> 32 - h[b],
                L = L + Z | 0,
                s = Z,
                Z = u,
                u = z << 10 | z >>> 22,
                z = D,
                D = L;
            L = g[1] + A + u | 0;
            g[1] = g[2] + y + Z | 0;
            g[2] = g[3] + r + s | 0;
            g[3] = g[4] + l + D | 0;
            g[4] = g[0] + q + z | 0;
            g[0] = L
        },
        _doFinalize: function() {
            var a = this._data
              , c = a.words
              , b = 8 * this._nDataBytes
              , g = 8 * a.sigBytes;
            c[g >>> 5] |= 128 << 24 - g % 32;
            c[(g + 64 >>> 9 << 4) + 14] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360;
            a.sigBytes = 4 * (c.length + 1);
            this._process();
            a = this._hash;
            c = a.words;
            for (b = 0; 5 > b; b++)
                g = c[b],
                c[b] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
            return a
        },
        clone: function() {
            var a = Bb.clone.call(this);
            a._hash = this._hash.clone();
            return a
        }
    });
    Ca.RIPEMD160 = Bb._createHelper(Cb);
    Ca.HmacRIPEMD160 = Bb._createHmacHelper(Cb);
    var ia = w
      , Wa = ia.enc.Utf8;
    ia.algo.HMAC = ia.lib.Base.extend({
        init: function(a, c) {
            a = this._hasher = new a.init;
            "string" == typeof c && (c = Wa.parse(c));
            var b = a.blockSize
              , g = 4 * b;
            c.sigBytes > g && (c = a.finalize(c));
            c.clamp();
            for (var d = this._oKey = c.clone(), e = this._iKey = c.clone(), f = d.words, p = e.words, o = 0; o < b; o++)
                f[o] ^= 1549556828,
                p[o] ^= 909522486;
            d.sigBytes = e.sigBytes = g;
            this.reset()
        },
        reset: function() {
            var a = this._hasher;
            a.reset();
            a.update(this._iKey)
        },
        update: function(a) {
            this._hasher.update(a);
            return this
        },
        finalize: function(a) {
            var c = this._hasher
              , a = c.finalize(a);
            c.reset();
            return c.finalize(this._oKey.clone().concat(a))
        }
    });
    var Xa = w
      , Db = Xa.lib
      , Tb = Db.Base
      , pb = Db.WordArray
      , O = Xa.algo
      , vd = O.HMAC
      , cd = O.PBKDF2 = Tb.extend({
        cfg: Tb.extend({
            keySize: 4,
            hasher: O.SHA1,
            iterations: 1
        }),
        init: function(a) {
            this.cfg = this.cfg.extend(a)
        },
        compute: function(a, c) {
            for (var b = this.cfg, g = vd.create(b.hasher, a), d = pb.create(), e = pb.create([1]), f = d.words, p = e.words, o = b.keySize, b = b.iterations; f.length < o; ) {
                var h = g.update(c).finalize(e);
                g.reset();
                for (var l = h.words, q = l.length, A = h, y = 1; y < b; y++) {
                    A = g.finalize(A);
                    g.reset();
                    for (var r = A.words, s = 0; s < q; s++)
                        l[s] ^= r[s]
                }
                d.concat(h);
                p[0]++
            }
            d.sigBytes = 4 * o;
            return d
        }
    });
    Xa.PBKDF2 = function(a, c, b) {
        return cd.create(b).compute(a, c)
    }
    ;
    var kc = w
      , oc = kc.lib
      , Eb = oc.Base
      , gd = oc.WordArray
      , Lc = kc.algo
      , hd = Lc.EvpKDF = Eb.extend({
        cfg: Eb.extend({
            keySize: 4,
            hasher: Lc.MD5,
            iterations: 1
        }),
        init: function(a) {
            this.cfg = this.cfg.extend(a)
        },
        compute: function(a, c) {
            for (var b = this.cfg, g = b.hasher.create(), d = gd.create(), e = d.words, f = b.keySize, b = b.iterations; e.length < f; ) {
                p && g.update(p);
                var p = g.update(a).finalize(c);
                g.reset();
                for (var o = 1; o < b; o++)
                    p = g.finalize(p),
                    g.reset();
                d.concat(p)
            }
            d.sigBytes = 4 * f;
            return d
        }
    });
    kc.EvpKDF = function(a, c, b) {
        return hd.create(b).compute(a, c)
    }
    ;
    var Ub = w
      , Mc = Ub.lib.WordArray
      , pc = Ub.algo
      , ra = pc.SHA256
      , qc = pc.SHA224 = ra.extend({
        _doReset: function() {
            this._hash = new Mc.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
        },
        _doFinalize: function() {
            var a = ra._doFinalize.call(this);
            a.sigBytes -= 4;
            return a
        }
    });
    Ub.SHA224 = ra._createHelper(qc);
    Ub.HmacSHA224 = ra._createHmacHelper(qc);
    var rc = w
      , Vb = rc.lib
      , Wb = Vb.Base
      , id = Vb.WordArray
      , Nc = rc.x64 = {};
    Nc.Word = Wb.extend({
        init: function(a, c) {
            this.high = a;
            this.low = c
        }
    });
    Nc.WordArray = Wb.extend({
        init: function(a, c) {
            a = this.words = a || [];
            this.sigBytes = void 0 != c ? c : 8 * a.length
        },
        toX32: function() {
            for (var a = this.words, c = a.length, b = [], g = 0; g < c; g++) {
                var d = a[g];
                b.push(d.high);
                b.push(d.low)
            }
            return id.create(b, this.sigBytes)
        },
        clone: function() {
            for (var a = Wb.clone.call(this), c = a.words = this.words.slice(0), b = c.length, g = 0; g < b; g++)
                c[g] = c[g].clone();
            return a
        }
    });
    for (var jd = Math, qb = w, Oc = qb.lib, kd = Oc.WordArray, rb = Oc.Hasher, Xb = qb.x64.Word, Pc = qb.algo, Yb = [], Ya = [], Zb = [], Da = 1, ma = 0, Fb = 0; 24 > Fb; Fb++) {
        Yb[Da + 5 * ma] = (Fb + 1) * (Fb + 2) / 2 % 64;
        var sb = (2 * Da + 3 * ma) % 5
          , Da = ma % 5
          , ma = sb
    }
    for (Da = 0; 5 > Da; Da++)
        for (ma = 0; 5 > ma; ma++)
            Ya[Da + 5 * ma] = ma + 5 * ((2 * Da + 3 * ma) % 5);
    for (var Gb = 1, tb = 0; 24 > tb; tb++) {
        for (var Q = 0, Ib = 0, S = 0; 7 > S; S++) {
            if (Gb & 1) {
                var $b = (1 << S) - 1;
                32 > $b ? Ib ^= 1 << $b : Q ^= 1 << $b - 32
            }
            Gb = Gb & 128 ? Gb << 1 ^ 113 : Gb << 1
        }
        Zb[tb] = Xb.create(Q, Ib)
    }
    for (var Ea = [], Za = 0; 25 > Za; Za++)
        Ea[Za] = Xb.create();
    var sa = Pc.SHA3 = rb.extend({
        cfg: rb.cfg.extend({
            outputLength: 512
        }),
        _doReset: function() {
            for (var a = this._state = [], c = 0; 25 > c; c++)
                a[c] = new Xb.init;
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
        },
        _doProcessBlock: function(a, c) {
            for (var b = this._state, g = this.blockSize / 2, d = 0; d < g; d++) {
                var e = a[c + 2 * d]
                  , f = a[c + 2 * d + 1]
                  , e = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
                  , f = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360
                  , p = b[d];
                p.high ^= f;
                p.low ^= e
            }
            for (g = 0; 24 > g; g++) {
                for (d = 0; 5 > d; d++) {
                    for (var o = e = 0, h = 0; 5 > h; h++)
                        p = b[d + 5 * h],
                        e ^= p.high,
                        o ^= p.low;
                    p = Ea[d];
                    p.high = e;
                    p.low = o
                }
                for (d = 0; 5 > d; d++) {
                    p = Ea[(d + 4) % 5];
                    e = Ea[(d + 1) % 5];
                    f = e.high;
                    h = e.low;
                    e = p.high ^ (f << 1 | h >>> 31);
                    o = p.low ^ (h << 1 | f >>> 31);
                    for (h = 0; 5 > h; h++)
                        p = b[d + 5 * h],
                        p.high ^= e,
                        p.low ^= o
                }
                for (f = 1; 25 > f; f++)
                    p = b[f],
                    d = p.high,
                    p = p.low,
                    h = Yb[f],
                    32 > h ? (e = d << h | p >>> 32 - h,
                    o = p << h | d >>> 32 - h) : (e = p << h - 32 | d >>> 64 - h,
                    o = d << h - 32 | p >>> 64 - h),
                    p = Ea[Ya[f]],
                    p.high = e,
                    p.low = o;
                p = Ea[0];
                d = b[0];
                p.high = d.high;
                p.low = d.low;
                for (d = 0; 5 > d; d++)
                    for (h = 0; 5 > h; h++)
                        f = d + 5 * h,
                        p = b[f],
                        e = Ea[f],
                        f = Ea[(d + 1) % 5 + 5 * h],
                        o = Ea[(d + 2) % 5 + 5 * h],
                        p.high = e.high ^ ~f.high & o.high,
                        p.low = e.low ^ ~f.low & o.low;
                p = b[0];
                d = Zb[g];
                p.high ^= d.high;
                p.low ^= d.low
            }
        },
        _doFinalize: function() {
            var a = this._data
              , c = a.words
              , b = 8 * a.sigBytes
              , g = 32 * this.blockSize;
            c[b >>> 5] |= 1 << 24 - b % 32;
            c[(jd.ceil((b + 1) / g) * g >>> 5) - 1] |= 128;
            a.sigBytes = 4 * c.length;
            this._process();
            for (var a = this._state, c = this.cfg.outputLength / 8, b = c / 8, g = [], d = 0; d < b; d++) {
                var e = a[d]
                  , f = e.high
                  , e = e.low
                  , f = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360
                  , e = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
                g.push(e);
                g.push(f)
            }
            return new kd.init(g,c)
        },
        clone: function() {
            for (var a = rb.clone.call(this), c = a._state = this._state.slice(0), b = 0; 25 > b; b++)
                c[b] = c[b].clone();
            return a
        }
    });
    qb.SHA3 = rb._createHelper(sa);
    qb.HmacSHA3 = rb._createHmacHelper(sa);
    for (var J = function() {
        return xa.create.apply(xa, arguments)
    }, Ra = w, Sa = Ra.lib.Hasher, Jb = Ra.x64, xa = Jb.Word, ac = Jb.WordArray, $a = Ra.algo, sc = [J(1116352408, 3609767458), J(1899447441, 602891725), J(3049323471, 3964484399), J(3921009573, 2173295548), J(961987163, 4081628472), J(1508970993, 3053834265), J(2453635748, 2937671579), J(2870763221, 3664609560), J(3624381080, 2734883394), J(310598401, 1164996542), J(607225278, 1323610764), J(1426881987, 3590304994), J(1925078388, 4068182383), J(2162078206, 991336113), J(2614888103, 633803317), J(3248222580, 3479774868), J(3835390401, 2666613458), J(4022224774, 944711139), J(264347078, 2341262773), J(604807628, 2007800933), J(770255983, 1495990901), J(1249150122, 1856431235), J(1555081692, 3175218132), J(1996064986, 2198950837), J(2554220882, 3999719339), J(2821834349, 766784016), J(2952996808, 2566594879), J(3210313671, 3203337956), J(3336571891, 1034457026), J(3584528711, 2466948901), J(113926993, 3758326383), J(338241895, 168717936), J(666307205, 1188179964), J(773529912, 1546045734), J(1294757372, 1522805485), J(1396182291, 2643833823), J(1695183700, 2343527390), J(1986661051, 1014477480), J(2177026350, 1206759142), J(2456956037, 344077627), J(2730485921, 1290863460), J(2820302411, 3158454273), J(3259730800, 3505952657), J(3345764771, 106217008), J(3516065817, 3606008344), J(3600352804, 1432725776), J(4094571909, 1467031594), J(275423344, 851169720), J(430227734, 3100823752), J(506948616, 1363258195), J(659060556, 3750685593), J(883997877, 3785050280), J(958139571, 3318307427), J(1322822218, 3812723403), J(1537002063, 2003034995), J(1747873779, 3602036899), J(1955562222, 1575990012), J(2024104815, 1125592928), J(2227730452, 2716904306), J(2361852424, 442776044), J(2428436474, 593698344), J(2756734187, 3733110249), J(3204031479, 2999351573), J(3329325298, 3815920427), J(3391569614, 3928383900), J(3515267271, 566280711), J(3940187606, 3454069534), J(4118630271, 4000239992), J(116418474, 1914138554), J(174292421, 2731055270), J(289380356, 3203993006), J(460393269, 320620315), J(685471733, 587496836), J(852142971, 1086792851), J(1017036298, 365543100), J(1126000580, 2618297676), J(1288033470, 3409855158), J(1501505948, 4234509866), J(1607167915, 987167468), J(1816402316, 1246189591)], Fa = [], Kb = 0; 80 > Kb; Kb++)
        Fa[Kb] = J();
    var Lb = $a.SHA512 = Sa.extend({
        _doReset: function() {
            this._hash = new ac.init([new xa.init(1779033703,4089235720), new xa.init(3144134277,2227873595), new xa.init(1013904242,4271175723), new xa.init(2773480762,1595750129), new xa.init(1359893119,2917565137), new xa.init(2600822924,725511199), new xa.init(528734635,4215389547), new xa.init(1541459225,327033209)])
        },
        _doProcessBlock: function(a, c) {
            for (var b = this._hash.words, g = b[0], d = b[1], e = b[2], f = b[3], p = b[4], o = b[5], h = b[6], b = b[7], l = g.high, q = g.low, A = d.high, y = d.low, r = e.high, s = e.low, D = f.high, z = f.low, u = p.high, L = p.low, Z = o.high, t = o.low, w = h.high, E = h.low, I = b.high, G = b.low, B = l, H = q, J = A, ca = y, ka = r, x = s, F = D, R = z, C = u, K = L, pa = Z, M = t, Q = w, wa = E, Ca = I, T = G, da = 0; 80 > da; da++) {
                var qa = Fa[da];
                if (16 > da)
                    var O = qa.high = a[c + 2 * da] | 0
                      , N = qa.low = a[c + 2 * da + 1] | 0;
                else {
                    var O = Fa[da - 15]
                      , N = O.high
                      , S = O.low
                      , O = (N >>> 1 | S << 31) ^ (N >>> 8 | S << 24) ^ N >>> 7
                      , S = (S >>> 1 | N << 31) ^ (S >>> 8 | N << 24) ^ (S >>> 7 | N << 25)
                      , U = Fa[da - 2]
                      , N = U.high
                      , P = U.low
                      , U = (N >>> 19 | P << 13) ^ (N << 3 | P >>> 29) ^ N >>> 6
                      , P = (P >>> 19 | N << 13) ^ (P << 3 | N >>> 29) ^ (P >>> 6 | N << 26)
                      , N = Fa[da - 7]
                      , mb = N.high
                      , ga = Fa[da - 16]
                      , V = ga.high
                      , ga = ga.low
                      , N = S + N.low
                      , O = O + mb + (N >>> 0 < S >>> 0 ? 1 : 0)
                      , N = N + P
                      , O = O + U + (N >>> 0 < P >>> 0 ? 1 : 0)
                      , N = N + ga
                      , O = O + V + (N >>> 0 < ga >>> 0 ? 1 : 0);
                    qa.high = O;
                    qa.low = N
                }
                var mb = C & pa ^ ~C & Q
                  , ga = K & M ^ ~K & wa
                  , qa = B & J ^ B & ka ^ J & ka
                  , X = H & ca ^ H & x ^ ca & x
                  , S = (B >>> 28 | H << 4) ^ (B << 30 | H >>> 2) ^ (B << 25 | H >>> 7)
                  , U = (H >>> 28 | B << 4) ^ (H << 30 | B >>> 2) ^ (H << 25 | B >>> 7)
                  , P = sc[da]
                  , Ab = P.high
                  , W = P.low
                  , P = T + ((K >>> 14 | C << 18) ^ (K >>> 18 | C << 14) ^ (K << 23 | C >>> 9))
                  , V = Ca + ((C >>> 14 | K << 18) ^ (C >>> 18 | K << 14) ^ (C << 23 | K >>> 9)) + (P >>> 0 < T >>> 0 ? 1 : 0)
                  , P = P + ga
                  , V = V + mb + (P >>> 0 < ga >>> 0 ? 1 : 0)
                  , P = P + W
                  , V = V + Ab + (P >>> 0 < W >>> 0 ? 1 : 0)
                  , P = P + N
                  , V = V + O + (P >>> 0 < N >>> 0 ? 1 : 0)
                  , N = U + X
                  , qa = S + qa + (N >>> 0 < U >>> 0 ? 1 : 0)
                  , Ca = Q
                  , T = wa
                  , Q = pa
                  , wa = M
                  , pa = C
                  , M = K
                  , K = R + P | 0
                  , C = F + V + (K >>> 0 < R >>> 0 ? 1 : 0) | 0
                  , F = ka
                  , R = x
                  , ka = J
                  , x = ca
                  , J = B
                  , ca = H
                  , H = P + N | 0
                  , B = V + qa + (H >>> 0 < P >>> 0 ? 1 : 0) | 0
            }
            q = g.low = q + H;
            g.high = l + B + (q >>> 0 < H >>> 0 ? 1 : 0);
            y = d.low = y + ca;
            d.high = A + J + (y >>> 0 < ca >>> 0 ? 1 : 0);
            s = e.low = s + x;
            e.high = r + ka + (s >>> 0 < x >>> 0 ? 1 : 0);
            z = f.low = z + R;
            f.high = D + F + (z >>> 0 < R >>> 0 ? 1 : 0);
            L = p.low = L + K;
            p.high = u + C + (L >>> 0 < K >>> 0 ? 1 : 0);
            t = o.low = t + M;
            o.high = Z + pa + (t >>> 0 < M >>> 0 ? 1 : 0);
            E = h.low = E + wa;
            h.high = w + Q + (E >>> 0 < wa >>> 0 ? 1 : 0);
            G = b.low = G + T;
            b.high = I + Ca + (G >>> 0 < T >>> 0 ? 1 : 0)
        },
        _doFinalize: function() {
            var a = this._data
              , c = a.words
              , b = 8 * this._nDataBytes
              , g = 8 * a.sigBytes;
            c[g >>> 5] |= 128 << 24 - g % 32;
            c[(g + 128 >>> 10 << 5) + 30] = Math.floor(b / 4294967296);
            c[(g + 128 >>> 10 << 5) + 31] = b;
            a.sigBytes = 4 * c.length;
            this._process();
            return this._hash.toX32()
        },
        clone: function() {
            var a = Sa.clone.call(this);
            a._hash = this._hash.clone();
            return a
        },
        blockSize: 32
    });
    Ra.SHA512 = Sa._createHelper(Lb);
    Ra.HmacSHA512 = Sa._createHmacHelper(Lb);
    var ab = w
      , Qc = ab.x64
      , Ga = Qc.Word
      , wd = Qc.WordArray
      , bb = ab.algo
      , Hb = bb.SHA512
      , Rc = bb.SHA384 = Hb.extend({
        _doReset: function() {
            this._hash = new wd.init([new Ga.init(3418070365,3238371032), new Ga.init(1654270250,914150663), new Ga.init(2438529370,812702999), new Ga.init(355462360,4144912697), new Ga.init(1731405415,4290775857), new Ga.init(2394180231,1750603025), new Ga.init(3675008525,1694076839), new Ga.init(1203062813,3204075428)])
        },
        _doFinalize: function() {
            var a = Hb._doFinalize.call(this);
            a.sigBytes -= 16;
            return a
        }
    });
    ab.SHA384 = Hb._createHelper(Rc);
    ab.HmacSHA384 = Hb._createHmacHelper(Rc);
    if (!w.lib.Cipher) {
        var cb = w
          , ya = cb.lib
          , yb = ya.Base
          , Mb = ya.WordArray
          , tc = ya.BufferedBlockAlgorithm
          , Sc = cb.enc.Base64
          , Jc = cb.algo.EvpKDF
          , bc = ya.Cipher = tc.extend({
            cfg: yb.extend(),
            createEncryptor: function(a, c) {
                return this.create(this._ENC_XFORM_MODE, a, c)
            },
            createDecryptor: function(a, c) {
                return this.create(this._DEC_XFORM_MODE, a, c)
            },
            init: function(a, c, b) {
                this.cfg = this.cfg.extend(b);
                this._xformMode = a;
                this._key = c;
                this.reset()
            },
            reset: function() {
                tc.reset.call(this);
                this._doReset()
            },
            process: function(a) {
                this._append(a);
                return this._process()
            },
            finalize: function(a) {
                a && this._append(a);
                return this._doFinalize()
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function(a) {
                return {
                    encrypt: function(c, b, g) {
                        return ("string" == typeof b ? xc : db).encrypt(a, c, b, g)
                    },
                    decrypt: function(c, b, g) {
                        return ("string" == typeof b ? xc : db).decrypt(a, c, b, g)
                    }
                }
            }
        });
        ya.StreamCipher = bc.extend({
            _doFinalize: function() {
                return this._process(!0)
            },
            blockSize: 1
        });
        var uc = cb.mode = {}
          , vc = function(a, c, b) {
            var g = this._iv;
            g ? this._iv = void 0 : g = this._prevBlock;
            for (var d = 0; d < b; d++)
                a[c + d] ^= g[d]
        }
          , ub = (ya.BlockCipherMode = yb.extend({
            createEncryptor: function(a, c) {
                return this.Encryptor.create(a, c)
            },
            createDecryptor: function(a, c) {
                return this.Decryptor.create(a, c)
            },
            init: function(a, c) {
                this._cipher = a;
                this._iv = c
            }
        })).extend();
        ub.Encryptor = ub.extend({
            processBlock: function(a, c) {
                var b = this._cipher
                  , g = b.blockSize;
                vc.call(this, a, c, g);
                b.encryptBlock(a, c);
                this._prevBlock = a.slice(c, c + g)
            }
        });
        ub.Decryptor = ub.extend({
            processBlock: function(a, c) {
                var b = this._cipher
                  , g = b.blockSize
                  , d = a.slice(c, c + g);
                b.decryptBlock(a, c);
                vc.call(this, a, c, g);
                this._prevBlock = d
            }
        });
        var ld = uc.CBC = ub
          , md = (cb.pad = {}).Pkcs7 = {
            pad: function(a, c) {
                for (var b = 4 * c, b = b - a.sigBytes % b, g = b << 24 | b << 16 | b << 8 | b, d = [], e = 0; e < b; e += 4)
                    d.push(g);
                b = Mb.create(d, b);
                a.concat(b)
            },
            unpad: function(a) {
                a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
            }
        };
        ya.BlockCipher = bc.extend({
            cfg: bc.cfg.extend({
                mode: ld,
                padding: md
            }),
            reset: function() {
                bc.reset.call(this);
                var a = this.cfg
                  , c = a.iv
                  , a = a.mode;
                if (this._xformMode == this._ENC_XFORM_MODE)
                    var b = a.createEncryptor;
                else
                    b = a.createDecryptor,
                    this._minBufferSize = 1;
                this._mode = b.call(a, this, c && c.words)
            },
            _doProcessBlock: function(a, c) {
                this._mode.processBlock(a, c)
            },
            _doFinalize: function() {
                var a = this.cfg.padding;
                if (this._xformMode == this._ENC_XFORM_MODE) {
                    a.pad(this._data, this.blockSize);
                    var c = this._process(!0)
                } else
                    c = this._process(!0),
                    a.unpad(c);
                return c
            },
            blockSize: 4
        });
        var wc = ya.CipherParams = yb.extend({
            init: function(a) {
                this.mixIn(a)
            },
            toString: function(a) {
                return (a || this.formatter).stringify(this)
            }
        })
          , nd = (cb.format = {}).OpenSSL = {
            stringify: function(a) {
                var c = a.ciphertext
                  , a = a.salt;
                return (a ? Mb.create([1398893684, 1701076831]).concat(a).concat(c) : c).toString(Sc)
            },
            parse: function(a) {
                var a = Sc.parse(a)
                  , c = a.words;
                if (1398893684 == c[0] && 1701076831 == c[1]) {
                    var b = Mb.create(c.slice(2, 4));
                    c.splice(0, 4);
                    a.sigBytes -= 16
                }
                return wc.create({
                    ciphertext: a,
                    salt: b
                })
            }
        }
          , db = ya.SerializableCipher = yb.extend({
            cfg: yb.extend({
                format: nd
            }),
            encrypt: function(a, c, b, g) {
                var g = this.cfg.extend(g)
                  , d = a.createEncryptor(b, g)
                  , c = d.finalize(c)
                  , d = d.cfg;
                return wc.create({
                    ciphertext: c,
                    key: b,
                    iv: d.iv,
                    algorithm: a,
                    mode: d.mode,
                    padding: d.padding,
                    blockSize: a.blockSize,
                    formatter: g.format
                })
            },
            decrypt: function(a, c, b, g) {
                g = this.cfg.extend(g);
                c = this._parse(c, g.format);
                return a.createDecryptor(b, g).finalize(c.ciphertext)
            },
            _parse: function(a, c) {
                return "string" == typeof a ? c.parse(a, this) : a
            }
        })
          , Tc = (cb.kdf = {}).OpenSSL = {
            execute: function(a, c, b, g) {
                g || (g = Mb.random(8));
                a = Jc.create({
                    keySize: c + b
                }).compute(a, g);
                b = Mb.create(a.words.slice(c), 4 * b);
                a.sigBytes = 4 * c;
                return wc.create({
                    key: a,
                    iv: b,
                    salt: g
                })
            }
        }
          , xc = ya.PasswordBasedCipher = db.extend({
            cfg: db.cfg.extend({
                kdf: Tc
            }),
            encrypt: function(a, c, b, g) {
                g = this.cfg.extend(g);
                b = g.kdf.execute(b, a.keySize, a.ivSize);
                g.iv = b.iv;
                a = db.encrypt.call(this, a, c, b.key, g);
                a.mixIn(b);
                return a
            },
            decrypt: function(a, c, b, g) {
                g = this.cfg.extend(g);
                c = this._parse(c, g.format);
                b = g.kdf.execute(b, a.keySize, a.ivSize, c.salt);
                g.iv = b.iv;
                return db.decrypt.call(this, a, c, b.key, g)
            }
        })
    }
    var od = w.mode
      , la = function(a, c, b, g) {
        var d = this._iv;
        d ? (d = d.slice(0),
        this._iv = void 0) : d = this._prevBlock;
        g.encryptBlock(d, 0);
        for (g = 0; g < b; g++)
            a[c + g] ^= d[g]
    }
      , eb = w.lib.BlockCipherMode.extend();
    eb.Encryptor = eb.extend({
        processBlock: function(a, c) {
            var b = this._cipher
              , g = b.blockSize;
            la.call(this, a, c, g, b);
            this._prevBlock = a.slice(c, c + g)
        }
    });
    eb.Decryptor = eb.extend({
        processBlock: function(a, c) {
            var b = this._cipher
              , g = b.blockSize
              , d = a.slice(c, c + g);
            la.call(this, a, c, g, b);
            this._prevBlock = d
        }
    });
    od.CFB = eb;
    var yc = w.mode
      , Nb = w.lib.BlockCipherMode.extend();
    Nb.Encryptor = Nb.extend({
        processBlock: function(a, c) {
            this._cipher.encryptBlock(a, c)
        }
    });
    Nb.Decryptor = Nb.extend({
        processBlock: function(a, c) {
            this._cipher.decryptBlock(a, c)
        }
    });
    yc.ECB = Nb;
    w.pad.AnsiX923 = {
        pad: function(a, c) {
            var b = a.sigBytes
              , g = 4 * c
              , g = g - b % g
              , b = b + g - 1;
            a.clamp();
            a.words[b >>> 2] |= g << 24 - 8 * (b % 4);
            a.sigBytes += g
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    w.pad.Iso10126 = {
        pad: function(a, c) {
            var b = 4 * c
              , b = b - a.sigBytes % b;
            a.concat(w.lib.WordArray.random(b - 1)).concat(w.lib.WordArray.create([b << 24], 1))
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    w.pad.Iso97971 = {
        pad: function(a, c) {
            a.concat(w.lib.WordArray.create([2147483648], 1));
            w.pad.ZeroPadding.pad(a, c)
        },
        unpad: function(a) {
            w.pad.ZeroPadding.unpad(a);
            a.sigBytes--
        }
    };
    var pd = w.mode
      , cc = w.lib.BlockCipherMode.extend()
      , jc = cc.Encryptor = cc.extend({
        processBlock: function(a, c) {
            var b = this._cipher
              , g = b.blockSize
              , d = this._iv
              , e = this._keystream;
            d && (e = this._keystream = d.slice(0),
            this._iv = void 0);
            b.encryptBlock(e, 0);
            for (b = 0; b < g; b++)
                a[c + b] ^= e[b]
        }
    });
    cc.Decryptor = jc;
    pd.OFB = cc;
    w.pad.NoPadding = {
        pad: function() {},
        unpad: function() {}
    };
    var zc = w
      , qd = zc.lib.CipherParams
      , Uc = zc.enc.Hex;
    zc.format.Hex = {
        stringify: function(a) {
            return a.ciphertext.toString(Uc)
        },
        parse: function(a) {
            a = Uc.parse(a);
            return qd.create({
                ciphertext: a
            })
        }
    };
    for (var Ba = w, Ta = Ba.lib.BlockCipher, Vc = Ba.algo, ja = [], Wc = [], Ic = [], Ac = [], Xc = [], Yc = [], Bc = [], Cc = [], Dc = [], dc = [], za = [], Ha = 0; 256 > Ha; Ha++)
        za[Ha] = 128 > Ha ? Ha << 1 : Ha << 1 ^ 283;
    for (var na = 0, Ia = 0, Ha = 0; 256 > Ha; Ha++) {
        var ta = Ia ^ Ia << 1 ^ Ia << 2 ^ Ia << 3 ^ Ia << 4
          , ta = ta >>> 8 ^ ta & 255 ^ 99;
        ja[na] = ta;
        Wc[ta] = na;
        var Ob = za[na]
          , Rb = za[Ob]
          , Ec = za[Rb]
          , ea = 257 * za[ta] ^ 16843008 * ta;
        Ic[na] = ea << 24 | ea >>> 8;
        Ac[na] = ea << 16 | ea >>> 16;
        Xc[na] = ea << 8 | ea >>> 24;
        Yc[na] = ea;
        ea = 16843009 * Ec ^ 65537 * Rb ^ 257 * Ob ^ 16843008 * na;
        Bc[ta] = ea << 24 | ea >>> 8;
        Cc[ta] = ea << 16 | ea >>> 16;
        Dc[ta] = ea << 8 | ea >>> 24;
        dc[ta] = ea;
        na ? (na = Ob ^ za[za[za[Ec ^ Ob]]],
        Ia ^= za[za[Ia]]) : na = Ia = 1
    }
    var fb = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
      , Zc = Vc.AES = Ta.extend({
        _doReset: function() {
            for (var a = this._key, c = a.words, b = a.sigBytes / 4, a = 4 * ((this._nRounds = b + 6) + 1), g = this._keySchedule = [], d = 0; d < a; d++)
                if (d < b)
                    g[d] = c[d];
                else {
                    var e = g[d - 1];
                    d % b ? 6 < b && 4 == d % b && (e = ja[e >>> 24] << 24 | ja[e >>> 16 & 255] << 16 | ja[e >>> 8 & 255] << 8 | ja[e & 255]) : (e = e << 8 | e >>> 24,
                    e = ja[e >>> 24] << 24 | ja[e >>> 16 & 255] << 16 | ja[e >>> 8 & 255] << 8 | ja[e & 255],
                    e ^= fb[d / b | 0] << 24);
                    g[d] = g[d - b] ^ e
                }
            c = this._invKeySchedule = [];
            for (b = 0; b < a; b++)
                d = a - b,
                e = b % 4 ? g[d] : g[d - 4],
                c[b] = 4 > b || 4 >= d ? e : Bc[ja[e >>> 24]] ^ Cc[ja[e >>> 16 & 255]] ^ Dc[ja[e >>> 8 & 255]] ^ dc[ja[e & 255]]
        },
        encryptBlock: function(a, c) {
            this._doCryptBlock(a, c, this._keySchedule, Ic, Ac, Xc, Yc, ja)
        },
        decryptBlock: function(a, c) {
            var b = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = b;
            this._doCryptBlock(a, c, this._invKeySchedule, Bc, Cc, Dc, dc, Wc);
            b = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = b
        },
        _doCryptBlock: function(a, c, b, g, d, e, f, p) {
            for (var o = this._nRounds, h = a[c] ^ b[0], l = a[c + 1] ^ b[1], q = a[c + 2] ^ b[2], A = a[c + 3] ^ b[3], y = 4, r = 1; r < o; r++)
                var s = g[h >>> 24] ^ d[l >>> 16 & 255] ^ e[q >>> 8 & 255] ^ f[A & 255] ^ b[y++]
                  , z = g[l >>> 24] ^ d[q >>> 16 & 255] ^ e[A >>> 8 & 255] ^ f[h & 255] ^ b[y++]
                  , D = g[q >>> 24] ^ d[A >>> 16 & 255] ^ e[h >>> 8 & 255] ^ f[l & 255] ^ b[y++]
                  , A = g[A >>> 24] ^ d[h >>> 16 & 255] ^ e[l >>> 8 & 255] ^ f[q & 255] ^ b[y++]
                  , h = s
                  , l = z
                  , q = D;
            s = (p[h >>> 24] << 24 | p[l >>> 16 & 255] << 16 | p[q >>> 8 & 255] << 8 | p[A & 255]) ^ b[y++];
            z = (p[l >>> 24] << 24 | p[q >>> 16 & 255] << 16 | p[A >>> 8 & 255] << 8 | p[h & 255]) ^ b[y++];
            D = (p[q >>> 24] << 24 | p[A >>> 16 & 255] << 16 | p[h >>> 8 & 255] << 8 | p[l & 255]) ^ b[y++];
            A = (p[A >>> 24] << 24 | p[h >>> 16 & 255] << 16 | p[l >>> 8 & 255] << 8 | p[q & 255]) ^ b[y++];
            a[c] = s;
            a[c + 1] = z;
            a[c + 2] = D;
            a[c + 3] = A
        },
        keySize: 8
    });
    Ba.AES = Ta._createHelper(Zc);
    var Pb = function(a, c) {
        var b = (this._lBlock >>> a ^ this._rBlock) & c;
        this._rBlock ^= b;
        this._lBlock ^= b << a
    }
      , fc = function(a, c) {
        var b = (this._rBlock >>> a ^ this._lBlock) & c;
        this._lBlock ^= b;
        this._rBlock ^= b << a
    }
      , gb = w
      , gc = gb.lib
      , Fc = gc.WordArray
      , Ja = gc.BlockCipher
      , hc = gb.algo
      , ic = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4]
      , ua = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]
      , ib = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28]
      , rd = [{
        "0": 8421888,
        268435456: 32768,
        536870912: 8421378,
        805306368: 2,
        1073741824: 512,
        1342177280: 8421890,
        1610612736: 8389122,
        1879048192: 8388608,
        2147483648: 514,
        2415919104: 8389120,
        2684354560: 33280,
        2952790016: 8421376,
        3221225472: 32770,
        3489660928: 8388610,
        3758096384: 0,
        4026531840: 33282,
        134217728: 0,
        402653184: 8421890,
        671088640: 33282,
        939524096: 32768,
        1207959552: 8421888,
        1476395008: 512,
        1744830464: 8421378,
        2013265920: 2,
        2281701376: 8389120,
        2550136832: 33280,
        2818572288: 8421376,
        3087007744: 8389122,
        3355443200: 8388610,
        3623878656: 32770,
        3892314112: 514,
        4160749568: 8388608,
        1: 32768,
        268435457: 2,
        536870913: 8421888,
        805306369: 8388608,
        1073741825: 8421378,
        1342177281: 33280,
        1610612737: 512,
        1879048193: 8389122,
        2147483649: 8421890,
        2415919105: 8421376,
        2684354561: 8388610,
        2952790017: 33282,
        3221225473: 514,
        3489660929: 8389120,
        3758096385: 32770,
        4026531841: 0,
        134217729: 8421890,
        402653185: 8421376,
        671088641: 8388608,
        939524097: 512,
        1207959553: 32768,
        1476395009: 8388610,
        1744830465: 2,
        2013265921: 33282,
        2281701377: 32770,
        2550136833: 8389122,
        2818572289: 514,
        3087007745: 8421888,
        3355443201: 8389120,
        3623878657: 0,
        3892314113: 33280,
        4160749569: 8421378
    }, {
        "0": 1074282512,
        16777216: 16384,
        33554432: 524288,
        50331648: 1074266128,
        67108864: 1073741840,
        83886080: 1074282496,
        100663296: 1073758208,
        117440512: 16,
        134217728: 540672,
        150994944: 1073758224,
        167772160: 1073741824,
        184549376: 540688,
        201326592: 524304,
        218103808: 0,
        234881024: 16400,
        251658240: 1074266112,
        8388608: 1073758208,
        25165824: 540688,
        41943040: 16,
        58720256: 1073758224,
        75497472: 1074282512,
        92274688: 1073741824,
        109051904: 524288,
        125829120: 1074266128,
        142606336: 524304,
        159383552: 0,
        176160768: 16384,
        192937984: 1074266112,
        209715200: 1073741840,
        226492416: 540672,
        243269632: 1074282496,
        260046848: 16400,
        268435456: 0,
        285212672: 1074266128,
        301989888: 1073758224,
        318767104: 1074282496,
        335544320: 1074266112,
        352321536: 16,
        369098752: 540688,
        385875968: 16384,
        402653184: 16400,
        419430400: 524288,
        436207616: 524304,
        452984832: 1073741840,
        469762048: 540672,
        486539264: 1073758208,
        503316480: 1073741824,
        520093696: 1074282512,
        276824064: 540688,
        293601280: 524288,
        310378496: 1074266112,
        327155712: 16384,
        343932928: 1073758208,
        360710144: 1074282512,
        377487360: 16,
        394264576: 1073741824,
        411041792: 1074282496,
        427819008: 1073741840,
        444596224: 1073758224,
        461373440: 524304,
        478150656: 0,
        494927872: 16400,
        511705088: 1074266128,
        528482304: 540672
    }, {
        "0": 260,
        1048576: 0,
        2097152: 67109120,
        3145728: 65796,
        4194304: 65540,
        5242880: 67108868,
        6291456: 67174660,
        7340032: 67174400,
        8388608: 67108864,
        9437184: 67174656,
        10485760: 65792,
        11534336: 67174404,
        12582912: 67109124,
        13631488: 65536,
        14680064: 4,
        15728640: 256,
        524288: 67174656,
        1572864: 67174404,
        2621440: 0,
        3670016: 67109120,
        4718592: 67108868,
        5767168: 65536,
        6815744: 65540,
        7864320: 260,
        8912896: 4,
        9961472: 256,
        11010048: 67174400,
        12058624: 65796,
        13107200: 65792,
        14155776: 67109124,
        15204352: 67174660,
        16252928: 67108864,
        16777216: 67174656,
        17825792: 65540,
        18874368: 65536,
        19922944: 67109120,
        20971520: 256,
        22020096: 67174660,
        23068672: 67108868,
        24117248: 0,
        25165824: 67109124,
        26214400: 67108864,
        27262976: 4,
        28311552: 65792,
        29360128: 67174400,
        30408704: 260,
        31457280: 65796,
        32505856: 67174404,
        17301504: 67108864,
        18350080: 260,
        19398656: 67174656,
        20447232: 0,
        21495808: 65540,
        22544384: 67109120,
        23592960: 256,
        24641536: 67174404,
        25690112: 65536,
        26738688: 67174660,
        27787264: 65796,
        28835840: 67108868,
        29884416: 67109124,
        30932992: 67174400,
        31981568: 4,
        33030144: 65792
    }, {
        "0": 2151682048,
        65536: 2147487808,
        131072: 4198464,
        196608: 2151677952,
        262144: 0,
        327680: 4198400,
        393216: 2147483712,
        458752: 4194368,
        524288: 2147483648,
        589824: 4194304,
        655360: 64,
        720896: 2147487744,
        786432: 2151678016,
        851968: 4160,
        917504: 4096,
        983040: 2151682112,
        32768: 2147487808,
        98304: 64,
        163840: 2151678016,
        229376: 2147487744,
        294912: 4198400,
        360448: 2151682112,
        425984: 0,
        491520: 2151677952,
        557056: 4096,
        622592: 2151682048,
        688128: 4194304,
        753664: 4160,
        819200: 2147483648,
        884736: 4194368,
        950272: 4198464,
        1015808: 2147483712,
        1048576: 4194368,
        1114112: 4198400,
        1179648: 2147483712,
        1245184: 0,
        1310720: 4160,
        1376256: 2151678016,
        1441792: 2151682048,
        1507328: 2147487808,
        1572864: 2151682112,
        1638400: 2147483648,
        1703936: 2151677952,
        1769472: 4198464,
        1835008: 2147487744,
        1900544: 4194304,
        1966080: 64,
        2031616: 4096,
        1081344: 2151677952,
        1146880: 2151682112,
        1212416: 0,
        1277952: 4198400,
        1343488: 4194368,
        1409024: 2147483648,
        1474560: 2147487808,
        1540096: 64,
        1605632: 2147483712,
        1671168: 4096,
        1736704: 2147487744,
        1802240: 2151678016,
        1867776: 4160,
        1933312: 2151682048,
        1998848: 4194304,
        2064384: 4198464
    }, {
        "0": 128,
        4096: 17039360,
        8192: 262144,
        12288: 536870912,
        16384: 537133184,
        20480: 16777344,
        24576: 553648256,
        28672: 262272,
        32768: 16777216,
        36864: 537133056,
        40960: 536871040,
        45056: 553910400,
        49152: 553910272,
        53248: 0,
        57344: 17039488,
        61440: 553648128,
        2048: 17039488,
        6144: 553648256,
        10240: 128,
        14336: 17039360,
        18432: 262144,
        22528: 537133184,
        26624: 553910272,
        30720: 536870912,
        34816: 537133056,
        38912: 0,
        43008: 553910400,
        47104: 16777344,
        51200: 536871040,
        55296: 553648128,
        59392: 16777216,
        63488: 262272,
        65536: 262144,
        69632: 128,
        73728: 536870912,
        77824: 553648256,
        81920: 16777344,
        86016: 553910272,
        90112: 537133184,
        94208: 16777216,
        98304: 553910400,
        102400: 553648128,
        106496: 17039360,
        110592: 537133056,
        114688: 262272,
        118784: 536871040,
        122880: 0,
        126976: 17039488,
        67584: 553648256,
        71680: 16777216,
        75776: 17039360,
        79872: 537133184,
        83968: 536870912,
        88064: 17039488,
        92160: 128,
        96256: 553910272,
        100352: 262272,
        104448: 553910400,
        108544: 0,
        112640: 553648128,
        116736: 16777344,
        120832: 262144,
        124928: 537133056,
        129024: 536871040
    }, {
        "0": 268435464,
        256: 8192,
        512: 270532608,
        768: 270540808,
        1024: 268443648,
        1280: 2097152,
        1536: 2097160,
        1792: 268435456,
        2048: 0,
        2304: 268443656,
        2560: 2105344,
        2816: 8,
        3072: 270532616,
        3328: 2105352,
        3584: 8200,
        3840: 270540800,
        128: 270532608,
        384: 270540808,
        640: 8,
        896: 2097152,
        1152: 2105352,
        1408: 268435464,
        1664: 268443648,
        1920: 8200,
        2176: 2097160,
        2432: 8192,
        2688: 268443656,
        2944: 270532616,
        3200: 0,
        3456: 270540800,
        3712: 2105344,
        3968: 268435456,
        4096: 268443648,
        4352: 270532616,
        4608: 270540808,
        4864: 8200,
        5120: 2097152,
        5376: 268435456,
        5632: 268435464,
        5888: 2105344,
        6144: 2105352,
        6400: 0,
        6656: 8,
        6912: 270532608,
        7168: 8192,
        7424: 268443656,
        7680: 270540800,
        7936: 2097160,
        4224: 8,
        4480: 2105344,
        4736: 2097152,
        4992: 268435464,
        5248: 268443648,
        5504: 8200,
        5760: 270540808,
        6016: 270532608,
        6272: 270540800,
        6528: 270532616,
        6784: 8192,
        7040: 2105352,
        7296: 2097160,
        7552: 0,
        7808: 268435456,
        8064: 268443656
    }, {
        "0": 1048576,
        16: 33555457,
        32: 1024,
        48: 1049601,
        64: 34604033,
        80: 0,
        96: 1,
        112: 34603009,
        128: 33555456,
        144: 1048577,
        160: 33554433,
        176: 34604032,
        192: 34603008,
        208: 1025,
        224: 1049600,
        240: 33554432,
        8: 34603009,
        24: 0,
        40: 33555457,
        56: 34604032,
        72: 1048576,
        88: 33554433,
        104: 33554432,
        120: 1025,
        136: 1049601,
        152: 33555456,
        168: 34603008,
        184: 1048577,
        200: 1024,
        216: 34604033,
        232: 1,
        248: 1049600,
        256: 33554432,
        272: 1048576,
        288: 33555457,
        304: 34603009,
        320: 1048577,
        336: 33555456,
        352: 34604032,
        368: 1049601,
        384: 1025,
        400: 34604033,
        416: 1049600,
        432: 1,
        448: 0,
        464: 34603008,
        480: 33554433,
        496: 1024,
        264: 1049600,
        280: 33555457,
        296: 34603009,
        312: 1,
        328: 33554432,
        344: 1048576,
        360: 1025,
        376: 34604032,
        392: 33554433,
        408: 34603008,
        424: 0,
        440: 34604033,
        456: 1049601,
        472: 1024,
        488: 33555456,
        504: 1048577
    }, {
        "0": 134219808,
        1: 131072,
        2: 134217728,
        3: 32,
        4: 131104,
        5: 134350880,
        6: 134350848,
        7: 2048,
        8: 134348800,
        9: 134219776,
        10: 133120,
        11: 134348832,
        12: 2080,
        13: 0,
        14: 134217760,
        15: 133152,
        2147483648: 2048,
        2147483649: 134350880,
        2147483650: 134219808,
        2147483651: 134217728,
        2147483652: 134348800,
        2147483653: 133120,
        2147483654: 133152,
        2147483655: 32,
        2147483656: 134217760,
        2147483657: 2080,
        2147483658: 131104,
        2147483659: 134350848,
        2147483660: 0,
        2147483661: 134348832,
        2147483662: 134219776,
        2147483663: 131072,
        16: 133152,
        17: 134350848,
        18: 32,
        19: 2048,
        20: 134219776,
        21: 134217760,
        22: 134348832,
        23: 131072,
        24: 0,
        25: 131104,
        26: 134348800,
        27: 134219808,
        28: 134350880,
        29: 133120,
        30: 2080,
        31: 134217728,
        2147483664: 131072,
        2147483665: 2048,
        2147483666: 134348832,
        2147483667: 133152,
        2147483668: 32,
        2147483669: 134348800,
        2147483670: 134217728,
        2147483671: 134219808,
        2147483672: 134350880,
        2147483673: 134217760,
        2147483674: 134219776,
        2147483675: 0,
        2147483676: 133120,
        2147483677: 2080,
        2147483678: 131104,
        2147483679: 134350848
    }]
      , sd = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679]
      , hb = hc.DES = Ja.extend({
        _doReset: function() {
            for (var a = this._key.words, c = [], b = 0; 56 > b; b++) {
                var g = ic[b] - 1;
                c[b] = a[g >>> 5] >>> 31 - g % 32 & 1
            }
            a = this._subKeys = [];
            for (g = 0; 16 > g; g++) {
                for (var d = a[g] = [], e = ib[g], b = 0; 24 > b; b++)
                    d[b / 6 | 0] |= c[(ua[b] - 1 + e) % 28] << 31 - b % 6,
                    d[4 + (b / 6 | 0)] |= c[28 + (ua[b + 24] - 1 + e) % 28] << 31 - b % 6;
                d[0] = d[0] << 1 | d[0] >>> 31;
                for (b = 1; 7 > b; b++)
                    d[b] >>>= 4 * (b - 1) + 3;
                d[7] = d[7] << 5 | d[7] >>> 27
            }
            c = this._invSubKeys = [];
            for (b = 0; 16 > b; b++)
                c[b] = a[15 - b]
        },
        encryptBlock: function(a, c) {
            this._doCryptBlock(a, c, this._subKeys)
        },
        decryptBlock: function(a, c) {
            this._doCryptBlock(a, c, this._invSubKeys)
        },
        _doCryptBlock: function(a, c, b) {
            this._lBlock = a[c];
            this._rBlock = a[c + 1];
            Pb.call(this, 4, 252645135);
            Pb.call(this, 16, 65535);
            fc.call(this, 2, 858993459);
            fc.call(this, 8, 16711935);
            Pb.call(this, 1, 1431655765);
            for (var g = 0; 16 > g; g++) {
                for (var d = b[g], e = this._lBlock, f = this._rBlock, p = 0, h = 0; 8 > h; h++)
                    p |= rd[h][((f ^ d[h]) & sd[h]) >>> 0];
                this._lBlock = f;
                this._rBlock = e ^ p
            }
            b = this._lBlock;
            this._lBlock = this._rBlock;
            this._rBlock = b;
            Pb.call(this, 1, 1431655765);
            fc.call(this, 8, 16711935);
            fc.call(this, 2, 858993459);
            Pb.call(this, 16, 65535);
            Pb.call(this, 4, 252645135);
            a[c] = this._lBlock;
            a[c + 1] = this._rBlock
        },
        keySize: 2,
        ivSize: 2,
        blockSize: 2
    });
    gb.DES = Ja._createHelper(hb);
    var Qb = hc.TripleDES = Ja.extend({
        _doReset: function() {
            var a = this._key.words;
            this._des1 = hb.createEncryptor(Fc.create(a.slice(0, 2)));
            this._des2 = hb.createEncryptor(Fc.create(a.slice(2, 4)));
            this._des3 = hb.createEncryptor(Fc.create(a.slice(4, 6)))
        },
        encryptBlock: function(a, c) {
            this._des1.encryptBlock(a, c);
            this._des2.decryptBlock(a, c);
            this._des3.encryptBlock(a, c)
        },
        decryptBlock: function(a, c) {
            this._des3.decryptBlock(a, c);
            this._des2.encryptBlock(a, c);
            this._des1.decryptBlock(a, c)
        },
        keySize: 6,
        ivSize: 2,
        blockSize: 2
    });
    gb.TripleDES = Ja._createHelper(Qb);
    var xb = function() {
        for (var a = this._S, c = this._i, b = this._j, g = 0, d = 0; 4 > d; d++) {
            var c = (c + 1) % 256
              , b = (b + a[c]) % 256
              , e = a[c];
            a[c] = a[b];
            a[b] = e;
            g |= a[(a[c] + a[b]) % 256] << 24 - 8 * d
        }
        this._i = c;
        this._j = b;
        return g
    }
      , wb = w
      , Gc = wb.lib.StreamCipher
      , Hc = wb.algo
      , c = Hc.RC4 = Gc.extend({
        _doReset: function() {
            for (var a = this._key, c = a.words, a = a.sigBytes, b = this._S = [], g = 0; 256 > g; g++)
                b[g] = g;
            for (var d = g = 0; 256 > g; g++) {
                var e = g % a
                  , d = (d + b[g] + (c[e >>> 2] >>> 24 - 8 * (e % 4) & 255)) % 256
                  , e = b[g];
                b[g] = b[d];
                b[d] = e
            }
            this._i = this._j = 0
        },
        _doProcessBlock: function(a, c) {
            a[c] ^= xb.call(this)
        },
        keySize: 8,
        ivSize: 0
    });
    wb.RC4 = Gc._createHelper(c);
    var o = Hc.RC4Drop = c.extend({
        cfg: c.cfg.extend({
            drop: 192
        }),
        _doReset: function() {
            c._doReset.call(this);
            for (var a = this.cfg.drop; 0 < a; a--)
                xb.call(this)
        }
    });
    wb.RC4Drop = Gc._createHelper(o);
    var H = w.mode
      , N = function(a) {
        if (255 === (a >> 24 & 255)) {
            var c = a >> 16 & 255
              , b = a >> 8 & 255
              , a = a & 255;
            255 === c ? (c = 0,
            255 === b ? (b = 0,
            255 === a ? a = 0 : ++a) : ++b) : ++c;
            a = 0 + (c << 16) + (b << 8) + a
        } else
            a += 16777216;
        return a
    }
      , X = w.lib.BlockCipherMode.extend()
      , xd = X.Encryptor = X.extend({
        processBlock: function(a, c) {
            var b = this._cipher
              , g = b.blockSize
              , d = this._iv
              , e = this._counter;
            d && (e = this._counter = d.slice(0),
            this._iv = void 0);
            d = e;
            if (0 === (d[0] = N(d[0])))
                d[1] = N(d[1]);
            e = e.slice(0);
            b.encryptBlock(e, 0);
            for (b = 0; b < g; b++)
                a[c + b] ^= e[b]
        }
    });
    X.Decryptor = xd;
    H.CTRGladman = X;
    var ad = function() {
        for (var a = this._X, c = this._C, b = 0; 8 > b; b++)
            Ua[b] = c[b];
        c[0] = c[0] + 1295307597 + this._b | 0;
        c[1] = c[1] + 3545052371 + (c[0] >>> 0 < Ua[0] >>> 0 ? 1 : 0) | 0;
        c[2] = c[2] + 886263092 + (c[1] >>> 0 < Ua[1] >>> 0 ? 1 : 0) | 0;
        c[3] = c[3] + 1295307597 + (c[2] >>> 0 < Ua[2] >>> 0 ? 1 : 0) | 0;
        c[4] = c[4] + 3545052371 + (c[3] >>> 0 < Ua[3] >>> 0 ? 1 : 0) | 0;
        c[5] = c[5] + 886263092 + (c[4] >>> 0 < Ua[4] >>> 0 ? 1 : 0) | 0;
        c[6] = c[6] + 1295307597 + (c[5] >>> 0 < Ua[5] >>> 0 ? 1 : 0) | 0;
        c[7] = c[7] + 3545052371 + (c[6] >>> 0 < Ua[6] >>> 0 ? 1 : 0) | 0;
        this._b = c[7] >>> 0 < Ua[7] >>> 0 ? 1 : 0;
        for (b = 0; 8 > b; b++) {
            var g = a[b] + c[b]
              , d = g & 65535
              , e = g >>> 16;
            W[b] = ((d * d >>> 17) + d * e >>> 15) + e * e ^ ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0)
        }
        a[0] = W[0] + (W[7] << 16 | W[7] >>> 16) + (W[6] << 16 | W[6] >>> 16) | 0;
        a[1] = W[1] + (W[0] << 8 | W[0] >>> 24) + W[7] | 0;
        a[2] = W[2] + (W[1] << 16 | W[1] >>> 16) + (W[0] << 16 | W[0] >>> 16) | 0;
        a[3] = W[3] + (W[2] << 8 | W[2] >>> 24) + W[1] | 0;
        a[4] = W[4] + (W[3] << 16 | W[3] >>> 16) + (W[2] << 16 | W[2] >>> 16) | 0;
        a[5] = W[5] + (W[4] << 8 | W[4] >>> 24) + W[3] | 0;
        a[6] = W[6] + (W[5] << 16 | W[5] >>> 16) + (W[4] << 16 | W[4] >>> 16) | 0;
        a[7] = W[7] + (W[6] << 8 | W[6] >>> 24) + W[5] | 0
    }
      , bd = w
      , td = bd.lib.StreamCipher
      , Ka = []
      , Ua = []
      , W = []
      , yd = bd.algo.Rabbit = td.extend({
        _doReset: function() {
            for (var a = this._key.words, c = this.cfg.iv, b = 0; 4 > b; b++)
                a[b] = (a[b] << 8 | a[b] >>> 24) & 16711935 | (a[b] << 24 | a[b] >>> 8) & 4278255360;
            for (var g = this._X = [a[0], a[3] << 16 | a[2] >>> 16, a[1], a[0] << 16 | a[3] >>> 16, a[2], a[1] << 16 | a[0] >>> 16, a[3], a[2] << 16 | a[1] >>> 16], a = this._C = [a[2] << 16 | a[2] >>> 16, a[0] & 4294901760 | a[1] & 65535, a[3] << 16 | a[3] >>> 16, a[1] & 4294901760 | a[2] & 65535, a[0] << 16 | a[0] >>> 16, a[2] & 4294901760 | a[3] & 65535, a[1] << 16 | a[1] >>> 16, a[3] & 4294901760 | a[0] & 65535], b = this._b = 0; 4 > b; b++)
                ad.call(this);
            for (b = 0; 8 > b; b++)
                a[b] ^= g[b + 4 & 7];
            if (c) {
                var b = c.words
                  , c = b[0]
                  , b = b[1]
                  , c = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360
                  , b = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360
                  , g = c >>> 16 | b & 4294901760
                  , d = b << 16 | c & 65535;
                a[0] ^= c;
                a[1] ^= g;
                a[2] ^= b;
                a[3] ^= d;
                a[4] ^= c;
                a[5] ^= g;
                a[6] ^= b;
                a[7] ^= d;
                for (b = 0; 4 > b; b++)
                    ad.call(this)
            }
        },
        _doProcessBlock: function(a, c) {
            var b = this._X;
            ad.call(this);
            Ka[0] = b[0] ^ b[5] >>> 16 ^ b[3] << 16;
            Ka[1] = b[2] ^ b[7] >>> 16 ^ b[5] << 16;
            Ka[2] = b[4] ^ b[1] >>> 16 ^ b[7] << 16;
            Ka[3] = b[6] ^ b[3] >>> 16 ^ b[1] << 16;
            for (b = 0; 4 > b; b++)
                Ka[b] = (Ka[b] << 8 | Ka[b] >>> 24) & 16711935 | (Ka[b] << 24 | Ka[b] >>> 8) & 4278255360,
                a[c + b] ^= Ka[b]
        },
        blockSize: 4,
        ivSize: 2
    });
    bd.Rabbit = td._createHelper(yd);
    var zd = w.mode
      , Kc = w.lib.BlockCipherMode.extend()
      , Ad = Kc.Encryptor = Kc.extend({
        processBlock: function(a, c) {
            var b = this._cipher
              , g = b.blockSize
              , d = this._iv
              , e = this._counter;
            d && (e = this._counter = d.slice(0),
            this._iv = void 0);
            d = e.slice(0);
            b.encryptBlock(d, 0);
            e[g - 1] = e[g - 1] + 1 | 0;
            for (b = 0; b < g; b++)
                a[c + b] ^= d[b]
        }
    });
    Kc.Decryptor = Ad;
    zd.CTR = Kc;
    var dd = function() {
        for (var a = this._X, c = this._C, b = 0; 8 > b; b++)
            Va[b] = c[b];
        c[0] = c[0] + 1295307597 + this._b | 0;
        c[1] = c[1] + 3545052371 + (c[0] >>> 0 < Va[0] >>> 0 ? 1 : 0) | 0;
        c[2] = c[2] + 886263092 + (c[1] >>> 0 < Va[1] >>> 0 ? 1 : 0) | 0;
        c[3] = c[3] + 1295307597 + (c[2] >>> 0 < Va[2] >>> 0 ? 1 : 0) | 0;
        c[4] = c[4] + 3545052371 + (c[3] >>> 0 < Va[3] >>> 0 ? 1 : 0) | 0;
        c[5] = c[5] + 886263092 + (c[4] >>> 0 < Va[4] >>> 0 ? 1 : 0) | 0;
        c[6] = c[6] + 1295307597 + (c[5] >>> 0 < Va[5] >>> 0 ? 1 : 0) | 0;
        c[7] = c[7] + 3545052371 + (c[6] >>> 0 < Va[6] >>> 0 ? 1 : 0) | 0;
        this._b = c[7] >>> 0 < Va[7] >>> 0 ? 1 : 0;
        for (b = 0; 8 > b; b++) {
            var g = a[b] + c[b]
              , d = g & 65535
              , e = g >>> 16;
            Y[b] = ((d * d >>> 17) + d * e >>> 15) + e * e ^ ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0)
        }
        a[0] = Y[0] + (Y[7] << 16 | Y[7] >>> 16) + (Y[6] << 16 | Y[6] >>> 16) | 0;
        a[1] = Y[1] + (Y[0] << 8 | Y[0] >>> 24) + Y[7] | 0;
        a[2] = Y[2] + (Y[1] << 16 | Y[1] >>> 16) + (Y[0] << 16 | Y[0] >>> 16) | 0;
        a[3] = Y[3] + (Y[2] << 8 | Y[2] >>> 24) + Y[1] | 0;
        a[4] = Y[4] + (Y[3] << 16 | Y[3] >>> 16) + (Y[2] << 16 | Y[2] >>> 16) | 0;
        a[5] = Y[5] + (Y[4] << 8 | Y[4] >>> 24) + Y[3] | 0;
        a[6] = Y[6] + (Y[5] << 16 | Y[5] >>> 16) + (Y[4] << 16 | Y[4] >>> 16) | 0;
        a[7] = Y[7] + (Y[6] << 8 | Y[6] >>> 24) + Y[5] | 0
    }
      , ed = w
      , ud = ed.lib.StreamCipher
      , Qa = []
      , Va = []
      , Y = []
      , Cd = ed.algo.RabbitLegacy = ud.extend({
        _doReset: function() {
            for (var a = this._key.words, c = this.cfg.iv, b = this._X = [a[0], a[3] << 16 | a[2] >>> 16, a[1], a[0] << 16 | a[3] >>> 16, a[2], a[1] << 16 | a[0] >>> 16, a[3], a[2] << 16 | a[1] >>> 16], a = this._C = [a[2] << 16 | a[2] >>> 16, a[0] & 4294901760 | a[1] & 65535, a[3] << 16 | a[3] >>> 16, a[1] & 4294901760 | a[2] & 65535, a[0] << 16 | a[0] >>> 16, a[2] & 4294901760 | a[3] & 65535, a[1] << 16 | a[1] >>> 16, a[3] & 4294901760 | a[0] & 65535], g = this._b = 0; 4 > g; g++)
                dd.call(this);
            for (g = 0; 8 > g; g++)
                a[g] ^= b[g + 4 & 7];
            if (c) {
                var b = c.words
                  , c = b[0]
                  , b = b[1]
                  , c = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360
                  , b = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360
                  , g = c >>> 16 | b & 4294901760
                  , d = b << 16 | c & 65535;
                a[0] ^= c;
                a[1] ^= g;
                a[2] ^= b;
                a[3] ^= d;
                a[4] ^= c;
                a[5] ^= g;
                a[6] ^= b;
                a[7] ^= d;
                for (g = 0; 4 > g; g++)
                    dd.call(this)
            }
        },
        _doProcessBlock: function(a, c) {
            var b = this._X;
            dd.call(this);
            Qa[0] = b[0] ^ b[5] >>> 16 ^ b[3] << 16;
            Qa[1] = b[2] ^ b[7] >>> 16 ^ b[5] << 16;
            Qa[2] = b[4] ^ b[1] >>> 16 ^ b[7] << 16;
            Qa[3] = b[6] ^ b[3] >>> 16 ^ b[1] << 16;
            for (b = 0; 4 > b; b++)
                Qa[b] = (Qa[b] << 8 | Qa[b] >>> 24) & 16711935 | (Qa[b] << 24 | Qa[b] >>> 8) & 4278255360,
                a[c + b] ^= Qa[b]
        },
        blockSize: 4,
        ivSize: 2
    });
    ed.RabbitLegacy = ud._createHelper(Cd);
    w.pad.ZeroPadding = {
        pad: function(a, c) {
            var b = 4 * c;
            a.clamp();
            a.sigBytes += b - (a.sigBytes % b || b)
        },
        unpad: function(a) {
            for (var c = a.words, b = a.sigBytes - 1; !(c[b >>> 2] >>> 24 - 8 * (b % 4) & 255); )
                b--;
            a.sigBytes = b + 1
        }
    };
    return w
});
function getEnStr(a, d) {
    for (var b = [17, 34, 51, 68, 85, 102, 119, 26, 42, 43, 44, 45, 46, 47, 58, 59, 17, 34, 51, 68, 85, 102, 119, 26, 42, 43, 44, 45, 46, 47, 58, 59], f = "", h = "", l = 0; l < a.length; l++)
        h = String.fromCharCode(a[l].charCodeAt(0) ^ b[l]),
        f += h;
    b = CryptoJS.enc.Utf8.parse(f);
    return CryptoJS.AES.encrypt(JSON.stringify(d), b, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString()
}
var UPEdit_IE32_CLASSID = "3B572171-6456-481A-9F95-AA17B7A4FE93", UPEdit_IE32_CAB = "", UPEdit_IE32_EXE = "UPEditorIE_3.exe", UPEdit_IE32_VERSION = "1.0.0.8", UPEdit_IE64_CLASSID = "49563FF9-F619-4E83-AFE2-CAFF36EF395B", UPEdit_IE64_CAB = "", UPEdit_IE64_EXE = "UPEditorx64_3.exe", UPEdit_IE64_VERSION = "1.0.0.6", UPEdit_FF = "UPEditorFF_2.exe", UPEdit_Linux32 = "UPEditorLinux_2.tar.gz", UPEdit_Linux64 = "UPEditorLinux64_2.tar.gz", UPEdit_FF_VERSION = "3.0.0.3", UPEdit_Edge = "UPEditorEdge_1.exe", UPEdit_Edge_VERSION = "1.0.0.3", UPEdit_Edge_Mac = "UPEditorEdgeMac.pkg", UPEdit_Edge_Mac_VERSION = "1.0.0.1", urls = "", CIJSON = {
    interfacetype: 0,
    data: {
        "switch": 3
    }
}, ICJSON = {
    interfacetype: 0,
    data: {
        "switch": 2
    }
}, INCJSON = {
    interfacetype: 1,
    data: {}
}, OPJSON = {
    interfacetype: 0,
    data: {
        "switch": 0
    }
}, XTJSON = {
    interfacetype: 0,
    data: {
        "switch": 5
    }
}, CPJSON = {
    interfacetype: 0,
    data: {
        "switch": 1
    }
}, OUTJSON = {
    interfacetype: 2,
    data: {}
}, CLPJSON = {
    interfacetype: 0,
    data: {
        "switch": 4
    }
}, interv, onceInterv = {}, iterArray = [], outs = {}, inFlag = {}, isInit = {}, UPEdit_Linux_VERSION = "1.0.0.6", UPEdit_MacOs = "", UPEdit_MacOs_VERSION = "", UPEdit_MacOs_Safari = "UPEditor_2.dmg", UPEdit_MacOs_Safari_VERSION = "1.0.0.2", UPEdit_Update = "1", pges = [], pgeInitCnt = 0, win1032flag = 0 < navigator.userAgent.indexOf("Windows NT 10.0") && 0 > navigator.userAgent.indexOf("WOW64");
$.extend({
    upeDefaultKeyDown: function(a, d) {
        $.isFunction(a) ? a() : setTimeout(function() {
            document.getElementById(d).focus()
        }, 100)
    }
});
(function(a) {
    a.upe = function(d) {
        this.settings = a.extend(!0, {}, a.upe.defaults, d);
        this.init()
    }
    ;
    a.extend(a.upe, {
        defaults: {
            upePath: "./upe/",
            upeId: "",
            upeSk: "",
            upeEdittype: 0,
            upeMode: "1111",
            upeMinlength: 6,
            upeMaxlength: 12,
            upePwdMode: 2,
            upeTabindex: 2,
            upeNextElementId: "",
            upeFontName: "",
            upeFontSize: "",
            upeClass: "",
            upeObjClass: "upeObj",
            upeInstallClass: "upeInstall",
            resp: "80",
            upeOnkeydown: "",
            errMappingArr: "",
            errMapping: {
                "00": "\u6b63\u5e38",
                "01": "\u63a7\u4ef6\u672a\u5b89\u88c5",
                "02": "\u914d\u7f6e\u9519\u8bef",
                "03": "\u521d\u59cb\u5316\u9519\u8bef",
                "04": "seed\u9519\u8bef",
                "05": "\u8f93\u5165\u4e3a\u7a7a",
                "06": "\u8f93\u5165\u8fc7\u77ed",
                "07": "\u8f93\u5165\u8fc7\u957f",
                "08": "\u975e\u6cd5\u5b57\u7b26",
                "09": "\u52a0\u5bc6\u51fa\u9519",
                10: "\u8c03\u7528\u51fa\u9519"
            },
            upeCertIndex: 1,
            upeSafeDown: "",
            upeOnBlur: "",
            upeOnFocus: "",
            enterCallback: null,
            tabCallback: null,
            pgeUrls: "https://windows10.microdone.cn",
            pgePort: 5091,
            pgeWindowID: "password" + (new Date).getTime()
        },
        prototype: {
            init: function() {
                outs[this.settings.pgeWindowID] = {
                    version: 0,
                    hardinfo: "",
                    enstr: "",
                    streng: ""
                };
                this.upeDownText = "";
                this.osBrowser = this.checkOsBrowser();
                10 != this.osBrowser && 11 != this.osBrowser && (this.upeVersion = this.getVersion());
                this.isInstalled = this.checkInstall();
                if ((10 == this.osBrowser || 11 == this.osBrowser) && this.settings.upeId) {
                    for (var a = 0; a < pges.length; a++)
                        this.settings.upeId == pges[a].settings.upeId && pges.splice(a, 1);
                    pges.push(this);
                    inFlag[this.settings.pgeWindowID] = {
                        flag: !1
                    }
                }
                this.upeditIECab = "";
                this.upeditFileEXE = "" != this.settings.upeSafeDown ? "javascript:" + this.settings.upeSafeDown + ";" : this.upeditEXE
            },
            getOuts: function() {
                return outs
            },
            supportCtrl: function() {
                return 1 <= this.osBrowser && 6 >= this.osBrowser || 8 == this.osBrowser || 10 == this.osBrowser || 11 == this.osBrowser
            },
            checkOsBrowser: function() {
                var a, b = /chrome\/[\d.]+/gi, f = /firefox\/[\d.]+/gi;
                if ("Win32" == navigator.platform || "Windows" == navigator.platform)
                    0 < navigator.userAgent.indexOf("MSIE") || 0 < navigator.userAgent.indexOf("msie") || 0 < navigator.userAgent.indexOf("Trident") || 0 < navigator.userAgent.indexOf("trident") ? 0 < navigator.userAgent.indexOf("ARM") ? (a = 9,
                    this.upeditEXE = "") : (a = 1,
                    this.upeditIEClassid = UPEdit_IE32_CLASSID,
                    "" != UPEdit_IE32_CAB && (this.upeditIECab = 'codebase="' + this.settings.upePath + UPEdit_IE32_CAB + '"'),
                    this.upeditEXE = this.settings.upePath + UPEdit_IE32_EXE) : 0 < navigator.userAgent.indexOf("Edge") ? (a = 10,
                    this.upeditEXE = this.settings.upePath + UPEdit_Edge) : -1 < navigator.userAgent.toLowerCase().indexOf("micromessenger") ? (a = 10,
                    this.upeditEXE = this.settings.upePath + UPEdit_Edge) : 0 < navigator.userAgent.indexOf("Chrome") ? (b = navigator.userAgent.match(b).toString(),
                    b = parseInt(b.replace(/[^0-9.]/gi, "")),
                    41 >= b ? (a = 2,
                    this.upeditEXE = this.settings.upePath + UPEdit_FF) : 42 <= b && 44 >= b ? (this.osBrowser = 2,
                    (a = this.checkInstall()) ? (a = 2,
                    this.upeditEXE = this.settings.upePath + UPEdit_FF) : (a = 10,
                    this.upeditEXE = this.settings.upePath + UPEdit_Edge)) : 45 <= b && (a = 10,
                    this.upeditEXE = this.settings.upePath + UPEdit_Edge)) : 0 < navigator.userAgent.indexOf("Firefox") ? (f = navigator.userAgent.match(f).toString(),
                    f = parseInt(f.replace(/[^0-9.]/gi, "")),
                    51 <= f ? (a = 10,
                    this.upeditEXE = this.settings.upePath + UPEdit_Edge) : (a = 2,
                    this.upeditEXE = this.settings.upePath + UPEdit_FF)) : (a = 2,
                    this.upeditEXE = this.settings.upePath + UPEdit_FF);
                else if ("Win64" == navigator.platform)
                    (0 < navigator.userAgent.indexOf("Windows NT 6.2") || 0 < navigator.userAgent.indexOf("windows nt 6.2")) && -1 == navigator.userAgent.indexOf("Firefox") ? (a = 1,
                    this.upeditIEClassid = UPEdit_IE32_CLASSID,
                    "" != UPEdit_IE32_CAB && (this.upeditIECab = 'codebase="' + this.settings.upePath + UPEdit_IE32_CAB + '"'),
                    this.upeditEXE = this.settings.upePath + UPEdit_IE32_EXE) : 0 < navigator.userAgent.indexOf("MSIE") || 0 < navigator.userAgent.indexOf("msie") || 0 < navigator.userAgent.indexOf("Trident") || 0 < navigator.userAgent.indexOf("trident") ? (a = 3,
                    this.upeditIEClassid = UPEdit_IE64_CLASSID,
                    "" != UPEdit_IE64_CAB && (this.upeditIECab = 'codebase="' + this.settings.upePath + UPEdit_IE64_CAB + '"'),
                    this.upeditEXE = this.settings.upePath + UPEdit_IE64_EXE) : 0 < navigator.userAgent.indexOf("Edge") || -1 < navigator.userAgent.indexOf("Firefox") ? (a = 10,
                    this.upeditEXE = this.settings.upePath + UPEdit_Edge) : -1 < navigator.userAgent.toLowerCase().indexOf("micromessenger") ? (a = 10,
                    this.upeditEXE = this.settings.upePath + UPEdit_Edge) : 0 < navigator.userAgent.indexOf("Chrome") ? (b = navigator.userAgent.match(b).toString(),
                    b = parseInt(b.replace(/[^0-9.]/gi, "")),
                    41 >= b ? (a = 2,
                    this.upeditEXE = this.settings.upePath + UPEdit_FF) : 42 <= b && 44 >= b ? (this.osBrowser = 2,
                    (a = this.checkInstall()) ? (a = 2,
                    this.upeditEXE = this.settings.upePath + UPEdit_FF) : (a = 10,
                    this.upeditEXE = this.settings.upePath + UPEdit_Edge)) : 45 <= b && (a = 10,
                    this.upeditEXE = this.settings.upePath + UPEdit_Edge)) : (a = 2,
                    this.upeditEXE = this.settings.upePath + UPEdit_FF);
                else if (0 < navigator.userAgent.indexOf("Linux"))
                    0 < navigator.userAgent.indexOf("_64") ? (a = 4,
                    this.upeditEXE = this.settings.upePath + UPEdit_Linux64) : (a = 5,
                    this.upeditEXE = this.settings.upePath + UPEdit_Linux32),
                    0 < navigator.userAgent.indexOf("Android") && (a = 7);
                else if (0 < navigator.userAgent.indexOf("Macintosh"))
                    if (-1 < navigator.userAgent.toLowerCase().indexOf("micromessenger"))
                        a = 10,
                        this.upeditEXE = this.settings.upePath + UPEdit_Edge;
                    else if (0 < navigator.userAgent.indexOf("Safari") || 0 < navigator.userAgent.indexOf("Firefox") || 0 < navigator.userAgent.indexOf("Chrome") || 0 <= navigator.userAgent.indexOf("Opera")) {
                        if (b = navigator.userAgent.match(b),
                        f = navigator.userAgent.match(f),
                        null != b && (b = b.toString(),
                        b = parseInt(b.replace(/[^0-9.]/gi, "")),
                        41 >= b ? (a = 8,
                        this.upeditEXE = this.settings.upePath + UPEdit_MacOs_Safari) : 42 <= b && 44 >= b ? (this.osBrowser = 2,
                        (a = this.checkInstall()) ? (a = 2,
                        this.upeditEXE = this.settings.upePath + UPEdit_MacOs_Safari) : (a = 11,
                        this.upeditEXE = this.settings.upePath + UPEdit_Edge_Mac)) : 45 <= b && (a = 11,
                        this.upeditEXE = this.settings.upePath + UPEdit_Edge_Mac)),
                        null != f && (f = f.toString(),
                        f = parseInt(f.replace(/[^0-9.]/gi, "")),
                        51 <= f ? (a = 11,
                        this.upeditEXE = this.settings.upePath + UPEdit_Edge_Mac) : (a = 8,
                        this.upeditEXE = this.settings.upePath + UPEdit_MacOs_Safari)),
                        null == f && null == b)
                            try {
                                var h = navigator.userAgent.match(/Mac OS X [\d]+_[\d]+/gi).toString();
                                1013 <= parseInt(h.replace(/[^0-9]/gi, "")) ? (a = 11,
                                this.upeditEXE = this.settings.upePath + UPEdit_Edge_Mac) : (a = 8,
                                this.upeditEXE = this.settings.upePath + UPEdit_MacOs_Safari)
                            } catch (l) {
                                a = 8,
                                this.upeditEXE = this.settings.upePath + UPEdit_MacOs_Safari
                            }
                    } else
                        a = 0,
                        this.upeditEXE = "";
                return a
            },
            getupeHtml: function() {
                if (1 == this.osBrowser || 3 == this.osBrowser)
                    return '<span id="' + this.settings.upeId + '_upe" style="display:none;"><OBJECT ID="' + this.settings.upeId + '" CLASSID="CLSID:' + this.upeditIEClassid + '" ' + this.upeditIECab + ' onblur="' + this.settings.upeOnBlur + '" onfocus="' + this.settings.upeOnFocus + '" onkeydown="if(13==event.keyCode || 27==event.keyCode)' + this.settings.upeOnkeydown + ';" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '"><param name="edittype" value="' + this.settings.upeEdittype + '"><param name="minlength" value="' + this.settings.upeMinlength + '"><param name="maxlength" value="' + this.settings.upeMaxlength + '"><param name="input10" value="' + this.settings.upeMode + '"><param name="input9" value="' + this.settings.upeCertIndex + '"></OBJECT></span><div id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;display:none;"><a href="' + this.upeditFileEXE + '">' + a.getI18Text("upop_upedit_install_tips") + "</a></div>";
                if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser)
                    return '<embed ID="' + this.settings.upeId + '" onblur="' + this.settings.upeOnBlur + '" onfocus="' + this.settings.upeOnFocus + '" input_1009="$.upeDefaultKeyDown(' + this.settings.tabCallback + ", '" + this.settings.upeNextElementId + '\')" input_1013="$.upeDefaultKeyDown(' + this.settings.enterCallback + ", '" + this.settings.upeNextElementId + '\');" input_900="' + this.settings.upeCertIndex + '" init="' + this.settings.upeMode + '" minlength="' + this.settings.upeMinlength + '" maxlength="' + this.settings.upeMaxlength + '" edittype="' + this.settings.upeEdittype + '" type="application/UPEditor-2" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '" >';
                if (6 == this.osBrowser)
                    return '<embed ID="' + this.settings.upeId + '" onblur="' + this.settings.upeOnBlur + '" onfocus="' + this.settings.upeOnFocus + '" input5="' + this.settings.upeCertIndex + '" input6="' + this.settings.upeMode + '" input7="' + Number(this.settings.upeMinlength) + '" input4="' + Number(this.settings.upeMaxlength) + '" input0="' + Number(this.settings.upeEdittype) + '" type="application/UnionPay-SecurityEdit-plugin" version="' + UPEdit_MacOs_VERSION + '" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '">';
                if (8 == this.osBrowser)
                    return '<embed ID="' + this.settings.upeId + '" onblur="' + this.settings.upeOnBlur + '" onfocus="' + this.settings.upeOnFocus + '" input5="' + this.settings.upeCertIndex + '" input6="' + this.settings.upeMode + '" input7="' + Number(this.settings.upeMinlength) + '" input4="' + Number(this.settings.upeMaxlength) + '" input0="' + Number(this.settings.upeEdittype) + '" type="application/UnionPay-SecurityEdit-Safari-plugin" version="' + UPEdit_MacOs_Safari_VERSION + '" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '">';
                if (10 == this.osBrowser || 11 == this.osBrowser) {
                    var d = this;
                    d.upeDownText = a.getI18Text("upop_upedit_checking_tips");
                    var b = d.upeditEXE
                      , f = '<div id="' + d.settings.upeId + '_down" class="' + d.settings.upeInstallClass + '" style="text-align:center;"><a class="winA" href="javascript:void(0);">' + d.upeDownText + "</a></div>";
                    this.checkInstall(function(f) {
                        if (0 == f.code) {
                            CIJSON.id = d.settings.pgeWindowID;
                            outs[d.settings.pgeWindowID] = {
                                version: 0,
                                hardinfo: "",
                                enstr: "",
                                streng: ""
                            };
                            getEnStr(d.settings.pgeRZRandNum, CIJSON);
                            var l = d.settings.upeId
                              , q = d.settings.pgeWindowID;
                            a("#" + l + "_down").parent().html('<input type="password" value="" style="height:0;width:0;border:none;"/><input type="password"\tonfocus="pgeCtrl.openProt(\'' + q + "',this.id);pgeCtrl.setCX(this);\" onkeydown=\"pgeCtrl.setSX(event,'" + d.settings.upeOnkeydown + '\',this);"  onclick="pgeCtrl.setCX(this)"  onblur="pgeCtrl.closeProt(\'' + q + '\',this.id)" id="' + l + '" style="ime-mode:disabled" tabindex="2" class="ocx_style" value="" />');
                            f = document.getElementById(l);
                            if (null != f) {
                                if (11 == d.osBrowser) {
                                    document.getElementById(l).type = "text";
                                    var l = d.settings.upeMode
                                      , s = 0
                                      , r = "";
                                    4 == l.length && (r = "",
                                    "1" == l.charAt(0) && (s |= 8),
                                    "1" == l.charAt(1) && (s |= 4),
                                    "1" == l.charAt(2) && (s |= 2),
                                    "1" == l.charAt(3) && (s |= 1),
                                    s & 1 ? (r = "[^",
                                    0 == (s & 8) && (r += "A-Z"),
                                    0 == (s & 4) && (r += "a-z"),
                                    0 == (s & 2) && (r += "0-9")) : (r = "[",
                                    s & 8 && (r += "A-Z"),
                                    s & 4 && (r += "a-z"),
                                    s & 2 && (r += "0-9")),
                                    r += "]");
                                    var t = RegExp(r);
                                    f.onkeypress = function(a) {
                                        var b = 0
                                          , b = (a ? a : event).which
                                          , a = String.fromCharCode(b)
                                          , f = parseInt(d.settings.upeMaxlength);
                                        if (this.value.length > f - 1)
                                            return false;
                                        if (b >= 32 && b <= 126) {
                                            if (t.test(a))
                                                this.value = this.value + "*";
                                            return false
                                        }
                                        return true
                                    }
                                    ;
                                    f.onkeydown = function(a) {
                                        var b = 0
                                          , b = (a ? a : event).which;
                                        String.fromCharCode(b);
                                        a = parseInt(d.settings.upeMaxlength);
                                        if (this.value.length > a - 1)
                                            return false;
                                        if (b == 13) {
                                            this.blur();
                                            eval("(" + d.settings.upeOnkeydown + ")")
                                        } else
                                            return b >= 37 && b <= 40 ? false : true
                                    }
                                }
                                10 == d.osBrowser && (f.onkeypress = function() {
                                    return inFlag[q].flag
                                }
                                )
                            }
                            d.instControl(q)
                        } else
                            a(".winA").html(a.getI18Text("upop_upedit_install_tips")),
                            a(".winA").attr("href", b)
                    });
                    return f
                }
                return '<div id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;">' + a.getI18Text("upop_upedit_notsupport_tips") + '</div> <div class="p_password"><div class="p_top"></div><span>' + a.getI18Text("upop_upedit_notsupport_tips_msg") + "</span></div>"
            },
            getupeHtmlspan: function() {
                return 1 == this.osBrowser || 3 == this.osBrowser ? '<span id="' + this.settings.upeId + '_upe" style="display:none;"><OBJECT ID="' + this.settings.upeId + '" CLASSID="CLSID:' + this.upeditIEClassid + '" ' + this.upeditIECab + ' onkeydown="if(13==event.keyCode || 27==event.keyCode)' + this.settings.upeOnkeydown + ';" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '"><param name="edittype" value="' + this.settings.upeEdittype + '"><param name="minlength" value="' + this.settings.upeMinlength + '"><param name="maxlength" value="' + this.settings.upeMaxlength + '"><param name="input10" value="' + this.settings.upeMode + '"><param name="input9" value="' + this.settings.upeCertIndex + '"></OBJECT></span><span id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;display:none;"><a href="' + this.upeditFileEXE + '">' + a.getI18Text("upop_upedit_install_tips") + "</a></span>" : 2 == this.osBrowser ? '<embed ID="' + this.settings.upeId + '" input_1009="$.upeDefaultKeyDown(' + this.settings.tabCallback + ", '" + this.settings.upeNextElementId + '\')" input_1013="$.upeDefaultKeyDown(' + this.settings.enterCallback + ", '" + this.settings.upeNextElementId + '\');" input_900="' + this.settings.upeCertIndex + '" init="' + this.settings.upeMode + '" minlength="' + this.settings.upeMinlength + '" maxlength="' + this.settings.upeMaxlength + '" edittype="' + this.settings.upeEdittype + '" type="application/UPEditor" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '" >' : 4 == this.osBrowser || 5 == this.osBrowser ? '<embed ID="' + this.settings.upeId + '" input_1009="$.upeDefaultKeyDown(' + this.settings.tabCallback + ", '" + this.settings.upeNextElementId + '\')" input_1013="$.upeDefaultKeyDown(' + this.settings.enterCallback + ", '" + this.settings.upeNextElementId + '\');" input_900="' + this.settings.upeCertIndex + '" init="' + this.settings.upeMode + '" minlength="' + this.settings.upeMinlength + '" maxlength="' + this.settings.upeMaxlength + '" edittype="' + this.settings.upeEdittype + '" type="application/upeditor" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '" >' : 6 == this.osBrowser ? '<embed ID="' + this.settings.upeId + '" input5="' + this.settings.upeCertIndex + '" input6="' + this.settings.upeMode + '" input7="' + Number(this.settings.upeMinlength) + '" input4="' + Number(this.settings.upeMaxlength) + '" input0="' + Number(this.settings.upeEdittype) + '" type="application/UnionPay-SecurityEdit-plugin" version="' + UPEdit_MacOs_VERSION + '" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '">' : 8 == this.osBrowser ? '<embed ID="' + this.settings.upeId + '" input5="' + this.settings.upeCertIndex + '" input6="' + this.settings.upeMode + '" input7="' + Number(this.settings.upeMinlength) + '" input4="' + Number(this.settings.upeMaxlength) + '" input0="' + Number(this.settings.upeEdittype) + '" type="application/UnionPay-SecurityEdit-Safari-plugin" version="' + UPEdit_MacOs_Safari_VERSION + '" tabindex="' + this.settings.upeTabindex + '" class="' + this.settings.upeClass + " " + this.settings.upeObjClass + '">' : '<div id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;">' + a.getI18Text("upop_upedit_notsupport_tips") + '</div> <div class="p_password"><div class="p_top"></div><span>' + a.getI18Text("upop_upedit_notsupport_tips_msg") + "</span></div>"
            },
            getDownHtml: function() {
                this.upeDownText = a.getI18Text("upop_upedit_install_tips");
                return 1 == this.osBrowser || 3 == this.osBrowser || 2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser || 6 == this.osBrowser || 8 == this.osBrowser ? '<div id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;"><a href="' + this.upeditFileEXE + '">' + this.upeDownText + "</a></div>" : 10 == this.osBrowser || 11 == this.osBrowser ? (this.upeDownText = a.getI18Text("upop_upedit_checking_tips"),
                '<div id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;"><a class="winA" href="javascript:void(0);">' + this.upeDownText + "</a></div>") : '<div id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;">' + a.getI18Text("upop_upedit_notsupport_tips") + '</div> <div class="p_password"><div class="p_top"></div><span>' + a.getI18Text("upop_upedit_notsupport_tips_msg") + "</span></div>"
            },
            getDownHtmlspan: function() {
                this.upeDownText = a.getI18Text("upop_upedit_install_tips");
                return 1 == this.osBrowser || 3 == this.osBrowser ? '<span id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;"><a href="' + this.upeditFileEXE + '">' + this.upeDownText + "</a></span>" : 2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser || 6 == this.osBrowser || 8 == this.osBrowser ? '<span id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;"><a href="' + this.upeditFileEXE + '">' + this.upeDownText + "</a></span>" : '<div id="' + this.settings.upeId + '_down" class="' + this.settings.upeInstallClass + '" style="text-align:center;">' + a.getI18Text("upop_upedit_notsupport_tips") + '</div> <div class="p_password"><div class="p_top"></div><span>' + a.getI18Text("upop_upedit_notsupport_tips_msg") + "</span></div>"
            },
            load: function() {
                if (this.checkInstall()) {
                    if (1 == this.osBrowser) {
                        if (this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_IE32_VERSION) && 1 == UPEdit_Update && win1032flag)
                            return this.setDownText(),
                            this.getDownHtml()
                    } else if (3 == this.osBrowser) {
                        if (this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_IE64_VERSION) && 1 == UPEdit_Update && win1032flag)
                            return this.setDownText(),
                            this.getDownHtml()
                    } else if (2 == this.osBrowser) {
                        if (this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_FF_VERSION) && 1 == UPEdit_Update && win1032flag)
                            return this.setDownText(),
                            this.getDownHtml()
                    } else if (4 == this.osBrowser || 5 == this.osBrowser) {
                        if (this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_Linux_VERSION) && 1 == UPEdit_Update && win1032flag)
                            return this.setDownText(),
                            this.getDownHtml()
                    } else if (6 == this.osBrowser) {
                        if (this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_MacOs_VERSION) && 1 == UPEdit_Update && win1032flag)
                            return this.setDownText(),
                            this.getDownHtml()
                    } else if (8 == this.osBrowser && this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_MacOs_Safari_VERSION) && 1 == UPEdit_Update && win1032flag)
                        return this.setDownText(),
                        this.getDownHtml();
                    return this.getupeHtml()
                }
                this.setDownText();
                return this.getDownHtml()
            },
            generate: function() {
                if (1 == this.osBrowser) {
                    if (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_IE32_VERSION) && 1 == UPEdit_Update && win1032flag)
                        return this.setDownText(),
                        document.write(this.getDownHtml())
                } else if (3 == this.osBrowser) {
                    if (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_IE64_VERSION) && 1 == UPEdit_Update && win1032flag)
                        return this.setDownText(),
                        document.write(this.getDownHtml())
                } else if (2 == this.osBrowser) {
                    if (!1 == this.isInstalled)
                        return document.write(this.getDownHtml());
                    if (this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_FF_VERSION) && 1 == UPEdit_Update && win1032flag)
                        return this.setDownText(),
                        document.write(this.getDownHtml())
                } else if (4 == this.osBrowser || 5 == this.osBrowser) {
                    if (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_Linux_VERSION) && 1 == UPEdit_Update && win1032flag)
                        return this.setDownText(),
                        document.write(this.getDownHtml())
                } else if (6 == this.osBrowser) {
                    if (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_MacOs_VERSION) && 1 == UPEdit_Update && win1032flag)
                        return this.setDownText(),
                        document.write(this.getDownHtml())
                } else if (8 == this.osBrowser && (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_MacOs_Safari_VERSION) && 1 == UPEdit_Update && win1032flag))
                    return this.setDownText(),
                    document.write(this.getDownHtml());
                return document.write(this.getupeHtml())
            },
            generatespan: function() {
                if (1 == this.osBrowser) {
                    if (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_IE32_VERSION) && 1 == UPEdit_Update && win1032flag)
                        return this.setDownText(),
                        document.write(this.getDownHtmlspan())
                } else if (3 == this.osBrowser) {
                    if (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_IE64_VERSION) && 1 == UPEdit_Update && win1032flag)
                        return this.setDownText(),
                        document.write(this.getDownHtmlspan())
                } else if (2 == this.osBrowser) {
                    if (!1 == this.isInstalled)
                        return document.write(this.getDownHtmlspan());
                    if (this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_FF_VERSION) && 1 == UPEdit_Update && win1032flag)
                        return this.setDownText(),
                        document.write(this.getDownHtmlspan())
                } else if (4 == this.osBrowser || 5 == this.osBrowser) {
                    if (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_Linux_VERSION) && 1 == UPEdit_Update && win1032flag)
                        return this.setDownText(),
                        document.write(this.getDownHtmlspan())
                } else if (6 == this.osBrowser) {
                    if (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_MacOs_VERSION) && 1 == UPEdit_Update && win1032flag)
                        return this.setDownText(),
                        document.write(this.getDownHtmlspan())
                } else if (8 == this.osBrowser && (!1 == this.isInstalled || this.convertVersion(this.upeVersion) < this.convertVersion(UPEdit_MacOs_Safari_VERSION) && 1 == UPEdit_Update && win1032flag))
                    return this.setDownText(),
                    document.write(this.getDownHtmlspan());
                return document.write(this.getupeHtmlspan())
            },
            pwdclear: function() {
                if (10 == this.osBrowser || 11 == this.osBrowser) {
                    var d = this.settings.pgeWindowID;
                    a("#" + this.settings.upeId).val("");
                    CLPJSON.id = d;
                    d = getEnStr(this.settings.pgeRZRandNum, CLPJSON);
                    jQuery.ajax({
                        url: urls,
                        dataType: "jsonp",
                        data: {
                            str: JSON.stringify({
                                rankey: this.settings.pgeRZRandNum,
                                datab: this.settings.pgeRZDataB,
                                datac: d
                            })
                        },
                        contentType: "application/json;utf-8",
                        jsonp: "jsoncallback",
                        success: function() {}
                    })
                } else
                    this.checkInstall() && document.getElementById(this.settings.upeId).ClearSeCtrl()
            },
            result: function(d, b) {
                var f = "";
                if (this.isInstalled)
                    try {
                        var h = document.getElementById(this.settings.upeId);
                        if (1 == this.settings.upePwdMode)
                            if (1 == this.osBrowser || 3 == this.osBrowser)
                                f = h.GetOutputEx(0, this.settings.upeSk, d);
                            else if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser)
                                h.input(901, d),
                                h.input(902, this.settings.upeSk),
                                f = h.output(900);
                            else if (6 == this.osBrowser || 8 == this.osBrowser)
                                f = h.get_output6(0, this.settings.upeSk, d);
                            else {
                                if (10 == this.osBrowser || 11 == this.osBrowser) {
                                    var l = {
                                        interfacetype: 1,
                                        data: {}
                                    }
                                      , q = this.settings.pgeWindowID;
                                    l.data.oem_901 = d;
                                    l.id = q;
                                    var s = this
                                      , r = getEnStr(this.settings.pgeRZRandNum, l)
                                      , t = {
                                        rankey: this.settings.pgeRZRandNum,
                                        datab: this.settings.pgeRZDataB,
                                        datac: r
                                    };
                                    jQuery.ajax({
                                        url: urls,
                                        dataType: "jsonp",
                                        data: {
                                            str: JSON.stringify(t)
                                        },
                                        contentType: "application/json;utf-8",
                                        jsonp: "jsoncallback",
                                        success: function(a) {
                                            0 == a.code && (OUTJSON.id = q,
                                            OUTJSON.data.datatype = 900,
                                            a = getEnStr(s.settings.pgeRZRandNum, OUTJSON),
                                            jQuery.ajax({
                                                url: urls,
                                                dataType: "jsonp",
                                                data: {
                                                    str: JSON.stringify({
                                                        rankey: s.settings.pgeRZRandNum,
                                                        datab: s.settings.pgeRZDataB,
                                                        datac: a
                                                    })
                                                },
                                                contentType: "application/json;utf-8",
                                                jsonp: "jsoncallback",
                                                success: function(a) {
                                                    outs[q].enstr = a.data;
                                                    console.log("\u5bc6\u6587\uff1a" + a.data);
                                                    b && b(a)
                                                }
                                            }))
                                        }
                                    })
                                }
                            }
                        else if (2 == this.settings.upePwdMode)
                            if (1 == this.osBrowser || 3 == this.osBrowser)
                                f = h.GetOutputEx(1, this.settings.upeSk, d);
                            else if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser)
                                h.input(901, d),
                                h.input(902, this.settings.upeSk),
                                f = h.output(901);
                            else if (6 == this.osBrowser || 8 == this.osBrowser)
                                f = h.get_output6(1, this.settings.upeSk, d);
                            else {
                                if (10 == this.osBrowser || 11 == this.osBrowser)
                                    l = {
                                        interfacetype: 1,
                                        data: {}
                                    },
                                    q = this.settings.pgeWindowID,
                                    l.data.oem_901 = d,
                                    l.id = q,
                                    s = this,
                                    r = getEnStr(this.settings.pgeRZRandNum, l),
                                    t = {
                                        rankey: this.settings.pgeRZRandNum,
                                        datab: this.settings.pgeRZDataB,
                                        datac: r
                                    },
                                    jQuery.ajax({
                                        url: urls,
                                        dataType: "jsonp",
                                        data: {
                                            str: JSON.stringify(t)
                                        },
                                        contentType: "application/json;utf-8",
                                        jsonp: "jsoncallback",
                                        success: function(a) {
                                            0 == a.code && (OUTJSON.id = q,
                                            OUTJSON.data.datatype = 901,
                                            a = getEnStr(s.settings.pgeRZRandNum, OUTJSON),
                                            jQuery.ajax({
                                                url: urls,
                                                dataType: "jsonp",
                                                data: {
                                                    str: JSON.stringify({
                                                        rankey: s.settings.pgeRZRandNum,
                                                        datab: s.settings.pgeRZDataB,
                                                        datac: a
                                                    })
                                                },
                                                contentType: "application/json;utf-8",
                                                jsonp: "jsoncallback",
                                                success: function(a) {
                                                    outs[q].enstr = a.data;
                                                    b && b(a)
                                                }
                                            }))
                                        }
                                    })
                            }
                        else if (3 == this.settings.upePwdMode)
                            if (1 == this.osBrowser || 3 == this.osBrowser)
                                f = h.GetOutputEx(2, this.settings.upeSk, d);
                            else if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser)
                                h.input(901, d),
                                h.input(902, this.settings.upeSk),
                                f = h.output(902);
                            else if (6 == this.osBrowser || 8 == this.osBrowser)
                                f = h.get_output6(2, this.settings.upeSk, d);
                            else if (10 == this.osBrowser || 11 == this.osBrowser)
                                l = {
                                    interfacetype: 1,
                                    data: {}
                                },
                                q = this.settings.pgeWindowID,
                                l.data.oem_901 = d,
                                l.id = q,
                                s = this,
                                r = getEnStr(this.settings.pgeRZRandNum, l),
                                t = {
                                    rankey: this.settings.pgeRZRandNum,
                                    datab: this.settings.pgeRZDataB,
                                    datac: r
                                },
                                jQuery.ajax({
                                    url: urls,
                                    dataType: "jsonp",
                                    data: {
                                        str: JSON.stringify(t)
                                    },
                                    contentType: "application/json;utf-8",
                                    jsonp: "jsoncallback",
                                    success: function(a) {
                                        0 == a.code && (OUTJSON.id = q,
                                        OUTJSON.data.datatype = 902,
                                        a = getEnStr(s.settings.pgeRZRandNum, OUTJSON),
                                        jQuery.ajax({
                                            url: urls,
                                            dataType: "jsonp",
                                            data: {
                                                str: JSON.stringify({
                                                    rankey: s.settings.pgeRZRandNum,
                                                    datab: s.settings.pgeRZDataB,
                                                    datac: a
                                                })
                                            },
                                            contentType: "application/json;utf-8",
                                            jsonp: "jsoncallback",
                                            success: function(a) {
                                                outs[q].enstr = a.data;
                                                console.log(a.data);
                                                b && b(a)
                                            }
                                        }))
                                    }
                                })
                    } catch (E) {
                        f = "03"
                    }
                else
                    f = "01";
                return new a.upeResult(f,this.settings.errMapping)
            },
            machineInfo: function(d, b) {
                var f = "";
                if (this.isInstalled)
                    try {
                        var h = document.getElementById(this.settings.upeId);
                        if (1 == this.osBrowser || 3 == this.osBrowser)
                            f = h.GetOutput(this.settings.upeSk, d);
                        else if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser)
                            h.input(901, d),
                            h.input(902, this.settings.upeSk),
                            f = h.output(903);
                        else if (6 == this.osBrowser || 8 == this.osBrowser)
                            f = h.get_output7(this.settings.upeSk, d);
                        else if (10 == this.osBrowser || 11 == this.osBrowser) {
                            var l = this.settings.pgeWindowID;
                            OUTJSON.id = l;
                            OUTJSON.data.datatype = 903;
                            var q = getEnStr(this.settings.pgeRZRandNum, OUTJSON);
                            jQuery.ajax({
                                url: urls,
                                dataType: "jsonp",
                                data: {
                                    str: JSON.stringify({
                                        rankey: this.settings.pgeRZRandNum,
                                        datab: this.settings.pgeRZDataB,
                                        datac: q
                                    })
                                },
                                contentType: "application/json;utf-8",
                                jsonp: "jsoncallback",
                                success: function(a) {
                                    outs[l].mac = a.data;
                                    b && b(a)
                                }
                            })
                        }
                    } catch (s) {
                        f = "03"
                    }
                else
                    f = "01";
                return new a.upeResult(f,this.settings.errMapping)
            },
            pwdStrength: function() {
                var a = "0";
                if (this.isInstalled)
                    try {
                        var b = document.getElementById(this.settings.upeId);
                        if (1 == this.osBrowser || 3 == this.osBrowser)
                            a = b.output4;
                        else if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser)
                            a = b.output(4);
                        else if (6 == this.osBrowser || 8 == this.osBrowser)
                            a = b.get_output4();
                        else if (10 == this.osBrowser || 11 == this.osBrowser) {
                            var f = this.settings.pgeWindowID;
                            OUTJSON.id = f;
                            OUTJSON.data.datatype = 904;
                            OUTJSON.data.encrypttype = 0;
                            var h = getEnStr(this.settings.pgeRZRandNum, OUTJSON);
                            jQuery.ajax({
                                url: urls,
                                dataType: "jsonp",
                                data: {
                                    str: JSON.stringify({
                                        rankey: this.settings.pgeRZRandNum,
                                        datab: this.settings.pgeRZDataB,
                                        datac: h
                                    })
                                },
                                contentType: "application/json;utf-8",
                                jsonp: "jsoncallback",
                                success: function(a) {
                                    outs[f].streng = a.data;
                                    console.log("-----" + outs[f].streng)
                                }
                            })
                        }
                    } catch (l) {
                        a = "0"
                    }
                else
                    a = "01";
                return a
            },
            checkInstall: function(a, b) {
                try {
                    if (1 == this.osBrowser)
                        new ActiveXObject("UPEditor.UPEditorCtrl.3");
                    else if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser || 6 == this.osBrowser || 8 == this.osBrowser) {
                        var f = 8 == this.osBrowser ? navigator.plugins["UPEditor Safari"].description : navigator.plugins.UPEditor.description;
                        0 < f.indexOf(":") && f.split(":")
                    } else if (3 == this.osBrowser)
                        new ActiveXObject("UPEditorX64.UPEditorCtrl.3");
                    else if ((10 == this.osBrowser || 11 == this.osBrowser) && 1 == a) {
                        CIJSON.id = this.settings.pgeWindowID;
                        urls = this.settings.pgeUrls + ":" + this.settings.pgePort + "/";
                        if (void 0 == this.settings.pgeRZRandNum)
                            return;
                        var h = this
                          , l = getEnStr(this.settings.pgeRZRandNum, CIJSON)
                          , q = {
                            rankey: this.settings.pgeRZRandNum,
                            datab: this.settings.pgeRZDataB,
                            datac: l
                        }
                          , s = 0 < navigator.userAgent.indexOf("Firefox") ? 2200 : 1E3;
                        console.log("timeo:" + s);
                        var r = jQuery.ajax({
                            timeout: 1E3,
                            url: urls,
                            dataType: "jsonp",
                            data: {
                                str: JSON.stringify(q),
                                type: "checkInstall"
                            },
                            contentType: "application/json;utf-8",
                            jsonp: "jsoncallback",
                            success: function(a) {
                                objVersion = a.data;
                                b && b(a)
                            },
                            error: function() {
                                5096 > h.settings.pgePort ? (h.settings.pgePort++,
                                h.checkInstall(1, b)) : (isInstalled = !1,
                                b && b({
                                    code: -1
                                }))
                            },
                            complete: function(a, d) {
                                "timeout" == d && (r.abort(),
                                b && b({
                                    code: -1
                                }))
                            }
                        })
                    }
                } catch (t) {
                    return !1
                }
                return !0
            },
            checkInstallOld: function() {
                try {
                    if (1 == this.osBrowser)
                        new ActiveXObject("UPEditor.UPEditorCtrl.2");
                    else if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser || 6 == this.osBrowser || 8 == this.osBrowser) {
                        var a = navigator.plugins.UPEditor.description;
                        0 < a.indexOf(":") && a.split(":")
                    } else
                        3 == this.osBrowser && new ActiveXObject("UPEditorX64.UPEditorCtrl.2")
                } catch (b) {
                    return !1
                }
                return !0
            },
            getVersion: function(a) {
                try {
                    if (1 == this.osBrowser)
                        var b = new ActiveXObject("UPEditor.UPEditorCtrl.3")
                          , f = b.output29
                          , h = f.replace(RegExp(",", "g"), ".");
                    else if (3 == this.osBrowser)
                        b = new ActiveXObject("UPEditorX64.UPEditorCtrl.3"),
                        f = b.output29,
                        h = f.replace(RegExp(",", "g"), ".");
                    else if (10 == this.osBrowser || 11 == this.osBrowser) {
                        var l = this.settings.pgeWindowID;
                        OUTJSON.id = l;
                        OUTJSON.data.datatype = 12;
                        if (void 0 == this.settings.pgeRZRandNum)
                            return;
                        var q = getEnStr(this.settings.pgeRZRandNum, OUTJSON);
                        jQuery.ajax({
                            url: urls,
                            dataType: "jsonp",
                            data: {
                                str: JSON.stringify({
                                    rankey: this.settings.pgeRZRandNum,
                                    datab: this.settings.pgeRZDataB,
                                    datac: q
                                }),
                                type: "getVersion"
                            },
                            contentType: "application/json;utf-8",
                            jsonp: "jsoncallback",
                            success: function(b) {
                                void 0 != l && (outs[l].version = b.data);
                                a && a(b.data)
                            }
                        })
                    } else {
                        var b = []
                          , s = 8 == this.osBrowser ? navigator.plugins["UPEditor Safari"].description : navigator.plugins.UPEditor.description;
                        0 < s.indexOf(":") ? (b = s.split(":"),
                        h = b[1]) : h = ""
                    }
                    return h
                } catch (r) {
                    return ""
                }
            },
            convertVersion: function(a) {
                return "" != a ? (a = a.split("."),
                parseInt(1E3 * a[0]) + parseInt(100 * a[1]) + parseInt(10 * a[2]) + parseInt(a[3])) : ""
            },
            setDownText: function() {
                if (void 0 != this.upeVersion && !0 == this.isInstalled || !0 == this.checkInstallOld())
                    this.upeDownText = a.getI18Text("upop_upedit_update_tips")
            },
            refresh4IE: function() {
                this.isInstalled ? (1 == this.osBrowser || 3 == this.osBrowser) && a("#" + this.settings.upeId + "_upe").show() : (1 == this.osBrowser || 3 == this.osBrowser) && a("#" + this.settings.upeId + "_down").show();
                (10 == this.osBrowser || 11 == this.osBrowser) && pgeInit()
            },
            setSX: function(a, b, f) {
                var h;
                window.event ? h = a.keyCode : a.which && (h = a.which);
                13 == h && (f.blur(),
                eval("(" + b + ")"))
            },
            setCX: function(a) {
                var b = 0;
                if (document.selection)
                    b = document.selection.createRange(),
                    b.moveStart("character", -a.value.length),
                    b = b.text.length;
                else if (a.selectionStart || "0" == a.selectionStart)
                    b = a.selectionStart;
                var f = a.value.length;
                b <= f && (a.setSelectionRange ? setTimeout(function() {
                    a.setSelectionRange(f, f)
                }, 1) : a.createTextRange && (b = a.createTextRange(),
                b.collapse(!0),
                b.moveEnd("character", f),
                b.moveStart("character", f),
                b.select()))
            },
            instControl: function(d) {
                ICJSON.id = d;
                var b = this
                  , f = b.upeditEXE
                  , h = getEnStr(this.settings.pgeRZRandNum, ICJSON);
                jQuery.ajax({
                    url: urls,
                    dataType: "jsonp",
                    data: {
                        str: JSON.stringify({
                            rankey: this.settings.pgeRZRandNum,
                            datab: this.settings.pgeRZDataB,
                            datac: h
                        }),
                        type: "instControl"
                    },
                    contentType: "application/json;utf-8",
                    jsonp: "jsoncallback",
                    success: function(h) {
                        console.log("id:" + d);
                        console.log("x.data:" + h.data + ",x.code:" + h.code);
                        0 == h.code ? (console.info("\u5b9e\u4f8b\u5316\u6210\u529f"),
                        b.initControl(d),
                        b.getVersion(function(d) {
                            var h = '<div id="' + b.settings.upeId + '_down" class="' + b.settings.upeInstallClass + '" style="text-align:center;"><a class="winA" href="' + f + '">\u8bf7\u70b9\u6b64\u5347\u7ea7\u63a7\u4ef6</a></div>';
                            10 == b.osBrowser && b.convertVersion(d) < b.convertVersion(UPEdit_Edge_VERSION) && (1 == UPEdit_Update && win1032flag) && a("#" + b.settings.upeId).parent().html(h)
                        })) : console.info("\u5b9e\u4f8b\u5316\u5931\u8d25")
                    },
                    error: function(a, b, d) {
                        console.log(d)
                    }
                });
                inFlag[d] = {
                    flag: !1
                }
            },
            initControl: function(a) {
                INCJSON.id = a;
                INCJSON.data.edittype = this.settings.upeEdittype;
                INCJSON.data.maxlength = this.settings.upeMaxlength;
                INCJSON.data.minlength = this.settings.upeMinlength;
                INCJSON.data.oem_902 = this.settings.upeSk;
                INCJSON.data.oem_900 = this.settings.upeCertIndex.toString();
                INCJSON.data.oem_903 = this.settings.upeMode.toString();
                var b = getEnStr(this.settings.pgeRZRandNum, INCJSON);
                jQuery.ajax({
                    url: urls,
                    dataType: "jsonp",
                    data: {
                        str: JSON.stringify({
                            rankey: this.settings.pgeRZRandNum,
                            datab: this.settings.pgeRZDataB,
                            datac: b
                        }),
                        type: "initControl"
                    },
                    contentType: "application/json;utf-8",
                    jsonp: "jsoncallback",
                    success: function(b) {
                        console.log("id:" + a);
                        console.log("x.data:" + b.data + ",x.code:" + b.code);
                        isInit[a] = !0;
                        0 == b.code ? console.info("\u8bbe\u7f6e\u53c2\u6570\u6210\u529f") : console.info("\u8bbe\u7f6e\u53c2\u6570\u5931\u8d25")
                    },
                    error: function(a, b, d) {
                        console.log(d)
                    }
                });
                onceInterv[a] = ""
            },
            openProt: function(a, b) {
                inFlag[a].flag = !1;
                OPJSON.id = a;
                var f = getEnStr(this.settings.pgeRZRandNum, OPJSON);
                jQuery.ajax({
                    url: urls,
                    dataType: "jsonp",
                    data: {
                        str: JSON.stringify({
                            rankey: this.settings.pgeRZRandNum,
                            datab: this.settings.pgeRZDataB,
                            datac: f
                        })
                    },
                    contentType: "application/json;utf-8",
                    jsonp: "jsoncallback",
                    success: function(b) {
                        console.log("x.data:" + b.data + ",x.code:" + b.code);
                        0 == b.code ? (inFlag[a].flag = !0,
                        console.log("\u6210\u529f\u5f00\u542f\u4fdd\u62a4:" + a)) : console.log("\u65e0\u6cd5\u6253\u5f00\u4fdd\u62a4:" + a)
                    },
                    error: function(a, b, d) {
                        console.log(d)
                    }
                });
                if ("string" == typeof onceInterv[a]) {
                    for (f = 0; f < iterArray.length; f++)
                        window.clearInterval(iterArray[f]);
                    onceInterv[a] = window.setInterval('pgeCtrl.intervlOut("' + a + '","' + b + '")', 800);
                    iterArray.push(onceInterv[a])
                }
                this.ajaxOnce(a)
            },
            intervlOut: function(a, b) {
                XTJSON.id = a;
                var f = getEnStr(this.settings.pgeRZRandNum, XTJSON);
                jQuery.ajax({
                    url: urls,
                    dataType: "jsonp",
                    data: {
                        str: JSON.stringify({
                            rankey: this.settings.pgeRZRandNum,
                            datab: this.settings.pgeRZDataB,
                            datac: f
                        })
                    },
                    contentType: "application/json;utf-8",
                    jsonp: "jsoncallback",
                    success: function(f) {
                        var l = document.getElementById(b)
                          , q = l.value.length;
                        console.log(a + "\u7684\u957f\u5ea6\uff1a" + q);
                        console.log("x.data(\u957f\u5ea6)\uff1a" + f.data + ",x.code:" + f.code);
                        var s = "";
                        if (q != f.data) {
                            for (q = 0; q < f.data; q++)
                                s += "*";
                            l.value = s
                        }
                    },
                    error: function(a, b, d) {
                        console.log(d)
                    }
                })
            },
            closeProt: function(a) {
                CPJSON.id = a;
                var b = getEnStr(this.settings.pgeRZRandNum, CPJSON);
                jQuery.ajax({
                    url: urls,
                    dataType: "jsonp",
                    data: {
                        str: JSON.stringify({
                            rankey: this.settings.pgeRZRandNum,
                            datab: this.settings.pgeRZDataB,
                            datac: b
                        })
                    },
                    contentType: "application/json;utf-8",
                    jsonp: "jsoncallback",
                    success: function(b) {
                        0 == b.code ? (inFlag[a].flag = !1,
                        console.log("\u5173\u95ed\u5bc6\u7801\u63a7\u4ef6\u4fdd\u62a4\u6210\u529f:" + a)) : console.log("\u5173\u95ed\u4fdd\u62a4\u5931\u8d25:" + a);
                        console.log("x.data:" + b.data + ",x.code:" + b.code)
                    },
                    error: function(a, b, d) {
                        console.log(d)
                    }
                });
                if ("number" == typeof onceInterv[a]) {
                    for (b = 0; b < iterArray.length; b++)
                        window.clearInterval(iterArray[b]);
                    onceInterv[a] = ""
                }
                this.ajaxOnce(a)
            },
            ajaxOnce: function(a) {
                a = "012345" + (new Date).getTime() + a;
                jQuery.ajax({
                    url: urls,
                    dataType: "jsonp",
                    data: {
                        str: a
                    },
                    contentType: "application/json;utf-8",
                    jsonp: "jsoncallback",
                    success: function() {},
                    error: function(a, d, h) {
                        console.log(h)
                    }
                })
            }
        }
    });
    a.upeResult = function(d, b) {
        this.settings = a.extend(!0, {}, d, b);
        this.init(d, b)
    }
    ;
    a.extend(a.upeResult, {
        prototype: {
            init: function(a, b) {
                this.errMappingArr = b;
                var f = [];
                0 < a.indexOf(":") ? (f = a.split(":"),
                this.resp = f[0],
                this.cypher = f[1]) : (this.resp = a,
                this.cypher = "");
                this.error = null == this.resp || void 0 == this.resp || 2 != this.resp.length || "00" != this.resp
            },
            isError: function() {
                return this.error
            },
            errMsg: function() {
                return "" != this.resp ? this.errMappingArr[this.resp] : "\u672a\u77e5\u9519\u8bef:" + this.resp
            }
        }
    })
}
)(jQuery);
var pgeCtrl = new $.upe;
function pgeInit() {
    pgeInitCnt += 1;
    10 != pgeCtrl.osBrowser && 11 != pgeCtrl.osBrowser || pgeCtrl.checkInstall(1, function(a) {
        var d = pgeCtrl.upeditEXE;
        if (0 == a.code)
            for (a = 0; a < pges.length; a++) {
                var b = pges[a]
                  , f = b.settings.pgeId
                  , h = b.settings.pgeWindowID
                  , d = "";
                10 == b.osBrowser && (d = "this.type='password';");
                b.pgeInitCnt ? b.pgeInitCnt++ : b.pgeInitCnt = 1;
                if (!(1 < b.pgeInitCnt)) {
                    outs[b.settings.pgeWindowID] = {
                        version: 0,
                        hardinfo: "",
                        enstr: "",
                        streng: ""
                    };
                    f = b.settings.upeId;
                    h = b.settings.pgeWindowID;
                    $("#" + f + "_down").parent().html('<input type="text"\tonfocus="' + d + "pgeCtrl.openProt('" + h + "',this.id);pgeCtrl.setCX(this);\"  onkeydown=\"pgeCtrl.setSX(event,'" + b.settings.upeOnkeydown + '\',this);"  onclick="pgeCtrl.setCX(this)"  onblur="pgeCtrl.closeProt(\'' + h + '\',this.id)" id="' + f + '" style="ime-mode:disabled" tabindex="2" class="' + b.settings.upeClass + '" value="" />');
                    d = document.getElementById(f);
                    if (null != d) {
                        if (11 == b.osBrowser) {
                            document.getElementById(f).type = "text";
                            var f = b.settings.upeMode
                              , l = 0
                              , q = "";
                            4 == f.length && (q = "",
                            "1" == f.charAt(0) && (l |= 8),
                            "1" == f.charAt(1) && (l |= 4),
                            "1" == f.charAt(2) && (l |= 2),
                            "1" == f.charAt(3) && (l |= 1),
                            l & 1 ? (q = "[^",
                            0 == (l & 8) && (q += "A-Z"),
                            0 == (l & 4) && (q += "a-z"),
                            0 == (l & 2) && (q += "0-9")) : (q = "[",
                            l & 8 && (q += "A-Z"),
                            l & 4 && (q += "a-z"),
                            l & 2 && (q += "0-9")),
                            q += "]");
                            var s = RegExp(q);
                            d.onkeypress = function(a) {
                                var d = 0
                                  , d = (a ? a : event).which
                                  , a = String.fromCharCode(d)
                                  , f = parseInt(b.settings.upeMaxlength);
                                if (this.value.length > f - 1)
                                    return false;
                                if (d >= 32 && d <= 126) {
                                    if (s.test(a))
                                        this.value = this.value + "*";
                                    return false
                                }
                                return true
                            }
                            ;
                            d.onkeydown = function(a) {
                                var d = 0
                                  , d = (a ? a : event).which;
                                String.fromCharCode(d);
                                a = parseInt(b.settings.upeMaxlength);
                                if (this.value.length > a - 1)
                                    return false;
                                if (d == 13)
                                    eval("(" + b.settings.upeOnkeydown + ")");
                                else
                                    return d >= 37 && d <= 40 ? false : true
                            }
                        }
                        10 == this.osBrowser && (d.onkeypress = function() {
                            return inFlag[h].flag
                        }
                        )
                    }
                    b.instControl(h)
                }
            }
        else
            6 == a.code ? $(".winA").html("\u6587\u4ef6\u88ab\u7834\u574f,\u70b9\u6b64\u91cd\u65b0\u5b89\u88c5") : $(".winA").html("\u8bf7\u70b9\u6b64\u5b89\u88c5"),
            $(".winA").attr("href", d)
    })
}
function _$(a) {
    return document.getElementById(a)
}
0 > navigator.userAgent.indexOf("MSIE") && navigator.plugins.refresh();
function UPEdit() {}
UPEdit.isValidate = !1;
UPEdit.clearLevel = function() {
    $("#_ocx_password1").parents().next(".note_info").removeClass("write_error")
}
;
UPEdit.getLevel = function() {
    var a = upeditor.pwdStrength();
    if (10 == upeditor.osBrowser || 11 == upeditor.osBrowser)
        a = outs[upeditor.settings.pgeWindowID].streng;
    0 <= a ? UPEdit.setPWDStrength(a) : UPEdit.clearLevel()
}
;
(function(a, d) {
    var b = function(a) {
        a = "<up.UPEditInstall> [ERROR]: " + a;
        d.console ? d.console.error(a) : d.alert(a)
    };
    if (d.undefined == a)
        b("jquery\u672a\u5b58\u5728\uff01");
    else {
        d.undefined == d.up && (d.up = {});
        var f = function(b) {
            a.extend(this, b);
            this._popHeight = 300;
            this._popWidth = 570;
            this._safeIconCSS = "margin:30px 0 0 65px;width:360px;height:60px;";
            this._safe_btnCSS = "padding:30px 0 40px 121px;";
            this._safe_freshCSS = "margin-left:120px;";
            if (this.type == "inside") {
                this._popHeight = 200;
                this._popWidth = 380;
                this._safeIconCSS = "margin:10px 0 0 45px;width:260px;height:50px;";
                this._safe_btnCSS = "padding:15px 0 0px 61px;";
                this._safe_freshCSS = "margin-left:100px;"
            }
            image_pah = b.imagePath;
            b = '<style type="text/css">.safe_title{ text-align:left; background:#ebebeb; height:36px; line-height:36px; text-indent:10px; color:#444;}.safe_icon{ padding:5px 0 0 55px;background:url(' + image_pah + "safe.png) no-repeat 0 0; " + this._safeIconCSS + " color:#666;}.safe_fresh{ font-size:14px; color:#f60; " + this._safe_freshCSS + " font-weight:bold;}.safe_fresh span{ font-size:18px; padding:0 1px;}.safe_btn{ " + this._safe_btnCSS + " color:#999;}.safe_btn a{ color:#4B7CAF; margin:0 5px;}.btn_blue{ width:92px; height:34px; line-height:34px; cursor:pointer; font-size:14px; font-weight:bold; text-align:center; color:#fff; border:none; margin-right:10px;background:url(" + image_pah + "login_btn.png) no-repeat 0 0;padding:0 10px 3px;}.btn_blue:hover{ background-position:0 -34px;}.user_icon{ background:url(" + image_pah + "study.gif) no-repeat 72px 0; height:20px; display:inline-block; padding-right:15px}.safe_install_second_titlemsg{ font-size:14px; padding:0 1px;color:black;font-weight:bold;}#simplemodal-overlay { background:#666; margin:0;}#simplemodal-container-upeditor-install { width:" + this._popWidth + "px; overflow-y:auto; border:4px solid #999; background:#FFF; height:" + this._popHeight + "px; }#simplemodal-container-upeditor-install a.modalCloseImg { background: url(" + image_pah + 'pop_close_p.gif) no-repeat scroll 0 0 transparent;cursor: pointer;display: inline;height: 16px;position: absolute;right: 8px;top: 8px;width: 16px;z-index: 3200;}#simplemodal-container-upeditor-install a.closeImg {background-position: 0 -562px; width:10px; height:10px;}#simplemodal-container-upeditor-install a.closeImgBlack {background-position: 0 -543px; width:16px; height:16px;}</style><p class="safe_title" id="safe_install_title">' + a.getI18Text("upop_upedit_install_title") + '</p><div class="safe_icon safe_install_frist">' + a.getI18Text("upop_upedit_install_main") + '</div><div class="safe_fresh safe_install_frist">' + a.getI18Text("upop_upedit_install_sub") + '</div><div class="safe_btn safe_install_frist">    <input id="safe_install_down_frist" type="button" class="btn_blue" value="' + a.getI18Text("upop_upedit_install_button") + '"/> <a id="upedit-install-help-id" href="https://static.95516.com/static/help/detail_41.html" target="_blank">' + a.getI18Text("upop_upedit_install_help") + '</a> | <a href="#" id="upedit-install-demo-id" target="_blank" class="user_icon upedit_install_demo">' + a.getI18Text("upop_upedit_install_demo") + "</a></div>";
            this.el = a(b);
            b = "";
            b = a.browser.msie ? "https://static.95516.com/static/start/detail_143.html" : navigator.userAgent.indexOf("Macintosh") > 0 ? "https://static.95516.com/static/start/detail_145.html" : "https://static.95516.com/static/start/detail_144.html";
            this.el.find(".upedit_install_demo").attr("href", b)
        };
        f.prototype.show = function() {
            var f = this;
            if (this.beforeShow()) {
                f = this;
                if (d.undefined == a.modal)
                    b("simpleModal\u672a\u5b58\u5728\uff01");
                else {
                    var h = this.el.modal({
                        containerId: "simplemodal-container-upeditor-install",
                        minHeight: f._popHeight,
                        minWidth: f._popWidth,
                        onShow: this.afterShow,
                        onClose: function() {
                            if (f.beforeClose()) {
                                h.close();
                                f.afterClose()
                            }
                        }
                    });
                    if (this.type == "inside") {
                        a("#simplemodal-overlay").css("opacity", "0");
                        a("#PageEname").length > 0 && a("#PageEname").val() == "cardPayInside" && a("#safe_install_down_frist").removeClass().addClass("btn_blue139p")
                    }
                    this.el.find("input").unbind("click").click(function() {
                        d.location = f.upe.upeditEXE;
                        a(this).attr("upeURL", f.upe.upeditEXE);
                        f.download()
                    })
                }
            }
        }
        ;
        var h = function() {
            return true
        }
          , l = function() {
            var b = '<div class="safe_icon safe_install_second"><span class="safe_install_second_titlemsg">' + a.getI18Text("safe_install_second_titlemsg") + "</span><div>" + a.getI18Text("safe_install_second_longtime") + '<a style="color:#4B7CAF" id="upedit-install-down-id-second"  target="_blank">' + a.getI18Text("upedit_install_down_id_second") + '</a> | <a style="color:#4B7CAF" id="upedit-install-help-id-second" href="https://static.95516.com/static/help/detail_41.html" target="_blank">' + a.getI18Text("upedit_install_help_id_second") + "</a></div><div>" + a.getI18Text("safe_install_second_howtoinstall") + '<a style="color:#4B7CAF" id="upedit-install-help-demo" target="_blank">' + a.getI18Text("upedit_install_help_demo") + '</a></div></div><div class="safe_btn safe_install_second"><span class="safe_install_second_titlemsg">' + a.getI18Text("safe_install_second_refreshmsg") + '</span><a style="font-size: 14px;" id="upedit-install-refresh-page"  target="_blank">' + a.getI18Text("safe_install_second_refresh") + "</a></div>";
            a(".safe_install_frist").hide();
            a(".safe_title").after(b);
            a("#upedit-install-help-demo").attr("href", a(".upedit_install_demo").attr("href"));
            a("#upedit-install-down-id-second").click(function(b) {
                b.preventDefault();
                d.location = a("#safe_install_down_frist").attr("upeURL")
            });
            a("#upedit-install-refresh-page").click(function(a) {
                a.preventDefault();
                window.location.reload()
            });
            return true
        };
        d.up.UPEditInstall = {
            _arg: null,
            bind: function(b, s) {
                var s = s || {}
                  , s = a.extend({
                    upe: b,
                    enviroment: "portal",
                    beforeShow: h,
                    afterShow: h,
                    beforeClose: h,
                    afterClose: h,
                    download: l,
                    imagePath: "resources/images/global/"
                }, s)
                  , r = "uid" + parseInt(Math.random().toString().split(".")[1], 10).toString(16);
                d[r] = new f(s);
                b.upeditFileEXE = "javascript: " + r + ".show()"
            },
            show: function(q) {
                UPOP == d.undefined && b("UPOP\u672a\u5b58\u5728");
                (new f({
                    upe: new a.upe({
                        upePath: UPOP.PATH_URL
                    }),
                    enviroment: "portal",
                    beforeShow: h,
                    afterShow: h,
                    beforeClose: h,
                    afterClose: h,
                    download: l,
                    imagePath: q
                })).show()
            }
        }
    }
}
)(jQuery, window);
(function() {
    function a() {
        return this._init.apply(this, arguments)
    }
    var d = function() {
        $.modal.close()
    }
      , b = {
        title: !1,
        undestory: !0,
        width: 500,
        height: "auto",
        closeClass: "common-modal-close"
    };
    a.prototype = {
        settings: null,
        $html: null,
        m: null,
        _init: function(a, h) {
            this.settings = $.extend({}, b, h || {});
            this.$html = $('<div class="common-modal">\t        <div class="modal-hd"><h3></h3></div>\t        <div class="modal-bd">    \t\t</div>        </div>');
            $(document.body).append(this.$html.hide());
            var l = this.$html.find(".modal-hd h3")
              , q = this.$html.find(".modal-bd");
            !1 !== this.settings.title ? l.html(this.settings.title) : l.parent().hide();
            q.append(a);
            this.$html.delegate("." + b.closeClass, "click", function(a) {
                a.preventDefault();
                d()
            })
        },
        show: function() {
            var a = this
              , b = this.settings.onClose
              , d = this.settings.onShow;
            this.m = this.$html.modal($.extend(this.settings, {
                containerId: "common-modal-container",
                containerCss: {
                    width: this.settings.width,
                    height: this.settings.height
                },
                onShow: function(a) {
                    a.container.height(a.data.outerHeight(!0)).addClass("common-modal-container");
                    this.setContainerDimensions();
                    this.setPosition();
                    d && d.apply(this, arguments)
                },
                onClose: function(d) {
                    b && b.apply(this, arguments);
                    $.modal.close();
                    setTimeout(function() {
                        a.settings.afterClose && a.settings.afterClose.call()
                    }, 20)
                }
            }));
            return this
        },
        close: d,
        reRect: function(a, b) {
            a.width && (a.left = ($(window).width() - a.width - 8) / 2);
            a.height && (a.top = ($(window).height() - a.height - 8) / 2);
            this.getContainer().animate(a, "normal", "swing", b);
            return this
        },
        autoReRect: function(a) {
            var b = {
                width: this.m.d.data.outerWidth(!0),
                height: this.m.d.data.outerHeight(!0)
            };
            this.reRect(b, a)
        },
        getContainer: function() {
            return this.m.d.container
        },
        delegate: function(a, b, d) {
            this.getContainer().delegate(a, b, d);
            return this
        },
        find: function(a) {
            return this.getContainer().find(a)
        }
    };
    a.alert = function(b, d, l) {
        d = {
            undestory: !1,
            title: d ? d : !1,
            afterClose: l || function() {}
        };
        return (new a('\t    \t<div class="alert-body clearfix">\t    \t\t<div class="icon"></div>\t    \t\t<div class="text">\t    \t\t\t<p>{text}</p>\t    \t\t</div>\t    \t</div>\t    \t<div class="buttons-set">\t\t\t\t<button class="btn btn-db common-modal-close"><b class="w"><b>\u786e\u5b9a</b></b></button>\t\t\t</div>'.replace("{text}", b),d)).show()
    }
    ;
    a.confirm = function(b, d, l, q) {
        d = {
            undestory: !1,
            title: d ? d : !1,
            afterClose: q || function() {}
        };
        b = (new a('        \t<div class="confirm-body clearfix">        \t\t<div class="icon"></div>        \t\t<div class="text">        \t\t\t<p>{text}</p>        \t\t</div>        \t</div>        \t<div class="buttons-set">    \t\t\t<button class="btn btn-db common-modal-confirm"><b class="w"><b>\u786e\u5b9a</b></b></button>    \t\t\t<button class="btn btn-gr common-modal-close"><b class="w"><b>\u53d6\u6d88</b></b></button>    \t\t</div>'.replace("{text}", b),d)).show();
        b.delegate(".common-modal-confirm", "click", function(a) {
            a.preventDefault();
            l && l.call()
        });
        return b
    }
    ;
    window.CommonModal = a
}
)();
(function(a) {
    a.fn.upmaillist = function(d) {
        var b = a(this)
          , d = a.extend({}, {
            boxClass: "mailListBox",
            listClass: "mailListDefault",
            focusClass: "mailListFocus",
            markCalss: "mailListHlignt",
            zIndex: 200,
            autoClass: !0,
            mailArr: "qq.com gmail.com 126.com 163.com hotmail.com yahoo.com yahoo.com.cn live.com sohu.com sina.com".split(" "),
            textHint: !1,
            hintText: "",
            focusColor: "#333",
            blurColor: "#999"
        }, d || {});
        d.autoClass && 0 === a("#mailListAppendCss").size() && a('<style id="mailListAppendCss" type="text/css">.mailListBox{border:1px solid #369; background:#fff; font:12px/20px Arial;}.mailListDefault{padding:0 5px;cursor:pointer;white-space:nowrap;}.mailListFocus{padding:0 5px;cursor:pointer;white-space:nowrap;background:#369;color:white;}.mailListHlignt{color:red;}.mailListFocus .mailListHlignt{color:#fff;}</style>').appendTo(a("head"));
        var f = d.boxClass
          , h = d.listClass
          , l = d.focusClass
          , q = d.markCalss
          , s = d.zIndex
          , r = mailArr = d.mailArr
          , t = d.textHint
          , E = d.hintText
          , R = d.focusColor;
        a.createHtml = function(d, f, r) {
            var s = '<div class="mail_title">\u60a8\u53ef\u9009\u62e9\u4ee5\u4e0b\u90ae\u7bb1\u5730\u5740</div>'
              , w = b.val()
              , w = w.replace(/<[^>]*?>(.*?)/gi, "$1")
              , s = s + ('<div class="mailHover ' + h + '" id="mailList_12">' + w + "</div>");
            a.isArray(f) && a.each(f, function(a) {
                s = a === r ? s + ('<div class="mailHover ' + l + '" id="mailList_' + a + '"><span class="' + q + '">' + d + "</span>@" + f[a] + "</div>") : s + ('<div class="mailHover ' + h + '" id="mailList_' + a + '"><span class="' + q + '">' + d + "</span>@" + f[a] + "</div>")
            });
            return s
        }
        ;
        var F = -1, w;
        a(this).each(function() {
            a(this).bind("keypress", function(a) {
                a = a.which;
                if (118 != a && 8 != a && 0 != a)
                    return 46 == a || 46 <= a && 256 >= a ? !0 : !1
            });
            var b = a(this)
              , d = a(".justForJs").size();
            if (!(0 < d)) {
                var q = b.outerWidth() - 2
                  , U = b.outerHeight();
                b.wrap('<span style="display:inline-block;position:relative;"></span>').before('<div id="mailListBox_' + d + '" class="justForJs ' + f + '" style="min-width:' + q + "px;_width:" + q + "px;position:absolute;left:-6000px;top:" + U + "px;z-index:" + s + ';"></div>');
                var C = a("#mailListBox_" + d), V;
                b.focus(function() {
                    a(this).css("color", R).parent().css("z-index", s);
                    t && E && a.trim(a(this).val()) === E && a(this).val("");
                    a(this).keyup(function(b) {
                        w = v = a.trim(a(this).val());
                        w = w.replace(/<[^>]*?>(.*?)/gi, "$1");
                        /@/.test(v) && (w = v.replace(/@.*/, ""));
                        if (0 < v.length) {
                            if (38 === b.keyCode)
                                0 >= F && (F = r.length),
                                F--;
                            else if (40 === b.keyCode)
                                F >= r.length - 1 && (F = -1),
                                F++;
                            else if (13 === b.keyCode)
                                -1 < F && F < r.length && a(this).val(a("#mailList_" + F).text());
                            else if (/@/.test(v)) {
                                F = -1;
                                var d = v.replace(/.*@/, "");
                                r = a.map(mailArr, function(a) {
                                    if (RegExp(d).test(a))
                                        return a
                                })
                            } else
                                r = mailArr;
                            C.html('<iframe src="" frameborder="0" style="border:none;position:absolute; visibility:inherit; top:0px; left:0px; width:100%; height:100%; z-index:1; filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";"></iframe><div style="position:relative;z-index:300">' + a.createHtml(w, r, F) + "</div>").css("left", 0);
                            C.find("iframe").width(C.width());
                            C.find("iframe").height(C.height());
                            13 === b.keyCode && -1 < F && F < r.length && C.css("left", "-6000px")
                        } else
                            C.css("left", "-6000px")
                    }).blur(function() {
                        t && E && "" === a.trim(a(this).val()) && a(this).val(E);
                        a(this).unbind("keyup").parent().css("z-index", 0);
                        C.css("left", "-6000px")
                    });
                    a(".mailHover").live("mouseover", function() {
                        F = Number(a(this).attr("id").split("_")[1]);
                        V = a("#mailList_" + F).text();
                        C.find("div").children("." + l).removeClass(l).addClass(h);
                        a(this).addClass(l).removeClass(h)
                    })
                });
                C.bind("mousedown", function() {
                    b.val(V)
                })
            }
        })
    }
}
)(jQuery);
(function(a) {
    a.upmailadress = function(a) {
        var b = null
          , f = [["@163.com", "http://mail.163.com/", "\u7f51\u6613163\u90ae\u7bb1"], ["@126.com", "http://www.126.com/", "\u7f51\u6613126\u90ae\u7bb1"], ["@qq.com", "https://mail.qq.com/", "QQ\u90ae\u7bb1"], ["@yeah.net", "http://www.yeah.net/", "\u7f51\u6613Yeah.net\u90ae\u7bb1"], ["@139.com", "http://mail.10086.cn/", "139\u624b\u673a\u90ae\u7bb1"], ["@gmail.com", "http://gmail.google.com/", "Gmail"], ["@yahoo.com.cn", "http://mail.cn.yahoo.com/", "\u96c5\u864e\u90ae\u7bb1"], ["@yahoo.cn", "http://mail.cn.yahoo.com/", "\u96c5\u864e\u90ae\u7bb1"], ["@foxmail.com", "http://www.foxmail.com/", "foxmail"], ["@sohu.com", "http://mail.sohu.com/", "\u641c\u72d0\u90ae\u7bb1"], ["@sina.cn", "http://mail.sina.com.cn/", "\u65b0\u6d6a\u90ae\u7bb1"], ["@eyou.com", "http://www.eyou.com/", "\u4ebf\u90ae"], ["@wo.com.cn", "http://mail.wo.com.cn/", "\u8054\u901a\u624b\u673a\u90ae\u7bb1"], ["@tom.com", "http://mail.tom.com/", "TOM\u90ae\u7bb1"], ["@hotmail.com", "http://www.hotmail.com/", "Hotmail"], ["@live.cn", "http://www.hotmail.com/", "Hotmail"], ["@21cn.com", "http://mail.21cn.com/", "21CN\u90ae\u7bb1"], ["@263.net", "http://www.263.net/", "263\u90ae\u7bb1"], ["@263.net.cn", "http://www.263.net/", "263\u90ae\u7bb1"], ["@189.cn", "http://mail.189.cn/", "189\u90ae\u7bb1"], ["@sogou.com", "http://mail.sogou.com/", "\u641c\u72d7\u90ae\u7bb1"], ["@188.com", "http://www.188.com/", "188\u8d22\u5bcc\u90ae"], ["@unionpay.com", "https://mail.unionpay.com/", "\u94f6\u8054\u5b98\u7f51\u90ae\u7bb1"]];
        try {
            var h = a.split("@");
            if (h[1])
                for (a = 0; a < f.length; a++) {
                    var l = f[a];
                    if (l[0] == "@" + h[1]) {
                        b = l;
                        break
                    }
                }
        } catch (q) {
            b = null
        }
        return b
    }
}
)(jQuery);
(function(a) {
    a.fn.extend({
        upssoLogin: function(d) {
            d = a.extend({}, a.ssoLogin.defaults, d);
            return a(this).each(function() {
                window._ssoOptions = d;
                new a.ssoLogin(this,d)
            })
        }
    });
    a.uppopLogin = function(d) {
        d = a.extend({}, a.ssoLogin.defaults, d);
        window._ssoOptions = d;
        a.getJSON(d.loginStatusUrl, {}, function(b) {
            "n" == b ? (d.userName = b,
            a.ssoLogin.fn.popupLoginIframe(d)) : "function" == typeof d.callBackFun && d.callBackFun(b)
        })
    }
    ;
    a.ssoLogin = function(d, b) {
        a(d).each(function() {
            a(this).click(function() {
                a.getJSON(b.loginStatusUrl, {}, function(d) {
                    "n" == d ? (b.userName = d,
                    a.ssoLogin.fn.popupLoginIframe(b)) : "function" == typeof b.callBackFun && b.callBackFun(d)
                })
            })
        })
    }
    ;
    a.ssoLogin.defaults = {
        title: "\u767b\u5f55\u94f6\u8054\u5728\u7ebf\u652f\u4ed8\uff0c\u8f7b\u677e\u4ed8\u6b3e",
        popupUrl: "https://www.95516.com/portal/login.do?style=sso",
        loginStatusUrl: "https://www.95516.com/portal/ajax/obtainLoginName!obtain.do?callback=?",
        proxyUrl: "https://www.95516.com/portal/pages/user/login/ssoProxy.html",
        callBackFun: null,
        userName: "n"
    };
    a.ssoLogin.fn = {
        init: function() {},
        initCSS: function() {
            document.write('<style type="text/css">#simplemodal-overlay { background:#666; margin:0;}#simplemodal-container { width:630px; overflow-y:auto; border:4px solid #999; background:#FFF; height:350px;}#simplemodal-container a.modalCloseImg { background-position: 0 -560px; width:8px; height:10px; no-repeat;  display:inline; z-index:3200; position:absolute; top:8px; right:8px; cursor:pointer;}</style>')
        },
        popupLoginIframe: function(d) {
            a("#ssoLoginPopup").remove();
            var b = encodeURIComponent(d.title)
              , f = encodeURIComponent(d.proxyUrl)
              , d = d.popupUrl
              , d = d + "&ssoTitle=" + b + "&ssoProxyUrl=" + f + "&r=" + Math.random()
              , b = [];
            b.push('<div id="ssoLoginPopup" class="login_pop dn">');
            b.push('<iframe src="');
            b.push(d);
            b.push('" frameborder="0" scrolling="no" width="630" height="350"></iframe>');
            b.push("</div>");
            a(b.join("")).appendTo("body");
            _hide = function() {
                a.modal.close();
                0 < a("#_ocx_password").length && 0 < a("#mockLoginPassword").length && (a("#_ocx_password").show(),
                a("#mockLoginPassword").addClass("dn"));
                0 < a("#_ocx_cvn2").length && 0 < a("#mockCVN2").length && (a("#_ocx_cvn2").show(),
                a("#mockCVN2").addClass("dn"))
            }
            ;
            try {
                0 < a("#_ocx_password").length && 0 < a("#mockLoginPassword").length && (a("#_ocx_password").hide(),
                a("#mockLoginPassword").removeClass("dn")),
                0 < a("#_ocx_cvn2").length && 0 < a("#mockCVN2").length && (a("#_ocx_cvn2").hide(),
                a("#mockCVN2").removeClass("dn")),
                window._ssoOptions.modal = a("#ssoLoginPopup").modal({
                    onClose: _hide
                })
            } catch (h) {
                jQuery.getScript("https://static.95516.com/static/portal/js/jquery/jquery.simplemodal.js", function() {
                    a("#ssoLoginPopup").modal({
                        onClose: _hide
                    })
                })
            }
        }
    };
    a.ssoLogin.fn.init();
    a.ssoLogin.fn.initCSS()
}
)(jQuery);
(function(a) {
    a.fn.extend({
        upssoUnionLogin: function(b) {
            a.ssoUnionLogin.fn.initCSS();
            b = a.extend({}, a.ssoUnionLogin.defaults, b);
            return a(this).each(function() {
                new a.ssoUnionLogin(this,b)
            })
        }
    });
    a.uppopUnionLogin = function(b) {
        a.ssoUnionLogin.fn.initCSS();
        b = a.extend({}, a.ssoUnionLogin.defaults, b);
        window._ssoOptions = b;
        a.getJSON(b.loginStatusUrl, {}, function(d) {
            "n" == d ? (b.userName = d,
            a.ssoUnionLogin.fn.popupLoginIframe(b)) : "function" == typeof b.callBackFun && b.callBackFun(d)
        })
    }
    ;
    a.ssoUnionLogin = function(b, d) {
        a(b).each(function() {
            a(this).click(function(b) {
                window._ssoOptions = d;
                a.getJSON(d.loginStatusUrl, {}, function(b) {
                    "n" == b ? (d.userName = b,
                    a.ssoUnionLogin.fn.popupLoginIframe(d)) : "function" == typeof d.callBackFun && d.callBackFun(b)
                });
                b.preventDefault()
            })
        })
    }
    ;
    a.ssoUnionLogin.defaults = {
        title: "\u767b\u5f55\u94f6\u8054\u5728\u7ebf\u652f\u4ed8\uff0c\u8f7b\u677e\u4ed8\u6b3e",
        popupUrl: "https://www.95516.com/portal/login.do?style=sso",
        loginStatusUrl: "https://www.95516.com/portal/ajax/obtainLoginName!obtain.do?callback=?",
        proxyUrl: "https://www.95516.com/portal/pages/user/login/ssoProxy.html",
        callBackFun: null,
        userName: "n"
    };
    var d = a.ssoUnionLogin;
    a.ssoUnionLogin.initAble = !1;
    d.fn = {
        init: function() {},
        initCSS: function() {
            if (!a.ssoUnionLogin.initAble) {
                var b = a('<style type="text/css">#simplemodal-overlay { background:#666; margin:0;}#simplemodal-container-unionLogin { width:400px; overflow-y:auto; border:4px solid #999; background:#FFF; height:330px;}#simplemodal-container-unionLogin a.modalCloseImg { background: url(' + UPOP.PATH_STATIC_I18 + "/images/global/icon.png) left 50% no-repeat;background-position: 0 -560px; width:8px; height:10px; no-repeat;  display:inline; z-index:3200; position:absolute; top:12px; right:12px; cursor:pointer;}.pop_title{ background:url(" + UPOP.PATH_STATIC_I18 + "/images/global/repeat.png) repeat-x left -295px; height:40px; }.pop_title h2{ font-weight:normal; font-size:14px; color:#fff;line-height:40px;  margin-left:15px; height:40px;}</style>");
                a("head").eq(0).append(b)
            }
            a.ssoUnionLogin.initAble = !0
        },
        popupLoginIframe: function(b) {
            a("#ssoUnionLoginPopup").remove();
            var d = b.title
              , h = encodeURIComponent(b.proxyUrl)
              , l = b.popupUrl
              , l = l + "&service=" + h + "&registerUrl=" + encodeURIComponent(b.registerUrl + "&sourceName=&service=")
              , l = l + "&parentRedirect=0&style=1"
              , h = [];
            h.push('<div id="ssoUnionLoginPopup" class="login_pop dn"><div class="pop_title"><h2 id="sso_title">' + d + "</h2></div>");
            h.push('<iframe src="');
            h.push(l);
            h.push('" frameborder="0" scrolling="no" width="400" height="300"></iframe>');
            h.push("</div>");
            a(h.join("")).appendTo("body");
            _hide = function() {
                a.modal.close();
                0 < a("#_ocx_password").length && 0 < a("#mockLoginPassword").length && (a("#_ocx_password").show(),
                a("#mockLoginPassword").addClass("dn"));
                0 < a("#_ocx_cvn2").length && 0 < a("#mockCVN2").length && (a("#_ocx_cvn2").show(),
                a("#mockCVN2").addClass("dn"));
                if (b.onClose && "function" == typeof b.onClose)
                    b.onClose()
            }
            ;
            try {
                0 < a("#_ocx_password").length && 0 < a("#mockLoginPassword").length && (a("#_ocx_password").hide(),
                a("#mockLoginPassword").removeClass("dn")),
                0 < a("#_ocx_cvn2").length && 0 < a("#mockCVN2").length && (a("#_ocx_cvn2").hide(),
                a("#mockCVN2").removeClass("dn")),
                window._ssoOptions.modal = a("#ssoUnionLoginPopup").modal({
                    containerId: "simplemodal-container-unionLogin",
                    onClose: _hide
                }),
                a("#simplemodal-container-unionLogin .simplemodal-wrap").css({
                    overflow: "hidden"
                })
            } catch (q) {
                jQuery.getScript("https://static.95516.com/static/portal/js/jquery/jquery.simplemodal.js", function() {
                    a("#ssoUnionLoginPopup").modal({
                        containerId: "simplemodal-container-unionLogin",
                        onClose: _hide
                    })
                })
            }
        }
    }
}
)(jQuery);
(function(a, d) {
    var b = function(a) {
        a = "<up.floatCS> [ERROR]: " + a;
        d.console ? d.console.error(a) : d.alert(a)
    };
    if (d.undefined == a)
        b("jquery\u672a\u5b58\u5728\uff01");
    else {
        d.undefined == d.up && (d.up = {});
        var f = !1
          , h = new Date
          , l = d.screen.width;
        d.up.floatCS = {
            _el: null,
            _arg: null,
            _icon: null,
            _insertHTML: function() {
                var b = "https://acpstatic.95516.com/gw/static/basis/images/service.gif";
                this._arg.localeStr && (this._arg.localeStr == "zh_TW" ? b = "https://static.95516.com/static/cms/img/20/73ad739c-f1b7-4a10-8175-608bb19ce869.png" : this._arg.localeStr == "en_US" && (b = "https://static.95516.com/static/cms/img/24/38950bb9-dc3c-4bf5-848a-ecfdee755d0f.png"));
                b = "<style type='text/css'>.rightservice{ position:fixed; right:" + this._arg.right + "px; top:" + this._arg.top + "px; width:" + this._arg.width + "px;z-index:500;}*html,*html body{background-image:url(https://static.95516.com/static/cms/img/30/6460cf5d-dd11-43fe-bebc-ac3b7d2adaf1.gif);background-attachment:fixed}*html .rightservice{position:absolute;right:15px;top:expression(eval(document.documentElement.scrollTop)+180); width:53px;}.rightservice a.service,a.unservice{ width:68px; height:58px; background:url(" + b + ") no-repeat 0 0; display:inline-block; margin-bottom:15px;}.rightservice a.service:hover{ background-position:0 0px;}.rightservice a.unservice{ background-position:0 -148px;}.rightservice a.service_small,a.unservice_small{width:68px; height:58px; background:url(" + b + ") no-repeat 0 -260px; display:inline-block; margin-bottom:15px;}.rightservice a.service_small:hover{ background-position:0 0px;}.rightservice a.unservice_small{ background-position:0 -148px;}</style>";
                a(b).appendTo(a("head"));
                b = "<div class='rightservice'><a href='https://chat.95516.com/upwcs/echatManager.do?codeKey=11&companyPk=297eb20e5cc44052015cc4415dc90002' target='_blank' class='" + this._arg._class + "' id='rightservice_img'></a>";
                this._el = a(b);
                this._el.appendTo(d.document.body);
                this._icon = this._el.find("#rightservice_img")
            },
            init: function(q) {
                if (!f) {
                    f = true;
                    q = q || {};
                    if (q.currentTime && !/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/.test(q.currentTime))
                        b("\u53c2\u6570\u9519\u8bef\uff01currentTime \u683c\u5f0f\u4e3a[yyyy/MM/dd hh:mm:ss]");
                    else if (q.startTime && !/^\d{2}:\d{2}$/.test(q.startTime))
                        b("\u53c2\u6570\u9519\u8bef\uff01starttTime \u683c\u5f0f\u4e3a[mm:ss]");
                    else if (q.endTime && !/^\d{2}:\d{2}$/.test(q.endTime))
                        b("\u53c2\u6570\u9519\u8bef\uff01endTime \u683c\u5f0f\u4e3a[mm:ss]");
                    else {
                        q = a.extend({
                            currentTime: h,
                            startTime: "08:30",
                            endTime: "22:30",
                            consultUrl: "https://chat.95516.com/upwcs/echatManager.do?codeKey=11&companyPk=297eb20e5cc44052015cc4415dc90002",
                            messageUrl: "https://chat.95516.com/upwcs/echatManager.do?codeKey=11&companyPk=297eb20e5cc44052015cc4415dc90002",
                            right: l > 1024 ? 20 : 2,
                            width: l > 1024 ? 68 : 38,
                            top: 152,
                            zIndex: 500,
                            _class: "service" + (l <= 1024 ? "_small" : "")
                        }, q);
                        q.currentTime = new Date(q.currentTime);
                        q.startTime = parseInt(q.startTime.replace(":", ""), 10);
                        q.endTime = parseInt(q.endTime.replace(":", ""), 10);
                        this._arg = q;
                        this._insertHTML();
                        this.checkTime();
                        d.setInterval(function() {
                            d.up.floatCS.checkTime()
                        }, 3E4);
                        if (a.browser.msie && a.browser.version == "6.0") {
                            this._el.css("position", "absolute");
                            var s = this;
                            a(d).bind("scroll", function() {
                                s._el.css("top", d.document.documentElement.scrollTop + s._arg.top)
                            })
                        }
                    }
                }
            },
            checkTime: function() {
                var a = new Date - h
                  , a = new Date(this._arg.currentTime.getTime() + a)
                  , a = a.getHours() * 100 + a.getMinutes();
                a >= this._arg.startTime && a <= this._arg.endTime ? this._icon.removeClass("un" + this._arg._class).addClass(this._arg._class) : this._icon.removeClass(this._arg._class).addClass("un" + this._arg._class)
            }
        }
    }
}
)(jQuery, window);
window.atm = function() {
    function a() {
        document.getElementById("pad_keybord").style.display = "none";
        $(".pad_pass-clear").addClass("hide");
        document.getElementById("pad_atm_password").className = "pad_down-password";
        "\u94f6\u884c\u5361\u4ea4\u6613\u5bc6\u7801" == document.getElementById("pad_atm_password").innerText && (document.getElementById("pad_atm_password").className = "pad_up-password password w6 backfontcolor");
        if (!1 != Na) {
            var a = G()
              , b = document.getElementById("pad_atm_password").innerText;
            document.getElementById("atmPassword");
            Na = !1;
            if ("" == b || "\u94f6\u884c\u5361\u4ea4\u6613\u5bc6\u7801" == b)
                document.getElementById("pad_atm_password").className = "pad_backfontcolor pad_up-password",
                document.getElementById("pad_atm_password").innerText = "\u94f6\u884c\u5361\u4ea4\u6613\u5bc6\u7801",
                document.getElementById("atmPassword").value = "";
            else {
                for (var b = document.getElementById("atmPassword").value, d = "", e = 0; e < b.length; e += 16) {
                    var f = b.substring(e, e + 16)
                      , h = lb
                      , l = zb
                      , q = Pa
                      , r = f.length
                      , s = ""
                      , w = void 0
                      , t = void 0
                      , B = void 0
                      , E = void 0
                      , ca = void 0
                      , u = void 0;
                    null != h && "" != h && (w = I(h),
                    E = w.length);
                    null != l && "" != l && (t = I(l),
                    ca = t.length);
                    null != q && "" != q && (B = I(q),
                    u = B.length);
                    for (var r = parseInt(r / 16), x = 0, x = 0; x < r; x++) {
                        var C;
                        C = f.substring(16 * x + 0, 16 * x + 16);
                        var K = "";
                        for (i = 0; 16 > i; i++) {
                            var F = void 0;
                            switch (C.substring(i, i + 1)) {
                            case "0":
                                F = "0000";
                                break;
                            case "1":
                                F = "0001";
                                break;
                            case "2":
                                F = "0010";
                                break;
                            case "3":
                                F = "0011";
                                break;
                            case "4":
                                F = "0100";
                                break;
                            case "5":
                                F = "0101";
                                break;
                            case "6":
                                F = "0110";
                                break;
                            case "7":
                                F = "0111";
                                break;
                            case "8":
                                F = "1000";
                                break;
                            case "9":
                                F = "1001";
                                break;
                            case "A":
                                F = "1010";
                                break;
                            case "B":
                                F = "1011";
                                break;
                            case "C":
                                F = "1100";
                                break;
                            case "D":
                                F = "1101";
                                break;
                            case "E":
                                F = "1110";
                                break;
                            case "F":
                                F = "1111"
                            }
                            K += F
                        }
                        C = K;
                        K = Array(64);
                        for (F = F = 0; 64 > F; F++)
                            K[F] = parseInt(C.substring(F, F + 1));
                        var M;
                        if (null != h && "" != h && null != l && "" != l && null != q && "" != q) {
                            M = K;
                            for (C = u - 1; 0 <= C; C--)
                                M = V(M, B[C]);
                            for (C = ca - 1; 0 <= C; C--)
                                M = V(M, t[C]);
                            for (C = E - 1; 0 <= C; C--)
                                M = V(M, w[C])
                        } else if (null != h && "" != h && null != l && "" != l) {
                            M = K;
                            for (C = ca - 1; 0 <= C; C--)
                                M = V(M, t[C]);
                            for (C = E - 1; 0 <= C; C--)
                                M = V(M, w[C])
                        } else if (null != h && "" != h) {
                            M = K;
                            for (C = E - 1; 0 <= C; C--)
                                M = V(M, w[C])
                        }
                        C = M;
                        K = "";
                        for (i = 0; 4 > i; i++) {
                            for (j = F = 0; 16 > j; j++) {
                                var P = 1;
                                for (m = 15; m > j; m--)
                                    P *= 2;
                                F += C[16 * i + j] * P
                            }
                            0 != F && (K += String.fromCharCode(F))
                        }
                        s += K
                    }
                    f = s;
                    d += f
                }
                b = document.getElementById("atmPassword");
                h = d;
                e = Array(8);
                d = Array(8);
                e[0] = "0x06";
                d[0] = "0x00";
                d[1] = "0x00";
                l = 1;
                q = 2;
                w = "";
                for (f = 0; f < h.length; f += 2)
                    e[l++] = "0x" + h.charAt(f) + h.charAt(f + 1);
                e[4] = "0xFF";
                e[5] = "0xFF";
                e[6] = "0xFF";
                e[7] = "0xFF";
                for (f = a.length - 13; f < a.length - 1; f += 2)
                    d[q++] = "0x" + a.charAt(f) + a.charAt(f + 1);
                for (f = 0; 8 > f; f++)
                    a = w,
                    h = d[f] ^ e[f],
                    h = h.toString(16),
                    1 == h.length && (h = "0" + h),
                    h = "0x" + h.toUpperCase(),
                    w = a + h;
                a = w;
                (e = UPOP.modulus) || (e = "e1796383971e7b5dd9b551090b2b51bb97a49ac03f9ed73e43461309af33028ee5740f32f329266da69562993736145641f078544f955e61e5b430b0176319a85aacf8653043ec92b9cf374e1853630b68480d406ef15f9d3c161d540bb405d9b85401cb3661951672839750922ff76adf5739ea9beb66da00b1217fcce6b1f74ac2cfa454103bb11ee8ee415baad82d8d89847f5a60570ff2f049b4e35bae0052eab8b79e8211737fbc6b2a940ce8db5004871d9b2a1f98d1281267b3308858b48f20fac2910c33ba38782f48a38d59b606cf5899a0f36a08940f27cff003cb84d629e83e27a86b0be54c6e7d457b2b642e4ee8dfccebde5112883ae157d315");
                d = new T;
                d.setPublic(e, UPOP.exponent);
                a = d.encrypt(a);
                a || (alert("\u52a0\u5bc6\u5931\u8d25"),
                a = void 0);
                b.value = a;
                6 == $("#pad_atm_password").html().length ? window._padAtmParam.valiCallback && window._padAtmParam.valiCallback(!0) : window._padAtmParam.valiCallback && window._padAtmParam.valiCallback(!1)
            }
        }
    }
    function d(a) {
        var b = UPOP.modulus;
        b || (b = "e1796383971e7b5dd9b551090b2b51bb97a49ac03f9ed73e43461309af33028ee5740f32f329266da69562993736145641f078544f955e61e5b430b0176319a85aacf8653043ec92b9cf374e1853630b68480d406ef15f9d3c161d540bb405d9b85401cb3661951672839750922ff76adf5739ea9beb66da00b1217fcce6b1f74ac2cfa454103bb11ee8ee415baad82d8d89847f5a60570ff2f049b4e35bae0052eab8b79e8211737fbc6b2a940ce8db5004871d9b2a1f98d1281267b3308858b48f20fac2910c33ba38782f48a38d59b606cf5899a0f36a08940f27cff003cb84d629e83e27a86b0be54c6e7d457b2b642e4ee8dfccebde5112883ae157d315");
        var d = new T;
        d.setPublic(b, UPOP.exponent);
        if (a = d.encrypt_back(a))
            return a;
        alert("\u52a0\u5bc6\u5931\u8d25")
    }
    function b(a, b, d) {
        null != a && ("number" == typeof a ? this.fromNumber(a, b, d) : null == b && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b))
    }
    function f() {
        return new b(null)
    }
    function h(a, b, d, e, f, h) {
        for (; 0 <= --h; ) {
            var l = b * this[a++] + d[e] + f
              , f = Math.floor(l / 67108864);
            d[e++] = l & 67108863
        }
        return f
    }
    function l(a, b, d, e, f, h) {
        for (var l = b & 32767, b = b >> 15; 0 <= --h; ) {
            var q = this[a] & 32767
              , r = this[a++] >> 15
              , s = b * q + r * l
              , q = l * q + ((s & 32767) << 15) + d[e] + (f & 1073741823)
              , f = (q >>> 30) + (s >>> 15) + b * r + (f >>> 30);
            d[e++] = q & 1073741823
        }
        return f
    }
    function q(a, b, d, e, f, h) {
        for (var l = b & 16383, b = b >> 14; 0 <= --h; ) {
            var q = this[a] & 16383
              , r = this[a++] >> 14
              , s = b * q + r * l
              , q = l * q + ((s & 16383) << 14) + d[e] + f
              , f = (q >> 28) + (s >> 14) + b * r;
            d[e++] = q & 268435455
        }
        return f
    }
    function s(a) {
        var b = f();
        b.fromInt(a);
        return b
    }
    function r(a) {
        var b = 1, d;
        if (0 != (d = a >>> 16))
            a = d,
            b += 16;
        if (0 != (d = a >> 8))
            a = d,
            b += 8;
        if (0 != (d = a >> 4))
            a = d,
            b += 4;
        if (0 != (d = a >> 2))
            a = d,
            b += 2;
        0 != a >> 1 && (b += 1);
        return b
    }
    function t(a) {
        this.m = a
    }
    function E(a) {
        this.m = a;
        this.mp = a.invDigit();
        this.mpl = this.mp & 32767;
        this.mph = this.mp >> 15;
        this.um = (1 << a.DB - 15) - 1;
        this.mt2 = 2 * a.t
    }
    function R() {
        this.j = this.i = 0;
        this.S = []
    }
    function F() {
        var a = (new Date).getTime();
        fa[aa++] ^= a & 255;
        fa[aa++] ^= a >> 8 & 255;
        fa[aa++] ^= a >> 16 & 255;
        fa[aa++] ^= a >> 24 & 255;
        aa >= va && (aa -= va)
    }
    function w() {}
    function T() {
        this.n = null;
        this.e = 0;
        this.coeff = this.dmq1 = this.dmp1 = this.q = this.p = this.d = null
    }
    function I(a) {
        for (var b = [], d = a.length, e = parseInt(d / 4), f = d % 4, h = 0, h = 0; h < e; h++)
            b[h] = K(a.substring(4 * h + 0, 4 * h + 4));
        0 < f && (b[h] = K(a.substring(4 * h + 0, d)));
        return b
    }
    function K(a) {
        var b = a.length
          , d = Array(64);
        if (4 > b) {
            for (var e = 0, f = 0, e = f = e = 0; e < b; e++)
                for (var h = a.charCodeAt(e), f = 0; 16 > f; f++) {
                    for (var l = 1, q = 0, q = 15; q > f; q--)
                        l *= 2;
                    d[16 * e + f] = parseInt(h / l) % 2
                }
            for (e = b; 4 > e; e++)
                for (f = h = 0; 16 > f; f++) {
                    l = 1;
                    for (q = 15; q > f; q--)
                        l *= 2;
                    d[16 * e + f] = parseInt(h / l) % 2
                }
        } else
            for (e = 0; 4 > e; e++) {
                h = a.charCodeAt(e);
                for (f = 0; 16 > f; f++) {
                    l = 1;
                    for (q = 15; q > f; q--)
                        l *= 2;
                    d[16 * e + f] = parseInt(h / l) % 2
                }
            }
        return d
    }
    function U(a) {
        var b = "";
        for (i = 0; 16 > i; i++) {
            var d = "";
            for (j = 0; 4 > j; j++)
                d += a[4 * i + j];
            var e = void 0;
            switch (d) {
            case "0000":
                e = "0";
                break;
            case "0001":
                e = "1";
                break;
            case "0010":
                e = "2";
                break;
            case "0011":
                e = "3";
                break;
            case "0100":
                e = "4";
                break;
            case "0101":
                e = "5";
                break;
            case "0110":
                e = "6";
                break;
            case "0111":
                e = "7";
                break;
            case "1000":
                e = "8";
                break;
            case "1001":
                e = "9";
                break;
            case "1010":
                e = "A";
                break;
            case "1011":
                e = "B";
                break;
            case "1100":
                e = "C";
                break;
            case "1101":
                e = "D";
                break;
            case "1110":
                e = "E";
                break;
            case "1111":
                e = "F"
            }
            b += e
        }
        return b
    }
    function C(a, b) {
        for (var d = e(b), f = P(a), h = Array(32), l = Array(32), q = Array(32), r = 0, s = 0, r = s = s = r = 0; 32 > r; r++)
            h[r] = f[r],
            l[r] = f[32 + r];
        for (r = 0; 16 > r; r++) {
            for (s = 0; 32 > s; s++)
                q[s] = h[s],
                h[s] = l[s];
            f = Array(48);
            for (s = 0; 48 > s; s++)
                f[s] = d[r][s];
            f = La(Ma(jb(La(oa(l), f))), q);
            for (s = 0; 32 > s; s++)
                l[s] = f[s]
        }
        d = Array(64);
        for (r = 0; 32 > r; r++)
            d[r] = l[r],
            d[32 + r] = h[r];
        return B(d)
    }
    function V(a, b) {
        for (var d = e(b), f = P(a), h = Array(32), l = Array(32), q = Array(32), r = 0, s = 0, r = s = s = r = 0; 32 > r; r++)
            h[r] = f[r],
            l[r] = f[32 + r];
        for (r = 15; 0 <= r; r--) {
            for (s = 0; 32 > s; s++)
                q[s] = h[s],
                h[s] = l[s];
            f = Array(48);
            for (s = 0; 48 > s; s++)
                f[s] = d[r][s];
            f = La(Ma(jb(La(oa(l), f))), q);
            for (s = 0; 32 > s; s++)
                l[s] = f[s]
        }
        d = Array(64);
        for (r = 0; 32 > r; r++)
            d[r] = l[r],
            d[32 + r] = h[r];
        return B(d)
    }
    function P(a) {
        var b = Array(64);
        i = 0;
        m = 1;
        for (n = 0; 4 > i; i++,
        m += 2,
        n += 2) {
            j = 7;
            for (k = 0; 0 <= j; j--,
            k++)
                b[8 * i + k] = a[8 * j + m],
                b[8 * i + k + 32] = a[8 * j + n]
        }
        return b
    }
    function oa(a) {
        var b = Array(48);
        for (i = 0; 8 > i; i++)
            b[6 * i + 0] = 0 == i ? a[31] : a[4 * i - 1],
            b[6 * i + 1] = a[4 * i + 0],
            b[6 * i + 2] = a[4 * i + 1],
            b[6 * i + 3] = a[4 * i + 2],
            b[6 * i + 4] = a[4 * i + 3],
            b[6 * i + 5] = 7 == i ? a[0] : a[4 * i + 4];
        return b
    }
    function La(a, b) {
        var d = Array(a.length);
        for (i = 0; i < a.length; i++)
            d[i] = a[i] ^ b[i];
        return d
    }
    function jb(a) {
        var b = Array(32)
          , d = ""
          , e = [[14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7], [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8], [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0], [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13]]
          , f = [[15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10], [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5], [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15], [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9]]
          , h = [[10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8], [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1], [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7], [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12]]
          , l = [[7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15], [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9], [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4], [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14]]
          , q = [[2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9], [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6], [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14], [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3]]
          , r = [[12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11], [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8], [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6], [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13]]
          , s = [[4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1], [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6], [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2], [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12]]
          , w = [[13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7], [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2], [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8], [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11]];
        for (m = 0; 8 > m; m++) {
            var t = 0
              , C = 0
              , t = 2 * a[6 * m + 0] + a[6 * m + 5]
              , C = 8 * a[6 * m + 1] + 4 * a[6 * m + 2] + 2 * a[6 * m + 3] + a[6 * m + 4];
            switch (m) {
            case 0:
                d = x(e[t][C]);
                break;
            case 1:
                d = x(f[t][C]);
                break;
            case 2:
                d = x(h[t][C]);
                break;
            case 3:
                d = x(l[t][C]);
                break;
            case 4:
                d = x(q[t][C]);
                break;
            case 5:
                d = x(r[t][C]);
                break;
            case 6:
                d = x(s[t][C]);
                break;
            case 7:
                d = x(w[t][C])
            }
            b[4 * m + 0] = parseInt(d.substring(0, 1));
            b[4 * m + 1] = parseInt(d.substring(1, 2));
            b[4 * m + 2] = parseInt(d.substring(2, 3));
            b[4 * m + 3] = parseInt(d.substring(3, 4))
        }
        return b
    }
    function Ma(a) {
        var b = Array(32);
        b[0] = a[15];
        b[1] = a[6];
        b[2] = a[19];
        b[3] = a[20];
        b[4] = a[28];
        b[5] = a[11];
        b[6] = a[27];
        b[7] = a[16];
        b[8] = a[0];
        b[9] = a[14];
        b[10] = a[22];
        b[11] = a[25];
        b[12] = a[4];
        b[13] = a[17];
        b[14] = a[30];
        b[15] = a[9];
        b[16] = a[1];
        b[17] = a[7];
        b[18] = a[23];
        b[19] = a[13];
        b[20] = a[31];
        b[21] = a[26];
        b[22] = a[2];
        b[23] = a[8];
        b[24] = a[18];
        b[25] = a[12];
        b[26] = a[29];
        b[27] = a[5];
        b[28] = a[21];
        b[29] = a[10];
        b[30] = a[3];
        b[31] = a[24];
        return b
    }
    function B(a) {
        var b = Array(64);
        b[0] = a[39];
        b[1] = a[7];
        b[2] = a[47];
        b[3] = a[15];
        b[4] = a[55];
        b[5] = a[23];
        b[6] = a[63];
        b[7] = a[31];
        b[8] = a[38];
        b[9] = a[6];
        b[10] = a[46];
        b[11] = a[14];
        b[12] = a[54];
        b[13] = a[22];
        b[14] = a[62];
        b[15] = a[30];
        b[16] = a[37];
        b[17] = a[5];
        b[18] = a[45];
        b[19] = a[13];
        b[20] = a[53];
        b[21] = a[21];
        b[22] = a[61];
        b[23] = a[29];
        b[24] = a[36];
        b[25] = a[4];
        b[26] = a[44];
        b[27] = a[12];
        b[28] = a[52];
        b[29] = a[20];
        b[30] = a[60];
        b[31] = a[28];
        b[32] = a[35];
        b[33] = a[3];
        b[34] = a[43];
        b[35] = a[11];
        b[36] = a[51];
        b[37] = a[19];
        b[38] = a[59];
        b[39] = a[27];
        b[40] = a[34];
        b[41] = a[2];
        b[42] = a[42];
        b[43] = a[10];
        b[44] = a[50];
        b[45] = a[18];
        b[46] = a[58];
        b[47] = a[26];
        b[48] = a[33];
        b[49] = a[1];
        b[50] = a[41];
        b[51] = a[9];
        b[52] = a[49];
        b[53] = a[17];
        b[54] = a[57];
        b[55] = a[25];
        b[56] = a[32];
        b[57] = a[0];
        b[58] = a[40];
        b[59] = a[8];
        b[60] = a[48];
        b[61] = a[16];
        b[62] = a[56];
        b[63] = a[24];
        return b
    }
    function x(a) {
        var b = "";
        switch (a) {
        case 0:
            b = "0000";
            break;
        case 1:
            b = "0001";
            break;
        case 2:
            b = "0010";
            break;
        case 3:
            b = "0011";
            break;
        case 4:
            b = "0100";
            break;
        case 5:
            b = "0101";
            break;
        case 6:
            b = "0110";
            break;
        case 7:
            b = "0111";
            break;
        case 8:
            b = "1000";
            break;
        case 9:
            b = "1001";
            break;
        case 10:
            b = "1010";
            break;
        case 11:
            b = "1011";
            break;
        case 12:
            b = "1100";
            break;
        case 13:
            b = "1101";
            break;
        case 14:
            b = "1110";
            break;
        case 15:
            b = "1111"
        }
        return b
    }
    function e(a) {
        for (var b = Array(56), d = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], e = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1], f = 0; 7 > f; f++) {
            j = 0;
            for (k = 7; 8 > j; j++,
            k--)
                b[8 * f + j] = a[8 * k + f]
        }
        for (var f = 0, f = 0; 16 > f; f++) {
            var h = a = 0;
            for (j = 0; j < e[f]; j++) {
                a = b[0];
                h = b[28];
                for (k = 0; 27 > k; k++)
                    b[k] = b[k + 1],
                    b[28 + k] = b[29 + k];
                b[27] = a;
                b[55] = h
            }
            a = Array(48);
            a[0] = b[13];
            a[1] = b[16];
            a[2] = b[10];
            a[3] = b[23];
            a[4] = b[0];
            a[5] = b[4];
            a[6] = b[2];
            a[7] = b[27];
            a[8] = b[14];
            a[9] = b[5];
            a[10] = b[20];
            a[11] = b[9];
            a[12] = b[22];
            a[13] = b[18];
            a[14] = b[11];
            a[15] = b[3];
            a[16] = b[25];
            a[17] = b[7];
            a[18] = b[15];
            a[19] = b[6];
            a[20] = b[26];
            a[21] = b[19];
            a[22] = b[12];
            a[23] = b[1];
            a[24] = b[40];
            a[25] = b[51];
            a[26] = b[30];
            a[27] = b[36];
            a[28] = b[46];
            a[29] = b[54];
            a[30] = b[29];
            a[31] = b[39];
            a[32] = b[50];
            a[33] = b[44];
            a[34] = b[32];
            a[35] = b[47];
            a[36] = b[43];
            a[37] = b[48];
            a[38] = b[38];
            a[39] = b[55];
            a[40] = b[33];
            a[41] = b[52];
            a[42] = b[45];
            a[43] = b[41];
            a[44] = b[49];
            a[45] = b[35];
            a[46] = b[28];
            a[47] = b[31];
            switch (f) {
            case 0:
                for (m = 0; 48 > m; m++)
                    d[0][m] = a[m];
                break;
            case 1:
                for (m = 0; 48 > m; m++)
                    d[1][m] = a[m];
                break;
            case 2:
                for (m = 0; 48 > m; m++)
                    d[2][m] = a[m];
                break;
            case 3:
                for (m = 0; 48 > m; m++)
                    d[3][m] = a[m];
                break;
            case 4:
                for (m = 0; 48 > m; m++)
                    d[4][m] = a[m];
                break;
            case 5:
                for (m = 0; 48 > m; m++)
                    d[5][m] = a[m];
                break;
            case 6:
                for (m = 0; 48 > m; m++)
                    d[6][m] = a[m];
                break;
            case 7:
                for (m = 0; 48 > m; m++)
                    d[7][m] = a[m];
                break;
            case 8:
                for (m = 0; 48 > m; m++)
                    d[8][m] = a[m];
                break;
            case 9:
                for (m = 0; 48 > m; m++)
                    d[9][m] = a[m];
                break;
            case 10:
                for (m = 0; 48 > m; m++)
                    d[10][m] = a[m];
                break;
            case 11:
                for (m = 0; 48 > m; m++)
                    d[11][m] = a[m];
                break;
            case 12:
                for (m = 0; 48 > m; m++)
                    d[12][m] = a[m];
                break;
            case 13:
                for (m = 0; 48 > m; m++)
                    d[13][m] = a[m];
                break;
            case 14:
                for (m = 0; 48 > m; m++)
                    d[14][m] = a[m];
                break;
            case 15:
                for (m = 0; 48 > m; m++)
                    d[15][m] = a[m]
            }
        }
        return d
    }
    var Na = !1, G = function() {
        return $("#vc_key_seed").val()
    }, M;
    "Microsoft Internet Explorer" == navigator.appName ? (b.prototype.am = l,
    M = 30) : "Netscape" != navigator.appName ? (b.prototype.am = h,
    M = 26) : (b.prototype.am = q,
    M = 28);
    b.prototype.DB = M;
    b.prototype.DM = (1 << M) - 1;
    b.prototype.DV = 1 << M;
    b.prototype.FV = Math.pow(2, 52);
    b.prototype.F1 = 52 - M;
    b.prototype.F2 = 2 * M - 52;
    var kb = [], ba;
    M = 48;
    for (ba = 0; 9 >= ba; ++ba)
        kb[M++] = ba;
    M = 97;
    for (ba = 10; 36 > ba; ++ba)
        kb[M++] = ba;
    M = 65;
    for (ba = 10; 36 > ba; ++ba)
        kb[M++] = ba;
    t.prototype.convert = function(a) {
        return a.s < 0 || a.compareTo(this.m) >= 0 ? a.mod(this.m) : a
    }
    ;
    t.prototype.revert = function(a) {
        return a
    }
    ;
    t.prototype.reduce = function(a) {
        a.divRemTo(this.m, null, a)
    }
    ;
    t.prototype.mulTo = function(a, b, d) {
        a.multiplyTo(b, d);
        this.reduce(d)
    }
    ;
    t.prototype.sqrTo = function(a, b) {
        a.squareTo(b);
        this.reduce(b)
    }
    ;
    E.prototype.convert = function(a) {
        var d = f();
        a.abs().dlShiftTo(this.m.t, d);
        d.divRemTo(this.m, null, d);
        a.s < 0 && d.compareTo(b.ZERO) > 0 && this.m.subTo(d, d);
        return d
    }
    ;
    E.prototype.revert = function(a) {
        var b = f();
        a.copyTo(b);
        this.reduce(b);
        return b
    }
    ;
    E.prototype.reduce = function(a) {
        for (; a.t <= this.mt2; )
            a[a.t++] = 0;
        for (var b = 0; b < this.m.t; ++b) {
            var d = a[b] & 32767
              , e = d * this.mpl + ((d * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM
              , d = b + this.m.t;
            for (a[d] = a[d] + this.m.am(0, e, a, b, 0, this.m.t); a[d] >= a.DV; ) {
                a[d] = a[d] - a.DV;
                a[++d]++
            }
        }
        a.clamp();
        a.drShiftTo(this.m.t, a);
        a.compareTo(this.m) >= 0 && a.subTo(this.m, a)
    }
    ;
    E.prototype.mulTo = function(a, b, d) {
        a.multiplyTo(b, d);
        this.reduce(d)
    }
    ;
    E.prototype.sqrTo = function(a, b) {
        a.squareTo(b);
        this.reduce(b)
    }
    ;
    b.prototype.copyTo = function(a) {
        for (var b = this.t - 1; b >= 0; --b)
            a[b] = this[b];
        a.t = this.t;
        a.s = this.s
    }
    ;
    b.prototype.fromInt = function(a) {
        this.t = 1;
        this.s = a < 0 ? -1 : 0;
        a > 0 ? this[0] = a : a < -1 ? this[0] = a + this.DV : this.t = 0
    }
    ;
    b.prototype.fromString = function(a, d) {
        var e;
        if (d == 16)
            e = 4;
        else if (d == 8)
            e = 3;
        else if (d == 256)
            e = 8;
        else if (d == 2)
            e = 1;
        else if (d == 32)
            e = 5;
        else if (d == 4)
            e = 2;
        else {
            this.fromRadix(a, d);
            return
        }
        this.s = this.t = 0;
        for (var f = a.length, h = false, l = 0; --f >= 0; ) {
            var q;
            if (e == 8)
                q = a[f] & 255;
            else {
                q = kb[a.charCodeAt(f)];
                q = q == null ? -1 : q
            }
            if (q < 0)
                a.charAt(f) == "-" && (h = true);
            else {
                h = false;
                if (l == 0)
                    this[this.t++] = q;
                else if (l + e > this.DB) {
                    this[this.t - 1] = this[this.t - 1] | (q & (1 << this.DB - l) - 1) << l;
                    this[this.t++] = q >> this.DB - l
                } else
                    this[this.t - 1] = this[this.t - 1] | q << l;
                l = l + e;
                l >= this.DB && (l = l - this.DB)
            }
        }
        if (e == 8 && (a[0] & 128) != 0) {
            this.s = -1;
            l > 0 && (this[this.t - 1] = this[this.t - 1] | (1 << this.DB - l) - 1 << l)
        }
        this.clamp();
        h && b.ZERO.subTo(this, this)
    }
    ;
    b.prototype.clamp = function() {
        for (var a = this.s & this.DM; this.t > 0 && this[this.t - 1] == a; )
            --this.t
    }
    ;
    b.prototype.dlShiftTo = function(a, b) {
        var d;
        for (d = this.t - 1; d >= 0; --d)
            b[d + a] = this[d];
        for (d = a - 1; d >= 0; --d)
            b[d] = 0;
        b.t = this.t + a;
        b.s = this.s
    }
    ;
    b.prototype.drShiftTo = function(a, b) {
        for (var d = a; d < this.t; ++d)
            b[d - a] = this[d];
        b.t = Math.max(this.t - a, 0);
        b.s = this.s
    }
    ;
    b.prototype.lShiftTo = function(a, b) {
        var d = a % this.DB, e = this.DB - d, f = (1 << e) - 1, h = Math.floor(a / this.DB), l = this.s << d & this.DM, q;
        for (q = this.t - 1; q >= 0; --q) {
            b[q + h + 1] = this[q] >> e | l;
            l = (this[q] & f) << d
        }
        for (q = h - 1; q >= 0; --q)
            b[q] = 0;
        b[h] = l;
        b.t = this.t + h + 1;
        b.s = this.s;
        b.clamp()
    }
    ;
    b.prototype.rShiftTo = function(a, b) {
        b.s = this.s;
        var d = Math.floor(a / this.DB);
        if (d >= this.t)
            b.t = 0;
        else {
            var e = a % this.DB
              , f = this.DB - e
              , h = (1 << e) - 1;
            b[0] = this[d] >> e;
            for (var l = d + 1; l < this.t; ++l) {
                b[l - d - 1] = b[l - d - 1] | (this[l] & h) << f;
                b[l - d] = this[l] >> e
            }
            e > 0 && (b[this.t - d - 1] = b[this.t - d - 1] | (this.s & h) << f);
            b.t = this.t - d;
            b.clamp()
        }
    }
    ;
    b.prototype.subTo = function(a, b) {
        for (var d = 0, e = 0, f = Math.min(a.t, this.t); d < f; ) {
            e = e + (this[d] - a[d]);
            b[d++] = e & this.DM;
            e = e >> this.DB
        }
        if (a.t < this.t) {
            for (e = e - a.s; d < this.t; ) {
                e = e + this[d];
                b[d++] = e & this.DM;
                e = e >> this.DB
            }
            e = e + this.s
        } else {
            for (e = e + this.s; d < a.t; ) {
                e = e - a[d];
                b[d++] = e & this.DM;
                e = e >> this.DB
            }
            e = e - a.s
        }
        b.s = e < 0 ? -1 : 0;
        e < -1 ? b[d++] = this.DV + e : e > 0 && (b[d++] = e);
        b.t = d;
        b.clamp()
    }
    ;
    b.prototype.multiplyTo = function(a, d) {
        var e = this.abs()
          , f = a.abs()
          , h = e.t;
        for (d.t = h + f.t; --h >= 0; )
            d[h] = 0;
        for (h = 0; h < f.t; ++h)
            d[h + e.t] = e.am(0, f[h], d, h, 0, e.t);
        d.s = 0;
        d.clamp();
        this.s != a.s && b.ZERO.subTo(d, d)
    }
    ;
    b.prototype.squareTo = function(a) {
        for (var b = this.abs(), d = a.t = 2 * b.t; --d >= 0; )
            a[d] = 0;
        for (d = 0; d < b.t - 1; ++d) {
            var e = b.am(d, b[d], a, 2 * d, 0, 1);
            if ((a[d + b.t] = a[d + b.t] + b.am(d + 1, 2 * b[d], a, 2 * d + 1, e, b.t - d - 1)) >= b.DV) {
                a[d + b.t] = a[d + b.t] - b.DV;
                a[d + b.t + 1] = 1
            }
        }
        a.t > 0 && (a[a.t - 1] = a[a.t - 1] + b.am(d, b[d], a, 2 * d, 0, 1));
        a.s = 0;
        a.clamp()
    }
    ;
    b.prototype.divRemTo = function(a, d, e) {
        var h = a.abs();
        if (!(h.t <= 0)) {
            var l = this.abs();
            if (l.t < h.t) {
                d != null && d.fromInt(0);
                e != null && this.copyTo(e)
            } else {
                e == null && (e = f());
                var q = f()
                  , s = this.s
                  , a = a.s
                  , w = this.DB - r(h[h.t - 1]);
                if (w > 0) {
                    h.lShiftTo(w, q);
                    l.lShiftTo(w, e)
                } else {
                    h.copyTo(q);
                    l.copyTo(e)
                }
                h = q.t;
                l = q[h - 1];
                if (l != 0) {
                    var t = l * (1 << this.F1) + (h > 1 ? q[h - 2] >> this.F2 : 0)
                      , C = this.FV / t
                      , t = (1 << this.F1) / t
                      , B = 1 << this.F2
                      , E = e.t
                      , F = E - h
                      , G = d == null ? f() : d;
                    q.dlShiftTo(F, G);
                    if (e.compareTo(G) >= 0) {
                        e[e.t++] = 1;
                        e.subTo(G, e)
                    }
                    b.ONE.dlShiftTo(h, G);
                    for (G.subTo(q, q); q.t < h; )
                        q[q.t++] = 0;
                    for (; --F >= 0; ) {
                        var I = e[--E] == l ? this.DM : Math.floor(e[E] * C + (e[E - 1] + B) * t);
                        if ((e[E] = e[E] + q.am(0, I, e, F, 0, h)) < I) {
                            q.dlShiftTo(F, G);
                            for (e.subTo(G, e); e[E] < --I; )
                                e.subTo(G, e)
                        }
                    }
                    if (d != null) {
                        e.drShiftTo(h, d);
                        s != a && b.ZERO.subTo(d, d)
                    }
                    e.t = h;
                    e.clamp();
                    w > 0 && e.rShiftTo(w, e);
                    s < 0 && b.ZERO.subTo(e, e)
                }
            }
        }
    }
    ;
    b.prototype.invDigit = function() {
        if (this.t < 1)
            return 0;
        var a = this[0];
        if ((a & 1) == 0)
            return 0;
        var b = a & 3
          , b = b * (2 - (a & 15) * b) & 15
          , b = b * (2 - (a & 255) * b) & 255
          , b = b * (2 - ((a & 65535) * b & 65535)) & 65535
          , b = b * (2 - a * b % this.DV) % this.DV;
        return b > 0 ? this.DV - b : -b
    }
    ;
    b.prototype.isEven = function() {
        return (this.t > 0 ? this[0] & 1 : this.s) == 0
    }
    ;
    b.prototype.exp = function(a, d) {
        if (a > 4294967295 || a < 1)
            return b.ONE;
        var e = f()
          , h = f()
          , l = d.convert(this)
          , q = r(a) - 1;
        for (l.copyTo(e); --q >= 0; ) {
            d.sqrTo(e, h);
            if ((a & 1 << q) > 0)
                d.mulTo(h, l, e);
            else
                var s = e
                  , e = h
                  , h = s
        }
        return d.revert(e)
    }
    ;
    b.prototype.toString = function(a) {
        if (this.s < 0)
            return "-" + this.negate().toString(a);
        if (a == 16)
            a = 4;
        else if (a == 8)
            a = 3;
        else if (a == 2)
            a = 1;
        else if (a == 32)
            a = 5;
        else if (a == 4)
            a = 2;
        else
            return this.toRadix(a);
        var b = (1 << a) - 1, d, e = false, f = "", h = this.t, l = this.DB - h * this.DB % a;
        if (h-- > 0) {
            if (l < this.DB && (d = this[h] >> l) > 0) {
                e = true;
                f = "0123456789abcdefghijklmnopqrstuvwxyz".charAt(d)
            }
            for (; h >= 0; ) {
                if (l < a) {
                    d = (this[h] & (1 << l) - 1) << a - l;
                    d = d | this[--h] >> (l = l + (this.DB - a))
                } else {
                    d = this[h] >> (l = l - a) & b;
                    if (l <= 0) {
                        l = l + this.DB;
                        --h
                    }
                }
                d > 0 && (e = true);
                e && (f = f + "0123456789abcdefghijklmnopqrstuvwxyz".charAt(d))
            }
        }
        return e ? f : "0"
    }
    ;
    b.prototype.negate = function() {
        var a = f();
        b.ZERO.subTo(this, a);
        return a
    }
    ;
    b.prototype.abs = function() {
        return this.s < 0 ? this.negate() : this
    }
    ;
    b.prototype.compareTo = function(a) {
        var b = this.s - a.s;
        if (b != 0)
            return b;
        var d = this.t
          , b = d - a.t;
        if (b != 0)
            return this.s < 0 ? -b : b;
        for (; --d >= 0; )
            if ((b = this[d] - a[d]) != 0)
                return b;
        return 0
    }
    ;
    b.prototype.bitLength = function() {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + r(this[this.t - 1] ^ this.s & this.DM)
    }
    ;
    b.prototype.mod = function(a) {
        var d = f();
        this.abs().divRemTo(a, null, d);
        this.s < 0 && d.compareTo(b.ZERO) > 0 && a.subTo(d, d);
        return d
    }
    ;
    b.prototype.modPowInt = function(a, b) {
        var d;
        d = a < 256 || b.isEven() ? new t(b) : new E(b);
        return this.exp(a, d)
    }
    ;
    b.ZERO = s(0);
    b.ONE = s(1);
    R.prototype.init = function(a) {
        var b, d, e;
        for (b = 0; b < 256; ++b)
            this.S[b] = b;
        for (b = d = 0; b < 256; ++b) {
            d = d + this.S[b] + a[b % a.length] & 255;
            e = this.S[b];
            this.S[b] = this.S[d];
            this.S[d] = e
        }
        this.j = this.i = 0
    }
    ;
    R.prototype.next = function() {
        var a;
        this.i = this.i + 1 & 255;
        this.j = this.j + this.S[this.i] & 255;
        a = this.S[this.i];
        this.S[this.i] = this.S[this.j];
        this.S[this.j] = a;
        return this.S[a + this.S[this.i] & 255]
    }
    ;
    var va = 256, Oa, fa, aa;
    if (null == fa) {
        fa = [];
        aa = 0;
        if (window.crypto && window.crypto.getRandomValues) {
            ba = new Uint8Array(32);
            window.crypto.getRandomValues(ba);
            for (M = 0; 32 > M; ++M)
                fa[aa++] = ba[M]
        }
        if ("Netscape" == navigator.appName && "5" > navigator.appVersion && window.crypto) {
            ba = window.crypto.random(32);
            for (M = 0; M < ba.length; ++M)
                fa[aa++] = ba.charCodeAt(M) & 255
        }
        for (; aa < va; )
            M = Math.floor(65536 * Math.random()),
            fa[aa++] = M >>> 8,
            fa[aa++] = M & 255;
        aa = 0;
        F()
    }
    w.prototype.nextBytes = function(a) {
        var b;
        for (b = 0; b < a.length; ++b) {
            var d = a, e = b, f;
            if (Oa == null) {
                F();
                Oa = new R;
                Oa.init(fa);
                for (aa = 0; aa < fa.length; ++aa)
                    fa[aa] = 0;
                aa = 0
            }
            f = Oa.next();
            d[e] = f
        }
    }
    ;
    T.prototype.doPublic = function(a) {
        return a.modPowInt(this.e, this.n)
    }
    ;
    T.prototype.setPublic = function(a, d) {
        if (a != null && d != null && a.length > 0 && d.length > 0) {
            this.n = new b(a,16);
            this.e = parseInt(d, 16)
        } else
            alert("Invalid RSA public key")
    }
    ;
    T.prototype.encrypt = function(a) {
        var d, e = this.n.bitLength() + 7 >> 3;
        d = [];
        for (var e = 248, f = 0; f < a.length; f = f + 4)
            d[e++] = parseInt(a.substring(f, f + 4));
        e = 248;
        d[--e] = 0;
        a = new w;
        for (f = []; e > 2; ) {
            for (f[0] = 0; f[0] == 0; )
                a.nextBytes(f);
            d[--e] = f[0]
        }
        d[--e] = 2;
        d[--e] = 0;
        d = new b(d);
        if (d == null)
            return null;
        d = this.doPublic(d);
        if (d == null)
            return null;
        d = d.toString(16);
        return (d.length & 1) == 0 ? d : "0" + d
    }
    ;
    T.prototype.encrypt_back = function(a) {
        var d;
        d = this.n.bitLength() + 7 >> 3;
        if (d < a.length + 11) {
            alert("Message too long for RSA");
            d = null
        } else {
            for (var e = [], f = a.length - 1; f >= 0 && d > 0; ) {
                var h = a.charCodeAt(f--);
                if (h < 128)
                    e[--d] = h;
                else if (h > 127 && h < 2048) {
                    e[--d] = h & 63 | 128;
                    e[--d] = h >> 6 | 192
                } else {
                    e[--d] = h & 63 | 128;
                    e[--d] = h >> 6 & 63 | 128;
                    e[--d] = h >> 12 | 224
                }
            }
            e[--d] = 0;
            a = new w;
            for (f = []; d > 2; ) {
                for (f[0] = 0; f[0] == 0; )
                    a.nextBytes(f);
                e[--d] = f[0]
            }
            e[--d] = 2;
            e[--d] = 0;
            d = new b(e)
        }
        if (d == null)
            return null;
        d = this.doPublic(d);
        if (d == null)
            return null;
        d = d.toString(16);
        return (d.length & 1) == 0 ? d : "0" + d
    }
    ;
    var lb = ""
      , zb = ""
      , Pa = "";
    M = "12345678".split("");
    M.sort(function() {
        return Math.random() > 0.5 ? -1 : 1
    });
    lb = M[0] + M[1] + M[2] + M[3] + M[4] + M[5] + M[6] + M[7];
    zb = M[1] + M[2] + M[3] + M[4] + M[5] + M[6] + M[7] + M[0];
    Pa = M[2] + M[3] + M[4] + M[5] + M[6] + M[7] + M[0] + M[1];
    M = function() {
        var a;
        a || (a = {});
        (function() {
            function b(a) {
                return a < 10 ? "0" + a : a
            }
            function d(a) {
                h.lastIndex = 0;
                return h.test(a) ? '"' + a.replace(h, function(a) {
                    var b = r[a];
                    return typeof b === "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + a + '"'
            }
            function e(a, b) {
                var f, g, h, p, r = l, w, t = b[a];
                t && (typeof t === "object" && typeof t.toJSON === "function") && (t = t.toJSON(a));
                typeof s === "function" && (t = s.call(b, a, t));
                switch (typeof t) {
                case "string":
                    return d(t);
                case "number":
                    return isFinite(t) ? String(t) : "null";
                case "boolean":
                case "null":
                    return String(t);
                case "object":
                    if (!t)
                        return "null";
                    l = l + q;
                    w = [];
                    if (Object.prototype.toString.apply(t) === "[object Array]") {
                        p = t.length;
                        for (f = 0; f < p; f = f + 1)
                            w[f] = e(f, t) || "null";
                        h = w.length === 0 ? "[]" : l ? "[\n" + l + w.join(",\n" + l) + "\n" + r + "]" : "[" + w.join(",") + "]";
                        l = r;
                        return h
                    }
                    if (s && typeof s === "object") {
                        p = s.length;
                        for (f = 0; f < p; f = f + 1)
                            if (typeof s[f] === "string") {
                                g = s[f];
                                (h = e(g, t)) && w.push(d(g) + (l ? ": " : ":") + h)
                            }
                    } else
                        for (g in t)
                            if (Object.prototype.hasOwnProperty.call(t, g))
                                (h = e(g, t)) && w.push(d(g) + (l ? ": " : ":") + h);
                    h = w.length === 0 ? "{}" : l ? "{\n" + l + w.join(",\n" + l) + "\n" + r + "}" : "{" + w.join(",") + "}";
                    l = r;
                    return h
                }
            }
            if (typeof Date.prototype.toJSON !== "function") {
                Date.prototype.toJSON = function() {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + b(this.getUTCMonth() + 1) + "-" + b(this.getUTCDate()) + "T" + b(this.getUTCHours()) + ":" + b(this.getUTCMinutes()) + ":" + b(this.getUTCSeconds()) + "Z" : null
                }
                ;
                String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                    return this.valueOf()
                }
            }
            var f = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, h = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, l, q, r = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            }, s;
            if (typeof a.stringify !== "function")
                a.stringify = function(a, b, d) {
                    var f;
                    q = l = "";
                    if (typeof d === "number")
                        for (f = 0; f < d; f = f + 1)
                            q = q + " ";
                    else
                        typeof d === "string" && (q = d);
                    if ((s = b) && typeof b !== "function" && (typeof b !== "object" || typeof b.length !== "number"))
                        throw Error("JSON.stringify");
                    return e("", {
                        "": a
                    })
                }
                ;
            if (typeof a.parse !== "function")
                a.parse = function(a, b) {
                    function d(a, e) {
                        var f, g, h = a[e];
                        if (h && typeof h === "object")
                            for (f in h)
                                if (Object.prototype.hasOwnProperty.call(h, f)) {
                                    g = d(h, f);
                                    g !== void 0 ? h[f] = g : delete h[f]
                                }
                        return b.call(a, e, h)
                    }
                    var e, a = String(a);
                    f.lastIndex = 0;
                    f.test(a) && (a = a.replace(f, function(a) {
                        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                    }));
                    if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                        e = eval("(" + a + ")");
                        return typeof b === "function" ? d({
                            "": e
                        }, "") : e
                    }
                    throw new SyntaxError("JSON.parse");
                }
        }
        )();
        return {
            do_RSA_encrypt: function(b, e) {
                $("#encryptKey").remove();
                try {
                    b.append('<input type="hidden" name="encryptKey" id="encryptKey" />');
                    var f = {};
                    if ($.trim($("#expireYear").val()) == "" && $.trim($("#expireMonth").val()) == "" && $.trim($("#cvn2").val()) == "")
                        $("#encryptKey").val("");
                    else {
                        if ((!$("#expireYear").is(":hidden") || $("#display-CardExpire-text").length > 0 && !$("#display-CardExpire-text").is(":hidden")) && $.trim($("#expireYear").val()) !== "")
                            f.expireYear = $("#expireYear").val();
                        if ((!$("#expireMonth").is(":hidden") || $("#display-CardExpire-text").length > 0 && !$("#display-CardExpire-text").is(":hidden")) && $.trim($("#expireMonth").val()) !== "")
                            f.expireMonth = $("#expireMonth").val();
                        if ($("#cvn2").length > 0 && $.trim($("#cvn2").val()) !== "")
                            f.cvn2 = $("#cvn2").val();
                        $("#encryptKey").val(d(a.stringify(f)))
                    }
                    if (!e) {
                        $("#expireYear").remove();
                        $("#expireMonth").remove();
                        $("#cvn2").remove();
                        $("#padCvn2").length > 0 && $("#padCvn2").remove()
                    }
                } catch (h) {}
                return true
            },
            do_ajax_RSA_encrypt: function(b) {
                return d(a.stringify(b))
            }
        }
    }();
    return {
        init: function(a) {
            window._padAtmParam = a
        },
        showKeybord: function(b) {
            var d = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            if (b == 0) {
                d.sort(function() {
                    return Math.random() > 0.5 ? -1 : 1
                });
                d.push("\u5b8c\u6210", "");
                b = d[d.length - 3];
                d[d.length - 3] = d[d.length - 2];
                d[d.length - 2] = b;
                for (var b = [], e = document.getElementById("pad_keyboard-row1").getElementsByTagName("div"), f = 0; f < 3; f++)
                    b.push(e[f]);
                e = document.getElementById("pad_keyboard-row2").getElementsByTagName("div");
                for (f = 0; f < 3; f++)
                    b.push(e[f]);
                e = document.getElementById("pad_keyboard-row3").getElementsByTagName("div");
                for (f = 0; f < 3; f++)
                    b.push(e[f]);
                e = document.getElementById("pad_keyboard-row4").getElementsByTagName("div");
                for (f = 0; f < 3; f++)
                    b.push(e[f]);
                for (f = 0; f < d.length; f++)
                    b[f].innerText = d[f];
                document.getElementById("pad_keybord").style.display = "";
                document.getElementById("pad_atm_password").innerText = "";
                d = $(".pad_item-password").offset();
                b = $("#pad_keybord").height();
                $(".pad_pass-clear").removeClass("hide");
                f = $(window).height();
                d = b + d.top - f;
                window.scrollTo(0, d > 0 ? d + 80 : 0)
            } else {
                document.getElementById("pad_keybord").style.display = "none";
                $(".pad_pass-clear").addClass("hide");
                G();
                a()
            }
        },
        encryptValue: function(b) {
            G();
            var d = document.getElementById("pad_atm_password").innerText;
            document.getElementById("atmPassword");
            var e = b.innerText;
            if (d == "\u94f6\u884c\u5361\u4ea4\u6613\u5bc6\u7801" || !Na) {
                d = "";
                document.getElementById("atmPassword").value = "";
                document.getElementById("pad_atm_password").innerText = ""
            }
            if (e == "\u5b8c\u6210")
                a();
            else if (e == "") {
                document.getElementById("pad_atm_password").innerText = d.slice(0, -1);
                b = document.getElementById("atmPassword").value;
                document.getElementById("atmPassword").value = b.substring(0, b.length - 16)
            } else if (d.length != 6) {
                document.getElementById("pad_atm_password").className = "pad_down-password";
                document.getElementById("pad_atm_password").innerText = d + "*";
                var b = document.getElementById("atmPassword").value, d = document.getElementById("atmPassword"), f = e, e = lb, h = zb, l = Pa, q = f.length, r = "", s, t, w, B, E, F;
                if (e != null && e != "") {
                    s = I(e);
                    B = s.length
                }
                if (h != null && h != "") {
                    t = I(h);
                    E = t.length
                }
                if (l != null && l != "") {
                    w = I(l);
                    F = w.length
                }
                if (q > 0)
                    if (q < 4) {
                        var r = K(f), x;
                        if (e != null && e != "" && h != null && h != "" && l != null && l != "") {
                            var u;
                            x = r;
                            for (u = 0; u < B; u++)
                                x = C(x, s[u]);
                            for (u = 0; u < E; u++)
                                x = C(x, t[u]);
                            for (u = 0; u < F; u++)
                                x = C(x, w[u])
                        } else if (e != null && e != "" && h != null && h != "") {
                            x = r;
                            for (u = 0; u < B; u++)
                                x = C(x, s[u]);
                            for (u = 0; u < E; u++)
                                x = C(x, t[u])
                        } else if (e != null && e != "") {
                            x = r;
                            for (u = 0; u < B; u++)
                                x = C(x, s[u])
                        }
                        r = U(x)
                    } else {
                        for (var M = parseInt(q / 4), P = q % 4, R = 0, R = 0; R < M; R++) {
                            u = f.substring(R * 4 + 0, R * 4 + 4);
                            u = K(u);
                            if (e != null && e != "" && h != null && h != "" && l != null && l != "") {
                                x = u;
                                for (u = 0; u < B; u++)
                                    x = C(x, s[u]);
                                for (u = 0; u < E; u++)
                                    x = C(x, t[u]);
                                for (u = 0; u < F; u++)
                                    x = C(x, w[u])
                            } else if (e != null && e != "" && h != null && h != "") {
                                x = u;
                                for (u = 0; u < B; u++)
                                    x = C(x, s[u]);
                                for (u = 0; u < E; u++)
                                    x = C(x, t[u])
                            } else if (e != null && e != "") {
                                x = u;
                                for (u = 0; u < B; u++)
                                    x = C(x, s[u])
                            }
                            r = r + U(x)
                        }
                        if (P > 0) {
                            f = f.substring(M * 4 + 0, q);
                            u = K(f);
                            if (e != null && e != "" && h != null && h != "" && l != null && l != "") {
                                x = u;
                                for (u = 0; u < B; u++)
                                    x = C(x, s[u]);
                                for (u = 0; u < E; u++)
                                    x = C(x, t[u]);
                                for (u = 0; u < F; u++)
                                    x = C(x, w[u])
                            } else if (e != null && e != "" && h != null && h != "") {
                                x = u;
                                for (u = 0; u < B; u++)
                                    x = C(x, s[u]);
                                for (u = 0; u < E; u++)
                                    x = C(x, t[u])
                            } else if (e != null && e != "") {
                                x = u;
                                for (u = 0; u < B; u++)
                                    x = C(x, s[u])
                            }
                            r = r + U(x)
                        }
                    }
                d.value = b + r;
                Na = true
            }
        },
        complete: a,
        do_RSA_encrypt: M.do_RSA_encrypt,
        do_ajax_RSA_encrypt: M.do_ajax_RSA_encrypt
    }
}();

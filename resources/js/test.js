/*! For license information please see checkout.min.js.LICENSE.txt */
(() => {
    var e = {
            303: (e, t, n) => {
                e.exports = n(457)
            },
            402: e => {
                ! function (t) {
                    if ("undefined" != typeof window) {
                        var n = !0,
                            r = "",
                            o = 0,
                            i = "",
                            s = null,
                            a = "",
                            l = !1,
                            c = {
                                resize: 1,
                                click: 1
                            },
                            u = 128,
                            d = !0,
                            f = 1,
                            h = "bodyOffset",
                            p = h,
                            g = !0,
                            m = "",
                            v = {},
                            y = 32,
                            w = null,
                            b = !1,
                            _ = !1,
                            M = "[iFrameSizer]",
                            D = M.length,
                            x = "",
                            C = {
                                max: 1,
                                min: 1,
                                bodyScroll: 1,
                                documentElementScroll: 1
                            },
                            E = "child",
                            I = window.parent,
                            T = "*",
                            k = 0,
                            S = !1,
                            A = null,
                            O = 16,
                            N = 1,
                            P = "scroll",
                            R = P,
                            j = window,
                            F = function () {
                                ie("onMessage function not defined")
                            },
                            V = function () {},
                            L = function () {},
                            H = {
                                height: function () {
                                    return ie("Custom height calculation function not defined"), document.documentElement.offsetHeight
                                },
                                width: function () {
                                    return ie("Custom width calculation function not defined"), document.body.scrollWidth
                                }
                            },
                            $ = {},
                            B = !1;
                        try {
                            var U = Object.create({}, {
                                passive: {
                                    get: function () {
                                        B = !0
                                    }
                                }
                            });
                            window.addEventListener("test", ee, U), window.removeEventListener("test", ee, U)
                        } catch (e) {}
                        var z, W, q, Q, Z, G, J, K = {
                                bodyOffset: function () {
                                    return document.body.offsetHeight + me("marginTop") + me("marginBottom")
                                },
                                offset: function () {
                                    return K.bodyOffset()
                                },
                                bodyScroll: function () {
                                    return document.body.scrollHeight
                                },
                                custom: function () {
                                    return H.height()
                                },
                                documentElementOffset: function () {
                                    return document.documentElement.offsetHeight
                                },
                                documentElementScroll: function () {
                                    return document.documentElement.scrollHeight
                                },
                                max: function () {
                                    return Math.max.apply(null, ye(K))
                                },
                                min: function () {
                                    return Math.min.apply(null, ye(K))
                                },
                                grow: function () {
                                    return K.max()
                                },
                                lowestElement: function () {
                                    return Math.max(K.bodyOffset() || K.documentElementOffset(), ve("bottom", be()))
                                },
                                taggedElement: function () {
                                    return we("bottom", "data-iframe-height")
                                }
                            },
                            Y = {
                                bodyScroll: function () {
                                    return document.body.scrollWidth
                                },
                                bodyOffset: function () {
                                    return document.body.offsetWidth
                                },
                                custom: function () {
                                    return H.width()
                                },
                                documentElementScroll: function () {
                                    return document.documentElement.scrollWidth
                                },
                                documentElementOffset: function () {
                                    return document.documentElement.offsetWidth
                                },
                                scroll: function () {
                                    return Math.max(Y.bodyScroll(), Y.documentElementScroll())
                                },
                                max: function () {
                                    return Math.max.apply(null, ye(Y))
                                },
                                min: function () {
                                    return Math.min.apply(null, ye(Y))
                                },
                                rightMostElement: function () {
                                    return ve("right", be())
                                },
                                taggedElement: function () {
                                    return we("right", "data-iframe-width")
                                }
                            },
                            X = (z = _e, Z = null, G = 0, J = function () {
                                G = Date.now(), Z = null, Q = z.apply(W, q), Z || (W = q = null)
                            }, function () {
                                var e = Date.now();
                                G || (G = e);
                                var t = O - (e - G);
                                return W = this, q = arguments, t <= 0 || t > O ? (Z && (clearTimeout(Z), Z = null), G = e, Q = z.apply(W, q), Z || (W = q = null)) : Z || (Z = setTimeout(J, t)), Q
                            });
                        te(window, "message", (function (t) {
                            var n = {
                                init: function () {
                                    m = t.data, I = t.source, se(), d = !1, setTimeout((function () {
                                        g = !1
                                    }), u)
                                },
                                reset: function () {
                                    g ? oe("Page reset ignored by init") : (oe("Page size reset by host page"), xe("resetPage"))
                                },
                                resize: function () {
                                    Me("resizeParent", "Parent window requested size check")
                                },
                                moveToAnchor: function () {
                                    v.findTarget(o())
                                },
                                inPageLink: function () {
                                    this.moveToAnchor()
                                },
                                pageInfo: function () {
                                    var e = o();
                                    oe("PageInfoFromParent called from parent: " + e), L(JSON.parse(e)), oe(" --")
                                },
                                message: function () {
                                    var e = o();
                                    oe("onMessage called from parent: " + e), F(JSON.parse(e)), oe(" --")
                                }
                            };

                            function r() {
                                return t.data.split("]")[1].split(":")[0]
                            }

                            function o() {
                                return t.data.substr(t.data.indexOf(":") + 1)
                            }

                            function i() {
                                return t.data.split(":")[2] in {
                                    true: 1,
                                    false: 1
                                }
                            }

                            function s() {
                                var o = r();
                                o in n ? n[o]() : !e.exports && "iFrameResize" in window || "jQuery" in window && "iFrameResize" in window.jQuery.prototype || i() || ie("Unexpected message (" + t.data + ")")
                            }
                            M === ("" + t.data).substr(0, D) && (!1 === d ? s() : i() ? n.init() : oe('Ignored message of type "' + r() + '". Received before initialization.'))
                        })), te(window, "readystatechange", Ie), Ie()
                    }

                    function ee() {}

                    function te(e, t, n, r) {
                        e.addEventListener(t, n, !!B && (r || {}))
                    }

                    function ne(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    }

                    function re(e) {
                        return M + "[" + x + "] " + e
                    }

                    function oe(e) {
                        b && "object" == typeof window.console && console.log(re(e))
                    }

                    function ie(e) {
                        "object" == typeof window.console && console.warn(re(e))
                    }

                    function se() {
                        var e;
                        ! function () {
                            function e(e) {
                                return "true" === e
                            }
                            var s = m.substr(D).split(":");
                            x = s[0], o = t !== s[1] ? Number(s[1]) : o, l = t !== s[2] ? e(s[2]) : l, b = t !== s[3] ? e(s[3]) : b, y = t !== s[4] ? Number(s[4]) : y, n = t !== s[6] ? e(s[6]) : n, i = s[7], p = t !== s[8] ? s[8] : p, r = s[9], a = s[10], k = t !== s[11] ? Number(s[11]) : k, v.enable = t !== s[12] && e(s[12]), E = t !== s[13] ? s[13] : E, R = t !== s[14] ? s[14] : R, _ = t !== s[15] ? Boolean(s[15]) : _
                        }(), oe("Initialising iFrame (" + window.location.href + ")"),
                            function () {
                                function e() {
                                    var e = window.iFrameResizer;
                                    oe("Reading data from page: " + JSON.stringify(e)), Object.keys(e).forEach(ae, e), F = "onMessage" in e ? e.onMessage : F, V = "onReady" in e ? e.onReady : V, T = "targetOrigin" in e ? e.targetOrigin : T, p = "heightCalculationMethod" in e ? e.heightCalculationMethod : p, R = "widthCalculationMethod" in e ? e.widthCalculationMethod : R
                                }

                                function t(e, t) {
                                    return "function" == typeof e && (oe("Setup custom " + t + "CalcMethod"), H[t] = e, e = "custom"), e
                                }
                                "iFrameResizer" in window && Object === window.iFrameResizer.constructor && (e(), p = t(p, "height"), R = t(R, "width"));
                                oe("TargetOrigin for parent set to: " + T)
                            }(),
                            function () {
                                t === i && (i = o + "px");
                                le("margin", function (e, t) {
                                    -1 !== t.indexOf("-") && (ie("Negative CSS value ignored for " + e), t = "");
                                    return t
                                }("margin", i))
                            }(), le("background", r), le("padding", a), (e = document.createElement("div")).style.clear = "both", e.style.display = "block", e.style.height = "0", document.body.appendChild(e), fe(), he(), document.documentElement.style.height = "", document.body.style.height = "", oe('HTML & body height set to "auto"'), oe("Enable public methods"), j.parentIFrame = {
                                autoResize: function (e) {
                                    return !0 === e && !1 === n ? (n = !0, pe()) : !1 === e && !0 === n && (n = !1, ue("remove"), null !== s && s.disconnect(), clearInterval(w)), Ee(0, 0, "autoResize", JSON.stringify(n)), n
                                },
                                close: function () {
                                    Ee(0, 0, "close")
                                },
                                getId: function () {
                                    return x
                                },
                                getPageInfo: function (e) {
                                    "function" == typeof e ? (L = e, Ee(0, 0, "pageInfo")) : (L = function () {}, Ee(0, 0, "pageInfoStop"))
                                },
                                moveToAnchor: function (e) {
                                    v.findTarget(e)
                                },
                                reset: function () {
                                    Ce("parentIFrame.reset")
                                },
                                scrollTo: function (e, t) {
                                    Ee(t, e, "scrollTo")
                                },
                                scrollToOffset: function (e, t) {
                                    Ee(t, e, "scrollToOffset")
                                },
                                sendMessage: function (e, t) {
                                    Ee(0, 0, "message", JSON.stringify(e), t)
                                },
                                setHeightCalculationMethod: function (e) {
                                    p = e, fe()
                                },
                                setWidthCalculationMethod: function (e) {
                                    R = e, he()
                                },
                                setTargetOrigin: function (e) {
                                    oe("Set targetOrigin: " + e), T = e
                                },
                                size: function (e, t) {
                                    Me("size", "parentIFrame.size(" + (e || "") + (t ? "," + t : "") + ")", e, t)
                                }
                            },
                            function () {
                                if (!0 !== _) return;

                                function e(e) {
                                    Ee(0, 0, e.type, e.screenY + ":" + e.screenX)
                                }

                                function t(t, n) {
                                    oe("Add event listener: " + n), te(window.document, t, e)
                                }
                                t("mouseenter", "Mouse Enter"), t("mouseleave", "Mouse Leave")
                            }(), pe(), v = function () {
                                function e() {
                                    return {
                                        x: window.pageXOffset !== t ? window.pageXOffset : document.documentElement.scrollLeft,
                                        y: window.pageYOffset !== t ? window.pageYOffset : document.documentElement.scrollTop
                                    }
                                }

                                function n(t) {
                                    var n = t.getBoundingClientRect(),
                                        r = e();
                                    return {
                                        x: parseInt(n.left, 10) + parseInt(r.x, 10),
                                        y: parseInt(n.top, 10) + parseInt(r.y, 10)
                                    }
                                }

                                function r(e) {
                                    function r(e) {
                                        var t = n(e);
                                        oe("Moving to in page link (#" + o + ") at x: " + t.x + " y: " + t.y), Ee(t.y, t.x, "scrollToOffset")
                                    }
                                    var o = e.split("#")[1] || e,
                                        i = decodeURIComponent(o),
                                        s = document.getElementById(i) || document.getElementsByName(i)[0];
                                    t !== s ? r(s) : (oe("In page link (#" + o + ") not found in iFrame, so sending to parent"), Ee(0, 0, "inPageLink", "#" + o))
                                }

                                function o() {
                                    var e = window.location.hash,
                                        t = window.location.href;
                                    "" !== e && "#" !== e && r(t)
                                }

                                function i() {
                                    function e(e) {
                                        function t(e) {
                                            e.preventDefault(), r(this.getAttribute("href"))
                                        }
                                        "#" !== e.getAttribute("href") && te(e, "click", t)
                                    }
                                    Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), e)
                                }

                                function s() {
                                    te(window, "hashchange", o)
                                }

                                function a() {
                                    setTimeout(o, u)
                                }

                                function l() {
                                    Array.prototype.forEach && document.querySelectorAll ? (oe("Setting up location.hash handlers"), i(), s(), a()) : ie("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")
                                }
                                v.enable ? l() : oe("In page linking not enabled");
                                return {
                                    findTarget: r
                                }
                            }(), Me("init", "Init message from host page"), V()
                    }

                    function ae(e) {
                        var t = e.split("Callback");
                        if (2 === t.length) {
                            var n = "on" + t[0].charAt(0).toUpperCase() + t[0].slice(1);
                            this[n] = this[e], delete this[e], ie("Deprecated: '" + e + "' has been renamed '" + n + "'. The old method will be removed in the next major version.")
                        }
                    }

                    function le(e, n) {
                        t !== n && "" !== n && "null" !== n && (document.body.style[e] = n, oe("Body " + e + ' set to "' + n + '"'))
                    }

                    function ce(e) {
                        var t = {
                            add: function (t) {
                                function n() {
                                    Me(e.eventName, e.eventType)
                                }
                                $[t] = n, te(window, t, n, {
                                    passive: !0
                                })
                            },
                            remove: function (e) {
                                var t, n, r, o = $[e];
                                delete $[e], t = window, n = e, r = o, t.removeEventListener(n, r, !1)
                            }
                        };
                        e.eventNames && Array.prototype.map ? (e.eventName = e.eventNames[0], e.eventNames.map(t[e.method])) : t[e.method](e.eventName), oe(ne(e.method) + " event listener: " + e.eventType)
                    }

                    function ue(e) {
                        ce({
                            method: e,
                            eventType: "Animation Start",
                            eventNames: ["animationstart", "webkitAnimationStart"]
                        }), ce({
                            method: e,
                            eventType: "Animation Iteration",
                            eventNames: ["animationiteration", "webkitAnimationIteration"]
                        }), ce({
                            method: e,
                            eventType: "Animation End",
                            eventNames: ["animationend", "webkitAnimationEnd"]
                        }), ce({
                            method: e,
                            eventType: "Input",
                            eventName: "input"
                        }), ce({
                            method: e,
                            eventType: "Mouse Up",
                            eventName: "mouseup"
                        }), ce({
                            method: e,
                            eventType: "Mouse Down",
                            eventName: "mousedown"
                        }), ce({
                            method: e,
                            eventType: "Orientation Change",
                            eventName: "orientationchange"
                        }), ce({
                            method: e,
                            eventType: "Print",
                            eventName: ["afterprint", "beforeprint"]
                        }), ce({
                            method: e,
                            eventType: "Ready State Change",
                            eventName: "readystatechange"
                        }), ce({
                            method: e,
                            eventType: "Touch Start",
                            eventName: "touchstart"
                        }), ce({
                            method: e,
                            eventType: "Touch End",
                            eventName: "touchend"
                        }), ce({
                            method: e,
                            eventType: "Touch Cancel",
                            eventName: "touchcancel"
                        }), ce({
                            method: e,
                            eventType: "Transition Start",
                            eventNames: ["transitionstart", "webkitTransitionStart", "MSTransitionStart", "oTransitionStart", "otransitionstart"]
                        }), ce({
                            method: e,
                            eventType: "Transition Iteration",
                            eventNames: ["transitioniteration", "webkitTransitionIteration", "MSTransitionIteration", "oTransitionIteration", "otransitioniteration"]
                        }), ce({
                            method: e,
                            eventType: "Transition End",
                            eventNames: ["transitionend", "webkitTransitionEnd", "MSTransitionEnd", "oTransitionEnd", "otransitionend"]
                        }), "child" === E && ce({
                            method: e,
                            eventType: "IFrame Resized",
                            eventName: "resize"
                        })
                    }

                    function de(e, t, n, r) {
                        return t !== e && (e in n || (ie(e + " is not a valid option for " + r + "CalculationMethod."), e = t), oe(r + ' calculation method set to "' + e + '"')), e
                    }

                    function fe() {
                        p = de(p, h, K, "height")
                    }

                    function he() {
                        R = de(R, P, Y, "width")
                    }

                    function pe() {
                        var e;
                        !0 === n ? (ue("add"), e = 0 > y, window.MutationObserver || window.WebKitMutationObserver ? e ? ge() : s = function () {
                            function e(e) {
                                function t(e) {
                                    !1 === e.complete && (oe("Attach listeners to " + e.src), e.addEventListener("load", o, !1), e.addEventListener("error", i, !1), l.push(e))
                                }
                                "attributes" === e.type && "src" === e.attributeName ? t(e.target) : "childList" === e.type && Array.prototype.forEach.call(e.target.querySelectorAll("img"), t)
                            }

                            function t(e) {
                                l.splice(l.indexOf(e), 1)
                            }

                            function n(e) {
                                oe("Remove listeners from " + e.src), e.removeEventListener("load", o, !1), e.removeEventListener("error", i, !1), t(e)
                            }

                            function r(e, t, r) {
                                n(e.target), Me(t, r + ": " + e.target.src)
                            }

                            function o(e) {
                                r(e, "imageLoad", "Image loaded")
                            }

                            function i(e) {
                                r(e, "imageLoadFailed", "Image load failed")
                            }

                            function s(t) {
                                Me("mutationObserver", "mutationObserver: " + t[0].target + " " + t[0].type), t.forEach(e)
                            }

                            function a() {
                                var e = document.querySelector("body"),
                                    t = {
                                        attributes: !0,
                                        attributeOldValue: !1,
                                        characterData: !0,
                                        characterDataOldValue: !1,
                                        childList: !0,
                                        subtree: !0
                                    };
                                return u = new c(s), oe("Create body MutationObserver"), u.observe(e, t), u
                            }
                            var l = [],
                                c = window.MutationObserver || window.WebKitMutationObserver,
                                u = a();
                            return {
                                disconnect: function () {
                                    "disconnect" in u && (oe("Disconnect body MutationObserver"), u.disconnect(), l.forEach(n))
                                }
                            }
                        }() : (oe("MutationObserver not supported in this browser!"), ge())) : oe("Auto Resize disabled")
                    }

                    function ge() {
                        0 !== y && (oe("setInterval: " + y + "ms"), w = setInterval((function () {
                            Me("interval", "setInterval: " + y)
                        }), Math.abs(y)))
                    }

                    function me(e, t) {
                        var n = 0;
                        return t = t || document.body, n = null !== (n = document.defaultView.getComputedStyle(t, null)) ? n[e] : 0, parseInt(n, 10)
                    }

                    function ve(e, t) {
                        for (var n = t.length, r = 0, o = 0, i = ne(e), s = Date.now(), a = 0; a < n; a++)(r = t[a].getBoundingClientRect()[e] + me("margin" + i, t[a])) > o && (o = r);
                        return s = Date.now() - s, oe("Parsed " + n + " HTML elements"), oe("Element position calculated in " + s + "ms"),
                            function (e) {
                                e > O / 2 && oe("Event throttle increased to " + (O = 2 * e) + "ms")
                            }(s), o
                    }

                    function ye(e) {
                        return [e.bodyOffset(), e.bodyScroll(), e.documentElementOffset(), e.documentElementScroll()]
                    }

                    function we(e, t) {
                        var n = document.querySelectorAll("[" + t + "]");
                        return 0 === n.length && (ie("No tagged elements (" + t + ") found on page"), document.querySelectorAll("body *")), ve(e, n)
                    }

                    function be() {
                        return document.querySelectorAll("body *")
                    }

                    function _e(e, n, r, o) {
                        var i, s;
                        ! function () {
                            function e(e, t) {
                                return !(Math.abs(e - t) <= k)
                            }
                            return i = t !== r ? r : K[p](), s = t !== o ? o : Y[R](), e(f, i) || l && e(N, s)
                        }() && "init" !== e ? !(e in {
                            init: 1,
                            interval: 1,
                            size: 1
                        }) && (p in C || l && R in C) ? Ce(n) : e in {
                            interval: 1
                        } || oe("No change in size detected") : (De(), Ee(f = i, N = s, e))
                    }

                    function Me(e, t, n, r) {
                        S && e in c ? oe("Trigger event cancelled: " + e) : (e in {
                            reset: 1,
                            resetPage: 1,
                            init: 1
                        } || oe("Trigger event: " + t), "init" === e ? _e(e, t, n, r) : X(e, t, n, r))
                    }

                    function De() {
                        S || (S = !0, oe("Trigger event lock on")), clearTimeout(A), A = setTimeout((function () {
                            S = !1, oe("Trigger event lock off"), oe("--")
                        }), u)
                    }

                    function xe(e) {
                        f = K[p](), N = Y[R](), Ee(f, N, e)
                    }

                    function Ce(e) {
                        var t = p;
                        p = h, oe("Reset trigger event: " + e), De(), xe("reset"), p = t
                    }

                    function Ee(e, n, r, o, i) {
                        var s;
                        t === i ? i = T : oe("Message targetOrigin: " + i), oe("Sending message to host page (" + (s = x + ":" + e + ":" + n + ":" + r + (t !== o ? ":" + o : "")) + ")"), I.postMessage(M + s, i)
                    }

                    function Ie() {
                        "loading" !== document.readyState && window.parent.postMessage("[iFrameResizerChild]Ready", "*")
                    }
                }()
            },
            702: (e, t) => {
                var n, r, o;
                ! function (i) {
                    if ("undefined" != typeof window) {
                        var s, a = 0,
                            l = !1,
                            c = !1,
                            u = "message".length,
                            d = "[iFrameSizer]",
                            f = d.length,
                            h = null,
                            p = window.requestAnimationFrame,
                            g = {
                                max: 1,
                                scroll: 1,
                                bodyScroll: 1,
                                documentElementScroll: 1
                            },
                            m = {},
                            v = null,
                            y = {
                                autoResize: !0,
                                bodyBackground: null,
                                bodyMargin: null,
                                bodyMarginV1: 8,
                                bodyPadding: null,
                                checkOrigin: !0,
                                inPageLinks: !1,
                                enablePublicMethods: !0,
                                heightCalculationMethod: "bodyOffset",
                                id: "iFrameResizer",
                                interval: 32,
                                log: !1,
                                maxHeight: 1 / 0,
                                maxWidth: 1 / 0,
                                minHeight: 0,
                                minWidth: 0,
                                mouseEvents: !0,
                                resizeFrom: "parent",
                                scrolling: !1,
                                sizeHeight: !0,
                                sizeWidth: !1,
                                warningTimeout: 5e3,
                                tolerance: 0,
                                widthCalculationMethod: "scroll",
                                onClose: function () {
                                    return !0
                                },
                                onClosed: function () {},
                                onInit: function () {},
                                onMessage: function () {
                                    I("onMessage function not defined")
                                },
                                onMouseEnter: function () {},
                                onMouseLeave: function () {},
                                onResized: function () {},
                                onScroll: function () {
                                    return !0
                                }
                            },
                            w = {};
                        window.jQuery && ((s = window.jQuery).fn ? s.fn.iFrameResize || (s.fn.iFrameResize = function (e) {
                            return this.filter("iframe").each((function (t, n) {
                                $(n, e)
                            })).end()
                        }) : E("", "Unable to bind to jQuery, it is not fully loaded.")), r = [], (o = "function" == typeof (n = q) ? n.apply(t, r) : n) === i || (e.exports = o), window.iFrameResize = window.iFrameResize || q()
                    }

                    function b() {
                        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
                    }

                    function _(e, t, n) {
                        e.addEventListener(t, n, !1)
                    }

                    function M(e, t, n) {
                        e.removeEventListener(t, n, !1)
                    }

                    function D(e) {
                        return d + "[" + function (e) {
                            var t = "Host page: " + e;
                            return window.top !== window.self && (t = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + e : "Nested host page: " + e), t
                        }(e) + "]"
                    }

                    function x(e) {
                        return m[e] ? m[e].log : l
                    }

                    function C(e, t) {
                        T("log", e, t, x(e))
                    }

                    function E(e, t) {
                        T("info", e, t, x(e))
                    }

                    function I(e, t) {
                        T("warn", e, t, !0)
                    }

                    function T(e, t, n, r) {
                        !0 === r && "object" == typeof window.console && console[e](D(t), n)
                    }

                    function k(e) {
                        function t() {
                            o("Height"), o("Width"), V((function () {
                                F(A), P($), g("onResized", A)
                            }), A, "init")
                        }

                        function n(e) {
                            return "border-box" !== e.boxSizing ? 0 : (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) + (e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0)
                        }

                        function r(e) {
                            return "border-box" !== e.boxSizing ? 0 : (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) + (e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0)
                        }

                        function o(e) {
                            var t = Number(m[$]["max" + e]),
                                n = Number(m[$]["min" + e]),
                                r = e.toLowerCase(),
                                o = Number(A[r]);
                            C($, "Checking " + r + " is in range " + n + "-" + t), o < n && (o = n, C($, "Set " + r + " to min value")), o > t && (o = t, C($, "Set " + r + " to max value")), A[r] = "" + o
                        }

                        function i(e) {
                            return k.substr(k.indexOf(":") + u + e)
                        }

                        function s(e, t) {
                            var n, r, o;
                            n = function () {
                                var n, r;
                                L("Send Page Info", "pageInfo:" + (n = document.body.getBoundingClientRect(), r = A.iframe.getBoundingClientRect(), JSON.stringify({
                                    iframeHeight: r.height,
                                    iframeWidth: r.width,
                                    clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                                    clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                                    offsetTop: parseInt(r.top - n.top, 10),
                                    offsetLeft: parseInt(r.left - n.left, 10),
                                    scrollTop: window.pageYOffset,
                                    scrollLeft: window.pageXOffset,
                                    documentHeight: document.documentElement.clientHeight,
                                    documentWidth: document.documentElement.clientWidth,
                                    windowHeight: window.innerHeight,
                                    windowWidth: window.innerWidth
                                })), e, t)
                            }, r = 32, w[o = t] || (w[o] = setTimeout((function () {
                                w[o] = null, n()
                            }), r))
                        }

                        function a(e) {
                            var t = e.getBoundingClientRect();
                            return N($), {
                                x: Math.floor(Number(t.left) + Number(h.x)),
                                y: Math.floor(Number(t.top) + Number(h.y))
                            }
                        }

                        function l(e) {
                            var t = e ? a(A.iframe) : {
                                    x: 0,
                                    y: 0
                                },
                                n = {
                                    x: Number(A.width) + t.x,
                                    y: Number(A.height) + t.y
                                };
                            C($, "Reposition requested from iFrame (offset x:" + t.x + " y:" + t.y + ")"), window.top !== window.self ? window.parentIFrame ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](n.x, n.y) : I($, "Unable to scroll to requested position, window.parentIFrame not found") : (h = n, c(), C($, "--"))
                        }

                        function c() {
                            !1 !== g("onScroll", h) ? P($) : R()
                        }

                        function p(e) {
                            var t = {};
                            if (0 === Number(A.width) && 0 === Number(A.height)) {
                                var n = i(9).split(":");
                                t = {
                                    x: n[1],
                                    y: n[0]
                                }
                            } else t = {
                                x: A.width,
                                y: A.height
                            };
                            g(e, {
                                iframe: A.iframe,
                                screenX: Number(t.x),
                                screenY: Number(t.y),
                                type: A.type
                            })
                        }

                        function g(e, t) {
                            return S($, e, t)
                        }
                        var v, y, b, D, x, T, k = e.data,
                            A = {},
                            $ = null;
                        "[iFrameResizerChild]Ready" === k ? function () {
                            for (var e in m) L("iFrame requested init", H(e), m[e].iframe, e)
                        }() : d === ("" + k).substr(0, f) && k.substr(f).split(":")[0] in m ? (b = k.substr(f).split(":"), D = b[1] ? parseInt(b[1], 10) : 0, x = m[b[0]] && m[b[0]].iframe, T = getComputedStyle(x), A = {
                            iframe: x,
                            id: b[0],
                            height: D + n(T) + r(T),
                            width: b[2],
                            type: b[3]
                        }, $ = A.id, m[$] && (m[$].loaded = !0), (y = A.type in {
                            true: 1,
                            false: 1,
                            undefined: 1
                        }) && C($, "Ignoring init message from meta parent page"), !y && function (e) {
                            var t = !0;
                            return m[e] || (t = !1, I(A.type + " No settings for " + e + ". Message was: " + k)), t
                        }($) && (C($, "Received: " + k), v = !0, null === A.iframe && (I($, "IFrame (" + A.id + ") not found"), v = !1), v && function () {
                            var t, n = e.origin,
                                r = m[$] && m[$].checkOrigin;
                            if (r && "" + n != "null" && !(r.constructor === Array ? function () {
                                    var e = 0,
                                        t = !1;
                                    for (C($, "Checking connection is from allowed list of origins: " + r); e < r.length; e++)
                                        if (r[e] === n) {
                                            t = !0;
                                            break
                                        } return t
                                }() : (t = m[$] && m[$].remoteHost, C($, "Checking connection is from: " + t), n === t))) throw new Error("Unexpected message received from: " + n + " for " + A.iframe.id + ". Message was: " + e.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
                            return !0
                        }() && function () {
                            switch (m[$] && m[$].firstRun && m[$] && (m[$].firstRun = !1), A.type) {
                                case "close":
                                    O(A.iframe);
                                    break;
                                case "message":
                                    e = i(6), C($, "onMessage passed: {iframe: " + A.iframe.id + ", message: " + e + "}"), g("onMessage", {
                                        iframe: A.iframe,
                                        message: JSON.parse(e)
                                    }), C($, "--");
                                    break;
                                case "mouseenter":
                                    p("onMouseEnter");
                                    break;
                                case "mouseleave":
                                    p("onMouseLeave");
                                    break;
                                case "autoResize":
                                    m[$].autoResize = JSON.parse(i(9));
                                    break;
                                case "scrollTo":
                                    l(!1);
                                    break;
                                case "scrollToOffset":
                                    l(!0);
                                    break;
                                case "pageInfo":
                                    s(m[$] && m[$].iframe, $),
                                        function () {
                                            function e(e, r) {
                                                function o() {
                                                    m[n] ? s(m[n].iframe, n) : t()
                                                } ["scroll", "resize"].forEach((function (t) {
                                                    C(n, e + t + " listener for sendPageInfo"), r(window, t, o)
                                                }))
                                            }

                                            function t() {
                                                e("Remove ", M)
                                            }
                                            var n = $;
                                            e("Add ", _), m[n] && (m[n].stopPageInfo = t)
                                        }();
                                    break;
                                case "pageInfoStop":
                                    m[$] && m[$].stopPageInfo && (m[$].stopPageInfo(), delete m[$].stopPageInfo);
                                    break;
                                case "inPageLink":
                                    ! function (e) {
                                        var t, n = e.split("#")[1] || "",
                                            r = decodeURIComponent(n),
                                            o = document.getElementById(r) || document.getElementsByName(r)[0];
                                        o ? (t = a(o), C($, "Moving to in page link (#" + n + ") at x: " + t.x + " y: " + t.y), h = {
                                            x: t.x,
                                            y: t.y
                                        }, c(), C($, "--")) : window.top !== window.self ? window.parentIFrame ? window.parentIFrame.moveToAnchor(n) : C($, "In page link #" + n + " not found and window.parentIFrame not found") : C($, "In page link #" + n + " not found")
                                    }(i(9));
                                    break;
                                case "reset":
                                    j(A);
                                    break;
                                case "init":
                                    t(), g("onInit", A.iframe);
                                    break;
                                default:
                                    0 === Number(A.width) && 0 === Number(A.height) ? I("Unsupported message received (" + A.type + "), this is likely due to the iframe containing a later version of iframe-resizer than the parent page") : t()
                            }
                            var e
                        }())) : E($, "Ignored: " + k)
                    }

                    function S(e, t, n) {
                        var r = null,
                            o = null;
                        if (m[e]) {
                            if ("function" != typeof (r = m[e][t])) throw new TypeError(t + " on iFrame[" + e + "] is not a function");
                            o = r(n)
                        }
                        return o
                    }

                    function A(e) {
                        var t = e.id;
                        delete m[t]
                    }

                    function O(e) {
                        var t = e.id;
                        if (!1 !== S(t, "onClose", t)) {
                            C(t, "Removing iFrame: " + t);
                            try {
                                e.parentNode && e.parentNode.removeChild(e)
                            } catch (e) {
                                I(e)
                            }
                            S(t, "onClosed", t), C(t, "--"), A(e)
                        } else C(t, "Close iframe cancelled by onClose event")
                    }

                    function N(e) {
                        null === h && C(e, "Get page position: " + (h = {
                            x: window.pageXOffset !== i ? window.pageXOffset : document.documentElement.scrollLeft,
                            y: window.pageYOffset !== i ? window.pageYOffset : document.documentElement.scrollTop
                        }).x + "," + h.y)
                    }

                    function P(e) {
                        null !== h && (window.scrollTo(h.x, h.y), C(e, "Set page position: " + h.x + "," + h.y), R())
                    }

                    function R() {
                        h = null
                    }

                    function j(e) {
                        C(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")), N(e.id), V((function () {
                            F(e), L("reset", "reset", e.iframe, e.id)
                        }), e, "reset")
                    }

                    function F(e) {
                        function t(t) {
                            c || "0" !== e[t] || (c = !0, C(r, "Hidden iFrame detected, creating visibility listener"), function () {
                                function e() {
                                    function e(e) {
                                        function t(t) {
                                            return "0px" === (m[e] && m[e].iframe.style[t])
                                        }

                                        function n(e) {
                                            return null !== e.offsetParent
                                        }
                                        m[e] && n(m[e].iframe) && (t("height") || t("width")) && L("Visibility change", "resize", m[e].iframe, e)
                                    }
                                    Object.keys(m).forEach((function (t) {
                                        e(t)
                                    }))
                                }

                                function t(t) {
                                    C("window", "Mutation observed: " + t[0].target + " " + t[0].type), B(e, 16)
                                }

                                function n() {
                                    var e = document.querySelector("body"),
                                        n = {
                                            attributes: !0,
                                            attributeOldValue: !1,
                                            characterData: !0,
                                            characterDataOldValue: !1,
                                            childList: !0,
                                            subtree: !0
                                        };
                                    new r(t).observe(e, n)
                                }
                                var r = b();
                                r && n()
                            }())
                        }

                        function n(n) {
                            ! function (t) {
                                e.id ? (e.iframe.style[t] = e[t] + "px", C(e.id, "IFrame (" + r + ") " + t + " set to " + e[t] + "px")) : C("undefined", "messageData id not set")
                            }(n), t(n)
                        }
                        var r = e.iframe.id;
                        m[r] && (m[r].sizeHeight && n("height"), m[r].sizeWidth && n("width"))
                    }

                    function V(e, t, n) {
                        n !== t.type && p && !window.jasmine ? (C(t.id, "Requesting animation frame"), p(e)) : e()
                    }

                    function L(e, t, n, r, o) {
                        var i, s = !1;
                        r = r || n.id, m[r] && (n && "contentWindow" in n && null !== n.contentWindow ? (i = m[r] && m[r].targetOrigin, C(r, "[" + e + "] Sending msg to iframe[" + r + "] (" + t + ") targetOrigin: " + i), n.contentWindow.postMessage(d + t, i)) : I(r, "[" + e + "] IFrame(" + r + ") not found"), o && m[r] && m[r].warningTimeout && (m[r].msgTimeout = setTimeout((function () {
                            !m[r] || m[r].loaded || s || (s = !0, I(r, "IFrame has not responded within " + m[r].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))
                        }), m[r].warningTimeout)))
                    }

                    function H(e) {
                        return e + ":" + m[e].bodyMarginV1 + ":" + m[e].sizeWidth + ":" + m[e].log + ":" + m[e].interval + ":" + m[e].enablePublicMethods + ":" + m[e].autoResize + ":" + m[e].bodyMargin + ":" + m[e].heightCalculationMethod + ":" + m[e].bodyBackground + ":" + m[e].bodyPadding + ":" + m[e].tolerance + ":" + m[e].inPageLinks + ":" + m[e].resizeFrom + ":" + m[e].widthCalculationMethod + ":" + m[e].mouseEvents
                    }

                    function $(e, t) {
                        function n(e) {
                            var t = e.split("Callback");
                            if (2 === t.length) {
                                var n = "on" + t[0].charAt(0).toUpperCase() + t[0].slice(1);
                                this[n] = this[e], delete this[e], I(s, "Deprecated: '" + e + "' has been renamed '" + n + "'. The old method will be removed in the next major version.")
                            }
                        }
                        var r, o, s = function (n) {
                            var r;
                            return "" === n && (e.id = (r = t && t.id || y.id + a++, null !== document.getElementById(r) && (r += a++), n = r), l = (t || {}).log, C(n, "Added missing iframe ID: " + n + " (" + e.src + ")")), n
                        }(e.id);
                        s in m && "iFrameResizer" in e ? I(s, "Ignored iFrame, already setup.") : (! function (t) {
                            var r;
                            t = t || {}, m[s] = {
                                    firstRun: !0,
                                    iframe: e,
                                    remoteHost: e.src && e.src.split("/").slice(0, 3).join("/")
                                },
                                function (e) {
                                    if ("object" != typeof e) throw new TypeError("Options is not an object")
                                }(t), Object.keys(t).forEach(n, t),
                                function (e) {
                                    for (var t in y) Object.prototype.hasOwnProperty.call(y, t) && (m[s][t] = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : y[t])
                                }(t), m[s] && (m[s].targetOrigin = !0 === m[s].checkOrigin ? "" === (r = m[s].remoteHost) || null !== r.match(/^(about:blank|javascript:|file:\/\/)/) ? "*" : r : "*")
                        }(t), function () {
                            switch (C(s, "IFrame scrolling " + (m[s] && m[s].scrolling ? "enabled" : "disabled") + " for " + s), e.style.overflow = !1 === (m[s] && m[s].scrolling) ? "hidden" : "auto", m[s] && m[s].scrolling) {
                                case "omit":
                                    break;
                                case !0:
                                    e.scrolling = "yes";
                                    break;
                                case !1:
                                    e.scrolling = "no";
                                    break;
                                default:
                                    e.scrolling = m[s] ? m[s].scrolling : "no"
                            }
                        }(), function () {
                            function t(t) {
                                var n = m[s][t];
                                1 / 0 !== n && 0 !== n && (e.style[t] = "number" == typeof n ? n + "px" : n, C(s, "Set " + t + " = " + e.style[t]))
                            }

                            function n(e) {
                                if (m[s]["min" + e] > m[s]["max" + e]) throw new Error("Value for min" + e + " can not be greater than max" + e)
                            }
                            n("Height"), n("Width"), t("maxHeight"), t("minHeight"), t("maxWidth"), t("minWidth")
                        }(), "number" != typeof (m[s] && m[s].bodyMargin) && "0" !== (m[s] && m[s].bodyMargin) || (m[s].bodyMarginV1 = m[s].bodyMargin, m[s].bodyMargin = m[s].bodyMargin + "px"), r = H(s), (o = b()) && function (t) {
                            e.parentNode && new t((function (t) {
                                t.forEach((function (t) {
                                    Array.prototype.slice.call(t.removedNodes).forEach((function (t) {
                                        t === e && O(e)
                                    }))
                                }))
                            })).observe(e.parentNode, {
                                childList: !0
                            })
                        }(o), _(e, "load", (function () {
                            var t, n;
                            L("iFrame.onload", r, e, i, !0), t = m[s] && m[s].firstRun, n = m[s] && m[s].heightCalculationMethod in g, !t && n && j({
                                iframe: e,
                                height: 0,
                                width: 0,
                                type: "init"
                            })
                        })), L("init", r, e, i, !0), m[s] && (m[s].iframe.iFrameResizer = {
                            close: O.bind(null, m[s].iframe),
                            removeListeners: A.bind(null, m[s].iframe),
                            resize: L.bind(null, "Window resize", "resize", m[s].iframe),
                            moveToAnchor: function (e) {
                                L("Move to anchor", "moveToAnchor:" + e, m[s].iframe, s)
                            },
                            sendMessage: function (e) {
                                L("Send Message", "message:" + (e = JSON.stringify(e)), m[s].iframe, s)
                            }
                        }))
                    }

                    function B(e, t) {
                        null === v && (v = setTimeout((function () {
                            v = null, e()
                        }), t))
                    }

                    function U() {
                        "hidden" !== document.visibilityState && (C("document", "Trigger event: Visiblity change"), B((function () {
                            z("Tab Visable", "resize")
                        }), 16))
                    }

                    function z(e, t) {
                        Object.keys(m).forEach((function (n) {
                            (function (e) {
                                return m[e] && "parent" === m[e].resizeFrom && m[e].autoResize && !m[e].firstRun
                            })(n) && L(e, t, m[n].iframe, n)
                        }))
                    }

                    function W() {
                        _(window, "message", k), _(window, "resize", (function () {
                            var e;
                            C("window", "Trigger event: " + (e = "resize")), B((function () {
                                z("Window " + e, "resize")
                            }), 16)
                        })), _(document, "visibilitychange", U), _(document, "-webkit-visibilitychange", U)
                    }

                    function q() {
                        function e(e, n) {
                            n && (! function () {
                                if (!n.tagName) throw new TypeError("Object is not a valid DOM element");
                                if ("IFRAME" !== n.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + n.tagName + ">")
                            }(), $(n, e), t.push(n))
                        }
                        var t;
                        return function () {
                                var e, t = ["moz", "webkit", "o", "ms"];
                                for (e = 0; e < t.length && !p; e += 1) p = window[t[e] + "RequestAnimationFrame"];
                                p ? p = p.bind(window) : C("setup", "RequestAnimationFrame not supported")
                            }(), W(),
                            function (n, r) {
                                switch (t = [], function (e) {
                                    e && e.enablePublicMethods && I("enablePublicMethods option has been removed, public methods are now always available in the iFrame")
                                }(n), typeof r) {
                                    case "undefined":
                                    case "string":
                                        Array.prototype.forEach.call(document.querySelectorAll(r || "iframe"), e.bind(i, n));
                                        break;
                                    case "object":
                                        e(n, r);
                                        break;
                                    default:
                                        throw new TypeError("Unexpected data type (" + typeof r + ")")
                                }
                                return t
                            }
                    }
                }()
            },
            457: (e, t, n) => {
                var r = n(702);
                t.iframeResizer = r, n(402)
            }
        },
        t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r](i, i.exports, n), i.exports
    }
    n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var r = {};
    (() => {
        "use strict";
        n.r(r);
        var e = function (t, n) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }, e(t, n)
        };

        function t(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }

        function o(e, t, n, r) {
            return new(n || (n = Promise))((function (o, i) {
                function s(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function a(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(s, a)
                }
                l((r = r.apply(e, t || [])).next())
            }))
        }

        function i(e, t) {
            var n, r, o, i, s = {
                label: 0,
                sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                return this
            }), i;

            function a(i) {
                return function (a) {
                    return function (i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                        s.label = o[1], o = i;
                                        break
                                    }
                                    if (o && s.label < o[2]) {
                                        s.label = o[2], s.ops.push(i);
                                        break
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            i = t.call(e, s)
                        } catch (e) {
                            i = [6, e], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }
        Object.create;

        function s(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
            if (n) return n.call(e);
            if (e && "number" == typeof e.length) return {
                next: function () {
                    return e && r >= e.length && (e = void 0), {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function a(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r, o, i = n.call(e),
                s = [];
            try {
                for (;
                    (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        }

        function l(e, t, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
            return e.concat(r || Array.prototype.slice.call(t))
        }

        function c(e) {
            return this instanceof c ? (this.v = e, this) : new c(e)
        }

        function u(e, t, n) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var r, o = n.apply(e, t || []),
                i = [];
            return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function () {
                return this
            }, r;

            function s(e) {
                o[e] && (r[e] = function (t) {
                    return new Promise((function (n, r) {
                        i.push([e, t, n, r]) > 1 || a(e, t)
                    }))
                })
            }

            function a(e, t) {
                try {
                    (n = o[e](t)).value instanceof c ? Promise.resolve(n.value.v).then(l, u) : d(i[0][2], n)
                } catch (e) {
                    d(i[0][3], e)
                }
                var n
            }

            function l(e) {
                a("next", e)
            }

            function u(e) {
                a("throw", e)
            }

            function d(e, t) {
                e(t), i.shift(), i.length && a(i[0][0], i[0][1])
            }
        }

        function d(e) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var t, n = e[Symbol.asyncIterator];
            return n ? n.call(e) : (e = s(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function () {
                return this
            }, t);

            function r(n) {
                t[n] = e[n] && function (t) {
                    return new Promise((function (r, o) {
                        (function (e, t, n, r) {
                            Promise.resolve(r).then((function (t) {
                                e({
                                    value: t,
                                    done: n
                                })
                            }), t)
                        })(r, o, (t = e[n](t)).done, t.value)
                    }))
                }
            }
        }
        Object.create;

        function f(e) {
            return "function" == typeof e
        }

        function h(e) {
            var t = e((function (e) {
                Error.call(e), e.stack = (new Error).stack
            }));
            return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
        }
        var p = h((function (e) {
            return function (t) {
                e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function (e, t) {
                    return t + 1 + ") " + e.toString()
                })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t
            }
        }));

        function g(e, t) {
            if (e) {
                var n = e.indexOf(t);
                0 <= n && e.splice(n, 1)
            }
        }
        var m = function () {
                function e(e) {
                    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null
                }
                return e.prototype.unsubscribe = function () {
                    var e, t, n, r, o;
                    if (!this.closed) {
                        this.closed = !0;
                        var i = this._parentage;
                        if (i)
                            if (this._parentage = null, Array.isArray(i)) try {
                                for (var c = s(i), u = c.next(); !u.done; u = c.next()) {
                                    u.value.remove(this)
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    u && !u.done && (t = c.return) && t.call(c)
                                } finally {
                                    if (e) throw e.error
                                }
                            } else i.remove(this);
                        var d = this.initialTeardown;
                        if (f(d)) try {
                            d()
                        } catch (e) {
                            o = e instanceof p ? e.errors : [e]
                        }
                        var h = this._finalizers;
                        if (h) {
                            this._finalizers = null;
                            try {
                                for (var g = s(h), m = g.next(); !m.done; m = g.next()) {
                                    var v = m.value;
                                    try {
                                        w(v)
                                    } catch (e) {
                                        o = null != o ? o : [], e instanceof p ? o = l(l([], a(o)), a(e.errors)) : o.push(e)
                                    }
                                }
                            } catch (e) {
                                n = {
                                    error: e
                                }
                            } finally {
                                try {
                                    m && !m.done && (r = g.return) && r.call(g)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }
                        if (o) throw new p(o)
                    }
                }, e.prototype.add = function (t) {
                    var n;
                    if (t && t !== this)
                        if (this.closed) w(t);
                        else {
                            if (t instanceof e) {
                                if (t.closed || t._hasParent(this)) return;
                                t._addParent(this)
                            }(this._finalizers = null !== (n = this._finalizers) && void 0 !== n ? n : []).push(t)
                        }
                }, e.prototype._hasParent = function (e) {
                    var t = this._parentage;
                    return t === e || Array.isArray(t) && t.includes(e)
                }, e.prototype._addParent = function (e) {
                    var t = this._parentage;
                    this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e
                }, e.prototype._removeParent = function (e) {
                    var t = this._parentage;
                    t === e ? this._parentage = null : Array.isArray(t) && g(t, e)
                }, e.prototype.remove = function (t) {
                    var n = this._finalizers;
                    n && g(n, t), t instanceof e && t._removeParent(this)
                }, e.EMPTY = function () {
                    var t = new e;
                    return t.closed = !0, t
                }(), e
            }(),
            v = m.EMPTY;

        function y(e) {
            return e instanceof m || e && "closed" in e && f(e.remove) && f(e.add) && f(e.unsubscribe)
        }

        function w(e) {
            f(e) ? e() : e.unsubscribe()
        }
        var b = {
                onUnhandledError: null,
                onStoppedNotification: null,
                Promise: void 0,
                useDeprecatedSynchronousErrorHandling: !1,
                useDeprecatedNextContext: !1
            },
            _ = {
                setTimeout: function (e, t) {
                    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                    var o = _.delegate;
                    return (null == o ? void 0 : o.setTimeout) ? o.setTimeout.apply(o, l([e, t], a(n))) : setTimeout.apply(void 0, l([e, t], a(n)))
                },
                clearTimeout: function (e) {
                    var t = _.delegate;
                    return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e)
                },
                delegate: void 0
            };

        function M(e) {
            _.setTimeout((function () {
                var t = b.onUnhandledError;
                if (!t) throw e;
                t(e)
            }))
        }

        function D() {}
        var x = C("C", void 0, void 0);

        function C(e, t, n) {
            return {
                kind: e,
                value: t,
                error: n
            }
        }
        var E = null;

        function I(e) {
            if (b.useDeprecatedSynchronousErrorHandling) {
                var t = !E;
                if (t && (E = {
                        errorThrown: !1,
                        error: null
                    }), e(), t) {
                    var n = E,
                        r = n.errorThrown,
                        o = n.error;
                    if (E = null, r) throw o
                }
            } else e()
        }
        var T = function (e) {
                function n(t) {
                    var n = e.call(this) || this;
                    return n.isStopped = !1, t ? (n.destination = t, y(t) && t.add(n)) : n.destination = R, n
                }
                return t(n, e), n.create = function (e, t, n) {
                    return new O(e, t, n)
                }, n.prototype.next = function (e) {
                    this.isStopped ? P(function (e) {
                        return C("N", e, void 0)
                    }(e), this) : this._next(e)
                }, n.prototype.error = function (e) {
                    this.isStopped ? P(C("E", void 0, e), this) : (this.isStopped = !0, this._error(e))
                }, n.prototype.complete = function () {
                    this.isStopped ? P(x, this) : (this.isStopped = !0, this._complete())
                }, n.prototype.unsubscribe = function () {
                    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
                }, n.prototype._next = function (e) {
                    this.destination.next(e)
                }, n.prototype._error = function (e) {
                    try {
                        this.destination.error(e)
                    } finally {
                        this.unsubscribe()
                    }
                }, n.prototype._complete = function () {
                    try {
                        this.destination.complete()
                    } finally {
                        this.unsubscribe()
                    }
                }, n
            }(m),
            k = Function.prototype.bind;

        function S(e, t) {
            return k.call(e, t)
        }
        var A = function () {
                function e(e) {
                    this.partialObserver = e
                }
                return e.prototype.next = function (e) {
                    var t = this.partialObserver;
                    if (t.next) try {
                        t.next(e)
                    } catch (e) {
                        N(e)
                    }
                }, e.prototype.error = function (e) {
                    var t = this.partialObserver;
                    if (t.error) try {
                        t.error(e)
                    } catch (e) {
                        N(e)
                    } else N(e)
                }, e.prototype.complete = function () {
                    var e = this.partialObserver;
                    if (e.complete) try {
                        e.complete()
                    } catch (e) {
                        N(e)
                    }
                }, e
            }(),
            O = function (e) {
                function n(t, n, r) {
                    var o, i, s = e.call(this) || this;
                    f(t) || !t ? o = {
                        next: null != t ? t : void 0,
                        error: null != n ? n : void 0,
                        complete: null != r ? r : void 0
                    } : s && b.useDeprecatedNextContext ? ((i = Object.create(t)).unsubscribe = function () {
                        return s.unsubscribe()
                    }, o = {
                        next: t.next && S(t.next, i),
                        error: t.error && S(t.error, i),
                        complete: t.complete && S(t.complete, i)
                    }) : o = t;
                    return s.destination = new A(o), s
                }
                return t(n, e), n
            }(T);

        function N(e) {
            var t;
            b.useDeprecatedSynchronousErrorHandling ? (t = e, b.useDeprecatedSynchronousErrorHandling && E && (E.errorThrown = !0, E.error = t)) : M(e)
        }

        function P(e, t) {
            var n = b.onStoppedNotification;
            n && _.setTimeout((function () {
                return n(e, t)
            }))
        }
        var R = {
                closed: !0,
                next: D,
                error: function (e) {
                    throw e
                },
                complete: D
            },
            j = "function" == typeof Symbol && Symbol.observable || "@@observable";

        function F(e) {
            return e
        }

        function V(e) {
            return 0 === e.length ? F : 1 === e.length ? e[0] : function (t) {
                return e.reduce((function (e, t) {
                    return t(e)
                }), t)
            }
        }
        var L = function () {
            function e(e) {
                e && (this._subscribe = e)
            }
            return e.prototype.lift = function (t) {
                var n = new e;
                return n.source = this, n.operator = t, n
            }, e.prototype.subscribe = function (e, t, n) {
                var r, o = this,
                    i = (r = e) && r instanceof T || function (e) {
                        return e && f(e.next) && f(e.error) && f(e.complete)
                    }(r) && y(r) ? e : new O(e, t, n);
                return I((function () {
                    var e = o,
                        t = e.operator,
                        n = e.source;
                    i.add(t ? t.call(i, n) : n ? o._subscribe(i) : o._trySubscribe(i))
                })), i
            }, e.prototype._trySubscribe = function (e) {
                try {
                    return this._subscribe(e)
                } catch (t) {
                    e.error(t)
                }
            }, e.prototype.forEach = function (e, t) {
                var n = this;
                return new(t = H(t))((function (t, r) {
                    var o = new O({
                        next: function (t) {
                            try {
                                e(t)
                            } catch (e) {
                                r(e), o.unsubscribe()
                            }
                        },
                        error: r,
                        complete: t
                    });
                    n.subscribe(o)
                }))
            }, e.prototype._subscribe = function (e) {
                var t;
                return null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e)
            }, e.prototype[j] = function () {
                return this
            }, e.prototype.pipe = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return V(e)(this)
            }, e.prototype.toPromise = function (e) {
                var t = this;
                return new(e = H(e))((function (e, n) {
                    var r;
                    t.subscribe((function (e) {
                        return r = e
                    }), (function (e) {
                        return n(e)
                    }), (function () {
                        return e(r)
                    }))
                }))
            }, e.create = function (t) {
                return new e(t)
            }, e
        }();

        function H(e) {
            var t;
            return null !== (t = null != e ? e : b.Promise) && void 0 !== t ? t : Promise
        }
        var $ = h((function (e) {
                return function () {
                    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
                }
            })),
            B = function (e) {
                function n() {
                    var t = e.call(this) || this;
                    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
                }
                return t(n, e), n.prototype.lift = function (e) {
                    var t = new U(this, this);
                    return t.operator = e, t
                }, n.prototype._throwIfClosed = function () {
                    if (this.closed) throw new $
                }, n.prototype.next = function (e) {
                    var t = this;
                    I((function () {
                        var n, r;
                        if (t._throwIfClosed(), !t.isStopped) {
                            t.currentObservers || (t.currentObservers = Array.from(t.observers));
                            try {
                                for (var o = s(t.currentObservers), i = o.next(); !i.done; i = o.next()) {
                                    i.value.next(e)
                                }
                            } catch (e) {
                                n = {
                                    error: e
                                }
                            } finally {
                                try {
                                    i && !i.done && (r = o.return) && r.call(o)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }
                    }))
                }, n.prototype.error = function (e) {
                    var t = this;
                    I((function () {
                        if (t._throwIfClosed(), !t.isStopped) {
                            t.hasError = t.isStopped = !0, t.thrownError = e;
                            for (var n = t.observers; n.length;) n.shift().error(e)
                        }
                    }))
                }, n.prototype.complete = function () {
                    var e = this;
                    I((function () {
                        if (e._throwIfClosed(), !e.isStopped) {
                            e.isStopped = !0;
                            for (var t = e.observers; t.length;) t.shift().complete()
                        }
                    }))
                }, n.prototype.unsubscribe = function () {
                    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
                }, Object.defineProperty(n.prototype, "observed", {
                    get: function () {
                        var e;
                        return (null === (e = this.observers) || void 0 === e ? void 0 : e.length) > 0
                    },
                    enumerable: !1,
                    configurable: !0
                }), n.prototype._trySubscribe = function (t) {
                    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t)
                }, n.prototype._subscribe = function (e) {
                    return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e)
                }, n.prototype._innerSubscribe = function (e) {
                    var t = this,
                        n = this,
                        r = n.hasError,
                        o = n.isStopped,
                        i = n.observers;
                    return r || o ? v : (this.currentObservers = null, i.push(e), new m((function () {
                        t.currentObservers = null, g(i, e)
                    })))
                }, n.prototype._checkFinalizedStatuses = function (e) {
                    var t = this,
                        n = t.hasError,
                        r = t.thrownError,
                        o = t.isStopped;
                    n ? e.error(r) : o && e.complete()
                }, n.prototype.asObservable = function () {
                    var e = new L;
                    return e.source = this, e
                }, n.create = function (e, t) {
                    return new U(e, t)
                }, n
            }(L),
            U = function (e) {
                function n(t, n) {
                    var r = e.call(this) || this;
                    return r.destination = t, r.source = n, r
                }
                return t(n, e), n.prototype.next = function (e) {
                    var t, n;
                    null === (n = null === (t = this.destination) || void 0 === t ? void 0 : t.next) || void 0 === n || n.call(t, e)
                }, n.prototype.error = function (e) {
                    var t, n;
                    null === (n = null === (t = this.destination) || void 0 === t ? void 0 : t.error) || void 0 === n || n.call(t, e)
                }, n.prototype.complete = function () {
                    var e, t;
                    null === (t = null === (e = this.destination) || void 0 === e ? void 0 : e.complete) || void 0 === t || t.call(e)
                }, n.prototype._subscribe = function (e) {
                    var t, n;
                    return null !== (n = null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e)) && void 0 !== n ? n : v
                }, n
            }(B);

        function z(e) {
            return function (t) {
                if (function (e) {
                        return f(null == e ? void 0 : e.lift)
                    }(t)) return t.lift((function (t) {
                    try {
                        return e(t, this)
                    } catch (e) {
                        this.error(e)
                    }
                }));
                throw new TypeError("Unable to lift unknown Observable type")
            }
        }

        function W(e, t, n, r, o) {
            return new q(e, t, n, r, o)
        }
        var q = function (e) {
            function n(t, n, r, o, i, s) {
                var a = e.call(this, t) || this;
                return a.onFinalize = i, a.shouldUnsubscribe = s, a._next = n ? function (e) {
                    try {
                        n(e)
                    } catch (e) {
                        t.error(e)
                    }
                } : e.prototype._next, a._error = o ? function (e) {
                    try {
                        o(e)
                    } catch (e) {
                        t.error(e)
                    } finally {
                        this.unsubscribe()
                    }
                } : e.prototype._error, a._complete = r ? function () {
                    try {
                        r()
                    } catch (e) {
                        t.error(e)
                    } finally {
                        this.unsubscribe()
                    }
                } : e.prototype._complete, a
            }
            return t(n, e), n.prototype.unsubscribe = function () {
                var t;
                if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                    var n = this.closed;
                    e.prototype.unsubscribe.call(this), !n && (null === (t = this.onFinalize) || void 0 === t || t.call(this))
                }
            }, n
        }(T);
        var Q = function (e) {
            return e && "number" == typeof e.length && "function" != typeof e
        };

        function Z(e) {
            return f(null == e ? void 0 : e.then)
        }

        function G(e) {
            return f(e[j])
        }

        function J(e) {
            return Symbol.asyncIterator && f(null == e ? void 0 : e[Symbol.asyncIterator])
        }

        function K(e) {
            return new TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
        }
        var Y = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";

        function X(e) {
            return f(null == e ? void 0 : e[Y])
        }

        function ee(e) {
            return u(this, arguments, (function () {
                var t, n, r;
                return i(this, (function (o) {
                    switch (o.label) {
                        case 0:
                            t = e.getReader(), o.label = 1;
                        case 1:
                            o.trys.push([1, , 9, 10]), o.label = 2;
                        case 2:
                            return [4, c(t.read())];
                        case 3:
                            return n = o.sent(), r = n.value, n.done ? [4, c(void 0)] : [3, 5];
                        case 4:
                            return [2, o.sent()];
                        case 5:
                            return [4, c(r)];
                        case 6:
                            return [4, o.sent()];
                        case 7:
                            return o.sent(), [3, 2];
                        case 8:
                            return [3, 10];
                        case 9:
                            return t.releaseLock(), [7];
                        case 10:
                            return [2]
                    }
                }))
            }))
        }

        function te(e) {
            return f(null == e ? void 0 : e.getReader)
        }

        function ne(e) {
            if (e instanceof L) return e;
            if (null != e) {
                if (G(e)) return r = e, new L((function (e) {
                    var t = r[j]();
                    if (f(t.subscribe)) return t.subscribe(e);
                    throw new TypeError("Provided object does not correctly implement Symbol.observable")
                }));
                if (Q(e)) return n = e, new L((function (e) {
                    for (var t = 0; t < n.length && !e.closed; t++) e.next(n[t]);
                    e.complete()
                }));
                if (Z(e)) return function (e) {
                    return new L((function (t) {
                        e.then((function (e) {
                            t.closed || (t.next(e), t.complete())
                        }), (function (e) {
                            return t.error(e)
                        })).then(null, M)
                    }))
                }(e);
                if (J(e)) return re(e);
                if (X(e)) return t = e, new L((function (e) {
                    var n, r;
                    try {
                        for (var o = s(t), i = o.next(); !i.done; i = o.next()) {
                            var a = i.value;
                            if (e.next(a), e.closed) return
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            i && !i.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    e.complete()
                }));
                if (te(e)) return re(ee(e))
            }
            var t, n, r;
            throw K(e)
        }

        function re(e) {
            return new L((function (t) {
                (function (e, t) {
                    var n, r, s, a;
                    return o(this, void 0, void 0, (function () {
                        var o, l;
                        return i(this, (function (i) {
                            switch (i.label) {
                                case 0:
                                    i.trys.push([0, 5, 6, 11]), n = d(e), i.label = 1;
                                case 1:
                                    return [4, n.next()];
                                case 2:
                                    if ((r = i.sent()).done) return [3, 4];
                                    if (o = r.value, t.next(o), t.closed) return [2];
                                    i.label = 3;
                                case 3:
                                    return [3, 1];
                                case 4:
                                    return [3, 11];
                                case 5:
                                    return l = i.sent(), s = {
                                        error: l
                                    }, [3, 11];
                                case 6:
                                    return i.trys.push([6, , 9, 10]), r && !r.done && (a = n.return) ? [4, a.call(n)] : [3, 8];
                                case 7:
                                    i.sent(), i.label = 8;
                                case 8:
                                    return [3, 10];
                                case 9:
                                    if (s) throw s.error;
                                    return [7];
                                case 10:
                                    return [7];
                                case 11:
                                    return t.complete(), [2]
                            }
                        }))
                    }))
                })(e, t).catch((function (e) {
                    return t.error(e)
                }))
            }))
        }

        function oe(e, t, n, r, o) {
            void 0 === r && (r = 0), void 0 === o && (o = !1);
            var i = t.schedule((function () {
                n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe()
            }), r);
            if (e.add(i), !o) return i
        }

        function ie(e, t, n) {
            return void 0 === n && (n = 1 / 0), f(t) ? ie((function (n, r) {
                return function (e, t) {
                    return z((function (n, r) {
                        var o = 0;
                        n.subscribe(W(r, (function (n) {
                            r.next(e.call(t, n, o++))
                        })))
                    }))
                }((function (e, o) {
                    return t(n, e, r, o)
                }))(ne(e(n, r)))
            }), n) : ("number" == typeof t && (n = t), z((function (t, r) {
                return function (e, t, n, r, o, i, s, a) {
                    var l = [],
                        c = 0,
                        u = 0,
                        d = !1,
                        f = function () {
                            !d || l.length || c || t.complete()
                        },
                        h = function (e) {
                            return c < r ? p(e) : l.push(e)
                        },
                        p = function (e) {
                            i && t.next(e), c++;
                            var a = !1;
                            ne(n(e, u++)).subscribe(W(t, (function (e) {
                                null == o || o(e), i ? h(e) : t.next(e)
                            }), (function () {
                                a = !0
                            }), void 0, (function () {
                                if (a) try {
                                    c--;
                                    for (var e = function () {
                                            var e = l.shift();
                                            s ? oe(t, s, (function () {
                                                return p(e)
                                            })) : p(e)
                                        }; l.length && c < r;) e();
                                    f()
                                } catch (e) {
                                    t.error(e)
                                }
                            })))
                        };
                    return e.subscribe(W(t, h, (function () {
                            d = !0, f()
                        }))),
                        function () {
                            null == a || a()
                        }
                }(t, r, e, n)
            })))
        }

        function se(e) {
            return void 0 === e && (e = 1 / 0), ie(F, e)
        }
        var ae = new L((function (e) {
            return e.complete()
        }));

        function le(e) {
            return e[e.length - 1]
        }

        function ce(e) {
            return (t = le(e)) && f(t.schedule) ? e.pop() : void 0;
            var t
        }

        function ue(e, t) {
            return "number" == typeof le(e) ? e.pop() : t
        }

        function de(e, t) {
            return void 0 === t && (t = 0), z((function (n, r) {
                n.subscribe(W(r, (function (n) {
                    return oe(r, e, (function () {
                        return r.next(n)
                    }), t)
                }), (function () {
                    return oe(r, e, (function () {
                        return r.complete()
                    }), t)
                }), (function (n) {
                    return oe(r, e, (function () {
                        return r.error(n)
                    }), t)
                })))
            }))
        }

        function fe(e, t) {
            return void 0 === t && (t = 0), z((function (n, r) {
                r.add(e.schedule((function () {
                    return n.subscribe(r)
                }), t))
            }))
        }

        function he(e, t) {
            if (!e) throw new Error("Iterable cannot be null");
            return new L((function (n) {
                oe(n, t, (function () {
                    var r = e[Symbol.asyncIterator]();
                    oe(n, t, (function () {
                        r.next().then((function (e) {
                            e.done ? n.complete() : n.next(e.value)
                        }))
                    }), 0, !0)
                }))
            }))
        }

        function pe(e, t) {
            if (null != e) {
                if (G(e)) return function (e, t) {
                    return ne(e).pipe(fe(t), de(t))
                }(e, t);
                if (Q(e)) return function (e, t) {
                    return new L((function (n) {
                        var r = 0;
                        return t.schedule((function () {
                            r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule())
                        }))
                    }))
                }(e, t);
                if (Z(e)) return function (e, t) {
                    return ne(e).pipe(fe(t), de(t))
                }(e, t);
                if (J(e)) return he(e, t);
                if (X(e)) return function (e, t) {
                    return new L((function (n) {
                        var r;
                        return oe(n, t, (function () {
                                r = e[Y](), oe(n, t, (function () {
                                    var e, t, o;
                                    try {
                                        t = (e = r.next()).value, o = e.done
                                    } catch (e) {
                                        return void n.error(e)
                                    }
                                    o ? n.complete() : n.next(t)
                                }), 0, !0)
                            })),
                            function () {
                                return f(null == r ? void 0 : r.return) && r.return()
                            }
                    }))
                }(e, t);
                if (te(e)) return function (e, t) {
                    return he(ee(e), t)
                }(e, t)
            }
            throw K(e)
        }

        function ge(e, t) {
            return t ? pe(e, t) : ne(e)
        }

        function me(e) {
            return e <= 0 ? function () {
                return ae
            } : z((function (t, n) {
                var r = 0;
                t.subscribe(W(n, (function (t) {
                    ++r <= e && (n.next(t), e <= r && n.complete())
                })))
            }))
        }

        function ve(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            return !0 === t ? (e(), null) : !1 === t ? null : t.apply(void 0, l([], a(n))).pipe(me(1)).subscribe((function () {
                return e()
            }))
        }

        function ye(e) {
            for (let t in e)
                if (e[t] === ye) return t;
            throw Error("Could not find renamed property on target object.")
        }

        function we(e, t) {
            for (const n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n])
        }

        function be(e) {
            if ("string" == typeof e) return e;
            if (Array.isArray(e)) return "[" + e.map(be).join(", ") + "]";
            if (null == e) return "" + e;
            if (e.overriddenName) return `${e.overriddenName}`;
            if (e.name) return `${e.name}`;
            const t = e.toString();
            if (null == t) return "" + t;
            const n = t.indexOf("\n");
            return -1 === n ? t : t.substring(0, n)
        }

        function _e(e, t) {
            return null == e || "" === e ? null === t ? "" : t : null == t || "" === t ? e : e + " " + t
        }
        const Me = ye({
            __forward_ref__: ye
        });

        function De(e) {
            return e.__forward_ref__ = De, e.toString = function () {
                return be(this())
            }, e
        }

        function xe(e) {
            return Ce(e) ? e() : e
        }

        function Ce(e) {
            return "function" == typeof e && e.hasOwnProperty(Me) && e.__forward_ref__ === De
        }
        class Ee extends Error {
            constructor(e, t) {
                super(Ie(e, t)), this.code = e
            }
        }

        function Ie(e, t) {
            const n = `NG0${Math.abs(e)}`;
            let r = `${n}${t?": "+t:""}`;
            return ngDevMode && e < 0 && (r = `${r}. Find more at https://angular.io/errors/${n}`), r
        }

        function Te(e) {
            return "string" == typeof e ? e : null == e ? "" : String(e)
        }

        function ke(e) {
            return "function" == typeof e ? e.name || e.toString() : "object" == typeof e && null != e && "function" == typeof e.type ? e.type.name || e.type.toString() : Te(e)
        }

        function Se(e, t) {
            const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
            throw new Ee(-200, `Circular dependency in DI detected for ${e}${n}`)
        }

        function Ae() {
            throw new Error("Cannot mix multi providers and regular providers")
        }

        function Oe(e, t) {
            const n = t ? ` in ${t}` : "";
            throw new Ee(-201, `No provider for ${ke(e)} found${n}`)
        }

        function Ne(e, t) {
            "number" != typeof e && qe(t, typeof e, "number", "===")
        }

        function Pe(e, t, n) {
            Ne(e, "Expected a number"), Be(e, n, "Expected number to be less than or equal to"), ze(e, t, "Expected number to be greater than or equal to")
        }

        function Re(e, t) {
            "string" != typeof e && qe(t, null === e ? "null" : typeof e, "string", "===")
        }

        function je(e, t) {
            "function" != typeof e && qe(t, null === e ? "null" : typeof e, "function", "===")
        }

        function Fe(e, t, n) {
            e != t && qe(n, e, t, "==")
        }

        function Ve(e, t, n) {
            e == t && qe(n, e, t, "!=")
        }

        function Le(e, t, n) {
            e !== t && qe(n, e, t, "===")
        }

        function He(e, t, n) {
            e === t && qe(n, e, t, "!==")
        }

        function $e(e, t, n) {
            e < t || qe(n, e, t, "<")
        }

        function Be(e, t, n) {
            e <= t || qe(n, e, t, "<=")
        }

        function Ue(e, t, n) {
            e > t || qe(n, e, t, ">")
        }

        function ze(e, t, n) {
            e >= t || qe(n, e, t, ">=")
        }

        function We(e, t) {
            null == e && qe(t, e, null, "!=")
        }

        function qe(e, t, n, r) {
            throw new Error(`ASSERTION ERROR: ${e}` + (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`))
        }

        function Qe(e) {
            "undefined" != typeof Node && e instanceof Node || "object" == typeof e && null != e && "WebWorkerRenderNode" === e.constructor.name || qe(`The provided value must be an instance of a DOM Node but got ${be(e)}`)
        }

        function Ze(e, t) {
            We(e, "Array must be defined.");
            const n = e.length;
            (t < 0 || t >= n) && qe(`Index expected to be less than ${n} but got ${t}`)
        }

        function Ge(e, ...t) {
            if (-1 !== t.indexOf(e)) return !0;
            qe(`Expected value to be one of ${JSON.stringify(t)} but was ${JSON.stringify(e)}.`)
        }

        function Je(e) {
            return {
                token: e.token,
                providedIn: e.providedIn || null,
                factory: e.factory,
                value: void 0
            }
        }

        function Ke(e) {
            return {
                providers: e.providers || [],
                imports: e.imports || []
            }
        }

        function Ye(e) {
            return Xe(e, tt) || Xe(e, rt)
        }

        function Xe(e, t) {
            return e.hasOwnProperty(t) ? e[t] : null
        }

        function et(e) {
            return e && (e.hasOwnProperty(nt) || e.hasOwnProperty(ot)) ? e[nt] : null
        }
        const tt = ye({
                Éµprov: ye
            }),
            nt = ye({
                Éµinj: ye
            }),
            rt = ye({
                ngInjectableDef: ye
            }),
            ot = ye({
                ngInjectorDef: ye
            });
        var it;
        let st;

        function at(e) {
            const t = st;
            return st = e, t
        }

        function lt(e, t, n) {
            const r = Ye(e);
            return r && "root" == r.providedIn ? void 0 === r.value ? r.value = r.factory() : r.value : n & it.Optional ? null : void 0 !== t ? t : void Oe(be(e), "Injector")
        }

        function ct(e) {
            return {
                toString: e
            }.toString()
        }
        var ut, dt, ft;
        ! function (e) {
            e[e.Default = 0] = "Default", e[e.Host = 1] = "Host", e[e.Self = 2] = "Self", e[e.SkipSelf = 4] = "SkipSelf", e[e.Optional = 8] = "Optional"
        }(it || (it = {})),
        function (e) {
            e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default"
        }(ut || (ut = {})),
        function (e) {
            e[e.CheckOnce = 0] = "CheckOnce", e[e.Checked = 1] = "Checked", e[e.CheckAlways = 2] = "CheckAlways", e[e.Detached = 3] = "Detached", e[e.Errored = 4] = "Errored", e[e.Destroyed = 5] = "Destroyed"
        }(dt || (dt = {})),
        function (e) {
            e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom"
        }(ft || (ft = {}));
        const ht = "undefined" != typeof globalThis && globalThis,
            pt = "undefined" != typeof window && window,
            gt = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
            mt = "undefined" != typeof global && global,
            vt = ht || mt || pt || gt;

        function yt() {
            return !("undefined" != typeof ngDevMode && !ngDevMode) && ("object" != typeof ngDevMode && function () {
                const e = "undefined" != typeof location ? location.toString() : "",
                    t = {
                        namedConstructors: -1 != e.indexOf("ngDevMode=namedConstructors"),
                        firstCreatePass: 0,
                        tNode: 0,
                        tView: 0,
                        rendererCreateTextNode: 0,
                        rendererSetText: 0,
                        rendererCreateElement: 0,
                        rendererAddEventListener: 0,
                        rendererSetAttribute: 0,
                        rendererRemoveAttribute: 0,
                        rendererSetProperty: 0,
                        rendererSetClassName: 0,
                        rendererAddClass: 0,
                        rendererRemoveClass: 0,
                        rendererSetStyle: 0,
                        rendererRemoveStyle: 0,
                        rendererDestroy: 0,
                        rendererDestroyNode: 0,
                        rendererMoveNode: 0,
                        rendererRemoveNode: 0,
                        rendererAppendChild: 0,
                        rendererInsertBefore: 0,
                        rendererCreateComment: 0
                    },
                    n = -1 === e.indexOf("ngDevMode=false");
                vt.ngDevMode = n && t
            }(), "undefined" != typeof ngDevMode && !!ngDevMode)
        }
        const wt = {},
            bt = [];
        ("undefined" == typeof ngDevMode || ngDevMode) && yt() && (Object.freeze(wt), Object.freeze(bt));
        const _t = ye({
                Éµcmp: ye
            }),
            Mt = ye({
                Éµdir: ye
            }),
            Dt = ye({
                Éµpipe: ye
            }),
            xt = ye({
                Éµmod: ye
            }),
            Ct = ye({
                Éµfac: ye
            }),
            Et = ye({
                __NG_ELEMENT_ID__: ye
            });
        let It = 0;

        function Tt(e) {
            return ct((() => {
                ("undefined" == typeof ngDevMode || ngDevMode) && yt();
                const t = {},
                    n = {
                        type: e.type,
                        providersResolver: null,
                        decls: e.decls,
                        vars: e.vars,
                        factory: null,
                        template: e.template || null,
                        consts: e.consts || null,
                        ngContentSelectors: e.ngContentSelectors,
                        hostBindings: e.hostBindings || null,
                        hostVars: e.hostVars || 0,
                        hostAttrs: e.hostAttrs || null,
                        contentQueries: e.contentQueries || null,
                        declaredInputs: t,
                        inputs: null,
                        outputs: null,
                        exportAs: e.exportAs || null,
                        onPush: e.changeDetection === ut.OnPush,
                        directiveDefs: null,
                        pipeDefs: null,
                        selectors: e.selectors || bt,
                        viewQuery: e.viewQuery || null,
                        features: e.features || null,
                        data: e.data || {},
                        encapsulation: e.encapsulation || ft.Emulated,
                        id: "c",
                        styles: e.styles || bt,
                        _: null,
                        setInput: null,
                        schemas: e.schemas || null,
                        tView: null
                    },
                    r = e.directives,
                    o = e.features,
                    i = e.pipes;
                return n.id += It++, n.inputs = Rt(e.inputs, t), n.outputs = Rt(e.outputs), o && o.forEach((e => e(n))), n.directiveDefs = r ? () => ("function" == typeof r ? r() : r).map(St) : null, n.pipeDefs = i ? () => ("function" == typeof i ? i() : i).map(At) : null, n
            }))
        }

        function kt(e, t, n) {
            const r = e.Éµcmp;
            r.directiveDefs = () => t.map(St), r.pipeDefs = () => n.map(At)
        }

        function St(e) {
            const t = Vt(e) || Lt(e);
            if (ngDevMode && !t) throw new Error(`'${e.name}' is neither 'ComponentType' or 'DirectiveType'.`);
            return t
        }

        function At(e) {
            const t = Ht(e);
            if (ngDevMode && !t) throw new Error(`'${e.name}' is not a 'PipeType'.`);
            return t
        }
        const Ot = {};

        function Nt(e) {
            return ct((() => {
                const t = {
                    type: e.type,
                    bootstrap: e.bootstrap || bt,
                    declarations: e.declarations || bt,
                    imports: e.imports || bt,
                    exports: e.exports || bt,
                    transitiveCompileScopes: null,
                    schemas: e.schemas || null,
                    id: e.id || null
                };
                return null != e.id && (Ot[e.id] = e.type), t
            }))
        }

        function Pt(e, t) {
            return ct((() => {
                const n = $t(e, !0);
                n.declarations = t.declarations || bt, n.imports = t.imports || bt, n.exports = t.exports || bt
            }))
        }

        function Rt(e, t) {
            if (null == e) return wt;
            const n = {};
            for (const r in e)
                if (e.hasOwnProperty(r)) {
                    let o = e[r],
                        i = o;
                    Array.isArray(o) && (i = o[1], o = o[0]), n[o] = r, t && (t[o] = i)
                } return n
        }
        const jt = Tt;

        function Ft(e) {
            return {
                type: e.type,
                name: e.name,
                factory: null,
                pure: !1 !== e.pure,
                onDestroy: e.type.prototype.ngOnDestroy || null
            }
        }

        function Vt(e) {
            return e[_t] || null
        }

        function Lt(e) {
            return e[Mt] || null
        }

        function Ht(e) {
            return e[Dt] || null
        }

        function $t(e, t) {
            const n = e[xt] || null;
            if (!n && !0 === t) throw new Error(`Type ${be(e)} does not have 'Éµmod' property.`);
            return n
        }
        const Bt = 20,
            Ut = ["Root", "Component", "Embedded"],
            zt = 10;

        function Wt(e) {
            return Array.isArray(e) && "object" == typeof e[1]
        }

        function qt(e) {
            return Array.isArray(e) && !0 === e[1]
        }

        function Qt(e) {
            return 0 != (8 & e.flags)
        }

        function Zt(e) {
            return 2 == (2 & e.flags)
        }

        function Gt(e) {
            return 1 == (1 & e.flags)
        }

        function Jt(e) {
            return null !== e.template
        }

        function Kt(e, t) {
            Yt(e, t[1])
        }

        function Yt(e, t) {
            Xt(e), e.hasOwnProperty("tView_") && Fe(e.tView_, t, "This TNode does not belong to this TView.")
        }

        function Xt(e) {
            We(e, "TNode must be defined"), e && "object" == typeof e && e.hasOwnProperty("directiveStylingLast") || qe("Not of type TNode, got: " + e)
        }

        function en(e) {
            We(e, "Expected TIcu to be defined"), "number" != typeof e.currentCaseLViewIndex && qe("Object is not of TIcu type.")
        }

        function tn(e, t = "Type passed in is not ComponentType, it does not have 'Éµcmp' property.") {
            Vt(e) || qe(t)
        }

        function nn(e) {
            We(e, "currentTNode should exist!"), We(e.parent, "currentTNode should have a parent")
        }

        function rn(e) {
            We(e, "LContainer must be defined"), Fe(qt(e), !0, "Expecting LContainer")
        }

        function on(e) {
            e && Fe(Wt(e), !0, "Expecting LView or undefined or null")
        }

        function sn(e) {
            We(e, "LView must be defined"), Fe(Wt(e), !0, "Expecting LView")
        }

        function an(e, t) {
            Fe(e.firstCreatePass, !0, t || "Should only be called in first create pass.")
        }

        function ln(e, t) {
            Fe(e.firstUpdatePass, !0, t || "Should only be called in first update pass.")
        }

        function cn(e, t) {
            un(e[1].expandoStartIndex, e.length, t)
        }

        function un(e, t, n) {
            e <= n && n < t || qe(`Index out of range (expecting ${e} <= ${n} < ${t})`)
        }

        function dn(e, t) {
            We(e, t || "Component views should always have a parent view (component's host view)")
        }

        function fn(e, t) {
            cn(e, t), cn(e, t + 8), Ne(e[t + 0], "injectorIndex should point to a bloom filter"), Ne(e[t + 1], "injectorIndex should point to a bloom filter"), Ne(e[t + 2], "injectorIndex should point to a bloom filter"), Ne(e[t + 3], "injectorIndex should point to a bloom filter"), Ne(e[t + 4], "injectorIndex should point to a bloom filter"), Ne(e[t + 5], "injectorIndex should point to a bloom filter"), Ne(e[t + 6], "injectorIndex should point to a bloom filter"), Ne(e[t + 7], "injectorIndex should point to a bloom filter"), Ne(e[t + 8], "injectorIndex should point to parent injector")
        }

        function hn(e, t) {
            const n = e.hasOwnProperty(Ct);
            if (!n && !0 === t && ngDevMode) throw new Error(`Type ${be(e)} does not have 'Éµfac' property.`);
            return n ? e[Ct] : null
        }
        class pn {
            constructor(e, t, n) {
                this.previousValue = e, this.currentValue = t, this.firstChange = n
            }
            isFirstChange() {
                return this.firstChange
            }
        }

        function gn() {
            return mn
        }

        function mn(e) {
            return e.type.prototype.ngOnChanges && (e.setInput = yn), vn
        }

        function vn() {
            const e = wn(this),
                t = e ? .current;
            if (t) {
                const n = e.previous;
                if (n === wt) e.previous = t;
                else
                    for (let e in t) n[e] = t[e];
                e.current = null, this.ngOnChanges(t)
            }
        }

        function yn(e, t, n, r) {
            const o = wn(e) || function (e, t) {
                    return e.__ngSimpleChanges__ = t
                }(e, {
                    previous: wt,
                    current: null
                }),
                i = o.current || (o.current = {}),
                s = o.previous,
                a = this.declaredInputs[n],
                l = s[a];
            i[a] = new pn(l && l.currentValue, t, s === wt), e[r] = t
        }
        gn.ngInherit = !0;

        function wn(e) {
            return e.__ngSimpleChanges__ || null
        }
        let bn = null;
        const _n = e => {
                bn = e
            },
            Mn = function (e, t, n) {
                null != bn && bn(e, t, n)
            },
            Dn = "svg",
            xn = "math";
        let Cn;

        function En() {
            return void 0 !== Cn ? Cn : "undefined" != typeof document ? document : void 0
        }
        var In;

        function Tn(e) {
            return !!e.listen
        }! function (e) {
            e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase"
        }(In || (In = {}));
        const kn = {
            createRenderer: (e, t) => En()
        };

        function Sn(e) {
            for (; Array.isArray(e);) e = e[0];
            return e
        }

        function An(e, t) {
            return ngDevMode && Ze(t, e), ngDevMode && ze(e, Bt, "Expected to be past HEADER_OFFSET"), Sn(t[e])
        }

        function On(e, t) {
            ngDevMode && Kt(e, t), ngDevMode && Ze(t, e.index);
            const n = Sn(t[e.index]);
            return ngDevMode && !Tn(t[11]) && Qe(n), n
        }

        function Nn(e, t) {
            ngDevMode && Ue(t, -1, "wrong index for TNode"), ngDevMode && $e(t, e.data.length, "wrong index for TNode");
            const n = e.data[t];
            return ngDevMode && null !== n && Xt(n), n
        }

        function Pn(e, t) {
            return ngDevMode && Ze(e, t), e[t]
        }

        function Rn(e, t) {
            ngDevMode && Ze(t, e);
            const n = t[e];
            return Wt(n) ? n : n[0]
        }

        function jn(e) {
            return 4 == (4 & e[2])
        }

        function Fn(e) {
            return 128 == (128 & e[2])
        }

        function Vn(e, t) {
            return null == t ? null : (ngDevMode && Ze(e, t), e[t])
        }

        function Ln(e) {
            e[18] = 0
        }

        function Hn(e, t) {
            e[5] += t;
            let n = e,
                r = e[3];
            for (; null !== r && (1 === t && 1 === n[5] || -1 === t && 0 === n[5]);) r[5] += t, n = r, r = r[3]
        }
        const $n = {
            lFrame: vr(null),
            bindingsEnabled: !0,
            isInCheckNoChangesMode: !1
        };

        function Bn() {
            return $n.bindingsEnabled
        }

        function Un() {
            $n.bindingsEnabled = !0
        }

        function zn() {
            $n.bindingsEnabled = !1
        }

        function Wn() {
            return $n.lFrame.lView
        }

        function qn() {
            return $n.lFrame.tView
        }

        function Qn(e) {
            return $n.lFrame.contextLView = e, e[8]
        }

        function Zn() {
            let e = Gn();
            for (; null !== e && 64 === e.type;) e = e.parent;
            return e
        }

        function Gn() {
            return $n.lFrame.currentTNode
        }

        function Jn() {
            const e = $n.lFrame,
                t = e.currentTNode;
            return e.isParent ? t : t.parent
        }

        function Kn(e, t) {
            ngDevMode && e && Yt(e, $n.lFrame.tView);
            const n = $n.lFrame;
            n.currentTNode = e, n.isParent = t
        }

        function Yn() {
            return $n.lFrame.isParent
        }

        function Xn() {
            $n.lFrame.isParent = !1
        }

        function er() {
            return $n.isInCheckNoChangesMode
        }

        function tr(e) {
            $n.isInCheckNoChangesMode = e
        }

        function nr() {
            const e = $n.lFrame;
            let t = e.bindingRootIndex;
            return -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        }

        function rr() {
            return $n.lFrame.bindingIndex
        }

        function or(e) {
            return $n.lFrame.bindingIndex = e
        }

        function ir() {
            return $n.lFrame.bindingIndex++
        }

        function sr(e) {
            const t = $n.lFrame,
                n = t.bindingIndex;
            return t.bindingIndex = t.bindingIndex + e, n
        }

        function ar(e) {
            $n.lFrame.inI18n = e
        }

        function lr(e, t) {
            const n = $n.lFrame;
            n.bindingIndex = n.bindingRootIndex = e, cr(t)
        }

        function cr(e) {
            $n.lFrame.currentDirectiveIndex = e
        }

        function ur(e) {
            const t = $n.lFrame.currentDirectiveIndex;
            return -1 === t ? null : e[t]
        }

        function dr() {
            return $n.lFrame.currentQueryIndex
        }

        function fr(e) {
            $n.lFrame.currentQueryIndex = e
        }

        function hr(e) {
            const t = e[1];
            return 2 === t.type ? (ngDevMode && We(t.declTNode, "Embedded TNodes should have declaration parents."), t.declTNode) : 1 === t.type ? e[6] : null
        }

        function pr(e, t, n) {
            if (ngDevMode && on(e), n & it.SkipSelf) {
                ngDevMode && Yt(t, e[1]);
                let r = t,
                    o = e;
                for (; !(ngDevMode && We(r, "Parent TNode should be defined"), r = r.parent, null !== r || n & it.Host || (r = hr(o), null === r) || (ngDevMode && We(o, "Parent LView should be defined"), o = o[15], 10 & r.type)););
                if (null === r) return !1;
                t = r, e = o
            }
            ngDevMode && Kt(t, e);
            const r = $n.lFrame = mr();
            return r.currentTNode = t, r.lView = e, !0
        }

        function gr(e) {
            ngDevMode && Ve(e[0], e[1], "????"), ngDevMode && on(e);
            const t = mr();
            ngDevMode && (Fe(t.isParent, !0, "Expected clean LFrame"), Fe(t.lView, null, "Expected clean LFrame"), Fe(t.tView, null, "Expected clean LFrame"), Fe(t.selectedIndex, -1, "Expected clean LFrame"), Fe(t.elementDepthCount, 0, "Expected clean LFrame"), Fe(t.currentDirectiveIndex, -1, "Expected clean LFrame"), Fe(t.currentNamespace, null, "Expected clean LFrame"), Fe(t.bindingRootIndex, -1, "Expected clean LFrame"), Fe(t.currentQueryIndex, 0, "Expected clean LFrame"));
            const n = e[1];
            $n.lFrame = t, ngDevMode && n.firstChild && Yt(n.firstChild, n), t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1
        }

        function mr() {
            const e = $n.lFrame,
                t = null === e ? null : e.child;
            return null === t ? vr(e) : t
        }

        function vr(e) {
            const t = {
                currentTNode: null,
                isParent: !0,
                lView: null,
                tView: null,
                selectedIndex: -1,
                contextLView: null,
                elementDepthCount: 0,
                currentNamespace: null,
                currentDirectiveIndex: -1,
                bindingRootIndex: -1,
                bindingIndex: -1,
                currentQueryIndex: 0,
                parent: e,
                child: null,
                inI18n: !1
            };
            return null !== e && (e.child = t), t
        }

        function yr() {
            const e = $n.lFrame;
            return $n.lFrame = e.parent, e.currentTNode = null, e.lView = null, e
        }
        const wr = yr;

        function br() {
            const e = yr();
            e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0
        }

        function _r(e) {
            return ($n.lFrame.contextLView = function (e, t) {
                for (; e > 0;) ngDevMode && We(t[15], "Declaration view should be defined if nesting level is greater than 0."), t = t[15], e--;
                return t
            }(e, $n.lFrame.contextLView))[8]
        }

        function Mr() {
            return $n.lFrame.selectedIndex
        }

        function Dr(e) {
            ngDevMode && -1 !== e && ze(e, Bt, "Index must be past HEADER_OFFSET (or -1)."), ngDevMode && $e(e, $n.lFrame.lView.length, "Can't set index passed end of LView"), $n.lFrame.selectedIndex = e
        }

        function xr() {
            const e = $n.lFrame;
            return Nn(e.tView, e.selectedIndex)
        }

        function Cr() {
            $n.lFrame.currentNamespace = Dn
        }

        function Er() {
            $n.lFrame.currentNamespace = xn
        }

        function Ir() {
            $n.lFrame.currentNamespace = null
        }

        function Tr(e, t) {
            ngDevMode && an(e);
            for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
                const t = e.data[n];
                ngDevMode && We(t, "Expecting DirectiveDef");
                const r = t.type.prototype,
                    {
                        ngAfterContentInit: o,
                        ngAfterContentChecked: i,
                        ngAfterViewInit: s,
                        ngAfterViewChecked: a,
                        ngOnDestroy: l
                    } = r;
                o && (e.contentHooks || (e.contentHooks = [])).push(-n, o), i && ((e.contentHooks || (e.contentHooks = [])).push(n, i), (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, i)), s && (e.viewHooks || (e.viewHooks = [])).push(-n, s), a && ((e.viewHooks || (e.viewHooks = [])).push(n, a), (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, a)), null != l && (e.destroyHooks || (e.destroyHooks = [])).push(n, l)
            }
        }

        function kr(e, t, n) {
            Or(e, t, 3, n)
        }

        function Sr(e, t, n, r) {
            ngDevMode && Ve(n, 3, "Init pre-order hooks should not be called more than once"), (3 & e[2]) === n && Or(e, t, n, r)
        }

        function Ar(e, t) {
            ngDevMode && Ve(t, 3, "Init hooks phase should not be incremented after all init hooks have been run.");
            let n = e[2];
            (3 & n) === t && (n &= 2047, n += 1, e[2] = n)
        }

        function Or(e, t, n, r) {
            ngDevMode && Fe(er(), !1, "Hooks should never be run when in check no changes mode.");
            const o = void 0 !== r ? 65535 & e[18] : 0,
                i = null != r ? r : -1,
                s = t.length - 1;
            let a = 0;
            for (let l = o; l < s; l++) {
                if ("number" == typeof t[l + 1]) {
                    if (a = t[l], null != r && a >= r) break
                } else {
                    t[l] < 0 && (e[18] += 65536), (a < i || -1 == i) && (Nr(e, n, t, l), e[18] = (4294901760 & e[18]) + l + 2), l++
                }
            }
        }

        function Nr(e, t, n, r) {
            const o = n[r] < 0,
                i = n[r + 1],
                s = e[o ? -n[r] : n[r]];
            if (o) {
                if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
                    e[2] += 2048, Mn(4, s, i);
                    try {
                        i.call(s)
                    } finally {
                        Mn(5, s, i)
                    }
                }
            } else {
                Mn(4, s, i);
                try {
                    i.call(s)
                } finally {
                    Mn(5, s, i)
                }
            }
        }
        const Pr = -1;
        class Rr {
            constructor(e, t, n) {
                this.factory = e, this.resolving = !1, ngDevMode && We(e, "Factory not specified"), ngDevMode && Fe(typeof e, "function", "Expected factory function."), this.canSeeViewProviders = t, this.injectImpl = n
            }
        }

        function jr(e) {
            let t = "";
            return 1 & e && (t += "|Text"), 2 & e && (t += "|Element"), 4 & e && (t += "|Container"), 8 & e && (t += "|ElementContainer"), 16 & e && (t += "|Projection"), 32 & e && (t += "|IcuContainer"), 64 & e && (t += "|Placeholder"), t.length > 0 ? t.substring(1) : t
        }

        function Fr(e, t, n) {
            We(e, "should be called with a TNode"), 0 == (e.type & t) && qe(n || `Expected [${jr(t)}] but got ${jr(e.type)}.`)
        }

        function Vr(e, t, n) {
            const r = Tn(e);
            let o = 0;
            for (; o < n.length;) {
                const i = n[o];
                if ("number" == typeof i) {
                    if (0 !== i) break;
                    o++;
                    const s = n[o++],
                        a = n[o++],
                        l = n[o++];
                    ngDevMode && ngDevMode.rendererSetAttribute++, r ? e.setAttribute(t, a, l, s) : t.setAttributeNS(s, a, l)
                } else {
                    const s = i,
                        a = n[++o];
                    ngDevMode && ngDevMode.rendererSetAttribute++, Hr(s) ? r && e.setProperty(t, s, a) : r ? e.setAttribute(t, s, a) : t.setAttribute(s, a), o++
                }
            }
            return o
        }

        function Lr(e) {
            return 3 === e || 4 === e || 6 === e
        }

        function Hr(e) {
            return 64 === e.charCodeAt(0)
        }

        function $r(e, t) {
            if (null === t || 0 === t.length);
            else if (null === e || 0 === e.length) e = t.slice();
            else {
                let n = -1;
                for (let r = 0; r < t.length; r++) {
                    const o = t[r];
                    "number" == typeof o ? n = o : 0 === n || Br(e, n, o, null, -1 === n || 2 === n ? t[++r] : null)
                }
            }
            return e
        }

        function Br(e, t, n, r, o) {
            let i = 0,
                s = e.length;
            if (-1 === t) s = -1;
            else
                for (; i < e.length;) {
                    const n = e[i++];
                    if ("number" == typeof n) {
                        if (n === t) {
                            s = -1;
                            break
                        }
                        if (n > t) {
                            s = i - 1;
                            break
                        }
                    }
                }
            for (; i < e.length;) {
                const t = e[i];
                if ("number" == typeof t) break;
                if (t === n) {
                    if (null === r) return void(null !== o && (e[i + 1] = o));
                    if (r === e[i + 1]) return void(e[i + 2] = o)
                }
                i++, null !== r && i++, null !== o && i++
            } - 1 !== s && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), null !== r && e.splice(i++, 0, r), null !== o && e.splice(i++, 0, o)
        }

        function Ur(e) {
            return e !== Pr
        }

        function zr(e) {
            ngDevMode && Ne(e, "Number expected"), ngDevMode && Ve(e, -1, "Not a valid state.");
            return ngDevMode && Ue(32767 & e, Bt, "Parent injector must be pointing past HEADER_OFFSET."), 32767 & e
        }

        function Wr(e, t) {
            let n = e >> 16;
            let r = t;
            for (; n > 0;) r = r[15], n--;
            return r
        }
        let qr = !0;

        function Qr(e) {
            const t = qr;
            return qr = e, t
        }
        let Zr = 0;

        function Gr(e, t) {
            const n = Kr(e, t);
            if (-1 !== n) return n;
            const r = t[1];
            r.firstCreatePass && (e.injectorIndex = t.length, Jr(r.data, e), Jr(t, null), Jr(r.blueprint, null));
            const o = Yr(e, t),
                i = e.injectorIndex;
            if (Ur(o)) {
                const e = zr(o),
                    n = Wr(o, t),
                    r = n[1].data;
                for (let o = 0; o < 8; o++) t[i + o] = n[e + o] | r[e + o]
            }
            return t[i + 8] = o, i
        }

        function Jr(e, t) {
            e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
        }

        function Kr(e, t) {
            return -1 === e.injectorIndex || e.parent && e.parent.injectorIndex === e.injectorIndex || null === t[e.injectorIndex + 8] ? -1 : (ngDevMode && Ze(t, e.injectorIndex), e.injectorIndex)
        }

        function Yr(e, t) {
            if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
            let n = 0,
                r = null,
                o = t;
            for (; null !== o;) {
                const e = o[1],
                    t = e.type;
                if (2 === t ? (ngDevMode && We(e.declTNode, "Embedded TNodes should have declaration parents."), r = e.declTNode) : 1 === t ? r = o[6] : (ngDevMode && Fe(e.type, 0, "Root type expected"), r = null), null === r) return Pr;
                if (ngDevMode && r && Kt(r, o[15]), n++, o = o[15], -1 !== r.injectorIndex) return r.injectorIndex | n << 16
            }
            return Pr
        }

        function Xr(e, t, n) {
            ! function (e, t, n) {
                let r;
                ngDevMode && Fe(t.firstCreatePass, !0, "expected firstCreatePass to be true"), "string" == typeof n ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(Et) && (r = n[Et]), null == r && (r = n[Et] = Zr++);
                const o = 255 & r,
                    i = 1 << o;
                t.data[e + (o >> 5)] |= i
            }(e, t, n)
        }

        function eo(e, t, n) {
            if (n & it.Optional) return e;
            Oe(t, "NodeInjector")
        }

        function to(e, t, n, r) {
            if (n & it.Optional && void 0 === r && (r = null), 0 == (n & (it.Self | it.Host))) {
                const o = e[9],
                    i = at(void 0);
                try {
                    return o ? o.get(t, r, n & it.Optional) : lt(t, r, n & it.Optional)
                } finally {
                    at(i)
                }
            }
            return eo(r, t, n)
        }

        function no(e, t, n, r = it.Default, o) {
            if (null !== e) {
                const i = function (e) {
                    if (ngDevMode && We(e, "token must be defined"), "string" == typeof e) return e.charCodeAt(0) || 0;
                    const t = e.hasOwnProperty(Et) ? e[Et] : void 0;
                    return "number" == typeof t ? t >= 0 ? 255 & t : (ngDevMode && Fe(t, -1, "Expecting to get Special Injector Id"), oo) : t
                }(n);
                if ("function" == typeof i) {
                    if (!pr(t, e, r)) return r & it.Host ? eo(o, n, r) : to(t, n, r, o);
                    try {
                        const e = i(r);
                        if (null != e || r & it.Optional) return e;
                        Oe(n)
                    } finally {
                        wr()
                    }
                } else if ("number" == typeof i) {
                    let o = null,
                        s = Kr(e, t),
                        a = Pr,
                        l = r & it.Host ? t[16][6] : null;
                    for ((-1 === s || r & it.SkipSelf) && (a = -1 === s ? Yr(e, t) : t[s + 8], a !== Pr && co(r, !1) ? (o = t[1], s = zr(a), t = Wr(a, t)) : s = -1); - 1 !== s;) {
                        ngDevMode && fn(t, s);
                        const e = t[1];
                        if (ngDevMode && Kt(e.data[s + 8], t), lo(i, s, e.data)) {
                            const e = io(s, t, n, o, r, l);
                            if (e !== ro) return e
                        }
                        a = t[s + 8], a !== Pr && co(r, t[1].data[s + 8] === l) && lo(i, s, t) ? (o = e, s = zr(a), t = Wr(a, t)) : s = -1
                    }
                }
            }
            return to(t, n, r, o)
        }
        const ro = {};

        function oo() {
            return new uo(Zn(), Wn())
        }

        function io(e, t, n, r, o, i) {
            const s = t[1],
                a = s.data[e + 8],
                l = so(a, s, n, null == r ? Zt(a) && qr : r != s && 0 != (3 & a.type), o & it.Host && i === a);
            return null !== l ? ao(t, s, l, a) : ro
        }

        function so(e, t, n, r, o) {
            const i = e.providerIndexes,
                s = t.data,
                a = 1048575 & i,
                l = e.directiveStart,
                c = e.directiveEnd,
                u = i >> 20,
                d = o ? a + u : c;
            for (let e = r ? a : a + u; e < d; e++) {
                const t = s[e];
                if (e < l && n === t || e >= l && t.type === n) return e
            }
            if (o) {
                const e = s[l];
                if (e && Jt(e) && e.type === n) return l
            }
            return null
        }

        function ao(e, t, n, r) {
            let o = e[n];
            const i = t.data;
            if (o instanceof Rr) {
                const s = o;
                s.resolving && Se(ke(i[n]));
                const a = Qr(s.canSeeViewProviders);
                s.resolving = !0;
                const l = s.injectImpl ? at(s.injectImpl) : null,
                    c = pr(e, r, it.Default);
                ngDevMode && Fe(c, !0, "Because flags do not contain `SkipSelf' we expect this to always succeed.");
                try {
                    o = e[n] = s.factory(void 0, i, e, r), t.firstCreatePass && n >= r.directiveStart && (ngDevMode && function (e) {
                        void 0 !== e.type && null != e.selectors && void 0 !== e.inputs || qe("Expected a DirectiveDef/ComponentDef and this object does not seem to have the expected shape.")
                    }(i[n]), function (e, t, n) {
                        ngDevMode && an(n);
                        const {
                            ngOnChanges: r,
                            ngOnInit: o,
                            ngDoCheck: i
                        } = t.type.prototype;
                        if (r) {
                            const r = mn(t);
                            (n.preOrderHooks || (n.preOrderHooks = [])).push(e, r), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, r)
                        }
                        o && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, o), i && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, i))
                    }(n, i[n], t))
                } finally {
                    null !== l && at(l), Qr(a), s.resolving = !1, wr()
                }
            }
            return o
        }

        function lo(e, t, n) {
            const r = 1 << e;
            return !!(n[t + (e >> 5)] & r)
        }

        function co(e, t) {
            return !(e & it.Self || e & it.Host && t)
        }
        class uo {
            constructor(e, t) {
                this._tNode = e, this._lView = t
            }
            get(e, t, n) {
                return no(this._tNode, this._lView, e, n, t)
            }
        }

        function fo(e) {
            return ct((() => {
                const t = e.prototype.constructor,
                    n = t[Ct] || ho(t),
                    r = Object.prototype;
                let o = Object.getPrototypeOf(e.prototype).constructor;
                for (; o && o !== r;) {
                    const e = o[Ct] || ho(o);
                    if (e && e !== n) return e;
                    o = Object.getPrototypeOf(o)
                }
                return e => new e
            }))
        }

        function ho(e) {
            return Ce(e) ? () => {
                const t = ho(xe(e));
                return t && t()
            } : hn(e)
        }

        function po(e) {
            return function (e, t) {
                if (ngDevMode && Fr(e, 15), ngDevMode && We(e, "expecting tNode"), "class" === t) return e.classes;
                if ("style" === t) return e.styles;
                const n = e.attrs;
                if (n) {
                    const e = n.length;
                    let r = 0;
                    for (; r < e;) {
                        const o = n[r];
                        if (Lr(o)) break;
                        if (0 === o) r += 2;
                        else if ("number" == typeof o)
                            for (r++; r < e && "string" == typeof n[r];) r++;
                        else {
                            if (o === t) return n[r + 1];
                            r += 2
                        }
                    }
                }
                return null
            }(Zn(), e)
        }
        const go = "__annotations__",
            mo = "__parameters__",
            vo = "__prop__metadata__";

        function yo(e, t, n, r, o) {
            return ct((() => {
                const i = wo(t);

                function s(...e) {
                    if (this instanceof s) return i.call(this, ...e), this;
                    const t = new s(...e);
                    return function (n) {
                        o && o(n, ...e);
                        return (n.hasOwnProperty(go) ? n[go] : Object.defineProperty(n, go, {
                            value: []
                        })[go]).push(t), r && r(n), n
                    }
                }
                return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s
            }))
        }

        function wo(e) {
            return function (...t) {
                if (e) {
                    const n = e(...t);
                    for (const e in n) this[e] = n[e]
                }
            }
        }

        function bo(e, t, n) {
            return ct((() => {
                const r = wo(t);

                function o(...e) {
                    if (this instanceof o) return r.apply(this, e), this;
                    const t = new o(...e);
                    return n.annotation = t, n;

                    function n(e, n, r) {
                        const o = e.hasOwnProperty(mo) ? e[mo] : Object.defineProperty(e, mo, {
                            value: []
                        })[mo];
                        for (; o.length <= r;) o.push(null);
                        return (o[r] = o[r] || []).push(t), e
                    }
                }
                return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = e, o.annotationCls = o, o
            }))
        }

        function _o(e, t, n, r) {
            return ct((() => {
                const o = wo(t);

                function i(...e) {
                    if (this instanceof i) return o.apply(this, e), this;
                    const t = new i(...e);
                    return function (n, o) {
                        const i = n.constructor,
                            s = i.hasOwnProperty(vo) ? i[vo] : Object.defineProperty(i, vo, {
                                value: {}
                            })[vo];
                        s[o] = s.hasOwnProperty(o) && s[o] || [], s[o].unshift(t), r && r(n, o, ...e)
                    }
                }
                return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i
            }))
        }
        const Mo = bo("Attribute", (e => ({
            attributeName: e,
            __NG_ELEMENT_ID__: () => po(e)
        })));
        class Do {
            constructor(e, t) {
                this._desc = e, this.ngMetadataName = "InjectionToken", this.Éµprov = void 0, "number" == typeof t ? (("undefined" == typeof ngDevMode || ngDevMode) && $e(t, 0, "Only negative numbers are supported here"), this.__NG_ELEMENT_ID__ = t) : void 0 !== t && (this.Éµprov = Je({
                    token: this,
                    providedIn: t.providedIn || "root",
                    factory: t.factory
                }))
            }
            toString() {
                return `InjectionToken ${this._desc}`
            }
        }
        new Do("AnalyzeForEntryComponents");
        class xo {}
        _o("ContentChildren", ((e, t = {}) => ({
            selector: e,
            first: !1,
            isViewQuery: !1,
            descendants: !1,
            emitDistinctChangesOnly: true,
            ...t
        })), xo), _o("ContentChild", ((e, t = {}) => ({
            selector: e,
            first: !0,
            isViewQuery: !1,
            descendants: !0,
            ...t
        })), xo), _o("ViewChildren", ((e, t = {}) => ({
            selector: e,
            first: !1,
            isViewQuery: !0,
            descendants: !0,
            emitDistinctChangesOnly: true,
            ...t
        })), xo), _o("ViewChild", ((e, t) => ({
            selector: e,
            first: !0,
            isViewQuery: !0,
            descendants: !0,
            ...t
        })), xo);
        var Co, Eo;

        function Io(e) {
            const t = vt.ng;
            if (t && t.ÉµcompilerFacade) return t.ÉµcompilerFacade;
            if ("undefined" == typeof ngDevMode || ngDevMode) {
                console.error(`JIT compilation failed for ${e.kind}`, e.type);
                let t = `The ${e.kind} '${e.type.name}' needs to be compiled using the JIT compiler, but '@angular/compiler' is not available.\n\n`;
                throw 1 === e.usage ? (t += `The ${e.kind} is part of a library that has been partially compiled.\n`, t += "However, the Angular Linker has not processed the library such that JIT compilation is used as fallback.\n", t += "\n", t += "Ideally, the library is processed using the Angular Linker to become fully AOT compiled.\n") : t += "JIT compilation is discouraged for production use-cases! Consider using AOT mode instead.\n", t += "Alternatively, the JIT compiler should be loaded by bootstrapping using '@angular/platform-browser-dynamic' or '@angular/platform-server',\n", t += "or manually provide the compiler with 'import \"@angular/compiler\";' before bootstrapping.", new Error(t)
            }
            throw new Error("JIT compiler unavailable")
        }! function (e) {
            e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule"
        }(Co || (Co = {})),
        function (e) {
            e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom"
        }(Eo || (Eo = {}));
        const To = Function;

        function ko(e) {
            return "function" == typeof e
        }

        function So(e, t) {
            void 0 === t && (t = e);
            for (let n = 0; n < e.length; n++) {
                let r = e[n];
                Array.isArray(r) ? (t === e && (t = e.slice(0, n)), So(r, t)) : t !== e && t.push(r)
            }
            return t
        }

        function Ao(e, t) {
            e.forEach((e => Array.isArray(e) ? Ao(e, t) : t(e)))
        }

        function Oo(e, t, n) {
            t >= e.length ? e.push(n) : e.splice(t, 0, n)
        }

        function No(e, t) {
            return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
        }

        function Po(e, t) {
            const n = [];
            for (let r = 0; r < e; r++) n.push(t);
            return n
        }

        function Ro(e, t, n) {
            let r = Fo(e, t);
            return r >= 0 ? e[1 | r] = n : (r = ~r, function (e, t, n, r) {
                ngDevMode && Be(t, e.length, "Can't insert past array end.");
                let o = e.length;
                if (o == t) e.push(n, r);
                else if (1 === o) e.push(r, e[0]), e[0] = n;
                else {
                    for (o--, e.push(e[o - 1], e[o]); o > t;) {
                        const t = o - 2;
                        e[o] = e[t], o--
                    }
                    e[t] = n, e[t + 1] = r
                }
            }(e, r, t, n)), r
        }

        function jo(e, t) {
            const n = Fo(e, t);
            if (n >= 0) return e[1 | n]
        }

        function Fo(e, t) {
            return Vo(e, t, 1)
        }

        function Vo(e, t, n) {
            ngDevMode && Fe(Array.isArray(e), !0, "Expecting an array");
            let r = 0,
                o = e.length >> n;
            for (; o !== r;) {
                const i = r + (o - r >> 1),
                    s = e[i << n];
                if (t === s) return i << n;
                s > t ? o = i : r = i + 1
            }
            return ~(o << n)
        }
        const Lo = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/,
            Ho = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,
            $o = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,
            Bo = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
        class Uo {
            constructor(e) {
                this._reflect = e || vt.Reflect
            }
            isReflectionEnabled() {
                return !0
            }
            factory(e) {
                return (...t) => new e(...t)
            }
            _zipTypesAndAnnotations(e, t) {
                let n;
                n = Po(void 0 === e ? t.length : e.length);
                for (let r = 0; r < n.length; r++) void 0 === e ? n[r] = [] : e[r] && e[r] != Object ? n[r] = [e[r]] : n[r] = [], t && null != t[r] && (n[r] = n[r].concat(t[r]));
                return n
            }
            _ownParameters(e, t) {
                if (function (e) {
                        return Lo.test(e) || Bo.test(e) || Ho.test(e) && !$o.test(e)
                    }(e.toString())) return null;
                if (e.parameters && e.parameters !== t.parameters) return e.parameters;
                const n = e.ctorParameters;
                if (n && n !== t.ctorParameters) {
                    const e = "function" == typeof n ? n() : n,
                        t = e.map((e => e && e.type)),
                        r = e.map((e => e && zo(e.decorators)));
                    return this._zipTypesAndAnnotations(t, r)
                }
                const r = e.hasOwnProperty(mo) && e[mo],
                    o = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", e);
                return o || r ? this._zipTypesAndAnnotations(o, r) : Po(e.length)
            }
            parameters(e) {
                if (!ko(e)) return [];
                const t = Wo(e);
                let n = this._ownParameters(e, t);
                return n || t === Object || (n = this.parameters(t)), n || []
            }
            _ownAnnotations(e, t) {
                if (e.annotations && e.annotations !== t.annotations) {
                    let t = e.annotations;
                    return "function" == typeof t && t.annotations && (t = t.annotations), t
                }
                return e.decorators && e.decorators !== t.decorators ? zo(e.decorators) : e.hasOwnProperty(go) ? e[go] : null
            }
            annotations(e) {
                if (!ko(e)) return [];
                const t = Wo(e),
                    n = this._ownAnnotations(e, t) || [];
                return (t !== Object ? this.annotations(t) : []).concat(n)
            }
            _ownPropMetadata(e, t) {
                if (e.propMetadata && e.propMetadata !== t.propMetadata) {
                    let t = e.propMetadata;
                    return "function" == typeof t && t.propMetadata && (t = t.propMetadata), t
                }
                if (e.propDecorators && e.propDecorators !== t.propDecorators) {
                    const t = e.propDecorators,
                        n = {};
                    return Object.keys(t).forEach((e => {
                        n[e] = zo(t[e])
                    })), n
                }
                return e.hasOwnProperty(vo) ? e[vo] : null
            }
            propMetadata(e) {
                if (!ko(e)) return {};
                const t = Wo(e),
                    n = {};
                if (t !== Object) {
                    const e = this.propMetadata(t);
                    Object.keys(e).forEach((t => {
                        n[t] = e[t]
                    }))
                }
                const r = this._ownPropMetadata(e, t);
                return r && Object.keys(r).forEach((e => {
                    const t = [];
                    n.hasOwnProperty(e) && t.push(...n[e]), t.push(...r[e]), n[e] = t
                })), n
            }
            ownPropMetadata(e) {
                return ko(e) && this._ownPropMetadata(e, Wo(e)) || {}
            }
            hasLifecycleHook(e, t) {
                return e instanceof To && t in e.prototype
            }
            guards(e) {
                return {}
            }
            getter(e) {
                return new Function("o", "return o." + e + ";")
            }
            setter(e) {
                return new Function("o", "v", "return o." + e + " = v;")
            }
            method(e) {
                return new Function("o", "args", `if (!o.${e}) throw new Error('"${e}" is undefined');\n        return o.${e}.apply(o, args);`)
            }
            importUri(e) {
                return "object" == typeof e && e.filePath ? e.filePath : `./${be(e)}`
            }
            resourceUri(e) {
                return `./${be(e)}`
            }
            resolveIdentifier(e, t, n, r) {
                return r
            }
            resolveEnum(e, t) {
                return e[t]
            }
        }

        function zo(e) {
            return e ? e.map((e => new(0, e.type.annotationCls)(...e.args ? e.args : []))) : []
        }

        function Wo(e) {
            const t = e.prototype ? Object.getPrototypeOf(e.prototype) : null;
            return (t ? t.constructor : null) || Object
        }
        const qo = {},
            Qo = /\n/gm,
            Zo = "__source",
            Go = ye({
                provide: String,
                useValue: ye
            });
        let Jo;

        function Ko(e) {
            const t = Jo;
            return Jo = e, t
        }

        function Yo(e, t = it.Default) {
            if (void 0 === Jo) {
                const e = "undefined" == typeof ngDevMode || ngDevMode ? "inject() must be called from an injection context" : "";
                throw new Ee(203, e)
            }
            return null === Jo ? lt(e, void 0, t) : Jo.get(e, t & it.Optional ? null : void 0, t)
        }

        function Xo(e, t = it.Default) {
            return (st || Yo)(xe(e), t)
        }

        function ei(e) {
            const t = ngDevMode ? `This constructor is not compatible with Angular Dependency Injection because its dependency at index ${e} of the parameter list is invalid.\nThis can happen if the dependency type is a primitive like a string or if an ancestor of this class is missing an Angular decorator.\n\nPlease check that 1) the type for the parameter at index ${e} is correct and 2) the correct Angular decorators are defined for this class and its ancestors.` : "invalid";
            throw new Error(t)
        }
        const ti = Xo;

        function ni(e) {
            const t = [];
            for (let n = 0; n < e.length; n++) {
                const r = xe(e[n]);
                if (Array.isArray(r)) {
                    if (0 === r.length) {
                        const e = "undefined" == typeof ngDevMode || ngDevMode ? "Arguments array must have arguments." : "";
                        throw new Ee(900, e)
                    }
                    let e, n = it.Default;
                    for (let t = 0; t < r.length; t++) {
                        const o = r[t],
                            i = o.__NG_DI_FLAG__;
                        "number" == typeof i ? -1 === i ? e = o.token : n |= i : e = o
                    }
                    t.push(Xo(e, n))
                } else t.push(Xo(r))
            }
            return t
        }

        function ri(e, t) {
            return e.__NG_DI_FLAG__ = t, e.prototype.__NG_DI_FLAG__ = t, e
        }

        function oi(e, t, n, r) {
            const o = e.ngTempTokenPath;
            throw t[Zo] && o.unshift(t[Zo]), e.message = function (e, t, n, r = null) {
                e = e && "\n" === e.charAt(0) && "Éµ" == e.charAt(1) ? e.substr(2) : e;
                let o = be(t);
                if (Array.isArray(t)) o = t.map(be).join(" -> ");
                else if ("object" == typeof t) {
                    let e = [];
                    for (let n in t)
                        if (t.hasOwnProperty(n)) {
                            let r = t[n];
                            e.push(n + ":" + ("string" == typeof r ? JSON.stringify(r) : be(r)))
                        } o = `{${e.join(", ")}}`
                }
                return `${n}${r?"("+r+")":""}[${o}]: ${e.replace(Qo,"\n  ")}`
            }("\n" + e.message, o, n, r), e.ngTokenPath = o, e.ngTempTokenPath = null, e
        }
        const ii = ri(bo("Inject", (e => ({
                token: e
            }))), -1),
            si = ri(bo("Optional"), 8),
            ai = ri(bo("Self"), 2),
            li = ri(bo("SkipSelf"), 4),
            ci = ri(bo("Host"), 1);
        let ui = null;

        function di() {
            return ui = ui || new Uo
        }

        function fi(e) {
            return hi(di().parameters(e))
        }

        function hi(e) {
            return e.map((e => function (e) {
                const t = {
                    token: null,
                    attribute: null,
                    host: !1,
                    optional: !1,
                    self: !1,
                    skipSelf: !1
                };
                if (Array.isArray(e) && e.length > 0)
                    for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        if (void 0 === r) continue;
                        const o = Object.getPrototypeOf(r);
                        if (r instanceof si || "Optional" === o.ngMetadataName) t.optional = !0;
                        else if (r instanceof li || "SkipSelf" === o.ngMetadataName) t.skipSelf = !0;
                        else if (r instanceof ai || "Self" === o.ngMetadataName) t.self = !0;
                        else if (r instanceof ci || "Host" === o.ngMetadataName) t.host = !0;
                        else if (r instanceof ii) t.token = r.token;
                        else if (r instanceof Mo) {
                            if (void 0 === r.attributeName) throw new Error("Attribute name must be defined.");
                            t.attribute = r.attributeName
                        } else t.token = r
                    } else void 0 === e || Array.isArray(e) && 0 === e.length ? t.token = null : t.token = e;
                return t
            }(e)))
        }

        function pi(e) {
            const t = [],
                n = new Map;

            function r(t) {
                let r = n.get(t);
                if (!r) {
                    const o = e(t);
                    n.set(t, r = o.then(yi))
                }
                return r
            }
            return gi.forEach(((e, n) => {
                    const o = [];
                    e.templateUrl && o.push(r(e.templateUrl).then((t => {
                        e.template = t
                    })));
                    const i = e.styleUrls,
                        s = e.styles || (e.styles = []),
                        a = e.styles.length;
                    i && i.forEach(((t, n) => {
                        s.push(""), o.push(r(t).then((r => {
                            s[a + n] = r, i.splice(i.indexOf(t), 1), 0 == i.length && (e.styleUrls = void 0)
                        })))
                    }));
                    const l = Promise.all(o).then((() => function (e) {
                        mi.delete(e)
                    }(n)));
                    t.push(l)
                })),
                function () {
                    const e = gi;
                    gi = new Map
                }(), Promise.all(t).then((() => {}))
        }
        let gi = new Map;
        const mi = new Set;

        function vi(e) {
            return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls && e.styleUrls.length)
        }

        function yi(e) {
            return "string" == typeof e ? e : e.text()
        }
        let wi, bi;

        function _i() {
            if (void 0 === wi && (wi = null, vt.trustedTypes)) try {
                wi = vt.trustedTypes.createPolicy("angular", {
                    createHTML: e => e,
                    createScript: e => e,
                    createScriptURL: e => e
                })
            } catch {}
            return wi
        }

        function Mi(e) {
            return _i() ? .createHTML(e) || e
        }

        function Di(...e) {
            if ("undefined" == typeof ngDevMode) throw new Error("newTrustedFunctionForDev should never be called in production");
            if (!vt.trustedTypes) return new Function(...e);
            const t = `(function anonymous(${e.slice(0,-1).join(",")}\n) { ${e[e.length-1]}\n})`,
                n = vt.eval((r = t, _i() ? .createScript(r) || r));
            var r;
            return void 0 === n.bind ? new Function(...e) : (n.toString = () => t, n.bind(vt))
        }

        function xi() {
            if (void 0 === bi && (bi = null, vt.trustedTypes)) try {
                bi = vt.trustedTypes.createPolicy("angular#unsafe-bypass", {
                    createHTML: e => e,
                    createScript: e => e,
                    createScriptURL: e => e
                })
            } catch {}
            return bi
        }

        function Ci(e) {
            return xi() ? .createHTML(e) || e
        }

        function Ei(e) {
            return xi() ? .createScript(e) || e
        }

        function Ii(e) {
            return xi() ? .createScriptURL(e) || e
        }
        class Ti {
            constructor(e) {
                this.changingThisBreaksApplicationSecurity = e
            }
            toString() {
                return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`
            }
        }

        function ki(e) {
            return e instanceof Ti ? e.changingThisBreaksApplicationSecurity : e
        }

        function Si(e, t) {
            const n = function (e) {
                return e instanceof Ti && e.getTypeName() || null
            }(e);
            if (null != n && n !== t) {
                if ("ResourceURL" === n && "URL" === t) return !0;
                throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)
            }
            return n === t
        }

        function Ai(e) {
            const t = new Ni(e);
            return function () {
                try {
                    return !!(new window.DOMParser).parseFromString(Mi(""), "text/html")
                } catch {
                    return !1
                }
            }() ? new Oi(t) : t
        }
        class Oi {
            constructor(e) {
                this.inertDocumentHelper = e
            }
            getInertBodyElement(e) {
                e = "<body><remove></remove>" + e;
                try {
                    const t = (new window.DOMParser).parseFromString(Mi(e), "text/html").body;
                    return null === t ? this.inertDocumentHelper.getInertBodyElement(e) : (t.removeChild(t.firstChild), t)
                } catch {
                    return null
                }
            }
        }
        class Ni {
            constructor(e) {
                if (this.defaultDoc = e, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), null == this.inertDocument.body) {
                    const e = this.inertDocument.createElement("html");
                    this.inertDocument.appendChild(e);
                    const t = this.inertDocument.createElement("body");
                    e.appendChild(t)
                }
            }
            getInertBodyElement(e) {
                const t = this.inertDocument.createElement("template");
                if ("content" in t) return t.innerHTML = Mi(e), t;
                const n = this.inertDocument.createElement("body");
                return n.innerHTML = Mi(e), this.defaultDoc.documentMode && this.stripCustomNsAttrs(n), n
            }
            stripCustomNsAttrs(e) {
                const t = e.attributes;
                for (let n = t.length - 1; 0 < n; n--) {
                    const r = t.item(n).name;
                    "xmlns:ns1" !== r && 0 !== r.indexOf("ns1:") || e.removeAttribute(r)
                }
                let n = e.firstChild;
                for (; n;) n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n), n = n.nextSibling
            }
        }
        const Pi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
            Ri = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

        function ji(e) {
            return (e = String(e)).match(Pi) || e.match(Ri) ? e : (("undefined" == typeof ngDevMode || ngDevMode) && console.warn(`WARNING: sanitizing unsafe URL value ${e} (see https://g.co/ng/security#xss)`), "unsafe:" + e)
        }

        function Fi(e) {
            return (e = String(e)).split(",").map((e => ji(e.trim()))).join(", ")
        }

        function Vi(e) {
            const t = {};
            for (const n of e.split(",")) t[n] = !0;
            return t
        }

        function Li(...e) {
            const t = {};
            for (const n of e)
                for (const e in n) n.hasOwnProperty(e) && (t[e] = !0);
            return t
        }
        const Hi = Vi("area,br,col,hr,img,wbr"),
            $i = Vi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
            Bi = Vi("rp,rt"),
            Ui = Li(Bi, $i),
            zi = Li($i, Vi("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),
            Wi = Li(Bi, Vi("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),
            qi = Li(Hi, zi, Wi, Ui),
            Qi = Vi("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
            Zi = Vi("srcset"),
            Gi = Vi("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),
            Ji = Vi("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),
            Ki = Li(Qi, Zi, Gi, Ji),
            Yi = Vi("script,style,template");
        class Xi {
            constructor() {
                this.sanitizedSomething = !1, this.buf = []
            }
            sanitizeChildren(e) {
                let t = e.firstChild,
                    n = !0;
                for (; t;)
                    if (t.nodeType === Node.ELEMENT_NODE ? n = this.startElement(t) : t.nodeType === Node.TEXT_NODE ? this.chars(t.nodeValue) : this.sanitizedSomething = !0, n && t.firstChild) t = t.firstChild;
                    else
                        for (; t;) {
                            t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                            let e = this.checkClobberedElement(t, t.nextSibling);
                            if (e) {
                                t = e;
                                break
                            }
                            t = this.checkClobberedElement(t, t.parentNode)
                        }
                return this.buf.join("")
            }
            startElement(e) {
                const t = e.nodeName.toLowerCase();
                if (!qi.hasOwnProperty(t)) return this.sanitizedSomething = !0, !Yi.hasOwnProperty(t);
                this.buf.push("<"), this.buf.push(t);
                const n = e.attributes;
                for (let e = 0; e < n.length; e++) {
                    const t = n.item(e),
                        r = t.name,
                        o = r.toLowerCase();
                    if (!Ki.hasOwnProperty(o)) {
                        this.sanitizedSomething = !0;
                        continue
                    }
                    let i = t.value;
                    Qi[o] && (i = ji(i)), Zi[o] && (i = Fi(i)), this.buf.push(" ", r, '="', ns(i), '"')
                }
                return this.buf.push(">"), !0
            }
            endElement(e) {
                const t = e.nodeName.toLowerCase();
                qi.hasOwnProperty(t) && !Hi.hasOwnProperty(t) && (this.buf.push("</"), this.buf.push(t), this.buf.push(">"))
            }
            chars(e) {
                this.buf.push(ns(e))
            }
            checkClobberedElement(e, t) {
                if (t && (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`);
                return t
            }
        }
        const es = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            ts = /([^\#-~ |!])/g;

        function ns(e) {
            return e.replace(/&/g, "&amp;").replace(es, (function (e) {
                return "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";"
            })).replace(ts, (function (e) {
                return "&#" + e.charCodeAt(0) + ";"
            })).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
        let rs;

        function os(e) {
            return "content" in e && function (e) {
                return e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
            }(e) ? e.content : null
        }
        var is;

        function ss(e) {
            const t = ps();
            return t ? Ci(t.sanitize(is.HTML, e) || "") : Si(e, "HTML") ? Ci(ki(e)) : function (e, t) {
                let n = null;
                try {
                    rs = rs || Ai(e);
                    let r = t ? String(t) : "";
                    n = rs.getInertBodyElement(r);
                    let o = 5,
                        i = r;
                    do {
                        if (0 === o) throw new Error("Failed to sanitize html because the input is unstable");
                        o--, r = i, i = n.innerHTML, n = rs.getInertBodyElement(r)
                    } while (r !== i);
                    const s = new Xi,
                        a = s.sanitizeChildren(os(n) || n);
                    return ("undefined" == typeof ngDevMode || ngDevMode) && s.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see https://g.co/ng/security#xss"), Mi(a)
                } finally {
                    if (n) {
                        const e = os(n) || n;
                        for (; e.firstChild;) e.removeChild(e.firstChild)
                    }
                }
            }(En(), Te(e))
        }

        function as(e) {
            const t = ps();
            return t ? t.sanitize(is.STYLE, e) || "" : Si(e, "Style") ? ki(e) : Te(e)
        }

        function ls(e) {
            const t = ps();
            return t ? t.sanitize(is.URL, e) || "" : Si(e, "URL") ? ki(e) : ji(Te(e))
        }

        function cs(e) {
            const t = ps();
            if (t) return Ii(t.sanitize(is.RESOURCE_URL, e) || "");
            if (Si(e, "ResourceURL")) return Ii(ki(e));
            const n = "undefined" == typeof ngDevMode || ngDevMode ? "unsafe value used in a resource URL context (see https://g.co/ng/security#xss)" : "";
            throw new Ee(904, n)
        }

        function us(e) {
            const t = ps();
            if (t) return Ei(t.sanitize(is.SCRIPT, e) || "");
            if (Si(e, "Script")) return Ei(ki(e));
            const n = "undefined" == typeof ngDevMode || ngDevMode ? "unsafe value used in a script context" : "";
            throw new Ee(905, n)
        }

        function ds(e) {
            if (ngDevMode && (!Array.isArray(e) || !Array.isArray(e.raw) || 1 !== e.length)) throw new Error(`Unexpected interpolation in trusted HTML constant: ${e.join("?")}`);
            return Mi(e[0])
        }

        function fs(e) {
            if (ngDevMode && (!Array.isArray(e) || !Array.isArray(e.raw) || 1 !== e.length)) throw new Error(`Unexpected interpolation in trusted URL constant: ${e.join("?")}`);
            return function (e) {
                return _i() ? .createScriptURL(e) || e
            }(e[0])
        }

        function hs(e, t, n) {
            return function (e, t) {
                return "src" === t && ("embed" === e || "frame" === e || "iframe" === e || "media" === e || "script" === e) || "href" === t && ("base" === e || "link" === e) ? cs : ls
            }(t, n)(e)
        }

        function ps() {
            const e = Wn();
            return e && e[12]
        }

        function gs(e) {
            let t = ws(e);
            if (t) {
                if (Array.isArray(t)) {
                    const r = t;
                    let o, i, s;
                    if (e && n.constructor && n.constructor.Éµcmp) {
                        if (Ds(r, e), -1 == o) throw new Error("The provided component was not found in the application");
                        e
                    } else if (function (e) {
                            return e && e.constructor && e.constructor.Éµdir
                        }(e)) {
                        if (function (e, t) {
                                let n = e[1].firstChild;
                                for (; n;) {
                                    const r = n.directiveStart,
                                        o = n.directiveEnd;
                                    for (let i = r; i < o; i++)
                                        if (e[i] === t) return n.index;
                                    Ms(n)
                                }
                                return -1
                            }(r, e), -1 == o) throw new Error("The provided directive was not found in the application");
                        xs(o, r, !1)
                    } else if (_s(r, e), -1 == o) return null;
                    const a = Sn(r[o]),
                        l = ws(a),
                        c = l && !Array.isArray(l) ? l : ms(r, o, a);
                    if (i && void 0 === c.component && (c.component = i, ys(c.component, c)), s && void 0 === c.directives) {
                        c.directives = s;
                        for (let e = 0; e < s.length; e++) ys(s[e], c)
                    }
                    ys(c.native, c), c
                }
            } else {
                const t = e;
                ngDevMode && Qe(t);
                let n = t;
                for (; n.parentNode;) {
                    const e = ws(n);
                    if (e) {
                        let n;
                        if (Array.isArray(e) ? e : e.lView, !n) return null;
                        const r = _s(n, t);
                        if (r >= 0) {
                            const e = Sn(n[r]),
                                t = ms(n, r, e);
                            ys(e, t), t;
                            break
                        }
                    }
                }
            }
            var n;
            return t || null
        }

        function ms(e, t, n) {
            return {
                lView: e,
                nodeIndex: t,
                native: n,
                component: void 0,
                directives: void 0,
                localRefs: void 0
            }
        }

        function vs(e) {
            let t, n = ws(e);
            if (Array.isArray(n)) {
                const r = Ds(n, e);
                Rn(r, n);
                const o = ms(n, r, t[0]);
                o.component = e, ys(e, o), ys(o.native, o)
            } else {
                const e = n;
                Rn(e.nodeIndex, e.lView)
            }
            return t
        }! function (e) {
            e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL"
        }(is || (is = {}));

        function ys(e, t) {
            ngDevMode && We(e, "Target expected"), e.__ngContext__ = t
        }

        function ws(e) {
            return ngDevMode && We(e, "Target expected"), e.__ngContext__ || null
        }

        function bs(e) {
            const t = ws(e);
            return t ? Array.isArray(t) ? t : t.lView : null
        }

        function _s(e, t) {
            const n = e[1];
            for (let r = Bt; r < n.bindingStartIndex; r++)
                if (Sn(e[r]) === t) return r;
            return -1
        }

        function Ms(e) {
            if (e.child) return e.child;
            if (e.next) return e.next;
            for (; e.parent && !e.parent.next;) e.parent;
            return e.parent && e.parent.next
        }

        function Ds(e, t) {
            const n = e[1].components;
            if (n)
                for (let r = 0; r < n.length; r++) {
                    const o = n[r];
                    if (Rn(o, e)[8] === t) return o
                } else {
                    if (Rn(Bt, e)[8] === t) return Bt
                }
            return -1
        }

        function xs(e, t, n) {
            const r = t[1].data[e];
            let o = r.directiveStart;
            if (0 == o) return bt;
            const i = r.directiveEnd;
            return !n && 2 & r.flags && 0, t.slice(o, i)
        }

        function Cs(e) {
            return e.ngOriginalError
        }

        function Es(e, ...t) {
            e.error(...t)
        }
        class Is {
            constructor() {
                this._console = console
            }
            handleError(e) {
                const t = this._findOriginalError(e),
                    n = function (e) {
                        return e && e.ngErrorLogger || Es
                    }(e);
                n(this._console, "ERROR", e), t && n(this._console, "ORIGINAL ERROR", t)
            }
            _findOriginalError(e) {
                let t = e && Cs(e);
                for (; t && Cs(t);) t = Cs(t);
                return t || null
            }
        }
        const Ts = {
                name: "custom-elements"
            },
            ks = {
                name: "no-errors-schema"
            },
            Ss = /^>|^->|<!--|-->|--!>|<!-$/g,
            As = /(<|>)/;

        function Os(e) {
            return e.replace(Ss, (e => e.replace(As, "â€‹$1â€‹")))
        }

        function Ns(e) {
            var t;
            return t = e.replace(/[$@]/g, "_"), `ng-reflect-${e=t.replace(Ps,((...e)=>"-"+e[1].toLowerCase()))}`
        }
        const Ps = /([A-Z])/g;
        const Rs = ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(vt);

        function js(e) {
            return e.ownerDocument.defaultView
        }

        function Fs(e) {
            return e.ownerDocument
        }

        function Vs(e) {
            return e.ownerDocument.body
        }
        const Ls = "ï¿½";

        function Hs(e) {
            return e instanceof Function ? e() : e
        }

        function $s(e, t, n) {
            throw new Ee(-300, `Multiple components match node with tagname ${e.value}: ${ke(t)} and ${ke(n)}`)
        }

        function Bs(e, t, n, r, o) {
            const [i, s, ...a] = r.split(Ls);
            let l = s,
                c = s;
            for (let r = 0; r < a.length; r++) {
                const i = t + r;
                l += `${e[i]}${a[r]}`, c += `${i===n?o:e[i]}${a[r]}`
            }
            return {
                propName: i,
                oldValue: l,
                newValue: c
            }
        }
        var Us;
        let zs;

        function Ws(e, t) {
            return zs(e, t)
        }! function (e) {
            e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase"
        }(Us || (Us = {}));

        function qs(e) {
            ngDevMode && sn(e);
            const t = e[3];
            return qt(t) ? t[3] : t
        }

        function Qs(e) {
            ngDevMode && We(e, "component");
            let t = Wt(e) ? e : bs(e);
            for (; t && !(512 & t[2]);) qs(t);
            return ngDevMode && sn(t), t
        }

        function Zs(e) {
            const t = Qs(e);
            return ngDevMode && We(t[8], "RootView has no context. Perhaps it is disconnected?"), t[8]
        }

        function Gs(e) {
            return Ks(e[13])
        }

        function Js(e) {
            return Ks(e[4])
        }

        function Ks(e) {
            for (; null !== e && !qt(e);) e = e[4];
            return e
        }

        function Ys(e, t, n, r, o) {
            if (null != r) {
                let i, s = !1;
                qt(r) ? i = r : Wt(r) && (s = !0, ngDevMode && We(r[0], "HOST must be defined for a component LView"), r = r[0]);
                const a = Sn(r);
                ngDevMode && !Tn(t) && Qe(a), 0 === e && null !== n ? null == o ? da(t, n, a) : ua(t, n, a, o || null, !0) : 1 === e && null !== n ? ua(t, n, a, o || null, !0) : 2 === e ? Da(t, a, s) : 3 === e && (ngDevMode && ngDevMode.rendererDestroyNode++, t.destroyNode(a)), null != i && function (e, t, n, r, o) {
                    ngDevMode && rn(n);
                    const i = n[7],
                        s = Sn(n);
                    i !== s && Ys(t, e, r, i, o);
                    for (let o = zt; o < n.length; o++) {
                        const s = n[o];
                        Ca(s[1], s, e, t, r, i)
                    }
                }(t, e, i, n, o)
            }
        }

        function Xs(e, t) {
            return ngDevMode && ngDevMode.rendererCreateTextNode++, ngDevMode && ngDevMode.rendererSetText++, Tn(e) ? e.createText(t) : e.createTextNode(t)
        }

        function ea(e, t, n) {
            ngDevMode && ngDevMode.rendererSetText++, Tn(e) ? e.setValue(t, n) : t.textContent = n
        }

        function ta(e, t) {
            return ngDevMode && ngDevMode.rendererCreateComment++, e.createComment(Os(t))
        }

        function na(e, t, n) {
            if (ngDevMode && ngDevMode.rendererCreateElement++, Tn(e)) return e.createElement(t, n); {
                const r = null !== n ? function (e) {
                    const t = e.toLowerCase();
                    return t === Dn ? "http://www.w3.org/2000/svg" : t === xn ? "http://www.w3.org/1998/MathML/" : null
                }(n) : null;
                return null === r ? e.createElement(t) : e.createElementNS(r, t)
            }
        }

        function ra(e, t, n, r) {
            ngDevMode && sn(t), ngDevMode && rn(n);
            const o = zt + r,
                i = n.length;
            r > 0 && (n[o - 1][4] = t), r < i - zt ? (t[4] = n[o], Oo(n, zt + r, t)) : (n.push(t), t[4] = null), t[3] = n;
            const s = t[17];
            null !== s && n !== s && function (e, t) {
                ngDevMode && We(t, "LView required"), ngDevMode && rn(e);
                const n = e[9],
                    r = t[3];
                ngDevMode && rn(r);
                const o = r[3][16];
                ngDevMode && We(o, "Missing insertedComponentLView");
                const i = t[16];
                ngDevMode && We(i, "Missing declaredComponentLView"), i !== o && (e[2] = !0);
                null === n ? e[9] = [t] : n.push(t)
            }(s, t);
            const a = t[19];
            null !== a && a.insertView(e), t[2] |= 128
        }

        function oa(e, t) {
            ngDevMode && rn(e), ngDevMode && We(e[9], "A projected view should belong to a non-empty projected views collection");
            const n = e[9],
                r = n.indexOf(t),
                o = t[3];
            ngDevMode && rn(o), 1024 & t[2] && (t[2] &= -1025, Hn(o, -1)), n.splice(r, 1)
        }

        function ia(e, t) {
            if (e.length <= zt) return;
            const n = zt + t,
                r = e[n];
            if (r) {
                const i = r[17];
                null !== i && i !== e && oa(i, r), t > 0 && (e[n - 1][4] = r[4]);
                const s = No(e, zt + t);
                Ca(r[1], o = r, o[11], 2, null, null), o[0] = null, o[6] = null;
                const a = s[19];
                null !== a && a.detachView(s[1]), r[3] = null, r[4] = null, r[2] &= -129
            }
            var o;
            return r
        }

        function sa(e, t) {
            if (!(256 & t[2])) {
                const n = t[11];
                Tn(n) && n.destroyNode && Ca(e, t, n, 3, null, null),
                    function (e) {
                        let t = e[13];
                        if (!t) return aa(e[1], e);
                        for (; t;) {
                            let n = null;
                            if (Wt(t)) n = t[13];
                            else {
                                ngDevMode && rn(t);
                                const e = t[10];
                                e && (n = e)
                            }
                            if (!n) {
                                for (; t && !t[4] && t !== e;) Wt(t) && aa(t[1], t), t = t[3];
                                null === t && (t = e), Wt(t) && aa(t[1], t), n = t && t[4]
                            }
                            t = n
                        }
                    }(t)
            }
        }

        function aa(e, t) {
            if (!(256 & t[2])) {
                t[2] &= -129, t[2] |= 256,
                    function (e, t) {
                        let n;
                        if (null != e && null != (n = e.destroyHooks))
                            for (let e = 0; e < n.length; e += 2) {
                                const r = t[n[e]];
                                if (!(r instanceof Rr)) {
                                    const t = n[e + 1];
                                    if (Array.isArray(t))
                                        for (let e = 0; e < t.length; e += 2) {
                                            const n = r[t[e]],
                                                o = t[e + 1];
                                            Mn(4, n, o);
                                            try {
                                                o.call(n)
                                            } finally {
                                                Mn(5, n, o)
                                            }
                                        } else {
                                            Mn(4, r, t);
                                            try {
                                                t.call(r)
                                            } finally {
                                                Mn(5, r, t)
                                            }
                                        }
                                }
                            }
                    }(e, t),
                    function (e, t) {
                        const n = e.cleanup,
                            r = t[7];
                        let o = -1;
                        if (null !== n)
                            for (let e = 0; e < n.length - 1; e += 2)
                                if ("string" == typeof n[e]) {
                                    const i = n[e + 1],
                                        s = "function" == typeof i ? i(t) : Sn(t[i]),
                                        a = r[o = n[e + 2]],
                                        l = n[e + 3];
                                    "boolean" == typeof l ? s.removeEventListener(n[e], a, l) : l >= 0 ? r[o = l]() : r[o = -l].unsubscribe(), e += 2
                                } else {
                                    const t = r[o = n[e + 1]];
                                    n[e].call(t)
                                } if (null !== r) {
                            for (let e = o + 1; e < r.length; e++) {
                                const t = r[e];
                                ngDevMode && je(t, "Expecting instance cleanup function."), t()
                            }
                            t[7] = null
                        }
                    }(e, t), 1 === t[1].type && Tn(t[11]) && (ngDevMode && ngDevMode.rendererDestroy++, t[11].destroy());
                const n = t[17];
                if (null !== n && qt(t[3])) {
                    n !== t[3] && oa(n, t);
                    const r = t[19];
                    null !== r && r.detachView(e)
                }
            }
        }

        function la(e, t, n) {
            return ca(e, t.parent, n)
        }

        function ca(e, t, n) {
            let r = t;
            for (; null !== r && 40 & r.type;) r = (t = r).parent;
            if (null === r) return n[0];
            if (ngDevMode && Fr(r, 7), 2 & r.flags) {
                ngDevMode && Kt(r, n);
                const t = e.data[r.directiveStart].encapsulation;
                if (t === ft.None || t === ft.Emulated) return null
            }
            return On(r, n)
        }

        function ua(e, t, n, r, o) {
            ngDevMode && ngDevMode.rendererInsertBefore++, Tn(e) ? e.insertBefore(t, n, r, o) : t.insertBefore(n, r, o)
        }

        function da(e, t, n) {
            ngDevMode && ngDevMode.rendererAppendChild++, ngDevMode && We(t, "parent node must be defined"), Tn(e) ? e.appendChild(t, n) : t.appendChild(n)
        }

        function fa(e, t, n, r, o) {
            null !== r ? ua(e, t, n, r, o) : da(e, t, n)
        }

        function ha(e, t) {
            return Tn(e) ? e.parentNode(t) : t.parentNode
        }

        function pa(e, t, n) {
            return va(e, t, n)
        }

        function ga(e, t, n) {
            return 40 & e.type ? On(e, n) : null
        }
        let ma, va = ga;

        function ya(e, t) {
            va = e, ma = t
        }

        function wa(e, t, n, r) {
            const o = la(e, r, t),
                i = t[11],
                s = pa(r.parent || t[6], r, t);
            if (null != o)
                if (Array.isArray(n))
                    for (let e = 0; e < n.length; e++) fa(i, o, n[e], s, !1);
                else fa(i, o, n, s, !1);
            void 0 !== ma && ma(i, r, t, n, o)
        }

        function ba(e, t) {
            if (null !== t) {
                ngDevMode && Fr(t, 63);
                const n = t.type;
                if (3 & n) return On(t, e);
                if (4 & n) return Ma(-1, e[t.index]);
                if (8 & n) {
                    const n = t.child;
                    if (null !== n) return ba(e, n); {
                        const n = e[t.index];
                        return qt(n) ? Ma(-1, n) : Sn(n)
                    }
                }
                if (32 & n) {
                    return Ws(t, e)() || Sn(e[t.index])
                } {
                    const n = _a(e, t);
                    if (null !== n) {
                        if (Array.isArray(n)) return n[0];
                        const t = qs(e[16]);
                        return ngDevMode && dn(t), ba(t, n)
                    }
                    return ba(e, t.next)
                }
            }
            return null
        }

        function _a(e, t) {
            if (null !== t) {
                const n = e[16][6],
                    r = t.projection;
                return ngDevMode && function (e, t) {
                    We(e[16], "Component views should exist."), We(e[16][6].projection, t || "Components with projection nodes (<ng-content>) must have projection slots defined.")
                }(e), n.projection[r]
            }
            return null
        }

        function Ma(e, t) {
            const n = zt + e + 1;
            if (n < t.length) {
                const e = t[n],
                    r = e[1].firstChild;
                if (null !== r) return ba(e, r)
            }
            return t[7]
        }

        function Da(e, t, n) {
            ngDevMode && ngDevMode.rendererRemoveNode++;
            const r = ha(e, t);
            r && function (e, t, n, r) {
                Tn(e) ? e.removeChild(t, n, r) : t.removeChild(n)
            }(e, r, t, n)
        }

        function xa(e, t, n, r, o, i, s) {
            for (; null != n;) {
                ngDevMode && Kt(n, r), ngDevMode && Fr(n, 63);
                const a = r[n.index],
                    l = n.type;
                if (s && 0 === t && (a && ys(Sn(a), r), n.flags |= 4), 64 != (64 & n.flags))
                    if (8 & l) xa(e, t, n.child, r, o, i, !1), Ys(t, e, o, a, i);
                    else if (32 & l) {
                    const s = Ws(n, r);
                    let l;
                    for (; l = s();) Ys(t, e, o, l, i);
                    Ys(t, e, o, a, i)
                } else 16 & l ? Ea(e, t, r, n, o, i) : (ngDevMode && Fr(n, 7), Ys(t, e, o, a, i));
                n = s ? n.projectionNext : n.next
            }
        }

        function Ca(e, t, n, r, o, i) {
            xa(n, r, e.firstChild, t, o, i, !1)
        }

        function Ea(e, t, n, r, o, i) {
            const s = n[16],
                a = s[6];
            ngDevMode && Fe(typeof r.projection, "number", "expecting projection index");
            const l = a.projection[r.projection];
            if (Array.isArray(l))
                for (let n = 0; n < l.length; n++) {
                    Ys(t, e, o, l[n], i)
                } else {
                    xa(e, t, l, s[3], o, i, !0)
                }
        }

        function Ia(e, t, n) {
            ngDevMode && Re(n, "'newValue' should be a string"), Tn(e) ? e.setAttribute(t, "style", n) : t.style.cssText = n, ngDevMode && ngDevMode.rendererSetStyle++
        }

        function Ta(e, t, n) {
            ngDevMode && Re(n, "'newValue' should be a string"), Tn(e) ? "" === n ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n) : t.className = n, ngDevMode && ngDevMode.rendererSetClassName++
        }

        function ka(e, t, n) {
            ngDevMode && Ve(t, "", 'can not look for "" string.');
            let r = e.length;
            for (;;) {
                const o = e.indexOf(t, n);
                if (-1 === o) return o;
                if (0 === o || e.charCodeAt(o - 1) <= 32) {
                    const n = t.length;
                    if (o + n === r || e.charCodeAt(o + n) <= 32) return o
                }
                n = o + 1
            }
        }
        const Sa = "ng-template";

        function Aa(e, t, n) {
            ngDevMode && Fe(t, t.toLowerCase(), "Class name expected to be lowercase.");
            let r = 0;
            for (; r < e.length;) {
                let o = e[r++];
                if (n && "class" === o) {
                    if (o = e[r], -1 !== ka(o.toLowerCase(), t, 0)) return !0
                } else if (1 === o) {
                    for (; r < e.length && "string" == typeof (o = e[r++]);)
                        if (o.toLowerCase() === t) return !0;
                    return !1
                }
            }
            return !1
        }

        function Oa(e) {
            return 4 === e.type && e.value !== Sa
        }

        function Na(e, t, n) {
            return t === (4 !== e.type || n ? e.value : Sa)
        }

        function Pa(e, t, n) {
            ngDevMode && We(t[0], "Selector should have a tag name");
            let r = 4;
            const o = e.attrs || [],
                i = function (e) {
                    for (let t = 0; t < e.length; t++) {
                        if (Lr(e[t])) return t
                    }
                    return e.length
                }(o);
            let s = !1;
            for (let a = 0; a < t.length; a++) {
                const l = t[a];
                if ("number" != typeof l) {
                    if (!s)
                        if (4 & r) {
                            if (r = 2 | 1 & r, "" !== l && !Na(e, l, n) || "" === l && 1 === t.length) {
                                if (Ra(r)) return !1;
                                s = !0
                            }
                        } else {
                            const c = 8 & r ? l : t[++a];
                            if (8 & r && null !== e.attrs) {
                                if (!Aa(e.attrs, c, n)) {
                                    if (Ra(r)) return !1;
                                    s = !0
                                }
                                continue
                            }
                            const u = ja(8 & r ? "class" : l, o, Oa(e), n);
                            if (-1 === u) {
                                if (Ra(r)) return !1;
                                s = !0;
                                continue
                            }
                            if ("" !== c) {
                                let e;
                                u > i ? e = "" : (ngDevMode && Ve(o[u], 0, "We do not match directives on namespaced attributes"), e = o[u + 1].toLowerCase());
                                const t = 8 & r ? e : null;
                                if (t && -1 !== ka(t, c, 0) || 2 & r && c !== e) {
                                    if (Ra(r)) return !1;
                                    s = !0
                                }
                            }
                        }
                } else {
                    if (!s && !Ra(r) && !Ra(l)) return !1;
                    if (s && Ra(l)) continue;
                    s = !1, r = l | 1 & r
                }
            }
            return Ra(r) || s
        }

        function Ra(e) {
            return 0 == (1 & e)
        }

        function ja(e, t, n, r) {
            if (null === t) return -1;
            let o = 0;
            if (r || !n) {
                let n = !1;
                for (; o < t.length;) {
                    const r = t[o];
                    if (r === e) return o;
                    if (3 === r || 6 === r) n = !0;
                    else {
                        if (1 === r || 2 === r) {
                            let e = t[++o];
                            for (;
                                "string" == typeof e;) e = t[++o];
                            continue
                        }
                        if (4 === r) break;
                        if (0 === r) {
                            o += 4;
                            continue
                        }
                    }
                    o += n ? 1 : 2
                }
                return -1
            }
            return function (e, t) {
                let n = e.indexOf(4);
                if (n > -1)
                    for (n++; n < e.length;) {
                        const r = e[n];
                        if ("number" == typeof r) return -1;
                        if (r === t) return n;
                        n++
                    }
                return -1
            }(t, e)
        }

        function Fa(e, t, n = !1) {
            for (let r = 0; r < t.length; r++)
                if (Pa(e, t[r], n)) return !0;
            return !1
        }

        function Va(e, t) {
            e: for (let n = 0; n < t.length; n++) {
                const r = t[n];
                if (e.length === r.length) {
                    for (let t = 0; t < e.length; t++)
                        if (e[t] !== r[t]) continue e;
                    return !0
                }
            }
            return !1
        }

        function La(e, t) {
            return e ? ":not(" + t.trim() + ")" : t
        }

        function Ha(e) {
            let t = e[0],
                n = 1,
                r = 2,
                o = "",
                i = !1;
            for (; n < e.length;) {
                let s = e[n];
                if ("string" == typeof s)
                    if (2 & r) {
                        const t = e[++n];
                        o += "[" + s + (t.length > 0 ? '="' + t + '"' : "") + "]"
                    } else 8 & r ? o += "." + s : 4 & r && (o += " " + s);
                else "" === o || Ra(s) || (t += La(i, o), o = ""), r = s, i = i || !Ra(r);
                n++
            }
            return "" !== o && (t += La(i, o)), t
        }
        const $a = "undefined" == typeof ngDevMode || ngDevMode ? {
            __brand__: "NO_CHANGE"
        } : {};

        function Ba(e) {
            ngDevMode && Ue(e, 0, "Can only advance forward"), Ua(qn(), Wn(), Mr() + e, er())
        }

        function Ua(e, t, n, r) {
            if (ngDevMode && function (e, t) {
                    const n = e[1];
                    un(Bt, n.bindingStartIndex, t)
                }(t, n), !r) {
                if (3 == (3 & t[2])) {
                    const r = e.preOrderCheckHooks;
                    null !== r && kr(t, r, n)
                } else {
                    const r = e.preOrderHooks;
                    null !== r && Sr(t, r, 0, n)
                }
            }
            Dr(n)
        }

        function za(e) {
            if (!ngDevMode) throw new Error("Looks like we are in 'prod mode', but we are creating a named Array type, which is wrong! Check your code");
            try {
                return Di("Array", `return class ${e} extends Array{}`)(Array)
            } catch (e) {
                return Array
            }
        }

        function Wa(e, t) {
            return ngDevMode && Pe(e, 0, 32767), ngDevMode && Pe(t, 0, 32767), e << 17 | t << 2
        }

        function qa(e) {
            return ngDevMode && Ne(e, "expected number"), e >> 17 & 32767
        }

        function Qa(e) {
            return ngDevMode && Ne(e, "expected number"), 2 == (2 & e)
        }

        function Za(e) {
            return ngDevMode && Ne(e, "expected number"), 2 | e
        }

        function Ga(e) {
            return ngDevMode && Ne(e, "expected number"), (131068 & e) >> 2
        }

        function Ja(e, t) {
            return ngDevMode && Ne(e, "expected number"), ngDevMode && Pe(t, 0, 32767), -131069 & e | t << 2
        }

        function Ka(e) {
            return ngDevMode && Ne(e, "expected number"), 1 == (1 & e)
        }

        function Ya(e) {
            return ngDevMode && Ne(e, "expected number"), 1 | e
        }

        function Xa(e, t) {
            if (!ngDevMode) throw new Error("This method should be guarded with `ngDevMode` so that it can be tree shaken in production!");
            Object.defineProperty(e, "debug", {
                value: t,
                enumerable: !1
            })
        }

        function el(e, t) {
            if (!ngDevMode) throw new Error("This method should be guarded with `ngDevMode` so that it can be tree shaken in production!");
            Object.defineProperty(e, "debug", {
                get: t,
                enumerable: !1
            })
        }
        let tl, nl, rl, ol, il;

        function sl(e) {
            return function (e, t) {
                switch (e) {
                    case 0:
                        return void 0 === rl && (rl = new al), rl;
                    case 1:
                        if (!ngDevMode || !ngDevMode.namedConstructors) return void 0 === ol && (ol = new ll), ol;
                        void 0 === tl && (tl = new Map);
                        let e = tl.get(t);
                        return void 0 === e && (e = new(za("LComponentView" + ul(t))), tl.set(t, e)), e;
                    case 2:
                        if (!ngDevMode || !ngDevMode.namedConstructors) return void 0 === il && (il = new cl), il;
                        void 0 === nl && (nl = new Map);
                        let n = nl.get(t);
                        return void 0 === n && (n = new(za("LEmbeddedView" + ul(t))), nl.set(t, n)), n
                }
            }(e.type, e.template && e.template.name).concat(e.blueprint)
        }
        class al extends Array {}
        class ll extends Array {}
        class cl extends Array {}

        function ul(e) {
            if (null == e) return "";
            const t = e.lastIndexOf("_Template");
            return "_" + (-1 === t ? e : e.substr(0, t))
        }
        const dl = class {
            constructor(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m, v, y, w, b, _, M, D, x, C, E, I, T, k, S, A) {
                this.tView_ = e, this.type = t, this.index = n, this.insertBeforeIndex = r, this.injectorIndex = o, this.directiveStart = i, this.directiveEnd = s, this.directiveStylingLast = a, this.propertyBindings = l, this.flags = c, this.providerIndexes = u, this.value = d, this.attrs = f, this.mergedAttrs = h, this.localNames = p, this.initialInputs = g, this.inputs = m, this.outputs = v, this.tViews = y, this.next = w, this.projectionNext = b, this.child = _, this.parent = M, this.projection = D, this.styles = x, this.stylesWithoutHost = C, this.residualStyles = E, this.classes = I, this.classesWithoutHost = T, this.residualClasses = k, this.classBindings = S, this.styleBindings = A
            }
            debugNodeInjectorPath(e) {
                const t = [];
                let n = Kr(this, e);
                if (-1 === n) {
                    const t = Yr(this, e);
                    t !== Pr && (n = zr(t), e = Wr(t, e))
                }
                for (; - 1 !== n;) {
                    ngDevMode && fn(e, n);
                    const r = e[1].data[n + 8];
                    t.push(kl(r, e));
                    const o = e[n + 8];
                    o === Pr ? n = -1 : (n = zr(o), e = Wr(o, e))
                }
                return t
            }
            get type_() {
                return jr(this.type) || `TNodeType.?${this.type}?`
            }
            get flags_() {
                const e = [];
                return 16 & this.flags && e.push("TNodeFlags.hasClassInput"), 8 & this.flags && e.push("TNodeFlags.hasContentQuery"), 32 & this.flags && e.push("TNodeFlags.hasStyleInput"), 128 & this.flags && e.push("TNodeFlags.hasHostBindings"), 2 & this.flags && e.push("TNodeFlags.isComponentHost"), 1 & this.flags && e.push("TNodeFlags.isDirectiveHost"), 64 & this.flags && e.push("TNodeFlags.isDetached"), 4 & this.flags && e.push("TNodeFlags.isProjected"), e.join("|")
            }
            get template_() {
                if (1 & this.type) return this.value;
                const e = [],
                    t = "string" == typeof this.value && this.value || this.type_;
                if (e.push("<", t), this.flags && e.push(" ", this.flags_), this.attrs)
                    for (let t = 0; t < this.attrs.length;) {
                        const n = this.attrs[t++];
                        if ("number" == typeof n) break;
                        const r = this.attrs[t++];
                        e.push(" ", n, '="', r, '"')
                    }
                return e.push(">"), hl(this.child, e), e.push("</", t, ">"), e.join("")
            }
            get styleBindings_() {
                return fl(this, !1)
            }
            get classBindings_() {
                return fl(this, !0)
            }
            get providerIndexStart_() {
                return 1048575 & this.providerIndexes
            }
            get providerIndexEnd_() {
                return this.providerIndexStart_ + (this.providerIndexes >>> 20)
            }
        };

        function fl(e, t) {
            const n = e.tView_.data,
                r = [],
                o = t ? e.classBindings : e.styleBindings,
                i = qa(o),
                s = Ga(o);
            let a = 0 !== s,
                l = a ? s : i;
            for (; 0 !== l;) {
                const e = n[l],
                    t = n[l + 1];
                r.unshift({
                    key: e,
                    index: l,
                    isTemplate: a,
                    prevDuplicate: Qa(t),
                    nextDuplicate: Ka(t),
                    nextIndex: Ga(t),
                    prevIndex: qa(t)
                }), l === i && (a = !1), l = qa(t)
            }
            return r.push((t ? e.residualClasses : e.residualStyles) || null), r
        }

        function hl(e, t) {
            for (; e;) t.push(e.template_), e = e.next
        }
        class pl extends Array {}
        let gl;
        class ml extends Array {}
        class vl extends Array {}
        class yl extends Array {}
        class wl extends Array {}
        class bl extends Array {}
        class _l extends Array {}
        class Ml extends Array {}

        function Dl(e) {
            if (e) {
                const t = e.debug;
                return We(t, "Object does not have a debug representation."), t
            }
            return e
        }

        function xl(e, t = !1) {
            const n = Sn(e);
            if (n) switch (n.nodeType) {
                case Node.TEXT_NODE:
                    return n.textContent;
                case Node.COMMENT_NODE:
                    return `\x3c!--${n.textContent}--\x3e`;
                case Node.ELEMENT_NODE:
                    const e = n.outerHTML;
                    if (t) return e; {
                        const t = ">" + n.innerHTML + "<";
                        return e.split(t)[0] + ">"
                    }
            }
            return null
        }
        class Cl {
            constructor(e) {
                this._raw_lView = e
            }
            get flags() {
                const e = this._raw_lView[2];
                return {
                    __raw__flags__: e,
                    initPhaseState: 3 & e,
                    creationMode: !!(4 & e),
                    firstViewPass: !!(8 & e),
                    checkAlways: !!(16 & e),
                    dirty: !!(64 & e),
                    attached: !!(128 & e),
                    destroyed: !!(256 & e),
                    isRoot: !!(512 & e),
                    indexWithinInitPhase: e >> 11
                }
            }
            get parent() {
                return Dl(this._raw_lView[3])
            }
            get hostHTML() {
                return xl(this._raw_lView[0], !0)
            }
            get html() {
                return (this.nodes || []).map(El).join("")
            }
            get context() {
                return this._raw_lView[8]
            }
            get nodes() {
                const e = this._raw_lView;
                return Tl(e[1].firstChild, e)
            }
            get template() {
                return this.tView.template_
            }
            get tView() {
                return this._raw_lView[1]
            }
            get cleanup() {
                return this._raw_lView[7]
            }
            get injector() {
                return this._raw_lView[9]
            }
            get rendererFactory() {
                return this._raw_lView[10]
            }
            get renderer() {
                return this._raw_lView[11]
            }
            get sanitizer() {
                return this._raw_lView[12]
            }
            get childHead() {
                return Dl(this._raw_lView[13])
            }
            get next() {
                return Dl(this._raw_lView[4])
            }
            get childTail() {
                return Dl(this._raw_lView[14])
            }
            get declarationView() {
                return Dl(this._raw_lView[15])
            }
            get queries() {
                return this._raw_lView[19]
            }
            get tHost() {
                return this._raw_lView[6]
            }
            get decls() {
                return Il(this.tView, this._raw_lView, Bt, this.tView.bindingStartIndex)
            }
            get vars() {
                return Il(this.tView, this._raw_lView, this.tView.bindingStartIndex, this.tView.expandoStartIndex)
            }
            get expando() {
                return Il(this.tView, this._raw_lView, this.tView.expandoStartIndex, this._raw_lView.length)
            }
            get childViews() {
                const e = [];
                let t = this.childHead;
                for (; t;) e.push(t), t = t.next;
                return e
            }
        }

        function El(e) {
            if ("ElementContainer" === e.type) return (e.children || []).map(El).join("");
            if ("IcuContainer" === e.type) throw new Error("Not implemented");
            return xl(e.native, !0) || ""
        }

        function Il(e, t, n, r) {
            let o = [];
            for (let i = n; i < r; i++) o.push({
                index: i,
                t: e.data[i],
                l: t[i]
            });
            return {
                start: n,
                end: r,
                length: r - n,
                content: o
            }
        }

        function Tl(e, t) {
            if (e) {
                const n = [];
                let r = e;
                for (; r;) n.push(kl(r, t)), r = r.next;
                return n
            }
            return []
        }

        function kl(e, t) {
            const n = Sn(t[e.index]),
                r = [],
                o = [],
                i = t[1];
            for (let n = e.directiveStart; n < e.directiveEnd; n++) {
                const e = i.data[n];
                r.push(e.type), o.push(t[n])
            }
            return {
                html: xl(n),
                type: jr(e.type),
                tNode: e,
                native: n,
                children: Tl(e.child, t),
                factories: r,
                instances: o,
                injector: Sl(e, i, t),
                get injectorResolutionPath() {
                    return e.debugNodeInjectorPath(t)
                }
            }
        }

        function Sl(e, t, n) {
            const r = [];
            for (let n = e.providerIndexStart_; n < e.providerIndexEnd_; n++) r.push(t.data[n]);
            const o = [];
            for (let n = e.providerIndexEnd_; n < e.directiveEnd; n++) o.push(t.data[n]);
            return {
                bloom: Ol(n, e.injectorIndex),
                cumulativeBloom: Ol(t.data, e.injectorIndex),
                providers: o,
                viewProviders: r,
                parentInjectorIndex: n[e.providerIndexStart_ - 1]
            }
        }

        function Al(e, t) {
            const n = e[t];
            if ("number" != typeof n) return "????????";
            const r = "00000000" + n.toString(2);
            return r.substring(r.length - 8)
        }

        function Ol(e, t) {
            return t < 0 ? "NO_NODE_INJECTOR" : `${Al(e,t+7)}_${Al(e,t+6)}_${Al(e,t+5)}_${Al(e,t+4)}_${Al(e,t+3)}_${Al(e,t+2)}_${Al(e,t+1)}_${Al(e,t+0)}`
        }
        class Nl {
            constructor(e) {
                this._raw_lContainer = e
            }
            get hasTransplantedViews() {
                return this._raw_lContainer[2]
            }
            get views() {
                return this._raw_lContainer.slice(zt).map(Dl)
            }
            get parent() {
                return Dl(this._raw_lContainer[3])
            }
            get movedViews() {
                return this._raw_lContainer[9]
            }
            get host() {
                return this._raw_lContainer[0]
            }
            get native() {
                return this._raw_lContainer[7]
            }
            get next() {
                return Dl(this._raw_lContainer[4])
            }
        }
        const Pl = Promise.resolve(null);

        function Rl(e, t) {
            const n = e.contentQueries;
            if (null !== n)
                for (let r = 0; r < n.length; r += 2) {
                    const o = n[r],
                        i = n[r + 1];
                    if (-1 !== i) {
                        const n = e.data[i];
                        ngDevMode && We(n, "DirectiveDef not found."), ngDevMode && We(n.contentQueries, "contentQueries function should be defined"), fr(o), n.contentQueries(2, t[i], i)
                    }
                }
        }

        function jl(e, t, n, r, o, i, s, a, l, c) {
            const u = ngDevMode ? sl(t) : t.blueprint.slice();
            return u[0] = o, u[2] = 140 | r, Ln(u), ngDevMode && t.declTNode && e && Kt(t.declTNode, e), u[3] = u[15] = e, u[8] = n, u[10] = s || e && e[10], ngDevMode && We(u[10], "RendererFactory is required"), u[11] = a || e && e[11], ngDevMode && We(u[11], "Renderer is required"), u[12] = l || e && e[12] || null, u[9] = c || e && e[9] || null, u[6] = i, ngDevMode && Fe(2 != t.type || null !== e, !0, "Embedded views must have parentLView"), u[16] = 2 == t.type ? e[16] : u, ngDevMode && function (e) {
                Xa(e, new Cl(e))
            }(u), u
        }

        function Fl(e, t, n, r, o) {
            ngDevMode && 0 !== t && ze(t, Bt, "TNodes can't be in the LView header."), ngDevMode && function (e) {
                2 !== e && 1 !== e && 4 !== e && 8 !== e && 32 !== e && 16 !== e && 64 !== e && qe(`Expected TNodeType to have only a single type selected, but got ${jr(e)}.`)
            }(n);
            let i = e.data[t];
            if (null === i) i = Vl(e, t, n, r, o), $n.lFrame.inI18n && (i.flags |= 64);
            else if (64 & i.type) {
                i.type = n, i.value = r, i.attrs = o;
                const s = Jn();
                i.injectorIndex = null === s ? -1 : s.injectorIndex, ngDevMode && Yt(i, e), ngDevMode && Fe(t, i.index, "Expecting same index")
            }
            return Kn(i, !0), i
        }

        function Vl(e, t, n, r, o) {
            const i = Gn(),
                s = Yn(),
                a = s ? i : i && i.parent,
                l = e.data[t] = function (e, t, n, r, o, i) {
                    ngDevMode && 0 !== r && ze(r, Bt, "TNodes can't be in the LView header."), ngDevMode && He(i, void 0, "'undefined' is not valid value for 'attrs'"), ngDevMode && ngDevMode.tNode++, ngDevMode && t && Yt(t, e);
                    let s = t ? t.injectorIndex : -1;
                    const a = ngDevMode ? new dl(e, n, r, null, s, -1, -1, -1, null, 0, 0, o, i, null, null, void 0, null, null, null, null, null, null, t, null, null, null, void 0, null, null, void 0, 0, 0) : {
                        type: n,
                        index: r,
                        insertBeforeIndex: null,
                        injectorIndex: s,
                        directiveStart: -1,
                        directiveEnd: -1,
                        directiveStylingLast: -1,
                        propertyBindings: null,
                        flags: 0,
                        providerIndexes: 0,
                        value: o,
                        attrs: i,
                        mergedAttrs: null,
                        localNames: null,
                        initialInputs: void 0,
                        inputs: null,
                        outputs: null,
                        tViews: null,
                        next: null,
                        projectionNext: null,
                        child: null,
                        parent: t,
                        projection: null,
                        styles: null,
                        stylesWithoutHost: null,
                        residualStyles: void 0,
                        classes: null,
                        classesWithoutHost: null,
                        residualClasses: void 0,
                        classBindings: 0,
                        styleBindings: 0
                    };
                    ngDevMode && Object.seal(a);
                    return a
                }(e, a, n, t, r, o);
            return null === e.firstChild && (e.firstChild = l), null !== i && (s ? null == i.child && null !== l.parent && (i.child = l) : null === i.next && (i.next = l)), l
        }

        function Ll(e, t, n, r) {
            if (0 === n) return -1;
            ngDevMode && (an(e), Le(e, t[1], "`LView` must be associated with `TView`!"), Fe(e.data.length, t.length, "Expecting LView to be same size as TView"), Fe(e.data.length, e.blueprint.length, "Expecting Blueprint to be same size as TView"), ln(e));
            const o = t.length;
            for (let o = 0; o < n; o++) t.push(r), e.blueprint.push(r), e.data.push(null);
            return o
        }

        function Hl(e, t, n) {
            ngDevMode && Fe(jn(t), !0, "Should be run in creation mode"), gr(t);
            try {
                const r = e.viewQuery;
                null !== r && Cc(1, r, n);
                const o = e.template;
                null !== o && Ul(e, t, o, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), e.staticContentQueries && Rl(e, t), e.staticViewQueries && Cc(2, e.viewQuery, n);
                const i = e.components;
                null !== i && function (e, t) {
                    for (let n = 0; n < t.length; n++) wc(e, t[n])
                }(t, i)
            } catch (t) {
                throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), t
            } finally {
                t[2] &= -5, br()
            }
        }

        function $l(e, t, n, r) {
            ngDevMode && Fe(jn(t), !1, "Should be run in update mode");
            const o = t[2];
            if (256 == (256 & o)) return;
            gr(t);
            const i = er();
            try {
                Ln(t), or(e.bindingStartIndex), null !== n && Ul(e, t, n, 2, r);
                const s = 3 == (3 & o);
                if (!i)
                    if (s) {
                        const n = e.preOrderCheckHooks;
                        null !== n && kr(t, n, null)
                    } else {
                        const n = e.preOrderHooks;
                        null !== n && Sr(t, n, 0, null), Ar(t, 0)
                    } if (function (e) {
                        for (let t = Gs(e); null !== t; t = Js(t)) {
                            if (!t[2]) continue;
                            const e = t[9];
                            ngDevMode && We(e, "Transplanted View flags set but missing MOVED_VIEWS");
                            for (let t = 0; t < e.length; t++) {
                                const n = e[t],
                                    r = n[3];
                                ngDevMode && rn(r), 0 == (1024 & n[2]) && Hn(r, 1), n[2] |= 1024
                            }
                        }
                    }(t), function (e) {
                        for (let t = Gs(e); null !== t; t = Js(t))
                            for (let e = zt; e < t.length; e++) {
                                const n = t[e],
                                    r = n[1];
                                ngDevMode && We(r, "TView must be allocated"), Fn(n) && $l(r, n, r.template, n[8])
                            }
                    }(t), null !== e.contentQueries && Rl(e, t), !i)
                    if (s) {
                        const n = e.contentCheckHooks;
                        null !== n && kr(t, n)
                    } else {
                        const n = e.contentHooks;
                        null !== n && Sr(t, n, 1), Ar(t, 1)
                    }!
                function (e, t) {
                    const n = e.hostBindingOpCodes;
                    if (null !== n) try {
                        for (let e = 0; e < n.length; e++) {
                            const r = n[e];
                            if (r < 0) Dr(~r);
                            else {
                                const o = r,
                                    i = n[++e],
                                    s = n[++e];
                                lr(i, o), s(2, t[o])
                            }
                        }
                    } finally {
                        Dr(-1)
                    }
                }(e, t);
                const a = e.components;
                null !== a && function (e, t) {
                    for (let n = 0; n < t.length; n++) vc(e, t[n])
                }(t, a);
                const l = e.viewQuery;
                if (null !== l && Cc(2, l, r), !i)
                    if (s) {
                        const n = e.viewCheckHooks;
                        null !== n && kr(t, n)
                    } else {
                        const n = e.viewHooks;
                        null !== n && Sr(t, n, 2), Ar(t, 2)
                    }! 0 === e.firstUpdatePass && (e.firstUpdatePass = !1), i || (t[2] &= -73), 1024 & t[2] && (t[2] &= -1025, Hn(t[3], -1))
            } finally {
                br()
            }
        }

        function Bl(e, t, n, r) {
            const o = t[10],
                i = !er(),
                s = jn(t);
            try {
                i && !s && o.begin && o.begin(), s && Hl(e, t, r), $l(e, t, n, r)
            } finally {
                i && !s && o.end && o.end()
            }
        }

        function Ul(e, t, n, r, o) {
            const i = Mr(),
                s = 2 & r;
            try {
                Dr(-1), s && t.length > Bt && Ua(e, t, Bt, er());
                Mn(s ? 2 : 0, o), n(r, o)
            } finally {
                Dr(i);
                Mn(s ? 3 : 1, o)
            }
        }

        function zl(e, t, n) {
            if (Qt(t)) {
                const r = t.directiveStart,
                    o = t.directiveEnd;
                for (let t = r; t < o; t++) {
                    const r = e.data[t];
                    r.contentQueries && r.contentQueries(1, n[t], t)
                }
            }
        }

        function Wl(e, t, n) {
            Bn() && (function (e, t, n, r) {
                const o = n.directiveStart,
                    i = n.directiveEnd;
                e.firstCreatePass || Gr(n, t);
                ys(r, t);
                const s = n.initialInputs;
                for (let r = o; r < i; r++) {
                    const i = e.data[r],
                        a = Jt(i);
                    a && (ngDevMode && Fr(n, 3), uc(t, n, i));
                    const l = ao(t, e, r, n);
                    if (ys(l, t), null !== s && hc(t, r - o, l, i, n, s), a) {
                        Rn(n.index, t)[8] = l
                    }
                }
            }(e, t, n, On(n, t)), 128 == (128 & n.flags) && function (e, t, n) {
                const r = n.directiveStart,
                    o = n.directiveEnd,
                    i = (e.firstCreatePass, n.index),
                    s = $n.lFrame.currentDirectiveIndex;
                try {
                    Dr(i);
                    for (let n = r; n < o; n++) {
                        const r = e.data[n],
                            o = t[n];
                        cr(n), null === r.hostBindings && 0 === r.hostVars && null === r.hostAttrs || ic(r, o)
                    }
                } finally {
                    Dr(-1), cr(s)
                }
            }(e, t, n))
        }

        function ql(e, t, n = On) {
            const r = t.localNames;
            if (null !== r) {
                let o = t.index + 1;
                for (let i = 0; i < r.length; i += 2) {
                    const s = r[i + 1],
                        a = -1 === s ? n(t, e) : e[s];
                    e[o++] = a
                }
            }
        }

        function Ql(e) {
            const t = e.tView;
            if (null === t || t.incompleteFirstPass) {
                const t = null;
                return e.tView = Zl(1, t, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts)
            }
            return t
        }

        function Zl(e, t, n, r, o, i, s, a, l, c) {
            ngDevMode && ngDevMode.tView++;
            const u = Bt + r,
                d = u + o,
                f = function (e, t) {
                    const n = ngDevMode ? new ml : [];
                    for (let r = 0; r < t; r++) n.push(r < e ? null : $a);
                    return n
                }(u, d),
                h = "function" == typeof c ? c() : c,
                p = f[1] = ngDevMode ? new class {
                    constructor(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m, v, y, w, b, _, M, D, x, C, E, I, T, k, S, A) {
                        this.type = e, this.blueprint = t, this.template = n, this.queries = r, this.viewQuery = o, this.declTNode = i, this.data = s, this.bindingStartIndex = a, this.expandoStartIndex = l, this.hostBindingOpCodes = c, this.firstCreatePass = u, this.firstUpdatePass = d, this.staticViewQueries = f, this.staticContentQueries = h, this.preOrderHooks = p, this.preOrderCheckHooks = g, this.contentHooks = m, this.contentCheckHooks = v, this.viewHooks = y, this.viewCheckHooks = w, this.destroyHooks = b, this.cleanup = _, this.contentQueries = M, this.components = D, this.directiveRegistry = x, this.pipeRegistry = C, this.firstChild = E, this.schemas = I, this.consts = T, this.incompleteFirstPass = k, this._decls = S, this._vars = A
                    }
                    get template_() {
                        const e = [];
                        return hl(this.firstChild, e), e.join("")
                    }
                    get type_() {
                        return Ut[this.type] || `TViewType.?${this.type}?`
                    }
                }(e, f, n, null, a, t, (g = f, void 0 === gl && (gl = new pl), gl.concat(g)).fill(null, u), u, d, null, !0, !0, !1, !1, null, null, null, null, null, null, null, null, null, null, "function" == typeof i ? i() : i, "function" == typeof s ? s() : s, null, l, h, !1, r, o) : {
                    type: e,
                    blueprint: f,
                    template: n,
                    queries: null,
                    viewQuery: a,
                    declTNode: t,
                    data: f.slice().fill(null, u),
                    bindingStartIndex: u,
                    expandoStartIndex: d,
                    hostBindingOpCodes: null,
                    firstCreatePass: !0,
                    firstUpdatePass: !0,
                    staticViewQueries: !1,
                    staticContentQueries: !1,
                    preOrderHooks: null,
                    preOrderCheckHooks: null,
                    contentHooks: null,
                    contentCheckHooks: null,
                    viewHooks: null,
                    viewCheckHooks: null,
                    destroyHooks: null,
                    cleanup: null,
                    contentQueries: null,
                    components: null,
                    directiveRegistry: "function" == typeof i ? i() : i,
                    pipeRegistry: "function" == typeof s ? s() : s,
                    firstChild: null,
                    schemas: l,
                    consts: h,
                    incompleteFirstPass: !1
                };
            var g;
            return ngDevMode && Object.seal(p), p
        }

        function Gl(e, t) {
            return new Error(`Renderer: ${e} [${ke(t)}]`)
        }

        function Jl(e, t, n) {
            if (Tn(e)) {
                const r = n === ft.ShadowDom;
                return e.selectRootElement(t, r)
            }
            let r = "string" == typeof t ? e.querySelector(t) : t;
            return ngDevMode && function (e, t) {
                if (!e) throw Gl("string" == typeof t ? "Host node with selector not found:" : "Host node is required:", t)
            }(r, t), r.textContent = "", r
        }

        function Kl(e, t, n, r) {
            const o = Tc(t);
            null === n ? (ngDevMode && Object.freeze(kc(e)), o.push(r)) : (o.push(n), e.firstCreatePass && kc(e).push(r, o.length - 1))
        }

        function Yl(e, t, n) {
            for (let r in e)
                if (e.hasOwnProperty(r)) {
                    n = null === n ? {} : n;
                    const o = e[r];
                    n.hasOwnProperty(r) ? n[r].push(t, o) : n[r] = [t, o]
                } return n
        }

        function Xl(e, t, n, r, o, i, s, a) {
            ngDevMode && He(o, $a, "Incoming value should never be NO_CHANGE.");
            const l = On(t, n);
            let c, u = t.inputs;
            if (!a && null != u && (c = u[r])) Oc(e, n, c, r, o), Zt(t) && function (e, t) {
                ngDevMode && sn(e);
                const n = Rn(t, e);
                16 & n[2] || (n[2] |= 64)
            }(n, t.index), ngDevMode && function (e, t, n, r, o) {
                if (7 & n)
                    for (let i = 0; i < r.length; i += 2) ec(e, t, n, r[i + 1], o)
            }(n, l, t.type, c, o);
            else if (3 & t.type) {
                if (r = "class" === (d = r) ? "className" : "for" === d ? "htmlFor" : "formaction" === d ? "formAction" : "innerHtml" === d ? "innerHTML" : "readonly" === d ? "readOnly" : "tabindex" === d ? "tabIndex" : d, ngDevMode) {
                    if (function (e) {
                            if (e.toLowerCase().startsWith("on")) {
                                const t = `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...\nIf '${e}' is a directive input, make sure the directive is imported by the current module.`;
                                throw new Ee(306, t)
                            }
                        }(r), ! function (e, t, n, r) {
                            if (null === r) return !0;
                            if (tc(r, t) || n in e || Hr(n)) return !0;
                            return "undefined" == typeof Node || null === Node || !(e instanceof Node)
                        }(l, t.value, r, e.schemas)) return void nc(r, t.value);
                    ngDevMode.rendererSetProperty++
                }
                o = null != s ? s(o, t.value || "", r) : o, Tn(i) ? i.setProperty(l, r, o) : Hr(r) || (l.setProperty ? l.setProperty(r, o) : l[r] = o)
            } else 12 & t.type && ngDevMode && !tc(e.schemas, t.value) && nc(r, t.value);
            var d
        }

        function ec(e, t, n, r, o) {
            const i = e[11];
            r = Ns(r);
            const s = function (e) {
                try {
                    return null != e ? e.toString().slice(0, 30) : e
                } catch (e) {
                    return "[ERROR] Exception while trying to serialize the value"
                }
            }(o);
            if (3 & n) null == o ? Tn(i) ? i.removeAttribute(t, r) : t.removeAttribute(r) : Tn(i) ? i.setAttribute(t, r, s) : t.setAttribute(r, s);
            else {
                const e = Os(`bindings=${JSON.stringify({[r]:s},null,2)}`);
                Tn(i) ? i.setValue(t, e) : t.textContent = e
            }
        }

        function tc(e, t) {
            if (null !== e)
                for (let n = 0; n < e.length; n++) {
                    const r = e[n];
                    if (r === ks || r === Ts && t && t.indexOf("-") > -1) return !0
                }
            return !1
        }

        function nc(e, t) {
            const n = `Can't bind to '${e}' since it isn't a known property of '${t}'.`;
            console.error(Ie(303, n))
        }

        function rc(e, t, n, r) {
            ngDevMode && an(e);
            let o = !1;
            if (Bn()) {
                const i = function (e, t, n) {
                        ngDevMode && an(e), ngDevMode && Fr(n, 15);
                        const r = e.directiveRegistry;
                        let o = null;
                        if (r)
                            for (let i = 0; i < r.length; i++) {
                                const s = r[i];
                                Fa(n, s.selectors, !1) && (o || (o = ngDevMode ? new vl : []), Xr(Gr(n, t), e, s.type), Jt(s) ? (ngDevMode && (Fr(n, 2, `"${n.value}" tags cannot be used as component hosts. Please use a different tag to activate the ${be(s.type)} component.`), 2 & n.flags && $s(n, o[0].type, s.type)), sc(e, n), o.unshift(s)) : o.push(s))
                            }
                        return o
                    }(e, t, n),
                    s = null === r ? null : {
                        "": -1
                    };
                if (null !== i) {
                    o = !0, lc(n, e.data.length, i.length);
                    for (let e = 0; e < i.length; e++) {
                        const t = i[e];
                        t.providersResolver && t.providersResolver(t)
                    }
                    let r = !1,
                        a = !1,
                        l = Ll(e, t, i.length, null);
                    ngDevMode && Le(l, n.directiveStart, "TNode.directiveStart should point to just allocated space");
                    for (let o = 0; o < i.length; o++) {
                        const c = i[o];
                        n.mergedAttrs = $r(n.mergedAttrs, c.hostAttrs), cc(e, n, t, l, c), ac(l, c, s), null !== c.contentQueries && (n.flags |= 8), null === c.hostBindings && null === c.hostAttrs && 0 === c.hostVars || (n.flags |= 128);
                        const u = c.type.prototype;
                        !r && (u.ngOnChanges || u.ngOnInit || u.ngDoCheck) && ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index), r = !0), a || !u.ngOnChanges && !u.ngDoCheck || ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(n.index), a = !0), l++
                    }! function (e, t) {
                        ngDevMode && an(e);
                        const n = t.directiveStart,
                            r = t.directiveEnd,
                            o = e.data,
                            i = t.attrs,
                            s = ngDevMode ? new bl : [];
                        let a = null,
                            l = null;
                        for (let e = n; e < r; e++) {
                            const n = o[e],
                                r = n.inputs,
                                c = null === i || Oa(t) ? null : pc(r, i);
                            s.push(c), a = Yl(r, e, a), l = Yl(n.outputs, e, l)
                        }
                        null !== a && (a.hasOwnProperty("class") && (t.flags |= 16), a.hasOwnProperty("style") && (t.flags |= 32)), t.initialInputs = s, t.inputs = a, t.outputs = l
                    }(e, n)
                }
                s && function (e, t, n) {
                    if (t) {
                        const r = e.localNames = ngDevMode ? new wl : [];
                        for (let e = 0; e < t.length; e += 2) {
                            const o = n[t[e + 1]];
                            if (null == o) throw new Ee(-301, ngDevMode && `Export of name '${t[e+1]}' not found!`);
                            r.push(t[e], o)
                        }
                    }
                }(n, r, s)
            }
            return n.mergedAttrs = $r(n.mergedAttrs, n.attrs), o
        }

        function oc(e, t, n, r, o, i) {
            ngDevMode && an(e);
            const s = i.hostBindings;
            if (s) {
                let n = e.hostBindingOpCodes;
                null === n && (n = e.hostBindingOpCodes = []);
                const i = ~t.index;
                (function (e) {
                    let t = e.length;
                    for (; t > 0;) {
                        const n = e[--t];
                        if ("number" == typeof n && n < 0) return n
                    }
                    return 0
                })(n) != i && n.push(i), n.push(r, o, s)
            }
        }

        function ic(e, t) {
            null !== e.hostBindings && e.hostBindings(1, t)
        }

        function sc(e, t) {
            ngDevMode && an(e), t.flags |= 2, (e.components || (e.components = ngDevMode ? new yl : [])).push(t.index)
        }

        function ac(e, t, n) {
            if (n) {
                if (t.exportAs)
                    for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
                Jt(t) && (n[""] = e)
            }
        }

        function lc(e, t, n) {
            ngDevMode && Ve(n, e.directiveEnd - e.directiveStart, "Reached the max number of directives"), e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t
        }

        function cc(e, t, n, r, o) {
            ngDevMode && ze(r, Bt, "Must be in Expando section"), e.data[r] = o;
            const i = o.factory || (o.factory = hn(o.type, !0)),
                s = new Rr(i, Jt(o), null);
            e.blueprint[r] = s, n[r] = s, oc(e, t, 0, r, Ll(e, n, o.hostVars, $a), o)
        }

        function uc(e, t, n) {
            const r = On(t, e),
                o = Ql(n),
                i = e[10],
                s = bc(e, jl(e, o, null, n.onPush ? 64 : 16, r, t, i, i.createRenderer(r, n), null, null));
            e[t.index] = s
        }

        function dc(e, t, n, r, o, i) {
            ngDevMode && (He(r, $a, "Incoming value should never be NO_CHANGE."), function (e) {
                if (e.toLowerCase().startsWith("on")) {
                    const t = `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...`;
                    throw new Ee(306, t)
                }
            }(n), Fr(e, 2, `Attempted to set attribute \`${n}\` on a container node. Host bindings are not valid on ng-container or ng-template.`));
            const s = On(e, t);
            fc(t[11], s, i, e.value, n, r, o)
        }

        function fc(e, t, n, r, o, i, s) {
            if (null == i) ngDevMode && ngDevMode.rendererRemoveAttribute++, Tn(e) ? e.removeAttribute(t, o, n) : t.removeAttribute(o);
            else {
                ngDevMode && ngDevMode.rendererSetAttribute++;
                const a = null == s ? Te(i) : s(i, r || "", o);
                Tn(e) ? e.setAttribute(t, o, a, n) : n ? t.setAttributeNS(n, o, a) : t.setAttribute(o, a)
            }
        }

        function hc(e, t, n, r, o, i) {
            const s = i[t];
            if (null !== s) {
                const t = r.setInput;
                for (let i = 0; i < s.length;) {
                    const a = s[i++],
                        l = s[i++],
                        c = s[i++];
                    if (null !== t ? r.setInput(n, c, a, l) : n[l] = c, ngDevMode) {
                        ec(e, On(o, e), o.type, l, c)
                    }
                }
            }
        }

        function pc(e, t) {
            let n = null,
                r = 0;
            for (; r < t.length;) {
                const o = t[r];
                if (0 !== o)
                    if (5 !== o) {
                        if ("number" == typeof o) break;
                        e.hasOwnProperty(o) && (null === n && (n = []), n.push(o, e[o], t[r + 1])), r += 2
                    } else r += 2;
                else r += 4
            }
            return n
        }
        const gc = class extends Array {};

        function mc(e, t, n, r) {
            ngDevMode && sn(t), ngDevMode && !Tn(t[11]) && Qe(n);
            const o = new(ngDevMode ? gc : Array)(e, !0, !1, t, null, 0, r, n, null, null);
            return ngDevMode && Fe(o.length, zt, "Should allocate correct number of slots for LContainer header."), ngDevMode && function (e) {
                Xa(e, new Nl(e))
            }(o), o
        }

        function vc(e, t) {
            ngDevMode && Fe(jn(e), !1, "Should be run in update mode");
            const n = Rn(t, e);
            if (Fn(n)) {
                const e = n[1];
                80 & n[2] ? $l(e, n, e.template, n[8]) : n[5] > 0 && yc(n)
            }
        }

        function yc(e) {
            for (let t = Gs(e); null !== t; t = Js(t))
                for (let e = zt; e < t.length; e++) {
                    const n = t[e];
                    if (1024 & n[2]) {
                        const e = n[1];
                        ngDevMode && We(e, "TView must be allocated"), $l(e, n, e.template, n[8])
                    } else n[5] > 0 && yc(n)
                }
            const t = e[1].components;
            if (null !== t)
                for (let n = 0; n < t.length; n++) {
                    const r = Rn(t[n], e);
                    Fn(r) && r[5] > 0 && yc(r)
                }
        }

        function wc(e, t) {
            ngDevMode && Fe(jn(e), !0, "Should be run in creation mode");
            const n = Rn(t, e),
                r = n[1];
            ! function (e, t) {
                for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n])
            }(r, n), Hl(r, n, n[8])
        }

        function bc(e, t) {
            return e[13] ? e[14][4] = t : e[13] = t, e[14] = t, t
        }

        function _c(e) {
            for (; e;) {
                e[2] |= 64;
                const t = qs(e);
                if (0 != (512 & e[2]) && !t) return e;
                e = t
            }
            return null
        }

        function Mc(e) {
            for (let t = 0; t < e.components.length; t++) {
                const n = e.components[t],
                    r = bs(n),
                    o = r[1];
                Bl(o, r, o.template, n)
            }
        }

        function Dc(e, t, n) {
            const r = t[10];
            r.begin && r.begin();
            try {
                $l(e, t, e.template, n)
            } catch (e) {
                throw Ac(t, e), e
            } finally {
                r.end && r.end()
            }
        }

        function xc(e) {
            Mc(e[8])
        }

        function Cc(e, t, n) {
            ngDevMode && We(t, "View queries function to execute must be defined."), fr(0), t(e, n)
        }

        function Ec(e, t, n, r, ...o) {
            if (null === e[r] && (null == t.inputs || !t.inputs[n])) {
                (t.propertyBindings || (t.propertyBindings = [])).push(r);
                let i = n;
                o.length > 0 && (i += Ls + o.join(Ls)), e[r] = i
            }
        }
        const Ic = Pl;

        function Tc(e) {
            return e[7] || (e[7] = ngDevMode ? new _l : [])
        }

        function kc(e) {
            return e.cleanup || (e.cleanup = ngDevMode ? new Ml : [])
        }

        function Sc(e, t, n) {
            return (null === e || Jt(e)) && (n = function (e) {
                for (; Array.isArray(e);) {
                    if ("object" == typeof e[1]) return e;
                    e = e[0]
                }
                return null
            }(n[t.index])), n[11]
        }

        function Ac(e, t) {
            const n = e[9],
                r = n ? n.get(Is, null) : null;
            r && r.handleError(t)
        }

        function Oc(e, t, n, r, o) {
            for (let i = 0; i < n.length;) {
                const s = n[i++],
                    a = n[i++],
                    l = t[s];
                ngDevMode && Ze(t, s);
                const c = e.data[s];
                null !== c.setInput ? c.setInput(l, o, r, a) : l[a] = o
            }
        }

        function Nc(e, t, n) {
            ngDevMode && Re(n, "Value should be a string"), ngDevMode && He(n, $a, "value should not be NO_CHANGE"), ngDevMode && Ze(e, t);
            const r = An(t, e);
            ngDevMode && We(r, "native element should exist"), ea(e[11], r, n)
        }

        function Pc(e, t, n) {
            ngDevMode && an(qn(), "Expecting to be called in first template pass only");
            let r = n ? e.styles : null,
                o = n ? e.classes : null,
                i = 0;
            if (null !== t)
                for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    if ("number" == typeof n) i = n;
                    else if (1 == i) o = _e(o, n);
                    else if (2 == i) {
                        r = _e(r, n + ": " + t[++e] + ";")
                    }
                }
            n ? e.styles = r : e.stylesWithoutHost = r, n ? e.classes = o : e.classesWithoutHost = o
        }

        function Rc(e) {
            ngDevMode && We(e, "component");
            const t = _c(vs(e));
            ngDevMode && We(t[8], "rootContext should be defined"),
                function (e, t) {
                    if (0 === e.flags && e.clean == Pl) {
                        let n;
                        e.flags |= t, e.clean = new Promise((e => e)), e.scheduler((() => {
                            if (1 & e.flags && (e.flags &= -2, Mc(e)), 2 & e.flags) {
                                e.flags &= -3;
                                const t = e.playerHandler;
                                t && t.flushPlayers()
                            }
                            e.clean = Pl, n(null)
                        }))
                    }
                }(t[8], 1)
        }
        const jc = new Do("INJECTOR", -1);
        class Fc {
            get(e, t = qo) {
                if (t === qo) {
                    const t = new Error(`NullInjectorError: No provider for ${be(e)}!`);
                    throw t.name = "NullInjectorError", t
                }
                return t
            }
        }
        const Vc = new Do("Set Injector scope."),
            Lc = {},
            Hc = {};
        let $c;

        function Bc() {
            return void 0 === $c && ($c = new Fc), $c
        }

        function Uc(e, t = null, n = null, r) {
            const o = zc(e, t, n, r);
            return o._resolveInjectorDefTypes(), o
        }

        function zc(e, t = null, n = null, r) {
            return new Wc(e, n, t || Bc(), r)
        }
        class Wc {
            constructor(e, t, n, r = null) {
                this.parent = n, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
                const o = [];
                t && Ao(t, (n => this.processProvider(n, e, t))), Ao([e], (e => this.processInjectorType(e, [], o))), this.records.set(jc, Zc(void 0, this));
                const i = this.records.get(Vc);
                this.scope = null != i ? i.value : null, this.source = r || ("object" == typeof e ? null : be(e))
            }
            get destroyed() {
                return this._destroyed
            }
            destroy() {
                this.assertNotDestroyed(), this._destroyed = !0;
                try {
                    this.onDestroy.forEach((e => e.ngOnDestroy()))
                } finally {
                    this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
                }
            }
            get(e, t = qo, n = it.Default) {
                this.assertNotDestroyed();
                const r = Ko(this),
                    o = at(void 0);
                try {
                    if (!(n & it.SkipSelf)) {
                        let t = this.records.get(e);
                        if (void 0 === t) {
                            const n = ("function" == typeof (i = e) || "object" == typeof i && i instanceof Do) && Ye(e);
                            t = n && this.injectableDefInScope(n) ? Zc(qc(e), Lc) : null, this.records.set(e, t)
                        }
                        if (null != t) return this.hydrate(e, t)
                    }
                    const s = n & it.Self ? Bc() : this.parent;
                    return t = n & it.Optional && t === qo ? null : t, s.get(e, t)
                } catch (t) {
                    if ("NullInjectorError" === t.name) {
                        if ((t.ngTempTokenPath = t.ngTempTokenPath || []).unshift(be(e)), r) throw t;
                        return oi(t, e, "R3InjectorError", this.source)
                    }
                    throw t
                } finally {
                    at(o), Ko(r)
                }
                var i
            }
            _resolveInjectorDefTypes() {
                this.injectorDefTypes.forEach((e => this.get(e)))
            }
            toString() {
                const e = [];
                return this.records.forEach(((t, n) => e.push(be(n)))), `R3Injector[${e.join(", ")}]`
            }
            assertNotDestroyed() {
                if (this._destroyed) throw new Ee(205, ngDevMode && "Injector has already been destroyed.")
            }
            processInjectorType(e, t, n) {
                if (!(e = xe(e))) return !1;
                let r = et(e);
                const o = null == r && e.ngModule || void 0,
                    i = void 0 === o ? e : o;
                if (ngDevMode && -1 !== t.indexOf(i)) {
                    Se(be(i), t.map(be))
                }
                const s = -1 !== n.indexOf(i);
                if (void 0 !== o && (r = et(o)), null == r) return !1;
                if (null != r.imports && !s) {
                    let e;
                    ngDevMode && t.push(i), n.push(i);
                    try {
                        Ao(r.imports, (r => {
                            this.processInjectorType(r, t, n) && (void 0 === e && (e = []), e.push(r))
                        }))
                    } finally {
                        ngDevMode && t.pop()
                    }
                    if (void 0 !== e)
                        for (let t = 0; t < e.length; t++) {
                            const {
                                ngModule: n,
                                providers: r
                            } = e[t];
                            Ao(r, (e => this.processProvider(e, n, r || bt)))
                        }
                }
                this.injectorDefTypes.add(i);
                const a = hn(i) || (() => new i);
                this.records.set(i, Zc(a, Lc));
                const l = r.providers;
                if (null != l && !s) {
                    const t = e;
                    Ao(l, (e => this.processProvider(e, t, l)))
                }
                return void 0 !== o && void 0 !== e.providers
            }
            processProvider(e, t, n) {
                let r = Jc(e = xe(e)) ? e : xe(e && e.provide);
                const o = function (e, t, n) {
                    if (Gc(e)) return Zc(void 0, e.useValue);
                    return Zc(Qc(e, t, n), Lc)
                }(e, t, n);
                if (Jc(e) || !0 !== e.multi) {
                    const e = this.records.get(r);
                    ngDevMode && e && void 0 !== e.multi && Ae()
                } else {
                    let t = this.records.get(r);
                    t ? ngDevMode && void 0 === t.multi && Ae() : (t = Zc(void 0, Lc, !0), t.factory = () => ni(t.multi), this.records.set(r, t)), r = e, t.multi.push(e)
                }
                this.records.set(r, o)
            }
            hydrate(e, t) {
                var n;
                return ngDevMode && t.value === Hc ? Se(be(e)) : t.value === Lc && (t.value = Hc, t.value = t.factory()), "object" == typeof t.value && t.value && (null !== (n = t.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy) && this.onDestroy.add(t.value), t.value
            }
            injectableDefInScope(e) {
                if (!e.providedIn) return !1;
                const t = xe(e.providedIn);
                return "string" == typeof t ? "any" === t || t === this.scope : this.injectorDefTypes.has(t)
            }
        }

        function qc(e) {
            const t = Ye(e),
                n = null !== t ? t.factory : hn(e);
            if (null !== n) return n;
            if (e instanceof Do) throw new Ee(204, ngDevMode && `Token ${be(e)} is missing a Éµprov definition.`);
            if (e instanceof Function) return function (e) {
                const t = e.length;
                if (t > 0) {
                    const n = Po(t, "?");
                    throw new Ee(204, ngDevMode && `Can't resolve all parameters for ${be(e)}: (${n.join(", ")}).`)
                }
                const n = function (e) {
                    const t = e && (e[tt] || e[rt]);
                    if (t) {
                        const n = function (e) {
                            if (e.hasOwnProperty("name")) return e.name;
                            const t = ("" + e).match(/^function\s*([^\s(]+)/);
                            return null === t ? "" : t[1]
                        }(e);
                        return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`), t
                    }
                    return null
                }(e);
                return null !== n ? () => n.factory(e) : () => new e
            }(e);
            throw new Ee(204, ngDevMode && "unreachable")
        }

        function Qc(e, t, n) {
            let r;
            if (Jc(e)) {
                const t = xe(e);
                return hn(t) || qc(t)
            }
            if (Gc(e)) r = () => xe(e.useValue);
            else if ((o = e) && o.useFactory) r = () => e.useFactory(...ni(e.deps || []));
            else if (function (e) {
                    return !(!e || !e.useExisting)
                }(e)) r = () => Xo(xe(e.useExisting));
            else {
                const o = xe(e && (e.useClass || e.provide));
                if (ngDevMode && !o && function (e, t, n) {
                        let r = "";
                        e && t && (r = ` - only instances of Provider and Type are allowed, got: [${t.map((e=>e==n?"?"+n+"?":"...")).join(", ")}]`);
                        throw new Error(`Invalid provider for the NgModule '${be(e)}'` + r)
                    }(t, n, e), ! function (e) {
                        return !!e.deps
                    }(e)) return hn(o) || qc(o);
                r = () => new o(...ni(e.deps))
            }
            var o;
            return r
        }

        function Zc(e, t, n = !1) {
            return {
                factory: e,
                value: t,
                multi: n ? [] : void 0
            }
        }

        function Gc(e) {
            return null !== e && "object" == typeof e && Go in e
        }

        function Jc(e) {
            return "function" == typeof e
        }
        class Kc {
            static create(e, t) {
                if (Array.isArray(e)) return Uc({
                    name: ""
                }, t, e, ""); {
                    const t = e.name ? ? "";
                    return Uc({
                        name: t
                    }, e.parent, e.providers, t)
                }
            }
        }

        function Yc(e) {
            lu(e);
            const t = gs(e);
            return null === t ? null : (void 0 === t.component && (t.component = function (e, t) {
                const n = t[1].data[e];
                let r = n.directiveStart;
                return 2 & n.flags ? t[r] : null
            }(t.nodeIndex, t.lView)), t.component)
        }

        function Xc(e) {
            lu(e);
            const t = gs(e);
            return null === t ? null : t.lView[8]
        }

        function eu(e) {
            const t = gs(e);
            if (null === t) return null;
            let n, r = t.lView;
            for (ngDevMode && sn(r); 2 === r[1].type && qs(r);) n;
            return 512 & r[2] ? null : r[8]
        }

        function tu(e) {
            return [...Zs(e).components]
        }

        function nu(e) {
            const t = gs(e);
            if (null === t) return Kc.NULL;
            const n = t.lView[1].data[t.nodeIndex];
            return new uo(n, t.lView)
        }

        function ru(e) {
            if (e instanceof Text) return [];
            const t = gs(e);
            if (null === t) return [];
            const n = t.lView,
                r = n[1],
                o = t.nodeIndex;
            return r ? .data[o] ? (void 0 === t.directives && (t.directives = xs(o, n, !1)), null === t.directives ? [] : [...t.directives]) : []
        }

        function ou(e) {
            const {
                constructor: t
            } = e;
            if (!t) throw new Error("Unable to find the instance constructor");
            const n = Vt(t);
            if (n) return {
                inputs: n.inputs,
                outputs: n.outputs,
                encapsulation: n.encapsulation,
                changeDetection: n.onPush ? ut.OnPush : ut.Default
            };
            const r = Lt(t);
            return r ? {
                inputs: r.inputs,
                outputs: r.outputs
            } : null
        }

        function iu(e) {
            return gs(e).native
        }

        function su(e) {
            lu(e);
            const t = gs(e);
            if (null === t) return [];
            const n = t.lView,
                r = n[1],
                o = n[7],
                i = r.cleanup,
                s = [];
            if (i && o)
                for (let t = 0; t < i.length;) {
                    const r = i[t++],
                        a = i[t++];
                    if ("string" == typeof r) {
                        const l = r,
                            c = Sn(n[a]),
                            u = o[i[t++]],
                            d = i[t++],
                            f = "boolean" == typeof d || d >= 0 ? "dom" : "output",
                            h = "boolean" == typeof d && d;
                        e == c && s.push({
                            element: e,
                            name: l,
                            callback: u,
                            useCapture: h,
                            type: f
                        })
                    }
                }
            return s.sort(au), s
        }

        function au(e, t) {
            return e.name == t.name ? 0 : e.name < t.name ? -1 : 1
        }

        function lu(e) {
            if ("undefined" != typeof Element && !(e instanceof Element)) throw new Error("Expecting instance of DOM Element")
        }

        function cu(e) {
            Rc(e), tu(e).forEach((e => function (e) {
                const t = vs(e);
                Dc(t[1], t, e)
            }(e)))
        }
        Kc.THROW_IF_NOT_FOUND = qo, Kc.NULL = new Fc, Kc.Éµprov = Je({
            token: Kc,
            providedIn: "any",
            factory: () => Xo(jc)
        }), Kc.__NG_ELEMENT_ID__ = -1;
        let uu = !1;

        function du() {
            uu || (!0, fu("ÉµsetProfiler", _n), fu("getDirectiveMetadata", ou), fu("getComponent", Yc), fu("getContext", Xc), fu("getListeners", su), fu("getOwningComponent", eu), fu("getHostElement", iu), fu("getInjector", nu), fu("getRootComponents", tu), fu("getDirectives", ru), fu("applyChanges", cu))
        }

        function fu(e, t) {
            if ("undefined" == typeof COMPILED || !COMPILED) {
                const n = vt;
                if (ngDevMode && We(t, "function not defined"), n) {
                    let r = n.ng;
                    r || (n.ng = {}), r[e] = t
                }
            }
        }

        function hu(e, t, n, r, o, i) {
            const s = n[1];
            ngDevMode && Ze(n, 20), n[20] = e;
            const a = Fl(s, 20, 2, "#host", null),
                l = a.mergedAttrs = t.hostAttrs;
            null !== l && (Pc(a, l, !0), null !== e && (Vr(o, e, l), null !== a.classes && Ta(o, e, a.classes), null !== a.styles && Ia(o, e, a.styles)));
            const c = r.createRenderer(e, t),
                u = jl(n, Ql(t), null, t.onPush ? 64 : 16, n[20], a, r, c, i || null, null);
            return s.firstCreatePass && (Xr(Gr(a, n), s, t.type), sc(s, a), lc(a, n.length, 1)), bc(n, u), n[20] = u
        }

        function pu(e, t, n, r, o) {
            const i = n[1],
                s = function (e, t, n) {
                    const r = Zn();
                    if (e.firstCreatePass) {
                        n.providersResolver && n.providersResolver(n);
                        const o = Ll(e, t, 1, null);
                        ngDevMode && Fe(o, r.directiveStart, "Because this is a root component the allocated expando should match the TNode component."), cc(e, r, t, o, n)
                    }
                    const o = ao(t, e, r.directiveStart, r);
                    ys(o, t);
                    const i = On(r, t);
                    return i && ys(i, t), o
                }(i, n, t);
            if (r.components.push(s), e[8] = s, o && o.forEach((e => e(s, t))), t.contentQueries) {
                const e = Zn();
                ngDevMode && We(e, "TNode expected"), t.contentQueries(1, s, e.directiveStart)
            }
            const a = Zn();
            if (ngDevMode && We(a, "tNode should have been already created"), i.firstCreatePass && (null !== t.hostBindings || null !== t.hostAttrs)) {
                Dr(a.index);
                oc(n[1], a, 0, a.directiveStart, a.directiveEnd, t), ic(t, s)
            }
            return s
        }

        function gu(e, t) {
            return {
                components: [],
                scheduler: e || Rs,
                clean: Ic,
                playerHandler: t || null,
                flags: 0
            }
        }

        function mu(e, t) {
            const n = bs(e);
            ngDevMode && We(n, "LView is required");
            const r = n[1],
                o = Zn();
            ngDevMode && We(o, "TNode is required"), Tr(r, o)
        }

        function vu(e) {
            return Object.getPrototypeOf(e.prototype).constructor
        }

        function yu(e) {
            let t = vu(e.type),
                n = !0;
            const r = [e];
            for (; t;) {
                let o;
                if (Jt(e)) o = t.Éµcmp || t.Éµdir;
                else {
                    if (t.Éµcmp) {
                        const n = "undefined" == typeof ngDevMode || ngDevMode ? `Directives cannot inherit Components. Directive ${ke(e.type)} is attempting to extend component ${ke(t)}` : "";
                        throw new Ee(903, n)
                    }
                    o = t.Éµdir
                }
                if (o) {
                    if (n) {
                        r.push(o);
                        const t = e;
                        t.inputs = wu(e.inputs), t.declaredInputs = wu(e.declaredInputs), t.outputs = wu(e.outputs);
                        const n = o.hostBindings;
                        n && Mu(e, n);
                        const i = o.viewQuery,
                            s = o.contentQueries;
                        if (i && bu(e, i), s && _u(e, s), we(e.inputs, o.inputs), we(e.declaredInputs, o.declaredInputs), we(e.outputs, o.outputs), Jt(o) && o.data.animation) {
                            const t = e.data;
                            t.animation = (t.animation || []).concat(o.data.animation)
                        }
                    }
                    const t = o.features;
                    if (t)
                        for (let r = 0; r < t.length; r++) {
                            const o = t[r];
                            o && o.ngInherit && o(e), o === yu && (n = !1)
                        }
                }
                t = Object.getPrototypeOf(t)
            }! function (e) {
                let t = 0,
                    n = null;
                for (let r = e.length - 1; r >= 0; r--) {
                    const o = e[r];
                    o.hostVars = t += o.hostVars, o.hostAttrs = $r(o.hostAttrs, n = $r(n, o.hostAttrs))
                }
            }(r)
        }

        function wu(e) {
            return e === wt ? {} : e === bt ? [] : e
        }

        function bu(e, t) {
            const n = e.viewQuery;
            e.viewQuery = n ? (e, r) => {
                t(e, r), n(e, r)
            } : t
        }

        function _u(e, t) {
            const n = e.contentQueries;
            e.contentQueries = n ? (e, r, o) => {
                t(e, r, o), n(e, r, o)
            } : t
        }

        function Mu(e, t) {
            const n = e.hostBindings;
            e.hostBindings = n ? (e, r) => {
                t(e, r), n(e, r)
            } : t
        }
        const Du = ["providersResolver"],
            xu = ["template", "decls", "consts", "vars", "onPush", "ngContentSelectors", "styles", "encapsulation", "schemas"];

        function Cu(e) {
            let t, n = vu(e.type);
            t = Jt(e) ? n.Éµcmp : n.Éµdir;
            const r = e;
            for (const e of Du) r[e] = t[e];
            if (Jt(t))
                for (const e of xu) r[e] = t[e]
        }
        let Eu = null;

        function Iu() {
            if (!Eu) {
                const e = vt.Symbol;
                if (e && e.iterator) Eu = e.iterator;
                else {
                    const e = Object.getOwnPropertyNames(Map.prototype);
                    for (let t = 0; t < e.length; ++t) {
                        const n = e[t];
                        "entries" !== n && "size" !== n && Map.prototype[n] === Map.prototype.entries && (Eu = n)
                    }
                }
            }
            return Eu
        }

        function Tu(e, t) {
            const n = ku(e),
                r = ku(t);
            if (n && r) return function (e, t, n) {
                const r = e[Iu()](),
                    o = t[Iu()]();
                for (;;) {
                    const e = r.next(),
                        t = o.next();
                    if (e.done && t.done) return !0;
                    if (e.done || t.done) return !1;
                    if (!n(e.value, t.value)) return !1
                }
            }(e, t, Tu); {
                const o = e && ("object" == typeof e || "function" == typeof e),
                    i = t && ("object" == typeof t || "function" == typeof t);
                return !(n || !o || r || !i) || Object.is(e, t)
            }
        }

        function ku(e) {
            return !!Su(e) && (Array.isArray(e) || !(e instanceof Map) && Iu() in e)
        }

        function Su(e) {
            return null !== e && ("function" == typeof e || "object" == typeof e)
        }

        function Au(e, t, n) {
            return e[t] = n
        }

        function Ou(e, t) {
            return ngDevMode && Ze(e, t), ngDevMode && He(e[t], $a, "Stored value should never be NO_CHANGE."), e[t]
        }

        function Nu(e, t, n) {
            ngDevMode && He(n, $a, "Incoming value should never be NO_CHANGE."), ngDevMode && $e(t, e.length, "Slot should have been initialized to NO_CHANGE");
            const r = e[t];
            if (Object.is(r, n)) return !1;
            if (ngDevMode && er()) {
                const o = r !== $a ? r : void 0;
                if (!Tu(o, n)) {
                    const i = function (e, t, n, r) {
                        const o = e[1].data,
                            i = o[t];
                        if ("string" == typeof i) return i.indexOf(Ls) > -1 ? Bs(e, t, t, i, r) : {
                            propName: i,
                            oldValue: n,
                            newValue: r
                        };
                        if (null === i) {
                            let n = t - 1;
                            for (;
                                "string" != typeof o[n] && null === o[n + 1];) n--;
                            const i = o[n];
                            if ("string" == typeof i) {
                                const o = i.match(new RegExp(Ls, "g"));
                                if (o && o.length - 1 > t - n) return Bs(e, n, t, i, r)
                            }
                        }
                        return {
                            propName: void 0,
                            oldValue: n,
                            newValue: r
                        }
                    }(e, t, o, n);
                    ! function (e, t, n, r) {
                        let o = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value${r?` for '${r}'`:""}: '${t}'. Current value: '${n}'.`;
                        throw e && (o += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook?"), new Ee(-100, o)
                    }(r === $a, i.oldValue, i.newValue, i.propName)
                }
                return !1
            }
            return e[t] = n, !0
        }

        function Pu(e, t, n, r) {
            const o = Nu(e, t, n);
            return Nu(e, t + 1, r) || o
        }

        function Ru(e, t, n, r, o) {
            const i = Pu(e, t, n, r);
            return Nu(e, t + 2, o) || i
        }

        function ju(e, t, n, r, o, i) {
            const s = Pu(e, t, n, r);
            return Pu(e, t + 2, o, i) || s
        }

        function Fu(e, t, n, r) {
            const o = Wn(),
                i = ir();
            if (Nu(o, i, t)) {
                const s = qn(),
                    a = xr();
                dc(a, o, e, t, n, r), ngDevMode && Ec(s.data, a, "attr." + e, i)
            }
            return Fu
        }

        function Vu(e, t) {
            ngDevMode && $e(2, t.length, "should have at least 3 values"), ngDevMode && Fe(t.length % 2, 1, "should have an odd number of values");
            let n = !1,
                r = rr();
            for (let o = 1; o < t.length; o += 2) n = Nu(e, r++, t[o]) || n;
            if (or(r), !n) return $a;
            let o = t[0];
            for (let e = 1; e < t.length; e += 2) o += Te(t[e]) + t[e + 1];
            return o
        }

        function Lu(e, t, n, r) {
            return Nu(e, ir(), n) ? t + Te(n) + r : $a
        }

        function Hu(e, t, n, r, o, i) {
            const s = Pu(e, rr(), n, o);
            return sr(2), s ? t + Te(n) + r + Te(o) + i : $a
        }

        function $u(e, t, n, r, o, i, s, a) {
            const l = Ru(e, rr(), n, o, s);
            return sr(3), l ? t + Te(n) + r + Te(o) + i + Te(s) + a : $a
        }

        function Bu(e, t, n, r, o, i, s, a, l, c) {
            const u = ju(e, rr(), n, o, s, l);
            return sr(4), u ? t + Te(n) + r + Te(o) + i + Te(s) + a + Te(l) + c : $a
        }

        function Uu(e, t, n, r, o, i, s, a, l, c, u, d) {
            const f = rr();
            let h = ju(e, f, n, o, s, l);
            return h = Nu(e, f + 4, u) || h, sr(5), h ? t + Te(n) + r + Te(o) + i + Te(s) + a + Te(l) + c + Te(u) + d : $a
        }

        function zu(e, t, n, r, o, i, s, a, l, c, u, d, f, h) {
            const p = rr();
            let g = ju(e, p, n, o, s, l);
            return g = Pu(e, p + 4, u, f) || g, sr(6), g ? t + Te(n) + r + Te(o) + i + Te(s) + a + Te(l) + c + Te(u) + d + Te(f) + h : $a
        }

        function Wu(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g) {
            const m = rr();
            let v = ju(e, m, n, o, s, l);
            return v = Ru(e, m + 4, u, f, p) || v, sr(7), v ? t + Te(n) + r + Te(o) + i + Te(s) + a + Te(l) + c + Te(u) + d + Te(f) + h + Te(p) + g : $a
        }

        function qu(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m, v) {
            const y = rr();
            let w = ju(e, y, n, o, s, l);
            return w = ju(e, y + 4, u, f, p, m) || w, sr(8), w ? t + Te(n) + r + Te(o) + i + Te(s) + a + Te(l) + c + Te(u) + d + Te(f) + h + Te(p) + g + Te(m) + v : $a
        }

        function Qu(e, t, n, r, o, i) {
            const s = Wn(),
                a = Lu(s, t, n, r);
            if (a !== $a) {
                const n = xr();
                dc(n, s, e, a, o, i), ngDevMode && Ec(qn().data, n, "attr." + e, rr() - 1, t, r)
            }
            return Qu
        }

        function Zu(e, t, n, r, o, i, s, a) {
            const l = Wn(),
                c = Hu(l, t, n, r, o, i);
            if (c !== $a) {
                const n = xr();
                dc(n, l, e, c, s, a), ngDevMode && Ec(qn().data, n, "attr." + e, rr() - 2, t, r, i)
            }
            return Zu
        }

        function Gu(e, t, n, r, o, i, s, a, l, c) {
            const u = Wn(),
                d = $u(u, t, n, r, o, i, s, a);
            if (d !== $a) {
                const n = xr();
                dc(n, u, e, d, l, c), ngDevMode && Ec(qn().data, n, "attr." + e, rr() - 3, t, r, i, a)
            }
            return Gu
        }

        function Ju(e, t, n, r, o, i, s, a, l, c, u, d) {
            const f = Wn(),
                h = Bu(f, t, n, r, o, i, s, a, l, c);
            if (h !== $a) {
                const n = xr();
                dc(n, f, e, h, u, d), ngDevMode && Ec(qn().data, n, "attr." + e, rr() - 4, t, r, i, a, c)
            }
            return Ju
        }

        function Ku(e, t, n, r, o, i, s, a, l, c, u, d, f, h) {
            const p = Wn(),
                g = Uu(p, t, n, r, o, i, s, a, l, c, u, d);
            if (g !== $a) {
                const n = xr();
                dc(n, p, e, g, f, h), ngDevMode && Ec(qn().data, n, "attr." + e, rr() - 5, t, r, i, a, c, d)
            }
            return Ku
        }

        function Yu(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g) {
            const m = Wn(),
                v = zu(m, t, n, r, o, i, s, a, l, c, u, d, f, h);
            if (v !== $a) {
                const n = xr();
                dc(n, m, e, v, p, g), ngDevMode && Ec(qn().data, n, "attr." + e, rr() - 6, t, r, i, a, c, d, h)
            }
            return Yu
        }

        function Xu(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m, v) {
            const y = Wn(),
                w = Wu(y, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g);
            if (w !== $a) {
                const n = xr();
                dc(n, y, e, w, m, v), ngDevMode && Ec(qn().data, n, "attr." + e, rr() - 7, t, r, i, a, c, d, h, g)
            }
            return Xu
        }

        function ed(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m, v, y, w) {
            const b = Wn(),
                _ = qu(b, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m, v);
            if (_ !== $a) {
                const n = xr();
                dc(n, b, e, _, y, w), ngDevMode && Ec(qn().data, n, "attr." + e, rr() - 8, t, r, i, a, c, d, h, g, v)
            }
            return ed
        }

        function td(e, t, n, r) {
            const o = Wn(),
                i = Vu(o, t);
            if (i !== $a) {
                const s = xr();
                if (dc(s, o, e, i, n, r), ngDevMode) {
                    const n = [t[0]];
                    for (let e = 2; e < t.length; e += 2) n.push(t[e]);
                    Ec(qn().data, s, "attr." + e, rr() - n.length + 1, ...n)
                }
            }
            return td
        }

        function nd(e, t, n, r, o, i, s, a) {
            const l = Wn(),
                c = qn(),
                u = e + Bt,
                d = c.firstCreatePass ? function (e, t, n, r, o, i, s, a, l) {
                    ngDevMode && an(t), ngDevMode && ngDevMode.firstCreatePass++;
                    const c = t.consts,
                        u = Fl(t, e, 4, s || null, Vn(c, a));
                    rc(t, n, u, Vn(c, l)), Tr(t, u);
                    const d = u.tViews = Zl(2, u, r, o, i, t.directiveRegistry, t.pipeRegistry, null, t.schemas, c);
                    return null !== t.queries && (t.queries.template(t, u), d.queries = t.queries.embeddedTView(u)), u
                }(u, c, l, t, n, r, o, i, s) : c.data[u];
            Kn(d, !1);
            const f = l[11].createComment(ngDevMode ? "container" : "");
            wa(c, l, f, d), ys(f, l), bc(l, l[u] = mc(f, l, f, d)), Gt(d) && Wl(c, l, d), null != s && ql(l, d, a)
        }

        function rd(e) {
            return Pn($n.lFrame.contextLView, Bt + e)
        }
        const od = {
            ÉµÉµdefineInjectable: Je,
            ÉµÉµdefineInjector: Ke,
            ÉµÉµinject: Xo,
            ÉµÉµinvalidFactoryDep: ei,
            resolveForwardRef: xe
        };

        function id(e, t) {
            let n = null,
                r = null;
            e.hasOwnProperty(tt) || Object.defineProperty(e, tt, {
                get: () => {
                    if (null === n) {
                        const r = Io({
                            usage: 0,
                            kind: "injectable",
                            type: e
                        });
                        n = r.compileInjectable(od, `ng:///${e.name}/Éµprov.js`, function (e, t) {
                            const n = t || {
                                    providedIn: null
                                },
                                r = {
                                    name: e.name,
                                    type: e,
                                    typeArgumentCount: 0,
                                    providedIn: n.providedIn
                                };
                            (ad(n) || ld(n)) && void 0 !== n.deps && (r.deps = hi(n.deps));
                            ad(n) ? r.useClass = n.useClass : ! function (e) {
                                return sd in e
                            }(n) ? ld(n) ? r.useFactory = n.useFactory : function (e) {
                                return void 0 !== e.useExisting
                            }(n) && (r.useExisting = n.useExisting) : r.useValue = n.useValue;
                            return r
                        }(e, t))
                    }
                    return n
                }
            }), e.hasOwnProperty(Ct) || Object.defineProperty(e, Ct, {
                get: () => {
                    if (null === r) {
                        const t = Io({
                            usage: 0,
                            kind: "injectable",
                            type: e
                        });
                        r = t.compileFactory(od, `ng:///${e.name}/Éµfac.js`, {
                            name: e.name,
                            type: e,
                            typeArgumentCount: 0,
                            deps: fi(e),
                            target: t.FactoryTarget.Injectable
                        })
                    }
                    return r
                },
                configurable: !0
            })
        }
        const sd = ye({
            provide: String,
            useValue: ye
        });

        function ad(e) {
            return void 0 !== e.useClass
        }

        function ld(e) {
            return void 0 !== e.useFactory
        }
        const cd = yo("Injectable", void 0, void 0, void 0, ((e, t) => id(e, t)));

        function ud(e) {
            if (e.length > 1) {
                const t = function (e) {
                    const t = [];
                    for (let n = 0; n < e.length; ++n) {
                        if (t.indexOf(e[n]) > -1) return t.push(e[n]), t;
                        t.push(e[n])
                    }
                    return t
                }(e.slice().reverse());
                return " (" + t.map((e => be(e.token))).join(" -> ") + ")"
            }
            return ""
        }

        function dd(e, t, n, r) {
            const o = [t],
                i = n(o),
                s = r ? function (e, t) {
                    const n = `${e} caused by: ${t instanceof Error?t.message:t}`,
                        r = Error(n);
                    return r.ngOriginalError = t, r
                }(i, r) : Error(i);
            return s.addKey = fd, s.keys = o, s.injectors = [e], s.constructResolvingMessage = n, s.ngOriginalError = r, s
        }

        function fd(e, t) {
            this.injectors.push(e), this.keys.push(t), this.message = this.constructResolvingMessage(this.keys)
        }

        function hd(e, t) {
            const n = [];
            for (let e = 0, r = t.length; e < r; e++) {
                const r = t[e];
                r && 0 != r.length ? n.push(r.map(be).join(" ")) : n.push("?")
            }
            return Error("Cannot resolve all parameters for '" + be(e) + "'(" + n.join(", ") + "). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '" + be(e) + "' is decorated with Injectable.")
        }

        function pd(e, t) {
            return Error(`Cannot mix multi providers and regular providers, got: ${e} ${t}`)
        }
        class gd {
            constructor(e, t) {
                if (this.token = e, this.id = t, !e) throw new Error("Token must be defined!");
                this.displayName = be(this.token)
            }
            static get(e) {
                return md.get(xe(e))
            }
            static get numberOfKeys() {
                return md.numberOfKeys
            }
        }
        const md = new class {
            constructor() {
                this._allKeys = new Map
            }
            get(e) {
                if (e instanceof gd) return e;
                if (this._allKeys.has(e)) return this._allKeys.get(e);
                const t = new gd(e, gd.numberOfKeys);
                return this._allKeys.set(e, t), t
            }
            get numberOfKeys() {
                return this._allKeys.size
            }
        };
        const vd = new class {
            constructor(e) {
                this.reflectionCapabilities = e
            }
            updateCapabilities(e) {
                this.reflectionCapabilities = e
            }
            factory(e) {
                return this.reflectionCapabilities.factory(e)
            }
            parameters(e) {
                return this.reflectionCapabilities.parameters(e)
            }
            annotations(e) {
                return this.reflectionCapabilities.annotations(e)
            }
            propMetadata(e) {
                return this.reflectionCapabilities.propMetadata(e)
            }
            hasLifecycleHook(e, t) {
                return this.reflectionCapabilities.hasLifecycleHook(e, t)
            }
            getter(e) {
                return this.reflectionCapabilities.getter(e)
            }
            setter(e) {
                return this.reflectionCapabilities.setter(e)
            }
            method(e) {
                return this.reflectionCapabilities.method(e)
            }
            importUri(e) {
                return this.reflectionCapabilities.importUri(e)
            }
            resourceUri(e) {
                return this.reflectionCapabilities.resourceUri(e)
            }
            resolveIdentifier(e, t, n, r) {
                return this.reflectionCapabilities.resolveIdentifier(e, t, n, r)
            }
            resolveEnum(e, t) {
                return this.reflectionCapabilities.resolveEnum(e, t)
            }
        }(new Uo);
        class yd {
            constructor(e, t, n) {
                this.key = e, this.optional = t, this.visibility = n
            }
            static fromKey(e) {
                return new yd(e, !1, null)
            }
        }
        const wd = [];
        class bd {
            constructor(e, t, n) {
                this.key = e, this.resolvedFactories = t, this.multiProvider = n, this.resolvedFactory = this.resolvedFactories[0]
            }
        }
        class _d {
            constructor(e, t) {
                this.factory = e, this.dependencies = t
            }
        }

        function Md(e) {
            let t, n;
            if (e.useClass) {
                const r = xe(e.useClass);
                t = vd.factory(r), n = Ed(r)
            } else e.useExisting ? (t = e => e, n = [yd.fromKey(gd.get(e.useExisting))]) : e.useFactory ? (t = e.useFactory, n = function (e, t) {
                if (t) {
                    const n = t.map((e => [e]));
                    return t.map((t => Id(e, t, n)))
                }
                return Ed(e)
            }(e.useFactory, e.deps)) : (t = () => e.useValue, n = wd);
            return new _d(t, n)
        }

        function Dd(e) {
            return new bd(gd.get(e.provide), [Md(e)], e.multi || !1)
        }

        function xd(e) {
            const t = function (e, t) {
                for (let n = 0; n < e.length; n++) {
                    const r = e[n],
                        o = t.get(r.key.id);
                    if (o) {
                        if (r.multiProvider !== o.multiProvider) throw pd(o, r);
                        if (r.multiProvider)
                            for (let e = 0; e < r.resolvedFactories.length; e++) o.resolvedFactories.push(r.resolvedFactories[e]);
                        else t.set(r.key.id, r)
                    } else {
                        let e;
                        e = r.multiProvider ? new bd(r.key, r.resolvedFactories.slice(), r.multiProvider) : r, t.set(r.key.id, e)
                    }
                }
                return t
            }(Cd(e, []).map(Dd), new Map);
            return Array.from(t.values())
        }

        function Cd(e, t) {
            return e.forEach((e => {
                if (e instanceof To) t.push({
                    provide: e,
                    useClass: e
                });
                else if (e && "object" == typeof e && void 0 !== e.provide) t.push(e);
                else {
                    if (!Array.isArray(e)) throw Error(`Invalid provider - only instances of Provider and Type are allowed, got: ${e}`);
                    Cd(e, t)
                }
            })), t
        }

        function Ed(e) {
            const t = vd.parameters(e);
            if (!t) return [];
            if (t.some((e => null == e))) throw hd(e, t);
            return t.map((n => Id(e, n, t)))
        }

        function Id(e, t, n) {
            let r = null,
                o = !1;
            if (!Array.isArray(t)) return Td(t instanceof ii ? t.token : t, o, null);
            let i = null;
            for (let e = 0; e < t.length; ++e) {
                const n = t[e];
                n instanceof To ? r = n : n instanceof ii ? r = n.token : n instanceof si ? o = !0 : n instanceof ai || n instanceof li ? i = n : n instanceof Do && (r = n)
            }
            if (r = xe(r), null != r) return Td(r, o, i);
            throw hd(e, n)
        }

        function Td(e, t, n) {
            return new yd(gd.get(e), t, n)
        }
        const kd = {};
        class Sd {
            static resolve(e) {
                return xd(e)
            }
            static resolveAndCreate(e, t) {
                const n = Sd.resolve(e);
                return Sd.fromResolvedProviders(n, t)
            }
            static fromResolvedProviders(e, t) {
                return new Ad(e, t)
            }
        }
        class Ad {
            constructor(e, t) {
                this._constructionCounter = 0, this._providers = e, this.parent = t || null;
                const n = e.length;
                this.keyIds = [], this.objs = [];
                for (let t = 0; t < n; t++) this.keyIds[t] = e[t].key.id, this.objs[t] = kd
            }
            get(e, t = qo) {
                return this._getByKey(gd.get(e), null, t)
            }
            resolveAndCreateChild(e) {
                const t = Sd.resolve(e);
                return this.createChildFromResolved(t)
            }
            createChildFromResolved(e) {
                const t = new Ad(e);
                return t.parent = this, t
            }
            resolveAndInstantiate(e) {
                return this.instantiateResolved(Sd.resolve([e])[0])
            }
            instantiateResolved(e) {
                return this._instantiateProvider(e)
            }
            getProviderAtIndex(e) {
                if (e < 0 || e >= this._providers.length) throw function (e) {
                    return Error(`Index ${e} is out-of-bounds.`)
                }(e);
                return this._providers[e]
            }
            _new(e) {
                if (this._constructionCounter++ > this._getMaxNumberOfObjects()) throw t = this, n = e.key, dd(t, n, (function (e) {
                    return `Cannot instantiate cyclic dependency!${ud(e)}`
                }));
                var t, n;
                return this._instantiateProvider(e)
            }
            _getMaxNumberOfObjects() {
                return this.objs.length
            }
            _instantiateProvider(e) {
                if (e.multiProvider) {
                    const t = [];
                    for (let n = 0; n < e.resolvedFactories.length; ++n) t[n] = this._instantiate(e, e.resolvedFactories[n]);
                    return t
                }
                return this._instantiate(e, e.resolvedFactories[0])
            }
            _instantiate(e, t) {
                const n = t.factory;
                let r, o;
                try {
                    r = t.dependencies.map((e => this._getByReflectiveDependency(e)))
                } catch (t) {
                    throw t.addKey && t.addKey(this, e.key), t
                }
                try {
                    o = n(...r)
                } catch (t) {
                    throw i = this, s = t, t.stack, a = e.key, dd(i, a, (function (e) {
                        const t = be(e[0].token);
                        return `${s.message}: Error during instantiation of ${t}!${ud(e)}.`
                    }), s)
                }
                var i, s, a;
                return o
            }
            _getByReflectiveDependency(e) {
                return this._getByKey(e.key, e.visibility, e.optional ? null : qo)
            }
            _getByKey(e, t, n) {
                return e === Ad.INJECTOR_KEY ? this : t instanceof ai ? this._getByKeySelf(e, n) : this._getByKeyDefault(e, n, t)
            }
            _getObjByKeyId(e) {
                for (let t = 0; t < this.keyIds.length; t++)
                    if (this.keyIds[t] === e) return this.objs[t] === kd && (this.objs[t] = this._new(this._providers[t])), this.objs[t];
                return kd
            }
            _throwOrNull(e, t) {
                if (t !== qo) return t;
                throw function (e, t) {
                    return dd(e, t, (function (e) {
                        return `No provider for ${be(e[0].token)}!${ud(e)}`
                    }))
                }(this, e)
            }
            _getByKeySelf(e, t) {
                const n = this._getObjByKeyId(e.id);
                return n !== kd ? n : this._throwOrNull(e, t)
            }
            _getByKeyDefault(e, t, n) {
                let r;
                for (r = n instanceof li ? this.parent : this; r instanceof Ad;) {
                    const t = r,
                        n = t._getObjByKeyId(e.id);
                    if (n !== kd) return n;
                    r = t.parent
                }
                return null !== r ? r.get(e.token, t) : this._throwOrNull(e, t)
            }
            get displayName() {
                const e = function (e, t) {
                    const n = [];
                    for (let r = 0; r < e._providers.length; ++r) n[r] = t(e.getProviderAtIndex(r));
                    return n
                }(this, (e => ' "' + e.key.displayName + '" ')).join(", ");
                return `ReflectiveInjector(providers: [${e}])`
            }
            toString() {
                return this.displayName
            }
        }

        function Od(e, t = it.Default) {
            const n = Wn();
            if (null === n) return ngDevMode && (r = Od, ngDevMode && Ve(st, r, "Calling ÉµÉµinject would cause infinite recursion")), Xo(e, t);
            var r;
            return no(Zn(), n, xe(e), t)
        }

        function Nd() {
            const e = ngDevMode ? "This constructor was not compatible with Dependency Injection." : "invalid";
            throw new Error(e)
        }

        function Pd(e, t, n) {
            const r = Wn(),
                o = ir();
            if (Nu(r, o, t)) {
                const i = qn(),
                    s = xr();
                Xl(i, s, r, e, t, r[11], n, !1), ngDevMode && Ec(i.data, s, e, o)
            }
            return Pd
        }

        function Rd(e, t, n, r, o) {
            const i = o ? "class" : "style";
            Oc(e, n, t.inputs[i], i, r)
        }

        function jd(e, t, n, r, o, i, s) {
            ngDevMode && an(t), ngDevMode && ngDevMode.firstCreatePass++;
            const a = t.consts,
                l = Fl(t, e, 2, o, Vn(a, i)),
                c = rc(t, n, l, Vn(a, s));
            return ngDevMode && function (e, t, n, r) {
                if (null === n) return;
                if (!r && null !== t) {
                    if (("undefined" != typeof HTMLUnknownElement && HTMLUnknownElement && e instanceof HTMLUnknownElement || "undefined" != typeof customElements && t.indexOf("-") > -1 && !customElements.get(t)) && !tc(n, t)) {
                        let e = `'${t}' is not a known element:\n`;
                        e += `1. If '${t}' is an Angular component, then verify that it is part of this module.\n`, t && t.indexOf("-") > -1 ? e += `2. If '${t}' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.` : e += "2. To allow any element add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.", console.error(Ie(304, e))
                    }
                }
            }(r, l.value, t.schemas, c), null !== l.attrs && Pc(l, l.attrs, !1), null !== l.mergedAttrs && Pc(l, l.mergedAttrs, !0), null !== t.queries && t.queries.elementStart(t, l), l
        }

        function Fd(e, t, n, r) {
            const o = Wn(),
                i = qn(),
                s = Bt + e;
            ngDevMode && Fe(rr(), i.bindingStartIndex, "elements should be created before any bindings"), ngDevMode && Ze(o, s);
            const a = o[11],
                l = o[s] = na(a, t, $n.lFrame.currentNamespace),
                c = i.firstCreatePass ? jd(s, i, o, l, t, n, r) : i.data[s];
            Kn(c, !0);
            const u = c.mergedAttrs;
            null !== u && Vr(a, l, u);
            const d = c.classes;
            null !== d && Ta(a, l, d);
            const f = c.styles;
            return null !== f && Ia(a, l, f), 64 != (64 & c.flags) && wa(i, o, l, c), 0 === $n.lFrame.elementDepthCount && ys(l, o), $n.lFrame.elementDepthCount++, Gt(c) && (Wl(i, o, c), zl(i, c, o)), null !== r && ql(o, c), Fd
        }

        function Vd() {
            let e = Zn();
            ngDevMode && We(e, "No parent node to close."), Yn() ? Xn() : (ngDevMode && nn(Zn()), e = e.parent, Kn(e, !1));
            const t = e;
            ngDevMode && Fr(t, 3), $n.lFrame.elementDepthCount--;
            const n = qn();
            return n.firstCreatePass && (Tr(n, e), Qt(e) && n.queries.elementEnd(e)), null != t.classesWithoutHost && function (e) {
                return 0 != (16 & e.flags)
            }(t) && Rd(n, t, Wn(), t.classesWithoutHost, !0), null != t.stylesWithoutHost && function (e) {
                return 0 != (32 & e.flags)
            }(t) && Rd(n, t, Wn(), t.stylesWithoutHost, !1), Vd
        }

        function Ld(e, t, n, r) {
            return Fd(e, t, n, r), Vd(), Ld
        }

        function Hd(e, t, n) {
            const r = Wn(),
                o = qn(),
                i = e + Bt;
            ngDevMode && Ze(r, i), ngDevMode && Fe(rr(), o.bindingStartIndex, "element containers should be created before any bindings");
            const s = o.firstCreatePass ? function (e, t, n, r, o) {
                ngDevMode && ngDevMode.firstCreatePass++;
                const i = t.consts,
                    s = Vn(i, r),
                    a = Fl(t, e, 8, "ng-container", s);
                return null !== s && Pc(a, s, !0), rc(t, n, a, Vn(i, o)), null !== t.queries && t.queries.elementStart(t, a), a
            }(i, o, r, t, n) : o.data[i];
            Kn(s, !0), ngDevMode && ngDevMode.rendererCreateComment++;
            const a = r[i] = r[11].createComment(ngDevMode ? "ng-container" : "");
            return wa(o, r, a, s), ys(a, r), Gt(s) && (Wl(o, r, s), zl(o, s, r)), null != n && ql(r, s), Hd
        }

        function $d() {
            let e = Zn();
            const t = qn();
            return Yn() ? Xn() : (ngDevMode && nn(e), e = e.parent, Kn(e, !1)), ngDevMode && Fr(e, 8), t.firstCreatePass && (Tr(t, e), Qt(e) && t.queries.elementEnd(e)), $d
        }

        function Bd(e, t, n) {
            return Hd(e, t, n), $d(), Bd
        }

        function Ud() {
            return Wn()
        }

        function zd(e) {
            return !!e && "function" == typeof e.then
        }
        Ad.INJECTOR_KEY = gd.get(Kc);
        const Wd = function (e) {
            return !!e && "function" == typeof e.subscribe
        };

        function qd(e, t, n, r) {
            const o = Wn(),
                i = qn(),
                s = Zn();
            return Zd(i, o, o[11], s, e, t, !!n, r), qd
        }

        function Qd(e, t) {
            const n = Zn(),
                r = Wn(),
                o = qn();
            return Zd(o, r, Sc(ur(o.data), n, r), n, e, t, !1), Qd
        }

        function Zd(e, t, n, r, o, i, s, a) {
            const l = Gt(r),
                c = e.firstCreatePass && kc(e),
                u = t[8],
                d = Tc(t);
            ngDevMode && Fr(r, 15);
            let f = !0;
            if (3 & r.type || a) {
                const h = On(r, t),
                    p = a ? a(h) : h,
                    g = d.length,
                    m = a ? e => a(Sn(e[r.index])) : r.index;
                if (Tn(n)) {
                    let s = null;
                    if (!a && l && (s = function (e, t, n, r) {
                            const o = e.cleanup;
                            if (null != o)
                                for (let e = 0; e < o.length - 1; e += 2) {
                                    const i = o[e];
                                    if (i === n && o[e + 1] === r) {
                                        const n = t[7],
                                            r = o[e + 2];
                                        return n.length > r ? n[r] : null
                                    }
                                    "string" == typeof i && (e += 2)
                                }
                            return null
                        }(e, t, o, r.index)), null !== s) {
                        (s.__ngLastListenerFn__ || s).__ngNextListenerFn__ = i, s.__ngLastListenerFn__ = i, f = !1
                    } else {
                        i = Jd(r, t, u, i, !1);
                        const e = n.listen(p, o, i);
                        ngDevMode && ngDevMode.rendererAddEventListener++, d.push(i, e), c && c.push(o, m, g, g + 1)
                    }
                } else i = Jd(r, t, u, i, !0), p.addEventListener(o, i, s), ngDevMode && ngDevMode.rendererAddEventListener++, d.push(i), c && c.push(o, m, g, s)
            } else i = Jd(r, t, u, i, !1);
            const h = r.outputs;
            let p;
            if (f && null !== h && (p = h[o])) {
                const e = p.length;
                if (e)
                    for (let n = 0; n < e; n += 2) {
                        const e = p[n];
                        ngDevMode && Ze(t, e);
                        const s = p[n + 1],
                            a = t[e],
                            l = a[s];
                        if (ngDevMode && !Wd(l)) throw new Error(`@Output ${s} not initialized in '${a.constructor.name}'.`);
                        const u = l.subscribe(i),
                            f = d.length;
                        d.push(i, u), c && c.push(o, r.index, f, -(f + 1))
                    }
            }
        }

        function Gd(e, t, n, r) {
            try {
                return Mn(6, t, n), !1 !== n(r)
            } catch (t) {
                return Ac(e, t), !1
            } finally {
                Mn(7, t, n)
            }
        }

        function Jd(e, t, n, r, o) {
            return function i(s) {
                if (s === Function) return r;
                const a = 2 & e.flags ? Rn(e.index, t) : t;
                0 == (32 & t[2]) && _c(a);
                let l = Gd(t, n, r, s),
                    c = i.__ngNextListenerFn__;
                for (; c;) l = Gd(t, n, c, s) && l, c = c.__ngNextListenerFn__;
                return o && !1 === l && (s.preventDefault(), s.returnValue = !1), l
            }
        }

        function Kd(e = 1) {
            return _r(e)
        }

        function Yd(e, t) {
            let n = null;
            const r = function (e) {
                const t = e.attrs;
                if (null != t) {
                    const e = t.indexOf(5);
                    if (0 == (1 & e)) return t[e + 1]
                }
                return null
            }(e);
            for (let o = 0; o < t.length; o++) {
                const i = t[o];
                if ("*" !== i) {
                    if (null === r ? Fa(e, i, !0) : Va(r, i)) return o
                } else n = o
            }
            return n
        }

        function Xd(e) {
            const t = Wn()[16][6];
            if (!t.projection) {
                const n = e ? e.length : 1,
                    r = t.projection = Po(n, null),
                    o = r.slice();
                let i = t.child;
                for (; null !== i;) {
                    const t = e ? Yd(i, e) : 0;
                    null !== t && (o[t] ? o[t].projectionNext = i : r[t] = i, o[t] = i), i = i.next
                }
            }
        }

        function ef(e, t = 0, n) {
            const r = Wn(),
                o = qn(),
                i = Fl(o, Bt + e, 16, null, n || null);
            null === i.projection && (i.projection = t), Xn(), 64 != (64 & i.flags) && function (e, t, n) {
                Ea(t[11], 0, t, n, la(e, n, t), pa(n.parent || t[6], n, t))
            }(o, r, i)
        }

        function tf(e, t, n) {
            return nf(e, "", t, "", n), tf
        }

        function nf(e, t, n, r, o) {
            const i = Wn(),
                s = Lu(i, t, n, r);
            if (s !== $a) {
                const n = qn(),
                    a = xr();
                Xl(n, a, i, e, s, i[11], o, !1), ngDevMode && Ec(n.data, a, e, rr() - 1, t, r)
            }
            return nf
        }

        function rf(e, t, n, r, o, i, s) {
            const a = Wn(),
                l = Hu(a, t, n, r, o, i);
            if (l !== $a) {
                const n = qn(),
                    o = xr();
                Xl(n, o, a, e, l, a[11], s, !1), ngDevMode && Ec(n.data, o, e, rr() - 2, t, r, i)
            }
            return rf
        }

        function of (e, t, n, r, o, i, s, a, l) {
            const c = Wn(),
                u = $u(c, t, n, r, o, i, s, a);
            if (u !== $a) {
                const n = qn(),
                    o = xr();
                Xl(n, o, c, e, u, c[11], l, !1), ngDevMode && Ec(n.data, o, e, rr() - 3, t, r, i, a)
            }
            return of
        }

        function sf(e, t, n, r, o, i, s, a, l, c, u) {
            const d = Wn(),
                f = Bu(d, t, n, r, o, i, s, a, l, c);
            if (f !== $a) {
                const n = qn(),
                    o = xr();
                Xl(n, o, d, e, f, d[11], u, !1), ngDevMode && Ec(n.data, o, e, rr() - 4, t, r, i, a, c)
            }
            return sf
        }

        function af(e, t, n, r, o, i, s, a, l, c, u, d, f) {
            const h = Wn(),
                p = Uu(h, t, n, r, o, i, s, a, l, c, u, d);
            if (p !== $a) {
                const n = qn(),
                    o = xr();
                Xl(n, o, h, e, p, h[11], f, !1), ngDevMode && Ec(n.data, o, e, rr() - 5, t, r, i, a, c, d)
            }
            return af
        }

        function lf(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p) {
            const g = Wn(),
                m = zu(g, t, n, r, o, i, s, a, l, c, u, d, f, h);
            if (m !== $a) {
                const n = qn(),
                    o = xr();
                Xl(n, o, g, e, m, g[11], p, !1), ngDevMode && Ec(n.data, o, e, rr() - 6, t, r, i, a, c, d, h)
            }
            return lf
        }

        function cf(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m) {
            const v = Wn(),
                y = Wu(v, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g);
            if (y !== $a) {
                const n = qn(),
                    o = xr();
                Xl(n, o, v, e, y, v[11], m, !1), ngDevMode && Ec(n.data, o, e, rr() - 7, t, r, i, a, c, d, h, g)
            }
            return cf
        }

        function uf(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m, v, y) {
            const w = Wn(),
                b = qu(w, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m, v);
            if (b !== $a) {
                const n = qn(),
                    o = xr();
                Xl(n, o, w, e, b, w[11], y, !1), ngDevMode && Ec(n.data, o, e, rr() - 8, t, r, i, a, c, d, h, g, v)
            }
            return uf
        }

        function df(e, t, n) {
            const r = Wn(),
                o = Vu(r, t);
            if (o !== $a) {
                const i = qn(),
                    s = xr();
                if (Xl(i, s, r, e, o, r[11], n, !1), ngDevMode) {
                    const n = [t[0]];
                    for (let e = 2; e < t.length; e += 2) n.push(t[e]);
                    Ec(i.data, s, e, rr() - n.length + 1, ...n)
                }
            }
            return df
        }

        function ff(e, t, n, r, o, i) {
            ngDevMode && ln(qn());
            let s = i ? t.classBindings : t.styleBindings,
                a = qa(s),
                l = Ga(s);
            e[r] = n;
            let c, u = !1;
            if (Array.isArray(n)) {
                const e = n;
                c = e[1], (null === c || Fo(e, c) > 0) && (u = !0)
            } else c = n;
            if (o) {
                if (0 !== l) {
                    const t = qa(e[a + 1]);
                    e[r + 1] = Wa(t, a), 0 !== t && (e[t + 1] = Ja(e[t + 1], r)), e[a + 1] = (d = e[a + 1], f = r, ngDevMode && Ne(d, "expected number"), ngDevMode && Pe(f, 0, 32767), 131071 & d | f << 17)
                } else e[r + 1] = Wa(a, 0), 0 !== a && (e[a + 1] = Ja(e[a + 1], r)), a = r
            } else e[r + 1] = Wa(l, 0), ngDevMode && Fe(0 !== a && 0 === l, !1, "Adding template bindings after hostBindings is not allowed."), 0 === a ? a = r : e[l + 1] = Ja(e[l + 1], r), l = r;
            var d, f;
            u && (e[r + 1] = Za(e[r + 1])), hf(e, c, r, !0, i), hf(e, c, r, !1, i),
                function (e, t, n, r, o) {
                    const i = o ? e.residualClasses : e.residualStyles;
                    null != i && "string" == typeof t && Fo(i, t) >= 0 && (n[r + 1] = Ya(n[r + 1]))
                }(t, c, e, r, i), s = Wa(a, l), i ? t.classBindings = s : t.styleBindings = s
        }

        function hf(e, t, n, r, o) {
            const i = e[n + 1],
                s = null === t;
            let a = r ? qa(i) : Ga(i),
                l = !1;
            for (; 0 !== a && (!1 === l || s);) {
                ngDevMode && Ze(e, a);
                const n = e[a],
                    o = e[a + 1];
                pf(n, t) && (l = !0, e[a + 1] = r ? Ya(o) : Za(o)), a = r ? qa(o) : Ga(o)
            }
            l && (e[n + 1] = r ? Za(i) : Ya(i))
        }

        function pf(e, t) {
            return ngDevMode && Ve(Array.isArray(t), !0, "Expected that 'tStylingKey' has been unwrapped"), null === e || null == t || (Array.isArray(e) ? e[1] : e) === t || !(!Array.isArray(e) || "string" != typeof t) && Fo(e, t) >= 0
        }
        const gf = {
            textEnd: 0,
            key: 0,
            keyEnd: 0,
            value: 0,
            valueEnd: 0
        };

        function mf(e) {
            return e.substring(gf.key, gf.keyEnd)
        }

        function vf(e) {
            return e.substring(gf.value, gf.valueEnd)
        }

        function yf(e, t) {
            const n = gf.textEnd;
            return n === t ? -1 : (t = gf.keyEnd = function (e, t, n) {
                for (; t < n && e.charCodeAt(t) > 32;) t++;
                return t
            }(e, gf.key = t, n), _f(e, t, n))
        }

        function wf(e, t) {
            const n = gf.textEnd;
            let r = gf.key = _f(e, t, n);
            return n === r ? -1 : (r = gf.keyEnd = function (e, t, n) {
                let r;
                for (; t < n && (45 === (r = e.charCodeAt(t)) || 95 === r || (-33 & r) >= 65 && (-33 & r) <= 90 || r >= 48 && r <= 57);) t++;
                return t
            }(e, r, n), r = Mf(e, r, n, 58), r = gf.value = _f(e, r, n), r = gf.valueEnd = function (e, t, n) {
                let r = -1,
                    o = -1,
                    i = -1,
                    s = t,
                    a = s;
                for (; s < n;) {
                    const l = e.charCodeAt(s++);
                    if (59 === l) return a;
                    34 === l || 39 === l ? a = s = Df(e, l, s, n) : t === s - 4 && 85 === i && 82 === o && 76 === r && 40 === l ? a = s = Df(e, 41, s, n) : l > 32 && (a = s), i = o, o = r, r = -33 & l
                }
                return a
            }(e, r, n), Mf(e, r, n, 59))
        }

        function bf(e) {
            gf.key = 0, gf.keyEnd = 0, gf.value = 0, gf.valueEnd = 0, gf.textEnd = e.length
        }

        function _f(e, t, n) {
            for (; t < n && e.charCodeAt(t) <= 32;) t++;
            return t
        }

        function Mf(e, t, n, r) {
            return (t = _f(e, t, n)) < n && (ngDevMode && e.charCodeAt(t) !== r && xf(e, String.fromCharCode(r), t), t++), t
        }

        function Df(e, t, n, r) {
            let o = -1,
                i = n;
            for (; i < r;) {
                const n = e.charCodeAt(i++);
                if (n == t && 92 !== o) return i;
                o = 92 == n && 92 === o ? 0 : n
            }
            throw ngDevMode ? xf(e, String.fromCharCode(t), r) : new Error
        }

        function xf(e, t, n) {
            throw ngDevMode && Fe("string" == typeof e, !0, "String expected here"), qe(`Malformed style at location ${n} in string '` + e.substring(0, n) + "[>>" + e.substring(n, n + 1) + "<<]" + e.substr(n + 1) + `'. Expecting '${t}'.`)
        }

        function Cf(e, t, n) {
            return Af(e, t, n, !1), Cf
        }

        function Ef(e, t) {
            return Af(e, t, null, !0), Ef
        }

        function If(e) {
            Of(Ff, Tf, e, !1)
        }

        function Tf(e, t) {
            for (let n = function (e) {
                    return bf(e), wf(e, _f(e, 0, gf.textEnd))
                }(t); n >= 0; n = wf(t, n)) Ff(e, mf(t), vf(t))
        }

        function kf(e) {
            Of(Ro, Sf, e, !0)
        }

        function Sf(e, t) {
            for (let n = function (e) {
                    return bf(e), yf(e, _f(e, 0, gf.textEnd))
                }(t); n >= 0; n = yf(t, n)) Ro(e, mf(t), !0)
        }

        function Af(e, t, n, r) {
            const o = Wn(),
                i = qn(),
                s = sr(2);
            if (i.firstUpdatePass && Pf(i, e, s, r), t !== $a && Nu(o, s, t)) {
                Vf(i, i.data[Mr()], o, o[11], e, o[s + 1] = function (e, t) {
                    null == e || ("string" == typeof t ? e += t : "object" == typeof e && (e = be(ki(e))));
                    return e
                }(t, n), r, s)
            }
        }

        function Of(e, t, n, r) {
            const o = qn(),
                i = sr(2);
            o.firstUpdatePass && Pf(o, null, i, r);
            const s = Wn();
            if (n !== $a && Nu(s, i, n)) {
                const a = o.data[Mr()];
                if ($f(a, r) && !Nf(o, i)) {
                    if (ngDevMode) {
                        const e = o.data[i];
                        Fe(Array.isArray(e) ? e[1] : e, !1, "Styling linked list shadow input should be marked as 'false'")
                    }
                    let e = r ? a.classesWithoutHost : a.stylesWithoutHost;
                    ngDevMode && !1 === r && null !== e && Fe(e.endsWith(";"), !0, "Expecting static portion to end with ';'"), null !== e && (n = _e(e, n || "")), Rd(o, a, s, n, r)
                } else ! function (e, t, n, r, o, i, s, a) {
                    o === $a && (o = bt);
                    let l = 0,
                        c = 0,
                        u = 0 < o.length ? o[0] : null,
                        d = 0 < i.length ? i[0] : null;
                    for (; null !== u || null !== d;) {
                        ngDevMode && $e(l, 999, "Are we stuck in infinite loop?"), ngDevMode && $e(c, 999, "Are we stuck in infinite loop?");
                        const f = l < o.length ? o[l + 1] : void 0,
                            h = c < i.length ? i[c + 1] : void 0;
                        let p, g = null;
                        u === d ? (l += 2, c += 2, f !== h && (g = d, p = h)) : null === d || null !== u && u < d ? (l += 2, g = u) : (ngDevMode && We(d, "Expecting to have a valid key"), c += 2, g = d, p = h), null !== g && Vf(e, t, n, r, g, p, s, a), u = l < o.length ? o[l] : null, d = c < i.length ? i[c] : null
                    }
                }(o, a, s, s[11], s[i + 1], s[i + 1] = function (e, t, n) {
                    if (null == n || "" === n) return bt;
                    const r = [],
                        o = ki(n);
                    if (Array.isArray(o))
                        for (let t = 0; t < o.length; t++) e(r, o[t], !0);
                    else if ("object" == typeof o)
                        for (const t in o) o.hasOwnProperty(t) && e(r, t, o[t]);
                    else "string" == typeof o ? t(r, o) : ngDevMode && qe("Unsupported styling type " + typeof o + ": " + o);
                    return r
                }(e, t, n), r, i)
            }
        }

        function Nf(e, t) {
            return t >= e.expandoStartIndex
        }

        function Pf(e, t, n, r) {
            ngDevMode && ln(e);
            const o = e.data;
            if (null === o[n + 1]) {
                const i = o[Mr()];
                ngDevMode && We(i, "TNode expected");
                const s = Nf(e, n);
                $f(i, r) && null === t && !s && (t = !1), t = function (e, t, n, r) {
                    const o = ur(e);
                    let i = r ? t.residualClasses : t.residualStyles;
                    if (null === o) {
                        0 === (r ? t.classBindings : t.styleBindings) && (n = jf(n = Rf(null, e, t, n, r), t.attrs, r), i = null)
                    } else {
                        const s = t.directiveStylingLast;
                        if (-1 === s || e[s] !== o)
                            if (n = Rf(o, e, t, n, r), null === i) {
                                let n = function (e, t, n) {
                                    const r = n ? t.classBindings : t.styleBindings;
                                    if (0 === Ga(r)) return;
                                    return e[qa(r)]
                                }(e, t, r);
                                void 0 !== n && Array.isArray(n) && (n = Rf(null, e, t, n[1], r), n = jf(n, t.attrs, r), function (e, t, n, r) {
                                    const o = n ? t.classBindings : t.styleBindings;
                                    ngDevMode && Ve(Ga(o), 0, "Expecting to have at least one template styling binding."), e[qa(o)] = r
                                }(e, t, r, n))
                            } else i = function (e, t, n) {
                                let r;
                                const o = t.directiveEnd;
                                ngDevMode && Ve(t.directiveStylingLast, -1, "By the time this function gets called at least one hostBindings-node styling instruction must have executed.");
                                for (let i = 1 + t.directiveStylingLast; i < o; i++) {
                                    r = jf(r, e[i].hostAttrs, n)
                                }
                                return jf(r, t.attrs, n)
                            }(e, t, r)
                    }
                    void 0 !== i && (r ? t.residualClasses = i : t.residualStyles = i);
                    return n
                }(o, i, t, r), ff(o, i, t, n, s, r)
            }
        }

        function Rf(e, t, n, r, o) {
            let i = null;
            const s = n.directiveEnd;
            let a = n.directiveStylingLast;
            for (-1 === a ? a = n.directiveStart : a++; a < s && (i = t[a], ngDevMode && We(i, "expected to be defined"), r = jf(r, i.hostAttrs, o), i !== e);) a++;
            return null !== e && (n.directiveStylingLast = a), r
        }

        function jf(e, t, n) {
            const r = n ? 1 : 2;
            let o = -1;
            if (null !== t)
                for (let i = 0; i < t.length; i++) {
                    const s = t[i];
                    "number" == typeof s ? o = s : o === r && (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]), Ro(e, s, !!n || t[++i]))
                }
            return void 0 === e ? null : e
        }

        function Ff(e, t, n) {
            Ro(e, t, ki(n))
        }

        function Vf(e, t, n, r, o, i, s, a) {
            if (!(3 & t.type)) return;
            const l = e.data,
                c = l[a + 1];
            if (!Hf(Ka(c) ? Lf(l, t, n, o, Ga(c), s) : void 0)) {
                Hf(i) || Qa(c) && (i = Lf(l, null, n, o, a, s));
                ! function (e, t, n, r, o) {
                    const i = Tn(e);
                    if (t) o ? (ngDevMode && ngDevMode.rendererAddClass++, i ? e.addClass(n, r) : (ngDevMode && We(n.classList, "HTMLElement expected"), n.classList.add(r))) : (ngDevMode && ngDevMode.rendererRemoveClass++, i ? e.removeClass(n, r) : n.classList.remove(r));
                    else {
                        let t = -1 === r.indexOf("-") ? void 0 : Us.DashCase;
                        if (null == o) ngDevMode && ngDevMode.rendererRemoveStyle++, i ? e.removeStyle(n, r, t) : n.style.removeProperty(r);
                        else {
                            const s = "string" == typeof o && o.endsWith("!important");
                            s && (o = o.slice(0, -10), t |= Us.Important), ngDevMode && ngDevMode.rendererSetStyle++, i ? e.setStyle(n, r, o, t) : (ngDevMode && We(n.style, "HTMLElement expected"), n.style.setProperty(r, o, s ? "important" : ""))
                        }
                    }
                }(r, s, An(Mr(), n), o, i)
            }
        }

        function Lf(e, t, n, r, o, i) {
            const s = null === t;
            let a;
            for (; o > 0;) {
                const t = e[o],
                    i = Array.isArray(t),
                    l = i ? t[1] : t,
                    c = null === l;
                let u = n[o + 1];
                u === $a && (u = c ? bt : void 0);
                let d = c ? jo(u, r) : l === r ? u : void 0;
                if (i && !Hf(d) && (d = jo(t, r)), Hf(d) && (a = d, s)) return a;
                const f = e[o + 1];
                o = s ? qa(f) : Ga(f)
            }
            if (null !== t) {
                let e = i ? t.residualClasses : t.residualStyles;
                null != e && (a = jo(e, r))
            }
            return a
        }

        function Hf(e) {
            return void 0 !== e
        }

        function $f(e, t) {
            return 0 != (e.flags & (t ? 16 : 32))
        }

        function Bf(e, t = "") {
            const n = Wn(),
                r = qn(),
                o = e + Bt;
            ngDevMode && Fe(rr(), r.bindingStartIndex, "text nodes should be created before any bindings"), ngDevMode && Ze(n, o);
            const i = r.firstCreatePass ? Fl(r, o, 1, t, null) : r.data[o],
                s = n[o] = Xs(n[11], t);
            wa(r, n, s, i), Kn(i, !1)
        }

        function Uf(e) {
            return zf("", e, ""), Uf
        }

        function zf(e, t, n) {
            const r = Wn(),
                o = Lu(r, e, t, n);
            return o !== $a && Nc(r, Mr(), o), zf
        }

        function Wf(e, t, n, r, o) {
            const i = Wn(),
                s = Hu(i, e, t, n, r, o);
            return s !== $a && Nc(i, Mr(), s), Wf
        }

        function qf(e, t, n, r, o, i, s) {
            const a = Wn(),
                l = $u(a, e, t, n, r, o, i, s);
            return l !== $a && Nc(a, Mr(), l), qf
        }

        function Qf(e, t, n, r, o, i, s, a, l) {
            const c = Wn(),
                u = Bu(c, e, t, n, r, o, i, s, a, l);
            return u !== $a && Nc(c, Mr(), u), Qf
        }

        function Zf(e, t, n, r, o, i, s, a, l, c, u) {
            const d = Wn(),
                f = Uu(d, e, t, n, r, o, i, s, a, l, c, u);
            return f !== $a && Nc(d, Mr(), f), Zf
        }

        function Gf(e, t, n, r, o, i, s, a, l, c, u, d, f) {
            const h = Wn(),
                p = zu(h, e, t, n, r, o, i, s, a, l, c, u, d, f);
            return p !== $a && Nc(h, Mr(), p), Gf
        }

        function Jf(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p) {
            const g = Wn(),
                m = Wu(g, e, t, n, r, o, i, s, a, l, c, u, d, f, h, p);
            return m !== $a && Nc(g, Mr(), m), Jf
        }

        function Kf(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m) {
            const v = Wn(),
                y = qu(v, e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m);
            return y !== $a && Nc(v, Mr(), y), Kf
        }

        function Yf(e) {
            const t = Wn(),
                n = Vu(t, e);
            return n !== $a && Nc(t, Mr(), n), Yf
        }

        function Xf(e, t, n) {
            Of(Ro, Sf, Lu(Wn(), e, t, n), !0)
        }

        function eh(e, t, n, r, o) {
            Of(Ro, Sf, Hu(Wn(), e, t, n, r, o), !0)
        }

        function th(e, t, n, r, o, i, s) {
            Of(Ro, Sf, $u(Wn(), e, t, n, r, o, i, s), !0)
        }

        function nh(e, t, n, r, o, i, s, a, l) {
            Of(Ro, Sf, Bu(Wn(), e, t, n, r, o, i, s, a, l), !0)
        }

        function rh(e, t, n, r, o, i, s, a, l, c, u) {
            Of(Ro, Sf, Uu(Wn(), e, t, n, r, o, i, s, a, l, c, u), !0)
        }

        function oh(e, t, n, r, o, i, s, a, l, c, u, d, f) {
            Of(Ro, Sf, zu(Wn(), e, t, n, r, o, i, s, a, l, c, u, d, f), !0)
        }

        function ih(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p) {
            Of(Ro, Sf, Wu(Wn(), e, t, n, r, o, i, s, a, l, c, u, d, f, h, p), !0)
        }

        function sh(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m) {
            Of(Ro, Sf, qu(Wn(), e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m), !0)
        }

        function ah(e) {
            Of(Ro, Sf, Vu(Wn(), e), !0)
        }

        function lh(e, t, n) {
            If(Lu(Wn(), e, t, n))
        }

        function ch(e, t, n, r, o) {
            If(Hu(Wn(), e, t, n, r, o))
        }

        function uh(e, t, n, r, o, i, s) {
            If($u(Wn(), e, t, n, r, o, i, s))
        }

        function dh(e, t, n, r, o, i, s, a, l) {
            If(Bu(Wn(), e, t, n, r, o, i, s, a, l))
        }

        function fh(e, t, n, r, o, i, s, a, l, c, u) {
            If(Uu(Wn(), e, t, n, r, o, i, s, a, l, c, u))
        }

        function hh(e, t, n, r, o, i, s, a, l, c, u, d, f) {
            If(zu(Wn(), e, t, n, r, o, i, s, a, l, c, u, d, f))
        }

        function ph(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p) {
            If(Wu(Wn(), e, t, n, r, o, i, s, a, l, c, u, d, f, h, p))
        }

        function gh(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m) {
            If(qu(Wn(), e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m))
        }

        function mh(e) {
            If(Vu(Wn(), e))
        }

        function vh(e, t, n, r, o) {
            return Af(e, Lu(Wn(), t, n, r), o, !1), vh
        }

        function yh(e, t, n, r, o, i, s) {
            return Af(e, Hu(Wn(), t, n, r, o, i), s, !1), yh
        }

        function wh(e, t, n, r, o, i, s, a, l) {
            return Af(e, $u(Wn(), t, n, r, o, i, s, a), l, !1), wh
        }

        function bh(e, t, n, r, o, i, s, a, l, c, u) {
            return Af(e, Bu(Wn(), t, n, r, o, i, s, a, l, c), u, !1), bh
        }

        function _h(e, t, n, r, o, i, s, a, l, c, u, d, f) {
            return Af(e, Uu(Wn(), t, n, r, o, i, s, a, l, c, u, d), f, !1), _h
        }

        function Mh(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p) {
            return Af(e, zu(Wn(), t, n, r, o, i, s, a, l, c, u, d, f, h), p, !1), Mh
        }

        function Dh(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m) {
            return Af(e, Wu(Wn(), t, n, r, o, i, s, a, l, c, u, d, f, h, p, g), m, !1), Dh
        }

        function xh(e, t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m, v, y) {
            return Af(e, qu(Wn(), t, n, r, o, i, s, a, l, c, u, d, f, h, p, g, m, v), y, !1), xh
        }

        function Ch(e, t, n) {
            return Af(e, Vu(Wn(), t), n, !1), Ch
        }

        function Eh(e, t, n) {
            const r = Wn(),
                o = ir();
            if (Nu(r, o, t)) {
                const i = qn(),
                    s = xr();
                Xl(i, s, r, e, t, r[11], n, !0), ngDevMode && Ec(i.data, s, e, o)
            }
            return Eh
        }

        function Ih(e, t, n) {
            const r = Wn(),
                o = ir();
            if (Nu(r, o, t)) {
                const i = qn(),
                    s = xr();
                Xl(i, s, r, e, t, Sc(ur(i.data), s, r), n, !0), ngDevMode && Ec(i.data, s, e, o)
            }
            return Ih
        }
        "undefined" == typeof ngI18nClosureMode && (vt.ngI18nClosureMode = "undefined" != typeof goog && "function" == typeof goog.getMsg);
        const Th = void 0;
        var kh = ["en", [
                ["a", "p"],
                ["AM", "PM"], Th
            ],
            [
                ["AM", "PM"], Th, Th
            ],
            [
                ["S", "M", "T", "W", "T", "F", "S"],
                ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
            ], Th, [
                ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            ], Th, [
                ["B", "A"],
                ["BC", "AD"],
                ["Before Christ", "Anno Domini"]
            ], 0, [6, 0],
            ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
            ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
            ["{1}, {0}", Th, "{1} 'at' {0}", Th],
            [".", ",", ";", "%", "+", "-", "E", "Ã—", "â€°", "âˆž", "NaN", ":"],
            ["#,##0.###", "#,##0%", "Â¤#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr",
            function (e) {
                const t = Math.floor(Math.abs(e)),
                    n = e.toString().replace(/^[^.]*\.?/, "").length;
                return 1 === t && 0 === n ? 1 : 5
            }
        ];
        let Sh = {};

        function Ah(e) {
            const t = function (e) {
                return e.toLowerCase().replace(/_/g, "-")
            }(e);
            let n = Oh(t);
            if (n) return n;
            const r = t.split("-")[0];
            if (n = Oh(r), n) return n;
            if ("en" === r) return kh;
            throw new Error(`Missing locale data for the locale "${e}".`)
        }

        function Oh(e) {
            return e in Sh || (Sh[e] = vt.ng && vt.ng.common && vt.ng.common.locales && vt.ng.common.locales[e]), Sh[e]
        }
        var Nh;
        ! function (e) {
            e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData"
        }(Nh || (Nh = {}));
        const Ph = ["zero", "one", "two", "few", "many"];

        function Rh(e, t) {
            const n = function (e) {
                    return Ah(e)[Nh.PluralCase]
                }(t)(parseInt(e, 10)),
                r = Ph[n];
            return void 0 !== r ? r : "other"
        }
        const jh = "en-US",
            Fh = {
                marker: "element"
            },
            Vh = {
                marker: "ICU"
            };
        var Lh;
        ! function (e) {
            e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT"
        }(Lh || (Lh = {}));
        let Hh = jh;

        function $h(e, t, n) {
            const r = t.insertBeforeIndex,
                o = Array.isArray(r) ? r[0] : r;
            return null === o ? ga(e, 0, n) : (ngDevMode && Ze(n, o), Sn(n[o]))
        }

        function Bh(e, t, n, r, o) {
            const i = t.insertBeforeIndex;
            if (Array.isArray(i)) {
                ngDevMode && Qe(r);
                let s = r,
                    a = null;
                if (3 & t.type || (a = s, s = o), null !== s && 0 == (2 & t.flags))
                    for (let t = 1; t < i.length; t++) {
                        ua(e, s, n[i[t]], a, !1)
                    }
            }
        }

        function Uh(e, t) {
            if (ngDevMode && Fe(t.insertBeforeIndex, null, "We expect that insertBeforeIndex is not set"), e.push(t), e.length > 1)
                for (let n = e.length - 2; n >= 0; n--) {
                    const r = e[n];
                    zh(r) || Wh(r, t) && null === qh(r) && Qh(r, t.index)
                }
        }

        function zh(e) {
            return !(64 & e.type)
        }

        function Wh(e, t) {
            return zh(t) || e.index > t.index
        }

        function qh(e) {
            const t = e.insertBeforeIndex;
            return Array.isArray(t) ? t[0] : t
        }

        function Qh(e, t) {
            const n = e.insertBeforeIndex;
            Array.isArray(n) ? n[0] = t : (ya($h, Bh), e.insertBeforeIndex = t)
        }

        function Zh(e, t) {
            const n = e.data[t];
            if (null === n || "string" == typeof n) return null;
            !ngDevMode || n.hasOwnProperty("tViews") || n.hasOwnProperty("currentCaseLViewIndex") || qe("We expect to get 'null'|'TIcu'|'TIcuContainer', but got: " + n);
            const r = n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value;
            return ngDevMode && en(r), r
        }

        function Gh(e, t, n) {
            const r = Vl(e, n, 64, null, null);
            return Uh(t, r), r
        }

        function Jh(e, t) {
            const n = t[e.currentCaseLViewIndex];
            return null === n ? n : n < 0 ? ~n : n
        }

        function Kh(e) {
            return e >>> 17
        }

        function Yh(e) {
            return (131070 & e) >>> 1
        }

        function Xh(e) {
            return 1 & e
        }
        let ep = 0,
            tp = 0;

        function np(e, t, n, r) {
            ngDevMode && Qe(r);
            const o = n[11];
            let i, s = null;
            for (let a = 0; a < t.length; a++) {
                const l = t[a];
                if ("string" == typeof l) {
                    const e = t[++a];
                    null === n[e] && (ngDevMode && ngDevMode.rendererCreateTextNode++, ngDevMode && Ze(n, e), n[e] = Xs(o, l))
                } else if ("number" == typeof l) switch (1 & l) {
                    case 0:
                        const c = Kh(l);
                        let u, d;
                        if (null === s && (s = c, i = ha(o, r)), c === s ? (u = r, d = i) : (u = null, d = Sn(n[c])), null !== d) {
                            ngDevMode && Qe(d);
                            const t = Yh(l);
                            ngDevMode && Ue(t, Bt, "Missing ref");
                            const r = n[t];
                            ngDevMode && Qe(r), ua(o, d, r, u, !1);
                            const i = Zh(e, t);
                            if (null !== i && "object" == typeof i) {
                                ngDevMode && en(i);
                                const t = Jh(i, n);
                                null !== t && np(e, i.create[t], n, n[i.anchorIdx])
                            }
                        }
                        break;
                    case 1:
                        const f = l >>> 1,
                            h = t[++a],
                            p = t[++a];
                        fc(o, An(f, n), null, null, h, p, null);
                        break;
                    default:
                        if (ngDevMode) throw new Ee(700, `Unable to determine the type of mutate operation for "${l}"`)
                } else switch (l) {
                    case Vh:
                        const e = t[++a],
                            r = t[++a];
                        if (null === n[r]) {
                            ngDevMode && Fe(typeof e, "string", `Expected "${e}" to be a comment node value`), ngDevMode && ngDevMode.rendererCreateComment++, ngDevMode && cn(n, r);
                            ys(n[r] = ta(o, e), n)
                        }
                        break;
                    case Fh:
                        const i = t[++a],
                            s = t[++a];
                        if (null === n[s]) {
                            ngDevMode && Fe(typeof i, "string", `Expected "${i}" to be an element node tag name`), ngDevMode && ngDevMode.rendererCreateElement++, ngDevMode && cn(n, s);
                            ys(n[s] = na(o, i, null), n)
                        }
                        break;
                    default:
                        ngDevMode && qe(`Unable to determine the type of mutate operation for "${l}"`)
                }
            }
        }

        function rp(e, t, n, r, o) {
            for (let i = 0; i < n.length; i++) {
                const s = n[i],
                    a = n[++i];
                if (s & o) {
                    let o = "";
                    for (let s = i + 1; s <= i + a; s++) {
                        const i = n[s];
                        if ("string" == typeof i) o += i;
                        else if ("number" == typeof i)
                            if (i < 0) o += Te(t[r - i]);
                            else {
                                const a = i >>> 2;
                                switch (3 & i) {
                                    case 1:
                                        const i = n[++s],
                                            l = n[++s],
                                            c = e.data[a];
                                        ngDevMode && We(c, "Experting TNode or string"), "string" == typeof c ? fc(t[11], t[a], null, c, i, o, l) : Xl(e, c, t, i, o, t[11], l, !1);
                                        break;
                                    case 0:
                                        const u = t[a];
                                        null !== u && ea(t[11], u, o);
                                        break;
                                    case 2:
                                        ip(e, Zh(e, a), t, o);
                                        break;
                                    case 3:
                                        op(e, Zh(e, a), r, t)
                                }
                            }
                    }
                } else {
                    const o = n[i + 1];
                    if (o > 0 && 3 == (3 & o)) {
                        const n = Zh(e, o >>> 2);
                        t[n.currentCaseLViewIndex] < 0 && op(e, n, r, t)
                    }
                }
                i += a
            }
        }

        function op(e, t, n, r) {
            ngDevMode && Ze(r, t.currentCaseLViewIndex);
            let o = r[t.currentCaseLViewIndex];
            if (null !== o) {
                let i = ep;
                o < 0 && (o = r[t.currentCaseLViewIndex] = ~o, i = -1), rp(e, r, t.update[o], n, i)
            }
        }

        function ip(e, t, n, r) {
            const o = function (e, t) {
                let n = e.cases.indexOf(t);
                if (-1 === n) switch (e.type) {
                    case 1: {
                        const r = Rh(t, Hh);
                        n = e.cases.indexOf(r), -1 === n && "other" !== r && (n = e.cases.indexOf("other"));
                        break
                    }
                    case 0:
                        n = e.cases.indexOf("other")
                }
                return -1 === n ? null : n
            }(t, r);
            if (Jh(t, n) !== o && (sp(e, t, n), n[t.currentCaseLViewIndex] = null === o ? null : ~o, null !== o)) {
                const r = n[t.anchorIdx];
                r && (ngDevMode && Qe(r), np(e, t.create[o], n, r))
            }
        }

        function sp(e, t, n) {
            let r = Jh(t, n);
            if (null !== r) {
                const o = t.remove[r];
                for (let t = 0; t < o.length; t++) {
                    const r = o[t];
                    if (r > 0) {
                        const e = An(r, n);
                        null !== e && Da(n[11], e)
                    } else sp(e, Zh(e, ~r), n)
                }
            }
        }

        function ap() {
            const e = [];
            let t, n, r = -1;

            function o(e, t) {
                r = 0;
                const o = Jh(e, t);
                null !== o ? (ngDevMode && Pe(o, 0, e.cases.length - 1), n = e.remove[o]) : n = bt
            }

            function i() {
                if (r < n.length) {
                    const s = n[r++];
                    if (ngDevMode && Ne(s, "Expecting OpCode number"), s > 0) {
                        const e = t[s];
                        return ngDevMode && Qe(e), e
                    } {
                        e.push(r, n);
                        const a = ~s,
                            l = t[1].data[a];
                        return ngDevMode && en(l), o(l, t), i()
                    }
                }
                return 0 === e.length ? null : (n = e.pop(), r = e.pop(), i())
            }
            return function (n, r) {
                for (t = r; e.length;) e.pop();
                return ngDevMode && Kt(n, r), o(n.value, r), i
            }
        }

        function lp(e) {
            const t = e || (Array.isArray(this) ? this : []);
            let n = [];
            for (let e = 0; e < t.length; e++) {
                const r = t[e++],
                    o = t[e],
                    i = (r & Lh.COMMENT) === Lh.COMMENT,
                    s = (r & Lh.APPEND_EAGERLY) === Lh.APPEND_EAGERLY,
                    a = r >>> Lh.SHIFT;
                n.push(`lView[${a}] = document.${i?"createComment":"createText"}(${JSON.stringify(o)});`), s && n.push(`parent.appendChild(lView[${a}]);`)
            }
            return n
        }

        function cp(e) {
            const t = new fp(e || (Array.isArray(this) ? this : []));
            let n = [];

            function r(e) {
                const n = e >>> 2;
                switch (3 & e) {
                    case 0:
                        return `(lView[${n}] as Text).textContent = $$$`;
                    case 1:
                        const e = t.consumeString(),
                            r = t.consumeFunction();
                        return `(lView[${n}] as Element).setAttribute('${e}', ${r?`(${r})($$$)`:"$$$"})`;
                    case 2:
                        return `icuSwitchCase(${n}, $$$)`;
                    case 3:
                        return `icuUpdateCase(${n})`
                }
                throw new Error("unexpected OpCode")
            }
            for (; t.hasMore();) {
                let e = t.consumeNumber(),
                    o = t.consumeNumber();
                const i = t.i + o,
                    s = [];
                let a = "";
                for (; t.i < i;) {
                    let e = t.consumeNumberOrString();
                    if ("string" == typeof e) a += e;
                    else if (e < 0) a += "${lView[i" + e + "]}";
                    else {
                        const t = r(e);
                        s.push(t.replace("$$$", "`" + a + "`") + ";"), a = ""
                    }
                }
                n.push(`if (mask & 0b${e.toString(2)}) { ${s.join(" ")} }`)
            }
            return n
        }

        function up(e) {
            const t = new fp(e || (Array.isArray(this) ? this : []));
            let n = [];

            function r(e) {
                const n = Kh(e),
                    r = Yh(e);
                switch (Xh(e)) {
                    case 0:
                        return `(lView[${n}] as Element).appendChild(lView[${o}])`;
                    case 1:
                        return `(lView[${r}] as Element).setAttribute("${t.consumeString()}", "${t.consumeString()}")`
                }
                throw new Error("Unexpected OpCode: " + Xh(e))
            }
            let o = -1;
            for (; t.hasMore();) {
                let e = t.consumeNumberStringOrMarker();
                if (e === Vh) {
                    const e = t.consumeString();
                    o = t.consumeNumber(), n.push(`lView[${o}] = document.createComment("${e}")`)
                } else if (e === Fh) {
                    const e = t.consumeString();
                    o = t.consumeNumber(), n.push(`lView[${o}] = document.createElement("${e}")`)
                } else if ("string" == typeof e) o = t.consumeNumber(), n.push(`lView[${o}] = document.createTextNode("${e}")`);
                else {
                    if ("number" != typeof e) throw new Error("Unexpected value"); {
                        const t = r(e);
                        t && n.push(t)
                    }
                }
            }
            return n
        }

        function dp(e) {
            const t = e || (Array.isArray(this) ? this : []);
            let n = [];
            for (let e = 0; e < t.length; e++) {
                const r = t[e];
                r > 0 ? n.push(`remove(lView[${r}])`) : n.push(`removeNestedICU(${~r})`)
            }
            return n
        }
        class fp {
            constructor(e) {
                this.i = 0, this.codes = e
            }
            hasMore() {
                return this.i < this.codes.length
            }
            consumeNumber() {
                let e = this.codes[this.i++];
                return Ne(e, "expecting number in OpCode"), e
            }
            consumeString() {
                let e = this.codes[this.i++];
                return Re(e, "expecting string in OpCode"), e
            }
            consumeFunction() {
                let e = this.codes[this.i++];
                if (null === e || "function" == typeof e) return e;
                throw new Error("expecting function in OpCode")
            }
            consumeNumberOrString() {
                let e = this.codes[this.i++];
                return "string" == typeof e || Ne(e, "expecting number or string in OpCode"), e
            }
            consumeNumberStringOrMarker() {
                let e = this.codes[this.i++];
                return "string" == typeof e || "number" == typeof e || e == Vh || e == Fh || Ne(e, "expecting number, string, ICU_MARKER or ELEMENT_MARKER in OpCode"), e
            }
        }
        const hp = /ï¿½(\d+):?\d*ï¿½/gi,
            pp = /({\s*ï¿½\d+:?\d*ï¿½\s*,\s*\S{6}\s*,[\s\S]*})/gi,
            gp = /ï¿½(\d+)ï¿½/,
            mp = /^\s*(ï¿½\d+:?\d*ï¿½)\s*,\s*(select|plural)\s*,/,
            vp = /ï¿½\/?\*(\d+:\d+)ï¿½/gi,
            yp = /ï¿½(\/?[#*]\d+):?\d*ï¿½/gi,
            wp = /\uE500/g;

        function bp(e, t, n, r, o, i) {
            const s = Jn(),
                a = [],
                l = [],
                c = [
                    []
                ];
            ngDevMode && (el(a, lp), el(l, cp)), o = function (e, t) {
                if (function (e) {
                        return -1 === e
                    }(t)) return Ep(e); {
                    const n = e.indexOf(`:${t}ï¿½`) + 2 + t.toString().length,
                        r = e.search(new RegExp(`ï¿½\\/\\*\\d+:${t}ï¿½`));
                    return Ep(e.substring(n, r))
                }
            }(o, i);
            const u = (d = o, d.replace(wp, " ")).split(yp);
            var d;
            for (let i = 0; i < u.length; i++) {
                let d = u[i];
                if (0 == (1 & i)) {
                    const i = kp(d);
                    for (let u = 0; u < i.length; u++) {
                        let d = i[u];
                        if (0 == (1 & u)) {
                            const t = d;
                            ngDevMode && Re(t, "Parsed ICU part should be string"), "" !== t && Mp(e, s, c[0], a, l, n, t)
                        } else {
                            const i = d;
                            if ("object" != typeof i) throw new Error(`Unable to parse ICU expression in "${o}" message.`);
                            const u = _p(e, s, c[0], n, a, ngDevMode ? `ICU ${r}:${i.mainBinding}` : "", !0).index;
                            ngDevMode && ze(u, Bt, "Index must be in absolute LView offset"), Ip(e, n, l, t, i, u)
                        }
                    }
                } else {
                    const t = 47 === d.charCodeAt(0),
                        n = d.charCodeAt(t ? 1 : 0);
                    ngDevMode && Ge(n, 42, 35);
                    const r = Bt + Number.parseInt(d.substring(t ? 2 : 1));
                    if (t) c.shift(), Kn(Jn(), !1);
                    else {
                        const t = Gh(e, c[0], r);
                        c.unshift([]), Kn(t, !0)
                    }
                }
            }
            e.data[r] = {
                create: a,
                update: l
            }
        }

        function _p(e, t, n, r, o, i, s) {
            const a = Ll(e, r, 1, null);
            let l = a << Lh.SHIFT,
                c = Jn();
            var u;
            t === c && (c = null), null === c && (l |= Lh.APPEND_EAGERLY), s && (l |= Lh.COMMENT, u = ap, void 0 === zs && (zs = u())), o.push(l, null === i ? "" : i);
            const d = Vl(e, a, s ? 32 : 1, null === i ? ngDevMode ? "{{?}}" : "" : i, null);
            Uh(n, d);
            const f = d.index;
            return Kn(d, !1), null !== c && t !== c && function (e, t) {
                ngDevMode && Xt(e);
                let n = e.insertBeforeIndex;
                null === n ? (ya($h, Bh), n = e.insertBeforeIndex = [null, t]) : (Fe(Array.isArray(n), !0, "Expecting array here"), n.push(t))
            }(c, f), d
        }

        function Mp(e, t, n, r, o, i, s) {
            const a = s.match(hp),
                l = _p(e, t, n, i, r, a ? null : s, !1);
            a && Dp(o, s, l.index, null, 0, null)
        }

        function Dp(e, t, n, r, o, i) {
            ngDevMode && ze(n, Bt, "Index must be in absolute LView offset");
            const s = e.length,
                a = s + 1;
            e.push(null, null);
            const l = s + 2;
            ngDevMode && el(e, cp);
            const c = t.split(hp);
            let u = 0;
            for (let t = 0; t < c.length; t++) {
                const n = c[t];
                if (1 & t) {
                    const t = o + parseInt(n, 10);
                    e.push(-1 - t), u |= Cp(t)
                } else "" !== n && e.push(n)
            }
            return e.push(n << 2 | (r ? 1 : 0)), r && e.push(r, i), e[s] = u, e[a] = e.length - l, u
        }

        function xp(e) {
            let t = 0;
            for (let n = 0; n < e.length; n++) {
                const r = e[n];
                "number" == typeof r && r < 0 && t++
            }
            return t
        }

        function Cp(e) {
            return 1 << Math.min(e, 31)
        }

        function Ep(e) {
            let t, n, r = "",
                o = 0,
                i = !1;
            for (; null !== (t = vp.exec(e));) i ? t[0] === `ï¿½/*${n}ï¿½` && (o = t.index, i = !1) : (r += e.substring(o, t.index + t[0].length), n = t[1], i = !0);
            return ngDevMode && Fe(i, !1, `Tag mismatch: unable to find the end of the sub-template in the translation "${e}"`), r += e.substr(o), r
        }

        function Ip(e, t, n, r, o, i) {
            ngDevMode && We(o, "ICU expression must be defined");
            let s = 0;
            const a = {
                type: o.type,
                currentCaseLViewIndex: Ll(e, t, 1, null),
                anchorIdx: i,
                cases: [],
                create: [],
                remove: [],
                update: []
            };
            ! function (e, t, n) {
                e.push(Cp(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2)
            }(n, o, i),
            function (e, t, n) {
                const r = e.data[t];
                ngDevMode && Fe(null === r || r.hasOwnProperty("tViews"), !0, "We expect to get 'null'|'TIcuContainer'"), null === r ? e.data[t] = n : (ngDevMode && Fr(r, 32), r.value = n)
            }(e, i, a);
            const l = o.values;
            for (let i = 0; i < l.length; i++) {
                const c = l[i],
                    u = [];
                for (let e = 0; e < c.length; e++) {
                    const t = c[e];
                    if ("string" != typeof t) {
                        const n = u.push(t) - 1;
                        c[e] = `\x3c!--ï¿½${n}ï¿½--\x3e`
                    }
                }
                s = Sp(e, a, t, n, r, o.cases[i], c.join(""), u) | s
            }
            s && function (e, t, n) {
                e.push(t, 1, n << 2 | 3)
            }(n, s, i)
        }

        function Tp(e) {
            const t = [],
                n = [];
            let r = 1,
                o = 0;
            const i = kp(e = e.replace(mp, (function (e, t, n) {
                return r = "select" === n ? 0 : 1, o = parseInt(t.substr(1), 10), ""
            })));
            for (let e = 0; e < i.length;) {
                let o = i[e++].trim();
                1 === r && (o = o.replace(/\s*(?:=)?(\w+)\s*/, "$1")), o.length && t.push(o);
                const s = kp(i[e++]);
                t.length > n.length && n.push(s)
            }
            return {
                type: r,
                mainBinding: o,
                cases: t,
                values: n
            }
        }

        function kp(e) {
            if (!e) return [];
            let t = 0;
            const n = [],
                r = [],
                o = /[{}]/g;
            let i;
            for (o.lastIndex = 0; i = o.exec(e);) {
                const o = i.index;
                if ("}" == i[0]) {
                    if (n.pop(), 0 == n.length) {
                        const n = e.substring(t, o);
                        mp.test(n) ? r.push(Tp(n)) : r.push(n), t = o + 1
                    }
                } else {
                    if (0 == n.length) {
                        const n = e.substring(t, o);
                        r.push(n), t = o + 1
                    }
                    n.push("{")
                }
            }
            const s = e.substring(t);
            return r.push(s), r
        }

        function Sp(e, t, n, r, o, i, s, a) {
            const l = [],
                c = [],
                u = [];
            ngDevMode && (el(l, up), el(c, dp), el(u, cp)), t.cases.push(i), t.create.push(l), t.remove.push(c), t.update.push(u);
            const d = Ai(En()).getInertBodyElement(s);
            ngDevMode && We(d, "Unable to generate inert body element");
            const f = os(d) || d;
            return f ? Ap(e, t, n, r, l, c, u, f, o, a, 0) : 0
        }

        function Ap(e, t, n, r, o, i, s, a, l, c, u) {
            let d = 0,
                f = a.firstChild;
            for (; f;) {
                const a = Ll(e, n, 1, null);
                switch (f.nodeType) {
                    case Node.ELEMENT_NODE:
                        const h = f,
                            p = h.tagName.toLowerCase();
                        if (qi.hasOwnProperty(p)) {
                            Pp(o, Fh, p, l, a), e.data[a] = p;
                            const g = h.attributes;
                            for (let e = 0; e < g.length; e++) {
                                const t = g.item(e),
                                    n = t.name.toLowerCase();
                                !!t.value.match(hp) ? Ki.hasOwnProperty(n) ? Qi[n] ? Dp(s, t.value, a, t.name, 0, ji) : Zi[n] ? Dp(s, t.value, a, t.name, 0, Fi) : Dp(s, t.value, a, t.name, 0, null) : ngDevMode && console.warn(`WARNING: ignoring unsafe attribute value ${n} on element ${p} (see https://g.co/ng/security#xss)`) : Rp(o, a, t)
                            }
                            d = Ap(e, t, n, r, o, i, s, f, a, c, u + 1) | d, Op(i, a, u)
                        }
                        break;
                    case Node.TEXT_NODE:
                        const g = f.textContent || "",
                            m = g.match(hp);
                        Pp(o, null, m ? "" : g, l, a), Op(i, a, u), m && (d = Dp(s, g, a, null, 0, null) | d);
                        break;
                    case Node.COMMENT_NODE:
                        const v = gp.exec(f.textContent || "");
                        if (v) {
                            const t = parseInt(v[1], 10),
                                s = c[t];
                            Pp(o, Vh, ngDevMode ? `nested ICU ${t}` : "", l, a), Ip(e, n, r, l, s, a), Np(i, a, u)
                        }
                }
                f = f.nextSibling
            }
            return d
        }

        function Op(e, t, n) {
            0 === n && e.push(t)
        }

        function Np(e, t, n) {
            0 === n && (e.push(~t), e.push(t))
        }

        function Pp(e, t, n, r, o) {
            var i, s, a;
            null !== t && e.push(t), e.push(n, o, (i = 0, s = r, a = o, ngDevMode && ze(s, 0, "Missing parent index"), ngDevMode && Ue(a, 0, "Missing ref index"), i | s << 17 | a << 1))
        }

        function Rp(e, t, n) {
            e.push(t << 1 | 1, n.name, n.value)
        }
        const jp = /\[(ï¿½.+?ï¿½?)\]/,
            Fp = /\[(ï¿½.+?ï¿½?)\]|(ï¿½\/?\*\d+:\d+ï¿½)/g,
            Vp = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g,
            Lp = /{([A-Z0-9_]+)}/g,
            Hp = /ï¿½I18N_EXP_(ICU(_\d+)?)ï¿½/g,
            $p = /\/\*/,
            Bp = /\d+\:(\d+)/;

        function Up(e, t, n = -1) {
            const r = qn(),
                o = Wn(),
                i = Bt + e;
            ngDevMode && We(r, "tView should be defined");
            const s = Vn(r.consts, t),
                a = Jn();
            r.firstCreatePass && bp(r, null === a ? 0 : a.index, o, i, s, n);
            const l = r.data[i],
                c = ca(r, a === o[6] ? null : a, o),
                u = a && 8 & a.type ? o[a.index] : null;
            ! function (e, t, n, r) {
                const o = e[11];
                for (let i = 0; i < t.length; i++) {
                    const s = t[i++],
                        a = t[i],
                        l = (s & Lh.COMMENT) === Lh.COMMENT,
                        c = (s & Lh.APPEND_EAGERLY) === Lh.APPEND_EAGERLY,
                        u = s >>> Lh.SHIFT;
                    let d = e[u];
                    null === d && (d = e[u] = l ? o.createComment(a) : Xs(o, a)), c && null !== n && ua(o, n, d, r, !1)
                }
            }(o, l.create, c, u), ar(!0)
        }

        function zp() {
            ar(!1)
        }

        function Wp(e, t, n) {
            Up(e, t, n), zp()
        }

        function qp(e, t) {
            const n = qn();
            ngDevMode && We(n, "tView should be defined");
            const r = Vn(n.consts, t);
            ! function (e, t, n) {
                const r = Zn().index,
                    o = [];
                if (ngDevMode && el(o, cp), e.firstCreatePass && null === e.data[t]) {
                    for (let e = 0; e < n.length; e += 2) {
                        const t = n[e],
                            i = n[e + 1];
                        if ("" !== i) {
                            if (pp.test(i)) throw new Error(`ICU expressions are not supported in attributes. Message: "${i}".`);
                            Dp(o, i, r, t, xp(o), null)
                        }
                    }
                    e.data[t] = o
                }
            }(n, e + Bt, r)
        }

        function Qp(e) {
            const t = Wn();
            return Nu(t, ir(), e) && (ep |= 1 << Math.min(tp, 31)), tp++, Qp
        }

        function Zp(e) {
            ! function (e, t, n) {
                if (tp > 0) {
                    ngDevMode && We(e, "tView should be defined");
                    const r = e.data[n];
                    rp(e, t, Array.isArray(r) ? r : r.update, rr() - tp - 1, ep)
                }
                ep = 0, tp = 0
            }(qn(), Wn(), e + Bt)
        }

        function Gp(e, t = {}) {
            return function (e, t = {}) {
                let n = e;
                if (jp.test(e)) {
                    const e = {},
                        t = [0];
                    n = n.replace(Fp, ((n, r, o) => {
                        const i = r || o,
                            s = e[i] || [];
                        if (s.length || (i.split("|").forEach((e => {
                                const t = e.match(Bp),
                                    n = t ? parseInt(t[1], 10) : 0,
                                    r = $p.test(e);
                                s.push([n, r, e])
                            })), e[i] = s), !s.length) throw new Error(`i18n postprocess: unmatched placeholder - ${i}`);
                        const a = t[t.length - 1];
                        let l = 0;
                        for (let e = 0; e < s.length; e++)
                            if (s[e][0] === a) {
                                l = e;
                                break
                            } const [c, u, d] = s[l];
                        return u ? t.pop() : a !== c && t.push(c), s.splice(l, 1), d
                    }))
                }
                return Object.keys(t).length ? (n = n.replace(Vp, ((e, n, r, o, i, s) => t.hasOwnProperty(r) ? `${n}${t[r]}${s}` : e)), n = n.replace(Lp, ((e, n) => t.hasOwnProperty(n) ? t[n] : e)), n = n.replace(Hp, ((e, n) => {
                    if (t.hasOwnProperty(n)) {
                        const r = t[n];
                        if (!r.length) throw new Error(`i18n postprocess: unmatched ICU - ${e} with key: ${n}`);
                        return r.shift()
                    }
                    return e
                })), n) : n
            }(e, t)
        }

        function Jp(e, t, n, r, o) {
            if (e = xe(e), Array.isArray(e))
                for (let i = 0; i < e.length; i++) Jp(e[i], t, n, r, o);
            else {
                const i = qn(),
                    s = Wn();
                let a = Jc(e) ? e : xe(e.provide),
                    l = Qc(e);
                const c = Zn(),
                    u = 1048575 & c.providerIndexes,
                    d = c.directiveStart,
                    f = c.providerIndexes >> 20;
                if (Jc(e) || !e.multi) {
                    const r = new Rr(l, o, Od),
                        h = Xp(a, t, o ? u : u + f, d); - 1 === h ? (Xr(Gr(c, s), i, a), Kp(i, e, t.length), t.push(a), c.directiveStart++, c.directiveEnd++, o && (c.providerIndexes += 1048576), n.push(r), s.push(r)) : (n[h] = r, s[h] = r)
                } else {
                    const h = Xp(a, t, u + f, d),
                        p = Xp(a, t, u, u + f),
                        g = h >= 0 && n[h],
                        m = p >= 0 && n[p];
                    if (o && !m || !o && !g) {
                        Xr(Gr(c, s), i, a);
                        const u = function (e, t, n, r, o) {
                            const i = new Rr(e, n, Od);
                            return i.multi = [], i.index = t, i.componentProviders = 0, Yp(i, o, r && !n), i
                        }(o ? tg : eg, n.length, o, r, l);
                        !o && m && (n[p].providerFactory = u), Kp(i, e, t.length, 0), t.push(a), c.directiveStart++, c.directiveEnd++, o && (c.providerIndexes += 1048576), n.push(u), s.push(u)
                    } else {
                        Kp(i, e, h > -1 ? h : p, Yp(n[o ? p : h], l, !o && r))
                    }!o && r && m && n[p].componentProviders++
                }
            }
        }

        function Kp(e, t, n, r) {
            const o = Jc(t),
                i = !!t.useClass;
            if (o || i) {
                const s = (i ? xe(t.useClass) : t).prototype.ngOnDestroy;
                if (s) {
                    const i = e.destroyHooks || (e.destroyHooks = []);
                    if (!o && t.multi) {
                        ngDevMode && We(r, "indexInFactory when registering multi factory destroy hook");
                        const e = i.indexOf(n); - 1 === e ? i.push(n, [r, s]) : i[e + 1].push(r, s)
                    } else i.push(n, s)
                }
            }
        }

        function Yp(e, t, n) {
            return n && e.componentProviders++, e.multi.push(t) - 1
        }

        function Xp(e, t, n, r) {
            for (let o = n; o < r; o++)
                if (t[o] === e) return o;
            return -1
        }

        function eg(e, t, n, r) {
            return ng(this.multi, [])
        }

        function tg(e, t, n, r) {
            const o = this.multi;
            let i;
            if (this.providerFactory) {
                const e = this.providerFactory.componentProviders,
                    t = ao(n, n[1], this.providerFactory.index, r);
                i = t.slice(0, e), ng(o, i);
                for (let n = e; n < t.length; n++) i.push(t[n])
            } else i = [], ng(o, i);
            return i
        }

        function ng(e, t) {
            for (let n = 0; n < e.length; n++) {
                const r = e[n];
                t.push(r())
            }
            return t
        }

        function rg(e, t = []) {
            return n => {
                n.providersResolver = (n, r) => function (e, t, n) {
                    const r = qn();
                    if (r.firstCreatePass) {
                        const o = Jt(e);
                        Jp(n, r.data, r.blueprint, o, !0), Jp(t, r.data, r.blueprint, o, !1)
                    }
                }(n, r ? r(e) : e, t)
            }
        }
        class og {}
        const ig = "ngComponent";
        class sg {
            resolveComponentFactory(e) {
                throw function (e) {
                    const t = Error(`No component factory found for ${be(e)}. Did you add it to @NgModule.entryComponents?`);
                    return t[ig] = e, t
                }(e)
            }
        }
        class ag {}

        function lg(e, t) {
            return new cg(On(e, t))
        }
        ag.NULL = new sg;
        class cg {
            constructor(e) {
                this.nativeElement = e
            }
        }

        function ug(e) {
            return e instanceof cg ? e.nativeElement : e
        }
        cg.__NG_ELEMENT_ID__ = function () {
            return lg(Zn(), Wn())
        };
        new Do("Renderer2Interceptor");
        class dg {}
        class fg {}
        fg.Éµprov = Je({
            token: fg,
            providedIn: "root",
            factory: () => null
        });
        const hg = new class {
                constructor(e) {
                    this.full = e, this.major = e.split(".")[0], this.minor = e.split(".")[1], this.patch = e.split(".").slice(2).join(".")
                }
            }("13.3.6"),
            pg = {};

        function gg(e, t, n, r, o = !1) {
            for (; null !== n;) {
                ngDevMode && Fr(n, 63);
                const i = t[n.index];
                if (null !== i && r.push(Sn(i)), qt(i))
                    for (let e = zt; e < i.length; e++) {
                        const t = i[e],
                            n = t[1].firstChild;
                        null !== n && gg(t[1], t, n, r)
                    }
                const s = n.type;
                if (8 & s) gg(e, t, n.child, r);
                else if (32 & s) {
                    const e = Ws(n, t);
                    let o;
                    for (; o = e();) r.push(o)
                } else if (16 & s) {
                    const e = _a(t, n);
                    if (Array.isArray(e)) r.push(...e);
                    else {
                        const n = qs(t[16]);
                        ngDevMode && dn(n), gg(n[1], n, e, r, !0)
                    }
                }
                n = o ? n.projectionNext : n.next
            }
            return r
        }
        class mg {
            constructor(e, t) {
                this._lView = e, this._cdRefInjectingView = t, this._appRef = null, this._attachedToViewContainer = !1
            }
            get rootNodes() {
                const e = this._lView,
                    t = e[1];
                return gg(t, e, t.firstChild, [])
            }
            get context() {
                return this._lView[8]
            }
            set context(e) {
                this._lView[8] = e
            }
            get destroyed() {
                return 256 == (256 & this._lView[2])
            }
            destroy() {
                if (this._appRef) this._appRef.detachView(this);
                else if (this._attachedToViewContainer) {
                    const e = this._lView[3];
                    if (qt(e)) {
                        const t = e[8],
                            n = t ? t.indexOf(this) : -1;
                        n > -1 && (ngDevMode && Fe(n, e.indexOf(this._lView) - zt, "An attached view should be in the same position within its container as its ViewRef in the VIEW_REFS array."), ia(e, n), No(t, n))
                    }
                    this._attachedToViewContainer = !1
                }
                sa(this._lView[1], this._lView)
            }
            onDestroy(e) {
                Kl(this._lView[1], this._lView, null, e)
            }
            markForCheck() {
                _c(this._cdRefInjectingView || this._lView)
            }
            detach() {
                this._lView[2] &= -129
            }
            reattach() {
                this._lView[2] |= 128
            }
            detectChanges() {
                Dc(this._lView[1], this._lView, this.context)
            }
            checkNoChanges() {
                ! function (e, t, n) {
                    tr(!0);
                    try {
                        Dc(e, t, n)
                    } finally {
                        tr(!1)
                    }
                }(this._lView[1], this._lView, this.context)
            }
            attachToViewContainerRef() {
                if (this._appRef) {
                    const e = ngDevMode ? "This view is already attached directly to the ApplicationRef!" : "";
                    throw new Ee(902, e)
                }
                this._attachedToViewContainer = !0
            }
            detachFromAppRef() {
                var e, t;
                this._appRef = null, e = this._lView[1], t = this._lView, Ca(e, t, t[11], 2, null, null)
            }
            attachToAppRef(e) {
                if (this._attachedToViewContainer) {
                    const e = ngDevMode ? "This view is already attached to a ViewContainer!" : "";
                    throw new Ee(902, e)
                }
                this._appRef = e
            }
        }
        class vg extends mg {
            constructor(e) {
                super(e), this._view = e
            }
            detectChanges() {
                xc(this._view)
            }
            checkNoChanges() {
                ! function (e) {
                    tr(!0);
                    try {
                        xc(e)
                    } finally {
                        tr(!1)
                    }
                }(this._view)
            }
            get context() {
                return null
            }
        }
        class yg extends ag {
            constructor(e) {
                super(), this.ngModule = e
            }
            resolveComponentFactory(e) {
                ngDevMode && tn(e);
                const t = Vt(e);
                return new bg(t, this.ngModule)
            }
        }

        function wg(e) {
            const t = [];
            for (let n in e)
                if (e.hasOwnProperty(n)) {
                    const r = e[n];
                    t.push({
                        propName: r,
                        templateName: n
                    })
                } return t
        }
        class bg extends og {
            constructor(e, t) {
                super(), this.componentDef = e, this.ngModule = t, this.componentType = e.type, this.selector = e.selectors.map(Ha).join(","), this.ngContentSelectors = e.ngContentSelectors ? e.ngContentSelectors : [], this.isBoundToModule = !!t
            }
            get inputs() {
                return wg(this.componentDef.inputs)
            }
            get outputs() {
                return wg(this.componentDef.outputs)
            }
            create(e, t, n, r) {
                const o = (r = r || this.ngModule) ? function (e, t) {
                        return {
                            get: (n, r, o) => {
                                const i = e.get(n, pg, o);
                                return i !== pg || r === pg ? i : t.get(n, r, o)
                            }
                        }
                    }(e, r.injector) : e,
                    i = o.get(dg, kn),
                    s = o.get(fg, null),
                    a = i.createRenderer(null, this.componentDef),
                    l = this.componentDef.selectors[0][0] || "div",
                    c = n ? Jl(a, n, this.componentDef.encapsulation) : na(i.createRenderer(null, this.componentDef), l, function (e) {
                        const t = e.toLowerCase();
                        return "svg" === t ? Dn : "math" === t ? xn : null
                    }(l)),
                    u = this.componentDef.onPush ? 576 : 528,
                    d = gu(),
                    f = Zl(0, null, null, 1, 0, null, null, null, null, null),
                    h = jl(null, f, d, u, null, null, i, a, s, o);
                let p, g;
                gr(h);
                try {
                    const e = hu(c, this.componentDef, h, i, a);
                    if (c)
                        if (n) Vr(a, c, ["ng-version", hg.full]);
                        else {
                            const {
                                attrs: e,
                                classes: t
                            } = function (e) {
                                const t = [],
                                    n = [];
                                let r = 1,
                                    o = 2;
                                for (; r < e.length;) {
                                    let i = e[r];
                                    if ("string" == typeof i) 2 === o ? "" !== i && t.push(i, e[++r]) : 8 === o && n.push(i);
                                    else {
                                        if (!Ra(o)) break;
                                        o = i
                                    }
                                    r++
                                }
                                return {
                                    attrs: t,
                                    classes: n
                                }
                            }(this.componentDef.selectors[0]);
                            e && Vr(a, c, e), t && t.length > 0 && Ta(a, c, t.join(" "))
                        } if (g = Nn(f, Bt), void 0 !== t) {
                        const e = g.projection = [];
                        for (let n = 0; n < this.ngContentSelectors.length; n++) {
                            const r = t[n];
                            e.push(null != r ? Array.from(r) : null)
                        }
                    }
                    p = pu(e, this.componentDef, h, d, [mu]), Hl(f, h, null)
                } finally {
                    br()
                }
                return new _g(this.componentType, p, lg(g, h), h, g)
            }
        }
        new yg;
        class _g extends class {} {
            constructor(e, t, n, r, o) {
                super(), this.location = n, this._rootLView = r, this._tNode = o, this.instance = t, this.hostView = this.changeDetectorRef = new vg(r), this.componentType = e
            }
            get injector() {
                return new uo(this._tNode, this._rootLView)
            }
            destroy() {
                this.hostView.destroy()
            }
            onDestroy(e) {
                this.hostView.onDestroy(e)
            }
        }

        function Mg(e, t, n, r) {
            return ct((() => {
                const o = e;
                null !== t && (o.hasOwnProperty("decorators") && void 0 !== o.decorators ? o.decorators.push(...t) : o.decorators = t), null !== n && (o.ctorParameters = n), null !== r && (o.hasOwnProperty("propDecorators") && void 0 !== o.propDecorators ? o.propDecorators = {
                    ...o.propDecorators,
                    ...r
                } : o.propDecorators = r)
            }))
        }
        class Dg {}
        const xg = new Map;

        function Cg(e, t, n) {
            if (t && t !== n) throw new Error(`Duplicate module registered for ${e} - ${be(t)} vs ${be(t.name)}`)
        }
        class Eg extends Dg {
            constructor(e, t) {
                super(), this._parent = t, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new yg(this);
                const n = $t(e);
                ngDevMode && We(n, `NgModule '${be(e)}' is not a subtype of 'NgModuleType'.`), this._bootstrapComponents = Hs(n.bootstrap), this._r3Injector = zc(e, t, [{
                    provide: Dg,
                    useValue: this
                }, {
                    provide: ag,
                    useValue: this.componentFactoryResolver
                }], be(e)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(e)
            }
            get(e, t = Kc.THROW_IF_NOT_FOUND, n = it.Default) {
                return e === Kc || e === Dg || e === jc ? this : this._r3Injector.get(e, t, n)
            }
            destroy() {
                ngDevMode && We(this.destroyCbs, "NgModule already destroyed");
                const e = this._r3Injector;
                !e.destroyed && e.destroy(), this.destroyCbs.forEach((e => e())), this.destroyCbs = null
            }
            onDestroy(e) {
                ngDevMode && We(this.destroyCbs, "NgModule already destroyed"), this.destroyCbs.push(e)
            }
        }
        class Ig extends class {} {
            constructor(e) {
                super(), this.moduleType = e;
                null !== $t(e) && function (e) {
                    const t = new Set;
                    ! function e(n) {
                        const r = $t(n, !0),
                            o = r.id;
                        if (null !== o) {
                            Cg(o, xg.get(o), n), xg.set(o, n)
                        }
                        const i = Hs(r.imports);
                        for (const n of i) t.has(n) || (t.add(n), e(n))
                    }(e)
                }(e)
            }
            create(e) {
                return new Eg(this.moduleType, e)
            }
        }

        function Tg(e, t, n) {
            const r = nr() + e,
                o = Wn();
            return o[r] === $a ? Au(o, r, n ? t.call(n) : t()) : Ou(o, r)
        }

        function kg(e, t, n, r) {
            return Lg(Wn(), nr(), e, t, n, r)
        }

        function Sg(e, t, n, r, o) {
            return Hg(Wn(), nr(), e, t, n, r, o)
        }

        function Ag(e, t, n, r, o, i) {
            return $g(Wn(), nr(), e, t, n, r, o, i)
        }

        function Og(e, t, n, r, o, i, s) {
            return Bg(Wn(), nr(), e, t, n, r, o, i, s)
        }

        function Ng(e, t, n, r, o, i, s, a) {
            const l = nr() + e,
                c = Wn(),
                u = ju(c, l, n, r, o, i);
            return Nu(c, l + 4, s) || u ? Au(c, l + 5, a ? t.call(a, n, r, o, i, s) : t(n, r, o, i, s)) : Ou(c, l + 5)
        }

        function Pg(e, t, n, r, o, i, s, a, l) {
            const c = nr() + e,
                u = Wn(),
                d = ju(u, c, n, r, o, i);
            return Pu(u, c + 4, s, a) || d ? Au(u, c + 6, l ? t.call(l, n, r, o, i, s, a) : t(n, r, o, i, s, a)) : Ou(u, c + 6)
        }

        function Rg(e, t, n, r, o, i, s, a, l, c) {
            const u = nr() + e,
                d = Wn();
            let f = ju(d, u, n, r, o, i);
            return Ru(d, u + 4, s, a, l) || f ? Au(d, u + 7, c ? t.call(c, n, r, o, i, s, a, l) : t(n, r, o, i, s, a, l)) : Ou(d, u + 7)
        }

        function jg(e, t, n, r, o, i, s, a, l, c, u) {
            const d = nr() + e,
                f = Wn(),
                h = ju(f, d, n, r, o, i);
            return ju(f, d + 4, s, a, l, c) || h ? Au(f, d + 8, u ? t.call(u, n, r, o, i, s, a, l, c) : t(n, r, o, i, s, a, l, c)) : Ou(f, d + 8)
        }

        function Fg(e, t, n, r) {
            return Ug(Wn(), nr(), e, t, n, r)
        }

        function Vg(e, t) {
            ngDevMode && Ze(e, t);
            const n = e[t];
            return n === $a ? void 0 : n
        }

        function Lg(e, t, n, r, o, i) {
            const s = t + n;
            return Nu(e, s, o) ? Au(e, s + 1, i ? r.call(i, o) : r(o)) : Vg(e, s + 1)
        }

        function Hg(e, t, n, r, o, i, s) {
            const a = t + n;
            return Pu(e, a, o, i) ? Au(e, a + 2, s ? r.call(s, o, i) : r(o, i)) : Vg(e, a + 2)
        }

        function $g(e, t, n, r, o, i, s, a) {
            const l = t + n;
            return Ru(e, l, o, i, s) ? Au(e, l + 3, a ? r.call(a, o, i, s) : r(o, i, s)) : Vg(e, l + 3)
        }

        function Bg(e, t, n, r, o, i, s, a, l) {
            const c = t + n;
            return ju(e, c, o, i, s, a) ? Au(e, c + 4, l ? r.call(l, o, i, s, a) : r(o, i, s, a)) : Vg(e, c + 4)
        }

        function Ug(e, t, n, r, o, i) {
            let s = t + n,
                a = !1;
            for (let t = 0; t < o.length; t++) Nu(e, s++, o[t]) && (a = !0);
            return a ? Au(e, s, r.apply(i, o)) : Vg(e, s)
        }

        function zg(e, t) {
            const n = qn();
            let r;
            const o = e + Bt;
            n.firstCreatePass ? (r = function (e, t) {
                if (t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        const r = t[n];
                        if (e === r.name) return r
                    }
                if (ngDevMode) {
                    const t = Wn()[16][8],
                        n = t ? ` in the '${t.constructor.name}' component` : "";
                    throw new Ee(-302, `The pipe '${e}' could not be found${n}!`)
                }
            }(t, n.pipeRegistry), n.data[o] = r, r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(o, r.onDestroy)) : r = n.data[o];
            const i = r.factory || (r.factory = hn(r.type, !0)),
                s = at(Od);
            try {
                const e = Qr(!1),
                    t = i();
                return Qr(e),
                    function (e, t, n, r) {
                        n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = r
                    }(n, Wn(), o, t), t
            } finally {
                at(s)
            }
        }

        function Wg(e, t, n) {
            const r = e + Bt,
                o = Wn(),
                i = Pn(o, r);
            return Jg(o, r) ? Lg(o, nr(), t, i.transform, n, i) : i.transform(n)
        }

        function qg(e, t, n, r) {
            const o = e + Bt,
                i = Wn(),
                s = Pn(i, o);
            return Jg(i, o) ? Hg(i, nr(), t, s.transform, n, r, s) : s.transform(n, r)
        }

        function Qg(e, t, n, r, o) {
            const i = e + Bt,
                s = Wn(),
                a = Pn(s, i);
            return Jg(s, i) ? $g(s, nr(), t, a.transform, n, r, o, a) : a.transform(n, r, o)
        }

        function Zg(e, t, n, r, o, i) {
            const s = e + Bt,
                a = Wn(),
                l = Pn(a, s);
            return Jg(a, s) ? Bg(a, nr(), t, l.transform, n, r, o, i, l) : l.transform(n, r, o, i)
        }

        function Gg(e, t, n) {
            const r = e + Bt,
                o = Wn(),
                i = Pn(o, r);
            return Jg(o, r) ? Ug(o, nr(), t, i.transform, n, i) : i.transform.apply(i, n)
        }

        function Jg(e, t) {
            return e[1].data[t].pure
        }

        function Kg(e) {
            return t => {
                setTimeout(e, void 0, t)
            }
        }
        const Yg = class extends B {
            constructor(e = !1) {
                super(), this.__isAsync = e
            }
            emit(e) {
                super.next(e)
            }
            subscribe(e, t, n) {
                let r = e,
                    o = t || (() => null),
                    i = n;
                if (e && "object" == typeof e) {
                    const t = e;
                    r = t.next ? .bind(t), o = t.error ? .bind(t), i = t.complete ? .bind(t)
                }
                this.__isAsync && (o = Kg(o), r && (r = Kg(r)), i && (i = Kg(i)));
                const s = super.subscribe({
                    next: r,
                    error: o,
                    complete: i
                });
                return e instanceof m && e.add(s), s
            }
        };

        function Xg() {
            return this._results[Iu()]()
        }
        class em {
            constructor(e = !1) {
                this._emitDistinctChangesOnly = e, this.dirty = !0, this._results = [], this._changesDetected = !1, this._changes = null, this.length = 0, this.first = void 0, this.last = void 0;
                const t = Iu(),
                    n = em.prototype;
                n[t] || (n[t] = Xg)
            }
            get changes() {
                return this._changes || (this._changes = new Yg)
            }
            get(e) {
                return this._results[e]
            }
            map(e) {
                return this._results.map(e)
            }
            filter(e) {
                return this._results.filter(e)
            }
            find(e) {
                return this._results.find(e)
            }
            reduce(e, t) {
                return this._results.reduce(e, t)
            }
            forEach(e) {
                this._results.forEach(e)
            }
            some(e) {
                return this._results.some(e)
            }
            toArray() {
                return this._results.slice()
            }
            toString() {
                return this._results.toString()
            }
            reset(e, t) {
                const n = this;
                n.dirty = !1;
                const r = So(e);
                (this._changesDetected = ! function (e, t, n) {
                    if (e.length !== t.length) return !1;
                    for (let r = 0; r < e.length; r++) {
                        let o = e[r],
                            i = t[r];
                        if (n && (o = n(o), i = n(i)), i !== o) return !1
                    }
                    return !0
                }(n._results, r, t)) && (n._results = r, n.length = r.length, n.last = r[this.length - 1], n.first = r[0])
            }
            notifyOnChanges() {
                !this._changes || !this._changesDetected && this._emitDistinctChangesOnly || this._changes.emit(this)
            }
            setDirty() {
                this.dirty = !0
            }
            destroy() {
                this.changes.complete(), this.changes.unsubscribe()
            }
        }
        Symbol.iterator;
        class tm {}
        tm.__NG_ELEMENT_ID__ = function () {
            return om(Zn(), Wn())
        };
        const nm = tm,
            rm = class extends nm {
                constructor(e, t, n) {
                    super(), this._declarationLView = e, this._declarationTContainer = t, this.elementRef = n
                }
                createEmbeddedView(e) {
                    const t = this._declarationTContainer.tViews,
                        n = jl(this._declarationLView, t, e, 16, null, t.declTNode, null, null, null, null),
                        r = this._declarationLView[this._declarationTContainer.index];
                    ngDevMode && rn(r), n[17] = r;
                    const o = this._declarationLView[19];
                    return null !== o && (n[19] = o.createEmbeddedView(t)), Hl(t, n, e), new mg(n)
                }
            };

        function om(e, t) {
            return 4 & e.type ? (ngDevMode && We(e.tViews, "TView must be allocated"), new rm(t, e, lg(e, t))) : null
        }
        class im {}
        im.__NG_ELEMENT_ID__ = function () {
            return um(Zn(), Wn())
        };
        const sm = im,
            am = class extends sm {
                constructor(e, t, n) {
                    super(), this._lContainer = e, this._hostTNode = t, this._hostLView = n
                }
                get element() {
                    return lg(this._hostTNode, this._hostLView)
                }
                get injector() {
                    return new uo(this._hostTNode, this._hostLView)
                }
                get parentInjector() {
                    const e = Yr(this._hostTNode, this._hostLView);
                    if (Ur(e)) {
                        const t = Wr(e, this._hostLView),
                            n = zr(e);
                        ngDevMode && fn(t, n);
                        const r = t[1].data[n + 8];
                        return new uo(r, t)
                    }
                    return new uo(null, this._hostLView)
                }
                clear() {
                    for (; this.length > 0;) this.remove(this.length - 1)
                }
                get(e) {
                    const t = lm(this._lContainer);
                    return null !== t && t[e] || null
                }
                get length() {
                    return this._lContainer.length - zt
                }
                createEmbeddedView(e, t, n) {
                    const r = e.createEmbeddedView(t || {});
                    return this.insert(r, n), r
                }
                createComponent(e, t, n, r, o) {
                    const i = e && !ko(e);
                    let s;
                    if (i) ngDevMode && Fe("object" != typeof t, !0, "It looks like Component factory was provided as the first argument and an options object as the second argument. This combination of arguments is incompatible. You can either change the first argument to provide Component type or change the second argument to be a number (representing an index at which to insert the new component's host view into this container)"), s = t;
                    else {
                        ngDevMode && (We(Vt(e), "Provided Component class doesn't contain Component definition. Please check whether provided class has @Component decorator."), Fe("number" != typeof t, !0, "It looks like Component type was provided as the first argument and a number (representing an index at which to insert the new component's host view into this container as the second argument. This combination of arguments is incompatible. Please use an object as the second argument instead."));
                        const i = t || {};
                        s = i.index, n = i.injector, r = i.projectableNodes, o = i.ngModuleRef
                    }
                    const a = i ? e : new bg(Vt(e)),
                        l = n || this.parentInjector;
                    if (!o && null == a.ngModule) {
                        const e = (i ? l : this.parentInjector).get(Dg, null);
                        e && (o = e)
                    }
                    const c = a.create(l, r, void 0, o);
                    return this.insert(c.hostView, s), c
                }
                insert(e, t) {
                    const n = e._lView,
                        r = n[1];
                    if (ngDevMode && e.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                    if (qt(n[3])) {
                        const t = this.indexOf(e);
                        if (-1 !== t) this.detach(t);
                        else {
                            const t = n[3];
                            ngDevMode && Fe(qt(t), !0, "An attached view should have its PARENT point to a container.");
                            const r = new am(t, t[6], t[3]);
                            r.detach(r.indexOf(e))
                        }
                    }
                    const o = this._adjustIndex(t),
                        i = this._lContainer;
                    ra(r, n, i, o);
                    const s = Ma(o, i),
                        a = n[11],
                        l = ha(a, i[7]);
                    return null !== l && function (e, t, n, r, o, i) {
                        r[0] = o, r[6] = t, Ca(e, r, n, 1, o, i)
                    }(r, i[6], a, n, l, s), e.attachToViewContainerRef(), Oo(cm(i), o, e), e
                }
                move(e, t) {
                    if (ngDevMode && e.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
                    return this.insert(e, t)
                }
                indexOf(e) {
                    const t = lm(this._lContainer);
                    return null !== t ? t.indexOf(e) : -1
                }
                remove(e) {
                    const t = this._adjustIndex(e, -1),
                        n = ia(this._lContainer, t);
                    n && (No(cm(this._lContainer), t), sa(n[1], n))
                }
                detach(e) {
                    const t = this._adjustIndex(e, -1),
                        n = ia(this._lContainer, t);
                    return n && null != No(cm(this._lContainer), t) ? new mg(n) : null
                }
                _adjustIndex(e, t = 0) {
                    return null == e ? this.length + t : (ngDevMode && (Ue(e, -1, `ViewRef index must be positive, got ${e}`), $e(e, this.length + 1 + t, "index")), e)
                }
            };

        function lm(e) {
            return e[8]
        }

        function cm(e) {
            return e[8] || (e[8] = [])
        }

        function um(e, t) {
            let n;
            ngDevMode && Fr(e, 15);
            const r = t[e.index];
            if (qt(r)) n = r;
            else {
                let o;
                if (8 & e.type) o = Sn(r);
                else {
                    const n = t[11];
                    ngDevMode && ngDevMode.rendererCreateComment++, o = n.createComment(ngDevMode ? "container" : "");
                    const r = On(e, t);
                    ua(n, ha(n, r), o, function (e, t) {
                        return Tn(e) ? e.nextSibling(t) : t.nextSibling
                    }(n, r), !1)
                }
                t[e.index] = n = mc(r, t, o, e), bc(t, n)
            }
            return new am(n, e, t)
        }
        class dm {
            constructor(e) {
                this.queryList = e, this.matches = null
            }
            clone() {
                return new dm(this.queryList)
            }
            setDirty() {
                this.queryList.setDirty()
            }
        }
        class fm {
            constructor(e = []) {
                this.queries = e
            }
            createEmbeddedView(e) {
                const t = e.queries;
                if (null !== t) {
                    const n = null !== e.contentQueries ? e.contentQueries[0] : t.length,
                        r = [];
                    for (let e = 0; e < n; e++) {
                        const n = t.getByIndex(e),
                            o = this.queries[n.indexInDeclarationView];
                        r.push(o.clone())
                    }
                    return new fm(r)
                }
                return null
            }
            insertView(e) {
                this.dirtyQueriesWithMatches(e)
            }
            detachView(e) {
                this.dirtyQueriesWithMatches(e)
            }
            dirtyQueriesWithMatches(e) {
                for (let t = 0; t < this.queries.length; t++) null !== Em(e, t).matches && this.queries[t].setDirty()
            }
        }
        class hm {
            constructor(e, t, n = null) {
                this.predicate = e, this.flags = t, this.read = n
            }
        }
        class pm {
            constructor(e = []) {
                this.queries = e
            }
            elementStart(e, t) {
                ngDevMode && an(e, "Queries should collect results on the first template pass only");
                for (let n = 0; n < this.queries.length; n++) this.queries[n].elementStart(e, t)
            }
            elementEnd(e) {
                for (let t = 0; t < this.queries.length; t++) this.queries[t].elementEnd(e)
            }
            embeddedTView(e) {
                let t = null;
                for (let n = 0; n < this.length; n++) {
                    const r = null !== t ? t.length : 0,
                        o = this.getByIndex(n).embeddedTView(e, r);
                    o && (o.indexInDeclarationView = n, null !== t ? t.push(o) : t = [o])
                }
                return null !== t ? new pm(t) : null
            }
            template(e, t) {
                ngDevMode && an(e, "Queries should collect results on the first template pass only");
                for (let n = 0; n < this.queries.length; n++) this.queries[n].template(e, t)
            }
            getByIndex(e) {
                return ngDevMode && Ze(this.queries, e), this.queries[e]
            }
            get length() {
                return this.queries.length
            }
            track(e) {
                this.queries.push(e)
            }
        }
        class gm {
            constructor(e, t = -1) {
                this.metadata = e, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = t
            }
            elementStart(e, t) {
                this.isApplyingToNode(t) && this.matchTNode(e, t)
            }
            elementEnd(e) {
                this._declarationNodeIndex === e.index && (this._appliesToNextNode = !1)
            }
            template(e, t) {
                this.elementStart(e, t)
            }
            embeddedTView(e, t) {
                return this.isApplyingToNode(e) ? (this.crossesNgTemplate = !0, this.addMatch(-e.index, t), new gm(this.metadata)) : null
            }
            isApplyingToNode(e) {
                if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
                    const t = this._declarationNodeIndex;
                    let n = e.parent;
                    for (; null !== n && 8 & n.type && n.index !== t;) n = n.parent;
                    return t === (null !== n ? n.index : -1)
                }
                return this._appliesToNextNode
            }
            matchTNode(e, t) {
                const n = this.metadata.predicate;
                if (Array.isArray(n))
                    for (let r = 0; r < n.length; r++) {
                        const o = n[r];
                        this.matchTNodeWithReadOption(e, t, mm(t, o)), this.matchTNodeWithReadOption(e, t, so(t, e, o, !1, !1))
                    } else n === tm ? 4 & t.type && this.matchTNodeWithReadOption(e, t, -1) : this.matchTNodeWithReadOption(e, t, so(t, e, n, !1, !1))
            }
            matchTNodeWithReadOption(e, t, n) {
                if (null !== n) {
                    const r = this.metadata.read;
                    if (null !== r)
                        if (r === cg || r === im || r === tm && 4 & t.type) this.addMatch(t.index, -2);
                        else {
                            const n = so(t, e, r, !1, !1);
                            null !== n && this.addMatch(t.index, n)
                        }
                    else this.addMatch(t.index, n)
                }
            }
            addMatch(e, t) {
                null === this.matches ? this.matches = [e, t] : this.matches.push(e, t)
            }
        }

        function mm(e, t) {
            const n = e.localNames;
            if (null !== n)
                for (let e = 0; e < n.length; e += 2)
                    if (n[e] === t) return n[e + 1];
            return null
        }

        function vm(e, t, n, r) {
            return -1 === n ? function (e, t) {
                return 11 & e.type ? lg(e, t) : 4 & e.type ? om(e, t) : null
            }(t, e) : -2 === n ? function (e, t, n) {
                if (n === cg) return lg(t, e);
                if (n === tm) return om(t, e);
                if (n === im) return ngDevMode && Fr(t, 15), um(t, e);
                ngDevMode && qe(`Special token to read should be one of ElementRef, TemplateRef or ViewContainerRef but got ${be(n)}.`)
            }(e, t, r) : ao(e, e[1], n, t)
        }

        function ym(e, t, n, r) {
            const o = t[19].queries[r];
            if (null === o.matches) {
                const r = e.data,
                    i = n.matches,
                    s = [];
                for (let e = 0; e < i.length; e += 2) {
                    const o = i[e];
                    if (o < 0) s.push(null);
                    else {
                        ngDevMode && Ze(r, o);
                        const a = r[o];
                        s.push(vm(t, a, i[e + 1], n.metadata.read))
                    }
                }
                o.matches = s
            }
            return o.matches
        }

        function wm(e, t, n, r) {
            const o = e.queries.getByIndex(n),
                i = o.matches;
            if (null !== i) {
                const s = ym(e, t, o, n);
                for (let e = 0; e < i.length; e += 2) {
                    const n = i[e];
                    if (n > 0) r.push(s[e / 2]);
                    else {
                        const o = i[e + 1],
                            s = t[-n];
                        ngDevMode && rn(s);
                        for (let e = zt; e < s.length; e++) {
                            const t = s[e];
                            t[17] === t[3] && wm(t[1], t, o, r)
                        }
                        if (null !== s[9]) {
                            const e = s[9];
                            for (let t = 0; t < e.length; t++) {
                                const n = e[t];
                                wm(n[1], n, o, r)
                            }
                        }
                    }
                }
            }
            return r
        }

        function bm(e) {
            const t = Wn(),
                n = qn(),
                r = dr();
            fr(r + 1);
            const o = Em(n, r);
            if (e.dirty && jn(t) === (2 == (2 & o.metadata.flags))) {
                if (null === o.matches) e.reset([]);
                else {
                    const i = o.crossesNgTemplate ? wm(n, t, r, []) : ym(n, t, o, r);
                    e.reset(i, ug), e.notifyOnChanges()
                }
                return !0
            }
            return !1
        }

        function _m(e, t, n) {
            ngDevMode && Ne(t, "Expecting flags");
            const r = qn();
            r.firstCreatePass && (Cm(r, new hm(e, t, n), -1), 2 == (2 & t) && (r.staticViewQueries = !0)), xm(r, Wn(), t)
        }

        function Mm(e, t, n, r) {
            ngDevMode && Ne(n, "Expecting flags");
            const o = qn();
            if (o.firstCreatePass) {
                const i = Zn();
                Cm(o, new hm(t, n, r), i.index),
                    function (e, t) {
                        const n = e.contentQueries || (e.contentQueries = []),
                            r = n.length ? n[n.length - 1] : -1;
                        t !== r && n.push(e.queries.length - 1, t)
                    }(o, e), 2 == (2 & n) && (o.staticContentQueries = !0)
            }
            xm(o, Wn(), n)
        }

        function Dm() {
            return e = Wn(), t = dr(), ngDevMode && We(e[19], "LQueries should be defined when trying to load a query"), ngDevMode && Ze(e[19].queries, t), e[19].queries[t].queryList;
            var e, t
        }

        function xm(e, t, n) {
            const r = new em(4 == (4 & n));
            Kl(e, t, r, r.destroy), null === t[19] && (t[19] = new fm), t[19].queries.push(new dm(r))
        }

        function Cm(e, t, n) {
            null === e.queries && (e.queries = new pm), e.queries.track(new gm(t, n))
        }

        function Em(e, t) {
            return ngDevMode && We(e.queries, "TQueries must be defined to retrieve a TQuery"), e.queries.getByIndex(t)
        }

        function Im(e, t) {
            return om(e, t)
        }
        const Tm = {
            ÉµÉµattribute: Fu,
            ÉµÉµattributeInterpolate1: Qu,
            ÉµÉµattributeInterpolate2: Zu,
            ÉµÉµattributeInterpolate3: Gu,
            ÉµÉµattributeInterpolate4: Ju,
            ÉµÉµattributeInterpolate5: Ku,
            ÉµÉµattributeInterpolate6: Yu,
            ÉµÉµattributeInterpolate7: Xu,
            ÉµÉµattributeInterpolate8: ed,
            ÉµÉµattributeInterpolateV: td,
            ÉµÉµdefineComponent: Tt,
            ÉµÉµdefineDirective: jt,
            ÉµÉµdefineInjectable: Je,
            ÉµÉµdefineInjector: Ke,
            ÉµÉµdefineNgModule: Nt,
            ÉµÉµdefinePipe: Ft,
            ÉµÉµdirectiveInject: Od,
            ÉµÉµgetInheritedFactory: fo,
            ÉµÉµinject: Xo,
            ÉµÉµinjectAttribute: po,
            ÉµÉµinvalidFactory: Nd,
            ÉµÉµinvalidFactoryDep: ei,
            ÉµÉµtemplateRefExtractor: Im,
            ÉµÉµNgOnChangesFeature: gn,
            ÉµÉµProvidersFeature: rg,
            ÉµÉµCopyDefinitionFeature: Cu,
            ÉµÉµInheritDefinitionFeature: yu,
            ÉµÉµnextContext: Kd,
            ÉµÉµnamespaceHTML: Ir,
            ÉµÉµnamespaceMathML: Er,
            ÉµÉµnamespaceSVG: Cr,
            ÉµÉµenableBindings: Un,
            ÉµÉµdisableBindings: zn,
            ÉµÉµelementStart: Fd,
            ÉµÉµelementEnd: Vd,
            ÉµÉµelement: Ld,
            ÉµÉµelementContainerStart: Hd,
            ÉµÉµelementContainerEnd: $d,
            ÉµÉµelementContainer: Bd,
            ÉµÉµpureFunction0: Tg,
            ÉµÉµpureFunction1: kg,
            ÉµÉµpureFunction2: Sg,
            ÉµÉµpureFunction3: Ag,
            ÉµÉµpureFunction4: Og,
            ÉµÉµpureFunction5: Ng,
            ÉµÉµpureFunction6: Pg,
            ÉµÉµpureFunction7: Rg,
            ÉµÉµpureFunction8: jg,
            ÉµÉµpureFunctionV: Fg,
            ÉµÉµgetCurrentView: Ud,
            ÉµÉµrestoreView: Qn,
            ÉµÉµlistener: qd,
            ÉµÉµprojection: ef,
            ÉµÉµsyntheticHostProperty: Ih,
            ÉµÉµsyntheticHostListener: Qd,
            ÉµÉµpipeBind1: Wg,
            ÉµÉµpipeBind2: qg,
            ÉµÉµpipeBind3: Qg,
            ÉµÉµpipeBind4: Zg,
            ÉµÉµpipeBindV: Gg,
            ÉµÉµprojectionDef: Xd,
            ÉµÉµhostProperty: Eh,
            ÉµÉµproperty: Pd,
            ÉµÉµpropertyInterpolate: tf,
            ÉµÉµpropertyInterpolate1: nf,
            ÉµÉµpropertyInterpolate2: rf,
            ÉµÉµpropertyInterpolate3: of ,
            ÉµÉµpropertyInterpolate4: sf,
            ÉµÉµpropertyInterpolate5: af,
            ÉµÉµpropertyInterpolate6: lf,
            ÉµÉµpropertyInterpolate7: cf,
            ÉµÉµpropertyInterpolate8: uf,
            ÉµÉµpropertyInterpolateV: df,
            ÉµÉµpipe: zg,
            ÉµÉµqueryRefresh: bm,
            ÉµÉµviewQuery: _m,
            ÉµÉµloadQuery: Dm,
            ÉµÉµcontentQuery: Mm,
            ÉµÉµreference: rd,
            ÉµÉµclassMap: kf,
            ÉµÉµclassMapInterpolate1: Xf,
            ÉµÉµclassMapInterpolate2: eh,
            ÉµÉµclassMapInterpolate3: th,
            ÉµÉµclassMapInterpolate4: nh,
            ÉµÉµclassMapInterpolate5: rh,
            ÉµÉµclassMapInterpolate6: oh,
            ÉµÉµclassMapInterpolate7: ih,
            ÉµÉµclassMapInterpolate8: sh,
            ÉµÉµclassMapInterpolateV: ah,
            ÉµÉµstyleMap: If,
            ÉµÉµstyleMapInterpolate1: lh,
            ÉµÉµstyleMapInterpolate2: ch,
            ÉµÉµstyleMapInterpolate3: uh,
            ÉµÉµstyleMapInterpolate4: dh,
            ÉµÉµstyleMapInterpolate5: fh,
            ÉµÉµstyleMapInterpolate6: hh,
            ÉµÉµstyleMapInterpolate7: ph,
            ÉµÉµstyleMapInterpolate8: gh,
            ÉµÉµstyleMapInterpolateV: mh,
            ÉµÉµstyleProp: Cf,
            ÉµÉµstylePropInterpolate1: vh,
            ÉµÉµstylePropInterpolate2: yh,
            ÉµÉµstylePropInterpolate3: wh,
            ÉµÉµstylePropInterpolate4: bh,
            ÉµÉµstylePropInterpolate5: _h,
            ÉµÉµstylePropInterpolate6: Mh,
            ÉµÉµstylePropInterpolate7: Dh,
            ÉµÉµstylePropInterpolate8: xh,
            ÉµÉµstylePropInterpolateV: Ch,
            ÉµÉµclassProp: Ef,
            ÉµÉµadvance: Ba,
            ÉµÉµtemplate: nd,
            ÉµÉµtext: Bf,
            ÉµÉµtextInterpolate: Uf,
            ÉµÉµtextInterpolate1: zf,
            ÉµÉµtextInterpolate2: Wf,
            ÉµÉµtextInterpolate3: qf,
            ÉµÉµtextInterpolate4: Qf,
            ÉµÉµtextInterpolate5: Zf,
            ÉµÉµtextInterpolate6: Gf,
            ÉµÉµtextInterpolate7: Jf,
            ÉµÉµtextInterpolate8: Kf,
            ÉµÉµtextInterpolateV: Yf,
            ÉµÉµi18n: Wp,
            ÉµÉµi18nAttributes: qp,
            ÉµÉµi18nExp: Qp,
            ÉµÉµi18nStart: Up,
            ÉµÉµi18nEnd: zp,
            ÉµÉµi18nApply: Zp,
            ÉµÉµi18nPostprocess: Gp,
            ÉµÉµresolveWindow: js,
            ÉµÉµresolveDocument: Fs,
            ÉµÉµresolveBody: Vs,
            ÉµÉµsetComponentScope: kt,
            ÉµÉµsetNgModuleScope: Pt,
            ÉµÉµsanitizeHtml: ss,
            ÉµÉµsanitizeStyle: as,
            ÉµÉµsanitizeResourceUrl: cs,
            ÉµÉµsanitizeScript: us,
            ÉµÉµsanitizeUrl: ls,
            ÉµÉµsanitizeUrlOrResourceUrl: hs,
            ÉµÉµtrustConstantHtml: ds,
            ÉµÉµtrustConstantResourceUrl: fs,
            forwardRef: De,
            resolveForwardRef: xe
        };
        let km = null;
        const Sm = [];
        let Am = !1;

        function Om(e) {
            return Array.isArray(e) ? e.every(Om) : !!xe(e)
        }

        function Nm(e, t = {}) {
            ! function (e, t, n = !1) {
                ngDevMode && We(e, "Required value moduleType"), ngDevMode && We(t, "Required value ngModule");
                const r = So(t.declarations || bt);
                let o = null;
                Object.defineProperty(e, xt, {
                    configurable: !0,
                    get: () => {
                        if (null === o) {
                            if (ngDevMode && t.imports && t.imports.indexOf(e) > -1) throw new Error(`'${ke(e)}' module can't import itself`);
                            const n = Io({
                                usage: 0,
                                kind: "NgModule",
                                type: e
                            });
                            o = n.compileNgModule(Tm, `ng:///${e.name}/Éµmod.js`, {
                                type: e,
                                bootstrap: So(t.bootstrap || bt).map(xe),
                                declarations: r.map(xe),
                                imports: So(t.imports || bt).map(xe).map(Um),
                                exports: So(t.exports || bt).map(xe).map(Um),
                                schemas: t.schemas ? So(t.schemas) : null,
                                id: t.id || null
                            }), o.schemas || (o.schemas = [])
                        }
                        return o
                    }
                });
                let i = null;
                Object.defineProperty(e, Ct, {
                    get: () => {
                        if (null === i) {
                            const t = Io({
                                usage: 0,
                                kind: "NgModule",
                                type: e
                            });
                            i = t.compileFactory(Tm, `ng:///${e.name}/Éµfac.js`, {
                                name: e.name,
                                type: e,
                                deps: fi(e),
                                target: t.FactoryTarget.NgModule,
                                typeArgumentCount: 0
                            })
                        }
                        return i
                    },
                    configurable: !!ngDevMode
                });
                let s = null;
                Object.defineProperty(e, nt, {
                    get: () => {
                        if (null === s) {
                            ngDevMode && Pm(e, n);
                            const r = {
                                    name: e.name,
                                    type: e,
                                    providers: t.providers || bt,
                                    imports: [(t.imports || bt).map(xe), (t.exports || bt).map(xe)]
                                },
                                o = Io({
                                    usage: 0,
                                    kind: "NgModule",
                                    type: e
                                });
                            s = o.compileInjector(Tm, `ng:///${e.name}/Éµinj.js`, r)
                        }
                        return s
                    },
                    configurable: !!ngDevMode
                })
            }(e, t),
            function (e, t) {
                Sm.push({
                    moduleType: e,
                    ngModule: t
                })
            }(e, t)
        }

        function Pm(e, t, n) {
            if (Vm.get(e)) return;
            let r;
            if (Vm.set(e, !0), e = xe(e), n) {
                if (r = $t(e), !r) throw new Error(`Unexpected value '${e.name}' imported by the module '${n.name}'. Please add an @NgModule annotation.`)
            } else r = $t(e, !0);
            const o = [],
                i = Hs(r.declarations),
                s = Hs(r.imports);
            So(s).map(Rm).forEach((t => {
                d(t, e), Pm(t, !1, e)
            }));
            const a = Hs(r.exports);
            i.forEach((function (t) {
                t = xe(t);
                Vt(t) || Lt(t) || Ht(t) || o.push(`Unexpected value '${ke(t)}' declared by the module '${ke(e)}'. Please add a @Pipe/@Directive/@Component annotation.`)
            })), i.forEach((function (e) {
                const t = Lt(e = xe(e));
                !Vt(e) && t && 0 == t.selectors.length && o.push(`Directive ${ke(e)} has no selector, please add it!`)
            }));
            const l = [...i.map(xe), ...So(s.map(Lm)).map(xe)];
            a.forEach((function (t) {
                const n = (Vt(t = xe(t)) ? "component" : Lt(t) && "directive") || Ht(t) && "pipe";
                n && -1 === l.lastIndexOf(t) && o.push(`Can't export ${n} ${ke(t)} from ${ke(e)} as it was neither declared nor imported!`)
            })), i.forEach((n => function (t, n) {
                t = xe(t);
                const r = Fm.get(t);
                if (r && r !== e) {
                    if (!n) {
                        const n = [r, e].map(ke).sort();
                        o.push(`Type ${ke(t)} is part of the declarations of 2 modules: ${n[0]} and ${n[1]}! Please consider moving ${ke(t)} to a higher module that imports ${n[0]} and ${n[1]}. You can also create a new NgModule that exports and includes ${ke(t)} then import that NgModule in ${n[0]} and ${n[1]}.`)
                    }
                } else Fm.set(t, e)
            }(n, t))), i.forEach((function (e) {
                if (Vt(e = xe(e))) {
                    const t = jm(e, "Component");
                    t && t.entryComponents && Ao(t.entryComponents, u)
                }
            }));
            const c = jm(e, "NgModule");
            if (c && (c.imports && So(c.imports).map(Rm).forEach((t => {
                    d(t, e), Pm(t, !1, e)
                })), c.bootstrap && Ao(c.bootstrap, (function (e) {
                    Vt(e = xe(e)) || o.push(`${ke(e)} cannot be used as an entry component.`)
                })), c.bootstrap && Ao(c.bootstrap, u), c.entryComponents && Ao(c.entryComponents, u)), o.length) throw new Error(o.join("\n"));

            function u(e) {
                e = xe(e);
                Fm.get(e) || o.push(`Component ${ke(e)} is not part of any NgModule or the module has not been imported into your module.`)
            }

            function d(e, t) {
                if (Vt(e = xe(e)) || Lt(e)) throw new Error(`Unexpected directive '${e.name}' imported by the module '${t.name}'. Please add an @NgModule annotation.`);
                if (Ht(e)) throw new Error(`Unexpected pipe '${e.name}' imported by the module '${t.name}'. Please add an @NgModule annotation.`)
            }
        }

        function Rm(e) {
            return (e = xe(e)).ngModule || e
        }

        function jm(e, t) {
            let n = null;
            return r(e.__annotations__), r(e.decorators), n;

            function r(e) {
                e && e.forEach(o)
            }

            function o(e) {
                if (!n) {
                    if (Object.getPrototypeOf(e).ngMetadataName == t) n = e;
                    else if (e.type) {
                        Object.getPrototypeOf(e.type).ngMetadataName == t && (n = e.args[0])
                    }
                }
            }
        }
        let Fm = new WeakMap,
            Vm = new WeakMap;

        function Lm(e) {
            return [...So(Hs($t(e = xe(e), !0).exports).map((e => $t(e) ? (Pm(e, !1), Lm(e)) : e)))]
        }

        function Hm(e, t) {
            const n = So(t.declarations || bt),
                r = Bm(e);
            n.forEach((t => {
                if (t.hasOwnProperty(_t)) {
                    $m(Vt(t), r)
                } else t.hasOwnProperty(Mt) || t.hasOwnProperty(Dt) || (t.ngSelectorScope = e)
            }))
        }

        function $m(e, t) {
            e.directiveDefs = () => Array.from(t.compilation.directives).map((e => e.hasOwnProperty(_t) ? Vt(e) : Lt(e))).filter((e => !!e)), e.pipeDefs = () => Array.from(t.compilation.pipes).map((e => Ht(e))), e.schemas = t.schemas, e.tView = null
        }

        function Bm(e) {
            if (!zm(e)) throw new Error(`${e.name} does not have a module def (Éµmod property)`);
            const t = $t(e);
            if (null !== t.transitiveCompileScopes) return t.transitiveCompileScopes;
            const n = {
                schemas: t.schemas || null,
                compilation: {
                    directives: new Set,
                    pipes: new Set
                },
                exported: {
                    directives: new Set,
                    pipes: new Set
                }
            };
            return Hs(t.imports).forEach((e => {
                const t = e;
                if (!zm(t)) throw new Error(`Importing ${t.name} which does not have a Éµmod property`);
                const r = Bm(t);
                r.exported.directives.forEach((e => n.compilation.directives.add(e))), r.exported.pipes.forEach((e => n.compilation.pipes.add(e)))
            })), Hs(t.declarations).forEach((e => {
                Ht(e) ? n.compilation.pipes.add(e) : n.compilation.directives.add(e)
            })), Hs(t.exports).forEach((e => {
                const t = e;
                if (zm(t)) {
                    const e = Bm(t);
                    e.exported.directives.forEach((e => {
                        n.compilation.directives.add(e), n.exported.directives.add(e)
                    })), e.exported.pipes.forEach((e => {
                        n.compilation.pipes.add(e), n.exported.pipes.add(e)
                    }))
                } else Ht(t) ? n.exported.pipes.add(t) : n.exported.directives.add(t)
            })), t.transitiveCompileScopes = n, n
        }

        function Um(e) {
            return function (e) {
                return void 0 !== e.ngModule
            }(e) ? e.ngModule : e
        }

        function zm(e) {
            return !!$t(e)
        }
        let Wm = 0;

        function qm(e, t) {
            ("undefined" == typeof ngDevMode || ngDevMode) && yt();
            let n = null;
            ! function (e, t) {
                vi(t) && (gi.set(e, t), mi.add(e))
            }(e, t), Gm(e, t), Object.defineProperty(e, _t, {
                get: () => {
                    if (null === n) {
                        const r = Io({
                            usage: 0,
                            kind: "component",
                            type: e
                        });
                        if (vi(t)) {
                            const n = [`Component '${e.name}' is not resolved:`];
                            throw t.templateUrl && n.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && n.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), n.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(n.join("\n"))
                        }
                        const o = km;
                        let i = t.preserveWhitespaces;
                        void 0 === i && (i = null !== o && void 0 !== o.preserveWhitespaces && o.preserveWhitespaces);
                        let s = t.encapsulation;
                        void 0 === s && (s = null !== o && void 0 !== o.defaultEncapsulation ? o.defaultEncapsulation : ft.Emulated);
                        const a = t.templateUrl || `ng:///${e.name}/template.html`,
                            l = {
                                ...Km(e, t),
                                typeSourceSpan: r.createParseSourceSpan("Component", e.name, a),
                                template: t.template || "",
                                preserveWhitespaces: i,
                                styles: t.styles || bt,
                                animations: t.animations,
                                directives: [],
                                changeDetection: t.changeDetection,
                                pipes: new Map,
                                encapsulation: s,
                                interpolation: t.interpolation,
                                viewProviders: t.viewProviders || null
                            };
                        Wm++;
                        try {
                            l.usesInheritance && Ym(e), n = r.compileComponent(Tm, a, l)
                        } finally {
                            Wm--
                        }
                        if (0 === Wm && function () {
                                if (!Am) {
                                    Am = !0;
                                    try {
                                        for (let e = Sm.length - 1; e >= 0; e--) {
                                            const {
                                                moduleType: t,
                                                ngModule: n
                                            } = Sm[e];
                                            n.declarations && n.declarations.every(Om) && (Sm.splice(e, 1), Hm(t, n))
                                        }
                                    } finally {
                                        Am = !1
                                    }
                                }
                            }(), void 0 !== e.ngSelectorScope) {
                            const t = Bm(e.ngSelectorScope);
                            $m(n, t)
                        }
                    }
                    return n
                },
                configurable: !!ngDevMode
            })
        }

        function Qm(e, t) {
            let n = null;
            Gm(e, t || {}), Object.defineProperty(e, Mt, {
                get: () => {
                    if (null === n) {
                        const r = Zm(e, t || {}),
                            o = Io({
                                usage: 0,
                                kind: "directive",
                                type: e
                            });
                        n = o.compileDirective(Tm, r.sourceMapUrl, r.metadata)
                    }
                    return n
                },
                configurable: !!ngDevMode
            })
        }

        function Zm(e, t) {
            const n = e && e.name,
                r = `ng:///${n}/Éµdir.js`,
                o = Io({
                    usage: 0,
                    kind: "directive",
                    type: e
                }),
                i = Km(e, t);
            return i.typeSourceSpan = o.createParseSourceSpan("Directive", n, r), i.usesInheritance && Ym(e), {
                metadata: i,
                sourceMapUrl: r
            }
        }

        function Gm(e, t) {
            let n = null;
            Object.defineProperty(e, Ct, {
                get: () => {
                    if (null === n) {
                        const r = Zm(e, t),
                            o = Io({
                                usage: 0,
                                kind: "directive",
                                type: e
                            });
                        n = o.compileFactory(Tm, `ng:///${e.name}/Éµfac.js`, {
                            name: r.metadata.name,
                            type: r.metadata.type,
                            typeArgumentCount: 0,
                            deps: fi(e),
                            target: o.FactoryTarget.Directive
                        })
                    }
                    return n
                },
                configurable: !!ngDevMode
            })
        }

        function Jm(e) {
            return Object.getPrototypeOf(e.prototype) === Object.prototype
        }

        function Km(e, t) {
            const n = di(),
                r = n.ownPropMetadata(e);
            return {
                name: e.name,
                type: e,
                selector: void 0 !== t.selector ? t.selector : null,
                host: t.host || wt,
                propMetadata: r,
                inputs: t.inputs || bt,
                outputs: t.outputs || bt,
                queries: ev(e, r, tv),
                lifecycle: {
                    usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges")
                },
                typeSourceSpan: null,
                usesInheritance: !Jm(e),
                exportAs: (o = t.exportAs, void 0 === o ? null : ov(o)),
                providers: t.providers || null,
                viewQueries: ev(e, r, nv)
            };
            var o
        }

        function Ym(e) {
            const t = Object.prototype;
            let n = Object.getPrototypeOf(e.prototype).constructor;
            for (; n && n !== t;) Lt(n) || Vt(n) || !sv(n) || Qm(n, null), n = Object.getPrototypeOf(n)
        }

        function Xm(e, t) {
            return {
                propertyName: e,
                predicate: (n = t.selector, "string" == typeof n ? ov(n) : xe(n)),
                descendants: t.descendants,
                first: t.first,
                read: t.read ? t.read : null,
                static: !!t.static,
                emitDistinctChangesOnly: !!t.emitDistinctChangesOnly
            };
            var n
        }

        function ev(e, t, n) {
            const r = [];
            for (const o in t)
                if (t.hasOwnProperty(o)) {
                    const i = t[o];
                    i.forEach((t => {
                        if (n(t)) {
                            if (!t.selector) throw new Error(`Can't construct a query for the property "${o}" of "${ke(e)}" since the query selector wasn't defined.`);
                            if (i.some(rv)) throw new Error("Cannot combine @Input decorators with query decorators");
                            r.push(Xm(o, t))
                        }
                    }))
                } return r
        }

        function tv(e) {
            const t = e.ngMetadataName;
            return "ContentChild" === t || "ContentChildren" === t
        }

        function nv(e) {
            const t = e.ngMetadataName;
            return "ViewChild" === t || "ViewChildren" === t
        }

        function rv(e) {
            return "Input" === e.ngMetadataName
        }

        function ov(e) {
            return e.split(",").map((e => e.trim()))
        }
        const iv = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];

        function sv(e) {
            const t = di();
            if (iv.some((n => t.hasLifecycleHook(e, n)))) return !0;
            const n = t.propMetadata(e);
            for (const e in n) {
                const t = n[e];
                for (let e = 0; e < t.length; e++) {
                    const n = t[e],
                        r = n.ngMetadataName;
                    if (rv(n) || tv(n) || nv(n) || "Output" === r || "HostBinding" === r || "HostListener" === r) return !0
                }
            }
            return !1
        }

        function av(e, t) {
            return {
                type: e,
                name: e.name,
                pipeName: t.name,
                pure: void 0 === t.pure || t.pure
            }
        }
        const lv = yo("Directive", ((e = {}) => e), void 0, void 0, ((e, t) => Qm(e, t))),
            cv = (yo("Component", ((e = {}) => ({
                changeDetection: ut.Default,
                ...e
            })), lv, void 0, ((e, t) => qm(e, t))), yo("Pipe", (e => ({
                pure: !0,
                ...e
            })), void 0, void 0, ((e, t) => function (e, t) {
                let n = null,
                    r = null;
                Object.defineProperty(e, Ct, {
                    get: () => {
                        if (null === r) {
                            const n = av(e, t),
                                o = Io({
                                    usage: 0,
                                    kind: "pipe",
                                    type: n.type
                                });
                            r = o.compileFactory(Tm, `ng:///${n.name}/Éµfac.js`, {
                                name: n.name,
                                type: n.type,
                                typeArgumentCount: 0,
                                deps: fi(e),
                                target: o.FactoryTarget.Pipe
                            })
                        }
                        return r
                    },
                    configurable: !!ngDevMode
                }), Object.defineProperty(e, Dt, {
                    get: () => {
                        if (null === n) {
                            const r = av(e, t),
                                o = Io({
                                    usage: 0,
                                    kind: "pipe",
                                    type: r.type
                                });
                            n = o.compilePipe(Tm, `ng:///${r.name}/Éµpipe.js`, r)
                        }
                        return n
                    },
                    configurable: !!ngDevMode
                })
            }(e, t))), _o("Input", (e => ({
                bindingPropertyName: e
            }))), _o("Output", (e => ({
                bindingPropertyName: e
            }))), _o("HostBinding", (e => ({
                hostPropertyName: e
            }))), _o("HostListener", ((e, t) => ({
                eventName: e,
                args: t
            }))), yo("NgModule", (e => e), void 0, void 0, ((e, t) => Nm(e, t))));

        function uv(...e) {}
        const dv = new Do("Application Initializer");
        class fv {
            constructor(e) {
                this.appInits = e, this.resolve = uv, this.reject = uv, this.initialized = !1, this.done = !1, this.donePromise = new Promise(((e, t) => {
                    this.resolve = e, this.reject = t
                }))
            }
            runInitializers() {
                if (this.initialized) return;
                const e = [],
                    t = () => {
                        this.done = !0, this.resolve()
                    };
                if (this.appInits)
                    for (let t = 0; t < this.appInits.length; t++) {
                        const n = this.appInits[t]();
                        if (zd(n)) e.push(n);
                        else if (Wd(n)) {
                            const t = new Promise(((e, t) => {
                                n.subscribe({
                                    complete: e,
                                    error: t
                                })
                            }));
                            e.push(t)
                        }
                    }
                Promise.all(e).then((() => {
                    t()
                })).catch((e => {
                    this.reject(e)
                })), 0 === e.length && t(), this.initialized = !0
            }
        }
        fv.Éµfac = function (e) {
            return new(e || fv)(Xo(dv, 8))
        }, fv.Éµprov = Je({
            token: fv,
            factory: fv.Éµfac,
            providedIn: "root"
        }), ("undefined" == typeof ngDevMode || ngDevMode) && Mg(fv, [{
            type: cd,
            args: [{
                providedIn: "root"
            }]
        }], (function () {
            return [{
                type: void 0,
                decorators: [{
                    type: ii,
                    args: [dv]
                }, {
                    type: si
                }]
            }]
        }), null);

        function hv() {
            return `${pv()}${pv()}${pv()}`
        }
        new Do("AppId", {
            providedIn: "root",
            factory: hv
        });

        function pv() {
            return String.fromCharCode(97 + Math.floor(25 * Math.random()))
        }
        const gv = new Do("Platform Initializer"),
            mv = (new Do("Platform ID", {
                providedIn: "platform",
                factory: () => "unknown"
            }), new Do("appBootstrapListener"));
        new Do("Application Packages Root URL");
        class vv {
            log(e) {
                console.log(e)
            }
            warn(e) {
                console.warn(e)
            }
        }
        vv.Éµfac = function (e) {
            return new(e || vv)
        }, vv.Éµprov = Je({
            token: vv,
            factory: vv.Éµfac,
            providedIn: "platform"
        }), ("undefined" == typeof ngDevMode || ngDevMode) && Mg(vv, [{
            type: cd,
            args: [{
                providedIn: "platform"
            }]
        }], null, null);
        const yv = new Do("LocaleId", {
            providedIn: "root",
            factory: () => ti(yv, it.Optional | it.SkipSelf) || ("undefined" != typeof ngI18nClosureMode && ngI18nClosureMode && "undefined" != typeof goog && "en" !== goog.LOCALE ? goog.LOCALE : "undefined" != typeof $localize && $localize.locale || jh)
        });
        new Do("DefaultCurrencyCode", {
            providedIn: "root",
            factory: () => "USD"
        }), new Do("Translations"), new Do("TranslationsFormat");
        var wv;
        ! function (e) {
            e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore"
        }(wv || (wv = {}));
        class bv {
            constructor(e, t) {
                this.ngModuleFactory = e, this.componentFactories = t
            }
        }
        class _v {
            compileModuleSync(e) {
                return new Ig(e)
            }
            compileModuleAsync(e) {
                return Promise.resolve(this.compileModuleSync(e))
            }
            compileModuleAndAllComponentsSync(e) {
                const t = this.compileModuleSync(e),
                    n = Hs($t(e).declarations).reduce(((e, t) => {
                        const n = Vt(t);
                        return n && e.push(new bg(n)), e
                    }), []);
                return new bv(t, n)
            }
            compileModuleAndAllComponentsAsync(e) {
                return Promise.resolve(this.compileModuleAndAllComponentsSync(e))
            }
            clearCache() {}
            clearCacheFor(e) {}
            getModuleId(e) {}
        }
        _v.Éµfac = function (e) {
            return new(e || _v)
        }, _v.Éµprov = Je({
            token: _v,
            factory: _v.Éµfac,
            providedIn: "root"
        }), ("undefined" == typeof ngDevMode || ngDevMode) && Mg(_v, [{
            type: cd,
            args: [{
                providedIn: "root"
            }]
        }], null, null);
        const Mv = new Do("compilerOptions");
        const Dv = Promise.resolve(0);

        function xv(e) {
            "undefined" == typeof Zone ? Dv.then((() => {
                e && e.apply(null, null)
            })) : Zone.current.scheduleMicroTask("scheduleMicrotask", e)
        }
        class Cv {
            constructor({
                enableLongStackTrace: e = !1,
                shouldCoalesceEventChangeDetection: t = !1,
                shouldCoalesceRunChangeDetection: n = !1
            }) {
                if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new Yg(!1), this.onMicrotaskEmpty = new Yg(!1), this.onStable = new Yg(!1), this.onError = new Yg(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                Zone.assertZonePatched();
                const r = this;
                r._nesting = 0, r._outer = r._inner = Zone.current, Zone.TaskTrackingZoneSpec && (r._inner = r._inner.fork(new Zone.TaskTrackingZoneSpec)), e && Zone.longStackTraceZoneSpec && (r._inner = r._inner.fork(Zone.longStackTraceZoneSpec)), r.shouldCoalesceEventChangeDetection = !n && t, r.shouldCoalesceRunChangeDetection = n, r.lastRequestAnimationFrameId = -1, r.nativeRequestAnimationFrame = function () {
                        let e = vt.requestAnimationFrame,
                            t = vt.cancelAnimationFrame;
                        if ("undefined" != typeof Zone && e && t) {
                            const n = e[Zone.__symbol__("OriginalDelegate")];
                            n && (e = n);
                            const r = t[Zone.__symbol__("OriginalDelegate")];
                            r && (t = r)
                        }
                        return {
                            nativeRequestAnimationFrame: e,
                            nativeCancelAnimationFrame: t
                        }
                    }().nativeRequestAnimationFrame,
                    function (e) {
                        const t = () => {
                            ! function (e) {
                                if (e.isCheckStableRunning || -1 !== e.lastRequestAnimationFrameId) return;
                                e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(vt, (() => {
                                    e.fakeTopEventTask || (e.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", (() => {
                                        e.lastRequestAnimationFrameId = -1, Tv(e), e.isCheckStableRunning = !0, Iv(e), e.isCheckStableRunning = !1
                                    }), void 0, (() => {}), (() => {}))), e.fakeTopEventTask.invoke()
                                })), Tv(e)
                            }(e)
                        };
                        e._inner = e._inner.fork({
                            name: "angular",
                            properties: {
                                isAngularZone: !0
                            },
                            onInvokeTask: (n, r, o, i, s, a) => {
                                try {
                                    return kv(e), n.invokeTask(o, i, s, a)
                                } finally {
                                    (e.shouldCoalesceEventChangeDetection && "eventTask" === i.type || e.shouldCoalesceRunChangeDetection) && t(), Sv(e)
                                }
                            },
                            onInvoke: (n, r, o, i, s, a, l) => {
                                try {
                                    return kv(e), n.invoke(o, i, s, a, l)
                                } finally {
                                    e.shouldCoalesceRunChangeDetection && t(), Sv(e)
                                }
                            },
                            onHasTask: (t, n, r, o) => {
                                t.hasTask(r, o), n === r && ("microTask" == o.change ? (e._hasPendingMicrotasks = o.microTask, Tv(e), Iv(e)) : "macroTask" == o.change && (e.hasPendingMacrotasks = o.macroTask))
                            },
                            onHandleError: (t, n, r, o) => (t.handleError(r, o), e.runOutsideAngular((() => e.onError.emit(o))), !1)
                        })
                    }(r)
            }
            static isInAngularZone() {
                return "undefined" != typeof Zone && !0 === Zone.current.get("isAngularZone")
            }
            static assertInAngularZone() {
                if (!Cv.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
            }
            static assertNotInAngularZone() {
                if (Cv.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
            }
            run(e, t, n) {
                return this._inner.run(e, t, n)
            }
            runTask(e, t, n, r) {
                const o = this._inner,
                    i = o.scheduleEventTask("NgZoneEvent: " + r, e, Ev, uv, uv);
                try {
                    return o.runTask(i, t, n)
                } finally {
                    o.cancelTask(i)
                }
            }
            runGuarded(e, t, n) {
                return this._inner.runGuarded(e, t, n)
            }
            runOutsideAngular(e) {
                return this._outer.run(e)
            }
        }
        const Ev = {};

        function Iv(e) {
            if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try {
                e._nesting++, e.onMicrotaskEmpty.emit(null)
            } finally {
                if (e._nesting--, !e.hasPendingMicrotasks) try {
                    e.runOutsideAngular((() => e.onStable.emit(null)))
                } finally {
                    e.isStable = !0
                }
            }
        }

        function Tv(e) {
            e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && -1 !== e.lastRequestAnimationFrameId ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1
        }

        function kv(e) {
            e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null))
        }

        function Sv(e) {
            e._nesting--, Iv(e)
        }
        class Av {
            constructor() {
                this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Yg, this.onMicrotaskEmpty = new Yg, this.onStable = new Yg, this.onError = new Yg
            }
            run(e, t, n) {
                return e.apply(t, n)
            }
            runGuarded(e, t, n) {
                return e.apply(t, n)
            }
            runOutsideAngular(e) {
                return e()
            }
            runTask(e, t, n, r) {
                return e.apply(t, n)
            }
        }
        class Ov {
            constructor(e) {
                this._ngZone = e, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), e.run((() => {
                    this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                }))
            }
            _watchAngularEvents() {
                this._ngZone.onUnstable.subscribe({
                    next: () => {
                        this._didWork = !0, this._isZoneStable = !1
                    }
                }), this._ngZone.runOutsideAngular((() => {
                    this._ngZone.onStable.subscribe({
                        next: () => {
                            Cv.assertNotInAngularZone(), xv((() => {
                                this._isZoneStable = !0, this._runCallbacksIfReady()
                            }))
                        }
                    })
                }))
            }
            increasePendingRequestCount() {
                return this._pendingCount += 1, this._didWork = !0, this._pendingCount
            }
            decreasePendingRequestCount() {
                if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                return this._runCallbacksIfReady(), this._pendingCount
            }
            isStable() {
                return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
            }
            _runCallbacksIfReady() {
                if (this.isStable()) xv((() => {
                    for (; 0 !== this._callbacks.length;) {
                        let e = this._callbacks.pop();
                        clearTimeout(e.timeoutId), e.doneCb(this._didWork)
                    }
                    this._didWork = !1
                }));
                else {
                    let e = this.getPendingTasks();
                    this._callbacks = this._callbacks.filter((t => !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1))), this._didWork = !0
                }
            }
            getPendingTasks() {
                return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map((e => ({
                    source: e.source,
                    creationLocation: e.creationLocation,
                    data: e.data
                }))) : []
            }
            addCallback(e, t, n) {
                let r = -1;
                t && t > 0 && (r = setTimeout((() => {
                    this._callbacks = this._callbacks.filter((e => e.timeoutId !== r)), e(this._didWork, this.getPendingTasks())
                }), t)), this._callbacks.push({
                    doneCb: e,
                    timeoutId: r,
                    updateCb: n
                })
            }
            whenStable(e, t, n) {
                if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
                this.addCallback(e, t, n), this._runCallbacksIfReady()
            }
            getPendingRequestCount() {
                return this._pendingCount
            }
            findProviders(e, t, n) {
                return []
            }
        }
        Ov.Éµfac = function (e) {
            return new(e || Ov)(Xo(Cv))
        }, Ov.Éµprov = Je({
            token: Ov,
            factory: Ov.Éµfac
        }), ("undefined" == typeof ngDevMode || ngDevMode) && Mg(Ov, [{
            type: cd
        }], (function () {
            return [{
                type: Cv
            }]
        }), null);
        class Nv {
            constructor() {
                this._applications = new Map, Pv.addToWindow(this)
            }
            registerApplication(e, t) {
                this._applications.set(e, t)
            }
            unregisterApplication(e) {
                this._applications.delete(e)
            }
            unregisterAllApplications() {
                this._applications.clear()
            }
            getTestability(e) {
                return this._applications.get(e) || null
            }
            getAllTestabilities() {
                return Array.from(this._applications.values())
            }
            getAllRootElements() {
                return Array.from(this._applications.keys())
            }
            findTestabilityInTree(e, t = !0) {
                return Pv.findTestabilityInTree(this, e, t)
            }
        }
        Nv.Éµfac = function (e) {
            return new(e || Nv)
        }, Nv.Éµprov = Je({
            token: Nv,
            factory: Nv.Éµfac,
            providedIn: "platform"
        }), ("undefined" == typeof ngDevMode || ngDevMode) && Mg(Nv, [{
            type: cd,
            args: [{
                providedIn: "platform"
            }]
        }], (function () {
            return []
        }), null);
        let Pv = new class {
                addToWindow(e) {}
                findTestabilityInTree(e, t, n) {
                    return null
                }
            },
            Rv = null;
        const jv = new Do("AllowMultipleToken"),
            Fv = new Do("PlatformOnDestroy");

        function Vv(e, t, n) {
            ngDevMode && function (e, t = "Type passed in is not NgModuleType, it does not have 'Éµmod' property.") {
                $t(e) || qe(t)
            }(n);
            const r = new Ig(n);
            if ("undefined" != typeof ngJitMode && !ngJitMode) return Promise.resolve(r);
            const o = e.get(Mv, []).concat(t);
            if (function (e) {
                    if (null !== km) {
                        if (e.defaultEncapsulation !== km.defaultEncapsulation) return void(ngDevMode && console.error("Provided value for `defaultEncapsulation` can not be changed once it has been set."));
                        if (e.preserveWhitespaces !== km.preserveWhitespaces) return void(ngDevMode && console.error("Provided value for `preserveWhitespaces` can not be changed once it has been set."))
                    }
                    km = e
                }({
                    defaultEncapsulation: Wv(o.map((e => e.defaultEncapsulation))),
                    preserveWhitespaces: Wv(o.map((e => e.preserveWhitespaces)))
                }), 0 === gi.size) return Promise.resolve(r);
            const i = function (e) {
                const t = [];
                return e.forEach((e => e && t.push(...e))), t
            }(o.map((e => e.providers)));
            if (0 === i.length) return Promise.resolve(r);
            const s = Io({
                    usage: 0,
                    kind: "NgModule",
                    type: n
                }),
                a = Kc.create({
                    providers: i
                }).get(s.ResourceLoader);
            return pi((e => Promise.resolve(a.get(e)))).then((() => r))
        }

        function Lv(e) {
            if (Rv && !Rv.get(jv, !1)) {
                const e = "undefined" == typeof ngDevMode || ngDevMode ? "There can be only one platform. Destroy the previous one to create a new one." : "";
                throw new Ee(400, e)
            }
            ngDevMode && du(), e;
            const t = e.get($v),
                n = e.get(gv, null);
            return n && n.forEach((e => e())), t
        }

        function Hv() {
            return Rv ? .get($v) ? ? null
        }
        class $v {
            constructor(e) {
                this._injector = e, this._modules = [], this._destroyListeners = [], this._destroyed = !1
            }
            bootstrapModuleFactory(e, t) {
                const n = function (e, t) {
                        let n;
                        n = "noop" === e ? new Av : ("zone.js" === e ? void 0 : e) || new Cv({
                            enableLongStackTrace: "undefined" != typeof ngDevMode && !!ngDevMode,
                            shouldCoalesceEventChangeDetection: !!t ? .ngZoneEventCoalescing,
                            shouldCoalesceRunChangeDetection: !!t ? .ngZoneRunCoalescing
                        });
                        return n
                    }(t ? t.ngZone : void 0, {
                        ngZoneEventCoalescing: t && t.ngZoneEventCoalescing || !1,
                        ngZoneRunCoalescing: t && t.ngZoneRunCoalescing || !1
                    }),
                    r = [{
                        provide: Cv,
                        useValue: n
                    }];
                return n.run((() => {
                    const t = Kc.create({
                            providers: r,
                            parent: this.injector,
                            name: e.moduleType.name
                        }),
                        o = e.create(t),
                        i = o.injector.get(Is, null);
                    if (!i) {
                        const e = "undefined" == typeof ngDevMode || ngDevMode ? "No ErrorHandler. Is platform module (BrowserModule) included?" : "";
                        throw new Ee(402, e)
                    }
                    return n.runOutsideAngular((() => {
                            const e = n.onError.subscribe({
                                next: e => {
                                    i.handleError(e)
                                }
                            });
                            o.onDestroy((() => {
                                zv(this._modules, o), e.unsubscribe()
                            }))
                        })),
                        function (e, t, n) {
                            try {
                                const r = n();
                                return zd(r) ? r.catch((n => {
                                    throw t.runOutsideAngular((() => e.handleError(n))), n
                                })) : r
                            } catch (n) {
                                throw t.runOutsideAngular((() => e.handleError(n))), n
                            }
                        }(i, n, (() => {
                            const e = o.injector.get(fv);
                            return e.runInitializers(), e.donePromise.then((() => (function (e) {
                                We(e, "Expected localeId to be defined"), "string" == typeof e && (Hh = e.toLowerCase().replace(/_/g, "-"))
                            }(o.injector.get(yv, jh) || jh), this._moduleDoBootstrap(o), o)))
                        }))
                }))
            }
            bootstrapModule(e, t = []) {
                const n = Bv({}, t);
                return Vv(this.injector, n, e).then((e => this.bootstrapModuleFactory(e, n)))
            }
            _moduleDoBootstrap(e) {
                const t = e.injector.get(Uv);
                if (e._bootstrapComponents.length > 0) e._bootstrapComponents.forEach((e => t.bootstrap(e)));
                else {
                    if (!e.instance.ngDoBootstrap) {
                        const t = "undefined" == typeof ngDevMode || ngDevMode ? `The module ${be(e.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.` : "";
                        throw new Ee(403, t)
                    }
                    e.instance.ngDoBootstrap(t)
                }
                this._modules.push(e)
            }
            onDestroy(e) {
                this._destroyListeners.push(e)
            }
            get injector() {
                return this._injector
            }
            destroy() {
                if (this._destroyed) {
                    const e = "undefined" == typeof ngDevMode || ngDevMode ? "The platform has already been destroyed!" : "";
                    throw new Ee(404, e)
                }
                this._modules.slice().forEach((e => e.destroy())), this._destroyListeners.forEach((e => e()));
                this._injector.get(Fv, null) ? .(), this._destroyed = !0
            }
            get destroyed() {
                return this._destroyed
            }
        }

        function Bv(e, t) {
            return e = Array.isArray(t) ? t.reduce(Bv, e) : {
                ...e,
                ...t
            }
        }
        $v.Éµfac = function (e) {
            return new(e || $v)(Xo(Kc))
        }, $v.Éµprov = Je({
            token: $v,
            factory: $v.Éµfac,
            providedIn: "platform"
        }), ("undefined" == typeof ngDevMode || ngDevMode) && Mg($v, [{
            type: cd,
            args: [{
                providedIn: "platform"
            }]
        }], (function () {
            return [{
                type: Kc
            }]
        }), null);
        class Uv {
            constructor(e, t, n, r) {
                this._zone = e, this._injector = t, this._exceptionHandler = n, this._initStatus = r, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                    next: () => {
                        this._zone.run((() => {
                            this.tick()
                        }))
                    }
                });
                const o = new L((e => {
                        this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular((() => {
                            e.next(this._stable), e.complete()
                        }))
                    })),
                    i = new L((e => {
                        let t;
                        this._zone.runOutsideAngular((() => {
                            t = this._zone.onStable.subscribe((() => {
                                Cv.assertNotInAngularZone(), xv((() => {
                                    this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0, e.next(!0))
                                }))
                            }))
                        }));
                        const n = this._zone.onUnstable.subscribe((() => {
                            Cv.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular((() => {
                                e.next(!1)
                            })))
                        }));
                        return () => {
                            t.unsubscribe(), n.unsubscribe()
                        }
                    }));
                this.isStable = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = ce(e),
                        r = ue(e, 1 / 0),
                        o = e;
                    return o.length ? 1 === o.length ? ne(o[0]) : se(r)(ge(o, n)) : ae
                }(o, i.pipe(function (e) {
                    void 0 === e && (e = {});
                    var t = e.connector,
                        n = void 0 === t ? function () {
                            return new B
                        } : t,
                        r = e.resetOnError,
                        o = void 0 === r || r,
                        i = e.resetOnComplete,
                        s = void 0 === i || i,
                        a = e.resetOnRefCountZero,
                        l = void 0 === a || a;
                    return function (e) {
                        var t = null,
                            r = null,
                            i = null,
                            a = 0,
                            c = !1,
                            u = !1,
                            d = function () {
                                null == r || r.unsubscribe(), r = null
                            },
                            f = function () {
                                d(), t = i = null, c = u = !1
                            },
                            h = function () {
                                var e = t;
                                f(), null == e || e.unsubscribe()
                            };
                        return z((function (e, p) {
                            a++, u || c || d();
                            var g = i = null != i ? i : n();
                            p.add((function () {
                                0 != --a || u || c || (r = ve(h, l))
                            })), g.subscribe(p), t || (t = new O({
                                next: function (e) {
                                    return g.next(e)
                                },
                                error: function (e) {
                                    u = !0, d(), r = ve(f, o, e), g.error(e)
                                },
                                complete: function () {
                                    c = !0, d(), r = ve(f, s), g.complete()
                                }
                            }), ge(e).subscribe(t))
                        }))(e)
                    }
                }()))
            }
            bootstrap(e, t) {
                if (!this._initStatus.done) {
                    const e = "undefined" == typeof ngDevMode || ngDevMode ? "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module." : "";
                    throw new Ee(405, e)
                }
                let n;
                if (e instanceof og) n = e;
                else {
                    n = this._injector.get(ag).resolveComponentFactory(e)
                }
                this.componentTypes.push(n.componentType);
                const r = n.isBoundToModule ? void 0 : this._injector.get(Dg);
                const o = t || n.selector,
                    i = n.create(Kc.NULL, [], o, r),
                    s = i.location.nativeElement,
                    a = i.injector.get(Ov, null),
                    l = a && i.injector.get(Nv);
                if (a && l && l.registerApplication(s, a), i.onDestroy((() => {
                        this.detachView(i.hostView), zv(this.components, i), l && l.unregisterApplication(s)
                    })), this._loadComponent(i), "undefined" == typeof ngDevMode || ngDevMode) {
                    this._injector.get(vv).log("Angular is running in development mode. Call enableProdMode() to enable production mode.")
                }
                return i
            }
            tick() {
                if (this._runningTick) {
                    const e = "undefined" == typeof ngDevMode || ngDevMode ? "ApplicationRef.tick is called recursively" : "";
                    throw new Ee(101, e)
                }
                try {
                    this._runningTick = !0;
                    for (let e of this._views) e.detectChanges();
                    if ("undefined" == typeof ngDevMode || ngDevMode)
                        for (let e of this._views) e.checkNoChanges()
                } catch (e) {
                    this._zone.runOutsideAngular((() => this._exceptionHandler.handleError(e)))
                } finally {
                    this._runningTick = !1
                }
            }
            attachView(e) {
                const t = e;
                this._views.push(t), t.attachToAppRef(this)
            }
            detachView(e) {
                const t = e;
                zv(this._views, t), t.detachFromAppRef()
            }
            _loadComponent(e) {
                this.attachView(e.hostView), this.tick(), this.components.push(e);
                this._injector.get(mv, []).concat(this._bootstrapListeners).forEach((t => t(e)))
            }
            ngOnDestroy() {
                this._views.slice().forEach((e => e.destroy())), this._onMicrotaskEmptySubscription.unsubscribe()
            }
            get viewCount() {
                return this._views.length
            }
        }

        function zv(e, t) {
            const n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }

        function Wv(e) {
            for (let t = e.length - 1; t >= 0; t--)
                if (void 0 !== e[t]) return e[t]
        }
        Uv.Éµfac = function (e) {
            return new(e || Uv)(Xo(Cv), Xo(Kc), Xo(Is), Xo(fv))
        }, Uv.Éµprov = Je({
            token: Uv,
            factory: Uv.Éµfac,
            providedIn: "root"
        }), ("undefined" == typeof ngDevMode || ngDevMode) && Mg(Uv, [{
            type: cd,
            args: [{
                providedIn: "root"
            }]
        }], (function () {
            return [{
                type: Cv
            }, {
                type: Kc
            }, {
                type: Is
            }, {
                type: fv
            }]
        }), null);
        class qv {}
        qv.__NG_ELEMENT_ID__ = function (e) {
            return function (e, t, n) {
                if (Zt(e) && !n) {
                    const n = Rn(e.index, t);
                    return new mg(n, n)
                }
                if (47 & e.type) {
                    const e = t[16];
                    return new mg(e, t)
                }
                return null
            }(Zn(), Wn(), 16 == (16 & e))
        };
        new Map;
        class Qv {
            constructor() {}
            supports(e) {
                return ku(e)
            }
            create(e) {
                return new Gv(e)
            }
        }
        const Zv = (e, t) => t;
        class Gv {
            constructor(e) {
                this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = e || Zv
            }
            forEachItem(e) {
                let t;
                for (t = this._itHead; null !== t; t = t._next) e(t)
            }
            forEachOperation(e) {
                let t = this._itHead,
                    n = this._removalsHead,
                    r = 0,
                    o = null;
                for (; t || n;) {
                    const i = !n || t && t.currentIndex < Xv(n, r, o) ? t : n,
                        s = Xv(i, r, o),
                        a = i.currentIndex;
                    if (i === n) r--, n = n._nextRemoved;
                    else if (t = t._next, null == i.previousIndex) r++;
                    else {
                        o || (o = []);
                        const e = s - r,
                            t = a - r;
                        if (e != t) {
                            for (let n = 0; n < e; n++) {
                                const r = n < o.length ? o[n] : o[n] = 0,
                                    i = r + n;
                                t <= i && i < e && (o[n] = r + 1)
                            }
                            o[i.previousIndex] = t - e
                        }
                    }
                    s !== a && e(i, s, a)
                }
            }
            forEachPreviousItem(e) {
                let t;
                for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t)
            }
            forEachAddedItem(e) {
                let t;
                for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
            }
            forEachMovedItem(e) {
                let t;
                for (t = this._movesHead; null !== t; t = t._nextMoved) e(t)
            }
            forEachRemovedItem(e) {
                let t;
                for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
            }
            forEachIdentityChange(e) {
                let t;
                for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) e(t)
            }
            diff(e) {
                if (null == e && (e = []), !ku(e)) {
                    const t = "undefined" == typeof ngDevMode || ngDevMode ? `Error trying to diff '${be(e)}'. Only arrays and iterables are allowed` : "";
                    throw new Ee(900, t)
                }
                return this.check(e) ? this : null
            }
            onDestroy() {}
            check(e) {
                this._reset();
                let t, n, r, o = this._itHead,
                    i = !1;
                if (Array.isArray(e)) {
                    this.length = e.length;
                    for (let t = 0; t < this.length; t++) n = e[t], r = this._trackByFn(t, n), null !== o && Object.is(o.trackById, r) ? (i && (o = this._verifyReinsertion(o, n, r, t)), Object.is(o.item, n) || this._addIdentityChange(o, n)) : (o = this._mismatch(o, n, r, t), i = !0), o = o._next
                } else t = 0,
                    function (e, t) {
                        if (Array.isArray(e))
                            for (let n = 0; n < e.length; n++) t(e[n]);
                        else {
                            const n = e[Iu()]();
                            let r;
                            for (; !(r = n.next()).done;) t(r.value)
                        }
                    }(e, (e => {
                        r = this._trackByFn(t, e), null !== o && Object.is(o.trackById, r) ? (i && (o = this._verifyReinsertion(o, e, r, t)), Object.is(o.item, e) || this._addIdentityChange(o, e)) : (o = this._mismatch(o, e, r, t), i = !0), o = o._next, t++
                    })), this.length = t;
                return this._truncate(o), this.collection = e, this.isDirty
            }
            get isDirty() {
                return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
            }
            _reset() {
                if (this.isDirty) {
                    let e;
                    for (e = this._previousItHead = this._itHead; null !== e; e = e._next) e._nextPrevious = e._next;
                    for (e = this._additionsHead; null !== e; e = e._nextAdded) e.previousIndex = e.currentIndex;
                    for (this._additionsHead = this._additionsTail = null, e = this._movesHead; null !== e; e = e._nextMoved) e.previousIndex = e.currentIndex;
                    this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                }
            }
            _mismatch(e, t, n, r) {
                let o;
                return null === e ? o = this._itTail : (o = e._prev, this._remove(e)), null !== (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Object.is(e.item, t) || this._addIdentityChange(e, t), this._reinsertAfter(e, o, r)) : null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Object.is(e.item, t) || this._addIdentityChange(e, t), this._moveAfter(e, o, r)) : e = this._addAfter(new Jv(t, n), o, r), e
            }
            _verifyReinsertion(e, t, n, r) {
                let o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                return null !== o ? e = this._reinsertAfter(o, e._prev, r) : e.currentIndex != r && (e.currentIndex = r, this._addToMoves(e, r)), e
            }
            _truncate(e) {
                for (; null !== e;) {
                    const t = e._next;
                    this._addToRemovals(this._unlink(e)), e = t
                }
                null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
            }
            _reinsertAfter(e, t, n) {
                null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
                const r = e._prevRemoved,
                    o = e._nextRemoved;
                return null === r ? this._removalsHead = o : r._nextRemoved = o, null === o ? this._removalsTail = r : o._prevRemoved = r, this._insertAfter(e, t, n), this._addToMoves(e, n), e
            }
            _moveAfter(e, t, n) {
                return this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e
            }
            _addAfter(e, t, n) {
                return this._insertAfter(e, t, n), null === this._additionsTail ? this._additionsTail = this._additionsHead = e : this._additionsTail = this._additionsTail._nextAdded = e, e
            }
            _insertAfter(e, t, n) {
                const r = null === t ? this._itHead : t._next;
                return e._next = r, e._prev = t, null === r ? this._itTail = e : r._prev = e, null === t ? this._itHead = e : t._next = e, null === this._linkedRecords && (this._linkedRecords = new Yv), this._linkedRecords.put(e), e.currentIndex = n, e
            }
            _remove(e) {
                return this._addToRemovals(this._unlink(e))
            }
            _unlink(e) {
                null !== this._linkedRecords && this._linkedRecords.remove(e);
                const t = e._prev,
                    n = e._next;
                return null === t ? this._itHead = n : t._next = n, null === n ? this._itTail = t : n._prev = t, e
            }
            _addToMoves(e, t) {
                return e.previousIndex === t || (null === this._movesTail ? this._movesTail = this._movesHead = e : this._movesTail = this._movesTail._nextMoved = e), e
            }
            _addToRemovals(e) {
                return null === this._unlinkedRecords && (this._unlinkedRecords = new Yv), this._unlinkedRecords.put(e), e.currentIndex = null, e._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = e, e._prevRemoved = null) : (e._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = e), e
            }
            _addIdentityChange(e, t) {
                return e.item = t, null === this._identityChangesTail ? this._identityChangesTail = this._identityChangesHead = e : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = e, e
            }
        }
        class Jv {
            constructor(e, t) {
                this.item = e, this.trackById = t, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
            }
        }
        class Kv {
            constructor() {
                this._head = null, this._tail = null
            }
            add(e) {
                null === this._head ? (this._head = this._tail = e, e._nextDup = null, e._prevDup = null) : (this._tail._nextDup = e, e._prevDup = this._tail, e._nextDup = null, this._tail = e)
            }
            get(e, t) {
                let n;
                for (n = this._head; null !== n; n = n._nextDup)
                    if ((null === t || t <= n.currentIndex) && Object.is(n.trackById, e)) return n;
                return null
            }
            remove(e) {
                const t = e._prevDup,
                    n = e._nextDup;
                return null === t ? this._head = n : t._nextDup = n, null === n ? this._tail = t : n._prevDup = t, null === this._head
            }
        }
        class Yv {
            constructor() {
                this.map = new Map
            }
            put(e) {
                const t = e.trackById;
                let n = this.map.get(t);
                n || (n = new Kv, this.map.set(t, n)), n.add(e)
            }
            get(e, t) {
                const n = e,
                    r = this.map.get(n);
                return r ? r.get(e, t) : null
            }
            remove(e) {
                const t = e.trackById;
                return this.map.get(t).remove(e) && this.map.delete(t), e
            }
            get isEmpty() {
                return 0 === this.map.size
            }
            clear() {
                this.map.clear()
            }
        }

        function Xv(e, t, n) {
            const r = e.previousIndex;
            if (null === r) return r;
            let o = 0;
            return n && r < n.length && (o = n[r]), r + t + o
        }
        class ey {
            constructor() {}
            supports(e) {
                return e instanceof Map || Su(e)
            }
            create() {
                return new ty
            }
        }
        class ty {
            constructor() {
                this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
            }
            get isDirty() {
                return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
            }
            forEachItem(e) {
                let t;
                for (t = this._mapHead; null !== t; t = t._next) e(t)
            }
            forEachPreviousItem(e) {
                let t;
                for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t)
            }
            forEachChangedItem(e) {
                let t;
                for (t = this._changesHead; null !== t; t = t._nextChanged) e(t)
            }
            forEachAddedItem(e) {
                let t;
                for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
            }
            forEachRemovedItem(e) {
                let t;
                for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
            }
            diff(e) {
                if (e) {
                    if (!(e instanceof Map || Su(e))) {
                        const t = "undefined" == typeof ngDevMode || ngDevMode ? `Error trying to diff '${be(e)}'. Only maps and objects are allowed` : "";
                        throw new Ee(900, t)
                    }
                } else e = new Map;
                return this.check(e) ? this : null
            }
            onDestroy() {}
            check(e) {
                this._reset();
                let t = this._mapHead;
                if (this._appendAfter = null, this._forEach(e, ((e, n) => {
                        if (t && t.key === n) this._maybeAddToChanges(t, e), this._appendAfter = t, t = t._next;
                        else {
                            const r = this._getOrCreateRecordForKey(n, e);
                            t = this._insertBeforeOrAppend(t, r)
                        }
                    })), t) {
                    t._prev && (t._prev._next = null), this._removalsHead = t;
                    for (let e = t; null !== e; e = e._nextRemoved) e === this._mapHead && (this._mapHead = null), this._records.delete(e.key), e._nextRemoved = e._next, e.previousValue = e.currentValue, e.currentValue = null, e._prev = null, e._next = null
                }
                return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
            }
            _insertBeforeOrAppend(e, t) {
                if (e) {
                    const n = e._prev;
                    return t._next = e, t._prev = n, e._prev = t, n && (n._next = t), e === this._mapHead && (this._mapHead = t), this._appendAfter = e, e
                }
                return this._appendAfter ? (this._appendAfter._next = t, t._prev = this._appendAfter) : this._mapHead = t, this._appendAfter = t, null
            }
            _getOrCreateRecordForKey(e, t) {
                if (this._records.has(e)) {
                    const n = this._records.get(e);
                    this._maybeAddToChanges(n, t);
                    const r = n._prev,
                        o = n._next;
                    return r && (r._next = o), o && (o._prev = r), n._next = null, n._prev = null, n
                }
                const n = new ny(e);
                return this._records.set(e, n), n.currentValue = t, this._addToAdditions(n), n
            }
            _reset() {
                if (this.isDirty) {
                    let e;
                    for (this._previousMapHead = this._mapHead, e = this._previousMapHead; null !== e; e = e._next) e._nextPrevious = e._next;
                    for (e = this._changesHead; null !== e; e = e._nextChanged) e.previousValue = e.currentValue;
                    for (e = this._additionsHead; null != e; e = e._nextAdded) e.previousValue = e.currentValue;
                    this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                }
            }
            _maybeAddToChanges(e, t) {
                Object.is(t, e.currentValue) || (e.previousValue = e.currentValue, e.currentValue = t, this._addToChanges(e))
            }
            _addToAdditions(e) {
                null === this._additionsHead ? this._additionsHead = this._additionsTail = e : (this._additionsTail._nextAdded = e, this._additionsTail = e)
            }
            _addToChanges(e) {
                null === this._changesHead ? this._changesHead = this._changesTail = e : (this._changesTail._nextChanged = e, this._changesTail = e)
            }
            _forEach(e, t) {
                e instanceof Map ? e.forEach(t) : Object.keys(e).forEach((n => t(e[n], n)))
            }
        }
        class ny {
            constructor(e) {
                this.key = e, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
            }
        }

        function ry() {
            return new oy([new Qv])
        }
        class oy {
            constructor(e) {
                this.factories = e
            }
            static create(e, t) {
                if (null != t) {
                    const n = t.factories.slice();
                    e = e.concat(n)
                }
                return new oy(e)
            }
            static extend(e) {
                return {
                    provide: oy,
                    useFactory: t => oy.create(e, t || ry()),
                    deps: [
                        [oy, new li, new si]
                    ]
                }
            }
            find(e) {
                const t = this.factories.find((t => t.supports(e)));
                if (null != t) return t; {
                    const t = "undefined" == typeof ngDevMode || ngDevMode ? `Cannot find a differ supporting object '${e}' of type '${n=e,n.name||typeof n}'` : "";
                    throw new Ee(901, t)
                }
                var n
            }
        }

        function iy() {
            return new sy([new ey])
        }
        oy.Éµprov = Je({
            token: oy,
            providedIn: "root",
            factory: ry
        });
        class sy {
            constructor(e) {
                this.factories = e
            }
            static create(e, t) {
                if (t) {
                    const n = t.factories.slice();
                    e = e.concat(n)
                }
                return new sy(e)
            }
            static extend(e) {
                return {
                    provide: sy,
                    useFactory: t => sy.create(e, t || iy()),
                    deps: [
                        [sy, new li, new si]
                    ]
                }
            }
            find(e) {
                const t = this.factories.find((t => t.supports(e)));
                if (t) return t;
                const n = "undefined" == typeof ngDevMode || ngDevMode ? `Cannot find a differ supporting object '${e}'` : "";
                throw new Ee(901, n)
            }
        }
        sy.Éµprov = Je({
            token: sy,
            providedIn: "root",
            factory: iy
        });
        const ay = [new ey],
            ly = [new Qv];
        new oy(ly), new sy(ay),
            function (e, t, n = []) {
                const r = `Platform: ${t}`,
                    o = new Do(r)
            }(null, "core", []);
        class cy {
            constructor(e) {}
        }
        cy.Éµfac = function (e) {
            return new(e || cy)(Xo(Uv))
        }, cy.Éµmod = Nt({
            type: cy
        }), cy.Éµinj = Ke({}), ("undefined" == typeof ngDevMode || ngDevMode) && Mg(cy, [{
            type: cv
        }], (function () {
            return [{
                type: Uv
            }]
        }), null);
        "undefined" != typeof ngDevMode && ngDevMode && (vt.$localize = vt.$localize || function () {
            throw new Error("It looks like your application or one of its dependencies is using i18n.\nAngular 9 introduced a global `$localize()` function that needs to be loaded.\nPlease run `ng add @angular/localize` from the Angular CLI.\n(For non-CLI projects, add `import '@angular/localize/init';` to your `polyfills.ts` file.\nFor server-side rendering applications add the import to your `main.server.ts` file.)")
        });
        class uy {
            constructor() {
                this.eventsToListenFor = [], window.addEventListener("message", (e => {
                    let {
                        data: {
                            eventName: t,
                            val: n
                        }
                    } = e;
                    this.getAllEventsToListenFor().forEach((e => {
                        e.eventName === t && e.callback(n)
                    }))
                }))
            }
            postToParent(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                t = this.executeFuncsInValToSend(t), window.parent.postMessage({
                    eventName: e,
                    val: t
                }, "*")
            }
            postToTop(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                t = this.executeFuncsInValToSend(t), window.top.postMessage({
                    eventName: e,
                    val: t
                }, "*")
            }
            postToChild(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                n = this.executeFuncsInValToSend(n), e.contentWindow.postMessage({
                    eventName: t,
                    val: n
                }, "*")
            }
            listAllEvents() {
                return this.eventsToListenFor.map((e => e.eventName))
            }
            findEvent(e) {
                return this.eventsToListenFor.find((t => t.eventName === e))
            }
            offEvent(e) {
                this.eventsToListenFor = this.eventsToListenFor.filter((t => t.eventName !== e))
            }
            onEvent(e, t) {
                const n = this.eventsToListenFor.find((t => t.eventName === e));
                n ? n.callback = t : this.eventsToListenFor.push({
                    eventName: e,
                    callback: t
                })
            }
            getAllEventsToListenFor() {
                return this.eventsToListenFor
            }
            deepSearchForFunction(e, t, n) {
                return "object" == typeof e && null !== e ? (Object.keys(e).forEach((r => {
                    const o = this.deepSearchForFunction(e[r], `${t}.${r}`, n);
                    "string" == typeof o && n.push(o)
                })), n) : "function" == typeof e ? String(t).substring(1) : void 0
            }
            executeFuncsInValToSend(e) {
                const t = this.deepSearchForFunction(e, "", []);
                return t && "string" != typeof t && t.forEach((t => {
                    const n = e[t];
                    e[t] = n()
                })), e
            }
        }
        uy.Éµfac = function (e) {
            return new(e || uy)
        }, uy.Éµprov = Je({
            token: uy,
            factory: uy.Éµfac,
            providedIn: "root"
        }), ("undefined" == typeof ngDevMode || ngDevMode) && Mg(uy, [{
            type: cd,
            args: [{
                providedIn: "root"
            }]
        }], (function () {
            return []
        }), null);
        var dy = n(303);
        const fy = "Embeddedpage",
            hy = "Paymentpage";
        class py {
            constructor() {
                const e = document.createElement("div");
                return e.classList.add("card-skeleton"), e
            }
            static skeletonStyle() {
                return [".card-skeleton {\n        --skeleton-card-padding: 24px;\n        --skeleton-card-height: 323px;\n        --skeleton-card-skeleton: linear-gradient(#f6f6f6 var(--skeleton-card-height), transparent 0);\n        --title-height: 24px;\n        --title-1-width: 35%;\n        --title-2-width: 45%;\n        --title-3-width: 18%;\n        --title-4-width: 90px;\n        --gap-between-grps: 75px;\n        --gap-start-titles: 90px;\n        --gap-start-desc: 119px;\n        --title-1-position: var(--skeleton-card-padding) var(--gap-start-titles);\n        --title-2-position: var(--skeleton-card-padding) calc(var(--gap-start-titles) + var(--gap-between-grps));\n        --title-3-position: var(--skeleton-card-padding) calc(var(--gap-start-titles) + var(--gap-between-grps)*2);\n        --title-4-position: calc(50% + 70px) calc(var(--gap-start-titles) + var(--gap-between-grps)*2);\n        --title-skeleton: linear-gradient(white var(--title-height), transparent 0);\n        --desc-line-height: 31px;\n        --desc-line-skeleton: linear-gradient(white var(--desc-line-height), transparent 0);\n        --desc-line-1-width: calc(100% - 50px);\n        --desc-line-2-width: calc(50% - 50px);\n        --desc-line-1-position: var(--skeleton-card-padding) var(--gap-start-desc);\n        --desc-line-2-position: var(--skeleton-card-padding) calc(var(--gap-start-desc) + var(--gap-between-grps));\n        --desc-line-3-position: var(--skeleton-card-padding) calc(var(--gap-start-desc) + var(--gap-between-grps)*2);\n        --desc-line-4-position: calc(100% - var(--skeleton-card-padding)) calc(var(--gap-start-desc) + var(--gap-between-grps)*2);\n        --header-line-skeleton: linear-gradient(#f6f6f6 var(--desc-line-height), transparent 0);\n        --header-line-width: 50%;\n        --header-line-height: 18px;\n        --header-line-position: var(--skeleton-card-padding) 20px;\n        --header-height: 62px;\n        --header-position: 0 0;\n        --header-skeleton: linear-gradient(white var(--header-height), transparent 0);\n        --blur-width: 200px;\n        --blur-size: var(--blur-width) calc(var(--skeleton-card-height));\n        border: none;\n        width: 100%;\n        height: 0px;\n        position: relative;\n      }", '.card-skeleton:empty::after {\n        content: "";\n        display: block;\n        width: 100%;\n        height: var(--skeleton-card-height);\n        position: absolute;\n        border-radius: 0.25rem;\n        border: 1px solid #f2f2f2;\n        background-image: linear-gradient(90deg, rgba(246, 246, 246, 0) 0, rgba(246, 246, 246, 0.8) 50%, rgba(246, 246, 246, 0) 100%),\n        var(--title-skeleton),\n        var(--title-skeleton),\n        var(--title-skeleton),\n        var(--title-skeleton),\n        var(--desc-line-skeleton),\n        var(--desc-line-skeleton),\n        var(--desc-line-skeleton),\n        var(--desc-line-skeleton),\n        var(--header-line-skeleton),\n        var(--header-skeleton),\n        var(--skeleton-card-skeleton);\n        background-size: var(--blur-size),\n        var(--title-1-width) var(--title-height),\n        var(--title-2-width) var(--title-height),\n        var(--title-3-width) var(--title-height),\n        var(--title-4-width) var(--title-height),\n        var(--desc-line-1-width) var(--desc-line-height),\n        var(--desc-line-1-width) var(--desc-line-height),\n        var(--desc-line-2-width) var(--desc-line-height),\n        var(--desc-line-2-width) var(--desc-line-height),\n        var(--header-line-width) var(--header-line-height),\n        100% var(--header-height),\n        100% 100%;\n        background-position: -150% 0,\n        var(--title-1-position),\n        var(--title-2-position),\n        var(--title-3-position),\n        var(--title-4-position),\n        var(--desc-line-1-position),\n        var(--desc-line-2-position),\n        var(--desc-line-3-position),\n        var(--desc-line-4-position),\n        var(--header-line-position),\n        var(--header-position),\n        0 0;\n        background-repeat: no-repeat;\n        -webkit-animation: loading 2.5s infinite;\n        animation: loading 2.5s infinite;\n      }', "@keyframes spin {\n        100% { \n          transform: rotate(360deg); \n        }\n      }", "@keyframes loading {\n        to {\n          background-position: 350% 0,\n          var(--title-1-position),\n          var(--title-2-position),\n          var(--title-3-position),\n          var(--title-4-position),\n          var(--desc-line-1-position),\n          var(--desc-line-2-position),\n          var(--desc-line-3-position),\n          var(--desc-line-4-position),\n          var(--header-line-position),\n          var(--header-position),\n          0 0;\n        }\n      }", ".acs-takeover {\n        position: fixed !important;\n        left: 0px !important;\n        right: 0px !important;\n        top: 0px !important;\n        height: 100% !important;\n      }"]
            }
        }
        const gy = py.skeletonStyle();
        class my {
            constructor(e) {
                const t = document.createElement("div"),
                    n = document.createElement("style"),
                    r = e === fy ? "" : "position: fixed; top: 0; right: 0; bottom: 0; left: 0;";
                n.id = "hc-loader-styles", document.head.appendChild(n);
                for (let e in gy) n.sheet.insertRule(gy[e]);
                t.setAttribute("id", "hc-loader-container"), t.style.cssText = `${r}\n      background: rgba(0,0,0,0.15);\n      height: 100%;\n      width: 100%;\n      z-index:99999!important;\n      display: none;`;
                const o = document.createElement("div");
                return o.innerHTML = "<div class='spinner'></div>", o.style.cssText = `${r}\n      width: 70px;\n      height: 70px;\n      margin: auto;\n      border-radius: 50%;\n      animation: spin .6s infinite linear;\n      border: 2px solid;\n      border-color: #555 #555 transparent transparent;`, t.appendChild(o), t
            }
        }
        class vy {
            constructor(e, t, n) {
                const r = t === fy ? "" : "position: fixed; top: 0; right: 0; bottom: 0; left: 0;",
                    o = document.createElement("iframe");
                return o.setAttribute("id", n), o.style.cssText = `${r}\n        z-index: 9999;\n        display: block;\n        background-color: transparent;\n        border: 0px none transparent;\n        overflow: hidden auto;\n        visibility: visible;\n        margin: 0px;\n        padding: 0px;\n        height: 323px;\n        width: 100%;`, o.src = e, o
            }
        }

        function yy(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        class wy {
            constructor() {
                yy(this, "SESSION_ID_PARAM", "HostedCheckout_sessionId"), yy(this, "EMBED_CONTAINER_PARAM", "HostedCheckout_embedContainer"), yy(this, "MERCHANT_STATE_PARAM", "HostedCheckout_merchantState"), yy(this, "SHOW_LIGHTBOX_FUNC", "HostedCheckout_showLightboxFunc"), yy(this, "setSessionId", (e => {
                    sessionStorage.setItem(this.SESSION_ID_PARAM, e)
                })), yy(this, "getSessionId", (() => sessionStorage.getItem(this.SESSION_ID_PARAM))), yy(this, "setMerchantState", (e => {
                    sessionStorage.setItem(this.MERCHANT_STATE_PARAM, JSON.stringify(e))
                })), yy(this, "getMerchantState", (() => sessionStorage.getItem(this.MERCHANT_STATE_PARAM))), yy(this, "setEmbedContainer", (e => {
                    sessionStorage.setItem(this.EMBED_CONTAINER_PARAM, e)
                })), yy(this, "getEmbedContainer", (() => sessionStorage.getItem(this.EMBED_CONTAINER_PARAM))), yy(this, "setShowLightboxFunc", (e => {
                    sessionStorage.setItem(this.SHOW_LIGHTBOX_FUNC, e)
                })), yy(this, "getShowLightboxFunc", (() => sessionStorage.getItem(this.SHOW_LIGHTBOX_FUNC))), yy(this, "hasShowLightboxFunc", (() => !!sessionStorage.getItem(this.SHOW_LIGHTBOX_FUNC))), yy(this, "hasSavedData", (() => this.hasSessionData())), yy(this, "hasSavedMerchantData", (() => this.notNullOrUndefined(this.MERCHANT_STATE_PARAM))), yy(this, "removeSavedData", (() => {
                    sessionStorage.removeItem(this.MERCHANT_STATE_PARAM), sessionStorage.removeItem(this.EMBED_CONTAINER_PARAM), sessionStorage.removeItem(this.SESSION_ID_PARAM), sessionStorage.removeItem(this.SHOW_LIGHTBOX_FUNC)
                })), yy(this, "hasSessionData", (() => this.notNullOrUndefined(this.SESSION_ID_PARAM) && this.notNullOrUndefined(this.EMBED_CONTAINER_PARAM) && this.notNullOrUndefined(this.MERCHANT_STATE_PARAM))), yy(this, "notNullOrUndefined", (e => sessionStorage.getItem(e) && void 0 !== sessionStorage.getItem(e) && void 0 !== sessionStorage.getItem(e))), yy(this, "nullOrUndefined", (e => !this.notNullOrUndefined(e)))
            }
            onlyEmbedContainerParamExist() {
                return this.notNullOrUndefined(this.EMBED_CONTAINER_PARAM) && this.nullOrUndefined(this.SESSION_ID_PARAM) && this.nullOrUndefined(this.MERCHANT_STATE_PARAM)
            }
        }

        function by(e, t, n) {
            _y(e, t), t.set(e, n)
        }

        function _y(e, t) {
            if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }

        function My(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Dy(e, t) {
            var n = function (e, t, n) {
                if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
                return t.get(e)
            }(e, t, "get");
            return function (e, t) {
                if (t.get) return t.get.call(e);
                return t.value
            }(e, n)
        }
        var xy = new WeakSet,
            Cy = new WeakMap,
            Ey = new WeakMap,
            Iy = new WeakMap,
            Ty = new WeakMap,
            ky = new WeakMap,
            Sy = new WeakMap,
            Ay = new WeakMap,
            Oy = new WeakMap;
        class Ny {
            constructor(e) {
                var t, n;
                _y(t = this, n = xy), n.add(t), My(this, "callbackFlagRegex", /__hc-action-(complete|cancel|timeout)(?:-([^-]+)(?:-([^-]+))?(?:-([^-]+))?(?:-([^-]+))?)?/), My(this, "callbackTypes", ["complete", "error", "cancel", "afterRedirect", "beforeRedirect", "timeout"]), My(this, "callbackList", []), My(this, "windowState", new wy), My(this, "getCallbacks", (() => this.callbackList)), My(this, "completeHandler", (e => {
                        "callbackType" in e && delete e.callbackType, Dy(this, Ty).call(this, this.callbackList.complete, e)
                    })), My(this, "errorHandler", (e => {
                        this.callbackList.hasOwnProperty("error") ? Dy(this, Ty).call(this, this.callbackList.error, e) : (Dy(this, Oy).call(this, "Failed to find error callback"), Dy(this, Oy).call(this, JSON.stringify(e, null, 4)))
                    })), My(this, "cancelHandler", (() => {
                        Dy(this, Ty).call(this, this.callbackList.cancel)
                    })), My(this, "timeoutHandler", (e => {
                        e && e.timeoutUrl && e.timeoutUrl !== this.constructor.defaultTimeoutUrl ? this.redirect(e.timeoutUrl) : ["function", "string"].includes(typeof this.callbackList.timeout) && Dy(this, Ty).call(this, this.callbackList.timeout)
                    })), My(this, "beforeRedirectHandler", (e => {
                        this.windowState.setSessionId(e.sessionId), "function" == typeof this.callbackList.beforeRedirect ? this.windowState.setMerchantState(this.callbackList.beforeRedirect()) : this.windowState.setMerchantState(null)
                    })), My(this, "afterRedirectHandler", (() => {
                        let e = this.windowState.getMerchantState();
                        e && (this.callbackList.hasOwnProperty("afterRedirect") && this.callbackList.afterRedirect(JSON.parse(e)), this.windowState.removeSavedData())
                    })), My(this, "redirect", ((e, t) => {
                        t && (e = Dy(this, ky).call(this, e, t)), window.location.href = e
                    })), by(this, Cy, {
                        writable: !0,
                        value: e => {
                            for (let t of this.callbackTypes) {
                                let n = "data-" + t,
                                    r = Dy(this, Iy).call(this, e, n);
                                if (r && "" !== r) {
                                    let e = Dy(this, Ey).call(this, r, window);
                                    if (e) {
                                        if ("function" != typeof e && "string" != typeof e) throw "Callback defined as '" + r + "' in '" + n + "' is not a function or string";
                                        this.callbackList[t] = e
                                    } else this.callbackList[t] = r
                                }
                            }
                        }
                    }), by(this, Ey, {
                        writable: !0,
                        value: (e, t) => {
                            const n = e.split(".", 2);
                            return 1 === n.length ? t[n[0]] : t[n[0]] ? Dy(this, Ey).call(this, n[1], t[n[0]]) : void 0
                        }
                    }), by(this, Iy, {
                        writable: !0,
                        value: (e, t) => {
                            if (e[t]) return e[t];
                            const n = e.attributes[t];
                            return n ? n.value : void 0
                        }
                    }), by(this, Ty, {
                        writable: !0,
                        value: (e, t) => {
                            "string" == typeof e ? this.redirect(e, t) : "function" == typeof e && e.call(this, t)
                        }
                    }), by(this, ky, {
                        writable: !0,
                        value: (e, t) => {
                            let n = new URL(e);
                            return Dy(this, Sy).call(this, t, (function (e, t) {
                                n.search = n.search + ("" !== n.search ? "&" : "") + e + "=" + t
                            })), n
                        }
                    }), by(this, Sy, {
                        writable: !0,
                        value: (e, t) => {
                            for (const n in e) e.hasOwnProperty(n) && t(n, e[n])
                        }
                    }), by(this, Ay, {
                        writable: !0,
                        value: () => {
                            history.pushState("", document.title, window.location.pathname + window.location.search)
                        }
                    }), by(this, Oy, {
                        writable: !0,
                        value: (e, t) => {
                            if (window.console) {
                                if (t && console[t]) return void console[t](e);
                                console.log(e)
                            }
                        }
                    }), My(this, "shouldResumeSession", (() => this.windowState.hasSavedData())), My(this, "shouldNotRemoveSavedData", (() => this.windowState.onlyEmbedContainerParamExist())), Dy(this, Cy).call(this, e),
                    function (e, t, n) {
                        if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                        return n
                    }(this, xy, Py).call(this)
            }
        }

        function Py() {
            let e = document.location.hash.match(this.callbackFlagRegex);
            if (e) {
                let t = {};
                switch (t.callbackType = e[1], e[2] && (t.resultIndicator = e[2]), e[3] && (t.sessionVersion = e[3]), e[4] && (t.issuerInstallmentOffer = decodeURIComponent(e[4])), e[5] && (t.receiptText = decodeURIComponent(e[5])), Dy(this, Ay).call(this), t.callbackType) {
                    case "complete":
                        this.completeHandler(t);
                        break;
                    case "cancel":
                        this.cancelHandler();
                        break;
                    case "timeout":
                        this.timeoutHandler()
                }
                t.callbackType && this.windowState.hasSavedMerchantData() && this.afterRedirectHandler()
            }
        }
        My(Ny, "defaultCancelUrl", "urn:hostedCheckout:defaultCancelUrl"), My(Ny, "defaultTimeoutUrl", "urn:hostedCheckout:defaultTimeoutUrl");
        const Ry = function (e) {
            var t = this.constructor;
            return this.then((function (n) {
                return t.resolve(e()).then((function () {
                    return n
                }))
            }), (function (n) {
                return t.resolve(e()).then((function () {
                    return t.reject(n)
                }))
            }))
        };
        const jy = function (e) {
            return new this((function (t, n) {
                if (!e || void 0 === e.length) return n(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                var r = Array.prototype.slice.call(e);
                if (0 === r.length) return t([]);
                var o = r.length;

                function i(e, n) {
                    if (n && ("object" == typeof n || "function" == typeof n)) {
                        var s = n.then;
                        if ("function" == typeof s) return void s.call(n, (function (t) {
                            i(e, t)
                        }), (function (n) {
                            r[e] = {
                                status: "rejected",
                                reason: n
                            }, 0 == --o && t(r)
                        }))
                    }
                    r[e] = {
                        status: "fulfilled",
                        value: n
                    }, 0 == --o && t(r)
                }
                for (var s = 0; s < r.length; s++) i(s, r[s])
            }))
        };
        var Fy = setTimeout;

        function Vy(e) {
            return Boolean(e && void 0 !== e.length)
        }

        function Ly() {}

        function Hy(e) {
            if (!(this instanceof Hy)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], qy(e, this)
        }

        function $y(e, t) {
            for (; 3 === e._state;) e = e._value;
            0 !== e._state ? (e._handled = !0, Hy._immediateFn((function () {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                    var r;
                    try {
                        r = n(e._value)
                    } catch (e) {
                        return void Uy(t.promise, e)
                    }
                    By(t.promise, r)
                } else(1 === e._state ? By : Uy)(t.promise, e._value)
            }))) : e._deferreds.push(t)
        }

        function By(e, t) {
            try {
                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var n = t.then;
                    if (t instanceof Hy) return e._state = 3, e._value = t, void zy(e);
                    if ("function" == typeof n) return void qy((r = n, o = t, function () {
                        r.apply(o, arguments)
                    }), e)
                }
                e._state = 1, e._value = t, zy(e)
            } catch (t) {
                Uy(e, t)
            }
            var r, o
        }

        function Uy(e, t) {
            e._state = 2, e._value = t, zy(e)
        }

        function zy(e) {
            2 === e._state && 0 === e._deferreds.length && Hy._immediateFn((function () {
                e._handled || Hy._unhandledRejectionFn(e._value)
            }));
            for (var t = 0, n = e._deferreds.length; t < n; t++) $y(e, e._deferreds[t]);
            e._deferreds = null
        }

        function Wy(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
        }

        function qy(e, t) {
            var n = !1;
            try {
                e((function (e) {
                    n || (n = !0, By(t, e))
                }), (function (e) {
                    n || (n = !0, Uy(t, e))
                }))
            } catch (e) {
                if (n) return;
                n = !0, Uy(t, e)
            }
        }
        Hy.prototype.catch = function (e) {
            return this.then(null, e)
        }, Hy.prototype.then = function (e, t) {
            var n = new this.constructor(Ly);
            return $y(this, new Wy(e, t, n)), n
        }, Hy.prototype.finally = Ry, Hy.all = function (e) {
            return new Hy((function (t, n) {
                if (!Vy(e)) return n(new TypeError("Promise.all accepts an array"));
                var r = Array.prototype.slice.call(e);
                if (0 === r.length) return t([]);
                var o = r.length;

                function i(e, s) {
                    try {
                        if (s && ("object" == typeof s || "function" == typeof s)) {
                            var a = s.then;
                            if ("function" == typeof a) return void a.call(s, (function (t) {
                                i(e, t)
                            }), n)
                        }
                        r[e] = s, 0 == --o && t(r)
                    } catch (e) {
                        n(e)
                    }
                }
                for (var s = 0; s < r.length; s++) i(s, r[s])
            }))
        }, Hy.allSettled = jy, Hy.resolve = function (e) {
            return e && "object" == typeof e && e.constructor === Hy ? e : new Hy((function (t) {
                t(e)
            }))
        }, Hy.reject = function (e) {
            return new Hy((function (t, n) {
                n(e)
            }))
        }, Hy.race = function (e) {
            return new Hy((function (t, n) {
                if (!Vy(e)) return n(new TypeError("Promise.race accepts an array"));
                for (var r = 0, o = e.length; r < o; r++) Hy.resolve(e[r]).then(t, n)
            }))
        }, Hy._immediateFn = "function" == typeof setImmediate && function (e) {
            setImmediate(e)
        } || function (e) {
            Fy(e, 0)
        }, Hy._unhandledRejectionFn = function (e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        };
        const Qy = Hy,
            Zy = "checkout.js",
            Gy = "/checkout/";
        window.Checkout = () => {
            const e = (document.currentScript || document.querySelector(`script[src*="${scriptFileName}"]`) || document.querySelector(`script[src*="${minScriptFileName}"]`)).src,
                t = e.indexOf(Zy) > -1 ? Zy : "checkout.min.js",
                n = e.substring(e.lastIndexOf(Gy) + Gy.length, e.lastIndexOf(`/${t}`)),
                r = new uy;
            let o;
            const i = "hc-comms-layer-iframe";
            let s, a, l, c, u, d = new py;
            const f = function (e) {
                    let t;
                    return t = e.indexOf("//") > -1 ? e.split("/")[2] : e.split("/")[0], t = t.split(":")[0], t = t.split("?")[0], t
                }(e),
                h = `${f}/form`;
            let p, g, m = !1,
                v = !1,
                y = new wy;
            const w = () => new Qy(((e, t) => {
                    let n;
                    const r = () => {
                        m && (e(), clearInterval(n))
                    };
                    m ? e() : v ? n = setInterval(r, 100) : t(new Error("Not configured"))
                })),
                b = e => ({
                    error: {
                        result: "ERROR",
                        cause: "INVALID_REQUEST",
                        explanation: e
                    }
                }),
                _ = e => e.version >= 32 && (!!e.hasOwnProperty("order") && e.order.hasOwnProperty("subMerchant")),
                M = e => {
                    if (e.version > 18) {
                        return (e.session || {}).hasOwnProperty("id")
                    }
                    return e.hasOwnProperty("session")
                },
                D = (e, t) => {
                    window.console && t && console[t] && console[t](e)
                },
                x = () => {
                    const t = document.getElementsByTagName("script");
                    for (let n = 0; n < t.length; n++) {
                        const r = t[n].src;
                        if (r && r === e) return t[n]
                    }
                    return null
                },
                C = () => new Qy((e => {
                    new Qy((e => {
                        window && window.document && document && document.body ? (a = document.body, e()) : document.addEventListener("DOMContentLoaded", (() => {
                            a = document.body, e()
                        }))
                    })).then((() => {
                        null != l && e(), l = new my(p), document.body.appendChild(l), m = !0, v = !1, e()
                    }))
                })),
                E = () => {
                    p === hy ? l.style.display = "none" : d.parentNode && d.parentNode.removeChild(d)
                },
                I = () => {
                    p === hy ? l.style.display = "inline-block" : a.appendChild(d), document.getElementById(i) || (s = new vy(`https://${f}/static/checkout/landing/index.html`, p, i), s.onload = function () {
                        g.shouldResumeSession() && r.postToChild(s, "resume", {
                            sessionId: y.getSessionId()
                        })
                    }, a.appendChild(s))
                },
                T = () => {
                    p = fy, a = document.querySelector(u), a.style.maxHeight = "323px", a.style.overflow = "hidden", a.style.transition = "max-height 0.5s ease-out", I()
                },
                k = () => {
                    s = document.getElementById(i)
                };

            function S(e) {
                function t(e) {
                    OpenBanking.launchOpenBankingUI(e.launchRequest, (t => {
                        t && (e.errorData.status = t.status, r.postToChild(s, "OpenBanking: retry", e.errorData))
                    }))
                }
                r.onEvent("open:embedded", (() => {
                    E(), s.classList.remove("acs-takeover"), (0, dy.iframeResizer)({
                        heightCalculationMethod: "taggedElement",
                        widthCalculationMethod: "taggedElement",
                        onResized(e) {
                            let {
                                iframe: t,
                                height: n,
                                width: r
                            } = e;
                            a.style.maxHeight = n + "px"
                        }
                    }, "#hc-comms-layer-iframe")
                })), r.onEvent("app:resize", (e => {
                    s.style.minHeight = e + "px", a.style.maxHeight = e + "px"
                })), r.onEvent("activate", (() => {
                    k(), e.checkoutVersion = n, e.parentUrl = window.location.href, e.callbacks = {
                        complete: g.callbackList.hasOwnProperty("complete"),
                        error: g.callbackList.hasOwnProperty("error"),
                        cancel: g.callbackList.hasOwnProperty("cancel"),
                        timeout: g.callbackList.hasOwnProperty("timeout")
                    }, g.shouldResumeSession() || (p === fy ? r.postToChild(s, "configure", e) : r.postToChild(s, "configurePage", e))
                })), r.onEvent("OpenBanking: LaunchUI", (e => {
                    if (window.OpenBanking) t(e);
                    else {
                        let n = document.createElement("script");
                        n.setAttribute("src", e.url), document.head.appendChild(n), n.onload = () => {
                            OpenBanking.configure(e.config, (n => {
                                "SUCCESS" !== n.status ? r.postToChild(s, "OpenBanking: configureError") : t(e)
                            }))
                        }
                    }
                })), r.onEvent("error", (e => {
                    k(), g.errorHandler(e), s.parentNode.removeChild(s), E()
                })), r.onEvent("complete", (e => {
                    g.completeHandler(e)
                })), r.onEvent("timeout", (e => {
                    k(), g.timeoutHandler(e), s.parentNode.removeChild(s)
                })), r.onEvent("top:configuredCallbacks", (() => {
                    k(), r.postToChild(s, "app:configuredCallbacks", {
                        complete: g.callbackList.hasOwnProperty("complete"),
                        error: g.callbackList.hasOwnProperty("error"),
                        cancel: g.callbackList.hasOwnProperty("cancel"),
                        timeout: g.callbackList.hasOwnProperty("timeout")
                    }), r.postToChild(s, "app:returnUrl", {
                        returnUrl: window.location.href
                    })
                })), r.onEvent("redirect", (e => {
                    g.beforeRedirectHandler({
                        sessionId: o
                    }), window.location.href = e.url
                })), r.onEvent("redirectToExternal", (e => {
                    g.beforeRedirectHandler({
                        sessionId: o
                    })
                })), r.onEvent("make:acsiframe", (() => {
                    s.classList.add("acs-takeover")
                })), r.onEvent("safeToDeleteData", (() => {
                    y.removeSavedData()
                }))
            }
            return window.onload = () => {
                g = new Ny(x()), g.shouldResumeSession() && setTimeout((e => {
                    if (y.hasShowLightboxFunc()) {
                        Checkout.configure({
                            session: {
                                id: e.id
                            }
                        });
                        const t = document.createElement("script"),
                            n = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                        Object.assign(t, {
                            id: n,
                            type: "text/javascript"
                        }), t.innerHTML = `\n            (${y.getShowLightboxFunc()})();\n            const target = document.querySelector('#${n}');\n            document.body.removeChild(target);\n          `, document.body.appendChild(t)
                    }
                }), 1, {
                    id: y.getSessionId(),
                    func: y.getShowLightboxFunc()
                })
            }, {
                configure: e => new Qy(((t, n) => {
                    g || (g = new Ny(x())), v = !0;
                    e.interaction = e.interaction || {};
                    try {
                        (e => {
                            const t = e.interaction;
                            if (t.hasOwnProperty("cancelUrl")) throw b("Unexpected parameter .cancelUrl");
                            if (t.hasOwnProperty("timeoutUrl")) throw b("Unexpected parameter .timeoutUrl");
                            e.interaction = e.interaction || {};
                            let n = g.getCallbacks();
                            if ("string" == typeof n.cancel ? e.interaction.cancelUrl = n.cancel : e.interaction.cancelUrl = Ny.defaultCancelUrl, "string" == typeof n.timeout ? e.interaction.timeoutUrl = n.timeout : e.interaction.timeoutUrl = Ny.defaultTimeoutUrl, e.merchant && (console.warn("merchantId is not allowed via configure(), deleting..."), delete e.merchant), e.order) {
                                if (e.order.amount) throw b("order.amount is not allowed via configure()");
                                if (e.order.currency) throw b("order.currency is not allowed via configure()");
                                if (e.order.netAmount && e.order.amount) throw b("Either order.amount or order.netAmount must be defined");
                                if (e.order.netAmount && e.interaction && "NONE" === e.interaction.operation) throw b("order.netAmount must not be defined when interaction.operation is defined with a value of 'NONE'.");
                                if (e.order.surchargeAmount) throw b("The value order.surchargeAmount must not be defined, it will be calculated by the gateway")
                            }
                            if (!M(e) && _(e)) throw b("Session id required when configuring hosted checkout with sub-merchant details.")
                        })(e)
                    } catch (e) {
                        n(e)
                    }
                    C().then((() => {
                        g.shouldResumeSession() ? e.session.id = y.getSessionId() : g.shouldNotRemoveSavedData() || y.removeSavedData();
                        const r = e.session && e.session.id ? e.session.id : "";
                        r ? o = r : n("Session ID not provided."), h ? (c = h, S(e), g.shouldResumeSession() && (u = y.getEmbedContainer(), w().then((() => T())), g.callbackList.hasOwnProperty("afterRedirect") && g.afterRedirectHandler()), t()) : (c = "", setTimeout((() => E()), 1e3), D("Error: Missing hostedSessionBaseUrl", "error"), n("Error: Missing hostedSessionBaseUrl"))
                    }))
                })),
                showEmbeddedPage: (e, t) => (t && y.setShowLightboxFunc(t), new Qy(((t, n) => {
                    var r;
                    r = e, document.querySelector(r) ? (u = e, y.setEmbedContainer(u), w().then((() => {
                        T(), t()
                    })).catch((e => {
                        D("Checkout is not configured. Cause:" + e.message, "error"), n("Checkout is not configured. Cause:" + e.message)
                    }))) : (D('Error: please provide a valid container for embedded. ie "#some-div"', "error"), n('Error: please provide a valid container for embedded. ie "#some-div"'))
                }))),
                showPaymentPage: () => new Qy(((e, t) => {
                    w().then((() => {
                        p = hy, I(), e()
                    })).catch((e => {
                        D("Checkout is not configured. Cause:" + e.message, "error"), t("Checkout is not configured. Cause:" + e.message)
                    }))
                })),
                saveFormFields: () => {
                    console.log("saveFormFields")
                },
                restoreFormFields: () => {
                    console.log("restoreFormFields")
                }
            }
        }, window.Checkout = Checkout()
    })();
    var o = window;
    for (var i in r) o[i] = r[i];
    r.__esModule && Object.defineProperty(o, "__esModule", {
        value: !0
    })
})();

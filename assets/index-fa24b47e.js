var j_ = Object.defineProperty;
var L_ = (e,t,n)=>t in e ? j_(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var $_ = (e,t)=>()=>(t || e((t = {
    exports: {}
}).exports, t),
t.exports);
var Zr = (e,t,n)=>(L_(e, typeof t != "symbol" ? t + "" : t, n),
n);
var D8 = $_((A8,bt)=>{
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload"))
            return;
        for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
            r(i);
        new MutationObserver(i=>{
            for (const s of i)
                if (s.type === "childList")
                    for (const o of s.addedNodes)
                        o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
        }
        ).observe(document, {
            childList: !0,
            subtree: !0
        });
        function n(i) {
            const s = {};
            return i.integrity && (s.integrity = i.integrity),
            i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
            s
        }
        function r(i) {
            if (i.ep)
                return;
            i.ep = !0;
            const s = n(i);
            fetch(i.href, s)
        }
    }
    )();
    function Uh(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var Fh = {
        exports: {}
    }
      , ia = {}
      , zh = {
        exports: {}
    }
      , F = {};
    /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
    var is = Symbol.for("react.element")
      , B_ = Symbol.for("react.ask")
      , U_ = Symbol.for("react.fragment")
      , F_ = Symbol.for("react.strict_mode")
      , z_ = Symbol.for("react.profiler")
      , V_ = Symbol.for("react.provider")
      , G_ = Symbol.for("react.context")
      , H_ = Symbol.for("react.forward_ref")
      , Y_ = Symbol.for("react.suspense")
      , W_ = Symbol.for("react.memo")
      , q_ = Symbol.for("react.lazy")
      , ld = Symbol.iterator;
    function K_(e) {
        return e === null || typeof e != "object" ? null : (e = ld && e[ld] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var Vh = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , Gh = Object.assign
      , Hh = {};
    function Hr(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = Hh,
        this.updater = n || Vh
    }
    Hr.prototype.isReactComponent = {};
    Hr.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
    }
    ;
    Hr.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }
    ;
    function Yh() {}
    Yh.prototype = Hr.prototype;
    function wc(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = Hh,
        this.updater = n || Vh
    }
    var Tc = wc.prototype = new Yh;
    Tc.constructor = wc;
    Gh(Tc, Hr.prototype);
    Tc.isPureReactComponent = !0;
    var ud = Array.isArray
      , Wh = Object.prototype.hasOwnProperty
      , xc = {
        current: null
    }
      , qh = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function Kh(e, t, n) {
        var r, i = {}, s = null, o = null;
        if (t != null)
            for (r in t.ref !== void 0 && (o = t.ref),
            t.key !== void 0 && (s = "" + t.key),
            t)
                Wh.call(t, r) && !qh.hasOwnProperty(r) && (i[r] = t[r]);
        var a = arguments.length - 2;
        if (a === 1)
            i.children = n;
        else if (1 < a) {
            for (var l = Array(a), u = 0; u < a; u++)
                l[u] = arguments[u + 2];
            i.children = l
        }
        if (e && e.defaultProps)
            for (r in a = e.defaultProps,
            a)
                i[r] === void 0 && (i[r] = a[r]);
        return {
            $$typeof: is,
            type: e,
            key: s,
            ref: o,
            props: i,
            _owner: xc.current
        }
    }
    function X_(e, t) {
        return {
            $$typeof: is,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        }
    }
    function kc(e) {
        return typeof e == "object" && e !== null && e.$$typeof === is
    }
    function Q_(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n]
        })
    }
    var cd = /\/+/g;
    function Qa(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? Q_("" + e.key) : t.toString(36)
    }
    function Js(e, t, n, r, i) {
        var s = typeof e;
        (s === "undefined" || s === "boolean") && (e = null);
        var o = !1;
        if (e === null)
            o = !0;
        else
            switch (s) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                case is:
                case B_:
                    o = !0
                }
            }
        if (o)
            return o = e,
            i = i(o),
            e = r === "" ? "." + Qa(o, 0) : r,
            ud(i) ? (n = "",
            e != null && (n = e.replace(cd, "$&/") + "/"),
            Js(i, t, n, "", function(u) {
                return u
            })) : i != null && (kc(i) && (i = X_(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(cd, "$&/") + "/") + e)),
            t.push(i)),
            1;
        if (o = 0,
        r = r === "" ? "." : r + ":",
        ud(e))
            for (var a = 0; a < e.length; a++) {
                s = e[a];
                var l = r + Qa(s, a);
                o += Js(s, t, n, l, i)
            }
        else if (l = K_(e),
        typeof l == "function")
            for (e = l.call(e),
            a = 0; !(s = e.next()).done; )
                s = s.value,
                l = r + Qa(s, a++),
                o += Js(s, t, n, l, i);
        else if (s === "object")
            throw t = String(e),
            Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return o
    }
    function ws(e, t, n) {
        if (e == null)
            return e;
        var r = []
          , i = 0;
        return Js(e, r, "", "", function(s) {
            return t.call(n, s, i++)
        }),
        r
    }
    function J_(e) {
        if (e._status === -1) {
            var t = e._result;
            t = t(),
            t.then(function(n) {
                (e._status === 0 || e._status === -1) && (e._status = 1,
                e._result = n)
            }, function(n) {
                (e._status === 0 || e._status === -1) && (e._status = 2,
                e._result = n)
            }),
            e._status === -1 && (e._status = 0,
            e._result = t)
        }
        if (e._status === 1)
            return e._result.default;
        throw e._result
    }
    var Ie = {
        current: null
    }
      , Zs = {
        transition: null
    }
      , Z_ = {
        ReactCurrentDispatcher: Ie,
        ReactCurrentBatchConfig: Zs,
        ReactCurrentOwner: xc
    };
    F.Children = {
        map: ws,
        forEach: function(e, t, n) {
            ws(e, function() {
                t.apply(this, arguments)
            }, n)
        },
        count: function(e) {
            var t = 0;
            return ws(e, function() {
                t++
            }),
            t
        },
        toArray: function(e) {
            return ws(e, function(t) {
                return t
            }) || []
        },
        only: function(e) {
            if (!kc(e))
                throw Error("React.Children.only expected to receive a single React element child.");
            return e
        }
    };
    F.Component = Hr;
    F.Fragment = U_;
    F.Profiler = z_;
    F.PureComponent = wc;
    F.StrictMode = F_;
    F.Suspense = Y_;
    F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z_;
    F.cloneElement = function(e, t, n) {
        if (e == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = Gh({}, e.props)
          , i = e.key
          , s = e.ref
          , o = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (s = t.ref,
            o = xc.current),
            t.key !== void 0 && (i = "" + t.key),
            e.type && e.type.defaultProps)
                var a = e.type.defaultProps;
            for (l in t)
                Wh.call(t, l) && !qh.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
        }
        var l = arguments.length - 2;
        if (l === 1)
            r.children = n;
        else if (1 < l) {
            a = Array(l);
            for (var u = 0; u < l; u++)
                a[u] = arguments[u + 2];
            r.children = a
        }
        return {
            $$typeof: is,
            type: e.type,
            key: i,
            ref: s,
            props: r,
            _owner: o
        }
    }
    ;
    F.createContext = function(e) {
        return e = {
            $$typeof: G_,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        e.Provider = {
            $$typeof: V_,
            _context: e
        },
        e.Consumer = e
    }
    ;
    F.createElement = Kh;
    F.createFactory = function(e) {
        var t = Kh.bind(null, e);
        return t.type = e,
        t
    }
    ;
    F.createRef = function() {
        return {
            current: null
        }
    }
    ;
    F.forwardRef = function(e) {
        return {
            $$typeof: H_,
            render: e
        }
    }
    ;
    F.isValidElement = kc;
    F.lazy = function(e) {
        return {
            $$typeof: q_,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: J_
        }
    }
    ;
    F.memo = function(e, t) {
        return {
            $$typeof: W_,
            type: e,
            compare: t === void 0 ? null : t
        }
    }
    ;
    F.startTransition = function(e) {
        var t = Zs.transition;
        Zs.transition = {};
        try {
            e()
        } finally {
            Zs.transition = t
        }
    }
    ;
    F.unstable_act = function() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    ;
    F.useCallback = function(e, t) {
        return Ie.current.useCallback(e, t)
    }
    ;
    F.useContext = function(e) {
        return Ie.current.useContext(e)
    }
    ;
    F.useDebugValue = function() {}
    ;
    F.useDeferredValue = function(e) {
        return Ie.current.useDeferredValue(e)
    }
    ;
    F.useEffect = function(e, t) {
        return Ie.current.useEffect(e, t)
    }
    ;
    F.useId = function() {
        return Ie.current.useId()
    }
    ;
    F.useImperativeHandle = function(e, t, n) {
        return Ie.current.useImperativeHandle(e, t, n)
    }
    ;
    F.useInsertionEffect = function(e, t) {
        return Ie.current.useInsertionEffect(e, t)
    }
    ;
    F.useLayoutEffect = function(e, t) {
        return Ie.current.useLayoutEffect(e, t)
    }
    ;
    F.useMemo = function(e, t) {
        return Ie.current.useMemo(e, t)
    }
    ;
    F.useReducer = function(e, t, n) {
        return Ie.current.useReducer(e, t, n)
    }
    ;
    F.useRef = function(e) {
        return Ie.current.useRef(e)
    }
    ;
    F.useState = function(e) {
        return Ie.current.useState(e)
    }
    ;
    F.useSyncExternalStore = function(e, t, n) {
        return Ie.current.useSyncExternalStore(e, t, n)
    }
    ;
    F.useTransition = function() {
        return Ie.current.useTransition()
    }
    ;
    F.version = "18.2.0";
    zh.exports = F;
    var C = zh.exports;
    const Le = Uh(C);
    /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
    var ey = C
      , ty = Symbol.for("react.element")
      , ny = Symbol.for("react.fragment")
      , ry = Object.prototype.hasOwnProperty
      , iy = ey.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , sy = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function Xh(e, t, n) {
        var r, i = {}, s = null, o = null;
        n !== void 0 && (s = "" + n),
        t.key !== void 0 && (s = "" + t.key),
        t.ref !== void 0 && (o = t.ref);
        for (r in t)
            ry.call(t, r) && !sy.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
            for (r in t = e.defaultProps,
            t)
                i[r] === void 0 && (i[r] = t[r]);
        return {
            $$typeof: ty,
            type: e,
            key: s,
            ref: o,
            props: i,
            _owner: iy.current
        }
    }
    ia.Fragment = ny;
    ia.jsx = Xh;
    ia.jsxs = Xh;
    Fh.exports = ia;
    var y = Fh.exports;
    function Qh(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    const {toString: oy} = Object.prototype
      , {getPrototypeOf: Rc} = Object
      , sa = (e=>t=>{
        const n = oy.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
    }
    )(Object.create(null))
      , Nt = e=>(e = e.toLowerCase(),
    t=>sa(t) === e)
      , oa = e=>t=>typeof t === e
      , {isArray: Yr} = Array
      , Ii = oa("undefined");
    function ay(e) {
        return e !== null && !Ii(e) && e.constructor !== null && !Ii(e.constructor) && ot(e.constructor.isBuffer) && e.constructor.isBuffer(e)
    }
    const Jh = Nt("ArrayBuffer");
    function ly(e) {
        let t;
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Jh(e.buffer),
        t
    }
    const uy = oa("string")
      , ot = oa("function")
      , Zh = oa("number")
      , aa = e=>e !== null && typeof e == "object"
      , cy = e=>e === !0 || e === !1
      , eo = e=>{
        if (sa(e) !== "object")
            return !1;
        const t = Rc(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    }
      , fy = Nt("Date")
      , dy = Nt("File")
      , py = Nt("Blob")
      , hy = Nt("FileList")
      , my = e=>aa(e) && ot(e.pipe)
      , gy = e=>{
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || ot(e.append) && ((t = sa(e)) === "formdata" || t === "object" && ot(e.toString) && e.toString() === "[object FormData]"))
    }
      , _y = Nt("URLSearchParams")
      , yy = e=>e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    function ss(e, t, {allOwnKeys: n=!1}={}) {
        if (e === null || typeof e > "u")
            return;
        let r, i;
        if (typeof e != "object" && (e = [e]),
        Yr(e))
            for (r = 0,
            i = e.length; r < i; r++)
                t.call(null, e[r], r, e);
        else {
            const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
              , o = s.length;
            let a;
            for (r = 0; r < o; r++)
                a = s[r],
                t.call(null, e[a], a, e)
        }
    }
    function e1(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r = n.length, i;
        for (; r-- > 0; )
            if (i = n[r],
            t === i.toLowerCase())
                return i;
        return null
    }
    const t1 = (()=>typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)()
      , n1 = e=>!Ii(e) && e !== t1;
    function ql() {
        const {caseless: e} = n1(this) && this || {}
          , t = {}
          , n = (r,i)=>{
            const s = e && e1(t, i) || i;
            eo(t[s]) && eo(r) ? t[s] = ql(t[s], r) : eo(r) ? t[s] = ql({}, r) : Yr(r) ? t[s] = r.slice() : t[s] = r
        }
        ;
        for (let r = 0, i = arguments.length; r < i; r++)
            arguments[r] && ss(arguments[r], n);
        return t
    }
    const vy = (e,t,n,{allOwnKeys: r}={})=>(ss(t, (i,s)=>{
        n && ot(i) ? e[s] = Qh(i, n) : e[s] = i
    }
    , {
        allOwnKeys: r
    }),
    e)
      , Sy = e=>(e.charCodeAt(0) === 65279 && (e = e.slice(1)),
    e)
      , Ey = (e,t,n,r)=>{
        e.prototype = Object.create(t.prototype, r),
        e.prototype.constructor = e,
        Object.defineProperty(e, "super", {
            value: t.prototype
        }),
        n && Object.assign(e.prototype, n)
    }
      , wy = (e,t,n,r)=>{
        let i, s, o;
        const a = {};
        if (t = t || {},
        e == null)
            return t;
        do {
            for (i = Object.getOwnPropertyNames(e),
            s = i.length; s-- > 0; )
                o = i[s],
                (!r || r(o, e, t)) && !a[o] && (t[o] = e[o],
                a[o] = !0);
            e = n !== !1 && Rc(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    }
      , Ty = (e,t,n)=>{
        e = String(e),
        (n === void 0 || n > e.length) && (n = e.length),
        n -= t.length;
        const r = e.indexOf(t, n);
        return r !== -1 && r === n
    }
      , xy = e=>{
        if (!e)
            return null;
        if (Yr(e))
            return e;
        let t = e.length;
        if (!Zh(t))
            return null;
        const n = new Array(t);
        for (; t-- > 0; )
            n[t] = e[t];
        return n
    }
      , ky = (e=>t=>e && t instanceof e)(typeof Uint8Array < "u" && Rc(Uint8Array))
      , Ry = (e,t)=>{
        const r = (e && e[Symbol.iterator]).call(e);
        let i;
        for (; (i = r.next()) && !i.done; ) {
            const s = i.value;
            t.call(e, s[0], s[1])
        }
    }
      , Cy = (e,t)=>{
        let n;
        const r = [];
        for (; (n = e.exec(t)) !== null; )
            r.push(n);
        return r
    }
      , Ny = Nt("HTMLFormElement")
      , Py = e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
        return r.toUpperCase() + i
    })
      , fd = (({hasOwnProperty: e})=>(t,n)=>e.call(t, n))(Object.prototype)
      , Dy = Nt("RegExp")
      , r1 = (e,t)=>{
        const n = Object.getOwnPropertyDescriptors(e)
          , r = {};
        ss(n, (i,s)=>{
            t(i, s, e) !== !1 && (r[s] = i)
        }
        ),
        Object.defineProperties(e, r)
    }
      , Oy = e=>{
        r1(e, (t,n)=>{
            if (ot(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
                return !1;
            const r = e[n];
            if (ot(r)) {
                if (t.enumerable = !1,
                "writable"in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = ()=>{
                    throw Error("Can not rewrite read-only method '" + n + "'")
                }
                )
            }
        }
        )
    }
      , Iy = (e,t)=>{
        const n = {}
          , r = i=>{
            i.forEach(s=>{
                n[s] = !0
            }
            )
        }
        ;
        return Yr(e) ? r(e) : r(String(e).split(t)),
        n
    }
      , Ay = ()=>{}
      , My = (e,t)=>(e = +e,
    Number.isFinite(e) ? e : t)
      , Ja = "abcdefghijklmnopqrstuvwxyz"
      , dd = "0123456789"
      , i1 = {
        DIGIT: dd,
        ALPHA: Ja,
        ALPHA_DIGIT: Ja + Ja.toUpperCase() + dd
    }
      , by = (e=16,t=i1.ALPHA_DIGIT)=>{
        let n = "";
        const {length: r} = t;
        for (; e--; )
            n += t[Math.random() * r | 0];
        return n
    }
    ;
    function jy(e) {
        return !!(e && ot(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
    }
    const Ly = e=>{
        const t = new Array(10)
          , n = (r,i)=>{
            if (aa(r)) {
                if (t.indexOf(r) >= 0)
                    return;
                if (!("toJSON"in r)) {
                    t[i] = r;
                    const s = Yr(r) ? [] : {};
                    return ss(r, (o,a)=>{
                        const l = n(o, i + 1);
                        !Ii(l) && (s[a] = l)
                    }
                    ),
                    t[i] = void 0,
                    s
                }
            }
            return r
        }
        ;
        return n(e, 0)
    }
      , $y = Nt("AsyncFunction")
      , By = e=>e && (aa(e) || ot(e)) && ot(e.then) && ot(e.catch)
      , w = {
        isArray: Yr,
        isArrayBuffer: Jh,
        isBuffer: ay,
        isFormData: gy,
        isArrayBufferView: ly,
        isString: uy,
        isNumber: Zh,
        isBoolean: cy,
        isObject: aa,
        isPlainObject: eo,
        isUndefined: Ii,
        isDate: fy,
        isFile: dy,
        isBlob: py,
        isRegExp: Dy,
        isFunction: ot,
        isStream: my,
        isURLSearchParams: _y,
        isTypedArray: ky,
        isFileList: hy,
        forEach: ss,
        merge: ql,
        extend: vy,
        trim: yy,
        stripBOM: Sy,
        inherits: Ey,
        toFlatObject: wy,
        kindOf: sa,
        kindOfTest: Nt,
        endsWith: Ty,
        toArray: xy,
        forEachEntry: Ry,
        matchAll: Cy,
        isHTMLForm: Ny,
        hasOwnProperty: fd,
        hasOwnProp: fd,
        reduceDescriptors: r1,
        freezeMethods: Oy,
        toObjectSet: Iy,
        toCamelCase: Py,
        noop: Ay,
        toFiniteNumber: My,
        findKey: e1,
        global: t1,
        isContextDefined: n1,
        ALPHABET: i1,
        generateString: by,
        isSpecCompliantForm: jy,
        toJSONObject: Ly,
        isAsyncFn: $y,
        isThenable: By
    };
    function z(e, t, n, r, i) {
        Error.call(this),
        Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
        this.message = e,
        this.name = "AxiosError",
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        i && (this.response = i)
    }
    w.inherits(z, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: w.toJSONObject(this.config),
                code: this.code,
                status: this.response && this.response.status ? this.response.status : null
            }
        }
    });
    const s1 = z.prototype
      , o1 = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e=>{
        o1[e] = {
            value: e
        }
    }
    );
    Object.defineProperties(z, o1);
    Object.defineProperty(s1, "isAxiosError", {
        value: !0
    });
    z.from = (e,t,n,r,i,s)=>{
        const o = Object.create(s1);
        return w.toFlatObject(e, o, function(l) {
            return l !== Error.prototype
        }, a=>a !== "isAxiosError"),
        z.call(o, e.message, t, n, r, i),
        o.cause = e,
        o.name = e.name,
        s && Object.assign(o, s),
        o
    }
    ;
    const Uy = null;
    function Kl(e) {
        return w.isPlainObject(e) || w.isArray(e)
    }
    function a1(e) {
        return w.endsWith(e, "[]") ? e.slice(0, -2) : e
    }
    function pd(e, t, n) {
        return e ? e.concat(t).map(function(i, s) {
            return i = a1(i),
            !n && s ? "[" + i + "]" : i
        }).join(n ? "." : "") : t
    }
    function Fy(e) {
        return w.isArray(e) && !e.some(Kl)
    }
    const zy = w.toFlatObject(w, {}, null, function(t) {
        return /^is[A-Z]/.test(t)
    });
    function la(e, t, n) {
        if (!w.isObject(e))
            throw new TypeError("target must be an object");
        t = t || new FormData,
        n = w.toFlatObject(n, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function(v, E) {
            return !w.isUndefined(E[v])
        });
        const r = n.metaTokens
          , i = n.visitor || c
          , s = n.dots
          , o = n.indexes
          , l = (n.Blob || typeof Blob < "u" && Blob) && w.isSpecCompliantForm(t);
        if (!w.isFunction(i))
            throw new TypeError("visitor must be a function");
        function u(_) {
            if (_ === null)
                return "";
            if (w.isDate(_))
                return _.toISOString();
            if (!l && w.isBlob(_))
                throw new z("Blob is not supported. Use a Buffer instead.");
            return w.isArrayBuffer(_) || w.isTypedArray(_) ? l && typeof Blob == "function" ? new Blob([_]) : Buffer.from(_) : _
        }
        function c(_, v, E) {
            let m = _;
            if (_ && !E && typeof _ == "object") {
                if (w.endsWith(v, "{}"))
                    v = r ? v : v.slice(0, -2),
                    _ = JSON.stringify(_);
                else if (w.isArray(_) && Fy(_) || (w.isFileList(_) || w.endsWith(v, "[]")) && (m = w.toArray(_)))
                    return v = a1(v),
                    m.forEach(function(g, S) {
                        !(w.isUndefined(g) || g === null) && t.append(o === !0 ? pd([v], S, s) : o === null ? v : v + "[]", u(g))
                    }),
                    !1
            }
            return Kl(_) ? !0 : (t.append(pd(E, v, s), u(_)),
            !1)
        }
        const f = []
          , d = Object.assign(zy, {
            defaultVisitor: c,
            convertValue: u,
            isVisitable: Kl
        });
        function h(_, v) {
            if (!w.isUndefined(_)) {
                if (f.indexOf(_) !== -1)
                    throw Error("Circular reference detected in " + v.join("."));
                f.push(_),
                w.forEach(_, function(m, p) {
                    (!(w.isUndefined(m) || m === null) && i.call(t, m, w.isString(p) ? p.trim() : p, v, d)) === !0 && h(m, v ? v.concat(p) : [p])
                }),
                f.pop()
            }
        }
        if (!w.isObject(e))
            throw new TypeError("data must be an object");
        return h(e),
        t
    }
    function hd(e) {
        const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
            return t[r]
        })
    }
    function Cc(e, t) {
        this._pairs = [],
        e && la(e, this, t)
    }
    const l1 = Cc.prototype;
    l1.append = function(t, n) {
        this._pairs.push([t, n])
    }
    ;
    l1.toString = function(t) {
        const n = t ? function(r) {
            return t.call(this, r, hd)
        }
        : hd;
        return this._pairs.map(function(i) {
            return n(i[0]) + "=" + n(i[1])
        }, "").join("&")
    }
    ;
    function Vy(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    function u1(e, t, n) {
        if (!t)
            return e;
        const r = n && n.encode || Vy
          , i = n && n.serialize;
        let s;
        if (i ? s = i(t, n) : s = w.isURLSearchParams(t) ? t.toString() : new Cc(t,n).toString(r),
        s) {
            const o = e.indexOf("#");
            o !== -1 && (e = e.slice(0, o)),
            e += (e.indexOf("?") === -1 ? "?" : "&") + s
        }
        return e
    }
    class Gy {
        constructor() {
            this.handlers = []
        }
        use(t, n, r) {
            return this.handlers.push({
                fulfilled: t,
                rejected: n,
                synchronous: r ? r.synchronous : !1,
                runWhen: r ? r.runWhen : null
            }),
            this.handlers.length - 1
        }
        eject(t) {
            this.handlers[t] && (this.handlers[t] = null)
        }
        clear() {
            this.handlers && (this.handlers = [])
        }
        forEach(t) {
            w.forEach(this.handlers, function(r) {
                r !== null && t(r)
            })
        }
    }
    const md = Gy
      , c1 = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    }
      , Hy = typeof URLSearchParams < "u" ? URLSearchParams : Cc
      , Yy = typeof FormData < "u" ? FormData : null
      , Wy = typeof Blob < "u" ? Blob : null
      , qy = (()=>{
        let e;
        return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
    }
    )()
      , Ky = (()=>typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")()
      , kt = {
        isBrowser: !0,
        classes: {
            URLSearchParams: Hy,
            FormData: Yy,
            Blob: Wy
        },
        isStandardBrowserEnv: qy,
        isStandardBrowserWebWorkerEnv: Ky,
        protocols: ["http", "https", "file", "blob", "url", "data"]
    };
    function Xy(e, t) {
        return la(e, new kt.classes.URLSearchParams, Object.assign({
            visitor: function(n, r, i, s) {
                return kt.isNode && w.isBuffer(n) ? (this.append(r, n.toString("base64")),
                !1) : s.defaultVisitor.apply(this, arguments)
            }
        }, t))
    }
    function Qy(e) {
        return w.matchAll(/\w+|\[(\w*)]/g, e).map(t=>t[0] === "[]" ? "" : t[1] || t[0])
    }
    function Jy(e) {
        const t = {}
          , n = Object.keys(e);
        let r;
        const i = n.length;
        let s;
        for (r = 0; r < i; r++)
            s = n[r],
            t[s] = e[s];
        return t
    }
    function f1(e) {
        function t(n, r, i, s) {
            let o = n[s++];
            const a = Number.isFinite(+o)
              , l = s >= n.length;
            return o = !o && w.isArray(i) ? i.length : o,
            l ? (w.hasOwnProp(i, o) ? i[o] = [i[o], r] : i[o] = r,
            !a) : ((!i[o] || !w.isObject(i[o])) && (i[o] = []),
            t(n, r, i[o], s) && w.isArray(i[o]) && (i[o] = Jy(i[o])),
            !a)
        }
        if (w.isFormData(e) && w.isFunction(e.entries)) {
            const n = {};
            return w.forEachEntry(e, (r,i)=>{
                t(Qy(r), i, n, 0)
            }
            ),
            n
        }
        return null
    }
    const Zy = {
        "Content-Type": void 0
    };
    function e2(e, t, n) {
        if (w.isString(e))
            try {
                return (t || JSON.parse)(e),
                w.trim(e)
            } catch (r) {
                if (r.name !== "SyntaxError")
                    throw r
            }
        return (n || JSON.stringify)(e)
    }
    const ua = {
        transitional: c1,
        adapter: ["xhr", "http"],
        transformRequest: [function(t, n) {
            const r = n.getContentType() || ""
              , i = r.indexOf("application/json") > -1
              , s = w.isObject(t);
            if (s && w.isHTMLForm(t) && (t = new FormData(t)),
            w.isFormData(t))
                return i && i ? JSON.stringify(f1(t)) : t;
            if (w.isArrayBuffer(t) || w.isBuffer(t) || w.isStream(t) || w.isFile(t) || w.isBlob(t))
                return t;
            if (w.isArrayBufferView(t))
                return t.buffer;
            if (w.isURLSearchParams(t))
                return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
                t.toString();
            let a;
            if (s) {
                if (r.indexOf("application/x-www-form-urlencoded") > -1)
                    return Xy(t, this.formSerializer).toString();
                if ((a = w.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                    const l = this.env && this.env.FormData;
                    return la(a ? {
                        "files[]": t
                    } : t, l && new l, this.formSerializer)
                }
            }
            return s || i ? (n.setContentType("application/json", !1),
            e2(t)) : t
        }
        ],
        transformResponse: [function(t) {
            const n = this.transitional || ua.transitional
              , r = n && n.forcedJSONParsing
              , i = this.responseType === "json";
            if (t && w.isString(t) && (r && !this.responseType || i)) {
                const o = !(n && n.silentJSONParsing) && i;
                try {
                    return JSON.parse(t)
                } catch (a) {
                    if (o)
                        throw a.name === "SyntaxError" ? z.from(a, z.ERR_BAD_RESPONSE, this, null, this.response) : a
                }
            }
            return t
        }
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: kt.classes.FormData,
            Blob: kt.classes.Blob
        },
        validateStatus: function(t) {
            return t >= 200 && t < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }
    };
    w.forEach(["delete", "get", "head"], function(t) {
        ua.headers[t] = {}
    });
    w.forEach(["post", "put", "patch"], function(t) {
        ua.headers[t] = w.merge(Zy)
    });
    const Nc = ua
      , t2 = w.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
      , n2 = e=>{
        const t = {};
        let n, r, i;
        return e && e.split(`
`).forEach(function(o) {
            i = o.indexOf(":"),
            n = o.substring(0, i).trim().toLowerCase(),
            r = o.substring(i + 1).trim(),
            !(!n || t[n] && t2[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
        }),
        t
    }
      , gd = Symbol("internals");
    function ei(e) {
        return e && String(e).trim().toLowerCase()
    }
    function to(e) {
        return e === !1 || e == null ? e : w.isArray(e) ? e.map(to) : String(e)
    }
    function r2(e) {
        const t = Object.create(null)
          , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
        let r;
        for (; r = n.exec(e); )
            t[r[1]] = r[2];
        return t
    }
    const i2 = e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
    function Za(e, t, n, r, i) {
        if (w.isFunction(r))
            return r.call(this, t, n);
        if (i && (t = n),
        !!w.isString(t)) {
            if (w.isString(r))
                return t.indexOf(r) !== -1;
            if (w.isRegExp(r))
                return r.test(t)
        }
    }
    function s2(e) {
        return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t,n,r)=>n.toUpperCase() + r)
    }
    function o2(e, t) {
        const n = w.toCamelCase(" " + t);
        ["get", "set", "has"].forEach(r=>{
            Object.defineProperty(e, r + n, {
                value: function(i, s, o) {
                    return this[r].call(this, t, i, s, o)
                },
                configurable: !0
            })
        }
        )
    }
    class ca {
        constructor(t) {
            t && this.set(t)
        }
        set(t, n, r) {
            const i = this;
            function s(a, l, u) {
                const c = ei(l);
                if (!c)
                    throw new Error("header name must be a non-empty string");
                const f = w.findKey(i, c);
                (!f || i[f] === void 0 || u === !0 || u === void 0 && i[f] !== !1) && (i[f || l] = to(a))
            }
            const o = (a,l)=>w.forEach(a, (u,c)=>s(u, c, l));
            return w.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : w.isString(t) && (t = t.trim()) && !i2(t) ? o(n2(t), n) : t != null && s(n, t, r),
            this
        }
        get(t, n) {
            if (t = ei(t),
            t) {
                const r = w.findKey(this, t);
                if (r) {
                    const i = this[r];
                    if (!n)
                        return i;
                    if (n === !0)
                        return r2(i);
                    if (w.isFunction(n))
                        return n.call(this, i, r);
                    if (w.isRegExp(n))
                        return n.exec(i);
                    throw new TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(t, n) {
            if (t = ei(t),
            t) {
                const r = w.findKey(this, t);
                return !!(r && this[r] !== void 0 && (!n || Za(this, this[r], r, n)))
            }
            return !1
        }
        delete(t, n) {
            const r = this;
            let i = !1;
            function s(o) {
                if (o = ei(o),
                o) {
                    const a = w.findKey(r, o);
                    a && (!n || Za(r, r[a], a, n)) && (delete r[a],
                    i = !0)
                }
            }
            return w.isArray(t) ? t.forEach(s) : s(t),
            i
        }
        clear(t) {
            const n = Object.keys(this);
            let r = n.length
              , i = !1;
            for (; r--; ) {
                const s = n[r];
                (!t || Za(this, this[s], s, t, !0)) && (delete this[s],
                i = !0)
            }
            return i
        }
        normalize(t) {
            const n = this
              , r = {};
            return w.forEach(this, (i,s)=>{
                const o = w.findKey(r, s);
                if (o) {
                    n[o] = to(i),
                    delete n[s];
                    return
                }
                const a = t ? s2(s) : String(s).trim();
                a !== s && delete n[s],
                n[a] = to(i),
                r[a] = !0
            }
            ),
            this
        }
        concat(...t) {
            return this.constructor.concat(this, ...t)
        }
        toJSON(t) {
            const n = Object.create(null);
            return w.forEach(this, (r,i)=>{
                r != null && r !== !1 && (n[i] = t && w.isArray(r) ? r.join(", ") : r)
            }
            ),
            n
        }
        [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map(([t,n])=>t + ": " + n).join(`
`)
        }
        get[Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(t) {
            return t instanceof this ? t : new this(t)
        }
        static concat(t, ...n) {
            const r = new this(t);
            return n.forEach(i=>r.set(i)),
            r
        }
        static accessor(t) {
            const r = (this[gd] = this[gd] = {
                accessors: {}
            }).accessors
              , i = this.prototype;
            function s(o) {
                const a = ei(o);
                r[a] || (o2(i, o),
                r[a] = !0)
            }
            return w.isArray(t) ? t.forEach(s) : s(t),
            this
        }
    }
    ca.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
    w.freezeMethods(ca.prototype);
    w.freezeMethods(ca);
    const jt = ca;
    function el(e, t) {
        const n = this || Nc
          , r = t || n
          , i = jt.from(r.headers);
        let s = r.data;
        return w.forEach(e, function(a) {
            s = a.call(n, s, i.normalize(), t ? t.status : void 0)
        }),
        i.normalize(),
        s
    }
    function d1(e) {
        return !!(e && e.__CANCEL__)
    }
    function os(e, t, n) {
        z.call(this, e ?? "canceled", z.ERR_CANCELED, t, n),
        this.name = "CanceledError"
    }
    w.inherits(os, z, {
        __CANCEL__: !0
    });
    function a2(e, t, n) {
        const r = n.config.validateStatus;
        !n.status || !r || r(n.status) ? e(n) : t(new z("Request failed with status code " + n.status,[z.ERR_BAD_REQUEST, z.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
    }
    const l2 = kt.isStandardBrowserEnv ? function() {
        return {
            write: function(n, r, i, s, o, a) {
                const l = [];
                l.push(n + "=" + encodeURIComponent(r)),
                w.isNumber(i) && l.push("expires=" + new Date(i).toGMTString()),
                w.isString(s) && l.push("path=" + s),
                w.isString(o) && l.push("domain=" + o),
                a === !0 && l.push("secure"),
                document.cookie = l.join("; ")
            },
            read: function(n) {
                const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
                return r ? decodeURIComponent(r[3]) : null
            },
            remove: function(n) {
                this.write(n, "", Date.now() - 864e5)
            }
        }
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }();
    function u2(e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
    }
    function c2(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
    function p1(e, t) {
        return e && !u2(t) ? c2(e, t) : t
    }
    const f2 = kt.isStandardBrowserEnv ? function() {
        const t = /(msie|trident)/i.test(navigator.userAgent)
          , n = document.createElement("a");
        let r;
        function i(s) {
            let o = s;
            return t && (n.setAttribute("href", o),
            o = n.href),
            n.setAttribute("href", o),
            {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
            }
        }
        return r = i(window.location.href),
        function(o) {
            const a = w.isString(o) ? i(o) : o;
            return a.protocol === r.protocol && a.host === r.host
        }
    }() : function() {
        return function() {
            return !0
        }
    }();
    function d2(e) {
        const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
        return t && t[1] || ""
    }
    function p2(e, t) {
        e = e || 10;
        const n = new Array(e)
          , r = new Array(e);
        let i = 0, s = 0, o;
        return t = t !== void 0 ? t : 1e3,
        function(l) {
            const u = Date.now()
              , c = r[s];
            o || (o = u),
            n[i] = l,
            r[i] = u;
            let f = s
              , d = 0;
            for (; f !== i; )
                d += n[f++],
                f = f % e;
            if (i = (i + 1) % e,
            i === s && (s = (s + 1) % e),
            u - o < t)
                return;
            const h = c && u - c;
            return h ? Math.round(d * 1e3 / h) : void 0
        }
    }
    function _d(e, t) {
        let n = 0;
        const r = p2(50, 250);
        return i=>{
            const s = i.loaded
              , o = i.lengthComputable ? i.total : void 0
              , a = s - n
              , l = r(a)
              , u = s <= o;
            n = s;
            const c = {
                loaded: s,
                total: o,
                progress: o ? s / o : void 0,
                bytes: a,
                rate: l || void 0,
                estimated: l && o && u ? (o - s) / l : void 0,
                event: i
            };
            c[t ? "download" : "upload"] = !0,
            e(c)
        }
    }
    const h2 = typeof XMLHttpRequest < "u"
      , m2 = h2 && function(e) {
        return new Promise(function(n, r) {
            let i = e.data;
            const s = jt.from(e.headers).normalize()
              , o = e.responseType;
            let a;
            function l() {
                e.cancelToken && e.cancelToken.unsubscribe(a),
                e.signal && e.signal.removeEventListener("abort", a)
            }
            w.isFormData(i) && (kt.isStandardBrowserEnv || kt.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.setContentType("multipart/form-data;", !1));
            let u = new XMLHttpRequest;
            if (e.auth) {
                const h = e.auth.username || ""
                  , _ = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                s.set("Authorization", "Basic " + btoa(h + ":" + _))
            }
            const c = p1(e.baseURL, e.url);
            u.open(e.method.toUpperCase(), u1(c, e.params, e.paramsSerializer), !0),
            u.timeout = e.timeout;
            function f() {
                if (!u)
                    return;
                const h = jt.from("getAllResponseHeaders"in u && u.getAllResponseHeaders())
                  , v = {
                    data: !o || o === "text" || o === "json" ? u.responseText : u.response,
                    status: u.status,
                    statusText: u.statusText,
                    headers: h,
                    config: e,
                    request: u
                };
                a2(function(m) {
                    n(m),
                    l()
                }, function(m) {
                    r(m),
                    l()
                }, v),
                u = null
            }
            if ("onloadend"in u ? u.onloadend = f : u.onreadystatechange = function() {
                !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(f)
            }
            ,
            u.onabort = function() {
                u && (r(new z("Request aborted",z.ECONNABORTED,e,u)),
                u = null)
            }
            ,
            u.onerror = function() {
                r(new z("Network Error",z.ERR_NETWORK,e,u)),
                u = null
            }
            ,
            u.ontimeout = function() {
                let _ = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                const v = e.transitional || c1;
                e.timeoutErrorMessage && (_ = e.timeoutErrorMessage),
                r(new z(_,v.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED,e,u)),
                u = null
            }
            ,
            kt.isStandardBrowserEnv) {
                const h = (e.withCredentials || f2(c)) && e.xsrfCookieName && l2.read(e.xsrfCookieName);
                h && s.set(e.xsrfHeaderName, h)
            }
            i === void 0 && s.setContentType(null),
            "setRequestHeader"in u && w.forEach(s.toJSON(), function(_, v) {
                u.setRequestHeader(v, _)
            }),
            w.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials),
            o && o !== "json" && (u.responseType = e.responseType),
            typeof e.onDownloadProgress == "function" && u.addEventListener("progress", _d(e.onDownloadProgress, !0)),
            typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", _d(e.onUploadProgress)),
            (e.cancelToken || e.signal) && (a = h=>{
                u && (r(!h || h.type ? new os(null,e,u) : h),
                u.abort(),
                u = null)
            }
            ,
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
            const d = d2(c);
            if (d && kt.protocols.indexOf(d) === -1) {
                r(new z("Unsupported protocol " + d + ":",z.ERR_BAD_REQUEST,e));
                return
            }
            u.send(i || null)
        }
        )
    }
      , no = {
        http: Uy,
        xhr: m2
    };
    w.forEach(no, (e,t)=>{
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                })
            } catch {}
            Object.defineProperty(e, "adapterName", {
                value: t
            })
        }
    }
    );
    const g2 = {
        getAdapter: e=>{
            e = w.isArray(e) ? e : [e];
            const {length: t} = e;
            let n, r;
            for (let i = 0; i < t && (n = e[i],
            !(r = w.isString(n) ? no[n.toLowerCase()] : n)); i++)
                ;
            if (!r)
                throw r === !1 ? new z(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT") : new Error(w.hasOwnProp(no, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
            if (!w.isFunction(r))
                throw new TypeError("adapter is not a function");
            return r
        }
        ,
        adapters: no
    };
    function tl(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
            throw new os(null,e)
    }
    function yd(e) {
        return tl(e),
        e.headers = jt.from(e.headers),
        e.data = el.call(e, e.transformRequest),
        ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
        g2.getAdapter(e.adapter || Nc.adapter)(e).then(function(r) {
            return tl(e),
            r.data = el.call(e, e.transformResponse, r),
            r.headers = jt.from(r.headers),
            r
        }, function(r) {
            return d1(r) || (tl(e),
            r && r.response && (r.response.data = el.call(e, e.transformResponse, r.response),
            r.response.headers = jt.from(r.response.headers))),
            Promise.reject(r)
        })
    }
    const vd = e=>e instanceof jt ? e.toJSON() : e;
    function Pr(e, t) {
        t = t || {};
        const n = {};
        function r(u, c, f) {
            return w.isPlainObject(u) && w.isPlainObject(c) ? w.merge.call({
                caseless: f
            }, u, c) : w.isPlainObject(c) ? w.merge({}, c) : w.isArray(c) ? c.slice() : c
        }
        function i(u, c, f) {
            if (w.isUndefined(c)) {
                if (!w.isUndefined(u))
                    return r(void 0, u, f)
            } else
                return r(u, c, f)
        }
        function s(u, c) {
            if (!w.isUndefined(c))
                return r(void 0, c)
        }
        function o(u, c) {
            if (w.isUndefined(c)) {
                if (!w.isUndefined(u))
                    return r(void 0, u)
            } else
                return r(void 0, c)
        }
        function a(u, c, f) {
            if (f in t)
                return r(u, c);
            if (f in e)
                return r(void 0, u)
        }
        const l = {
            url: s,
            method: s,
            data: s,
            baseURL: o,
            transformRequest: o,
            transformResponse: o,
            paramsSerializer: o,
            timeout: o,
            timeoutMessage: o,
            withCredentials: o,
            adapter: o,
            responseType: o,
            xsrfCookieName: o,
            xsrfHeaderName: o,
            onUploadProgress: o,
            onDownloadProgress: o,
            decompress: o,
            maxContentLength: o,
            maxBodyLength: o,
            beforeRedirect: o,
            transport: o,
            httpAgent: o,
            httpsAgent: o,
            cancelToken: o,
            socketPath: o,
            responseEncoding: o,
            validateStatus: a,
            headers: (u,c)=>i(vd(u), vd(c), !0)
        };
        return w.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
            const f = l[c] || i
              , d = f(e[c], t[c], c);
            w.isUndefined(d) && f !== a || (n[c] = d)
        }),
        n
    }
    const h1 = "1.4.0"
      , Pc = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((e,t)=>{
        Pc[e] = function(r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
        }
    }
    );
    const Sd = {};
    Pc.transitional = function(t, n, r) {
        function i(s, o) {
            return "[Axios v" + h1 + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "")
        }
        return (s,o,a)=>{
            if (t === !1)
                throw new z(i(o, " has been removed" + (n ? " in " + n : "")),z.ERR_DEPRECATED);
            return n && !Sd[o] && (Sd[o] = !0,
            console.warn(i(o, " has been deprecated since v" + n + " and will be removed in the near future"))),
            t ? t(s, o, a) : !0
        }
    }
    ;
    function _2(e, t, n) {
        if (typeof e != "object")
            throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let i = r.length;
        for (; i-- > 0; ) {
            const s = r[i]
              , o = t[s];
            if (o) {
                const a = e[s]
                  , l = a === void 0 || o(a, s, e);
                if (l !== !0)
                    throw new z("option " + s + " must be " + l,z.ERR_BAD_OPTION_VALUE);
                continue
            }
            if (n !== !0)
                throw new z("Unknown option " + s,z.ERR_BAD_OPTION)
        }
    }
    const Xl = {
        assertOptions: _2,
        validators: Pc
    }
      , Gt = Xl.validators;
    class So {
        constructor(t) {
            this.defaults = t,
            this.interceptors = {
                request: new md,
                response: new md
            }
        }
        request(t, n) {
            typeof t == "string" ? (n = n || {},
            n.url = t) : n = t || {},
            n = Pr(this.defaults, n);
            const {transitional: r, paramsSerializer: i, headers: s} = n;
            r !== void 0 && Xl.assertOptions(r, {
                silentJSONParsing: Gt.transitional(Gt.boolean),
                forcedJSONParsing: Gt.transitional(Gt.boolean),
                clarifyTimeoutError: Gt.transitional(Gt.boolean)
            }, !1),
            i != null && (w.isFunction(i) ? n.paramsSerializer = {
                serialize: i
            } : Xl.assertOptions(i, {
                encode: Gt.function,
                serialize: Gt.function
            }, !0)),
            n.method = (n.method || this.defaults.method || "get").toLowerCase();
            let o;
            o = s && w.merge(s.common, s[n.method]),
            o && w.forEach(["delete", "get", "head", "post", "put", "patch", "common"], _=>{
                delete s[_]
            }
            ),
            n.headers = jt.concat(o, s);
            const a = [];
            let l = !0;
            this.interceptors.request.forEach(function(v) {
                typeof v.runWhen == "function" && v.runWhen(n) === !1 || (l = l && v.synchronous,
                a.unshift(v.fulfilled, v.rejected))
            });
            const u = [];
            this.interceptors.response.forEach(function(v) {
                u.push(v.fulfilled, v.rejected)
            });
            let c, f = 0, d;
            if (!l) {
                const _ = [yd.bind(this), void 0];
                for (_.unshift.apply(_, a),
                _.push.apply(_, u),
                d = _.length,
                c = Promise.resolve(n); f < d; )
                    c = c.then(_[f++], _[f++]);
                return c
            }
            d = a.length;
            let h = n;
            for (f = 0; f < d; ) {
                const _ = a[f++]
                  , v = a[f++];
                try {
                    h = _(h)
                } catch (E) {
                    v.call(this, E);
                    break
                }
            }
            try {
                c = yd.call(this, h)
            } catch (_) {
                return Promise.reject(_)
            }
            for (f = 0,
            d = u.length; f < d; )
                c = c.then(u[f++], u[f++]);
            return c
        }
        getUri(t) {
            t = Pr(this.defaults, t);
            const n = p1(t.baseURL, t.url);
            return u1(n, t.params, t.paramsSerializer)
        }
    }
    w.forEach(["delete", "get", "head", "options"], function(t) {
        So.prototype[t] = function(n, r) {
            return this.request(Pr(r || {}, {
                method: t,
                url: n,
                data: (r || {}).data
            }))
        }
    });
    w.forEach(["post", "put", "patch"], function(t) {
        function n(r) {
            return function(s, o, a) {
                return this.request(Pr(a || {}, {
                    method: t,
                    headers: r ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: s,
                    data: o
                }))
            }
        }
        So.prototype[t] = n(),
        So.prototype[t + "Form"] = n(!0)
    });
    const ro = So;
    class Dc {
        constructor(t) {
            if (typeof t != "function")
                throw new TypeError("executor must be a function.");
            let n;
            this.promise = new Promise(function(s) {
                n = s
            }
            );
            const r = this;
            this.promise.then(i=>{
                if (!r._listeners)
                    return;
                let s = r._listeners.length;
                for (; s-- > 0; )
                    r._listeners[s](i);
                r._listeners = null
            }
            ),
            this.promise.then = i=>{
                let s;
                const o = new Promise(a=>{
                    r.subscribe(a),
                    s = a
                }
                ).then(i);
                return o.cancel = function() {
                    r.unsubscribe(s)
                }
                ,
                o
            }
            ,
            t(function(s, o, a) {
                r.reason || (r.reason = new os(s,o,a),
                n(r.reason))
            })
        }
        throwIfRequested() {
            if (this.reason)
                throw this.reason
        }
        subscribe(t) {
            if (this.reason) {
                t(this.reason);
                return
            }
            this._listeners ? this._listeners.push(t) : this._listeners = [t]
        }
        unsubscribe(t) {
            if (!this._listeners)
                return;
            const n = this._listeners.indexOf(t);
            n !== -1 && this._listeners.splice(n, 1)
        }
        static source() {
            let t;
            return {
                token: new Dc(function(i) {
                    t = i
                }
                ),
                cancel: t
            }
        }
    }
    const y2 = Dc;
    function v2(e) {
        return function(n) {
            return e.apply(null, n)
        }
    }
    function S2(e) {
        return w.isObject(e) && e.isAxiosError === !0
    }
    const Ql = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
    };
    Object.entries(Ql).forEach(([e,t])=>{
        Ql[t] = e
    }
    );
    const E2 = Ql;
    function m1(e) {
        const t = new ro(e)
          , n = Qh(ro.prototype.request, t);
        return w.extend(n, ro.prototype, t, {
            allOwnKeys: !0
        }),
        w.extend(n, t, null, {
            allOwnKeys: !0
        }),
        n.create = function(i) {
            return m1(Pr(e, i))
        }
        ,
        n
    }
    const he = m1(Nc);
    he.Axios = ro;
    he.CanceledError = os;
    he.CancelToken = y2;
    he.isCancel = d1;
    he.VERSION = h1;
    he.toFormData = la;
    he.AxiosError = z;
    he.Cancel = he.CanceledError;
    he.all = function(t) {
        return Promise.all(t)
    }
    ;
    he.spread = v2;
    he.isAxiosError = S2;
    he.mergeConfig = Pr;
    he.AxiosHeaders = jt;
    he.formToJSON = e=>f1(w.isHTMLForm(e) ? new FormData(e) : e);
    he.HttpStatusCode = E2;
    he.default = he;
    const w2 = he
      , Jl = w2.create({
        baseURL: "https://api.ngmc.co/v1"
    })
      , T2 = {
        0: null,
        1: null,
        2: "bbd5a88993058dcde2a8020de9355d99.webp",
        3: "7254bd2d0693164ea4dbf4764b918b98.webp",
        4: "9dd3b002cecf8631f5d8b6345135d6f8.webp",
        5: "045587184a595581bef2169bf6576726.webp"
    }
      , x2 = "3554ca87ce3d636cd9374e76128464f7.webp"
      , k2 = "2f0f5bb2031be2ba9c0a9afa6e12778c.webp"
      , Ed = e=>{
        let t;
        const n = new Set
          , r = (l,u)=>{
            const c = typeof l == "function" ? l(t) : l;
            if (!Object.is(c, t)) {
                const f = t;
                t = u ?? typeof c != "object" ? c : Object.assign({}, t, c),
                n.forEach(d=>d(t, f))
            }
        }
          , i = ()=>t
          , a = {
            setState: r,
            getState: i,
            subscribe: l=>(n.add(l),
            ()=>n.delete(l)),
            destroy: ()=>{
                n.clear()
            }
        };
        return t = e(r, i, a),
        a
    }
      , R2 = e=>e ? Ed(e) : Ed;
    var g1 = {
        exports: {}
    }
      , _1 = {}
      , y1 = {
        exports: {}
    }
      , v1 = {};
    /**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
    var Dr = C;
    function C2(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var N2 = typeof Object.is == "function" ? Object.is : C2
      , P2 = Dr.useState
      , D2 = Dr.useEffect
      , O2 = Dr.useLayoutEffect
      , I2 = Dr.useDebugValue;
    function A2(e, t) {
        var n = t()
          , r = P2({
            inst: {
                value: n,
                getSnapshot: t
            }
        })
          , i = r[0].inst
          , s = r[1];
        return O2(function() {
            i.value = n,
            i.getSnapshot = t,
            nl(i) && s({
                inst: i
            })
        }, [e, n, t]),
        D2(function() {
            return nl(i) && s({
                inst: i
            }),
            e(function() {
                nl(i) && s({
                    inst: i
                })
            })
        }, [e]),
        I2(n),
        n
    }
    function nl(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !N2(e, n)
        } catch {
            return !0
        }
    }
    function M2(e, t) {
        return t()
    }
    var b2 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? M2 : A2;
    v1.useSyncExternalStore = Dr.useSyncExternalStore !== void 0 ? Dr.useSyncExternalStore : b2;
    y1.exports = v1;
    var j2 = y1.exports;
    /**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
    var fa = C
      , L2 = j2;
    function $2(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var B2 = typeof Object.is == "function" ? Object.is : $2
      , U2 = L2.useSyncExternalStore
      , F2 = fa.useRef
      , z2 = fa.useEffect
      , V2 = fa.useMemo
      , G2 = fa.useDebugValue;
    _1.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
        var s = F2(null);
        if (s.current === null) {
            var o = {
                hasValue: !1,
                value: null
            };
            s.current = o
        } else
            o = s.current;
        s = V2(function() {
            function l(h) {
                if (!u) {
                    if (u = !0,
                    c = h,
                    h = r(h),
                    i !== void 0 && o.hasValue) {
                        var _ = o.value;
                        if (i(_, h))
                            return f = _
                    }
                    return f = h
                }
                if (_ = f,
                B2(c, h))
                    return _;
                var v = r(h);
                return i !== void 0 && i(_, v) ? _ : (c = h,
                f = v)
            }
            var u = !1, c, f, d = n === void 0 ? null : n;
            return [function() {
                return l(t())
            }
            , d === null ? void 0 : function() {
                return l(d())
            }
            ]
        }, [t, n, r, i]);
        var a = U2(e, s[0], s[1]);
        return z2(function() {
            o.hasValue = !0,
            o.value = a
        }, [a]),
        G2(a),
        a
    }
    ;
    g1.exports = _1;
    var H2 = g1.exports;
    const Y2 = Uh(H2)
      , {useSyncExternalStoreWithSelector: W2} = Y2;
    function q2(e, t=e.getState, n) {
        const r = W2(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
        return C.useDebugValue(r),
        r
    }
    const wd = e=>{
        const t = typeof e == "function" ? R2(e) : e
          , n = (r,i)=>q2(t, r, i);
        return Object.assign(n, t),
        n
    }
      , S1 = e=>e ? wd(e) : wd
      , Zl = new Map
      , Ts = e=>{
        const t = Zl.get(e);
        return t ? Object.fromEntries(Object.entries(t.stores).map(([n,r])=>[n, r.getState()])) : {}
    }
      , K2 = (e,t,n)=>{
        if (e === void 0)
            return {
                type: "untracked",
                connection: t.connect(n)
            };
        const r = Zl.get(n.name);
        if (r)
            return {
                type: "tracked",
                store: e,
                ...r
            };
        const i = {
            connection: t.connect(n),
            stores: {}
        };
        return Zl.set(n.name, i),
        {
            type: "tracked",
            store: e,
            ...i
        }
    }
      , X2 = (e,t={})=>(n,r,i)=>{
        const {enabled: s, anonymousActionType: o, store: a, ...l} = t;
        let u;
        try {
            u = (s ?? !1) && window.__REDUX_DEVTOOLS_EXTENSION__
        } catch {}
        if (!u)
            return e(n, r, i);
        const {connection: c, ...f} = K2(a, u, l);
        let d = !0;
        i.setState = (v,E,m)=>{
            const p = n(v, E);
            if (!d)
                return p;
            const g = m === void 0 ? {
                type: o || "anonymous"
            } : typeof m == "string" ? {
                type: m
            } : m;
            return a === void 0 ? (c == null || c.send(g, r()),
            p) : (c == null || c.send({
                ...g,
                type: `${a}/${g.type}`
            }, {
                ...Ts(l.name),
                [a]: i.getState()
            }),
            p)
        }
        ;
        const h = (...v)=>{
            const E = d;
            d = !1,
            n(...v),
            d = E
        }
          , _ = e(i.setState, r, i);
        if (f.type === "untracked" ? c == null || c.init(_) : (f.stores[f.store] = i,
        c == null || c.init(Object.fromEntries(Object.entries(f.stores).map(([v,E])=>[v, v === f.store ? _ : E.getState()])))),
        i.dispatchFromDevtools && typeof i.dispatch == "function") {
            let v = !1;
            const E = i.dispatch;
            i.dispatch = (...m)=>{
                E(...m)
            }
        }
        return c.subscribe(v=>{
            var E;
            switch (v.type) {
            case "ACTION":
                if (typeof v.payload != "string") {
                    console.error("[zustand devtools middleware] Unsupported action format");
                    return
                }
                return rl(v.payload, m=>{
                    if (m.type === "__setState") {
                        if (a === void 0) {
                            h(m.state);
                            return
                        }
                        Object.keys(m.state).length !== 1 && console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
                        const p = m.state[a];
                        if (p == null)
                            return;
                        JSON.stringify(i.getState()) !== JSON.stringify(p) && h(p);
                        return
                    }
                    i.dispatchFromDevtools && typeof i.dispatch == "function" && i.dispatch(m)
                }
                );
            case "DISPATCH":
                switch (v.payload.type) {
                case "RESET":
                    return h(_),
                    a === void 0 ? c == null ? void 0 : c.init(i.getState()) : c == null ? void 0 : c.init(Ts(l.name));
                case "COMMIT":
                    if (a === void 0) {
                        c == null || c.init(i.getState());
                        return
                    }
                    return c == null ? void 0 : c.init(Ts(l.name));
                case "ROLLBACK":
                    return rl(v.state, m=>{
                        if (a === void 0) {
                            h(m),
                            c == null || c.init(i.getState());
                            return
                        }
                        h(m[a]),
                        c == null || c.init(Ts(l.name))
                    }
                    );
                case "JUMP_TO_STATE":
                case "JUMP_TO_ACTION":
                    return rl(v.state, m=>{
                        if (a === void 0) {
                            h(m);
                            return
                        }
                        JSON.stringify(i.getState()) !== JSON.stringify(m[a]) && h(m[a])
                    }
                    );
                case "IMPORT_STATE":
                    {
                        const {nextLiftedState: m} = v.payload
                          , p = (E = m.computedStates.slice(-1)[0]) == null ? void 0 : E.state;
                        if (!p)
                            return;
                        h(a === void 0 ? p : p[a]),
                        c == null || c.send(null, m);
                        return
                    }
                case "PAUSE_RECORDING":
                    return d = !d
                }
                return
            }
        }
        ),
        _
    }
      , E1 = X2
      , rl = (e,t)=>{
        let n;
        try {
            n = JSON.parse(e)
        } catch (r) {
            console.error("[zustand devtools middleware] Could not parse the received json", r)
        }
        n !== void 0 && t(n)
    }
    ;
    function Q2(e, t) {
        let n;
        try {
            n = e()
        } catch {
            return
        }
        return {
            getItem: i=>{
                var s;
                const o = l=>l === null ? null : JSON.parse(l, t == null ? void 0 : t.reviver)
                  , a = (s = n.getItem(i)) != null ? s : null;
                return a instanceof Promise ? a.then(o) : o(a)
            }
            ,
            setItem: (i,s)=>n.setItem(i, JSON.stringify(s, t == null ? void 0 : t.replacer)),
            removeItem: i=>n.removeItem(i)
        }
    }
    const Ai = e=>t=>{
        try {
            const n = e(t);
            return n instanceof Promise ? n : {
                then(r) {
                    return Ai(r)(n)
                },
                catch(r) {
                    return this
                }
            }
        } catch (n) {
            return {
                then(r) {
                    return this
                },
                catch(r) {
                    return Ai(r)(n)
                }
            }
        }
    }
      , J2 = (e,t)=>(n,r,i)=>{
        let s = {
            getStorage: ()=>localStorage,
            serialize: JSON.stringify,
            deserialize: JSON.parse,
            partialize: E=>E,
            version: 0,
            merge: (E,m)=>({
                ...m,
                ...E
            }),
            ...t
        }
          , o = !1;
        const a = new Set
          , l = new Set;
        let u;
        try {
            u = s.getStorage()
        } catch {}
        if (!u)
            return e((...E)=>{
                console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),
                n(...E)
            }
            , r, i);
        const c = Ai(s.serialize)
          , f = ()=>{
            const E = s.partialize({
                ...r()
            });
            let m;
            const p = c({
                state: E,
                version: s.version
            }).then(g=>u.setItem(s.name, g)).catch(g=>{
                m = g
            }
            );
            if (m)
                throw m;
            return p
        }
          , d = i.setState;
        i.setState = (E,m)=>{
            d(E, m),
            f()
        }
        ;
        const h = e((...E)=>{
            n(...E),
            f()
        }
        , r, i);
        let _;
        const v = ()=>{
            var E;
            if (!u)
                return;
            o = !1,
            a.forEach(p=>p(r()));
            const m = ((E = s.onRehydrateStorage) == null ? void 0 : E.call(s, r())) || void 0;
            return Ai(u.getItem.bind(u))(s.name).then(p=>{
                if (p)
                    return s.deserialize(p)
            }
            ).then(p=>{
                if (p)
                    if (typeof p.version == "number" && p.version !== s.version) {
                        if (s.migrate)
                            return s.migrate(p.state, p.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    } else
                        return p.state
            }
            ).then(p=>{
                var g;
                return _ = s.merge(p, (g = r()) != null ? g : h),
                n(_, !0),
                f()
            }
            ).then(()=>{
                m == null || m(_, void 0),
                o = !0,
                l.forEach(p=>p(_))
            }
            ).catch(p=>{
                m == null || m(void 0, p)
            }
            )
        }
        ;
        return i.persist = {
            setOptions: E=>{
                s = {
                    ...s,
                    ...E
                },
                E.getStorage && (u = E.getStorage())
            }
            ,
            clearStorage: ()=>{
                u == null || u.removeItem(s.name)
            }
            ,
            getOptions: ()=>s,
            rehydrate: ()=>v(),
            hasHydrated: ()=>o,
            onHydrate: E=>(a.add(E),
            ()=>{
                a.delete(E)
            }
            ),
            onFinishHydration: E=>(l.add(E),
            ()=>{
                l.delete(E)
            }
            )
        },
        v(),
        _ || h
    }
      , Z2 = (e,t)=>(n,r,i)=>{
        let s = {
            storage: Q2(()=>localStorage),
            partialize: v=>v,
            version: 0,
            merge: (v,E)=>({
                ...E,
                ...v
            }),
            ...t
        }
          , o = !1;
        const a = new Set
          , l = new Set;
        let u = s.storage;
        if (!u)
            return e((...v)=>{
                console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),
                n(...v)
            }
            , r, i);
        const c = ()=>{
            const v = s.partialize({
                ...r()
            });
            return u.setItem(s.name, {
                state: v,
                version: s.version
            })
        }
          , f = i.setState;
        i.setState = (v,E)=>{
            f(v, E),
            c()
        }
        ;
        const d = e((...v)=>{
            n(...v),
            c()
        }
        , r, i);
        let h;
        const _ = ()=>{
            var v, E;
            if (!u)
                return;
            o = !1,
            a.forEach(p=>{
                var g;
                return p((g = r()) != null ? g : d)
            }
            );
            const m = ((E = s.onRehydrateStorage) == null ? void 0 : E.call(s, (v = r()) != null ? v : d)) || void 0;
            return Ai(u.getItem.bind(u))(s.name).then(p=>{
                if (p)
                    if (typeof p.version == "number" && p.version !== s.version) {
                        if (s.migrate)
                            return s.migrate(p.state, p.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    } else
                        return p.state
            }
            ).then(p=>{
                var g;
                return h = s.merge(p, (g = r()) != null ? g : d),
                n(h, !0),
                c()
            }
            ).then(()=>{
                m == null || m(h, void 0),
                h = r(),
                o = !0,
                l.forEach(p=>p(h))
            }
            ).catch(p=>{
                m == null || m(void 0, p)
            }
            )
        }
        ;
        return i.persist = {
            setOptions: v=>{
                s = {
                    ...s,
                    ...v
                },
                v.storage && (u = v.storage)
            }
            ,
            clearStorage: ()=>{
                u == null || u.removeItem(s.name)
            }
            ,
            getOptions: ()=>s,
            rehydrate: ()=>_(),
            hasHydrated: ()=>o,
            onHydrate: v=>(a.add(v),
            ()=>{
                a.delete(v)
            }
            ),
            onFinishHydration: v=>(l.add(v),
            ()=>{
                l.delete(v)
            }
            )
        },
        s.skipHydration || _(),
        h || d
    }
      , e3 = (e,t)=>"getStorage"in t || "serialize"in t || "deserialize"in t ? J2(e, t) : Z2(e, t)
      , w1 = e3;
    class Td {
        constructor(t, n, r, i) {
            Zr(this, "id");
            Zr(this, "title");
            Zr(this, "buckets");
            Zr(this, "bucketOverride");
            this.id = t,
            this.title = n,
            this.buckets = r,
            this.bucketOverride = i
        }
    }
    const Oc = S1()(w1(E1((e,t)=>({
        experiments: [],
        setExperiments: n=>e({
            experiments: n
        }),
        setExperimentOverride: (n,r)=>{
            const i = t().experiments.map(s=>s.id === n ? new Td(s.id,s.title,s.buckets,r) : s);
            e({
                experiments: i
            })
        }
        ,
        loadExperiments: async()=>{
            const {data: n} = await Jl.get("experiments");
            e({
                experiments: n.map(r=>{
                    const i = t().experiments.find(s=>s.id === r.id);
                    return new Td(r.id,r.title,r.buckets,(i == null ? void 0 : i.bucketOverride) ?? null)
                }
                )
            })
        }
    })), {
        name: "ExperimentStore",
        version: 1
    }));
    window.experimentStore = Oc.getState();
    function t3(e) {
        return Oc(n=>n.experiments).find(n=>n.id === e)
    }
    function n3() {
        const e = t3("2023-01_promo_background");
        if (!e)
            return null;
        const t = e.buckets.find(n=>e.bucketOverride ? n.id === e.bucketOverride : n.default);
        return t != null && t.config.type ? T2[t.config.type] : null
    }
    const Ic = S1()(E1(w1((e,t)=>({
        playerCount: 39e5,
        discordMemberCount: 3e4,
        setPlayerCount: n=>e({
            playerCount: n
        }),
        setDiscordMemberCount: n=>e({
            discordMemberCount: n
        }),
        loadPlayerCount: async()=>{
            const {data: n} = await Jl.get("servers/player-count");
            e({
                playerCount: n.count
            })
        }
        ,
        loadDiscordMemberCount: async()=>{
            const {data: n} = await Jl.get("discord");
            e({
                discordMemberCount: n.members
            })
        }
        ,
        loadCounts: async()=>{
            await Promise.all([t().loadPlayerCount(), t().loadDiscordMemberCount()])
        }
    }), {
        name: "CounterStore",
        version: 1
    })))
      , r3 = "_app_sjeli_1"
      , i3 = {
        app: r3
    }
      , s3 = "_wrapper_99ejy_1"
      , o3 = "_image_99ejy_11"
      , a3 = "_text_99ejy_19"
      , l3 = "_note_99ejy_33"
      , u3 = "_button_99ejy_43"
      , ti = {
        wrapper: s3,
        image: o3,
        text: a3,
        note: l3,
        button: u3
    };
    function c3() {
        return y.jsxs("div", {
            className: ti.wrapper,
            children: [y.jsx("div", {
                className: ti.image
            }), y.jsxs("div", {
                className: ti.text,
                children: [y.jsx("h4", {
                    children: "啊这……"
                }), y.jsxs("div", {
                    className: ti.note,
                    children: [y.jsx("p", {
                        children: "看起来这个网页好像出了点问题？"
                    }), y.jsx("p", {
                        children: "相信我们马上就能处理好它！"
                    })]
                })]
            }), y.jsx("button", {
                className: ti.button,
                onClick: ()=>window.location.reload(),
                type: "button",
                children: "再试试罢"
            })]
        })
    }
    const T1 = new Intl.NumberFormat("en-US")
      , f3 = "_button_uynac_1"
      , d3 = {
        button: f3
    };
    function x1(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number")
            r += e;
        else if (typeof e == "object")
            if (Array.isArray(e))
                for (t = 0; t < e.length; t++)
                    e[t] && (n = x1(e[t])) && (r && (r += " "),
                    r += n);
            else
                for (t in e)
                    e[t] && (r && (r += " "),
                    r += t);
        return r
    }
    function k1() {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
            (e = arguments[n++]) && (t = x1(e)) && (r && (r += " "),
            r += t);
        return r
    }
    function R1(e) {
        const {children: t, className: n, href: r, isExternal: i=!0} = e;
        return y.jsx("a", {
            className: k1(n, d3.button),
            href: r,
            rel: "noreferrer",
            target: i ? "_blank" : "_self",
            children: t
        })
    }
    const p3 = "_container_19xsr_1"
      , h3 = "_wrapper_19xsr_11"
      , m3 = "_image_19xsr_19"
      , il = {
        container: p3,
        wrapper: h3,
        image: m3
    }
      , g3 = "_container_2wkqe_1"
      , sl = {
        container: g3
    };
    function C1(e) {
        return y.jsxs("div", {
            className: sl.container,
            children: [y.jsx("h2", {
                className: sl.heading,
                id: e.id,
                children: e.title
            }), e.description && y.jsx("h3", {
                className: sl.subtitle,
                children: e.description
            })]
        })
    }
    function _3() {
        const e = Ic(t=>t.discordMemberCount);
        return y.jsx("section", {
            className: il.container,
            children: y.jsxs("div", {
                className: il.wrapper,
                children: [y.jsx(C1, {
                    id: "discord",
                    title: "加入我们的官方玩家论坛"
                }), y.jsxs("p", {
                    children: ["在玩家论坛中交流玩法，反馈问题，投票玩法。", y.jsx("br", {}), "也可将您的创意或者作品上传至论坛与我们合作。"]
                }), y.jsx("img", {
                    alt: "Screenshot of the Community Onboarding screen in our Discord server",
                    className: il.image,
                    draggable: !1,
                    src: "/assets/c5ed653cc6c42a88fd2c67800ee2b08a.webp"
                }), y.jsx(R1, {
                    href: "https://mc.netease.com",
                    children: "进入论坛"
                })]
            })
        })
    }
    const y3 = "_container_49eq2_1"
      , v3 = "_wrapper_49eq2_11"
      , S3 = "_row_49eq2_17"
      , E3 = "_column_49eq2_31"
      , io = {
        container: y3,
        wrapper: v3,
        row: S3,
        column: E3
    };
    function w3() {
        const e = Ic(t=>t.playerCount);
        return y.jsx("section", {
            className: io.container,
            children: y.jsxs("div", {
                className: io.wrapper,
                children: [y.jsx(C1, {
                    description: `一个优质的小游戏服务器，给玩家最好的体验。`,
                    id: "features",
                    title: "欢迎来到网易我的世界 KBCraft小游戏服务器"
                }), y.jsxs("div", {
                    className: io.row,
                    children: [y.jsx(ol, {
                        description: "您制作的优秀作品想要被玩家吸引？与KBCraft合作，我们将把您的优秀作品放入游戏中，推荐给玩家游玩您优秀的作品！",
                        href: "mailto:hi@kbcraft.fun",
                        title: "作品合作"
                    }), y.jsx(ol, {
                        description: "成为KBCraft的新媒体，推广服务器，免费获得大厅飞行、媒体称号、游戏内测、即时反馈、粉丝房间等诸多功能，共同进步！",
                        href: "https://media.kbcraft.fun",
                        title: "媒体认证"
                    }), y.jsx(ol, {
                        description: "您有好的建议或者游戏有bug要反馈？不妨告诉我们，我们将采纳您的建议和反馈，优秀贡献者可以获得贡献称号和VIP！",
                        href: "mailto:suggest@kbcraft.fun",
                        title: "集思广益"
                    })]
                })]
            })
        })
    }
    function ol(e) {
        return y.jsxs("a", {
            className: io.column,
            href: e.href,
            rel: "noreferrer",
            target: "_blank",
            children: [y.jsx("h3", {
                children: e.title
            }), y.jsx("p", {
                children: e.description
            })]
        })
    }
    const T3 = "_footer_e8ese_1"
      , x3 = "_wrapper_e8ese_11"
      , k3 = "_row_e8ese_18"
      , R3 = "_column_e8ese_30"
      , C3 = "_copyright_e8ese_44"
      , kn = {
        footer: T3,
        wrapper: x3,
        row: k3,
        column: R3,
        copyright: C3
    }
      , N3 = "_link_1uhjg_1"
      , P3 = {
        link: N3
    };
    function me(e) {
        return y.jsx("a", {
            className: P3.link,
            href: e.href,
            rel: "noreferrer",
            target: "_blank",
            children: e.children
        })
    }
    let Ac = (e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n &= 63,
    n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_",
    t), "");
    const $ = Ac();
    function D3(e) {
        return y.jsxs("svg", {
            viewBox: "0 0 604.03 215.9",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [y.jsxs("defs", {
                children: [y.jsx("path", {
                    d: "M30.41 0H434.7l.95.21c7.69 1.59 14.76 5.25 20.11 11.04 5.82 6.43 9.53 14.99 9.16 23.75.53 14.86-9.77 28.56-23.67 33.29-6.45 2.41-12.93 1.56-19.43 3.46-5.94 1.67-11.34 5.08-14.9 10.18-4.15 5.62-5.88 13.17-6.35 20.03 0 130.68-.03 261.36-.04 392.04-.92 18.56-16.19 34.42-34.5 36.76-5.99.41-11.79.51-17.53-1.45-15.38-4.7-27.22-19.13-28.02-35.31 0-90.33-.04-180.67-.02-271 .31-9.38-1.64-18.66-6.93-26.51-7.62-11.46-20.92-17.89-34.56-17.75-10.22.89-19.93 4.6-27.07 12.16-8.14 7.89-11.79 18.91-11.58 30.1.05 76.33-.04 152.67.02 229 .5 14.82-8.12 29.14-21.19 36.04-13.11 7.1-30.3 6.01-42.33-2.84-10.1-7.17-17.08-19.68-16.58-32.2.05-31.33 0-62.67.01-94-.08-5.77.38-11.3-.72-17.02-1.3-8.68-5.42-16.67-11.82-22.68-6.63-6.57-15.46-10.21-24.69-11.09-14.68-1.07-29.12 6.46-36.87 18.95-4.12 6.55-5.98 14.14-6.04 21.84-.01 72.66-.01 145.33-.01 218-.03 5.41.35 10.77-.95 16.06-2.25 9.85-8.38 18.68-16.8 24.26-5.19 3.64-11.01 5.38-17.13 6.68H34.66c-9.9-1.92-18.89-6.44-25.39-14.29-5.06-5.88-7.83-12.97-9.27-20.52V30.15c1.07-5.39 2.91-10.54 6.09-15.07C11.69 6.8 20.64 1.67 30.41 0Zm129.8 190c-.02-17.33.05-34.67.01-52-.11-8.08.72-15.34-1.89-23.17-3.94-13.15-15.12-23.5-28.41-26.74-15.39-4.11-32.51 2.15-41.93 14.9-5.19 6.96-7.98 15.32-7.95 24.01.02 23.98-.01 48.02.06 72 .25 16.73 11.98 32.1 27.94 36.99 14.42 4.85 30.93.38 41.24-10.7 4.82-5.12 8.27-11.42 9.85-18.28 1.39-5.69 1.07-11.21 1.08-17.01zm175.07 171c.11 6.59-.8 12.43 2.22 18.56 4.81 10.1 16.63 15.64 27.44 12.38 9.72-2.72 16.75-11.81 16.81-21.93.12-19.66-.02-39.35.09-59.01.02-4.49-.05-8.72-2.01-12.85-3.92-8.82-13.17-14.59-22.85-13.85-11.75.63-21.67 10.88-21.73 22.69-.01 17.96.01 36.04.03 54.01zm-154.32 24c.02 6.46-.58 12.48 2.67 18.38 4.11 7.76 13.91 12.06 22.36 9.41 8.29-2.26 14.38-10.16 14.55-18.75.04-12.02.07-24.06-.01-36.08-.25-8.53-6.27-16.32-14.54-18.52-7.75-2.55-17.13 1.28-21.54 8.02-2.72 4.01-3.5 8.77-3.5 13.54.01 8 .02 16 .01 24zM61.48 472c-.09-5.23.68-10.05-1.47-14.93-1.79-4.86-4.82-9.03-9.18-11.88-6.97-4.76-16.37-5.22-23.74-1.09-7.58 4.05-12.27 12.33-12.12 20.9-.07 18.66.21 37.33.06 56 .02 3.69-.18 7.68.67 11.28 1.66 6.16 5.7 11.61 11.37 14.63 5.83 3.24 12.97 3.71 19.19 1.31 8.33-2.93 14.29-11.6 15.19-20.19.05-18.61-.01-37.39.03-56.03z",
                    id: `${$}_d`
                }), y.jsx("path", {
                    d: "M531.32 73.06c2.42-.01 4.84-.01 7.26.05 23.64 29.13 47.45 58.14 71.1 87.27 24.29 29.78 48.74 59.46 72.9 89.37.08-2.25.14-4.5.14-6.75-.03-56.6.03-113.21-.03-169.81 5.53-.26 11.01-.11 16.55-.14.01 71.4.01 142.79 0 214.19-2.13 0-4.27.01-6.4.02-2.04-2.32-3.99-4.7-5.92-7.1-46.3-56.58-92.69-113.1-138.98-169.69-.04 58.92 0 117.85-.02 176.77-5.53.01-11.06.02-16.59-.01-.01-71.39.01-142.78-.01-214.17z",
                    id: `${$}_e`
                }), y.jsx("path", {
                    d: "M747.71 73.05c49.37 0 98.75-.01 148.12 0 0 5.22.02 10.43-.02 15.64-43.85-.01-87.7-.02-131.55 0 .01 27.69 0 55.38 0 83.06 41.81.02 83.61-.02 125.42.02 0 4.96 0 9.93-.01 14.9-41.76-.01-83.53.03-125.3-.02-.2 28.26-.15 56.55-.02 84.82 45.07-.1 90.15-.02 135.22-.04-.03 5.3.1 10.56-.1 15.85-50.58-.12-101.17-.01-151.75-.06-.03-71.39-.01-142.78-.01-214.17z",
                    id: `${$}_f`
                }), y.jsx("path", {
                    d: "M931.61 73.14c1.45-.13 2.93-.11 4.39-.12 55.77.12 111.59-.12 167.35.12-.03 4.88-.02 9.76-.01 14.63-25.9.19-51.81.02-77.71.09.01 66.44-.04 132.89.03 199.33-5.49.11-10.98.05-16.46.04-.01-62.41 0-124.82-.01-187.23 0-3.89-.04-7.78.11-11.67-1.42-.26-2.85-.49-4.3-.51-24.48.06-48.98.03-73.46.02.07-4.9-.14-9.81.07-14.7z",
                    id: `${$}_g`
                }), y.jsx("path", {
                    d: "M1134.6 73.21c5.52-.39 11.1-.07 16.63-.16.01 33.89-.01 67.78.01 101.66 45.51.01 91.03.01 136.54.01 0-33.85.02-67.7-.01-101.54 5.58-.24 11.17-.11 16.76-.12-.05 71.39.09 142.83-.07 214.22-5.25-.14-10.51.12-15.75-.1-.77-.46-1.08-1.14-.94-2.05-.03-31.83.13-63.68-.08-95.51-45.45.04-90.91.04-136.37 0-.21 32.53-.02 65.08-.1 97.62-5.53.02-11.06-.01-16.59.03-.14-71.24-.08-142.81-.03-214.06z",
                    id: `${$}_h`
                }), y.jsx("path", {
                    d: "M1352.01 73.05c49.42.06 98.89-.14 148.31.1-.04 5.15-.03 10.31-.02 15.46-43.94.16-87.91.04-131.85.06-.09 27.69-.02 55.39-.04 83.08 38.86.01 77.73 0 116.59 0 3.21.03 6.25-.32 9.39.58-.21 4.74-.12 9.46-.1 14.2-5.11.25-10.18.11-15.29.14-36.84-.01-73.67.02-110.51-.01-.17 28.25-.07 56.52-.05 84.77 45.09-.02 90.17 0 135.25-.01.02 5.28.04 10.54-.02 15.82-50.54-.01-101.09-.01-151.63-.01-.08-71.39-.01-142.79-.03-214.18z",
                    id: `${$}_i`
                }), y.jsx("path", {
                    d: "M1541.22 73.05c31.59-.01 63.19 0 94.78 0 11.36 0 22.67 2.09 32.99 6.94 12.84 5.97 23.56 16.5 29.82 29.2 7.95 15.87 9.33 34.87 4.32 51.85-3.93 13.39-12.39 25.28-24.14 32.9-12.8 8.35-27.22 11-42.27 11.52 25.23 27.16 50.27 54.53 75.49 81.72-7.2.17-14.4-.05-21.59.14-24.84-26.87-49.51-53.94-74.16-80.99-19.57-.1-39.15-.01-58.72-.05-.03 26.99-.01 53.97-.02 80.95-5.5.03-11 .02-16.5 0V73.05zm16.47 15.43c.07 34.01.01 68.02.04 102.02 26.42.01 52.85.02 79.27 0 11.35-.45 22.59-2.85 32.05-9.42 7.78-5.35 13.06-13.33 15.96-22.23 2.87-8.76 3.2-17.74 2.49-26.86-1.43-12.21-7.55-24.39-17.18-32.17-9.7-7.92-21.9-11.37-34.3-11.38-26.1 0-52.22-.09-78.33.04z",
                    id: `${$}_j`
                }), y.jsx("path", {
                    d: "M129.92 88.09c13.29 3.24 24.47 13.59 28.41 26.74 2.61 7.83 1.78 15.09 1.89 23.17.04 17.33-.03 34.67-.01 52-.01 5.8.31 11.32-1.08 17.01-1.58 6.86-5.03 13.16-9.85 18.28-10.31 11.08-26.82 15.55-41.24 10.7C92.08 231.1 80.35 215.73 80.1 199c-.07-23.98-.04-48.02-.06-72-.03-8.69 2.76-17.05 7.95-24.01 9.42-12.75 26.54-19.01 41.93-14.9z",
                    id: `${$}_a`
                }), y.jsx("path", {
                    d: "M356.98 284.3c9.68-.74 18.93 5.03 22.85 13.85 1.96 4.13 2.03 8.36 2.01 12.85-.11 19.66.03 39.35-.09 59.01-.06 10.12-7.09 19.21-16.81 21.93-10.81 3.26-22.63-2.28-27.44-12.38-3.02-6.13-2.11-11.97-2.22-18.56-.02-17.97-.04-36.05-.03-54.01.06-11.81 9.98-22.06 21.73-22.69z",
                    id: `${$}_b`
                }), y.jsx("path", {
                    d: "M1614 316.83c19.65.38 39.45 3.03 57.12 12.14 14.54 7.31 26.51 19.36 33.57 34.03-11.62 5.93-23.19 11.95-34.83 17.85-4.53-6.69-10.68-12.05-17.7-16-11.52-6.52-24.9-10.03-38.16-9.58-9.33-.22-18.5 1.01-27.24 4.35-7.1 2.84-13.38 7.29-17.12 14.1-3.55 6.86-4.35 15.28-.47 22.19 3.41 6.26 10.02 9.79 16.42 12.27 14.25 5.29 30.67 6.19 45.5 8.52 15.02 2.39 30.27 5.57 44.09 12.14 8.76 4.12 16.69 9.64 22.95 17.08 7.45 8.77 11.58 19.55 13.11 30.88 1.89 14.96.49 30.47-6.57 43.99-6.64 12.96-17.66 22.71-30.53 29.26-15.63 8.04-32.73 11.26-50.14 12.43-19.24.67-38.71-.39-57.16-6.38-14.92-4.8-28.5-13.23-38.69-25.23-6.32-7.51-11.72-16.21-15.03-25.47 9.2-4.52 18.26-9.32 27.37-13.99 3.14-1.58 6-3.4 9.4-4.39 4.17 10.36 11.65 19.03 21.14 24.88 15.14 9.48 34.43 12.48 52.02 11.18 12.27-1 26.22-3.97 35.71-12.33 9.56-8.17 12.58-22.82 6.88-34.05-3.54-6.42-9.86-11.01-16.47-13.92-11.26-5.03-24.04-6.95-36.2-8.35-16.4-2.07-33.77-4.99-49.15-11.23-9.04-3.76-17.54-8.5-24.42-15.6-8.41-8.19-13.34-19.05-15.12-30.57-2-13.19-1.09-26.79 4.82-38.92 6.01-12.48 16.6-21.93 28.71-28.35 17.37-9.13 36.72-12.55 56.19-12.93z",
                    id: `${$}_k`
                }), y.jsx("path", {
                    d: "M664.09 319.26c25.57 3.76 49.77 15.82 68.23 33.9-2.62 3.49-5.79 6.17-8.8 9.36-6.17 6.2-12.13 12.62-18.37 18.76-12.78-11.89-29.07-19.4-46.23-22.2-6.49-1.17-13.35-.84-19.92-.74-23.89 1.32-46.47 14.07-59.09 34.53-9.54 15.13-14.05 33.31-13.71 51.13-.28 19.17 5.92 39.42 19.06 53.7 10.94 12.07 25.81 19.03 41.71 21.79 16.23 2.79 34.13 2.46 49.56-3.75 7.98-3.1 14.91-7.78 21.78-12.79.29-13.73.06-27.48.12-41.22-19.77-.01-39.54-.01-59.31 0-.01-13.09-.01-26.17 0-39.26 33.23.01 66.45.01 99.68.01.03 31.84-.02 63.72.02 95.56.33 2.95-1.95 4.13-3.62 6.16-10.93 11.6-23.64 21.27-38.26 27.74-15.62 6.88-32.89 10.19-49.94 9.8-16.83.39-33.79-1.74-49.8-7.02-16.1-5.28-30.87-14.04-42.69-26.23-14.34-14.58-23.69-33.65-28.06-53.52-3.98-18.01-4.23-36.93-1.45-55.13 4.11-26.05 15.72-51.57 34.94-69.94 16-15.78 37.07-25.61 59.06-29.59 14.92-2.61 30.07-3.36 45.09-1.05z",
                    id: `${$}_l`
                }), y.jsx("path", {
                    d: "M856.92 323.79c15.4-.06 30.88.01 46.29-.03 34.94 77.59 69.38 155.4 104.45 232.93-16.01.07-32.02.02-48.03.03a5099.98 5099.98 0 0 1-19.52-44.15c-40.5-.23-81.05-.01-121.56-.11-6.73 14.72-13.4 29.48-20.04 44.25-15.82.01-31.64.06-47.46-.03 33.72-76.33 68.65-153.02 102.53-229.17.86-1.52 1.05-3.99 3.34-3.72zm22.12 49.22c-.39.93-.78 1.87-1.17 2.8-13.93 31.97-27.77 63.99-41.7 95.95 28.73.11 57.47.13 86.2 0-13.36-30.93-27-61.73-40.42-92.63-.85-1.99-1.8-3.94-2.78-5.87z",
                    id: `${$}_m`
                }), y.jsx("path", {
                    d: "M1311.55 323.71c57.96.1 115.94.1 173.91 0 .26 14.13-.04 28.27.15 42.4-43.52.25-87.1.03-130.63.11-.01 18.09-.03 36.19.01 54.28 41.93.06 83.89-.11 125.81.09-.14 13.54-.01 27.09-.07 40.64-41.92.03-83.83 0-125.75.02-.02 17.4-.01 34.8-.01 52.21 43.52.01 87.04.01 130.55 0 .07 14.42.01 28.85.03 43.27-58.03.01-116.06.01-174.1 0V338c.02-4.77-.08-9.52.1-14.29z",
                    id: `${$}_n`
                }), y.jsx("path", {
                    d: "M1024.54 324.73c16.77.06 33.54 0 50.31.03 23.73 32.36 47.46 64.72 71.06 97.17.94.93.97 2.27 2.54 1.54 24.09-32.64 48.42-66.2 72.43-98.73 16.67.03 33.35 0 50.02.02 0 77.32.01 154.64 0 231.96-14.54 0-29.07.01-43.61 0 .02-55.56-.05-111.12.03-166.67-2.41.15-3.33 2.86-4.78 4.5-23.81 31.64-47.65 63.25-71.58 94.79-2.72-.01-5.44 0-8.16.03-1.69-2.05-3.32-4.14-4.87-6.3-23.12-31.7-46.53-63.19-69.7-94.85-.19 56.15 0 112.34-.09 168.5-14.56 0-29.11.01-43.66 0 .04-77.32-.08-154.68.06-231.99z",
                    id: `${$}_o`
                }), y.jsx("path", {
                    d: "M50.83 445.19c4.36 2.85 7.39 7.02 9.18 11.88 2.15 4.88 1.38 9.7 1.47 14.93-.04 18.64.02 37.42-.03 56.03-.9 8.59-6.86 17.26-15.19 20.19-6.22 2.4-13.36 1.93-19.19-1.31-5.67-3.02-9.71-8.47-11.37-14.63-.85-3.6-.65-7.59-.67-11.28.15-18.67-.13-37.34-.06-56-.15-8.57 4.54-16.85 12.12-20.9 7.37-4.13 16.77-3.67 23.74 1.09z",
                    id: `${$}_c`
                }), y.jsx("path", {
                    d: "M198.99 508.39c7.11-.39 14.18 3.89 16.98 10.46 2.28 4.59 1.44 9.16 1.58 14.15-.03 8.34.03 16.68-.01 25.02.04 7.56-5.42 14.41-12.54 16.64-8.11 2.73-17.77-1.61-21.26-9.39-1.63-3.28-1.7-6.68-1.69-10.27.1-10.01-.11-20.03.09-30.03.32-8.83 8.04-16.37 16.85-16.58z",
                    id: `${$}_p`
                }), y.jsx("path", {
                    d: "M355.5 544.76c5.29-1.23 11.26-.91 16.17 1.56 7.75 3.72 13.22 12.01 13.02 20.68.35 10.68-7.86 20.46-18.22 22.61-9.93 2.4-20.58-2.7-25.44-11.58-3.6-6.44-3.71-14.79-.29-21.32 2.95-5.84 8.43-10.28 14.76-11.95z",
                    id: `${$}_q`
                })]
            }), y.jsxs("g", {
                stroke: "#ffb840",
                strokeWidth: "10pt",
                transform: "matrix(.35278 0 0 .35278 0 0)",
                children: [y.jsx("use", {
                    height: "100%",
                    href: `#${$}_a`,
                    width: "100%"
                }), y.jsx("use", {
                    height: "100%",
                    href: `#${$}_b`,
                    width: "100%"
                }), y.jsx("use", {
                    height: "100%",
                    href: `#${$}_c`,
                    width: "100%"
                })]
            }), y.jsxs("g", {
                transform: "matrix(.35278 0 0 .35278 0 0)",
                children: [y.jsx("use", {
                    fill: "#ef963f",
                    height: "100%",
                    href: `#${$}_d`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${$}_e`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${$}_f`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${$}_g`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${$}_h`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${$}_i`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${$}_j`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "#ffb840",
                    height: "100%",
                    href: `#${$}_a`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "#ffb840",
                    height: "100%",
                    href: `#${$}_b`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${$}_k`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${$}_l`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${$}_m`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${$}_n`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${$}_o`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "#ffb840",
                    height: "100%",
                    href: `#${$}_c`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "#ef963f",
                    height: "100%",
                    href: `#${$}_p`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "#ef963f",
                    height: "100%",
                    href: `#${$}_q`,
                    width: "100%"
                })]
            })]
        })
    }
    const O3 = Le.memo(D3);
    function I3() {
        return y.jsx("footer", {
            className: kn.footer,
            children: y.jsxs("div", {
                className: kn.wrapper,
                children: [y.jsxs("div", {
                    className: kn.row,
                    children: [y.jsxs("div", {
                        className: kn.column,
                        children: [y.jsx("h4", {
                            children: "游戏相关"
                        }), y.jsxs("ul", {
                            children: [y.jsx("li", {
                                children: y.jsx(me, {
                                    href: "https://instagram.com/NetherGamesMC",
                                    children: "游戏排名"
                                })
                            }), y.jsx("li", {
                                children: y.jsx(me, {
                                    href: "https://facebook.com/NetherGamesMC",
                                    children: "服装饰品"
                                })
                            }), y.jsx("li", {
                                children: y.jsx(me, {
                                    href: "https://twitter.com/NetherGamesMC",
                                    children: "头衔称号"
                                })
                            })]
                        })]
                    }), y.jsxs("div", {
                        className: kn.column,
                        children: [y.jsx("h4", {
                            children: "游戏反馈"
                        }), y.jsxs("ul", {
                            children: [y.jsx("li", {
                                children: y.jsx(me, {
                                    href: "mailto:suggest@kbcraft.fun",
                                    children: "集思广益"
                                })
                            }), y.jsx("li", {
                                children: y.jsx(me, {
                                    href: "mailto:suggest@kbcraft.fun?subject=申诉：｛游戏名称｝",
                                    children: "误封申诉"
                                })
                            }), y.jsx("li", {
                                children: y.jsx(me, {
                                    href: "https://ngmc.co/security",
                                    children: "玩家守则"
                                })
                            })]
                        })]
                    }), y.jsxs("div", {
                        className: kn.column,
                        children: [y.jsx("h4", {
                            children: "联系我们"
                        }), y.jsxs("ul", {
                            children: [y.jsx("li", {
                                children: y.jsx(me, {
                                    href: "https://space.bilibili.com/3537115419773393/",
                                    children: "B站"
                                })
                            }), y.jsx("li", {
                                children: y.jsx(me, {
                                    href: "https://qm.qq.com/q/PFBbIofpW6",
                                    children: "Q群"
                                })
                            }), y.jsx("li", {
                                children: y.jsx(me, {
                                    href: "mailto:hi@kbcraft.fun",
                                    children: "邮箱"
                                })
                            })]
                        })]
                    })]
                }), y.jsxs("div", {
                    className: kn.copyright,
                    children: [y.jsx(O3, {
                        height: "2.5rem"
                    }), y.jsxs("div", {
                        children: ["KBCraft工作室 版权所有 © 2021-", new Date().getFullYear()]
                    }), y.jsxs("div", {
                        children: [y.jsx(me, {
                            href: "https://about.kbcraft.fun",
                            children: "关于我们"
                        }), " ·", " ", y.jsx(me, {
                            href: "https://mc.netease.com",
                            children: "官方论坛"
                        }), " ·", " ", y.jsx(me, {
                            href: "https://media.kbcraft.fun",
                            children: "媒体认证"
                        })]
                    })]
                })]
            })
        })
    }
    const A3 = "_header_1py3g_1"
      , M3 = "_active_1py3g_12"
      , b3 = "_nav_1py3g_20"
      , j3 = "_logo_1py3g_35"
      , L3 = "_links_1py3g_42"
      , Jn = {
        header: A3,
        active: M3,
        nav: b3,
        logo: j3,
        links: L3
    }
      , B = Ac();
    function $3(e) {
        return y.jsxs("svg", {
            viewBox: "0 0 635.353 132.292",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [y.jsxs("defs", {
                children: [y.jsx("path", {
                    d: "M18.27 0H265.8c6.95 1.34 13.03 5.61 16.15 12.04 4.96 10.06 1.08 22.73-8.75 28.18-6.6 4.19-13.82 1.59-20.16 5.84-5.82 3.61-8.23 10.33-8.16 16.93 0 77.34-.04 154.68-.06 232.01-.04 4.07.36 8.1-.8 12.01-1.93 7.64-7.7 14.15-15.11 16.87-4.11 1.75-8.59 1.7-12.96 1.26-8.13-1.52-15.15-7.09-18.35-14.74-2.14-4.46-1.44-9.58-1.55-14.4-.04-53.01-.16-105.98-.06-159 .03-4.29-.74-8.66-2.29-12.66-4.49-10.72-17.08-17.18-28.36-14.01-7.98 1.95-14.53 8.16-17.16 15.9-1.13 3.14-1.15 6.46-1.19 9.77.02 46.65-.05 93.36-.02 140-.04 4.31-1.26 8.79-3.42 12.52-5.36 9.37-16.99 14.27-27.42 11.35-10.09-2.61-18.33-12.24-18.08-22.86.01-20.67-.04-41.35 0-62.01-.04-5.77-1.05-11.81-4.41-16.63-5.58-8.35-16.51-12.79-26.27-10.02-7.44 1.88-13.66 7.4-16.56 14.48-1.56 3.6-1.75 7.3-1.85 11.17 0 45.67-.03 91.34-.03 137.01-.02 6.52-2.84 12.89-7.64 17.31-3.74 3.74-8.51 5.61-13.61 6.68h-6.15C10.27 373.33 1.82 364.91 0 353.69V18.19C1.8 8.74 8.79 1.74 18.27 0Zm79.74 111c.04-10-.01-20 .05-30 .01-4.27-.09-8.33-1.7-12.35-3.1-8.2-10.75-14.24-19.43-15.44-8.26-1.19-16.88 2.09-22.21 8.52-3.85 4.54-5.75 10.34-5.75 16.27-.03 14.32.02 28.67.01 43-.01 7.37 3.1 14.52 8.79 19.25 6.71 5.7 16.36 7.33 24.56 4.08 8.16-3.1 14.25-10.74 15.39-19.4.54-4.58.26-9.32.29-13.93zm107 87c.06 9.34-.05 18.68.04 28.01-.07 5.1 2.06 9.75 6.34 12.61 5.62 3.91 13.43 2.8 17.9-2.34 3.25-3.47 3.75-7.71 3.71-12.28-.07-11.67.03-23.34-.01-35.01.13-5.93-2.89-11.17-8.27-13.72-6.22-2.97-13.63-.56-17.35 5.11-3.36 4.77-2.18 12.05-2.36 17.62zm-70.1 33c-.22-5.55.91-12.19-1.71-17.18-3.13-5.65-10.45-8.15-16.21-4.84-3.96 2.11-6.54 6.5-6.37 11.01.01 7.34-.1 14.7.05 22.04.24 5.97 5.38 11.04 11.31 11.36 4.46.36 9.05-2.38 11.2-6.24 2.55-4.96 1.57-10.72 1.73-16.15zM36.9 313c-.1-9.67.17-19.36-.04-29.03-.1-5.24-2.93-9.78-7.5-12.3-5.79-3.15-13.02-1.48-17.08 3.62-2.88 3.42-3.26 7.41-3.24 11.71.11 11.67.02 23.34.07 35.01-.1 5.36 2.31 10.14 6.91 12.95 5.81 3.58 13.5 2.07 17.69-3.26 4.43-5.16 2.97-12.45 3.19-18.7z",
                    id: `${B}_d`
                }), y.jsx("path", {
                    d: "M76.93 53.21c8.68 1.2 16.33 7.24 19.43 15.44 1.61 4.02 1.71 8.08 1.7 12.35-.06 10-.01 20-.05 30-.03 4.61.25 9.35-.29 13.93-1.14 8.66-7.23 16.3-15.39 19.4-8.2 3.25-17.85 1.62-24.56-4.08-5.69-4.73-8.8-11.88-8.79-19.25.01-14.33-.04-28.68-.01-43 0-5.93 1.9-11.73 5.75-16.27 5.33-6.43 13.95-9.71 22.21-8.52z",
                    id: `${B}_a`
                }), y.jsx("path", {
                    d: "M1739 103.32c13.47-.44 28.35 1.59 40.13 8.53 7.65 4.38 13.63 11.04 17.58 18.89-6.93 3.6-13.88 7.17-20.83 10.73-6.88-9.99-20.11-15.07-31.88-15.42-7.95-.16-17.48.99-23.98 6-5.45 4.07-7.92 11.58-5.01 17.9 2.27 4.68 7.78 7.18 12.49 8.66 10.41 3.11 21.75 3.31 32.47 5.66 11.13 2.32 23.16 6.12 31.24 14.54 6.38 6.52 9.08 15 9.79 23.94v6.74c-.79 10.01-4.72 19.46-12.24 26.27-10.77 9.99-26.44 13.85-40.75 14.58-14 .64-29.53-.74-42.22-7.13-11.23-5.56-19.39-15.38-24-26.91 7.26-3.8 14.54-7.56 21.82-11.34 1.7 3.63 3.65 7.06 6.48 9.94 6.53 6.84 15.69 10.35 24.93 11.57 8.11 1 16.66.61 24.49-1.85 5.54-1.82 11.01-5.03 13.68-10.43 2.69-5.5 2.47-12.96-1.64-17.74-2.94-3.5-7.49-5.77-11.75-7.22-10.37-3.54-20.9-3.35-32-5.78-11-2.29-22.9-6.02-30.8-14.44-7.87-8.26-9.97-19.99-8.62-31 1.19-9.19 6.28-17.41 13.65-22.95 10.29-7.87 24.23-11.2 36.97-11.74z",
                    id: `${B}_e`
                }), y.jsx("path", {
                    d: "M1168 104.13c17.71.99 34.67 8.64 47.3 21.07-5.43 5.57-10.84 11.15-16.29 16.7-9.23-8.46-21.53-13.38-34.01-13.85-13.37-.43-26.63 4.21-35.81 14.14-8.09 8.67-12.29 20.1-13.23 31.81-.87 11.05 1.06 22.52 7.08 31.97 4.66 7.4 11.78 13.01 19.95 16.05 9.62 3.57 20.41 4.25 30.5 2.64 8.08-1.33 14.97-5.23 21.44-10.07.15-8.19.04-16.39.07-24.59-11.86-.01-23.71.02-35.57-.01.02-7.83-.01-15.66.02-23.5 19.85.01 39.7 0 59.55.01.01 19.49-.02 38.98.01 58.47-5.19 5.92-11.04 11.16-17.79 15.24-11.55 7.05-24.78 9.9-38.22 9.79-16.47-.1-33.01-3.62-46.54-13.41-12.58-9.03-20.75-22.67-24.22-37.64-3.92-17.07-2.72-35.57 3.81-51.86 5.32-13.25 14.51-24.79 26.7-32.32 13.43-8.39 29.58-11.44 45.25-10.64z",
                    id: `${B}_f`
                }), y.jsx("path", {
                    d: "M316 108c1.55 0 3.11.01 4.66.02 31.09 38.29 62.22 76.56 93.33 114.84.02-38.29 0-76.57.01-114.86 3.5-.01 7.01 0 10.51.01-.01 46.33-.01 92.65 0 138.98-1.41 0-2.82.01-4.22.01-31.18-38.21-62.33-76.44-93.53-114.63-.01 38.21-.01 76.41 0 114.62-3.59.01-7.17.01-10.76.01V108z",
                    id: `${B}_g`
                }), y.jsx("path", {
                    d: "M455.5 107.95c32-.02 63.99-.02 95.99 0-.02 3.31.15 6.65-.06 9.96-.72.24-1.51.34-2.36.3-27.68-.05-55.39-.01-83.06-.02-.02 17.93-.01 35.87-.01 53.81 27.17.01 54.33-.01 81.5 0 .01 3.25.01 6.51-.01 9.76-27.16-.01-54.32-.01-81.48-.01-.01 18.32-.02 36.63 0 54.94 29.29-.01 58.58 0 87.86 0 .01 3.43.01 6.87.01 10.3-32.8.01-65.59.02-98.39 0 .02-46.35 0-92.7.01-139.04z",
                    id: `${B}_h`
                }), y.jsx("path", {
                    d: "M575.94 108.01c37.12-.01 74.25-.02 111.37 0 0 3.16 0 6.32.01 9.49-16.77.01-33.54-.01-50.32.01-.01 43.16.01 86.32 0 129.49-3.59 0-7.17 0-10.76-.01.01-43.16 0-86.32.01-129.48-16.77-.02-33.54 0-50.3-.01-.01-3.17-.02-6.33-.01-9.49z",
                    id: `${B}_i`
                }), y.jsx("path", {
                    d: "M707 108c3.59 0 7.17 0 10.76.01-.01 21.99-.01 43.99-.01 65.98 29.5.01 59 .01 88.5 0 0-21.99 0-43.99-.01-65.98 3.59-.01 7.17-.01 10.76-.01v139c-3.59 0-7.17 0-10.76-.01.01-21.08.01-42.16.01-63.24h-88.5c0 21.08 0 42.16.01 63.24-3.59.01-7.17.01-10.76.01V108z",
                    id: `${B}_j`
                }), y.jsx("path", {
                    d: "M847.5 107.95c32-.02 63.99-.02 95.99 0-.02 3.3.16 6.63-.07 9.93-.64.29-1.43.4-2.35.33-27.68-.05-55.38 0-83.06-.02-.02 17.93-.01 35.87-.01 53.81 27.17.01 54.33-.01 81.5 0 .01 3.25.01 6.51-.01 9.76-27.16-.01-54.32-.01-81.48-.01-.01 18.32-.02 36.63 0 54.94 29.29-.01 58.58 0 87.86 0 .01 3.43.01 6.87.01 10.3-32.8.01-65.59.02-98.39 0 .02-46.35 0-92.7.01-139.04z",
                    id: `${B}_k`
                }), y.jsx("path", {
                    d: "M970.01 107.94c20.66.02 41.33-.05 61.99.04 12.03.13 23.77 4 32.37 12.66 12.31 12.25 15.54 31.9 9.25 47.87-3.33 8.38-9.58 15.36-17.58 19.53-7.55 4-15.75 5.36-24.21 5.52 16.33 17.81 32.63 35.63 48.96 53.44-4.78-.01-9.56.05-14.35-.06-15.87-17.66-31.91-35.18-47.83-52.8-12.62-.03-25.24-.02-37.85-.01-.01 17.62-.01 35.24 0 52.86-3.59.01-7.17.01-10.76.01 0-46.35-.01-92.71.01-139.06zm10.74 10.07v65.98c16.42 0 32.84.04 49.25-.01 8.71-.1 17.65-1.77 24.52-7.48 6.48-5.39 9.48-13.27 10.24-21.49.87-8.17-.82-16.48-5.47-23.31-4.44-6.65-11.49-11.12-19.27-12.78-5.07-1.19-9.86-.9-15.02-.92-14.75.01-29.5-.01-44.25.01z",
                    id: `${B}_l`
                }), y.jsx("path", {
                    d: "M1288.89 108.11c9.53-.25 19.11-.06 28.65-.08 20.75 46.34 41.61 92.64 62.38 138.97h-28.71c-3.89-8.65-7.82-17.29-11.68-25.96-24.23-.09-48.47-.01-72.7-.04-4 8.66-7.95 17.34-11.95 26-9.5 0-19 .01-28.51-.01 19.8-44.07 39.59-88.14 59.39-132.22 1.02-2.22 1.88-4.57 3.13-6.66zm-11.54 88.4c17.2-.03 34.39-.01 51.58-.01-8.59-19.7-17.16-39.4-25.77-59.09-8.65 19.68-17.18 39.41-25.81 59.1z",
                    id: `${B}_m`
                }), y.jsx("path", {
                    d: "M1390 108c10.06-.03 20.11.05 30.17-.04 14.59 19.86 29.04 39.83 43.55 59.74 14.49-19.9 28.98-39.81 43.49-59.7 10.01 0 20.03-.01 30.04.01v138.98c-8.75.02-17.5.01-26.25.01-.01-33.58.01-67.16-.01-100.74-15.09 20.05-30.14 40.14-45.21 60.21-1.74.03-3.48.04-5.22.06-14.81-20.12-29.52-40.33-44.3-60.48-.01 33.65-.01 67.3-.01 100.94-8.75.02-17.5.01-26.25.01V108z",
                    id: `${B}_n`
                }), y.jsx("path", {
                    d: "M1561.01 107.94h104.11c-.01 8.52.02 17.04-.02 25.56-26.03.01-52.06 0-78.1.01v31.98c25.13.02 50.26-.01 75.38.02-.02 8.16 0 16.32-.01 24.48-25.12.02-50.24 0-75.37.01 0 10.4-.01 20.79.01 31.18 26.03.01 52.07 0 78.11.01.01 8.6 0 17.2 0 25.8-34.7.02-69.41.01-104.12.01 0-46.35-.01-92.71.01-139.06z",
                    id: `${B}_o`
                }), y.jsx("path", {
                    d: "M224.72 175.27c5.38 2.55 8.4 7.79 8.27 13.72.04 11.67-.06 23.34.01 35.01.04 4.57-.46 8.81-3.71 12.28-4.47 5.14-12.28 6.25-17.9 2.34-4.28-2.86-6.41-7.51-6.34-12.61-.09-9.33.02-18.67-.04-28.01.18-5.57-1-12.85 2.36-17.62 3.72-5.67 11.13-8.08 17.35-5.11z",
                    id: `${B}_b`
                }), y.jsx("path", {
                    d: "M29.36 271.67c4.57 2.52 7.4 7.06 7.5 12.3.21 9.67-.06 19.36.04 29.03-.22 6.25 1.24 13.54-3.19 18.7-4.19 5.33-11.88 6.84-17.69 3.26-4.6-2.81-7.01-7.59-6.91-12.95-.05-11.67.04-23.34-.07-35.01-.02-4.3.36-8.29 3.24-11.71 4.06-5.1 11.29-6.77 17.08-3.62z",
                    id: `${B}_c`
                }), y.jsx("path", {
                    d: "M118.22 312.22c6.1-2.46 13.24 1.54 14.43 7.96.64 4.87.13 9.91.29 14.82-.13 5.11.85 9.94-2.88 14.06-4.49 4.97-12.38 4.64-16.51-.58-3.63-4.74-2.23-10.91-2.48-16.48.04-3.34-.15-6.71.08-10.04.39-4.33 2.93-8.18 7.07-9.74z",
                    id: `${B}_p`
                }), y.jsx("path", {
                    d: "M218.46 333.48c4.19-.9 9.2.85 12.24 3.83 4.45 4.09 5.36 10.92 2.96 16.3-2.92 6-10.24 9.61-16.7 7.49-6.1-1.66-10.62-7.76-10.23-14.11.09-6.65 5.23-12.36 11.73-13.51z",
                    id: `${B}_q`
                })]
            }), y.jsxs("g", {
                stroke: "#ffb840",
                strokeWidth: "10pt",
                transform: "matrix(.35278 0 0 .35278 0 0)",
                children: [y.jsx("use", {
                    height: "100%",
                    href: `#${B}_a`,
                    width: "100%"
                }), y.jsx("use", {
                    height: "100%",
                    href: `#${B}_b`,
                    width: "100%"
                }), y.jsx("use", {
                    height: "100%",
                    href: `#${B}_c`,
                    width: "100%"
                })]
            }), y.jsxs("g", {
                transform: "matrix(.35278 0 0 .35278 0 0)",
                children: [y.jsx("use", {
                    fill: "#ef963f",
                    height: "100%",
                    href: `#${B}_d`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "#ffb840",
                    height: "100%",
                    href: `#${B}_a`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${B}_e`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${B}_f`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${B}_g`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${B}_h`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${B}_i`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${B}_j`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${B}_k`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${B}_l`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${B}_m`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${B}_n`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${B}_o`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "#ffb840",
                    height: "100%",
                    href: `#${B}_b`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "#ffb840",
                    height: "100%",
                    href: `#${B}_c`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "#ef963f",
                    height: "100%",
                    href: `#${B}_p`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "#ef963f",
                    height: "100%",
                    href: `#${B}_q`,
                    width: "100%"
                })]
            })]
        })
    }
    const B3 = Le.memo($3);
    function U3(e) {
        const [t,n] = Le.useState(!1);
        return Le.useEffect(()=>{
            function r() {
                const i = window.scrollY || document.body.scrollTop;
                n(i > (e.active ?? 0))
            }
            return window.addEventListener("scroll", r),
            ()=>window.removeEventListener("scroll", r)
        }
        , [e.active]),
        y.jsx("header", {
            className: k1(Jn.header, {
                [Jn.active]: t
            }),
            children: y.jsxs("nav", {
                className: Jn.nav,
                style: {
                    "--color-link": `var(--color-${t ? "primary" : "fg"})`
                },
                children: [y.jsxs("div", {
                    className: Jn.links,
                    children: [y.jsx(me, {
                        href: "https://ngmc.co/portal",
                        children: "排行"
                    }), y.jsx(me, {
                        href: "https://ngmc.co/store",
                        children: "饰品"
                    }), y.jsx(me, {
                        href: "https://ngmc.co/vote",
                        children: "称号"
                    })]
                }), y.jsx(B3, {
                    className: Jn.logo,
                    height: "2.5rem"
                }), y.jsxs("div", {
                    className: Jn.links,
                    children: [y.jsx(me, {
                        href: "https://discord.gg/ng",
                        children: "论坛"
                    }), y.jsx(me, {
                        href: "https://ngmc.co/support",
                        children: "联系"
                    }), y.jsx(me, {
                        href: "https://ngmc.co/request",
                        children: "反馈"
                    })]
                })]
            })
        })
    }
    function F3(e) {
        const t = e.color ?? "#111111"
          , n = e.size ?? 16;
        return y.jsx("svg", {
            height: n,
            viewBox: "-2 0 20 16",
            width: n,
            children: y.jsxs("g", {
                fill: t,
                stroke: t,
                strokeWidth: 2,
                children: [y.jsx("line", {
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                    x1: .5,
                    x2: 15.5,
                    y1: 8.5,
                    y2: 8.5
                }), y.jsx("polyline", {
                    fill: "none",
                    points: "10.5,3.5 15.5,8.5 10.5,13.5",
                    stroke: t,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10
                })]
            })
        })
    }
    const z3 = "_main_nerh7_1"
      , V3 = "_wrapper_nerh7_15"
      , G3 = "_logo_nerh7_25"
      , H3 = "_campaign_nerh7_32"
      , Y3 = "_buttonWrapper_nerh7_55"
      , W3 = "_footer_nerh7_62"
      , Zn = {
        main: z3,
        wrapper: V3,
        logo: G3,
        campaign: H3,
        buttonWrapper: Y3,
        footer: W3
    }
      , U = Ac();
    function q3(e) {
        return y.jsxs("svg", {
            viewBox: "0 0 476.281 273.756",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [y.jsxs("defs", {
                children: [y.jsx("path", {
                    d: "M487.24 0h376.3l1.08.28.69.19c8.29 1.99 15.68 6.65 20.47 13.78 6.71 9.97 7.36 23.43 1.58 33.98-4.06 7.53-11.24 13.32-19.48 15.68-5.66 1.74-11.3 1.11-17.01 2.89-4.79 1.5-9.63 4.28-12.71 8.33-5.26 6.41-6.92 15.78-6.63 23.87.02 119-.05 238-.01 357 .47 10.97-4.66 21.52-12.95 28.58-12.35 11.07-32.07 12.01-45.49 2.32-8.05-5.53-13.63-14.32-15.47-23.88-.57-3.25-.36-6.72-.39-10.02.01-81.33-.04-162.67-.03-244 .18-6.07-.37-12.12-2.23-17.92-3.93-11.78-14.14-20.9-26.19-23.79-15.57-4.22-33.06 3.59-40.91 17.56-4.25 7.41-5.24 15.76-5.02 24.15 0 70.67-.03 141.34-.04 212.01-.43 12.49-8.28 24.66-19.36 30.43-9.49 5.31-21.66 5.97-31.69 1.82-13.06-5.16-22.76-18.12-23.24-32.26.02-33.32.01-66.69 0-100.01-.37-5.56-1.5-11.39-4.18-16.32-4.96-9.58-14.11-16.79-24.63-19.25-12.31-3.2-26.2 1.21-34.9 10.37-7.21 7.17-10.71 17.13-10.65 27.21.02 68.66-.02 137.34.01 206 .17 4.87-.24 9.64-1.86 14.26-4.63 15.15-20.42 26.42-36.3 25.42-10.62.24-21.32-5.59-27.99-13.69-4.99-6.05-7.94-14.17-8.18-21.99-.01-166.32.01-332.68-.04-499-.56-9.3 3.23-18.82 10.06-25.17 4.87-4.75 10.91-7.15 17.39-8.83ZM608.6 178c-.01-17.33.02-34.67 0-52-.11-6.62.73-12.58-1.63-18.95-4.27-14.1-17.23-24.87-31.96-26.18-14.04-1.45-28.26 5.51-35.44 17.7-3.78 6.29-5.63 13.08-5.51 20.43-.01 19 .06 38 .02 57 .01 4.39-.17 9 .46 13.35 1.48 9.6 6.79 18.7 14.7 24.43 10.85 8.12 25.95 9.54 38.15 3.61 9.49-4.55 16.83-13.17 19.77-23.29 1.94-5.37 1.42-10.52 1.44-16.1zm162.42 156c.12 6.86-.9 13.25 2.49 19.53 4.71 9.09 15.67 13.61 25.44 10.46 8.69-2.61 14.9-10.91 15.01-19.98.18-18.66-.01-37.35.12-56.01.06-4.37-.45-8.57-2.61-12.44-4.49-8.66-15.06-13.33-24.48-10.66-8.02 2.1-14.34 9.04-15.69 17.21-.55 3.89-.32 7.97-.33 11.89.04 13.33-.03 26.67.05 40zm-143.27 24c-.04 5.99-.47 11.36 2.47 16.85 3.9 7.2 13.01 11.19 20.86 8.64 6.34-1.6 11.46-7.11 12.85-13.47.68-2.69.59-5.27.59-8.02-.06-9.67.04-19.34-.04-29.01-.16-8.55-6.19-16.22-14.68-17.84-10.35-2.41-20.7 5.37-21.78 15.87-.63 8.93-.1 18.01-.27 26.98zM473.48 483c.03 5.21-.67 9.86 1.92 14.64 3.52 8.46 12.46 13.95 21.61 13.09 10.8-.82 20.14-10.8 19.66-21.73-.05-17 .01-34 .02-51-.03-3.48.19-7.09-.35-10.54-1.55-7.29-6.78-13.38-13.77-16-9.27-3.64-20.21.23-25.47 8.6-1.92 3.3-3.72 7.03-3.65 10.92.03 17.34.05 34.68.03 52.02z",
                    id: `${U}_d`
                }), y.jsx("path", {
                    d: "M575.01 80.87c14.73 1.31 27.69 12.08 31.96 26.18 2.36 6.37 1.52 12.33 1.63 18.95.02 17.33-.01 34.67 0 52-.02 5.58.5 10.73-1.44 16.1-2.94 10.12-10.28 18.74-19.77 23.29-12.2 5.93-27.3 4.51-38.15-3.61-7.91-5.73-13.22-14.83-14.7-24.43-.63-4.35-.45-8.96-.46-13.35.04-19-.03-38-.02-57-.12-7.35 1.73-14.14 5.51-20.43 7.18-12.19 21.4-19.15 35.44-17.7z",
                    id: `${U}_a`
                }), y.jsx("path", {
                    d: "M811.47 275.56c2.16 3.87 2.67 8.07 2.61 12.44-.13 18.66.06 37.35-.12 56.01-.11 9.07-6.32 17.37-15.01 19.98-9.77 3.15-20.73-1.37-25.44-10.46-3.39-6.28-2.37-12.67-2.49-19.53-.08-13.33-.01-26.67-.05-40 .01-3.92-.22-8 .33-11.89 1.35-8.17 7.67-15.11 15.69-17.21 9.42-2.67 19.99 2 24.48 10.66z",
                    id: `${U}_b`
                }), y.jsx("path", {
                    d: "M502.57 411.46c6.99 2.62 12.22 8.71 13.77 16 .54 3.45.32 7.06.35 10.54-.01 17-.07 34-.02 51 .48 10.93-8.86 20.91-19.66 21.73-9.15.86-18.09-4.63-21.61-13.09-2.59-4.78-1.89-9.43-1.92-14.64.02-17.34 0-34.68-.03-52.02-.07-3.89 1.73-7.62 3.65-10.92 5.26-8.37 16.2-12.24 25.47-8.6z",
                    id: `${U}_c`
                }), y.jsx("path", {
                    d: "M639.18 473.53c6.56-2.62 14.03-.62 18.58 4.71 2.5 3.05 4.07 6.75 3.92 10.74.01 9.68.01 19.36 0 29.04.22 6.38-3.8 12.63-9.63 15.2-6.99 3.36-15.53 1.02-20.07-5.2-3.94-5.31-3.26-10.8-3.27-17.02.02-7.34-.02-14.67 0-22.01.12-6.75 4.13-12.96 10.47-15.46z",
                    id: `${U}_e`
                }), y.jsx("path", {
                    d: "M788.43 506.54c10.6-3.7 22.62 1.92 26.76 12.29 4.68 10.9-1.08 23.93-12.05 28.16-11.08 4.59-24.31-1.52-28.1-12.85-4.2-11.05 2.24-23.96 13.39-27.6z",
                    id: `${U}_f`
                }), y.jsx("path", {
                    d: "M765.99 643.42c14.85-1.19 30.36 2.53 42.79 10.81 3.68 2.32 6.79 5.25 10.12 8.01-4.59 5.38-9.77 10.3-14.7 15.38-14.15-12.95-36.16-16.59-53.35-7.62-10.2 5.25-17.76 15.47-20.56 26.52-2.63 9.62-2.64 20.14.18 29.73 3.08 10.38 10.68 19.39 20.68 23.69 9.13 3.92 19.58 4.86 29.35 3.33 7.49-1.23 14-4.76 19.95-9.34.08-7.57.04-15.15.02-22.72-10.76.02-21.52.01-32.28.01-.03-7.12-.01-14.23-.01-21.34 18.05-.02 36.11-.02 54.16-.01.06 17.85-.07 35.71.07 53.56-6.1 6.89-13.02 12.78-21.41 16.7-6.83 3.24-14.11 4.93-21.59 5.87h-16.04c-11.4-1.35-23.04-4.16-32.61-10.77-10.69-6.99-18.6-18.15-22.35-30.3-4.16-13.38-4.56-27.67-1.53-41.33 3.02-14.05 10.4-27.02 21.59-36.15 10.46-8.82 24.04-13.03 37.52-14.03z",
                    id: `${U}_g`
                }), y.jsx("path", {
                    d: "M1301 642.36c10.01.27 20.67 2.3 29.55 7.09 7.52 4.04 13.34 10.38 17.26 17.91-6.2 3.47-12.65 6.49-18.92 9.81-5.79-8-15.33-12.35-24.9-13.69-8-.79-17.39-.2-24.37 4.2-4.89 3.11-7.89 8.49-6.86 14.37.8 4.98 5.03 8.01 9.43 9.74 8.8 3.39 19.28 3.62 28.59 5.41 9.98 1.87 21.56 4.85 29.47 11.54 5.78 4.69 9.11 11.27 10.75 18.43v17.12c-1.7 7.55-5.43 14.33-11.35 19.38-9.2 8.08-21.37 10.97-33.24 12.33h-17.56c-8.69-1.25-16.91-2.82-24.76-6.97-9.4-5.15-16.85-13.89-20.57-23.94 6.72-3.17 13.09-7.22 19.97-10.02 1.92 4.32 4.46 8.25 8.21 11.2 7.8 6.33 18.42 8.81 28.3 8.6 7.84-.15 16.03-1.62 22.37-6.54 6.99-5.59 7.79-17.48.53-23.21-7-5.47-17.34-7.01-25.96-7.92-9.59-1.35-20.11-2.97-28.84-7.29-5.34-2.64-10.43-6.24-13.69-11.33-5.17-7.69-6.26-17.85-4.57-26.79 2.06-9.84 8.89-17.64 17.62-22.31 10.15-5.32 22.15-7.47 33.54-7.12z",
                    id: `${U}_h`
                }), y.jsx("path", {
                    d: "M.92 646.67h4.17c28.37 34.75 56.52 69.71 84.81 104.52.1-34.84.01-69.68.05-104.51 3.19-.01 6.39-.02 9.58-.02.08 39.78 0 79.56.04 119.34.04 2.45 0 4.9-.15 7.34-1.19-.04-2.38-.07-3.57-.1-28.5-34.58-56.58-69.6-85-104.25-.16 34.75-.03 69.5-.07 104.25-3.29.01-6.57.01-9.85 0-.02-42.19-.02-84.38-.01-126.57Z",
                    id: `${U}_i`
                }), y.jsx("path", {
                    d: "M128.24 646.69c29.08-.03 58.15-.04 87.23 0 0 3.04.01 6.08.01 9.12-25.93.1-51.86.01-77.79.05-.04 16.5-.01 33-.01 49.5 24.69.02 49.39 0 74.08.01.05 3.04.04 6.07-.14 9.11-24.65-.12-49.31-.09-73.97-.02.05 16.44-.01 32.89.03 49.33 26.56-.06 53.13.11 79.69-.08.28 3.2.25 6.39.06 9.6-29.72-.15-59.46-.01-89.18-.07-.01-42.19 0-84.37-.01-126.55z",
                    id: `${U}_j`
                }), y.jsx("path", {
                    d: "M236.98 647.3c33.8.05 67.63-.12 101.42.08-.02 2.8-.03 5.6-.02 8.39-15.28.24-30.58-.14-45.85.2.12 39.09.03 78.18.04 117.27-3.29.01-6.58.01-9.88 0-.02-39.13 0-78.26-.01-117.39-15.27-.08-30.55.11-45.82-.09-.08-2.83-.07-5.64.12-8.46z",
                    id: `${U}_k`
                }), y.jsx("path", {
                    d: "M357.03 646.67c3.26-.01 6.52-.01 9.78.01 0 20.17-.01 40.34 0 60.5 26.8.05 53.6.03 80.4.01.02-20.17.01-40.34.01-60.51 3.28-.02 6.56-.02 9.83 0 .02 42.18.02 84.37 0 126.56-3.27.01-6.55.01-9.83 0-.01-18.98.03-37.96-.02-56.94-26.78-.01-53.56-.04-80.34.01-.13 18.97-.01 37.95-.06 56.93-3.25.01-6.51.01-9.77 0-.01-42.19-.01-84.38 0-126.57z",
                    id: `${U}_l`
                }), y.jsx("path", {
                    d: "M484.26 646.73c29.09-.14 58.19-.04 87.27-.05.02 3.05.02 6.1.01 9.15-25.92.05-51.83 0-77.75.03-.03 16.5-.02 33-.01 49.5 24.67.02 49.35 0 74.02.01.01 3 0 5.99 0 8.98-24.64.1-49.28.09-73.91.01-.25 16.47-.06 32.96-.1 49.43 26.62.06 53.25-.11 79.87.08-.02 3.11-.02 6.22 0 9.33-29.78.1-59.58.04-89.37.03-.01-42.17.05-84.34-.03-126.5z",
                    id: `${U}_m`
                }), y.jsx("path", {
                    d: "M595.67 646.69c18.78-.02 37.55.03 56.33-.02 10.32.22 20.33 3.19 28 10.33 13.94 12.62 16.37 35.72 6.44 51.44-5.03 8-13.42 13.18-22.49 15.37-3.96 1.12-8.05.55-12 1.81 3.43 3.05 6.27 6.66 9.5 9.92 11.5 12.57 23.08 25.05 34.6 37.61-4.24 0-8.65.39-12.84-.1-14.17-15.38-29.21-31.87-43.32-47.37-11.43-.18-22.86-.02-34.29-.08-.09 15.88 0 31.76-.05 47.64-3.29.01-6.59.01-9.89 0-.01-42.18-.02-84.36.01-126.55zm9.91 69.69c15.48-.01 30.96.02 46.44-.01 6.69-.38 13.97-1.8 19.35-6.04 6.63-4.84 9.86-13.36 10.39-21.32.88-9.33-2.21-19.17-9.19-25.6-5.61-5.44-13.91-7.72-21.57-7.73h-45.41c-.05 20.23-.03 40.47-.01 60.7z",
                    id: `${U}_n`
                }), y.jsx("path", {
                    d: "M885.96 646.73c8.68-.13 17.38-.05 26.07-.04 18.87 42.17 37.88 84.33 56.68 126.52-8.65.09-17.3-.02-25.94.06-3.57-7.91-7.33-15.76-10.64-23.78-22.09-.16-44.2-.12-66.29-.03-3.37 8.02-7.27 15.8-10.76 23.77-8.6.02-17.21.05-25.81-.02 8.86-20.4 18.26-40.59 27.19-60.97 9.95-21.78 19.53-43.74 29.5-65.51zm-10.45 80.49c15.48.15 30.97.03 46.46.06-.45-2.16-1.19-4.14-2.13-6.13-7.01-15.6-13.53-31.39-20.62-46.92l-.31-.26c-8.11 17.56-15.59 35.53-23.4 53.25z",
                    id: `${U}_o`
                }), y.jsx("path", {
                    d: "M977.49 646.66c9.16.02 18.32-.01 27.48.01 12 16.46 23.96 32.93 35.95 49.38 1.17 1.7 2.36 3.33 3.9 4.72 12.97-18.1 26.23-36.03 39.26-54.09 9.12-.03 18.25-.01 27.37-.01.01 42.19.01 84.38 0 126.57-7.95.01-15.9.01-23.85 0-.12-30.48.2-61.03-.17-91.49-13.77 18.21-27.38 36.53-41.18 54.72h-4.48c-13.55-18.24-26.84-36.67-40.32-54.95-.32 30.55-.03 61.16-.14 91.72-7.91.05-15.83-.06-23.74.06-.23-4.76-.07-9.52-.11-14.3.02-37.45-.04-74.9.03-112.34z",
                    id: `${U}_p`
                }), y.jsx("path", {
                    d: "M1133.62 646.65c31.58-.05 63.15-.02 94.73-.02-.04 7.71.13 15.43-.1 23.13-23.59-.17-47.2.01-70.79-.09-.26 9.75-.05 19.51-.12 29.27 22.79.03 45.59-.01 68.38.02 0 7.42.02 14.83-.01 22.25-22.79.04-45.58-.01-68.37.02.01 9.47 0 18.95.01 28.43 23.65.01 47.31 0 70.96 0 .09 7.86.05 15.71.03 23.57-27.45.01-54.89 0-82.34 0-4.17-.04-8.29.19-12.45-.21.15-42.11.01-84.25.07-126.37z",
                    id: `${U}_q`
                })]
            }), y.jsxs("g", {
                stroke: "#ffb840",
                strokeWidth: "10pt",
                transform: "matrix(.35278 0 0 .35278 -.322 0)",
                children: [y.jsx("use", {
                    height: "100%",
                    href: `#${U}_a`,
                    width: "100%"
                }), y.jsx("use", {
                    height: "100%",
                    href: `#${U}_b`,
                    width: "100%"
                }), y.jsx("use", {
                    height: "100%",
                    href: `#${U}_c`,
                    width: "100%"
                })]
            }), y.jsxs("g", {
                transform: "matrix(.35278 0 0 .35278 -.322 0)",
                children: [y.jsx("use", {
                    fill: "#ef963f",
                    height: "100%",
                    href: `#${U}_d`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "#ffb840",
                    height: "100%",
                    href: `#${U}_a`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "#ffb840",
                    height: "100%",
                    href: `#${U}_b`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "#ffb840",
                    height: "100%",
                    href: `#${U}_c`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "#ef963f",
                    height: "100%",
                    href: `#${U}_e`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "#ef963f",
                    height: "100%",
                    href: `#${U}_f`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${U}_g`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${U}_h`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${U}_i`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${U}_j`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${U}_k`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${U}_l`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${U}_m`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${U}_n`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${U}_o`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${U}_p`,
                    width: "100%"
                }), y.jsx("use", {
                    fill: "currentColor",
                    height: "100%",
                    href: `#${U}_q`,
                    width: "100%"
                })]
            })]
        })
    }
    const K3 = Le.memo(q3)
      , Eo = C.createContext({
        transformPagePoint: e=>e,
        isStatic: !1,
        reducedMotion: "never"
    })
      , da = C.createContext({})
      , Mc = C.createContext(null)
      , pa = typeof document < "u"
      , wo = pa ? C.useLayoutEffect : C.useEffect
      , bc = C.createContext({
        strict: !1
    });
    function X3(e, t, n, r) {
        const {visualElement: i} = C.useContext(da)
          , s = C.useContext(bc)
          , o = C.useContext(Mc)
          , a = C.useContext(Eo).reducedMotion
          , l = C.useRef();
        r = r || s.renderer,
        !l.current && r && (l.current = r(e, {
            visualState: t,
            parent: i,
            props: n,
            presenceContext: o,
            blockInitialAnimation: o ? o.initial === !1 : !1,
            reducedMotionConfig: a
        }));
        const u = l.current;
        return C.useInsertionEffect(()=>{
            u && u.update(n, o)
        }
        ),
        wo(()=>{
            u && u.render()
        }
        ),
        C.useEffect(()=>{
            u && u.updateFeatures()
        }
        ),
        (window.HandoffAppearAnimations ? wo : C.useEffect)(()=>{
            u && u.animationState && u.animationState.animateChanges()
        }
        ),
        u
    }
    function N1(e) {
        return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
    }
    function Q3(e, t, n) {
        return C.useCallback(r=>{
            r && e.mount && e.mount(r),
            t && (r ? t.mount(r) : t.unmount()),
            n && (typeof n == "function" ? n(r) : N1(n) && (n.current = r))
        }
        , [t])
    }
    function Mi(e) {
        return typeof e == "string" || Array.isArray(e)
    }
    function ha(e) {
        return typeof e == "object" && typeof e.start == "function"
    }
    const jc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
      , Lc = ["initial", ...jc];
    function ma(e) {
        return ha(e.animate) || Lc.some(t=>Mi(e[t]))
    }
    function P1(e) {
        return !!(ma(e) || e.variants)
    }
    function J3(e, t) {
        if (ma(e)) {
            const {initial: n, animate: r} = e;
            return {
                initial: n === !1 || Mi(n) ? n : void 0,
                animate: Mi(r) ? r : void 0
            }
        }
        return e.inherit !== !1 ? t : {}
    }
    function Z3(e) {
        const {initial: t, animate: n} = J3(e, C.useContext(da));
        return C.useMemo(()=>({
            initial: t,
            animate: n
        }), [xd(t), xd(n)])
    }
    function xd(e) {
        return Array.isArray(e) ? e.join(" ") : e
    }
    const kd = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    }
      , bi = {};
    for (const e in kd)
        bi[e] = {
            isEnabled: t=>kd[e].some(n=>!!t[n])
        };
    function eu(e) {
        for (const t in e)
            bi[t] = {
                ...bi[t],
                ...e[t]
            }
    }
    const D1 = C.createContext({})
      , ev = C.createContext({})
      , tv = Symbol.for("motionComponentSymbol");
    function nv({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
        e && eu(e);
        function s(a, l) {
            let u;
            const c = {
                ...C.useContext(Eo),
                ...a,
                layoutId: rv(a)
            }
              , {isStatic: f} = c
              , d = Z3(a)
              , h = r(a, f);
            if (!f && pa) {
                d.visualElement = X3(i, h, c, t);
                const _ = C.useContext(ev)
                  , v = C.useContext(bc).strict;
                d.visualElement && (u = d.visualElement.loadFeatures(c, v, e, _))
            }
            return C.createElement(da.Provider, {
                value: d
            }, u && d.visualElement ? C.createElement(u, {
                visualElement: d.visualElement,
                ...c
            }) : null, n(i, a, Q3(h, d.visualElement, l), h, f, d.visualElement))
        }
        const o = C.forwardRef(s);
        return o[tv] = i,
        o
    }
    function rv({layoutId: e}) {
        const t = C.useContext(D1).id;
        return t && e !== void 0 ? t + "-" + e : e
    }
    function iv(e) {
        function t(r, i={}) {
            return nv(e(r, i))
        }
        if (typeof Proxy > "u")
            return t;
        const n = new Map;
        return new Proxy(t,{
            get: (r,i)=>(n.has(i) || n.set(i, t(i)),
            n.get(i))
        })
    }
    const sv = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
    function $c(e) {
        return typeof e != "string" || e.includes("-") ? !1 : !!(sv.indexOf(e) > -1 || /[A-Z]/.test(e))
    }
    const ov = {}
      , as = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
      , Wn = new Set(as);
    function O1(e, {layout: t, layoutId: n}) {
        return Wn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ov[e] || e === "opacity")
    }
    const Xe = e=>!!(e && e.getVelocity)
      , av = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    }
      , lv = as.length;
    function uv(e, {enableHardwareAcceleration: t=!0, allowTransformNone: n=!0}, r, i) {
        let s = "";
        for (let o = 0; o < lv; o++) {
            const a = as[o];
            if (e[a] !== void 0) {
                const l = av[a] || a;
                s += `${l}(${e[a]}) `
            }
        }
        return t && !e.z && (s += "translateZ(0)"),
        s = s.trim(),
        i ? s = i(e, r ? "" : s) : n && r && (s = "none"),
        s
    }
    const I1 = e=>t=>typeof t == "string" && t.startsWith(e)
      , A1 = I1("--")
      , tu = I1("var(--")
      , cv = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
      , fv = (e,t)=>t && typeof e == "number" ? t.transform(e) : e
      , Or = (e,t,n)=>Math.min(Math.max(n, e), t)
      , qn = {
        test: e=>typeof e == "number",
        parse: parseFloat,
        transform: e=>e
    }
      , _i = {
        ...qn,
        transform: e=>Or(0, 1, e)
    }
      , xs = {
        ...qn,
        default: 1
    }
      , yi = e=>Math.round(e * 1e5) / 1e5
      , ga = /(-)?([\d]*\.?[\d])+/g
      , M1 = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
      , dv = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
    function ls(e) {
        return typeof e == "string"
    }
    const us = e=>({
        test: t=>ls(t) && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t=>`${t}${e}`
    })
      , Yt = us("deg")
      , _r = us("%")
      , I = us("px")
      , pv = us("vh")
      , hv = us("vw")
      , Rd = {
        ..._r,
        parse: e=>_r.parse(e) / 100,
        transform: e=>_r.transform(e * 100)
    }
      , Cd = {
        ...qn,
        transform: Math.round
    }
      , b1 = {
        borderWidth: I,
        borderTopWidth: I,
        borderRightWidth: I,
        borderBottomWidth: I,
        borderLeftWidth: I,
        borderRadius: I,
        radius: I,
        borderTopLeftRadius: I,
        borderTopRightRadius: I,
        borderBottomRightRadius: I,
        borderBottomLeftRadius: I,
        width: I,
        maxWidth: I,
        height: I,
        maxHeight: I,
        size: I,
        top: I,
        right: I,
        bottom: I,
        left: I,
        padding: I,
        paddingTop: I,
        paddingRight: I,
        paddingBottom: I,
        paddingLeft: I,
        margin: I,
        marginTop: I,
        marginRight: I,
        marginBottom: I,
        marginLeft: I,
        rotate: Yt,
        rotateX: Yt,
        rotateY: Yt,
        rotateZ: Yt,
        scale: xs,
        scaleX: xs,
        scaleY: xs,
        scaleZ: xs,
        skew: Yt,
        skewX: Yt,
        skewY: Yt,
        distance: I,
        translateX: I,
        translateY: I,
        translateZ: I,
        x: I,
        y: I,
        z: I,
        perspective: I,
        transformPerspective: I,
        opacity: _i,
        originX: Rd,
        originY: Rd,
        originZ: I,
        zIndex: Cd,
        fillOpacity: _i,
        strokeOpacity: _i,
        numOctaves: Cd
    };
    function Bc(e, t, n, r) {
        const {style: i, vars: s, transform: o, transformOrigin: a} = e;
        let l = !1
          , u = !1
          , c = !0;
        for (const f in t) {
            const d = t[f];
            if (A1(f)) {
                s[f] = d;
                continue
            }
            const h = b1[f]
              , _ = fv(d, h);
            if (Wn.has(f)) {
                if (l = !0,
                o[f] = _,
                !c)
                    continue;
                d !== (h.default || 0) && (c = !1)
            } else
                f.startsWith("origin") ? (u = !0,
                a[f] = _) : i[f] = _
        }
        if (t.transform || (l || r ? i.transform = uv(e.transform, n, c, r) : i.transform && (i.transform = "none")),
        u) {
            const {originX: f="50%", originY: d="50%", originZ: h=0} = a;
            i.transformOrigin = `${f} ${d} ${h}`
        }
    }
    const Uc = ()=>({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });
    function j1(e, t, n) {
        for (const r in t)
            !Xe(t[r]) && !O1(r, n) && (e[r] = t[r])
    }
    function mv({transformTemplate: e}, t, n) {
        return C.useMemo(()=>{
            const r = Uc();
            return Bc(r, t, {
                enableHardwareAcceleration: !n
            }, e),
            Object.assign({}, r.vars, r.style)
        }
        , [t])
    }
    function gv(e, t, n) {
        const r = e.style || {}
          , i = {};
        return j1(i, r, e),
        Object.assign(i, mv(e, t, n)),
        e.transformValues ? e.transformValues(i) : i
    }
    function _v(e, t, n) {
        const r = {}
          , i = gv(e, t, n);
        return e.drag && e.dragListener !== !1 && (r.draggable = !1,
        i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
        i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
        e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
        r.style = i,
        r
    }
    const yv = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);
    function To(e) {
        return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || yv.has(e)
    }
    let L1 = e=>!To(e);
    function $1(e) {
        e && (L1 = t=>t.startsWith("on") ? !To(t) : e(t))
    }
    try {
        $1(require("@emotion/is-prop-valid").default)
    } catch {}
    function vv(e, t, n) {
        const r = {};
        for (const i in e)
            i === "values" && typeof e.values == "object" || (L1(i) || n === !0 && To(i) || !t && !To(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
        return r
    }
    function Nd(e, t, n) {
        return typeof e == "string" ? e : I.transform(t + n * e)
    }
    function Sv(e, t, n) {
        const r = Nd(t, e.x, e.width)
          , i = Nd(n, e.y, e.height);
        return `${r} ${i}`
    }
    const Ev = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    }
      , wv = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };
    function Tv(e, t, n=1, r=0, i=!0) {
        e.pathLength = 1;
        const s = i ? Ev : wv;
        e[s.offset] = I.transform(-r);
        const o = I.transform(t)
          , a = I.transform(n);
        e[s.array] = `${o} ${a}`
    }
    function Fc(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: s, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...u}, c, f, d) {
        if (Bc(e, u, c, d),
        f) {
            e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
            return
        }
        e.attrs = e.style,
        e.style = {};
        const {attrs: h, style: _, dimensions: v} = e;
        h.transform && (v && (_.transform = h.transform),
        delete h.transform),
        v && (i !== void 0 || s !== void 0 || _.transform) && (_.transformOrigin = Sv(v, i !== void 0 ? i : .5, s !== void 0 ? s : .5)),
        t !== void 0 && (h.x = t),
        n !== void 0 && (h.y = n),
        r !== void 0 && (h.scale = r),
        o !== void 0 && Tv(h, o, a, l, !1)
    }
    const B1 = ()=>({
        ...Uc(),
        attrs: {}
    })
      , zc = e=>typeof e == "string" && e.toLowerCase() === "svg";
    function xv(e, t, n, r) {
        const i = C.useMemo(()=>{
            const s = B1();
            return Fc(s, t, {
                enableHardwareAcceleration: !1
            }, zc(r), e.transformTemplate),
            {
                ...s.attrs,
                style: {
                    ...s.style
                }
            }
        }
        , [t]);
        if (e.style) {
            const s = {};
            j1(s, e.style, e),
            i.style = {
                ...s,
                ...i.style
            }
        }
        return i
    }
    function kv(e=!1) {
        return (n,r,i,{latestValues: s},o)=>{
            const l = ($c(n) ? xv : _v)(r, s, o, n)
              , c = {
                ...vv(r, typeof n == "string", e),
                ...l,
                ref: i
            }
              , {children: f} = r
              , d = C.useMemo(()=>Xe(f) ? f.get() : f, [f]);
            return C.createElement(n, {
                ...c,
                children: d
            })
        }
    }
    const Vc = e=>e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    function U1(e, {style: t, vars: n}, r, i) {
        Object.assign(e.style, t, i && i.getProjectionStyles(r));
        for (const s in n)
            e.style.setProperty(s, n[s])
    }
    const F1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
    function z1(e, t, n, r) {
        U1(e, t, void 0, r);
        for (const i in t.attrs)
            e.setAttribute(F1.has(i) ? i : Vc(i), t.attrs[i])
    }
    function Gc(e, t) {
        const {style: n} = e
          , r = {};
        for (const i in n)
            (Xe(n[i]) || t.style && Xe(t.style[i]) || O1(i, e)) && (r[i] = n[i]);
        return r
    }
    function V1(e, t) {
        const n = Gc(e, t);
        for (const r in e)
            if (Xe(e[r]) || Xe(t[r])) {
                const i = as.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
                n[i] = e[r]
            }
        return n
    }
    function Hc(e, t, n, r={}, i={}) {
        return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
        typeof t == "string" && (t = e.variants && e.variants[t]),
        typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
        t
    }
    function Yc(e) {
        const t = C.useRef(null);
        return t.current === null && (t.current = e()),
        t.current
    }
    const xo = e=>Array.isArray(e)
      , Rv = e=>!!(e && typeof e == "object" && e.mix && e.toValue)
      , Cv = e=>xo(e) ? e[e.length - 1] || 0 : e;
    function Nv(e) {
        const t = Xe(e) ? e.get() : e;
        return Rv(t) ? t.toValue() : t
    }
    function Pv({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, i, s) {
        const o = {
            latestValues: Dv(r, i, s, e),
            renderState: t()
        };
        return n && (o.mount = a=>n(r, a, o)),
        o
    }
    const G1 = e=>(t,n)=>{
        const r = C.useContext(da)
          , i = C.useContext(Mc)
          , s = ()=>Pv(e, t, r, i);
        return n ? s() : Yc(s)
    }
    ;
    function Dv(e, t, n, r) {
        const i = {}
          , s = r(e, {});
        for (const d in s)
            i[d] = Nv(s[d]);
        let {initial: o, animate: a} = e;
        const l = ma(e)
          , u = P1(e);
        t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial),
        a === void 0 && (a = t.animate));
        let c = n ? n.initial === !1 : !1;
        c = c || o === !1;
        const f = c ? a : o;
        return f && typeof f != "boolean" && !ha(f) && (Array.isArray(f) ? f : [f]).forEach(h=>{
            const _ = Hc(e, h);
            if (!_)
                return;
            const {transitionEnd: v, transition: E, ...m} = _;
            for (const p in m) {
                let g = m[p];
                if (Array.isArray(g)) {
                    const S = c ? g.length - 1 : 0;
                    g = g[S]
                }
                g !== null && (i[p] = g)
            }
            for (const p in v)
                i[p] = v[p]
        }
        ),
        i
    }
    const Ov = {
        useVisualState: G1({
            scrapeMotionValuesFromProps: V1,
            createRenderState: B1,
            onMount: (e,t,{renderState: n, latestValues: r})=>{
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
                Fc(n, r, {
                    enableHardwareAcceleration: !1
                }, zc(t.tagName), e.transformTemplate),
                z1(t, n)
            }
        })
    }
      , Iv = {
        useVisualState: G1({
            scrapeMotionValuesFromProps: Gc,
            createRenderState: Uc
        })
    };
    function Av(e, {forwardMotionProps: t=!1}, n, r) {
        return {
            ...$c(e) ? Ov : Iv,
            preloadedFeatures: n,
            useRender: kv(t),
            createVisualElement: r,
            Component: e
        }
    }
    function Dn(e, t, n, r={
        passive: !0
    }) {
        return e.addEventListener(t, n, r),
        ()=>e.removeEventListener(t, n)
    }
    const Mv = e=>e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
    function H1(e, t="page") {
        return {
            point: {
                x: e[t + "X"],
                y: e[t + "Y"]
            }
        }
    }
    const bv = e=>t=>Mv(t) && e(t, H1(t));
    function so(e, t, n, r) {
        return Dn(e, t, bv(n), r)
    }
    const jv = (e,t)=>n=>t(e(n))
      , bn = (...e)=>e.reduce(jv);
    function Y1(e) {
        let t = null;
        return ()=>{
            const n = ()=>{
                t = null
            }
            ;
            return t === null ? (t = e,
            n) : !1
        }
    }
    const Pd = Y1("dragHorizontal")
      , Dd = Y1("dragVertical");
    function Lv(e) {
        let t = !1;
        if (e === "y")
            t = Dd();
        else if (e === "x")
            t = Pd();
        else {
            const n = Pd()
              , r = Dd();
            n && r ? t = ()=>{
                n(),
                r()
            }
            : (n && n(),
            r && r())
        }
        return t
    }
    function W1() {
        const e = Lv(!0);
        return e ? (e(),
        !1) : !0
    }
    class Wr {
        constructor(t) {
            this.isMounted = !1,
            this.node = t
        }
        update() {}
    }
    const De = e=>e;
    function $v(e) {
        let t = []
          , n = []
          , r = 0
          , i = !1
          , s = !1;
        const o = new WeakSet
          , a = {
            schedule: (l,u=!1,c=!1)=>{
                const f = c && i
                  , d = f ? t : n;
                return u && o.add(l),
                d.indexOf(l) === -1 && (d.push(l),
                f && i && (r = t.length)),
                l
            }
            ,
            cancel: l=>{
                const u = n.indexOf(l);
                u !== -1 && n.splice(u, 1),
                o.delete(l)
            }
            ,
            process: l=>{
                if (i) {
                    s = !0;
                    return
                }
                if (i = !0,
                [t,n] = [n, t],
                n.length = 0,
                r = t.length,
                r)
                    for (let u = 0; u < r; u++) {
                        const c = t[u];
                        c(l),
                        o.has(c) && (a.schedule(c),
                        e())
                    }
                i = !1,
                s && (s = !1,
                a.process(l))
            }
        };
        return a
    }
    const ks = ["prepare", "read", "update", "preRender", "render", "postRender"]
      , Bv = 40;
    function Uv(e, t) {
        let n = !1
          , r = !0;
        const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        }
          , s = ks.reduce((f,d)=>(f[d] = $v(()=>n = !0),
        f), {})
          , o = f=>s[f].process(i)
          , a = f=>{
            n = !1,
            i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, Bv), 1),
            i.timestamp = f,
            i.isProcessing = !0,
            ks.forEach(o),
            i.isProcessing = !1,
            n && t && (r = !1,
            e(a))
        }
          , l = ()=>{
            n = !0,
            r = !0,
            i.isProcessing || e(a)
        }
        ;
        return {
            schedule: ks.reduce((f,d)=>{
                const h = s[d];
                return f[d] = (_,v=!1,E=!1)=>(n || l(),
                h.schedule(_, v, E)),
                f
            }
            , {}),
            cancel: f=>ks.forEach(d=>s[d].cancel(f)),
            state: i,
            steps: s
        }
    }
    const {schedule: $e, cancel: ko, state: nu, steps: I8} = Uv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : De, !0);
    function Od(e, t) {
        const n = "pointer" + (t ? "enter" : "leave")
          , r = "onHover" + (t ? "Start" : "End")
          , i = (s,o)=>{
            if (s.type === "touch" || W1())
                return;
            const a = e.getProps();
            e.animationState && a.whileHover && e.animationState.setActive("whileHover", t),
            a[r] && $e.update(()=>a[r](s, o))
        }
        ;
        return so(e.current, n, i, {
            passive: !e.getProps()[r]
        })
    }
    class Fv extends Wr {
        mount() {
            this.unmount = bn(Od(this.node, !0), Od(this.node, !1))
        }
        unmount() {}
    }
    class zv extends Wr {
        constructor() {
            super(...arguments),
            this.isActive = !1
        }
        onFocus() {
            let t = !1;
            try {
                t = this.node.current.matches(":focus-visible")
            } catch {
                t = !0
            }
            !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
            this.isActive = !0)
        }
        onBlur() {
            !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
            this.isActive = !1)
        }
        mount() {
            this.unmount = bn(Dn(this.node.current, "focus", ()=>this.onFocus()), Dn(this.node.current, "blur", ()=>this.onBlur()))
        }
        unmount() {}
    }
    const q1 = (e,t)=>t ? e === t ? !0 : q1(e, t.parentElement) : !1;
    function al(e, t) {
        if (!t)
            return;
        const n = new PointerEvent("pointer" + e);
        t(n, H1(n))
    }
    class Vv extends Wr {
        constructor() {
            super(...arguments),
            this.removeStartListeners = De,
            this.removeEndListeners = De,
            this.removeAccessibleListeners = De,
            this.startPointerPress = (t,n)=>{
                if (this.removeEndListeners(),
                this.isPressing)
                    return;
                const r = this.node.getProps()
                  , s = so(window, "pointerup", (a,l)=>{
                    if (!this.checkPressEnd())
                        return;
                    const {onTap: u, onTapCancel: c} = this.node.getProps();
                    $e.update(()=>{
                        q1(this.node.current, a.target) ? u && u(a, l) : c && c(a, l)
                    }
                    )
                }
                , {
                    passive: !(r.onTap || r.onPointerUp)
                })
                  , o = so(window, "pointercancel", (a,l)=>this.cancelPress(a, l), {
                    passive: !(r.onTapCancel || r.onPointerCancel)
                });
                this.removeEndListeners = bn(s, o),
                this.startPress(t, n)
            }
            ,
            this.startAccessiblePress = ()=>{
                const t = s=>{
                    if (s.key !== "Enter" || this.isPressing)
                        return;
                    const o = a=>{
                        a.key !== "Enter" || !this.checkPressEnd() || al("up", (l,u)=>{
                            const {onTap: c} = this.node.getProps();
                            c && $e.update(()=>c(l, u))
                        }
                        )
                    }
                    ;
                    this.removeEndListeners(),
                    this.removeEndListeners = Dn(this.node.current, "keyup", o),
                    al("down", (a,l)=>{
                        this.startPress(a, l)
                    }
                    )
                }
                  , n = Dn(this.node.current, "keydown", t)
                  , r = ()=>{
                    this.isPressing && al("cancel", (s,o)=>this.cancelPress(s, o))
                }
                  , i = Dn(this.node.current, "blur", r);
                this.removeAccessibleListeners = bn(n, i)
            }
        }
        startPress(t, n) {
            this.isPressing = !0;
            const {onTapStart: r, whileTap: i} = this.node.getProps();
            i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
            r && $e.update(()=>r(t, n))
        }
        checkPressEnd() {
            return this.removeEndListeners(),
            this.isPressing = !1,
            this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
            !W1()
        }
        cancelPress(t, n) {
            if (!this.checkPressEnd())
                return;
            const {onTapCancel: r} = this.node.getProps();
            r && $e.update(()=>r(t, n))
        }
        mount() {
            const t = this.node.getProps()
              , n = so(this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            })
              , r = Dn(this.node.current, "focus", this.startAccessiblePress);
            this.removeStartListeners = bn(n, r)
        }
        unmount() {
            this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners()
        }
    }
    const ru = new WeakMap
      , ll = new WeakMap
      , Gv = e=>{
        const t = ru.get(e.target);
        t && t(e)
    }
      , Hv = e=>{
        e.forEach(Gv)
    }
    ;
    function Yv({root: e, ...t}) {
        const n = e || document;
        ll.has(n) || ll.set(n, {});
        const r = ll.get(n)
          , i = JSON.stringify(t);
        return r[i] || (r[i] = new IntersectionObserver(Hv,{
            root: e,
            ...t
        })),
        r[i]
    }
    function Wv(e, t, n) {
        const r = Yv(t);
        return ru.set(e, n),
        r.observe(e),
        ()=>{
            ru.delete(e),
            r.unobserve(e)
        }
    }
    const qv = {
        some: 0,
        all: 1
    };
    class Kv extends Wr {
        constructor() {
            super(...arguments),
            this.hasEnteredView = !1,
            this.isInView = !1
        }
        startObserver() {
            this.unmount();
            const {viewport: t={}} = this.node.getProps()
              , {root: n, margin: r, amount: i="some", once: s} = t
              , o = {
                root: n ? n.current : void 0,
                rootMargin: r,
                threshold: typeof i == "number" ? i : qv[i]
            }
              , a = l=>{
                const {isIntersecting: u} = l;
                if (this.isInView === u || (this.isInView = u,
                s && !u && this.hasEnteredView))
                    return;
                u && (this.hasEnteredView = !0),
                this.node.animationState && this.node.animationState.setActive("whileInView", u);
                const {onViewportEnter: c, onViewportLeave: f} = this.node.getProps()
                  , d = u ? c : f;
                d && d(l)
            }
            ;
            return Wv(this.node.current, o, a)
        }
        mount() {
            this.startObserver()
        }
        update() {
            if (typeof IntersectionObserver > "u")
                return;
            const {props: t, prevProps: n} = this.node;
            ["amount", "margin", "root"].some(Xv(t, n)) && this.startObserver()
        }
        unmount() {}
    }
    function Xv({viewport: e={}}, {viewport: t={}}={}) {
        return n=>e[n] !== t[n]
    }
    const Qv = {
        inView: {
            Feature: Kv
        },
        tap: {
            Feature: Vv
        },
        focus: {
            Feature: zv
        },
        hover: {
            Feature: Fv
        }
    };
    function K1(e, t) {
        if (!Array.isArray(t))
            return !1;
        const n = t.length;
        if (n !== e.length)
            return !1;
        for (let r = 0; r < n; r++)
            if (t[r] !== e[r])
                return !1;
        return !0
    }
    function Jv(e) {
        const t = {};
        return e.values.forEach((n,r)=>t[r] = n.get()),
        t
    }
    function Zv(e) {
        const t = {};
        return e.values.forEach((n,r)=>t[r] = n.getVelocity()),
        t
    }
    function _a(e, t, n) {
        const r = e.getProps();
        return Hc(r, t, n !== void 0 ? n : r.custom, Jv(e), Zv(e))
    }
    const e4 = "framerAppearId"
      , t4 = "data-" + Vc(e4);
    let n4 = De
      , Wc = De;
    const jn = e=>e * 1e3
      , rn = e=>e / 1e3
      , r4 = {
        current: !1
    }
      , X1 = e=>Array.isArray(e) && typeof e[0] == "number";
    function Q1(e) {
        return !!(!e || typeof e == "string" && J1[e] || X1(e) || Array.isArray(e) && e.every(Q1))
    }
    const fi = ([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`
      , J1 = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: fi([0, .65, .55, 1]),
        circOut: fi([.55, 0, 1, .45]),
        backIn: fi([.31, .01, .66, -.59]),
        backOut: fi([.33, 1.53, .69, .99])
    };
    function Z1(e) {
        if (e)
            return X1(e) ? fi(e) : Array.isArray(e) ? e.map(Z1) : J1[e]
    }
    function i4(e, t, n, {delay: r=0, duration: i, repeat: s=0, repeatType: o="loop", ease: a, times: l}={}) {
        const u = {
            [t]: n
        };
        l && (u.offset = l);
        const c = Z1(a);
        return Array.isArray(c) && (u.easing = c),
        e.animate(u, {
            delay: r,
            duration: i,
            easing: Array.isArray(c) ? "linear" : c,
            fill: "both",
            iterations: s + 1,
            direction: o === "reverse" ? "alternate" : "normal"
        })
    }
    const Id = {
        waapi: ()=>Object.hasOwnProperty.call(Element.prototype, "animate")
    }
      , ul = {}
      , e0 = {};
    for (const e in Id)
        e0[e] = ()=>(ul[e] === void 0 && (ul[e] = Id[e]()),
        ul[e]);
    function s4(e, {repeat: t, repeatType: n="loop"}) {
        const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
        return e[r]
    }
    const t0 = (e,t,n)=>(((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
      , o4 = 1e-7
      , a4 = 12;
    function l4(e, t, n, r, i) {
        let s, o, a = 0;
        do
            o = t + (n - t) / 2,
            s = t0(o, r, i) - e,
            s > 0 ? n = o : t = o;
        while (Math.abs(s) > o4 && ++a < a4);
        return o
    }
    function cs(e, t, n, r) {
        if (e === t && n === r)
            return De;
        const i = s=>l4(s, 0, 1, e, n);
        return s=>s === 0 || s === 1 ? s : t0(i(s), t, r)
    }
    const u4 = cs(.42, 0, 1, 1)
      , c4 = cs(0, 0, .58, 1)
      , n0 = cs(.42, 0, .58, 1)
      , f4 = e=>Array.isArray(e) && typeof e[0] != "number"
      , r0 = e=>t=>t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
      , i0 = e=>t=>1 - e(1 - t)
      , s0 = e=>1 - Math.sin(Math.acos(e))
      , o0 = i0(s0)
      , d4 = r0(o0)
      , a0 = cs(.33, 1.53, .69, .99)
      , qc = i0(a0)
      , p4 = r0(qc)
      , h4 = e=>(e *= 2) < 1 ? .5 * qc(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
      , m4 = {
        linear: De,
        easeIn: u4,
        easeInOut: n0,
        easeOut: c4,
        circIn: s0,
        circInOut: d4,
        circOut: o0,
        backIn: qc,
        backInOut: p4,
        backOut: a0,
        anticipate: h4
    }
      , Ad = e=>{
        if (Array.isArray(e)) {
            Wc(e.length === 4);
            const [t,n,r,i] = e;
            return cs(t, n, r, i)
        } else if (typeof e == "string")
            return m4[e];
        return e
    }
      , Kc = (e,t)=>n=>!!(ls(n) && dv.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
      , l0 = (e,t,n)=>r=>{
        if (!ls(r))
            return r;
        const [i,s,o,a] = r.match(ga);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(s),
            [n]: parseFloat(o),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    }
      , g4 = e=>Or(0, 255, e)
      , cl = {
        ...qn,
        transform: e=>Math.round(g4(e))
    }
      , On = {
        test: Kc("rgb", "red"),
        parse: l0("red", "green", "blue"),
        transform: ({red: e, green: t, blue: n, alpha: r=1})=>"rgba(" + cl.transform(e) + ", " + cl.transform(t) + ", " + cl.transform(n) + ", " + yi(_i.transform(r)) + ")"
    };
    function _4(e) {
        let t = ""
          , n = ""
          , r = ""
          , i = "";
        return e.length > 5 ? (t = e.substring(1, 3),
        n = e.substring(3, 5),
        r = e.substring(5, 7),
        i = e.substring(7, 9)) : (t = e.substring(1, 2),
        n = e.substring(2, 3),
        r = e.substring(3, 4),
        i = e.substring(4, 5),
        t += t,
        n += n,
        r += r,
        i += i),
        {
            red: parseInt(t, 16),
            green: parseInt(n, 16),
            blue: parseInt(r, 16),
            alpha: i ? parseInt(i, 16) / 255 : 1
        }
    }
    const iu = {
        test: Kc("#"),
        parse: _4,
        transform: On.transform
    }
      , rr = {
        test: Kc("hsl", "hue"),
        parse: l0("hue", "saturation", "lightness"),
        transform: ({hue: e, saturation: t, lightness: n, alpha: r=1})=>"hsla(" + Math.round(e) + ", " + _r.transform(yi(t)) + ", " + _r.transform(yi(n)) + ", " + yi(_i.transform(r)) + ")"
    }
      , Ce = {
        test: e=>On.test(e) || iu.test(e) || rr.test(e),
        parse: e=>On.test(e) ? On.parse(e) : rr.test(e) ? rr.parse(e) : iu.parse(e),
        transform: e=>ls(e) ? e : e.hasOwnProperty("red") ? On.transform(e) : rr.transform(e)
    }
      , ya = (e,t,n)=>-n * e + n * t + e;
    function fl(e, t, n) {
        return n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }
    function y4({hue: e, saturation: t, lightness: n, alpha: r}) {
        e /= 360,
        t /= 100,
        n /= 100;
        let i = 0
          , s = 0
          , o = 0;
        if (!t)
            i = s = o = n;
        else {
            const a = n < .5 ? n * (1 + t) : n + t - n * t
              , l = 2 * n - a;
            i = fl(l, a, e + 1 / 3),
            s = fl(l, a, e),
            o = fl(l, a, e - 1 / 3)
        }
        return {
            red: Math.round(i * 255),
            green: Math.round(s * 255),
            blue: Math.round(o * 255),
            alpha: r
        }
    }
    const dl = (e,t,n)=>{
        const r = e * e;
        return Math.sqrt(Math.max(0, n * (t * t - r) + r))
    }
      , v4 = [iu, On, rr]
      , S4 = e=>v4.find(t=>t.test(e));
    function Md(e) {
        const t = S4(e);
        let n = t.parse(e);
        return t === rr && (n = y4(n)),
        n
    }
    const u0 = (e,t)=>{
        const n = Md(e)
          , r = Md(t)
          , i = {
            ...n
        };
        return s=>(i.red = dl(n.red, r.red, s),
        i.green = dl(n.green, r.green, s),
        i.blue = dl(n.blue, r.blue, s),
        i.alpha = ya(n.alpha, r.alpha, s),
        On.transform(i))
    }
    ;
    function E4(e) {
        var t, n;
        return isNaN(e) && ls(e) && (((t = e.match(ga)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(M1)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
    }
    const c0 = {
        regex: cv,
        countKey: "Vars",
        token: "${v}",
        parse: De
    }
      , f0 = {
        regex: M1,
        countKey: "Colors",
        token: "${c}",
        parse: Ce.parse
    }
      , d0 = {
        regex: ga,
        countKey: "Numbers",
        token: "${n}",
        parse: qn.parse
    };
    function pl(e, {regex: t, countKey: n, token: r, parse: i}) {
        const s = e.tokenised.match(t);
        s && (e["num" + n] = s.length,
        e.tokenised = e.tokenised.replace(t, r),
        e.values.push(...s.map(i)))
    }
    function Ro(e) {
        const t = e.toString()
          , n = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0
        };
        return n.value.includes("var(--") && pl(n, c0),
        pl(n, f0),
        pl(n, d0),
        n
    }
    function p0(e) {
        return Ro(e).values
    }
    function h0(e) {
        const {values: t, numColors: n, numVars: r, tokenised: i} = Ro(e)
          , s = t.length;
        return o=>{
            let a = i;
            for (let l = 0; l < s; l++)
                l < r ? a = a.replace(c0.token, o[l]) : l < r + n ? a = a.replace(f0.token, Ce.transform(o[l])) : a = a.replace(d0.token, yi(o[l]));
            return a
        }
    }
    const w4 = e=>typeof e == "number" ? 0 : e;
    function T4(e) {
        const t = p0(e);
        return h0(e)(t.map(w4))
    }
    const qr = {
        test: E4,
        parse: p0,
        createTransformer: h0,
        getAnimatableNone: T4
    }
      , m0 = (e,t)=>n=>`${n > 0 ? t : e}`;
    function g0(e, t) {
        return typeof e == "number" ? n=>ya(e, t, n) : Ce.test(e) ? u0(e, t) : e.startsWith("var(") ? m0(e, t) : y0(e, t)
    }
    const _0 = (e,t)=>{
        const n = [...e]
          , r = n.length
          , i = e.map((s,o)=>g0(s, t[o]));
        return s=>{
            for (let o = 0; o < r; o++)
                n[o] = i[o](s);
            return n
        }
    }
      , x4 = (e,t)=>{
        const n = {
            ...e,
            ...t
        }
          , r = {};
        for (const i in n)
            e[i] !== void 0 && t[i] !== void 0 && (r[i] = g0(e[i], t[i]));
        return i=>{
            for (const s in r)
                n[s] = r[s](i);
            return n
        }
    }
      , y0 = (e,t)=>{
        const n = qr.createTransformer(t)
          , r = Ro(e)
          , i = Ro(t);
        return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? bn(_0(r.values, i.values), n) : m0(e, t)
    }
      , v0 = (e,t,n)=>{
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    }
      , bd = (e,t)=>n=>ya(e, t, n);
    function k4(e) {
        return typeof e == "number" ? bd : typeof e == "string" ? Ce.test(e) ? u0 : y0 : Array.isArray(e) ? _0 : typeof e == "object" ? x4 : bd
    }
    function R4(e, t, n) {
        const r = []
          , i = n || k4(e[0])
          , s = e.length - 1;
        for (let o = 0; o < s; o++) {
            let a = i(e[o], e[o + 1]);
            if (t) {
                const l = Array.isArray(t) ? t[o] || De : t;
                a = bn(l, a)
            }
            r.push(a)
        }
        return r
    }
    function S0(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
        const s = e.length;
        if (Wc(s === t.length),
        s === 1)
            return ()=>t[0];
        e[0] > e[s - 1] && (e = [...e].reverse(),
        t = [...t].reverse());
        const o = R4(t, r, i)
          , a = o.length
          , l = u=>{
            let c = 0;
            if (a > 1)
                for (; c < e.length - 2 && !(u < e[c + 1]); c++)
                    ;
            const f = v0(e[c], e[c + 1], u);
            return o[c](f)
        }
        ;
        return n ? u=>l(Or(e[0], e[s - 1], u)) : l
    }
    function C4(e, t) {
        const n = e[e.length - 1];
        for (let r = 1; r <= t; r++) {
            const i = v0(0, t, r);
            e.push(ya(n, 1, i))
        }
    }
    function N4(e) {
        const t = [0];
        return C4(t, e.length - 1),
        t
    }
    function P4(e, t) {
        return e.map(n=>n * t)
    }
    function D4(e, t) {
        return e.map(()=>t || n0).splice(0, e.length - 1)
    }
    function Co({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
        const i = f4(r) ? r.map(Ad) : Ad(r)
          , s = {
            done: !1,
            value: t[0]
        }
          , o = P4(n && n.length === t.length ? n : N4(t), e)
          , a = S0(o, t, {
            ease: Array.isArray(i) ? i : D4(t, i)
        });
        return {
            calculatedDuration: e,
            next: l=>(s.value = a(l),
            s.done = l >= e,
            s)
        }
    }
    function E0(e, t) {
        return t ? e * (1e3 / t) : 0
    }
    const O4 = 5;
    function w0(e, t, n) {
        const r = Math.max(t - O4, 0);
        return E0(n - e(r), t - r)
    }
    const hl = .001
      , I4 = .01
      , jd = 10
      , A4 = .05
      , M4 = 1;
    function b4({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
        let i, s;
        n4(e <= jn(jd));
        let o = 1 - t;
        o = Or(A4, M4, o),
        e = Or(I4, jd, rn(e)),
        o < 1 ? (i = u=>{
            const c = u * o
              , f = c * e
              , d = c - n
              , h = su(u, o)
              , _ = Math.exp(-f);
            return hl - d / h * _
        }
        ,
        s = u=>{
            const f = u * o * e
              , d = f * n + n
              , h = Math.pow(o, 2) * Math.pow(u, 2) * e
              , _ = Math.exp(-f)
              , v = su(Math.pow(u, 2), o);
            return (-i(u) + hl > 0 ? -1 : 1) * ((d - h) * _) / v
        }
        ) : (i = u=>{
            const c = Math.exp(-u * e)
              , f = (u - n) * e + 1;
            return -hl + c * f
        }
        ,
        s = u=>{
            const c = Math.exp(-u * e)
              , f = (n - u) * (e * e);
            return c * f
        }
        );
        const a = 5 / e
          , l = L4(i, s, a);
        if (e = jn(e),
        isNaN(l))
            return {
                stiffness: 100,
                damping: 10,
                duration: e
            };
        {
            const u = Math.pow(l, 2) * r;
            return {
                stiffness: u,
                damping: o * 2 * Math.sqrt(r * u),
                duration: e
            }
        }
    }
    const j4 = 12;
    function L4(e, t, n) {
        let r = n;
        for (let i = 1; i < j4; i++)
            r = r - e(r) / t(r);
        return r
    }
    function su(e, t) {
        return e * Math.sqrt(1 - t * t)
    }
    const $4 = ["duration", "bounce"]
      , B4 = ["stiffness", "damping", "mass"];
    function Ld(e, t) {
        return t.some(n=>e[n] !== void 0)
    }
    function U4(e) {
        let t = {
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1,
            ...e
        };
        if (!Ld(e, B4) && Ld(e, $4)) {
            const n = b4(e);
            t = {
                ...t,
                ...n,
                velocity: 0,
                mass: 1
            },
            t.isResolvedFromDuration = !0
        }
        return t
    }
    function T0({keyframes: e, restDelta: t, restSpeed: n, ...r}) {
        const i = e[0]
          , s = e[e.length - 1]
          , o = {
            done: !1,
            value: i
        }
          , {stiffness: a, damping: l, mass: u, velocity: c, duration: f, isResolvedFromDuration: d} = U4(r)
          , h = c ? -rn(c) : 0
          , _ = l / (2 * Math.sqrt(a * u))
          , v = s - i
          , E = rn(Math.sqrt(a / u))
          , m = Math.abs(v) < 5;
        n || (n = m ? .01 : 2),
        t || (t = m ? .005 : .5);
        let p;
        if (_ < 1) {
            const g = su(E, _);
            p = S=>{
                const x = Math.exp(-_ * E * S);
                return s - x * ((h + _ * E * v) / g * Math.sin(g * S) + v * Math.cos(g * S))
            }
        } else if (_ === 1)
            p = g=>s - Math.exp(-E * g) * (v + (h + E * v) * g);
        else {
            const g = E * Math.sqrt(_ * _ - 1);
            p = S=>{
                const x = Math.exp(-_ * E * S)
                  , P = Math.min(g * S, 300);
                return s - x * ((h + _ * E * v) * Math.sinh(P) + g * v * Math.cosh(P)) / g
            }
        }
        return {
            calculatedDuration: d && f || null,
            next: g=>{
                const S = p(g);
                if (d)
                    o.done = g >= f;
                else {
                    let x = h;
                    g !== 0 && (_ < 1 ? x = w0(p, g, S) : x = 0);
                    const P = Math.abs(x) <= n
                      , N = Math.abs(s - S) <= t;
                    o.done = P && N
                }
                return o.value = o.done ? s : S,
                o
            }
        }
    }
    function $d({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
        const f = e[0]
          , d = {
            done: !1,
            value: f
        }
          , h = R=>a !== void 0 && R < a || l !== void 0 && R > l
          , _ = R=>a === void 0 ? l : l === void 0 || Math.abs(a - R) < Math.abs(l - R) ? a : l;
        let v = n * t;
        const E = f + v
          , m = o === void 0 ? E : o(E);
        m !== E && (v = m - f);
        const p = R=>-v * Math.exp(-R / r)
          , g = R=>m + p(R)
          , S = R=>{
            const A = p(R)
              , M = g(R);
            d.done = Math.abs(A) <= u,
            d.value = d.done ? m : M
        }
        ;
        let x, P;
        const N = R=>{
            h(d.value) && (x = R,
            P = T0({
                keyframes: [d.value, _(d.value)],
                velocity: w0(g, R, d.value),
                damping: i,
                stiffness: s,
                restDelta: u,
                restSpeed: c
            }))
        }
        ;
        return N(0),
        {
            calculatedDuration: null,
            next: R=>{
                let A = !1;
                return !P && x === void 0 && (A = !0,
                S(R),
                N(R)),
                x !== void 0 && R > x ? P.next(R - x) : (!A && S(R),
                d)
            }
        }
    }
    const F4 = e=>{
        const t = ({timestamp: n})=>e(n);
        return {
            start: ()=>$e.update(t, !0),
            stop: ()=>ko(t),
            now: ()=>nu.isProcessing ? nu.timestamp : performance.now()
        }
    }
      , Bd = 2e4;
    function Ud(e) {
        let t = 0;
        const n = 50;
        let r = e.next(t);
        for (; !r.done && t < Bd; )
            t += n,
            r = e.next(t);
        return t >= Bd ? 1 / 0 : t
    }
    const z4 = {
        decay: $d,
        inertia: $d,
        tween: Co,
        keyframes: Co,
        spring: T0
    };
    function No({autoplay: e=!0, delay: t=0, driver: n=F4, keyframes: r, type: i="keyframes", repeat: s=0, repeatDelay: o=0, repeatType: a="loop", onPlay: l, onStop: u, onComplete: c, onUpdate: f, ...d}) {
        let h = 1, _ = !1, v, E;
        const m = ()=>{
            E = new Promise(b=>{
                v = b
            }
            )
        }
        ;
        m();
        let p;
        const g = z4[i] || Co;
        let S;
        g !== Co && typeof r[0] != "number" && (S = S0([0, 100], r, {
            clamp: !1
        }),
        r = [0, 100]);
        const x = g({
            ...d,
            keyframes: r
        });
        let P;
        a === "mirror" && (P = g({
            ...d,
            keyframes: [...r].reverse(),
            velocity: -(d.velocity || 0)
        }));
        let N = "idle"
          , R = null
          , A = null
          , M = null;
        x.calculatedDuration === null && s && (x.calculatedDuration = Ud(x));
        const {calculatedDuration: oe} = x;
        let Me = 1 / 0
          , be = 1 / 0;
        oe !== null && (Me = oe + o,
        be = Me * (s + 1) - o);
        let ae = 0;
        const le = b=>{
            if (A === null)
                return;
            h > 0 && (A = Math.min(A, b)),
            h < 0 && (A = Math.min(b - be / h, A)),
            R !== null ? ae = R : ae = Math.round(b - A) * h;
            const Q = ae - t * (h >= 0 ? 1 : -1)
              , wn = h >= 0 ? Q < 0 : Q > be;
            ae = Math.max(Q, 0),
            N === "finished" && R === null && (ae = be);
            let St = ae
              , Qn = x;
            if (s) {
                const Xa = ae / Me;
                let Es = Math.floor(Xa)
                  , xn = Xa % 1;
                !xn && Xa >= 1 && (xn = 1),
                xn === 1 && Es--,
                Es = Math.min(Es, s + 1);
                const od = !!(Es % 2);
                od && (a === "reverse" ? (xn = 1 - xn,
                o && (xn -= o / Me)) : a === "mirror" && (Qn = P));
                let ad = Or(0, 1, xn);
                ae > be && (ad = a === "reverse" && od ? 1 : 0),
                St = ad * Me
            }
            const Ge = wn ? {
                done: !1,
                value: r[0]
            } : Qn.next(St);
            S && (Ge.value = S(Ge.value));
            let {done: Tn} = Ge;
            !wn && oe !== null && (Tn = h >= 0 ? ae >= be : ae <= 0);
            const b_ = R === null && (N === "finished" || N === "running" && Tn);
            return f && f(Ge.value),
            b_ && D(),
            Ge
        }
          , tt = ()=>{
            p && p.stop(),
            p = void 0
        }
          , vt = ()=>{
            N = "idle",
            tt(),
            v(),
            m(),
            A = M = null
        }
          , D = ()=>{
            N = "finished",
            c && c(),
            tt(),
            v()
        }
          , j = ()=>{
            if (_)
                return;
            p || (p = n(le));
            const b = p.now();
            l && l(),
            R !== null ? A = b - R : (!A || N === "finished") && (A = b),
            N === "finished" && m(),
            M = A,
            R = null,
            N = "running",
            p.start()
        }
        ;
        e && j();
        const L = {
            then(b, Q) {
                return E.then(b, Q)
            },
            get time() {
                return rn(ae)
            },
            set time(b) {
                b = jn(b),
                ae = b,
                R !== null || !p || h === 0 ? R = b : A = p.now() - b / h
            },
            get duration() {
                const b = x.calculatedDuration === null ? Ud(x) : x.calculatedDuration;
                return rn(b)
            },
            get speed() {
                return h
            },
            set speed(b) {
                b === h || !p || (h = b,
                L.time = rn(ae))
            },
            get state() {
                return N
            },
            play: j,
            pause: ()=>{
                N = "paused",
                R = ae
            }
            ,
            stop: ()=>{
                _ = !0,
                N !== "idle" && (N = "idle",
                u && u(),
                vt())
            }
            ,
            cancel: ()=>{
                M !== null && le(M),
                vt()
            }
            ,
            complete: ()=>{
                N = "finished"
            }
            ,
            sample: b=>(A = 0,
            le(b))
        };
        return L
    }
    const V4 = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
      , Rs = 10
      , G4 = 2e4
      , H4 = (e,t)=>t.type === "spring" || e === "backgroundColor" || !Q1(t.ease);
    function Y4(e, t, {onUpdate: n, onComplete: r, ...i}) {
        if (!(e0.waapi() && V4.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
            return !1;
        let o = !1, a, l;
        const u = ()=>{
            l = new Promise(m=>{
                a = m
            }
            )
        }
        ;
        u();
        let {keyframes: c, duration: f=300, ease: d, times: h} = i;
        if (H4(t, i)) {
            const m = No({
                ...i,
                repeat: 0,
                delay: 0
            });
            let p = {
                done: !1,
                value: c[0]
            };
            const g = [];
            let S = 0;
            for (; !p.done && S < G4; )
                p = m.sample(S),
                g.push(p.value),
                S += Rs;
            h = void 0,
            c = g,
            f = S - Rs,
            d = "linear"
        }
        const _ = i4(e.owner.current, t, c, {
            ...i,
            duration: f,
            ease: d,
            times: h
        })
          , v = ()=>_.cancel()
          , E = ()=>{
            $e.update(v),
            a(),
            u()
        }
        ;
        return _.onfinish = ()=>{
            e.set(s4(c, i)),
            r && r(),
            E()
        }
        ,
        {
            then(m, p) {
                return l.then(m, p)
            },
            get time() {
                return rn(_.currentTime || 0)
            },
            set time(m) {
                _.currentTime = jn(m)
            },
            get speed() {
                return _.playbackRate
            },
            set speed(m) {
                _.playbackRate = m
            },
            get duration() {
                return rn(f)
            },
            play: ()=>{
                o || (_.play(),
                ko(v))
            }
            ,
            pause: ()=>_.pause(),
            stop: ()=>{
                if (o = !0,
                _.playState === "idle")
                    return;
                const {currentTime: m} = _;
                if (m) {
                    const p = No({
                        ...i,
                        autoplay: !1
                    });
                    e.setWithVelocity(p.sample(m - Rs).value, p.sample(m).value, Rs)
                }
                E()
            }
            ,
            complete: ()=>_.finish(),
            cancel: E
        }
    }
    function W4({keyframes: e, delay: t, onUpdate: n, onComplete: r}) {
        const i = ()=>(n && n(e[e.length - 1]),
        r && r(),
        {
            time: 0,
            speed: 1,
            duration: 0,
            play: De,
            pause: De,
            stop: De,
            then: s=>(s(),
            Promise.resolve()),
            cancel: De,
            complete: De
        });
        return t ? No({
            keyframes: [0, 1],
            duration: 0,
            delay: t,
            onComplete: i
        }) : i()
    }
    const q4 = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    }
      , K4 = e=>({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    })
      , X4 = {
        type: "keyframes",
        duration: .8
    }
      , Q4 = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    }
      , J4 = (e,{keyframes: t})=>t.length > 2 ? X4 : Wn.has(e) ? e.startsWith("scale") ? K4(t[1]) : q4 : Q4
      , ou = (e,t)=>e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (qr.test(t) || t === "0") && !t.startsWith("url("))
      , Z4 = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function e5(e) {
        const [t,n] = e.slice(0, -1).split("(");
        if (t === "drop-shadow")
            return e;
        const [r] = n.match(ga) || [];
        if (!r)
            return e;
        const i = n.replace(r, "");
        let s = Z4.has(t) ? 1 : 0;
        return r !== n && (s *= 100),
        t + "(" + s + i + ")"
    }
    const t5 = /([a-z-]*)\(.*?\)/g
      , au = {
        ...qr,
        getAnimatableNone: e=>{
            const t = e.match(t5);
            return t ? t.map(e5).join(" ") : e
        }
    }
      , n5 = {
        ...b1,
        color: Ce,
        backgroundColor: Ce,
        outlineColor: Ce,
        fill: Ce,
        stroke: Ce,
        borderColor: Ce,
        borderTopColor: Ce,
        borderRightColor: Ce,
        borderBottomColor: Ce,
        borderLeftColor: Ce,
        filter: au,
        WebkitFilter: au
    }
      , Xc = e=>n5[e];
    function x0(e, t) {
        let n = Xc(e);
        return n !== au && (n = qr),
        n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
    }
    const k0 = e=>/^0[^.\s]+$/.test(e);
    function r5(e) {
        if (typeof e == "number")
            return e === 0;
        if (e !== null)
            return e === "none" || e === "0" || k0(e)
    }
    function i5(e, t, n, r) {
        const i = ou(t, n);
        let s;
        Array.isArray(n) ? s = [...n] : s = [null, n];
        const o = r.from !== void 0 ? r.from : e.get();
        let a;
        const l = [];
        for (let u = 0; u < s.length; u++)
            s[u] === null && (s[u] = u === 0 ? o : s[u - 1]),
            r5(s[u]) && l.push(u),
            typeof s[u] == "string" && s[u] !== "none" && s[u] !== "0" && (a = s[u]);
        if (i && l.length && a)
            for (let u = 0; u < l.length; u++) {
                const c = l[u];
                s[c] = x0(t, a)
            }
        return s
    }
    function s5({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...c}) {
        return !!Object.keys(c).length
    }
    function o5(e, t) {
        return e[t] || e.default || e
    }
    const a5 = (e,t,n,r={})=>i=>{
        const s = o5(r, e) || {}
          , o = s.delay || r.delay || 0;
        let {elapsed: a=0} = r;
        a = a - jn(o);
        const l = i5(t, e, n, s)
          , u = l[0]
          , c = l[l.length - 1]
          , f = ou(e, u)
          , d = ou(e, c);
        let h = {
            keyframes: l,
            velocity: t.getVelocity(),
            ease: "easeOut",
            ...s,
            delay: -a,
            onUpdate: _=>{
                t.set(_),
                s.onUpdate && s.onUpdate(_)
            }
            ,
            onComplete: ()=>{
                i(),
                s.onComplete && s.onComplete()
            }
        };
        if (s5(s) || (h = {
            ...h,
            ...J4(e, h)
        }),
        h.duration && (h.duration = jn(h.duration)),
        h.repeatDelay && (h.repeatDelay = jn(h.repeatDelay)),
        !f || !d || r4.current || s.type === !1)
            return W4(h);
        if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
            const _ = Y4(t, e, h);
            if (_)
                return _
        }
        return No(h)
    }
    ;
    function Po(e) {
        return !!(Xe(e) && e.add)
    }
    const l5 = e=>/^\-?\d*\.?\d+$/.test(e);
    function u5(e, t) {
        e.indexOf(t) === -1 && e.push(t)
    }
    function c5(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }
    class R0 {
        constructor() {
            this.subscriptions = []
        }
        add(t) {
            return u5(this.subscriptions, t),
            ()=>c5(this.subscriptions, t)
        }
        notify(t, n, r) {
            const i = this.subscriptions.length;
            if (i)
                if (i === 1)
                    this.subscriptions[0](t, n, r);
                else
                    for (let s = 0; s < i; s++) {
                        const o = this.subscriptions[s];
                        o && o(t, n, r)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
    }
    const f5 = e=>!isNaN(parseFloat(e));
    class d5 {
        constructor(t, n={}) {
            this.version = "10.12.22",
            this.timeDelta = 0,
            this.lastUpdated = 0,
            this.canTrackVelocity = !1,
            this.events = {},
            this.updateAndNotify = (r,i=!0)=>{
                this.prev = this.current,
                this.current = r;
                const {delta: s, timestamp: o} = nu;
                this.lastUpdated !== o && (this.timeDelta = s,
                this.lastUpdated = o,
                $e.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
            }
            ,
            this.scheduleVelocityCheck = ()=>$e.postRender(this.velocityCheck),
            this.velocityCheck = ({timestamp: r})=>{
                r !== this.lastUpdated && (this.prev = this.current,
                this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
            }
            ,
            this.hasAnimated = !1,
            this.prev = this.current = t,
            this.canTrackVelocity = f5(this.current),
            this.owner = n.owner
        }
        onChange(t) {
            return this.on("change", t)
        }
        on(t, n) {
            this.events[t] || (this.events[t] = new R0);
            const r = this.events[t].add(n);
            return t === "change" ? ()=>{
                r(),
                $e.read(()=>{
                    this.events.change.getSize() || this.stop()
                }
                )
            }
            : r
        }
        clearListeners() {
            for (const t in this.events)
                this.events[t].clear()
        }
        attach(t, n) {
            this.passiveEffect = t,
            this.stopPassiveEffect = n
        }
        set(t, n=!0) {
            !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
        }
        setWithVelocity(t, n, r) {
            this.set(n),
            this.prev = t,
            this.timeDelta = r
        }
        jump(t) {
            this.updateAndNotify(t),
            this.prev = t,
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
        }
        get() {
            return this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            return this.canTrackVelocity ? E0(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
        }
        start(t) {
            return this.stop(),
            new Promise(n=>{
                this.hasAnimated = !0,
                this.animation = t(n),
                this.events.animationStart && this.events.animationStart.notify()
            }
            ).then(()=>{
                this.events.animationComplete && this.events.animationComplete.notify(),
                this.clearAnimation()
            }
            )
        }
        stop() {
            this.animation && (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation()
        }
        isAnimating() {
            return !!this.animation
        }
        clearAnimation() {
            delete this.animation
        }
        destroy() {
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
        }
    }
    function ji(e, t) {
        return new d5(e,t)
    }
    const C0 = e=>t=>t.test(e)
      , p5 = {
        test: e=>e === "auto",
        parse: e=>e
    }
      , N0 = [qn, I, _r, Yt, hv, pv, p5]
      , ni = e=>N0.find(C0(e))
      , h5 = [...N0, Ce, qr]
      , m5 = e=>h5.find(C0(e));
    function g5(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ji(n))
    }
    function _5(e, t) {
        const n = _a(e, t);
        let {transitionEnd: r={}, transition: i={}, ...s} = n ? e.makeTargetAnimatable(n, !1) : {};
        s = {
            ...s,
            ...r
        };
        for (const o in s) {
            const a = Cv(s[o]);
            g5(e, o, a)
        }
    }
    function y5(e, t, n) {
        var r, i;
        const s = Object.keys(t).filter(a=>!e.hasValue(a))
          , o = s.length;
        if (o)
            for (let a = 0; a < o; a++) {
                const l = s[a]
                  , u = t[l];
                let c = null;
                Array.isArray(u) && (c = u[0]),
                c === null && (c = (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && i !== void 0 ? i : t[l]),
                c != null && (typeof c == "string" && (l5(c) || k0(c)) ? c = parseFloat(c) : !m5(c) && qr.test(u) && (c = x0(l, u)),
                e.addValue(l, ji(c, {
                    owner: e
                })),
                n[l] === void 0 && (n[l] = c),
                c !== null && e.setBaseTarget(l, c))
            }
    }
    function v5(e, t) {
        return t ? (t[e] || t.default || t).from : void 0
    }
    function S5(e, t, n) {
        const r = {};
        for (const i in e) {
            const s = v5(i, t);
            if (s !== void 0)
                r[i] = s;
            else {
                const o = n.getValue(i);
                o && (r[i] = o.get())
            }
        }
        return r
    }
    function E5({protectedKeys: e, needsAnimating: t}, n) {
        const r = e.hasOwnProperty(n) && t[n] !== !0;
        return t[n] = !1,
        r
    }
    function P0(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
        let {transition: s=e.getDefaultTransition(), transitionEnd: o, ...a} = e.makeTargetAnimatable(t);
        const l = e.getValue("willChange");
        r && (s = r);
        const u = []
          , c = i && e.animationState && e.animationState.getState()[i];
        for (const f in a) {
            const d = e.getValue(f)
              , h = a[f];
            if (!d || h === void 0 || c && E5(c, f))
                continue;
            const _ = {
                delay: n,
                elapsed: 0,
                ...s
            };
            if (window.HandoffAppearAnimations && !d.hasAnimated) {
                const E = e.getProps()[t4];
                E && (_.elapsed = window.HandoffAppearAnimations(E, f, d, $e))
            }
            d.start(a5(f, d, h, e.shouldReduceMotion && Wn.has(f) ? {
                type: !1
            } : _));
            const v = d.animation;
            Po(l) && (l.add(f),
            v.then(()=>l.remove(f))),
            u.push(v)
        }
        return o && Promise.all(u).then(()=>{
            o && _5(e, o)
        }
        ),
        u
    }
    function lu(e, t, n={}) {
        const r = _a(e, t, n.custom);
        let {transition: i=e.getDefaultTransition() || {}} = r || {};
        n.transitionOverride && (i = n.transitionOverride);
        const s = r ? ()=>Promise.all(P0(e, r, n)) : ()=>Promise.resolve()
          , o = e.variantChildren && e.variantChildren.size ? (l=0)=>{
            const {delayChildren: u=0, staggerChildren: c, staggerDirection: f} = i;
            return w5(e, t, u + l, c, f, n)
        }
        : ()=>Promise.resolve()
          , {when: a} = i;
        if (a) {
            const [l,u] = a === "beforeChildren" ? [s, o] : [o, s];
            return l().then(()=>u())
        } else
            return Promise.all([s(), o(n.delay)])
    }
    function w5(e, t, n=0, r=0, i=1, s) {
        const o = []
          , a = (e.variantChildren.size - 1) * r
          , l = i === 1 ? (u=0)=>u * r : (u=0)=>a - u * r;
        return Array.from(e.variantChildren).sort(T5).forEach((u,c)=>{
            u.notify("AnimationStart", t),
            o.push(lu(u, t, {
                ...s,
                delay: n + l(c)
            }).then(()=>u.notify("AnimationComplete", t)))
        }
        ),
        Promise.all(o)
    }
    function T5(e, t) {
        return e.sortNodePosition(t)
    }
    function x5(e, t, n={}) {
        e.notify("AnimationStart", t);
        let r;
        if (Array.isArray(t)) {
            const i = t.map(s=>lu(e, s, n));
            r = Promise.all(i)
        } else if (typeof t == "string")
            r = lu(e, t, n);
        else {
            const i = typeof t == "function" ? _a(e, t, n.custom) : t;
            r = Promise.all(P0(e, i, n))
        }
        return r.then(()=>e.notify("AnimationComplete", t))
    }
    const k5 = [...jc].reverse()
      , R5 = jc.length;
    function C5(e) {
        return t=>Promise.all(t.map(({animation: n, options: r})=>x5(e, n, r)))
    }
    function N5(e) {
        let t = C5(e);
        const n = D5();
        let r = !0;
        const i = (l,u)=>{
            const c = _a(e, u);
            if (c) {
                const {transition: f, transitionEnd: d, ...h} = c;
                l = {
                    ...l,
                    ...h,
                    ...d
                }
            }
            return l
        }
        ;
        function s(l) {
            t = l(e)
        }
        function o(l, u) {
            const c = e.getProps()
              , f = e.getVariantContext(!0) || {}
              , d = []
              , h = new Set;
            let _ = {}
              , v = 1 / 0;
            for (let m = 0; m < R5; m++) {
                const p = k5[m]
                  , g = n[p]
                  , S = c[p] !== void 0 ? c[p] : f[p]
                  , x = Mi(S)
                  , P = p === u ? g.isActive : null;
                P === !1 && (v = m);
                let N = S === f[p] && S !== c[p] && x;
                if (N && r && e.manuallyAnimateOnMount && (N = !1),
                g.protectedKeys = {
                    ..._
                },
                !g.isActive && P === null || !S && !g.prevProp || ha(S) || typeof S == "boolean")
                    continue;
                const R = P5(g.prevProp, S);
                let A = R || p === u && g.isActive && !N && x || m > v && x;
                const M = Array.isArray(S) ? S : [S];
                let oe = M.reduce(i, {});
                P === !1 && (oe = {});
                const {prevResolvedValues: Me={}} = g
                  , be = {
                    ...Me,
                    ...oe
                }
                  , ae = le=>{
                    A = !0,
                    h.delete(le),
                    g.needsAnimating[le] = !0
                }
                ;
                for (const le in be) {
                    const tt = oe[le]
                      , vt = Me[le];
                    _.hasOwnProperty(le) || (tt !== vt ? xo(tt) && xo(vt) ? !K1(tt, vt) || R ? ae(le) : g.protectedKeys[le] = !0 : tt !== void 0 ? ae(le) : h.add(le) : tt !== void 0 && h.has(le) ? ae(le) : g.protectedKeys[le] = !0)
                }
                g.prevProp = S,
                g.prevResolvedValues = oe,
                g.isActive && (_ = {
                    ..._,
                    ...oe
                }),
                r && e.blockInitialAnimation && (A = !1),
                A && !N && d.push(...M.map(le=>({
                    animation: le,
                    options: {
                        type: p,
                        ...l
                    }
                })))
            }
            if (h.size) {
                const m = {};
                h.forEach(p=>{
                    const g = e.getBaseTarget(p);
                    g !== void 0 && (m[p] = g)
                }
                ),
                d.push({
                    animation: m
                })
            }
            let E = !!d.length;
            return r && c.initial === !1 && !e.manuallyAnimateOnMount && (E = !1),
            r = !1,
            E ? t(d) : Promise.resolve()
        }
        function a(l, u, c) {
            var f;
            if (n[l].isActive === u)
                return Promise.resolve();
            (f = e.variantChildren) === null || f === void 0 || f.forEach(h=>{
                var _;
                return (_ = h.animationState) === null || _ === void 0 ? void 0 : _.setActive(l, u)
            }
            ),
            n[l].isActive = u;
            const d = o(c, l);
            for (const h in n)
                n[h].protectedKeys = {};
            return d
        }
        return {
            animateChanges: o,
            setActive: a,
            setAnimateFunction: s,
            getState: ()=>n
        }
    }
    function P5(e, t) {
        return typeof t == "string" ? t !== e : Array.isArray(t) ? !K1(t, e) : !1
    }
    function Rn(e=!1) {
        return {
            isActive: e,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        }
    }
    function D5() {
        return {
            animate: Rn(!0),
            whileInView: Rn(),
            whileHover: Rn(),
            whileTap: Rn(),
            whileDrag: Rn(),
            whileFocus: Rn(),
            exit: Rn()
        }
    }
    class O5 extends Wr {
        constructor(t) {
            super(t),
            t.animationState || (t.animationState = N5(t))
        }
        updateAnimationControlsSubscription() {
            const {animate: t} = this.node.getProps();
            this.unmount(),
            ha(t) && (this.unmount = t.subscribe(this.node))
        }
        mount() {
            this.updateAnimationControlsSubscription()
        }
        update() {
            const {animate: t} = this.node.getProps()
              , {animate: n} = this.node.prevProps || {};
            t !== n && this.updateAnimationControlsSubscription()
        }
        unmount() {}
    }
    let I5 = 0;
    class A5 extends Wr {
        constructor() {
            super(...arguments),
            this.id = I5++
        }
        update() {
            if (!this.node.presenceContext)
                return;
            const {isPresent: t, onExitComplete: n, custom: r} = this.node.presenceContext
              , {isPresent: i} = this.node.prevPresenceContext || {};
            if (!this.node.animationState || t === i)
                return;
            const s = this.node.animationState.setActive("exit", !t, {
                custom: r ?? this.node.getProps().custom
            });
            n && !t && s.then(()=>n(this.id))
        }
        mount() {
            const {register: t} = this.node.presenceContext || {};
            t && (this.unmount = t(this.id))
        }
        unmount() {}
    }
    const M5 = {
        animation: {
            Feature: O5
        },
        exit: {
            Feature: A5
        }
    }
      , Fd = ()=>({
        min: 0,
        max: 0
    })
      , D0 = ()=>({
        x: Fd(),
        y: Fd()
    });
    function b5({top: e, left: t, right: n, bottom: r}) {
        return {
            x: {
                min: t,
                max: n
            },
            y: {
                min: e,
                max: r
            }
        }
    }
    function j5(e, t) {
        if (!t)
            return e;
        const n = t({
            x: e.left,
            y: e.top
        })
          , r = t({
            x: e.right,
            y: e.bottom
        });
        return {
            top: n.y,
            left: n.x,
            bottom: r.y,
            right: r.x
        }
    }
    function L5(e, t) {
        return b5(j5(e.getBoundingClientRect(), t))
    }
    const $5 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
    function B5(e) {
        const t = $5.exec(e);
        if (!t)
            return [, ];
        const [,n,r] = t;
        return [n, r]
    }
    function uu(e, t, n=1) {
        const [r,i] = B5(e);
        if (!r)
            return;
        const s = window.getComputedStyle(t).getPropertyValue(r);
        return s ? s.trim() : tu(i) ? uu(i, t, n + 1) : i
    }
    function U5(e, {...t}, n) {
        const r = e.current;
        if (!(r instanceof Element))
            return {
                target: t,
                transitionEnd: n
            };
        n && (n = {
            ...n
        }),
        e.values.forEach(i=>{
            const s = i.get();
            if (!tu(s))
                return;
            const o = uu(s, r);
            o && i.set(o)
        }
        );
        for (const i in t) {
            const s = t[i];
            if (!tu(s))
                continue;
            const o = uu(s, r);
            o && (t[i] = o,
            n || (n = {}),
            n[i] === void 0 && (n[i] = s))
        }
        return {
            target: t,
            transitionEnd: n
        }
    }
    const F5 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
      , O0 = e=>F5.has(e)
      , z5 = e=>Object.keys(e).some(O0)
      , zd = e=>e === qn || e === I
      , Vd = (e,t)=>parseFloat(e.split(", ")[t])
      , Gd = (e,t)=>(n,{transform: r})=>{
        if (r === "none" || !r)
            return 0;
        const i = r.match(/^matrix3d\((.+)\)$/);
        if (i)
            return Vd(i[1], t);
        {
            const s = r.match(/^matrix\((.+)\)$/);
            return s ? Vd(s[1], e) : 0
        }
    }
      , V5 = new Set(["x", "y", "z"])
      , G5 = as.filter(e=>!V5.has(e));
    function H5(e) {
        const t = [];
        return G5.forEach(n=>{
            const r = e.getValue(n);
            r !== void 0 && (t.push([n, r.get()]),
            r.set(n.startsWith("scale") ? 1 : 0))
        }
        ),
        t.length && e.render(),
        t
    }
    const Ir = {
        width: ({x: e},{paddingLeft: t="0", paddingRight: n="0"})=>e.max - e.min - parseFloat(t) - parseFloat(n),
        height: ({y: e},{paddingTop: t="0", paddingBottom: n="0"})=>e.max - e.min - parseFloat(t) - parseFloat(n),
        top: (e,{top: t})=>parseFloat(t),
        left: (e,{left: t})=>parseFloat(t),
        bottom: ({y: e},{top: t})=>parseFloat(t) + (e.max - e.min),
        right: ({x: e},{left: t})=>parseFloat(t) + (e.max - e.min),
        x: Gd(4, 13),
        y: Gd(5, 14)
    };
    Ir.translateX = Ir.x;
    Ir.translateY = Ir.y;
    const Y5 = (e,t,n)=>{
        const r = t.measureViewportBox()
          , i = t.current
          , s = getComputedStyle(i)
          , {display: o} = s
          , a = {};
        o === "none" && t.setStaticValue("display", e.display || "block"),
        n.forEach(u=>{
            a[u] = Ir[u](r, s)
        }
        ),
        t.render();
        const l = t.measureViewportBox();
        return n.forEach(u=>{
            const c = t.getValue(u);
            c && c.jump(a[u]),
            e[u] = Ir[u](l, s)
        }
        ),
        e
    }
      , W5 = (e,t,n={},r={})=>{
        t = {
            ...t
        },
        r = {
            ...r
        };
        const i = Object.keys(t).filter(O0);
        let s = []
          , o = !1;
        const a = [];
        if (i.forEach(l=>{
            const u = e.getValue(l);
            if (!e.hasValue(l))
                return;
            let c = n[l]
              , f = ni(c);
            const d = t[l];
            let h;
            if (xo(d)) {
                const _ = d.length
                  , v = d[0] === null ? 1 : 0;
                c = d[v],
                f = ni(c);
                for (let E = v; E < _ && d[E] !== null; E++)
                    h ? Wc(ni(d[E]) === h) : h = ni(d[E])
            } else
                h = ni(d);
            if (f !== h)
                if (zd(f) && zd(h)) {
                    const _ = u.get();
                    typeof _ == "string" && u.set(parseFloat(_)),
                    typeof d == "string" ? t[l] = parseFloat(d) : Array.isArray(d) && h === I && (t[l] = d.map(parseFloat))
                } else
                    f != null && f.transform && (h != null && h.transform) && (c === 0 || d === 0) ? c === 0 ? u.set(h.transform(c)) : t[l] = f.transform(d) : (o || (s = H5(e),
                    o = !0),
                    a.push(l),
                    r[l] = r[l] !== void 0 ? r[l] : t[l],
                    u.jump(d))
        }
        ),
        a.length) {
            const l = a.indexOf("height") >= 0 ? window.pageYOffset : null
              , u = Y5(t, e, a);
            return s.length && s.forEach(([c,f])=>{
                e.getValue(c).set(f)
            }
            ),
            e.render(),
            pa && l !== null && window.scrollTo({
                top: l
            }),
            {
                target: u,
                transitionEnd: r
            }
        } else
            return {
                target: t,
                transitionEnd: r
            }
    }
    ;
    function q5(e, t, n, r) {
        return z5(t) ? W5(e, t, n, r) : {
            target: t,
            transitionEnd: r
        }
    }
    const K5 = (e,t,n,r)=>{
        const i = U5(e, t, r);
        return t = i.target,
        r = i.transitionEnd,
        q5(e, t, n, r)
    }
      , cu = {
        current: null
    }
      , I0 = {
        current: !1
    };
    function X5() {
        if (I0.current = !0,
        !!pa)
            if (window.matchMedia) {
                const e = window.matchMedia("(prefers-reduced-motion)")
                  , t = ()=>cu.current = e.matches;
                e.addListener(t),
                t()
            } else
                cu.current = !1
    }
    function Q5(e, t, n) {
        const {willChange: r} = t;
        for (const i in t) {
            const s = t[i]
              , o = n[i];
            if (Xe(s))
                e.addValue(i, s),
                Po(r) && r.add(i);
            else if (Xe(o))
                e.addValue(i, ji(s, {
                    owner: e
                })),
                Po(r) && r.remove(i);
            else if (o !== s)
                if (e.hasValue(i)) {
                    const a = e.getValue(i);
                    !a.hasAnimated && a.set(s)
                } else {
                    const a = e.getStaticValue(i);
                    e.addValue(i, ji(a !== void 0 ? a : s, {
                        owner: e
                    }))
                }
        }
        for (const i in n)
            t[i] === void 0 && e.removeValue(i);
        return t
    }
    const Hd = new WeakMap
      , A0 = Object.keys(bi)
      , J5 = A0.length
      , Yd = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
      , Z5 = Lc.length;
    class eS {
        constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, visualState: s}, o={}) {
            this.current = null,
            this.children = new Set,
            this.isVariantNode = !1,
            this.isControllingVariants = !1,
            this.shouldReduceMotion = null,
            this.values = new Map,
            this.features = {},
            this.valueSubscriptions = new Map,
            this.prevMotionValues = {},
            this.events = {},
            this.propEventSubscriptions = {},
            this.notifyUpdate = ()=>this.notify("Update", this.latestValues),
            this.render = ()=>{
                this.current && (this.triggerBuild(),
                this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }
            ,
            this.scheduleRender = ()=>$e.render(this.render, !1, !0);
            const {latestValues: a, renderState: l} = s;
            this.latestValues = a,
            this.baseTarget = {
                ...a
            },
            this.initialValues = n.initial ? {
                ...a
            } : {},
            this.renderState = l,
            this.parent = t,
            this.props = n,
            this.presenceContext = r,
            this.depth = t ? t.depth + 1 : 0,
            this.reducedMotionConfig = i,
            this.options = o,
            this.isControllingVariants = ma(n),
            this.isVariantNode = P1(n),
            this.isVariantNode && (this.variantChildren = new Set),
            this.manuallyAnimateOnMount = !!(t && t.current);
            const {willChange: u, ...c} = this.scrapeMotionValuesFromProps(n, {});
            for (const f in c) {
                const d = c[f];
                a[f] !== void 0 && Xe(d) && (d.set(a[f], !1),
                Po(u) && u.add(f))
            }
        }
        scrapeMotionValuesFromProps(t, n) {
            return {}
        }
        mount(t) {
            this.current = t,
            Hd.set(t, this),
            this.projection && !this.projection.instance && this.projection.mount(t),
            this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((n,r)=>this.bindToMotionValue(r, n)),
            I0.current || X5(),
            this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : cu.current,
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext)
        }
        unmount() {
            Hd.delete(this.current),
            this.projection && this.projection.unmount(),
            ko(this.notifyUpdate),
            ko(this.render),
            this.valueSubscriptions.forEach(t=>t()),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this);
            for (const t in this.events)
                this.events[t].clear();
            for (const t in this.features)
                this.features[t].unmount();
            this.current = null
        }
        bindToMotionValue(t, n) {
            const r = Wn.has(t)
              , i = n.on("change", o=>{
                this.latestValues[t] = o,
                this.props.onUpdate && $e.update(this.notifyUpdate, !1, !0),
                r && this.projection && (this.projection.isTransformDirty = !0)
            }
            )
              , s = n.on("renderRequest", this.scheduleRender);
            this.valueSubscriptions.set(t, ()=>{
                i(),
                s()
            }
            )
        }
        sortNodePosition(t) {
            return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
        }
        loadFeatures({children: t, ...n}, r, i, s) {
            let o, a;
            for (let l = 0; l < J5; l++) {
                const u = A0[l]
                  , {isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: h} = bi[u];
                d && (o = d),
                c(n) && (!this.features[u] && f && (this.features[u] = new f(this)),
                h && (a = h))
            }
            if (!this.projection && o) {
                this.projection = new o(this.latestValues,this.parent && this.parent.projection);
                const {layoutId: l, layout: u, drag: c, dragConstraints: f, layoutScroll: d, layoutRoot: h} = n;
                this.projection.setOptions({
                    layoutId: l,
                    layout: u,
                    alwaysMeasureLayout: !!c || f && N1(f),
                    visualElement: this,
                    scheduleRender: ()=>this.scheduleRender(),
                    animationType: typeof u == "string" ? u : "both",
                    initialPromotionConfig: s,
                    layoutScroll: d,
                    layoutRoot: h
                })
            }
            return a
        }
        updateFeatures() {
            for (const t in this.features) {
                const n = this.features[t];
                n.isMounted ? n.update() : (n.mount(),
                n.isMounted = !0)
            }
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.options, this.props)
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : D0()
        }
        getStaticValue(t) {
            return this.latestValues[t]
        }
        setStaticValue(t, n) {
            this.latestValues[t] = n
        }
        makeTargetAnimatable(t, n=!0) {
            return this.makeTargetAnimatableFromInstance(t, this.props, n)
        }
        update(t, n) {
            (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            this.prevProps = this.props,
            this.props = t,
            this.prevPresenceContext = this.presenceContext,
            this.presenceContext = n;
            for (let r = 0; r < Yd.length; r++) {
                const i = Yd[r];
                this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                delete this.propEventSubscriptions[i]);
                const s = t["on" + i];
                s && (this.propEventSubscriptions[i] = this.on(i, s))
            }
            this.prevMotionValues = Q5(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
            this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
            return this.props
        }
        getVariant(t) {
            return this.props.variants ? this.props.variants[t] : void 0
        }
        getDefaultTransition() {
            return this.props.transition
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint
        }
        getClosestVariantNode() {
            return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        getVariantContext(t=!1) {
            if (t)
                return this.parent ? this.parent.getVariantContext() : void 0;
            if (!this.isControllingVariants) {
                const r = this.parent ? this.parent.getVariantContext() || {} : {};
                return this.props.initial !== void 0 && (r.initial = this.props.initial),
                r
            }
            const n = {};
            for (let r = 0; r < Z5; r++) {
                const i = Lc[r]
                  , s = this.props[i];
                (Mi(s) || s === !1) && (n[i] = s)
            }
            return n
        }
        addVariantChild(t) {
            const n = this.getClosestVariantNode();
            if (n)
                return n.variantChildren && n.variantChildren.add(t),
                ()=>n.variantChildren.delete(t)
        }
        addValue(t, n) {
            n !== this.values.get(t) && (this.removeValue(t),
            this.bindToMotionValue(t, n)),
            this.values.set(t, n),
            this.latestValues[t] = n.get()
        }
        removeValue(t) {
            this.values.delete(t);
            const n = this.valueSubscriptions.get(t);
            n && (n(),
            this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
            return this.values.has(t)
        }
        getValue(t, n) {
            if (this.props.values && this.props.values[t])
                return this.props.values[t];
            let r = this.values.get(t);
            return r === void 0 && n !== void 0 && (r = ji(n, {
                owner: this
            }),
            this.addValue(t, r)),
            r
        }
        readValue(t) {
            var n;
            return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options)
        }
        setBaseTarget(t, n) {
            this.baseTarget[t] = n
        }
        getBaseTarget(t) {
            var n;
            const {initial: r} = this.props
              , i = typeof r == "string" || typeof r == "object" ? (n = Hc(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
            if (r && i !== void 0)
                return i;
            const s = this.getBaseTargetFromProps(this.props, t);
            return s !== void 0 && !Xe(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
        }
        on(t, n) {
            return this.events[t] || (this.events[t] = new R0),
            this.events[t].add(n)
        }
        notify(t, ...n) {
            this.events[t] && this.events[t].notify(...n)
        }
    }
    class M0 extends eS {
        sortInstanceNodePosition(t, n) {
            return t.compareDocumentPosition(n) & 2 ? 1 : -1
        }
        getBaseTargetFromProps(t, n) {
            return t.style ? t.style[n] : void 0
        }
        removeValueFromRenderState(t, {vars: n, style: r}) {
            delete n[t],
            delete r[t]
        }
        makeTargetAnimatableFromInstance({transition: t, transitionEnd: n, ...r}, {transformValues: i}, s) {
            let o = S5(r, t || {}, this);
            if (i && (n && (n = i(n)),
            r && (r = i(r)),
            o && (o = i(o))),
            s) {
                y5(this, r, o);
                const a = K5(this, r, o, n);
                n = a.transitionEnd,
                r = a.target
            }
            return {
                transition: t,
                transitionEnd: n,
                ...r
            }
        }
    }
    function tS(e) {
        return window.getComputedStyle(e)
    }
    class nS extends M0 {
        readValueFromInstance(t, n) {
            if (Wn.has(n)) {
                const r = Xc(n);
                return r && r.default || 0
            } else {
                const r = tS(t)
                  , i = (A1(n) ? r.getPropertyValue(n) : r[n]) || 0;
                return typeof i == "string" ? i.trim() : i
            }
        }
        measureInstanceViewportBox(t, {transformPagePoint: n}) {
            return L5(t, n)
        }
        build(t, n, r, i) {
            Bc(t, n, r, i.transformTemplate)
        }
        scrapeMotionValuesFromProps(t, n) {
            return Gc(t, n)
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(),
            delete this.childSubscription);
            const {children: t} = this.props;
            Xe(t) && (this.childSubscription = t.on("change", n=>{
                this.current && (this.current.textContent = `${n}`)
            }
            ))
        }
        renderInstance(t, n, r, i) {
            U1(t, n, r, i)
        }
    }
    class rS extends M0 {
        constructor() {
            super(...arguments),
            this.isSVGTag = !1
        }
        getBaseTargetFromProps(t, n) {
            return t[n]
        }
        readValueFromInstance(t, n) {
            if (Wn.has(n)) {
                const r = Xc(n);
                return r && r.default || 0
            }
            return n = F1.has(n) ? n : Vc(n),
            t.getAttribute(n)
        }
        measureInstanceViewportBox() {
            return D0()
        }
        scrapeMotionValuesFromProps(t, n) {
            return V1(t, n)
        }
        build(t, n, r, i) {
            Fc(t, n, r, this.isSVGTag, i.transformTemplate)
        }
        renderInstance(t, n, r, i) {
            z1(t, n, r, i)
        }
        mount(t) {
            this.isSVGTag = zc(t.tagName),
            super.mount(t)
        }
    }
    const iS = (e,t)=>$c(e) ? new rS(t,{
        enableHardwareAcceleration: !1
    }) : new nS(t,{
        enableHardwareAcceleration: !0
    })
      , sS = iv(Av);
    function b0() {
        const e = C.useRef(!1);
        return wo(()=>(e.current = !0,
        ()=>{
            e.current = !1
        }
        ), []),
        e
    }
    function oS() {
        const e = b0()
          , [t,n] = C.useState(0)
          , r = C.useCallback(()=>{
            e.current && n(t + 1)
        }
        , [t]);
        return [C.useCallback(()=>$e.postRender(r), [r]), t]
    }
    class aS extends C.Component {
        getSnapshotBeforeUpdate(t) {
            const n = this.props.childRef.current;
            if (n && t.isPresent && !this.props.isPresent) {
                const r = this.props.sizeRef.current;
                r.height = n.offsetHeight || 0,
                r.width = n.offsetWidth || 0,
                r.top = n.offsetTop,
                r.left = n.offsetLeft
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }
    function lS({children: e, isPresent: t}) {
        const n = C.useId()
          , r = C.useRef(null)
          , i = C.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        });
        return C.useInsertionEffect(()=>{
            const {width: s, height: o, top: a, left: l} = i.current;
            if (t || !r.current || !s || !o)
                return;
            r.current.dataset.motionPopId = n;
            const u = document.createElement("style");
            return document.head.appendChild(u),
            u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
            ()=>{
                document.head.removeChild(u)
            }
        }
        , [t]),
        C.createElement(aS, {
            isPresent: t,
            childRef: r,
            sizeRef: i
        }, C.cloneElement(e, {
            ref: r
        }))
    }
    const ml = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o})=>{
        const a = Yc(uS)
          , l = C.useId()
          , u = C.useMemo(()=>({
            id: l,
            initial: t,
            isPresent: n,
            custom: i,
            onExitComplete: c=>{
                a.set(c, !0);
                for (const f of a.values())
                    if (!f)
                        return;
                r && r()
            }
            ,
            register: c=>(a.set(c, !1),
            ()=>a.delete(c))
        }), s ? void 0 : [n]);
        return C.useMemo(()=>{
            a.forEach((c,f)=>a.set(f, !1))
        }
        , [n]),
        C.useEffect(()=>{
            !n && !a.size && r && r()
        }
        , [n]),
        o === "popLayout" && (e = C.createElement(lS, {
            isPresent: n
        }, e)),
        C.createElement(Mc.Provider, {
            value: u
        }, e)
    }
    ;
    function uS() {
        return new Map
    }
    function cS(e) {
        return C.useEffect(()=>()=>e(), [])
    }
    const nr = e=>e.key || "";
    function fS(e, t) {
        e.forEach(n=>{
            const r = nr(n);
            t.set(r, n)
        }
        )
    }
    function dS(e) {
        const t = [];
        return C.Children.forEach(e, n=>{
            C.isValidElement(n) && t.push(n)
        }
        ),
        t
    }
    const pS = ({children: e, custom: t, initial: n=!0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: s=!0, mode: o="sync"})=>{
        const a = C.useContext(D1).forceRender || oS()[0]
          , l = b0()
          , u = dS(e);
        let c = u;
        const f = C.useRef(new Map).current
          , d = C.useRef(c)
          , h = C.useRef(new Map).current
          , _ = C.useRef(!0);
        if (wo(()=>{
            _.current = !1,
            fS(u, h),
            d.current = c
        }
        ),
        cS(()=>{
            _.current = !0,
            h.clear(),
            f.clear()
        }
        ),
        _.current)
            return C.createElement(C.Fragment, null, c.map(p=>C.createElement(ml, {
                key: nr(p),
                isPresent: !0,
                initial: n ? void 0 : !1,
                presenceAffectsLayout: s,
                mode: o
            }, p)));
        c = [...c];
        const v = d.current.map(nr)
          , E = u.map(nr)
          , m = v.length;
        for (let p = 0; p < m; p++) {
            const g = v[p];
            E.indexOf(g) === -1 && !f.has(g) && f.set(g, void 0)
        }
        return o === "wait" && f.size && (c = []),
        f.forEach((p,g)=>{
            if (E.indexOf(g) !== -1)
                return;
            const S = h.get(g);
            if (!S)
                return;
            const x = v.indexOf(g);
            let P = p;
            if (!P) {
                const N = ()=>{
                    h.delete(g),
                    f.delete(g);
                    const R = d.current.findIndex(A=>A.key === g);
                    if (d.current.splice(R, 1),
                    !f.size) {
                        if (d.current = u,
                        l.current === !1)
                            return;
                        a(),
                        r && r()
                    }
                }
                ;
                P = C.createElement(ml, {
                    key: nr(S),
                    isPresent: !1,
                    onExitComplete: N,
                    custom: t,
                    presenceAffectsLayout: s,
                    mode: o
                }, S),
                f.set(g, P)
            }
            c.splice(x, 0, P)
        }
        ),
        c = c.map(p=>{
            const g = p.key;
            return f.has(g) ? p : C.createElement(ml, {
                key: nr(p),
                isPresent: !0,
                presenceAffectsLayout: s,
                mode: o
            }, p)
        }
        ),
        C.createElement(C.Fragment, null, f.size ? c : c.map(p=>C.cloneElement(p)))
    }
    ;
    function hS({children: e, isValidProp: t, ...n}) {
        t && $1(t),
        n = {
            ...C.useContext(Eo),
            ...n
        },
        n.isStatic = Yc(()=>n.isStatic);
        const r = C.useMemo(()=>n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
        return C.createElement(Eo.Provider, {
            value: r
        }, e)
    }
    function mS({children: e, features: t, strict: n=!1}) {
        const [,r] = C.useState(!gl(t))
          , i = C.useRef(void 0);
        if (!gl(t)) {
            const {renderer: s, ...o} = t;
            i.current = s,
            eu(o)
        }
        return C.useEffect(()=>{
            gl(t) && t().then(({renderer: s, ...o})=>{
                eu(o),
                i.current = s,
                r(!0)
            }
            )
        }
        , []),
        C.createElement(bc.Provider, {
            value: {
                renderer: i.current,
                strict: n
            }
        }, e)
    }
    function gl(e) {
        return typeof e == "function"
    }
    const gS = {
        renderer: iS,
        ...M5,
        ...Qv
    };
    var _S = globalThis && globalThis.__awaiter || function(e, t, n, r) {
        function i(s) {
            return s instanceof n ? s : new n(function(o) {
                o(s)
            }
            )
        }
        return new (n || (n = Promise))(function(s, o) {
            function a(c) {
                try {
                    u(r.next(c))
                } catch (f) {
                    o(f)
                }
            }
            function l(c) {
                try {
                    u(r.throw(c))
                } catch (f) {
                    o(f)
                }
            }
            function u(c) {
                c.done ? s(c.value) : i(c.value).then(a, l)
            }
            u((r = r.apply(e, t || [])).next())
        }
        )
    }
    ;
    function yS() {
        const [e,t] = C.useState(null);
        return [e, r=>_S(this, void 0, void 0, function*() {
            if (!(navigator != null && navigator.clipboard))
                return console.warn("Clipboard not supported"),
                !1;
            try {
                return yield navigator.clipboard.writeText(r),
                t(r),
                !0
            } catch (i) {
                return console.warn("Copy failed", i),
                t(null),
                !1
            }
        })]
    }
    globalThis && globalThis.__awaiter;
    function vS(e) {
        const t = s=>typeof window < "u" ? window.matchMedia(s).matches : !1
          , [n,r] = C.useState(t(e));
        function i() {
            r(t(e))
        }
        return C.useEffect(()=>{
            const s = window.matchMedia(e);
            return i(),
            s.addListener ? s.addListener(i) : s.addEventListener("change", i),
            ()=>{
                s.removeListener ? s.removeListener(i) : s.removeEventListener("change", i)
            }
        }
        , [e]),
        n
    }
    const Wd = ["起床战争", "空岛战争", "战桥", "UHC", "跑酷", "心跳水立方", "TNT跑酷", "天坑乱斗", "我的吃鸡", "KB:GO", "密室杀手", "竞技场", "小游戏派对", "猎人游戏", "死亡互换", "Bingo挑战", "你说我做", "速建大师"]
      , qd = 170;
    function SS(e) {
        return 1 + --e * e * e * e * e
    }
    function ES() {
        const [e,t] = Le.useState(!1)
          , n = new Date().getHours();
        return Le.useEffect(()=>{
            t(n >= 20 || n < 8)
        }
        , [n]),
        e
    }
    function wS() {
        const e = ES();
        return n3() ?? (e ? k2 : x2)
    }
    function TS() {
        const e = wS()
          , [t,n] = Le.useState(0)
          , [r,i] = Le.useState(0);
        Le.useEffect(()=>{
            const o = window.setInterval(()=>{
                document.visibilityState !== "hidden" && i(a=>(a + 1) % Wd.length)
            }
            , 2500);
            return ()=>window.clearInterval(o)
        }
        , []),
        Le.useEffect(()=>{
            n(window.scrollY || document.body.scrollTop);
            function o() {
                n(window.scrollY || document.body.scrollTop)
            }
            return window.addEventListener("scroll", o),
            ()=>window.removeEventListener("scroll", o)
        }
        , []);
        const [,s] = yS();
        return y.jsx("main", {
            className: Zn.main,
            style: {
                "--background-image": `url(/backgrounds/${e})`
            },
            children: y.jsxs("div", {
                className: Zn.wrapper,
                children: [y.jsx("div", {
                    className: Zn.logo,
                    style: {
                        top: Math.max(qd - t, 7),
                        transform: `scale(${Math.max(SS(1 - t / qd), -.325) * .325 + .625}) translate3d(0, 0, 0)`,
                        transformOrigin: "top",
                        willChange: "transform"
                    },
                    children: y.jsx(K3, {
                        height: "8rem"
                    })
                }), y.jsxs("div", {
                    className: Zn.campaign,
                    children: [y.jsx("h1", {
                        children: "不为利益，只为游戏。享受"
                    }), y.jsx(pS, {
                        mode: "wait",
                        children:Wd.map((o,a)=>r === a && y.jsx(sS.h2, {
                            animate: {
                                opacity: 1,
                                y: 20
                            },
                            exit: {
                                opacity: 0,
                                type: "spring",
                                y: 10
                            },
                            style: {
                                userSelect: "none"
                            },
                            children: o
                        }, o))
                    })]
                }), y.jsx("div", {
                    className: Zn.buttonWrapper,
                    children: y.jsxs(R1, {
                        href: "http://www.kbcraft.fun:8008",
                        isExternal: !1,
                        children: ["KBCraft 启动"
                        ]
                    })
                }),y.jsxs("div", {
                    className: Zn.footer,
                    onClick: async()=>s("play.nethergames.org:19132"),
                    onKeyDown: async o=>{
                        o.key === "Enter" && await s("play.nethergames.org:19132")
                    }
                    ,
                    role: "button",
                    tabIndex: 0,
                    children: ["| 在网易我的世界上体验", y.jsx("strong", {
                        children: "KBCraft |"
                    })]
                })]
            })
        })
    }
    const j0 = "keyboardMode";
    function Kd(e) {
        var t;
        e.metaKey || e.ctrlKey || e.altKey || (t = e.getModifierState) != null && t.call(e, e.key) || document.documentElement.classList.add(j0)
    }
    function Xd() {
        document.documentElement.classList.remove(j0)
    }
    function xS() {
        Le.useEffect(()=>(window.addEventListener("keydown", Kd),
        window.addEventListener("mousedown", Xd),
        ()=>{
            window.removeEventListener("keydown", Kd),
            window.removeEventListener("mousedown", Xd)
        }
        ), [])
    }
    const L0 = Object.prototype.toString;
    function Qc(e) {
        switch (L0.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return $t(e, Error)
        }
    }
    function Kr(e, t) {
        return L0.call(e) === `[object ${t}]`
    }
    function Jc(e) {
        return Kr(e, "ErrorEvent")
    }
    function Qd(e) {
        return Kr(e, "DOMError")
    }
    function kS(e) {
        return Kr(e, "DOMException")
    }
    function mn(e) {
        return Kr(e, "String")
    }
    function $0(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }
    function Ar(e) {
        return Kr(e, "Object")
    }
    function va(e) {
        return typeof Event < "u" && $t(e, Event)
    }
    function RS(e) {
        return typeof Element < "u" && $t(e, Element)
    }
    function CS(e) {
        return Kr(e, "RegExp")
    }
    function Zc(e) {
        return !!(e && e.then && typeof e.then == "function")
    }
    function NS(e) {
        return Ar(e) && "nativeEvent"in e && "preventDefault"in e && "stopPropagation"in e
    }
    function B0(e) {
        return typeof e == "number" && e !== e
    }
    function $t(e, t) {
        try {
            return e instanceof t
        } catch {
            return !1
        }
    }
    function PS(e, t, n, r, i, s) {
        if (!i.exception || !i.exception.values || !s || !$t(s.originalException, Error))
            return;
        const o = i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
        o && (i.exception.values = fu(e, t, r, s.originalException, n, i.exception.values, o, 0))
    }
    function fu(e, t, n, r, i, s, o, a) {
        if (s.length >= n + 1)
            return s;
        let l = [...s];
        if ($t(r[i], Error)) {
            Jd(o, a);
            const u = e(t, r[i])
              , c = l.length;
            Zd(u, i, c, a),
            l = fu(e, t, n, r[i], i, [u, ...l], u, c)
        }
        return Array.isArray(r.errors) && r.errors.forEach((u,c)=>{
            if ($t(u, Error)) {
                Jd(o, a);
                const f = e(t, u)
                  , d = l.length;
                Zd(f, `errors[${c}]`, d, a),
                l = fu(e, t, n, u, i, [f, ...l], f, d)
            }
        }
        ),
        l
    }
    function Jd(e, t) {
        e.mechanism = e.mechanism || {
            type: "generic",
            handled: !0
        },
        e.mechanism = {
            ...e.mechanism,
            is_exception_group: !0,
            exception_id: t
        }
    }
    function Zd(e, t, n, r) {
        e.mechanism = e.mechanism || {
            type: "generic",
            handled: !0
        },
        e.mechanism = {
            ...e.mechanism,
            type: "chained",
            source: t,
            exception_id: n,
            parent_id: r
        }
    }
    function Cs(e) {
        return e && e.Math == Math ? e : void 0
    }
    const qe = typeof globalThis == "object" && Cs(globalThis) || typeof window == "object" && Cs(window) || typeof self == "object" && Cs(self) || typeof global == "object" && Cs(global) || function() {
        return this
    }() || {};
    function fs() {
        return qe
    }
    function ef(e, t, n) {
        const r = n || qe
          , i = r.__SENTRY__ = r.__SENTRY__ || {};
        return i[e] || (i[e] = t())
    }
    const oo = fs()
      , DS = 80;
    function Mr(e, t={}) {
        try {
            let n = e;
            const r = 5
              , i = [];
            let s = 0
              , o = 0;
            const a = " > "
              , l = a.length;
            let u;
            const c = Array.isArray(t) ? t : t.keyAttrs
              , f = !Array.isArray(t) && t.maxStringLength || DS;
            for (; n && s++ < r && (u = OS(n, c),
            !(u === "html" || s > 1 && o + i.length * l + u.length >= f)); )
                i.push(u),
                o += u.length,
                n = n.parentNode;
            return i.reverse().join(a)
        } catch {
            return "<unknown>"
        }
    }
    function OS(e, t) {
        const n = e
          , r = [];
        let i, s, o, a, l;
        if (!n || !n.tagName)
            return "";
        r.push(n.tagName.toLowerCase());
        const u = t && t.length ? t.filter(f=>n.getAttribute(f)).map(f=>[f, n.getAttribute(f)]) : null;
        if (u && u.length)
            u.forEach(f=>{
                r.push(`[${f[0]}="${f[1]}"]`)
            }
            );
        else if (n.id && r.push(`#${n.id}`),
        i = n.className,
        i && mn(i))
            for (s = i.split(/\s+/),
            l = 0; l < s.length; l++)
                r.push(`.${s[l]}`);
        const c = ["aria-label", "type", "name", "title", "alt"];
        for (l = 0; l < c.length; l++)
            o = c[l],
            a = n.getAttribute(o),
            a && r.push(`[${o}="${a}"]`);
        return r.join("")
    }
    function IS() {
        try {
            return oo.document.location.href
        } catch {
            return ""
        }
    }
    function AS(e) {
        return oo.document && oo.document.querySelector ? oo.document.querySelector(e) : null
    }
    const MS = "Sentry Logger "
      , Do = ["debug", "info", "warn", "error", "log", "assert", "trace"];
    function U0(e) {
        if (!("console"in qe))
            return e();
        const t = qe.console
          , n = {};
        Do.forEach(r=>{
            const i = t[r] && t[r].__sentry_original__;
            r in t && i && (n[r] = t[r],
            t[r] = i)
        }
        );
        try {
            return e()
        } finally {
            Object.keys(n).forEach(r=>{
                t[r] = n[r]
            }
            )
        }
    }
    function ep() {
        let e = !1;
        const t = {
            enable: ()=>{
                e = !0
            }
            ,
            disable: ()=>{
                e = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Do.forEach(n=>{
            t[n] = (...r)=>{
                e && U0(()=>{
                    qe.console[n](`${MS}[${n}]:`, ...r)
                }
                )
            }
        }
        ) : Do.forEach(n=>{
            t[n] = ()=>{}
        }
        ),
        t
    }
    let T;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? T = ef("logger", ep) : T = ep();
    const bS = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
    function jS(e) {
        return e === "http" || e === "https"
    }
    function ds(e, t=!1) {
        const {host: n, path: r, pass: i, port: s, projectId: o, protocol: a, publicKey: l} = e;
        return `${a}://${l}${t && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${r && `${r}/`}${o}`
    }
    function LS(e) {
        const t = bS.exec(e);
        if (!t) {
            console.error(`Invalid Sentry Dsn: ${e}`);
            return
        }
        const [n,r,i="",s,o="",a] = t.slice(1);
        let l = ""
          , u = a;
        const c = u.split("/");
        if (c.length > 1 && (l = c.slice(0, -1).join("/"),
        u = c.pop()),
        u) {
            const f = u.match(/^\d+/);
            f && (u = f[0])
        }
        return F0({
            host: s,
            pass: i,
            path: l,
            projectId: u,
            port: o,
            protocol: n,
            publicKey: r
        })
    }
    function F0(e) {
        return {
            protocol: e.protocol,
            publicKey: e.publicKey || "",
            pass: e.pass || "",
            host: e.host,
            port: e.port || "",
            path: e.path || "",
            projectId: e.projectId
        }
    }
    function $S(e) {
        if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__))
            return !0;
        const {port: t, projectId: n, protocol: r} = e;
        return ["protocol", "publicKey", "host", "projectId"].find(o=>e[o] ? !1 : (T.error(`Invalid Sentry Dsn: ${o} missing`),
        !0)) ? !1 : n.match(/^\d+$/) ? jS(r) ? t && isNaN(parseInt(t, 10)) ? (T.error(`Invalid Sentry Dsn: Invalid port ${t}`),
        !1) : !0 : (T.error(`Invalid Sentry Dsn: Invalid protocol ${r}`),
        !1) : (T.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
        !1)
    }
    function z0(e) {
        const t = typeof e == "string" ? LS(e) : F0(e);
        if (!(!t || !$S(t)))
            return t
    }
    class pt extends Error {
        constructor(t, n="warn") {
            super(t),
            this.message = t,
            this.name = new.target.prototype.constructor.name,
            Object.setPrototypeOf(this, new.target.prototype),
            this.logLevel = n
        }
    }
    function vi(e, t=0) {
        return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`
    }
    function tp(e, t) {
        if (!Array.isArray(e))
            return "";
        const n = [];
        for (let r = 0; r < e.length; r++) {
            const i = e[r];
            try {
                n.push(String(i))
            } catch {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(t)
    }
    function BS(e, t, n=!1) {
        return mn(e) ? CS(t) ? t.test(e) : mn(t) ? n ? e === t : e.includes(t) : !1 : !1
    }
    function ps(e, t=[], n=!1) {
        return t.some(r=>BS(e, r, n))
    }
    function Se(e, t, n) {
        if (!(t in e))
            return;
        const r = e[t]
          , i = n(r);
        if (typeof i == "function")
            try {
                V0(i, r)
            } catch {}
        e[t] = i
    }
    function tf(e, t, n) {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
        })
    }
    function V0(e, t) {
        const n = t.prototype || {};
        e.prototype = t.prototype = n,
        tf(e, "__sentry_original__", t)
    }
    function nf(e) {
        return e.__sentry_original__
    }
    function US(e) {
        return Object.keys(e).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&")
    }
    function G0(e) {
        if (Qc(e))
            return {
                message: e.message,
                name: e.name,
                stack: e.stack,
                ...rp(e)
            };
        if (va(e)) {
            const t = {
                type: e.type,
                target: np(e.target),
                currentTarget: np(e.currentTarget),
                ...rp(e)
            };
            return typeof CustomEvent < "u" && $t(e, CustomEvent) && (t.detail = e.detail),
            t
        } else
            return e
    }
    function np(e) {
        try {
            return RS(e) ? Mr(e) : Object.prototype.toString.call(e)
        } catch {
            return "<unknown>"
        }
    }
    function rp(e) {
        if (typeof e == "object" && e !== null) {
            const t = {};
            for (const n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        } else
            return {}
    }
    function FS(e, t=40) {
        const n = Object.keys(G0(e));
        if (n.sort(),
        !n.length)
            return "[object has no keys]";
        if (n[0].length >= t)
            return vi(n[0], t);
        for (let r = n.length; r > 0; r--) {
            const i = n.slice(0, r).join(", ");
            if (!(i.length > t))
                return r === n.length ? i : vi(i, t)
        }
        return ""
    }
    function sn(e) {
        return du(e, new Map)
    }
    function du(e, t) {
        if (Ar(e)) {
            const n = t.get(e);
            if (n !== void 0)
                return n;
            const r = {};
            t.set(e, r);
            for (const i of Object.keys(e))
                typeof e[i] < "u" && (r[i] = du(e[i], t));
            return r
        }
        if (Array.isArray(e)) {
            const n = t.get(e);
            if (n !== void 0)
                return n;
            const r = [];
            return t.set(e, r),
            e.forEach(i=>{
                r.push(du(i, t))
            }
            ),
            r
        }
        return e
    }
    const H0 = 50
      , ip = /\(error: (.*)\)/;
    function Y0(...e) {
        const t = e.sort((n,r)=>n[0] - r[0]).map(n=>n[1]);
        return (n,r=0)=>{
            const i = []
              , s = n.split(`
`);
            for (let o = r; o < s.length; o++) {
                const a = s[o];
                if (a.length > 1024)
                    continue;
                const l = ip.test(a) ? a.replace(ip, "$1") : a;
                if (!l.match(/\S*Error: /)) {
                    for (const u of t) {
                        const c = u(l);
                        if (c) {
                            i.push(c);
                            break
                        }
                    }
                    if (i.length >= H0)
                        break
                }
            }
            return VS(i)
        }
    }
    function zS(e) {
        return Array.isArray(e) ? Y0(...e) : e
    }
    function VS(e) {
        if (!e.length)
            return [];
        const t = e.slice(0, H0)
          , n = t[t.length - 1].function;
        n && /sentryWrapped/.test(n) && t.pop(),
        t.reverse();
        const r = t[t.length - 1].function;
        return r && /captureMessage|captureException/.test(r) && t.pop(),
        t.map(i=>({
            ...i,
            filename: i.filename || t[t.length - 1].filename,
            function: i.function || "?"
        }))
    }
    const _l = "<anonymous>";
    function gn(e) {
        try {
            return !e || typeof e != "function" ? _l : e.name || _l
        } catch {
            return _l
        }
    }
    const pu = fs();
    function W0() {
        if (!("fetch"in pu))
            return !1;
        try {
            return new Headers,
            new Request("http://www.example.com"),
            new Response,
            !0
        } catch {
            return !1
        }
    }
    function hu(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }
    function GS() {
        if (!W0())
            return !1;
        if (hu(pu.fetch))
            return !0;
        let e = !1;
        const t = pu.document;
        if (t && typeof t.createElement == "function")
            try {
                const n = t.createElement("iframe");
                n.hidden = !0,
                t.head.appendChild(n),
                n.contentWindow && n.contentWindow.fetch && (e = hu(n.contentWindow.fetch)),
                t.head.removeChild(n)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
            }
        return e
    }
    const Ns = fs();
    function HS() {
        const e = Ns.chrome
          , t = e && e.app && e.app.runtime
          , n = "history"in Ns && !!Ns.history.pushState && !!Ns.history.replaceState;
        return !t && n
    }
    const Z = fs()
      , ir = "__sentry_xhr_v2__"
      , Si = {}
      , sp = {};
    function YS(e) {
        if (!sp[e])
            switch (sp[e] = !0,
            e) {
            case "console":
                WS();
                break;
            case "dom":
                tE();
                break;
            case "xhr":
                XS();
                break;
            case "fetch":
                qS();
                break;
            case "history":
                QS();
                break;
            case "error":
                nE();
                break;
            case "unhandledrejection":
                rE();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn("unknown instrumentation type:", e);
                return
            }
    }
    function Ye(e, t) {
        Si[e] = Si[e] || [],
        Si[e].push(t),
        YS(e)
    }
    function mt(e, t) {
        if (!(!e || !Si[e]))
            for (const n of Si[e] || [])
                try {
                    n(t)
                } catch (r) {
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${gn(n)}
Error:`, r)
                }
    }
    function WS() {
        "console"in Z && Do.forEach(function(e) {
            e in Z.console && Se(Z.console, e, function(t) {
                return function(...n) {
                    mt("console", {
                        args: n,
                        level: e
                    }),
                    t && t.apply(Z.console, n)
                }
            })
        })
    }
    function qS() {
        GS() && Se(Z, "fetch", function(e) {
            return function(...t) {
                const {method: n, url: r} = KS(t)
                  , i = {
                    args: t,
                    fetchData: {
                        method: n,
                        url: r
                    },
                    startTimestamp: Date.now()
                };
                return mt("fetch", {
                    ...i
                }),
                e.apply(Z, t).then(s=>(mt("fetch", {
                    ...i,
                    endTimestamp: Date.now(),
                    response: s
                }),
                s), s=>{
                    throw mt("fetch", {
                        ...i,
                        endTimestamp: Date.now(),
                        error: s
                    }),
                    s
                }
                )
            }
        })
    }
    function mu(e, t) {
        return !!e && typeof e == "object" && !!e[t]
    }
    function op(e) {
        return typeof e == "string" ? e : e ? mu(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
    }
    function KS(e) {
        if (e.length === 0)
            return {
                method: "GET",
                url: ""
            };
        if (e.length === 2) {
            const [n,r] = e;
            return {
                url: op(n),
                method: mu(r, "method") ? String(r.method).toUpperCase() : "GET"
            }
        }
        const t = e[0];
        return {
            url: op(t),
            method: mu(t, "method") ? String(t.method).toUpperCase() : "GET"
        }
    }
    function XS() {
        if (!("XMLHttpRequest"in Z))
            return;
        const e = XMLHttpRequest.prototype;
        Se(e, "open", function(t) {
            return function(...n) {
                const r = n[1]
                  , i = this[ir] = {
                    method: mn(n[0]) ? n[0].toUpperCase() : n[0],
                    url: n[1],
                    request_headers: {}
                };
                mn(r) && i.method === "POST" && r.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                const s = ()=>{
                    const o = this[ir];
                    if (o && this.readyState === 4) {
                        try {
                            o.status_code = this.status
                        } catch {}
                        mt("xhr", {
                            args: n,
                            endTimestamp: Date.now(),
                            startTimestamp: Date.now(),
                            xhr: this
                        })
                    }
                }
                ;
                return "onreadystatechange"in this && typeof this.onreadystatechange == "function" ? Se(this, "onreadystatechange", function(o) {
                    return function(...a) {
                        return s(),
                        o.apply(this, a)
                    }
                }) : this.addEventListener("readystatechange", s),
                Se(this, "setRequestHeader", function(o) {
                    return function(...a) {
                        const [l,u] = a
                          , c = this[ir];
                        return c && (c.request_headers[l.toLowerCase()] = u),
                        o.apply(this, a)
                    }
                }),
                t.apply(this, n)
            }
        }),
        Se(e, "send", function(t) {
            return function(...n) {
                const r = this[ir];
                return r && n[0] !== void 0 && (r.body = n[0]),
                mt("xhr", {
                    args: n,
                    startTimestamp: Date.now(),
                    xhr: this
                }),
                t.apply(this, n)
            }
        })
    }
    let Ps;
    function QS() {
        if (!HS())
            return;
        const e = Z.onpopstate;
        Z.onpopstate = function(...n) {
            const r = Z.location.href
              , i = Ps;
            if (Ps = r,
            mt("history", {
                from: i,
                to: r
            }),
            e)
                try {
                    return e.apply(this, n)
                } catch {}
        }
        ;
        function t(n) {
            return function(...r) {
                const i = r.length > 2 ? r[2] : void 0;
                if (i) {
                    const s = Ps
                      , o = String(i);
                    Ps = o,
                    mt("history", {
                        from: s,
                        to: o
                    })
                }
                return n.apply(this, r)
            }
        }
        Se(Z.history, "pushState", t),
        Se(Z.history, "replaceState", t)
    }
    const JS = 1e3;
    let Ds, Os;
    function ZS(e, t) {
        if (!e || e.type !== t.type)
            return !0;
        try {
            if (e.target !== t.target)
                return !0
        } catch {}
        return !1
    }
    function eE(e) {
        if (e.type !== "keypress")
            return !1;
        try {
            const t = e.target;
            if (!t || !t.tagName)
                return !0;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)
                return !1
        } catch {}
        return !0
    }
    function ap(e, t=!1) {
        return n=>{
            if (!n || Os === n || eE(n))
                return;
            const r = n.type === "keypress" ? "input" : n.type;
            Ds === void 0 ? (e({
                event: n,
                name: r,
                global: t
            }),
            Os = n) : ZS(Os, n) && (e({
                event: n,
                name: r,
                global: t
            }),
            Os = n),
            clearTimeout(Ds),
            Ds = Z.setTimeout(()=>{
                Ds = void 0
            }
            , JS)
        }
    }
    function tE() {
        if (!("document"in Z))
            return;
        const e = mt.bind(null, "dom")
          , t = ap(e, !0);
        Z.document.addEventListener("click", t, !1),
        Z.document.addEventListener("keypress", t, !1),
        ["EventTarget", "Node"].forEach(n=>{
            const r = Z[n] && Z[n].prototype;
            !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (Se(r, "addEventListener", function(i) {
                return function(s, o, a) {
                    if (s === "click" || s == "keypress")
                        try {
                            const l = this
                              , u = l.__sentry_instrumentation_handlers__ = l.__sentry_instrumentation_handlers__ || {}
                              , c = u[s] = u[s] || {
                                refCount: 0
                            };
                            if (!c.handler) {
                                const f = ap(e);
                                c.handler = f,
                                i.call(this, s, f, a)
                            }
                            c.refCount++
                        } catch {}
                    return i.call(this, s, o, a)
                }
            }),
            Se(r, "removeEventListener", function(i) {
                return function(s, o, a) {
                    if (s === "click" || s == "keypress")
                        try {
                            const l = this
                              , u = l.__sentry_instrumentation_handlers__ || {}
                              , c = u[s];
                            c && (c.refCount--,
                            c.refCount <= 0 && (i.call(this, s, c.handler, a),
                            c.handler = void 0,
                            delete u[s]),
                            Object.keys(u).length === 0 && delete l.__sentry_instrumentation_handlers__)
                        } catch {}
                    return i.call(this, s, o, a)
                }
            }))
        }
        )
    }
    let Is = null;
    function nE() {
        Is = Z.onerror,
        Z.onerror = function(e, t, n, r, i) {
            return mt("error", {
                column: r,
                error: i,
                line: n,
                msg: e,
                url: t
            }),
            Is && !Is.__SENTRY_LOADER__ ? Is.apply(this, arguments) : !1
        }
        ,
        Z.onerror.__SENTRY_INSTRUMENTED__ = !0
    }
    let As = null;
    function rE() {
        As = Z.onunhandledrejection,
        Z.onunhandledrejection = function(e) {
            return mt("unhandledrejection", e),
            As && !As.__SENTRY_LOADER__ ? As.apply(this, arguments) : !0
        }
        ,
        Z.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
    }
    function iE() {
        const e = typeof WeakSet == "function"
          , t = e ? new WeakSet : [];
        function n(i) {
            if (e)
                return t.has(i) ? !0 : (t.add(i),
                !1);
            for (let s = 0; s < t.length; s++)
                if (t[s] === i)
                    return !0;
            return t.push(i),
            !1
        }
        function r(i) {
            if (e)
                t.delete(i);
            else
                for (let s = 0; s < t.length; s++)
                    if (t[s] === i) {
                        t.splice(s, 1);
                        break
                    }
        }
        return [n, r]
    }
    function Ue() {
        const e = qe
          , t = e.crypto || e.msCrypto;
        if (t && t.randomUUID)
            return t.randomUUID().replace(/-/g, "");
        const n = t && t.getRandomValues ? ()=>t.getRandomValues(new Uint8Array(1))[0] : ()=>Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, r=>(r ^ (n() & 15) >> r / 4).toString(16))
    }
    function q0(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }
    function Qt(e) {
        const {message: t, event_id: n} = e;
        if (t)
            return t;
        const r = q0(e);
        return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
    }
    function gu(e, t, n) {
        const r = e.exception = e.exception || {}
          , i = r.values = r.values || []
          , s = i[0] = i[0] || {};
        s.value || (s.value = t || ""),
        s.type || (s.type = n || "Error")
    }
    function Li(e, t) {
        const n = q0(e);
        if (!n)
            return;
        const r = {
            type: "generic",
            handled: !0
        }
          , i = n.mechanism;
        if (n.mechanism = {
            ...r,
            ...i,
            ...t
        },
        t && "data"in t) {
            const s = {
                ...i && i.data,
                ...t.data
            };
            n.mechanism.data = s
        }
    }
    function lp(e) {
        if (e && e.__sentry_captured__)
            return !0;
        try {
            tf(e, "__sentry_captured__", !0)
        } catch {}
        return !1
    }
    function K0(e) {
        return Array.isArray(e) ? e : [e]
    }
    function sE() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }
    function oE() {
        return "npm"
    }
    function X0() {
        return !sE() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }
    function en(e, t) {
        return e.require(t)
    }
    function aE(e) {
        let t;
        try {
            t = en(bt, e)
        } catch {}
        try {
            const {cwd: n} = en(bt, "process");
            t = en(bt, `${n()}/node_modules/${e}`)
        } catch {}
        return t
    }
    function Wt(e, t=100, n=1 / 0) {
        try {
            return _u("", e, t, n)
        } catch (r) {
            return {
                ERROR: `**non-serializable** (${r})`
            }
        }
    }
    function Q0(e, t=3, n=100 * 1024) {
        const r = Wt(e, t);
        return fE(r) > n ? Q0(e, t - 1, n) : r
    }
    function _u(e, t, n=1 / 0, r=1 / 0, i=iE()) {
        const [s,o] = i;
        if (t == null || ["number", "boolean", "string"].includes(typeof t) && !B0(t))
            return t;
        const a = lE(e, t);
        if (!a.startsWith("[object "))
            return a;
        if (t.__sentry_skip_normalization__)
            return t;
        const l = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : n;
        if (l === 0)
            return a.replace("object ", "");
        if (s(t))
            return "[Circular ~]";
        const u = t;
        if (u && typeof u.toJSON == "function")
            try {
                const h = u.toJSON();
                return _u("", h, l - 1, r, i)
            } catch {}
        const c = Array.isArray(t) ? [] : {};
        let f = 0;
        const d = G0(t);
        for (const h in d) {
            if (!Object.prototype.hasOwnProperty.call(d, h))
                continue;
            if (f >= r) {
                c[h] = "[MaxProperties ~]";
                break
            }
            const _ = d[h];
            c[h] = _u(h, _, l - 1, r, i),
            f++
        }
        return o(t),
        c
    }
    function lE(e, t) {
        try {
            if (e === "domain" && t && typeof t == "object" && t._events)
                return "[Domain]";
            if (e === "domainEmitter")
                return "[DomainEmitter]";
            if (typeof global < "u" && t === global)
                return "[Global]";
            if (typeof window < "u" && t === window)
                return "[Window]";
            if (typeof document < "u" && t === document)
                return "[Document]";
            if (NS(t))
                return "[SyntheticEvent]";
            if (typeof t == "number" && t !== t)
                return "[NaN]";
            if (typeof t == "function")
                return `[Function: ${gn(t)}]`;
            if (typeof t == "symbol")
                return `[${String(t)}]`;
            if (typeof t == "bigint")
                return `[BigInt: ${String(t)}]`;
            const n = uE(t);
            return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`
        } catch (n) {
            return `**non-serializable** (${n})`
        }
    }
    function uE(e) {
        const t = Object.getPrototypeOf(e);
        return t ? t.constructor.name : "null prototype"
    }
    function cE(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }
    function fE(e) {
        return cE(JSON.stringify(e))
    }
    var Pt;
    (function(e) {
        e[e.PENDING = 0] = "PENDING";
        const n = 1;
        e[e.RESOLVED = n] = "RESOLVED";
        const r = 2;
        e[e.REJECTED = r] = "REJECTED"
    }
    )(Pt || (Pt = {}));
    function Un(e) {
        return new Pe(t=>{
            t(e)
        }
        )
    }
    function Oo(e) {
        return new Pe((t,n)=>{
            n(e)
        }
        )
    }
    class Pe {
        __init() {
            this._state = Pt.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(t) {
            Pe.prototype.__init.call(this),
            Pe.prototype.__init2.call(this),
            Pe.prototype.__init3.call(this),
            Pe.prototype.__init4.call(this),
            Pe.prototype.__init5.call(this),
            Pe.prototype.__init6.call(this);
            try {
                t(this._resolve, this._reject)
            } catch (n) {
                this._reject(n)
            }
        }
        then(t, n) {
            return new Pe((r,i)=>{
                this._handlers.push([!1, s=>{
                    if (!t)
                        r(s);
                    else
                        try {
                            r(t(s))
                        } catch (o) {
                            i(o)
                        }
                }
                , s=>{
                    if (!n)
                        i(s);
                    else
                        try {
                            r(n(s))
                        } catch (o) {
                            i(o)
                        }
                }
                ]),
                this._executeHandlers()
            }
            )
        }
        catch(t) {
            return this.then(n=>n, t)
        }
        finally(t) {
            return new Pe((n,r)=>{
                let i, s;
                return this.then(o=>{
                    s = !1,
                    i = o,
                    t && t()
                }
                , o=>{
                    s = !0,
                    i = o,
                    t && t()
                }
                ).then(()=>{
                    if (s) {
                        r(i);
                        return
                    }
                    n(i)
                }
                )
            }
            )
        }
        __init3() {
            this._resolve = t=>{
                this._setResult(Pt.RESOLVED, t)
            }
        }
        __init4() {
            this._reject = t=>{
                this._setResult(Pt.REJECTED, t)
            }
        }
        __init5() {
            this._setResult = (t,n)=>{
                if (this._state === Pt.PENDING) {
                    if (Zc(n)) {
                        n.then(this._resolve, this._reject);
                        return
                    }
                    this._state = t,
                    this._value = n,
                    this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = ()=>{
                if (this._state === Pt.PENDING)
                    return;
                const t = this._handlers.slice();
                this._handlers = [],
                t.forEach(n=>{
                    n[0] || (this._state === Pt.RESOLVED && n[1](this._value),
                    this._state === Pt.REJECTED && n[2](this._value),
                    n[0] = !0)
                }
                )
            }
        }
    }
    function dE(e) {
        const t = [];
        function n() {
            return e === void 0 || t.length < e
        }
        function r(o) {
            return t.splice(t.indexOf(o), 1)[0]
        }
        function i(o) {
            if (!n())
                return Oo(new pt("Not adding Promise because buffer limit was reached."));
            const a = o();
            return t.indexOf(a) === -1 && t.push(a),
            a.then(()=>r(a)).then(null, ()=>r(a).then(null, ()=>{}
            )),
            a
        }
        function s(o) {
            return new Pe((a,l)=>{
                let u = t.length;
                if (!u)
                    return a(!0);
                const c = setTimeout(()=>{
                    o && o > 0 && a(!1)
                }
                , o);
                t.forEach(f=>{
                    Un(f).then(()=>{
                        --u || (clearTimeout(c),
                        a(!0))
                    }
                    , l)
                }
                )
            }
            )
        }
        return {
            $: t,
            add: i,
            drain: s
        }
    }
    function yl(e) {
        if (!e)
            return {};
        const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t)
            return {};
        const n = t[6] || ""
          , r = t[8] || "";
        return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            search: n,
            hash: r,
            relative: t[5] + n + r
        }
    }
    const pE = ["fatal", "error", "warning", "log", "info", "debug"];
    function hE(e) {
        return e === "warn" ? "warning" : pE.includes(e) ? e : "log"
    }
    const J0 = fs()
      , yu = {
        nowSeconds: ()=>Date.now() / 1e3
    };
    function mE() {
        const {performance: e} = J0;
        if (!e || !e.now)
            return;
        const t = Date.now() - e.now();
        return {
            now: ()=>e.now(),
            timeOrigin: t
        }
    }
    function gE() {
        try {
            return en(bt, "perf_hooks").performance
        } catch {
            return
        }
    }
    const vl = X0() ? gE() : mE()
      , up = vl === void 0 ? yu : {
        nowSeconds: ()=>(vl.timeOrigin + vl.now()) / 1e3
    }
      , Sa = yu.nowSeconds.bind(yu)
      , Fn = up.nowSeconds.bind(up)
      , it = (()=>{
        const {performance: e} = J0;
        if (!e || !e.now)
            return;
        const t = 3600 * 1e3
          , n = e.now()
          , r = Date.now()
          , i = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t
          , s = i < t
          , o = e.timing && e.timing.navigationStart
          , l = typeof o == "number" ? Math.abs(o + n - r) : t
          , u = l < t;
        return s || u ? i <= l ? e.timeOrigin : o : r
    }
    )()
      , vu = "baggage"
      , Z0 = "sentry-"
      , _E = /^sentry-/
      , yE = 8192;
    function vE(e) {
        if (!mn(e) && !Array.isArray(e))
            return;
        let t = {};
        if (Array.isArray(e))
            t = e.reduce((r,i)=>{
                const s = cp(i);
                return {
                    ...r,
                    ...s
                }
            }
            , {});
        else {
            if (!e)
                return;
            t = cp(e)
        }
        const n = Object.entries(t).reduce((r,[i,s])=>{
            if (i.match(_E)) {
                const o = i.slice(Z0.length);
                r[o] = s
            }
            return r
        }
        , {});
        if (Object.keys(n).length > 0)
            return n
    }
    function Su(e) {
        if (!e)
            return;
        const t = Object.entries(e).reduce((n,[r,i])=>(i && (n[`${Z0}${r}`] = i),
        n), {});
        return SE(t)
    }
    function cp(e) {
        return e.split(",").map(t=>t.split("=").map(n=>decodeURIComponent(n.trim()))).reduce((t,[n,r])=>(t[n] = r,
        t), {})
    }
    function SE(e) {
        if (Object.keys(e).length !== 0)
            return Object.entries(e).reduce((t,[n,r],i)=>{
                const s = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`
                  , o = i === 0 ? s : `${t},${s}`;
                return o.length > yE ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`),
                t) : o
            }
            , "")
    }
    const EE = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
    function wE(e) {
        if (!e)
            return;
        const t = e.match(EE);
        if (!t)
            return;
        let n;
        return t[3] === "1" ? n = !0 : t[3] === "0" && (n = !1),
        {
            traceId: t[1],
            parentSampled: n,
            parentSpanId: t[2]
        }
    }
    function TE(e, t) {
        const n = wE(e)
          , r = vE(t)
          , {traceId: i, parentSpanId: s, parentSampled: o} = n || {}
          , a = {
            traceId: i || Ue(),
            spanId: Ue().substring(16),
            sampled: o === void 0 ? !1 : o
        };
        return s && (a.parentSpanId = s),
        r && (a.dsc = r),
        {
            traceparentData: n,
            dynamicSamplingContext: r,
            propagationContext: a
        }
    }
    function rf(e=Ue(), t=Ue().substring(16), n) {
        let r = "";
        return n !== void 0 && (r = n ? "-1" : "-0"),
        `${e}-${t}${r}`
    }
    function hs(e, t=[]) {
        return [e, t]
    }
    function xE(e, t) {
        const [n,r] = e;
        return [n, [...r, t]]
    }
    function fp(e, t) {
        const n = e[1];
        for (const r of n) {
            const i = r[0].type;
            if (t(r, i))
                return !0
        }
        return !1
    }
    function Eu(e, t) {
        return (t || new TextEncoder).encode(e)
    }
    function kE(e, t) {
        const [n,r] = e;
        let i = JSON.stringify(n);
        function s(o) {
            typeof i == "string" ? i = typeof o == "string" ? i + o : [Eu(i, t), o] : i.push(typeof o == "string" ? Eu(o, t) : o)
        }
        for (const o of r) {
            const [a,l] = o;
            if (s(`
${JSON.stringify(a)}
`),
            typeof l == "string" || l instanceof Uint8Array)
                s(l);
            else {
                let u;
                try {
                    u = JSON.stringify(l)
                } catch {
                    u = JSON.stringify(Wt(l))
                }
                s(u)
            }
        }
        return typeof i == "string" ? i : RE(i)
    }
    function RE(e) {
        const t = e.reduce((i,s)=>i + s.length, 0)
          , n = new Uint8Array(t);
        let r = 0;
        for (const i of e)
            n.set(i, r),
            r += i.length;
        return n
    }
    function CE(e, t) {
        const n = typeof e.data == "string" ? Eu(e.data, t) : e.data;
        return [sn({
            type: "attachment",
            length: n.length,
            filename: e.filename,
            content_type: e.contentType,
            attachment_type: e.attachmentType
        }), n]
    }
    const NE = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor"
    };
    function dp(e) {
        return NE[e]
    }
    function em(e) {
        if (!e || !e.sdk)
            return;
        const {name: t, version: n} = e.sdk;
        return {
            name: t,
            version: n
        }
    }
    function PE(e, t, n, r) {
        const i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
        return {
            event_id: e.event_id,
            sent_at: new Date().toISOString(),
            ...t && {
                sdk: t
            },
            ...!!n && {
                dsn: ds(r)
            },
            ...i && {
                trace: sn({
                    ...i
                })
            }
        }
    }
    function DE(e, t, n) {
        const r = [{
            type: "client_report"
        }, {
            timestamp: n || Sa(),
            discarded_events: e
        }];
        return hs(t ? {
            dsn: t
        } : {}, [r])
    }
    const OE = 60 * 1e3;
    function IE(e, t=Date.now()) {
        const n = parseInt(`${e}`, 10);
        if (!isNaN(n))
            return n * 1e3;
        const r = Date.parse(`${e}`);
        return isNaN(r) ? OE : r - t
    }
    function AE(e, t) {
        return e[t] || e.all || 0
    }
    function ME(e, t, n=Date.now()) {
        return AE(e, t) > n
    }
    function bE(e, {statusCode: t, headers: n}, r=Date.now()) {
        const i = {
            ...e
        }
          , s = n && n["x-sentry-rate-limits"]
          , o = n && n["retry-after"];
        if (s)
            for (const a of s.trim().split(",")) {
                const [l,u] = a.split(":", 2)
                  , c = parseInt(l, 10)
                  , f = (isNaN(c) ? 60 : c) * 1e3;
                if (!u)
                    i.all = r + f;
                else
                    for (const d of u.split(";"))
                        i[d] = r + f
            }
        else
            o ? i.all = r + IE(o, r) : t === 429 && (i.all = r + 60 * 1e3);
        return i
    }
    const sf = "production";
    function jE(e) {
        const t = Fn()
          , n = {
            sid: Ue(),
            init: !0,
            timestamp: t,
            started: t,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: ()=>$E(n)
        };
        return e && br(n, e),
        n
    }
    function br(e, t={}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
        !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)),
        e.timestamp = t.timestamp || Fn(),
        t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
        t.sid && (e.sid = t.sid.length === 32 ? t.sid : Ue()),
        t.init !== void 0 && (e.init = t.init),
        !e.did && t.did && (e.did = `${t.did}`),
        typeof t.started == "number" && (e.started = t.started),
        e.ignoreDuration)
            e.duration = void 0;
        else if (typeof t.duration == "number")
            e.duration = t.duration;
        else {
            const n = e.timestamp - e.started;
            e.duration = n >= 0 ? n : 0
        }
        t.release && (e.release = t.release),
        t.environment && (e.environment = t.environment),
        !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
        !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
        typeof t.errors == "number" && (e.errors = t.errors),
        t.status && (e.status = t.status)
    }
    function LE(e, t) {
        let n = {};
        t ? n = {
            status: t
        } : e.status === "ok" && (n = {
            status: "exited"
        }),
        br(e, n)
    }
    function $E(e) {
        return sn({
            sid: `${e.sid}`,
            init: e.init,
            started: new Date(e.started * 1e3).toISOString(),
            timestamp: new Date(e.timestamp * 1e3).toISOString(),
            status: e.status,
            errors: e.errors,
            did: typeof e.did == "number" || typeof e.did == "string" ? `${e.did}` : void 0,
            duration: e.duration,
            attrs: {
                release: e.release,
                environment: e.environment,
                ip_address: e.ipAddress,
                user_agent: e.userAgent
            }
        })
    }
    const BE = 100;
    class Ln {
        constructor() {
            this._notifyingListeners = !1,
            this._scopeListeners = [],
            this._eventProcessors = [],
            this._breadcrumbs = [],
            this._attachments = [],
            this._user = {},
            this._tags = {},
            this._extra = {},
            this._contexts = {},
            this._sdkProcessingMetadata = {},
            this._propagationContext = pp()
        }
        static clone(t) {
            const n = new Ln;
            return t && (n._breadcrumbs = [...t._breadcrumbs],
            n._tags = {
                ...t._tags
            },
            n._extra = {
                ...t._extra
            },
            n._contexts = {
                ...t._contexts
            },
            n._user = t._user,
            n._level = t._level,
            n._span = t._span,
            n._session = t._session,
            n._transactionName = t._transactionName,
            n._fingerprint = t._fingerprint,
            n._eventProcessors = [...t._eventProcessors],
            n._requestSession = t._requestSession,
            n._attachments = [...t._attachments],
            n._sdkProcessingMetadata = {
                ...t._sdkProcessingMetadata
            },
            n._propagationContext = {
                ...t._propagationContext
            }),
            n
        }
        addScopeListener(t) {
            this._scopeListeners.push(t)
        }
        addEventProcessor(t) {
            return this._eventProcessors.push(t),
            this
        }
        setUser(t) {
            return this._user = t || {},
            this._session && br(this._session, {
                user: t
            }),
            this._notifyScopeListeners(),
            this
        }
        getUser() {
            return this._user
        }
        getRequestSession() {
            return this._requestSession
        }
        setRequestSession(t) {
            return this._requestSession = t,
            this
        }
        setTags(t) {
            return this._tags = {
                ...this._tags,
                ...t
            },
            this._notifyScopeListeners(),
            this
        }
        setTag(t, n) {
            return this._tags = {
                ...this._tags,
                [t]: n
            },
            this._notifyScopeListeners(),
            this
        }
        setExtras(t) {
            return this._extra = {
                ...this._extra,
                ...t
            },
            this._notifyScopeListeners(),
            this
        }
        setExtra(t, n) {
            return this._extra = {
                ...this._extra,
                [t]: n
            },
            this._notifyScopeListeners(),
            this
        }
        setFingerprint(t) {
            return this._fingerprint = t,
            this._notifyScopeListeners(),
            this
        }
        setLevel(t) {
            return this._level = t,
            this._notifyScopeListeners(),
            this
        }
        setTransactionName(t) {
            return this._transactionName = t,
            this._notifyScopeListeners(),
            this
        }
        setContext(t, n) {
            return n === null ? delete this._contexts[t] : this._contexts[t] = n,
            this._notifyScopeListeners(),
            this
        }
        setSpan(t) {
            return this._span = t,
            this._notifyScopeListeners(),
            this
        }
        getSpan() {
            return this._span
        }
        getTransaction() {
            const t = this.getSpan();
            return t && t.transaction
        }
        setSession(t) {
            return t ? this._session = t : delete this._session,
            this._notifyScopeListeners(),
            this
        }
        getSession() {
            return this._session
        }
        update(t) {
            if (!t)
                return this;
            if (typeof t == "function") {
                const n = t(this);
                return n instanceof Ln ? n : this
            }
            return t instanceof Ln ? (this._tags = {
                ...this._tags,
                ...t._tags
            },
            this._extra = {
                ...this._extra,
                ...t._extra
            },
            this._contexts = {
                ...this._contexts,
                ...t._contexts
            },
            t._user && Object.keys(t._user).length && (this._user = t._user),
            t._level && (this._level = t._level),
            t._fingerprint && (this._fingerprint = t._fingerprint),
            t._requestSession && (this._requestSession = t._requestSession),
            t._propagationContext && (this._propagationContext = t._propagationContext)) : Ar(t) && (t = t,
            this._tags = {
                ...this._tags,
                ...t.tags
            },
            this._extra = {
                ...this._extra,
                ...t.extra
            },
            this._contexts = {
                ...this._contexts,
                ...t.contexts
            },
            t.user && (this._user = t.user),
            t.level && (this._level = t.level),
            t.fingerprint && (this._fingerprint = t.fingerprint),
            t.requestSession && (this._requestSession = t.requestSession),
            t.propagationContext && (this._propagationContext = t.propagationContext)),
            this
        }
        clear() {
            return this._breadcrumbs = [],
            this._tags = {},
            this._extra = {},
            this._user = {},
            this._contexts = {},
            this._level = void 0,
            this._transactionName = void 0,
            this._fingerprint = void 0,
            this._requestSession = void 0,
            this._span = void 0,
            this._session = void 0,
            this._notifyScopeListeners(),
            this._attachments = [],
            this._propagationContext = pp(),
            this
        }
        addBreadcrumb(t, n) {
            const r = typeof n == "number" ? n : BE;
            if (r <= 0)
                return this;
            const i = {
                timestamp: Sa(),
                ...t
            };
            return this._breadcrumbs = [...this._breadcrumbs, i].slice(-r),
            this._notifyScopeListeners(),
            this
        }
        getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1]
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [],
            this._notifyScopeListeners(),
            this
        }
        addAttachment(t) {
            return this._attachments.push(t),
            this
        }
        getAttachments() {
            return this._attachments
        }
        clearAttachments() {
            return this._attachments = [],
            this
        }
        applyToEvent(t, n={}) {
            if (this._extra && Object.keys(this._extra).length && (t.extra = {
                ...this._extra,
                ...t.extra
            }),
            this._tags && Object.keys(this._tags).length && (t.tags = {
                ...this._tags,
                ...t.tags
            }),
            this._user && Object.keys(this._user).length && (t.user = {
                ...this._user,
                ...t.user
            }),
            this._contexts && Object.keys(this._contexts).length && (t.contexts = {
                ...this._contexts,
                ...t.contexts
            }),
            this._level && (t.level = this._level),
            this._transactionName && (t.transaction = this._transactionName),
            this._span) {
                t.contexts = {
                    trace: this._span.getTraceContext(),
                    ...t.contexts
                };
                const r = this._span.transaction;
                if (r) {
                    t.sdkProcessingMetadata = {
                        dynamicSamplingContext: r.getDynamicSamplingContext(),
                        ...t.sdkProcessingMetadata
                    };
                    const i = r.name;
                    i && (t.tags = {
                        transaction: i,
                        ...t.tags
                    })
                }
            }
            return this._applyFingerprint(t),
            t.breadcrumbs = [...t.breadcrumbs || [], ...this._breadcrumbs],
            t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0,
            t.sdkProcessingMetadata = {
                ...t.sdkProcessingMetadata,
                ...this._sdkProcessingMetadata,
                propagationContext: this._propagationContext
            },
            this._notifyEventProcessors([...tm(), ...this._eventProcessors], t, n)
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...t
            },
            this
        }
        setPropagationContext(t) {
            return this._propagationContext = t,
            this
        }
        getPropagationContext() {
            return this._propagationContext
        }
        _notifyEventProcessors(t, n, r, i=0) {
            return new Pe((s,o)=>{
                const a = t[i];
                if (n === null || typeof a != "function")
                    s(n);
                else {
                    const l = a({
                        ...n
                    }, r);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && a.id && l === null && T.log(`Event processor "${a.id}" dropped event`),
                    Zc(l) ? l.then(u=>this._notifyEventProcessors(t, u, r, i + 1).then(s)).then(null, o) : this._notifyEventProcessors(t, l, r, i + 1).then(s).then(null, o)
                }
            }
            )
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0,
            this._scopeListeners.forEach(t=>{
                t(this)
            }
            ),
            this._notifyingListeners = !1)
        }
        _applyFingerprint(t) {
            t.fingerprint = t.fingerprint ? K0(t.fingerprint) : [],
            this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
            t.fingerprint && !t.fingerprint.length && delete t.fingerprint
        }
    }
    function tm() {
        return ef("globalEventProcessors", ()=>[])
    }
    function nm(e) {
        tm().push(e)
    }
    function pp() {
        return {
            traceId: Ue(),
            spanId: Ue().substring(16),
            sampled: !1
        }
    }
    const rm = 4
      , UE = 100;
    class im {
        constructor(t, n=new Ln, r=rm) {
            this._version = r,
            this._stack = [{
                scope: n
            }],
            t && this.bindClient(t)
        }
        isOlderThan(t) {
            return this._version < t
        }
        bindClient(t) {
            const n = this.getStackTop();
            n.client = t,
            t && t.setupIntegrations && t.setupIntegrations()
        }
        pushScope() {
            const t = Ln.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: t
            }),
            t
        }
        popScope() {
            return this.getStack().length <= 1 ? !1 : !!this.getStack().pop()
        }
        withScope(t) {
            const n = this.pushScope();
            try {
                t(n)
            } finally {
                this.popScope()
            }
        }
        getClient() {
            return this.getStackTop().client
        }
        getScope() {
            return this.getStackTop().scope
        }
        getStack() {
            return this._stack
        }
        getStackTop() {
            return this._stack[this._stack.length - 1]
        }
        captureException(t, n) {
            const r = this._lastEventId = n && n.event_id ? n.event_id : Ue()
              , i = new Error("Sentry syntheticException");
            return this._withClient((s,o)=>{
                s.captureException(t, {
                    originalException: t,
                    syntheticException: i,
                    ...n,
                    event_id: r
                }, o)
            }
            ),
            r
        }
        captureMessage(t, n, r) {
            const i = this._lastEventId = r && r.event_id ? r.event_id : Ue()
              , s = new Error(t);
            return this._withClient((o,a)=>{
                o.captureMessage(t, n, {
                    originalException: t,
                    syntheticException: s,
                    ...r,
                    event_id: i
                }, a)
            }
            ),
            i
        }
        captureEvent(t, n) {
            const r = n && n.event_id ? n.event_id : Ue();
            return t.type || (this._lastEventId = r),
            this._withClient((i,s)=>{
                i.captureEvent(t, {
                    ...n,
                    event_id: r
                }, s)
            }
            ),
            r
        }
        lastEventId() {
            return this._lastEventId
        }
        addBreadcrumb(t, n) {
            const {scope: r, client: i} = this.getStackTop();
            if (!i)
                return;
            const {beforeBreadcrumb: s=null, maxBreadcrumbs: o=UE} = i.getOptions && i.getOptions() || {};
            if (o <= 0)
                return;
            const l = {
                timestamp: Sa(),
                ...t
            }
              , u = s ? U0(()=>s(l, n)) : l;
            u !== null && (i.emit && i.emit("beforeAddBreadcrumb", u, n),
            r.addBreadcrumb(u, o))
        }
        setUser(t) {
            this.getScope().setUser(t)
        }
        setTags(t) {
            this.getScope().setTags(t)
        }
        setExtras(t) {
            this.getScope().setExtras(t)
        }
        setTag(t, n) {
            this.getScope().setTag(t, n)
        }
        setExtra(t, n) {
            this.getScope().setExtra(t, n)
        }
        setContext(t, n) {
            this.getScope().setContext(t, n)
        }
        configureScope(t) {
            const {scope: n, client: r} = this.getStackTop();
            r && t(n)
        }
        run(t) {
            const n = hp(this);
            try {
                t(this)
            } finally {
                hp(n)
            }
        }
        getIntegration(t) {
            const n = this.getClient();
            if (!n)
                return null;
            try {
                return n.getIntegration(t)
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`Cannot retrieve integration ${t.id} from the current Hub`),
                null
            }
        }
        startTransaction(t, n) {
            const r = this._callExtensionMethod("startTransaction", t, n);
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && !r && console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`),
            r
        }
        traceHeaders() {
            return this._callExtensionMethod("traceHeaders")
        }
        captureSession(t=!1) {
            if (t)
                return this.endSession();
            this._sendSessionUpdate()
        }
        endSession() {
            const n = this.getStackTop().scope
              , r = n.getSession();
            r && LE(r),
            this._sendSessionUpdate(),
            n.setSession()
        }
        startSession(t) {
            const {scope: n, client: r} = this.getStackTop()
              , {release: i, environment: s=sf} = r && r.getOptions() || {}
              , {userAgent: o} = qe.navigator || {}
              , a = jE({
                release: i,
                environment: s,
                user: n.getUser(),
                ...o && {
                    userAgent: o
                },
                ...t
            })
              , l = n.getSession && n.getSession();
            return l && l.status === "ok" && br(l, {
                status: "exited"
            }),
            this.endSession(),
            n.setSession(a),
            a
        }
        shouldSendDefaultPii() {
            const t = this.getClient()
              , n = t && t.getOptions();
            return !!(n && n.sendDefaultPii)
        }
        _sendSessionUpdate() {
            const {scope: t, client: n} = this.getStackTop()
              , r = t.getSession();
            r && n && n.captureSession && n.captureSession(r)
        }
        _withClient(t) {
            const {scope: n, client: r} = this.getStackTop();
            r && t(r, n)
        }
        _callExtensionMethod(t, ...n) {
            const i = Xr().__SENTRY__;
            if (i && i.extensions && typeof i.extensions[t] == "function")
                return i.extensions[t].apply(this, n);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }
    function Xr() {
        return qe.__SENTRY__ = qe.__SENTRY__ || {
            extensions: {},
            hub: void 0
        },
        qe
    }
    function hp(e) {
        const t = Xr()
          , n = wu(t);
        return sm(t, e),
        n
    }
    function ee() {
        const e = Xr();
        if (e.__SENTRY__ && e.__SENTRY__.acs) {
            const t = e.__SENTRY__.acs.getCurrentHub();
            if (t)
                return t
        }
        return FE(e)
    }
    function FE(e=Xr()) {
        return (!zE(e) || wu(e).isOlderThan(rm)) && sm(e, new im),
        wu(e)
    }
    function zE(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }
    function wu(e) {
        return ef("hub", ()=>new im, e)
    }
    function sm(e, t) {
        if (!e)
            return !1;
        const n = e.__SENTRY__ = e.__SENTRY__ || {};
        return n.hub = t,
        !0
    }
    function of(e) {
        if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__)
            return !1;
        const t = ee().getClient()
          , n = e || t && t.getOptions();
        return !!n && (n.enableTracing || "tracesSampleRate"in n || "tracesSampler"in n)
    }
    function ms(e) {
        return (e || ee()).getScope().getTransaction()
    }
    let mp = !1;
    function VE() {
        mp || (mp = !0,
        Ye("error", Tu),
        Ye("unhandledrejection", Tu))
    }
    function Tu() {
        const e = ms();
        if (e) {
            const t = "internal_error";
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`[Tracing] Transaction: ${t} -> Global error occured`),
            e.setStatus(t)
        }
    }
    Tu.tag = "sentry_tracingErrorCallback";
    class Ea {
        __init() {
            this.spans = []
        }
        constructor(t=1e3) {
            Ea.prototype.__init.call(this),
            this._maxlen = t
        }
        add(t) {
            this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t)
        }
    }
    class Dt {
        __init2() {
            this.traceId = Ue()
        }
        __init3() {
            this.spanId = Ue().substring(16)
        }
        __init4() {
            this.startTimestamp = Fn()
        }
        __init5() {
            this.tags = {}
        }
        __init6() {
            this.data = {}
        }
        __init7() {
            this.instrumenter = "sentry"
        }
        constructor(t) {
            if (Dt.prototype.__init2.call(this),
            Dt.prototype.__init3.call(this),
            Dt.prototype.__init4.call(this),
            Dt.prototype.__init5.call(this),
            Dt.prototype.__init6.call(this),
            Dt.prototype.__init7.call(this),
            !t)
                return this;
            t.traceId && (this.traceId = t.traceId),
            t.spanId && (this.spanId = t.spanId),
            t.parentSpanId && (this.parentSpanId = t.parentSpanId),
            "sampled"in t && (this.sampled = t.sampled),
            t.op && (this.op = t.op),
            t.description && (this.description = t.description),
            t.data && (this.data = t.data),
            t.tags && (this.tags = t.tags),
            t.status && (this.status = t.status),
            t.startTimestamp && (this.startTimestamp = t.startTimestamp),
            t.endTimestamp && (this.endTimestamp = t.endTimestamp),
            t.instrumenter && (this.instrumenter = t.instrumenter)
        }
        startChild(t) {
            const n = new Dt({
                ...t,
                parentSpanId: this.spanId,
                sampled: this.sampled,
                traceId: this.traceId
            });
            if (n.spanRecorder = this.spanRecorder,
            n.spanRecorder && n.spanRecorder.add(n),
            n.transaction = this.transaction,
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && n.transaction) {
                const r = t && t.op || "< unknown op >"
                  , i = n.transaction.name || "< unknown name >"
                  , s = n.transaction.spanId
                  , o = `[Tracing] Starting '${r}' span on transaction '${i}' (${s}).`;
                n.transaction.metadata.spanMetadata[n.spanId] = {
                    logMessage: o
                },
                T.log(o)
            }
            return n
        }
        setTag(t, n) {
            return this.tags = {
                ...this.tags,
                [t]: n
            },
            this
        }
        setData(t, n) {
            return this.data = {
                ...this.data,
                [t]: n
            },
            this
        }
        setStatus(t) {
            return this.status = t,
            this
        }
        setHttpStatus(t) {
            this.setTag("http.status_code", String(t)),
            this.setData("http.response.status_code", t);
            const n = GE(t);
            return n !== "unknown_error" && this.setStatus(n),
            this
        }
        isSuccess() {
            return this.status === "ok"
        }
        finish(t) {
            if ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
                const {logMessage: n} = this.transaction.metadata.spanMetadata[this.spanId];
                n && T.log(n.replace("Starting", "Finishing"))
            }
            this.endTimestamp = typeof t == "number" ? t : Fn()
        }
        toTraceparent() {
            return rf(this.traceId, this.spanId, this.sampled)
        }
        toContext() {
            return sn({
                data: this.data,
                description: this.description,
                endTimestamp: this.endTimestamp,
                op: this.op,
                parentSpanId: this.parentSpanId,
                sampled: this.sampled,
                spanId: this.spanId,
                startTimestamp: this.startTimestamp,
                status: this.status,
                tags: this.tags,
                traceId: this.traceId
            })
        }
        updateWithContext(t) {
            return this.data = t.data || {},
            this.description = t.description,
            this.endTimestamp = t.endTimestamp,
            this.op = t.op,
            this.parentSpanId = t.parentSpanId,
            this.sampled = t.sampled,
            this.spanId = t.spanId || this.spanId,
            this.startTimestamp = t.startTimestamp || this.startTimestamp,
            this.status = t.status,
            this.tags = t.tags || {},
            this.traceId = t.traceId || this.traceId,
            this
        }
        getTraceContext() {
            return sn({
                data: Object.keys(this.data).length > 0 ? this.data : void 0,
                description: this.description,
                op: this.op,
                parent_span_id: this.parentSpanId,
                span_id: this.spanId,
                status: this.status,
                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                trace_id: this.traceId
            })
        }
        toJSON() {
            return sn({
                data: Object.keys(this.data).length > 0 ? this.data : void 0,
                description: this.description,
                op: this.op,
                parent_span_id: this.parentSpanId,
                span_id: this.spanId,
                start_timestamp: this.startTimestamp,
                status: this.status,
                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                timestamp: this.endTimestamp,
                trace_id: this.traceId
            })
        }
    }
    function GE(e) {
        if (e < 400 && e >= 100)
            return "ok";
        if (e >= 400 && e < 500)
            switch (e) {
            case 401:
                return "unauthenticated";
            case 403:
                return "permission_denied";
            case 404:
                return "not_found";
            case 409:
                return "already_exists";
            case 413:
                return "failed_precondition";
            case 429:
                return "resource_exhausted";
            default:
                return "invalid_argument"
            }
        if (e >= 500 && e < 600)
            switch (e) {
            case 501:
                return "unimplemented";
            case 503:
                return "unavailable";
            case 504:
                return "deadline_exceeded";
            default:
                return "internal_error"
            }
        return "unknown_error"
    }
    function wa(e, t, n) {
        const r = t.getOptions()
          , {publicKey: i} = t.getDsn() || {}
          , {segment: s} = n && n.getUser() || {}
          , o = sn({
            environment: r.environment || sf,
            release: r.release,
            user_segment: s,
            public_key: i,
            trace_id: e
        });
        return t.emit && t.emit("createDsc", o),
        o
    }
    class yr extends Dt {
        __init() {
            this._measurements = {}
        }
        __init2() {
            this._contexts = {}
        }
        __init3() {
            this._frozenDynamicSamplingContext = void 0
        }
        constructor(t, n) {
            super(t),
            yr.prototype.__init.call(this),
            yr.prototype.__init2.call(this),
            yr.prototype.__init3.call(this),
            this._hub = n || ee(),
            this._name = t.name || "",
            this.metadata = {
                source: "custom",
                ...t.metadata,
                spanMetadata: {}
            },
            this._trimEnd = t.trimEnd,
            this.transaction = this;
            const r = this.metadata.dynamicSamplingContext;
            r && (this._frozenDynamicSamplingContext = {
                ...r
            })
        }
        get name() {
            return this._name
        }
        set name(t) {
            this.setName(t)
        }
        setName(t, n="custom") {
            this._name = t,
            this.metadata.source = n
        }
        initSpanRecorder(t=1e3) {
            this.spanRecorder || (this.spanRecorder = new Ea(t)),
            this.spanRecorder.add(this)
        }
        setContext(t, n) {
            n === null ? delete this._contexts[t] : this._contexts[t] = n
        }
        setMeasurement(t, n, r="") {
            this._measurements[t] = {
                value: n,
                unit: r
            }
        }
        setMetadata(t) {
            this.metadata = {
                ...this.metadata,
                ...t
            }
        }
        finish(t) {
            if (this.endTimestamp !== void 0)
                return;
            this.name || ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
            this.name = "<unlabeled transaction>"),
            super.finish(t);
            const n = this._hub.getClient();
            if (n && n.emit && n.emit("finishTransaction", this),
            this.sampled !== !0) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),
                n && n.recordDroppedEvent("sample_rate", "transaction");
                return
            }
            const r = this.spanRecorder ? this.spanRecorder.spans.filter(a=>a !== this && a.endTimestamp) : [];
            this._trimEnd && r.length > 0 && (this.endTimestamp = r.reduce((a,l)=>a.endTimestamp && l.endTimestamp ? a.endTimestamp > l.endTimestamp ? a : l : a).endTimestamp);
            const i = this.metadata
              , s = {
                contexts: {
                    ...this._contexts,
                    trace: this.getTraceContext()
                },
                spans: r,
                start_timestamp: this.startTimestamp,
                tags: this.tags,
                timestamp: this.endTimestamp,
                transaction: this.name,
                type: "transaction",
                sdkProcessingMetadata: {
                    ...i,
                    dynamicSamplingContext: this.getDynamicSamplingContext()
                },
                ...i.source && {
                    transaction_info: {
                        source: i.source
                    }
                }
            };
            return Object.keys(this._measurements).length > 0 && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)),
            s.measurements = this._measurements),
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),
            this._hub.captureEvent(s)
        }
        toContext() {
            const t = super.toContext();
            return sn({
                ...t,
                name: this.name,
                trimEnd: this._trimEnd
            })
        }
        updateWithContext(t) {
            return super.updateWithContext(t),
            this.name = t.name || "",
            this._trimEnd = t.trimEnd,
            this
        }
        getDynamicSamplingContext() {
            if (this._frozenDynamicSamplingContext)
                return this._frozenDynamicSamplingContext;
            const t = this._hub || ee()
              , n = t.getClient();
            if (!n)
                return {};
            const r = t.getScope()
              , i = wa(this.traceId, n, r)
              , s = this.metadata.sampleRate;
            s !== void 0 && (i.sample_rate = `${s}`);
            const o = this.metadata.source;
            return o && o !== "url" && (i.transaction = this.name),
            this.sampled !== void 0 && (i.sampled = String(this.sampled)),
            i
        }
        setHub(t) {
            this._hub = t
        }
    }
    const ao = {
        idleTimeout: 1e3,
        finalTimeout: 3e4,
        heartbeatInterval: 5e3
    }
      , HE = "finishReason"
      , er = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
    class YE extends Ea {
        constructor(t, n, r, i) {
            super(i),
            this._pushActivity = t,
            this._popActivity = n,
            this.transactionSpanId = r
        }
        add(t) {
            t.spanId !== this.transactionSpanId && (t.finish = n=>{
                t.endTimestamp = typeof n == "number" ? n : Fn(),
                this._popActivity(t.spanId)
            }
            ,
            t.endTimestamp === void 0 && this._pushActivity(t.spanId)),
            super.add(t)
        }
    }
    class qt extends yr {
        __init() {
            this.activities = {}
        }
        __init2() {
            this._heartbeatCounter = 0
        }
        __init3() {
            this._finished = !1
        }
        __init4() {
            this._idleTimeoutCanceledPermanently = !1
        }
        __init5() {
            this._beforeFinishCallbacks = []
        }
        __init6() {
            this._finishReason = er[4]
        }
        constructor(t, n, r=ao.idleTimeout, i=ao.finalTimeout, s=ao.heartbeatInterval, o=!1) {
            super(t, n),
            this._idleHub = n,
            this._idleTimeout = r,
            this._finalTimeout = i,
            this._heartbeatInterval = s,
            this._onScope = o,
            qt.prototype.__init.call(this),
            qt.prototype.__init2.call(this),
            qt.prototype.__init3.call(this),
            qt.prototype.__init4.call(this),
            qt.prototype.__init5.call(this),
            qt.prototype.__init6.call(this),
            o && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),
            n.configureScope(a=>a.setSpan(this))),
            this._restartIdleTimeout(),
            setTimeout(()=>{
                this._finished || (this.setStatus("deadline_exceeded"),
                this._finishReason = er[3],
                this.finish())
            }
            , this._finalTimeout)
        }
        finish(t=Fn()) {
            if (this._finished = !0,
            this.activities = {},
            this.op === "ui.action.click" && this.setTag(HE, this._finishReason),
            this.spanRecorder) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Tracing] finishing IdleTransaction", new Date(t * 1e3).toISOString(), this.op);
                for (const n of this._beforeFinishCallbacks)
                    n(this, t);
                this.spanRecorder.spans = this.spanRecorder.spans.filter(n=>{
                    if (n.spanId === this.spanId)
                        return !0;
                    n.endTimestamp || (n.endTimestamp = t,
                    n.setStatus("cancelled"),
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(n, void 0, 2)));
                    const r = n.startTimestamp < t;
                    return r || (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(n, void 0, 2)),
                    r
                }
                ),
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Tracing] flushing IdleTransaction")
            } else
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Tracing] No active IdleTransaction");
            if (this._onScope) {
                const n = this._idleHub.getScope();
                n.getTransaction() === this && n.setSpan(void 0)
            }
            return super.finish(t)
        }
        registerBeforeFinishCallback(t) {
            this._beforeFinishCallbacks.push(t)
        }
        initSpanRecorder(t) {
            if (!this.spanRecorder) {
                const n = i=>{
                    this._finished || this._pushActivity(i)
                }
                  , r = i=>{
                    this._finished || this._popActivity(i)
                }
                ;
                this.spanRecorder = new YE(n,r,this.spanId,t),
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("Starting heartbeat"),
                this._pingHeartbeat()
            }
            this.spanRecorder.add(this)
        }
        cancelIdleTimeout(t, {restartOnChildSpanChange: n}={
            restartOnChildSpanChange: !0
        }) {
            this._idleTimeoutCanceledPermanently = n === !1,
            this._idleTimeoutID && (clearTimeout(this._idleTimeoutID),
            this._idleTimeoutID = void 0,
            Object.keys(this.activities).length === 0 && this._idleTimeoutCanceledPermanently && (this._finishReason = er[5],
            this.finish(t)))
        }
        setFinishReason(t) {
            this._finishReason = t
        }
        _restartIdleTimeout(t) {
            this.cancelIdleTimeout(),
            this._idleTimeoutID = setTimeout(()=>{
                !this._finished && Object.keys(this.activities).length === 0 && (this._finishReason = er[1],
                this.finish(t))
            }
            , this._idleTimeout)
        }
        _pushActivity(t) {
            this.cancelIdleTimeout(void 0, {
                restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
            }),
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`[Tracing] pushActivity: ${t}`),
            this.activities[t] = !0,
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Tracing] new activities count", Object.keys(this.activities).length)
        }
        _popActivity(t) {
            if (this.activities[t] && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`[Tracing] popActivity ${t}`),
            delete this.activities[t],
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Tracing] new activities count", Object.keys(this.activities).length)),
            Object.keys(this.activities).length === 0) {
                const n = Fn();
                this._idleTimeoutCanceledPermanently ? (this._finishReason = er[5],
                this.finish(n)) : this._restartIdleTimeout(n + this._idleTimeout / 1e3)
            }
        }
        _beat() {
            if (this._finished)
                return;
            const t = Object.keys(this.activities).join("");
            t === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1,
            this._prevHeartbeatString = t,
            this._heartbeatCounter >= 3 ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Tracing] Transaction finished because of no change for 3 heart beats"),
            this.setStatus("deadline_exceeded"),
            this._finishReason = er[0],
            this.finish()) : this._pingHeartbeat()
        }
        _pingHeartbeat() {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
            setTimeout(()=>{
                this._beat()
            }
            , this._heartbeatInterval)
        }
    }
    function WE() {
        const t = this.getScope().getSpan();
        return t ? {
            "sentry-trace": t.toTraceparent()
        } : {}
    }
    function om(e, t, n) {
        if (!of(t))
            return e.sampled = !1,
            e;
        if (e.sampled !== void 0)
            return e.setMetadata({
                sampleRate: Number(e.sampled)
            }),
            e;
        let r;
        return typeof t.tracesSampler == "function" ? (r = t.tracesSampler(n),
        e.setMetadata({
            sampleRate: Number(r)
        })) : n.parentSampled !== void 0 ? r = n.parentSampled : typeof t.tracesSampleRate < "u" ? (r = t.tracesSampleRate,
        e.setMetadata({
            sampleRate: Number(r)
        })) : (r = 1,
        e.setMetadata({
            sampleRate: r
        })),
        qE(r) ? r ? (e.sampled = Math.random() < r,
        e.sampled ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`[Tracing] starting ${e.op} transaction - ${e.name}`),
        e) : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`),
        e)) : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`[Tracing] Discarding transaction because ${typeof t.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`),
        e.sampled = !1,
        e) : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn("[Tracing] Discarding transaction because of invalid sample rate."),
        e.sampled = !1,
        e)
    }
    function qE(e) {
        return B0(e) || !(typeof e == "number" || typeof e == "boolean") ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`),
        !1) : e < 0 || e > 1 ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`),
        !1) : !0
    }
    function KE(e, t) {
        const n = this.getClient()
          , r = n && n.getOptions() || {}
          , i = r.instrumenter || "sentry"
          , s = e.instrumenter || "sentry";
        i !== s && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.error(`A transaction was started with instrumenter=\`${s}\`, but the SDK is configured with the \`${i}\` instrumenter.
The transaction will not be sampled. Please use the ${i} instrumentation to start transactions.`),
        e.sampled = !1);
        let o = new yr(e,this);
        return o = om(o, r, {
            parentSampled: e.parentSampled,
            transactionContext: e,
            ...t
        }),
        o.sampled && o.initSpanRecorder(r._experiments && r._experiments.maxSpans),
        n && n.emit && n.emit("startTransaction", o),
        o
    }
    function gp(e, t, n, r, i, s, o) {
        const a = e.getClient()
          , l = a && a.getOptions() || {};
        let u = new qt(t,e,n,r,o,i);
        return u = om(u, l, {
            parentSampled: t.parentSampled,
            transactionContext: t,
            ...s
        }),
        u.sampled && u.initSpanRecorder(l._experiments && l._experiments.maxSpans),
        a && a.emit && a.emit("startTransaction", u),
        u
    }
    function am() {
        const e = Xr();
        e.__SENTRY__ && (e.__SENTRY__.extensions = e.__SENTRY__.extensions || {},
        e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = KE),
        e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = WE),
        VE())
    }
    function lm(e, t) {
        return ee().captureException(e, {
            captureContext: t
        })
    }
    function um(e) {
        ee().withScope(e)
    }
    const XE = "7";
    function cm(e) {
        const t = e.protocol ? `${e.protocol}:` : ""
          , n = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`
    }
    function QE(e) {
        return `${cm(e)}${e.projectId}/envelope/`
    }
    function JE(e, t) {
        return US({
            sentry_key: e.publicKey,
            sentry_version: XE,
            ...t && {
                sentry_client: `${t.name}/${t.version}`
            }
        })
    }
    function ZE(e, t={}) {
        const n = typeof t == "string" ? t : t.tunnel
          , r = typeof t == "string" || !t._metadata ? void 0 : t._metadata.sdk;
        return n || `${QE(e)}?${JE(e, r)}`
    }
    function e6(e, t) {
        const n = z0(e);
        if (!n)
            return "";
        const r = `${cm(n)}embed/error-page/`;
        let i = `dsn=${ds(n)}`;
        for (const s in t)
            if (s !== "dsn")
                if (s === "user") {
                    const o = t.user;
                    if (!o)
                        continue;
                    o.name && (i += `&name=${encodeURIComponent(o.name)}`),
                    o.email && (i += `&email=${encodeURIComponent(o.email)}`)
                } else
                    i += `&${encodeURIComponent(s)}=${encodeURIComponent(t[s])}`;
        return `${r}?${i}`
    }
    function t6(e, t) {
        return t && (e.sdk = e.sdk || {},
        e.sdk.name = e.sdk.name || t.name,
        e.sdk.version = e.sdk.version || t.version,
        e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []],
        e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []]),
        e
    }
    function n6(e, t, n, r) {
        const i = em(n)
          , s = {
            sent_at: new Date().toISOString(),
            ...i && {
                sdk: i
            },
            ...!!r && {
                dsn: ds(t)
            }
        }
          , o = "aggregates"in e ? [{
            type: "sessions"
        }, e] : [{
            type: "session"
        }, e.toJSON()];
        return hs(s, [o])
    }
    function r6(e, t, n, r) {
        const i = em(n)
          , s = e.type && e.type !== "replay_event" ? e.type : "event";
        t6(e, n && n.sdk);
        const o = PE(e, i, r, t);
        return delete e.sdkProcessingMetadata,
        hs(o, [[{
            type: s
        }, e]])
    }
    const _p = [];
    function i6(e) {
        const t = {};
        return e.forEach(n=>{
            const {name: r} = n
              , i = t[r];
            i && !i.isDefaultInstance && n.isDefaultInstance || (t[r] = n)
        }
        ),
        Object.keys(t).map(n=>t[n])
    }
    function s6(e) {
        const t = e.defaultIntegrations || []
          , n = e.integrations;
        t.forEach(o=>{
            o.isDefaultInstance = !0
        }
        );
        let r;
        Array.isArray(n) ? r = [...t, ...n] : typeof n == "function" ? r = K0(n(t)) : r = t;
        const i = i6(r)
          , s = a6(i, o=>o.name === "Debug");
        if (s !== -1) {
            const [o] = i.splice(s, 1);
            i.push(o)
        }
        return i
    }
    function o6(e) {
        const t = {};
        return e.forEach(n=>{
            n && fm(n, t)
        }
        ),
        t
    }
    function fm(e, t) {
        t[e.name] = e,
        _p.indexOf(e.name) === -1 && (e.setupOnce(nm, ee),
        _p.push(e.name),
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`Integration installed: ${e.name}`))
    }
    function a6(e, t) {
        for (let n = 0; n < e.length; n++)
            if (t(e[n]) === !0)
                return n;
        return -1
    }
    function l6(e, t, n, r) {
        const {normalizeDepth: i=3, normalizeMaxBreadth: s=1e3} = e
          , o = {
            ...t,
            event_id: t.event_id || n.event_id || Ue(),
            timestamp: t.timestamp || Sa()
        }
          , a = n.integrations || e.integrations.map(c=>c.name);
        u6(o, e),
        d6(o, a),
        t.type === void 0 && c6(o, e.stackParser);
        let l = r;
        n.captureContext && (l = Ln.clone(l).update(n.captureContext));
        let u = Un(o);
        if (l) {
            if (l.getAttachments) {
                const c = [...n.attachments || [], ...l.getAttachments()];
                c.length && (n.attachments = c)
            }
            u = l.applyToEvent(o, n)
        }
        return u.then(c=>(c && f6(c),
        typeof i == "number" && i > 0 ? p6(c, i, s) : c))
    }
    function u6(e, t) {
        const {environment: n, release: r, dist: i, maxValueLength: s=250} = t;
        "environment"in e || (e.environment = "environment"in t ? n : sf),
        e.release === void 0 && r !== void 0 && (e.release = r),
        e.dist === void 0 && i !== void 0 && (e.dist = i),
        e.message && (e.message = vi(e.message, s));
        const o = e.exception && e.exception.values && e.exception.values[0];
        o && o.value && (o.value = vi(o.value, s));
        const a = e.request;
        a && a.url && (a.url = vi(a.url, s))
    }
    const yp = new WeakMap;
    function c6(e, t) {
        const n = qe._sentryDebugIds;
        if (!n)
            return;
        let r;
        const i = yp.get(t);
        i ? r = i : (r = new Map,
        yp.set(t, r));
        const s = Object.keys(n).reduce((o,a)=>{
            let l;
            const u = r.get(a);
            u ? l = u : (l = t(a),
            r.set(a, l));
            for (let c = l.length - 1; c >= 0; c--) {
                const f = l[c];
                if (f.filename) {
                    o[f.filename] = n[a];
                    break
                }
            }
            return o
        }
        , {});
        try {
            e.exception.values.forEach(o=>{
                o.stacktrace.frames.forEach(a=>{
                    a.filename && (a.debug_id = s[a.filename])
                }
                )
            }
            )
        } catch {}
    }
    function f6(e) {
        const t = {};
        try {
            e.exception.values.forEach(r=>{
                r.stacktrace.frames.forEach(i=>{
                    i.debug_id && (i.abs_path ? t[i.abs_path] = i.debug_id : i.filename && (t[i.filename] = i.debug_id),
                    delete i.debug_id)
                }
                )
            }
            )
        } catch {}
        if (Object.keys(t).length === 0)
            return;
        e.debug_meta = e.debug_meta || {},
        e.debug_meta.images = e.debug_meta.images || [];
        const n = e.debug_meta.images;
        Object.keys(t).forEach(r=>{
            n.push({
                type: "sourcemap",
                code_file: r,
                debug_id: t[r]
            })
        }
        )
    }
    function d6(e, t) {
        t.length > 0 && (e.sdk = e.sdk || {},
        e.sdk.integrations = [...e.sdk.integrations || [], ...t])
    }
    function p6(e, t, n) {
        if (!e)
            return null;
        const r = {
            ...e,
            ...e.breadcrumbs && {
                breadcrumbs: e.breadcrumbs.map(i=>({
                    ...i,
                    ...i.data && {
                        data: Wt(i.data, t, n)
                    }
                }))
            },
            ...e.user && {
                user: Wt(e.user, t, n)
            },
            ...e.contexts && {
                contexts: Wt(e.contexts, t, n)
            },
            ...e.extra && {
                extra: Wt(e.extra, t, n)
            }
        };
        return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace,
        e.contexts.trace.data && (r.contexts.trace.data = Wt(e.contexts.trace.data, t, n))),
        e.spans && (r.spans = e.spans.map(i=>(i.data && (i.data = Wt(i.data, t, n)),
        i))),
        r
    }
    const vp = "Not capturing exception because it's already been captured.";
    class Pn {
        __init() {
            this._integrations = {}
        }
        __init2() {
            this._integrationsInitialized = !1
        }
        __init3() {
            this._numProcessing = 0
        }
        __init4() {
            this._outcomes = {}
        }
        __init5() {
            this._hooks = {}
        }
        constructor(t) {
            if (Pn.prototype.__init.call(this),
            Pn.prototype.__init2.call(this),
            Pn.prototype.__init3.call(this),
            Pn.prototype.__init4.call(this),
            Pn.prototype.__init5.call(this),
            this._options = t,
            t.dsn ? this._dsn = z0(t.dsn) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn("No DSN provided, client will not do anything."),
            this._dsn) {
                const n = ZE(this._dsn, t);
                this._transport = t.transport({
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...t.transportOptions,
                    url: n
                })
            }
        }
        captureException(t, n, r) {
            if (lp(t)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(vp);
                return
            }
            let i = n && n.event_id;
            return this._process(this.eventFromException(t, n).then(s=>this._captureEvent(s, n, r)).then(s=>{
                i = s
            }
            )),
            i
        }
        captureMessage(t, n, r, i) {
            let s = r && r.event_id;
            const o = $0(t) ? this.eventFromMessage(String(t), n, r) : this.eventFromException(t, r);
            return this._process(o.then(a=>this._captureEvent(a, r, i)).then(a=>{
                s = a
            }
            )),
            s
        }
        captureEvent(t, n, r) {
            if (n && n.originalException && lp(n.originalException)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(vp);
                return
            }
            let i = n && n.event_id;
            return this._process(this._captureEvent(t, n, r).then(s=>{
                i = s
            }
            )),
            i
        }
        captureSession(t) {
            if (!this._isEnabled()) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn("SDK not enabled, will not capture session.");
                return
            }
            typeof t.release != "string" ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn("Discarded session because of missing or non-string release") : (this.sendSession(t),
            br(t, {
                init: !1
            }))
        }
        getDsn() {
            return this._dsn
        }
        getOptions() {
            return this._options
        }
        getSdkMetadata() {
            return this._options._metadata
        }
        getTransport() {
            return this._transport
        }
        flush(t) {
            const n = this._transport;
            return n ? this._isClientDoneProcessing(t).then(r=>n.flush(t).then(i=>r && i)) : Un(!0)
        }
        close(t) {
            return this.flush(t).then(n=>(this.getOptions().enabled = !1,
            n))
        }
        setupIntegrations() {
            this._isEnabled() && !this._integrationsInitialized && (this._integrations = o6(this._options.integrations),
            this._integrationsInitialized = !0)
        }
        getIntegrationById(t) {
            return this._integrations[t]
        }
        getIntegration(t) {
            try {
                return this._integrations[t.id] || null
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`Cannot retrieve integration ${t.id} from the current Client`),
                null
            }
        }
        addIntegration(t) {
            fm(t, this._integrations)
        }
        sendEvent(t, n={}) {
            if (this._dsn) {
                let r = r6(t, this._dsn, this._options._metadata, this._options.tunnel);
                for (const s of n.attachments || [])
                    r = xE(r, CE(s, this._options.transportOptions && this._options.transportOptions.textEncoder));
                const i = this._sendEnvelope(r);
                i && i.then(s=>this.emit("afterSendEvent", t, s), null)
            }
        }
        sendSession(t) {
            if (this._dsn) {
                const n = n6(t, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(n)
            }
        }
        recordDroppedEvent(t, n, r) {
            if (this._options.sendClientReports) {
                const i = `${t}:${n}`;
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`Adding outcome: "${i}"`),
                this._outcomes[i] = this._outcomes[i] + 1 || 1
            }
        }
        on(t, n) {
            this._hooks[t] || (this._hooks[t] = []),
            this._hooks[t].push(n)
        }
        emit(t, ...n) {
            this._hooks[t] && this._hooks[t].forEach(r=>r(...n))
        }
        _updateSessionFromEvent(t, n) {
            let r = !1
              , i = !1;
            const s = n.exception && n.exception.values;
            if (s) {
                i = !0;
                for (const l of s) {
                    const u = l.mechanism;
                    if (u && u.handled === !1) {
                        r = !0;
                        break
                    }
                }
            }
            const o = t.status === "ok";
            (o && t.errors === 0 || o && r) && (br(t, {
                ...r && {
                    status: "crashed"
                },
                errors: t.errors || Number(i || r)
            }),
            this.captureSession(t))
        }
        _isClientDoneProcessing(t) {
            return new Pe(n=>{
                let r = 0;
                const i = 1
                  , s = setInterval(()=>{
                    this._numProcessing == 0 ? (clearInterval(s),
                    n(!0)) : (r += i,
                    t && r >= t && (clearInterval(s),
                    n(!1)))
                }
                , i)
            }
            )
        }
        _isEnabled() {
            return this.getOptions().enabled !== !1 && this._dsn !== void 0
        }
        _prepareEvent(t, n, r) {
            const i = this.getOptions()
              , s = Object.keys(this._integrations);
            return !n.integrations && s.length > 0 && (n.integrations = s),
            l6(i, t, n, r).then(o=>{
                if (o === null)
                    return o;
                const {propagationContext: a} = o.sdkProcessingMetadata || {};
                if (!(o.contexts && o.contexts.trace) && a) {
                    const {traceId: u, spanId: c, parentSpanId: f, dsc: d} = a;
                    o.contexts = {
                        trace: {
                            trace_id: u,
                            span_id: c,
                            parent_span_id: f
                        },
                        ...o.contexts
                    };
                    const h = d || wa(u, this, r);
                    o.sdkProcessingMetadata = {
                        dynamicSamplingContext: h,
                        ...o.sdkProcessingMetadata
                    }
                }
                return o
            }
            )
        }
        _captureEvent(t, n={}, r) {
            return this._processEvent(t, n, r).then(i=>i.event_id, i=>{
                if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
                    const s = i;
                    s.logLevel === "log" ? T.log(s.message) : T.warn(s)
                }
            }
            )
        }
        _processEvent(t, n, r) {
            const i = this.getOptions()
              , {sampleRate: s} = i;
            if (!this._isEnabled())
                return Oo(new pt("SDK not enabled, will not capture event.","log"));
            const o = pm(t)
              , a = dm(t)
              , l = t.type || "error"
              , u = `before send for type \`${l}\``;
            if (a && typeof s == "number" && Math.random() > s)
                return this.recordDroppedEvent("sample_rate", "error", t),
                Oo(new pt(`Discarding event because it's not included in the random sample (sampling rate = ${s})`,"log"));
            const c = l === "replay_event" ? "replay" : l;
            return this._prepareEvent(t, n, r).then(f=>{
                if (f === null)
                    throw this.recordDroppedEvent("event_processor", c, t),
                    new pt("An event processor returned `null`, will not send event.","log");
                if (n.data && n.data.__sentry__ === !0)
                    return f;
                const h = m6(i, f, n);
                return h6(h, u)
            }
            ).then(f=>{
                if (f === null)
                    throw this.recordDroppedEvent("before_send", c, t),
                    new pt(`${u} returned \`null\`, will not send event.`,"log");
                const d = r && r.getSession();
                !o && d && this._updateSessionFromEvent(d, f);
                const h = f.transaction_info;
                if (o && h && f.transaction !== t.transaction) {
                    const _ = "custom";
                    f.transaction_info = {
                        ...h,
                        source: _
                    }
                }
                return this.sendEvent(f, n),
                f
            }
            ).then(null, f=>{
                throw f instanceof pt ? f : (this.captureException(f, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: f
                }),
                new pt(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${f}`))
            }
            )
        }
        _process(t) {
            this._numProcessing++,
            t.then(n=>(this._numProcessing--,
            n), n=>(this._numProcessing--,
            n))
        }
        _sendEnvelope(t) {
            if (this._transport && this._dsn)
                return this.emit("beforeEnvelope", t),
                this._transport.send(t).then(null, n=>{
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.error("Error while sending event:", n)
                }
                );
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.error("Transport disabled")
        }
        _clearOutcomes() {
            const t = this._outcomes;
            return this._outcomes = {},
            Object.keys(t).map(n=>{
                const [r,i] = n.split(":");
                return {
                    reason: r,
                    category: i,
                    quantity: t[n]
                }
            }
            )
        }
    }
    function h6(e, t) {
        const n = `${t} must return \`null\` or a valid event.`;
        if (Zc(e))
            return e.then(r=>{
                if (!Ar(r) && r !== null)
                    throw new pt(n);
                return r
            }
            , r=>{
                throw new pt(`${t} rejected with ${r}`)
            }
            );
        if (!Ar(e) && e !== null)
            throw new pt(n);
        return e
    }
    function m6(e, t, n) {
        const {beforeSend: r, beforeSendTransaction: i} = e;
        return dm(t) && r ? r(t, n) : pm(t) && i ? i(t, n) : t
    }
    function dm(e) {
        return e.type === void 0
    }
    function pm(e) {
        return e.type === "transaction"
    }
    function g6(e, t) {
        t.debug === !0 && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? T.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
        const n = ee();
        n.getScope().update(t.initialScope);
        const i = new e(t);
        n.bindClient(i)
    }
    const _6 = 30;
    function hm(e, t, n=dE(e.bufferSize || _6)) {
        let r = {};
        const i = o=>n.drain(o);
        function s(o) {
            const a = [];
            if (fp(o, (f,d)=>{
                const h = dp(d);
                if (ME(r, h)) {
                    const _ = Sp(f, d);
                    e.recordDroppedEvent("ratelimit_backoff", h, _)
                } else
                    a.push(f)
            }
            ),
            a.length === 0)
                return Un();
            const l = hs(o[0], a)
              , u = f=>{
                fp(l, (d,h)=>{
                    const _ = Sp(d, h);
                    e.recordDroppedEvent(f, dp(h), _)
                }
                )
            }
              , c = ()=>t({
                body: kE(l, e.textEncoder)
            }).then(f=>(f.statusCode !== void 0 && (f.statusCode < 200 || f.statusCode >= 300) && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`Sentry responded with status code ${f.statusCode} to sent event.`),
            r = bE(r, f),
            f), f=>{
                throw u("network_error"),
                f
            }
            );
            return n.add(c).then(f=>f, f=>{
                if (f instanceof pt)
                    return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.error("Skipped sending event because buffer is full."),
                    u("queue_overflow"),
                    Un();
                throw f
            }
            )
        }
        return s.__sentry__baseTransport__ = !0,
        {
            send: s,
            flush: i
        }
    }
    function Sp(e, t) {
        if (!(t !== "event" && t !== "transaction"))
            return Array.isArray(e) ? e[1] : void 0
    }
    const Io = "7.58.1";
    let Ep;
    class $i {
        constructor() {
            $i.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "FunctionToString"
        }
        __init() {
            this.name = $i.id
        }
        setupOnce() {
            Ep = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...t) {
                    const n = nf(this) || this;
                    return Ep.apply(n, t)
                }
            } catch {}
        }
    }
    $i.__initStatic();
    const y6 = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
      , v6 = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/];
    class vr {
        static __initStatic() {
            this.id = "InboundFilters"
        }
        __init() {
            this.name = vr.id
        }
        constructor(t={}) {
            this._options = t,
            vr.prototype.__init.call(this)
        }
        setupOnce(t, n) {
            const r = i=>{
                const s = n();
                if (s) {
                    const o = s.getIntegration(vr);
                    if (o) {
                        const a = s.getClient()
                          , l = a ? a.getOptions() : {}
                          , u = S6(o._options, l);
                        return E6(i, u) ? null : i
                    }
                }
                return i
            }
            ;
            r.id = this.name,
            t(r)
        }
    }
    vr.__initStatic();
    function S6(e={}, t={}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : y6],
            ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || [], ...e.disableTransactionDefaults ? [] : v6],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }
    function E6(e, t) {
        return t.ignoreInternal && C6(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`Event dropped due to being internal Sentry Error.
Event: ${Qt(e)}`),
        !0) : w6(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Qt(e)}`),
        !0) : T6(e, t.ignoreTransactions) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Qt(e)}`),
        !0) : x6(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Qt(e)}.
Url: ${Ao(e)}`),
        !0) : k6(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Qt(e)}.
Url: ${Ao(e)}`),
        !0)
    }
    function w6(e, t) {
        return e.type || !t || !t.length ? !1 : R6(e).some(n=>ps(n, t))
    }
    function T6(e, t) {
        if (e.type !== "transaction" || !t || !t.length)
            return !1;
        const n = e.transaction;
        return n ? ps(n, t) : !1
    }
    function x6(e, t) {
        if (!t || !t.length)
            return !1;
        const n = Ao(e);
        return n ? ps(n, t) : !1
    }
    function k6(e, t) {
        if (!t || !t.length)
            return !0;
        const n = Ao(e);
        return n ? ps(n, t) : !0
    }
    function R6(e) {
        if (e.message)
            return [e.message];
        if (e.exception) {
            const {values: t} = e.exception;
            try {
                const {type: n="", value: r=""} = t && t[t.length - 1] || {};
                return [`${r}`, `${n}: ${r}`]
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.error(`Cannot extract message for event ${Qt(e)}`),
                []
            }
        }
        return []
    }
    function C6(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }
    function N6(e=[]) {
        for (let t = e.length - 1; t >= 0; t--) {
            const n = e[t];
            if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
                return n.filename || null
        }
        return null
    }
    function Ao(e) {
        try {
            let t;
            try {
                t = e.exception.values[0].stacktrace.frames
            } catch {}
            return t ? N6(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.error(`Cannot extract url for event ${Qt(e)}`),
            null
        }
    }
    const G = qe;
    let xu = 0;
    function mm() {
        return xu > 0
    }
    function P6() {
        xu++,
        setTimeout(()=>{
            xu--
        }
        )
    }
    function jr(e, t={}, n) {
        if (typeof e != "function")
            return e;
        try {
            const i = e.__sentry_wrapped__;
            if (i)
                return i;
            if (nf(e))
                return e
        } catch {
            return e
        }
        const r = function() {
            const i = Array.prototype.slice.call(arguments);
            try {
                n && typeof n == "function" && n.apply(this, arguments);
                const s = i.map(o=>jr(o, t));
                return e.apply(this, s)
            } catch (s) {
                throw P6(),
                um(o=>{
                    o.addEventProcessor(a=>(t.mechanism && (gu(a, void 0, void 0),
                    Li(a, t.mechanism)),
                    a.extra = {
                        ...a.extra,
                        arguments: i
                    },
                    a)),
                    lm(s)
                }
                ),
                s
            }
        };
        try {
            for (const i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i])
        } catch {}
        V0(r, e),
        tf(e, "__sentry_wrapped__", r);
        try {
            Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                get() {
                    return e.name
                }
            })
        } catch {}
        return r
    }
    function gm(e, t) {
        const n = af(e, t)
          , r = {
            type: t && t.name,
            value: A6(t)
        };
        return n.length && (r.stacktrace = {
            frames: n
        }),
        r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"),
        r
    }
    function D6(e, t, n, r) {
        const s = ee().getClient()
          , o = s && s.getOptions().normalizeDepth
          , a = {
            exception: {
                values: [{
                    type: va(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                    value: j6(t, {
                        isUnhandledRejection: r
                    })
                }]
            },
            extra: {
                __serialized__: Q0(t, o)
            }
        };
        if (n) {
            const l = af(e, n);
            l.length && (a.exception.values[0].stacktrace = {
                frames: l
            })
        }
        return a
    }
    function Sl(e, t) {
        return {
            exception: {
                values: [gm(e, t)]
            }
        }
    }
    function af(e, t) {
        const n = t.stacktrace || t.stack || ""
          , r = I6(t);
        try {
            return e(n, r)
        } catch {}
        return []
    }
    const O6 = /Minified React error #\d+;/i;
    function I6(e) {
        if (e) {
            if (typeof e.framesToPop == "number")
                return e.framesToPop;
            if (O6.test(e.message))
                return 1
        }
        return 0
    }
    function A6(e) {
        const t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }
    function M6(e, t, n, r) {
        const i = n && n.syntheticException || void 0
          , s = lf(e, t, i, r);
        return Li(s),
        s.level = "error",
        n && n.event_id && (s.event_id = n.event_id),
        Un(s)
    }
    function b6(e, t, n="info", r, i) {
        const s = r && r.syntheticException || void 0
          , o = ku(e, t, s, i);
        return o.level = n,
        r && r.event_id && (o.event_id = r.event_id),
        Un(o)
    }
    function lf(e, t, n, r, i) {
        let s;
        if (Jc(t) && t.error)
            return Sl(e, t.error);
        if (Qd(t) || kS(t)) {
            const o = t;
            if ("stack"in t)
                s = Sl(e, t);
            else {
                const a = o.name || (Qd(o) ? "DOMError" : "DOMException")
                  , l = o.message ? `${a}: ${o.message}` : a;
                s = ku(e, l, n, r),
                gu(s, l)
            }
            return "code"in o && (s.tags = {
                ...s.tags,
                "DOMException.code": `${o.code}`
            }),
            s
        }
        return Qc(t) ? Sl(e, t) : Ar(t) || va(t) ? (s = D6(e, t, n, i),
        Li(s, {
            synthetic: !0
        }),
        s) : (s = ku(e, t, n, r),
        gu(s, `${t}`, void 0),
        Li(s, {
            synthetic: !0
        }),
        s)
    }
    function ku(e, t, n, r) {
        const i = {
            message: t
        };
        if (r && n) {
            const s = af(e, n);
            s.length && (i.exception = {
                values: [{
                    value: t,
                    stacktrace: {
                        frames: s
                    }
                }]
            })
        }
        return i
    }
    function j6(e, {isUnhandledRejection: t}) {
        const n = FS(e)
          , r = t ? "promise rejection" : "exception";
        return Jc(e) ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\`` : va(e) ? `Event \`${L6(e)}\` (type=${e.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`
    }
    function L6(e) {
        try {
            const t = Object.getPrototypeOf(e);
            return t ? t.constructor.name : void 0
        } catch {}
    }
    const Ms = 1024
      , _m = "Breadcrumbs";
    class Bi {
        static __initStatic() {
            this.id = _m
        }
        __init() {
            this.name = Bi.id
        }
        constructor(t) {
            Bi.prototype.__init.call(this),
            this.options = {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...t
            }
        }
        setupOnce() {
            this.options.console && Ye("console", B6),
            this.options.dom && Ye("dom", $6(this.options.dom)),
            this.options.xhr && Ye("xhr", U6),
            this.options.fetch && Ye("fetch", F6),
            this.options.history && Ye("history", z6)
        }
        addSentryBreadcrumb(t) {
            this.options.sentry && ee().addBreadcrumb({
                category: `sentry.${t.type === "transaction" ? "transaction" : "event"}`,
                event_id: t.event_id,
                level: t.level,
                message: Qt(t)
            }, {
                event: t
            })
        }
    }
    Bi.__initStatic();
    function $6(e) {
        function t(n) {
            let r, i = typeof e == "object" ? e.serializeAttribute : void 0, s = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0;
            s && s > Ms && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`\`dom.maxStringLength\` cannot exceed ${Ms}, but a value of ${s} was configured. Sentry will use ${Ms} instead.`),
            s = Ms),
            typeof i == "string" && (i = [i]);
            try {
                const o = n.event;
                r = V6(o) ? Mr(o.target, {
                    keyAttrs: i,
                    maxStringLength: s
                }) : Mr(o, {
                    keyAttrs: i,
                    maxStringLength: s
                })
            } catch {
                r = "<unknown>"
            }
            r.length !== 0 && ee().addBreadcrumb({
                category: `ui.${n.name}`,
                message: r
            }, {
                event: n.event,
                name: n.name,
                global: n.global
            })
        }
        return t
    }
    function B6(e) {
        for (let n = 0; n < e.args.length; n++)
            if (e.args[n] === "ref=Ref<") {
                e.args[n + 1] = "viewRef";
                break
            }
        const t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: hE(e.level),
            message: tp(e.args, " ")
        };
        if (e.level === "assert")
            if (e.args[0] === !1)
                t.message = `Assertion failed: ${tp(e.args.slice(1), " ") || "console.assert"}`,
                t.data.arguments = e.args.slice(1);
            else
                return;
        ee().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }
    function U6(e) {
        const {startTimestamp: t, endTimestamp: n} = e
          , r = e.xhr[ir];
        if (!t || !n || !r)
            return;
        const {method: i, url: s, status_code: o, body: a} = r
          , l = {
            method: i,
            url: s,
            status_code: o
        }
          , u = {
            xhr: e.xhr,
            input: a,
            startTimestamp: t,
            endTimestamp: n
        };
        ee().addBreadcrumb({
            category: "xhr",
            data: l,
            type: "http"
        }, u)
    }
    function F6(e) {
        const {startTimestamp: t, endTimestamp: n} = e;
        if (n && !(e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST"))
            if (e.error) {
                const r = e.fetchData
                  , i = {
                    data: e.error,
                    input: e.args,
                    startTimestamp: t,
                    endTimestamp: n
                };
                ee().addBreadcrumb({
                    category: "fetch",
                    data: r,
                    level: "error",
                    type: "http"
                }, i)
            } else {
                const r = {
                    ...e.fetchData,
                    status_code: e.response && e.response.status
                }
                  , i = {
                    input: e.args,
                    response: e.response,
                    startTimestamp: t,
                    endTimestamp: n
                };
                ee().addBreadcrumb({
                    category: "fetch",
                    data: r,
                    type: "http"
                }, i)
            }
    }
    function z6(e) {
        let t = e.from
          , n = e.to;
        const r = yl(G.location.href);
        let i = yl(t);
        const s = yl(n);
        i.path || (i = r),
        r.protocol === s.protocol && r.host === s.host && (n = s.relative),
        r.protocol === i.protocol && r.host === i.host && (t = i.relative),
        ee().addBreadcrumb({
            category: "navigation",
            data: {
                from: t,
                to: n
            }
        })
    }
    function V6(e) {
        return !!e && !!e.target
    }
    function G6(e, {metadata: t, tunnel: n, dsn: r}) {
        const i = {
            event_id: e.event_id,
            sent_at: new Date().toISOString(),
            ...t && t.sdk && {
                sdk: {
                    name: t.sdk.name,
                    version: t.sdk.version
                }
            },
            ...!!n && !!r && {
                dsn: ds(r)
            }
        }
          , s = H6(e);
        return hs(i, [s])
    }
    function H6(e) {
        return [{
            type: "user_report"
        }, e]
    }
    class Y6 extends Pn {
        constructor(t) {
            const n = G.SENTRY_SDK_SOURCE || oE();
            t._metadata = t._metadata || {},
            t._metadata.sdk = t._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: `${n}:@sentry/browser`,
                    version: Io
                }],
                version: Io
            },
            super(t),
            t.sendClientReports && G.document && G.document.addEventListener("visibilitychange", ()=>{
                G.document.visibilityState === "hidden" && this._flushOutcomes()
            }
            )
        }
        eventFromException(t, n) {
            return M6(this._options.stackParser, t, n, this._options.attachStacktrace)
        }
        eventFromMessage(t, n="info", r) {
            return b6(this._options.stackParser, t, n, r, this._options.attachStacktrace)
        }
        sendEvent(t, n) {
            const r = this.getIntegrationById(_m);
            r && r.addSentryBreadcrumb && r.addSentryBreadcrumb(t),
            super.sendEvent(t, n)
        }
        captureUserFeedback(t) {
            if (!this._isEnabled()) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn("SDK not enabled, will not capture user feedback.");
                return
            }
            const n = G6(t, {
                metadata: this.getSdkMetadata(),
                dsn: this.getDsn(),
                tunnel: this.getOptions().tunnel
            });
            this._sendEnvelope(n)
        }
        _prepareEvent(t, n, r) {
            return t.platform = t.platform || "javascript",
            super._prepareEvent(t, n, r)
        }
        _flushOutcomes() {
            const t = this._clearOutcomes();
            if (t.length === 0) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("No outcomes to send");
                return
            }
            if (!this._dsn) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("No dsn provided, will not send outcomes");
                return
            }
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("Sending outcomes:", t);
            const n = DE(t, this._options.tunnel && ds(this._dsn));
            this._sendEnvelope(n)
        }
    }
    let di;
    function W6() {
        if (di)
            return di;
        if (hu(G.fetch))
            return di = G.fetch.bind(G);
        const e = G.document;
        let t = G.fetch;
        if (e && typeof e.createElement == "function")
            try {
                const n = e.createElement("iframe");
                n.hidden = !0,
                e.head.appendChild(n);
                const r = n.contentWindow;
                r && r.fetch && (t = r.fetch),
                e.head.removeChild(n)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
            }
        return di = t.bind(G)
    }
    function q6() {
        di = void 0
    }
    function K6(e, t=W6()) {
        let n = 0
          , r = 0;
        function i(s) {
            const o = s.body.length;
            n += o,
            r++;
            const a = {
                body: s.body,
                method: "POST",
                referrerPolicy: "origin",
                headers: e.headers,
                keepalive: n <= 6e4 && r < 15,
                ...e.fetchOptions
            };
            try {
                return t(e.url, a).then(l=>(n -= o,
                r--,
                {
                    statusCode: l.status,
                    headers: {
                        "x-sentry-rate-limits": l.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": l.headers.get("Retry-After")
                    }
                }))
            } catch (l) {
                return q6(),
                n -= o,
                r--,
                Oo(l)
            }
        }
        return hm(e, i)
    }
    const X6 = 4;
    function Q6(e) {
        function t(n) {
            return new Pe((r,i)=>{
                const s = new XMLHttpRequest;
                s.onerror = i,
                s.onreadystatechange = ()=>{
                    s.readyState === X6 && r({
                        statusCode: s.status,
                        headers: {
                            "x-sentry-rate-limits": s.getResponseHeader("X-Sentry-Rate-Limits"),
                            "retry-after": s.getResponseHeader("Retry-After")
                        }
                    })
                }
                ,
                s.open("POST", e.url);
                for (const o in e.headers)
                    Object.prototype.hasOwnProperty.call(e.headers, o) && s.setRequestHeader(o, e.headers[o]);
                s.send(n.body)
            }
            )
        }
        return hm(e, t)
    }
    const Ta = "?"
      , J6 = 30
      , Z6 = 40
      , e7 = 50;
    function uf(e, t, n, r) {
        const i = {
            filename: e,
            function: t,
            in_app: !0
        };
        return n !== void 0 && (i.lineno = n),
        r !== void 0 && (i.colno = r),
        i
    }
    const t7 = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
      , n7 = /\((\S*)(?::(\d+))(?::(\d+))\)/
      , r7 = e=>{
        const t = t7.exec(e);
        if (t) {
            if (t[2] && t[2].indexOf("eval") === 0) {
                const s = n7.exec(t[2]);
                s && (t[2] = s[1],
                t[3] = s[2],
                t[4] = s[3])
            }
            const [r,i] = ym(t[1] || Ta, t[2]);
            return uf(i, r, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0)
        }
    }
      , i7 = [J6, r7]
      , s7 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
      , o7 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
      , a7 = e=>{
        const t = s7.exec(e);
        if (t) {
            if (t[3] && t[3].indexOf(" > eval") > -1) {
                const s = o7.exec(t[3]);
                s && (t[1] = t[1] || "eval",
                t[3] = s[1],
                t[4] = s[2],
                t[5] = "")
            }
            let r = t[3]
              , i = t[1] || Ta;
            return [i,r] = ym(i, r),
            uf(r, i, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
        }
    }
      , l7 = [e7, a7]
      , u7 = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i
      , c7 = e=>{
        const t = u7.exec(e);
        return t ? uf(t[2], t[1] || Ta, +t[3], t[4] ? +t[4] : void 0) : void 0
    }
      , f7 = [Z6, c7]
      , d7 = [i7, l7, f7]
      , p7 = Y0(...d7)
      , ym = (e,t)=>{
        const n = e.indexOf("safari-extension") !== -1
          , r = e.indexOf("safari-web-extension") !== -1;
        return n || r ? [e.indexOf("@") !== -1 ? e.split("@")[0] : Ta, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
    }
    ;
    class on {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = on.id
        }
        __init2() {
            this._installFunc = {
                onerror: h7,
                onunhandledrejection: m7
            }
        }
        constructor(t) {
            on.prototype.__init.call(this),
            on.prototype.__init2.call(this),
            this._options = {
                onerror: !0,
                onunhandledrejection: !0,
                ...t
            }
        }
        setupOnce() {
            Error.stackTraceLimit = 50;
            const t = this._options;
            for (const n in t) {
                const r = this._installFunc[n];
                r && t[n] && (y7(n),
                r(),
                this._installFunc[n] = void 0)
            }
        }
    }
    on.__initStatic();
    function h7() {
        Ye("error", e=>{
            const [t,n,r] = Em();
            if (!t.getIntegration(on))
                return;
            const {msg: i, url: s, line: o, column: a, error: l} = e;
            if (mm() || l && l.__sentry_own_request__)
                return;
            const u = l === void 0 && mn(i) ? _7(i, s, o, a) : vm(lf(n, l || i, void 0, r, !1), s, o, a);
            u.level = "error",
            Sm(t, l, u, "onerror")
        }
        )
    }
    function m7() {
        Ye("unhandledrejection", e=>{
            const [t,n,r] = Em();
            if (!t.getIntegration(on))
                return;
            let i = e;
            try {
                "reason"in e ? i = e.reason : "detail"in e && "reason"in e.detail && (i = e.detail.reason)
            } catch {}
            if (mm() || i && i.__sentry_own_request__)
                return !0;
            const s = $0(i) ? g7(i) : lf(n, i, void 0, r, !0);
            s.level = "error",
            Sm(t, i, s, "onunhandledrejection")
        }
        )
    }
    function g7(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }
    function _7(e, t, n, r) {
        const i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let s = Jc(e) ? e.message : e
          , o = "Error";
        const a = s.match(i);
        return a && (o = a[1],
        s = a[2]),
        vm({
            exception: {
                values: [{
                    type: o,
                    value: s
                }]
            }
        }, t, n, r)
    }
    function vm(e, t, n, r) {
        const i = e.exception = e.exception || {}
          , s = i.values = i.values || []
          , o = s[0] = s[0] || {}
          , a = o.stacktrace = o.stacktrace || {}
          , l = a.frames = a.frames || []
          , u = isNaN(parseInt(r, 10)) ? void 0 : r
          , c = isNaN(parseInt(n, 10)) ? void 0 : n
          , f = mn(t) && t.length > 0 ? t : IS();
        return l.length === 0 && l.push({
            colno: u,
            filename: f,
            function: "?",
            in_app: !0,
            lineno: c
        }),
        e
    }
    function y7(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`Global Handler attached: ${e}`)
    }
    function Sm(e, t, n, r) {
        Li(n, {
            handled: !1,
            type: r
        }),
        e.captureEvent(n, {
            originalException: t
        })
    }
    function Em() {
        const e = ee()
          , t = e.getClient()
          , n = t && t.getOptions() || {
            stackParser: ()=>[],
            attachStacktrace: !1
        };
        return [e, n.stackParser, n.attachStacktrace]
    }
    const v7 = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class Ui {
        static __initStatic() {
            this.id = "TryCatch"
        }
        __init() {
            this.name = Ui.id
        }
        constructor(t) {
            Ui.prototype.__init.call(this),
            this._options = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...t
            }
        }
        setupOnce() {
            this._options.setTimeout && Se(G, "setTimeout", wp),
            this._options.setInterval && Se(G, "setInterval", wp),
            this._options.requestAnimationFrame && Se(G, "requestAnimationFrame", S7),
            this._options.XMLHttpRequest && "XMLHttpRequest"in G && Se(XMLHttpRequest.prototype, "send", E7);
            const t = this._options.eventTarget;
            t && (Array.isArray(t) ? t : v7).forEach(w7)
        }
    }
    Ui.__initStatic();
    function wp(e) {
        return function(...t) {
            const n = t[0];
            return t[0] = jr(n, {
                mechanism: {
                    data: {
                        function: gn(e)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }),
            e.apply(this, t)
        }
    }
    function S7(e) {
        return function(t) {
            return e.apply(this, [jr(t, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: gn(e)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })])
        }
    }
    function E7(e) {
        return function(...t) {
            const n = this;
            return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(i=>{
                i in n && typeof n[i] == "function" && Se(n, i, function(s) {
                    const o = {
                        mechanism: {
                            data: {
                                function: i,
                                handler: gn(s)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }
                      , a = nf(s);
                    return a && (o.mechanism.data.handler = gn(a)),
                    jr(s, o)
                })
            }
            ),
            e.apply(this, t)
        }
    }
    function w7(e) {
        const t = G
          , n = t[e] && t[e].prototype;
        !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (Se(n, "addEventListener", function(r) {
            return function(i, s, o) {
                try {
                    typeof s.handleEvent == "function" && (s.handleEvent = jr(s.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: gn(s),
                                target: e
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                } catch {}
                return r.apply(this, [i, jr(s, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: gn(s),
                            target: e
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), o])
            }
        }),
        Se(n, "removeEventListener", function(r) {
            return function(i, s, o) {
                const a = s;
                try {
                    const l = a && a.__sentry_wrapped__;
                    l && r.call(this, i, l, o)
                } catch {}
                return r.call(this, i, a, o)
            }
        }))
    }
    const T7 = "cause"
      , x7 = 5;
    class Sr {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Sr.id
        }
        constructor(t={}) {
            Sr.prototype.__init.call(this),
            this._key = t.key || T7,
            this._limit = t.limit || x7
        }
        setupOnce(t, n) {
            t((r,i)=>{
                const s = n()
                  , o = s.getClient()
                  , a = s.getIntegration(Sr);
                return !o || !a || PS(gm, o.getOptions().stackParser, a._key, a._limit, r, i),
                r
            }
            )
        }
    }
    Sr.__initStatic();
    class Er {
        constructor() {
            Er.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "HttpContext"
        }
        __init() {
            this.name = Er.id
        }
        setupOnce() {
            nm(t=>{
                if (ee().getIntegration(Er)) {
                    if (!G.navigator && !G.location && !G.document)
                        return t;
                    const n = t.request && t.request.url || G.location && G.location.href
                      , {referrer: r} = G.document || {}
                      , {userAgent: i} = G.navigator || {}
                      , s = {
                        ...t.request && t.request.headers,
                        ...r && {
                            Referer: r
                        },
                        ...i && {
                            "User-Agent": i
                        }
                    }
                      , o = {
                        ...t.request,
                        ...n && {
                            url: n
                        },
                        headers: s
                    };
                    return {
                        ...t,
                        request: o
                    }
                }
                return t
            }
            )
        }
    }
    Er.__initStatic();
    class wr {
        constructor() {
            wr.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "Dedupe"
        }
        __init() {
            this.name = wr.id
        }
        setupOnce(t, n) {
            const r = i=>{
                if (i.type)
                    return i;
                const s = n().getIntegration(wr);
                if (s) {
                    try {
                        if (k7(i, s._previousEvent))
                            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn("Event dropped due to being a duplicate of previously captured event."),
                            null
                    } catch {
                        return s._previousEvent = i
                    }
                    return s._previousEvent = i
                }
                return i
            }
            ;
            r.id = this.name,
            t(r)
        }
    }
    wr.__initStatic();
    function k7(e, t) {
        return t ? !!(R7(e, t) || C7(e, t)) : !1
    }
    function R7(e, t) {
        const n = e.message
          , r = t.message;
        return !(!n && !r || n && !r || !n && r || n !== r || !Tm(e, t) || !wm(e, t))
    }
    function C7(e, t) {
        const n = Tp(t)
          , r = Tp(e);
        return !(!n || !r || n.type !== r.type || n.value !== r.value || !Tm(e, t) || !wm(e, t))
    }
    function wm(e, t) {
        let n = xp(e)
          , r = xp(t);
        if (!n && !r)
            return !0;
        if (n && !r || !n && r || (n = n,
        r = r,
        r.length !== n.length))
            return !1;
        for (let i = 0; i < r.length; i++) {
            const s = r[i]
              , o = n[i];
            if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function)
                return !1
        }
        return !0
    }
    function Tm(e, t) {
        let n = e.fingerprint
          , r = t.fingerprint;
        if (!n && !r)
            return !0;
        if (n && !r || !n && r)
            return !1;
        n = n,
        r = r;
        try {
            return n.join("") === r.join("")
        } catch {
            return !1
        }
    }
    function Tp(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }
    function xp(e) {
        const t = e.exception;
        if (t)
            try {
                return t.values[0].stacktrace.frames
            } catch {
                return
            }
    }
    const N7 = [new vr, new $i, new Ui, new Bi, new on, new Sr, new wr, new Er];
    function P7(e={}) {
        e.defaultIntegrations === void 0 && (e.defaultIntegrations = N7),
        e.release === void 0 && (typeof __SENTRY_RELEASE__ == "string" && (e.release = __SENTRY_RELEASE__),
        G.SENTRY_RELEASE && G.SENTRY_RELEASE.id && (e.release = G.SENTRY_RELEASE.id)),
        e.autoSessionTracking === void 0 && (e.autoSessionTracking = !0),
        e.sendClientReports === void 0 && (e.sendClientReports = !0);
        const t = {
            ...e,
            stackParser: zS(e.stackParser || p7),
            integrations: s6(e),
            transport: e.transport || (W0() ? K6 : Q6)
        };
        g6(Y6, t),
        e.autoSessionTracking && D7()
    }
    function kp(e={}, t=ee()) {
        if (!G.document) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.error("Global document not defined in showReportDialog call");
            return
        }
        const {client: n, scope: r} = t.getStackTop()
          , i = e.dsn || n && n.getDsn();
        if (!i) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.error("DSN not configured for showReportDialog call");
            return
        }
        r && (e.user = {
            ...r.getUser(),
            ...e.user
        }),
        e.eventId || (e.eventId = t.lastEventId());
        const s = G.document.createElement("script");
        s.async = !0,
        s.crossOrigin = "anonymous",
        s.src = e6(i, e),
        e.onLoad && (s.onload = e.onLoad);
        const o = G.document.head || G.document.body;
        o ? o.appendChild(s) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.error("Not injecting report dialog. No injection point found in HTML")
    }
    function Rp(e) {
        e.startSession({
            ignoreDuration: !0
        }),
        e.captureSession()
    }
    function D7() {
        if (typeof G.document > "u") {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
            return
        }
        const e = ee();
        e.captureSession && (Rp(e),
        Ye("history", ({from: t, to: n})=>{
            t === void 0 || t === n || Rp(ee())
        }
        ))
    }
    function Cp(e) {
        let t, n = e[0], r = 1;
        for (; r < e.length; ) {
            const i = e[r]
              , s = e[r + 1];
            if (r += 2,
            (i === "optionalAccess" || i === "optionalCall") && n == null)
                return;
            i === "access" || i === "optionalAccess" ? (t = n,
            n = s(n)) : (i === "call" || i === "optionalCall") && (n = s((...o)=>n.call(t, ...o)),
            t = void 0)
        }
        return n
    }
    const W = qe;
    function O7() {
        W && W.document ? W.document.addEventListener("visibilitychange", ()=>{
            const e = ms();
            if (W.document.hidden && e) {
                const t = "cancelled";
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${e.op}`),
                e.status || e.setStatus(t),
                e.setTag("visibilitychange", "document.hidden"),
                e.finish()
            }
        }
        ) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn("[Tracing] Could not set up background tab detection due to lack of global document")
    }
    const cf = (e,t,n)=>{
        let r, i;
        return s=>{
            t.value >= 0 && (s || n) && (i = t.value - (r || 0),
            (i || r === void 0) && (r = t.value,
            t.delta = i,
            e(t)))
        }
    }
      , I7 = ()=>`v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`
      , A7 = ()=>{
        const e = W.performance.timing
          , t = W.performance.navigation.type
          , n = {
            entryType: "navigation",
            startTime: 0,
            type: t == 2 ? "back_forward" : t === 1 ? "reload" : "navigate"
        };
        for (const r in e)
            r !== "navigationStart" && r !== "toJSON" && (n[r] = Math.max(e[r] - e.navigationStart, 0));
        return n
    }
      , xm = ()=>W.__WEB_VITALS_POLYFILL__ ? W.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || A7()) : W.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
      , km = ()=>{
        const e = xm();
        return e && e.activationStart || 0
    }
      , ff = (e,t)=>{
        const n = xm();
        let r = "navigate";
        return n && (W.document.prerendering || km() > 0 ? r = "prerender" : r = n.type.replace(/_/g, "-")),
        {
            name: e,
            value: typeof t > "u" ? -1 : t,
            rating: "good",
            delta: 0,
            entries: [],
            id: I7(),
            navigationType: r
        }
    }
      , gs = (e,t,n)=>{
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                const r = new PerformanceObserver(i=>{
                    t(i.getEntries())
                }
                );
                return r.observe(Object.assign({
                    type: e,
                    buffered: !0
                }, n || {})),
                r
            }
        } catch {}
    }
      , xa = (e,t)=>{
        const n = r=>{
            (r.type === "pagehide" || W.document.visibilityState === "hidden") && (e(r),
            t && (removeEventListener("visibilitychange", n, !0),
            removeEventListener("pagehide", n, !0)))
        }
        ;
        addEventListener("visibilitychange", n, !0),
        addEventListener("pagehide", n, !0)
    }
      , M7 = e=>{
        const t = ff("CLS", 0);
        let n, r = 0, i = [];
        const s = a=>{
            a.forEach(l=>{
                if (!l.hadRecentInput) {
                    const u = i[0]
                      , c = i[i.length - 1];
                    r && i.length !== 0 && l.startTime - c.startTime < 1e3 && l.startTime - u.startTime < 5e3 ? (r += l.value,
                    i.push(l)) : (r = l.value,
                    i = [l]),
                    r > t.value && (t.value = r,
                    t.entries = i,
                    n && n())
                }
            }
            )
        }
          , o = gs("layout-shift", s);
        if (o) {
            n = cf(e, t);
            const a = ()=>{
                s(o.takeRecords()),
                n(!0)
            }
            ;
            return xa(a),
            a
        }
    }
    ;
    let lo = -1;
    const b7 = ()=>W.document.visibilityState === "hidden" && !W.document.prerendering ? 0 : 1 / 0
      , j7 = ()=>{
        xa(({timeStamp: e})=>{
            lo = e
        }
        , !0)
    }
      , df = ()=>(lo < 0 && (lo = b7(),
    j7()),
    {
        get firstHiddenTime() {
            return lo
        }
    })
      , L7 = e=>{
        const t = df()
          , n = ff("FID");
        let r;
        const i = a=>{
            a.startTime < t.firstHiddenTime && (n.value = a.processingStart - a.startTime,
            n.entries.push(a),
            r(!0))
        }
          , s = a=>{
            a.forEach(i)
        }
          , o = gs("first-input", s);
        r = cf(e, n),
        o && xa(()=>{
            s(o.takeRecords()),
            o.disconnect()
        }
        , !0)
    }
      , Np = {}
      , $7 = e=>{
        const t = df()
          , n = ff("LCP");
        let r;
        const i = o=>{
            const a = o[o.length - 1];
            if (a) {
                const l = Math.max(a.startTime - km(), 0);
                l < t.firstHiddenTime && (n.value = l,
                n.entries = [a],
                r())
            }
        }
          , s = gs("largest-contentful-paint", i);
        if (s) {
            r = cf(e, n);
            const o = ()=>{
                Np[n.id] || (i(s.takeRecords()),
                s.disconnect(),
                Np[n.id] = !0,
                r(!0))
            }
            ;
            return ["keydown", "click"].forEach(a=>{
                addEventListener(a, o, {
                    once: !0,
                    capture: !0
                })
            }
            ),
            xa(o, !0),
            o
        }
    }
    ;
    function El(e) {
        return typeof e == "number" && isFinite(e)
    }
    function Lr(e, {startTimestamp: t, ...n}) {
        return t && e.startTimestamp > t && (e.startTimestamp = t),
        e.startChild({
            startTimestamp: t,
            ...n
        })
    }
    function de(e) {
        return e / 1e3
    }
    function Rm() {
        return W && W.addEventListener && W.performance
    }
    let Pp = 0, ie = {}, wt, Ei;
    function B7() {
        const e = Rm();
        if (e && it) {
            e.mark && W.performance.mark("sentry-tracing-init"),
            G7();
            const t = z7()
              , n = V7();
            return ()=>{
                t && t(),
                n && n()
            }
        }
        return ()=>{}
    }
    function U7() {
        gs("longtask", t=>{
            for (const n of t) {
                const r = ms();
                if (!r)
                    return;
                const i = de(it + n.startTime)
                  , s = de(n.duration);
                r.startChild({
                    description: "Main UI thread blocked",
                    op: "ui.long-task",
                    startTimestamp: i,
                    endTimestamp: i + s
                })
            }
        }
        )
    }
    function F7() {
        gs("event", t=>{
            for (const n of t) {
                const r = ms();
                if (!r)
                    return;
                if (n.name === "click") {
                    const i = de(it + n.startTime)
                      , s = de(n.duration);
                    r.startChild({
                        description: Mr(n.target),
                        op: `ui.interaction.${n.name}`,
                        startTimestamp: i,
                        endTimestamp: i + s
                    })
                }
            }
        }
        , {
            durationThreshold: 0
        })
    }
    function z7() {
        return M7(e=>{
            const t = e.entries.pop();
            t && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Measurements] Adding CLS"),
            ie.cls = {
                value: e.value,
                unit: ""
            },
            Ei = t)
        }
        )
    }
    function V7() {
        return $7(e=>{
            const t = e.entries.pop();
            t && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Measurements] Adding LCP"),
            ie.lcp = {
                value: e.value,
                unit: "millisecond"
            },
            wt = t)
        }
        )
    }
    function G7() {
        L7(e=>{
            const t = e.entries.pop();
            if (!t)
                return;
            const n = de(it)
              , r = de(t.startTime);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Measurements] Adding FID"),
            ie.fid = {
                value: e.value,
                unit: "millisecond"
            },
            ie["mark.fid"] = {
                value: n + r,
                unit: "second"
            }
        }
        )
    }
    function H7(e) {
        const t = Rm();
        if (!t || !W.performance.getEntries || !it)
            return;
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Tracing] Adding & adjusting spans using Performance API");
        const n = de(it)
          , r = t.getEntries();
        let i, s;
        if (r.slice(Pp).forEach(o=>{
            const a = de(o.startTime)
              , l = de(o.duration);
            if (!(e.op === "navigation" && n + a < e.startTimestamp))
                switch (o.entryType) {
                case "navigation":
                    {
                        W7(e, o, n),
                        i = n + de(o.responseStart),
                        s = n + de(o.requestStart);
                        break
                    }
                case "mark":
                case "paint":
                case "measure":
                    {
                        Y7(e, o, a, l, n);
                        const u = df()
                          , c = o.startTime < u.firstHiddenTime;
                        o.name === "first-paint" && c && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Measurements] Adding FP"),
                        ie.fp = {
                            value: o.startTime,
                            unit: "millisecond"
                        }),
                        o.name === "first-contentful-paint" && c && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Measurements] Adding FCP"),
                        ie.fcp = {
                            value: o.startTime,
                            unit: "millisecond"
                        });
                        break
                    }
                case "resource":
                    {
                        const u = o.name.replace(W.location.origin, "");
                        K7(e, o, u, a, l, n);
                        break
                    }
                }
        }
        ),
        Pp = Math.max(r.length - 1, 0),
        X7(e),
        e.op === "pageload") {
            typeof i == "number" && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Measurements] Adding TTFB"),
            ie.ttfb = {
                value: (i - e.startTimestamp) * 1e3,
                unit: "millisecond"
            },
            typeof s == "number" && s <= i && (ie["ttfb.requestTime"] = {
                value: (i - s) * 1e3,
                unit: "millisecond"
            })),
            ["fcp", "fp", "lcp"].forEach(a=>{
                if (!ie[a] || n >= e.startTimestamp)
                    return;
                const l = ie[a].value
                  , u = n + de(l)
                  , c = Math.abs((u - e.startTimestamp) * 1e3)
                  , f = c - l;
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`[Measurements] Normalized ${a} from ${l} to ${c} (${f})`),
                ie[a].value = c
            }
            );
            const o = ie["mark.fid"];
            o && ie.fid && (Lr(e, {
                description: "first input delay",
                endTimestamp: o.value + de(ie.fid.value),
                op: "ui.action",
                startTimestamp: o.value
            }),
            delete ie["mark.fid"]),
            "fcp"in ie || delete ie.cls,
            Object.keys(ie).forEach(a=>{
                e.setMeasurement(a, ie[a].value, ie[a].unit)
            }
            ),
            Q7(e)
        }
        wt = void 0,
        Ei = void 0,
        ie = {}
    }
    function Y7(e, t, n, r, i) {
        const s = i + n
          , o = s + r;
        return Lr(e, {
            description: t.name,
            endTimestamp: o,
            op: t.entryType,
            startTimestamp: s
        }),
        s
    }
    function W7(e, t, n) {
        ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r=>{
            bs(e, t, r, n)
        }
        ),
        bs(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
        bs(e, t, "fetch", n, "cache", "domainLookupStart"),
        bs(e, t, "domainLookup", n, "DNS"),
        q7(e, t, n)
    }
    function bs(e, t, n, r, i, s) {
        const o = s ? t[s] : t[`${n}End`]
          , a = t[`${n}Start`];
        !a || !o || Lr(e, {
            op: "browser",
            description: i || n,
            startTimestamp: r + de(a),
            endTimestamp: r + de(o)
        })
    }
    function q7(e, t, n) {
        Lr(e, {
            op: "browser",
            description: "request",
            startTimestamp: n + de(t.requestStart),
            endTimestamp: n + de(t.responseEnd)
        }),
        Lr(e, {
            op: "browser",
            description: "response",
            startTimestamp: n + de(t.responseStart),
            endTimestamp: n + de(t.responseEnd)
        })
    }
    function K7(e, t, n, r, i, s) {
        if (t.initiatorType === "xmlhttprequest" || t.initiatorType === "fetch")
            return;
        const o = {};
        "transferSize"in t && (o["http.response_transfer_size"] = t.transferSize),
        "encodedBodySize"in t && (o["http.response_content_length"] = t.encodedBodySize),
        "decodedBodySize"in t && (o["http.decoded_response_content_length"] = t.decodedBodySize),
        "renderBlockingStatus"in t && (o["resource.render_blocking_status"] = t.renderBlockingStatus);
        const a = s + r
          , l = a + i;
        Lr(e, {
            description: n,
            endTimestamp: l,
            op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
            startTimestamp: a,
            data: o
        })
    }
    function X7(e) {
        const t = W.navigator;
        if (!t)
            return;
        const n = t.connection;
        n && (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType),
        n.type && e.setTag("connectionType", n.type),
        El(n.rtt) && (ie["connection.rtt"] = {
            value: n.rtt,
            unit: "millisecond"
        })),
        El(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`),
        El(t.hardwareConcurrency) && e.setTag("hardwareConcurrency", String(t.hardwareConcurrency))
    }
    function Q7(e) {
        wt && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Measurements] Adding LCP Data"),
        wt.element && e.setTag("lcp.element", Mr(wt.element)),
        wt.id && e.setTag("lcp.id", wt.id),
        wt.url && e.setTag("lcp.url", wt.url.trim().slice(0, 200)),
        e.setTag("lcp.size", wt.size)),
        Ei && Ei.sources && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log("[Measurements] Adding CLS Data"),
        Ei.sources.forEach((t,n)=>e.setTag(`cls.source.${n + 1}`, Mr(t.node))))
    }
    const Ru = ["localhost", /^\/(?!\/)/]
      , Cu = {
        traceFetch: !0,
        traceXHR: !0,
        tracingOrigins: Ru,
        tracePropagationTargets: Ru,
        _experiments: {}
    };
    function J7(e) {
        const {traceFetch: t, traceXHR: n, tracePropagationTargets: r, tracingOrigins: i, shouldCreateSpanForRequest: s, _experiments: o} = {
            traceFetch: Cu.traceFetch,
            traceXHR: Cu.traceXHR,
            ...e
        }
          , a = typeof s == "function" ? s : c=>!0
          , l = c=>e9(c, r || i)
          , u = {};
        t && Ye("fetch", c=>{
            const f = t9(c, a, l, u);
            Cp([o, "optionalAccess", d=>d.enableHTTPTimings]) && f && Dp(f)
        }
        ),
        n && Ye("xhr", c=>{
            const f = r9(c, a, l, u);
            Cp([o, "optionalAccess", d=>d.enableHTTPTimings]) && f && Dp(f)
        }
        )
    }
    function Dp(e) {
        const t = e.data.url
          , n = new PerformanceObserver(r=>{
            r.getEntries().forEach(s=>{
                (s.initiatorType === "fetch" || s.initiatorType === "xmlhttprequest") && s.name.endsWith(t) && (Z7(s).forEach(a=>e.setData(...a)),
                n.disconnect())
            }
            )
        }
        );
        n.observe({
            entryTypes: ["resource"]
        })
    }
    function Z7(e) {
        const t = e.nextHopProtocol.split("/")[1] || "none"
          , n = [];
        return t && n.push(["network.protocol.version", t]),
        it ? [...n, ["http.request.connect_start", (it + e.connectStart) / 1e3], ["http.request.request_start", (it + e.requestStart) / 1e3], ["http.request.response_start", (it + e.responseStart) / 1e3]] : n
    }
    function e9(e, t) {
        return ps(e, t || Ru)
    }
    function t9(e, t, n, r) {
        if (!of() || !e.fetchData)
            return;
        const i = t(e.fetchData.url);
        if (e.endTimestamp && i) {
            const d = e.fetchData.__span;
            if (!d)
                return;
            const h = r[d];
            if (h) {
                if (e.response) {
                    h.setHttpStatus(e.response.status);
                    const _ = e.response && e.response.headers && e.response.headers.get("content-length")
                      , v = parseInt(_);
                    v > 0 && h.setData("http.response_content_length", v)
                } else
                    e.error && h.setStatus("internal_error");
                h.finish(),
                delete r[d]
            }
            return
        }
        const s = ee()
          , o = s.getScope()
          , a = s.getClient()
          , l = o.getSpan()
          , {method: u, url: c} = e.fetchData
          , f = i && l ? l.startChild({
            data: {
                url: c,
                type: "fetch",
                "http.method": u
            },
            description: `${u} ${c}`,
            op: "http.client"
        }) : void 0;
        if (f && (e.fetchData.__span = f.spanId,
        r[f.spanId] = f),
        n(e.fetchData.url) && a) {
            const d = e.args[0];
            e.args[1] = e.args[1] || {};
            const h = e.args[1];
            h.headers = n9(d, a, o, h)
        }
        return f
    }
    function n9(e, t, n, r) {
        const i = n.getSpan()
          , s = i && i.transaction
          , {traceId: o, sampled: a, dsc: l} = n.getPropagationContext()
          , u = i ? i.toTraceparent() : rf(o, void 0, a)
          , c = s ? s.getDynamicSamplingContext() : l || wa(o, t, n)
          , f = Su(c)
          , d = typeof Request < "u" && $t(e, Request) ? e.headers : r.headers;
        if (d)
            if (typeof Headers < "u" && $t(d, Headers)) {
                const h = new Headers(d);
                return h.append("sentry-trace", u),
                f && h.append(vu, f),
                h
            } else if (Array.isArray(d)) {
                const h = [...d, ["sentry-trace", u]];
                return f && h.push([vu, f]),
                h
            } else {
                const h = "baggage"in d ? d.baggage : void 0
                  , _ = [];
                return Array.isArray(h) ? _.push(...h) : h && _.push(h),
                f && _.push(f),
                {
                    ...d,
                    "sentry-trace": u,
                    baggage: _.length > 0 ? _.join(",") : void 0
                }
            }
        else
            return {
                "sentry-trace": u,
                baggage: f
            }
    }
    function r9(e, t, n, r) {
        const i = e.xhr
          , s = i && i[ir];
        if (!of() || i && i.__sentry_own_request__ || !i || !s)
            return;
        const o = t(s.url);
        if (e.endTimestamp && o) {
            const f = i.__sentry_xhr_span_id__;
            if (!f)
                return;
            const d = r[f];
            d && (d.setHttpStatus(s.status_code),
            d.finish(),
            delete r[f]);
            return
        }
        const a = ee()
          , l = a.getScope()
          , u = l.getSpan()
          , c = o && u ? u.startChild({
            data: {
                ...s.data,
                type: "xhr",
                "http.method": s.method,
                url: s.url
            },
            description: `${s.method} ${s.url}`,
            op: "http.client"
        }) : void 0;
        if (c && (i.__sentry_xhr_span_id__ = c.spanId,
        r[i.__sentry_xhr_span_id__] = c),
        i.setRequestHeader && n(s.url))
            if (c) {
                const f = c && c.transaction
                  , d = f && f.getDynamicSamplingContext()
                  , h = Su(d);
                Op(i, c.toTraceparent(), h)
            } else {
                const f = a.getClient()
                  , {traceId: d, sampled: h, dsc: _} = l.getPropagationContext()
                  , v = rf(d, void 0, h)
                  , E = _ || (f ? wa(d, f, l) : void 0)
                  , m = Su(E);
                Op(i, v, m)
            }
        return c
    }
    function Op(e, t, n) {
        try {
            e.setRequestHeader("sentry-trace", t),
            n && e.setRequestHeader(vu, n)
        } catch {}
    }
    function i9(e, t=!0, n=!0) {
        if (!W || !W.location) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn("Could not initialize routing instrumentation due to invalid location");
            return
        }
        let r = W.location.href, i;
        t && (i = e({
            name: W.location.pathname,
            startTimestamp: it ? it / 1e3 : void 0,
            op: "pageload",
            metadata: {
                source: "url"
            }
        })),
        n && Ye("history", ({to: s, from: o})=>{
            if (o === void 0 && r && r.indexOf(s) !== -1) {
                r = void 0;
                return
            }
            o !== s && (r = void 0,
            i && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`[Tracing] Finishing current transaction with op: ${i.op}`),
            i.finish()),
            i = e({
                name: W.location.pathname,
                op: "navigation",
                metadata: {
                    source: "url"
                }
            }))
        }
        )
    }
    const s9 = "BrowserTracing"
      , o9 = {
        ...ao,
        markBackgroundTransactions: !0,
        routingInstrumentation: i9,
        startTransactionOnLocationChange: !0,
        startTransactionOnPageLoad: !0,
        enableLongTask: !0,
        ...Cu
    };
    let a9 = class Nu {
        __init() {
            this.name = s9
        }
        __init2() {
            this._hasSetTracePropagationTargets = !1
        }
        constructor(t) {
            Nu.prototype.__init.call(this),
            Nu.prototype.__init2.call(this),
            am(),
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && (this._hasSetTracePropagationTargets = !!(t && (t.tracePropagationTargets || t.tracingOrigins))),
            this.options = {
                ...o9,
                ...t
            },
            this.options._experiments.enableLongTask !== void 0 && (this.options.enableLongTask = this.options._experiments.enableLongTask),
            t && !t.tracePropagationTargets && t.tracingOrigins && (this.options.tracePropagationTargets = t.tracingOrigins),
            this._collectWebVitals = B7(),
            this.options.enableLongTask && U7(),
            this.options._experiments.enableInteractions && F7()
        }
        setupOnce(t, n) {
            this._getCurrentHub = n;
            const i = n().getClient()
              , s = i && i.getOptions()
              , {routingInstrumentation: o, startTransactionOnLocationChange: a, startTransactionOnPageLoad: l, markBackgroundTransactions: u, traceFetch: c, traceXHR: f, shouldCreateSpanForRequest: d, _experiments: h} = this.options
              , _ = s && s.tracePropagationTargets
              , v = _ || this.options.tracePropagationTargets;
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && this._hasSetTracePropagationTargets && _ && T.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."),
            o(E=>{
                const m = this._createRouteTransaction(E);
                return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(m, E, n),
                m
            }
            , l, a),
            u && O7(),
            h.enableInteractions && this._registerInteractionListener(),
            J7({
                traceFetch: c,
                traceXHR: f,
                tracePropagationTargets: v,
                shouldCreateSpanForRequest: d,
                _experiments: {
                    enableHTTPTimings: h.enableHTTPTimings
                }
            })
        }
        _createRouteTransaction(t) {
            if (!this._getCurrentHub) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`);
                return
            }
            const n = this._getCurrentHub()
              , {beforeNavigate: r, idleTimeout: i, finalTimeout: s, heartbeatInterval: o} = this.options
              , a = t.op === "pageload"
              , l = a ? Ip("sentry-trace") : ""
              , u = a ? Ip("baggage") : ""
              , {traceparentData: c, dynamicSamplingContext: f, propagationContext: d} = TE(l, u)
              , h = {
                ...t,
                ...c,
                metadata: {
                    ...t.metadata,
                    dynamicSamplingContext: c && !f ? {} : f
                },
                trimEnd: !0
            }
              , _ = typeof r == "function" ? r(h) : h
              , v = _ === void 0 ? {
                ...h,
                sampled: !1
            } : _;
            v.metadata = v.name !== h.name ? {
                ...v.metadata,
                source: "custom"
            } : v.metadata,
            this._latestRouteName = v.name,
            this._latestRouteSource = v.metadata && v.metadata.source,
            v.sampled === !1 && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`[Tracing] Will not send ${v.op} transaction because of beforeNavigate.`),
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.log(`[Tracing] Starting ${v.op} transaction on scope`);
            const {location: E} = W
              , m = gp(n, v, i, s, !0, {
                location: E
            }, o)
              , p = n.getScope();
            return a && c ? p.setPropagationContext(d) : p.setPropagationContext({
                traceId: m.traceId,
                spanId: m.spanId,
                parentSpanId: m.parentSpanId,
                sampled: !!m.sampled
            }),
            m.registerBeforeFinishCallback(g=>{
                this._collectWebVitals(),
                H7(g)
            }
            ),
            m
        }
        _registerInteractionListener() {
            let t;
            const n = ()=>{
                const {idleTimeout: r, finalTimeout: i, heartbeatInterval: s} = this.options
                  , o = "ui.action.click"
                  , a = ms();
                if (a && a.op && ["navigation", "pageload"].includes(a.op)) {
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`);
                    return
                }
                if (t && (t.setFinishReason("interactionInterrupted"),
                t.finish(),
                t = void 0),
                !this._getCurrentHub) {
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`);
                    return
                }
                if (!this._latestRouteName) {
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`);
                    return
                }
                const l = this._getCurrentHub()
                  , {location: u} = W
                  , c = {
                    name: this._latestRouteName,
                    op: o,
                    trimEnd: !0,
                    metadata: {
                        source: this._latestRouteSource || "url"
                    }
                };
                t = gp(l, c, r, i, !0, {
                    location: u
                }, s)
            }
            ;
            ["click"].forEach(r=>{
                addEventListener(r, n, {
                    once: !1,
                    capture: !0
                })
            }
            )
        }
    }
    ;
    function Ip(e) {
        const t = AS(`meta[name=${e}]`);
        return t ? t.getAttribute("content") : void 0
    }
    function l9() {
        const e = Xr();
        if (!e.__SENTRY__)
            return;
        const t = {
            mongodb() {
                const r = en(bt, "./node/integrations/mongo");
                return new r.Mongo
            },
            mongoose() {
                const r = en(bt, "./node/integrations/mongo");
                return new r.Mongo
            },
            mysql() {
                const r = en(bt, "./node/integrations/mysql");
                return new r.Mysql
            },
            pg() {
                const r = en(bt, "./node/integrations/postgres");
                return new r.Postgres
            }
        }
          , n = Object.keys(t).filter(r=>!!aE(r)).map(r=>{
            try {
                return t[r]()
            } catch {
                return
            }
        }
        ).filter(r=>r);
        n.length > 0 && (e.__SENTRY__.integrations = [...e.__SENTRY__.integrations || [], ...n])
    }
    function u9() {
        am(),
        X0() && l9()
    }
    function c9(e) {
        e._metadata = e._metadata || {},
        e._metadata.sdk = e._metadata.sdk || {
            name: "sentry.javascript.react",
            packages: [{
                name: "npm:@sentry/react",
                version: Io
            }],
            version: Io
        },
        P7(e)
    }
    var Cm = {
        exports: {}
    }
      , Y = {};
    /** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
    var ye = typeof Symbol == "function" && Symbol.for
      , pf = ye ? Symbol.for("react.element") : 60103
      , hf = ye ? Symbol.for("react.portal") : 60106
      , ka = ye ? Symbol.for("react.fragment") : 60107
      , Ra = ye ? Symbol.for("react.strict_mode") : 60108
      , Ca = ye ? Symbol.for("react.profiler") : 60114
      , Na = ye ? Symbol.for("react.provider") : 60109
      , Pa = ye ? Symbol.for("react.context") : 60110
      , mf = ye ? Symbol.for("react.async_mode") : 60111
      , Da = ye ? Symbol.for("react.concurrent_mode") : 60111
      , Oa = ye ? Symbol.for("react.forward_ref") : 60112
      , Ia = ye ? Symbol.for("react.suspense") : 60113
      , f9 = ye ? Symbol.for("react.suspense_list") : 60120
      , Aa = ye ? Symbol.for("react.memo") : 60115
      , Ma = ye ? Symbol.for("react.lazy") : 60116
      , d9 = ye ? Symbol.for("react.block") : 60121
      , p9 = ye ? Symbol.for("react.fundamental") : 60117
      , h9 = ye ? Symbol.for("react.responder") : 60118
      , m9 = ye ? Symbol.for("react.scope") : 60119;
    function Je(e) {
        if (typeof e == "object" && e !== null) {
            var t = e.$$typeof;
            switch (t) {
            case pf:
                switch (e = e.type,
                e) {
                case mf:
                case Da:
                case ka:
                case Ca:
                case Ra:
                case Ia:
                    return e;
                default:
                    switch (e = e && e.$$typeof,
                    e) {
                    case Pa:
                    case Oa:
                    case Ma:
                    case Aa:
                    case Na:
                        return e;
                    default:
                        return t
                    }
                }
            case hf:
                return t
            }
        }
    }
    function Nm(e) {
        return Je(e) === Da
    }
    Y.AsyncMode = mf;
    Y.ConcurrentMode = Da;
    Y.ContextConsumer = Pa;
    Y.ContextProvider = Na;
    Y.Element = pf;
    Y.ForwardRef = Oa;
    Y.Fragment = ka;
    Y.Lazy = Ma;
    Y.Memo = Aa;
    Y.Portal = hf;
    Y.Profiler = Ca;
    Y.StrictMode = Ra;
    Y.Suspense = Ia;
    Y.isAsyncMode = function(e) {
        return Nm(e) || Je(e) === mf
    }
    ;
    Y.isConcurrentMode = Nm;
    Y.isContextConsumer = function(e) {
        return Je(e) === Pa
    }
    ;
    Y.isContextProvider = function(e) {
        return Je(e) === Na
    }
    ;
    Y.isElement = function(e) {
        return typeof e == "object" && e !== null && e.$$typeof === pf
    }
    ;
    Y.isForwardRef = function(e) {
        return Je(e) === Oa
    }
    ;
    Y.isFragment = function(e) {
        return Je(e) === ka
    }
    ;
    Y.isLazy = function(e) {
        return Je(e) === Ma
    }
    ;
    Y.isMemo = function(e) {
        return Je(e) === Aa
    }
    ;
    Y.isPortal = function(e) {
        return Je(e) === hf
    }
    ;
    Y.isProfiler = function(e) {
        return Je(e) === Ca
    }
    ;
    Y.isStrictMode = function(e) {
        return Je(e) === Ra
    }
    ;
    Y.isSuspense = function(e) {
        return Je(e) === Ia
    }
    ;
    Y.isValidElementType = function(e) {
        return typeof e == "string" || typeof e == "function" || e === ka || e === Da || e === Ca || e === Ra || e === Ia || e === f9 || typeof e == "object" && e !== null && (e.$$typeof === Ma || e.$$typeof === Aa || e.$$typeof === Na || e.$$typeof === Pa || e.$$typeof === Oa || e.$$typeof === p9 || e.$$typeof === h9 || e.$$typeof === m9 || e.$$typeof === d9)
    }
    ;
    Y.typeOf = Je;
    Cm.exports = Y;
    var g9 = Cm.exports
      , Pm = g9
      , _9 = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    }
      , y9 = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    }
      , Dm = {};
    Dm[Pm.ForwardRef] = _9;
    Dm[Pm.Memo] = y9;
    function v9(e) {
        const t = e.match(/^([^.]+)/);
        return t !== null && parseInt(t[0]) >= 17
    }
    const Ap = {
        componentStack: null,
        error: null,
        eventId: null
    };
    function S9(e, t) {
        const n = new WeakMap;
        function r(i, s) {
            if (!n.has(i)) {
                if (i.cause)
                    return n.set(i, !0),
                    r(i.cause, s);
                i.cause = s
            }
        }
        r(e, t)
    }
    class wi extends C.Component {
        __init() {
            this.state = Ap
        }
        __init2() {
            this._openFallbackReportDialog = !0
        }
        constructor(t) {
            super(t),
            wi.prototype.__init.call(this),
            wi.prototype.__init2.call(this),
            wi.prototype.__init3.call(this);
            const n = ee().getClient();
            n && n.on && t.showDialog && (this._openFallbackReportDialog = !1,
            n.on("afterSendEvent", r=>{
                !r.type && r.event_id === this._lastEventId && kp({
                    ...t.dialogOptions,
                    eventId: this._lastEventId
                })
            }
            ))
        }
        componentDidCatch(t, {componentStack: n}) {
            const {beforeCapture: r, onError: i, showDialog: s, dialogOptions: o} = this.props;
            um(a=>{
                if (v9(C.version) && Qc(t)) {
                    const u = new Error(t.message);
                    u.name = `React ErrorBoundary ${u.name}`,
                    u.stack = n,
                    S9(t, u)
                }
                r && r(a, t, n);
                const l = lm(t, {
                    contexts: {
                        react: {
                            componentStack: n
                        }
                    }
                });
                i && i(t, n, l),
                s && (this._lastEventId = l,
                this._openFallbackReportDialog && kp({
                    ...o,
                    eventId: l
                })),
                this.setState({
                    error: t,
                    componentStack: n,
                    eventId: l
                })
            }
            )
        }
        componentDidMount() {
            const {onMount: t} = this.props;
            t && t()
        }
        componentWillUnmount() {
            const {error: t, componentStack: n, eventId: r} = this.state
              , {onUnmount: i} = this.props;
            i && i(t, n, r)
        }
        __init3() {
            this.resetErrorBoundary = ()=>{
                const {onReset: t} = this.props
                  , {error: n, componentStack: r, eventId: i} = this.state;
                t && t(n, r, i),
                this.setState(Ap)
            }
        }
        render() {
            const {fallback: t, children: n} = this.props
              , r = this.state;
            if (r.error) {
                let i;
                return typeof t == "function" ? i = t({
                    error: r.error,
                    componentStack: r.componentStack,
                    resetError: this.resetErrorBoundary,
                    eventId: r.eventId
                }) : i = t,
                C.isValidElement(i) ? i : (t && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && T.warn("fallback did not produce a valid ReactElement"),
                null)
            }
            return typeof n == "function" ? n() : n
        }
    }
    function E9() {
        xS();
        const e = vS("(max-width: 640px)")
          , t = Ic(r=>r.loadCounts)
          , n = Oc(r=>r.loadExperiments);
        return Le.useEffect(()=>{
            t(),
            n()
        }
        , [t, n]),
        y.jsx(wi, {
            fallback: c3,
            children: y.jsx(hS, {
                reducedMotion: "user",
                children: y.jsx(mS, {
                    features: gS,
                    children: y.jsxs("div", {
                        className: i3.app,
                        children: [y.jsx(U3, {
                            active: e ? 32 : 160
                        }), y.jsx(TS, {}), y.jsx(w3, {}), y.jsx(_3, {}), y.jsx(I3, {})]
                    })
                })
            })
        })
    }
    const w9 = a9;
    (typeof __SENTRY_TRACING__ > "u" || __SENTRY_TRACING__) && u9();
    var Pu = {}
      , Om = {
        exports: {}
    }
      , Ze = {}
      , Im = {
        exports: {}
    }
      , Am = {};
    /**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
    (function(e) {
        function t(D, j) {
            var L = D.length;
            D.push(j);
            e: for (; 0 < L; ) {
                var b = L - 1 >>> 1
                  , Q = D[b];
                if (0 < i(Q, j))
                    D[b] = j,
                    D[L] = Q,
                    L = b;
                else
                    break e
            }
        }
        function n(D) {
            return D.length === 0 ? null : D[0]
        }
        function r(D) {
            if (D.length === 0)
                return null;
            var j = D[0]
              , L = D.pop();
            if (L !== j) {
                D[0] = L;
                e: for (var b = 0, Q = D.length, wn = Q >>> 1; b < wn; ) {
                    var St = 2 * (b + 1) - 1
                      , Qn = D[St]
                      , Ge = St + 1
                      , Tn = D[Ge];
                    if (0 > i(Qn, L))
                        Ge < Q && 0 > i(Tn, Qn) ? (D[b] = Tn,
                        D[Ge] = L,
                        b = Ge) : (D[b] = Qn,
                        D[St] = L,
                        b = St);
                    else if (Ge < Q && 0 > i(Tn, L))
                        D[b] = Tn,
                        D[Ge] = L,
                        b = Ge;
                    else
                        break e
                }
            }
            return j
        }
        function i(D, j) {
            var L = D.sortIndex - j.sortIndex;
            return L !== 0 ? L : D.id - j.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var s = performance;
            e.unstable_now = function() {
                return s.now()
            }
        } else {
            var o = Date
              , a = o.now();
            e.unstable_now = function() {
                return o.now() - a
            }
        }
        var l = []
          , u = []
          , c = 1
          , f = null
          , d = 3
          , h = !1
          , _ = !1
          , v = !1
          , E = typeof setTimeout == "function" ? setTimeout : null
          , m = typeof clearTimeout == "function" ? clearTimeout : null
          , p = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function g(D) {
            for (var j = n(u); j !== null; ) {
                if (j.callback === null)
                    r(u);
                else if (j.startTime <= D)
                    r(u),
                    j.sortIndex = j.expirationTime,
                    t(l, j);
                else
                    break;
                j = n(u)
            }
        }
        function S(D) {
            if (v = !1,
            g(D),
            !_)
                if (n(l) !== null)
                    _ = !0,
                    tt(x);
                else {
                    var j = n(u);
                    j !== null && vt(S, j.startTime - D)
                }
        }
        function x(D, j) {
            _ = !1,
            v && (v = !1,
            m(R),
            R = -1),
            h = !0;
            var L = d;
            try {
                for (g(j),
                f = n(l); f !== null && (!(f.expirationTime > j) || D && !oe()); ) {
                    var b = f.callback;
                    if (typeof b == "function") {
                        f.callback = null,
                        d = f.priorityLevel;
                        var Q = b(f.expirationTime <= j);
                        j = e.unstable_now(),
                        typeof Q == "function" ? f.callback = Q : f === n(l) && r(l),
                        g(j)
                    } else
                        r(l);
                    f = n(l)
                }
                if (f !== null)
                    var wn = !0;
                else {
                    var St = n(u);
                    St !== null && vt(S, St.startTime - j),
                    wn = !1
                }
                return wn
            } finally {
                f = null,
                d = L,
                h = !1
            }
        }
        var P = !1
          , N = null
          , R = -1
          , A = 5
          , M = -1;
        function oe() {
            return !(e.unstable_now() - M < A)
        }
        function Me() {
            if (N !== null) {
                var D = e.unstable_now();
                M = D;
                var j = !0;
                try {
                    j = N(!0, D)
                } finally {
                    j ? be() : (P = !1,
                    N = null)
                }
            } else
                P = !1
        }
        var be;
        if (typeof p == "function")
            be = function() {
                p(Me)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var ae = new MessageChannel
              , le = ae.port2;
            ae.port1.onmessage = Me,
            be = function() {
                le.postMessage(null)
            }
        } else
            be = function() {
                E(Me, 0)
            }
            ;
        function tt(D) {
            N = D,
            P || (P = !0,
            be())
        }
        function vt(D, j) {
            R = E(function() {
                D(e.unstable_now())
            }, j)
        }
        e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function(D) {
            D.callback = null
        }
        ,
        e.unstable_continueExecution = function() {
            _ || h || (_ = !0,
            tt(x))
        }
        ,
        e.unstable_forceFrameRate = function(D) {
            0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < D ? Math.floor(1e3 / D) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function() {
            return d
        }
        ,
        e.unstable_getFirstCallbackNode = function() {
            return n(l)
        }
        ,
        e.unstable_next = function(D) {
            switch (d) {
            case 1:
            case 2:
            case 3:
                var j = 3;
                break;
            default:
                j = d
            }
            var L = d;
            d = j;
            try {
                return D()
            } finally {
                d = L
            }
        }
        ,
        e.unstable_pauseExecution = function() {}
        ,
        e.unstable_requestPaint = function() {}
        ,
        e.unstable_runWithPriority = function(D, j) {
            switch (D) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                D = 3
            }
            var L = d;
            d = D;
            try {
                return j()
            } finally {
                d = L
            }
        }
        ,
        e.unstable_scheduleCallback = function(D, j, L) {
            var b = e.unstable_now();
            switch (typeof L == "object" && L !== null ? (L = L.delay,
            L = typeof L == "number" && 0 < L ? b + L : b) : L = b,
            D) {
            case 1:
                var Q = -1;
                break;
            case 2:
                Q = 250;
                break;
            case 5:
                Q = 1073741823;
                break;
            case 4:
                Q = 1e4;
                break;
            default:
                Q = 5e3
            }
            return Q = L + Q,
            D = {
                id: c++,
                callback: j,
                priorityLevel: D,
                startTime: L,
                expirationTime: Q,
                sortIndex: -1
            },
            L > b ? (D.sortIndex = L,
            t(u, D),
            n(l) === null && D === n(u) && (v ? (m(R),
            R = -1) : v = !0,
            vt(S, L - b))) : (D.sortIndex = Q,
            t(l, D),
            _ || h || (_ = !0,
            tt(x))),
            D
        }
        ,
        e.unstable_shouldYield = oe,
        e.unstable_wrapCallback = function(D) {
            var j = d;
            return function() {
                var L = d;
                d = j;
                try {
                    return D.apply(this, arguments)
                } finally {
                    d = L
                }
            }
        }
    }
    )(Am);
    Im.exports = Am;
    var T9 = Im.exports;
    /**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
    var Mm = C
      , Qe = T9;
    function k(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var bm = new Set
      , Fi = {};
    function Kn(e, t) {
        $r(e, t),
        $r(e + "Capture", t)
    }
    function $r(e, t) {
        for (Fi[e] = t,
        e = 0; e < t.length; e++)
            bm.add(t[e])
    }
    var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Du = Object.prototype.hasOwnProperty
      , x9 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , Mp = {}
      , bp = {};
    function k9(e) {
        return Du.call(bp, e) ? !0 : Du.call(Mp, e) ? !1 : x9.test(e) ? bp[e] = !0 : (Mp[e] = !0,
        !1)
    }
    function R9(e, t, n, r) {
        if (n !== null && n.type === 0)
            return !1;
        switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
            e !== "data-" && e !== "aria-");
        default:
            return !1
        }
    }
    function C9(e, t, n, r) {
        if (t === null || typeof t > "u" || R9(e, t, n, r))
            return !0;
        if (r)
            return !1;
        if (n !== null)
            switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
            }
        return !1
    }
    function Ae(e, t, n, r, i, s, o) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = r,
        this.attributeNamespace = i,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = s,
        this.removeEmptyString = o
    }
    var we = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        we[e] = new Ae(e,0,!1,e,null,!1,!1)
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
        var t = e[0];
        we[t] = new Ae(t,1,!1,e[1],null,!1,!1)
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        we[e] = new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        we[e] = new Ae(e,2,!1,e,null,!1,!1)
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        we[e] = new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        we[e] = new Ae(e,3,!0,e,null,!1,!1)
    });
    ["capture", "download"].forEach(function(e) {
        we[e] = new Ae(e,4,!1,e,null,!1,!1)
    });
    ["cols", "rows", "size", "span"].forEach(function(e) {
        we[e] = new Ae(e,6,!1,e,null,!1,!1)
    });
    ["rowSpan", "start"].forEach(function(e) {
        we[e] = new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)
    });
    var gf = /[\-:]([a-z])/g;
    function _f(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(gf, _f);
        we[t] = new Ae(t,1,!1,e,null,!1,!1)
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(gf, _f);
        we[t] = new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(gf, _f);
        we[t] = new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
    });
    ["tabIndex", "crossOrigin"].forEach(function(e) {
        we[e] = new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)
    });
    we.xlinkHref = new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
    ["src", "href", "action", "formAction"].forEach(function(e) {
        we[e] = new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)
    });
    function yf(e, t, n, r) {
        var i = we.hasOwnProperty(t) ? we[t] : null;
        (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (C9(t, n, i, r) && (n = null),
        r || i === null ? k9(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
        r = i.attributeNamespace,
        n === null ? e.removeAttribute(t) : (i = i.type,
        n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
        r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }
    var Vt = Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , js = Symbol.for("react.element")
      , sr = Symbol.for("react.portal")
      , or = Symbol.for("react.fragment")
      , vf = Symbol.for("react.strict_mode")
      , Ou = Symbol.for("react.profiler")
      , jm = Symbol.for("react.provider")
      , Lm = Symbol.for("react.context")
      , Sf = Symbol.for("react.forward_ref")
      , Iu = Symbol.for("react.suspense")
      , Au = Symbol.for("react.suspense_list")
      , Ef = Symbol.for("react.memo")
      , Kt = Symbol.for("react.lazy")
      , $m = Symbol.for("react.offscreen")
      , jp = Symbol.iterator;
    function ri(e) {
        return e === null || typeof e != "object" ? null : (e = jp && e[jp] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var re = Object.assign, wl;
    function pi(e) {
        if (wl === void 0)
            try {
                throw Error()
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                wl = t && t[1] || ""
            }
        return `
` + wl + e
    }
    var Tl = !1;
    function xl(e, t) {
        if (!e || Tl)
            return "";
        Tl = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (u) {
                        var r = u
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (u) {
                        r = u
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (u) {
                    r = u
                }
                e()
            }
        } catch (u) {
            if (u && r && typeof u.stack == "string") {
                for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a]; )
                    a--;
                for (; 1 <= o && 0 <= a; o--,
                a--)
                    if (i[o] !== s[a]) {
                        if (o !== 1 || a !== 1)
                            do
                                if (o--,
                                a--,
                                0 > a || i[o] !== s[a]) {
                                    var l = `
` + i[o].replace(" at new ", " at ");
                                    return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                    l
                                }
                            while (1 <= o && 0 <= a);
                        break
                    }
            }
        } finally {
            Tl = !1,
            Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? pi(e) : ""
    }
    function N9(e) {
        switch (e.tag) {
        case 5:
            return pi(e.type);
        case 16:
            return pi("Lazy");
        case 13:
            return pi("Suspense");
        case 19:
            return pi("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = xl(e.type, !1),
            e;
        case 11:
            return e = xl(e.type.render, !1),
            e;
        case 1:
            return e = xl(e.type, !0),
            e;
        default:
            return ""
        }
    }
    function Mu(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case or:
            return "Fragment";
        case sr:
            return "Portal";
        case Ou:
            return "Profiler";
        case vf:
            return "StrictMode";
        case Iu:
            return "Suspense";
        case Au:
            return "SuspenseList"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case Lm:
                return (e.displayName || "Context") + ".Consumer";
            case jm:
                return (e._context.displayName || "Context") + ".Provider";
            case Sf:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case Ef:
                return t = e.displayName || null,
                t !== null ? t : Mu(e.type) || "Memo";
            case Kt:
                t = e._payload,
                e = e._init;
                try {
                    return Mu(e(t))
                } catch {}
            }
        return null
    }
    function P9(e) {
        var t = e.type;
        switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
            e = e.displayName || e.name || "",
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Mu(t);
        case 8:
            return t === vf ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
        }
        return null
    }
    function _n(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function Bm(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function D9(e) {
        var t = Bm(e) ? "checked" : "value"
          , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var i = n.get
              , s = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return i.call(this)
                },
                set: function(o) {
                    r = "" + o,
                    s.call(this, o)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
            {
                getValue: function() {
                    return r
                },
                setValue: function(o) {
                    r = "" + o
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Ls(e) {
        e._valueTracker || (e._valueTracker = D9(e))
    }
    function Um(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
          , r = "";
        return e && (r = Bm(e) ? e.checked ? "true" : "false" : e.value),
        e = r,
        e !== n ? (t.setValue(e),
        !0) : !1
    }
    function Mo(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    function bu(e, t) {
        var n = t.checked;
        return re({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        })
    }
    function Lp(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue
          , r = t.checked != null ? t.checked : t.defaultChecked;
        n = _n(t.value != null ? t.value : n),
        e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }
    function Fm(e, t) {
        t = t.checked,
        t != null && yf(e, "checked", t, !1)
    }
    function ju(e, t) {
        Fm(e, t);
        var n = _n(t.value)
          , r = t.type;
        if (n != null)
            r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? Lu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Lu(e, t.type, _n(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }
    function $p(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
                return;
            t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        n = e.name,
        n !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        n !== "" && (e.name = n)
    }
    function Lu(e, t, n) {
        (t !== "number" || Mo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    var hi = Array.isArray;
    function Tr(e, t, n, r) {
        if (e = e.options,
        t) {
            t = {};
            for (var i = 0; i < n.length; i++)
                t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
                i = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + _n(n),
            t = null,
            i = 0; i < e.length; i++) {
                if (e[i].value === n) {
                    e[i].selected = !0,
                    r && (e[i].defaultSelected = !0);
                    return
                }
                t !== null || e[i].disabled || (t = e[i])
            }
            t !== null && (t.selected = !0)
        }
    }
    function $u(e, t) {
        if (t.dangerouslySetInnerHTML != null)
            throw Error(k(91));
        return re({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }
    function Bp(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children,
            t = t.defaultValue,
            n != null) {
                if (t != null)
                    throw Error(k(92));
                if (hi(n)) {
                    if (1 < n.length)
                        throw Error(k(93));
                    n = n[0]
                }
                t = n
            }
            t == null && (t = ""),
            n = t
        }
        e._wrapperState = {
            initialValue: _n(n)
        }
    }
    function zm(e, t) {
        var n = _n(t.value)
          , r = _n(t.defaultValue);
        n != null && (n = "" + n,
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r)
    }
    function Up(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }
    function Vm(e) {
        switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function Bu(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Vm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var $s, Gm = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, i)
            })
        }
        : e
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
            e.innerHTML = t;
        else {
            for ($s = $s || document.createElement("div"),
            $s.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = $s.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; t.firstChild; )
                e.appendChild(t.firstChild)
        }
    });
    function zi(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Ti = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , O9 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ti).forEach(function(e) {
        O9.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1),
            Ti[t] = Ti[e]
        })
    });
    function Hm(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ti.hasOwnProperty(e) && Ti[e] ? ("" + t).trim() : t + "px"
    }
    function Ym(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var r = n.indexOf("--") === 0
                  , i = Hm(n, t[n], r);
                n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, i) : e[n] = i
            }
    }
    var I9 = re({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function Uu(e, t) {
        if (t) {
            if (I9[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
                throw Error(k(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null)
                    throw Error(k(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                    throw Error(k(61))
            }
            if (t.style != null && typeof t.style != "object")
                throw Error(k(62))
        }
    }
    function Fu(e, t) {
        if (e.indexOf("-") === -1)
            return typeof t.is == "string";
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var zu = null;
    function wf(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Vu = null
      , xr = null
      , kr = null;
    function Fp(e) {
        if (e = vs(e)) {
            if (typeof Vu != "function")
                throw Error(k(280));
            var t = e.stateNode;
            t && (t = Ba(t),
            Vu(e.stateNode, e.type, t))
        }
    }
    function Wm(e) {
        xr ? kr ? kr.push(e) : kr = [e] : xr = e
    }
    function qm() {
        if (xr) {
            var e = xr
              , t = kr;
            if (kr = xr = null,
            Fp(e),
            t)
                for (e = 0; e < t.length; e++)
                    Fp(t[e])
        }
    }
    function Km(e, t) {
        return e(t)
    }
    function Xm() {}
    var kl = !1;
    function Qm(e, t, n) {
        if (kl)
            return e(t, n);
        kl = !0;
        try {
            return Km(e, t, n)
        } finally {
            kl = !1,
            (xr !== null || kr !== null) && (Xm(),
            qm())
        }
    }
    function Vi(e, t) {
        var n = e.stateNode;
        if (n === null)
            return null;
        var r = Ba(n);
        if (r === null)
            return null;
        n = r[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type,
            r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !r;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (n && typeof n != "function")
            throw Error(k(231, t, typeof n));
        return n
    }
    var Gu = !1;
    if (Bt)
        try {
            var ii = {};
            Object.defineProperty(ii, "passive", {
                get: function() {
                    Gu = !0
                }
            }),
            window.addEventListener("test", ii, ii),
            window.removeEventListener("test", ii, ii)
        } catch {
            Gu = !1
        }
    function A9(e, t, n, r, i, s, o, a, l) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, u)
        } catch (c) {
            this.onError(c)
        }
    }
    var xi = !1
      , bo = null
      , jo = !1
      , Hu = null
      , M9 = {
        onError: function(e) {
            xi = !0,
            bo = e
        }
    };
    function b9(e, t, n, r, i, s, o, a, l) {
        xi = !1,
        bo = null,
        A9.apply(M9, arguments)
    }
    function j9(e, t, n, r, i, s, o, a, l) {
        if (b9.apply(this, arguments),
        xi) {
            if (xi) {
                var u = bo;
                xi = !1,
                bo = null
            } else
                throw Error(k(198));
            jo || (jo = !0,
            Hu = u)
        }
    }
    function Xn(e) {
        var t = e
          , n = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                t.flags & 4098 && (n = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? n : null
    }
    function Jm(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function zp(e) {
        if (Xn(e) !== e)
            throw Error(k(188))
    }
    function L9(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Xn(e),
            t === null)
                throw Error(k(188));
            return t !== e ? null : e
        }
        for (var n = e, r = t; ; ) {
            var i = n.return;
            if (i === null)
                break;
            var s = i.alternate;
            if (s === null) {
                if (r = i.return,
                r !== null) {
                    n = r;
                    continue
                }
                break
            }
            if (i.child === s.child) {
                for (s = i.child; s; ) {
                    if (s === n)
                        return zp(i),
                        e;
                    if (s === r)
                        return zp(i),
                        t;
                    s = s.sibling
                }
                throw Error(k(188))
            }
            if (n.return !== r.return)
                n = i,
                r = s;
            else {
                for (var o = !1, a = i.child; a; ) {
                    if (a === n) {
                        o = !0,
                        n = i,
                        r = s;
                        break
                    }
                    if (a === r) {
                        o = !0,
                        r = i,
                        n = s;
                        break
                    }
                    a = a.sibling
                }
                if (!o) {
                    for (a = s.child; a; ) {
                        if (a === n) {
                            o = !0,
                            n = s,
                            r = i;
                            break
                        }
                        if (a === r) {
                            o = !0,
                            r = s,
                            n = i;
                            break
                        }
                        a = a.sibling
                    }
                    if (!o)
                        throw Error(k(189))
                }
            }
            if (n.alternate !== r)
                throw Error(k(190))
        }
        if (n.tag !== 3)
            throw Error(k(188));
        return n.stateNode.current === n ? e : t
    }
    function Zm(e) {
        return e = L9(e),
        e !== null ? eg(e) : null
    }
    function eg(e) {
        if (e.tag === 5 || e.tag === 6)
            return e;
        for (e = e.child; e !== null; ) {
            var t = eg(e);
            if (t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var tg = Qe.unstable_scheduleCallback
      , Vp = Qe.unstable_cancelCallback
      , $9 = Qe.unstable_shouldYield
      , B9 = Qe.unstable_requestPaint
      , ue = Qe.unstable_now
      , U9 = Qe.unstable_getCurrentPriorityLevel
      , Tf = Qe.unstable_ImmediatePriority
      , ng = Qe.unstable_UserBlockingPriority
      , Lo = Qe.unstable_NormalPriority
      , F9 = Qe.unstable_LowPriority
      , rg = Qe.unstable_IdlePriority
      , ba = null
      , Rt = null;
    function z9(e) {
        if (Rt && typeof Rt.onCommitFiberRoot == "function")
            try {
                Rt.onCommitFiberRoot(ba, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
    }
    var gt = Math.clz32 ? Math.clz32 : H9
      , V9 = Math.log
      , G9 = Math.LN2;
    function H9(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (V9(e) / G9 | 0) | 0
    }
    var Bs = 64
      , Us = 4194304;
    function mi(e) {
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
        }
    }
    function $o(e, t) {
        var n = e.pendingLanes;
        if (n === 0)
            return 0;
        var r = 0
          , i = e.suspendedLanes
          , s = e.pingedLanes
          , o = n & 268435455;
        if (o !== 0) {
            var a = o & ~i;
            a !== 0 ? r = mi(a) : (s &= o,
            s !== 0 && (r = mi(s)))
        } else
            o = n & ~i,
            o !== 0 ? r = mi(o) : s !== 0 && (r = mi(s));
        if (r === 0)
            return 0;
        if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
        s = t & -t,
        i >= s || i === 16 && (s & 4194240) !== 0))
            return t;
        if (r & 4 && (r |= n & 16),
        t = e.entangledLanes,
        t !== 0)
            for (e = e.entanglements,
            t &= r; 0 < t; )
                n = 31 - gt(t),
                i = 1 << n,
                r |= e[n],
                t &= ~i;
        return r
    }
    function Y9(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function W9(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
            var o = 31 - gt(s)
              , a = 1 << o
              , l = i[o];
            l === -1 ? (!(a & n) || a & r) && (i[o] = Y9(a, t)) : l <= t && (e.expiredLanes |= a),
            s &= ~a
        }
    }
    function Yu(e) {
        return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }
    function ig() {
        var e = Bs;
        return Bs <<= 1,
        !(Bs & 4194240) && (Bs = 64),
        e
    }
    function Rl(e) {
        for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
        return t
    }
    function _s(e, t, n) {
        e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
        e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - gt(t),
        e[t] = n
    }
    function q9(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n; ) {
            var i = 31 - gt(n)
              , s = 1 << i;
            t[i] = 0,
            r[i] = -1,
            e[i] = -1,
            n &= ~s
        }
    }
    function xf(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
            var r = 31 - gt(n)
              , i = 1 << r;
            i & t | e[r] & t && (e[r] |= t),
            n &= ~i
        }
    }
    var H = 0;
    function sg(e) {
        return e &= -e,
        1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
    }
    var og, kf, ag, lg, ug, Wu = !1, Fs = [], an = null, ln = null, un = null, Gi = new Map, Hi = new Map, Jt = [], K9 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Gp(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            an = null;
            break;
        case "dragenter":
        case "dragleave":
            ln = null;
            break;
        case "mouseover":
        case "mouseout":
            un = null;
            break;
        case "pointerover":
        case "pointerout":
            Gi.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Hi.delete(t.pointerId)
        }
    }
    function si(e, t, n, r, i, s) {
        return e === null || e.nativeEvent !== s ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: s,
            targetContainers: [i]
        },
        t !== null && (t = vs(t),
        t !== null && kf(t)),
        e) : (e.eventSystemFlags |= r,
        t = e.targetContainers,
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e)
    }
    function X9(e, t, n, r, i) {
        switch (t) {
        case "focusin":
            return an = si(an, e, t, n, r, i),
            !0;
        case "dragenter":
            return ln = si(ln, e, t, n, r, i),
            !0;
        case "mouseover":
            return un = si(un, e, t, n, r, i),
            !0;
        case "pointerover":
            var s = i.pointerId;
            return Gi.set(s, si(Gi.get(s) || null, e, t, n, r, i)),
            !0;
        case "gotpointercapture":
            return s = i.pointerId,
            Hi.set(s, si(Hi.get(s) || null, e, t, n, r, i)),
            !0
        }
        return !1
    }
    function cg(e) {
        var t = In(e.target);
        if (t !== null) {
            var n = Xn(t);
            if (n !== null) {
                if (t = n.tag,
                t === 13) {
                    if (t = Jm(n),
                    t !== null) {
                        e.blockedOn = t,
                        ug(e.priority, function() {
                            ag(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function uo(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = qu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type,n);
                zu = r,
                n.target.dispatchEvent(r),
                zu = null
            } else
                return t = vs(n),
                t !== null && kf(t),
                e.blockedOn = n,
                !1;
            t.shift()
        }
        return !0
    }
    function Hp(e, t, n) {
        uo(e) && n.delete(t)
    }
    function Q9() {
        Wu = !1,
        an !== null && uo(an) && (an = null),
        ln !== null && uo(ln) && (ln = null),
        un !== null && uo(un) && (un = null),
        Gi.forEach(Hp),
        Hi.forEach(Hp)
    }
    function oi(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Wu || (Wu = !0,
        Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Q9)))
    }
    function Yi(e) {
        function t(i) {
            return oi(i, e)
        }
        if (0 < Fs.length) {
            oi(Fs[0], e);
            for (var n = 1; n < Fs.length; n++) {
                var r = Fs[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (an !== null && oi(an, e),
        ln !== null && oi(ln, e),
        un !== null && oi(un, e),
        Gi.forEach(t),
        Hi.forEach(t),
        n = 0; n < Jt.length; n++)
            r = Jt[n],
            r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < Jt.length && (n = Jt[0],
        n.blockedOn === null); )
            cg(n),
            n.blockedOn === null && Jt.shift()
    }
    var Rr = Vt.ReactCurrentBatchConfig
      , Bo = !0;
    function J9(e, t, n, r) {
        var i = H
          , s = Rr.transition;
        Rr.transition = null;
        try {
            H = 1,
            Rf(e, t, n, r)
        } finally {
            H = i,
            Rr.transition = s
        }
    }
    function Z9(e, t, n, r) {
        var i = H
          , s = Rr.transition;
        Rr.transition = null;
        try {
            H = 4,
            Rf(e, t, n, r)
        } finally {
            H = i,
            Rr.transition = s
        }
    }
    function Rf(e, t, n, r) {
        if (Bo) {
            var i = qu(e, t, n, r);
            if (i === null)
                jl(e, t, r, Uo, n),
                Gp(e, r);
            else if (X9(i, e, t, n, r))
                r.stopPropagation();
            else if (Gp(e, r),
            t & 4 && -1 < K9.indexOf(e)) {
                for (; i !== null; ) {
                    var s = vs(i);
                    if (s !== null && og(s),
                    s = qu(e, t, n, r),
                    s === null && jl(e, t, r, Uo, n),
                    s === i)
                        break;
                    i = s
                }
                i !== null && r.stopPropagation()
            } else
                jl(e, t, r, null, n)
        }
    }
    var Uo = null;
    function qu(e, t, n, r) {
        if (Uo = null,
        e = wf(r),
        e = In(e),
        e !== null)
            if (t = Xn(e),
            t === null)
                e = null;
            else if (n = t.tag,
            n === 13) {
                if (e = Jm(t),
                e !== null)
                    return e;
                e = null
            } else if (n === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else
                t !== e && (e = null);
        return Uo = e,
        null
    }
    function fg(e) {
        switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (U9()) {
            case Tf:
                return 1;
            case ng:
                return 4;
            case Lo:
            case F9:
                return 16;
            case rg:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var tn = null
      , Cf = null
      , co = null;
    function dg() {
        if (co)
            return co;
        var e, t = Cf, n = t.length, r, i = "value"in tn ? tn.value : tn.textContent, s = i.length;
        for (e = 0; e < n && t[e] === i[e]; e++)
            ;
        var o = n - e;
        for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
            ;
        return co = i.slice(e, 1 < r ? 1 - r : void 0)
    }
    function fo(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function zs() {
        return !0
    }
    function Yp() {
        return !1
    }
    function et(e) {
        function t(n, r, i, s, o) {
            this._reactName = n,
            this._targetInst = i,
            this.type = r,
            this.nativeEvent = s,
            this.target = o,
            this.currentTarget = null;
            for (var a in e)
                e.hasOwnProperty(a) && (n = e[a],
                this[a] = n ? n(s) : s[a]);
            return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? zs : Yp,
            this.isPropagationStopped = Yp,
            this
        }
        return re(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = zs)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = zs)
            },
            persist: function() {},
            isPersistent: zs
        }),
        t
    }
    var Qr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Nf = et(Qr), ys = re({}, Qr, {
        view: 0,
        detail: 0
    }), ew = et(ys), Cl, Nl, ai, ja = re({}, ys, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Pf,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== ai && (ai && e.type === "mousemove" ? (Cl = e.screenX - ai.screenX,
            Nl = e.screenY - ai.screenY) : Nl = Cl = 0,
            ai = e),
            Cl)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : Nl
        }
    }), Wp = et(ja), tw = re({}, ja, {
        dataTransfer: 0
    }), nw = et(tw), rw = re({}, ys, {
        relatedTarget: 0
    }), Pl = et(rw), iw = re({}, Qr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), sw = et(iw), ow = re({}, Qr, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), aw = et(ow), lw = re({}, Qr, {
        data: 0
    }), qp = et(lw), uw = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, cw = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, fw = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function dw(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = fw[e]) ? !!t[e] : !1
    }
    function Pf() {
        return dw
    }
    var pw = re({}, ys, {
        key: function(e) {
            if (e.key) {
                var t = uw[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = fo(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cw[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Pf,
        charCode: function(e) {
            return e.type === "keypress" ? fo(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? fo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , hw = et(pw)
      , mw = re({}, ja, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Kp = et(mw)
      , gw = re({}, ys, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Pf
    })
      , _w = et(gw)
      , yw = re({}, Qr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , vw = et(yw)
      , Sw = re({}, ja, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Ew = et(Sw)
      , ww = [9, 13, 27, 32]
      , Df = Bt && "CompositionEvent"in window
      , ki = null;
    Bt && "documentMode"in document && (ki = document.documentMode);
    var Tw = Bt && "TextEvent"in window && !ki
      , pg = Bt && (!Df || ki && 8 < ki && 11 >= ki)
      , Xp = String.fromCharCode(32)
      , Qp = !1;
    function hg(e, t) {
        switch (e) {
        case "keyup":
            return ww.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function mg(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var ar = !1;
    function xw(e, t) {
        switch (e) {
        case "compositionend":
            return mg(t);
        case "keypress":
            return t.which !== 32 ? null : (Qp = !0,
            Xp);
        case "textInput":
            return e = t.data,
            e === Xp && Qp ? null : e;
        default:
            return null
        }
    }
    function kw(e, t) {
        if (ar)
            return e === "compositionend" || !Df && hg(e, t) ? (e = dg(),
            co = Cf = tn = null,
            ar = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return pg && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var Rw = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Jp(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Rw[e.type] : t === "textarea"
    }
    function gg(e, t, n, r) {
        Wm(r),
        t = Fo(t, "onChange"),
        0 < t.length && (n = new Nf("onChange","change",null,n,r),
        e.push({
            event: n,
            listeners: t
        }))
    }
    var Ri = null
      , Wi = null;
    function Cw(e) {
        Cg(e, 0)
    }
    function La(e) {
        var t = cr(e);
        if (Um(t))
            return e
    }
    function Nw(e, t) {
        if (e === "change")
            return t
    }
    var _g = !1;
    if (Bt) {
        var Dl;
        if (Bt) {
            var Ol = "oninput"in document;
            if (!Ol) {
                var Zp = document.createElement("div");
                Zp.setAttribute("oninput", "return;"),
                Ol = typeof Zp.oninput == "function"
            }
            Dl = Ol
        } else
            Dl = !1;
        _g = Dl && (!document.documentMode || 9 < document.documentMode)
    }
    function eh() {
        Ri && (Ri.detachEvent("onpropertychange", yg),
        Wi = Ri = null)
    }
    function yg(e) {
        if (e.propertyName === "value" && La(Wi)) {
            var t = [];
            gg(t, Wi, e, wf(e)),
            Qm(Cw, t)
        }
    }
    function Pw(e, t, n) {
        e === "focusin" ? (eh(),
        Ri = t,
        Wi = n,
        Ri.attachEvent("onpropertychange", yg)) : e === "focusout" && eh()
    }
    function Dw(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return La(Wi)
    }
    function Ow(e, t) {
        if (e === "click")
            return La(t)
    }
    function Iw(e, t) {
        if (e === "input" || e === "change")
            return La(t)
    }
    function Aw(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var yt = typeof Object.is == "function" ? Object.is : Aw;
    function qi(e, t) {
        if (yt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!Du.call(t, i) || !yt(e[i], t[i]))
                return !1
        }
        return !0
    }
    function th(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function nh(e, t) {
        var n = th(e);
        e = 0;
        for (var r; n; ) {
            if (n.nodeType === 3) {
                if (r = e + n.textContent.length,
                e <= t && r >= t)
                    return {
                        node: n,
                        offset: t - e
                    };
                e = r
            }
            e: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = th(n)
        }
    }
    function vg(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vg(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Sg() {
        for (var e = window, t = Mo(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                e = t.contentWindow;
            else
                break;
            t = Mo(e.document)
        }
        return t
    }
    function Of(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    function Mw(e) {
        var t = Sg()
          , n = e.focusedElem
          , r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && vg(n.ownerDocument.documentElement, n)) {
            if (r !== null && Of(n)) {
                if (t = r.start,
                e = r.end,
                e === void 0 && (e = t),
                "selectionStart"in n)
                    n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                    e = e.getSelection();
                    var i = n.textContent.length
                      , s = Math.min(r.start, i);
                    r = r.end === void 0 ? s : Math.min(r.end, i),
                    !e.extend && s > r && (i = r,
                    r = s,
                    s = i),
                    i = nh(n, s);
                    var o = nh(n, r);
                    i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                    t.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    s > r ? (e.addRange(t),
                    e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                    e.addRange(t)))
                }
            }
            for (t = [],
            e = n; e = e.parentNode; )
                e.nodeType === 1 && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
            for (typeof n.focus == "function" && n.focus(),
            n = 0; n < t.length; n++)
                e = t[n],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
        }
    }
    var bw = Bt && "documentMode"in document && 11 >= document.documentMode
      , lr = null
      , Ku = null
      , Ci = null
      , Xu = !1;
    function rh(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Xu || lr == null || lr !== Mo(r) || (r = lr,
        "selectionStart"in r && Of(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
        r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }),
        Ci && qi(Ci, r) || (Ci = r,
        r = Fo(Ku, "onSelect"),
        0 < r.length && (t = new Nf("onSelect","select",null,t,n),
        e.push({
            event: t,
            listeners: r
        }),
        t.target = lr)))
    }
    function Vs(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
    }
    var ur = {
        animationend: Vs("Animation", "AnimationEnd"),
        animationiteration: Vs("Animation", "AnimationIteration"),
        animationstart: Vs("Animation", "AnimationStart"),
        transitionend: Vs("Transition", "TransitionEnd")
    }
      , Il = {}
      , Eg = {};
    Bt && (Eg = document.createElement("div").style,
    "AnimationEvent"in window || (delete ur.animationend.animation,
    delete ur.animationiteration.animation,
    delete ur.animationstart.animation),
    "TransitionEvent"in window || delete ur.transitionend.transition);
    function $a(e) {
        if (Il[e])
            return Il[e];
        if (!ur[e])
            return e;
        var t = ur[e], n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in Eg)
                return Il[e] = t[n];
        return e
    }
    var wg = $a("animationend")
      , Tg = $a("animationiteration")
      , xg = $a("animationstart")
      , kg = $a("transitionend")
      , Rg = new Map
      , ih = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function vn(e, t) {
        Rg.set(e, t),
        Kn(t, [e])
    }
    for (var Al = 0; Al < ih.length; Al++) {
        var Ml = ih[Al]
          , jw = Ml.toLowerCase()
          , Lw = Ml[0].toUpperCase() + Ml.slice(1);
        vn(jw, "on" + Lw)
    }
    vn(wg, "onAnimationEnd");
    vn(Tg, "onAnimationIteration");
    vn(xg, "onAnimationStart");
    vn("dblclick", "onDoubleClick");
    vn("focusin", "onFocus");
    vn("focusout", "onBlur");
    vn(kg, "onTransitionEnd");
    $r("onMouseEnter", ["mouseout", "mouseover"]);
    $r("onMouseLeave", ["mouseout", "mouseover"]);
    $r("onPointerEnter", ["pointerout", "pointerover"]);
    $r("onPointerLeave", ["pointerout", "pointerover"]);
    Kn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    Kn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    Kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    Kn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    Kn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    Kn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var gi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , $w = new Set("cancel close invalid load scroll toggle".split(" ").concat(gi));
    function sh(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n,
        j9(r, t, void 0, e),
        e.currentTarget = null
    }
    function Cg(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var r = e[n]
              , i = r.event;
            r = r.listeners;
            e: {
                var s = void 0;
                if (t)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var a = r[o]
                          , l = a.instance
                          , u = a.currentTarget;
                        if (a = a.listener,
                        l !== s && i.isPropagationStopped())
                            break e;
                        sh(i, a, u),
                        s = l
                    }
                else
                    for (o = 0; o < r.length; o++) {
                        if (a = r[o],
                        l = a.instance,
                        u = a.currentTarget,
                        a = a.listener,
                        l !== s && i.isPropagationStopped())
                            break e;
                        sh(i, a, u),
                        s = l
                    }
            }
        }
        if (jo)
            throw e = Hu,
            jo = !1,
            Hu = null,
            e
    }
    function K(e, t) {
        var n = t[tc];
        n === void 0 && (n = t[tc] = new Set);
        var r = e + "__bubble";
        n.has(r) || (Ng(t, e, 2, !1),
        n.add(r))
    }
    function bl(e, t, n) {
        var r = 0;
        t && (r |= 4),
        Ng(n, e, r, t)
    }
    var Gs = "_reactListening" + Math.random().toString(36).slice(2);
    function Ki(e) {
        if (!e[Gs]) {
            e[Gs] = !0,
            bm.forEach(function(n) {
                n !== "selectionchange" && ($w.has(n) || bl(n, !1, e),
                bl(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Gs] || (t[Gs] = !0,
            bl("selectionchange", !1, t))
        }
    }
    function Ng(e, t, n, r) {
        switch (fg(t)) {
        case 1:
            var i = J9;
            break;
        case 4:
            i = Z9;
            break;
        default:
            i = Rf
        }
        n = i.bind(null, t, n, e),
        i = void 0,
        !Gu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
        r ? i !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: i
        }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
            passive: i
        }) : e.addEventListener(t, n, !1)
    }
    function jl(e, t, n, r, i) {
        var s = r;
        if (!(t & 1) && !(t & 2) && r !== null)
            e: for (; ; ) {
                if (r === null)
                    return;
                var o = r.tag;
                if (o === 3 || o === 4) {
                    var a = r.stateNode.containerInfo;
                    if (a === i || a.nodeType === 8 && a.parentNode === i)
                        break;
                    if (o === 4)
                        for (o = r.return; o !== null; ) {
                            var l = o.tag;
                            if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                            l === i || l.nodeType === 8 && l.parentNode === i))
                                return;
                            o = o.return
                        }
                    for (; a !== null; ) {
                        if (o = In(a),
                        o === null)
                            return;
                        if (l = o.tag,
                        l === 5 || l === 6) {
                            r = s = o;
                            continue e
                        }
                        a = a.parentNode
                    }
                }
                r = r.return
            }
        Qm(function() {
            var u = s
              , c = wf(n)
              , f = [];
            e: {
                var d = Rg.get(e);
                if (d !== void 0) {
                    var h = Nf
                      , _ = e;
                    switch (e) {
                    case "keypress":
                        if (fo(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        h = hw;
                        break;
                    case "focusin":
                        _ = "focus",
                        h = Pl;
                        break;
                    case "focusout":
                        _ = "blur",
                        h = Pl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        h = Pl;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        h = Wp;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        h = nw;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        h = _w;
                        break;
                    case wg:
                    case Tg:
                    case xg:
                        h = sw;
                        break;
                    case kg:
                        h = vw;
                        break;
                    case "scroll":
                        h = ew;
                        break;
                    case "wheel":
                        h = Ew;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        h = aw;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        h = Kp
                    }
                    var v = (t & 4) !== 0
                      , E = !v && e === "scroll"
                      , m = v ? d !== null ? d + "Capture" : null : d;
                    v = [];
                    for (var p = u, g; p !== null; ) {
                        g = p;
                        var S = g.stateNode;
                        if (g.tag === 5 && S !== null && (g = S,
                        m !== null && (S = Vi(p, m),
                        S != null && v.push(Xi(p, S, g)))),
                        E)
                            break;
                        p = p.return
                    }
                    0 < v.length && (d = new h(d,_,null,n,c),
                    f.push({
                        event: d,
                        listeners: v
                    }))
                }
            }
            if (!(t & 7)) {
                e: {
                    if (d = e === "mouseover" || e === "pointerover",
                    h = e === "mouseout" || e === "pointerout",
                    d && n !== zu && (_ = n.relatedTarget || n.fromElement) && (In(_) || _[Ut]))
                        break e;
                    if ((h || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                    h ? (_ = n.relatedTarget || n.toElement,
                    h = u,
                    _ = _ ? In(_) : null,
                    _ !== null && (E = Xn(_),
                    _ !== E || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (h = null,
                    _ = u),
                    h !== _)) {
                        if (v = Wp,
                        S = "onMouseLeave",
                        m = "onMouseEnter",
                        p = "mouse",
                        (e === "pointerout" || e === "pointerover") && (v = Kp,
                        S = "onPointerLeave",
                        m = "onPointerEnter",
                        p = "pointer"),
                        E = h == null ? d : cr(h),
                        g = _ == null ? d : cr(_),
                        d = new v(S,p + "leave",h,n,c),
                        d.target = E,
                        d.relatedTarget = g,
                        S = null,
                        In(c) === u && (v = new v(m,p + "enter",_,n,c),
                        v.target = g,
                        v.relatedTarget = E,
                        S = v),
                        E = S,
                        h && _)
                            t: {
                                for (v = h,
                                m = _,
                                p = 0,
                                g = v; g; g = tr(g))
                                    p++;
                                for (g = 0,
                                S = m; S; S = tr(S))
                                    g++;
                                for (; 0 < p - g; )
                                    v = tr(v),
                                    p--;
                                for (; 0 < g - p; )
                                    m = tr(m),
                                    g--;
                                for (; p--; ) {
                                    if (v === m || m !== null && v === m.alternate)
                                        break t;
                                    v = tr(v),
                                    m = tr(m)
                                }
                                v = null
                            }
                        else
                            v = null;
                        h !== null && oh(f, d, h, v, !1),
                        _ !== null && E !== null && oh(f, E, _, v, !0)
                    }
                }
                e: {
                    if (d = u ? cr(u) : window,
                    h = d.nodeName && d.nodeName.toLowerCase(),
                    h === "select" || h === "input" && d.type === "file")
                        var x = Nw;
                    else if (Jp(d))
                        if (_g)
                            x = Iw;
                        else {
                            x = Dw;
                            var P = Pw
                        }
                    else
                        (h = d.nodeName) && h.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (x = Ow);
                    if (x && (x = x(e, u))) {
                        gg(f, x, n, c);
                        break e
                    }
                    P && P(e, d, u),
                    e === "focusout" && (P = d._wrapperState) && P.controlled && d.type === "number" && Lu(d, "number", d.value)
                }
                switch (P = u ? cr(u) : window,
                e) {
                case "focusin":
                    (Jp(P) || P.contentEditable === "true") && (lr = P,
                    Ku = u,
                    Ci = null);
                    break;
                case "focusout":
                    Ci = Ku = lr = null;
                    break;
                case "mousedown":
                    Xu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Xu = !1,
                    rh(f, n, c);
                    break;
                case "selectionchange":
                    if (bw)
                        break;
                case "keydown":
                case "keyup":
                    rh(f, n, c)
                }
                var N;
                if (Df)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var R = "onCompositionStart";
                            break e;
                        case "compositionend":
                            R = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            R = "onCompositionUpdate";
                            break e
                        }
                        R = void 0
                    }
                else
                    ar ? hg(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
                R && (pg && n.locale !== "ko" && (ar || R !== "onCompositionStart" ? R === "onCompositionEnd" && ar && (N = dg()) : (tn = c,
                Cf = "value"in tn ? tn.value : tn.textContent,
                ar = !0)),
                P = Fo(u, R),
                0 < P.length && (R = new qp(R,e,null,n,c),
                f.push({
                    event: R,
                    listeners: P
                }),
                N ? R.data = N : (N = mg(n),
                N !== null && (R.data = N)))),
                (N = Tw ? xw(e, n) : kw(e, n)) && (u = Fo(u, "onBeforeInput"),
                0 < u.length && (c = new qp("onBeforeInput","beforeinput",null,n,c),
                f.push({
                    event: c,
                    listeners: u
                }),
                c.data = N))
            }
            Cg(f, t)
        })
    }
    function Xi(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }
    function Fo(e, t) {
        for (var n = t + "Capture", r = []; e !== null; ) {
            var i = e
              , s = i.stateNode;
            i.tag === 5 && s !== null && (i = s,
            s = Vi(e, n),
            s != null && r.unshift(Xi(e, s, i)),
            s = Vi(e, t),
            s != null && r.push(Xi(e, s, i))),
            e = e.return
        }
        return r
    }
    function tr(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5);
        return e || null
    }
    function oh(e, t, n, r, i) {
        for (var s = t._reactName, o = []; n !== null && n !== r; ) {
            var a = n
              , l = a.alternate
              , u = a.stateNode;
            if (l !== null && l === r)
                break;
            a.tag === 5 && u !== null && (a = u,
            i ? (l = Vi(n, s),
            l != null && o.unshift(Xi(n, l, a))) : i || (l = Vi(n, s),
            l != null && o.push(Xi(n, l, a)))),
            n = n.return
        }
        o.length !== 0 && e.push({
            event: t,
            listeners: o
        })
    }
    var Bw = /\r\n?/g
      , Uw = /\u0000|\uFFFD/g;
    function ah(e) {
        return (typeof e == "string" ? e : "" + e).replace(Bw, `
`).replace(Uw, "")
    }
    function Hs(e, t, n) {
        if (t = ah(t),
        ah(e) !== t && n)
            throw Error(k(425))
    }
    function zo() {}
    var Qu = null
      , Ju = null;
    function Zu(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var ec = typeof setTimeout == "function" ? setTimeout : void 0
      , Fw = typeof clearTimeout == "function" ? clearTimeout : void 0
      , lh = typeof Promise == "function" ? Promise : void 0
      , zw = typeof queueMicrotask == "function" ? queueMicrotask : typeof lh < "u" ? function(e) {
        return lh.resolve(null).then(e).catch(Vw)
    }
    : ec;
    function Vw(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Ll(e, t) {
        var n = t
          , r = 0;
        do {
            var i = n.nextSibling;
            if (e.removeChild(n),
            i && i.nodeType === 8)
                if (n = i.data,
                n === "/$") {
                    if (r === 0) {
                        e.removeChild(i),
                        Yi(t);
                        return
                    }
                    r--
                } else
                    n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = i
        } while (n);
        Yi(t)
    }
    function cn(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    function uh(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Jr = Math.random().toString(36).slice(2)
      , xt = "__reactFiber$" + Jr
      , Qi = "__reactProps$" + Jr
      , Ut = "__reactContainer$" + Jr
      , tc = "__reactEvents$" + Jr
      , Gw = "__reactListeners$" + Jr
      , Hw = "__reactHandles$" + Jr;
    function In(e) {
        var t = e[xt];
        if (t)
            return t;
        for (var n = e.parentNode; n; ) {
            if (t = n[Ut] || n[xt]) {
                if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                    for (e = uh(e); e !== null; ) {
                        if (n = e[xt])
                            return n;
                        e = uh(e)
                    }
                return t
            }
            e = n,
            n = e.parentNode
        }
        return null
    }
    function vs(e) {
        return e = e[xt] || e[Ut],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }
    function cr(e) {
        if (e.tag === 5 || e.tag === 6)
            return e.stateNode;
        throw Error(k(33))
    }
    function Ba(e) {
        return e[Qi] || null
    }
    var nc = []
      , fr = -1;
    function Sn(e) {
        return {
            current: e
        }
    }
    function X(e) {
        0 > fr || (e.current = nc[fr],
        nc[fr] = null,
        fr--)
    }
    function q(e, t) {
        fr++,
        nc[fr] = e.current,
        e.current = t
    }
    var yn = {}
      , Re = Sn(yn)
      , Fe = Sn(!1)
      , zn = yn;
    function Br(e, t) {
        var n = e.type.contextTypes;
        if (!n)
            return yn;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
        var i = {}, s;
        for (s in n)
            i[s] = t[s];
        return r && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = i),
        i
    }
    function ze(e) {
        return e = e.childContextTypes,
        e != null
    }
    function Vo() {
        X(Fe),
        X(Re)
    }
    function ch(e, t, n) {
        if (Re.current !== yn)
            throw Error(k(168));
        q(Re, t),
        q(Fe, n)
    }
    function Pg(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes,
        typeof r.getChildContext != "function")
            return n;
        r = r.getChildContext();
        for (var i in r)
            if (!(i in t))
                throw Error(k(108, P9(e) || "Unknown", i));
        return re({}, n, r)
    }
    function Go(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || yn,
        zn = Re.current,
        q(Re, e),
        q(Fe, Fe.current),
        !0
    }
    function fh(e, t, n) {
        var r = e.stateNode;
        if (!r)
            throw Error(k(169));
        n ? (e = Pg(e, t, zn),
        r.__reactInternalMemoizedMergedChildContext = e,
        X(Fe),
        X(Re),
        q(Re, e)) : X(Fe),
        q(Fe, n)
    }
    var It = null
      , Ua = !1
      , $l = !1;
    function Dg(e) {
        It === null ? It = [e] : It.push(e)
    }
    function Yw(e) {
        Ua = !0,
        Dg(e)
    }
    function En() {
        if (!$l && It !== null) {
            $l = !0;
            var e = 0
              , t = H;
            try {
                var n = It;
                for (H = 1; e < n.length; e++) {
                    var r = n[e];
                    do
                        r = r(!0);
                    while (r !== null)
                }
                It = null,
                Ua = !1
            } catch (i) {
                throw It !== null && (It = It.slice(e + 1)),
                tg(Tf, En),
                i
            } finally {
                H = t,
                $l = !1
            }
        }
        return null
    }
    var dr = []
      , pr = 0
      , Ho = null
      , Yo = 0
      , nt = []
      , rt = 0
      , Vn = null
      , At = 1
      , Mt = "";
    function Cn(e, t) {
        dr[pr++] = Yo,
        dr[pr++] = Ho,
        Ho = e,
        Yo = t
    }
    function Og(e, t, n) {
        nt[rt++] = At,
        nt[rt++] = Mt,
        nt[rt++] = Vn,
        Vn = e;
        var r = At;
        e = Mt;
        var i = 32 - gt(r) - 1;
        r &= ~(1 << i),
        n += 1;
        var s = 32 - gt(t) + i;
        if (30 < s) {
            var o = i - i % 5;
            s = (r & (1 << o) - 1).toString(32),
            r >>= o,
            i -= o,
            At = 1 << 32 - gt(t) + i | n << i | r,
            Mt = s + e
        } else
            At = 1 << s | n << i | r,
            Mt = e
    }
    function If(e) {
        e.return !== null && (Cn(e, 1),
        Og(e, 1, 0))
    }
    function Af(e) {
        for (; e === Ho; )
            Ho = dr[--pr],
            dr[pr] = null,
            Yo = dr[--pr],
            dr[pr] = null;
        for (; e === Vn; )
            Vn = nt[--rt],
            nt[rt] = null,
            Mt = nt[--rt],
            nt[rt] = null,
            At = nt[--rt],
            nt[rt] = null
    }
    var Ke = null
      , We = null
      , J = !1
      , ht = null;
    function Ig(e, t) {
        var n = st(5, null, null, 0);
        n.elementType = "DELETED",
        n.stateNode = t,
        n.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [n],
        e.flags |= 16) : t.push(n)
    }
    function dh(e, t) {
        switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
            t !== null ? (e.stateNode = t,
            Ke = e,
            We = cn(t.firstChild),
            !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
            t !== null ? (e.stateNode = t,
            Ke = e,
            We = null,
            !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
            t !== null ? (n = Vn !== null ? {
                id: At,
                overflow: Mt
            } : null,
            e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            },
            n = st(18, null, null, 0),
            n.stateNode = t,
            n.return = e,
            e.child = n,
            Ke = e,
            We = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function rc(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }
    function ic(e) {
        if (J) {
            var t = We;
            if (t) {
                var n = t;
                if (!dh(e, t)) {
                    if (rc(e))
                        throw Error(k(418));
                    t = cn(n.nextSibling);
                    var r = Ke;
                    t && dh(e, t) ? Ig(r, n) : (e.flags = e.flags & -4097 | 2,
                    J = !1,
                    Ke = e)
                }
            } else {
                if (rc(e))
                    throw Error(k(418));
                e.flags = e.flags & -4097 | 2,
                J = !1,
                Ke = e
            }
        }
    }
    function ph(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
            e = e.return;
        Ke = e
    }
    function Ys(e) {
        if (e !== Ke)
            return !1;
        if (!J)
            return ph(e),
            J = !0,
            !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !Zu(e.type, e.memoizedProps)),
        t && (t = We)) {
            if (rc(e))
                throw Ag(),
                Error(k(418));
            for (; t; )
                Ig(e, t),
                t = cn(t.nextSibling)
        }
        if (ph(e),
        e.tag === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(k(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                We = cn(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            n !== "$" && n !== "$!" && n !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                We = null
            }
        } else
            We = Ke ? cn(e.stateNode.nextSibling) : null;
        return !0
    }
    function Ag() {
        for (var e = We; e; )
            e = cn(e.nextSibling)
    }
    function Ur() {
        We = Ke = null,
        J = !1
    }
    function Mf(e) {
        ht === null ? ht = [e] : ht.push(e)
    }
    var Ww = Vt.ReactCurrentBatchConfig;
    function ft(e, t) {
        if (e && e.defaultProps) {
            t = re({}, t),
            e = e.defaultProps;
            for (var n in e)
                t[n] === void 0 && (t[n] = e[n]);
            return t
        }
        return t
    }
    var Wo = Sn(null)
      , qo = null
      , hr = null
      , bf = null;
    function jf() {
        bf = hr = qo = null
    }
    function Lf(e) {
        var t = Wo.current;
        X(Wo),
        e._currentValue = t
    }
    function sc(e, t, n) {
        for (; e !== null; ) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
                break;
            e = e.return
        }
    }
    function Cr(e, t) {
        qo = e,
        bf = hr = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && (e.lanes & t && (Be = !0),
        e.firstContext = null)
    }
    function lt(e) {
        var t = e._currentValue;
        if (bf !== e)
            if (e = {
                context: e,
                memoizedValue: t,
                next: null
            },
            hr === null) {
                if (qo === null)
                    throw Error(k(308));
                hr = e,
                qo.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else
                hr = hr.next = e;
        return t
    }
    var An = null;
    function $f(e) {
        An === null ? An = [e] : An.push(e)
    }
    function Mg(e, t, n, r) {
        var i = t.interleaved;
        return i === null ? (n.next = n,
        $f(t)) : (n.next = i.next,
        i.next = n),
        t.interleaved = n,
        Ft(e, r)
    }
    function Ft(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t),
        n = e,
        e = e.return; e !== null; )
            e.childLanes |= t,
            n = e.alternate,
            n !== null && (n.childLanes |= t),
            n = e,
            e = e.return;
        return n.tag === 3 ? n.stateNode : null
    }
    var Xt = !1;
    function Bf(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function bg(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }
    function Lt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function fn(e, t, n) {
        var r = e.updateQueue;
        if (r === null)
            return null;
        if (r = r.shared,
        V & 2) {
            var i = r.pending;
            return i === null ? t.next = t : (t.next = i.next,
            i.next = t),
            r.pending = t,
            Ft(e, n)
        }
        return i = r.interleaved,
        i === null ? (t.next = t,
        $f(r)) : (t.next = i.next,
        i.next = t),
        r.interleaved = t,
        Ft(e, n)
    }
    function po(e, t, n) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            xf(e, n)
        }
    }
    function hh(e, t) {
        var n = e.updateQueue
          , r = e.alternate;
        if (r !== null && (r = r.updateQueue,
        n === r)) {
            var i = null
              , s = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var o = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    s === null ? i = s = o : s = s.next = o,
                    n = n.next
                } while (n !== null);
                s === null ? i = s = t : s = s.next = t
            } else
                i = s = t;
            n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: s,
                shared: r.shared,
                effects: r.effects
            },
            e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
    }
    function Ko(e, t, n, r) {
        var i = e.updateQueue;
        Xt = !1;
        var s = i.firstBaseUpdate
          , o = i.lastBaseUpdate
          , a = i.shared.pending;
        if (a !== null) {
            i.shared.pending = null;
            var l = a
              , u = l.next;
            l.next = null,
            o === null ? s = u : o.next = u,
            o = l;
            var c = e.alternate;
            c !== null && (c = c.updateQueue,
            a = c.lastBaseUpdate,
            a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u,
            c.lastBaseUpdate = l))
        }
        if (s !== null) {
            var f = i.baseState;
            o = 0,
            c = u = l = null,
            a = s;
            do {
                var d = a.lane
                  , h = a.eventTime;
                if ((r & d) === d) {
                    c !== null && (c = c.next = {
                        eventTime: h,
                        lane: 0,
                        tag: a.tag,
                        payload: a.payload,
                        callback: a.callback,
                        next: null
                    });
                    e: {
                        var _ = e
                          , v = a;
                        switch (d = t,
                        h = n,
                        v.tag) {
                        case 1:
                            if (_ = v.payload,
                            typeof _ == "function") {
                                f = _.call(h, f, d);
                                break e
                            }
                            f = _;
                            break e;
                        case 3:
                            _.flags = _.flags & -65537 | 128;
                        case 0:
                            if (_ = v.payload,
                            d = typeof _ == "function" ? _.call(h, f, d) : _,
                            d == null)
                                break e;
                            f = re({}, f, d);
                            break e;
                        case 2:
                            Xt = !0
                        }
                    }
                    a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                    d = i.effects,
                    d === null ? i.effects = [a] : d.push(a))
                } else
                    h = {
                        eventTime: h,
                        lane: d,
                        tag: a.tag,
                        payload: a.payload,
                        callback: a.callback,
                        next: null
                    },
                    c === null ? (u = c = h,
                    l = f) : c = c.next = h,
                    o |= d;
                if (a = a.next,
                a === null) {
                    if (a = i.shared.pending,
                    a === null)
                        break;
                    d = a,
                    a = d.next,
                    d.next = null,
                    i.lastBaseUpdate = d,
                    i.shared.pending = null
                }
            } while (1);
            if (c === null && (l = f),
            i.baseState = l,
            i.firstBaseUpdate = u,
            i.lastBaseUpdate = c,
            t = i.shared.interleaved,
            t !== null) {
                i = t;
                do
                    o |= i.lane,
                    i = i.next;
                while (i !== t)
            } else
                s === null && (i.shared.lanes = 0);
            Hn |= o,
            e.lanes = o,
            e.memoizedState = f
        }
    }
    function mh(e, t, n) {
        if (e = t.effects,
        t.effects = null,
        e !== null)
            for (t = 0; t < e.length; t++) {
                var r = e[t]
                  , i = r.callback;
                if (i !== null) {
                    if (r.callback = null,
                    r = n,
                    typeof i != "function")
                        throw Error(k(191, i));
                    i.call(r)
                }
            }
    }
    var jg = new Mm.Component().refs;
    function oc(e, t, n, r) {
        t = e.memoizedState,
        n = n(r, t),
        n = n == null ? t : re({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var Fa = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Xn(e) === e : !1
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Oe()
              , i = pn(e)
              , s = Lt(r, i);
            s.payload = t,
            n != null && (s.callback = n),
            t = fn(e, s, i),
            t !== null && (_t(t, e, i, r),
            po(t, e, i))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Oe()
              , i = pn(e)
              , s = Lt(r, i);
            s.tag = 1,
            s.payload = t,
            n != null && (s.callback = n),
            t = fn(e, s, i),
            t !== null && (_t(t, e, i, r),
            po(t, e, i))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Oe()
              , r = pn(e)
              , i = Lt(n, r);
            i.tag = 2,
            t != null && (i.callback = t),
            t = fn(e, i, r),
            t !== null && (_t(t, e, r, n),
            po(t, e, r))
        }
    };
    function gh(e, t, n, r, i, s, o) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !qi(n, r) || !qi(i, s) : !0
    }
    function Lg(e, t, n) {
        var r = !1
          , i = yn
          , s = t.contextType;
        return typeof s == "object" && s !== null ? s = lt(s) : (i = ze(t) ? zn : Re.current,
        r = t.contextTypes,
        s = (r = r != null) ? Br(e, i) : yn),
        t = new t(n,s),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = Fa,
        e.stateNode = t,
        t._reactInternals = e,
        r && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = i,
        e.__reactInternalMemoizedMaskedChildContext = s),
        t
    }
    function _h(e, t, n, r) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Fa.enqueueReplaceState(t, t.state, null)
    }
    function ac(e, t, n, r) {
        var i = e.stateNode;
        i.props = n,
        i.state = e.memoizedState,
        i.refs = jg,
        Bf(e);
        var s = t.contextType;
        typeof s == "object" && s !== null ? i.context = lt(s) : (s = ze(t) ? zn : Re.current,
        i.context = Br(e, s)),
        i.state = e.memoizedState,
        s = t.getDerivedStateFromProps,
        typeof s == "function" && (oc(e, t, s, n),
        i.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
        t !== i.state && Fa.enqueueReplaceState(i, i.state, null),
        Ko(e, n, i, r),
        i.state = e.memoizedState),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308)
    }
    function li(e, t, n) {
        if (e = n.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner,
                n) {
                    if (n.tag !== 1)
                        throw Error(k(309));
                    var r = n.stateNode
                }
                if (!r)
                    throw Error(k(147, e));
                var i = r
                  , s = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                    var a = i.refs;
                    a === jg && (a = i.refs = {}),
                    o === null ? delete a[s] : a[s] = o
                }
                ,
                t._stringRef = s,
                t)
            }
            if (typeof e != "string")
                throw Error(k(284));
            if (!n._owner)
                throw Error(k(290, e))
        }
        return e
    }
    function Ws(e, t) {
        throw e = Object.prototype.toString.call(t),
        Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }
    function yh(e) {
        var t = e._init;
        return t(e._payload)
    }
    function $g(e) {
        function t(m, p) {
            if (e) {
                var g = m.deletions;
                g === null ? (m.deletions = [p],
                m.flags |= 16) : g.push(p)
            }
        }
        function n(m, p) {
            if (!e)
                return null;
            for (; p !== null; )
                t(m, p),
                p = p.sibling;
            return null
        }
        function r(m, p) {
            for (m = new Map; p !== null; )
                p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
                p = p.sibling;
            return m
        }
        function i(m, p) {
            return m = hn(m, p),
            m.index = 0,
            m.sibling = null,
            m
        }
        function s(m, p, g) {
            return m.index = g,
            e ? (g = m.alternate,
            g !== null ? (g = g.index,
            g < p ? (m.flags |= 2,
            p) : g) : (m.flags |= 2,
            p)) : (m.flags |= 1048576,
            p)
        }
        function o(m) {
            return e && m.alternate === null && (m.flags |= 2),
            m
        }
        function a(m, p, g, S) {
            return p === null || p.tag !== 6 ? (p = Hl(g, m.mode, S),
            p.return = m,
            p) : (p = i(p, g),
            p.return = m,
            p)
        }
        function l(m, p, g, S) {
            var x = g.type;
            return x === or ? c(m, p, g.props.children, S, g.key) : p !== null && (p.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Kt && yh(x) === p.type) ? (S = i(p, g.props),
            S.ref = li(m, p, g),
            S.return = m,
            S) : (S = vo(g.type, g.key, g.props, null, m.mode, S),
            S.ref = li(m, p, g),
            S.return = m,
            S)
        }
        function u(m, p, g, S) {
            return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = Yl(g, m.mode, S),
            p.return = m,
            p) : (p = i(p, g.children || []),
            p.return = m,
            p)
        }
        function c(m, p, g, S, x) {
            return p === null || p.tag !== 7 ? (p = Bn(g, m.mode, S, x),
            p.return = m,
            p) : (p = i(p, g),
            p.return = m,
            p)
        }
        function f(m, p, g) {
            if (typeof p == "string" && p !== "" || typeof p == "number")
                return p = Hl("" + p, m.mode, g),
                p.return = m,
                p;
            if (typeof p == "object" && p !== null) {
                switch (p.$$typeof) {
                case js:
                    return g = vo(p.type, p.key, p.props, null, m.mode, g),
                    g.ref = li(m, null, p),
                    g.return = m,
                    g;
                case sr:
                    return p = Yl(p, m.mode, g),
                    p.return = m,
                    p;
                case Kt:
                    var S = p._init;
                    return f(m, S(p._payload), g)
                }
                if (hi(p) || ri(p))
                    return p = Bn(p, m.mode, g, null),
                    p.return = m,
                    p;
                Ws(m, p)
            }
            return null
        }
        function d(m, p, g, S) {
            var x = p !== null ? p.key : null;
            if (typeof g == "string" && g !== "" || typeof g == "number")
                return x !== null ? null : a(m, p, "" + g, S);
            if (typeof g == "object" && g !== null) {
                switch (g.$$typeof) {
                case js:
                    return g.key === x ? l(m, p, g, S) : null;
                case sr:
                    return g.key === x ? u(m, p, g, S) : null;
                case Kt:
                    return x = g._init,
                    d(m, p, x(g._payload), S)
                }
                if (hi(g) || ri(g))
                    return x !== null ? null : c(m, p, g, S, null);
                Ws(m, g)
            }
            return null
        }
        function h(m, p, g, S, x) {
            if (typeof S == "string" && S !== "" || typeof S == "number")
                return m = m.get(g) || null,
                a(p, m, "" + S, x);
            if (typeof S == "object" && S !== null) {
                switch (S.$$typeof) {
                case js:
                    return m = m.get(S.key === null ? g : S.key) || null,
                    l(p, m, S, x);
                case sr:
                    return m = m.get(S.key === null ? g : S.key) || null,
                    u(p, m, S, x);
                case Kt:
                    var P = S._init;
                    return h(m, p, g, P(S._payload), x)
                }
                if (hi(S) || ri(S))
                    return m = m.get(g) || null,
                    c(p, m, S, x, null);
                Ws(p, S)
            }
            return null
        }
        function _(m, p, g, S) {
            for (var x = null, P = null, N = p, R = p = 0, A = null; N !== null && R < g.length; R++) {
                N.index > R ? (A = N,
                N = null) : A = N.sibling;
                var M = d(m, N, g[R], S);
                if (M === null) {
                    N === null && (N = A);
                    break
                }
                e && N && M.alternate === null && t(m, N),
                p = s(M, p, R),
                P === null ? x = M : P.sibling = M,
                P = M,
                N = A
            }
            if (R === g.length)
                return n(m, N),
                J && Cn(m, R),
                x;
            if (N === null) {
                for (; R < g.length; R++)
                    N = f(m, g[R], S),
                    N !== null && (p = s(N, p, R),
                    P === null ? x = N : P.sibling = N,
                    P = N);
                return J && Cn(m, R),
                x
            }
            for (N = r(m, N); R < g.length; R++)
                A = h(N, m, R, g[R], S),
                A !== null && (e && A.alternate !== null && N.delete(A.key === null ? R : A.key),
                p = s(A, p, R),
                P === null ? x = A : P.sibling = A,
                P = A);
            return e && N.forEach(function(oe) {
                return t(m, oe)
            }),
            J && Cn(m, R),
            x
        }
        function v(m, p, g, S) {
            var x = ri(g);
            if (typeof x != "function")
                throw Error(k(150));
            if (g = x.call(g),
            g == null)
                throw Error(k(151));
            for (var P = x = null, N = p, R = p = 0, A = null, M = g.next(); N !== null && !M.done; R++,
            M = g.next()) {
                N.index > R ? (A = N,
                N = null) : A = N.sibling;
                var oe = d(m, N, M.value, S);
                if (oe === null) {
                    N === null && (N = A);
                    break
                }
                e && N && oe.alternate === null && t(m, N),
                p = s(oe, p, R),
                P === null ? x = oe : P.sibling = oe,
                P = oe,
                N = A
            }
            if (M.done)
                return n(m, N),
                J && Cn(m, R),
                x;
            if (N === null) {
                for (; !M.done; R++,
                M = g.next())
                    M = f(m, M.value, S),
                    M !== null && (p = s(M, p, R),
                    P === null ? x = M : P.sibling = M,
                    P = M);
                return J && Cn(m, R),
                x
            }
            for (N = r(m, N); !M.done; R++,
            M = g.next())
                M = h(N, m, R, M.value, S),
                M !== null && (e && M.alternate !== null && N.delete(M.key === null ? R : M.key),
                p = s(M, p, R),
                P === null ? x = M : P.sibling = M,
                P = M);
            return e && N.forEach(function(Me) {
                return t(m, Me)
            }),
            J && Cn(m, R),
            x
        }
        function E(m, p, g, S) {
            if (typeof g == "object" && g !== null && g.type === or && g.key === null && (g = g.props.children),
            typeof g == "object" && g !== null) {
                switch (g.$$typeof) {
                case js:
                    e: {
                        for (var x = g.key, P = p; P !== null; ) {
                            if (P.key === x) {
                                if (x = g.type,
                                x === or) {
                                    if (P.tag === 7) {
                                        n(m, P.sibling),
                                        p = i(P, g.props.children),
                                        p.return = m,
                                        m = p;
                                        break e
                                    }
                                } else if (P.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Kt && yh(x) === P.type) {
                                    n(m, P.sibling),
                                    p = i(P, g.props),
                                    p.ref = li(m, P, g),
                                    p.return = m,
                                    m = p;
                                    break e
                                }
                                n(m, P);
                                break
                            } else
                                t(m, P);
                            P = P.sibling
                        }
                        g.type === or ? (p = Bn(g.props.children, m.mode, S, g.key),
                        p.return = m,
                        m = p) : (S = vo(g.type, g.key, g.props, null, m.mode, S),
                        S.ref = li(m, p, g),
                        S.return = m,
                        m = S)
                    }
                    return o(m);
                case sr:
                    e: {
                        for (P = g.key; p !== null; ) {
                            if (p.key === P)
                                if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                    n(m, p.sibling),
                                    p = i(p, g.children || []),
                                    p.return = m,
                                    m = p;
                                    break e
                                } else {
                                    n(m, p);
                                    break
                                }
                            else
                                t(m, p);
                            p = p.sibling
                        }
                        p = Yl(g, m.mode, S),
                        p.return = m,
                        m = p
                    }
                    return o(m);
                case Kt:
                    return P = g._init,
                    E(m, p, P(g._payload), S)
                }
                if (hi(g))
                    return _(m, p, g, S);
                if (ri(g))
                    return v(m, p, g, S);
                Ws(m, g)
            }
            return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g,
            p !== null && p.tag === 6 ? (n(m, p.sibling),
            p = i(p, g),
            p.return = m,
            m = p) : (n(m, p),
            p = Hl(g, m.mode, S),
            p.return = m,
            m = p),
            o(m)) : n(m, p)
        }
        return E
    }
    var Fr = $g(!0)
      , Bg = $g(!1)
      , Ss = {}
      , Ct = Sn(Ss)
      , Ji = Sn(Ss)
      , Zi = Sn(Ss);
    function Mn(e) {
        if (e === Ss)
            throw Error(k(174));
        return e
    }
    function Uf(e, t) {
        switch (q(Zi, t),
        q(Ji, e),
        q(Ct, Ss),
        e = t.nodeType,
        e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Bu(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
            t = e.namespaceURI || null,
            e = e.tagName,
            t = Bu(t, e)
        }
        X(Ct),
        q(Ct, t)
    }
    function zr() {
        X(Ct),
        X(Ji),
        X(Zi)
    }
    function Ug(e) {
        Mn(Zi.current);
        var t = Mn(Ct.current)
          , n = Bu(t, e.type);
        t !== n && (q(Ji, e),
        q(Ct, n))
    }
    function Ff(e) {
        Ji.current === e && (X(Ct),
        X(Ji))
    }
    var te = Sn(0);
    function Xo(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if (t.flags & 128)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var Bl = [];
    function zf() {
        for (var e = 0; e < Bl.length; e++)
            Bl[e]._workInProgressVersionPrimary = null;
        Bl.length = 0
    }
    var ho = Vt.ReactCurrentDispatcher
      , Ul = Vt.ReactCurrentBatchConfig
      , Gn = 0
      , ne = null
      , fe = null
      , ge = null
      , Qo = !1
      , Ni = !1
      , es = 0
      , qw = 0;
    function Te() {
        throw Error(k(321))
    }
    function Vf(e, t) {
        if (t === null)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!yt(e[n], t[n]))
                return !1;
        return !0
    }
    function Gf(e, t, n, r, i, s) {
        if (Gn = s,
        ne = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        ho.current = e === null || e.memoizedState === null ? Jw : Zw,
        e = n(r, i),
        Ni) {
            s = 0;
            do {
                if (Ni = !1,
                es = 0,
                25 <= s)
                    throw Error(k(301));
                s += 1,
                ge = fe = null,
                t.updateQueue = null,
                ho.current = e8,
                e = n(r, i)
            } while (Ni)
        }
        if (ho.current = Jo,
        t = fe !== null && fe.next !== null,
        Gn = 0,
        ge = fe = ne = null,
        Qo = !1,
        t)
            throw Error(k(300));
        return e
    }
    function Hf() {
        var e = es !== 0;
        return es = 0,
        e
    }
    function Tt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return ge === null ? ne.memoizedState = ge = e : ge = ge.next = e,
        ge
    }
    function ut() {
        if (fe === null) {
            var e = ne.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = fe.next;
        var t = ge === null ? ne.memoizedState : ge.next;
        if (t !== null)
            ge = t,
            fe = e;
        else {
            if (e === null)
                throw Error(k(310));
            fe = e,
            e = {
                memoizedState: fe.memoizedState,
                baseState: fe.baseState,
                baseQueue: fe.baseQueue,
                queue: fe.queue,
                next: null
            },
            ge === null ? ne.memoizedState = ge = e : ge = ge.next = e
        }
        return ge
    }
    function ts(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function Fl(e) {
        var t = ut()
          , n = t.queue;
        if (n === null)
            throw Error(k(311));
        n.lastRenderedReducer = e;
        var r = fe
          , i = r.baseQueue
          , s = n.pending;
        if (s !== null) {
            if (i !== null) {
                var o = i.next;
                i.next = s.next,
                s.next = o
            }
            r.baseQueue = i = s,
            n.pending = null
        }
        if (i !== null) {
            s = i.next,
            r = r.baseState;
            var a = o = null
              , l = null
              , u = s;
            do {
                var c = u.lane;
                if ((Gn & c) === c)
                    l !== null && (l = l.next = {
                        lane: 0,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null
                    }),
                    r = u.hasEagerState ? u.eagerState : e(r, u.action);
                else {
                    var f = {
                        lane: c,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null
                    };
                    l === null ? (a = l = f,
                    o = r) : l = l.next = f,
                    ne.lanes |= c,
                    Hn |= c
                }
                u = u.next
            } while (u !== null && u !== s);
            l === null ? o = r : l.next = a,
            yt(r, t.memoizedState) || (Be = !0),
            t.memoizedState = r,
            t.baseState = o,
            t.baseQueue = l,
            n.lastRenderedState = r
        }
        if (e = n.interleaved,
        e !== null) {
            i = e;
            do
                s = i.lane,
                ne.lanes |= s,
                Hn |= s,
                i = i.next;
            while (i !== e)
        } else
            i === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
    }
    function zl(e) {
        var t = ut()
          , n = t.queue;
        if (n === null)
            throw Error(k(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch
          , i = n.pending
          , s = t.memoizedState;
        if (i !== null) {
            n.pending = null;
            var o = i = i.next;
            do
                s = e(s, o.action),
                o = o.next;
            while (o !== i);
            yt(s, t.memoizedState) || (Be = !0),
            t.memoizedState = s,
            t.baseQueue === null && (t.baseState = s),
            n.lastRenderedState = s
        }
        return [s, r]
    }
    function Fg() {}
    function zg(e, t) {
        var n = ne
          , r = ut()
          , i = t()
          , s = !yt(r.memoizedState, i);
        if (s && (r.memoizedState = i,
        Be = !0),
        r = r.queue,
        Yf(Hg.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || s || ge !== null && ge.memoizedState.tag & 1) {
            if (n.flags |= 2048,
            ns(9, Gg.bind(null, n, r, i, t), void 0, null),
            _e === null)
                throw Error(k(349));
            Gn & 30 || Vg(n, t, i)
        }
        return i
    }
    function Vg(e, t, n) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = ne.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        ne.updateQueue = t,
        t.stores = [e]) : (n = t.stores,
        n === null ? t.stores = [e] : n.push(e))
    }
    function Gg(e, t, n, r) {
        t.value = n,
        t.getSnapshot = r,
        Yg(t) && Wg(e)
    }
    function Hg(e, t, n) {
        return n(function() {
            Yg(t) && Wg(e)
        })
    }
    function Yg(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !yt(e, n)
        } catch {
            return !0
        }
    }
    function Wg(e) {
        var t = Ft(e, 1);
        t !== null && _t(t, e, 1, -1)
    }
    function vh(e) {
        var t = Tt();
        return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ts,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = Qw.bind(null, ne, e),
        [t.memoizedState, e]
    }
    function ns(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        },
        t = ne.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        ne.updateQueue = t,
        t.lastEffect = e.next = e) : (n = t.lastEffect,
        n === null ? t.lastEffect = e.next = e : (r = n.next,
        n.next = e,
        e.next = r,
        t.lastEffect = e)),
        e
    }
    function qg() {
        return ut().memoizedState
    }
    function mo(e, t, n, r) {
        var i = Tt();
        ne.flags |= e,
        i.memoizedState = ns(1 | t, n, void 0, r === void 0 ? null : r)
    }
    function za(e, t, n, r) {
        var i = ut();
        r = r === void 0 ? null : r;
        var s = void 0;
        if (fe !== null) {
            var o = fe.memoizedState;
            if (s = o.destroy,
            r !== null && Vf(r, o.deps)) {
                i.memoizedState = ns(t, n, s, r);
                return
            }
        }
        ne.flags |= e,
        i.memoizedState = ns(1 | t, n, s, r)
    }
    function Sh(e, t) {
        return mo(8390656, 8, e, t)
    }
    function Yf(e, t) {
        return za(2048, 8, e, t)
    }
    function Kg(e, t) {
        return za(4, 2, e, t)
    }
    function Xg(e, t) {
        return za(4, 4, e, t)
    }
    function Qg(e, t) {
        if (typeof t == "function")
            return e = e(),
            t(e),
            function() {
                t(null)
            }
            ;
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function Jg(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        za(4, 4, Qg.bind(null, t, e), n)
    }
    function Wf() {}
    function Zg(e, t) {
        var n = ut();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Vf(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
    }
    function e_(e, t) {
        var n = ut();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Vf(t, r[1]) ? r[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
    }
    function t_(e, t, n) {
        return Gn & 21 ? (yt(n, t) || (n = ig(),
        ne.lanes |= n,
        Hn |= n,
        e.baseState = !0),
        t) : (e.baseState && (e.baseState = !1,
        Be = !0),
        e.memoizedState = n)
    }
    function Kw(e, t) {
        var n = H;
        H = n !== 0 && 4 > n ? n : 4,
        e(!0);
        var r = Ul.transition;
        Ul.transition = {};
        try {
            e(!1),
            t()
        } finally {
            H = n,
            Ul.transition = r
        }
    }
    function n_() {
        return ut().memoizedState
    }
    function Xw(e, t, n) {
        var r = pn(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        r_(e))
            i_(t, n);
        else if (n = Mg(e, t, n, r),
        n !== null) {
            var i = Oe();
            _t(n, e, r, i),
            s_(n, t, r)
        }
    }
    function Qw(e, t, n) {
        var r = pn(e)
          , i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (r_(e))
            i_(t, i);
        else {
            var s = e.alternate;
            if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
            s !== null))
                try {
                    var o = t.lastRenderedState
                      , a = s(o, n);
                    if (i.hasEagerState = !0,
                    i.eagerState = a,
                    yt(a, o)) {
                        var l = t.interleaved;
                        l === null ? (i.next = i,
                        $f(t)) : (i.next = l.next,
                        l.next = i),
                        t.interleaved = i;
                        return
                    }
                } catch {} finally {}
            n = Mg(e, t, i, r),
            n !== null && (i = Oe(),
            _t(n, e, r, i),
            s_(n, t, r))
        }
    }
    function r_(e) {
        var t = e.alternate;
        return e === ne || t !== null && t === ne
    }
    function i_(e, t) {
        Ni = Qo = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
    }
    function s_(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            xf(e, n)
        }
    }
    var Jo = {
        readContext: lt,
        useCallback: Te,
        useContext: Te,
        useEffect: Te,
        useImperativeHandle: Te,
        useInsertionEffect: Te,
        useLayoutEffect: Te,
        useMemo: Te,
        useReducer: Te,
        useRef: Te,
        useState: Te,
        useDebugValue: Te,
        useDeferredValue: Te,
        useTransition: Te,
        useMutableSource: Te,
        useSyncExternalStore: Te,
        useId: Te,
        unstable_isNewReconciler: !1
    }
      , Jw = {
        readContext: lt,
        useCallback: function(e, t) {
            return Tt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: lt,
        useEffect: Sh,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null,
            mo(4194308, 4, Qg.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return mo(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return mo(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Tt();
            return t = t === void 0 ? null : t,
            e = e(),
            n.memoizedState = [e, t],
            e
        },
        useReducer: function(e, t, n) {
            var r = Tt();
            return t = n !== void 0 ? n(t) : t,
            r.memoizedState = r.baseState = t,
            e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            },
            r.queue = e,
            e = e.dispatch = Xw.bind(null, ne, e),
            [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Tt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: vh,
        useDebugValue: Wf,
        useDeferredValue: function(e) {
            return Tt().memoizedState = e
        },
        useTransition: function() {
            var e = vh(!1)
              , t = e[0];
            return e = Kw.bind(null, e[1]),
            Tt().memoizedState = e,
            [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ne
              , i = Tt();
            if (J) {
                if (n === void 0)
                    throw Error(k(407));
                n = n()
            } else {
                if (n = t(),
                _e === null)
                    throw Error(k(349));
                Gn & 30 || Vg(r, t, n)
            }
            i.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: t
            };
            return i.queue = s,
            Sh(Hg.bind(null, r, s, e), [e]),
            r.flags |= 2048,
            ns(9, Gg.bind(null, r, s, n, t), void 0, null),
            n
        },
        useId: function() {
            var e = Tt()
              , t = _e.identifierPrefix;
            if (J) {
                var n = Mt
                  , r = At;
                n = (r & ~(1 << 32 - gt(r) - 1)).toString(32) + n,
                t = ":" + t + "R" + n,
                n = es++,
                0 < n && (t += "H" + n.toString(32)),
                t += ":"
            } else
                n = qw++,
                t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
      , Zw = {
        readContext: lt,
        useCallback: Zg,
        useContext: lt,
        useEffect: Yf,
        useImperativeHandle: Jg,
        useInsertionEffect: Kg,
        useLayoutEffect: Xg,
        useMemo: e_,
        useReducer: Fl,
        useRef: qg,
        useState: function() {
            return Fl(ts)
        },
        useDebugValue: Wf,
        useDeferredValue: function(e) {
            var t = ut();
            return t_(t, fe.memoizedState, e)
        },
        useTransition: function() {
            var e = Fl(ts)[0]
              , t = ut().memoizedState;
            return [e, t]
        },
        useMutableSource: Fg,
        useSyncExternalStore: zg,
        useId: n_,
        unstable_isNewReconciler: !1
    }
      , e8 = {
        readContext: lt,
        useCallback: Zg,
        useContext: lt,
        useEffect: Yf,
        useImperativeHandle: Jg,
        useInsertionEffect: Kg,
        useLayoutEffect: Xg,
        useMemo: e_,
        useReducer: zl,
        useRef: qg,
        useState: function() {
            return zl(ts)
        },
        useDebugValue: Wf,
        useDeferredValue: function(e) {
            var t = ut();
            return fe === null ? t.memoizedState = e : t_(t, fe.memoizedState, e)
        },
        useTransition: function() {
            var e = zl(ts)[0]
              , t = ut().memoizedState;
            return [e, t]
        },
        useMutableSource: Fg,
        useSyncExternalStore: zg,
        useId: n_,
        unstable_isNewReconciler: !1
    };
    function Vr(e, t) {
        try {
            var n = ""
              , r = t;
            do
                n += N9(r),
                r = r.return;
            while (r);
            var i = n
        } catch (s) {
            i = `
Error generating stack: ` + s.message + `
` + s.stack
        }
        return {
            value: e,
            source: t,
            stack: i,
            digest: null
        }
    }
    function Vl(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        }
    }
    function lc(e, t) {
        try {
            console.error(t.value)
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    var t8 = typeof WeakMap == "function" ? WeakMap : Map;
    function o_(e, t, n) {
        n = Lt(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            ea || (ea = !0,
            yc = r),
            lc(e, t)
        }
        ,
        n
    }
    function a_(e, t, n) {
        n = Lt(-1, n),
        n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var i = t.value;
            n.payload = function() {
                return r(i)
            }
            ,
            n.callback = function() {
                lc(e, t)
            }
        }
        var s = e.stateNode;
        return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
            lc(e, t),
            typeof r != "function" && (dn === null ? dn = new Set([this]) : dn.add(this));
            var o = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: o !== null ? o : ""
            })
        }
        ),
        n
    }
    function Eh(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new t8;
            var i = new Set;
            r.set(t, i)
        } else
            i = r.get(t),
            i === void 0 && (i = new Set,
            r.set(t, i));
        i.has(n) || (i.add(n),
        e = m8.bind(null, e, t, n),
        t.then(e, e))
    }
    function wh(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
                return e;
            e = e.return
        } while (e !== null);
        return null
    }
    function Th(e, t, n, r, i) {
        return e.mode & 1 ? (e.flags |= 65536,
        e.lanes = i,
        e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
        n.flags |= 131072,
        n.flags &= -52805,
        n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Lt(-1, 1),
        t.tag = 2,
        fn(n, t, 1))),
        n.lanes |= 1),
        e)
    }
    var n8 = Vt.ReactCurrentOwner
      , Be = !1;
    function Ne(e, t, n, r) {
        t.child = e === null ? Bg(t, null, n, r) : Fr(t, e.child, n, r)
    }
    function xh(e, t, n, r, i) {
        n = n.render;
        var s = t.ref;
        return Cr(t, i),
        r = Gf(e, t, n, r, s, i),
        n = Hf(),
        e !== null && !Be ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~i,
        zt(e, t, i)) : (J && n && If(t),
        t.flags |= 1,
        Ne(e, t, r, i),
        t.child)
    }
    function kh(e, t, n, r, i) {
        if (e === null) {
            var s = n.type;
            return typeof s == "function" && !td(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
            t.type = s,
            l_(e, t, s, r, i)) : (e = vo(n.type, null, r, t, t.mode, i),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (s = e.child,
        !(e.lanes & i)) {
            var o = s.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : qi,
            n(o, r) && e.ref === t.ref)
                return zt(e, t, i)
        }
        return t.flags |= 1,
        e = hn(s, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function l_(e, t, n, r, i) {
        if (e !== null) {
            var s = e.memoizedProps;
            if (qi(s, r) && e.ref === t.ref)
                if (Be = !1,
                t.pendingProps = r = s,
                (e.lanes & i) !== 0)
                    e.flags & 131072 && (Be = !0);
                else
                    return t.lanes = e.lanes,
                    zt(e, t, i)
        }
        return uc(e, t, n, r, i)
    }
    function u_(e, t, n) {
        var r = t.pendingProps
          , i = r.children
          , s = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden")
            if (!(t.mode & 1))
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                q(gr, He),
                He |= n;
            else {
                if (!(n & 1073741824))
                    return e = s !== null ? s.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    q(gr, He),
                    He |= e,
                    null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                r = s !== null ? s.baseLanes : n,
                q(gr, He),
                He |= r
            }
        else
            s !== null ? (r = s.baseLanes | n,
            t.memoizedState = null) : r = n,
            q(gr, He),
            He |= r;
        return Ne(e, t, i, n),
        t.child
    }
    function c_(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
        t.flags |= 2097152)
    }
    function uc(e, t, n, r, i) {
        var s = ze(n) ? zn : Re.current;
        return s = Br(t, s),
        Cr(t, i),
        n = Gf(e, t, n, r, s, i),
        r = Hf(),
        e !== null && !Be ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~i,
        zt(e, t, i)) : (J && r && If(t),
        t.flags |= 1,
        Ne(e, t, n, i),
        t.child)
    }
    function Rh(e, t, n, r, i) {
        if (ze(n)) {
            var s = !0;
            Go(t)
        } else
            s = !1;
        if (Cr(t, i),
        t.stateNode === null)
            go(e, t),
            Lg(t, n, r),
            ac(t, n, r, i),
            r = !0;
        else if (e === null) {
            var o = t.stateNode
              , a = t.memoizedProps;
            o.props = a;
            var l = o.context
              , u = n.contextType;
            typeof u == "object" && u !== null ? u = lt(u) : (u = ze(n) ? zn : Re.current,
            u = Br(t, u));
            var c = n.getDerivedStateFromProps
              , f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
            f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && _h(t, o, r, u),
            Xt = !1;
            var d = t.memoizedState;
            o.state = d,
            Ko(t, r, o, i),
            l = t.memoizedState,
            a !== r || d !== l || Fe.current || Xt ? (typeof c == "function" && (oc(t, n, c, r),
            l = t.memoizedState),
            (a = Xt || gh(t, n, a, r, d, l, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
            typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = r,
            t.memoizedState = l),
            o.props = r,
            o.state = l,
            o.context = u,
            r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            r = !1)
        } else {
            o = t.stateNode,
            bg(e, t),
            a = t.memoizedProps,
            u = t.type === t.elementType ? a : ft(t.type, a),
            o.props = u,
            f = t.pendingProps,
            d = o.context,
            l = n.contextType,
            typeof l == "object" && l !== null ? l = lt(l) : (l = ze(n) ? zn : Re.current,
            l = Br(t, l));
            var h = n.getDerivedStateFromProps;
            (c = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== f || d !== l) && _h(t, o, r, l),
            Xt = !1,
            d = t.memoizedState,
            o.state = d,
            Ko(t, r, o, i);
            var _ = t.memoizedState;
            a !== f || d !== _ || Fe.current || Xt ? (typeof h == "function" && (oc(t, n, h, r),
            _ = t.memoizedState),
            (u = Xt || gh(t, n, u, r, d, _, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, _, l),
            typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, _, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = r,
            t.memoizedState = _),
            o.props = r,
            o.state = _,
            o.context = l,
            r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
            r = !1)
        }
        return cc(e, t, n, r, s, i)
    }
    function cc(e, t, n, r, i, s) {
        c_(e, t);
        var o = (t.flags & 128) !== 0;
        if (!r && !o)
            return i && fh(t, n, !1),
            zt(e, t, s);
        r = t.stateNode,
        n8.current = t;
        var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1,
        e !== null && o ? (t.child = Fr(t, e.child, null, s),
        t.child = Fr(t, null, a, s)) : Ne(e, t, a, s),
        t.memoizedState = r.state,
        i && fh(t, n, !0),
        t.child
    }
    function f_(e) {
        var t = e.stateNode;
        t.pendingContext ? ch(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ch(e, t.context, !1),
        Uf(e, t.containerInfo)
    }
    function Ch(e, t, n, r, i) {
        return Ur(),
        Mf(i),
        t.flags |= 256,
        Ne(e, t, n, r),
        t.child
    }
    var fc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function dc(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }
    function d_(e, t, n) {
        var r = t.pendingProps, i = te.current, s = !1, o = (t.flags & 128) !== 0, a;
        if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        a ? (s = !0,
        t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
        q(te, i & 1),
        e === null)
            return ic(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
            null) : (o = r.children,
            e = r.fallback,
            s ? (r = t.mode,
            s = t.child,
            o = {
                mode: "hidden",
                children: o
            },
            !(r & 1) && s !== null ? (s.childLanes = 0,
            s.pendingProps = o) : s = Ha(o, r, 0, null),
            e = Bn(e, r, n, null),
            s.return = t,
            e.return = t,
            s.sibling = e,
            t.child = s,
            t.child.memoizedState = dc(n),
            t.memoizedState = fc,
            e) : qf(t, o));
        if (i = e.memoizedState,
        i !== null && (a = i.dehydrated,
        a !== null))
            return r8(e, t, o, r, a, i, n);
        if (s) {
            s = r.fallback,
            o = t.mode,
            i = e.child,
            a = i.sibling;
            var l = {
                mode: "hidden",
                children: r.children
            };
            return !(o & 1) && t.child !== i ? (r = t.child,
            r.childLanes = 0,
            r.pendingProps = l,
            t.deletions = null) : (r = hn(i, l),
            r.subtreeFlags = i.subtreeFlags & 14680064),
            a !== null ? s = hn(a, s) : (s = Bn(s, o, n, null),
            s.flags |= 2),
            s.return = t,
            r.return = t,
            r.sibling = s,
            t.child = r,
            r = s,
            s = t.child,
            o = e.child.memoizedState,
            o = o === null ? dc(n) : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions
            },
            s.memoizedState = o,
            s.childLanes = e.childLanes & ~n,
            t.memoizedState = fc,
            r
        }
        return s = e.child,
        e = s.sibling,
        r = hn(s, {
            mode: "visible",
            children: r.children
        }),
        !(t.mode & 1) && (r.lanes = n),
        r.return = t,
        r.sibling = null,
        e !== null && (n = t.deletions,
        n === null ? (t.deletions = [e],
        t.flags |= 16) : n.push(e)),
        t.child = r,
        t.memoizedState = null,
        r
    }
    function qf(e, t) {
        return t = Ha({
            mode: "visible",
            children: t
        }, e.mode, 0, null),
        t.return = e,
        e.child = t
    }
    function qs(e, t, n, r) {
        return r !== null && Mf(r),
        Fr(t, e.child, null, n),
        e = qf(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function r8(e, t, n, r, i, s, o) {
        if (n)
            return t.flags & 256 ? (t.flags &= -257,
            r = Vl(Error(k(422))),
            qs(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
            t.flags |= 128,
            null) : (s = r.fallback,
            i = t.mode,
            r = Ha({
                mode: "visible",
                children: r.children
            }, i, 0, null),
            s = Bn(s, i, o, null),
            s.flags |= 2,
            r.return = t,
            s.return = t,
            r.sibling = s,
            t.child = r,
            t.mode & 1 && Fr(t, e.child, null, o),
            t.child.memoizedState = dc(o),
            t.memoizedState = fc,
            s);
        if (!(t.mode & 1))
            return qs(e, t, o, null);
        if (i.data === "$!") {
            if (r = i.nextSibling && i.nextSibling.dataset,
            r)
                var a = r.dgst;
            return r = a,
            s = Error(k(419)),
            r = Vl(s, r, void 0),
            qs(e, t, o, r)
        }
        if (a = (o & e.childLanes) !== 0,
        Be || a) {
            if (r = _e,
            r !== null) {
                switch (o & -o) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
                }
                i = i & (r.suspendedLanes | o) ? 0 : i,
                i !== 0 && i !== s.retryLane && (s.retryLane = i,
                Ft(e, i),
                _t(r, e, i, -1))
            }
            return ed(),
            r = Vl(Error(k(421))),
            qs(e, t, o, r)
        }
        return i.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = g8.bind(null, e),
        i._reactRetry = t,
        null) : (e = s.treeContext,
        We = cn(i.nextSibling),
        Ke = t,
        J = !0,
        ht = null,
        e !== null && (nt[rt++] = At,
        nt[rt++] = Mt,
        nt[rt++] = Vn,
        At = e.id,
        Mt = e.overflow,
        Vn = t),
        t = qf(t, r.children),
        t.flags |= 4096,
        t)
    }
    function Nh(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t),
        sc(e.return, t, n)
    }
    function Gl(e, t, n, r, i) {
        var s = e.memoizedState;
        s === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i
        } : (s.isBackwards = t,
        s.rendering = null,
        s.renderingStartTime = 0,
        s.last = r,
        s.tail = n,
        s.tailMode = i)
    }
    function p_(e, t, n) {
        var r = t.pendingProps
          , i = r.revealOrder
          , s = r.tail;
        if (Ne(e, t, r.children, n),
        r = te.current,
        r & 2)
            r = r & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && e.flags & 128)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && Nh(e, n, t);
                    else if (e.tag === 19)
                        Nh(e, n, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            r &= 1
        }
        if (q(te, r),
        !(t.mode & 1))
            t.memoizedState = null;
        else
            switch (i) {
            case "forwards":
                for (n = t.child,
                i = null; n !== null; )
                    e = n.alternate,
                    e !== null && Xo(e) === null && (i = n),
                    n = n.sibling;
                n = i,
                n === null ? (i = t.child,
                t.child = null) : (i = n.sibling,
                n.sibling = null),
                Gl(t, !1, i, n, s);
                break;
            case "backwards":
                for (n = null,
                i = t.child,
                t.child = null; i !== null; ) {
                    if (e = i.alternate,
                    e !== null && Xo(e) === null) {
                        t.child = i;
                        break
                    }
                    e = i.sibling,
                    i.sibling = n,
                    n = i,
                    i = e
                }
                Gl(t, !0, n, null, s);
                break;
            case "together":
                Gl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
            }
        return t.child
    }
    function go(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
    }
    function zt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies),
        Hn |= t.lanes,
        !(n & t.childLanes))
            return null;
        if (e !== null && t.child !== e.child)
            throw Error(k(153));
        if (t.child !== null) {
            for (e = t.child,
            n = hn(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null; )
                e = e.sibling,
                n = n.sibling = hn(e, e.pendingProps),
                n.return = t;
            n.sibling = null
        }
        return t.child
    }
    function i8(e, t, n) {
        switch (t.tag) {
        case 3:
            f_(t),
            Ur();
            break;
        case 5:
            Ug(t);
            break;
        case 1:
            ze(t.type) && Go(t);
            break;
        case 4:
            Uf(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context
              , i = t.memoizedProps.value;
            q(Wo, r._currentValue),
            r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState,
            r !== null)
                return r.dehydrated !== null ? (q(te, te.current & 1),
                t.flags |= 128,
                null) : n & t.child.childLanes ? d_(e, t, n) : (q(te, te.current & 1),
                e = zt(e, t, n),
                e !== null ? e.sibling : null);
            q(te, te.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0,
            e.flags & 128) {
                if (r)
                    return p_(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState,
            i !== null && (i.rendering = null,
            i.tail = null,
            i.lastEffect = null),
            q(te, te.current),
            r)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            u_(e, t, n)
        }
        return zt(e, t, n)
    }
    var h_, pc, m_, g_;
    h_ = function(e, t) {
        for (var n = t.child; n !== null; ) {
            if (n.tag === 5 || n.tag === 6)
                e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n,
                n = n.child;
                continue
            }
            if (n === t)
                break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === t)
                    return;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
    }
    ;
    pc = function() {}
    ;
    m_ = function(e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
            e = t.stateNode,
            Mn(Ct.current);
            var s = null;
            switch (n) {
            case "input":
                i = bu(e, i),
                r = bu(e, r),
                s = [];
                break;
            case "select":
                i = re({}, i, {
                    value: void 0
                }),
                r = re({}, r, {
                    value: void 0
                }),
                s = [];
                break;
            case "textarea":
                i = $u(e, i),
                r = $u(e, r),
                s = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = zo)
            }
            Uu(n, r);
            var o;
            n = null;
            for (u in i)
                if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                    if (u === "style") {
                        var a = i[u];
                        for (o in a)
                            a.hasOwnProperty(o) && (n || (n = {}),
                            n[o] = "")
                    } else
                        u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Fi.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
            for (u in r) {
                var l = r[u];
                if (a = i != null ? i[u] : void 0,
                r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                    if (u === "style")
                        if (a) {
                            for (o in a)
                                !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}),
                                n[o] = "");
                            for (o in l)
                                l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}),
                                n[o] = l[o])
                        } else
                            n || (s || (s = []),
                            s.push(u, n)),
                            n = l;
                    else
                        u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                        a = a ? a.__html : void 0,
                        l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Fi.hasOwnProperty(u) ? (l != null && u === "onScroll" && K("scroll", e),
                        s || a === l || (s = [])) : (s = s || []).push(u, l))
            }
            n && (s = s || []).push("style", n);
            var u = s;
            (t.updateQueue = u) && (t.flags |= 4)
        }
    }
    ;
    g_ = function(e, t, n, r) {
        n !== r && (t.flags |= 4)
    }
    ;
    function ui(e, t) {
        if (!J)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t),
                    t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n),
                    n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
            }
    }
    function xe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , n = 0
          , r = 0;
        if (t)
            for (var i = e.child; i !== null; )
                n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags & 14680064,
                r |= i.flags & 14680064,
                i.return = e,
                i = i.sibling;
        else
            for (i = e.child; i !== null; )
                n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags,
                r |= i.flags,
                i.return = e,
                i = i.sibling;
        return e.subtreeFlags |= r,
        e.childLanes = n,
        t
    }
    function s8(e, t, n) {
        var r = t.pendingProps;
        switch (Af(t),
        t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return xe(t),
            null;
        case 1:
            return ze(t.type) && Vo(),
            xe(t),
            null;
        case 3:
            return r = t.stateNode,
            zr(),
            X(Fe),
            X(Re),
            zf(),
            r.pendingContext && (r.context = r.pendingContext,
            r.pendingContext = null),
            (e === null || e.child === null) && (Ys(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
            ht !== null && (Ec(ht),
            ht = null))),
            pc(e, t),
            xe(t),
            null;
        case 5:
            Ff(t);
            var i = Mn(Zi.current);
            if (n = t.type,
            e !== null && t.stateNode != null)
                m_(e, t, n, r, i),
                e.ref !== t.ref && (t.flags |= 512,
                t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(k(166));
                    return xe(t),
                    null
                }
                if (e = Mn(Ct.current),
                Ys(t)) {
                    r = t.stateNode,
                    n = t.type;
                    var s = t.memoizedProps;
                    switch (r[xt] = t,
                    r[Qi] = s,
                    e = (t.mode & 1) !== 0,
                    n) {
                    case "dialog":
                        K("cancel", r),
                        K("close", r);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        K("load", r);
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < gi.length; i++)
                            K(gi[i], r);
                        break;
                    case "source":
                        K("error", r);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        K("error", r),
                        K("load", r);
                        break;
                    case "details":
                        K("toggle", r);
                        break;
                    case "input":
                        Lp(r, s),
                        K("invalid", r);
                        break;
                    case "select":
                        r._wrapperState = {
                            wasMultiple: !!s.multiple
                        },
                        K("invalid", r);
                        break;
                    case "textarea":
                        Bp(r, s),
                        K("invalid", r)
                    }
                    Uu(n, s),
                    i = null;
                    for (var o in s)
                        if (s.hasOwnProperty(o)) {
                            var a = s[o];
                            o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Hs(r.textContent, a, e),
                            i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Hs(r.textContent, a, e),
                            i = ["children", "" + a]) : Fi.hasOwnProperty(o) && a != null && o === "onScroll" && K("scroll", r)
                        }
                    switch (n) {
                    case "input":
                        Ls(r),
                        $p(r, s, !0);
                        break;
                    case "textarea":
                        Ls(r),
                        Up(r);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof s.onClick == "function" && (r.onclick = zo)
                    }
                    r = i,
                    t.updateQueue = r,
                    r !== null && (t.flags |= 4)
                } else {
                    o = i.nodeType === 9 ? i : i.ownerDocument,
                    e === "http://www.w3.org/1999/xhtml" && (e = Vm(n)),
                    e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                    e.innerHTML = "<script><\/script>",
                    e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n),
                    n === "select" && (o = e,
                    r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                    e[xt] = t,
                    e[Qi] = r,
                    h_(e, t, !1, !1),
                    t.stateNode = e;
                    e: {
                        switch (o = Fu(n, r),
                        n) {
                        case "dialog":
                            K("cancel", e),
                            K("close", e),
                            i = r;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            K("load", e),
                            i = r;
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < gi.length; i++)
                                K(gi[i], e);
                            i = r;
                            break;
                        case "source":
                            K("error", e),
                            i = r;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            K("error", e),
                            K("load", e),
                            i = r;
                            break;
                        case "details":
                            K("toggle", e),
                            i = r;
                            break;
                        case "input":
                            Lp(e, r),
                            i = bu(e, r),
                            K("invalid", e);
                            break;
                        case "option":
                            i = r;
                            break;
                        case "select":
                            e._wrapperState = {
                                wasMultiple: !!r.multiple
                            },
                            i = re({}, r, {
                                value: void 0
                            }),
                            K("invalid", e);
                            break;
                        case "textarea":
                            Bp(e, r),
                            i = $u(e, r),
                            K("invalid", e);
                            break;
                        default:
                            i = r
                        }
                        Uu(n, i),
                        a = i;
                        for (s in a)
                            if (a.hasOwnProperty(s)) {
                                var l = a[s];
                                s === "style" ? Ym(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                                l != null && Gm(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && zi(e, l) : typeof l == "number" && zi(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Fi.hasOwnProperty(s) ? l != null && s === "onScroll" && K("scroll", e) : l != null && yf(e, s, l, o))
                            }
                        switch (n) {
                        case "input":
                            Ls(e),
                            $p(e, r, !1);
                            break;
                        case "textarea":
                            Ls(e),
                            Up(e);
                            break;
                        case "option":
                            r.value != null && e.setAttribute("value", "" + _n(r.value));
                            break;
                        case "select":
                            e.multiple = !!r.multiple,
                            s = r.value,
                            s != null ? Tr(e, !!r.multiple, s, !1) : r.defaultValue != null && Tr(e, !!r.multiple, r.defaultValue, !0);
                            break;
                        default:
                            typeof i.onClick == "function" && (e.onclick = zo)
                        }
                        switch (n) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            r = !!r.autoFocus;
                            break e;
                        case "img":
                            r = !0;
                            break e;
                        default:
                            r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                t.flags |= 2097152)
            }
            return xe(t),
            null;
        case 6:
            if (e && t.stateNode != null)
                g_(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(k(166));
                if (n = Mn(Zi.current),
                Mn(Ct.current),
                Ys(t)) {
                    if (r = t.stateNode,
                    n = t.memoizedProps,
                    r[xt] = t,
                    (s = r.nodeValue !== n) && (e = Ke,
                    e !== null))
                        switch (e.tag) {
                        case 3:
                            Hs(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Hs(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    s && (t.flags |= 4)
                } else
                    r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                    r[xt] = t,
                    t.stateNode = r
            }
            return xe(t),
            null;
        case 13:
            if (X(te),
            r = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (J && We !== null && t.mode & 1 && !(t.flags & 128))
                    Ag(),
                    Ur(),
                    t.flags |= 98560,
                    s = !1;
                else if (s = Ys(t),
                r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!s)
                            throw Error(k(318));
                        if (s = t.memoizedState,
                        s = s !== null ? s.dehydrated : null,
                        !s)
                            throw Error(k(317));
                        s[xt] = t
                    } else
                        Ur(),
                        !(t.flags & 128) && (t.memoizedState = null),
                        t.flags |= 4;
                    xe(t),
                    s = !1
                } else
                    ht !== null && (Ec(ht),
                    ht = null),
                    s = !0;
                if (!s)
                    return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n,
            t) : (r = r !== null,
            r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
            t.mode & 1 && (e === null || te.current & 1 ? pe === 0 && (pe = 3) : ed())),
            t.updateQueue !== null && (t.flags |= 4),
            xe(t),
            null);
        case 4:
            return zr(),
            pc(e, t),
            e === null && Ki(t.stateNode.containerInfo),
            xe(t),
            null;
        case 10:
            return Lf(t.type._context),
            xe(t),
            null;
        case 17:
            return ze(t.type) && Vo(),
            xe(t),
            null;
        case 19:
            if (X(te),
            s = t.memoizedState,
            s === null)
                return xe(t),
                null;
            if (r = (t.flags & 128) !== 0,
            o = s.rendering,
            o === null)
                if (r)
                    ui(s, !1);
                else {
                    if (pe !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null; ) {
                            if (o = Xo(e),
                            o !== null) {
                                for (t.flags |= 128,
                                ui(s, !1),
                                r = o.updateQueue,
                                r !== null && (t.updateQueue = r,
                                t.flags |= 4),
                                t.subtreeFlags = 0,
                                r = n,
                                n = t.child; n !== null; )
                                    s = n,
                                    e = r,
                                    s.flags &= 14680066,
                                    o = s.alternate,
                                    o === null ? (s.childLanes = 0,
                                    s.lanes = e,
                                    s.child = null,
                                    s.subtreeFlags = 0,
                                    s.memoizedProps = null,
                                    s.memoizedState = null,
                                    s.updateQueue = null,
                                    s.dependencies = null,
                                    s.stateNode = null) : (s.childLanes = o.childLanes,
                                    s.lanes = o.lanes,
                                    s.child = o.child,
                                    s.subtreeFlags = 0,
                                    s.deletions = null,
                                    s.memoizedProps = o.memoizedProps,
                                    s.memoizedState = o.memoizedState,
                                    s.updateQueue = o.updateQueue,
                                    s.type = o.type,
                                    e = o.dependencies,
                                    s.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }),
                                    n = n.sibling;
                                return q(te, te.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && ue() > Gr && (t.flags |= 128,
                    r = !0,
                    ui(s, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Xo(o),
                    e !== null) {
                        if (t.flags |= 128,
                        r = !0,
                        n = e.updateQueue,
                        n !== null && (t.updateQueue = n,
                        t.flags |= 4),
                        ui(s, !0),
                        s.tail === null && s.tailMode === "hidden" && !o.alternate && !J)
                            return xe(t),
                            null
                    } else
                        2 * ue() - s.renderingStartTime > Gr && n !== 1073741824 && (t.flags |= 128,
                        r = !0,
                        ui(s, !1),
                        t.lanes = 4194304);
                s.isBackwards ? (o.sibling = t.child,
                t.child = o) : (n = s.last,
                n !== null ? n.sibling = o : t.child = o,
                s.last = o)
            }
            return s.tail !== null ? (t = s.tail,
            s.rendering = t,
            s.tail = t.sibling,
            s.renderingStartTime = ue(),
            t.sibling = null,
            n = te.current,
            q(te, r ? n & 1 | 2 : n & 1),
            t) : (xe(t),
            null);
        case 22:
        case 23:
            return Zf(),
            r = t.memoizedState !== null,
            e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
            r && t.mode & 1 ? He & 1073741824 && (xe(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(k(156, t.tag))
    }
    function o8(e, t) {
        switch (Af(t),
        t.tag) {
        case 1:
            return ze(t.type) && Vo(),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return zr(),
            X(Fe),
            X(Re),
            zf(),
            e = t.flags,
            e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
            t) : null;
        case 5:
            return Ff(t),
            null;
        case 13:
            if (X(te),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(k(340));
                Ur()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return X(te),
            null;
        case 4:
            return zr(),
            null;
        case 10:
            return Lf(t.type._context),
            null;
        case 22:
        case 23:
            return Zf(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var Ks = !1
      , ke = !1
      , a8 = typeof WeakSet == "function" ? WeakSet : Set
      , O = null;
    function mr(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function")
                try {
                    n(null)
                } catch (r) {
                    se(e, t, r)
                }
            else
                n.current = null
    }
    function hc(e, t, n) {
        try {
            n()
        } catch (r) {
            se(e, t, r)
        }
    }
    var Ph = !1;
    function l8(e, t) {
        if (Qu = Bo,
        e = Sg(),
        Of(e)) {
            if ("selectionStart"in e)
                var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var r = n.getSelection && n.getSelection();
                    if (r && r.rangeCount !== 0) {
                        n = r.anchorNode;
                        var i = r.anchorOffset
                          , s = r.focusNode;
                        r = r.focusOffset;
                        try {
                            n.nodeType,
                            s.nodeType
                        } catch {
                            n = null;
                            break e
                        }
                        var o = 0
                          , a = -1
                          , l = -1
                          , u = 0
                          , c = 0
                          , f = e
                          , d = null;
                        t: for (; ; ) {
                            for (var h; f !== n || i !== 0 && f.nodeType !== 3 || (a = o + i),
                            f !== s || r !== 0 && f.nodeType !== 3 || (l = o + r),
                            f.nodeType === 3 && (o += f.nodeValue.length),
                            (h = f.firstChild) !== null; )
                                d = f,
                                f = h;
                            for (; ; ) {
                                if (f === e)
                                    break t;
                                if (d === n && ++u === i && (a = o),
                                d === s && ++c === r && (l = o),
                                (h = f.nextSibling) !== null)
                                    break;
                                f = d,
                                d = f.parentNode
                            }
                            f = h
                        }
                        n = a === -1 || l === -1 ? null : {
                            start: a,
                            end: l
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (Ju = {
            focusedElem: e,
            selectionRange: n
        },
        Bo = !1,
        O = t; O !== null; )
            if (t = O,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                O = e;
            else
                for (; O !== null; ) {
                    t = O;
                    try {
                        var _ = t.alternate;
                        if (t.flags & 1024)
                            switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (_ !== null) {
                                    var v = _.memoizedProps
                                      , E = _.memoizedState
                                      , m = t.stateNode
                                      , p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ft(t.type, v), E);
                                    m.__reactInternalSnapshotBeforeUpdate = p
                                }
                                break;
                            case 3:
                                var g = t.stateNode.containerInfo;
                                g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(k(163))
                            }
                    } catch (S) {
                        se(t, t.return, S)
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        O = e;
                        break
                    }
                    O = t.return
                }
        return _ = Ph,
        Ph = !1,
        _
    }
    function Pi(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null,
        r !== null) {
            var i = r = r.next;
            do {
                if ((i.tag & e) === e) {
                    var s = i.destroy;
                    i.destroy = void 0,
                    s !== void 0 && hc(t, n, s)
                }
                i = i.next
            } while (i !== r)
        }
    }
    function Va(e, t) {
        if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r()
                }
                n = n.next
            } while (n !== t)
        }
    }
    function mc(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }
    function __(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        __(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && (delete t[xt],
        delete t[Qi],
        delete t[tc],
        delete t[Gw],
        delete t[Hw])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    function y_(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }
    function Dh(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || y_(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function gc(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
            t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
            t.insertBefore(e, n)) : (t = n,
            t.appendChild(e)),
            n = n._reactRootContainer,
            n != null || t.onclick !== null || (t.onclick = zo));
        else if (r !== 4 && (e = e.child,
        e !== null))
            for (gc(e, t, n),
            e = e.sibling; e !== null; )
                gc(e, t, n),
                e = e.sibling
    }
    function _c(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child,
        e !== null))
            for (_c(e, t, n),
            e = e.sibling; e !== null; )
                _c(e, t, n),
                e = e.sibling
    }
    var ve = null
      , dt = !1;
    function Ht(e, t, n) {
        for (n = n.child; n !== null; )
            v_(e, t, n),
            n = n.sibling
    }
    function v_(e, t, n) {
        if (Rt && typeof Rt.onCommitFiberUnmount == "function")
            try {
                Rt.onCommitFiberUnmount(ba, n)
            } catch {}
        switch (n.tag) {
        case 5:
            ke || mr(n, t);
        case 6:
            var r = ve
              , i = dt;
            ve = null,
            Ht(e, t, n),
            ve = r,
            dt = i,
            ve !== null && (dt ? (e = ve,
            n = n.stateNode,
            e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ve.removeChild(n.stateNode));
            break;
        case 18:
            ve !== null && (dt ? (e = ve,
            n = n.stateNode,
            e.nodeType === 8 ? Ll(e.parentNode, n) : e.nodeType === 1 && Ll(e, n),
            Yi(e)) : Ll(ve, n.stateNode));
            break;
        case 4:
            r = ve,
            i = dt,
            ve = n.stateNode.containerInfo,
            dt = !0,
            Ht(e, t, n),
            ve = r,
            dt = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ke && (r = n.updateQueue,
            r !== null && (r = r.lastEffect,
            r !== null))) {
                i = r = r.next;
                do {
                    var s = i
                      , o = s.destroy;
                    s = s.tag,
                    o !== void 0 && (s & 2 || s & 4) && hc(n, t, o),
                    i = i.next
                } while (i !== r)
            }
            Ht(e, t, n);
            break;
        case 1:
            if (!ke && (mr(n, t),
            r = n.stateNode,
            typeof r.componentWillUnmount == "function"))
                try {
                    r.props = n.memoizedProps,
                    r.state = n.memoizedState,
                    r.componentWillUnmount()
                } catch (a) {
                    se(n, t, a)
                }
            Ht(e, t, n);
            break;
        case 21:
            Ht(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ke = (r = ke) || n.memoizedState !== null,
            Ht(e, t, n),
            ke = r) : Ht(e, t, n);
            break;
        default:
            Ht(e, t, n)
        }
    }
    function Oh(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new a8),
            t.forEach(function(r) {
                var i = _8.bind(null, e, r);
                n.has(r) || (n.add(r),
                r.then(i, i))
            })
        }
    }
    function ct(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                try {
                    var s = e
                      , o = t
                      , a = o;
                    e: for (; a !== null; ) {
                        switch (a.tag) {
                        case 5:
                            ve = a.stateNode,
                            dt = !1;
                            break e;
                        case 3:
                            ve = a.stateNode.containerInfo,
                            dt = !0;
                            break e;
                        case 4:
                            ve = a.stateNode.containerInfo,
                            dt = !0;
                            break e
                        }
                        a = a.return
                    }
                    if (ve === null)
                        throw Error(k(160));
                    v_(s, o, i),
                    ve = null,
                    dt = !1;
                    var l = i.alternate;
                    l !== null && (l.return = null),
                    i.return = null
                } catch (u) {
                    se(i, t, u)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null; )
                S_(t, e),
                t = t.sibling
    }
    function S_(e, t) {
        var n = e.alternate
          , r = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ct(t, e),
            Et(e),
            r & 4) {
                try {
                    Pi(3, e, e.return),
                    Va(3, e)
                } catch (v) {
                    se(e, e.return, v)
                }
                try {
                    Pi(5, e, e.return)
                } catch (v) {
                    se(e, e.return, v)
                }
            }
            break;
        case 1:
            ct(t, e),
            Et(e),
            r & 512 && n !== null && mr(n, n.return);
            break;
        case 5:
            if (ct(t, e),
            Et(e),
            r & 512 && n !== null && mr(n, n.return),
            e.flags & 32) {
                var i = e.stateNode;
                try {
                    zi(i, "")
                } catch (v) {
                    se(e, e.return, v)
                }
            }
            if (r & 4 && (i = e.stateNode,
            i != null)) {
                var s = e.memoizedProps
                  , o = n !== null ? n.memoizedProps : s
                  , a = e.type
                  , l = e.updateQueue;
                if (e.updateQueue = null,
                l !== null)
                    try {
                        a === "input" && s.type === "radio" && s.name != null && Fm(i, s),
                        Fu(a, o);
                        var u = Fu(a, s);
                        for (o = 0; o < l.length; o += 2) {
                            var c = l[o]
                              , f = l[o + 1];
                            c === "style" ? Ym(i, f) : c === "dangerouslySetInnerHTML" ? Gm(i, f) : c === "children" ? zi(i, f) : yf(i, c, f, u)
                        }
                        switch (a) {
                        case "input":
                            ju(i, s);
                            break;
                        case "textarea":
                            zm(i, s);
                            break;
                        case "select":
                            var d = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!s.multiple;
                            var h = s.value;
                            h != null ? Tr(i, !!s.multiple, h, !1) : d !== !!s.multiple && (s.defaultValue != null ? Tr(i, !!s.multiple, s.defaultValue, !0) : Tr(i, !!s.multiple, s.multiple ? [] : "", !1))
                        }
                        i[Qi] = s
                    } catch (v) {
                        se(e, e.return, v)
                    }
            }
            break;
        case 6:
            if (ct(t, e),
            Et(e),
            r & 4) {
                if (e.stateNode === null)
                    throw Error(k(162));
                i = e.stateNode,
                s = e.memoizedProps;
                try {
                    i.nodeValue = s
                } catch (v) {
                    se(e, e.return, v)
                }
            }
            break;
        case 3:
            if (ct(t, e),
            Et(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Yi(t.containerInfo)
                } catch (v) {
                    se(e, e.return, v)
                }
            break;
        case 4:
            ct(t, e),
            Et(e);
            break;
        case 13:
            ct(t, e),
            Et(e),
            i = e.child,
            i.flags & 8192 && (s = i.memoizedState !== null,
            i.stateNode.isHidden = s,
            !s || i.alternate !== null && i.alternate.memoizedState !== null || (Qf = ue())),
            r & 4 && Oh(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null,
            e.mode & 1 ? (ke = (u = ke) || c,
            ct(t, e),
            ke = u) : ct(t, e),
            Et(e),
            r & 8192) {
                if (u = e.memoizedState !== null,
                (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (O = e,
                    c = e.child; c !== null; ) {
                        for (f = O = c; O !== null; ) {
                            switch (d = O,
                            h = d.child,
                            d.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Pi(4, d, d.return);
                                break;
                            case 1:
                                mr(d, d.return);
                                var _ = d.stateNode;
                                if (typeof _.componentWillUnmount == "function") {
                                    r = d,
                                    n = d.return;
                                    try {
                                        t = r,
                                        _.props = t.memoizedProps,
                                        _.state = t.memoizedState,
                                        _.componentWillUnmount()
                                    } catch (v) {
                                        se(r, n, v)
                                    }
                                }
                                break;
                            case 5:
                                mr(d, d.return);
                                break;
                            case 22:
                                if (d.memoizedState !== null) {
                                    Ah(f);
                                    continue
                                }
                            }
                            h !== null ? (h.return = d,
                            O = h) : Ah(f)
                        }
                        c = c.sibling
                    }
                e: for (c = null,
                f = e; ; ) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                i = f.stateNode,
                                u ? (s = i.style,
                                typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode,
                                l = f.memoizedProps.style,
                                o = l != null && l.hasOwnProperty("display") ? l.display : null,
                                a.style.display = Hm("display", o))
                            } catch (v) {
                                se(e, e.return, v)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null)
                            try {
                                f.stateNode.nodeValue = u ? "" : f.memoizedProps
                            } catch (v) {
                                se(e, e.return, v)
                            }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f,
                        f = f.child;
                        continue
                    }
                    if (f === e)
                        break e;
                    for (; f.sibling === null; ) {
                        if (f.return === null || f.return === e)
                            break e;
                        c === f && (c = null),
                        f = f.return
                    }
                    c === f && (c = null),
                    f.sibling.return = f.return,
                    f = f.sibling
                }
            }
            break;
        case 19:
            ct(t, e),
            Et(e),
            r & 4 && Oh(e);
            break;
        case 21:
            break;
        default:
            ct(t, e),
            Et(e)
        }
    }
    function Et(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null; ) {
                        if (y_(n)) {
                            var r = n;
                            break e
                        }
                        n = n.return
                    }
                    throw Error(k(160))
                }
                switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (zi(i, ""),
                    r.flags &= -33);
                    var s = Dh(e);
                    _c(e, s, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo
                      , a = Dh(e);
                    gc(e, a, o);
                    break;
                default:
                    throw Error(k(161))
                }
            } catch (l) {
                se(e, e.return, l)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function u8(e, t, n) {
        O = e,
        E_(e)
    }
    function E_(e, t, n) {
        for (var r = (e.mode & 1) !== 0; O !== null; ) {
            var i = O
              , s = i.child;
            if (i.tag === 22 && r) {
                var o = i.memoizedState !== null || Ks;
                if (!o) {
                    var a = i.alternate
                      , l = a !== null && a.memoizedState !== null || ke;
                    a = Ks;
                    var u = ke;
                    if (Ks = o,
                    (ke = l) && !u)
                        for (O = i; O !== null; )
                            o = O,
                            l = o.child,
                            o.tag === 22 && o.memoizedState !== null ? Mh(i) : l !== null ? (l.return = o,
                            O = l) : Mh(i);
                    for (; s !== null; )
                        O = s,
                        E_(s),
                        s = s.sibling;
                    O = i,
                    Ks = a,
                    ke = u
                }
                Ih(e)
            } else
                i.subtreeFlags & 8772 && s !== null ? (s.return = i,
                O = s) : Ih(e)
        }
    }
    function Ih(e) {
        for (; O !== null; ) {
            var t = O;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ke || Va(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !ke)
                                if (n === null)
                                    r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : ft(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var s = t.updateQueue;
                            s !== null && mh(t, s, r);
                            break;
                        case 3:
                            var o = t.updateQueue;
                            if (o !== null) {
                                if (n = null,
                                t.child !== null)
                                    switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1:
                                        n = t.child.stateNode
                                    }
                                mh(t, o, n)
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var f = c.dehydrated;
                                        f !== null && Yi(f)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(k(163))
                        }
                    ke || t.flags & 512 && mc(t)
                } catch (d) {
                    se(t, t.return, d)
                }
            }
            if (t === e) {
                O = null;
                break
            }
            if (n = t.sibling,
            n !== null) {
                n.return = t.return,
                O = n;
                break
            }
            O = t.return
        }
    }
    function Ah(e) {
        for (; O !== null; ) {
            var t = O;
            if (t === e) {
                O = null;
                break
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return,
                O = n;
                break
            }
            O = t.return
        }
    }
    function Mh(e) {
        for (; O !== null; ) {
            var t = O;
            try {
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Va(4, t)
                    } catch (l) {
                        se(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            se(t, i, l)
                        }
                    }
                    var s = t.return;
                    try {
                        mc(t)
                    } catch (l) {
                        se(t, s, l)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        mc(t)
                    } catch (l) {
                        se(t, o, l)
                    }
                }
            } catch (l) {
                se(t, t.return, l)
            }
            if (t === e) {
                O = null;
                break
            }
            var a = t.sibling;
            if (a !== null) {
                a.return = t.return,
                O = a;
                break
            }
            O = t.return
        }
    }
    var c8 = Math.ceil
      , Zo = Vt.ReactCurrentDispatcher
      , Kf = Vt.ReactCurrentOwner
      , at = Vt.ReactCurrentBatchConfig
      , V = 0
      , _e = null
      , ce = null
      , Ee = 0
      , He = 0
      , gr = Sn(0)
      , pe = 0
      , rs = null
      , Hn = 0
      , Ga = 0
      , Xf = 0
      , Di = null
      , je = null
      , Qf = 0
      , Gr = 1 / 0
      , Ot = null
      , ea = !1
      , yc = null
      , dn = null
      , Xs = !1
      , nn = null
      , ta = 0
      , Oi = 0
      , vc = null
      , _o = -1
      , yo = 0;
    function Oe() {
        return V & 6 ? ue() : _o !== -1 ? _o : _o = ue()
    }
    function pn(e) {
        return e.mode & 1 ? V & 2 && Ee !== 0 ? Ee & -Ee : Ww.transition !== null ? (yo === 0 && (yo = ig()),
        yo) : (e = H,
        e !== 0 || (e = window.event,
        e = e === void 0 ? 16 : fg(e.type)),
        e) : 1
    }
    function _t(e, t, n, r) {
        if (50 < Oi)
            throw Oi = 0,
            vc = null,
            Error(k(185));
        _s(e, n, r),
        (!(V & 2) || e !== _e) && (e === _e && (!(V & 2) && (Ga |= n),
        pe === 4 && Zt(e, Ee)),
        Ve(e, r),
        n === 1 && V === 0 && !(t.mode & 1) && (Gr = ue() + 500,
        Ua && En()))
    }
    function Ve(e, t) {
        var n = e.callbackNode;
        W9(e, t);
        var r = $o(e, e === _e ? Ee : 0);
        if (r === 0)
            n !== null && Vp(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
        else if (t = r & -r,
        e.callbackPriority !== t) {
            if (n != null && Vp(n),
            t === 1)
                e.tag === 0 ? Yw(bh.bind(null, e)) : Dg(bh.bind(null, e)),
                zw(function() {
                    !(V & 6) && En()
                }),
                n = null;
            else {
                switch (sg(r)) {
                case 1:
                    n = Tf;
                    break;
                case 4:
                    n = ng;
                    break;
                case 16:
                    n = Lo;
                    break;
                case 536870912:
                    n = rg;
                    break;
                default:
                    n = Lo
                }
                n = P_(n, w_.bind(null, e))
            }
            e.callbackPriority = t,
            e.callbackNode = n
        }
    }
    function w_(e, t) {
        if (_o = -1,
        yo = 0,
        V & 6)
            throw Error(k(327));
        var n = e.callbackNode;
        if (Nr() && e.callbackNode !== n)
            return null;
        var r = $o(e, e === _e ? Ee : 0);
        if (r === 0)
            return null;
        if (r & 30 || r & e.expiredLanes || t)
            t = na(e, r);
        else {
            t = r;
            var i = V;
            V |= 2;
            var s = x_();
            (_e !== e || Ee !== t) && (Ot = null,
            Gr = ue() + 500,
            $n(e, t));
            do
                try {
                    p8();
                    break
                } catch (a) {
                    T_(e, a)
                }
            while (1);
            jf(),
            Zo.current = s,
            V = i,
            ce !== null ? t = 0 : (_e = null,
            Ee = 0,
            t = pe)
        }
        if (t !== 0) {
            if (t === 2 && (i = Yu(e),
            i !== 0 && (r = i,
            t = Sc(e, i))),
            t === 1)
                throw n = rs,
                $n(e, 0),
                Zt(e, r),
                Ve(e, ue()),
                n;
            if (t === 6)
                Zt(e, r);
            else {
                if (i = e.current.alternate,
                !(r & 30) && !f8(i) && (t = na(e, r),
                t === 2 && (s = Yu(e),
                s !== 0 && (r = s,
                t = Sc(e, s))),
                t === 1))
                    throw n = rs,
                    $n(e, 0),
                    Zt(e, r),
                    Ve(e, ue()),
                    n;
                switch (e.finishedWork = i,
                e.finishedLanes = r,
                t) {
                case 0:
                case 1:
                    throw Error(k(345));
                case 2:
                    Nn(e, je, Ot);
                    break;
                case 3:
                    if (Zt(e, r),
                    (r & 130023424) === r && (t = Qf + 500 - ue(),
                    10 < t)) {
                        if ($o(e, 0) !== 0)
                            break;
                        if (i = e.suspendedLanes,
                        (i & r) !== r) {
                            Oe(),
                            e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = ec(Nn.bind(null, e, je, Ot), t);
                        break
                    }
                    Nn(e, je, Ot);
                    break;
                case 4:
                    if (Zt(e, r),
                    (r & 4194240) === r)
                        break;
                    for (t = e.eventTimes,
                    i = -1; 0 < r; ) {
                        var o = 31 - gt(r);
                        s = 1 << o,
                        o = t[o],
                        o > i && (i = o),
                        r &= ~s
                    }
                    if (r = i,
                    r = ue() - r,
                    r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * c8(r / 1960)) - r,
                    10 < r) {
                        e.timeoutHandle = ec(Nn.bind(null, e, je, Ot), r);
                        break
                    }
                    Nn(e, je, Ot);
                    break;
                case 5:
                    Nn(e, je, Ot);
                    break;
                default:
                    throw Error(k(329))
                }
            }
        }
        return Ve(e, ue()),
        e.callbackNode === n ? w_.bind(null, e) : null
    }
    function Sc(e, t) {
        var n = Di;
        return e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256),
        e = na(e, t),
        e !== 2 && (t = je,
        je = n,
        t !== null && Ec(t)),
        e
    }
    function Ec(e) {
        je === null ? je = e : je.push.apply(je, e)
    }
    function f8(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores,
                n !== null))
                    for (var r = 0; r < n.length; r++) {
                        var i = n[r]
                          , s = i.getSnapshot;
                        i = i.value;
                        try {
                            if (!yt(s(), i))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
                n.return = t,
                t = n;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Zt(e, t) {
        for (t &= ~Xf,
        t &= ~Ga,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t; ) {
            var n = 31 - gt(t)
              , r = 1 << n;
            e[n] = -1,
            t &= ~r
        }
    }
    function bh(e) {
        if (V & 6)
            throw Error(k(327));
        Nr();
        var t = $o(e, 0);
        if (!(t & 1))
            return Ve(e, ue()),
            null;
        var n = na(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = Yu(e);
            r !== 0 && (t = r,
            n = Sc(e, r))
        }
        if (n === 1)
            throw n = rs,
            $n(e, 0),
            Zt(e, t),
            Ve(e, ue()),
            n;
        if (n === 6)
            throw Error(k(345));
        return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        Nn(e, je, Ot),
        Ve(e, ue()),
        null
    }
    function Jf(e, t) {
        var n = V;
        V |= 1;
        try {
            return e(t)
        } finally {
            V = n,
            V === 0 && (Gr = ue() + 500,
            Ua && En())
        }
    }
    function Yn(e) {
        nn !== null && nn.tag === 0 && !(V & 6) && Nr();
        var t = V;
        V |= 1;
        var n = at.transition
          , r = H;
        try {
            if (at.transition = null,
            H = 1,
            e)
                return e()
        } finally {
            H = r,
            at.transition = n,
            V = t,
            !(V & 6) && En()
        }
    }
    function Zf() {
        He = gr.current,
        X(gr)
    }
    function $n(e, t) {
        e.finishedWork = null,
        e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1,
        Fw(n)),
        ce !== null)
            for (n = ce.return; n !== null; ) {
                var r = n;
                switch (Af(r),
                r.tag) {
                case 1:
                    r = r.type.childContextTypes,
                    r != null && Vo();
                    break;
                case 3:
                    zr(),
                    X(Fe),
                    X(Re),
                    zf();
                    break;
                case 5:
                    Ff(r);
                    break;
                case 4:
                    zr();
                    break;
                case 13:
                    X(te);
                    break;
                case 19:
                    X(te);
                    break;
                case 10:
                    Lf(r.type._context);
                    break;
                case 22:
                case 23:
                    Zf()
                }
                n = n.return
            }
        if (_e = e,
        ce = e = hn(e.current, null),
        Ee = He = t,
        pe = 0,
        rs = null,
        Xf = Ga = Hn = 0,
        je = Di = null,
        An !== null) {
            for (t = 0; t < An.length; t++)
                if (n = An[t],
                r = n.interleaved,
                r !== null) {
                    n.interleaved = null;
                    var i = r.next
                      , s = n.pending;
                    if (s !== null) {
                        var o = s.next;
                        s.next = i,
                        r.next = o
                    }
                    n.pending = r
                }
            An = null
        }
        return e
    }
    function T_(e, t) {
        do {
            var n = ce;
            try {
                if (jf(),
                ho.current = Jo,
                Qo) {
                    for (var r = ne.memoizedState; r !== null; ) {
                        var i = r.queue;
                        i !== null && (i.pending = null),
                        r = r.next
                    }
                    Qo = !1
                }
                if (Gn = 0,
                ge = fe = ne = null,
                Ni = !1,
                es = 0,
                Kf.current = null,
                n === null || n.return === null) {
                    pe = 1,
                    rs = t,
                    ce = null;
                    break
                }
                e: {
                    var s = e
                      , o = n.return
                      , a = n
                      , l = t;
                    if (t = Ee,
                    a.flags |= 32768,
                    l !== null && typeof l == "object" && typeof l.then == "function") {
                        var u = l
                          , c = a
                          , f = c.tag;
                        if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                            var d = c.alternate;
                            d ? (c.updateQueue = d.updateQueue,
                            c.memoizedState = d.memoizedState,
                            c.lanes = d.lanes) : (c.updateQueue = null,
                            c.memoizedState = null)
                        }
                        var h = wh(o);
                        if (h !== null) {
                            h.flags &= -257,
                            Th(h, o, a, s, t),
                            h.mode & 1 && Eh(s, u, t),
                            t = h,
                            l = u;
                            var _ = t.updateQueue;
                            if (_ === null) {
                                var v = new Set;
                                v.add(l),
                                t.updateQueue = v
                            } else
                                _.add(l);
                            break e
                        } else {
                            if (!(t & 1)) {
                                Eh(s, u, t),
                                ed();
                                break e
                            }
                            l = Error(k(426))
                        }
                    } else if (J && a.mode & 1) {
                        var E = wh(o);
                        if (E !== null) {
                            !(E.flags & 65536) && (E.flags |= 256),
                            Th(E, o, a, s, t),
                            Mf(Vr(l, a));
                            break e
                        }
                    }
                    s = l = Vr(l, a),
                    pe !== 4 && (pe = 2),
                    Di === null ? Di = [s] : Di.push(s),
                    s = o;
                    do {
                        switch (s.tag) {
                        case 3:
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var m = o_(s, l, t);
                            hh(s, m);
                            break e;
                        case 1:
                            a = l;
                            var p = s.type
                              , g = s.stateNode;
                            if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (dn === null || !dn.has(g)))) {
                                s.flags |= 65536,
                                t &= -t,
                                s.lanes |= t;
                                var S = a_(s, a, t);
                                hh(s, S);
                                break e
                            }
                        }
                        s = s.return
                    } while (s !== null)
                }
                R_(n)
            } catch (x) {
                t = x,
                ce === n && n !== null && (ce = n = n.return);
                continue
            }
            break
        } while (1)
    }
    function x_() {
        var e = Zo.current;
        return Zo.current = Jo,
        e === null ? Jo : e
    }
    function ed() {
        (pe === 0 || pe === 3 || pe === 2) && (pe = 4),
        _e === null || !(Hn & 268435455) && !(Ga & 268435455) || Zt(_e, Ee)
    }
    function na(e, t) {
        var n = V;
        V |= 2;
        var r = x_();
        (_e !== e || Ee !== t) && (Ot = null,
        $n(e, t));
        do
            try {
                d8();
                break
            } catch (i) {
                T_(e, i)
            }
        while (1);
        if (jf(),
        V = n,
        Zo.current = r,
        ce !== null)
            throw Error(k(261));
        return _e = null,
        Ee = 0,
        pe
    }
    function d8() {
        for (; ce !== null; )
            k_(ce)
    }
    function p8() {
        for (; ce !== null && !$9(); )
            k_(ce)
    }
    function k_(e) {
        var t = N_(e.alternate, e, He);
        e.memoizedProps = e.pendingProps,
        t === null ? R_(e) : ce = t,
        Kf.current = null
    }
    function R_(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return,
            t.flags & 32768) {
                if (n = o8(n, t),
                n !== null) {
                    n.flags &= 32767,
                    ce = n;
                    return
                }
                if (e !== null)
                    e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
                else {
                    pe = 6,
                    ce = null;
                    return
                }
            } else if (n = s8(n, t, He),
            n !== null) {
                ce = n;
                return
            }
            if (t = t.sibling,
            t !== null) {
                ce = t;
                return
            }
            ce = t = e
        } while (t !== null);
        pe === 0 && (pe = 5)
    }
    function Nn(e, t, n) {
        var r = H
          , i = at.transition;
        try {
            at.transition = null,
            H = 1,
            h8(e, t, n, r)
        } finally {
            at.transition = i,
            H = r
        }
        return null
    }
    function h8(e, t, n, r) {
        do
            Nr();
        while (nn !== null);
        if (V & 6)
            throw Error(k(327));
        n = e.finishedWork;
        var i = e.finishedLanes;
        if (n === null)
            return null;
        if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
            throw Error(k(177));
        e.callbackNode = null,
        e.callbackPriority = 0;
        var s = n.lanes | n.childLanes;
        if (q9(e, s),
        e === _e && (ce = _e = null,
        Ee = 0),
        !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Xs || (Xs = !0,
        P_(Lo, function() {
            return Nr(),
            null
        })),
        s = (n.flags & 15990) !== 0,
        n.subtreeFlags & 15990 || s) {
            s = at.transition,
            at.transition = null;
            var o = H;
            H = 1;
            var a = V;
            V |= 4,
            Kf.current = null,
            l8(e, n),
            S_(n, e),
            Mw(Ju),
            Bo = !!Qu,
            Ju = Qu = null,
            e.current = n,
            u8(n),
            B9(),
            V = a,
            H = o,
            at.transition = s
        } else
            e.current = n;
        if (Xs && (Xs = !1,
        nn = e,
        ta = i),
        s = e.pendingLanes,
        s === 0 && (dn = null),
        z9(n.stateNode),
        Ve(e, ue()),
        t !== null)
            for (r = e.onRecoverableError,
            n = 0; n < t.length; n++)
                i = t[n],
                r(i.value, {
                    componentStack: i.stack,
                    digest: i.digest
                });
        if (ea)
            throw ea = !1,
            e = yc,
            yc = null,
            e;
        return ta & 1 && e.tag !== 0 && Nr(),
        s = e.pendingLanes,
        s & 1 ? e === vc ? Oi++ : (Oi = 0,
        vc = e) : Oi = 0,
        En(),
        null
    }
    function Nr() {
        if (nn !== null) {
            var e = sg(ta)
              , t = at.transition
              , n = H;
            try {
                if (at.transition = null,
                H = 16 > e ? 16 : e,
                nn === null)
                    var r = !1;
                else {
                    if (e = nn,
                    nn = null,
                    ta = 0,
                    V & 6)
                        throw Error(k(331));
                    var i = V;
                    for (V |= 4,
                    O = e.current; O !== null; ) {
                        var s = O
                          , o = s.child;
                        if (O.flags & 16) {
                            var a = s.deletions;
                            if (a !== null) {
                                for (var l = 0; l < a.length; l++) {
                                    var u = a[l];
                                    for (O = u; O !== null; ) {
                                        var c = O;
                                        switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Pi(8, c, s)
                                        }
                                        var f = c.child;
                                        if (f !== null)
                                            f.return = c,
                                            O = f;
                                        else
                                            for (; O !== null; ) {
                                                c = O;
                                                var d = c.sibling
                                                  , h = c.return;
                                                if (__(c),
                                                c === u) {
                                                    O = null;
                                                    break
                                                }
                                                if (d !== null) {
                                                    d.return = h,
                                                    O = d;
                                                    break
                                                }
                                                O = h
                                            }
                                    }
                                }
                                var _ = s.alternate;
                                if (_ !== null) {
                                    var v = _.child;
                                    if (v !== null) {
                                        _.child = null;
                                        do {
                                            var E = v.sibling;
                                            v.sibling = null,
                                            v = E
                                        } while (v !== null)
                                    }
                                }
                                O = s
                            }
                        }
                        if (s.subtreeFlags & 2064 && o !== null)
                            o.return = s,
                            O = o;
                        else
                            e: for (; O !== null; ) {
                                if (s = O,
                                s.flags & 2048)
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Pi(9, s, s.return)
                                    }
                                var m = s.sibling;
                                if (m !== null) {
                                    m.return = s.return,
                                    O = m;
                                    break e
                                }
                                O = s.return
                            }
                    }
                    var p = e.current;
                    for (O = p; O !== null; ) {
                        o = O;
                        var g = o.child;
                        if (o.subtreeFlags & 2064 && g !== null)
                            g.return = o,
                            O = g;
                        else
                            e: for (o = p; O !== null; ) {
                                if (a = O,
                                a.flags & 2048)
                                    try {
                                        switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Va(9, a)
                                        }
                                    } catch (x) {
                                        se(a, a.return, x)
                                    }
                                if (a === o) {
                                    O = null;
                                    break e
                                }
                                var S = a.sibling;
                                if (S !== null) {
                                    S.return = a.return,
                                    O = S;
                                    break e
                                }
                                O = a.return
                            }
                    }
                    if (V = i,
                    En(),
                    Rt && typeof Rt.onPostCommitFiberRoot == "function")
                        try {
                            Rt.onPostCommitFiberRoot(ba, e)
                        } catch {}
                    r = !0
                }
                return r
            } finally {
                H = n,
                at.transition = t
            }
        }
        return !1
    }
    function jh(e, t, n) {
        t = Vr(n, t),
        t = o_(e, t, 1),
        e = fn(e, t, 1),
        t = Oe(),
        e !== null && (_s(e, 1, t),
        Ve(e, t))
    }
    function se(e, t, n) {
        if (e.tag === 3)
            jh(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    jh(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dn === null || !dn.has(r))) {
                        e = Vr(n, e),
                        e = a_(t, e, 1),
                        t = fn(t, e, 1),
                        e = Oe(),
                        t !== null && (_s(t, 1, e),
                        Ve(t, e));
                        break
                    }
                }
                t = t.return
            }
    }
    function m8(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t),
        t = Oe(),
        e.pingedLanes |= e.suspendedLanes & n,
        _e === e && (Ee & n) === n && (pe === 4 || pe === 3 && (Ee & 130023424) === Ee && 500 > ue() - Qf ? $n(e, 0) : Xf |= n),
        Ve(e, t)
    }
    function C_(e, t) {
        t === 0 && (e.mode & 1 ? (t = Us,
        Us <<= 1,
        !(Us & 130023424) && (Us = 4194304)) : t = 1);
        var n = Oe();
        e = Ft(e, t),
        e !== null && (_s(e, t, n),
        Ve(e, n))
    }
    function g8(e) {
        var t = e.memoizedState
          , n = 0;
        t !== null && (n = t.retryLane),
        C_(e, n)
    }
    function _8(e, t) {
        var n = 0;
        switch (e.tag) {
        case 13:
            var r = e.stateNode
              , i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(k(314))
        }
        r !== null && r.delete(t),
        C_(e, n)
    }
    var N_;
    N_ = function(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || Fe.current)
                Be = !0;
            else {
                if (!(e.lanes & n) && !(t.flags & 128))
                    return Be = !1,
                    i8(e, t, n);
                Be = !!(e.flags & 131072)
            }
        else
            Be = !1,
            J && t.flags & 1048576 && Og(t, Yo, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 2:
            var r = t.type;
            go(e, t),
            e = t.pendingProps;
            var i = Br(t, Re.current);
            Cr(t, n),
            i = Gf(null, t, r, e, i, n);
            var s = Hf();
            return t.flags |= 1,
            typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
            t.memoizedState = null,
            t.updateQueue = null,
            ze(r) ? (s = !0,
            Go(t)) : s = !1,
            t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
            Bf(t),
            i.updater = Fa,
            t.stateNode = i,
            i._reactInternals = t,
            ac(t, r, e, n),
            t = cc(null, t, r, !0, s, n)) : (t.tag = 0,
            J && s && If(t),
            Ne(null, t, i, n),
            t = t.child),
            t;
        case 16:
            r = t.elementType;
            e: {
                switch (go(e, t),
                e = t.pendingProps,
                i = r._init,
                r = i(r._payload),
                t.type = r,
                i = t.tag = v8(r),
                e = ft(r, e),
                i) {
                case 0:
                    t = uc(null, t, r, e, n);
                    break e;
                case 1:
                    t = Rh(null, t, r, e, n);
                    break e;
                case 11:
                    t = xh(null, t, r, e, n);
                    break e;
                case 14:
                    t = kh(null, t, r, ft(r.type, e), n);
                    break e
                }
                throw Error(k(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type,
            i = t.pendingProps,
            i = t.elementType === r ? i : ft(r, i),
            uc(e, t, r, i, n);
        case 1:
            return r = t.type,
            i = t.pendingProps,
            i = t.elementType === r ? i : ft(r, i),
            Rh(e, t, r, i, n);
        case 3:
            e: {
                if (f_(t),
                e === null)
                    throw Error(k(387));
                r = t.pendingProps,
                s = t.memoizedState,
                i = s.element,
                bg(e, t),
                Ko(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element,
                s.isDehydrated)
                    if (s = {
                        element: r,
                        isDehydrated: !1,
                        cache: o.cache,
                        pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                        transitions: o.transitions
                    },
                    t.updateQueue.baseState = s,
                    t.memoizedState = s,
                    t.flags & 256) {
                        i = Vr(Error(k(423)), t),
                        t = Ch(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                        i = Vr(Error(k(424)), t),
                        t = Ch(e, t, r, n, i);
                        break e
                    } else
                        for (We = cn(t.stateNode.containerInfo.firstChild),
                        Ke = t,
                        J = !0,
                        ht = null,
                        n = Bg(t, null, r, n),
                        t.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling;
                else {
                    if (Ur(),
                    r === i) {
                        t = zt(e, t, n);
                        break e
                    }
                    Ne(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Ug(t),
            e === null && ic(t),
            r = t.type,
            i = t.pendingProps,
            s = e !== null ? e.memoizedProps : null,
            o = i.children,
            Zu(r, i) ? o = null : s !== null && Zu(r, s) && (t.flags |= 32),
            c_(e, t),
            Ne(e, t, o, n),
            t.child;
        case 6:
            return e === null && ic(t),
            null;
        case 13:
            return d_(e, t, n);
        case 4:
            return Uf(t, t.stateNode.containerInfo),
            r = t.pendingProps,
            e === null ? t.child = Fr(t, null, r, n) : Ne(e, t, r, n),
            t.child;
        case 11:
            return r = t.type,
            i = t.pendingProps,
            i = t.elementType === r ? i : ft(r, i),
            xh(e, t, r, i, n);
        case 7:
            return Ne(e, t, t.pendingProps, n),
            t.child;
        case 8:
            return Ne(e, t, t.pendingProps.children, n),
            t.child;
        case 12:
            return Ne(e, t, t.pendingProps.children, n),
            t.child;
        case 10:
            e: {
                if (r = t.type._context,
                i = t.pendingProps,
                s = t.memoizedProps,
                o = i.value,
                q(Wo, r._currentValue),
                r._currentValue = o,
                s !== null)
                    if (yt(s.value, o)) {
                        if (s.children === i.children && !Fe.current) {
                            t = zt(e, t, n);
                            break e
                        }
                    } else
                        for (s = t.child,
                        s !== null && (s.return = t); s !== null; ) {
                            var a = s.dependencies;
                            if (a !== null) {
                                o = s.child;
                                for (var l = a.firstContext; l !== null; ) {
                                    if (l.context === r) {
                                        if (s.tag === 1) {
                                            l = Lt(-1, n & -n),
                                            l.tag = 2;
                                            var u = s.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next,
                                                c.next = l),
                                                u.pending = l
                                            }
                                        }
                                        s.lanes |= n,
                                        l = s.alternate,
                                        l !== null && (l.lanes |= n),
                                        sc(s.return, n, t),
                                        a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (s.tag === 10)
                                o = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (o = s.return,
                                o === null)
                                    throw Error(k(341));
                                o.lanes |= n,
                                a = o.alternate,
                                a !== null && (a.lanes |= n),
                                sc(o, n, t),
                                o = s.sibling
                            } else
                                o = s.child;
                            if (o !== null)
                                o.return = s;
                            else
                                for (o = s; o !== null; ) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (s = o.sibling,
                                    s !== null) {
                                        s.return = o.return,
                                        o = s;
                                        break
                                    }
                                    o = o.return
                                }
                            s = o
                        }
                Ne(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type,
            r = t.pendingProps.children,
            Cr(t, n),
            i = lt(i),
            r = r(i),
            t.flags |= 1,
            Ne(e, t, r, n),
            t.child;
        case 14:
            return r = t.type,
            i = ft(r, t.pendingProps),
            i = ft(r.type, i),
            kh(e, t, r, i, n);
        case 15:
            return l_(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type,
            i = t.pendingProps,
            i = t.elementType === r ? i : ft(r, i),
            go(e, t),
            t.tag = 1,
            ze(r) ? (e = !0,
            Go(t)) : e = !1,
            Cr(t, n),
            Lg(t, r, i),
            ac(t, r, i, n),
            cc(null, t, r, !0, e, n);
        case 19:
            return p_(e, t, n);
        case 22:
            return u_(e, t, n)
        }
        throw Error(k(156, t.tag))
    }
    ;
    function P_(e, t) {
        return tg(e, t)
    }
    function y8(e, t, n, r) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function st(e, t, n, r) {
        return new y8(e,t,n,r)
    }
    function td(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function v8(e) {
        if (typeof e == "function")
            return td(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof,
            e === Sf)
                return 11;
            if (e === Ef)
                return 14
        }
        return 2
    }
    function hn(e, t) {
        var n = e.alternate;
        return n === null ? (n = st(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.type = e.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = e.flags & 14680064,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
    }
    function vo(e, t, n, r, i, s) {
        var o = 2;
        if (r = e,
        typeof e == "function")
            td(e) && (o = 1);
        else if (typeof e == "string")
            o = 5;
        else
            e: switch (e) {
            case or:
                return Bn(n.children, i, s, t);
            case vf:
                o = 8,
                i |= 8;
                break;
            case Ou:
                return e = st(12, n, t, i | 2),
                e.elementType = Ou,
                e.lanes = s,
                e;
            case Iu:
                return e = st(13, n, t, i),
                e.elementType = Iu,
                e.lanes = s,
                e;
            case Au:
                return e = st(19, n, t, i),
                e.elementType = Au,
                e.lanes = s,
                e;
            case $m:
                return Ha(n, i, s, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case jm:
                        o = 10;
                        break e;
                    case Lm:
                        o = 9;
                        break e;
                    case Sf:
                        o = 11;
                        break e;
                    case Ef:
                        o = 14;
                        break e;
                    case Kt:
                        o = 16,
                        r = null;
                        break e
                    }
                throw Error(k(130, e == null ? e : typeof e, ""))
            }
        return t = st(o, n, t, i),
        t.elementType = e,
        t.type = r,
        t.lanes = s,
        t
    }
    function Bn(e, t, n, r) {
        return e = st(7, e, r, t),
        e.lanes = n,
        e
    }
    function Ha(e, t, n, r) {
        return e = st(22, e, r, t),
        e.elementType = $m,
        e.lanes = n,
        e.stateNode = {
            isHidden: !1
        },
        e
    }
    function Hl(e, t, n) {
        return e = st(6, e, null, t),
        e.lanes = n,
        e
    }
    function Yl(e, t, n) {
        return t = st(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    function S8(e, t, n, r, i) {
        this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Rl(0),
        this.expirationTimes = Rl(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Rl(0),
        this.identifierPrefix = r,
        this.onRecoverableError = i,
        this.mutableSourceEagerHydrationData = null
    }
    function nd(e, t, n, r, i, s, o, a, l) {
        return e = new S8(e,t,n,a,l),
        t === 1 ? (t = 1,
        s === !0 && (t |= 8)) : t = 0,
        s = st(3, null, null, t),
        e.current = s,
        s.stateNode = e,
        s.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        Bf(s),
        e
    }
    function E8(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: sr,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }
    function D_(e) {
        if (!e)
            return yn;
        e = e._reactInternals;
        e: {
            if (Xn(e) !== e || e.tag !== 1)
                throw Error(k(170));
            var t = e;
            do {
                switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ze(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                t = t.return
            } while (t !== null);
            throw Error(k(171))
        }
        if (e.tag === 1) {
            var n = e.type;
            if (ze(n))
                return Pg(e, n, t)
        }
        return t
    }
    function O_(e, t, n, r, i, s, o, a, l) {
        return e = nd(n, r, !0, e, i, s, o, a, l),
        e.context = D_(null),
        n = e.current,
        r = Oe(),
        i = pn(n),
        s = Lt(r, i),
        s.callback = t ?? null,
        fn(n, s, i),
        e.current.lanes = i,
        _s(e, i, r),
        Ve(e, r),
        e
    }
    function Ya(e, t, n, r) {
        var i = t.current
          , s = Oe()
          , o = pn(i);
        return n = D_(n),
        t.context === null ? t.context = n : t.pendingContext = n,
        t = Lt(s, o),
        t.payload = {
            element: e
        },
        r = r === void 0 ? null : r,
        r !== null && (t.callback = r),
        e = fn(i, t, o),
        e !== null && (_t(e, i, o, s),
        po(e, i, o)),
        o
    }
    function ra(e) {
        if (e = e.current,
        !e.child)
            return null;
        switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
        }
    }
    function Lh(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }
    function rd(e, t) {
        Lh(e, t),
        (e = e.alternate) && Lh(e, t)
    }
    function w8() {
        return null
    }
    var I_ = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    }
    ;
    function id(e) {
        this._internalRoot = e
    }
    Wa.prototype.render = id.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(k(409));
        Ya(e, t, null, null)
    }
    ;
    Wa.prototype.unmount = id.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Yn(function() {
                Ya(null, e, null, null)
            }),
            t[Ut] = null
        }
    }
    ;
    function Wa(e) {
        this._internalRoot = e
    }
    Wa.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = lg();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < Jt.length && t !== 0 && t < Jt[n].priority; n++)
                ;
            Jt.splice(n, 0, e),
            n === 0 && cg(e)
        }
    }
    ;
    function sd(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function qa(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }
    function $h() {}
    function T8(e, t, n, r, i) {
        if (i) {
            if (typeof r == "function") {
                var s = r;
                r = function() {
                    var u = ra(o);
                    s.call(u)
                }
            }
            var o = O_(t, r, e, 0, null, !1, !1, "", $h);
            return e._reactRootContainer = o,
            e[Ut] = o.current,
            Ki(e.nodeType === 8 ? e.parentNode : e),
            Yn(),
            o
        }
        for (; i = e.lastChild; )
            e.removeChild(i);
        if (typeof r == "function") {
            var a = r;
            r = function() {
                var u = ra(l);
                a.call(u)
            }
        }
        var l = nd(e, 0, !1, null, null, !1, !1, "", $h);
        return e._reactRootContainer = l,
        e[Ut] = l.current,
        Ki(e.nodeType === 8 ? e.parentNode : e),
        Yn(function() {
            Ya(t, l, n, r)
        }),
        l
    }
    function Ka(e, t, n, r, i) {
        var s = n._reactRootContainer;
        if (s) {
            var o = s;
            if (typeof i == "function") {
                var a = i;
                i = function() {
                    var l = ra(o);
                    a.call(l)
                }
            }
            Ya(t, o, e, i)
        } else
            o = T8(n, t, e, i, r);
        return ra(o)
    }
    og = function(e) {
        switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = mi(t.pendingLanes);
                n !== 0 && (xf(t, n | 1),
                Ve(t, ue()),
                !(V & 6) && (Gr = ue() + 500,
                En()))
            }
            break;
        case 13:
            Yn(function() {
                var r = Ft(e, 1);
                if (r !== null) {
                    var i = Oe();
                    _t(r, e, 1, i)
                }
            }),
            rd(e, 1)
        }
    }
    ;
    kf = function(e) {
        if (e.tag === 13) {
            var t = Ft(e, 134217728);
            if (t !== null) {
                var n = Oe();
                _t(t, e, 134217728, n)
            }
            rd(e, 134217728)
        }
    }
    ;
    ag = function(e) {
        if (e.tag === 13) {
            var t = pn(e)
              , n = Ft(e, t);
            if (n !== null) {
                var r = Oe();
                _t(n, e, t, r)
            }
            rd(e, t)
        }
    }
    ;
    lg = function() {
        return H
    }
    ;
    ug = function(e, t) {
        var n = H;
        try {
            return H = e,
            t()
        } finally {
            H = n
        }
    }
    ;
    Vu = function(e, t, n) {
        switch (t) {
        case "input":
            if (ju(e, n),
            t = n.name,
            n.type === "radio" && t != null) {
                for (n = e; n.parentNode; )
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Ba(r);
                        if (!i)
                            throw Error(k(90));
                        Um(r),
                        ju(r, i)
                    }
                }
            }
            break;
        case "textarea":
            zm(e, n);
            break;
        case "select":
            t = n.value,
            t != null && Tr(e, !!n.multiple, t, !1)
        }
    }
    ;
    Km = Jf;
    Xm = Yn;
    var x8 = {
        usingClientEntryPoint: !1,
        Events: [vs, cr, Ba, Wm, qm, Jf]
    }
      , ci = {
        findFiberByHostInstance: In,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    }
      , k8 = {
        bundleType: ci.bundleType,
        version: ci.version,
        rendererPackageName: ci.rendererPackageName,
        rendererConfig: ci.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Vt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Zm(e),
            e === null ? null : e.stateNode
        },
        findFiberByHostInstance: ci.findFiberByHostInstance || w8,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Qs.isDisabled && Qs.supportsFiber)
            try {
                ba = Qs.inject(k8),
                Rt = Qs
            } catch {}
    }
    Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = x8;
    Ze.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!sd(t))
            throw Error(k(200));
        return E8(e, t, null, n)
    }
    ;
    Ze.createRoot = function(e, t) {
        if (!sd(e))
            throw Error(k(299));
        var n = !1
          , r = ""
          , i = I_;
        return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        t = nd(e, 1, !1, null, null, n, !1, r, i),
        e[Ut] = t.current,
        Ki(e.nodeType === 8 ? e.parentNode : e),
        new id(t)
    }
    ;
    Ze.findDOMNode = function(e) {
        if (e == null)
            return null;
        if (e.nodeType === 1)
            return e;
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","),
            Error(k(268, e)));
        return e = Zm(t),
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    Ze.flushSync = function(e) {
        return Yn(e)
    }
    ;
    Ze.hydrate = function(e, t, n) {
        if (!qa(t))
            throw Error(k(200));
        return Ka(null, e, t, !0, n)
    }
    ;
    Ze.hydrateRoot = function(e, t, n) {
        if (!sd(e))
            throw Error(k(405));
        var r = n != null && n.hydratedSources || null
          , i = !1
          , s = ""
          , o = I_;
        if (n != null && (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        t = O_(t, null, e, 1, n ?? null, i, !1, s, o),
        e[Ut] = t.current,
        Ki(e),
        r)
            for (e = 0; e < r.length; e++)
                n = r[e],
                i = n._getVersion,
                i = i(n._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
        return new Wa(t)
    }
    ;
    Ze.render = function(e, t, n) {
        if (!qa(t))
            throw Error(k(200));
        return Ka(null, e, t, !1, n)
    }
    ;
    Ze.unmountComponentAtNode = function(e) {
        if (!qa(e))
            throw Error(k(40));
        return e._reactRootContainer ? (Yn(function() {
            Ka(null, null, e, !1, function() {
                e._reactRootContainer = null,
                e[Ut] = null
            })
        }),
        !0) : !1
    }
    ;
    Ze.unstable_batchedUpdates = Jf;
    Ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!qa(n))
            throw Error(k(200));
        if (e == null || e._reactInternals === void 0)
            throw Error(k(38));
        return Ka(e, t, n, !1, r)
    }
    ;
    Ze.version = "18.2.0-next-9e3b772b8-20220608";
    function A_() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A_)
            } catch (e) {
                console.error(e)
            }
    }
    A_(),
    Om.exports = Ze;
    var R8 = Om.exports
      , Bh = R8;
    Pu.createRoot = Bh.createRoot,
    Pu.hydrateRoot = Bh.hydrateRoot;
    var C8 = !0
      , Wl = "Invariant failed";
    function N8(e, t) {
        if (!e) {
            if (C8)
                throw new Error(Wl);
            var n = typeof t == "function" ? t() : t
              , r = n ? "".concat(Wl, ": ").concat(n) : Wl;
            throw new Error(r)
        }
    }
    c9({
        dsn: "https://858e5ee8115a450686e2d9c022045068@sentry.nethergames.org/5",
        enabled: !0,
        integrations: [new w9],
        tracesSampleRate: 1
    });
    const M_ = document.querySelector("#root");
    N8(M_, "Root element not found");
    const P8 = Pu.createRoot(M_);
    P8.render(y.jsx(Le.StrictMode, {
        children: y.jsx(E9, {})
    }))
}
);
export default D8();

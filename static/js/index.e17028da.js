!(function(e) {
  var t = {}
  function n(r) {
    if (t[r]) return t[r].exports
    var o = (t[r] = { i: r, l: !1, exports: {} })
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
  }
  ;(n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t]
            }.bind(null, o)
          )
      return r
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = './'),
    n((n.s = 13))
})([
  function(e, t, n) {
    'use strict'
    ;(function(e) {
      function r(e) {
        return (r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function o() {}
      n.d(t, 'c', function() {
        return s
      }),
        n.d(t, 'd', function() {
          return ve
        }),
        n.d(t, 'a', function() {
          return Ye
        }),
        n.d(t, 'b', function() {
          return Se
        })
      var i = {
          scopedStyle: !0,
          mapping: {},
          isWeb: !0,
          staticStyleMapping: {},
          doc:
            'object' ===
            ('undefined' == typeof document ? 'undefined' : r(document))
              ? document
              : null,
          root:
            'object' === (void 0 === e ? 'undefined' : r(e)) &&
            e &&
            e.Math === Math &&
            e.Array === Array
              ? e
              : 'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
              ? window
              : void 0 !== e
              ? e
              : (function() {
                  return this
                })(),
          styleCache: [],
          isMultiStore: !1
        },
        a = []
      function s(e, t) {
        var n,
          r,
          s,
          c,
          l = []
        for (c = arguments.length; c-- > 2; ) a.push(arguments[c])
        for (
          t &&
          null != t.children &&
          (a.length || a.push(t.children), delete t.children);
          a.length;

        )
          if ((r = a.pop()) && void 0 !== r.pop)
            for (c = r.length; c--; ) a.push(r[c])
          else
            'boolean' == typeof r && (r = null),
              (s = 'function' != typeof e) &&
                (null == r
                  ? (r = '')
                  : 'number' == typeof r
                  ? (r = String(r))
                  : 'string' != typeof r && (s = !1)),
              s && n
                ? (l[l.length - 1] += r)
                : 0 === l.length
                ? (l = [r])
                : l.push(r),
              (n = s)
        var u = new o()
        return (
          (u.nodeName = e),
          (u.children = l),
          (u.attributes = null == t ? void 0 : t),
          (u.key = null == t ? void 0 : t.key),
          void 0 !== i.vnode && i.vnode(u),
          u
        )
      }
      var c = Object.getOwnPropertySymbols,
        l = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable
      function p(e) {
        if (null == e)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined'
          )
        return Object(e)
      }
      if (
        'undefined' != typeof Element &&
        !Element.prototype.addEventListener
      ) {
        var f = function(e) {
            e || (e = window.event)
            for (var t = 0, n = 0, r = d[e.type]; n < r.aEls.length; n++)
              if (r.aEls[n] === this) {
                for (; t < r.aEvts[n].length; t++) r.aEvts[n][t].call(this, e)
                break
              }
          },
          d = {}
        ;(Element.prototype.addEventListener = function(e, t) {
          if (d.hasOwnProperty(e)) {
            for (var n = d[e], r = -1, o = 0; o < n.aEls.length; o++)
              if (n.aEls[o] === this) {
                r = o
                break
              }
            if (-1 === r)
              n.aEls.push(this), n.aEvts.push([t]), (this['on' + e] = f)
            else {
              var i = n.aEvts[r]
              this['on' + e] !== f && (i.splice(0), (this['on' + e] = f))
              for (var a = 0; a < i.length; a++) if (i[a] === t) return
              i.push(t)
            }
          } else (d[e] = { aEls: [this], aEvts: [[t]] }), (this['on' + e] = f)
        }),
          (Element.prototype.removeEventListener = function(e, t) {
            if (d.hasOwnProperty(e)) {
              for (var n = d[e], r = -1, o = 0; o < n.aEls.length; o++)
                if (n.aEls[o] === this) {
                  r = o
                  break
                }
              if (-1 !== r)
                for (var i = 0, a = n.aEvts[r]; i < a.length; i++)
                  a[i] === t && a.splice(i, 1)
            }
          })
      }
      function h(e, t) {
        for (var n in t) e[n] = t[n]
        return e
      }
      function m(e, t) {
        e && ('function' == typeof e ? e(t) : (e.current = t))
      }
      'function' != typeof Object.create &&
        (Object.create = function(e, t) {
          if ('object' !== r(e) && 'function' != typeof e)
            throw new TypeError('Object prototype may only be an Object: ' + e)
          if (null === e)
            throw new Error(
              "This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument."
            )
          function n() {}
          return (n.prototype = e), new n()
        }),
        String.prototype.trim ||
          (String.prototype.trim = function() {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
          })
      var y = 'function' == typeof Promise
      'object' !==
        ('undefined' == typeof document ? 'undefined' : r(document)) &&
        void 0 !== e &&
        e.__config__ &&
        ('android' === e.__config__.platform
          ? (y = !0)
          : ((e.__config__.systemVersion &&
              e.__config__.systemVersion.split('.')[0]) ||
              0) > 8 && (y = !0))
      var b = y ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout
      function v(e, t, n, r) {
        var o = []
        return (
          t.forEach(function(t, n) {
            if ('string' == typeof t) o[n] = g(e, t)
            else {
              var r = Object.keys(t)[0],
                i = t[r]
              if ('string' == typeof i) o[n] = g(e, i)
              else {
                var a = i[0]
                if ('string' == typeof a) {
                  var s = g(e, a)
                  o[n] = i[1] ? i[1](s) : s
                } else {
                  var c = []
                  a.forEach(function(t) {
                    c.push(g(e, t))
                  }),
                    (o[n] = i[1].apply(null, c))
                }
              }
              o[r] = o[n]
            }
          }),
          n && (n[r] = o),
          o
        )
      }
      function g(e, t) {
        for (
          var n = t
              .replace(/]/g, '')
              .replace(/\[/g, '.')
              .split('.'),
            r = e,
            o = 0,
            i = n.length;
          o < i;
          o++
        )
          r = r[n[o]]
        return r
      }
      function w(e, t, n) {
        var r = {}
        return (
          e.forEach(function(e) {
            if ('string' == typeof e) r[e] = !0
            else {
              var t = e[Object.keys(e)[0]]
              'string' == typeof t
                ? (r[t] = !0)
                : 'string' == typeof t[0]
                ? (r[t[0]] = !0)
                : t[0].forEach(function(e) {
                    return (r[e] = !0)
                  })
            }
          }),
          t && (t[n] = r),
          r
        )
      }
      function _(e, t) {
        for (var n = 0, r = t.length; n < r; n++)
          if (t[n] === e) {
            t.splice(n, 1)
            break
          }
      }
      function x(e) {
        return e.children
      }
      function k(e, t) {
        return s(
          e.nodeName,
          h(h({}, e.attributes), t),
          arguments.length > 2 ? [].slice.call(arguments, 2) : e.children
        )
      }
      var C = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
        O = []
      function j() {
        for (var e; (e = O.pop()); ) ne(e)
      }
      var S = i.mapping
      function E(e, t, n) {
        if ('string' == typeof t || 'number' == typeof t)
          return void 0 !== e.splitText
        if ('string' == typeof t.nodeName) {
          var r = S[t.nodeName]
          return r
            ? n || e._componentConstructor === r
            : !e._componentConstructor && P(e, t.nodeName)
        }
        return n || e._componentConstructor === t.nodeName
      }
      function P(e, t) {
        return (
          e.normalizedNodeName === t ||
          e.nodeName.toLowerCase() === t.toLowerCase()
        )
      }
      function A(e) {
        var t = h({}, e.attributes)
        t.children = e.children
        var n = e.nodeName.defaultProps
        if (void 0 !== n) for (var r in n) void 0 === t[r] && (t[r] = n[r])
        return t
      }
      function T(e) {
        var t,
          n = e.replace(/\/\*(.|\s)*?\*\//g, ' ').replace(/\s+/g, ' '),
          r = {},
          o = n.match(/ ?(.*?) ?{([^}]*)}/) || [i, a, n],
          i = o[0],
          a = o[1],
          s = o[2].split(';').map(function(e) {
            return e.split(':').map(function(e) {
              return e && e.trim()
            })
          })
        for (s = Array.isArray(s), s = (s = 0) || s[Symbol.iterator](); ; ) {
          var c
          if (s) {
            if (s >= s.length) break
            c = s[s++]
          } else {
            if ((s = s.next()).done) break
            c = s.value
          }
          var l = c,
            u = l[0],
            p = l[1]
          r[
            ((t = u),
            t.replace(/\W+\w/g, function(e) {
              return e.slice(-1).toUpperCase()
            }))
          ] = p
        }
        return r
      }
      function N(e) {
        var t = e.parentNode
        t && t.removeChild(e)
      }
      function B(e, t, n, o, a) {
        if (('className' === t && (t = 'class'), 'key' === t));
        else if ('ref' === t) m(n, null), m(o, e)
        else if ('class' !== t || a)
          if ('style' === t)
            if (i.isWeb) {
              if (
                ((o && 'string' != typeof o && 'string' != typeof n) ||
                  (e.style.cssText = o || ''),
                o && 'object' === r(o))
              ) {
                if ('string' != typeof n)
                  for (var s in n) s in o || (e.style[s] = '')
                for (var s in o)
                  e.style[s] =
                    'number' == typeof o[s] && !1 === C.test(s)
                      ? o[s] + 'px'
                      : o[s]
              }
            } else {
              var c = n,
                l = o
              'string' == typeof n && (c = T(n)),
                'string' == typeof o && (l = T(o))
              var u = {},
                p = !1
              if (c) {
                for (var f in c)
                  'object' != r(l) || f in l || ((u[f] = ''), (p = !0))
                for (var d in l) l[d] !== c[d] && ((u[d] = l[d]), (p = !0))
                p && e.setStyles(u)
              } else e.setStyles(l)
            }
          else if ('dangerouslySetInnerHTML' === t)
            o && (e.innerHTML = o.__html || '')
          else if ('o' == t[0] && 'n' == t[1]) {
            var h = t !== (t = t.replace(/Capture$/, '')),
              y = t.toLowerCase()
            ;(t = (y in e ? y : t).slice(2)),
              o
                ? n ||
                  (e.addEventListener(t, L, h),
                  'tap' == t &&
                    (e.addEventListener('touchstart', D, h),
                    e.addEventListener('touchend', G, h)))
                : (e.removeEventListener(t, L, h),
                  'tap' == t &&
                    (e.removeEventListener('touchstart', D, h),
                    e.removeEventListener('touchend', G, h))),
              ((e._listeners || (e._listeners = {}))[t] = o)
          } else if ('list' !== t && 'type' !== t && !a && t in e)
            !(function(e, t, n) {
              try {
                e[t] = n
              } catch (e) {}
            })(e, t, null == o ? '' : o),
              (null != o && !1 !== o) || e.removeAttribute(t)
          else {
            var b = a && t !== (t = t.replace(/^xlink:?/, ''))
            null == o || !1 === o
              ? b
                ? e.removeAttributeNS(
                    'http://www.w3.org/1999/xlink',
                    t.toLowerCase()
                  )
                : e.removeAttribute(t)
              : 'function' != typeof o &&
                (b
                  ? e.setAttributeNS(
                      'http://www.w3.org/1999/xlink',
                      t.toLowerCase(),
                      o
                    )
                  : e.setAttribute(t, o))
          }
        else e.className = o || ''
      }
      function L(e) {
        return this._listeners[e.type]((i.event && i.event(e)) || e)
      }
      function D(e) {
        ;(this.___touchX = e.touches[0].pageX),
          (this.___touchY = e.touches[0].pageY),
          (this.___scrollTop = document.body.scrollTop)
      }
      function G(e) {
        Math.abs(e.changedTouches[0].pageX - this.___touchX) < 30 &&
          Math.abs(e.changedTouches[0].pageY - this.___touchY) < 30 &&
          Math.abs(document.body.scrollTop - this.___scrollTop) < 30 &&
          this.dispatchEvent(new CustomEvent('tap', { detail: e }))
      }
      var U = 0
      function I(e) {
        for (var t = 0, n = i.styleCache.length; t < n; t++) {
          var r = i.styleCache[t]
          if (r.ctor === e) return r.attrName
        }
        var o = 's' + U
        return i.styleCache.push({ ctor: e, attrName: o }), U++, o
      }
      function F(e, t) {
        ;(t = '[' + t.toLowerCase() + ']'),
          (e = e.replace(/\/\*[^*]*\*+([^/][^*]*\*+)*\//g, ''))
        var n = new RegExp(
          '([^\r\n,{}:]+)(:[^\r\n,{}]+)?(,(?=[^{}]*{)|s*{)',
          'g'
        )
        return (e = e.replace(n, function(e, n, r, o) {
          return (
            void 0 === r && (r = ''),
            n.match(
              /^\s*(@media|\d+%?|@-webkit-keyframes|@keyframes|to|from|@font-face)/
            )
              ? n + r + o
              : n.replace(/(\s*)$/, '') + t + r + o
          )
        }))
      }
      function R(e, t) {
        i.scopedStyle &&
          (function e(t, n) {
            'object' === r(n) &&
              ((n.attributes = n.attributes || {}),
              (n.attributes[t] = ''),
              (n.css = n.css || {}),
              (n.css[t] = ''),
              n.children.forEach(function(n) {
                return e(t, n)
              }))
          })(t, e)
      }
      function $(e, t) {
        var n, r, o
        i.scopedStyle
          ? i.staticStyleMapping[t] ||
            (!(function(e, t) {
              t = t.toLowerCase()
              var n = document.getElementById(t),
                r = document.getElementsByTagName('head')[0]
              n && n.parentNode === r && r.removeChild(n)
              var o = document.createElement('style')
              r.appendChild(o),
                o.setAttribute('type', 'text/css'),
                o.setAttribute('id', t),
                window.ActiveXObject
                  ? (o.styleSheet.cssText = e)
                  : (o.textContent = e)
            })(F(e, t), t),
            (i.staticStyleMapping[t] = !0))
          : i.staticStyleMapping[t] ||
            ((n = e),
            (r = document.getElementsByTagName('head')[0]),
            (o = document.createElement('style')),
            r.appendChild(o),
            o.setAttribute('type', 'text/css'),
            window.ActiveXObject
              ? (o.styleSheet.cssText = n)
              : (o.textContent = n),
            (i.staticStyleMapping[t] = !0))
      }
      function M(e, t) {
        if ('object' === r(e) && t)
          for (var n in ((e.attributes = e.attributes || {}), t))
            e.attributes[n] = ''
      }
      var q = [],
        H = 0,
        z = !1,
        W = !1
      function V() {
        for (var e; (e = q.pop()); )
          i.afterMount && i.afterMount(e),
            e.installed && e.installed(),
            (e.constructor.css || e.css) &&
              $(
                e.constructor.css
                  ? e.constructor.css
                  : 'function' == typeof e.css
                  ? e.css()
                  : e.css,
                '_s' + I(e.constructor)
              )
      }
      function X(e, t, n, r, o, i, a) {
        var s, c
        return (
          H++ ||
            ((z = null != o && void 0 !== o.ownerSVGElement),
            (W = null != e && !('__omiattr_' in e))),
          (c = t),
          '[object Array]' === Object.prototype.toString.call(c)
            ? (t = { nodeName: 'span', children: t })
            : t && t.nodeName === x && (t.nodeName = 'span'),
          (s = Y(e, t, n, r, i, a)),
          o && s.parentNode !== o && o.appendChild(s),
          --H || ((W = !1), i || V()),
          s
        )
      }
      function Y(e, t, n, r, o, a) {
        var s = e,
          c = z
        ;(null != t && 'boolean' != typeof t) || (t = '')
        var l,
          u,
          p = t.nodeName
        if (i.mapping[p]) return (t.nodeName = i.mapping[p]), re(e, t, n, r, a)
        if ('function' == typeof p) return re(e, t, n, r, a)
        if ('string' == typeof t || 'number' == typeof t) {
          e && void 0 !== e.splitText && e.parentNode && (!e._component || o)
            ? e.nodeValue != t && (e.nodeValue = t)
            : ((s = document.createTextNode(t)),
              e && (e.parentNode && e.parentNode.replaceChild(s, e), K(e, !0)))
          try {
            s.__omiattr_ = !0
          } catch (e) {}
          return s
        }
        if (
          ((z = 'svg' === p || ('foreignObject' !== p && z)),
          (p = String(p)),
          (!e || !P(e, p)) &&
            ((l = p),
            ((u = z
              ? i.doc.createElementNS('http://www.w3.org/2000/svg', l)
              : i.doc.createElement(l)).normalizedNodeName = l),
            (s = u),
            e))
        ) {
          for (; e.firstChild; ) s.appendChild(e.firstChild)
          e.parentNode && e.parentNode.replaceChild(s, e), K(e, !0)
        }
        var f = s.firstChild,
          d = s.__omiattr_,
          h = t.children
        if (null == d) {
          d = s.__omiattr_ = {}
          for (var m = s.attributes, y = m.length; y--; )
            d[m[y].name] = m[y].value
        }
        return (
          !W &&
          h &&
          1 === h.length &&
          'string' == typeof h[0] &&
          null != f &&
          void 0 !== f.splitText &&
          null == f.nextSibling
            ? f.nodeValue != h[0] && (f.nodeValue = h[0])
            : ((h && h.length) || null != f) &&
              (function(e, t, n, r, o, i) {
                var a,
                  s,
                  c,
                  l,
                  u,
                  p = e.childNodes,
                  f = [],
                  d = {},
                  h = 0,
                  m = 0,
                  y = p.length,
                  b = 0,
                  v = t ? t.length : 0
                if (0 !== y)
                  for (var g = 0; g < y; g++) {
                    var w = p[g],
                      _ = w.__omiattr_
                    null !=
                    (x =
                      v && _
                        ? w._component
                          ? w._component.__key
                          : _.key
                        : null)
                      ? (h++, (d[x] = w))
                      : (_ ||
                          (void 0 !== w.splitText
                            ? !o || w.nodeValue.trim()
                            : o)) &&
                        (f[b++] = w)
                  }
                if (0 !== v)
                  for (g = 0; g < v; g++) {
                    var x
                    if (((l = t[g]), (u = null), null != (x = l.key)))
                      h && void 0 !== d[x] && ((u = d[x]), (d[x] = void 0), h--)
                    else if (!u && m < b)
                      for (a = m; a < b; a++)
                        if (void 0 !== f[a] && E((s = f[a]), l, o)) {
                          ;(u = s),
                            (f[a] = void 0),
                            a === b - 1 && b--,
                            a === m && m++
                          break
                        }
                    ;(u = Y(u, l, n, r, null, i)),
                      (c = p[g]),
                      u &&
                        u !== e &&
                        u !== c &&
                        (null == c
                          ? e.appendChild(u)
                          : u === c.nextSibling
                          ? N(c)
                          : e.insertBefore(u, c))
                  }
                if (h) for (var g in d) void 0 !== d[g] && K(d[g], !1)
                for (; m <= b; ) void 0 !== (u = f[b--]) && K(u, !1)
              })(s, h, n, r, W || null != d.dangerouslySetInnerHTML, a),
          (function(e, t, n) {
            var r
            for (r in n)
              (t && null != t[r]) ||
                null == n[r] ||
                B(e, r, n[r], (n[r] = void 0), z)
            for (r in t)
              'children' === r ||
                'innerHTML' === r ||
                (r in n &&
                  t[r] === ('value' === r || 'checked' === r ? e[r] : n[r])) ||
                B(e, r, n[r], (n[r] = t[r]), z)
          })(s, t.attributes, d),
          (z = c),
          s
        )
      }
      function K(e, t) {
        var n = e._component
        n
          ? oe(n)
          : (null != e.__omiattr_ && m(e.__omiattr_.ref, null),
            (!1 !== t && null != e.__omiattr_) || N(e),
            J(e))
      }
      function J(e) {
        for (e = e.lastChild; e; ) {
          var t = e.previousSibling
          K(e, !0), (e = t)
        }
      }
      var Z = {}
      function Q(e, t, n, r) {
        var o,
          a = Z[e.name]
        if (
          (e.prototype && e.prototype.render
            ? ((o = new e(t, n)), ae.call(o, t, n))
            : (((o = new ae(t, n)).constructor = e), (o.render = ee)),
          r && (o.scopedCssAttr = r.css),
          o.store)
        ) {
          if (o.use) {
            var s = 'function' == typeof o.use ? o.use() : o.use
            if (i.isMultiStore) {
              var c = {},
                l = {}
              for (var u in s)
                (c[u] = {}),
                  (l[u] = {}),
                  w(s[u], c, u),
                  v(o.store[u].data, s[u], l, u),
                  o.store[u].instances.push(o)
              ;(o.using = l), (o._updatePath = c)
            } else
              (o._updatePath = w(s)),
                (o.using = v(o.store.data, s)),
                o.store.instances.push(o)
          }
          if (o.useSelf) {
            var p = 'function' == typeof o.useSelf ? o.useSelf() : o.useSelf
            if (i.isMultiStore) {
              var f = {},
                d = {}
              for (var h in p)
                w(p[h], f, h),
                  v(o.store[h].data, p[h], d, h),
                  o.store[h].updateSelfInstances.push(o)
              ;(o.usingSelf = d), (o._updateSelfPath = f)
            } else
              (o._updateSelfPath = w(p)),
                (o.usingSelf = v(o.store.data, p)),
                o.store.updateSelfInstances.push(o)
          }
          if (o.compute)
            for (var m in o.compute)
              o.computed[m] = o.compute[m].call(
                i.isMultiStore ? o.store : o.store.data
              )
        }
        if (a)
          for (var y = a.length; y--; )
            if (a[y].constructor === e) {
              ;(o.nextBase = a[y].nextBase), a.splice(y, 1)
              break
            }
        return o
      }
      function ee(e, t) {
        return this.constructor(e, t)
      }
      function te(e, t, n, r, o) {
        e._disable ||
          ((e._disable = !0),
          (e.__ref = t.ref) && delete t.ref,
          (e.__key = t.key) && delete t.key,
          (e.base && !o) ||
            (e.beforeInstall && e.beforeInstall(), e.install && e.install()),
          e.prevProps || (e.prevProps = e.props),
          (e.props = t),
          (e._disable = !1),
          0 !== n &&
            (1 !== n && !1 === i.syncComponentUpdates && e.base
              ? (function(e) {
                  1 == O.push(e) && (i.debounceRendering || b)(j)
                })(e)
              : ne(e, 1, o)),
          m(e.__ref, e))
      }
      function ne(e, t, n, r, o) {
        if (!e._disable) {
          var a,
            s,
            c,
            l = e.props,
            u = e.store,
            p = e.prevProps || l,
            f = e.base,
            d = e.nextBase,
            h = f || d,
            m = e._component,
            y = !1
          if (f) {
            e.props = p
            var b = !0
            e.receiveProps && (b = e.receiveProps(l, p)),
              !1 !== b
                ? ((y = !1), e.beforeUpdate && e.beforeUpdate(l, u))
                : (y = !0),
              (e.props = l)
          }
          if (((e.prevProps = e.nextBase = null), !y)) {
            e.beforeRender && e.beforeRender(),
              (a = e.render(l, u)),
              (e.constructor.css || e.css) && R(a, '_s' + I(e.constructor)),
              M(a, e.scopedCssAttr)
            var v,
              g,
              w = a && a.nodeName,
              _ = i.mapping[w]
            if (_) {
              var x = A(a)
              ;(s = m) && s.constructor === _ && x.key == s.__key
                ? te(s, x, 1, 0, !1)
                : ((v = s),
                  (e._component = s = Q(_, x, u)),
                  (s.nextBase = s.nextBase || d),
                  (s._parentComponent = e),
                  te(s, x, 0, 0, !1),
                  ne(s, 1, n, !0)),
                (g = s.base)
            } else
              (c = h),
                (v = m) && (c = e._component = null),
                (h || 1 === t) &&
                  (c && (c._component = null),
                  (g = X(c, a, u, n || !f, h && h.parentNode, !0, o)))
            if (h && g !== h && s !== m) {
              var k = h.parentNode
              k &&
                g !== k &&
                (k.replaceChild(g, h), v || ((h._component = null), K(h, !1)))
            }
            if ((v && oe(v), (e.base = g), g && !r)) {
              for (var C = e, O = e; (O = O._parentComponent); )
                (C = O).base = g
              ;(g._component = C), (g._componentConstructor = C.constructor)
            }
          }
          if (
            (!f || n
              ? q.unshift(e)
              : y ||
                (e.afterUpdate && e.afterUpdate(p, u),
                e.updated && e.updated(p, u),
                i.afterUpdate && i.afterUpdate(e)),
            null != e._renderCallbacks)
          )
            for (; e._renderCallbacks.length; ) e._renderCallbacks.pop().call(e)
          H || r || V()
        }
      }
      function re(e, t, n, r, o) {
        for (
          var i = e && e._component,
            a = i,
            s = e,
            c = i && e._componentConstructor === t.nodeName,
            l = c,
            u = A(t);
          i && !l && (i = i._parentComponent);

        )
          l = i.constructor === t.nodeName
        return (
          i && l && (!r || i._component)
            ? (o || te(i, u, 3, 0, r), (e = i.base))
            : (a && !c && (oe(a), (e = s = null)),
              (i = Q(t.nodeName, u, n, t)),
              e && !i.nextBase && ((i.nextBase = e), (s = null)),
              te(i, u, 1, 0, r),
              (e = i.base),
              s && e !== s && ((s._component = null), K(s, !1))),
          e
        )
      }
      function oe(e) {
        i.beforeUnmount && i.beforeUnmount(e)
        var t = e.base
        if (((e._disable = !0), e.uninstall && e.uninstall(), e.store))
          if (i.isMultiStore)
            for (var n in e.store) {
              var r = e.store[n]
              r.instances && _(e, r.instances),
                r.updateSelfInstances && _(e, r.updateSelfInstances)
            }
          else
            e.store.instances && _(e, e.store.instances),
              e.store.updateSelfInstances && _(e, e.store.updateSelfInstances)
        e.base = null
        var o = e._component
        o
          ? oe(o)
          : t &&
            (null != t.__omiattr_ && m(t.__omiattr_.ref, null),
            (e.nextBase = t),
            N(t),
            (function(e) {
              var t = e.constructor.name
              ;(Z[t] || (Z[t] = [])).push(e)
            })(e),
            J(t)),
          m(e.__ref, null)
      }
      var ie = 0,
        ae = (function() {
          function e(t, n) {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (this.props = (function(e, t) {
                for (var n, r, o = p(e), i = 1; i < arguments.length; i++) {
                  for (var a in (n = Object(arguments[i])))
                    l.call(n, a) && (o[a] = n[a])
                  if (c) {
                    r = c(n)
                    for (var s = 0; s < r.length; s++)
                      u.call(n, r[s]) && (o[r[s]] = n[r[s]])
                  }
                }
                return o
              })({}, this.constructor.defaultProps, t)),
              (this.elementId = ie++),
              (this._preCss = null),
              (this.store = n),
              (this.computed = {})
          }
          return (
            (e.prototype.update = function(e) {
              this._willUpdate ||
                ((this._willUpdate = !0),
                e &&
                  (this._renderCallbacks = this._renderCallbacks || []).push(e),
                ne(this, 2),
                i.componentChange && i.componentChange(this, this.base),
                (this._willUpdate = !1))
            }),
            (e.prototype.updateSelf = function() {
              this._willUpdateSelf ||
                ((this._willUpdateSelf = !0),
                ne(this, 2, null, null, !0),
                (this._willUpdateSelf = !1))
            }),
            (e.prototype.fire = function(e, t) {
              var n = this
              Object.keys(this.props).every(function(r) {
                return (
                  'on' + e.toLowerCase() !== r.toLowerCase() ||
                  (n.props[r]({ detail: t }), !1)
                )
              })
            }),
            (e.prototype.render = function() {}),
            e
          )
        })()
      function se(e, t, n) {
        var o = []
        for (var i in (ye(e) &&
          (0 === e.length && (e.$_o_ = { $_r_: e, $_p_: '#' }), ue(e, e)),
        e &&
          'object' === r(e) &&
          0 === Object.keys(e).length &&
          (fe(e), (e.$_o_.$_r_ = e)),
        e))
          e.hasOwnProperty(i) &&
            (n
              ? ye(t) && be(t, i)
                ? (o.push(i), pe(e, i, null, e))
                : 'string' == typeof t &&
                  i == t &&
                  (o.push(i), pe(e, i, null, e))
              : (o.push(i), pe(e, i, null, e)))
        e.$_c_ || (e.$_c_ = [])
        var a = n || t
        e.$_c_.push({ all: !n, propChanged: a, eventPropArr: o })
      }
      ae.is = 'WeElement'
      var ce = [
          'concat',
          'copyWithin',
          'fill',
          'pop',
          'push',
          'reverse',
          'shift',
          'sort',
          'splice',
          'unshift',
          'size'
        ].join(','),
        le = [
          'concat',
          'copyWithin',
          'entries',
          'every',
          'fill',
          'filter',
          'find',
          'findIndex',
          'forEach',
          'includes',
          'indexOf',
          'join',
          'keys',
          'lastIndexOf',
          'map',
          'pop',
          'push',
          'reduce',
          'reduceRight',
          'reverse',
          'shift',
          'slice',
          'some',
          'sort',
          'splice',
          'toLocaleString',
          'toString',
          'unshift',
          'values',
          'size'
        ]
      function ue(e, t) {
        le.forEach(function(n) {
          ;(e[n] = function() {
            var e = Array.prototype.slice.call(this, 0),
              r = Array.prototype[n].apply(
                this,
                Array.prototype.slice.call(arguments)
              )
            if (new RegExp('\\b' + n + '\\b').test(ce)) {
              for (var o in this)
                this.hasOwnProperty(o) &&
                  !he(this[o]) &&
                  pe(this, o, this.$_o_.$_p_, t)
              de('Array-' + n, this, e, this, this.$_o_.$_p_, t)
            }
            return r
          }),
            (e[
              'pure' + n.substring(0, 1).toUpperCase() + n.substring(1)
            ] = function() {
              return Array.prototype[n].apply(
                this,
                Array.prototype.slice.call(arguments)
              )
            })
        })
      }
      function pe(e, t, n, o) {
        if ('$_o_' !== t && !he(e[t])) {
          e.$_o_ || (e.$_o_ = { $_r_: o }), (e.$_o_.$_p_ = null != n ? n : '#')
          var i = (e.$_o_[t] = e[t])
          if (
            (Object.defineProperty(e, t, {
              get: function() {
                return this.$_o_[t]
              },
              set: function(n) {
                var r = this.$_o_[t]
                ;(this.$_o_[t] = n), de(t, n, r, this, e.$_o_.$_p_, o)
              },
              configurable: !0,
              enumerable: !0
            }),
            'object' == r(i))
          )
            for (var a in (ye(i) && (ue(i, o), 0 === i.length && fe(i, t, n)),
            i && 0 === Object.keys(i).length && fe(i, t, n),
            i))
              i.hasOwnProperty(a) && pe(i, a, e.$_o_.$_p_ + '-' + t, o)
        }
      }
      function fe(e, t, n) {
        e.$_o_ ||
          ((e.$_o_ = {}),
          (e.$_o_.$_p_ = null != n ? n + '-' + t : null != t ? '#-' + t : '#'))
      }
      function de(e, t, n, o, i, a) {
        if (t !== n && (!me(t) || !me(n)) && a.$_c_)
          for (
            var s = (function(e, t) {
                if ('#' === t) return e
                return t.split('-')[1]
              })(e, i),
              c = 0,
              l = a.$_c_.length;
            c < l;
            c++
          ) {
            var u = a.$_c_[c]
            ;(u.all || be(u.eventPropArr, s) || 0 === s.indexOf('Array-')) &&
              u.propChanged.call(o, e, t, n, i)
          }
        0 !== e.indexOf('Array-') &&
          'object' === r(t) &&
          pe(o, e, o.$_o_.$_p_, a)
      }
      function he(e) {
        return '[object Function]' == Object.prototype.toString.call(e)
      }
      function me(e) {
        return 'number' == typeof e && isNaN(e)
      }
      function ye(e) {
        return '[object Array]' === Object.prototype.toString.call(e)
      }
      function be(e, t) {
        for (var n = e.length; --n > -1; ) if (t === e[n]) return !0
        return !1
      }
      function ve(e, t, n, r, o) {
        if (((t = 'string' == typeof t ? document.querySelector(t) : t), n))
          if (n.data) ge(n)
          else
            for (var a in ((i.isMultiStore = !0), n)) n[a].data && ge(n[a], a)
        if (r) for (; t.firstChild; ) t.removeChild(t.firstChild)
        return (
          o && (o = 'string' == typeof o ? document.querySelector(o) : o),
          X(o, e, n, !1, t, !1)
        )
      }
      function ge(e, t) {
        ;(e.instances = []),
          (e.updateSelfInstances = []),
          (function(e, t) {
            e.update = function(n) {
              Object.keys(n).length > 0 &&
                (this.instances.forEach(function(r) {
                  _e(r, t),
                    t
                      ? r._updatePath &&
                        r._updatePath[t] &&
                        xe(n, r._updatePath[t]) &&
                        (r.use &&
                          v(
                            e.data,
                            ('function' == typeof r.use ? r.use() : r.use)[t],
                            r.using,
                            t
                          ),
                        r.update())
                      : r._updatePath &&
                        xe(n, r._updatePath) &&
                        (r.use &&
                          (r.using = v(
                            e.data,
                            'function' == typeof r.use ? r.use() : r.use
                          )),
                        r.update())
                }),
                this.updateSelfInstances.forEach(function(r) {
                  _e(r, t),
                    t
                      ? r._updateSelfPath &&
                        r._updateSelfPath[t] &&
                        xe(n, r._updateSelfPath[t]) &&
                        (r.useSelf &&
                          v(
                            e.data,
                            ('function' == typeof r.useSelf
                              ? r.useSelf()
                              : r.useSelf)[t],
                            r.usingSelf,
                            t
                          ),
                        r.updateSelf())
                      : r._updateSelfPath &&
                        xe(n, r._updateSelfPath) &&
                        ((r.usingSelf = v(
                          e.data,
                          'function' == typeof r.useSelf
                            ? r.useSelf()
                            : r.useSelf
                        )),
                        r.updateSelf())
                }),
                this.onChange && this.onChange(n))
            }
          })(e, t),
          se(e.data, function(t, n, r, o) {
            var i = {}
            ;(i[
              (function(e) {
                var t = ''
                return (
                  e
                    .replace('#-', '')
                    .split('-')
                    .forEach(function(e, n) {
                      n
                        ? isNaN(Number(e))
                          ? (t += '.' + e)
                          : (t += '[' + e + ']')
                        : (t += e)
                    }),
                  t
                )
              })(o + '-' + t)
            ] = !0),
              e.update(i)
          })
      }
      function we(e, t, n) {
        return (
          ge(n),
          X((t = 'string' == typeof t ? document.querySelector(t) : t), e, n)
        )
      }
      function _e(e, t) {
        if (e.compute)
          for (var n in e.compute)
            e.computed[n] = e.compute[n].call(t ? e.store : e.store.data)
      }
      function xe(e, t) {
        for (var n in e) {
          if (t[n]) return !0
          for (var r in t) if (ke(n, r)) return !0
        }
        return !1
      }
      function ke(e, t) {
        if (0 === e.indexOf(t)) {
          var n = e.substr(t.length, 1)
          if ('[' === n || '.' === n) return !0
        }
        return !1
      }
      function Ce(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      function Oe(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ('object' !== r(t) && 'function' != typeof t) ? e : t
      }
      ;(se.add = function(e, t) {
        pe(e, t, e.$_o_.$_p_, e.$_o_.$_r_)
      }),
        (se.set = function(e, t, n) {
          void 0 === e[t] && pe(e, t, e.$_o_.$_p_, e.$_o_.$_r_), (e[t] = n)
        }),
        (Array.prototype.size = function(e) {
          this.length = e
        })
      var je = ['use', 'useSelf']
      function Se(e, t, n) {
        if ('WeElement' === t.is) i.mapping[e] = t
        else {
          n = 'string' == typeof n ? { css: n } : n || {}
          var o = (function(e) {
            function o() {
              var t, r
              Ce(this, o)
              for (var i = arguments.length, a = Array(i), s = 0; s < i; s++)
                a[s] = arguments[s]
              return (
                (t = r = Oe(this, e.call.apply(e, [this].concat(a)))),
                (r.compute = n.compute),
                Oe(r, t)
              )
            }
            return (
              (function(e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError(
                    'Super expression must either be null or a function, not ' +
                      r(t)
                  )
                ;(e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                  }
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t))
              })(o, e),
              (o.prototype.render = function() {
                return t.call(this, this)
              }),
              o
            )
          })(ae)
          ;(o.css = n.css),
            (o.propTypes = n.propTypes),
            (o.defaultProps = n.defaultProps)
          var a = function(e) {
            'function' == typeof n[e] &&
              (o.prototype[e] = function() {
                return n[e].apply(this, arguments)
              })
          }
          for (var s in n) a(s)
          je.forEach(function(e) {
            n[e] &&
              'function' !== n[e] &&
              (o.prototype[e] = function() {
                return n[e]
              })
          }),
            (i.mapping[e] = o)
        }
      }
      function Ee(e) {
        return e.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, function(e, t) {
          return (window.innerWidth * Number(t)) / 750 + 'px'
        })
      }
      function Pe(e) {
        return function(t) {
          Se(e, t)
        }
      }
      var Ae = {}.hasOwnProperty
      function Te() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var n = arguments[t]
          if (n) {
            var o = r(n)
            if ('string' === o || 'number' === o) e.push(n)
            else if (Array.isArray(n) && n.length) {
              var i = Te.apply(null, n)
              i && e.push(i)
            } else if ('object' === o)
              for (var a in n) Ae.call(n, a) && n[a] && e.push(a)
          }
        }
        return e.join(' ')
      }
      function Ne() {
        var e = Array.prototype.slice.call(arguments, 0),
          t = e[0],
          n = e.slice(1)
        if (
          (t &&
            (t.class
              ? (n.unshift(t.class), delete t.class)
              : t.className && (n.unshift(t.className), delete t.className)),
          n.length > 0)
        )
          return { class: Te.apply(null, n) }
      }
      function Be(e) {
        var t = e.base
        if (t)
          for (; t.parentNode; ) {
            if (t.parentNode._component) return t.parentNode._component
            t = t.parentNode
          }
      }
      var Le = function(e) {
          return String(e)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
        },
        De = function(e, t) {
          return String(e).replace(/(\n+)/g, '$1' + (t || '\t'))
        },
        Ge = i.mapping,
        Ue = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,
        Ie = function(e, t, n) {
          return (
            String(e).length > (t || 40) ||
            (!n && -1 !== String(e).indexOf('\n')) ||
            -1 !== String(e).indexOf('<')
          )
        },
        Fe = {}
      function Re(e) {
        var t = ''
        for (var n in e) {
          var r = e[n]
          null != r &&
            (t && (t += ' '),
            (t +=
              Fe[n] || (Fe[n] = n.replace(/([A-Z])/g, '-$1').toLowerCase())),
            (t += ': '),
            (t += r),
            'number' == typeof r &&
              !1 === IS_NON_DIMENSIONAL.test(n) &&
              (t += 'px'),
            (t += ';'))
        }
        return t || void 0
      }
      function $e(e, t, n, o) {
        n = n || {}
        var i = {},
          a = (function e(t, n, o, i, a) {
            if (null == t || 'boolean' == typeof t) return ''
            var s = t.nodeName,
              c = t.attributes,
              l = !1,
              u = n.pretty,
              p = u && 'string' == typeof u ? u : '\t'
            if ('object' !== r(t) && !s) return Le(t)
            var f = Ge[s]
            if (f) {
              l = !0
              var d,
                h = (function(e) {
                  var t = (function(e, t) {
                    for (var n in t) e[n] = t[n]
                    return e
                  })({}, e.attributes)
                  t.children = e.children
                  var n = e.nodeName.defaultProps
                  if (void 0 !== n)
                    for (var r in n) void 0 === t[r] && (t[r] = n[r])
                  return t
                })(t),
                m = new f(h, o)
              if (
                ((m._disable = m.__x = !0),
                (m.props = h),
                (m.store = o),
                m.install && m.install(),
                m.beforeRender && m.beforeRender(),
                (d = m.render(m.props, m.store)),
                n.scopedCSS)
              ) {
                if (m.constructor.css || m.css) {
                  var y = m.constructor.css
                      ? m.constructor.css
                      : 'function' == typeof m.css
                      ? m.css()
                      : m.css,
                    b = '_s' + I(m.constructor)
                  ;(a[b] = { id: b, css: F(y, b) }), R(d, b)
                }
                ;(m.scopedCSSAttr = t.css), M(d, m.scopedCSSAttr)
              }
              return e(d, n, o, !1, a)
            }
            var v,
              g = ''
            if (c) {
              var w = Object.keys(c)
              n && !0 === n.sortAttributes && w.sort()
              for (var _ = 0; _ < w.length; _++) {
                var x = w[_],
                  k = c[x]
                if (
                  'children' !== x &&
                  !x.match(/[\s\n\\/='"\0<>]/) &&
                    ((n && n.allAttributes) || ('key' !== x && 'ref' !== x))
                ) {
                  if ('className' === x) {
                    if (c.class) continue
                    x = 'class'
                  } else
                    i &&
                      x.match(/^xlink:?./) &&
                      (x = x.toLowerCase().replace(/^xlink:?/, 'xlink:'))
                  'style' === x && k && 'object' === r(k) && (k = Re(k))
                  var C = n.attributeHook && n.attributeHook(x, k, o, n, l)
                  if (C || '' === C) g += C
                  else if ('dangerouslySetInnerHTML' === x) v = k && k.__html
                  else if (
                    (k || 0 === k || '' === k) &&
                    'function' != typeof k
                  ) {
                    if (!((!0 !== k && '' !== k) || ((k = x), n && n.xml))) {
                      g += ' ' + x
                      continue
                    }
                    g += ' ' + x + '="' + Le(k) + '"'
                  }
                }
              }
            }
            if (u) {
              var O = g.replace(/^\n\s*/, ' ')
              O === g || ~O.indexOf('\n')
                ? u && ~g.indexOf('\n') && (g += '\n')
                : (g = O)
            }
            if (((g = '<' + s + g + '>'), String(s).match(/[\s\n\\/='"\0<>]/)))
              throw g
            var j = String(s).match(Ue)
            j && (g = g.replace(/>$/, ' />'))
            var S = []
            if (v) u && Ie(v) && (v = '\n' + p + De(v, p)), (g += v)
            else if (t.children) {
              var E = u && ~g.indexOf('\n')
              for (_ = 0; _ < t.children.length; _++) {
                var P = t.children[_]
                if (null != P && !1 !== P) {
                  var A = e(
                    P,
                    n,
                    o,
                    'svg' === s || ('foreignObject' !== s && i),
                    a
                  )
                  u && !E && Ie(A) && (E = !0), A && S.push(A)
                }
              }
              if (u && E)
                for (_ = S.length; _--; ) S[_] = '\n' + p + De(S[_], p)
            }
            if (S.length) g += S.join('')
            else if (n && n.xml) return g.substring(0, g.length - 1) + ' />'
            j || (u && ~g.indexOf('\n') && (g += '\n'), (g += '</' + s + '>'))
            return g
          })(e, (t = Object.assign({ scopedCSS: !0 }, t)), n, o, i)
        return { css: Object.values(i), html: a }
      }
      var Me = function e(t, n, r, o) {
          for (var i = 1; i < n.length; i++) {
            var a = n[i++],
              s = 'number' == typeof a ? r[a] : a
            1 === n[i]
              ? (o[0] = s)
              : 2 === n[i]
              ? ((o[1] = o[1] || {})[n[++i]] = s)
              : 3 === n[i]
              ? (o[1] = Object.assign(o[1] || {}, s))
              : o.push(n[i] ? t.apply(null, e(t, s, r, ['', null])) : s)
          }
          return o
        },
        qe = function(e) {
          for (
            var t,
              n,
              r = 1,
              o = '',
              i = '',
              a = [0],
              s = function(e) {
                1 === r && (e || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, '')))
                  ? a.push(e || o, 0)
                  : 3 === r && (e || o)
                  ? (a.push(e || o, 1), (r = 2))
                  : 2 === r && '...' === o && e
                  ? a.push(e, 3)
                  : 2 === r && o && !e
                  ? a.push(!0, 2, o)
                  : 4 === r && n && (a.push(e || o, 2, n), (n = '')),
                  (o = '')
              },
              c = 0;
            c < e.length;
            c++
          ) {
            c && (1 === r && s(), s(c))
            for (var l = 0; l < e[c].length; l++)
              (t = e[c][l]),
                1 === r
                  ? '<' === t
                    ? (s(), (a = [a]), (r = 3))
                    : (o += t)
                  : i
                  ? t === i
                    ? (i = '')
                    : (o += t)
                  : '"' === t || "'" === t
                  ? (i = t)
                  : '>' === t
                  ? (s(), (r = 1))
                  : r &&
                    ('=' === t
                      ? ((r = 4), (n = o), (o = ''))
                      : '/' === t
                      ? (s(),
                        3 === r && (a = a[0]),
                        (r = a),
                        (a = a[0]).push(r, 4),
                        (r = 0))
                      : ' ' === t || '\t' === t || '\n' === t || '\r' === t
                      ? (s(), (r = 2))
                      : (o += t))
          }
          return s(), a
        },
        He = 'function' == typeof Map,
        ze = He ? new Map() : {},
        We = He
          ? function(e) {
              var t = ze.get(e)
              return t || ze.set(e, (t = qe(e))), t
            }
          : function(e) {
              for (var t = '', n = 0; n < e.length; n++)
                t += e[n].length + '-' + e[n]
              return ze[t] || (ze[t] = qe(e))
            }
      function Ve(e) {
        var t = Me(this, We(e), arguments, [])
        return t.length > 1 ? t : t[0]
      }
      s.f = x
      var Xe = Ve.bind(s),
        Ye = ae,
        Ke = Se
      function Je() {
        return {}
      }
      ;(i.root.Omi = {
        h: s,
        createElement: s,
        cloneElement: k,
        createRef: Je,
        Component: ae,
        render: ve,
        rerender: j,
        options: i,
        WeElement: Ye,
        define: Se,
        rpx: Ee,
        defineElement: Ke,
        classNames: Te,
        extractClass: Ne,
        getHost: Be,
        renderToString: $e,
        tag: Pe,
        merge: we,
        html: Xe,
        htm: Ve,
        obaa: se
      }),
        (i.root.omi = i.root.Omi),
        (i.root.Omi.version = 'omio-2.8.0')
    }.call(this, n(10)))
  },
  function(e, t) {
    e.exports = function(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      )
    }
  },
  function(e, t) {
    e.exports = function(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
    }
  },
  function(e, t) {
    function n(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    e.exports = function(e, t, r) {
      return t && n(e.prototype, t), r && n(e, r), e
    }
  },
  function(e, t, n) {
    var r = n(7),
      o = n(25)
    e.exports = function(e, t) {
      return !t || ('object' !== r(t) && 'function' != typeof t) ? o(e) : t
    }
  },
  function(e, t) {
    function n(t) {
      return (
        (e.exports = n = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            }),
        n(t)
      )
    }
    e.exports = n
  },
  function(e, t, n) {
    var r = n(26)
    e.exports = function(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      ;(e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 }
      })),
        t && r(e, t)
    }
  },
  function(e, t) {
    function n(t) {
      return (
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? (e.exports = n = function(e) {
              return typeof e
            })
          : (e.exports = n = function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            }),
        n(t)
      )
    }
    e.exports = n
  },
  function(e, t, n) {
    e.exports = n(27)
  },
  function(e, t, n) {
    'use strict'
    function r(e) {
      return (r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            })(e)
    }
    var o = n(16)
    function i() {}
    var a = null,
      s = {}
    function c(e) {
      if ('object' !== r(this))
        throw new TypeError('Promises must be constructed via new')
      if ('function' != typeof e)
        throw new TypeError("Promise constructor's argument is not a function")
      ;(this._75 = 0),
        (this._83 = 0),
        (this._18 = null),
        (this._38 = null),
        e !== i && h(e, this)
    }
    function l(e, t) {
      for (; 3 === e._83; ) e = e._18
      if ((c._47 && c._47(e), 0 === e._83))
        return 0 === e._75
          ? ((e._75 = 1), void (e._38 = t))
          : 1 === e._75
          ? ((e._75 = 2), void (e._38 = [e._38, t]))
          : void e._38.push(t)
      !(function(e, t) {
        o(function() {
          var n = 1 === e._83 ? t.onFulfilled : t.onRejected
          if (null !== n) {
            var r = (function(e, t) {
              try {
                return e(t)
              } catch (e) {
                return (a = e), s
              }
            })(n, e._18)
            r === s ? p(t.promise, a) : u(t.promise, r)
          } else 1 === e._83 ? u(t.promise, e._18) : p(t.promise, e._18)
        })
      })(e, t)
    }
    function u(e, t) {
      if (t === e)
        return p(e, new TypeError('A promise cannot be resolved with itself.'))
      if (t && ('object' === r(t) || 'function' == typeof t)) {
        var n = (function(e) {
          try {
            return e.then
          } catch (e) {
            return (a = e), s
          }
        })(t)
        if (n === s) return p(e, a)
        if (n === e.then && t instanceof c)
          return (e._83 = 3), (e._18 = t), void f(e)
        if ('function' == typeof n) return void h(n.bind(t), e)
      }
      ;(e._83 = 1), (e._18 = t), f(e)
    }
    function p(e, t) {
      ;(e._83 = 2), (e._18 = t), c._71 && c._71(e, t), f(e)
    }
    function f(e) {
      if ((1 === e._75 && (l(e, e._38), (e._38 = null)), 2 === e._75)) {
        for (var t = 0; t < e._38.length; t++) l(e, e._38[t])
        e._38 = null
      }
    }
    function d(e, t, n) {
      ;(this.onFulfilled = 'function' == typeof e ? e : null),
        (this.onRejected = 'function' == typeof t ? t : null),
        (this.promise = n)
    }
    function h(e, t) {
      var n = !1,
        r = (function(e, t, n) {
          try {
            e(t, n)
          } catch (e) {
            return (a = e), s
          }
        })(
          e,
          function(e) {
            n || ((n = !0), u(t, e))
          },
          function(e) {
            n || ((n = !0), p(t, e))
          }
        )
      n || r !== s || ((n = !0), p(t, a))
    }
    ;(e.exports = c),
      (c._47 = null),
      (c._71 = null),
      (c._44 = i),
      (c.prototype.then = function(e, t) {
        if (this.constructor !== c)
          return (function(e, t, n) {
            return new e.constructor(function(r, o) {
              var a = new c(i)
              a.then(r, o), l(e, new d(t, n, a))
            })
          })(this, e, t)
        var n = new c(i)
        return l(this, new d(e, t, n)), n
      })
  },
  function(e, t) {
    function n(e) {
      return (n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            })(e)
    }
    var r
    r = (function() {
      return this
    })()
    try {
      r = r || new Function('return this')()
    } catch (e) {
      'object' === ('undefined' == typeof window ? 'undefined' : n(window)) &&
        (r = window)
    }
    e.exports = r
  },
  function(e, t) {
    function n(e, t, n, r, o, i, a) {
      try {
        var s = e[i](a),
          c = s.value
      } catch (e) {
        return void n(e)
      }
      s.done ? t(c) : Promise.resolve(c).then(r, o)
    }
    e.exports = function(e) {
      return function() {
        var t = this,
          r = arguments
        return new Promise(function(o, i) {
          var a = e.apply(t, r)
          function s(e) {
            n(a, o, i, s, c, 'next', e)
          }
          function c(e) {
            n(a, o, i, s, c, 'throw', e)
          }
          s(void 0)
        })
      }
    }
  },
  function(e, t, n) {
    var r = n(29),
      o = n(30),
      i = n(31)
    e.exports = function(e) {
      return r(e) || o(e) || i()
    }
  },
  function(e, t, n) {
    n(14), (e.exports = n(32))
  },
  function(e, t, n) {
    'use strict'
    'undefined' == typeof Promise && (n(15).enable(), (window.Promise = n(17))),
      n(18),
      (Object.assign = n(19))
  },
  function(e, t, n) {
    'use strict'
    var r = n(9),
      o = [ReferenceError, TypeError, RangeError],
      i = !1
    function a() {
      ;(i = !1), (r._47 = null), (r._71 = null)
    }
    function s(e, t) {
      return t.some(function(t) {
        return e instanceof t
      })
    }
    ;(t.disable = a),
      (t.enable = function(e) {
        ;(e = e || {}), i && a()
        i = !0
        var t = 0,
          n = 0,
          c = {}
        function l(t) {
          ;(e.allRejections || s(c[t].error, e.whitelist || o)) &&
            ((c[t].displayId = n++),
            e.onUnhandled
              ? ((c[t].logged = !0), e.onUnhandled(c[t].displayId, c[t].error))
              : ((c[t].logged = !0),
                (function(e, t) {
                  console.warn(
                    'Possible Unhandled Promise Rejection (id: ' + e + '):'
                  ),
                    ((t && (t.stack || t)) + '')
                      .split('\n')
                      .forEach(function(e) {
                        console.warn('  ' + e)
                      })
                })(c[t].displayId, c[t].error)))
        }
        ;(r._47 = function(t) {
          2 === t._83 &&
            c[t._56] &&
            (c[t._56].logged
              ? (function(t) {
                  c[t].logged &&
                    (e.onHandled
                      ? e.onHandled(c[t].displayId, c[t].error)
                      : c[t].onUnhandled ||
                        (console.warn(
                          'Promise Rejection Handled (id: ' +
                            c[t].displayId +
                            '):'
                        ),
                        console.warn(
                          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
                            c[t].displayId +
                            '.'
                        )))
                })(t._56)
              : clearTimeout(c[t._56].timeout),
            delete c[t._56])
        }),
          (r._71 = function(e, n) {
            0 === e._75 &&
              ((e._56 = t++),
              (c[e._56] = {
                displayId: null,
                error: n,
                timeout: setTimeout(l.bind(null, e._56), s(n, o) ? 100 : 2e3),
                logged: !1
              }))
          })
      })
  },
  function(e, t, n) {
    'use strict'
    ;(function(t) {
      function n(e) {
        o.length || (r(), !0), (o[o.length] = e)
      }
      e.exports = n
      var r,
        o = [],
        i = 0
      function a() {
        for (; i < o.length; ) {
          var e = i
          if (((i += 1), o[e].call(), i > 1024)) {
            for (var t = 0, n = o.length - i; t < n; t++) o[t] = o[t + i]
            ;(o.length -= i), (i = 0)
          }
        }
        ;(o.length = 0), (i = 0), !1
      }
      var s,
        c,
        l,
        u = void 0 !== t ? t : self,
        p = u.MutationObserver || u.WebKitMutationObserver
      function f(e) {
        return function() {
          var t = setTimeout(r, 0),
            n = setInterval(r, 50)
          function r() {
            clearTimeout(t), clearInterval(n), e()
          }
        }
      }
      'function' == typeof p
        ? ((s = 1),
          (c = new p(a)),
          (l = document.createTextNode('')),
          c.observe(l, { characterData: !0 }),
          (r = function() {
            ;(s = -s), (l.data = s)
          }))
        : (r = f(a)),
        (n.requestFlush = r),
        (n.makeRequestCallFromTimer = f)
    }.call(this, n(10)))
  },
  function(e, t, n) {
    'use strict'
    function r(e) {
      return (r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            })(e)
    }
    var o = n(9)
    e.exports = o
    var i = p(!0),
      a = p(!1),
      s = p(null),
      c = p(void 0),
      l = p(0),
      u = p('')
    function p(e) {
      var t = new o(o._44)
      return (t._83 = 1), (t._18 = e), t
    }
    ;(o.resolve = function(e) {
      if (e instanceof o) return e
      if (null === e) return s
      if (void 0 === e) return c
      if (!0 === e) return i
      if (!1 === e) return a
      if (0 === e) return l
      if ('' === e) return u
      if ('object' === r(e) || 'function' == typeof e)
        try {
          var t = e.then
          if ('function' == typeof t) return new o(t.bind(e))
        } catch (e) {
          return new o(function(t, n) {
            n(e)
          })
        }
      return p(e)
    }),
      (o.all = function(e) {
        var t = Array.prototype.slice.call(e)
        return new o(function(e, n) {
          if (0 === t.length) return e([])
          var i = t.length
          function a(s, c) {
            if (c && ('object' === r(c) || 'function' == typeof c)) {
              if (c instanceof o && c.then === o.prototype.then) {
                for (; 3 === c._83; ) c = c._18
                return 1 === c._83
                  ? a(s, c._18)
                  : (2 === c._83 && n(c._18),
                    void c.then(function(e) {
                      a(s, e)
                    }, n))
              }
              var l = c.then
              if ('function' == typeof l)
                return void new o(l.bind(c)).then(function(e) {
                  a(s, e)
                }, n)
            }
            ;(t[s] = c), 0 == --i && e(t)
          }
          for (var s = 0; s < t.length; s++) a(s, t[s])
        })
      }),
      (o.reject = function(e) {
        return new o(function(t, n) {
          n(e)
        })
      }),
      (o.race = function(e) {
        return new o(function(t, n) {
          e.forEach(function(e) {
            o.resolve(e).then(t, n)
          })
        })
      }),
      (o.prototype.catch = function(e) {
        return this.then(null, e)
      })
  },
  function(e, t) {
    !(function(e) {
      'use strict'
      if (!e.fetch) {
        var t = 'URLSearchParams' in e,
          n = 'Symbol' in e && 'iterator' in Symbol,
          r =
            'FileReader' in e &&
            'Blob' in e &&
            (function() {
              try {
                return new Blob(), !0
              } catch (e) {
                return !1
              }
            })(),
          o = 'FormData' in e,
          i = 'ArrayBuffer' in e
        if (i)
          var a = [
              '[object Int8Array]',
              '[object Uint8Array]',
              '[object Uint8ClampedArray]',
              '[object Int16Array]',
              '[object Uint16Array]',
              '[object Int32Array]',
              '[object Uint32Array]',
              '[object Float32Array]',
              '[object Float64Array]'
            ],
            s = function(e) {
              return e && DataView.prototype.isPrototypeOf(e)
            },
            c =
              ArrayBuffer.isView ||
              function(e) {
                return e && a.indexOf(Object.prototype.toString.call(e)) > -1
              }
        ;(h.prototype.append = function(e, t) {
          ;(e = p(e)), (t = f(t))
          var n = this.map[e]
          this.map[e] = n ? n + ',' + t : t
        }),
          (h.prototype.delete = function(e) {
            delete this.map[p(e)]
          }),
          (h.prototype.get = function(e) {
            return (e = p(e)), this.has(e) ? this.map[e] : null
          }),
          (h.prototype.has = function(e) {
            return this.map.hasOwnProperty(p(e))
          }),
          (h.prototype.set = function(e, t) {
            this.map[p(e)] = f(t)
          }),
          (h.prototype.forEach = function(e, t) {
            for (var n in this.map)
              this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
          }),
          (h.prototype.keys = function() {
            var e = []
            return (
              this.forEach(function(t, n) {
                e.push(n)
              }),
              d(e)
            )
          }),
          (h.prototype.values = function() {
            var e = []
            return (
              this.forEach(function(t) {
                e.push(t)
              }),
              d(e)
            )
          }),
          (h.prototype.entries = function() {
            var e = []
            return (
              this.forEach(function(t, n) {
                e.push([n, t])
              }),
              d(e)
            )
          }),
          n && (h.prototype[Symbol.iterator] = h.prototype.entries)
        var l = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
        ;(w.prototype.clone = function() {
          return new w(this, { body: this._bodyInit })
        }),
          g.call(w.prototype),
          g.call(x.prototype),
          (x.prototype.clone = function() {
            return new x(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new h(this.headers),
              url: this.url
            })
          }),
          (x.error = function() {
            var e = new x(null, { status: 0, statusText: '' })
            return (e.type = 'error'), e
          })
        var u = [301, 302, 303, 307, 308]
        ;(x.redirect = function(e, t) {
          if (-1 === u.indexOf(t)) throw new RangeError('Invalid status code')
          return new x(null, { status: t, headers: { location: e } })
        }),
          (e.Headers = h),
          (e.Request = w),
          (e.Response = x),
          (e.fetch = function(e, t) {
            return new Promise(function(n, o) {
              var i = new w(e, t),
                a = new XMLHttpRequest()
              ;(a.onload = function() {
                var e,
                  t,
                  r = {
                    status: a.status,
                    statusText: a.statusText,
                    headers:
                      ((e = a.getAllResponseHeaders() || ''),
                      (t = new h()),
                      e.split(/\r?\n/).forEach(function(e) {
                        var n = e.split(':'),
                          r = n.shift().trim()
                        if (r) {
                          var o = n.join(':').trim()
                          t.append(r, o)
                        }
                      }),
                      t)
                  }
                r.url =
                  'responseURL' in a
                    ? a.responseURL
                    : r.headers.get('X-Request-URL')
                var o = 'response' in a ? a.response : a.responseText
                n(new x(o, r))
              }),
                (a.onerror = function() {
                  o(new TypeError('Network request failed'))
                }),
                (a.ontimeout = function() {
                  o(new TypeError('Network request failed'))
                }),
                a.open(i.method, i.url, !0),
                'include' === i.credentials && (a.withCredentials = !0),
                'responseType' in a && r && (a.responseType = 'blob'),
                i.headers.forEach(function(e, t) {
                  a.setRequestHeader(t, e)
                }),
                a.send(void 0 === i._bodyInit ? null : i._bodyInit)
            })
          }),
          (e.fetch.polyfill = !0)
      }
      function p(e) {
        if (
          ('string' != typeof e && (e = String(e)),
          /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))
        )
          throw new TypeError('Invalid character in header field name')
        return e.toLowerCase()
      }
      function f(e) {
        return 'string' != typeof e && (e = String(e)), e
      }
      function d(e) {
        var t = {
          next: function() {
            var t = e.shift()
            return { done: void 0 === t, value: t }
          }
        }
        return (
          n &&
            (t[Symbol.iterator] = function() {
              return t
            }),
          t
        )
      }
      function h(e) {
        ;(this.map = {}),
          e instanceof h
            ? e.forEach(function(e, t) {
                this.append(t, e)
              }, this)
            : Array.isArray(e)
            ? e.forEach(function(e) {
                this.append(e[0], e[1])
              }, this)
            : e &&
              Object.getOwnPropertyNames(e).forEach(function(t) {
                this.append(t, e[t])
              }, this)
      }
      function m(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError('Already read'))
        e.bodyUsed = !0
      }
      function y(e) {
        return new Promise(function(t, n) {
          ;(e.onload = function() {
            t(e.result)
          }),
            (e.onerror = function() {
              n(e.error)
            })
        })
      }
      function b(e) {
        var t = new FileReader(),
          n = y(t)
        return t.readAsArrayBuffer(e), n
      }
      function v(e) {
        if (e.slice) return e.slice(0)
        var t = new Uint8Array(e.byteLength)
        return t.set(new Uint8Array(e)), t.buffer
      }
      function g() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function(e) {
            if (((this._bodyInit = e), e))
              if ('string' == typeof e) this._bodyText = e
              else if (r && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e
              else if (o && FormData.prototype.isPrototypeOf(e))
                this._bodyFormData = e
              else if (t && URLSearchParams.prototype.isPrototypeOf(e))
                this._bodyText = e.toString()
              else if (i && r && s(e))
                (this._bodyArrayBuffer = v(e.buffer)),
                  (this._bodyInit = new Blob([this._bodyArrayBuffer]))
              else {
                if (!i || (!ArrayBuffer.prototype.isPrototypeOf(e) && !c(e)))
                  throw new Error('unsupported BodyInit type')
                this._bodyArrayBuffer = v(e)
              }
            else this._bodyText = ''
            this.headers.get('content-type') ||
              ('string' == typeof e
                ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                : this._bodyBlob && this._bodyBlob.type
                ? this.headers.set('content-type', this._bodyBlob.type)
                : t &&
                  URLSearchParams.prototype.isPrototypeOf(e) &&
                  this.headers.set(
                    'content-type',
                    'application/x-www-form-urlencoded;charset=UTF-8'
                  ))
          }),
          r &&
            ((this.blob = function() {
              var e = m(this)
              if (e) return e
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob)
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]))
              if (this._bodyFormData)
                throw new Error('could not read FormData body as blob')
              return Promise.resolve(new Blob([this._bodyText]))
            }),
            (this.arrayBuffer = function() {
              return this._bodyArrayBuffer
                ? m(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(b)
            })),
          (this.text = function() {
            var e,
              t,
              n,
              r = m(this)
            if (r) return r
            if (this._bodyBlob)
              return (
                (e = this._bodyBlob),
                (t = new FileReader()),
                (n = y(t)),
                t.readAsText(e),
                n
              )
            if (this._bodyArrayBuffer)
              return Promise.resolve(
                (function(e) {
                  for (
                    var t = new Uint8Array(e), n = new Array(t.length), r = 0;
                    r < t.length;
                    r++
                  )
                    n[r] = String.fromCharCode(t[r])
                  return n.join('')
                })(this._bodyArrayBuffer)
              )
            if (this._bodyFormData)
              throw new Error('could not read FormData body as text')
            return Promise.resolve(this._bodyText)
          }),
          o &&
            (this.formData = function() {
              return this.text().then(_)
            }),
          (this.json = function() {
            return this.text().then(JSON.parse)
          }),
          this
        )
      }
      function w(e, t) {
        var n,
          r,
          o = (t = t || {}).body
        if (e instanceof w) {
          if (e.bodyUsed) throw new TypeError('Already read')
          ;(this.url = e.url),
            (this.credentials = e.credentials),
            t.headers || (this.headers = new h(e.headers)),
            (this.method = e.method),
            (this.mode = e.mode),
            o || null == e._bodyInit || ((o = e._bodyInit), (e.bodyUsed = !0))
        } else this.url = String(e)
        if (
          ((this.credentials = t.credentials || this.credentials || 'omit'),
          (!t.headers && this.headers) || (this.headers = new h(t.headers)),
          (this.method =
            ((n = t.method || this.method || 'GET'),
            (r = n.toUpperCase()),
            l.indexOf(r) > -1 ? r : n)),
          (this.mode = t.mode || this.mode || null),
          (this.referrer = null),
          ('GET' === this.method || 'HEAD' === this.method) && o)
        )
          throw new TypeError('Body not allowed for GET or HEAD requests')
        this._initBody(o)
      }
      function _(e) {
        var t = new FormData()
        return (
          e
            .trim()
            .split('&')
            .forEach(function(e) {
              if (e) {
                var n = e.split('='),
                  r = n.shift().replace(/\+/g, ' '),
                  o = n.join('=').replace(/\+/g, ' ')
                t.append(decodeURIComponent(r), decodeURIComponent(o))
              }
            }),
          t
        )
      }
      function x(e, t) {
        t || (t = {}),
          (this.type = 'default'),
          (this.status = 'status' in t ? t.status : 200),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = 'statusText' in t ? t.statusText : 'OK'),
          (this.headers = new h(t.headers)),
          (this.url = t.url || ''),
          this._initBody(e)
      }
    })('undefined' != typeof self ? self : this)
  },
  function(e, t, n) {
    'use strict'
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r =
        Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable
    function a(e) {
      if (null == e)
        throw new TypeError(
          'Object.assign cannot be called with null or undefined'
        )
      return Object(e)
    }
    e.exports = (function() {
      try {
        if (!Object.assign) return !1
        var e = new String('abc')
        if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
        for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n
        if (
          '0123456789' !==
          Object.getOwnPropertyNames(t)
            .map(function(e) {
              return t[e]
            })
            .join('')
        )
          return !1
        var r = {}
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function(e) {
            r[e] = e
          }),
          'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
        )
      } catch (e) {
        return !1
      }
    })()
      ? Object.assign
      : function(e, t) {
          for (var n, s, c = a(e), l = 1; l < arguments.length; l++) {
            for (var u in (n = Object(arguments[l])))
              o.call(n, u) && (c[u] = n[u])
            if (r) {
              s = r(n)
              for (var p = 0; p < s.length; p++)
                i.call(n, s[p]) && (c[s[p]] = n[s[p]])
            }
          }
          return c
        }
  },
  function(e, t, n) {
    var r = n(21)
    'string' == typeof r && (r = [[e.i, r, '']])
    var o = { hmr: !0, transform: void 0 }
    n(23)(r, o)
    r.locals && (e.exports = r.locals)
  },
  function(e, t, n) {
    ;(e.exports = n(22)(!1)).push([
      e.i,
      'body {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n',
      ''
    ])
  },
  function(e, t) {
    e.exports = function(e) {
      var t = []
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var n = (function(e, t) {
              var n = e[1] || '',
                r = e[3]
              if (!r) return n
              if (t && 'function' == typeof btoa) {
                var o =
                    ((a = r),
                    '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                      ' */'),
                  i = r.sources.map(function(e) {
                    return '/*# sourceURL=' + r.sourceRoot + e + ' */'
                  })
                return [n]
                  .concat(i)
                  .concat([o])
                  .join('\n')
              }
              var a
              return [n].join('\n')
            })(t, e)
            return t[2] ? '@media ' + t[2] + '{' + n + '}' : n
          }).join('')
        }),
        (t.i = function(e, n) {
          'string' == typeof e && (e = [[null, e, '']])
          for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0]
            'number' == typeof i && (r[i] = !0)
          }
          for (o = 0; o < e.length; o++) {
            var a = e[o]
            ;('number' == typeof a[0] && r[a[0]]) ||
              (n && !a[2]
                ? (a[2] = n)
                : n && (a[2] = '(' + a[2] + ') and (' + n + ')'),
              t.push(a))
          }
        }),
        t
      )
    }
  },
  function(e, t, n) {
    var r,
      o,
      i = {},
      a =
        ((r = function() {
          return window && document && document.all && !window.atob
        }),
        function() {
          return void 0 === o && (o = r.apply(this, arguments)), o
        }),
      s = (function(e) {
        var t = {}
        return function(n) {
          if (void 0 === t[n]) {
            var r = e.call(this, n)
            if (r instanceof window.HTMLIFrameElement)
              try {
                r = r.contentDocument.head
              } catch (e) {
                r = null
              }
            t[n] = r
          }
          return t[n]
        }
      })(function(e) {
        return document.querySelector(e)
      }),
      c = null,
      l = 0,
      u = [],
      p = n(24)
    function f(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          o = i[r.id]
        if (o) {
          o.refs++
          for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a])
          for (; a < r.parts.length; a++) o.parts.push(v(r.parts[a], t))
        } else {
          var s = []
          for (a = 0; a < r.parts.length; a++) s.push(v(r.parts[a], t))
          i[r.id] = { id: r.id, refs: 1, parts: s }
        }
      }
    }
    function d(e, t) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var i = e[o],
          a = t.base ? i[0] + t.base : i[0],
          s = { css: i[1], media: i[2], sourceMap: i[3] }
        r[a] ? r[a].parts.push(s) : n.push((r[a] = { id: a, parts: [s] }))
      }
      return n
    }
    function h(e, t) {
      var n = s(e.insertInto)
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        )
      var r = u[u.length - 1]
      if ('top' === e.insertAt)
        r
          ? r.nextSibling
            ? n.insertBefore(t, r.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          u.push(t)
      else if ('bottom' === e.insertAt) n.appendChild(t)
      else {
        if ('object' != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          )
        var o = s(e.insertInto + ' ' + e.insertAt.before)
        n.insertBefore(t, o)
      }
    }
    function m(e) {
      if (null === e.parentNode) return !1
      e.parentNode.removeChild(e)
      var t = u.indexOf(e)
      t >= 0 && u.splice(t, 1)
    }
    function y(e) {
      var t = document.createElement('style')
      return (e.attrs.type = 'text/css'), b(t, e.attrs), h(e, t), t
    }
    function b(e, t) {
      Object.keys(t).forEach(function(n) {
        e.setAttribute(n, t[n])
      })
    }
    function v(e, t) {
      var n, r, o, i
      if (t.transform && e.css) {
        if (!(i = t.transform(e.css))) return function() {}
        e.css = i
      }
      if (t.singleton) {
        var a = l++
        ;(n = c || (c = y(t))),
          (r = _.bind(null, n, a, !1)),
          (o = _.bind(null, n, a, !0))
      } else
        e.sourceMap &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        'function' == typeof URL.revokeObjectURL &&
        'function' == typeof Blob &&
        'function' == typeof btoa
          ? ((n = (function(e) {
              var t = document.createElement('link')
              return (
                (e.attrs.type = 'text/css'),
                (e.attrs.rel = 'stylesheet'),
                b(t, e.attrs),
                h(e, t),
                t
              )
            })(t)),
            (r = k.bind(null, n, t)),
            (o = function() {
              m(n), n.href && URL.revokeObjectURL(n.href)
            }))
          : ((n = y(t)),
            (r = x.bind(null, n)),
            (o = function() {
              m(n)
            }))
      return (
        r(e),
        function(t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return
            r((e = t))
          } else o()
        }
      )
    }
    e.exports = function(e, t) {
      if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
        throw new Error(
          'The style-loader cannot be used in a non-browser environment'
        )
      ;((t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {}),
        t.singleton || (t.singleton = a()),
        t.insertInto || (t.insertInto = 'head'),
        t.insertAt || (t.insertAt = 'bottom')
      var n = d(e, t)
      return (
        f(n, t),
        function(e) {
          for (var r = [], o = 0; o < n.length; o++) {
            var a = n[o]
            ;(s = i[a.id]).refs--, r.push(s)
          }
          e && f(d(e, t), t)
          for (o = 0; o < r.length; o++) {
            var s
            if (0 === (s = r[o]).refs) {
              for (var c = 0; c < s.parts.length; c++) s.parts[c]()
              delete i[s.id]
            }
          }
        }
      )
    }
    var g,
      w =
        ((g = []),
        function(e, t) {
          return (g[e] = t), g.filter(Boolean).join('\n')
        })
    function _(e, t, n, r) {
      var o = n ? '' : r.css
      if (e.styleSheet) e.styleSheet.cssText = w(t, o)
      else {
        var i = document.createTextNode(o),
          a = e.childNodes
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
      }
    }
    function x(e, t) {
      var n = t.css,
        r = t.media
      if ((r && e.setAttribute('media', r), e.styleSheet))
        e.styleSheet.cssText = n
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild)
        e.appendChild(document.createTextNode(n))
      }
    }
    function k(e, t, n) {
      var r = n.css,
        o = n.sourceMap,
        i = void 0 === t.convertToAbsoluteUrls && o
      ;(t.convertToAbsoluteUrls || i) && (r = p(r)),
        o &&
          (r +=
            '\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
            ' */')
      var a = new Blob([r], { type: 'text/css' }),
        s = e.href
      ;(e.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s)
    }
  },
  function(e, t) {
    e.exports = function(e) {
      var t = 'undefined' != typeof window && window.location
      if (!t) throw new Error('fixUrls requires window.location')
      if (!e || 'string' != typeof e) return e
      var n = t.protocol + '//' + t.host,
        r = n + t.pathname.replace(/\/[^\/]*$/, '/')
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(e, t) {
          var o,
            i = t
              .trim()
              .replace(/^"(.*)"$/, function(e, t) {
                return t
              })
              .replace(/^'(.*)'$/, function(e, t) {
                return t
              })
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)
            ? e
            : ((o =
                0 === i.indexOf('//')
                  ? i
                  : 0 === i.indexOf('/')
                  ? n + i
                  : r + i.replace(/^\.\//, '')),
              'url(' + JSON.stringify(o) + ')')
        }
      )
    }
  },
  function(e, t) {
    e.exports = function(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return e
    }
  },
  function(e, t) {
    function n(t, r) {
      return (
        (e.exports = n =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          }),
        n(t, r)
      )
    }
    e.exports = n
  },
  function(e, t, n) {
    ;(function(e) {
      function t(e) {
        return (t =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      var n = (function(e) {
        'use strict'
        var n = Object.prototype,
          r = n.hasOwnProperty,
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          s = o.toStringTag || '@@toStringTag'
        function c(e, t, n, r) {
          var o = t && t.prototype instanceof p ? t : p,
            i = Object.create(o.prototype),
            a = new k(r || [])
          return (
            (i._invoke = (function(e, t, n) {
              var r = 'suspendedStart'
              return function(o, i) {
                if ('executing' === r)
                  throw new Error('Generator is already running')
                if ('completed' === r) {
                  if ('throw' === o) throw i
                  return O()
                }
                for (n.method = o, n.arg = i; ; ) {
                  var a = n.delegate
                  if (a) {
                    var s = w(a, n)
                    if (s) {
                      if (s === u) continue
                      return s
                    }
                  }
                  if ('next' === n.method) n.sent = n._sent = n.arg
                  else if ('throw' === n.method) {
                    if ('suspendedStart' === r) throw ((r = 'completed'), n.arg)
                    n.dispatchException(n.arg)
                  } else 'return' === n.method && n.abrupt('return', n.arg)
                  r = 'executing'
                  var c = l(e, t, n)
                  if ('normal' === c.type) {
                    if (
                      ((r = n.done ? 'completed' : 'suspendedYield'),
                      c.arg === u)
                    )
                      continue
                    return { value: c.arg, done: n.done }
                  }
                  'throw' === c.type &&
                    ((r = 'completed'), (n.method = 'throw'), (n.arg = c.arg))
                }
              }
            })(e, n, a)),
            i
          )
        }
        function l(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = c
        var u = {}
        function p() {}
        function f() {}
        function d() {}
        var h = {}
        h[i] = function() {
          return this
        }
        var m = Object.getPrototypeOf,
          y = m && m(m(C([])))
        y && y !== n && r.call(y, i) && (h = y)
        var b = (d.prototype = p.prototype = Object.create(h))
        function v(e) {
          ;['next', 'throw', 'return'].forEach(function(t) {
            e[t] = function(e) {
              return this._invoke(t, e)
            }
          })
        }
        function g(e) {
          var n
          this._invoke = function(o, i) {
            function a() {
              return new Promise(function(n, a) {
                !(function n(o, i, a, s) {
                  var c = l(e[o], e, i)
                  if ('throw' !== c.type) {
                    var u = c.arg,
                      p = u.value
                    return p && 'object' === t(p) && r.call(p, '__await')
                      ? Promise.resolve(p.__await).then(
                          function(e) {
                            n('next', e, a, s)
                          },
                          function(e) {
                            n('throw', e, a, s)
                          }
                        )
                      : Promise.resolve(p).then(
                          function(e) {
                            ;(u.value = e), a(u)
                          },
                          function(e) {
                            return n('throw', e, a, s)
                          }
                        )
                  }
                  s(c.arg)
                })(o, i, n, a)
              })
            }
            return (n = n ? n.then(a, a) : a())
          }
        }
        function w(e, t) {
          var n = e.iterator[t.method]
          if (void 0 === n) {
            if (((t.delegate = null), 'throw' === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                w(e, t),
                'throw' === t.method)
              )
                return u
              ;(t.method = 'throw'),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ))
            }
            return u
          }
          var r = l(n, e.iterator, t.arg)
          if ('throw' === r.type)
            return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), u
          var o = r.arg
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                u)
              : o
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              u)
        }
        function _(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function x(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function k(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(_, this),
            this.reset(!0)
        }
        function C(e) {
          if (e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          return { next: O }
        }
        function O() {
          return { value: void 0, done: !0 }
        }
        return (
          (f.prototype = b.constructor = d),
          (d.constructor = f),
          (d[s] = f.displayName = 'GeneratorFunction'),
          (e.isGeneratorFunction = function(e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), s in e || (e[s] = 'GeneratorFunction')),
              (e.prototype = Object.create(b)),
              e
            )
          }),
          (e.awrap = function(e) {
            return { __await: e }
          }),
          v(g.prototype),
          (g.prototype[a] = function() {
            return this
          }),
          (e.AsyncIterator = g),
          (e.async = function(t, n, r, o) {
            var i = new g(c(t, n, r, o))
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function(e) {
                  return e.done ? e.value : i.next()
                })
          }),
          v(b),
          (b[s] = 'Generator'),
          (b[i] = function() {
            return this
          }),
          (b.toString = function() {
            return '[object Generator]'
          }),
          (e.keys = function(e) {
            var t = []
            for (var n in e) t.push(n)
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop()
                  if (r in e) return (n.value = r), (n.done = !1), n
                }
                return (n.done = !0), n
              }
            )
          }),
          (e.values = C),
          (k.prototype = {
            constructor: k,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function() {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function(e) {
              if (this.done) throw e
              var t = this
              function n(n, r) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = 'next'), (t.arg = void 0)),
                  !!r
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return n('end')
                if (i.tryLoc <= this.prev) {
                  var s = r.call(i, 'catchLoc'),
                    c = r.call(i, 'finallyLoc')
                  if (s && c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  } else if (s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                  } else {
                    if (!c)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n]
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), u)
                  : this.complete(a)
              )
            },
            complete: function(e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                u
              )
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), u
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.tryLoc === e) {
                  var r = n.completion
                  if ('throw' === r.type) {
                    var o = r.arg
                    x(n)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function(e, t, n) {
              return (
                (this.delegate = { iterator: C(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                u
              )
            }
          }),
          e
        )
      })('object' === t(e) ? e.exports : {})
      try {
        regeneratorRuntime = n
      } catch (e) {
        Function('r', 'regeneratorRuntime = r')(n)
      }
    }.call(this, n(28)(e)))
  },
  function(e, t) {
    e.exports = function(e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function() {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function() {
              return e.l
            }
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function() {
              return e.i
            }
          }),
          (e.webpackPolyfill = 1)),
        e
      )
    }
  },
  function(e, t) {
    e.exports = function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t]
        return n
      }
    }
  },
  function(e, t) {
    e.exports = function(e) {
      if (
        Symbol.iterator in Object(e) ||
        '[object Arguments]' === Object.prototype.toString.call(e)
      )
        return Array.from(e)
    }
  },
  function(e, t) {
    e.exports = function() {
      throw new TypeError('Invalid attempt to spread non-iterable instance')
    }
  },
  function(e, t, n) {
    'use strict'
    n.r(t)
    var r = n(1),
      o = n.n(r),
      i = n(0),
      a = (n(20), n(2)),
      s = n.n(a),
      c = n(3),
      l = n.n(c),
      u = n(4),
      p = n.n(u),
      f = n(5),
      d = n.n(f),
      h = n(6),
      m = n.n(h),
      y = (function(e) {
        function t() {
          return s()(this, t), p()(this, d()(t).apply(this, arguments))
        }
        return (
          m()(t, e),
          l()(t, [
            {
              key: 'render',
              value: function(e) {
                return Object(i.c)(
                  'div',
                  null,
                  Object(i.c)(
                    'div',
                    {
                      style:
                        'background: rgb(51, 51, 51) none repeat scroll 0% 0%;'
                    },
                    Object(i.c)(
                      'div',
                      { class: 'container' },
                      Object(i.c)(
                        'div',
                        { class: 'text-sm-center text-white py-5' },
                        Object(i.c)('h1', null, 'Piano'),
                        Object(i.c)(
                          'p',
                          null,
                          '欢迎刘佳佳老师的演奏！',
                          Object(i.c)('br', { class: 'd-none d-sm-block' }),
                          '（附带一句，好想刘老师！）'
                        ),
                        Object(i.c)(
                          'div',
                          { class: 'mt-4' },
                          Object(i.c)(
                            'a',
                            {
                              class: 'btn btn-outline-light btn-lg hidden',
                              href: 'https://github.com/Wscats/piano'
                            },
                            'View docs on Github'
                          ),
                          Object(i.c)(
                            'a',
                            {
                              class: 'btn btn-outline-light btn-lg hidden',
                              href: 'https://github.com/Wscats/piano'
                            },
                            '查看该项目Github地址'
                          )
                        )
                      )
                    )
                  ),
                  Object(i.c)(
                    'div',
                    { class: 'text-center' },
                    Object(i.c)(
                      'p',
                      { class: '' },
                      'Try it by clicking, tapping, or using your keyboard 1 to 9:'
                    ),
                    Object(i.c)(
                      'p',
                      { class: '' },
                      '鼠标点击钢琴键或者键盘按数字键 1 ~ 9:'
                    ),
                    Object(i.c)(
                      'div',
                      { style: 'color: rgb(119, 119, 119);' },
                      Object(i.c)(
                        'svg',
                        {
                          fill: 'currentColor',
                          preserveAspectRatio: 'xMidYMid meet',
                          height: '32',
                          width: '32',
                          viewBox: '0 0 40 40',
                          style: 'vertical-align: middle;'
                        },
                        Object(i.c)(
                          'g',
                          null,
                          Object(i.c)('path', {
                            d:
                              'm33.4 20l-13.4 13.4-13.4-13.4 2.5-2.3 9.3 9.3v-20.4h3.2v20.4l9.4-9.3z'
                          })
                        )
                      )
                    )
                  )
                )
              }
            }
          ]),
          t
        )
      })(i.a)
    ;(y.css =
      '\n    * {\n        margin: 0;\n        padding: 0;\n    }\n\n    .container {\n        width: 100%;\n        margin-right: auto;\n        margin-left: auto;\n\n    }\n\n    .text-white {\n        color: #fff !important;\n\n    }\n\n    .text-sm-center {\n        text-align: center !important;\n    }\n\n    .mt-4,\n    .my-4 {\n        margin-top: 1.5rem !important;\n    }\n\n    .pb-5,\n    .py-5 {\n        padding-bottom: 3rem !important;\n    }\n\n    .pt-5,\n    .py-5 {\n        padding-top: 3rem !important;\n    }\n\n    .btn:not(:disabled):not(.disabled) {\n\n        cursor: pointer;\n\n    }\n\n    .btn-group-lg>.btn,\n    .btn-lg {\n\n        padding: 5px 10px;\n        font-size: 12px;\n        line-height: 15px;\n        border-radius: 3px;\n\n    }\n\n    .btn-outline-light {\n\n        color: #f8f9fa;\n        background-color: transparent;\n        background-image: none;\n        border-color: #f8f9fa;\n\n    }\n\n    .btn {\n        display: inline-block;\n        font-weight: 400;\n        text-align: center;\n        white-space: nowrap;\n        vertical-align: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        border: 1px solid transparent;\n        border-top-color: transparent;\n        border-right-color: transparent;\n        border-bottom-color: transparent;\n        border-left-color: transparent;\n        padding: 15px 7.5px;\n        font-size: 15px;\n        line-height: 15px;\n        border: 1px solid #fff;\n        border-radius: 5px;\n        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n    }\n\n    a {\n        margin: 0 10px;\n        text-decoration: none;\n    }\n\n    .text-center {\n        margin-top: 12px;\n        text-align: center !important;\n    }\n\n    p {\n        margin: 0 10px;\n    }\n'),
      Object(i.b)('app-header', y)
    var b,
      v = [
        { note: 'G3', time: 500 },
        { note: 'C4', time: 1e3 },
        { note: 'E4', time: 500 },
        { note: 'G4', time: 1e3 },
        { note: 'C4', time: 500 },
        { note: 'B3', time: 1e3 },
        { note: 'E4', time: 500 },
        { note: 'G4', time: 1500 },
        { note: 'G4', time: 500 },
        { note: 'A4', time: 1e3 },
        { note: 'B4', time: 500 },
        { note: 'C5', time: 1e3 },
        { note: 'A4', time: 500 },
        { note: 'G4', time: 1500 },
        { note: 'E4', time: 500 },
        { note: 'D4', time: 500 },
        { note: 'C4', time: 1e3 },
        { note: 'C4', time: 500 },
        { note: 'C4', time: 500 },
        { note: 'E4', time: 500 },
        { note: 'D4', time: 500 },
        { note: 'C4', time: 1e3 },
        { note: 'C4', time: 500 },
        { note: 'C4', time: 500 },
        { note: 'D4', time: 500 },
        { note: 'E4', time: 500 },
        { note: 'D4', time: 1e3 },
        { note: 'C4', time: 500 },
        { note: 'A3', time: 500 },
        { note: 'D4', time: 500 },
        { note: 'E4', time: 500 },
        { note: 'D4', time: 1500 },
        { note: 'G3', time: 500 },
        { note: 'C4', time: 1e3 },
        { note: 'E4', time: 500 },
        { note: 'G4', time: 1e3 },
        { note: 'C4', time: 500 },
        { note: 'B3', time: 1e3 },
        { note: 'E4', time: 500 },
        { note: 'G4', time: 1500 },
        { note: 'G4', time: 500 },
        { note: 'A4', time: 1e3 },
        { note: 'B4', time: 500 },
        { note: 'C5', time: 1e3 },
        { note: 'A4', time: 500 },
        { note: 'G4', time: 1500 },
        { note: 'E4', time: 500 },
        { note: 'D4', time: 500 },
        { note: 'C4', time: 1e3 },
        { note: 'C4', time: 500 },
        { note: 'C4', time: 500 },
        { note: 'E4', time: 500 },
        { note: 'D4', time: 500 },
        { note: 'C4', time: 1e3 },
        { note: 'C4', time: 500 },
        { note: 'C4', time: 500 },
        { note: 'D4', time: 500 },
        { note: 'E4', time: 500 },
        { note: 'D4', time: 1e3 },
        { note: 'C4', time: 500 },
        { note: 'A3', time: 500 },
        { note: 'D4', time: 500 },
        { note: 'E4', time: 500 },
        { note: 'D4', time: 1500 },
        { note: 'E4', time: 500 },
        { note: 'G4', time: 500 },
        { note: 'E4', time: 1e3 },
        { note: 'D4', time: 500 },
        { note: 'C4', time: 500 },
        { note: 'G4', time: 500 },
        { note: 'B3', time: 1500 },
        { note: 'A3', time: 500 },
        { note: 'B3', time: 500 },
        { note: 'A3', time: 1e3 },
        { note: 'B3', time: 500 },
        { note: 'A3', time: 500 },
        { note: 'G3', time: 500 },
        { note: 'E4', time: 1500 },
        { note: 'G4', time: 500 },
        { note: 'E4', time: 1e3 },
        { note: 'D4', time: 500 },
        { note: 'C4', time: 500 },
        { note: 'G4', time: 500 },
        { note: 'B3', time: 1500 },
        { note: 'A3', time: 500 },
        { note: 'B3', time: 500 },
        { note: 'C4', time: 1e3 },
        { note: 'C4', time: 500 },
        { note: 'C4', time: 500 },
        { note: 'D4', time: 500 },
        { note: 'E4', time: 500 },
        { note: 'D4', time: 1500 },
        { note: 'G3', time: 500 },
        { note: 'C4', time: 1e3 },
        { note: 'E4', time: 500 },
        { note: 'G4', time: 1e3 },
        { note: 'C4', time: 500 },
        { note: 'B3', time: 1e3 },
        { note: 'E4', time: 500 },
        { note: 'G4', time: 1500 },
        { note: 'G4', time: 500 },
        { note: 'A4', time: 1e3 },
        { note: 'B4', time: 500 },
        { note: 'C5', time: 1e3 },
        { note: 'A4', time: 500 },
        { note: 'G4', time: 1500 },
        { note: 'E4', time: 500 },
        { note: 'D4', time: 500 },
        { note: 'C4', time: 1e3 },
        { note: 'C4', time: 500 },
        { note: 'C4', time: 500 },
        { note: 'E4', time: 500 },
        { note: 'D4', time: 500 },
        { note: 'C4', time: 1e3 },
        { note: 'C4', time: 500 },
        { note: 'C4', time: 500 },
        { note: 'D4', time: 500 },
        { note: 'E4', time: 500 },
        { note: 'D4', time: 1e3 },
        { note: 'A3', time: 1e3 },
        { note: 'B3', time: 500 },
        { note: 'C4', time: 1e3 },
        { note: 'D4', time: 500 },
        { note: 'C4', time: 1e3 }
      ],
      g = [].concat(v, v),
      w =
        ((b = {
          A2: 'Shift+6',
          A3: 'Ctrl+6',
          A4: '6',
          A5: 'Option+6',
          A6: 'Command+6',
          'A#3': 'Ctrl+t',
          'A#4': 't',
          'A#5': 'Option+t',
          'A#6': 'Command+t',
          B2: 'Shift+7',
          B3: 'Ctrl+7',
          B4: '7',
          B5: 'Option+7',
          B6: 'Command+7',
          C2: 'Shift+1',
          C3: 'Ctrl+1',
          C4: '1',
          C5: 'Option+1',
          C6: 'Command+1',
          C7: '',
          'C#2': 'Shift+q',
          'C#3': 'Ctrl+q',
          'C#4': 'q',
          'C#5': 'Option+q',
          'C#6': 'Command+q',
          D2: 'Shift+2',
          D3: 'Ctrl+2',
          D4: '2',
          D5: 'Option+2',
          D6: 'Command+2',
          'D#2': 'Shift+w',
          'D#3': 'Ctrl+w',
          'D#4': 'w',
          'D#5': 'Option+w',
          'D#6': 'Command+w',
          E2: 'Shift+3',
          E3: 'Ctrl+3',
          E4: '3',
          E5: 'Option+3',
          E6: 'Command+3',
          'E#2': 'Shift+e',
          'E#3': 'Ctrl+e',
          'E#4': 'e',
          'E#5': 'Option+e',
          'E#6': 'Command+e',
          F2: 'Shift+4',
          F3: 'Ctrl+4',
          F4: '4',
          F5: 'Option+4',
          F6: 'Command+4'
        }),
        o()(b, 'E#2', 'Shift+e'),
        o()(b, 'E#3', 'Ctrl+e'),
        o()(b, 'E#4', 'e'),
        o()(b, 'E#5', 'Option+e'),
        o()(b, 'E#6', 'Command+e'),
        o()(b, 'G2', 'Shift+5'),
        o()(b, 'G3', 'Ctrl+5'),
        o()(b, 'G4', '5'),
        o()(b, 'G5', 'Option+5'),
        o()(b, 'G6', 'Command+5'),
        o()(b, 'G#2', './samples/piano/b53.mp3'),
        o()(b, 'G#3', './samples/piano/b87.mp3'),
        o()(b, 'G#4', './samples/piano/b79.mp3'),
        o()(b, 'G#5', './samples/piano/b72.mp3'),
        o()(b, 'G#6', './samples/piano/b86.mp3'),
        b),
      _ = (function(e) {
        function t() {
          var e, n
          s()(this, t)
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i]
          return (
            ((n = p()(
              this,
              (e = d()(t)).call.apply(e, [this].concat(o))
            )).setSong = function(e) {
              return n.store.setSong(e)
            }),
            n
          )
        }
        return (
          m()(t, e),
          l()(t, [
            {
              key: 'render',
              value: function(e) {
                var t = this
                return Object(i.c)(
                  'div',
                  { class: 'app-footer' },
                  Object(i.c)('hr', { class: 'mt-5' }),
                  Object(i.c)(
                    'div',
                    { class: 'row mt-5' },
                    Object(i.c)(
                      'div',
                      { class: 'col' },
                      Object(i.c)(
                        'div',
                        { class: 'text-center' },
                        Object(i.c)(
                          'p',
                          { class: 'mt-4' },
                          'You can click on the keyboard and play the melody that belongs to you. Here is an example of a piano piece:'
                        ),
                        Object(i.c)(
                          'p',
                          null,
                          '你可以点击键盘依顺序按以下键，控制好节奏演奏属于你的旋律，下面是一首钢琴曲的例子:'
                        ),
                        Object(i.c)('p', { class: 'mt-4' }, 'Enjoy it!'),
                        this.store.data.song.map(function(e) {
                          if (e[0].note)
                            return Object(i.c)(
                              'p',
                              { class: 'mt-3 code' },
                              Object(i.c)(
                                'code',
                                { class: 'p-2 text-dark' },
                                e.map(function(e) {
                                  if (e.note)
                                    return Object(i.c)(
                                      'span',
                                      {
                                        style: {
                                          color:
                                            t.store.data.count === e.index
                                              ? 'red'
                                              : 'black'
                                        }
                                      },
                                      t.data.keys[e.note],
                                      ','
                                    )
                                })
                              )
                            )
                        })
                      )
                    )
                  ),
                  Object(i.c)(
                    'div',
                    { class: 'bg-yellow mt-5 py-5' },
                    Object(i.c)(
                      'div',
                      { class: 'container' },
                      Object(i.c)(
                        'div',
                        { class: 'text-center text-secondary' },
                        'Made with ',
                        Object(i.c)(
                          'span',
                          { role: 'img', 'aria-label': 'keyboard emoji' },
                          '🎵'
                        ),
                        'by ',
                        Object(i.c)(
                          'a',
                          {
                            class: 'text-secondary',
                            href: 'javascript:;'
                          },
                          Object(i.c)('strong', null, '@liaoyoujia')
                        )
                      )
                    )
                  )
                )
              }
            },
            {
              key: 'install',
              value: function() {
                ;(this.data = { title: 'omi', song: [], keys: w }),
                  this.setSong(g)
              }
            }
          ]),
          t
        )
      })(i.a)
    ;(_.css =
      'hr{margin:0 50px;border:0;border-top-color:currentcolor;border-top-style:none;border-top-width:0px;border-top:1px solid rgba(0,0,0,0.1)}hr{box-sizing:content-box;height:0;overflow:visible}.bg-yellow{background-color:#f8e8d5}.container{line-height:50px;height:50px;width:100%;margin-right:auto;margin-left:auto}.text-secondary{color:#6c757d !important}.text-center{text-align:center !important}.code{padding:0 250px}@media screen and (max-width: 1000px){.code{padding:0 20px}}code{overflow:hidden;background-color:#ececec;width:100%;display:block;padding:10px 0}'),
      (_.use = [{ count: 'count', song: 'song' }]),
      Object(i.b)('app-footer', _)
    var x = n(8),
      k = n.n(x),
      C = n(7),
      O = n.n(C),
      j = n(11),
      S = n.n(j),
      E = n(12),
      P = n.n(E),
      A = {
        A2: { url: './samples/piano/a54.mp3', isPlay: !1 },
        A3: { url: './samples/piano/a69.mp3', isPlay: !1 },
        A4: { url: './samples/piano/a80.mp3', isPlay: !1 },
        A5: { url: './samples/piano/a74.mp3', isPlay: !1 },
        A6: { url: './samples/piano/a66.mp3', isPlay: !1 },
        'A#3': { url: './samples/piano/b69.mp3', isPlay: !1 },
        'A#4': { url: './samples/piano/b80.mp3', isPlay: !1 },
        'A#5': { url: './samples/piano/b74.mp3', isPlay: !1 },
        'A#6': { url: './samples/piano/b66.mp3', isPlay: !1 },
        B2: { url: './samples/piano/a55.mp3', isPlay: !1 },
        B3: { url: './samples/piano/a82.mp3', isPlay: !1 },
        B4: { url: './samples/piano/a65.mp3', isPlay: !1 },
        B5: { url: './samples/piano/a75.mp3', isPlay: !1 },
        B6: { url: './samples/piano/a78.mp3', isPlay: !1 },
        C2: { url: './samples/piano/a49.mp3', isPlay: !1 },
        C3: { url: './samples/piano/a56.mp3', isPlay: !1 },
        C4: { url: './samples/piano/a84.mp3', isPlay: !1 },
        C5: { url: './samples/piano/a83.mp3', isPlay: !1 },
        C6: { url: './samples/piano/a76.mp3', isPlay: !1 },
        C7: { url: './samples/piano/a77.mp3', isPlay: !1 },
        'C#2': { url: './samples/piano/b49.mp3', isPlay: !1 },
        'C#3': { url: './samples/piano/b56.mp3', isPlay: !1 },
        'C#4': { url: './samples/piano/b84.mp3', isPlay: !1 },
        'C#5': { url: './samples/piano/b83.mp3', isPlay: !1 },
        'C#6': { url: './samples/piano/b76.mp3', isPlay: !1 },
        D2: { url: './samples/piano/a50.mp3', isPlay: !1 },
        D3: { url: './samples/piano/a57.mp3', isPlay: !1 },
        D4: { url: './samples/piano/a89.mp3', isPlay: !1 },
        D5: { url: './samples/piano/a68.mp3', isPlay: !1 },
        D6: { url: './samples/piano/a90.mp3', isPlay: !1 },
        'D#2': { url: './samples/piano/b50.mp3', isPlay: !1 },
        'D#3': { url: './samples/piano/b57.mp3', isPlay: !1 },
        'D#4': { url: './samples/piano/b89.mp3', isPlay: !1 },
        'D#5': { url: './samples/piano/b68.mp3', isPlay: !1 },
        'D#6': { url: './samples/piano/b90.mp3', isPlay: !1 },
        E2: { url: './samples/piano/a51.mp3', isPlay: !1 },
        E3: { url: './samples/piano/a48.mp3', isPlay: !1 },
        E4: { url: './samples/piano/a85.mp3', isPlay: !1 },
        E5: { url: './samples/piano/a70.mp3', isPlay: !1 },
        E6: { url: './samples/piano/a88.mp3', isPlay: !1 },
        F2: { url: './samples/piano/a52.mp3', isPlay: !1 },
        F3: { url: './samples/piano/a81.mp3', isPlay: !1 },
        F4: { url: './samples/piano/a73.mp3', isPlay: !1 },
        F5: { url: './samples/piano/a71.mp3', isPlay: !1 },
        F6: { url: './samples/piano/a67.mp3', isPlay: !1 },
        'F#2': { url: './samples/piano/b52.mp3', isPlay: !1 },
        'F#3': { url: './samples/piano/b81.mp3', isPlay: !1 },
        'F#4': { url: './samples/piano/b73.mp3', isPlay: !1 },
        'F#5': { url: './samples/piano/b71.mp3', isPlay: !1 },
        'F#6': { url: './samples/piano/b67.mp3', isPlay: !1 },
        G2: { url: './samples/piano/a53.mp3', isPlay: !1 },
        G3: { url: './samples/piano/a87.mp3', isPlay: !1 },
        G4: { url: './samples/piano/a79.mp3', isPlay: !1 },
        G5: { url: './samples/piano/a72.mp3', isPlay: !1 },
        G6: { url: './samples/piano/a86.mp3', isPlay: !1 },
        'G#2': { url: './samples/piano/b53.mp3', isPlay: !1 },
        'G#3': { url: './samples/piano/b87.mp3', isPlay: !1 },
        'G#4': { url: './samples/piano/b79.mp3', isPlay: !1 },
        'G#5': { url: './samples/piano/b72.mp3', isPlay: !1 },
        'G#6': { url: './samples/piano/b86.mp3', isPlay: !1 }
      },
      T = [
        '-5',
        '-6',
        '1',
        '2',
        '1',
        '2',
        '3',
        '3',
        '3',
        '2',
        '1',
        '2',
        '3',
        '3',
        '3',
        '2',
        '1',
        '2.',
        '1',
        '1',
        '-6',
        '1.',
        '2',
        '2',
        '3.',
        '-5',
        '-6',
        '1',
        '2',
        '1',
        '2',
        '1',
        '1',
        '5',
        '5',
        '3',
        '2',
        '3',
        '2',
        '1',
        '1',
        '3',
        '3',
        '2',
        '1',
        '2.',
        '2',
        '2.',
        '1',
        '1',
        '-6',
        '2.',
        '-5',
        '-6',
        '1',
        '2',
        '1',
        '2',
        '3',
        '3',
        '5',
        '5',
        '3',
        '2',
        '1',
        '2',
        '3',
        '3',
        '6',
        '6',
        '3',
        '2',
        '1',
        '2.',
        '1',
        '1',
        '6',
        '1.',
        '2',
        '2',
        '3',
        '5.',
        '-5',
        '-6',
        '1',
        '2',
        '1',
        '2',
        '1',
        '1',
        '6',
        '6',
        '5',
        '3',
        '3',
        '2',
        '1',
        '1',
        '3',
        '3',
        '3',
        '2',
        '1',
        '2.',
        '2',
        '2.',
        '1',
        '1',
        '-6',
        '1',
        '1',
        '+1',
        '7',
        '+1',
        '6',
        '+1.',
        '6',
        '6',
        '5',
        '6',
        '5',
        '3',
        '2',
        '3',
        '5',
        '6',
        '5',
        '5',
        '5',
        '6',
        '5',
        '6.',
        '6',
        '6.',
        '5',
        '5',
        '6',
        '5',
        '3',
        '3',
        '1',
        '2',
        '3',
        '5',
        '3',
        '2',
        '1',
        '1',
        '1',
        '2',
        '3',
        '6',
        '3',
        '2',
        '1',
        '1',
        '1',
        '+1.',
        '+1',
        '+1.',
        '6',
        '6',
        '+1',
        '6.',
        '5',
        '5',
        '1',
        '+1',
        '7',
        '+1',
        '7',
        '6',
        '5',
        '6',
        '5',
        '3',
        '2',
        '3',
        '5',
        '6',
        '5',
        '5',
        '5',
        '6',
        '5',
        '6.',
        '6',
        '6.',
        '5',
        '5',
        '6',
        '5',
        '3',
        '3',
        '1',
        '2',
        '3',
        '5',
        '3',
        '2',
        '1',
        '1',
        '1',
        '2',
        '3',
        '6',
        '3',
        '2',
        '1',
        '+1..',
        '+1',
        '6',
        '+1',
        '6',
        '5',
        '5',
        '5',
        '6',
        '5',
        '3',
        '2',
        '3',
        '2',
        '2',
        '1',
        '-6',
        '1',
        '1',
        '2',
        '1',
        '1',
        '+1',
        '6',
        '+1',
        '+2',
        '+1',
        '+1',
        '+1',
        '+2',
        '+1',
        '6',
        '+1',
        '+3',
        '+2',
        '+2',
        '+1',
        '6',
        '+1',
        '+2',
        '1'
      ],
      N = [].concat(T, T),
      B =
        ([].concat([
          '3',
          '2',
          '1.',
          '1',
          '1.',
          '2',
          '3',
          '4',
          '3.',
          '4',
          '2',
          '1',
          '2',
          '2',
          '-7',
          '-7',
          '1',
          '1',
          '-6',
          '-6',
          '-7',
          '1',
          '1',
          '2'
        ]),
        [].concat(
          [
            '3',
            '5',
            '+1',
            '+3',
            '+3.6.3.-4',
            '1',
            '3',
            '+4',
            '+274-4',
            '-7',
            '2',
            '+25-3',
            '-7',
            '+52',
            '7',
            '+13--6',
            '-3',
            '-1',
            '+3+14-2',
            '+4-6',
            '+51',
            '+1',
            '+164--5',
            '-4',
            '+22-7',
            '+353-1',
            '-5',
            '1',
            '2',
            '3-#6-3-1',
            '5',
            '+1#41--#4',
            '+33',
            '+3.6.3.--4',
            '-1',
            '-6',
            '+4',
            '+274--4',
            '-2',
            '-7',
            '+27--3',
            '--7',
            '+5-5',
            '7',
            '+13--6',
            '-3',
            '1',
            '+3+14-2',
            '+4-6',
            '+51',
            '+1',
            '+164--5',
            '-4',
            '+272-7',
            '+1#54-1',
            '-#5',
            '2',
            '4',
            '31-5-1',
            '3',
            '4',
            '5',
            '5-1',
            '5-5',
            '53',
            '5',
            '--7',
            '6-5',
            '72',
            '+1',
            '+1--6',
            '-3',
            '1',
            '+12-3--5',
            '7',
            '+22-7',
            '6',
            '6--4',
            '5-1',
            '5-6',
            '+2',
            '--5',
            '+1-2',
            '+3-7',
            '+3',
            '41-5-1',
            '31',
            '-5',
            '+13-#6-1',
            '+2',
            '+3#61',
            '+3',
            '+3-3--3',
            '+3-#5',
            '+42-7',
            '+3-3',
            '+3--#5',
            '+23-3',
            '#52',
            '+3',
            '+2.5.1.--6',
            '-3',
            '+1.',
            '-6',
            '-3',
            '641--4',
            '7-3',
            '+1-6',
            '+2-3',
            '+2--4',
            '+1-1',
            '+1-6-4',
            '+6',
            '+6--2',
            '+36--6',
            '+36-4-2',
            '+2'
          ],
          [
            '+2--5',
            '-2',
            '1-5',
            '-7-5--5',
            '3',
            '4',
            '5---5',
            '5-1',
            '5-5',
            '52',
            '53',
            '5--7',
            '6-5',
            '7-7',
            '52',
            '+2',
            '+2--6',
            '+1-3',
            '1-5',
            '-3',
            '+12-3--5',
            '7',
            '+22-7',
            '6',
            '6--4',
            '5-1',
            '5-6',
            '+2--4',
            '+2--5',
            '+1-2',
            '+3-7',
            '+3-2',
            '+3-1',
            '-5',
            '31',
            '-5',
            '+1#63--1',
            '+2',
            '+3+11-#6-5',
            '+35-1',
            '+3--7---7',
            '+3-4',
            '+42-6',
            '+3---4',
            '---5',
            '+3--#5---#5',
            '+2-3',
            '2-7',
            '+3-3',
            '+2.5.1.--6---6',
            '-3',
            '+1.',
            '-6',
            '-3',
            '642--5',
            '7-2',
            '+15-6-4',
            '+2-2',
            '+2--2',
            '+1--6',
            '+14-4-2',
            '6--2',
            '--3',
            '--#4',
            '+3-2',
            '+362-4',
            '+2-2',
            '1-6-4.--5.',
            '1-6',
            '-4--5',
            '3-7-4--5',
            '5',
            '+14--5---5',
            '+3',
            '+3.6.--4',
            '-1',
            '-4',
            '+44-1',
            '+242--4',
            '-2',
            '-7',
            '-2',
            '+25--3',
            '--7',
            '+5-5-2',
            '7--7',
            '+13--6',
            '-3',
            '1',
            '-3',
            '+314--4',
            '+4-1',
            '+5+14-6',
            '+1--4',
            '+14-4--5',
            '-2',
            '+274-5',
            '--5',
            '+3+15--1',
            '-5',
            '2',
            '-5',
            '3-#6--1',
            '5',
            '+13---#4',
            '+3',
            '+3.6.--4',
            '-1',
            '-4',
            '+44-1',
            '+242--4',
            '-2',
            '-7',
            '-2',
            '+25--3',
            '--7',
            '+5-5-2',
            '7--7',
            '+13--6',
            '-3',
            '1',
            '-3',
            '+314--4',
            '+4-1',
            '+5+14-6',
            '+1--4',
            '+14-4--5',
            '-2',
            '+274-5',
            '--5',
            '+2-1--1',
            '2',
            '5-3',
            '+2',
            '+11-5',
            '3-3',
            '+1',
            '7-1--1',
            '2',
            '3-3',
            '7',
            '+11-5',
            '2',
            '3-3',
            '+1',
            '+2--6---6',
            '2',
            '5-3',
            '+2',
            '+11-5',
            '3',
            '5-3',
            '+1',
            '7--6---6',
            '2',
            '3-3',
            '+1',
            '+3--#4',
            '4',
            '6-2',
            '+3',
            '+22-#4',
            '4',
            '6-2',
            '+2',
            '+3--2',
            '4',
            '6--6',
            '+3',
            '+2-4-2',
            '4',
            '6--6',
            '+2',
            '+47--5',
            '4',
            '5-2',
            '+47',
            '+37-7-4',
            '4',
            '5-2',
            '+37',
            '+2-1--1',
            '2',
            '5-3',
            '+2',
            '+11-5',
            '3-3',
            '+1',
            '7-1--1',
            '2',
            '3-3',
            '7',
            '+11-5',
            '2',
            '3-3',
            '+1',
            '+2--6---6',
            '2',
            '5-3',
            '+2',
            '+11-5',
            '3',
            '5-3',
            '+1',
            '7--6---6',
            '2',
            '3-3',
            '+1',
            '+3--#4',
            '4',
            '6-2',
            '+3',
            '+22-#4',
            '4',
            '6-2',
            '+2',
            '+3--2',
            '4',
            '6--6',
            '+3',
            '+2-4-2',
            '4',
            '6--6',
            '--5---5',
            '51--1',
            '-1',
            '51',
            '-1',
            '51--1',
            '3',
            '4',
            '5',
            '+153-1--1',
            '-#6-5-3',
            '3-6-5-1--1',
            '53-6-1--1',
            '+6+3--#6--1',
            '+5',
            '+3--1',
            '+2-1',
            '+1--1',
            '+3.6.--4',
            '-1',
            '-4',
            '+44-1',
            '+242--4',
            '-2',
            '-7',
            '-2',
            '+6.',
            '+2.',
            '--3',
            '--7',
            '+5.7.',
            '-5-2',
            '7--7',
            '+13--6',
            '-3',
            '1',
            '-3',
            '+314',
            '+314--4',
            '+4-1',
            '+5+14-6',
            '+1--4',
            '+14-4--5',
            '-2',
            '+274-5',
            '--5',
            '+3+15--1',
            '-5',
            '2',
            '-5',
            '3-#6--1',
            '5',
            '+13---#4',
            '+3',
            '+3.6.--4',
            '-1',
            '-4',
            '+44-1',
            '+242--4',
            '-2',
            '-7',
            '-2',
            '+25--3',
            '--7',
            '+5-5-2',
            '7--7',
            '+13--6',
            '-3',
            '1',
            '-3',
            '+314--4',
            '+4-1',
            '+5+14-6',
            '+1--4',
            '+14-4--5',
            '-2',
            '+274-5',
            '+153--1',
            '31',
            '-5--1',
            '31--1',
            '5',
            '+1',
            '+2',
            '+3+15-4',
            '+4-6',
            '+51',
            '+13',
            '+1-5',
            '-7',
            '+22',
            '+1-6',
            '1',
            '3',
            '1',
            '-7-5',
            '51',
            '+13',
            '+21',
            '+315-4',
            '+41',
            '+53',
            '+1',
            '+1-5',
            '-7',
            '+22',
            '+1-1',
            '-5',
            '42',
            '-5',
            '31--1'
          ]
        )),
      L = [].concat([
        '4',
        '6',
        '6-1',
        '+1',
        '+1-4',
        '+4',
        '+4-1',
        '+3',
        '+3-5',
        '+2',
        '62',
        '+2',
        '+2-7',
        '2',
        '--7',
        '+2',
        '+2-5',
        '+3',
        '+3-5',
        '+6',
        '+6-1',
        '+3',
        '+3-4',
        '+1',
        '61',
        '+1',
        '+1-6',
        '+7',
        '++1-3',
        '++4',
        '++4-2',
        '6',
        '6-6',
        '+1',
        '+1-4',
        '+4',
        '+4-6',
        '+3',
        '+3-5',
        '+2',
        '62',
        '+2',
        '+2-7',
        '+22',
        '+3',
        '+3-1',
        '+#2',
        '+3-5',
        '+6',
        '+6-3',
        '+5',
        '+5-5',
        '+4',
        '+4-4',
        '+5',
        '+6',
        '++4',
        '++4-6',
        '-7-1',
        '--4',
        '6-1',
        '6-4',
        '+1-5',
        '+1-6',
        '+4',
        '+41',
        '+3',
        '+3--5',
        '+2-2',
        '6-5',
        '+2-6',
        '+2-7',
        '2',
        '+2-7-1',
        '+2-5',
        '+2-7',
        '+3-5',
        '+31',
        '+6',
        '+6-6',
        '+3',
        '+3--4',
        '-1',
        '6-4',
        '+1-5',
        '+1-6',
        '-7',
        '1',
        '--2',
        '+6--6',
        '6-2',
        '+1-3',
        '+1-4',
        '+4',
        '+4-6',
        '+3',
        '+3--5',
        '+4-2',
        '6-5',
        '+2-6',
        '+2-7',
        '+2',
        '+42',
        '+3',
        '+3-7-1',
        '+#2-5',
        '+3-7',
        '+6-5',
        '+61',
        '+5',
        '+5-1',
        '+4',
        '+4--4',
        '-1',
        '1-6-4',
        '-1',
        '+6-4',
        '+5',
        '+4',
        '+4--3',
        '+3',
        '+2--7',
        '+2-4',
        '+2-7',
        '+2-4',
        '+2-7',
        '+6-4',
        '+5-4',
        '+5-1',
        '-5',
        '531',
        '-5',
        '+51',
        '+3-5',
        '+3',
        '+3--7',
        '+2-5',
        '+1--6',
        '+1-3',
        '+1-6',
        '6-3',
        '+1-6',
        '+5-3',
        '+5-6',
        '+4-3',
        '+4--2',
        '-6',
        '-2',
        '+4-6',
        '+4-2',
        '+1-6',
        '+1-2',
        '4-6',
        '6--5',
        '-2',
        '5-7',
        '+2-2',
        '+2-7',
        '-2',
        '-7',
        '+2-2',
        '+2--5',
        '+2-2',
        '+2-7',
        '+2-5',
        '+4',
        '+4-7',
        '+2-5',
        '+4-7',
        '+2-5',
        '+4+27-1',
        '+4-4',
        '+41',
        '+4-4',
        '+61',
        '+5-4',
        '+51',
        '+5-4',
        '++3+5--1.',
        '+1',
        '+6',
        '+5',
        '+4',
        '+4',
        '+5',
        '+6--4',
        '+1-1',
        '+5--6',
        '+6-1',
        '+6--4',
        '+1-1',
        '+5--6',
        '+6-1',
        '+6-1',
        '+5-5',
        '+5-3',
        '+6-5',
        '+7',
        '+7-1',
        '+6-5',
        '+5-3',
        '+3-5',
        '+4-2',
        '6-6',
        '+2-4',
        '+4-6',
        '+4-2',
        '6-6',
        '+2-4',
        '+3-6',
        '3--6',
        '+3-3',
        '+3-1',
        '+6-3',
        '++1',
        '++1--6',
        '+6-3',
        '+4-1',
        '+3-3',
        '+2--7',
        '+7-5',
        '+7',
        '+7-2',
        '-5',
        '--7',
        '++1-5',
        '+7-2',
        '+6-5',
        '+1--4',
        '+6-1',
        '+6',
        '--6',
        '-1',
        '--4',
        '+7-1',
        '+6--6',
        '+4-1',
        '75--5',
        '+5-2',
        '+5',
        '--7',
        '-2',
        '--5',
        '+5-2',
        '+4--7',
        '+6-2',
        '-1',
        '+5-5',
        '+4-7',
        '+6-1',
        '4-2',
        '+5-7',
        '5-3',
        '+41',
        '+6--4',
        '+1-1',
        '+5--6',
        '+6-1',
        '--4',
        '+1-1',
        '+5--6',
        '+6-1',
        '-1',
        '+5-5',
        '+5-3',
        '+6-5',
        '+7',
        '+7-1',
        '++1-5',
        '+5-3',
        '+4-5',
        '+4-2',
        '6-6',
        '+2-4',
        '+4-6',
        '-2',
        '6-6',
        '+2-4',
        '+3-6',
        '--6',
        '-3',
        '+3-1',
        '+6-3',
        '++1',
        '++1--6',
        '+6-3',
        '+4-1',
        '+3-3',
        '+2--7',
        '+7-5',
        '+7',
        '+7-2',
        '-5',
        '--7',
        '++15',
        '+7-2',
        '+6-5',
        '+1-4',
        '+6-1',
        '+6',
        '--6',
        '-1',
        '--4',
        '+7-1',
        '+6--6',
        '+4-1',
        '7--5',
        '+5-2',
        '+5',
        '+5--7',
        '-2',
        '--5',
        '-2',
        '--7',
        '-2',
        '531-1--1',
        '+6',
        '+4',
        '+4',
        '+6-1',
        '+5',
        '+5',
        '+4',
        '+4-4',
        '1',
        '61',
        '-4',
        '1.',
        '-5',
        '-7',
        '4-7',
        '-5',
        '-7',
        '-1',
        '-3',
        '-7-3',
        '-3',
        '2-3',
        '-3',
        '3-3',
        '41-6-4-1--4'
      ]),
      D = [
        {
          black: { name: 'C#2', keyCode: 81 },
          white: { name: 'C2', keyCode: 49 }
        },
        {
          black: { name: 'D#2', keyCode: 87 },
          white: { name: 'D2', keyCode: 50 }
        },
        {
          black: { name: null, keyCode: null },
          white: { name: 'E2', keyCode: 51 }
        },
        {
          black: { name: 'F#2', keyCode: 69 },
          white: { name: 'F2', keyCode: 52 }
        },
        {
          black: { name: 'G#2', keyCode: 82 },
          white: { name: 'G2', keyCode: 53 }
        },
        {
          black: { name: 'A#2', keyCode: 84 },
          white: { name: 'A2', keyCode: 54 }
        },
        {
          black: { name: null, keyCode: null },
          white: { name: 'B2', keyCode: 55 }
        },
        {
          black: { name: 'C#3', keyCode: 81 },
          white: { name: 'C3', keyCode: 49 }
        },
        {
          black: { name: 'D#3', keyCode: 87 },
          white: { name: 'D3', keyCode: 50 }
        },
        {
          black: { name: null, keyCode: null },
          white: { name: 'E3', keyCode: 51 }
        },
        {
          black: { name: 'F#3', keyCode: 69 },
          white: { name: 'F3', keyCode: 52 }
        },
        {
          black: { name: 'G#3', keyCode: 82 },
          white: { name: 'G3', keyCode: 53 }
        },
        {
          black: { name: 'A#3', keyCode: 84 },
          white: { name: 'A3', keyCode: 54 }
        },
        {
          black: { name: null, keyCode: null },
          white: { name: 'B3', keyCode: 55 }
        },
        {
          black: { name: 'C#4', keyCode: 81 },
          white: { name: 'C4', keyCode: 49 }
        },
        {
          black: { name: 'D#4', keyCode: 87 },
          white: { name: 'D4', keyCode: 50 }
        },
        {
          black: { name: null, keyCode: null },
          white: { name: 'E4', keyCode: 51 }
        },
        {
          black: { name: 'F#4', keyCode: 69 },
          white: { name: 'F4', keyCode: 52 }
        },
        {
          black: { name: 'G#4', keyCode: 82 },
          white: { name: 'G4', keyCode: 53 }
        },
        {
          black: { name: 'A#4', keyCode: 84 },
          white: { name: 'A4', keyCode: 54 }
        },
        {
          black: { name: null, keyCode: null },
          white: { name: 'B4', keyCode: 55 }
        },
        {
          black: { name: 'C#5', keyCode: 81 },
          white: { name: 'C5', keyCode: 49 }
        },
        {
          black: { name: 'D#5', keyCode: 87 },
          white: { name: 'D5', keyCode: 50 }
        },
        {
          black: { name: null, keyCode: null },
          white: { name: 'E5', keyCode: 51 }
        },
        {
          black: { name: 'F#5', keyCode: 69 },
          white: { name: 'F5', keyCode: 52 }
        },
        {
          black: { name: 'G#5', keyCode: 82 },
          white: { name: 'G5', keyCode: 53 }
        },
        {
          black: { name: 'A#5', keyCode: 84 },
          white: { name: 'A5', keyCode: 54 }
        },
        {
          black: { name: null, keyCode: null },
          white: { name: 'B5', keyCode: 55 }
        },
        {
          black: { name: 'C#6', keyCode: 81 },
          white: { name: 'C6', keyCode: 49 }
        },
        {
          black: { name: 'D#6', keyCode: 87 },
          white: { name: 'D6', keyCode: 50 }
        },
        {
          black: { name: null, keyCode: null },
          white: { name: 'E6', keyCode: 51 }
        },
        {
          black: { name: 'F#6', keyCode: 69 },
          white: { name: 'F6', keyCode: 52 }
        },
        {
          black: { name: 'G#6', keyCode: 82 },
          white: { name: 'G6', keyCode: 53 }
        },
        {
          black: { name: 'A#6', keyCode: 84 },
          white: { name: 'A6', keyCode: 54 }
        },
        {
          black: { name: null, keyCode: null },
          white: { name: 'B6', keyCode: 55 }
        }
      ],
      G = (function(e) {
        function t() {
          var e, n
          s()(this, t)
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i]
          return (
            ((n = p()(
              this,
              (e = d()(t)).call.apply(e, [this].concat(o))
            )).add = function() {
              return n.store.add()
            }),
            (n.sub = function() {
              return n.store.sub()
            }),
            (n.setSong = function(e) {
              return n.store.setSong(e)
            }),
            (n.setCount = function(e) {
              return n.store.setSong(e)
            }),
            n
          )
        }
        return (
          m()(t, e),
          l()(t, [
            {
              key: 'render',
              value: function(e) {
                var t = this
                return Object(i.c)(
                  'div',
                  { class: '' },
                  Object(i.c)(
                    'div',
                    { class: 'piano' },
                    this.data.pianoKeys.map(function(e) {
                      return Object(i.c)(
                        'div',
                        { class: 'piano-key' },
                        Object(i.c)(
                          'div',
                          {
                            'data-type': 'white',
                            ref: function(n) {
                              t[e.white.name] = n
                            },
                            class: 'piano-key__white',
                            onClick: t.playNote.bind(t, e.white.name),
                            'data-key': e.white.keyCode,
                            'data-note': e.white.name
                          },
                          Object(i.c)(
                            'span',
                            { class: 'piano-note' },
                            e.white.name
                          ),
                          Object(i.c)('audio', {
                            preload: 'auto',
                            src: t.data.notes[e.white.name].url,
                            hidden: 'true',
                            'data-note': e.white.name,
                            class: 'audioEle'
                          })
                        ),
                        Object(i.c)(
                          'div',
                          {
                            'data-type': 'black',
                            ref: function(n) {
                              t[e.black.name] = n
                            },
                            style: { display: e.black.name ? 'block' : 'none' },
                            class: 'piano-key__black',
                            onClick: t.playNote.bind(t, e.black.name),
                            'data-key': e.black.keyCode,
                            'data-note': e.black.name
                          },
                          Object(i.c)(
                            'span',
                            { class: 'piano-note', style: 'color:#fff' },
                            e.black.name
                          ),
                          Object(i.c)('audio', {
                            preload: 'auto',
                            src:
                              t.data.notes[e.black.name] &&
                              t.data.notes[e.black.name].url,
                            hidden: 'true',
                            'data-note': e.black.name,
                            class: 'audioEle'
                          })
                        )
                      )
                    })
                  ),
                  Object(i.c)(
                    'div',
                    { class: 'text-center' },
                    Object(i.c)(
                      'p',
                      null,
                      'Click the button below to let the piano play the song automatically:'
                    ),
                    Object(i.c)(
                      'p',
                      null,
                      '点击下面按钮让钢琴自动演奏歌曲:',
                      this.store.data.count > 0 ? '1' : '0'
                    ),
                    Object(i.c)(
                      'div',
                      null,
                      this.store.data.count > 0
                        ? Object(i.c)(
                            'button',
                            {
                              onClick: this.stopSong.bind(this),
                              class: 'btn btn-outline-info btn-stop'
                            },
                            'Stop & 暂停'
                          )
                        : Object(i.c)(
                            'div',
                            null,
                            Object(i.c)(
                              'button',
                              {
                                onClick: this.playSong.bind(this, g),
                                class: 'btn btn-outline-info'
                              },
                              '月亮代表我的心'
                            ),
                            Object(i.c)(
                              'button',
                              {
                                onClick: this.playSong.bind(this, B),
                                class: 'btn btn-outline-info'
                              },
                              '蒲公英的约定'
                            ),
                            Object(i.c)(
                              'button',
                              {
                                onClick: this.playSong.bind(this, L),
                                class: 'btn btn-outline-info'
                              },
                              '小幸运'
                            ),
                            Object(i.c)(
                              'button',
                              {
                                onClick: this.playSong.bind(this, N),
                                class: 'btn btn-outline-info'
                              },
                              '富士山下&爱情转移'
                            )
                          )
                    )
                  )
                )
              }
            },
            {
              key: 'install',
              value: function() {
                var e = arguments,
                  t = this
                ;(this.data = { notes: A, pianoKeys: D }),
                  (document.onkeydown = function(n) {
                    var r = n || window.event || e.callee.caller.arguments[0],
                      o = function(e) {
                        !0 === r.shiftKey
                          ? t.playNote(''.concat(e, '2'))
                          : !0 === r.altKey
                          ? t.playNote(''.concat(e, '5'))
                          : !0 === r.ctrlKey
                          ? t.playNote(''.concat(e, '3'))
                          : !0 === r.metaKey
                          ? (t.playNote(''.concat(e, '6')),
                            (r.returnValue = !1))
                          : t.playNote(''.concat(e, '4'))
                      }
                    if (r && 49 <= r.keyCode && r.keyCode <= 55)
                      switch (r.keyCode) {
                        case 49:
                          o('C')
                          break
                        case 50:
                          o('D')
                          break
                        case 51:
                          o('E')
                          break
                        case 52:
                          o('F')
                          break
                        case 53:
                          o('G')
                          break
                        case 54:
                          o('A')
                          break
                        case 55:
                          o('B')
                      }
                    if (
                      r &&
                      (81 === r.keyCode ||
                        87 === r.keyCode ||
                        69 === r.keyCode ||
                        82 === r.keyCode ||
                        84 === r.keyCode)
                    )
                      switch (r.keyCode) {
                        case 81:
                          o('C#')
                          break
                        case 87:
                          o('D#')
                          break
                        case 69:
                          o('F#')
                          break
                        case 82:
                          o('G#')
                          break
                        case 84:
                          o('A#')
                      }
                  })
              }
            },
            {
              key: 'stopSong',
              value: function() {
                clearTimeout(this.timer),
                  (this.store.data.song = []),
                  (this.store.data.count = 0),
                  console.log('reset')
              }
            },
            {
              key: 'playNote',
              value: function(e) {
                var t = this
                if (
                  (console.log(this.data.notes[e]), !this.data.notes[e].isPlay)
                ) {
                  var n = this[e].childNodes[1]
                  this[e].style.background =
                    'linear-gradient(-20deg, #3330fb, #000, #222)'
                  var r = setTimeout(function() {
                    'white' === t[e].getAttribute('data-type')
                      ? (t[e].style.background =
                          'linear-gradient(-30deg, #f8f8f8, #fff)')
                      : (t[e].style.background =
                          'linear-gradient(-20deg, #222, #000, #222)'),
                      clearTimeout(r)
                  }, 1e3)
                  ;(n.currentTime = 0),
                    n.play(),
                    (this.data.notes[e].isPlay = !0)
                  var o = setTimeout(function() {
                    ;(t.data.notes[e].isPlay = !1), clearTimeout(o)
                  }, 500)
                }
              }
            },
            {
              key: 'playSong',
              value: function(e) {
                var t = this
                this.setSong(P()(e))
                var n = 0,
                  r = 0,
                  o = (function() {
                    var i = S()(
                      k.a.mark(function i() {
                        var a
                        return k.a.wrap(function(i) {
                          for (;;)
                            switch ((i.prev = i.next)) {
                              case 0:
                                if (
                                  !(
                                    n < e.length && t.store.data.song.length > 0
                                  )
                                ) {
                                  i.next = 31
                                  break
                                }
                                ;(i.t0 = O()(e[n])),
                                  (i.next =
                                    'string' === i.t0
                                      ? 4
                                      : 'object' === i.t0
                                      ? 13
                                      : 'number' === i.t0
                                      ? 17
                                      : 23)
                                break
                              case 4:
                                ;(a = e[n].match(/[0-9]/g)),
                                  (i.t1 = a.length),
                                  (i.next = 1 === i.t1 ? 8 : 10)
                                break
                              case 8:
                                return (
                                  (r = t.handleString(e, n)),
                                  i.abrupt('break', 12)
                                )
                              case 10:
                                return (
                                  (r = t.handleStrings(e, n)),
                                  i.abrupt('break', 12)
                                )
                              case 12:
                                return i.abrupt('break', 23)
                              case 13:
                                return (
                                  console.log(e[n].note),
                                  (r = e[n].time),
                                  t.playNote(e[n].note),
                                  i.abrupt('break', 23)
                                )
                              case 17:
                                ;(i.t2 = e[n]), (i.next = 0 === i.t2 ? 20 : 22)
                                break
                              case 20:
                                return (r = 1e3), i.abrupt('break', 22)
                              case 22:
                                return i.abrupt('break', 23)
                              case 23:
                                return (
                                  (i.next = 25),
                                  new Promise(function(e) {
                                    var t = setTimeout(function() {
                                      clearInterval(t), e()
                                    }, r)
                                  })
                                )
                              case 25:
                                n++, t.update(), t.add(), o(), (i.next = 35)
                                break
                              case 31:
                                return (
                                  clearTimeout(t.timer),
                                  (t.store.data.song = []),
                                  (t.store.data.count = 0),
                                  i.abrupt('return')
                                )
                              case 35:
                              case 'end':
                                return i.stop()
                            }
                        }, i)
                      })
                    )
                    return function() {
                      return i.apply(this, arguments)
                    }
                  })()
                o()
              }
            },
            {
              key: 'playSongByInterval',
              value: function(e) {
                var t = this
                clearInterval(this.interval)
                var n = 0
                this.interval = setInterval(function() {
                  if (n < e.length) {
                    switch (O()(e[n])) {
                      case 'string':
                        switch (e[n].match(/[0-9]/g).length) {
                          case 1:
                            t.handleString(e, n)
                            break
                          default:
                            t.handleStrings(e, n)
                        }
                        break
                      case 'object':
                        console.log(e[n].note), e[n].time, t.playNote(e[n].note)
                        break
                      case 'number':
                        switch (e[n]) {
                          case 0:
                            1e3
                        }
                    }
                    ++n
                  } else clearInterval(t.interval)
                }, 500)
              }
            },
            {
              key: 'handleStrings',
              value: function(e, t) {
                for (var n = this, r = /[0-9]/g, o = e[t], i = 1, a = []; ; ) {
                  var s = r.exec(o)
                  if (!s) break
                  a.push({ text: s[0], index: s.index, order: i }), i++
                }
                a.map(function(e) {
                  switch (o[e.index - 1]) {
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                      break
                    case '+':
                      switch (((e.text = '+'.concat(e.text)), o[e.index - 2])) {
                        case '+':
                          e.text = '+'.concat(e.text)
                      }
                      break
                    case '-':
                      switch (((e.text = '-'.concat(e.text)), o[e.index - 2])) {
                        case '-':
                          e.text = '-'.concat(e.text)
                      }
                      break
                    case '#':
                      switch (((e.text = '#'.concat(e.text)), o[e.index - 2])) {
                        case '-':
                          switch (
                            ((e.text = '-'.concat(e.text)), o[e.index - 3])
                          ) {
                            case '-':
                              e.text = '-'.concat(e.text)
                          }
                          break
                        case '+':
                          switch (
                            ((e.text = '+'.concat(e.text)), o[e.index - 3])
                          ) {
                            case '+':
                              e.text = '+'.concat(e.text)
                          }
                      }
                  }
                  switch (o[e.index + 1]) {
                    case '.':
                      switch (
                        ((e.text = ''.concat(e.text, '.')), o[e.index + 2])
                      ) {
                        case '.':
                          e.text = ''.concat(e.text, '.')
                      }
                  }
                })
                var c = a.map(function(e) {
                    return e.text
                  }),
                  l = []
                return (
                  c.forEach(function(e, t) {
                    l.push(n.handleString(c, t))
                  }),
                  l.sort()[0]
                )
              }
            },
            {
              key: 'handleString',
              value: function(e, t) {
                var n,
                  r,
                  o,
                  i = e[t].match(/[0-9]/g)[0],
                  a = e[t].split('-').length - 1,
                  s = e[t].split('+').length - 1,
                  c = e[t].split('.').length - 1,
                  l = e[t].split('#').length - 1
                switch (i) {
                  case '0':
                    return 1e3
                  case '1':
                    n = 'C'
                    break
                  case '2':
                    n = 'D'
                    break
                  case '3':
                    n = 'E'
                    break
                  case '4':
                    n = 'F'
                    break
                  case '5':
                    n = 'G'
                    break
                  case '6':
                    n = 'A'
                    break
                  case '7':
                    n = 'B'
                }
                switch (a) {
                  case 0:
                    r = 4
                    break
                  case 1:
                    r = 3
                    break
                  case 2:
                    r = 2
                }
                switch (s) {
                  case 0:
                    r = 4
                    break
                  case 1:
                    r = 5
                    break
                  case 2:
                    r = 6
                }
                switch (c) {
                  case 0:
                    o = 500
                    break
                  case 1:
                    o = 1e3
                    break
                  case 2:
                    o = 1500
                }
                return (
                  console.log(''.concat(n + (l > 0 ? '#' : '') + r)),
                  this.playNote(''.concat(n + (l > 0 ? '#' : '') + r)),
                  o
                )
              }
            },
            { key: 'recordSong', value: function() {} }
          ]),
          t
        )
      })(i.a)
    function U(e, t) {
      var n = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e)
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          n.push.apply(n, r)
      }
      return n
    }
    ;(G.css =
      '\n  * {\n    margin: 0;\n    padding: 0;\n  }\n\n  .icon {\n    width: 24px;\n  }\n\n  .piano {\n    margin: 0 200px;\n    background: linear-gradient(-65deg, #000, #222, #000, #666, #222 75%);\n    border-top: .8rem solid #282828;\n    -webkit-box-shadow: inset 0 -1px 1px hsla(0, 0%, 100%, .5), inset -0.4rem 0.4rem #282828;\n    box-shadow: inset 0 -1px 1px hsla(0, 0%, 100%, .5), inset -0.4rem 0.4rem #282828;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 80vh;\n    height: 20vh;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    overflow: hidden;\n    padding-bottom: 2%;\n    padding-left: 2.5%;\n    padding-right: 2.5%;\n  }\n\n  @media screen and (max-width: 1000px) {\n\n    /*当屏幕尺寸小于600px时，应用下面的CSS样式*/\n    .piano {\n      margin: 0 10px;\n    }\n  }\n\n  .piano-key {\n    color: blue;\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    margin: 0 .1rem;\n    max-width: 8.8rem;\n    position: relative;\n  }\n\n  .piano-key__white {\n    display: flex;\n    flex-direction: column-reverse;\n    background: linear-gradient(-30deg, #f8f8f8, #fff);\n    -webkit-box-shadow: inset 0 1px 0 #fff, inset 0 -1px 0 #fff, inset 1px 0 0 #fff, inset -1px 0 0 #fff, 0 4px 3px rgba(0, 0, 0, .7), inset 0 -1px 0 #fff, inset 1px 0 0 #fff, inset -1px -1px 15px rgba(0, 0, 0, .5), -3px 4px 6px rgba(0, 0, 0, .5);\n    box-shadow: inset 0 1px 0 #fff, inset 0 -1px 0 #fff, inset 1px 0 0 #fff, inset -1px 0 0 #fff, 0 4px 3px rgba(0, 0, 0, .7), inset 0 -1px 0 #fff, inset 1px 0 0 #fff, inset -1px -1px 15px rgba(0, 0, 0, .5), -3px 4px 6px rgba(0, 0, 0, .5);\n    height: 100%;\n    position: relative;\n  }\n\n  .piano-key__black {\n    display: flex;\n    flex-direction: column-reverse;\n    background: linear-gradient(-20deg, #222, #000, #222);\n    -webkit-box-shadow: inset 0 -1px 2px hsla(0, 0%, 100%, .4), 0 2px 3px rgba(0, 0, 0, .4);\n    box-shadow: inset 0 -1px 2px hsla(0, 0%, 100%, .4), 0 2px 3px rgba(0, 0, 0, .4);\n    border-width: .2rem .4rem 1.2rem;\n    border-style: solid;\n    border-color: #666 #222 #111 #555;\n    height: 60%;\n    left: 100%;\n    position: absolute;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    top: 0;\n    width: 70%;\n    z-index: 1;\n  }\n\n  .piano-note {\n    color: #000;\n    /* 隐藏音符显示 */\n    /* font-size: 8px; */\n    font-size: 0px;\n    text-align: center;\n    height: 20px;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  .text-center {\n    margin: 15px;\n    text-align: center !important;\n  }\n\n  /* .btn:not(:disabled):not(.disabled) {\n    cursor: pointer;\n  } */\n\n  .btn-outline-info {\n    color: #17a2b8;\n    background-color: transparent;\n    background-image: none;\n    border-color: #17a2b8;\n\n  }\n\n  .btn {\n    text-transform: none;\n    margin: 15px;\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    /* white-space: nowrap; */\n    vertical-align: middle;\n    /* -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; */\n    border: 1px solid #17a2b8;\n    padding: 8px 8px;\n    font-size: 16px;\n    line-height: 16px;\n    border-radius: 2.5px;\n    /* transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out; */\n  }\n\n  .btn-stop {\n    color: #ff7171;\n    border-color: #ff7171;\n  }\n'),
      (G.use = [{ count: 'count', song: 'song' }]),
      Object(i.b)('app-piano', G),
      Object(i.b)(
        'my-app',
        (function(e) {
          function t() {
            return s()(this, t), p()(this, d()(t).apply(this, arguments))
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function() {
                  return Omi.h(
                    'div',
                    { class: 'app' },
                    Omi.h('app-header', null),
                    Omi.h('app-piano', null),
                    Omi.h('app-footer', null)
                  )
                }
              }
            ]),
            t
          )
        })(i.a)
      ),
      Object(i.d)(Omi.h('my-app', null), '#root', {
        data: { count: 0, song: [] },
        sub: function() {
          this.data.count--
        },
        add: function() {
          this.data.count++
        },
        setSong: function(e) {
          var t = []
          e.map(function(e, n) {
            t.push(
              (function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {}
                  t % 2
                    ? U(Object(n), !0).forEach(function(t) {
                        o()(e, t, n[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : U(Object(n)).forEach(function(t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        )
                      })
                }
                return e
              })({}, e, { index: n })
            )
          })
          for (var n = 0; n < t.length; n += 30)
            this.data.song.push(t.slice(n, n + 30))
        }
      })
  }
])
//# sourceMappingURL=index.e17028da.js.map

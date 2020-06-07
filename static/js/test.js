/**
 * ag-charts-community - Advanced Charting / Charts supporting Javascript / React / Angular * @version v1.1.0
 * @link http://www.ag-grid.com/
' * @license MIT
 */

/**
 * ag-charts-community - Advanced Charting / Charts supporting Javascript / React / Angular * @version v1.1.0
 * @link http://www.ag-grid.com/
' * @license MIT
 */
var t, e;
(t = this),
    (e = function (t) {
        "use strict";
        var e,
            i = (function () {
                function t(t, e, i, n) {
                    void 0 === t && (t = 0), void 0 === e && (e = t), void 0 === i && (i = t), void 0 === n && (n = e), (this.top = t), (this.right = e), (this.bottom = i), (this.left = n);
                }
                return (
                    (t.prototype.clear = function () {
                        this.top = this.right = this.bottom = this.left = 0;
                    }),
                    t
                );
            })(),
            n = (function () {
                function t(t, e, i, n) {
                    (this.x = t), (this.y = e), (this.width = i), (this.height = n);
                }
                return (
                    (t.prototype.isValid = function () {
                        return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
                    }),
                    (t.prototype.dilate = function (t) {
                        (this.x -= t), (this.y -= t), (this.width += 2 * t), (this.height += 2 * t);
                    }),
                    (t.prototype.containsPoint = function (t, e) {
                        return t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height;
                    }),
                    (t.prototype.render = function (e, i) {
                        void 0 === i && (i = t.noParams),
                            e.save(),
                            i.resetTransform && e.setTransform(1, 0, 0, 1, 0, 0),
                            (e.strokeStyle = i.strokeStyle || "cyan"),
                            (e.lineWidth = i.lineWidth || 1),
                            e.strokeRect(this.x, this.y, this.width, this.height),
                            i.label && ((e.fillStyle = i.fillStyle || "black"), (e.textBaseline = "bottom"), e.fillText(i.label, this.x, this.y)),
                            e.restore();
                    }),
                    (t.noParams = {}),
                    t
                );
            })(),
            r = (function () {
                function t(t) {
                    void 0 === t && (t = [1, 0, 0, 1, 0, 0]), (this.elements = t);
                }
                return (
                    (t.prototype.setElements = function (t) {
                        var e = this.elements;
                        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), (e[4] = t[4]), (e[5] = t[5]), this;
                    }),
                    (t.prototype.setIdentityElements = function () {
                        var t = this.elements;
                        return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), this;
                    }),
                    Object.defineProperty(t.prototype, "identity", {
                        get: function () {
                            var t = this.elements;
                            return 1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3] && 0 === t[4] && 0 === t[5];
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "a", {
                        get: function () {
                            return this.elements[0];
                        },
                        set: function (t) {
                            this.elements[0] = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "b", {
                        get: function () {
                            return this.elements[1];
                        },
                        set: function (t) {
                            this.elements[1] = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "c", {
                        get: function () {
                            return this.elements[2];
                        },
                        set: function (t) {
                            this.elements[2] = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "d", {
                        get: function () {
                            return this.elements[3];
                        },
                        set: function (t) {
                            this.elements[3] = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "e", {
                        get: function () {
                            return this.elements[4];
                        },
                        set: function (t) {
                            this.elements[4] = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "f", {
                        get: function () {
                            return this.elements[5];
                        },
                        set: function (t) {
                            this.elements[5] = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.AxB = function (t, e, i) {
                        var n = t[0],
                            r = t[1],
                            o = t[2],
                            a = t[3],
                            s = t[4],
                            h = t[5],
                            l = e[0],
                            u = e[1],
                            c = e[2],
                            f = e[3],
                            p = e[4],
                            d = e[5];
                        ((i = i || t)[0] = n * l + o * u), (i[1] = r * l + a * u), (i[2] = n * c + o * f), (i[3] = r * c + a * f), (i[4] = n * p + o * d + s), (i[5] = r * p + a * d + h);
                    }),
                    (t.prototype.multiplySelf = function (t) {
                        return this.AxB(this.elements, t.elements), this;
                    }),
                    (t.prototype.multiply = function (e) {
                        var i = new Array(6);
                        return this.AxB(this.elements, e.elements, i), new t(i);
                    }),
                    (t.prototype.preMultiplySelf = function (t) {
                        return this.AxB(t.elements, this.elements, this.elements), this;
                    }),
                    (t.prototype.inverse = function () {
                        var e = this.elements,
                            i = e[0],
                            n = e[1],
                            r = e[2],
                            o = e[3],
                            a = e[4],
                            s = e[5],
                            h = 1 / (i * o - n * r);
                        return new t([(o *= h), -(n *= h), -(r *= h), (i *= h), r * s - o * a, n * a - i * s]);
                    }),
                    (t.prototype.inverseTo = function (t) {
                        var e = this.elements,
                            i = e[0],
                            n = e[1],
                            r = e[2],
                            o = e[3],
                            a = e[4],
                            s = e[5],
                            h = 1 / (i * o - n * r);
                        return (i *= h), (n *= h), (r *= h), (o *= h), t.setElements([o, -n, -r, i, r * s - o * a, n * a - i * s]), this;
                    }),
                    (t.prototype.invertSelf = function () {
                        var t = this.elements,
                            e = t[0],
                            i = t[1],
                            n = t[2],
                            r = t[3],
                            o = t[4],
                            a = t[5],
                            s = 1 / (e * r - i * n);
                        return (e *= s), (i *= s), (n *= s), (r *= s), (t[0] = r), (t[1] = -i), (t[2] = -n), (t[3] = e), (t[4] = n * a - r * o), (t[5] = i * o - e * a), this;
                    }),
                    (t.prototype.clone = function () {
                        return new t(this.elements.slice());
                    }),
                    (t.prototype.transformPoint = function (t, e) {
                        var i = this.elements;
                        return { x: t * i[0] + e * i[2] + i[4], y: t * i[1] + e * i[3] + i[5] };
                    }),
                    (t.prototype.transformBBox = function (t, e, i) {
                        void 0 === e && (e = 0);
                        var r,
                            o,
                            a = this.elements,
                            s = a[0],
                            h = a[1],
                            l = a[2],
                            u = a[3],
                            c = 0.5 * t.width,
                            f = 0.5 * t.height,
                            p = t.x + c,
                            d = t.y + f;
                        if (e) {
                            (c -= e), (f -= e);
                            var y = Math.sqrt(s * s + l * l),
                                g = Math.sqrt(h * h + u * u);
                            (r = Math.abs(c * s) + Math.abs(f * l) + Math.abs(y * e)), (o = Math.abs(c * h) + Math.abs(f * u) + Math.abs(g * e));
                        } else (r = Math.abs(c * s) + Math.abs(f * l)), (o = Math.abs(c * h) + Math.abs(f * u));
                        return i || (i = new n(0, 0, 0, 0)), (i.x = p * s + d * l + a[4] - r), (i.y = p * h + d * u + a[5] - o), (i.width = r + r), (i.height = o + o), i;
                    }),
                    (t.prototype.toContext = function (t) {
                        if (!this.identity) {
                            var e = this.elements;
                            t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
                        }
                    }),
                    (t.flyweight = function (e) {
                        return e ? (e instanceof t ? t.matrix.setElements(e.elements) : t.matrix.setElements(e)) : t.matrix.setIdentityElements(), t.matrix;
                    }),
                    (t.matrix = new t()),
                    t
                );
            })();
        function o(t) {
            var e = t.constructor,
                i = e.className;
            if (!i) throw new Error("The " + e + " is missing the 'className' property.");
            return i + "-" + (e.id = (e.id || 0) + 1);
        }
        !(function (t) {
            (t[(t.All = 0)] = "All"), (t[(t.None = 1)] = "None");
        })(e || (e = {}));
        var a = (function () {
            function t() {
                (this.id = o(this)),
                    (this.tag = NaN),
                    (this.isContainerNode = !1),
                    (this._children = []),
                    (this.childSet = {}),
                    (this.matrix = new r()),
                    (this.inverseMatrix = new r()),
                    (this._dirtyTransform = !1),
                    (this._scalingX = 1),
                    (this._scalingY = 1),
                    (this._scalingCenterX = null),
                    (this._scalingCenterY = null),
                    (this._rotationCenterX = null),
                    (this._rotationCenterY = null),
                    (this._rotation = 0),
                    (this._translationX = 0),
                    (this._translationY = 0),
                    (this._dirty = !0),
                    (this._visible = !0),
                    (this.pointerEvents = e.All);
            }
            return (
                (t.isNode = function (t) {
                    return !!t && void 0 !== t.matrix;
                }),
                (t.prototype._setScene = function (t) {
                    this._scene = t;
                    for (var e = this.children, i = e.length, n = 0; n < i; n++) e[n]._setScene(t);
                }),
                Object.defineProperty(t.prototype, "scene", {
                    get: function () {
                        return this._scene;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._setParent = function (t) {
                    this._parent = t;
                }),
                Object.defineProperty(t.prototype, "parent", {
                    get: function () {
                        return this._parent;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "children", {
                    get: function () {
                        return this._children;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype.countChildren = function (e) {
                    if ((void 0 === e && (e = t.MAX_SAFE_INTEGER), e <= 0)) return 0;
                    for (var i = this.children, n = i.length, r = n, o = 0; o < n; o++) r += i[o].countChildren(e - 1);
                    return r;
                }),
                (t.prototype.append = function (e) {
                    t.isNode(e) && (e = [e]);
                    for (var i = e.length, n = 0; n < i; n++) {
                        var r = e[n];
                        if (r.parent) throw new Error(r + " already belongs to another parent: " + r.parent + ".");
                        if (r.scene) throw new Error(r + " already belongs a scene: " + r.scene + ".");
                        if (this.childSet[r.id]) throw new Error("Duplicate " + r.constructor.name + " node: " + r);
                        this._children.push(r), (this.childSet[r.id] = !0), r._setParent(this), r._setScene(this.scene);
                    }
                    this.dirty = !0;
                }),
                (t.prototype.appendChild = function (t) {
                    if (t.parent) throw new Error(t + " already belongs to another parent: " + t.parent + ".");
                    if (t.scene) throw new Error(t + " already belongs a scene: " + t.scene + ".");
                    if (this.childSet[t.id]) throw new Error("Duplicate " + t.constructor.name + " node: " + t);
                    return this._children.push(t), (this.childSet[t.id] = !0), t._setParent(this), t._setScene(this.scene), (this.dirty = !0), t;
                }),
                (t.prototype.removeChild = function (t) {
                    if (t.parent === this) {
                        var e = this.children.indexOf(t);
                        if (e >= 0) return this._children.splice(e, 1), delete this.childSet[t.id], t._setParent(void 0), t._setScene(void 0), (this.dirty = !0), t;
                    }
                    throw new Error("The node to be removed is not a child of this node.");
                }),
                (t.prototype.insertBefore = function (t, e) {
                    var i = t.parent;
                    if ((t.parent && t.parent.removeChild(t), e && e.parent === this)) {
                        var n = this.children.indexOf(e);
                        if (!(n >= 0)) throw new Error(e + " has " + i + " as the parent, but is not in its list of children.");
                        this._children.splice(n, 0, t), (this.childSet[t.id] = !0), t._setParent(this), t._setScene(this.scene), (this.dirty = !0);
                    } else this.append(t);
                    return t;
                }),
                Object.defineProperty(t.prototype, "nextSibling", {
                    get: function () {
                        var t = this.parent;
                        if (t) {
                            var e = t.children,
                                i = e.indexOf(this);
                            if (i >= 0 && i <= e.length - 1) return e[i + 1];
                        }
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype.transformPoint = function (t, e) {
                    for (var i = r.flyweight(this.matrix), n = this.parent; n; ) i.preMultiplySelf(n.matrix), (n = n.parent);
                    return i.invertSelf().transformPoint(t, e);
                }),
                (t.prototype.inverseTransformPoint = function (t, e) {
                    for (var i = r.flyweight(this.matrix), n = this.parent; n; ) i.preMultiplySelf(n.matrix), (n = n.parent);
                    return i.transformPoint(t, e);
                }),
                Object.defineProperty(t.prototype, "dirtyTransform", {
                    get: function () {
                        return this._dirtyTransform;
                    },
                    set: function (t) {
                        (this._dirtyTransform = t), t && (this.dirty = !0);
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "scalingX", {
                    get: function () {
                        return this._scalingX;
                    },
                    set: function (t) {
                        this._scalingX !== t && ((this._scalingX = t), (this.dirtyTransform = !0));
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "scalingY", {
                    get: function () {
                        return this._scalingY;
                    },
                    set: function (t) {
                        this._scalingY !== t && ((this._scalingY = t), (this.dirtyTransform = !0));
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "scalingCenterX", {
                    get: function () {
                        return this._scalingCenterX;
                    },
                    set: function (t) {
                        this._scalingCenterX !== t && ((this._scalingCenterX = t), (this.dirtyTransform = !0));
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "scalingCenterY", {
                    get: function () {
                        return this._scalingCenterY;
                    },
                    set: function (t) {
                        this._scalingCenterY !== t && ((this._scalingCenterY = t), (this.dirtyTransform = !0));
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "rotationCenterX", {
                    get: function () {
                        return this._rotationCenterX;
                    },
                    set: function (t) {
                        this._rotationCenterX !== t && ((this._rotationCenterX = t), (this.dirtyTransform = !0));
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "rotationCenterY", {
                    get: function () {
                        return this._rotationCenterY;
                    },
                    set: function (t) {
                        this._rotationCenterY !== t && ((this._rotationCenterY = t), (this.dirtyTransform = !0));
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "rotation", {
                    get: function () {
                        return this._rotation;
                    },
                    set: function (t) {
                        this._rotation !== t && ((this._rotation = t), (this.dirtyTransform = !0));
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "rotationDeg", {
                    get: function () {
                        return (this.rotation / Math.PI) * 180;
                    },
                    set: function (t) {
                        this.rotation = (t / 180) * Math.PI;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "translationX", {
                    get: function () {
                        return this._translationX;
                    },
                    set: function (t) {
                        this._translationX !== t && ((this._translationX = t), (this.dirtyTransform = !0));
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "translationY", {
                    get: function () {
                        return this._translationY;
                    },
                    set: function (t) {
                        this._translationY !== t && ((this._translationY = t), (this.dirtyTransform = !0));
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype.isPointInNode = function (t, e) {
                    return !1;
                }),
                (t.prototype.pickNode = function (t, i) {
                    if (this.visible && this.pointerEvents !== e.None && this.isPointInNode(t, i)) {
                        var n = this.children;
                        if (n.length)
                            for (var r = n.length - 1; r >= 0; r--) {
                                var o = n[r].pickNode(t, i);
                                if (o) return o;
                            }
                        else if (!this.isContainerNode) return this;
                    }
                }),
                (t.prototype.computeBBox = function () {}),
                (t.prototype.computeBBoxCenter = function () {
                    var t = this.computeBBox && this.computeBBox();
                    return t ? [t.x + 0.5 * t.width, t.y + 0.5 * t.height] : [0, 0];
                }),
                (t.prototype.computeTransformMatrix = function () {
                    var t,
                        e,
                        i = [0, 0],
                        n = i[0],
                        r = i[1],
                        o = this.scalingX,
                        a = this.scalingY;
                    1 === o && 1 === a ? ((t = 0), (e = 0)) : ((t = null === this.scalingCenterX ? n : this.scalingCenterX), (e = null === this.scalingCenterY ? r : this.scalingCenterY));
                    var s,
                        h,
                        l = this.rotation,
                        u = Math.cos(l),
                        c = Math.sin(l);
                    0 === l ? ((s = 0), (h = 0)) : ((s = null === this.rotationCenterX ? n : this.rotationCenterX), (h = null === this.rotationCenterY ? r : this.rotationCenterY));
                    var f = this.translationX,
                        p = this.translationY,
                        d = t * (1 - o) - s,
                        y = e * (1 - a) - h;
                    (this.dirtyTransform = !1), this.matrix.setElements([u * o, c * o, -c * a, u * a, u * d - c * y + s + f, c * d + u * y + h + p]).inverseTo(this.inverseMatrix);
                }),
                Object.defineProperty(t.prototype, "dirty", {
                    get: function () {
                        return this._dirty;
                    },
                    set: function (t) {
                        (this._dirty = t), t && (this.parent ? (this.parent.dirty = !0) : this.scene && (this.scene.dirty = !0));
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "visible", {
                    get: function () {
                        return this._visible;
                    },
                    set: function (t) {
                        this._visible !== t && ((this._visible = t), (this.dirty = !0));
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1),
                t
            );
        })();
        function s(t, e) {
            var i = Object.create(t);
            for (var n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
            return i;
        }
        var h,
            l =
                ((h = function (t, e) {
                    return (h =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(t, e);
                }),
                function (t, e) {
                    function i() {
                        this.constructor = t;
                    }
                    h(t, e), (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
                }),
            u = (function (t) {
                function e() {
                    var i = (null !== t && t.apply(this, arguments)) || this;
                    return (
                        (i.lastInstanceId = 0),
                        (i._fillOpacity = 1),
                        (i._strokeOpacity = 1),
                        (i._fill = e.defaultStyles.fill),
                        (i._stroke = e.defaultStyles.stroke),
                        (i._strokeWidth = e.defaultStyles.strokeWidth),
                        (i._lineDash = e.defaultStyles.lineDash),
                        (i._lineDashOffset = e.defaultStyles.lineDashOffset),
                        (i._lineCap = e.defaultStyles.lineCap),
                        (i._lineJoin = e.defaultStyles.lineJoin),
                        (i._opacity = e.defaultStyles.opacity),
                        (i.onShadowChange = function () {
                            i.dirty = !0;
                        }),
                        (i._fillShadow = e.defaultStyles.fillShadow),
                        (i._strokeShadow = e.defaultStyles.strokeShadow),
                        i
                    );
                }
                return (
                    l(e, t),
                    (e.createInstance = function (t) {
                        var e = Object.create(t);
                        return e._setParent(void 0), (e.id = t.id + "-Instance-" + String(++t.lastInstanceId)), e;
                    }),
                    (e.prototype.restoreOwnStyles = function () {
                        for (var t = this.constructor.defaultStyles, e = Object.getOwnPropertyNames(t), i = 0, n = e.length; i < n; i++) {
                            var r = e[i];
                            this[r] = t[r];
                        }
                    }),
                    (e.prototype.restoreAllStyles = function () {
                        var t = this.constructor.defaultStyles;
                        for (var e in t) this[e] = t[e];
                    }),
                    (e.prototype.restoreOverriddenStyles = function () {
                        var t = this.constructor.defaultStyles,
                            e = Object.getPrototypeOf(t);
                        for (var i in t) t.hasOwnProperty(i) && e.hasOwnProperty(i) && (this[i] = t[i]);
                    }),
                    Object.defineProperty(e.prototype, "fillOpacity", {
                        get: function () {
                            return this._fillOpacity;
                        },
                        set: function (t) {
                            this._fillOpacity !== t && ((this._fillOpacity = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "strokeOpacity", {
                        get: function () {
                            return this._strokeOpacity;
                        },
                        set: function (t) {
                            this._strokeOpacity !== t && ((this._strokeOpacity = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "fill", {
                        get: function () {
                            return this._fill;
                        },
                        set: function (t) {
                            this._fill !== t && ((this._fill = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "stroke", {
                        get: function () {
                            return this._stroke;
                        },
                        set: function (t) {
                            this._stroke !== t && ((this._stroke = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "strokeWidth", {
                        get: function () {
                            return this._strokeWidth;
                        },
                        set: function (t) {
                            this._strokeWidth !== t && ((this._strokeWidth = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "lineDash", {
                        get: function () {
                            return this._lineDash;
                        },
                        set: function (t) {
                            var e = this._lineDash;
                            if (e !== t) {
                                if (e && t && e.length === t.length) {
                                    for (var i = !0, n = t.length, r = 0; r < n; r++)
                                        if (e[r] !== t[r]) {
                                            i = !1;
                                            break;
                                        }
                                    if (i) return;
                                }
                                (this._lineDash = t), (this.dirty = !0);
                            }
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "lineDashOffset", {
                        get: function () {
                            return this._lineDashOffset;
                        },
                        set: function (t) {
                            this._lineDashOffset !== t && ((this._lineDashOffset = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "lineCap", {
                        get: function () {
                            return this._lineCap;
                        },
                        set: function (t) {
                            this._lineCap !== t && ((this._lineCap = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "lineJoin", {
                        get: function () {
                            return this._lineJoin;
                        },
                        set: function (t) {
                            this._lineJoin !== t && ((this._lineJoin = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "opacity", {
                        get: function () {
                            return this._opacity;
                        },
                        set: function (t) {
                            (t = Math.min(1, Math.max(0, t))), this._opacity !== t && ((this._opacity = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "fillShadow", {
                        get: function () {
                            return this._fillShadow;
                        },
                        set: function (t) {
                            var e = this._fillShadow;
                            e !== t && (e && e.removeEventListener("change", this.onShadowChange), t && t.addEventListener("change", this.onShadowChange), (this._fillShadow = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "strokeShadow", {
                        get: function () {
                            return this._strokeShadow;
                        },
                        set: function (t) {
                            var e = this._strokeShadow;
                            e !== t && (e && e.removeEventListener("change", this.onShadowChange), t && t.addEventListener("change", this.onShadowChange), (this._strokeShadow = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.fillStroke = function (t) {
                        var e = this.scene.canvas.pixelRatio || 1;
                        if (this.fill) {
                            (t.fillStyle = this.fill), (t.globalAlpha = this.opacity * this.fillOpacity);
                            var i = this.fillShadow;
                            i && i.enabled && ((t.shadowColor = i.color), (t.shadowOffsetX = i.xOffset * e), (t.shadowOffsetY = i.yOffset * e), (t.shadowBlur = i.blur * e)), t.fill();
                        }
                        if (((t.shadowColor = "rgba(0, 0, 0, 0)"), this.stroke && this.strokeWidth)) {
                            (t.strokeStyle = this.stroke),
                                (t.globalAlpha = this.opacity * this.strokeOpacity),
                                (t.lineWidth = this.strokeWidth),
                                this.lineDash && t.setLineDash(this.lineDash),
                                this.lineDashOffset && (t.lineDashOffset = this.lineDashOffset),
                                this.lineCap && (t.lineCap = this.lineCap),
                                this.lineJoin && (t.lineJoin = this.lineJoin);
                            var n = this.strokeShadow;
                            n && n.enabled && ((t.shadowColor = n.color), (t.shadowOffsetX = n.xOffset * e), (t.shadowOffsetY = n.yOffset * e), (t.shadowBlur = n.blur * e)), t.stroke();
                        }
                    }),
                    (e.prototype.isPointInNode = function (t, e) {
                        return this.isPointInPath(t, e);
                    }),
                    (e.defaultStyles = s({}, { fill: "black", stroke: void 0, strokeWidth: 0, lineDash: void 0, lineDashOffset: 0, lineCap: void 0, lineJoin: void 0, opacity: 1, fillShadow: void 0, strokeShadow: void 0 })),
                    e
                );
            })(a),
            c = (function () {
                function t(t, e, i) {
                    void 0 === t && (t = window.document),
                        void 0 === e && (e = 600),
                        void 0 === i && (i = 300),
                        (this._container = void 0),
                        (this._pixelRatio = NaN),
                        (this.document = t),
                        (this.element = t.createElement("canvas")),
                        (this.element.style.userSelect = "none"),
                        (this.element.style.display = "block"),
                        (this.context = this.element.getContext("2d")),
                        this.updatePixelRatio(0, !1),
                        this.resize((this._width = e), (this._height = i));
                }
                return (
                    Object.defineProperty(t.prototype, "container", {
                        get: function () {
                            return this._container;
                        },
                        set: function (t) {
                            this._container !== t && (this.remove(), t && t.appendChild(this.element), (this._container = t));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.remove = function () {
                        var t = this.element.parentNode;
                        null != t && t.removeChild(this.element);
                    }),
                    (t.prototype.destroy = function () {
                        this.element.remove(), (this._canvas = void 0), Object.freeze(this);
                    }),
                    (t.prototype.toImage = function () {
                        var t = this.document.createElement("img");
                        return (t.src = this.getDataURL()), t;
                    }),
                    (t.prototype.getDataURL = function (t) {
                        return this.element.toDataURL(t);
                    }),
                    (t.prototype.download = function (t) {
                        t = ((t || "").trim() || "image") + ".png";
                        var e = this.getDataURL("image/png"),
                            i = this.document;
                        if (navigator.msSaveOrOpenBlob) {
                            for (var n = atob(e.split(",")[1]), r = [], o = 0, a = n.length; o < a; o++) r.push(n.charCodeAt(o));
                            var s = new Blob([new Uint8Array(r)], { type: "image/png" });
                            navigator.msSaveOrOpenBlob(s, t);
                        } else {
                            var h = i.createElement("a");
                            (h.href = e), (h.download = t), (h.style.display = "none"), i.body.appendChild(h), h.click(), i.body.removeChild(h);
                        }
                    }),
                    Object.defineProperty(t.prototype, "pixelRatio", {
                        get: function () {
                            return this._pixelRatio;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.updatePixelRatio = function (e, i) {
                        void 0 === e && (e = 0), void 0 === i && (i = !0);
                        var n = e || window.devicePixelRatio;
                        if (n !== this.pixelRatio) {
                            var r = this.element,
                                o = this.context,
                                a = t.makeHdpiOverrides(n);
                            for (var s in a) a.hasOwnProperty(s) && (o["$" + s] || (o["$" + s] = o[s]), (o[s] = a[s]));
                            if (i) {
                                var h = r.width / this.pixelRatio,
                                    l = r.height / this.pixelRatio;
                                (r.width = Math.round(h * n)), (r.height = Math.round(l * n)), (r.style.width = Math.round(h) + "px"), (r.style.height = Math.round(l) + "px"), o.resetTransform();
                            }
                            this._pixelRatio = n;
                        }
                    }),
                    Object.defineProperty(t.prototype, "width", {
                        get: function () {
                            return this._width;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "height", {
                        get: function () {
                            return this._height;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.resize = function (t, e, i) {
                        var n = this;
                        (this._width = t),
                            (this._height = e),
                            requestAnimationFrame(function () {
                                var r = n,
                                    o = r.element,
                                    a = r.context,
                                    s = r.pixelRatio;
                                (o.width = Math.round(t * s)), (o.height = Math.round(e * s)), (o.style.width = Math.round(t) + "px"), (o.style.height = Math.round(e) + "px"), a.resetTransform(), i && i();
                            });
                    }),
                    Object.defineProperty(t, "textMeasuringContext", {
                        get: function () {
                            if (this._textMeasuringContext) return this._textMeasuringContext;
                            var t = document.createElement("canvas");
                            return (this._textMeasuringContext = t.getContext("2d"));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t, "svgText", {
                        get: function () {
                            if (this._svgText) return this._svgText;
                            var t = "http://www.w3.org/2000/svg",
                                e = document.createElementNS(t, "svg");
                            e.setAttribute("width", "100"),
                                e.setAttribute("height", "100"),
                                e.classList ? e.classList.add("text-measuring-svg") : e.setAttribute("class", "text-measuring-svg"),
                                (e.style.position = "absolute"),
                                (e.style.top = "-1000px"),
                                (e.style.visibility = "hidden");
                            var i = document.createElementNS(t, "text");
                            return i.setAttribute("x", "0"), i.setAttribute("y", "30"), i.setAttribute("text", "black"), e.appendChild(i), document.body.appendChild(e), (this._svgText = i), i;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t, "has", {
                        get: function () {
                            return this._has
                                ? this._has
                                : (this._has = Object.freeze({
                                      textMetrics: void 0 !== this.textMeasuringContext.measureText("test").actualBoundingBoxDescent && !/Firefox\/\d+(.\d)+/.test(window.navigator.userAgent),
                                      getTransform: void 0 !== this.textMeasuringContext.getTransform,
                                  }));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.measureText = function (t, e, i, n) {
                        var r = this.textMeasuringContext;
                        return (r.font = e), (r.textBaseline = i), (r.textAlign = n), r.measureText(t);
                    }),
                    (t.getTextSize = function (t, e) {
                        if (this.has.textMetrics) {
                            var i = this.textMeasuringContext;
                            i.font = e;
                            var n = i.measureText(t);
                            return { width: n.width, height: n.actualBoundingBoxAscent + n.actualBoundingBoxDescent };
                        }
                        return this.measureSvgText(t, e);
                    }),
                    (t.measureSvgText = function (t, e) {
                        var i = this.textSizeCache,
                            n = i[e];
                        if (n) {
                            var r = n[t];
                            if (r) return r;
                        } else i[e] = {};
                        var o = this.svgText;
                        (o.style.font = e), (o.textContent = t);
                        var a = o.getBBox(),
                            s = { width: a.width, height: a.height };
                        return (i[e][t] = s), s;
                    }),
                    (t.makeHdpiOverrides = function (t) {
                        var e = 0;
                        return {
                            save: function () {
                                this.$save(), e++;
                            },
                            restore: function () {
                                e > 0 && (this.$restore(), e--);
                            },
                            setTransform: function (e, i, n, r, o, a) {
                                this.$setTransform(e * t, i * t, n * t, r * t, o * t, a * t);
                            },
                            resetTransform: function () {
                                this.$setTransform(t, 0, 0, t, 0, 0), this.save(), (e = 0);
                            },
                        };
                    }),
                    (t.textSizeCache = {}),
                    t
                );
            })(),
            f = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            p = (function (t) {
                function e() {
                    var i = (null !== t && t.apply(this, arguments)) || this;
                    return (
                        (i._x = 0),
                        (i._y = 0),
                        (i.lineBreakRegex = /\r?\n/g),
                        (i.lines = []),
                        (i._text = ""),
                        (i._dirtyFont = !0),
                        (i._fontSize = 10),
                        (i._fontFamily = "sans-serif"),
                        (i._textAlign = e.defaultStyles.textAlign),
                        (i._textBaseline = e.defaultStyles.textBaseline),
                        (i._lineHeight = 14),
                        i
                    );
                }
                return (
                    f(e, t),
                    Object.defineProperty(e.prototype, "x", {
                        get: function () {
                            return this._x;
                        },
                        set: function (t) {
                            this._x !== t && ((this._x = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "y", {
                        get: function () {
                            return this._y;
                        },
                        set: function (t) {
                            this._y !== t && ((this._y = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.splitText = function () {
                        this.lines = this._text.split(this.lineBreakRegex);
                    }),
                    Object.defineProperty(e.prototype, "text", {
                        get: function () {
                            return this._text;
                        },
                        set: function (t) {
                            var e = String(t);
                            this._text !== e && ((this._text = e), this.splitText(), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "font", {
                        get: function () {
                            return this.dirtyFont && ((this.dirtyFont = !1), (this._font = [this.fontStyle || "", this.fontWeight || "", this.fontSize + "px", this.fontFamily].join(" ").trim())), this._font;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "dirtyFont", {
                        get: function () {
                            return this._dirtyFont;
                        },
                        set: function (t) {
                            this._dirtyFont !== t && ((this._dirtyFont = t), t && (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "fontStyle", {
                        get: function () {
                            return this._fontStyle;
                        },
                        set: function (t) {
                            this._fontStyle !== t && ((this._fontStyle = t), (this.dirtyFont = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "fontWeight", {
                        get: function () {
                            return this._fontWeight;
                        },
                        set: function (t) {
                            this._fontWeight !== t && ((this._fontWeight = t), (this.dirtyFont = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "fontSize", {
                        get: function () {
                            return this._fontSize;
                        },
                        set: function (t) {
                            isFinite(t) || (t = 10), this._fontSize !== t && ((this._fontSize = t), (this.dirtyFont = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "fontFamily", {
                        get: function () {
                            return this._fontFamily;
                        },
                        set: function (t) {
                            this._fontFamily !== t && ((this._fontFamily = t), (this.dirtyFont = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "textAlign", {
                        get: function () {
                            return this._textAlign;
                        },
                        set: function (t) {
                            this._textAlign !== t && ((this._textAlign = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "textBaseline", {
                        get: function () {
                            return this._textBaseline;
                        },
                        set: function (t) {
                            this._textBaseline !== t && ((this._textBaseline = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "lineHeight", {
                        get: function () {
                            return this._lineHeight;
                        },
                        set: function (t) {
                            this._lineHeight !== t && ((this._lineHeight = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.computeBBox = function () {
                        return c.has.textMetrics ? this.getPreciseBBox() : this.getApproximateBBox();
                    }),
                    (e.prototype.getPreciseBBox = function () {
                        var t = c.measureText(this.text, this.font, this.textBaseline, this.textAlign);
                        return new n(this.x - t.actualBoundingBoxLeft, this.y - t.actualBoundingBoxAscent, t.width, t.actualBoundingBoxAscent + t.actualBoundingBoxDescent);
                    }),
                    (e.prototype.getApproximateBBox = function () {
                        var t = c.getTextSize(this.text, this.font),
                            e = this.x,
                            i = this.y;
                        switch (this.textAlign) {
                            case "end":
                            case "right":
                                e -= t.width;
                                break;
                            case "center":
                                e -= t.width / 2;
                        }
                        switch (this.textBaseline) {
                            case "alphabetic":
                                i -= 0.7 * t.height;
                                break;
                            case "middle":
                                i -= 0.45 * t.height;
                                break;
                            case "ideographic":
                                i -= t.height;
                                break;
                            case "hanging":
                                i -= 0.2 * t.height;
                                break;
                            case "bottom":
                                i -= t.height;
                        }
                        return new n(e, i, t.width, t.height);
                    }),
                    (e.prototype.isPointInPath = function (t, e) {
                        var i = this.transformPoint(t, e),
                            n = this.computeBBox();
                        return !!n && n.containsPoint(i.x, i.y);
                    }),
                    (e.prototype.isPointInStroke = function (t, e) {
                        return !1;
                    }),
                    (e.prototype.render = function (t) {
                        if (this.lines.length) {
                            this.dirtyTransform && this.computeTransformMatrix(), this.matrix.toContext(t);
                            var e = this.opacity,
                                i = this.fill,
                                n = this.stroke,
                                r = this.strokeWidth;
                            e < 1 && (t.globalAlpha = e), (t.font = this.font), (t.textAlign = this.textAlign), (t.textBaseline = this.textBaseline);
                            var o = this.scene.canvas.pixelRatio || 1;
                            if (i) {
                                t.fillStyle = i;
                                var a = this.fillShadow,
                                    s = this.text,
                                    h = this.x,
                                    l = this.y;
                                a && a.enabled && ((t.shadowColor = a.color), (t.shadowOffsetX = a.xOffset * o), (t.shadowOffsetY = a.yOffset * o), (t.shadowBlur = a.blur * o)), t.fillText(s, h, l);
                            }
                            if (n && r) {
                                (t.strokeStyle = n), (t.lineWidth = r);
                                var u = this,
                                    c = u.lineDash,
                                    f = u.lineDashOffset,
                                    p = u.lineCap,
                                    d = u.lineJoin,
                                    y = u.strokeShadow;
                                (s = u.text),
                                    (h = u.x),
                                    (l = u.y),
                                    c && t.setLineDash(c),
                                    f && (t.lineDashOffset = f),
                                    p && (t.lineCap = p),
                                    d && (t.lineJoin = d),
                                    y && y.enabled && ((t.shadowColor = y.color), (t.shadowOffsetX = y.xOffset * o), (t.shadowOffsetY = y.yOffset * o), (t.shadowBlur = y.blur * o)),
                                    t.strokeText(s, h, l);
                            }
                            this.dirty = !1;
                        }
                    }),
                    (e.className = "Text"),
                    (e.defaultStyles = s(u.defaultStyles, { textAlign: "start", fontStyle: void 0, fontWeight: void 0, fontSize: 10, fontFamily: "sans-serif", textBaseline: "alphabetic" })),
                    e
                );
            })(u),
            d = function () {
                return (d =
                    Object.assign ||
                    function (t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++) for (var r in (e = arguments[i])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t;
                    }).apply(this, arguments);
            },
            y = (function () {
                function t() {
                    (this.allPropertyListeners = new Map()), (this.allEventListeners = new Map());
                }
                return (
                    (t.prototype.addPropertyListener = function (t, e, i) {
                        void 0 === i && (i = this);
                        var n = this.allPropertyListeners,
                            r = n.get(t);
                        if ((r || ((r = new Map()), n.set(t, r)), !r.has(e))) {
                            var o = new Set();
                            r.set(e, o);
                        }
                        r.get(e).add(i);
                    }),
                    (t.prototype.removePropertyListener = function (t, e, i) {
                        void 0 === i && (i = this);
                        var n = this.allPropertyListeners.get(t);
                        if (n)
                            if (e) {
                                var r = n.get(e);
                                r.delete(i), r.size || n.delete(e);
                            } else n.clear();
                    }),
                    (t.prototype.notifyPropertyListeners = function (t, e, i) {
                        var n = this,
                            r = this.allPropertyListeners.get(t);
                        r &&
                            r.forEach(function (r, o) {
                                r.forEach(function (r) {
                                    return o.call(r, { type: t, source: n, value: i, oldValue: e });
                                });
                            });
                    }),
                    (t.prototype.addEventListener = function (t, e, i) {
                        void 0 === i && (i = this);
                        var n = this.allEventListeners,
                            r = n.get(t);
                        if ((r || ((r = new Map()), n.set(t, r)), !r.has(e))) {
                            var o = new Set();
                            r.set(e, o);
                        }
                        r.get(e).add(i);
                    }),
                    (t.prototype.removeEventListener = function (t, e, i) {
                        void 0 === i && (i = this);
                        var n = this.allEventListeners.get(t);
                        if (n)
                            if (e) {
                                var r = n.get(e);
                                r.delete(i), r.size || n.delete(e);
                            } else n.clear();
                    }),
                    (t.prototype.notifyEventListeners = function (t) {
                        var e = this,
                            i = this.allEventListeners;
                        t.forEach(function (t) {
                            var n = i.get(t);
                            n &&
                                n.forEach(function (i, n) {
                                    i.forEach(function (i) {
                                        return n.call(i, { type: t, source: e });
                                    });
                                });
                        });
                    }),
                    (t.prototype.fireEvent = function (t) {
                        var e = this,
                            i = this.allEventListeners.get(t.type);
                        i &&
                            i.forEach(function (i, n) {
                                i.forEach(function (i) {
                                    return n.call(i, d(d({}, t), { source: e }));
                                });
                            });
                    }),
                    (t.privateKeyPrefix = "_"),
                    t
                );
            })();
        function g() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return function (e, i) {
                var n = y.privateKeyPrefix + i,
                    r = n + "Events";
                e[i] ||
                    (t && (e[r] = t),
                    Object.defineProperty(e, i, {
                        set: function (t) {
                            var e;
                            if ((e = this[n]) !== t || ("object" == typeof t && null !== t)) {
                                (this[n] = t), this.notifyPropertyListeners(i, e, t);
                                var o = this[r];
                                o && this.notifyEventListeners(o);
                            }
                        },
                        get: function () {
                            return this[n];
                        },
                        enumerable: !0,
                        configurable: !0,
                    }));
            };
        }
        var m = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            v = function (t, e, i, n) {
                var r,
                    o = arguments.length,
                    a = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a;
            },
            b = (function (t) {
                function n() {
                    var n = t.call(this) || this;
                    (n.node = new p()), (n.enabled = !0), (n.padding = new i(10));
                    var r = n.node;
                    return (r.textAlign = "center"), (r.textBaseline = "top"), (r.pointerEvents = e.None), n;
                }
                return (
                    m(n, t),
                    Object.defineProperty(n.prototype, "text", {
                        get: function () {
                            return this.node.text;
                        },
                        set: function (t) {
                            this.node.text !== t && ((this.node.text = t), this.fireEvent({ type: "change" }));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "fontStyle", {
                        get: function () {
                            return this.node.fontStyle;
                        },
                        set: function (t) {
                            this.node.fontStyle !== t && ((this.node.fontStyle = t), this.fireEvent({ type: "change" }));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "fontWeight", {
                        get: function () {
                            return this.node.fontWeight;
                        },
                        set: function (t) {
                            this.node.fontWeight !== t && ((this.node.fontWeight = t), this.fireEvent({ type: "change" }));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "fontSize", {
                        get: function () {
                            return this.node.fontSize;
                        },
                        set: function (t) {
                            this.node.fontSize !== t && ((this.node.fontSize = t), this.fireEvent({ type: "change" }));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "fontFamily", {
                        get: function () {
                            return this.node.fontFamily;
                        },
                        set: function (t) {
                            this.node.fontFamily !== t && ((this.node.fontFamily = t), this.fireEvent({ type: "change" }));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "color", {
                        get: function () {
                            return this.node.fill;
                        },
                        set: function (t) {
                            this.node.fill !== t && ((this.node.fill = t), this.fireEvent({ type: "change" }));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    v([g("change")], n.prototype, "enabled", void 0),
                    v([g("change")], n.prototype, "padding", void 0),
                    n
                );
            })(y),
            x = (function () {
                function t() {
                    (this.index = new Map()), (this.ordinalRange = []), (this._domain = []), (this._range = [0, 1]), (this._bandwidth = 1), (this._paddingInner = 0), (this._paddingOuter = 0), (this._round = !1), (this._align = 0.5);
                }
                return (
                    Object.defineProperty(t.prototype, "domain", {
                        get: function () {
                            return this._domain;
                        },
                        set: function (t) {
                            var e = this._domain;
                            (e.length = 0), (this.index = new Map());
                            var i = this.index;
                            t.forEach(function (t) {
                                void 0 === i.get(t) && i.set(t, e.push(t) - 1);
                            }),
                                this.rescale();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "range", {
                        get: function () {
                            return this._range;
                        },
                        set: function (t) {
                            (this._range[0] = t[0]), (this._range[1] = t[1]), this.rescale();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.ticks = function () {
                        return this._domain;
                    }),
                    (t.prototype.convert = function (t) {
                        var e = this.index.get(t);
                        if (void 0 === e) return NaN;
                        var i = this.ordinalRange[e];
                        return void 0 === i ? NaN : i;
                    }),
                    Object.defineProperty(t.prototype, "bandwidth", {
                        get: function () {
                            return this._bandwidth;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "padding", {
                        get: function () {
                            return this._paddingInner;
                        },
                        set: function (t) {
                            (t = Math.max(0, Math.min(1, t))), (this._paddingInner = t), (this._paddingOuter = t), this.rescale();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "paddingInner", {
                        get: function () {
                            return this._paddingInner;
                        },
                        set: function (t) {
                            (this._paddingInner = Math.max(0, Math.min(1, t))), this.rescale();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "paddingOuter", {
                        get: function () {
                            return this._paddingOuter;
                        },
                        set: function (t) {
                            (this._paddingOuter = Math.max(0, Math.min(1, t))), this.rescale();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "round", {
                        get: function () {
                            return this._round;
                        },
                        set: function (t) {
                            (this._round = t), this.rescale();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "align", {
                        get: function () {
                            return this._align;
                        },
                        set: function (t) {
                            (this._align = Math.max(0, Math.min(1, t))), this.rescale();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.rescale = function () {
                        var t,
                            e = this._domain.length;
                        if (e) {
                            var i = this._range,
                                n = i[0],
                                r = i[1],
                                o = r < n;
                            o && ((n = (t = [r, n])[0]), (r = t[1]));
                            var a = (r - n) / Math.max(1, e - this._paddingInner + 2 * this._paddingOuter);
                            this._round && (a = Math.floor(a)),
                                (n += (r - n - a * (e - this._paddingInner)) * this._align),
                                (this._bandwidth = a * (1 - this._paddingInner)),
                                this._round && ((n = Math.round(n)), (this._bandwidth = Math.round(this._bandwidth)));
                            for (var s = [], h = 0; h < e; h++) s.push(n + a * h);
                            this.ordinalRange = o ? s.reverse() : s;
                        }
                    }),
                    t
                );
            })(),
            _ = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            k = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.isContainerNode = !0), e;
                }
                return (
                    _(e, t),
                    (e.prototype.isPointInNode = function (t, e) {
                        return !0;
                    }),
                    (e.prototype.computeBBox = function () {
                        var t = 1 / 0,
                            i = -1 / 0,
                            o = 1 / 0,
                            a = -1 / 0;
                        return (
                            this.dirtyTransform && this.computeTransformMatrix(),
                            this.children.forEach(function (n) {
                                if (n.visible) {
                                    var s = n.computeBBox();
                                    if (s) {
                                        if (!(n instanceof e)) {
                                            n.dirtyTransform && n.computeTransformMatrix();
                                            for (var h = r.flyweight(n.matrix), l = n.parent; l; ) h.preMultiplySelf(l.matrix), (l = l.parent);
                                            h.transformBBox(s, 0, s);
                                        }
                                        var u = s.x,
                                            c = s.y;
                                        u < t && (t = u), c < o && (o = c), u + s.width > i && (i = u + s.width), c + s.height > a && (a = c + s.height);
                                    }
                                }
                            }),
                            new n(t, o, i - t, a - o)
                        );
                    }),
                    (e.prototype.render = function (t) {
                        this.dirtyTransform && this.computeTransformMatrix(), this.matrix.toContext(t);
                        for (var e = this.children, i = e.length, n = 0; n < i; n++) {
                            t.save();
                            var r = e[n];
                            r.visible && r.render(t), t.restore();
                        }
                    }),
                    (e.className = "Group"),
                    e
                );
            })(a),
            w = (function () {
                function t(t, e) {
                    (this.next = null), (this.scene = t.scene), (this.parent = t), (this.datum = e);
                }
                return (
                    (t.prototype.appendChild = function (t) {
                        if (null === this.next) return this.parent.insertBefore(t, null);
                        if (!a.isNode(this.next)) throw new Error(this.next + " is not a Node.");
                        return this.parent.insertBefore(t, this.next);
                    }),
                    (t.prototype.insertBefore = function (t, e) {
                        return this.parent.insertBefore(t, e);
                    }),
                    t
                );
            })(),
            S = (function () {
                function t(t, e) {
                    (this.groups = t), (this.parents = e);
                }
                return (
                    (t.select = function (e) {
                        return new t([["function" == typeof e ? e() : e]], [void 0]);
                    }),
                    (t.selectAll = function (e) {
                        return new t([null == e ? [] : e], [void 0]);
                    }),
                    (t.prototype.append = function (t) {
                        return this.select(function (e) {
                            return e.appendChild(new t());
                        });
                    }),
                    (t.prototype.appendFn = function (t) {
                        return this.select(function (e, i, n, r) {
                            return e.appendChild(t(e, i, n, r));
                        });
                    }),
                    (t.prototype.select = function (e) {
                        for (var i = this.groups, n = i.length, r = [], o = 0; o < n; o++)
                            for (var a = i[o], s = a.length, h = (r[o] = new Array(s)), l = 0; l < s; l++) {
                                var u = a[l];
                                if (u) {
                                    var c = e(u, u.datum, l, a);
                                    c && (c.datum = u.datum), (h[l] = c);
                                }
                            }
                        return new t(r, this.parents);
                    }),
                    (t.prototype.selectByClass = function (t) {
                        return this.select(function (e) {
                            if (a.isNode(e))
                                for (var i = e.children, n = i.length, r = 0; r < n; r++) {
                                    var o = i[r];
                                    if (o instanceof t) return o;
                                }
                        });
                    }),
                    (t.prototype.selectByTag = function (t) {
                        return this.select(function (e) {
                            if (a.isNode(e))
                                for (var i = e.children, n = i.length, r = 0; r < n; r++) {
                                    var o = i[r];
                                    if (o.tag === t) return o;
                                }
                        });
                    }),
                    (t.prototype.selectAllByClass = function (t) {
                        return this.selectAll(function (e) {
                            var i = [];
                            if (a.isNode(e))
                                for (var n = e.children, r = n.length, o = 0; o < r; o++) {
                                    var s = n[o];
                                    s instanceof t && i.push(s);
                                }
                            return i;
                        });
                    }),
                    (t.prototype.selectAllByTag = function (t) {
                        return this.selectAll(function (e) {
                            var i = [];
                            if (a.isNode(e))
                                for (var n = e.children, r = n.length, o = 0; o < r; o++) {
                                    var s = n[o];
                                    s.tag === t && i.push(s);
                                }
                            return i;
                        });
                    }),
                    (t.prototype.selectNone = function () {
                        return [];
                    }),
                    (t.prototype.selectAll = function (e) {
                        e || (e = this.selectNone);
                        for (var i = [], n = [], r = this.groups, o = r.length, a = 0; a < o; a++)
                            for (var s = r[a], h = s.length, l = 0; l < h; l++) {
                                var u = s[l];
                                u && (i.push(e(u, u.datum, l, s)), n.push(u));
                            }
                        return new t(i, n);
                    }),
                    (t.prototype.each = function (t) {
                        for (var e = this.groups, i = e.length, n = 0; n < i; n++)
                            for (var r = e[n], o = r.length, a = 0; a < o; a++) {
                                var s = r[a];
                                s && t(s, s.datum, a, r);
                            }
                        return this;
                    }),
                    (t.prototype.remove = function () {
                        return this.each(function (t) {
                            if (a.isNode(t)) {
                                var e = t.parent;
                                e && e.removeChild(t);
                            }
                        });
                    }),
                    (t.prototype.merge = function (e) {
                        for (var i = this.groups, n = e.groups, r = i.length, o = n.length, a = Math.min(r, o), s = new Array(r), h = 0; h < a; h++)
                            for (var l = i[h], u = n[h], c = l.length, f = (s[h] = new Array(c)), p = 0; p < c; p++) {
                                var d = l[p] || u[p];
                                f[p] = d || void 0;
                            }
                        for (; h < r; h++) s[h] = i[h];
                        return new t(s, this.parents);
                    }),
                    (t.prototype.node = function () {
                        for (var t = this.groups, e = t.length, i = 0; i < e; i++)
                            for (var n = t[i], r = n.length, o = 0; o < r; o++) {
                                var a = n[o];
                                if (a) return a;
                            }
                        return null;
                    }),
                    (t.prototype.attr = function (t, e) {
                        return (
                            this.each(function (i) {
                                i[t] = e;
                            }),
                            this
                        );
                    }),
                    (t.prototype.attrFn = function (t, e) {
                        return (
                            this.each(function (i, n, r, o) {
                                i[t] = e(i, n, r, o);
                            }),
                            this
                        );
                    }),
                    (t.prototype.call = function (t) {
                        return t(this), this;
                    }),
                    Object.defineProperty(t.prototype, "size", {
                        get: function () {
                            var t = 0;
                            return (
                                this.each(function () {
                                    return t++;
                                }),
                                t
                            );
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "data", {
                        get: function () {
                            var t = [];
                            return (
                                this.each(function (e, i) {
                                    return t.push(i);
                                }),
                                t
                            );
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "enter", {
                        get: function () {
                            return new t(this.enterGroups ? this.enterGroups : [[]], this.parents);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "exit", {
                        get: function () {
                            return new t(this.exitGroups ? this.exitGroups : [[]], this.parents);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.setDatum = function (t) {
                        return this.each(function (e) {
                            e.datum = t;
                        });
                    }),
                    Object.defineProperty(t.prototype, "datum", {
                        get: function () {
                            var t = this.node();
                            return t ? t.datum : null;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.setData = function (e, i) {
                        if ("function" != typeof e) {
                            var n = e;
                            e = function () {
                                return n;
                            };
                        }
                        for (var r = this.groups, o = this.parents, a = r.length, s = new Array(a), h = new Array(a), l = new Array(a), u = 0; u < a; u++) {
                            var c = r[u],
                                f = o[u];
                            if (!f) throw new Error("Group #" + u + " has no parent: " + c);
                            var p = c.length,
                                d = e(f, f.datum, u, o),
                                y = d.length,
                                g = (h[u] = new Array(y)),
                                m = (s[u] = new Array(y)),
                                v = (l[u] = new Array(p));
                            i ? this.bindKey(f, c, g, m, v, d, i) : this.bindIndex(f, c, g, m, v, d);
                            for (var b = 0, x = 0; b < y; b++) {
                                var _ = g[b];
                                if (_) {
                                    b >= x && (x = b + 1);
                                    for (var k = void 0; !(k = m[x]) && x < y; ) x++;
                                    _.next = k || null;
                                }
                            }
                        }
                        var w = new t(s, o);
                        return (w.enterGroups = h), (w.exitGroups = l), w;
                    }),
                    (t.prototype.bindIndex = function (t, e, i, n, r, o) {
                        for (var a = e.length, s = o.length, h = 0; h < s; h++) (l = e[h]) ? ((l.datum = o[h]), (n[h] = l)) : (i[h] = new w(t, o[h]));
                        for (; h < a; h++) {
                            var l;
                            (l = e[h]) && (r[h] = l);
                        }
                    }),
                    (t.prototype.bindKey = function (e, i, n, r, o, a, s) {
                        for (var h = i.length, l = a.length, u = new Array(h), c = {}, f = 0; f < h; f++) (d = i[f]) && ((p = u[f] = t.keyPrefix + s(d, d.datum, f, i)) in c ? (o[f] = d) : (c[p] = d));
                        for (f = 0; f < l; f++) {
                            var p;
                            (d = c[(p = t.keyPrefix + s(e, a[f], f, a))]) ? ((r[f] = d), (d.datum = a[f]), (c[p] = void 0)) : (n[f] = new w(e, a[f]));
                        }
                        for (f = 0; f < h; f++) {
                            var d;
                            (d = i[f]) && c[u[f]] === d && (o[f] = d);
                        }
                    }),
                    (t.keyPrefix = "$"),
                    t
                );
            })(),
            O = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            P = (function (t) {
                function e() {
                    var e = t.call(this) || this;
                    return (e._x1 = 0), (e._y1 = 0), (e._x2 = 0), (e._y2 = 0), e.restoreOwnStyles(), e;
                }
                return (
                    O(e, t),
                    Object.defineProperty(e.prototype, "x1", {
                        get: function () {
                            return this._x1;
                        },
                        set: function (t) {
                            this._x1 !== t && ((this._x1 = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "y1", {
                        get: function () {
                            return this._y1;
                        },
                        set: function (t) {
                            this._y1 !== t && ((this._y1 = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "x2", {
                        get: function () {
                            return this._x2;
                        },
                        set: function (t) {
                            this._x2 !== t && ((this._x2 = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "y2", {
                        get: function () {
                            return this._y2;
                        },
                        set: function (t) {
                            this._y2 !== t && ((this._y2 = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.computeBBox = function () {
                        return new n(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
                    }),
                    (e.prototype.isPointInPath = function (t, e) {
                        return !1;
                    }),
                    (e.prototype.isPointInStroke = function (t, e) {
                        return !1;
                    }),
                    (e.prototype.render = function (t) {
                        this.dirtyTransform && this.computeTransformMatrix(), this.matrix.toContext(t);
                        var e = this.x1,
                            i = this.y1,
                            n = this.x2,
                            r = this.y2;
                        if (e === n) {
                            var o = Math.round(e) + (Math.floor(this.strokeWidth) % 2) / 2;
                            (e = o), (n = o);
                        } else if (i === r) {
                            var a = Math.round(i) + (Math.floor(this.strokeWidth) % 2) / 2;
                            (i = a), (r = a);
                        }
                        t.beginPath(), t.moveTo(e, i), t.lineTo(n, r), this.fillStroke(t), (this.dirty = !1);
                    }),
                    (e.className = "Line"),
                    (e.defaultStyles = s(u.defaultStyles, { fill: void 0, strokeWidth: 1 })),
                    e
                );
            })(u),
            C = 2 * Math.PI;
        function D(t) {
            return (t %= C), (t += C), (t %= C);
        }
        function A(t) {
            return (t %= C), (t += C) !== C && (t %= C), t;
        }
        function E(t) {
            return (t %= C) < -Math.PI ? (t += C) : t >= Math.PI && (t -= C), t;
        }
        function M(t) {
            return (t / 180) * Math.PI;
        }
        var T = Math.sign
            ? Math.sign
            : function (t) {
                  return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
              };
        function j(t, e, i, n) {
            if (0 === t)
                return (function (t, e, i) {
                    if (0 === t)
                        return (function (t, e) {
                            var i = -e / t;
                            return 0 !== t && i >= 0 && i <= 1 ? [i] : [];
                        })(e, i);
                    var n = e * e - 4 * t * i,
                        r = [];
                    if (0 === n) {
                        var o = -e / (2 * t);
                        o >= 0 && o <= 1 && r.push(o);
                    } else if (n > 0) {
                        var a = Math.sqrt(n),
                            s = (-e - a) / (2 * t),
                            h = (-e + a) / (2 * t);
                        s >= 0 && s <= 1 && r.push(s), h >= 0 && h <= 1 && r.push(h);
                    }
                    return r;
                })(e, i, n);
            var r = e / t,
                o = i / t,
                a = (3 * o - r * r) / 9,
                s = (9 * r * o - (n / t) * 27 - 2 * r * r * r) / 54,
                h = a * a * a + s * s,
                l = [];
            if (h >= 0) {
                var u = Math.sqrt(h),
                    c = T(s + u) * Math.pow(Math.abs(s + u), 1 / 3),
                    f = T(s - u) * Math.pow(Math.abs(s - u), 1 / 3),
                    p = Math.abs((Math.sqrt(3) * (c - f)) / 2),
                    d = (-1 / 3) * r + (c + f);
                if ((d >= 0 && d <= 1 && l.push(d), 0 === p)) {
                    var y = (-1 / 3) * r - (c + f) / 2;
                    y >= 0 && y <= 1 && l.push(y);
                }
            } else {
                var g = Math.acos(s / Math.sqrt(-a * a * a)),
                    m = (1 / 3) * r,
                    v = 2 * Math.sqrt(-a),
                    b = v * Math.cos((1 / 3) * g) - m,
                    x = v * Math.cos((1 / 3) * (g + 2 * Math.PI)) - m,
                    _ = v * Math.cos((1 / 3) * (g + 4 * Math.PI)) - m;
                b >= 0 && b <= 1 && l.push(b), x >= 0 && x <= 1 && l.push(x), _ >= 0 && _ <= 1 && l.push(_);
            }
            return l;
        }
        function F(t, e, i, n, r, o, a, s) {
            var h = (i - t) * (s - o) - (n - e) * (a - r);
            if (0 === h) return null;
            var l = ((a - r) * (e - o) - (t - r) * (s - o)) / h,
                u = ((i - t) * (e - o) - (n - e) * (t - r)) / h;
            return l >= 0 && l <= 1 && u >= 0 && u <= 1 ? { x: t + l * (i - t), y: e + l * (n - e) } : null;
        }
        function I(t, e, i, n, r, o, a, s, h, l, u, c) {
            for (
                var f = [], p = l - c, d = u - h, y = h * (c - l) - l * (u - h), g = N(t, i, r, a), m = N(e, n, o, s), v = j(p * g[0] + d * m[0], p * g[1] + d * m[1], p * g[2] + d * m[2], p * g[3] + d * m[3] + y), b = 0;
                b < v.length;
                b++
            ) {
                var x = v[b],
                    _ = x * x,
                    k = x * _,
                    w = g[0] * k + g[1] * _ + g[2] * x + g[3],
                    S = m[0] * k + m[1] * _ + m[2] * x + m[3],
                    O = void 0;
                (O = h !== u ? (w - h) / (u - h) : (S - l) / (c - l)) >= 0 && O <= 1 && f.push({ x: w, y: S });
            }
            return f;
        }
        function N(t, e, i, n) {
            return [3 * e - t - 3 * i + n, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t];
        }
        var L = (function () {
                function t() {
                    (this.commands = []), (this.params = []), (this._closedPath = !1);
                }
                return (
                    (t.prototype.moveTo = function (t, e) {
                        this.xy ? ((this.xy[0] = t), (this.xy[1] = e)) : (this.xy = [t, e]), this.commands.push("M"), this.params.push(t, e);
                    }),
                    (t.prototype.lineTo = function (t, e) {
                        this.xy ? (this.commands.push("L"), this.params.push(t, e), (this.xy[0] = t), (this.xy[1] = e)) : this.moveTo(t, e);
                    }),
                    (t.prototype.rect = function (t, e, i, n) {
                        this.moveTo(t, e), this.lineTo(t + i, e), this.lineTo(t + i, e + n), this.lineTo(t, e + n), this.closePath();
                    }),
                    (t.prototype.arcTo = function (t, e, i, n, r, o, a) {
                        var s = this.xy;
                        if (s) {
                            t < 0 && (t = -t), e < 0 && (e = -e);
                            var h = s[0],
                                l = s[1],
                                u = (h - o) / 2,
                                c = (l - a) / 2,
                                f = Math.sin(i),
                                p = Math.cos(i),
                                d = p * u + f * c,
                                y = -f * u + p * c,
                                g = d / t,
                                m = y / e,
                                v = g * g + m * m,
                                b = (h + o) / 2,
                                x = (l + a) / 2,
                                _ = 0,
                                k = 0;
                            v >= 1 ? ((t *= v = Math.sqrt(v)), (e *= v)) : ((v = Math.sqrt(1 / v - 1)), n === r && (v = -v), (b += p * (_ = v * t * m) - f * (k = -v * e * g)), (x += f * _ + p * k));
                            var w = Math.atan2((y - k) / e, (d - _) / t),
                                S = Math.atan2((-y - k) / e, (-d - _) / t) - w;
                            this.cubicArc(b, x, t, e, i, w, w + S, 1 - r);
                        }
                    }),
                    (t.prototype.arcToAlt = function (t, e, i, n, r, o, a) {
                        this.xy && (this.xy[0], this.xy[1]);
                    }),
                    (t.cubicArc = function (t, e, i, n, r, o, a, s, h, l) {
                        if (l) {
                            var u = s;
                            (s = h), (h = u);
                        }
                        var c = e.length,
                            f = 0.5522847498307935,
                            p = Math.sin(s),
                            d = Math.cos(s),
                            y = Math.sin(a),
                            g = Math.cos(a),
                            m = Math.PI / 2,
                            v = g * d * r - y * p * o,
                            b = y * d * r + g * p * o,
                            x = -g * p * r - y * d * o,
                            _ = -y * p * r + g * d * o;
                        for ((h -= s) < 0 && (h += 2 * Math.PI), t.push("M"), e.push(v + i, b + n); h >= m; ) {
                            (h -= m), t.push("C");
                            var k = x + i;
                            e.push(v + x * f + i, b + _ * f + n, v * f + x + i, b * f + _ + n, Math.abs(k) < 1e-8 ? 0 : k, _ + n), (u = v), (v = x), (x = -u), (u = b), (b = _), (_ = -u);
                        }
                        if (h) {
                            var w = (4 / 3) * Math.tan(h / 4),
                                S = Math.sin(h),
                                O = Math.cos(h),
                                P = O + w * S,
                                C = S - w * O;
                            t.push("C"), (k = v * O + x * S + i), e.push(v + x * w + i, b + _ * w + n, v * P + x * C + i, b * P + _ * C + n, Math.abs(k) < 1e-8 ? 0 : k, b * O + _ * S + n);
                        }
                        if (l) for (var D = c, A = e.length - 2; D < A; D += 2, A -= 2) (u = e[D]), (e[D] = e[A]), (e[A] = u), (u = e[D + 1]), (e[D + 1] = e[A + 1]), (e[A + 1] = u);
                    }),
                    (t.prototype.cubicArc = function (e, i, n, r, o, a, s, h) {
                        var l = this.commands,
                            u = this.params,
                            c = l.length;
                        t.cubicArc(l, u, e, i, n, r, o, a, s, h);
                        var f = u[u.length - 2],
                            p = u[u.length - 1];
                        this.xy ? ((l[c] = "L"), (this.xy[0] = f), (this.xy[1] = p)) : (this.xy = [f, p]);
                    }),
                    (t.prototype.deCasteljau = function (t, e) {
                        var i = t.length;
                        if (i < 2 || i % 2 == 1) throw new Error("Fewer than two points or not an even count.");
                        if (2 === i || 0 === e) return t.slice(0, 2);
                        if (1 === e) return t.slice(-2);
                        for (var n = [], r = i - 2, o = 0; o < r; o += 2) n.push((1 - e) * t[o] + e * t[o + 2], (1 - e) * t[o + 1] + e * t[o + 3]);
                        return this.deCasteljau(n, e);
                    }),
                    (t.prototype.approximateCurve = function (t, e) {
                        var i = this.deCasteljau(t, 0);
                        this.moveTo(i[0], i[1]);
                        for (var n = 1 / e, r = n; r <= 1; r += n) {
                            var o = this.deCasteljau(t, r);
                            this.lineTo(o[0], o[1]);
                        }
                    }),
                    (t.prototype.quadraticCurveTo = function (t, e, i, n) {
                        this.xy || this.moveTo(t, e), this.cubicCurveTo((this.xy[0] + 2 * t) / 3, (this.xy[1] + 2 * e) / 3, (2 * t + i) / 3, (2 * e + n) / 3, i, n);
                    }),
                    (t.prototype.cubicCurveTo = function (t, e, i, n, r, o) {
                        this.xy || this.moveTo(t, e), this.commands.push("C"), this.params.push(t, e, i, n, r, o), (this.xy[0] = r), (this.xy[1] = o);
                    }),
                    Object.defineProperty(t.prototype, "closedPath", {
                        get: function () {
                            return this._closedPath;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.closePath = function () {
                        this.xy && ((this.xy = void 0), this.commands.push("Z"), (this._closedPath = !0));
                    }),
                    (t.prototype.clear = function () {
                        (this.commands.length = 0), (this.params.length = 0), (this.xy = void 0), (this._closedPath = !1);
                    }),
                    (t.prototype.isPointInPath = function (t, e) {
                        for (var i = this.commands, n = this.params, r = i.length, o = -1e4, a = -1e4, s = NaN, h = NaN, l = 0, u = 0, c = 0, f = 0, p = 0; f < r; f++)
                            switch (i[f]) {
                                case "M":
                                    isNaN(s) || (F(s, h, l, u, o, a, t, e) && c++), (s = l = n[p++]), (h = u = n[p++]);
                                    break;
                                case "L":
                                    F(l, u, (l = n[p++]), (u = n[p++]), o, a, t, e) && c++;
                                    break;
                                case "C":
                                    c += I(l, u, n[p++], n[p++], n[p++], n[p++], (l = n[p++]), (u = n[p++]), o, a, t, e).length;
                                    break;
                                case "Z":
                                    isNaN(s) || (F(s, h, l, u, o, a, t, e) && c++);
                            }
                        return c % 2 == 1;
                    }),
                    (t.fromString = function (e) {
                        var i = new t();
                        return i.setFromString(e), i;
                    }),
                    (t.parseSvgPath = function (e) {
                        return e
                            .trim()
                            .split(t.splitCommandsRe)
                            .map(function (e) {
                                var i = e.match(t.matchParamsRe);
                                return { command: e.substr(0, 1), params: i ? i.map(parseFloat) : [] };
                            });
                    }),
                    (t.prettifySvgPath = function (e) {
                        return t
                            .parseSvgPath(e)
                            .map(function (t) {
                                return t.command + t.params.join(",");
                            })
                            .join("\n");
                    }),
                    (t.prototype.setFromString = function (e) {
                        var i,
                            n,
                            r,
                            o,
                            a,
                            s = this;
                        function h() {
                            a.match(t.quadraticCommandRe) || ((r = i), (o = n));
                        }
                        function l() {
                            a.match(t.cubicCommandRe) || ((r = i), (o = n));
                        }
                        this.clear(),
                            t.parseSvgPath(e).forEach(function (t) {
                                var e = t.params,
                                    u = e.length,
                                    c = 0;
                                switch (t.command) {
                                    case "M":
                                        for (s.moveTo((i = e[c++]), (n = e[c++])); c < u; ) s.lineTo((i = e[c++]), (n = e[c++]));
                                        break;
                                    case "m":
                                        for (s.moveTo((i += e[c++]), (n += e[c++])); c < u; ) s.lineTo((i += e[c++]), (n += e[c++]));
                                        break;
                                    case "L":
                                        for (; c < u; ) s.lineTo((i = e[c++]), (n = e[c++]));
                                        break;
                                    case "l":
                                        for (; c < u; ) s.lineTo((i += e[c++]), (n += e[c++]));
                                        break;
                                    case "C":
                                        for (; c < u; ) s.cubicCurveTo(e[c++], e[c++], (r = e[c++]), (o = e[c++]), (i = e[c++]), (n = e[c++]));
                                        break;
                                    case "c":
                                        for (; c < u; ) s.cubicCurveTo(i + e[c++], n + e[c++], (r = i + e[c++]), (o = n + e[c++]), (i += e[c++]), (n += e[c++]));
                                        break;
                                    case "S":
                                        for (l(); c < u; ) s.cubicCurveTo(i + i - r, n + n - o, (r = e[c++]), (o = e[c++]), (i = e[c++]), (n = e[c++]));
                                        break;
                                    case "s":
                                        for (l(); c < u; ) s.cubicCurveTo(i + i - r, n + n - o, (r = i + e[c++]), (o = n + e[c++]), (i += e[c++]), (n += e[c++]));
                                        break;
                                    case "Q":
                                        for (; c < u; ) s.quadraticCurveTo((r = e[c++]), (o = e[c++]), (i = e[c++]), (n = e[c++]));
                                        break;
                                    case "q":
                                        for (; c < u; ) s.quadraticCurveTo((r = i + e[c++]), (o = n + e[c++]), (i += e[c++]), (n += e[c++]));
                                        break;
                                    case "T":
                                        for (h(); c < u; ) s.quadraticCurveTo((r = i + i - r), (o = n + n - o), (i = e[c++]), (n = e[c++]));
                                        break;
                                    case "t":
                                        for (h(); c < u; ) s.quadraticCurveTo((r = i + i - r), (o = n + n - o), (i += e[c++]), (n += e[c++]));
                                        break;
                                    case "A":
                                        for (; c < u; ) s.arcTo(e[c++], e[c++], (e[c++] * Math.PI) / 180, e[c++], e[c++], (i = e[c++]), (n = e[c++]));
                                        break;
                                    case "a":
                                        for (; c < u; ) s.arcTo(e[c++], e[c++], (e[c++] * Math.PI) / 180, e[c++], e[c++], (i += e[c++]), (n += e[c++]));
                                        break;
                                    case "Z":
                                    case "z":
                                        s.closePath();
                                        break;
                                    case "H":
                                        for (; c < u; ) s.lineTo((i = e[c++]), n);
                                        break;
                                    case "h":
                                        for (; c < u; ) s.lineTo((i += e[c++]), n);
                                        break;
                                    case "V":
                                        for (; c < u; ) s.lineTo(i, (n = e[c++]));
                                        break;
                                    case "v":
                                        for (; c < u; ) s.lineTo(i, (n += e[c++]));
                                }
                                a = t.command;
                            });
                    }),
                    (t.prototype.toString = function () {
                        for (var t = this.commands, e = this.params, i = t.length, n = [], r = 0, o = 0; r < i; r++)
                            switch (t[r]) {
                                case "M":
                                    n.push("M" + e[o++] + "," + e[o++]);
                                    break;
                                case "L":
                                    n.push("L" + e[o++] + "," + e[o++]);
                                    break;
                                case "C":
                                    n.push("C" + e[o++] + "," + e[o++] + " " + e[o++] + "," + e[o++] + " " + e[o++] + "," + e[o++]);
                                    break;
                                case "Z":
                                    n.push("Z");
                            }
                        return n.join("");
                    }),
                    (t.prototype.toPrettyString = function () {
                        return t.prettifySvgPath(this.toString());
                    }),
                    (t.prototype.toSvg = function () {
                        return (
                            t.xmlDeclaration + '\n<svg width="100%" height="100%" viewBox="0 0 50 50" version="1.1" xmlns="' + t.xmlns + '">\n    <path d="' + this.toString() + '" style="fill:none;stroke:#000;stroke-width:0.5;"/>\n</svg>'
                        );
                    }),
                    (t.prototype.toDebugSvg = function () {
                        var e = t.prettifySvgPath(this.toString());
                        return t.xmlDeclaration + '\n<svg width="100%" height="100%" viewBox="0 0 100 100" version="1.1" xmlns="' + t.xmlns + '">\n    <path d="' + e + '" style="fill:none;stroke:#000;stroke-width:0.5;"/>\n</svg>';
                    }),
                    (t.prototype.toCubicPaths = function () {
                        var t,
                            e,
                            i,
                            n,
                            r,
                            o = [],
                            a = this.params,
                            s = 0;
                        return (
                            this.commands.forEach(function (h) {
                                switch (h) {
                                    case "M":
                                        (t = [(e = n = a[s++]), (i = r = a[s++])]), o.push(t);
                                        break;
                                    case "L":
                                        var l = a[s++],
                                            u = a[s++];
                                        t.push((n + n + l) / 3, (r + r + u) / 3, (n + l + l) / 3, (r + u + u) / 3, (n = l), (r = u));
                                        break;
                                    case "C":
                                        t.push(a[s++], a[s++], a[s++], a[s++], (n = a[s++]), (r = a[s++]));
                                        break;
                                    case "Z":
                                        t.push((n + n + e) / 3, (r + r + i) / 3, (n + e + e) / 3, (r + i + i) / 3, (n = e), (r = i));
                                }
                            }),
                            o
                        );
                    }),
                    (t.cubicPathToString = function (t) {
                        var e = t.length;
                        if (!(e % 2 == 0 && (e / 2 - 1) / 2 >= 1)) throw new Error("Invalid path.");
                        return "M" + t.slice(0, 2).join(",") + "C" + t.slice(2).join(",");
                    }),
                    (t.splitCommandsRe = /(?=[AaCcHhLlMmQqSsTtVvZz])/g),
                    (t.matchParamsRe = /-?[0-9]*\.?\d+/g),
                    (t.quadraticCommandRe = /[QqTt]/),
                    (t.cubicCommandRe = /[CcSs]/),
                    (t.xmlDeclaration = '<?xml version="1.0" encoding="UTF-8"?>'),
                    (t.xmlns = "http://www.w3.org/2000/svg"),
                    t
                );
            })(),
            B = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            z = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.path = new L()), (e._dirtyPath = !0), (e._svgPath = ""), e;
                }
                return (
                    B(e, t),
                    Object.defineProperty(e.prototype, "dirtyPath", {
                        get: function () {
                            return this._dirtyPath;
                        },
                        set: function (t) {
                            this._dirtyPath !== t && ((this._dirtyPath = t), t && (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "svgPath", {
                        get: function () {
                            return this._svgPath;
                        },
                        set: function (t) {
                            this._svgPath !== t && ((this._svgPath = t), this.path.setFromString(t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.isPointInPath = function (t, e) {
                        var i = this.transformPoint(t, e);
                        return this.path.closedPath && this.path.isPointInPath(i.x, i.y);
                    }),
                    (e.prototype.isPointInStroke = function (t, e) {
                        return !1;
                    }),
                    (e.prototype.updatePath = function () {}),
                    (e.prototype.render = function (t) {
                        this.dirtyTransform && this.computeTransformMatrix(), this.matrix.toContext(t), this.dirtyPath && (this.updatePath(), (this.dirtyPath = !1)), this.scene.appendPath(this.path), this.fillStroke(t), (this.dirty = !1);
                    }),
                    (e.className = "Path"),
                    e
                );
            })(u);
        function K(t, e, i) {
            return void 0 === i && (i = 1e-10), Math.abs(t - e) < i;
        }
        function R(t, e) {
            void 0 === e && (e = 2);
            var i = Math.floor(Math.log(Math.abs(t)) / Math.LN10);
            return i >= 0 || !isFinite(i) ? t.toFixed(e) : t.toFixed(Math.abs(i) - 1 + e);
        }
        var V,
            W = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })();
        ((V = t.ArcType || (t.ArcType = {}))[(V.Open = 0)] = "Open"), (V[(V.Chord = 1)] = "Chord"), (V[(V.Round = 2)] = "Round");
        var Y,
            X = (function (e) {
                function i() {
                    var i = e.call(this) || this;
                    return (i._centerX = 0), (i._centerY = 0), (i._radiusX = 10), (i._radiusY = 10), (i._startAngle = 0), (i._endAngle = 2 * Math.PI), (i._counterClockwise = !1), (i._type = t.ArcType.Open), i.restoreOwnStyles(), i;
                }
                return (
                    W(i, e),
                    Object.defineProperty(i.prototype, "centerX", {
                        get: function () {
                            return this._centerX;
                        },
                        set: function (t) {
                            this._centerX !== t && ((this._centerX = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "centerY", {
                        get: function () {
                            return this._centerY;
                        },
                        set: function (t) {
                            this._centerY !== t && ((this._centerY = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "radiusX", {
                        get: function () {
                            return this._radiusX;
                        },
                        set: function (t) {
                            this._radiusX !== t && ((this._radiusX = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "radiusY", {
                        get: function () {
                            return this._radiusY;
                        },
                        set: function (t) {
                            this._radiusY !== t && ((this._radiusY = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "startAngle", {
                        get: function () {
                            return this._startAngle;
                        },
                        set: function (t) {
                            this._startAngle !== t && ((this._startAngle = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "endAngle", {
                        get: function () {
                            return this._endAngle;
                        },
                        set: function (t) {
                            this._endAngle !== t && ((this._endAngle = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "fullPie", {
                        get: function () {
                            return K(D(this.startAngle), D(this.endAngle));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "counterClockwise", {
                        get: function () {
                            return this._counterClockwise;
                        },
                        set: function (t) {
                            this._counterClockwise !== t && ((this._counterClockwise = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "type", {
                        get: function () {
                            return this._type;
                        },
                        set: function (t) {
                            this._type !== t && ((this._type = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (i.prototype.updatePath = function () {
                        var e = this.path;
                        e.clear(),
                            e.cubicArc(this.centerX, this.centerY, this.radiusX, this.radiusY, 0, this.startAngle, this.endAngle, this.counterClockwise ? 1 : 0),
                            this.type === t.ArcType.Chord ? e.closePath() : this.type !== t.ArcType.Round || this.fullPie || (e.lineTo(this.centerX, this.centerY), e.closePath());
                    }),
                    (i.prototype.computeBBox = function () {
                        return new n(this.centerX - this.radiusX, this.centerY - this.radiusY, 2 * this.radiusX, 2 * this.radiusY);
                    }),
                    (i.prototype.isPointInPath = function (e, i) {
                        var n = this.transformPoint(e, i),
                            r = this.computeBBox();
                        return this.type !== t.ArcType.Open && r.containsPoint(n.x, n.y) && this.path.isPointInPath(n.x, n.y);
                    }),
                    (i.className = "Arc"),
                    (i.defaultStyles = s(u.defaultStyles, { lineWidth: 1, fillStyle: null })),
                    i
                );
            })(z);
        !(function (t) {
            (t[(t.Tick = 0)] = "Tick"), (t[(t.GridLine = 1)] = "GridLine");
        })(Y || (Y = {}));
        var H,
            U,
            G = function () {
                (this.width = 1), (this.size = 6), (this.color = "rgba(195, 195, 195, 1)"), (this.count = 10);
            },
            q = (function () {
                function t() {
                    (this.fontSize = 12), (this.fontFamily = "Verdana, sans-serif"), (this.padding = 5), (this.color = "rgba(87, 87, 87, 1)"), (this.rotation = 0), (this.mirrored = !1), (this.parallel = !1);
                }
                return (
                    Object.defineProperty(t.prototype, "format", {
                        get: function () {
                            return this._format;
                        },
                        set: function (t) {
                            this._format !== t && ((this._format = t), this.onFormatChange && this.onFormatChange(t));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    t
                );
            })(),
            J = (function () {
                function t(t) {
                    (this.lineNode = new P()),
                        (this.group = new k()),
                        (this.line = { width: 1, color: "rgba(195, 195, 195, 1)" }),
                        (this.tick = new G()),
                        (this.label = new q()),
                        (this.translation = { x: 0, y: 0 }),
                        (this.rotation = 0),
                        (this._title = void 0),
                        (this._gridLength = 0),
                        (this.gridStyle = [{ stroke: "rgba(219, 219, 219, 1)", lineDash: [4, 2] }]),
                        (this._radialGrid = !1),
                        (this.scale = t),
                        (this.groupSelection = S.select(this.group).selectAll()),
                        (this.label.onFormatChange = this.onTickFormatChange.bind(this)),
                        this.group.append(this.lineNode),
                        this.onTickFormatChange();
                }
                return (
                    Object.defineProperty(t.prototype, "range", {
                        get: function () {
                            return this.scale.range;
                        },
                        set: function (t) {
                            this.scale.range = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "domain", {
                        get: function () {
                            return this.scale.domain;
                        },
                        set: function (t) {
                            this.scale.domain = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.onTickFormatChange = function (t) {
                        t ? this.scale.tickFormat && (this.tickFormatter = this.scale.tickFormat(10, t)) : this.scale.tickFormat ? (this.tickFormatter = this.scale.tickFormat(10, void 0)) : (this.tickFormatter = void 0);
                    }),
                    Object.defineProperty(t.prototype, "title", {
                        get: function () {
                            return this._title;
                        },
                        set: function (t) {
                            var e = this._title;
                            e !== t && (e && this.group.removeChild(e.node), t && ((t.node.rotation = -Math.PI / 2), this.group.appendChild(t.node)), (this._title = t));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "gridLength", {
                        get: function () {
                            return this._gridLength;
                        },
                        set: function (t) {
                            ((this._gridLength && !t) || (!this._gridLength && t)) && (this.groupSelection = this.groupSelection.remove().setData([])), (this._gridLength = t);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "radialGrid", {
                        get: function () {
                            return this._radialGrid;
                        },
                        set: function (t) {
                            this._radialGrid !== t && ((this._radialGrid = t), (this.groupSelection = this.groupSelection.remove().setData([])));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.update = function () {
                        var t = this,
                            e = this,
                            i = e.group,
                            n = e.scale,
                            r = e.tick,
                            o = e.label,
                            a = e.gridStyle,
                            s = M(this.rotation),
                            h = o.parallel,
                            l = D(M(o.rotation));
                        (i.translationX = this.translation.x), (i.translationY = this.translation.y), (i.rotation = s);
                        var u = (n.bandwidth || 0) / 2,
                            c = o.mirrored ? 1 : -1,
                            f = D(s),
                            d = !l && f >= 0 && f <= Math.PI ? -1 : 1,
                            y = D(s - Math.PI / 2),
                            g = !l && y >= 0 && y <= Math.PI ? -1 : 1,
                            m = l >= 0 && l <= Math.PI ? -1 : 1,
                            v = n.ticks(this.tick.count),
                            b = this.groupSelection.setData(v);
                        b.exit.remove();
                        var x = b.enter.append(k);
                        x.append(P).each(function (t) {
                            return (t.tag = Y.Tick);
                        }),
                            this.gridLength &&
                                (this.radialGrid
                                    ? x.append(X).each(function (t) {
                                          return (t.tag = Y.GridLine);
                                      })
                                    : x.append(P).each(function (t) {
                                          return (t.tag = Y.GridLine);
                                      })),
                            x.append(p);
                        var _ = b.merge(x);
                        if (
                            (_.attrFn("translationY", function (t, e) {
                                return Math.round(n.convert(e) + u);
                            }),
                            _.selectByTag(Y.Tick)
                                .each(function (t) {
                                    (t.strokeWidth = r.width), (t.stroke = r.color);
                                })
                                .attr("x1", c * r.size)
                                .attr("x2", 0)
                                .attr("y1", 0)
                                .attr("y2", 0),
                            this.gridLength && a.length)
                        ) {
                            var w = a.length,
                                S = void 0;
                            if (this.radialGrid) {
                                var O = A(M(this.gridLength));
                                S = _.selectByTag(Y.GridLine).each(function (t, e) {
                                    var i = Math.round(n.convert(e) + u);
                                    (t.centerX = 0), (t.centerY = n.range[0] - i), (t.endAngle = O), (t.radiusX = i), (t.radiusY = i);
                                });
                            } else
                                S = _.selectByTag(Y.GridLine).each(function (e) {
                                    (e.x1 = 0), (e.x2 = -c * t.gridLength), (e.y1 = 0), (e.y2 = 0), (e.visible = Math.abs(e.parent.translationY - n.range[0]) > 1);
                                });
                            S.each(function (t, e, i) {
                                var n = a[i % w];
                                (t.stroke = n.stroke), (t.strokeWidth = r.width), (t.lineDash = n.lineDash), (t.fill = void 0);
                            });
                        }
                        var C = this.tickFormatter,
                            E = v.fractionDigits >= 0 ? v.fractionDigits : 0,
                            T = _.selectByClass(p).each(function (t, e, i) {
                                (t.fontStyle = o.fontStyle),
                                    (t.fontWeight = o.fontWeight),
                                    (t.fontSize = o.fontSize),
                                    (t.fontFamily = o.fontFamily),
                                    (t.fill = o.color),
                                    (t.textBaseline = h && !l ? (c * d == -1 ? "hanging" : "bottom") : "middle"),
                                    (t.text = o.formatter ? o.formatter({ value: E >= 0 ? e : String(e), index: i, fractionDigits: E, formatter: C }) : E ? e.toFixed(E) : C ? C(e) : String(e)),
                                    (t.textAlign = h ? (l ? (c * m == -1 ? "end" : "start") : "center") : c * g == -1 ? "end" : "start");
                            }),
                            j = c * (r.size + o.padding),
                            F = h ? (d * Math.PI) / 2 : -1 === g ? Math.PI : 0;
                        T.each(function (t) {
                            (t.x = j), (t.rotationCenterX = j), (t.rotation = F + l);
                        }),
                            (this.groupSelection = _);
                        var I = this.lineNode;
                        (I.x1 = 0), (I.x2 = 0), (I.y1 = n.range[0]), (I.y2 = n.range[n.range.length - 1]), (I.strokeWidth = this.line.width), (I.stroke = this.line.color), (I.visible = v.length > 0);
                        var N = this.title,
                            L = !1;
                        if (N && N.enabled) {
                            L = !0;
                            var B = N.padding.bottom,
                                z = N.node,
                                K = this.computeBBox({ excludeTitle: !0 }),
                                R = -1 === c && f > Math.PI && f < 2 * Math.PI ? -1 : 1;
                            (z.rotation = (R * c * Math.PI) / 2),
                                (z.x = (R * c * (I.y1 + I.y2)) / 2),
                                (z.y = -1 === c ? R * (-B - K.width + Math.max(K.x + K.width, 0)) : -B - K.width - Math.min(K.x, 0)),
                                (z.textBaseline = 1 === R ? "bottom" : "top");
                        }
                        N && (N.node.visible = L);
                    }),
                    (t.prototype.computeBBox = function (t) {
                        var e = this.title,
                            i = this.lineNode,
                            o = this.groupSelection.selectByClass(p),
                            a = 1 / 0,
                            s = -1 / 0,
                            h = 1 / 0,
                            l = -1 / 0;
                        if (
                            (o.each(function (t) {
                                t.computeTransformMatrix();
                                var e = r.flyweight(t.matrix),
                                    i = t.parent;
                                i.computeTransformMatrix(), e.preMultiplySelf(i.matrix);
                                var n = t.computeBBox();
                                if (n) {
                                    var o = e.transformBBox(n);
                                    (a = Math.min(a, o.x)), (s = Math.max(s, o.x + o.width)), (h = Math.min(h, o.y)), (l = Math.max(l, o.y + o.height));
                                }
                            }),
                            e && e.enabled && (!t || !t.excludeTitle))
                        ) {
                            var u = e.node;
                            u.computeTransformMatrix();
                            var c = r.flyweight(u.matrix),
                                f = u.computeBBox();
                            if (f) {
                                var d = c.transformBBox(f);
                                (a = Math.min(a, d.x)), (s = Math.max(s, d.x + d.width)), (h = Math.min(h, d.y)), (l = Math.max(l, d.y + d.height));
                            }
                        }
                        return (a = Math.min(a, 0)), (s = Math.max(s, 0)), (h = Math.min(h, i.y1, i.y2)), (l = Math.max(l, i.y1, i.y2)), new n(a, h, s - a, l - h);
                    }),
                    t
                );
            })(),
            Z = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })();
        function $(e) {
            return e === t.ChartAxisDirection.X ? t.ChartAxisDirection.Y : t.ChartAxisDirection.X;
        }
        ((H = t.ChartAxisDirection || (t.ChartAxisDirection = {})).X = "x"),
            (H.Y = "y"),
            ((U = t.ChartAxisPosition || (t.ChartAxisPosition = {})).Top = "top"),
            (U.Right = "right"),
            (U.Bottom = "bottom"),
            (U.Left = "left"),
            (U.Angle = "angle"),
            (U.Radius = "radius");
        var Q = (function (e) {
                function i() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (t.keys = []), (t.boundSeries = []), t;
                }
                return (
                    Z(i, e),
                    Object.defineProperty(i.prototype, "type", {
                        get: function () {
                            return this.constructor.type || "";
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "position", {
                        get: function () {
                            return this._position;
                        },
                        set: function (e) {
                            if (this._position !== e)
                                switch (((this._position = e), e)) {
                                    case t.ChartAxisPosition.Top:
                                        (this.direction = t.ChartAxisDirection.X), (this.rotation = -90), (this.label.mirrored = !0), (this.label.parallel = !0);
                                        break;
                                    case t.ChartAxisPosition.Right:
                                        (this.direction = t.ChartAxisDirection.Y), (this.rotation = 0), (this.label.mirrored = !0), (this.label.parallel = !1);
                                        break;
                                    case t.ChartAxisPosition.Bottom:
                                        (this.direction = t.ChartAxisDirection.X), (this.rotation = -90), (this.label.mirrored = !1), (this.label.parallel = !0);
                                        break;
                                    case t.ChartAxisPosition.Left:
                                        (this.direction = t.ChartAxisDirection.Y), (this.rotation = 0), (this.label.mirrored = !1), (this.label.parallel = !1);
                                }
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    i
                );
            })(J),
            tt = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            et = (function (t) {
                function e() {
                    var e = new x();
                    return (e.paddingInner = 0.2), (e.paddingOuter = 0.3), t.call(this, e) || this;
                }
                return tt(e, t), (e.className = "CategoryAxis"), (e.type = "category"), e;
            })(Q);
        function it(t, e) {
            for (var i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                if (e(r, i, t)) return r;
            }
        }
        function nt(t) {
            for (var e, i, n, r = t.length, o = -1; ++o < r; ) if (null != (e = t[o]) && e >= e && isFinite(e)) for (i = n = e; ++o < r; ) null != (e = t[o]) && isFinite(e) && (i > e && (i = e), n < e && (n = e));
            return void 0 === i || void 0 === n ? void 0 : [i, n];
        }
        function rt(t) {
            var e = nt(t);
            if (void 0 !== e) {
                var i = e[0],
                    n = e[1],
                    r = i instanceof Date ? i.getTime() : i,
                    o = n instanceof Date ? n.getTime() : n;
                return "number" == typeof r && isFinite(r) && "number" == typeof o && isFinite(o) ? [r, o] : void 0;
            }
        }
        function ot(t) {
            for (var e = 0, i = 0, n = 0, r = t; n < r.length; n++) {
                var o = r[n];
                o < 0 ? (e += o) : (i += o);
            }
            return { min: e, max: i };
        }
        function at(t) {
            for (var e = 0, i = 0, n = 0, r = t; n < r.length; n++) {
                var o = r[n];
                o.min < e && (e = o.min), o.max > i && (i = o.max);
            }
            return { min: e, max: i };
        }
        var st = (function () {
            function t(t, e, i) {
                void 0 === t && (t = ""),
                    void 0 === i && (i = 0),
                    (this.x = 0),
                    (this.y = 0),
                    (this.subtreeLeft = NaN),
                    (this.subtreeRight = NaN),
                    (this.screenX = 0),
                    (this.screenY = 0),
                    (this.children = []),
                    (this.leafCount = 0),
                    (this.prelim = 0),
                    (this.mod = 0),
                    (this.ancestor = this),
                    (this.change = 0),
                    (this.shift = 0),
                    (this.label = t),
                    (this.parent = e),
                    (this.depth = e ? e.depth + 1 : 0),
                    (this.number = i);
            }
            return (
                (t.prototype.getLeftSibling = function () {
                    return this.number > 0 && this.parent ? this.parent.children[this.number - 1] : void 0;
                }),
                (t.prototype.getLeftmostSibling = function () {
                    return this.number > 0 && this.parent ? this.parent.children[0] : void 0;
                }),
                (t.prototype.nextLeft = function () {
                    return this.children ? this.children[0] : this.thread;
                }),
                (t.prototype.nextRight = function () {
                    return this.children ? this.children[this.children.length - 1] : this.thread;
                }),
                (t.prototype.getSiblings = function () {
                    var t = this;
                    return this.parent
                        ? this.parent.children.filter(function (e, i) {
                              return i !== t.number;
                          })
                        : [];
                }),
                t
            );
        })();
        function ht(t, e) {
            void 0 === e && (e = !0);
            var i = new st(),
                n = 0;
            return (
                e &&
                    t.forEach(function (t) {
                        return (n = Math.max(n, t.labels.length));
                    }),
                t.forEach(function (t) {
                    if (e) for (; t.labels.length < n; ) t.labels.unshift("");
                    !(function (t, e) {
                        var i = e.labels.slice().reverse(),
                            n = i.length - 1;
                        i.forEach(function (e, i) {
                            var r = t.children,
                                o = it(r, function (t) {
                                    return t.label === e;
                                }),
                                a = i !== n;
                            if (o && a) t = o;
                            else {
                                var s = new st(e, t);
                                (s.number = r.length), r.push(s), a && (t = s);
                            }
                        });
                    })(i, t);
                }),
                i
            );
        }
        function lt(t, e, i) {
            var n = i / (e.number - t.number);
            (e.change -= n), (e.shift += i), (t.change += n), (e.prelim += i), (e.mod += i);
        }
        function ut(t, e, i) {
            return e.getSiblings().indexOf(t.ancestor) >= 0 ? t.ancestor : i;
        }
        function ct(t, e) {
            var i = t.children;
            if (i.length) {
                var n = i[0];
                i.forEach(function (t) {
                    ct(t, e),
                        (n = (function (t, e, i) {
                            var n = t.getLeftSibling();
                            if (n) {
                                for (var r = t, o = t, a = n, s = o.getLeftmostSibling(), h = o.mod, l = r.mod, u = a.mod, c = s.mod; a.nextRight() && o.nextLeft(); ) {
                                    (a = a.nextRight()), (o = o.nextLeft()), (s = s.nextLeft()), ((r = r.nextRight()).ancestor = t);
                                    var f = a.prelim + u - (o.prelim + h) + i;
                                    f > 0 && (lt(ut(a, t, e), t, f), (h += f), (l += f)), (u += a.mod), (h += o.mod), (c += s.mod), (l += r.mod);
                                }
                                a.nextRight() && !r.nextRight() ? ((r.thread = a.nextRight()), (r.mod += u - l)) : (o.nextLeft() && !s.nextLeft() && ((s.thread = o.nextLeft()), (s.mod += h - c)), (e = t));
                            }
                            return e;
                        })(t, n, e));
                }),
                    (function (t) {
                        var e = t.children;
                        if (e)
                            for (var i = 0, n = 0, r = e.length - 1; r >= 0; r--) {
                                var o = e[r];
                                (o.prelim += i), (o.mod += i), (n += o.change), (i += o.shift + n);
                            }
                    })(t);
                var r = (i[0].prelim + i[i.length - 1].prelim) / 2;
                (o = t.getLeftSibling()) ? ((t.prelim = o.prelim + e), (t.mod = t.prelim - r)) : (t.prelim = r);
            } else {
                var o = t.getLeftSibling();
                t.prelim = o ? o.prelim + e : 0;
            }
        }
        var ft = (function () {
            function t() {
                (this.top = 1 / 0), (this.right = -1 / 0), (this.bottom = -1 / 0), (this.left = 1 / 0);
            }
            return (
                (t.prototype.update = function (t, e) {
                    var i = e(t),
                        n = i.x,
                        r = i.y;
                    n > this.right && (this.right = n), n < this.left && (this.left = n), r > this.bottom && (this.bottom = r), r < this.top && (this.top = r);
                }),
                t
            );
        })();
        function pt(t) {
            var e = new yt();
            return (
                ct(t, 1),
                (function t(e, i, n) {
                    (e.x = e.prelim + i),
                        (e.y = e.depth),
                        n.update(e),
                        e.children.forEach(function (r) {
                            return t(r, i + e.mod, n);
                        });
                })(t, -t.prelim, e),
                (function t(e) {
                    var i = e.children,
                        n = 0;
                    i.forEach(function (e) {
                        t(e), e.children.length ? (n += e.leafCount) : n++;
                    }),
                        (e.leafCount = n),
                        i.length ? ((e.subtreeLeft = i[0].subtreeLeft), (e.subtreeRight = i[e.children.length - 1].subtreeRight), (e.x = (e.subtreeLeft + e.subtreeRight) / 2)) : ((e.subtreeLeft = e.x), (e.subtreeRight = e.x));
                })(t),
                e
            );
        }
        var dt,
            yt = (function () {
                function t() {
                    (this.dimensions = new ft()), (this.leafCount = 0), (this.nodes = []), (this.leafNodes = []), (this.nonLeafNodes = []), (this.depth = 0);
                }
                return (
                    (t.prototype.update = function (t) {
                        this.dimensions.update(t, function (t) {
                            return { x: t.x, y: t.y };
                        }),
                            t.children.length ? this.nonLeafNodes.push(t) : (this.leafCount++, this.leafNodes.push(t)),
                            t.depth > this.depth && (this.depth = t.depth),
                            this.nodes.push(t);
                    }),
                    (t.prototype.resize = function (t, e, i, n, r) {
                        void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === r && (r = !1);
                        var o = this.leafCount - 1,
                            a = this.depth,
                            s = this.dimensions,
                            h = 1,
                            l = 1;
                        if (t > 0 && o) {
                            var u = (s.right - s.left) / o;
                            (h = t / o / u), r && (h = -h);
                        }
                        if (e > 0 && a) {
                            var c = (s.bottom - s.top) / a;
                            l = e / a / c;
                        }
                        var f = new ft();
                        this.nodes.forEach(function (t) {
                            (t.screenX = t.x * h),
                                (t.screenY = t.y * l),
                                f.update(t, function (t) {
                                    return { x: t.screenX, y: t.screenY };
                                });
                        });
                        var p = -f.left,
                            d = -f.top;
                        this.nodes.forEach(function (t) {
                            (t.screenX += p + i), (t.screenY += d + n);
                        });
                    }),
                    t
                );
            })(),
            gt = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            mt = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.grid = !1), e;
                }
                return gt(e, t), e;
            })(q),
            vt = (function (t) {
                function e() {
                    var e = t.call(this, new x()) || this;
                    (e.id = o(e)),
                        (e.tickScale = new x()),
                        (e.group = new k()),
                        (e.longestSeparatorLength = 0),
                        (e.translation = { x: 0, y: 0 }),
                        (e.rotation = 0),
                        (e.line = { width: 1, color: "rgba(195, 195, 195, 1)" }),
                        (e.label = new mt()),
                        (e.labelColor = "rgba(87, 87, 87, 1)");
                    var i = e,
                        n = i.group,
                        r = i.scale,
                        a = i.tickScale;
                    return (
                        (r.paddingOuter = 0.1),
                        (r.paddingInner = 2 * r.paddingOuter),
                        (a.paddingInner = 1),
                        (a.paddingOuter = 0),
                        (e.gridLineSelection = S.select(n).selectAll()),
                        (e.axisLineSelection = S.select(n).selectAll()),
                        (e.separatorSelection = S.select(n).selectAll()),
                        (e.labelSelection = S.select(n).selectAll()),
                        e
                    );
                }
                return (
                    gt(e, t),
                    Object.defineProperty(e.prototype, "domain", {
                        get: function () {
                            return this.scale.domain;
                        },
                        set: function (t) {
                            this.scale.domain = t;
                            var e = ht(t);
                            this.tickTreeLayout = pt(e);
                            var i = t.slice();
                            i.push(""), (this.tickScale.domain = i), this.resizeTickTree();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "range", {
                        get: function () {
                            return this.scale.range;
                        },
                        set: function (t) {
                            (this.scale.range = t), (this.tickScale.range = t), this.resizeTickTree();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.resizeTickTree = function () {
                        var t = this.scale,
                            e = t.domain.length ? [t.convert(t.domain[0]), t.convert(t.domain[t.domain.length - 1])] : t.range,
                            i = this.tickTreeLayout,
                            n = this.lineHeight;
                        i && i.resize(Math.abs(e[1] - e[0]), i.depth * n, (Math.min(e[0], e[1]) || 0) + (t.bandwidth || 0) / 2, -i.depth * n, e[1] - e[0] < 0);
                    }),
                    Object.defineProperty(e.prototype, "lineHeight", {
                        get: function () {
                            return 1.5 * this.label.fontSize;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "gridLength", {
                        get: function () {
                            return this._gridLength;
                        },
                        set: function (t) {
                            ((this._gridLength && !t) || (!this._gridLength && t)) && ((this.gridLineSelection = this.gridLineSelection.remove().setData([])), (this.labelSelection = this.labelSelection.remove().setData([]))),
                                (this._gridLength = t);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.update = function () {
                        var t = this,
                            e = this.group,
                            i = this.scale,
                            n = this.label,
                            r = this.tickScale,
                            o = i.range[0],
                            a = i.range[1],
                            s = Math.abs(a - o) / i.domain.length || 0,
                            h = n.parallel,
                            l = M(this.rotation),
                            u = Math.abs(Math.cos(l)) < 1e-8,
                            c = D(M(this.label.rotation));
                        (e.translationX = this.translation.x), (e.translationY = this.translation.y), (e.rotation = l);
                        var f = this.title;
                        f && (f.node.visible = !1);
                        var d = this.lineHeight,
                            y = this.tickTreeLayout,
                            g = i.ticks(),
                            m = y ? y.nodes : [],
                            v = !!y && y.depth > 1,
                            b = r.ticks(),
                            x = n.mirrored ? 1 : -1,
                            _ = D(l),
                            k = !c && _ >= 0 && _ <= Math.PI ? -1 : 1,
                            w = D(l - Math.PI / 2),
                            S = !c && w >= 0 && w <= Math.PI ? -1 : 1,
                            O = this.gridLineSelection.setData(this.gridLength ? b : []);
                        O.exit.remove();
                        var C = O.enter.append(P),
                            A = O.merge(C),
                            E = this.labelSelection.setData(m);
                        E.exit.remove();
                        var T = E.enter.append(p),
                            j = E.merge(T),
                            F = n.formatter,
                            I = 0;
                        j.each(function (t, e, i) {
                            (t.fontStyle = n.fontStyle),
                                (t.fontWeight = n.fontWeight),
                                (t.fontSize = n.fontSize),
                                (t.fontFamily = n.fontFamily),
                                (t.fill = n.color),
                                (t.textBaseline = -1 === k ? "bottom" : "hanging"),
                                f && 0 === i
                                    ? ((t.text = f.text), (t.fontSize = f.fontSize), (t.fontStyle = f.fontStyle), (t.fontWeight = f.fontWeight), (t.fontFamily = f.fontFamily), (t.textBaseline = "hanging"), (t.visible = g.length > 0))
                                    : (t.text = F ? F({ value: String(e.label), index: i }) : String(e.label)),
                                (t.textAlign = "center"),
                                (t.translationX = e.screenY - 0.25 * n.fontSize),
                                (t.translationY = e.screenX);
                            var r = t.computeBBox();
                            r && r.width > I && (I = r.width);
                        });
                        var N = x * n.padding,
                            L = h ? (k * Math.PI) / 2 : -1 === S ? Math.PI : 0,
                            B = this.label.grid,
                            z = [];
                        j.each(function (e, i, n) {
                            if (
                                ((e.x = N),
                                (e.rotationCenterX = N),
                                i.children.length ? ((e.translationX -= I - d + t.label.padding), (e.rotation = u ? L : -Math.PI / 2)) : ((e.rotation = c), (e.textAlign = "end"), (e.textBaseline = "middle")),
                                i.parent && v)
                            ) {
                                var r = i.children.length ? i.screenX - (i.leafCount * s) / 2 : i.screenX - s / 2;
                                if (i.children.length) {
                                    var o = -I - 2 * t.label.padding + i.screenY;
                                    z.push({
                                        y: r,
                                        x1: o + d,
                                        x2: o,
                                        toString: function () {
                                            return String(n);
                                        },
                                    });
                                } else
                                    (i.number !== i.children.length - 1 || B) &&
                                        z.push({
                                            y: r,
                                            x1: 0,
                                            x2: -I - 2 * t.label.padding,
                                            toString: function () {
                                                return String(n);
                                            },
                                        });
                            }
                        });
                        var K = 0;
                        z.forEach(function (t) {
                            return (K = Math.min(K, t.x2));
                        }),
                            (this.longestSeparatorLength = Math.abs(K)),
                            z.push({
                                y: Math.max(o, a),
                                x1: 0,
                                x2: K,
                                toString: function () {
                                    return String(z.length);
                                },
                            });
                        var R = this.separatorSelection.setData(z);
                        R.exit.remove();
                        var V = R.enter.append(P),
                            W = R.merge(V);
                        (this.separatorSelection = W),
                            W.each(function (e, i) {
                                (e.x1 = i.x1), (e.x2 = i.x2), (e.y1 = i.y), (e.y2 = i.y), (e.stroke = t.tick.color), (e.fill = void 0), (e.strokeWidth = 1);
                            }),
                            (this.gridLineSelection = A),
                            (this.labelSelection = j);
                        for (var Y = y ? y.depth + 1 : 1, X = [], H = 0; H < Y; H++) X.push(H);
                        var U = this.axisLineSelection.setData(X);
                        U.exit.remove();
                        var G = U.enter.append(P),
                            q = U.merge(G);
                        if (
                            ((this.axisLineSelection = q),
                            q.each(function (e, i, n) {
                                var r = n > 0 ? -I - 2 * t.label.padding - (n - 1) * d : 0;
                                (e.x1 = r), (e.x2 = r), (e.y1 = o), (e.y2 = a), (e.strokeWidth = t.line.width), (e.stroke = t.line.color), (e.visible = g.length > 0 && (0 === n || (B && v)));
                            }),
                            this.gridLength)
                        ) {
                            var J = this.gridStyle,
                                Z = J.length;
                            A.each(function (e, i, n) {
                                var a = Math.round(r.convert(i));
                                (e.x1 = 0), (e.x2 = -x * t.gridLength), (e.y1 = a), (e.y2 = a), (e.visible = Math.abs(e.parent.translationY - o) > 1);
                                var s = J[n % Z];
                                (e.stroke = s.stroke), (e.strokeWidth = t.tick.width), (e.lineDash = s.lineDash), (e.fill = void 0);
                            });
                        }
                    }),
                    (e.prototype.computeBBox = function (t) {
                        var e = !t || !t.excludeTitle,
                            i = 1 / 0,
                            o = -1 / 0,
                            a = 1 / 0,
                            s = -1 / 0;
                        return (
                            this.labelSelection.each(function (t, n, h) {
                                if (h > 0 || e) {
                                    t.computeTransformMatrix();
                                    var l = r.flyweight(t.matrix),
                                        u = t.computeBBox();
                                    if (u) {
                                        var c = l.transformBBox(u);
                                        (i = Math.min(i, c.x)), (o = Math.max(o, c.x + c.width)), (a = Math.min(a, c.y)), (s = Math.max(s, c.y + c.height));
                                    }
                                }
                            }),
                            new n(i, a, Math.max(o - i, this.longestSeparatorLength), s - a)
                        );
                    }),
                    (e.className = "GroupedCategoryAxis"),
                    (e.type = "groupedCategory"),
                    e
                );
            })(Q),
            bt = (function () {
                function t(t, e, i) {
                    var n = this;
                    void 0 === t && (t = window.document),
                        (this.id = o(this)),
                        (this._dirty = !1),
                        (this.animationFrameId = 0),
                        (this._root = null),
                        (this._frameIndex = 0),
                        (this._renderFrameIndex = !1),
                        (this.render = function () {
                            var t = n,
                                e = t.ctx,
                                i = t.root;
                            (n.animationFrameId = 0),
                                !i || i.visible
                                    ? (e.clearRect(0, 0, n.width, n.height),
                                      i && (e.save(), i.visible && i.render(e), e.restore()),
                                      n._frameIndex++,
                                      n.renderFrameIndex && ((e.fillStyle = "white"), e.fillRect(0, 0, 40, 15), (e.fillStyle = "black"), e.fillText(n.frameIndex.toString(), 0, 10)),
                                      (n.dirty = !1))
                                    : (n.dirty = !1);
                        }),
                        (this.canvas = new c(t, e, i)),
                        (this.ctx = this.canvas.context);
                }
                return (
                    Object.defineProperty(t.prototype, "container", {
                        get: function () {
                            return this.canvas.container;
                        },
                        set: function (t) {
                            this.canvas.container = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.download = function (t) {
                        this.canvas.download(t);
                    }),
                    (t.prototype.getDataURL = function (t) {
                        return this.canvas.getDataURL(t);
                    }),
                    Object.defineProperty(t.prototype, "width", {
                        get: function () {
                            return this.canvas.width;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "height", {
                        get: function () {
                            return this.canvas.height;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.resize = function (t, e) {
                        var i = this;
                        this.canvas.resize(t, e, function () {
                            return (i.dirty = !0);
                        });
                    }),
                    Object.defineProperty(t.prototype, "dirty", {
                        get: function () {
                            return this._dirty;
                        },
                        set: function (t) {
                            t && !this._dirty && (this.animationFrameId = requestAnimationFrame(this.render)), (this._dirty = t);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.cancelRender = function () {
                        this.animationFrameId && (cancelAnimationFrame(this.animationFrameId), (this.animationFrameId = 0), (this._dirty = !1));
                    }),
                    Object.defineProperty(t.prototype, "root", {
                        get: function () {
                            return this._root;
                        },
                        set: function (t) {
                            t !== this._root && (this._root && this._root._setScene(void 0), (this._root = t), t && (null === t.parent && t.scene && t.scene !== this && (t.scene.root = null), t._setScene(this)), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.appendPath = function (t) {
                        var e = this.ctx,
                            i = t.commands,
                            n = t.params,
                            r = i.length,
                            o = 0;
                        e.beginPath();
                        for (var a = 0; a < r; a++)
                            switch (i[a]) {
                                case "M":
                                    e.moveTo(n[o++], n[o++]);
                                    break;
                                case "L":
                                    e.lineTo(n[o++], n[o++]);
                                    break;
                                case "C":
                                    e.bezierCurveTo(n[o++], n[o++], n[o++], n[o++], n[o++], n[o++]);
                                    break;
                                case "Z":
                                    e.closePath();
                            }
                    }),
                    Object.defineProperty(t.prototype, "frameIndex", {
                        get: function () {
                            return this._frameIndex;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "renderFrameIndex", {
                        get: function () {
                            return this._renderFrameIndex;
                        },
                        set: function (t) {
                            this._renderFrameIndex !== t && ((this._renderFrameIndex = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.className = "Scene"),
                    t
                );
            })(),
            xt = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })();
        ((dt = t.RectSizing || (t.RectSizing = {}))[(dt.Content = 0)] = "Content"), (dt[(dt.Border = 1)] = "Border");
        var _t = (function (e) {
                function i() {
                    var i = (null !== e && e.apply(this, arguments)) || this;
                    return (i._x = 0), (i._y = 0), (i._width = 10), (i._height = 10), (i._radius = 0), (i._crisp = !1), (i.effectiveStrokeWidth = u.defaultStyles.strokeWidth), (i._sizing = t.RectSizing.Content), i;
                }
                return (
                    xt(i, e),
                    Object.defineProperty(i.prototype, "x", {
                        get: function () {
                            return this._x;
                        },
                        set: function (t) {
                            this._x !== t && ((this._x = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "y", {
                        get: function () {
                            return this._y;
                        },
                        set: function (t) {
                            this._y !== t && ((this._y = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "width", {
                        get: function () {
                            return this._width;
                        },
                        set: function (t) {
                            this._width !== t && ((this._width = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "height", {
                        get: function () {
                            return this._height;
                        },
                        set: function (t) {
                            this._height !== t && ((this._height = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "radius", {
                        get: function () {
                            return this._radius;
                        },
                        set: function (t) {
                            this._radius !== t && ((this._radius = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "crisp", {
                        get: function () {
                            return this._crisp;
                        },
                        set: function (t) {
                            this._crisp !== t && ((this._crisp = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "strokeWidth", {
                        get: function () {
                            return this._strokeWidth;
                        },
                        set: function (e) {
                            this._strokeWidth !== e && ((this._strokeWidth = e), this.crisp || this.sizing === t.RectSizing.Border ? (this.dirtyPath = !0) : ((this.effectiveStrokeWidth = e), (this.dirty = !0)));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "sizing", {
                        get: function () {
                            return this._sizing;
                        },
                        set: function (t) {
                            this._sizing !== t && ((this._sizing = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (i.prototype.updatePath = function () {
                        var e = this.sizing === t.RectSizing.Border,
                            i = this.path;
                        i.clear();
                        var n,
                            r = this.x,
                            o = this.y,
                            a = this.width,
                            s = this.height;
                        if (e) {
                            var h = a / 2,
                                l = s / 2;
                            (n = Math.min(this.strokeWidth, h, l)), (r = Math.min(r + n / 2, r + h)), (o = Math.min(o + n / 2, o + l)), (a = Math.max(a - n, 0)), (s = Math.max(s - n, 0));
                        } else n = this.strokeWidth;
                        if (((this.effectiveStrokeWidth = n), this.crisp && !e)) {
                            var u = (Math.floor(n) % 2) / 2;
                            i.rect(Math.floor(r) + u, Math.floor(o) + u, Math.floor(a) + Math.floor((r % 1) + (a % 1)), Math.floor(s) + Math.floor((o % 1) + (s % 1)));
                        } else i.rect(r, o, a, s);
                    }),
                    (i.prototype.computeBBox = function () {
                        return new n(this.x, this.y, this.width, this.height);
                    }),
                    (i.prototype.isPointInPath = function (t, e) {
                        var i = this.transformPoint(t, e);
                        return this.computeBBox().containsPoint(i.x, i.y);
                    }),
                    (i.prototype.isPointInStroke = function (t, e) {
                        return !1;
                    }),
                    (i.prototype.fillStroke = function (t) {
                        var e = this.scene.canvas.pixelRatio || 1;
                        if (this.fill) {
                            (t.fillStyle = this.fill), (t.globalAlpha = this.opacity * this.fillOpacity);
                            var i = this.fillShadow;
                            i && i.enabled && ((t.shadowColor = i.color), (t.shadowOffsetX = i.xOffset * e), (t.shadowOffsetY = i.yOffset * e), (t.shadowBlur = i.blur * e)), t.fill();
                        }
                        if (((t.shadowColor = "rgba(0, 0, 0, 0)"), this.stroke && this.effectiveStrokeWidth)) {
                            (t.strokeStyle = this.stroke),
                                (t.globalAlpha = this.opacity * this.strokeOpacity),
                                (t.lineWidth = this.effectiveStrokeWidth),
                                this.lineDash && t.setLineDash(this.lineDash),
                                this.lineDashOffset && (t.lineDashOffset = this.lineDashOffset),
                                this.lineCap && (t.lineCap = this.lineCap),
                                this.lineJoin && (t.lineJoin = this.lineJoin);
                            var n = this.strokeShadow;
                            n && n.enabled && ((t.shadowColor = n.color), (t.shadowOffsetX = n.xOffset * e), (t.shadowOffsetY = n.yOffset * e), (t.shadowBlur = n.blur * e)), t.stroke();
                        }
                    }),
                    (i.className = "Rect"),
                    i
                );
            })(z),
            kt = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            wt = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._x = 0), (e._y = 0), (e._size = 12), e;
                }
                return (
                    kt(e, t),
                    Object.defineProperty(e.prototype, "x", {
                        get: function () {
                            return this._x;
                        },
                        set: function (t) {
                            this._x !== t && ((this._x = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "y", {
                        get: function () {
                            return this._y;
                        },
                        set: function (t) {
                            this._y !== t && ((this._y = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "size", {
                        get: function () {
                            return this._size;
                        },
                        set: function (t) {
                            this._size !== t && ((this._size = Math.abs(t)), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.computeBBox = function () {
                        var t = this.x,
                            e = this.y,
                            i = this.size,
                            r = i / 2;
                        return new n(t - r, e - r, i, i);
                    }),
                    e
                );
            })(z),
            St = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            Ot = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    St(e, t),
                    (e.prototype.updatePath = function () {
                        var t = this.path,
                            e = this.x,
                            i = this.y,
                            n = this.size / 2;
                        t.clear(), t.moveTo(e - n, i - n), t.lineTo(e + n, i - n), t.lineTo(e + n, i + n), t.lineTo(e - n, i + n), t.closePath();
                    }),
                    (e.className = "Square"),
                    e
                );
            })(wt),
            Pt = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            Ct = (function (t) {
                function e() {
                    var e = t.call(this) || this;
                    (e.label = new p()), (e._marker = new Ot()), (e._markerSize = 15), (e._spacing = 8);
                    var i = e.label;
                    return (i.textBaseline = "middle"), (i.fontSize = 12), (i.fontFamily = "Verdana, sans-serif"), (i.fill = "black"), (i.y = c.has.textMetrics ? 1 : 0), e.append([e.marker, i]), e.update(), e;
                }
                return (
                    Pt(e, t),
                    Object.defineProperty(e.prototype, "text", {
                        get: function () {
                            return this.label.text;
                        },
                        set: function (t) {
                            this.label.text = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "fontStyle", {
                        get: function () {
                            return this.label.fontStyle;
                        },
                        set: function (t) {
                            this.label.fontStyle = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "fontWeight", {
                        get: function () {
                            return this.label.fontWeight;
                        },
                        set: function (t) {
                            this.label.fontWeight = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "fontSize", {
                        get: function () {
                            return this.label.fontSize;
                        },
                        set: function (t) {
                            this.label.fontSize = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "fontFamily", {
                        get: function () {
                            return this.label.fontFamily;
                        },
                        set: function (t) {
                            this.label.fontFamily = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "color", {
                        get: function () {
                            return this.label.fill;
                        },
                        set: function (t) {
                            this.label.fill = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "marker", {
                        get: function () {
                            return this._marker;
                        },
                        set: function (t) {
                            this._marker !== t && (this.removeChild(this._marker), (this._marker = t), this.appendChild(t), this.update());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "markerSize", {
                        get: function () {
                            return this._markerSize;
                        },
                        set: function (t) {
                            this._markerSize !== t && ((this._markerSize = t), this.update());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "markerFill", {
                        get: function () {
                            return this.marker.fill;
                        },
                        set: function (t) {
                            this.marker.fill = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "markerStroke", {
                        get: function () {
                            return this.marker.stroke;
                        },
                        set: function (t) {
                            this.marker.stroke = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "markerStrokeWidth", {
                        get: function () {
                            return this.marker.strokeWidth;
                        },
                        set: function (t) {
                            this.marker.strokeWidth = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "markerFillOpacity", {
                        get: function () {
                            return this.marker.fillOpacity;
                        },
                        set: function (t) {
                            this.marker.fillOpacity = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "markerStrokeOpacity", {
                        get: function () {
                            return this.marker.strokeOpacity;
                        },
                        set: function (t) {
                            this.marker.strokeOpacity = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "opacity", {
                        get: function () {
                            return this.marker.opacity;
                        },
                        set: function (t) {
                            (this.marker.opacity = t), (this.label.opacity = t);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "spacing", {
                        get: function () {
                            return this._spacing;
                        },
                        set: function (t) {
                            this._spacing !== t && ((this._spacing = t), this.update());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.update = function () {
                        var t = this.marker,
                            e = this.markerSize;
                        (t.size = e), (this.label.x = e / 2 + this.spacing);
                    }),
                    (e.className = "MarkerLabel"),
                    e
                );
            })(k),
            Dt = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            At = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    Dt(e, t),
                    (e.prototype.updatePath = function () {
                        var t = this.x,
                            e = this.y,
                            i = this.path,
                            n = this.size / 2;
                        i.clear(), i.cubicArc(t, e, n, n, 0, 0, 2 * Math.PI, 0), i.closePath();
                    }),
                    (e.className = "Circle"),
                    e
                );
            })(wt),
            Et = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            Mt = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    Et(e, t),
                    (e.prototype.updatePath = function () {
                        var t = this.x,
                            e = this.y,
                            i = this.path,
                            n = this.size / 4.2;
                        i.clear(),
                            i.moveTo((t -= n), e),
                            i.lineTo((t -= n), (e -= n)),
                            i.lineTo((t += n), (e -= n)),
                            i.lineTo((t += n), (e += n)),
                            i.lineTo((t += n), (e -= n)),
                            i.lineTo((t += n), (e += n)),
                            i.lineTo((t -= n), (e += n)),
                            i.lineTo((t += n), (e += n)),
                            i.lineTo((t -= n), (e += n)),
                            i.lineTo((t -= n), (e -= n)),
                            i.lineTo((t -= n), (e += n)),
                            i.lineTo((t -= n), (e -= n)),
                            i.closePath();
                    }),
                    (e.className = "Cross"),
                    e
                );
            })(wt),
            Tt = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            jt = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    Tt(e, t),
                    (e.prototype.updatePath = function () {
                        var t = this.x,
                            e = this.y,
                            i = this.path,
                            n = this.size / 2;
                        i.clear(), i.moveTo(t, (e -= n)), i.lineTo((t += n), (e += n)), i.lineTo((t -= n), (e += n)), i.lineTo((t -= n), (e -= n)), i.lineTo((t += n), (e -= n)), i.closePath();
                    }),
                    (e.className = "Diamond"),
                    e
                );
            })(wt),
            Ft = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            It = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    Ft(e, t),
                    (e.prototype.rad = function (t) {
                        return (t / 180) * Math.PI;
                    }),
                    (e.prototype.updatePath = function () {
                        var t = this.x,
                            e = this.path,
                            i = this.size,
                            n = this.rad,
                            r = i / 4,
                            o = this.y + r / 2;
                        e.clear(), e.cubicArc(t - r, o - r, r, r, 0, n(130), n(330), 0), e.cubicArc(t + r, o - r, r, r, 0, n(220), n(50), 0), e.lineTo(t, o + r), e.closePath();
                    }),
                    (e.className = "Heart"),
                    e
                );
            })(wt),
            Nt = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            Lt = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    Nt(e, t),
                    (e.prototype.updatePath = function () {
                        var t = this.x,
                            e = this.y,
                            i = this.path,
                            n = this.size / 3,
                            r = n / 2;
                        i.clear(),
                            i.moveTo((t -= r), (e -= r)),
                            i.lineTo(t, (e -= n)),
                            i.lineTo((t += n), e),
                            i.lineTo(t, (e += n)),
                            i.lineTo((t += n), e),
                            i.lineTo(t, (e += n)),
                            i.lineTo((t -= n), e),
                            i.lineTo(t, (e += n)),
                            i.lineTo((t -= n), e),
                            i.lineTo(t, (e -= n)),
                            i.lineTo((t -= n), e),
                            i.lineTo(t, (e -= n)),
                            i.closePath();
                    }),
                    (e.className = "Plus"),
                    e
                );
            })(wt),
            Bt = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            zt = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    Bt(e, t),
                    (e.prototype.updatePath = function () {
                        var t = this.x,
                            e = this.y,
                            i = this.path,
                            n = 1.1 * this.size;
                        i.clear(), i.moveTo(t, (e -= 0.48 * n)), i.lineTo((t += 0.5 * n), (e += 0.87 * n)), i.lineTo((t -= n), e), i.closePath();
                    }),
                    (e.className = "Triangle"),
                    e
                );
            })(wt);
        function Kt(t) {
            if ((void 0 === t && (t = Ot), "string" == typeof t))
                switch (t) {
                    case "circle":
                        return At;
                    case "cross":
                        return Mt;
                    case "diamond":
                        return jt;
                    case "heart":
                        return It;
                    case "plus":
                        return Lt;
                    case "triangle":
                        return zt;
                    default:
                        return Ot;
                }
            return "function" == typeof t ? t : Ot;
        }
        var Rt,
            Vt,
            Wt = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            Yt = function (t, e, i, n) {
                var r,
                    o = arguments.length,
                    a = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a;
            };
        !(function (t) {
            (t[(t.Vertical = 0)] = "Vertical"), (t[(t.Horizontal = 1)] = "Horizontal");
        })(Rt || (Rt = {})),
            ((Vt = t.LegendPosition || (t.LegendPosition = {})).Top = "top"),
            (Vt.Right = "right"),
            (Vt.Bottom = "bottom"),
            (Vt.Left = "left");
        var Xt,
            Ht = (function (e) {
                function i() {
                    var i = e.call(this) || this;
                    return (
                        (i.id = o(i)),
                        (i.group = new k()),
                        (i.itemSelection = S.select(i.group).selectAll()),
                        (i.oldSize = [0, 0]),
                        (i.data = []),
                        (i.enabled = !0),
                        (i.orientation = Rt.Vertical),
                        (i.position = t.LegendPosition.Right),
                        (i.spacing = 20),
                        (i.layoutHorizontalSpacing = 16),
                        (i.layoutVerticalSpacing = 8),
                        (i.itemSpacing = 8),
                        (i.markerSize = 15),
                        (i.strokeWidth = 1),
                        (i.color = "black"),
                        (i.fontSize = 12),
                        (i.fontFamily = "Verdana, sans-serif"),
                        (i._size = [0, 0]),
                        i.addPropertyListener("data", i.onDataChange),
                        i.addPropertyListener("enabled", i.onEnabledChange),
                        i.addPropertyListener("position", i.onPositionChange),
                        i.addPropertyListener("markerShape", i.onMarkerShapeChange),
                        i.addEventListener("change", i.update),
                        i
                    );
                }
                return (
                    Wt(i, e),
                    Object.defineProperty(i.prototype, "size", {
                        get: function () {
                            return this._size;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (i.prototype.onDataChange = function (t) {
                        this.group.visible = t.value.length > 0 && this.enabled;
                    }),
                    (i.prototype.onEnabledChange = function (t) {
                        this.group.visible = t.value && this.data.length > 0;
                    }),
                    (i.prototype.onPositionChange = function (t) {
                        switch (t.value) {
                            case "right":
                            case "left":
                                this.orientation = Rt.Vertical;
                                break;
                            case "bottom":
                            case "top":
                                this.orientation = Rt.Horizontal;
                        }
                    }),
                    (i.prototype.onMarkerShapeChange = function () {
                        (this.itemSelection = this.itemSelection.setData([])), this.itemSelection.exit.remove();
                    }),
                    (i.prototype.performLayout = function (t, e) {
                        var i = this,
                            n = this.markerShape,
                            r = this.layoutHorizontalSpacing,
                            o = this.layoutVerticalSpacing,
                            a = this.itemSelection.setData(this.data, function (t, e) {
                                var i = Kt(n || e.marker.shape);
                                return e.id + "-" + e.itemId + "-" + i.name;
                            });
                        a.exit.remove();
                        var s = a.enter.append(Ct).each(function (t, e) {
                                var i = Kt(n || e.marker.shape);
                                t.marker = new i();
                            }),
                            h = (this.itemSelection = a.merge(s)),
                            l = h.size,
                            u = [];
                        h.each(function (t, e) {
                            (t.markerSize = i.markerSize),
                                (t.fontStyle = i.fontStyle),
                                (t.fontWeight = i.fontWeight),
                                (t.fontSize = i.fontSize),
                                (t.fontFamily = i.fontFamily),
                                (t.text = e.label.text),
                                (t.spacing = i.itemSpacing),
                                u.push(t.computeBBox());
                        });
                        var c = u.length && u[0].height,
                            f = 0,
                            p = 0,
                            d = 0,
                            y = 0;
                        switch (this.orientation) {
                            case Rt.Horizontal:
                                if (!(isFinite(t) && t > 0)) return !1;
                                f = 0;
                                var g = 0;
                                do {
                                    var m = 0;
                                    (g = 0), (p = 0), f++;
                                    for (var v = 0; v < l; ) (_ = u[v]).width > p && (p = _.width), ++v % f == 0 && ((m += p), (p = 0), g++);
                                    v % f != 0 && ((m += p), g++), (d = m + (g - 1) * r);
                                } while (d > t && g > 1);
                                y = c * f + (f - 1) * o;
                                break;
                            case Rt.Vertical:
                                if (!(isFinite(e) && e > 0)) return !1;
                                f = 2 * l;
                                do {
                                    (f = (f >> 1) + (f % 2)), (p = 0), (m = 0);
                                    var b = 0,
                                        x = 0;
                                    for (v = 0; v < l; ) {
                                        var _ = u[v];
                                        x || (b += _.height), _.width > p && (p = _.width), ++v % f == 0 && ((m += p), (p = 0), x++);
                                    }
                                    v % f != 0 && ((m += p), x++), (d = m + (x - 1) * r), (y = b + (f - 1) * o);
                                } while (y > e && f > 1);
                        }
                        var k = (t - d) / 2,
                            w = (e - y) / 2,
                            S = 0,
                            O = 0;
                        (p = 0),
                            h.each(function (t, e, i) {
                                (t.translationX = Math.floor(k + S)), (t.translationY = Math.floor(w + O));
                                var n = u[i];
                                n.width > p && (p = n.width), (i + 1) % f == 0 ? ((S += p + r), (O = 0), (p = 0)) : (O += n.height + o);
                            }),
                            this.update();
                        var P = this._size,
                            C = this.oldSize;
                        (P[0] = d), (P[1] = y), (P[0] === C[0] && P[1] === C[1]) || ((C[0] = P[0]), (C[1] = P[1]));
                    }),
                    (i.prototype.update = function () {
                        var t = this;
                        this.itemSelection.each(function (e, i) {
                            var n = i.marker;
                            (e.markerFill = n.fill),
                                (e.markerStroke = n.stroke),
                                (e.markerStrokeWidth = t.strokeWidth),
                                (e.markerFillOpacity = n.fillOpacity),
                                (e.markerStrokeOpacity = n.strokeOpacity),
                                (e.opacity = i.enabled ? 1 : 0.5),
                                (e.color = t.color);
                        });
                    }),
                    (i.prototype.getDatumForPoint = function (t, e) {
                        var i = this.group.pickNode(t, e);
                        if (i && i.parent) return i.parent.datum;
                    }),
                    (i.className = "Legend"),
                    Yt([g("layoutChange")], i.prototype, "data", void 0),
                    Yt([g("layoutChange")], i.prototype, "enabled", void 0),
                    Yt([g("layoutChange")], i.prototype, "orientation", void 0),
                    Yt([g("layoutChange")], i.prototype, "position", void 0),
                    Yt([g("layoutChange")], i.prototype, "spacing", void 0),
                    Yt([g("layoutChange")], i.prototype, "layoutHorizontalSpacing", void 0),
                    Yt([g("layoutChange")], i.prototype, "layoutVerticalSpacing", void 0),
                    Yt([g("layoutChange")], i.prototype, "itemSpacing", void 0),
                    Yt([g("layoutChange")], i.prototype, "markerShape", void 0),
                    Yt([g("layoutChange")], i.prototype, "markerSize", void 0),
                    Yt([g("change")], i.prototype, "strokeWidth", void 0),
                    Yt([g("change")], i.prototype, "color", void 0),
                    Yt([g("layoutChange")], i.prototype, "fontStyle", void 0),
                    Yt([g("layoutChange")], i.prototype, "fontWeight", void 0),
                    Yt([g("layoutChange")], i.prototype, "fontSize", void 0),
                    Yt([g("layoutChange")], i.prototype, "fontFamily", void 0),
                    i
                );
            })(y),
            Ut = (function () {
                function t() {}
                return (
                    (t.init = function () {
                        var t = this,
                            e = window.ResizeObserver;
                        e
                            ? (this.resizeObserver = new e(function (e) {
                                  for (var i = 0, n = e; i < n.length; i++) {
                                      var r = n[i],
                                          o = r.contentRect,
                                          a = o.width,
                                          s = o.height;
                                      t.checkSize(t.elements.get(r.target), r.target, a, s);
                                  }
                              }))
                            : window.setInterval(function () {
                                  t.elements.forEach(function (e, i) {
                                      var n = i.clientWidth ? i.clientWidth : 0,
                                          r = i.clientHeight ? i.clientHeight : 0;
                                      t.checkSize(e, i, n, r);
                                  });
                              }, 100),
                            (this.ready = !0);
                    }),
                    (t.checkSize = function (t, e, i, n) {
                        t && ((t.size && i === t.size.width && n === t.size.height) || ((t.size = { width: i, height: n }), t.cb(t.size, e)));
                    }),
                    (t.observe = function (t, e) {
                        this.ready || this.init(), this.unobserve(t), this.resizeObserver && this.resizeObserver.observe(t), this.elements.set(t, { cb: e });
                    }),
                    (t.unobserve = function (t) {
                        this.resizeObserver && this.resizeObserver.unobserve(t), this.elements.delete(t);
                    }),
                    (t.elements = new Map()),
                    (t.requestAnimationFrameId = 0),
                    (t.ready = !1),
                    t
                );
            })(),
            Gt = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            qt = function (t, e, i, n) {
                var r,
                    o = arguments.length,
                    a = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a;
            },
            Jt = (function (e) {
                function i() {
                    var i = (null !== e && e.apply(this, arguments)) || this;
                    return (
                        (i.id = o(i)),
                        (i.group = new k()),
                        (i.directions = [t.ChartAxisDirection.X, t.ChartAxisDirection.Y]),
                        (i.tooltipEnabled = !0),
                        (i.data = void 0),
                        (i.visible = !0),
                        (i.showInLegend = !0),
                        (i.scheduleLayout = function () {
                            i.fireEvent({ type: "layoutChange" });
                        }),
                        (i.scheduleData = function () {
                            i.fireEvent({ type: "dataChange" });
                        }),
                        i
                    );
                }
                return (
                    Gt(i, e),
                    Object.defineProperty(i.prototype, "type", {
                        get: function () {
                            return this.constructor.type || "";
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (i.prototype.getKeys = function (t) {
                        var e = this,
                            i = this.directionKeys,
                            n = i && i[t],
                            r = [];
                        return (
                            n &&
                                n.forEach(function (t) {
                                    var i = e[t];
                                    i && (Array.isArray(i) ? r.push.apply(r, i) : r.push(i));
                                }),
                            r
                        );
                    }),
                    (i.prototype.getNodeData = function () {
                        return [];
                    }),
                    (i.prototype.fireNodeClickEvent = function (t) {}),
                    (i.prototype.toggleSeriesItem = function (t, e) {
                        this.visible = e;
                    }),
                    (i.prototype.onHighlightChange = function () {}),
                    (i.prototype.fixNumericExtent = function (t, e) {
                        if (!t) return [0, 1];
                        var i = t[0],
                            n = t[1];
                        return i === n && ((i -= 1), (n += 1)), (isFinite(i) && isFinite(n)) || ((i = 0), (n = 1)), [i, n];
                    }),
                    qt([g("dataChange")], i.prototype, "data", void 0),
                    qt([g("dataChange")], i.prototype, "visible", void 0),
                    qt([g("layoutChange")], i.prototype, "showInLegend", void 0),
                    i
                );
            })(y),
            Zt = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            $t = function (t, e, i, n) {
                var r,
                    o = arguments.length,
                    a = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a;
            },
            Qt = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.enabled = !0), (e.shape = At), (e.size = 8), (e.minSize = 8), (e.strokeWidth = 1), e;
                }
                return (
                    Zt(e, t),
                    $t([g("change")], e.prototype, "enabled", void 0),
                    $t([g("change")], e.prototype, "shape", void 0),
                    $t([g("change")], e.prototype, "size", void 0),
                    $t([g("change")], e.prototype, "minSize", void 0),
                    $t([g("change")], e.prototype, "fill", void 0),
                    $t([g("change")], e.prototype, "stroke", void 0),
                    $t([g("change")], e.prototype, "strokeWidth", void 0),
                    e
                );
            })(y),
            te = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            ee = (function (e) {
                function i() {
                    var i,
                        n = (null !== e && e.apply(this, arguments)) || this;
                    return (n.directionKeys = (((i = {})[t.ChartAxisDirection.X] = ["xKey"]), (i[t.ChartAxisDirection.Y] = ["yKey"]), i)), n;
                }
                return te(i, e), i;
            })(Jt),
            ie = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return te(e, t), e;
            })(Qt),
            ne = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            re = function () {
                return (re =
                    Object.assign ||
                    function (t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++) for (var r in (e = arguments[i])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t;
                    }).apply(this, arguments);
            },
            oe = function (t, e, i, n) {
                var r,
                    o = arguments.length,
                    a = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a;
            },
            ae = (function (t) {
                function e(n) {
                    void 0 === n && (n = window.document);
                    var r = t.call(this) || this;
                    (r.id = o(r)),
                        (r.background = new _t()),
                        (r.legend = new Ht()),
                        (r.legendAutoPadding = new i()),
                        (r.captionAutoPadding = 0),
                        (r._container = void 0),
                        (r._data = []),
                        (r._autoSize = !1),
                        (r.padding = new i(20)),
                        (r._axes = []),
                        (r._series = []),
                        (r._axesChanged = !1),
                        (r._seriesChanged = !1),
                        (r.layoutCallbackId = 0),
                        (r._performLayout = function () {
                            var t;
                            (r.layoutCallbackId = 0),
                                r.pendingSize && ((t = r.scene).resize.apply(t, r.pendingSize), (r.pendingSize = void 0)),
                                (r.background.width = r.width),
                                (r.background.height = r.height),
                                r.performLayout(),
                                r.layoutPending || r.fireEvent({ type: "layoutDone" });
                        }),
                        (r.dataCallbackId = 0),
                        (r.onMouseMove = function (t) {
                            var e,
                                i = r,
                                n = i.lastPick,
                                o = i.tooltipTracking,
                                a = r.pickSeriesNode(t.offsetX, t.offsetY);
                            if (a && a.node instanceof u) {
                                var s = a.node;
                                if (((e = s.datum), n && n.datum === e && (n.node = s), !s.datum.point || !o)) return void (n && n.node === s ? a.series.tooltipEnabled && r.showTooltip(t) : r.onSeriesDatumPick(t, s.datum, s));
                            }
                            var h = !1;
                            if (o) {
                                var l = r.pickClosestSeriesNodeDatum(t.offsetX, t.offsetY);
                                if (l && l.point) {
                                    var c = l.point,
                                        f = c.x,
                                        p = c.y,
                                        d = r.scene.canvas,
                                        y = l.series.group.inverseTransformPoint(f, p),
                                        g = d.element.getBoundingClientRect();
                                    r.onSeriesDatumPick({ pageX: Math.round(g.left + window.pageXOffset + y.x), pageY: Math.round(g.top + window.pageYOffset + y.y) }, l, e === l ? a.node : void 0);
                                } else h = !0;
                            }
                            !n || (!h && o) || (r.dehighlightDatum(), r.hideTooltip(), (r.lastPick = void 0));
                        }),
                        (r.onMouseOut = function (t) {
                            r.toggleTooltip(!1);
                        }),
                        (r.onClick = function (t) {
                            r.checkSeriesNodeClick(), r.checkLegendClick(t);
                        }),
                        (r._tooltipClass = e.defaultTooltipClass),
                        (r.tooltipTracking = !0);
                    var a = new k(),
                        s = r.background;
                    (s.fill = "white"), a.appendChild(s);
                    var h = (r._element = n.createElement("div"));
                    (h.style.boxSizing = "border-box"), (h.style.overflow = "hidden"), (h.style.height = "100%");
                    var l = new bt(n);
                    (r.scene = l), (l.root = a), (l.container = h), (r.autoSize = !0);
                    var c = r.legend;
                    if (
                        (c.addEventListener("layoutChange", r.onLayoutChange, r),
                        c.addPropertyListener("position", r.onLegendPositionChange, r),
                        (r.tooltipElement = n.createElement("div")),
                        (r.tooltipClass = ""),
                        n.body.appendChild(r.tooltipElement),
                        e.tooltipDocuments.indexOf(n) < 0)
                    ) {
                        var f = n.createElement("style");
                        (f.innerHTML =
                            '\n.ag-chart-tooltip {\n    display: none;\n    position: absolute;\n    user-select: none;\n    pointer-events: none;\n    white-space: nowrap;\n    z-index: 99999;\n    font: 12px Verdana, sans-serif;\n    color: black;\n    background: rgb(244, 244, 244);\n    border-radius: 5px;\n    box-shadow: 0 0 1px rgba(3, 3, 3, 0.7), 0.5vh 0.5vh 1vh rgba(3, 3, 3, 0.25);\n}\n\n.ag-chart-tooltip-visible {\n    display: table;\n}\n\n.ag-chart-tooltip-title {\n    font-weight: bold;\n    padding: 7px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    color: white;\n    background-color: #888888;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n\n.ag-chart-tooltip-content {\n    padding: 7px;\n    line-height: 1.7em;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.ag-chart-tooltip-arrow::before {\n    content: "";\n\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    transform: translateX(-50%);\n\n    border: 6px solid #989898;\n\n    border-left-color: transparent;\n    border-right-color: transparent;\n    border-top-color: #989898;\n    border-bottom-color: transparent;\n\n    width: 0;\n    height: 0;\n\n    margin: 0 auto;\n}\n\n.ag-chart-tooltip-arrow::after {\n    content: "";\n\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    transform: translateX(-50%);\n\n    border: 5px solid black;\n\n    border-left-color: transparent;\n    border-right-color: transparent;\n    border-top-color: rgb(244, 244, 244);\n    border-bottom-color: transparent;\n\n    width: 0;\n    height: 0;\n\n    margin: 0 auto;\n}\n'),
                            n.head.insertBefore(f, n.head.querySelector("style")),
                            e.tooltipDocuments.push(n);
                    }
                    return (
                        r.setupDomListeners(l.canvas.element),
                        r.addPropertyListener("title", r.onCaptionChange),
                        r.addPropertyListener("subtitle", r.onCaptionChange),
                        r.addEventListener("layoutChange", function () {
                            return (r.layoutPending = !0);
                        }),
                        r
                    );
                }
                return (
                    ne(e, t),
                    Object.defineProperty(e.prototype, "container", {
                        get: function () {
                            return this._container;
                        },
                        set: function (t) {
                            if (this._container !== t) {
                                var e = this.element.parentNode;
                                null != e && e.removeChild(this.element), t && t.appendChild(this.element), (this._container = t);
                            }
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "data", {
                        get: function () {
                            return this._data;
                        },
                        set: function (t) {
                            (this._data = t),
                                this.series.forEach(function (e) {
                                    return (e.data = t);
                                });
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "width", {
                        get: function () {
                            return this.pendingSize ? this.pendingSize[0] : this.scene.width;
                        },
                        set: function (t) {
                            (this.autoSize = !1), this.width !== t && ((this.pendingSize = [t, this.height]), this.fireEvent({ type: "layoutChange" }));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "height", {
                        get: function () {
                            return this.pendingSize ? this.pendingSize[1] : this.scene.height;
                        },
                        set: function (t) {
                            (this.autoSize = !1), this.height !== t && ((this.pendingSize = [this.width, t]), this.fireEvent({ type: "layoutChange" }));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "autoSize", {
                        get: function () {
                            return this._autoSize;
                        },
                        set: function (t) {
                            if (this._autoSize !== t)
                                if (((this._autoSize = t), t)) {
                                    var e = this;
                                    Ut.observe(this.element, function (t) {
                                        (t.width === e.width && t.height === e.height) || ((e.pendingSize = [t.width, t.height]), e.fireEvent({ type: "layoutChange" }));
                                    }),
                                        (this.element.style.display = "block");
                                } else Ut.unobserve(this.element), (this.element.style.display = "inline-block");
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.download = function (t) {
                        this.scene.download(t);
                    }),
                    (e.prototype.destroy = function () {
                        var t = this.tooltipElement.parentNode;
                        t && t.removeChild(this.tooltipElement), Ut.unobserve(this.element), (this.container = void 0), this.cleanupDomListeners(this.scene.canvas.element), (this.scene.container = void 0);
                    }),
                    (e.prototype.onLayoutChange = function () {
                        this.layoutPending = !0;
                    }),
                    (e.prototype.onLegendPositionChange = function () {
                        this.legendAutoPadding.clear(), (this.layoutPending = !0);
                    }),
                    (e.prototype.onCaptionChange = function (t) {
                        var e = t.value,
                            i = t.oldValue;
                        i && (i.removeEventListener("change", this.onLayoutChange, this), this.scene.root.removeChild(i.node)), e && (e.addEventListener("change", this.onLayoutChange, this), this.scene.root.appendChild(e.node));
                    }),
                    Object.defineProperty(e.prototype, "element", {
                        get: function () {
                            return this._element;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "axes", {
                        get: function () {
                            return this._axes;
                        },
                        set: function (t) {
                            var e = this,
                                i = this.scene.root;
                            this._axes.forEach(function (t) {
                                return i.removeChild(t.group);
                            }),
                                (this._axes = t
                                    .filter(function (t) {
                                        return !t.linkedTo;
                                    })
                                    .concat(
                                        t.filter(function (t) {
                                            return t.linkedTo;
                                        })
                                    )),
                                this._axes.forEach(function (t) {
                                    return i.insertBefore(t.group, e.seriesRoot);
                                }),
                                (this.axesChanged = !0);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "series", {
                        get: function () {
                            return this._series;
                        },
                        set: function (t) {
                            var e = this;
                            this.removeAllSeries(),
                                t.forEach(function (t) {
                                    return e.addSeries(t);
                                });
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.scheduleLayout = function () {
                        this.layoutPending = !0;
                    }),
                    (e.prototype.scheduleData = function () {
                        this.dehighlightDatum(), (this.dataPending = !0);
                    }),
                    (e.prototype.addSeries = function (t, e) {
                        var i = this.series,
                            n = this.seriesRoot;
                        if (i.indexOf(t) < 0) {
                            var r = e ? i.indexOf(e) : -1;
                            return r >= 0 ? (i.splice(r, 0, t), n.insertBefore(t.group, e.group)) : (i.push(t), n.append(t.group)), this.initSeries(t), (this.seriesChanged = !0), (this.axesChanged = !0), !0;
                        }
                        return !1;
                    }),
                    (e.prototype.initSeries = function (t) {
                        (t.chart = this),
                            t.data || (t.data = this.data),
                            t.addEventListener("layoutChange", this.scheduleLayout, this),
                            t.addEventListener("dataChange", this.scheduleData, this),
                            t.addEventListener("legendChange", this.updateLegend, this),
                            t.addEventListener("nodeClick", this.onSeriesNodeClick, this);
                    }),
                    (e.prototype.freeSeries = function (t) {
                        (t.chart = void 0),
                            t.removeEventListener("layoutChange", this.scheduleLayout, this),
                            t.removeEventListener("dataChange", this.scheduleData, this),
                            t.removeEventListener("legendChange", this.updateLegend, this),
                            t.removeEventListener("nodeClick", this.onSeriesNodeClick, this);
                    }),
                    (e.prototype.addSeriesAfter = function (t, e) {
                        var i = this.series,
                            n = this.seriesRoot;
                        if (i.indexOf(t) < 0) {
                            var r = e ? this.series.indexOf(e) : -1;
                            r >= 0
                                ? (r + 1 < i.length ? n.insertBefore(t.group, i[r + 1].group) : n.append(t.group), this.initSeries(t), i.splice(r + 1, 0, t))
                                : (i.length > 0 ? n.insertBefore(t.group, i[0].group) : n.append(t.group), this.initSeries(t), i.unshift(t)),
                                (this.seriesChanged = !0),
                                (this.axesChanged = !0);
                        }
                        return !1;
                    }),
                    (e.prototype.removeSeries = function (t) {
                        var e = this.series.indexOf(t);
                        return e >= 0 && (this.series.splice(e, 1), this.freeSeries(t), this.seriesRoot.removeChild(t.group), (this.seriesChanged = !0), !0);
                    }),
                    (e.prototype.removeAllSeries = function () {
                        var t = this;
                        this.series.forEach(function (e) {
                            t.freeSeries(e), t.seriesRoot.removeChild(e.group);
                        }),
                            (this._series = []),
                            (this.seriesChanged = !0);
                    }),
                    (e.prototype.assignSeriesToAxes = function () {
                        var t = this;
                        this.axes.forEach(function (e) {
                            var i = e.direction + "Axis",
                                n = [];
                            t.series.forEach(function (t) {
                                t[i] === e && n.push(t);
                            }),
                                (e.boundSeries = n);
                        }),
                            (this.seriesChanged = !1);
                    }),
                    (e.prototype.assignAxesToSeries = function (t) {
                        var e = this;
                        void 0 === t && (t = !1);
                        var i = {};
                        this.axes.forEach(function (t) {
                            var e = t.direction;
                            (i[e] || (i[e] = [])).push(t);
                        }),
                            this.series.forEach(function (n) {
                                if (
                                    (n.directions.forEach(function (r) {
                                        var o = r + "Axis";
                                        if (!n[o] || t) {
                                            var a = i[r];
                                            if (a) {
                                                var s = e.findMatchingAxis(a, n.getKeys(r));
                                                s && (n[o] = s);
                                            }
                                        }
                                    }),
                                    n instanceof ee)
                                ) {
                                    if (!n.xAxis) return void console.warn("Could not find a matching xAxis for the " + n.id + " series.");
                                    if (!n.yAxis) return void console.warn("Could not find a matching yAxis for the " + n.id + " series.");
                                }
                            }),
                            (this.axesChanged = !1);
                    }),
                    (e.prototype.findMatchingAxis = function (t, e) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i],
                                r = n.keys;
                            if (!r.length) return n;
                            if (e) for (var o = 0; o < e.length; o++) if (r.indexOf(e[o]) >= 0) return n;
                        }
                    }),
                    Object.defineProperty(e.prototype, "axesChanged", {
                        get: function () {
                            return this._axesChanged;
                        },
                        set: function (t) {
                            this._axesChanged = t;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "seriesChanged", {
                        get: function () {
                            return this._seriesChanged;
                        },
                        set: function (t) {
                            (this._seriesChanged = t), t && (this.dataPending = !0);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "layoutPending", {
                        get: function () {
                            return !!this.layoutCallbackId;
                        },
                        set: function (t) {
                            t
                                ? this.layoutCallbackId || this.dataPending || (this.layoutCallbackId = requestAnimationFrame(this._performLayout))
                                : this.layoutCallbackId && (cancelAnimationFrame(this.layoutCallbackId), (this.layoutCallbackId = 0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "dataPending", {
                        get: function () {
                            return !!this.dataCallbackId;
                        },
                        set: function (t) {
                            var e = this;
                            this.dataCallbackId && (clearTimeout(this.dataCallbackId), (this.dataCallbackId = 0)),
                                t &&
                                    (this.dataCallbackId = window.setTimeout(function () {
                                        (e.dataPending = !1), e.processData();
                                    }, 0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.processData = function () {
                        (this.layoutPending = !1),
                            this.axesChanged && (this.assignAxesToSeries(!0), this.assignSeriesToAxes()),
                            this.seriesChanged && this.assignSeriesToAxes(),
                            this.series
                                .filter(function (t) {
                                    return t.visible;
                                })
                                .forEach(function (t) {
                                    return t.processData();
                                }),
                            this.updateLegend(),
                            (this.layoutPending = !0);
                    }),
                    (e.prototype.updateLegend = function () {
                        var t = [];
                        this.series
                            .filter(function (t) {
                                return t.showInLegend;
                            })
                            .forEach(function (e) {
                                return e.listSeriesItems(t);
                            }),
                            (this.legend.data = t);
                    }),
                    (e.prototype.positionCaptions = function () {
                        var t = this.title,
                            e = this.subtitle,
                            i = !1,
                            n = !1,
                            r = 10;
                        if (t && t.enabled) {
                            (t.node.x = this.width / 2), (t.node.y = r), (i = !0);
                            var o = t.node.computeBBox();
                            if ((o && (r = o.y + o.height), e && e.enabled)) {
                                (e.node.x = this.width / 2), (e.node.y = r + 10), (n = !0);
                                var a = e.node.computeBBox();
                                a && (r = a.y + a.height);
                            }
                        }
                        t && (t.node.visible = i), e && (e.node.visible = n), (this.captionAutoPadding = Math.floor(r));
                    }),
                    (e.prototype.positionLegend = function () {
                        if (this.legend.enabled && this.legend.data.length) {
                            var t,
                                e = this.legend,
                                i = this.captionAutoPadding,
                                n = this.legendAutoPadding,
                                r = this.width,
                                o = this.height - i,
                                a = e.group,
                                s = e.spacing,
                                h = 0,
                                l = 0;
                            switch (e.position) {
                                case "bottom":
                                    e.performLayout(r - 2 * s, 0), (h = (r - (t = a.computeBBox()).width) / 2 - t.x), (l = i + o - t.height - t.y - s), (n.bottom = t.height);
                                    break;
                                case "top":
                                    e.performLayout(r - 2 * s, 0), (h = (r - (t = a.computeBBox()).width) / 2 - t.x), (l = i + s - t.y), (n.top = t.height);
                                    break;
                                case "left":
                                    e.performLayout(0, o - 2 * s), (h = s - (t = a.computeBBox()).x), (l = i + (o - t.height) / 2 - t.y), (n.left = t.width);
                                    break;
                                default:
                                    e.performLayout(0, o - 2 * s), (h = r - (t = a.computeBBox()).width - t.x - s), (l = i + (o - t.height) / 2 - t.y), (n.right = t.width);
                            }
                            (a.translationX = Math.floor(h + a.translationX)), (a.translationY = Math.floor(l + a.translationY));
                        }
                    }),
                    (e.prototype.setupDomListeners = function (t) {
                        t.addEventListener("mousemove", this.onMouseMove), t.addEventListener("mouseout", this.onMouseOut), t.addEventListener("click", this.onClick);
                    }),
                    (e.prototype.cleanupDomListeners = function (t) {
                        t.removeEventListener("mousemove", this.onMouseMove), t.removeEventListener("mouseout", this.onMouseMove), t.removeEventListener("click", this.onClick);
                    }),
                    (e.prototype.pickSeriesNode = function (t, e) {
                        for (var i = this.series, n = void 0, r = i.length - 1; r >= 0; r--) {
                            var o = i[r];
                            if ((n = o.group.pickNode(t, e))) return { series: o, node: n };
                        }
                    }),
                    (e.prototype.pickClosestSeriesNodeDatum = function (t, e) {
                        if (this.seriesRect && this.seriesRect.containsPoint(t, e)) {
                            for (
                                var i,
                                    n = this.series,
                                    r = 1 / 0,
                                    o = function (o) {
                                        var a = n[o];
                                        if (!a.visible) return "continue";
                                        var s = a.group.transformPoint(t, e);
                                        a.getNodeData().forEach(function (t) {
                                            if (t.point) {
                                                var e,
                                                    n,
                                                    o = ((e = s), (n = t.point), Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2)));
                                                o < r && ((r = o), (i = t));
                                            }
                                        });
                                    },
                                    a = n.length - 1;
                                a >= 0;
                                a--
                            )
                                o(a);
                            return i || void 0;
                        }
                    }),
                    (e.prototype.checkSeriesNodeClick = function () {
                        var t = this.lastPick;
                        if (t && t.node) {
                            var e = this.lastPick.datum;
                            e.series.fireNodeClickEvent(e);
                        }
                    }),
                    (e.prototype.onSeriesNodeClick = function (t) {
                        this.fireEvent(re(re({}, t), { type: "seriesNodeClick" }));
                    }),
                    (e.prototype.checkLegendClick = function (t) {
                        var e = this.legend.getDatumForPoint(t.offsetX, t.offsetY);
                        if (e) {
                            var i = e.id,
                                n = e.itemId,
                                r = e.enabled,
                                o = it(this.series, function (t) {
                                    return t.id === i;
                                });
                            o && (o.toggleSeriesItem(n, !r), r && this.hideTooltip());
                        }
                    }),
                    (e.prototype.onSeriesDatumPick = function (t, e, i) {
                        this.lastPick && this.dehighlightDatum(), (this.lastPick = { datum: e, node: i }), this.highlightDatum(e);
                        var n = e.series.tooltipEnabled && e.series.getTooltipHtml(e);
                        n && this.showTooltip(t, n);
                    }),
                    (e.prototype.highlightDatum = function (t) {
                        (this.highlightedDatum = t),
                            this.series.forEach(function (t) {
                                return t.onHighlightChange();
                            });
                    }),
                    (e.prototype.dehighlightDatum = function () {
                        this.highlightedDatum &&
                            ((this.highlightedDatum = void 0),
                            this.series.forEach(function (t) {
                                return t.onHighlightChange();
                            }));
                    }),
                    Object.defineProperty(e.prototype, "tooltipClass", {
                        get: function () {
                            return this._tooltipClass;
                        },
                        set: function (t) {
                            this._tooltipClass !== t && ((this._tooltipClass = t), this.toggleTooltip());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.toggleTooltip = function (t) {
                        !t && this.lastPick && (this.dehighlightDatum(), (this.lastPick = void 0)), this.updateTooltipClass(t);
                    }),
                    (e.prototype.updateTooltipClass = function (t, i) {
                        var n = [e.defaultTooltipClass, this.tooltipClass];
                        !0 === t && n.push(e.defaultTooltipClass + "-visible"), !0 !== i && n.push(e.defaultTooltipClass + "-arrow"), this.tooltipElement.setAttribute("class", n.join(" "));
                    }),
                    (e.prototype.showTooltip = function (t, e) {
                        var i = this.tooltipElement,
                            n = this.container;
                        if (void 0 !== e) i.innerHTML = e;
                        else if (!i.innerHTML) return;
                        e && this.toggleTooltip(!0);
                        var r = t.pageX - i.clientWidth / 2,
                            o = t.pageY - i.clientHeight - 8;
                        if (n) {
                            var a = i.getBoundingClientRect(),
                                s = window.innerWidth - a.width;
                            r < 0 ? ((r = 0), this.updateTooltipClass(!0, !0)) : r > s && ((r = s), this.updateTooltipClass(!0, !0));
                        }
                        (i.style.left = r + "px"), (i.style.top = o + "px");
                    }),
                    (e.prototype.hideTooltip = function () {
                        this.toggleTooltip(!1);
                    }),
                    (e.defaultTooltipClass = "ag-chart-tooltip"),
                    (e.tooltipDocuments = []),
                    oe([g("layoutChange")], e.prototype, "padding", void 0),
                    oe([g("layoutChange")], e.prototype, "title", void 0),
                    oe([g("layoutChange")], e.prototype, "subtitle", void 0),
                    e
                );
            })(y),
            se = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            he = (function (e) {
                function i(t) {
                    void 0 === t && (t = window.document);
                    var i = e.call(this, t) || this;
                    (i._seriesRoot = new k()), (i.scene.root.visible = !1);
                    var n = i.scene.root;
                    return n.append(i._seriesRoot), n.append(i.legend.group), i;
                }
                return (
                    se(i, e),
                    Object.defineProperty(i.prototype, "seriesRoot", {
                        get: function () {
                            return this._seriesRoot;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (i.prototype.performLayout = function () {
                        if (!this.dataPending) {
                            this.scene.root.visible = !0;
                            var e = this.width,
                                i = this.height,
                                r = this.axes,
                                o = this.legend,
                                a = new n(0, 0, e, i);
                            if ((this.positionCaptions(), this.positionLegend(), o.enabled && o.data.length)) {
                                var s = this.legendAutoPadding,
                                    h = this.legend.spacing;
                                switch (((a.x += s.left), (a.y += s.top), (a.width -= s.left + s.right), (a.height -= s.top + s.bottom), this.legend.position)) {
                                    case "right":
                                        a.width -= h;
                                        break;
                                    case "bottom":
                                        a.height -= h;
                                        break;
                                    case "left":
                                        (a.x += h), (a.width -= h);
                                        break;
                                    case "top":
                                        (a.y += h), (a.height -= h);
                                }
                            }
                            var l = this.captionAutoPadding,
                                u = this.padding;
                            this.updateAxes(),
                                (a.x += u.left),
                                (a.width -= u.left + u.right),
                                (a.y += u.top + l),
                                (a.height -= u.top + l + u.bottom),
                                r.forEach(function (e) {
                                    e.group.visible = !0;
                                    var i = Math.floor(e.computeBBox().width);
                                    switch (e.position) {
                                        case t.ChartAxisPosition.Top:
                                            (a.y += i), (a.height -= i), (e.translation.y = Math.floor(a.y + 1)), (e.label.mirrored = !0);
                                            break;
                                        case t.ChartAxisPosition.Right:
                                            (a.width -= i), (e.translation.x = Math.floor(a.x + a.width)), (e.label.mirrored = !0);
                                            break;
                                        case t.ChartAxisPosition.Bottom:
                                            (a.height -= i), (e.translation.y = Math.floor(a.y + a.height + 1));
                                            break;
                                        case t.ChartAxisPosition.Left:
                                            (a.x += i), (a.width -= i), (e.translation.x = Math.floor(a.x));
                                    }
                                }),
                                r.forEach(function (e) {
                                    switch (e.position) {
                                        case t.ChartAxisPosition.Top:
                                            (e.translation.x = Math.floor(a.x)), (e.range = [0, a.width]), (e.gridLength = a.height);
                                            break;
                                        case t.ChartAxisPosition.Right:
                                            (e.translation.y = Math.floor(a.y)), (e.range = e instanceof et || e instanceof vt ? [0, a.height] : [a.height, 0]), (e.gridLength = a.width);
                                            break;
                                        case t.ChartAxisPosition.Bottom:
                                            (e.translation.x = Math.floor(a.x)), (e.range = [0, a.width]), (e.gridLength = a.height);
                                            break;
                                        case t.ChartAxisPosition.Left:
                                            (e.translation.y = Math.floor(a.y)), (e.range = e instanceof et || e instanceof vt ? [0, a.height] : [a.height, 0]), (e.gridLength = a.width);
                                    }
                                }),
                                (this.seriesRect = a),
                                this.series.forEach(function (t) {
                                    (t.group.translationX = Math.floor(a.x)), (t.group.translationY = Math.floor(a.y)), t.update();
                                }),
                                this.axes.forEach(function (t) {
                                    return t.update();
                                });
                        }
                    }),
                    (i.prototype.initSeries = function (t) {
                        e.prototype.initSeries.call(this, t), t.addEventListener("dataProcessed", this.updateAxes, this);
                    }),
                    (i.prototype.freeSeries = function (t) {
                        e.prototype.freeSeries.call(this, t), t.removeEventListener("dataProcessed", this.updateAxes, this);
                    }),
                    (i.prototype.updateAxes = function () {
                        this.axes.forEach(function (t) {
                            var e,
                                i = t.direction,
                                n = t.boundSeries;
                            if (t.linkedTo) t.domain = t.linkedTo.domain;
                            else {
                                var r = [];
                                n.filter(function (t) {
                                    return t.visible;
                                }).forEach(function (t) {
                                    r.push(t.getDomain(i));
                                });
                                var o = (e = new Array()).concat.apply(e, r);
                                t.domain = rt(o) || o;
                            }
                            t.update();
                        });
                    }),
                    (i.className = "CartesianChart"),
                    (i.type = "cartesian"),
                    i
                );
            })(ae),
            le = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            ue = (function (e) {
                function i() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return (
                    le(i, e),
                    (i.prototype.updateAxes = function () {
                        this.axes.forEach(function (e) {
                            var i,
                                n = e.direction,
                                r = e.boundSeries,
                                o = [],
                                a = void 0;
                            r.filter(function (t) {
                                return t.visible;
                            }).forEach(function (e) {
                                if (n === t.ChartAxisDirection.X)
                                    if (void 0 === a) {
                                        var i = e.getDomain(n);
                                        o.push(i), (a = "number" == typeof i[0]);
                                    } else a && o.push(e.getDomain(n));
                                else o.push(e.getDomain(n));
                            });
                            var s = (i = new Array()).concat.apply(i, o);
                            (e.domain = rt(s) || s), e.update();
                        });
                    }),
                    i
                );
            })(he),
            ce = { fills: ["#f3622d", "#fba71b", "#57b757", "#41a9c9", "#4258c9", "#9a42c8", "#c84164", "#888888"], strokes: ["#aa4520", "#b07513", "#3d803d", "#2d768d", "#2e3e8d", "#6c2e8c", "#8c2d46", "#5f5f5f"] },
            fe = {
                fills: ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722"],
                strokes: ["#ab2f26", "#a31545", "#6d1b7b", "#482980", "#2c397f", "#1769aa", "#0276ab", "#008494", "#00695f", "#357a38", "#618834", "#909a28", "#b3a429", "#b38705", "#b36a00", "#b33d18"],
            },
            pe = { fills: ["#c16068", "#a2bf8a", "#ebcc87", "#80a0c3", "#b58dae", "#85c0d1"], strokes: ["#874349", "#718661", "#a48f5f", "#5a7088", "#7f637a", "#5d8692"] },
            de = { fills: ["#5BC0EB", "#FDE74C", "#9BC53D", "#E55934", "#FA7921", "#fa3081"], strokes: ["#4086a4", "#b1a235", "#6c8a2b", "#a03e24", "#af5517", "#af225a"] },
            ye = {
                fills: ["#febe76", "#ff7979", "#badc58", "#f9ca23", "#f0932b", "#eb4c4b", "#6ab04c", "#7ed6df", "#e056fd", "#686de0"],
                strokes: ["#b28553", "#b35555", "#829a3e", "#ae8d19", "#a8671e", "#a43535", "#4a7b35", "#58969c", "#9d3cb1", "#494c9d"],
            },
            ge = ((Xt = new Map()).set("borneo", ce), Xt.set("material", fe), Xt.set("pastel", pe), Xt.set("bright", de), Xt.set("flat", ye), Xt),
            me = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            ve = (function (e) {
                function i() {
                    var i,
                        n = (null !== e && e.apply(this, arguments)) || this;
                    return (n.directionKeys = (((i = {})[t.ChartAxisDirection.X] = ["angleKey"]), (i[t.ChartAxisDirection.Y] = ["radiusKey"]), i)), (n.centerX = 0), (n.centerY = 0), (n.radius = 0), n;
                }
                return me(i, e), i;
            })(Jt),
            be =
                ((function (t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    me(e, t);
                })(Qt),
                (function () {
                    var t = function (e, i) {
                        return (t =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function (t, e) {
                                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                            })(e, i);
                    };
                    return function (e, i) {
                        function n() {
                            this.constructor = e;
                        }
                        t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                    };
                })()),
            xe = function (t, e, i, n) {
                var r,
                    o = arguments.length,
                    a = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a;
            },
            _e = (function (t) {
                function e(e) {
                    void 0 === e && (e = window.document);
                    var n = t.call(this, e) || this;
                    return (n.padding = new i(40)), n.scene.root.append(n.legend.group), n;
                }
                return (
                    be(e, t),
                    Object.defineProperty(e.prototype, "seriesRoot", {
                        get: function () {
                            return this.scene.root;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.performLayout = function () {
                        var t = new n(0, 0, this.width, this.height);
                        this.positionCaptions(), this.positionLegend();
                        var e = this.captionAutoPadding;
                        if (((t.y += e), (t.height -= e), this.legend.enabled && this.legend.data.length)) {
                            var i = this.legendAutoPadding;
                            (t.x += i.left), (t.y += i.top), (t.width -= i.left + i.right), (t.height -= i.top + i.bottom);
                            var r = this.legend.spacing;
                            switch (this.legend.position) {
                                case "right":
                                    t.width -= r;
                                    break;
                                case "bottom":
                                    t.height -= r;
                                    break;
                                case "left":
                                    (t.x += r), (t.width -= r);
                                    break;
                                case "top":
                                    (t.y += r), (t.height -= r);
                            }
                        }
                        var o = this.padding;
                        (t.x += o.left), (t.y += o.top), (t.width -= o.left + o.right), (t.height -= o.top + o.bottom), (this.seriesRect = t);
                        var a = t.x + t.width / 2,
                            s = t.y + t.height / 2,
                            h = Math.min(t.width, t.height) / 2;
                        this.series.forEach(function (t) {
                            t instanceof ve && ((t.centerX = a), (t.centerY = s), (t.radius = h), t.update());
                        });
                    }),
                    (e.className = "PolarChart"),
                    (e.type = "polar"),
                    xe([g("layoutChange")], e.prototype, "padding", void 0),
                    e
                );
            })(ae);
        function ke(t, e) {
            if (t === e) return !0;
            if (t && e && "object" == typeof t && "object" == typeof e) {
                if (t.constructor !== e.constructor) return !1;
                var i,
                    n = void 0;
                if (Array.isArray(t)) {
                    if ((i = t.length) != e.length) return !1;
                    for (n = i; 0 != n--; ) if (!ke(t[n], e[n])) return !1;
                    return !0;
                }
                if (t.constructor === RegExp) return t.source === e.source && t.flags === e.flags;
                if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === e.valueOf();
                if (t.toString !== Object.prototype.toString) return t.toString() === e.toString();
                var r = Object.keys(t);
                if ((i = r.length) !== Object.keys(e).length) return !1;
                for (n = i; 0 != n--; ) if (!Object.prototype.hasOwnProperty.call(e, r[n])) return !1;
                for (n = i; 0 != n--; ) {
                    var o = r[n];
                    if (!ke(t[o], e[o])) return !1;
                }
                return !0;
            }
            return t != t && e != e;
        }
        var we,
            Se = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            Oe = function (t, e, i, n) {
                var r,
                    o = arguments.length,
                    a = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a;
            },
            Pe = (function (i) {
                function n() {
                    var t = i.call(this) || this;
                    return (
                        (t.areaGroup = t.group.appendChild(new k())),
                        (t.strokeGroup = t.group.appendChild(new k())),
                        (t.markerGroup = t.group.appendChild(new k())),
                        (t.areaSelection = S.select(t.areaGroup).selectAll()),
                        (t.strokeSelection = S.select(t.strokeGroup).selectAll()),
                        (t.markerSelection = S.select(t.markerGroup).selectAll()),
                        (t.markerSelectionData = []),
                        (t.seriesItemEnabled = new Map()),
                        (t.xData = []),
                        (t.yData = []),
                        (t.yDomain = []),
                        (t.directionKeys = { x: ["xKey"], y: ["yKeys"] }),
                        (t.marker = new ie()),
                        (t.fills = ce.fills),
                        (t.strokes = ce.strokes),
                        (t.fillOpacity = 1),
                        (t.strokeOpacity = 1),
                        (t._xKey = ""),
                        (t.xName = ""),
                        (t._yKeys = []),
                        (t.yNames = []),
                        (t.strokeWidth = 2),
                        (t.highlightStyle = { fill: "yellow" }),
                        t.addEventListener("update", t.update),
                        (t.marker.enabled = !1),
                        t.marker.addPropertyListener("shape", t.onMarkerShapeChange, t),
                        t.marker.addEventListener("change", t.update, t),
                        t
                    );
                }
                return (
                    Se(n, i),
                    (n.prototype.onMarkerShapeChange = function () {
                        (this.markerSelection = this.markerSelection.setData([])), this.markerSelection.exit.remove(), this.update(), this.fireEvent({ type: "legendChange" });
                    }),
                    Object.defineProperty(n.prototype, "xKey", {
                        get: function () {
                            return this._xKey;
                        },
                        set: function (t) {
                            this._xKey !== t && ((this._xKey = t), (this.xData = []), this.scheduleData());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "yKeys", {
                        get: function () {
                            return this._yKeys;
                        },
                        set: function (t) {
                            if (!ke(this._yKeys, t)) {
                                (this._yKeys = t), (this.yData = []);
                                var e = this.seriesItemEnabled;
                                e.clear(),
                                    t.forEach(function (t) {
                                        return e.set(t, !0);
                                    }),
                                    this.scheduleData();
                            }
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "normalizedTo", {
                        get: function () {
                            return this._normalizedTo;
                        },
                        set: function (t) {
                            var e = t ? Math.abs(t) : void 0;
                            this._normalizedTo !== e && ((this._normalizedTo = e), this.scheduleData());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (n.prototype.onHighlightChange = function () {
                        this.updateMarkerNodes();
                    }),
                    (n.prototype.processData = function () {
                        var t = this.xKey,
                            e = this.yKeys,
                            i = this.seriesItemEnabled,
                            n = t && e.length && this.data ? this.data : [],
                            r = !0;
                        (this.xData = n.map(function (e) {
                            return r && !(t in e) && ((r = !1), console.warn("The key '" + t + "' was not found in the data: ", e)), e[t];
                        })),
                            (this.yData = n.map(function (t) {
                                return e.map(function (e) {
                                    r && !(e in t) && ((r = !1), console.warn("The key '" + e + "' was not found in the data: ", t));
                                    var n = t[e];
                                    return isFinite(n) && i.get(e) ? n : 0;
                                });
                            }));
                        var o,
                            a,
                            s = this.yData,
                            h = this.normalizedTo,
                            l = s.map(function (t) {
                                return ot(t);
                            }),
                            u = at(l);
                        return (
                            h && isFinite(h)
                                ? ((o = u.min < 0 ? -h : 0),
                                  (a = h),
                                  s.forEach(function (t, e) {
                                      return t.forEach(function (i, n) {
                                          t[n] = i < 0 ? (-i / l[e].min) * h : (i / l[e].max) * h;
                                      });
                                  }))
                                : ((o = u.min), (a = u.max)),
                            0 === o && 0 === a && (a = 1),
                            (this.yDomain = this.fixNumericExtent([o, a], "y")),
                            this.fireEvent({ type: "dataProcessed" }),
                            !0
                        );
                    }),
                    (n.prototype.getDomain = function (e) {
                        return e === t.ChartAxisDirection.X ? this.xData : this.yDomain;
                    }),
                    (n.prototype.update = function () {
                        var t = this,
                            e = t.visible,
                            i = t.chart,
                            n = t.xAxis,
                            r = t.yAxis,
                            o = t.xData,
                            a = t.yData;
                        if (((this.group.visible = e && !(!o.length || !a.length)), n && r && e && i && !i.layoutPending && !i.dataPending && o.length && a.length)) {
                            var s = this.generateSelectionData(),
                                h = s.areaSelectionData,
                                l = s.markerSelectionData;
                            this.updateAreaSelection(h), this.updateStrokeSelection(h), this.updateMarkerSelection(l), this.updateMarkerNodes(), (this.markerSelectionData = l);
                        }
                    }),
                    (n.prototype.generateSelectionData = function () {
                        var t = this,
                            e = this,
                            i = e.yKeys,
                            n = e.data,
                            r = e.xData,
                            o = e.yData,
                            a = e.marker,
                            s = e.fills,
                            h = e.strokes,
                            l = e.xAxis.scale,
                            u = e.yAxis.scale,
                            c = (l.bandwidth || 0) / 2,
                            f = (u.bandwidth || 0) / 2,
                            p = [],
                            d = [],
                            y = 2 * r.length - 1;
                        return (
                            r.forEach(function (e, r) {
                                var g = o[r],
                                    m = n[r],
                                    v = l.convert(e) + c,
                                    b = 0,
                                    x = 0;
                                g.forEach(function (e, n) {
                                    var o = e < 0 ? b : x,
                                        l = u.convert(o + e) + f,
                                        c = i[n],
                                        g = m[c];
                                    a && d.push({ series: t, seriesDatum: m, yValue: g, yKey: c, point: { x: v, y: l }, fill: s[n % s.length], stroke: h[n % h.length] });
                                    var _ = (p[n] || (p[n] = { yKey: c, points: [] })).points;
                                    (_[r] = { x: v, y: l }), (_[y - r] = { x: v, y: u.convert(o) + f }), e < 0 ? (b += e) : (x += e);
                                });
                            }),
                            { areaSelectionData: p, markerSelectionData: d }
                        );
                    }),
                    (n.prototype.updateAreaSelection = function (t) {
                        var i = this.fills,
                            n = this.fillOpacity,
                            r = this.seriesItemEnabled,
                            o = this.shadow,
                            a = this.areaSelection.setData(t);
                        a.exit.remove();
                        var s = a.enter.append(z).each(function (t) {
                                (t.stroke = void 0), (t.pointerEvents = e.None);
                            }),
                            h = a.merge(s);
                        h.each(function (t, e, a) {
                            var s = t.path;
                            (t.fill = i[a % i.length]),
                                (t.fillOpacity = n),
                                (t.fillShadow = o),
                                (t.visible = !!r.get(e.yKey)),
                                s.clear(),
                                e.points.forEach(function (t, e) {
                                    var i = t.x,
                                        n = t.y;
                                    e > 0 ? s.lineTo(i, n) : s.moveTo(i, n);
                                }),
                                s.closePath();
                        }),
                            (this.areaSelection = h);
                    }),
                    (n.prototype.updateStrokeSelection = function (t) {
                        var i = this,
                            n = i.strokes,
                            r = i.strokeWidth,
                            o = i.strokeOpacity,
                            a = i.data,
                            s = i.seriesItemEnabled,
                            h = this.strokeSelection.setData(t);
                        h.exit.remove();
                        var l = h.enter.append(z).each(function (t) {
                                (t.fill = void 0), (t.lineJoin = t.lineCap = "round"), (t.pointerEvents = e.None);
                            }),
                            u = h.merge(l);
                        u.each(function (t, e, i) {
                            var h = t.path;
                            (t.stroke = n[i % n.length]), (t.strokeWidth = r), (t.visible = !!s.get(e.yKey)), (t.strokeOpacity = o), h.clear();
                            for (var l = e.points, u = 0; u < a.length; u++) {
                                var c = l[u],
                                    f = c.x,
                                    p = c.y;
                                u > 0 ? h.lineTo(f, p) : h.moveTo(f, p);
                            }
                        }),
                            (this.strokeSelection = u);
                    }),
                    (n.prototype.updateMarkerSelection = function (t) {
                        var e = this.marker,
                            i = e.shape ? t : [],
                            n = Kt(e.shape),
                            r = this.markerSelection.setData(i);
                        r.exit.remove();
                        var o = r.enter.append(n);
                        this.markerSelection = r.merge(o);
                    }),
                    (n.prototype.updateMarkerNodes = function () {
                        var t = this.marker,
                            e = t.formatter,
                            i = void 0 !== t.strokeWidth ? t.strokeWidth : this.strokeWidth,
                            n = t.size,
                            r = this.xKey,
                            o = this.seriesItemEnabled,
                            a = this.chart.highlightedDatum,
                            s = this.highlightStyle,
                            h = s.fill,
                            l = s.stroke;
                        this.markerSelection.each(function (s, u) {
                            var c = u === a,
                                f = c && void 0 !== h ? h : t.fill || u.fill,
                                p = c && void 0 !== l ? l : t.stroke || u.stroke,
                                d = void 0;
                            e && (d = e({ datum: u.seriesDatum, xKey: r, yKey: u.yKey, fill: f, stroke: p, strokeWidth: i, size: n, highlighted: c })),
                                (s.fill = (d && d.fill) || f),
                                (s.stroke = (d && d.stroke) || p),
                                (s.strokeWidth = d && void 0 !== d.strokeWidth ? d.strokeWidth : i),
                                (s.size = d && void 0 !== d.size ? d.size : n),
                                (s.translationX = u.point.x),
                                (s.translationY = u.point.y),
                                (s.visible = t.enabled && s.size > 0 && !!o.get(u.yKey));
                        });
                    }),
                    (n.prototype.getNodeData = function () {
                        return this.markerSelectionData;
                    }),
                    (n.prototype.fireNodeClickEvent = function (t) {
                        this.fireEvent({ type: "nodeClick", series: this, datum: t.seriesDatum, xKey: this.xKey, yKey: t.yKey });
                    }),
                    (n.prototype.getTooltipHtml = function (t) {
                        var e = this.xKey,
                            i = t.yKey;
                        if (!e || !i) return "";
                        var n = this,
                            r = n.xName,
                            o = n.yKeys,
                            a = n.yNames,
                            s = n.fills,
                            h = n.tooltipRenderer,
                            l = o.indexOf(i),
                            u = a[l],
                            c = s[l % s.length];
                        if (h) return h({ datum: t.seriesDatum, xKey: e, xName: r, yKey: i, yName: u, color: c });
                        var f = 'style="color: white; background-color: ' + c + '"',
                            p = u ? '<div class="' + ae.defaultTooltipClass + '-title" ' + f + ">" + u + "</div>" : "",
                            d = t.seriesDatum,
                            y = d[e],
                            g = d[i],
                            m = "number" == typeof y ? R(y) : String(y),
                            v = "number" == typeof g ? R(g) : String(g);
                        return p + '<div class="' + ae.defaultTooltipClass + '-content">' + m + ": " + v + "</div>";
                    }),
                    (n.prototype.listSeriesItems = function (t) {
                        var e = this,
                            i = e.data,
                            n = e.id,
                            r = e.xKey,
                            o = e.yKeys,
                            a = e.yNames,
                            s = e.seriesItemEnabled,
                            h = e.marker,
                            l = e.fills,
                            u = e.strokes,
                            c = e.fillOpacity,
                            f = e.strokeOpacity;
                        i &&
                            i.length &&
                            r &&
                            o.length &&
                            o.forEach(function (e, i) {
                                t.push({
                                    id: n,
                                    itemId: e,
                                    enabled: s.get(e) || !1,
                                    label: { text: a[i] || o[i] },
                                    marker: { shape: h.shape, fill: h.fill || l[i % l.length], stroke: h.stroke || u[i % u.length], fillOpacity: c, strokeOpacity: f },
                                });
                            });
                    }),
                    (n.prototype.toggleSeriesItem = function (t, e) {
                        this.seriesItemEnabled.set(t, e), this.scheduleData();
                    }),
                    (n.className = "AreaSeries"),
                    (n.type = "area"),
                    Oe([g("dataChange")], n.prototype, "fills", void 0),
                    Oe([g("dataChange")], n.prototype, "strokes", void 0),
                    Oe([g("update")], n.prototype, "fillOpacity", void 0),
                    Oe([g("update")], n.prototype, "strokeOpacity", void 0),
                    Oe([g("update")], n.prototype, "xName", void 0),
                    Oe([g("update")], n.prototype, "yNames", void 0),
                    Oe([g("update")], n.prototype, "strokeWidth", void 0),
                    Oe([g("update")], n.prototype, "shadow", void 0),
                    n
                );
            })(ee),
            Ce = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            De = function (t, e, i, n) {
                var r,
                    o = arguments.length,
                    a = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a;
            },
            Ae = (function (t) {
                function e() {
                    var e = t.call(this) || this;
                    return (e.enabled = !0), (e.fontSize = 12), (e.fontFamily = "Verdana, sans-serif"), (e.color = "rgba(70, 70, 70, 1)"), e;
                }
                return (
                    Ce(e, t),
                    De([g("change", "dataChange")], e.prototype, "enabled", void 0),
                    De([g("change")], e.prototype, "fontStyle", void 0),
                    De([g("change")], e.prototype, "fontWeight", void 0),
                    De([g("change")], e.prototype, "fontSize", void 0),
                    De([g("change")], e.prototype, "fontFamily", void 0),
                    De([g("change")], e.prototype, "color", void 0),
                    e
                );
            })(y),
            Ee = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            Me = function (t, e, i, n) {
                var r,
                    o = arguments.length,
                    a = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a;
            },
            Te = function () {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                var n = Array(t),
                    r = 0;
                for (e = 0; e < i; e++) for (var o = arguments[e], a = 0, s = o.length; a < s; a++, r++) n[r] = o[a];
                return n;
            };
        !(function (t) {
            (t[(t.Bar = 0)] = "Bar"), (t[(t.Label = 1)] = "Label");
        })(we || (we = {}));
        var je = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return Ee(e, t), Me([g("change")], e.prototype, "formatter", void 0), e;
            })(Ae),
            Fe = (function (i) {
                function n() {
                    var e,
                        n = i.call(this) || this;
                    return (
                        (n.rectGroup = n.group.appendChild(new k())),
                        (n.textGroup = n.group.appendChild(new k())),
                        (n.rectSelection = S.select(n.rectGroup).selectAll()),
                        (n.textSelection = S.select(n.textGroup).selectAll()),
                        (n.xData = []),
                        (n.yData = []),
                        (n.yDomain = []),
                        (n.label = new je()),
                        (n.seriesItemEnabled = new Map()),
                        (n.flipXY = !1),
                        (n.fills = ce.fills),
                        (n.strokes = ce.strokes),
                        (n.fillOpacity = 1),
                        (n.strokeOpacity = 1),
                        (n.groupScale = new x()),
                        (n.directionKeys = (((e = {})[t.ChartAxisDirection.X] = ["xKey"]), (e[t.ChartAxisDirection.Y] = ["yKeys"]), e)),
                        (n._xKey = ""),
                        (n._xName = ""),
                        (n._yKeys = []),
                        (n._yNames = []),
                        (n.grouped = !1),
                        (n._strokeWidth = 1),
                        (n.highlightStyle = { fill: "yellow" }),
                        (n.label.enabled = !1),
                        n.label.addEventListener("change", n.update, n),
                        n
                    );
                }
                return (
                    Ee(n, i),
                    (n.prototype.getKeys = function (t) {
                        var e = this,
                            i = this.directionKeys,
                            n = i && i[this.flipXY ? $(t) : t],
                            r = [];
                        return (
                            n &&
                                n.forEach(function (t) {
                                    var i = e[t];
                                    i && (Array.isArray(i) ? r.push.apply(r, i) : r.push(i));
                                }),
                            r
                        );
                    }),
                    Object.defineProperty(n.prototype, "xKey", {
                        get: function () {
                            return this._xKey;
                        },
                        set: function (t) {
                            this._xKey !== t && ((this._xKey = t), (this.xData = []), this.scheduleData());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "xName", {
                        get: function () {
                            return this._xName;
                        },
                        set: function (t) {
                            this._xName !== t && ((this._xName = t), this.update());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "yKeys", {
                        get: function () {
                            return this._yKeys;
                        },
                        set: function (t) {
                            if (!ke(this._yKeys, t)) {
                                (this._yKeys = t), (this.yData = []);
                                var e = this.seriesItemEnabled;
                                e.clear(),
                                    t.forEach(function (t) {
                                        return e.set(t, !0);
                                    });
                                var i = this.groupScale;
                                (i.domain = t), (i.padding = 0.1), (i.round = !0), this.scheduleData();
                            }
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "yNames", {
                        get: function () {
                            return this._yNames;
                        },
                        set: function (t) {
                            (this._yNames = t), this.scheduleData();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "normalizedTo", {
                        get: function () {
                            return this._normalizedTo;
                        },
                        set: function (t) {
                            var e = t ? Math.abs(t) : void 0;
                            this._normalizedTo !== e && ((this._normalizedTo = e), this.scheduleData());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "strokeWidth", {
                        get: function () {
                            return this._strokeWidth;
                        },
                        set: function (t) {
                            this._strokeWidth !== t && ((this._strokeWidth = t), this.update());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "shadow", {
                        get: function () {
                            return this._shadow;
                        },
                        set: function (t) {
                            this._shadow !== t && ((this._shadow = t), this.update());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (n.prototype.onHighlightChange = function () {
                        this.updateRectNodes();
                    }),
                    (n.prototype.processData = function () {
                        var t = this.xKey,
                            e = this.yKeys,
                            i = this.seriesItemEnabled,
                            n = t && e.length && this.data ? this.data : [],
                            r = !0;
                        (this.xData = n.map(function (e) {
                            return r && !(t in e) && ((r = !1), console.warn("The key '" + t + "' was not found in the data: ", e)), e[t];
                        })),
                            (this.yData = n.map(function (t) {
                                return e.map(function (e) {
                                    r && !(e in t) && ((r = !1), console.warn("The key '" + e + "' was not found in the data: ", t));
                                    var n = t[e];
                                    return isFinite(n) && i.get(e) ? n : 0;
                                });
                            }));
                        var o = this.yData.map(function (t) {
                                return ot(t);
                            }),
                            a = this.yData,
                            s = this.normalizedTo,
                            h = 1 / 0,
                            l = -1 / 0;
                        if (this.grouped)
                            (h = Math.min.apply(
                                Math,
                                Te(
                                    [0],
                                    a.map(function (t) {
                                        return Math.min.apply(Math, t);
                                    })
                                )
                            )),
                                (l = Math.max.apply(
                                    Math,
                                    a.map(function (t) {
                                        return Math.max.apply(Math, t);
                                    })
                                ));
                        else {
                            var u = at(o);
                            s && isFinite(s)
                                ? ((h = u.min < 0 ? -s : 0),
                                  (l = s),
                                  a.forEach(function (t, e) {
                                      return t.forEach(function (i, n) {
                                          t[n] = i < 0 ? (-i / o[e].min) * s : (i / o[e].max) * s;
                                      });
                                  }))
                                : ((h = u.min), (l = u.max));
                        }
                        return (this.yDomain = this.fixNumericExtent([h, l], "y")), this.fireEvent({ type: "dataProcessed" }), !0;
                    }),
                    (n.prototype.getDomain = function (e) {
                        return this.flipXY && (e = $(e)), e === t.ChartAxisDirection.X ? this.xData : this.yDomain;
                    }),
                    (n.prototype.fireNodeClickEvent = function (t) {
                        this.fireEvent({ type: "nodeClick", series: this, datum: t.seriesDatum, xKey: this.xKey, yKey: t.yKey });
                    }),
                    (n.prototype.generateNodeData = function () {
                        var t = this,
                            e = this.xAxis,
                            i = this.yAxis,
                            n = this.flipXY,
                            r = (n ? i : e).scale,
                            o = (n ? e : i).scale,
                            a = this,
                            s = a.groupScale,
                            h = a.yKeys,
                            l = a.fills,
                            u = a.strokes,
                            c = a.grouped,
                            f = a.strokeWidth,
                            p = a.seriesItemEnabled,
                            d = a.data,
                            y = a.xData,
                            g = a.yData,
                            m = this.label,
                            v = m.fontStyle,
                            b = m.fontWeight,
                            x = m.fontSize,
                            _ = m.fontFamily,
                            k = m.color,
                            w = m.formatter;
                        s.range = [0, r.bandwidth];
                        var S = c ? s.bandwidth : r.bandwidth,
                            O = [];
                        return (
                            y.forEach(function (e, i) {
                                var a = g[i],
                                    y = d[i],
                                    m = r.convert(e),
                                    P = 0,
                                    C = 0;
                                a.forEach(function (e, i) {
                                    var r,
                                        a = h[i],
                                        d = c ? m + s.convert(a) : m,
                                        g = e < 0 ? P : C,
                                        D = o.convert(c ? e : g + e),
                                        A = o.convert(c ? 0 : g),
                                        E = y[a],
                                        M = "number" == typeof E;
                                    (r = w ? w({ value: M ? E : void 0 }) : M && isFinite(E) ? E.toFixed(2) : ""),
                                        O.push({
                                            series: t,
                                            seriesDatum: y,
                                            yValue: E,
                                            yKey: a,
                                            x: n ? Math.min(D, A) : d,
                                            y: n ? d : Math.min(D, A),
                                            width: n ? Math.abs(A - D) : S,
                                            height: n ? S : Math.abs(A - D),
                                            fill: l[i % l.length],
                                            stroke: u[i % u.length],
                                            strokeWidth: f,
                                            label:
                                                p.get(a) && r
                                                    ? {
                                                          text: r,
                                                          fontStyle: v,
                                                          fontWeight: b,
                                                          fontSize: x,
                                                          fontFamily: _,
                                                          fill: k,
                                                          x: n ? D + ((E >= 0 ? -1 : 1) * Math.abs(A - D)) / 2 : d + S / 2,
                                                          y: n ? d + S / 2 : D + ((E >= 0 ? 1 : -1) * Math.abs(A - D)) / 2,
                                                      }
                                                    : void 0,
                                        }),
                                        c || (e < 0 ? (P += e) : (C += e));
                                });
                            }),
                            O
                        );
                    }),
                    (n.prototype.update = function () {
                        var t = this,
                            e = t.visible,
                            i = t.chart,
                            n = t.xAxis,
                            r = t.yAxis,
                            o = t.xData,
                            a = t.yData;
                        if (((this.group.visible = e), i && !i.layoutPending && !i.dataPending && n && r && e && o.length && a.length)) {
                            var s = this.generateNodeData();
                            this.updateRectSelection(s), this.updateRectNodes(), this.updateTextSelection(s), this.updateTextNodes();
                        }
                    }),
                    (n.prototype.updateRectSelection = function (t) {
                        var e = this.rectSelection.setData(t);
                        e.exit.remove();
                        var i = e.enter.append(_t).each(function (t) {
                            (t.tag = we.Bar), (t.crisp = !0);
                        });
                        this.rectSelection = e.merge(i);
                    }),
                    (n.prototype.updateRectNodes = function () {
                        var t = this.fillOpacity,
                            e = this.strokeOpacity,
                            i = this.shadow,
                            n = this.highlightStyle,
                            r = n.fill,
                            o = n.stroke,
                            a = this.chart.highlightedDatum;
                        this.rectSelection.each(function (n, s) {
                            var h = s === a;
                            (n.x = s.x),
                                (n.y = s.y),
                                (n.width = s.width),
                                (n.height = s.height),
                                (n.fill = h && void 0 !== r ? r : s.fill),
                                (n.stroke = h && void 0 !== o ? o : s.stroke),
                                (n.fillOpacity = t),
                                (n.strokeOpacity = e),
                                (n.strokeWidth = s.strokeWidth),
                                (n.fillShadow = i),
                                (n.visible = s.height > 0);
                        });
                    }),
                    (n.prototype.updateTextSelection = function (t) {
                        var i = this.textSelection.setData(t);
                        i.exit.remove();
                        var n = i.enter.append(p).each(function (t) {
                            (t.tag = we.Label), (t.pointerEvents = e.None), (t.textAlign = "center"), (t.textBaseline = "middle");
                        });
                        this.textSelection = i.merge(n);
                    }),
                    (n.prototype.updateTextNodes = function () {
                        var t = this.label.enabled;
                        this.textSelection.each(function (e, i) {
                            var n = i.label;
                            n && t
                                ? ((e.fontStyle = n.fontStyle), (e.fontWeight = n.fontWeight), (e.fontSize = n.fontSize), (e.fontFamily = n.fontFamily), (e.text = n.text), (e.x = n.x), (e.y = n.y), (e.fill = n.fill), (e.visible = !0))
                                : (e.visible = !1);
                        });
                    }),
                    (n.prototype.getTooltipHtml = function (t) {
                        var e = this.xKey,
                            i = t.yKey;
                        if (!e || !i) return "";
                        var n = this,
                            r = n.xName,
                            o = n.yKeys,
                            a = n.yNames,
                            s = n.fills,
                            h = n.tooltipRenderer,
                            l = t.seriesDatum,
                            u = o.indexOf(i),
                            c = a[u],
                            f = s[u % s.length];
                        if (h) return h({ datum: l, xKey: e, xName: r, yKey: i, yName: c, color: f });
                        var p = 'style="color: white; background-color: ' + f + '"',
                            d = c ? '<div class="' + ae.defaultTooltipClass + '-title" ' + p + ">" + c + "</div>" : "",
                            y = l[e],
                            g = l[i],
                            m = "number" == typeof y ? R(y) : String(y),
                            v = "number" == typeof g ? R(g) : String(g);
                        return d + '<div class="' + ae.defaultTooltipClass + '-content">' + m + ": " + v + "</div>";
                    }),
                    (n.prototype.listSeriesItems = function (t) {
                        var e = this,
                            i = e.id,
                            n = e.data,
                            r = e.xKey,
                            o = e.yKeys,
                            a = e.yNames,
                            s = e.seriesItemEnabled,
                            h = e.fills,
                            l = e.strokes,
                            u = e.fillOpacity,
                            c = e.strokeOpacity;
                        n &&
                            n.length &&
                            r &&
                            o.length &&
                            o.forEach(function (e, n) {
                                t.push({ id: i, itemId: e, enabled: s.get(e) || !1, label: { text: a[n] || o[n] }, marker: { fill: h[n % h.length], stroke: l[n % l.length], fillOpacity: u, strokeOpacity: c } });
                            });
                    }),
                    (n.prototype.toggleSeriesItem = function (t, e) {
                        var i = this.seriesItemEnabled,
                            n = [];
                        i.set(t, e),
                            i.forEach(function (t, e) {
                                t && n.push(e);
                            }),
                            (this.groupScale.domain = n),
                            this.scheduleData();
                    }),
                    (n.className = "BarSeries"),
                    (n.type = "bar"),
                    Me([g("layoutChange")], n.prototype, "flipXY", void 0),
                    Me([g("dataChange")], n.prototype, "fills", void 0),
                    Me([g("dataChange")], n.prototype, "strokes", void 0),
                    Me([g("layoutChange")], n.prototype, "fillOpacity", void 0),
                    Me([g("layoutChange")], n.prototype, "strokeOpacity", void 0),
                    Me([g("dataChange")], n.prototype, "grouped", void 0),
                    n
                );
            })(ee);
        function Ie(t, e) {
            return (
                (e -= t = +t),
                function (i) {
                    return t + e * i;
                }
            );
        }
        function Ne(t, e) {
            var i = new Date(),
                n = +t,
                r = +e - n;
            return function (t) {
                return i.setTime(n + r * t), i;
            };
        }
        function Le(t, e) {
            var i,
                n = e ? e.length : 0,
                r = t ? Math.min(n, t.length) : 0,
                o = new Array(r),
                a = new Array(n);
            for (i = 0; i < r; ++i) o[i] = ze(t[i], e[i]);
            for (; i < n; ++i) a[i] = e[i];
            return function (t) {
                for (i = 0; i < r; ++i) a[i] = o[i](t);
                return a;
            };
        }
        function Be(t, e) {
            var i,
                n = {},
                r = {};
            for (i in ((null !== t && "object" == typeof t) || (t = {}), (null !== e && "object" == typeof e) || (e = {}), e)) i in t ? (n[i] = ze(t[i], e[i])) : (r[i] = e[i]);
            return function (t) {
                for (i in n) r[i] = n[i](t);
                return r;
            };
        }
        function ze(t, e) {
            var i,
                n = typeof e;
            return null == e || "boolean" === n
                ? ((i = e),
                  function () {
                      return i;
                  })
                : ("number" === n ? Ie : e instanceof Date ? Ne : Array.isArray(e) ? Le : ("function" != typeof e.valueOf && "function" != typeof e.toString) || isNaN(e) ? Be : Ie)(t, e);
        }
        var Ke = function (t) {
            return t;
        };
        function Re(t) {
            var e,
                i = t[0],
                n = t[t.length - 1];
            return (
                i > n && ((i = (e = [n, i])[0]), (n = e[1])),
                function (t) {
                    return Math.max(i, Math.min(n, t));
                }
            );
        }
        var Ve = (function () {
                function t() {
                    (this.unknown = void 0), (this._clamp = Ke), (this._domain = [0, 1]), (this._range = [0, 1]), (this.transform = Ke), (this.untransform = Ke), (this._interpolate = ze), this.rescale();
                }
                return (
                    Object.defineProperty(t.prototype, "clamp", {
                        get: function () {
                            return this._clamp !== Ke;
                        },
                        set: function (t) {
                            this._clamp = t ? Re(this.domain) : Ke;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.setDomain = function (t) {
                        (this._domain = Array.prototype.map.call(t, function (t) {
                            return +t;
                        })),
                            this._clamp !== Ke && (this._clamp = Re(this.domain)),
                            this.rescale();
                    }),
                    (t.prototype.getDomain = function () {
                        return this._domain.slice();
                    }),
                    Object.defineProperty(t.prototype, "domain", {
                        get: function () {
                            return this.getDomain();
                        },
                        set: function (t) {
                            this.setDomain(t);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "range", {
                        get: function () {
                            return this._range.slice();
                        },
                        set: function (t) {
                            (this._range = Array.prototype.slice.call(t)), this.rescale();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "interpolate", {
                        get: function () {
                            return this._interpolate;
                        },
                        set: function (t) {
                            (this._interpolate = t), this.rescale();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.rescale = function () {
                        Math.min(this.domain.length, this.range.length) > 2 || (this.piecewise = this.bimap), (this.output = void 0), (this.input = void 0);
                    }),
                    (t.prototype.normalize = function (t, e) {
                        return (e -= t = +t)
                            ? function (i) {
                                  return (i - t) / e;
                              }
                            : ((i = isNaN(e) ? NaN : 0.5),
                              function () {
                                  return i;
                              });
                        var i;
                    }),
                    (t.prototype.bimap = function (t, e, i) {
                        var n,
                            r,
                            o = t[0],
                            a = t[1],
                            s = e[0],
                            h = e[1];
                        return (
                            a < o ? ((n = this.normalize(a, o)), (r = i(h, s))) : ((n = this.normalize(o, a)), (r = i(s, h))),
                            function (t) {
                                return r(n(t));
                            }
                        );
                    }),
                    (t.prototype.convert = function (t) {
                        return (t = +t), isNaN(t) ? this.unknown : (this.output || (this.output = this.piecewise(this.domain.map(this.transform), this.range, this.interpolate)), this.output(this.transform(this._clamp(t))));
                    }),
                    (t.prototype.invert = function (t) {
                        return this.input || (this.input = this.piecewise(this.range, this.domain.map(this.transform), Ie)), this._clamp(this.untransform(this.input(t)));
                    }),
                    t
                );
            })(),
            We = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            Ye = function (t, e, i, n) {
                var r,
                    o = arguments.length,
                    a = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a;
            },
            Xe = (function (i) {
                function n() {
                    var t = i.call(this) || this;
                    (t.xDomain = []),
                        (t.yDomain = []),
                        (t.xData = []),
                        (t.yData = []),
                        (t.lineNode = new z()),
                        (t.nodeSelection = S.select(t.group).selectAll()),
                        (t.nodeData = []),
                        (t.marker = new ie()),
                        (t.stroke = ce.fills[0]),
                        (t.strokeWidth = 2),
                        (t.strokeOpacity = 1),
                        (t._xKey = ""),
                        (t.xName = ""),
                        (t._yKey = ""),
                        (t.yName = ""),
                        (t.highlightStyle = { fill: "yellow" });
                    var n = t.lineNode;
                    (n.fill = void 0), (n.lineJoin = "round"), (n.pointerEvents = e.None), t.group.append(n), t.addEventListener("update", t.update);
                    var r = t.marker;
                    return (
                        (r.fill = ce.fills[0]), (r.stroke = ce.strokes[0]), r.addPropertyListener("shape", t.onMarkerShapeChange, t), r.addPropertyListener("enabled", t.onMarkerEnabledChange, t), r.addEventListener("change", t.update, t), t
                    );
                }
                return (
                    We(n, i),
                    (n.prototype.onMarkerShapeChange = function () {
                        (this.nodeSelection = this.nodeSelection.setData([])), this.nodeSelection.exit.remove(), this.update(), this.fireEvent({ type: "legendChange" });
                    }),
                    (n.prototype.onMarkerEnabledChange = function (t) {
                        t.value || ((this.nodeSelection = this.nodeSelection.setData([])), this.nodeSelection.exit.remove());
                    }),
                    Object.defineProperty(n.prototype, "xKey", {
                        get: function () {
                            return this._xKey;
                        },
                        set: function (t) {
                            this._xKey !== t && ((this._xKey = t), (this.xData = []), this.scheduleData());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "yKey", {
                        get: function () {
                            return this._yKey;
                        },
                        set: function (t) {
                            this._yKey !== t && ((this._yKey = t), (this.yData = []), this.scheduleData());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (n.prototype.processData = function () {
                        var t = this,
                            e = t.xAxis,
                            i = t.yAxis,
                            n = t.xKey,
                            r = t.yKey,
                            o = t.xData,
                            a = t.yData,
                            s = n && r && this.data ? this.data : [];
                        if (!e) return !1;
                        var h = e.scale instanceof Ve,
                            l = i.scale instanceof Ve;
                        (o.length = 0), (a.length = 0);
                        for (var u = 0, c = s.length; u < c; u++) {
                            var f = s[u],
                                p = f[n],
                                d = f[r];
                            o.push(p), a.push(d);
                        }
                        return (this.xDomain = h ? this.fixNumericExtent(rt(o), "x") : o), (this.yDomain = l ? this.fixNumericExtent(rt(a), "y") : a), !0;
                    }),
                    (n.prototype.getDomain = function (e) {
                        return e === t.ChartAxisDirection.X ? this.xDomain : this.yDomain;
                    }),
                    (n.prototype.onHighlightChange = function () {
                        this.updateNodes();
                    }),
                    (n.prototype.update = function () {
                        this.group.visible = this.visible;
                        var t = this.chart,
                            e = this.xAxis,
                            i = this.yAxis;
                        t && !t.layoutPending && !t.dataPending && e && i && (this.updateLinePath(), this.updateNodeSelection(), this.updateNodes());
                    }),
                    (n.prototype.updateLinePath = function () {
                        var t = this,
                            e = this,
                            i = e.xAxis,
                            n = e.yAxis,
                            r = e.data,
                            o = e.xData,
                            a = e.yData,
                            s = e.lineNode,
                            h = i.scale,
                            l = n.scale,
                            u = (h.bandwidth || 0) / 2,
                            c = (l.bandwidth || 0) / 2,
                            f = h instanceof Ve,
                            p = l instanceof Ve,
                            d = s.path,
                            y = [];
                        d.clear();
                        var g = !0;
                        o.forEach(function (e, i) {
                            var n = a[i];
                            if (null == n || (p && (isNaN(n) || !isFinite(n))) || null == e || (f && (isNaN(e) || !isFinite(e)))) g = !0;
                            else {
                                var o = h.convert(e) + u,
                                    s = l.convert(n) + c;
                                g ? (d.moveTo(o, s), (g = !1)) : d.lineTo(o, s), y.push({ series: t, seriesDatum: r[i], point: { x: o, y: s } });
                            }
                        }),
                            (s.stroke = this.stroke),
                            (s.strokeWidth = this.strokeWidth),
                            (s.strokeOpacity = this.strokeOpacity),
                            (this.nodeData = y);
                    }),
                    (n.prototype.updateNodeSelection = function () {
                        var t = this.marker,
                            e = t.shape ? this.nodeData : [],
                            i = Kt(t.shape),
                            n = this.nodeSelection.setData(e);
                        n.exit.remove();
                        var r = n.enter.append(k);
                        r.append(i), (this.nodeSelection = n.merge(r));
                    }),
                    (n.prototype.updateNodes = function () {
                        var t = this,
                            e = t.marker,
                            i = t.xKey,
                            n = t.yKey,
                            r = t.stroke,
                            o = t.strokeWidth,
                            a = Kt(e.shape),
                            s = this.chart.highlightedDatum,
                            h = this.highlightStyle,
                            l = h.fill,
                            u = h.stroke,
                            c = e.formatter,
                            f = e.size,
                            p = void 0 !== e.strokeWidth ? e.strokeWidth : o;
                        this.nodeSelection.selectByClass(a).each(function (t, o) {
                            var a = o === s,
                                h = a && void 0 !== l ? l : e.fill,
                                d = a && void 0 !== u ? u : e.stroke || r,
                                y = void 0;
                            c && (y = c({ datum: o.seriesDatum, xKey: i, yKey: n, fill: h, stroke: d, strokeWidth: p, size: f, highlighted: a })),
                                (t.fill = (y && y.fill) || h),
                                (t.stroke = (y && y.stroke) || d),
                                (t.strokeWidth = y && void 0 !== y.strokeWidth ? y.strokeWidth : p),
                                (t.size = y && void 0 !== y.size ? y.size : f),
                                (t.translationX = o.point.x),
                                (t.translationY = o.point.y),
                                (t.visible = e.enabled && t.size > 0);
                        });
                    }),
                    (n.prototype.getNodeData = function () {
                        return this.nodeData;
                    }),
                    (n.prototype.fireNodeClickEvent = function (t) {
                        this.fireEvent({ type: "nodeClick", series: this, datum: t.seriesDatum, xKey: this.xKey, yKey: this.yKey });
                    }),
                    (n.prototype.getTooltipHtml = function (t) {
                        var e = this.xKey,
                            i = this.yKey;
                        if (!e || !i) return "";
                        var n = this.xName,
                            r = this.yName,
                            o = this.stroke,
                            a = this.tooltipRenderer;
                        if (a) return a({ datum: t.seriesDatum, xKey: e, xName: n, yKey: i, yName: r, title: this.title, color: o });
                        var s = this.title || r,
                            h = 'style="color: white; background-color: ' + o + '"',
                            l = s ? '<div class="' + ae.defaultTooltipClass + '-title" ' + h + ">" + s + "</div>" : "",
                            u = t.seriesDatum,
                            c = u[e],
                            f = u[i],
                            p = "number" == typeof c ? R(c) : String(c),
                            d = "number" == typeof f ? R(f) : String(f);
                        return l + '<div class="' + ae.defaultTooltipClass + '-content">' + p + ": " + d + "</div>";
                    }),
                    (n.prototype.listSeriesItems = function (t) {
                        var e = this,
                            i = e.id,
                            n = e.data,
                            r = e.xKey,
                            o = e.yKey,
                            a = e.yName,
                            s = e.visible,
                            h = e.title,
                            l = e.marker,
                            u = e.stroke,
                            c = e.strokeOpacity;
                        n && n.length && r && o && t.push({ id: i, itemId: void 0, enabled: s, label: { text: h || a || o }, marker: { shape: l.shape, fill: l.fill, stroke: l.stroke || u, fillOpacity: 1, strokeOpacity: c } });
                    }),
                    (n.className = "LineSeries"),
                    (n.type = "line"),
                    Ye([g("layoutChange")], n.prototype, "title", void 0),
                    Ye([g("update")], n.prototype, "stroke", void 0),
                    Ye([g("update")], n.prototype, "strokeWidth", void 0),
                    Ye([g("update")], n.prototype, "strokeOpacity", void 0),
                    Ye([g("update")], n.prototype, "xName", void 0),
                    Ye([g("update")], n.prototype, "yName", void 0),
                    n
                );
            })(ee),
            He = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })();
        function Ue(t, e, i) {
            var n = Ze(t, e, i);
            return (function (t, e, i) {
                void 0 === i && (i = 1);
                for (var n = Math.abs(i), r = n > 0 && n < 1 ? Math.abs(Math.floor(Math.log(n) / Math.LN10)) : 0, o = Math.pow(10, r), a = Math.max(0, Math.ceil((e - t) / i)) || 0, s = new ti(r, a), h = 0; h < a; h++) {
                    var l = t + i * h;
                    s[h] = Math.round(l * o) / o;
                }
                return s;
            })((t = Math.ceil(t / n) * n), (e = Math.floor(e / n) * n + n / 2), n);
        }
        var Ge = Math.sqrt(50),
            qe = Math.sqrt(10),
            Je = Math.sqrt(2);
        function Ze(t, e, i) {
            var n = Math.abs(e - t) / Math.max(0, i),
                r = Math.pow(10, Math.floor(Math.log(n) / Math.LN10)),
                o = n / r;
            return o >= Ge ? (r *= 10) : o >= qe ? (r *= 5) : o >= Je && (r *= 2), e < t ? -r : r;
        }
        function $e(t, e, i) {
            var n = (e - t) / Math.max(0, i),
                r = Math.floor(Math.log(n) / Math.LN10),
                o = n / Math.pow(10, r);
            return r >= 0 ? (o >= Ge ? 10 : o >= qe ? 5 : o >= Je ? 2 : 1) * Math.pow(10, r) : -Math.pow(10, -r) / (o >= Ge ? 10 : o >= qe ? 5 : o >= Je ? 2 : 1);
        }
        var Qe,
            ti = (function (t) {
                function e(e, i) {
                    void 0 === i && (i = 0);
                    var n = t.call(this, i) || this;
                    return (n.fractionDigits = e), n;
                }
                return He(e, t), e;
            })(Array),
            ei = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            ii = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    ei(e, t),
                    (e.prototype.ticks = function (t) {
                        void 0 === t && (t = 10);
                        var e = this._domain;
                        return Ue(e[0], e[e.length - 1], t);
                    }),
                    (e.prototype.nice = function (t) {
                        void 0 === t && (t = 10);
                        var e,
                            i = this.domain,
                            n = 0,
                            r = i.length - 1,
                            o = i[n],
                            a = i[r];
                        a < o && ((e = o), (o = a), (a = e), (e = n), (n = r), (r = e)),
                            (e = $e(o, a, t)) > 0 ? (e = $e((o = Math.floor(o / e) * e), (a = Math.ceil(a / e) * e), t)) : e < 0 && (e = $e((o = Math.ceil(o * e) / e), (a = Math.floor(a * e) / e), t)),
                            e > 0 ? ((i[n] = Math.floor(o / e) * e), (i[r] = Math.ceil(a / e) * e), (this.domain = i)) : e < 0 && ((i[n] = Math.ceil(o * e) / e), (i[r] = Math.floor(a * e) / e), (this.domain = i));
                    }),
                    e
                );
            })(Ve),
            ni = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            ri = function (t, e, i, n) {
                var r,
                    o = arguments.length,
                    a = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a;
            },
            oi = (function (e) {
                function i() {
                    var t = e.call(this) || this;
                    (t.xDomain = []),
                        (t.yDomain = []),
                        (t.xData = []),
                        (t.yData = []),
                        (t.sizeData = []),
                        (t.sizeScale = new ii()),
                        (t.nodeSelection = S.select(t.group).selectAll()),
                        (t.nodeData = []),
                        (t.marker = new ie()),
                        (t._fill = ce.fills[0]),
                        (t._stroke = ce.strokes[0]),
                        (t._strokeWidth = 2),
                        (t._fillOpacity = 1),
                        (t._strokeOpacity = 1),
                        (t.highlightStyle = { fill: "yellow" }),
                        (t.xKey = ""),
                        (t.yKey = ""),
                        (t.xName = ""),
                        (t.yName = ""),
                        (t.sizeName = "Size"),
                        (t.labelName = "Label");
                    var i = t.marker;
                    return (
                        i.addPropertyListener("shape", t.onMarkerShapeChange, t),
                        i.addEventListener("change", t.update, t),
                        t.addPropertyListener("xKey", function () {
                            return (t.xData = []);
                        }),
                        t.addPropertyListener("yKey", function () {
                            return (t.yData = []);
                        }),
                        t.addPropertyListener("sizeKey", function () {
                            return (t.sizeData = []);
                        }),
                        t
                    );
                }
                return (
                    ni(i, e),
                    Object.defineProperty(i.prototype, "fill", {
                        get: function () {
                            return this._fill;
                        },
                        set: function (t) {
                            this._fill !== t && ((this._fill = t), this.scheduleData());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "stroke", {
                        get: function () {
                            return this._stroke;
                        },
                        set: function (t) {
                            this._stroke !== t && ((this._stroke = t), this.scheduleData());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "strokeWidth", {
                        get: function () {
                            return this._strokeWidth;
                        },
                        set: function (t) {
                            this._strokeWidth !== t && ((this._strokeWidth = t), this.update());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "fillOpacity", {
                        get: function () {
                            return this._fillOpacity;
                        },
                        set: function (t) {
                            this._fillOpacity !== t && ((this._fillOpacity = t), this.scheduleLayout());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(i.prototype, "strokeOpacity", {
                        get: function () {
                            return this._strokeOpacity;
                        },
                        set: function (t) {
                            this._strokeOpacity !== t && ((this._strokeOpacity = t), this.scheduleLayout());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (i.prototype.onHighlightChange = function () {
                        this.updateNodes();
                    }),
                    (i.prototype.onMarkerShapeChange = function () {
                        (this.nodeSelection = this.nodeSelection.setData([])), this.nodeSelection.exit.remove(), this.update(), this.fireEvent({ type: "legendChange" });
                    }),
                    (i.prototype.processData = function () {
                        var t = this,
                            e = t.xKey,
                            i = t.yKey,
                            n = t.sizeKey,
                            r = t.xAxis,
                            o = t.yAxis,
                            a = e && i && this.data ? this.data : [];
                        return (
                            (this.xData = a.map(function (t) {
                                return t[e];
                            })),
                            (this.yData = a.map(function (t) {
                                return t[i];
                            })),
                            (this.sizeData = n
                                ? a.map(function (t) {
                                      return t[n];
                                  })
                                : []),
                            (this.sizeScale.domain = nt(this.sizeData) || [1, 1]),
                            r.scale instanceof Ve ? (this.xDomain = this.fixNumericExtent(nt(this.xData), "x")) : (this.xDomain = this.xData),
                            o.scale instanceof Ve ? (this.yDomain = this.fixNumericExtent(nt(this.yData), "y")) : (this.yDomain = this.yData),
                            !0
                        );
                    }),
                    (i.prototype.getDomain = function (e) {
                        return e === t.ChartAxisDirection.X ? this.xDomain : this.yDomain;
                    }),
                    (i.prototype.getNodeData = function () {
                        return this.nodeData;
                    }),
                    (i.prototype.fireNodeClickEvent = function (t) {
                        this.fireEvent({ type: "nodeClick", series: this, datum: t.seriesDatum, xKey: this.xKey, yKey: this.yKey, sizeKey: this.sizeKey });
                    }),
                    (i.prototype.generateNodeData = function () {
                        var t = this,
                            e = this.xAxis.scale,
                            i = this.yAxis.scale,
                            n = (e.bandwidth || 0) / 2,
                            r = (i.bandwidth || 0) / 2,
                            o = this,
                            a = o.data,
                            s = o.xData,
                            h = o.yData,
                            l = o.sizeData,
                            u = o.sizeScale,
                            c = o.marker;
                        return (
                            (u.range = [c.minSize, c.size]),
                            s.map(function (o, s) {
                                return { series: t, seriesDatum: a[s], point: { x: e.convert(o) + n, y: i.convert(h[s]) + r }, size: l.length ? u.convert(l[s]) : c.size };
                            })
                        );
                    }),
                    (i.prototype.update = function () {
                        var t = this.visible,
                            e = this.chart,
                            i = this.xAxis,
                            n = this.yAxis;
                        if (((this.group.visible = t), t && e && !e.layoutPending && !e.dataPending && i && n)) {
                            var r = (this.nodeData = this.generateNodeData());
                            this.updateNodeSelection(r), this.updateNodes();
                        }
                    }),
                    (i.prototype.updateNodeSelection = function (t) {
                        var e = Kt(this.marker.shape),
                            i = this.nodeSelection.setData(t);
                        i.exit.remove();
                        var n = i.enter.append(k);
                        n.append(e), (this.nodeSelection = i.merge(n));
                    }),
                    (i.prototype.updateNodes = function () {
                        var t = this.chart.highlightedDatum,
                            e = this,
                            i = e.marker,
                            n = e.xKey,
                            r = e.yKey,
                            o = e.fill,
                            a = e.stroke,
                            s = e.strokeWidth,
                            h = e.fillOpacity,
                            l = e.strokeOpacity,
                            u = this.highlightStyle,
                            c = u.fill,
                            f = u.stroke,
                            p = void 0 !== i.strokeWidth ? i.strokeWidth : s,
                            d = Kt(i.shape),
                            y = i.formatter;
                        this.nodeSelection.selectByClass(d).each(function (e, s) {
                            var u = s === t,
                                d = u && void 0 !== c ? c : i.fill || o,
                                g = u && void 0 !== f ? f : i.stroke || a,
                                m = void 0;
                            y && (m = y({ datum: s.seriesDatum, xKey: n, yKey: r, fill: d, stroke: g, strokeWidth: p, size: s.size, highlighted: u })),
                                (e.fill = (m && m.fill) || d),
                                (e.stroke = (m && m.stroke) || g),
                                (e.strokeWidth = m && void 0 !== m.strokeWidth ? m.strokeWidth : p),
                                (e.size = m && void 0 !== m.size ? m.size : s.size),
                                (e.fillOpacity = h),
                                (e.strokeOpacity = l),
                                (e.translationX = s.point.x),
                                (e.translationY = s.point.y),
                                (e.visible = i.enabled && e.size > 0);
                        });
                    }),
                    (i.prototype.getTooltipHtml = function (t) {
                        var e = this.xKey,
                            i = this.yKey;
                        if (!e || !i) return "";
                        var n = this,
                            r = n.tooltipRenderer,
                            o = n.xName,
                            a = n.yName,
                            s = n.sizeKey,
                            h = n.sizeName,
                            l = n.labelKey,
                            u = n.labelName,
                            c = n.fill || "gray";
                        if (r) return r({ datum: t.seriesDatum, xKey: e, yKey: i, sizeKey: s, labelKey: l, xName: o, yName: a, sizeName: h, labelName: u, title: this.title, color: c });
                        var f = this.title || a,
                            p = 'style="color: white; background-color: ' + c + '"',
                            d = f ? '<div class="' + ae.defaultTooltipClass + '-title" ' + p + ">" + f + "</div>" : "",
                            y = t.seriesDatum,
                            g = y[e],
                            m = y[i],
                            v = "<b>" + (o || e) + "</b>: " + ("number" == typeof g ? R(g) : g) + "<br><b>" + (a || i) + "</b>: " + ("number" == typeof m ? R(m) : m);
                        return s && (v += "<br><b>" + h + "</b>: " + y[s]), l && (v = "<b>" + u + "</b>: " + y[l] + "<br>" + v), d + '<div class="' + ae.defaultTooltipClass + '-content">' + v + "</div>";
                    }),
                    (i.prototype.listSeriesItems = function (t) {
                        var e = this,
                            i = e.id,
                            n = e.data,
                            r = e.xKey,
                            o = e.yKey,
                            a = e.yName,
                            s = e.title,
                            h = e.visible,
                            l = e.marker,
                            u = e.fill,
                            c = e.stroke,
                            f = e.fillOpacity,
                            p = e.strokeOpacity;
                        n && n.length && r && o && t.push({ id: i, itemId: void 0, enabled: h, label: { text: s || a || o }, marker: { shape: l.shape, fill: l.fill || u, stroke: l.stroke || c, fillOpacity: f, strokeOpacity: p } });
                    }),
                    (i.className = "ScatterSeries"),
                    (i.type = "scatter"),
                    ri([g("layoutChange")], i.prototype, "title", void 0),
                    ri([g("dataChange")], i.prototype, "xKey", void 0),
                    ri([g("dataChange")], i.prototype, "yKey", void 0),
                    ri([g("dataChange")], i.prototype, "sizeKey", void 0),
                    ri([g("dataChange")], i.prototype, "labelKey", void 0),
                    i
                );
            })(ee),
            ai = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            si = function (t, e, i, n) {
                var r,
                    o = arguments.length,
                    a = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a;
            },
            hi = function () {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                var n = Array(t),
                    r = 0;
                for (e = 0; e < i; e++) for (var o = arguments[e], a = 0, s = o.length; a < s; a++, r++) n[r] = o[a];
                return n;
            };
        !(function (t) {
            (t[(t.Bin = 0)] = "Bin"), (t[(t.Label = 1)] = "Label");
        })(Qe || (Qe = {}));
        var li,
            ui = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return ai(e, t), si([g("change")], e.prototype, "formatter", void 0), e;
            })(Ae),
            ci = {
                count: function (t) {
                    return t.data.length;
                },
                sum: function (t, e) {
                    return t.data.reduce(function (t, i) {
                        return t + i[e];
                    }, 0);
                },
                mean: function (t, e) {
                    return ci.sum(t, e) / ci.count(t, e);
                },
            },
            fi = (function () {
                function t(t) {
                    var e = t[0],
                        i = t[1];
                    (this.data = []), (this.aggregatedValue = 0), (this.frequency = 0), (this.domain = [e, i]);
                }
                return (
                    (t.prototype.addDatum = function (t) {
                        this.data.push(t), this.frequency++;
                    }),
                    Object.defineProperty(t.prototype, "domainWidth", {
                        get: function () {
                            var t = this.domain,
                                e = t[0];
                            return t[1] - e;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "relativeHeight", {
                        get: function () {
                            return this.aggregatedValue / this.domainWidth;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.calculateAggregatedValue = function (t, e) {
                        e || (t = "count");
                        var i = ci[t];
                        this.aggregatedValue = i(this, e);
                    }),
                    (t.prototype.getY = function (t) {
                        return t ? this.relativeHeight : this.aggregatedValue;
                    }),
                    t
                );
            })(),
            pi = (function (i) {
                function n() {
                    var e,
                        n = i.call(this) || this;
                    return (
                        (n.rectGroup = n.group.appendChild(new k())),
                        (n.textGroup = n.group.appendChild(new k())),
                        (n.rectSelection = S.select(n.rectGroup).selectAll()),
                        (n.textSelection = S.select(n.textGroup).selectAll()),
                        (n.binnedData = []),
                        (n.xDomain = []),
                        (n.yDomain = []),
                        (n.label = new ui()),
                        (n.seriesItemEnabled = !0),
                        (n.fill = ce.fills[0]),
                        (n.stroke = ce.strokes[0]),
                        (n.fillOpacity = 1),
                        (n.strokeOpacity = 1),
                        (n.directionKeys = (((e = {})[t.ChartAxisDirection.X] = ["xKey"]), (e[t.ChartAxisDirection.Y] = ["yKey"]), e)),
                        (n._xKey = ""),
                        (n._areaPlot = !1),
                        (n._xName = ""),
                        (n._yKey = ""),
                        (n._yName = ""),
                        (n._strokeWidth = 1),
                        (n.highlightStyle = { fill: "yellow" }),
                        (n.label.enabled = !1),
                        n.label.addEventListener("change", n.update, n),
                        n
                    );
                }
                return (
                    ai(n, i),
                    (n.prototype.getKeys = function (t) {
                        var e = this,
                            i = this.directionKeys,
                            n = i && i[t],
                            r = [];
                        return (
                            n &&
                                n.forEach(function (t) {
                                    var i = e[t];
                                    i && (Array.isArray(i) ? r.push.apply(r, i) : r.push(i));
                                }),
                            r
                        );
                    }),
                    Object.defineProperty(n.prototype, "xKey", {
                        get: function () {
                            return this._xKey;
                        },
                        set: function (t) {
                            this._xKey !== t && ((this._xKey = t), this.scheduleData());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "areaPlot", {
                        get: function () {
                            return this._areaPlot;
                        },
                        set: function (t) {
                            (this._areaPlot = t), this.scheduleData();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "bins", {
                        get: function () {
                            return this._bins;
                        },
                        set: function (t) {
                            (this._bins = t), this.scheduleData();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "aggregation", {
                        get: function () {
                            return this._aggregation;
                        },
                        set: function (t) {
                            (this._aggregation = t), this.scheduleData();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "binCount", {
                        get: function () {
                            return this._binCount;
                        },
                        set: function (t) {
                            (this._binCount = t), this.scheduleData();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "xName", {
                        get: function () {
                            return this._xName;
                        },
                        set: function (t) {
                            this._xName !== t && ((this._xName = t), this.update());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "yKey", {
                        get: function () {
                            return this._yKey;
                        },
                        set: function (t) {
                            (this._yKey = t), (this.seriesItemEnabled = !0), this.scheduleData();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "yName", {
                        get: function () {
                            return this._yName;
                        },
                        set: function (t) {
                            (this._yName = t), this.scheduleData();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "strokeWidth", {
                        get: function () {
                            return this._strokeWidth;
                        },
                        set: function (t) {
                            this._strokeWidth !== t && ((this._strokeWidth = t), this.update());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "shadow", {
                        get: function () {
                            return this._shadow;
                        },
                        set: function (t) {
                            this._shadow !== t && ((this._shadow = t), this.update());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (n.prototype.onHighlightChange = function () {
                        this.updateRectNodes();
                    }),
                    (n.prototype.deriveBins = function () {
                        var t = this,
                            e = this.bins,
                            i = this.binCount;
                        if ((e && i && console.warn("bin domain and bin count both specified - these are mutually exclusive properties"), e)) return e;
                        var n = this.data.map(function (e) {
                                return e[t.xKey];
                            }),
                            r = this.fixNumericExtent(nt(n), "x"),
                            o = Ue(r[0], r[1], this.binCount || 10),
                            a = Ze(r[0], r[1], this.binCount || 10),
                            s = o[0];
                        return hi(
                            [[s - a, s]],
                            o.map(function (t) {
                                return [t, t + a];
                            })
                        );
                    }),
                    (n.prototype.placeDataInBins = function (t) {
                        var e = this,
                            i = this.xKey,
                            n = this.deriveBins(),
                            r = t.slice().sort(function (t, e) {
                                return t[i] < e[i] ? -1 : t[i] > e[i] ? 1 : 0;
                            }),
                            o = 0,
                            a = [new fi(n[0])];
                        return (
                            r.forEach(function (t) {
                                for (; t[i] > n[o][1]; ) o++, a.push(new fi(n[o]));
                                a[o].addDatum(t);
                            }),
                            a.forEach(function (t) {
                                return t.calculateAggregatedValue(e._aggregation, e.yKey);
                            }),
                            a
                        );
                    }),
                    Object.defineProperty(n.prototype, "xMax", {
                        get: function () {
                            var t = this;
                            return (
                                this.data &&
                                this.data.reduce(function (e, i) {
                                    return Math.max(e, i[t.xKey]);
                                }, Number.NEGATIVE_INFINITY)
                            );
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (n.prototype.processData = function () {
                        var t = this,
                            e = this.xKey,
                            i = this.data;
                        this.binnedData = this.placeDataInBins(e && i ? i : []);
                        var n = rt(
                            this.binnedData.map(function (e) {
                                return e.getY(t.areaPlot);
                            })
                        );
                        this.yDomain = this.fixNumericExtent([0, n[1]], "y");
                        var r = this.binnedData[0],
                            o = this.binnedData[this.binnedData.length - 1],
                            a = r.domain[0],
                            s = o.domain[1];
                        return (this.xDomain = [a, s]), this.fireEvent({ type: "dataProcessed" }), !0;
                    }),
                    (n.prototype.getDomain = function (e) {
                        return e === t.ChartAxisDirection.X ? this.xDomain : this.yDomain;
                    }),
                    (n.prototype.fireNodeClickEvent = function (t) {
                        this.fireEvent({ type: "nodeClick", series: this, datum: t.seriesDatum, xKey: this.xKey });
                    }),
                    (n.prototype.update = function () {
                        var t = this.visible,
                            e = this.chart,
                            i = this.xAxis,
                            n = this.yAxis;
                        if (((this.group.visible = t), i && n && t && e && !e.layoutPending && !e.dataPending)) {
                            var r = this.generateNodeData();
                            this.updateRectSelection(r), this.updateRectNodes(), this.updateTextSelection(r), this.updateTextNodes();
                        }
                    }),
                    (n.prototype.generateNodeData = function () {
                        var t = this;
                        if (!this.seriesItemEnabled) return [];
                        var e = this,
                            i = e.xAxis.scale,
                            n = e.yAxis.scale,
                            r = e.fill,
                            o = e.stroke,
                            a = e.strokeWidth,
                            s = [],
                            h = this.label,
                            l = h.formatter,
                            u =
                                void 0 === l
                                    ? function (t) {
                                          return String(t.aggregatedValue);
                                      }
                                    : l,
                            c = h.fontStyle,
                            f = h.fontWeight,
                            p = h.fontSize,
                            d = h.fontFamily,
                            y = h.color;
                        return (
                            this.binnedData.forEach(function (e) {
                                var h = e.aggregatedValue,
                                    l = e.frequency,
                                    g = e.domain,
                                    m = g[0],
                                    v = g[1],
                                    b = e.relativeHeight,
                                    x = i.convert(m),
                                    _ = i.convert(v),
                                    k = t.areaPlot ? b : t.yKey ? h : l,
                                    w = n.convert(0),
                                    S = n.convert(k),
                                    O = _ - x,
                                    P = Math.abs(S - w),
                                    C = 0 !== k && { text: u(e), fontStyle: c, fontWeight: f, fontSize: p, fontFamily: d, fill: y, x: x + O / 2, y: S + P / 2 };
                                s.push({ series: t, seriesDatum: e, x: x, y: S, width: O, height: P, fill: r, stroke: o, strokeWidth: a, label: C });
                            }),
                            s
                        );
                    }),
                    (n.prototype.updateRectSelection = function (t) {
                        var e = this.rectSelection.setData(t);
                        e.exit.remove();
                        var i = e.enter.append(_t).each(function (t) {
                            (t.tag = Qe.Bin), (t.crisp = !0);
                        });
                        this.rectSelection = e.merge(i);
                    }),
                    (n.prototype.updateRectNodes = function () {
                        var t = this.chart.highlightedDatum,
                            e = this.fillOpacity,
                            i = this.strokeOpacity,
                            n = this.shadow,
                            r = this.highlightStyle,
                            o = r.fill,
                            a = r.stroke;
                        this.rectSelection.each(function (r, s) {
                            var h = s === t;
                            (r.x = s.x),
                                (r.y = s.y),
                                (r.width = s.width),
                                (r.height = s.height),
                                (r.fill = h && void 0 !== o ? o : s.fill),
                                (r.stroke = h && void 0 !== a ? a : s.stroke),
                                (r.fillOpacity = e),
                                (r.strokeOpacity = i),
                                (r.strokeWidth = s.strokeWidth),
                                (r.fillShadow = n),
                                (r.visible = s.height > 0);
                        });
                    }),
                    (n.prototype.updateTextSelection = function (t) {
                        var i = this.textSelection.setData(t);
                        i.exit.remove();
                        var n = i.enter.append(p).each(function (t) {
                            (t.tag = Qe.Label), (t.pointerEvents = e.None), (t.textAlign = "center"), (t.textBaseline = "middle");
                        });
                        this.textSelection = i.merge(n);
                    }),
                    (n.prototype.updateTextNodes = function () {
                        var t = this.label.enabled;
                        this.textSelection.each(function (e, i) {
                            var n = i.label;
                            n && t
                                ? ((e.text = n.text), (e.x = n.x), (e.y = n.y), (e.fontStyle = n.fontStyle), (e.fontWeight = n.fontWeight), (e.fontSize = n.fontSize), (e.fontFamily = n.fontFamily), (e.fill = n.fill), (e.visible = !0))
                                : (e.visible = !1);
                        });
                    }),
                    (n.prototype.getTooltipHtml = function (t) {
                        var e = this.xKey,
                            i = this.yKey;
                        if (!e) return "";
                        var n = this,
                            r = n.xName,
                            o = n.yName,
                            a = n.fill,
                            s = n.tooltipRenderer,
                            h = n.aggregation,
                            l = t.seriesDatum,
                            u = l.aggregatedValue,
                            c = l.frequency,
                            f = l.domain,
                            p = f[0],
                            d = f[1];
                        if (s) return s({ datum: l, xKey: e, xName: r, yKey: i, yName: o, color: a });
                        var y = 'style="color: white; background-color: ' + a + '"',
                            g = '\n                <div class="' + ae.defaultTooltipClass + '-title" ' + y + ">\n                    " + (r || e) + " " + R(p) + " - " + R(d) + "\n                </div>",
                            m = i ? "<b>" + (o || i) + " (" + h + ")</b>: " + R(u) + "<br>" : "";
                        return (m += "<b>Frequency</b>: " + c), "\n                " + g + '\n                <div class="' + ae.defaultTooltipClass + '-content">\n                    ' + m + "\n                </div>";
                    }),
                    (n.prototype.listSeriesItems = function (t) {
                        var e = this,
                            i = e.id,
                            n = e.data,
                            r = e.yKey,
                            o = e.yName,
                            a = e.seriesItemEnabled,
                            s = e.fill,
                            h = e.stroke,
                            l = e.fillOpacity,
                            u = e.strokeOpacity;
                        n && n.length && t.push({ id: i, itemId: r, enabled: a, label: { text: o || r || "Frequency" }, marker: { fill: s, stroke: h, fillOpacity: l, strokeOpacity: u } });
                    }),
                    (n.prototype.toggleSeriesItem = function (t, e) {
                        t === this.yKey && (this.seriesItemEnabled = e), this.scheduleData();
                    }),
                    (n.className = "HistogramSeries"),
                    (n.type = "histogram"),
                    si([g("dataChange")], n.prototype, "fill", void 0),
                    si([g("dataChange")], n.prototype, "stroke", void 0),
                    si([g("layoutChange")], n.prototype, "fillOpacity", void 0),
                    si([g("layoutChange")], n.prototype, "strokeOpacity", void 0),
                    n
                );
            })(ee),
            di = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            yi = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (
                        (e.path = new L()),
                        (e._dirtyPath = !0),
                        (e._centerX = 0),
                        (e._centerY = 0),
                        (e._centerOffset = 0),
                        (e._innerRadius = 10),
                        (e._outerRadius = 20),
                        (e._startAngle = 0),
                        (e._endAngle = 2 * Math.PI),
                        (e._angleOffset = 0),
                        e
                    );
                }
                return (
                    di(e, t),
                    Object.defineProperty(e.prototype, "dirtyPath", {
                        get: function () {
                            return this._dirtyPath;
                        },
                        set: function (t) {
                            this._dirtyPath !== t && ((this._dirtyPath = t), t && (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "centerX", {
                        get: function () {
                            return this._centerX;
                        },
                        set: function (t) {
                            this._centerX !== t && ((this._centerX = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "centerY", {
                        get: function () {
                            return this._centerY;
                        },
                        set: function (t) {
                            this._centerY !== t && ((this._centerY = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "centerOffset", {
                        get: function () {
                            return this._centerOffset;
                        },
                        set: function (t) {
                            this._centerOffset !== t && ((this._centerOffset = Math.max(0, t)), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "innerRadius", {
                        get: function () {
                            return this._innerRadius;
                        },
                        set: function (t) {
                            this._innerRadius !== t && ((this._innerRadius = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "outerRadius", {
                        get: function () {
                            return this._outerRadius;
                        },
                        set: function (t) {
                            this._outerRadius !== t && ((this._outerRadius = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "startAngle", {
                        get: function () {
                            return this._startAngle;
                        },
                        set: function (t) {
                            this._startAngle !== t && ((this._startAngle = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "endAngle", {
                        get: function () {
                            return this._endAngle;
                        },
                        set: function (t) {
                            this._endAngle !== t && ((this._endAngle = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "angleOffset", {
                        get: function () {
                            return this._angleOffset;
                        },
                        set: function (t) {
                            this._angleOffset !== t && ((this._angleOffset = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.computeBBox = function () {
                        var t = this.outerRadius;
                        return new n(this.centerX - t, this.centerY - t, 2 * t, 2 * t);
                    }),
                    (e.prototype.isPointInPath = function (t, e) {
                        var i = this.transformPoint(t, e);
                        return this.path.isPointInPath(i.x, i.y);
                    }),
                    (e.prototype.isPointInStroke = function (t, e) {
                        return !1;
                    }),
                    Object.defineProperty(e.prototype, "fullPie", {
                        get: function () {
                            return K(D(this.startAngle), D(this.endAngle));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.updatePath = function () {
                        if (this.dirtyPath) {
                            var t = this.path,
                                e = this.angleOffset,
                                i = Math.min(this.startAngle, this.endAngle) + e,
                                n = Math.max(this.startAngle, this.endAngle) + e,
                                r = 0.5 * (i + n),
                                o = Math.min(this.innerRadius, this.outerRadius),
                                a = Math.max(this.innerRadius, this.outerRadius),
                                s = this.centerOffset,
                                h = this.fullPie,
                                l = this.centerX,
                                u = this.centerY;
                            if (
                                (t.clear(),
                                s && ((l += s * Math.cos(r)), (u += s * Math.sin(r))),
                                h || (t.moveTo(l + o * Math.cos(i), u + o * Math.sin(i)), t.lineTo(l + a * Math.cos(i), u + a * Math.sin(i))),
                                t.cubicArc(l, u, a, a, 0, i, n, 0),
                                h)
                            )
                                t.moveTo(l + o * Math.cos(n), u + o * Math.sin(n));
                            else {
                                var c = l + o * Math.cos(n);
                                t.lineTo(Math.abs(c) < 1e-8 ? 0 : c, u + o * Math.sin(n));
                            }
                            t.cubicArc(l, u, o, o, 0, n, i, 1), t.closePath(), (this.dirtyPath = !1);
                        }
                    }),
                    (e.prototype.render = function (t) {
                        this.dirtyTransform && this.computeTransformMatrix(), this.matrix.toContext(t), this.updatePath(), this.scene.appendPath(this.path), this.fillStroke(t), (this.dirty = !1);
                    }),
                    (e.className = "Sector"),
                    e
                );
            })(u),
            gi = (function () {
                function t(t, e, i, n) {
                    void 0 === n && (n = 1), (this.r = Math.min(1, Math.max(0, t || 0))), (this.g = Math.min(1, Math.max(0, e || 0))), (this.b = Math.min(1, Math.max(0, i || 0))), (this.a = Math.min(1, Math.max(0, n || 0)));
                }
                return (
                    (t.fromString = function (e) {
                        if (e.indexOf("#") >= 0) return t.fromHexString(e);
                        var i = t.nameToHex[e];
                        if (i) return t.fromHexString(i);
                        if (e.indexOf("rgb") >= 0) return t.fromRgbaString(e);
                        throw new Error("Invalid color string: '" + e + "'");
                    }),
                    (t.fromHexString = function (e) {
                        var i = e.match(t.hexRe);
                        if (i) return new t((n = parseInt(i[1], 16)) / 255, (r = parseInt(i[2], 16)) / 255, (o = parseInt(i[3], 16)) / 255, (a = void 0 !== i[4] ? parseInt(i[4], 16) : 255) / 255);
                        if ((i = e.match(t.shortHexRe))) {
                            var n = parseInt(i[1], 16),
                                r = parseInt(i[2], 16),
                                o = parseInt(i[3], 16),
                                a = void 0 !== i[4] ? parseInt(i[4], 16) : 15;
                            return new t((n += 16 * n) / 255, (r += 16 * r) / 255, (o += 16 * o) / 255, (a += 16 * a) / 255);
                        }
                        throw new Error("Malformed hexadecimal color string: '" + e + "'");
                    }),
                    (t.fromRgbaString = function (e) {
                        var i = e.match(t.rgbRe);
                        if (i) return new t(+i[1] / 255, +i[2] / 255, +i[3] / 255);
                        if ((i = e.match(t.rgbaRe))) return new t(+i[1] / 255, +i[2] / 255, +i[3] / 255, +i[4]);
                        throw new Error("Malformed rgb/rgba color string: '" + e + "'");
                    }),
                    (t.fromArray = function (e) {
                        if (4 === e.length) return new t(e[0], e[1], e[2], e[3]);
                        if (3 === e.length) return new t(e[0], e[1], e[2]);
                        throw new Error("The given array should contain 3 or 4 color components (numbers).");
                    }),
                    (t.fromHSB = function (e, i, n, r) {
                        void 0 === r && (r = 1);
                        var o = t.HSBtoRGB(e, i, n);
                        return new t(o[0], o[1], o[2], r);
                    }),
                    (t.padHex = function (t) {
                        return 1 === t.length ? "0" + t : t;
                    }),
                    (t.prototype.toHexString = function () {
                        var e = "#" + t.padHex(Math.round(255 * this.r).toString(16)) + t.padHex(Math.round(255 * this.g).toString(16)) + t.padHex(Math.round(255 * this.b).toString(16));
                        return this.a < 1 && (e += t.padHex(Math.round(255 * this.a).toString(16))), e;
                    }),
                    (t.prototype.toRgbaString = function (t) {
                        void 0 === t && (t = 3);
                        var e = [Math.round(255 * this.r), Math.round(255 * this.g), Math.round(255 * this.b)],
                            i = Math.pow(10, t);
                        return 1 !== this.a ? (e.push(Math.round(this.a * i) / i), "rgba(" + e.join(", ") + ")") : "rgb(" + e.join(", ") + ")";
                    }),
                    (t.prototype.toString = function () {
                        return 1 === this.a ? this.toHexString() : this.toRgbaString();
                    }),
                    (t.prototype.toHSB = function () {
                        return t.RGBtoHSB(this.r, this.g, this.b);
                    }),
                    (t.RGBtoHSB = function (t, e, i) {
                        var n = Math.min(t, e, i),
                            r = Math.max(t, e, i),
                            o = NaN;
                        if (n !== r) {
                            var a = r - n,
                                s = (r - t) / a,
                                h = (r - e) / a,
                                l = (r - i) / a;
                            (o = t === r ? l - h : e === r ? 2 + s - l : 4 + h - s), (o /= 6) < 0 && (o += 1);
                        }
                        return [360 * o, 0 !== r ? (r - n) / r : 0, r];
                    }),
                    (t.HSBtoRGB = function (t, e, i) {
                        isNaN(t) && (t = 0), (t = (((t % 360) + 360) % 360) / 360);
                        var n = 0,
                            r = 0,
                            o = 0;
                        if (0 === e) n = r = o = i;
                        else {
                            var a = 6 * (t - Math.floor(t)),
                                s = a - Math.floor(a),
                                h = i * (1 - e),
                                l = i * (1 - e * s),
                                u = i * (1 - e * (1 - s));
                            switch (a >> 0) {
                                case 0:
                                    (n = i), (r = u), (o = h);
                                    break;
                                case 1:
                                    (n = l), (r = i), (o = h);
                                    break;
                                case 2:
                                    (n = h), (r = i), (o = u);
                                    break;
                                case 3:
                                    (n = h), (r = l), (o = i);
                                    break;
                                case 4:
                                    (n = u), (r = h), (o = i);
                                    break;
                                case 5:
                                    (n = i), (r = h), (o = l);
                            }
                        }
                        return [n, r, o];
                    }),
                    (t.prototype.derive = function (e, i, n, r) {
                        var o = t.RGBtoHSB(this.r, this.g, this.b),
                            a = o[2];
                        0 == a && n > 1 && (a = 0.05);
                        var s = (((o[0] + e) % 360) + 360) % 360,
                            h = Math.max(Math.min(o[1] * i, 1), 0);
                        a = Math.max(Math.min(a * n, 1), 0);
                        var l = Math.max(Math.min(this.a * r, 1), 0),
                            u = t.HSBtoRGB(s, h, a);
                        return u.push(l), t.fromArray(u);
                    }),
                    (t.prototype.brighter = function () {
                        return this.derive(0, 1, 1 / 0.7, 1);
                    }),
                    (t.prototype.darker = function () {
                        return this.derive(0, 1, 0.7, 1);
                    }),
                    (t.hexRe = /\s*#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?\s*$/),
                    (t.shortHexRe = /\s*#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])?\s*$/),
                    (t.rgbRe = /\s*rgb\((\d+),\s*(\d+),\s*(\d+)\)\s*/),
                    (t.rgbaRe = /\s*rgba\((\d+),\s*(\d+),\s*(\d+),\s*([.\d]+)\)\s*/),
                    (t.nameToHex = Object.freeze({
                        aliceblue: "#F0F8FF",
                        antiquewhite: "#FAEBD7",
                        aqua: "#00FFFF",
                        aquamarine: "#7FFFD4",
                        azure: "#F0FFFF",
                        beige: "#F5F5DC",
                        bisque: "#FFE4C4",
                        black: "#000000",
                        blanchedalmond: "#FFEBCD",
                        blue: "#0000FF",
                        blueviolet: "#8A2BE2",
                        brown: "#A52A2A",
                        burlywood: "#DEB887",
                        cadetblue: "#5F9EA0",
                        chartreuse: "#7FFF00",
                        chocolate: "#D2691E",
                        coral: "#FF7F50",
                        cornflowerblue: "#6495ED",
                        cornsilk: "#FFF8DC",
                        crimson: "#DC143C",
                        cyan: "#00FFFF",
                        darkblue: "#00008B",
                        darkcyan: "#008B8B",
                        darkgoldenrod: "#B8860B",
                        darkgray: "#A9A9A9",
                        darkgreen: "#006400",
                        darkgrey: "#A9A9A9",
                        darkkhaki: "#BDB76B",
                        darkmagenta: "#8B008B",
                        darkolivegreen: "#556B2F",
                        darkorange: "#FF8C00",
                        darkorchid: "#9932CC",
                        darkred: "#8B0000",
                        darksalmon: "#E9967A",
                        darkseagreen: "#8FBC8F",
                        darkslateblue: "#483D8B",
                        darkslategray: "#2F4F4F",
                        darkslategrey: "#2F4F4F",
                        darkturquoise: "#00CED1",
                        darkviolet: "#9400D3",
                        deeppink: "#FF1493",
                        deepskyblue: "#00BFFF",
                        dimgray: "#696969",
                        dimgrey: "#696969",
                        dodgerblue: "#1E90FF",
                        firebrick: "#B22222",
                        floralwhite: "#FFFAF0",
                        forestgreen: "#228B22",
                        fuchsia: "#FF00FF",
                        gainsboro: "#DCDCDC",
                        ghostwhite: "#F8F8FF",
                        gold: "#FFD700",
                        goldenrod: "#DAA520",
                        gray: "#808080",
                        green: "#008000",
                        greenyellow: "#ADFF2F",
                        grey: "#808080",
                        honeydew: "#F0FFF0",
                        hotpink: "#FF69B4",
                        indianred: "#CD5C5C",
                        indigo: "#4B0082",
                        ivory: "#FFFFF0",
                        khaki: "#F0E68C",
                        lavender: "#E6E6FA",
                        lavenderblush: "#FFF0F5",
                        lawngreen: "#7CFC00",
                        lemonchiffon: "#FFFACD",
                        lightblue: "#ADD8E6",
                        lightcoral: "#F08080",
                        lightcyan: "#E0FFFF",
                        lightgoldenrodyellow: "#FAFAD2",
                        lightgray: "#D3D3D3",
                        lightgreen: "#90EE90",
                        lightgrey: "#D3D3D3",
                        lightpink: "#FFB6C1",
                        lightsalmon: "#FFA07A",
                        lightseagreen: "#20B2AA",
                        lightskyblue: "#87CEFA",
                        lightslategray: "#778899",
                        lightslategrey: "#778899",
                        lightsteelblue: "#B0C4DE",
                        lightyellow: "#FFFFE0",
                        lime: "#00FF00",
                        limegreen: "#32CD32",
                        linen: "#FAF0E6",
                        magenta: "#FF00FF",
                        maroon: "#800000",
                        mediumaquamarine: "#66CDAA",
                        mediumblue: "#0000CD",
                        mediumorchid: "#BA55D3",
                        mediumpurple: "#9370DB",
                        mediumseagreen: "#3CB371",
                        mediumslateblue: "#7B68EE",
                        mediumspringgreen: "#00FA9A",
                        mediumturquoise: "#48D1CC",
                        mediumvioletred: "#C71585",
                        midnightblue: "#191970",
                        mintcream: "#F5FFFA",
                        mistyrose: "#FFE4E1",
                        moccasin: "#FFE4B5",
                        navajowhite: "#FFDEAD",
                        navy: "#000080",
                        oldlace: "#FDF5E6",
                        olive: "#808000",
                        olivedrab: "#6B8E23",
                        orange: "#FFA500",
                        orangered: "#FF4500",
                        orchid: "#DA70D6",
                        palegoldenrod: "#EEE8AA",
                        palegreen: "#98FB98",
                        paleturquoise: "#AFEEEE",
                        palevioletred: "#DB7093",
                        papayawhip: "#FFEFD5",
                        peachpuff: "#FFDAB9",
                        peru: "#CD853F",
                        pink: "#FFC0CB",
                        plum: "#DDA0DD",
                        powderblue: "#B0E0E6",
                        purple: "#800080",
                        rebeccapurple: "#663399",
                        red: "#FF0000",
                        rosybrown: "#BC8F8F",
                        royalblue: "#4169E1",
                        saddlebrown: "#8B4513",
                        salmon: "#FA8072",
                        sandybrown: "#F4A460",
                        seagreen: "#2E8B57",
                        seashell: "#FFF5EE",
                        sienna: "#A0522D",
                        silver: "#C0C0C0",
                        skyblue: "#87CEEB",
                        slateblue: "#6A5ACD",
                        slategray: "#708090",
                        slategrey: "#708090",
                        snow: "#FFFAFA",
                        springgreen: "#00FF7F",
                        steelblue: "#4682B4",
                        tan: "#D2B48C",
                        teal: "#008080",
                        thistle: "#D8BFD8",
                        tomato: "#FF6347",
                        turquoise: "#40E0D0",
                        violet: "#EE82EE",
                        wheat: "#F5DEB3",
                        white: "#FFFFFF",
                        whitesmoke: "#F5F5F5",
                        yellow: "#FFFF00",
                        yellowgreen: "#9ACD32",
                    })),
                    t
                );
            })(),
            mi = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            vi = function (t, e, i, n) {
                var r,
                    o = arguments.length,
                    a = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a;
            };
        !(function (t) {
            (t[(t.Sector = 0)] = "Sector"), (t[(t.Callout = 1)] = "Callout"), (t[(t.Label = 2)] = "Label");
        })(li || (li = {}));
        var bi = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.offset = 3), (e.minAngle = 20), e;
                }
                return mi(e, t), vi([g("change")], e.prototype, "offset", void 0), vi([g("dataChange")], e.prototype, "minAngle", void 0), e;
            })(Ae),
            xi = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.colors = ce.strokes), (e.length = 10), (e.strokeWidth = 1), e;
                }
                return mi(e, t), vi([g("change")], e.prototype, "colors", void 0), vi([g("change")], e.prototype, "length", void 0), vi([g("change")], e.prototype, "strokeWidth", void 0), e;
            })(y),
            _i = (function (i) {
                function n() {
                    var t,
                        e = i.call(this) || this;
                    return (
                        (e.radiusScale = new ii()),
                        (e.groupSelection = S.select(e.group).selectAll()),
                        (e.groupSelectionData = []),
                        (e.angleScale =
                            (((t = new ii()).domain = [0, 1]),
                            (t.range = [-Math.PI, Math.PI].map(function (t) {
                                return t + Math.PI / 2;
                            })),
                            t)),
                        (e.seriesItemEnabled = []),
                        (e.label = new bi()),
                        (e.callout = new xi()),
                        (e.angleKey = ""),
                        (e.angleName = ""),
                        (e._fills = ce.fills),
                        (e._strokes = ce.strokes),
                        (e.fillOpacity = 1),
                        (e.strokeOpacity = 1),
                        (e.rotation = 0),
                        (e.outerRadiusOffset = 0),
                        (e.innerRadiusOffset = 0),
                        (e.strokeWidth = 1),
                        (e.highlightStyle = { fill: "yellow" }),
                        e.addEventListener("update", e.update, e),
                        e.label.addEventListener("change", e.scheduleLayout, e),
                        e.label.addEventListener("dataChange", e.scheduleData, e),
                        e.callout.addEventListener("change", e.scheduleLayout, e),
                        e.addPropertyListener("data", function (t) {
                            t.source.seriesItemEnabled = t.value.map(function () {
                                return !0;
                            });
                        }),
                        e
                    );
                }
                return (
                    mi(n, i),
                    Object.defineProperty(n.prototype, "title", {
                        get: function () {
                            return this._title;
                        },
                        set: function (t) {
                            var e = this._title;
                            e !== t &&
                                (e && (e.removeEventListener("change", this.scheduleLayout), this.group.removeChild(e.node)),
                                t && ((t.node.textBaseline = "bottom"), t.addEventListener("change", this.scheduleLayout), this.group.appendChild(t.node)),
                                (this._title = t),
                                this.scheduleLayout());
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "fills", {
                        get: function () {
                            return this._fills;
                        },
                        set: function (t) {
                            (this._fills = t),
                                (this.strokes = t.map(function (t) {
                                    return gi.fromString(t).darker().toHexString();
                                })),
                                this.scheduleData();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(n.prototype, "strokes", {
                        get: function () {
                            return this._strokes;
                        },
                        set: function (t) {
                            (this._strokes = t), (this.callout.colors = t), this.scheduleData();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (n.prototype.onHighlightChange = function () {
                        this.updateNodes();
                    }),
                    (n.prototype.getDomain = function (e) {
                        return e === t.ChartAxisDirection.X ? this.angleScale.domain : this.radiusScale.domain;
                    }),
                    (n.prototype.processData = function () {
                        var t,
                            e = this,
                            i = this,
                            n = i.angleKey,
                            r = i.radiusKey,
                            o = i.seriesItemEnabled,
                            a = i.angleScale,
                            s = i.groupSelectionData,
                            h = n && this.data ? this.data : [],
                            l = h.map(function (t, e) {
                                return (o[e] && Math.abs(+t[n])) || 0;
                            }),
                            u = l.reduce(function (t, e) {
                                return t + e;
                            }, 0),
                            c =
                                ((t = 0),
                                l.map(function (e) {
                                    return (t += e / u);
                                })),
                            f = this.label.enabled && this.labelKey,
                            p = f
                                ? h.map(function (t) {
                                      return String(t[f]);
                                  })
                                : [],
                            d = !!r && !this.innerRadiusOffset,
                            y = [];
                        if (d) {
                            var g = h.map(function (t) {
                                    return Math.abs(t[r]);
                                }),
                                m = Math.max.apply(Math, g);
                            y = g.map(function (t) {
                                return t / m;
                            });
                        }
                        s.length = 0;
                        var v = M(this.rotation),
                            b = Math.PI / 2,
                            x = 0;
                        return (
                            c.reduce(function (t, i) {
                                var n,
                                    r,
                                    o = d ? y[x] : 1,
                                    l = a.convert(t) + v,
                                    u = a.convert(i) + v,
                                    c = (l + u) / 2,
                                    g = Math.abs(u - l),
                                    m = Math.cos(c),
                                    _ = Math.sin(c),
                                    k = M(e.label.minAngle),
                                    w = f && g > k,
                                    S = E(c),
                                    O = (-3 * Math.PI) / 4;
                                return (
                                    S >= O && S < (O += b)
                                        ? ((n = "center"), (r = "bottom"))
                                        : S >= O && S < (O += b)
                                        ? ((n = "left"), (r = "middle"))
                                        : S >= O && S < (O += b)
                                        ? ((n = "center"), (r = "hanging"))
                                        : ((n = "right"), (r = "middle")),
                                    s.push({ series: e, seriesDatum: h[x], index: x, radius: o, startAngle: l, endAngle: u, midAngle: c, midCos: m, midSin: _, label: w ? { text: p[x], textAlign: n, textBaseline: r } : void 0 }),
                                    x++,
                                    i
                                );
                            }, 0),
                            !0
                        );
                    }),
                    (n.prototype.update = function () {
                        var t = this.chart;
                        if ((this.group.visible = this.visible && this.seriesItemEnabled.indexOf(!0) >= 0) && t && !t.dataPending && !t.layoutPending) {
                            (this.radiusScale.range = [0, this.radius]), (this.group.translationX = this.centerX), (this.group.translationY = this.centerY);
                            var e = this.title;
                            e && ((e.node.translationY = -this.radius - this.outerRadiusOffset - 2), (e.node.visible = e.enabled)), this.updateGroupSelection(), this.updateNodes();
                        }
                    }),
                    (n.prototype.updateGroupSelection = function () {
                        var t = this.groupSelection.setData(this.groupSelectionData);
                        t.exit.remove();
                        var i = t.enter.append(k);
                        i.append(yi).each(function (t) {
                            return (t.tag = li.Sector);
                        }),
                            i.append(P).each(function (t) {
                                (t.tag = li.Callout), (t.pointerEvents = e.None);
                            }),
                            i.append(p).each(function (t) {
                                (t.tag = li.Label), (t.pointerEvents = e.None);
                            }),
                            (this.groupSelection = t.merge(i));
                    }),
                    (n.prototype.updateNodes = function () {
                        var t = this,
                            e = t.fills,
                            i = t.strokes,
                            n = t.fillOpacity,
                            r = t.strokeOpacity,
                            o = t.strokeWidth,
                            a = t.outerRadiusOffset,
                            s = t.innerRadiusOffset,
                            h = t.radiusScale,
                            l = t.callout,
                            u = t.shadow,
                            c = t.highlightStyle,
                            f = c.fill,
                            p = c.stroke,
                            d = c.centerOffset,
                            y = this.chart.highlightedDatum,
                            g = [],
                            m = [];
                        this.groupSelection.selectByTag(li.Sector).each(function (t, l, c) {
                            var v = h.convert(l.radius),
                                b = Math.max(0, v + a);
                            (t.outerRadius = b), (t.innerRadius = Math.max(0, s ? v + s : 0)), (t.startAngle = l.startAngle), (t.endAngle = l.endAngle);
                            var x = l === y;
                            (t.fill = x && void 0 !== f ? f : e[c % e.length]),
                                (t.stroke = x && void 0 !== p ? p : i[c % i.length]),
                                (t.fillOpacity = n),
                                (t.strokeOpacity = r),
                                (t.centerOffset = x && void 0 !== d ? d : 0),
                                (t.fillShadow = u),
                                (t.strokeWidth = o),
                                (t.lineJoin = "round"),
                                g.push(b),
                                m.push(t.centerOffset);
                        });
                        var v = l.colors,
                            b = l.length,
                            x = l.strokeWidth;
                        this.groupSelection.selectByTag(li.Callout).each(function (t, e, i) {
                            if (e.label) {
                                var n = m[i] + g[i];
                                (t.strokeWidth = x), (t.stroke = v[i % v.length]), (t.x1 = e.midCos * n), (t.y1 = e.midSin * n), (t.x2 = e.midCos * (n + b)), (t.y2 = e.midSin * (n + b));
                            } else t.stroke = void 0;
                        });
                        var _ = this.label,
                            k = _.offset,
                            w = _.fontStyle,
                            S = _.fontWeight,
                            O = _.fontSize,
                            P = _.fontFamily,
                            C = _.color;
                        this.groupSelection.selectByTag(li.Label).each(function (t, e, i) {
                            var n = e.label;
                            if (n) {
                                var r = g[i],
                                    o = m[i] + r + b + k;
                                (t.fontStyle = w),
                                    (t.fontWeight = S),
                                    (t.fontSize = O),
                                    (t.fontFamily = P),
                                    (t.text = n.text),
                                    (t.x = e.midCos * o),
                                    (t.y = e.midSin * o),
                                    (t.fill = C),
                                    (t.textAlign = n.textAlign),
                                    (t.textBaseline = n.textBaseline);
                            } else t.fill = void 0;
                        });
                    }),
                    (n.prototype.fireNodeClickEvent = function (t) {
                        this.fireEvent({ type: "nodeClick", series: this, datum: t.seriesDatum, angleKey: this.angleKey, radiusKey: this.radiusKey });
                    }),
                    (n.prototype.getTooltipHtml = function (t) {
                        var e = this.angleKey;
                        if (!e) return "";
                        var i = this,
                            n = i.title,
                            r = i.fills,
                            o = i.tooltipRenderer,
                            a = i.angleName,
                            s = i.radiusKey,
                            h = i.radiusName,
                            l = i.labelKey,
                            u = i.labelName,
                            c = n ? n.text : void 0,
                            f = r[t.index % r.length];
                        if (o) return o({ datum: t.seriesDatum, angleKey: e, angleName: a, radiusKey: s, radiusName: h, labelKey: l, labelName: u, title: c, color: f });
                        var p = 'style="color: white; background-color: ' + f + '"',
                            d = n ? '<div class="' + ae.defaultTooltipClass + '-title" ' + p + ">" + c + "</div>" : "",
                            y = l ? t.seriesDatum[l] + ": " : "",
                            g = t.seriesDatum[e],
                            m = "number" == typeof g ? R(g) : g.toString();
                        return d + '<div class="' + ae.defaultTooltipClass + '-content">' + y + m + "</div>";
                    }),
                    (n.prototype.listSeriesItems = function (t) {
                        var e = this,
                            i = this.labelKey,
                            n = this.data;
                        if (n && n.length && i) {
                            var r = this.fills,
                                o = this.strokes,
                                a = this.id;
                            n.forEach(function (n, s) {
                                t.push({
                                    id: a,
                                    itemId: s,
                                    enabled: e.seriesItemEnabled[s],
                                    label: { text: String(n[i]) },
                                    marker: { fill: r[s % r.length], stroke: o[s % o.length], fillOpacity: e.fillOpacity, strokeOpacity: e.strokeOpacity },
                                });
                            });
                        }
                    }),
                    (n.prototype.toggleSeriesItem = function (t, e) {
                        (this.seriesItemEnabled[t] = e), this.scheduleData();
                    }),
                    (n.className = "PieSeries"),
                    (n.type = "pie"),
                    vi([g("dataChange")], n.prototype, "angleKey", void 0),
                    vi([g("update")], n.prototype, "angleName", void 0),
                    vi([g("dataChange")], n.prototype, "radiusKey", void 0),
                    vi([g("update")], n.prototype, "radiusName", void 0),
                    vi([g("dataChange")], n.prototype, "labelKey", void 0),
                    vi([g("update")], n.prototype, "labelName", void 0),
                    vi([g("layoutChange")], n.prototype, "fillOpacity", void 0),
                    vi([g("layoutChange")], n.prototype, "strokeOpacity", void 0),
                    vi([g("dataChange")], n.prototype, "rotation", void 0),
                    vi([g("layoutChange")], n.prototype, "outerRadiusOffset", void 0),
                    vi([g("dataChange")], n.prototype, "innerRadiusOffset", void 0),
                    vi([g("layoutChange")], n.prototype, "strokeWidth", void 0),
                    vi([g("layoutChange")], n.prototype, "shadow", void 0),
                    n
                );
            })(ve),
            ki = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            wi = function (t, e, i, n) {
                var r,
                    o = arguments.length,
                    a = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a;
            },
            Si = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.enabled = !0), (e.color = "rgba(0, 0, 0, 0.5)"), (e.xOffset = 0), (e.yOffset = 0), (e.blur = 5), e;
                }
                return (
                    ki(e, t),
                    wi([g("change")], e.prototype, "enabled", void 0),
                    wi([g("change")], e.prototype, "color", void 0),
                    wi([g("change")], e.prototype, "xOffset", void 0),
                    wi([g("change")], e.prototype, "yOffset", void 0),
                    wi([g("change")], e.prototype, "blur", void 0),
                    e
                );
            })(y),
            Oi = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            Pi = (function (t) {
                function e() {
                    var e = t.call(this, new ii()) || this;
                    return (e._nice = !0), (e._min = NaN), (e._max = NaN), (e.scale.clamp = !0), e;
                }
                return (
                    Oi(e, t),
                    Object.defineProperty(e.prototype, "nice", {
                        get: function () {
                            return this._nice;
                        },
                        set: function (t) {
                            this._nice !== t && ((this._nice = t), t && this.scale.nice && this.scale.nice(10));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "domain", {
                        get: function () {
                            return this.scale.domain;
                        },
                        set: function (t) {
                            var e = this.min,
                                i = this.max;
                            (t = [isNaN(e) ? t[0] : e, isNaN(i) ? t[1] : i]), (this.scale.domain = t), this.nice && this.scale.nice && this.scale.nice(10);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "min", {
                        get: function () {
                            return this._min;
                        },
                        set: function (t) {
                            this._min !== t && ((this._min = t), isNaN(t) || (this.scale.domain = [t, this.scale.domain[1]]));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "max", {
                        get: function () {
                            return this._max;
                        },
                        set: function (t) {
                            this._max !== t && ((this._max = t), isNaN(t) || (this.scale.domain = [this.scale.domain[0], t]));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.className = "NumberAxis"),
                    (e.type = "number"),
                    e
                );
            })(Q),
            Ci = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            Di = new Date(),
            Ai = new Date(),
            Ei = (function (t) {
                function e(e, i, n, r) {
                    var o = t.call(this, e, i) || this;
                    return (o._count = n), (o._field = r), o;
                }
                return (
                    Ci(e, t),
                    (e.prototype.count = function (t, e) {
                        return Di.setTime(+t), Ai.setTime(+e), this._floor(Di), this._floor(Ai), Math.floor(this._count(Di, Ai));
                    }),
                    (e.prototype.every = function (t) {
                        var e,
                            i = this;
                        if (((t = Math.floor(t)), isFinite(t) && t > 0))
                            if (t > 1) {
                                var n = this._field;
                                e = n
                                    ? this.filter(function (e) {
                                          return n(e) % t == 0;
                                      })
                                    : this.filter(function (e) {
                                          return i.count(0, e) % t == 0;
                                      });
                            } else e = this;
                        return e;
                    }),
                    e
                );
            })(
                (function () {
                    function t(t, e) {
                        (this._floor = t), (this._offset = e);
                    }
                    return (
                        (t.prototype.floor = function (t) {
                            return (t = new Date(+t)), this._floor(t), t;
                        }),
                        (t.prototype.ceil = function (t) {
                            return (t = new Date(+t - 1)), this._floor(t), this._offset(t, 1), this._floor(t), t;
                        }),
                        (t.prototype.round = function (t) {
                            var e = this.floor(t),
                                i = this.ceil(t),
                                n = +t;
                            return n - e.getTime() < i.getTime() - n ? e : i;
                        }),
                        (t.prototype.offset = function (t, e) {
                            return void 0 === e && (e = 1), (t = new Date(+t)), this._offset(t, Math.floor(e)), t;
                        }),
                        (t.prototype.range = function (t, e, i) {
                            void 0 === i && (i = 1);
                            var n,
                                r = [];
                            if (((t = this.ceil(t)), (i = Math.floor(i)), t > e || i <= 0)) return r;
                            do {
                                (n = new Date(+t)), r.push(n), this._offset(t, i), this._floor(t);
                            } while (n < t && t < e);
                            return r;
                        }),
                        (t.prototype.filter = function (e) {
                            var i = this;
                            return new t(
                                function (t) {
                                    if (t >= t) for (; i._floor(t), !e(t); ) t.setTime(t.getTime() - 1);
                                    return t;
                                },
                                function (t, n) {
                                    if (t >= t)
                                        if (n < 0)
                                            for (; ++n <= 0; )
                                                do {
                                                    i._offset(t, -1);
                                                } while (!e(t));
                                        else
                                            for (; --n >= 0; )
                                                do {
                                                    i._offset(t, 1);
                                                } while (!e(t));
                                    return t;
                                }
                            );
                        }),
                        t
                    );
                })()
            ),
            Mi = new Ei(
                function (t) {
                    return t;
                },
                function (t, e) {
                    t.setTime(t.getTime() + e);
                },
                function (t, e) {
                    return e.getTime() - t.getTime();
                }
            ),
            Ti = new Ei(
                function (t) {
                    t.setTime(t.getTime() - t.getMilliseconds());
                },
                function (t, e) {
                    t.setTime(t.getTime() + 1e3 * e);
                },
                function (t, e) {
                    return (e.getTime() - t.getTime()) / 1e3;
                }
            ),
            ji = new Ei(
                function (t) {
                    t.setTime(t.getTime() - t.getMilliseconds() - 1e3 * t.getSeconds());
                },
                function (t, e) {
                    t.setTime(t.getTime() + 6e4 * e);
                },
                function (t, e) {
                    return (e.getTime() - t.getTime()) / 6e4;
                },
                function (t) {
                    return t.getMinutes();
                }
            ),
            Fi = new Ei(
                function (t) {
                    t.setTime(t.getTime() - t.getMilliseconds() - 1e3 * t.getSeconds() - 6e4 * t.getMinutes());
                },
                function (t, e) {
                    t.setTime(t.getTime() + 36e5 * e);
                },
                function (t, e) {
                    return (e.getTime() - t.getTime()) / 36e5;
                },
                function (t) {
                    return t.getHours();
                }
            ),
            Ii = new Ei(
                function (t) {
                    t.setHours(0, 0, 0, 0);
                },
                function (t, e) {
                    t.setDate(t.getDate() + e);
                },
                function (t, e) {
                    var i = e.getTimezoneOffset() - t.getTimezoneOffset();
                    return (e.getTime() - t.getTime() - 6e4 * i) / 864e5;
                },
                function (t) {
                    return t.getDate() - 1;
                }
            );
        function Ni(t) {
            return new Ei(
                function (e) {
                    e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)), e.setHours(0, 0, 0, 0);
                },
                function (t, e) {
                    t.setDate(t.getDate() + 7 * e);
                },
                function (t, e) {
                    return (e.getTime() - t.getTime() - 6e4 * (e.getTimezoneOffset() - t.getTimezoneOffset())) / 6048e5;
                }
            );
        }
        var Li = Ni(0),
            Bi = Ni(1),
            zi = Ni(2),
            Ki = Ni(3),
            Ri = Ni(4),
            Vi = Ni(5),
            Wi = Ni(6),
            Yi = new Ei(
                function (t) {
                    t.setDate(1), t.setHours(0, 0, 0, 0);
                },
                function (t, e) {
                    t.setMonth(t.getMonth() + e);
                },
                function (t, e) {
                    return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear());
                },
                function (t) {
                    return t.getMonth();
                }
            ),
            Xi = new Ei(
                function (t) {
                    t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
                },
                function (t, e) {
                    t.setFullYear(t.getFullYear() + e);
                },
                function (t, e) {
                    return e.getFullYear() - t.getFullYear();
                },
                function (t) {
                    return t.getFullYear();
                }
            );
        function Hi(t, e, i, n, r) {
            void 0 === n && (n = 0), void 0 === r && (r = t.length);
            for (
                var o = (function (t) {
                    return function (e, i) {
                        return (n = t(e)) < (r = i) ? -1 : n > r ? 1 : n >= r ? 0 : NaN;
                        var n, r;
                    };
                })(i);
                n < r;

            ) {
                var a = (n + r) >>> 1;
                o(t[a], e) < 0 ? (n = a + 1) : (r = a);
            }
            return n;
        }
        var Ui = new Ei(
                function (t) {
                    t.setUTCHours(0, 0, 0, 0);
                },
                function (t, e) {
                    t.setUTCDate(t.getUTCDate() + e);
                },
                function (t, e) {
                    return (e.getTime() - t.getTime()) / 864e5;
                },
                function (t) {
                    return t.getUTCDate() - 1;
                }
            ),
            Gi = new Ei(
                function (t) {
                    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
                },
                function (t, e) {
                    t.setUTCFullYear(t.getUTCFullYear() + e);
                },
                function (t, e) {
                    return e.getUTCFullYear() - t.getUTCFullYear();
                },
                function (t) {
                    return t.getUTCFullYear();
                }
            );
        function qi(t) {
            return new Ei(
                function (e) {
                    e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)), e.setHours(0, 0, 0, 0);
                },
                function (t, e) {
                    t.setUTCDate(t.getUTCDate() + 7 * e);
                },
                function (t, e) {
                    return (e.getTime() - t.getTime()) / 6048e5;
                }
            );
        }
        var Ji = qi(0),
            Zi = qi(1),
            $i = (qi(2), qi(3), qi(4));
        function Qi(t) {
            if (t.y >= 0 && t.y < 100) {
                var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                return e.setFullYear(t.y), e;
            }
            return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
        }
        function tn(t) {
            if (t.y >= 0 && t.y < 100) {
                var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                return e.setUTCFullYear(t.y), e;
            }
            return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
        }
        function en(t) {
            for (var e = {}, i = 0, n = t.length; i < n; i++) e[t[i].toLowerCase()] = i;
            return e;
        }
        function nn(t) {
            return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
        }
        qi(5), qi(6);
        var rn,
            on = /^\s*\d+/,
            an = /^%/,
            sn = /[\\^$*+?|[\]().{}]/g,
            hn = function (t) {
                return t.replace(sn, "\\$&");
            },
            ln = function (t) {
                return new RegExp("^(?:" + t.map(hn).join("|") + ")", "i");
            },
            un = { "-": "", _: " ", 0: "0" };
        function cn(t, e, i) {
            var n = t < 0 ? "-" : "",
                r = String(n ? -t : t),
                o = r.length;
            return n + (o < i ? new Array(i - o + 1).join(e) + r : r);
        }
        rn = (function (t) {
            var e = t.dateTime,
                i = t.date,
                n = t.time,
                r = t.periods,
                o = t.days,
                a = t.shortDays,
                s = t.months,
                h = t.shortMonths,
                l = ln(r),
                u = en(r),
                c = ln(o),
                f = en(o),
                p = ln(a),
                d = en(a),
                y = ln(s),
                g = en(s),
                m = ln(h),
                v = en(h),
                b = {
                    a: function (t) {
                        return a[t.getDay()];
                    },
                    A: function (t) {
                        return o[t.getDay()];
                    },
                    b: function (t) {
                        return h[t.getMonth()];
                    },
                    B: function (t) {
                        return s[t.getMonth()];
                    },
                    c: void 0,
                    d: P,
                    e: P,
                    f: function (t, e) {
                        return O(t, e) + "000";
                    },
                    H: function (t, e) {
                        return cn(t.getHours(), e, 2);
                    },
                    I: function (t, e) {
                        return cn(t.getHours() % 12 || 12, e, 2);
                    },
                    j: function (t, e) {
                        return cn(1 + Ii.count(Xi.floor(t), t), e, 3);
                    },
                    L: O,
                    m: function (t, e) {
                        return cn(t.getMonth() + 1, e, 2);
                    },
                    M: function (t, e) {
                        return cn(t.getMinutes(), e, 2);
                    },
                    p: function (t) {
                        return r[t.getHours() >= 12 ? 1 : 0];
                    },
                    Q: E,
                    s: M,
                    S: function (t, e) {
                        return cn(t.getSeconds(), e, 2);
                    },
                    u: function (t) {
                        var e = t.getDay();
                        return 0 === e ? 7 : e;
                    },
                    U: function (t, e) {
                        return cn(Li.count(Xi.floor(t), t), e, 2);
                    },
                    V: function (t, e) {
                        var i = t.getDay();
                        t = i >= 4 || 0 === i ? Ri.floor(t) : Ri.ceil(t);
                        var n = Xi.floor(t);
                        return cn(Ri.count(n, t) + (4 === n.getDay() ? 1 : 0), e, 2);
                    },
                    w: function (t) {
                        return t.getDay();
                    },
                    W: function (t, e) {
                        return cn(Bi.count(Xi.floor(t), t), e, 2);
                    },
                    x: void 0,
                    X: void 0,
                    y: function (t, e) {
                        return cn(t.getFullYear() % 100, e, 2);
                    },
                    Y: function (t, e) {
                        return cn(t.getFullYear() % 1e4, e, 4);
                    },
                    Z: function (t) {
                        var e = t.getTimezoneOffset();
                        return (e > 0 ? "-" : ((e *= -1), "+")) + cn(Math.floor(e / 60), "0", 2) + cn(e % 60, "0", 2);
                    },
                    "%": A,
                },
                x = {
                    a: function (t) {
                        return a[t.getUTCDay()];
                    },
                    A: function (t) {
                        return o[t.getUTCDay()];
                    },
                    b: function (t) {
                        return h[t.getUTCMonth()];
                    },
                    B: function (t) {
                        return s[t.getUTCMonth()];
                    },
                    c: void 0,
                    d: D,
                    e: D,
                    f: function (t, e) {
                        return C(t, e) + "000";
                    },
                    H: function (t, e) {
                        return cn(t.getUTCHours(), e, 2);
                    },
                    I: function (t, e) {
                        return cn(t.getUTCHours() % 12 || 12, e, 2);
                    },
                    j: function (t, e) {
                        return cn(1 + Ui.count(Gi.floor(t), t), e, 3);
                    },
                    L: C,
                    m: function (t, e) {
                        return cn(t.getUTCMonth() + 1, e, 2);
                    },
                    M: function (t, e) {
                        return cn(t.getUTCMinutes(), e, 2);
                    },
                    p: function (t) {
                        return r[t.getUTCHours() >= 12 ? 1 : 0];
                    },
                    Q: E,
                    s: M,
                    S: function (t, e) {
                        return cn(t.getUTCSeconds(), e, 2);
                    },
                    u: function (t) {
                        var e = t.getUTCDay();
                        return 0 === e ? 7 : e;
                    },
                    U: function (t, e) {
                        return cn(Ji.count(Gi.floor(t), t), e, 2);
                    },
                    V: function (t, e) {
                        var i = t.getUTCDay();
                        t = i >= 4 || 0 === i ? $i.floor(t) : $i.ceil(t);
                        var n = Gi.floor(t);
                        return cn($i.count(n, t) + (4 === n.getUTCDay() ? 1 : 0), e, 4);
                    },
                    w: function (t) {
                        return t.getUTCDay();
                    },
                    W: function (t, e) {
                        return cn(Zi.count(Gi.floor(t), t), e, 2);
                    },
                    x: void 0,
                    X: void 0,
                    y: function (t, e) {
                        return cn(t.getUTCFullYear() % 100, e, 2);
                    },
                    Y: function (t, e) {
                        return cn(t.getUTCFullYear() % 1e4, e, 4);
                    },
                    Z: function () {
                        return "+0000";
                    },
                    "%": A,
                },
                _ = {
                    a: function (t, e, i) {
                        var n = p.exec(e.slice(i));
                        return n ? ((t.w = d[n[0].toLowerCase()]), i + n[0].length) : -1;
                    },
                    A: function (t, e, i) {
                        var n = c.exec(e.slice(i));
                        return n ? ((t.w = f[n[0].toLowerCase()]), i + n[0].length) : -1;
                    },
                    b: function (t, e, i) {
                        var n = m.exec(e.slice(i));
                        return n ? ((t.m = v[n[0].toLowerCase()]), i + n[0].length) : -1;
                    },
                    B: function (t, e, i) {
                        var n = y.exec(e.slice(i));
                        return n ? ((t.m = g[n[0].toLowerCase()]), i + n[0].length) : -1;
                    },
                    c: function (t, i, n) {
                        return S(t, e, i, n);
                    },
                    d: j,
                    e: j,
                    f: function (t, e, i) {
                        var n = on.exec(e.slice(i, i + 6));
                        return n ? ((t.L = Math.floor(parseFloat(n[0]) / 1e3)), i + n[0].length) : -1;
                    },
                    H: T,
                    I: T,
                    j: function (t, e, i) {
                        var n = on.exec(e.slice(i, i + 3));
                        return n ? ((t.m = 0), (t.d = +n[0]), i + n[0].length) : -1;
                    },
                    L: function (t, e, i) {
                        var n = on.exec(e.slice(i, i + 3));
                        return n ? ((t.L = +n[0]), i + n[0].length) : -1;
                    },
                    m: function (t, e, i) {
                        var n = on.exec(e.slice(i, i + 2));
                        return n ? ((t.m = parseFloat(n[0]) - 1), i + n[0].length) : -1;
                    },
                    M: function (t, e, i) {
                        var n = on.exec(e.slice(i, i + 2));
                        return n ? ((t.M = +n[0]), i + n[0].length) : -1;
                    },
                    p: function (t, e, i) {
                        var n = l.exec(e.slice(i));
                        return n ? ((t.p = u[n[0].toLowerCase()]), i + n[0].length) : -1;
                    },
                    Q: function (t, e, i) {
                        var n = on.exec(e.slice(i));
                        return n ? ((t.Q = +n[0]), i + n[0].length) : -1;
                    },
                    s: function (t, e, i) {
                        var n = on.exec(e.slice(i));
                        return n ? ((t.Q = 1e3 * +n[0]), i + n[0].length) : -1;
                    },
                    S: function (t, e, i) {
                        var n = on.exec(e.slice(i, i + 2));
                        return n ? ((t.S = +n[0]), i + n[0].length) : -1;
                    },
                    u: function (t, e, i) {
                        var n = on.exec(e.slice(i, i + 1));
                        return n ? ((t.u = +n[0]), i + n[0].length) : -1;
                    },
                    U: function (t, e, i) {
                        var n = on.exec(e.slice(i, i + 2));
                        return n ? ((t.U = +n[0]), i + n[0].length) : -1;
                    },
                    V: function (t, e, i) {
                        var n = on.exec(e.slice(i, i + 2));
                        return n ? ((t.V = +n[0]), i + n[0].length) : -1;
                    },
                    w: function (t, e, i) {
                        var n = on.exec(e.slice(i, i + 1));
                        return n ? ((t.w = +n[0]), i + n[0].length) : -1;
                    },
                    W: function (t, e, i) {
                        var n = on.exec(e.slice(i, i + 2));
                        return n ? ((t.W = +n[0]), i + n[0].length) : -1;
                    },
                    x: function (t, e, n) {
                        return S(t, i, e, n);
                    },
                    X: function (t, e, i) {
                        return S(t, n, e, i);
                    },
                    y: function (t, e, i) {
                        var n = on.exec(e.slice(i, i + 2));
                        return n ? ((t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), i + n[0].length) : -1;
                    },
                    Y: function (t, e, i) {
                        var n = on.exec(e.slice(i, i + 4));
                        return n ? ((t.y = +n[0]), i + n[0].length) : -1;
                    },
                    Z: function (t, e, i) {
                        var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(i, i + 6));
                        return n ? ((t.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), i + n[0].length) : -1;
                    },
                    "%": function (t, e, i) {
                        var n = an.exec(e.slice(i, i + 1));
                        return n ? i + n[0].length : -1;
                    },
                };
            function k(t, e) {
                return function (i) {
                    var n = nn(1900);
                    if (S(n, t, (i += ""), 0) == i.length) {
                        if ("Q" in n) return new Date(n.Q);
                        if (("p" in n && (n.H = (n.H % 12) + 12 * n.p), "V" in n)) {
                            if (n.V < 1 || n.V > 53) return;
                            if (("w" in n || (n.w = 1), "Z" in n)) {
                                var r = (o = tn(nn(n.y))).getUTCDay();
                                (o = r > 4 || 0 === r ? Zi.ceil(o) : Zi.floor(o)), (o = Ui.offset(o, 7 * (n.V - 1))), (n.y = o.getUTCFullYear()), (n.m = o.getUTCMonth()), (n.d = o.getUTCDate() + ((n.w + 6) % 7));
                            } else {
                                var o;
                                (r = (o = e(nn(n.y))).getDay()), (o = r > 4 || 0 === r ? Bi.ceil(o) : Bi.floor(o)), (o = Ii.offset(o, 7 * (n.V - 1))), (n.y = o.getFullYear()), (n.m = o.getMonth()), (n.d = o.getDate() + ((n.w + 6) % 7));
                            }
                        } else
                            ("W" in n || "U" in n) &&
                                ("w" in n || (n.w = "u" in n ? n.u % 7 : "W" in n ? 1 : 0),
                                (r = "Z" in n ? tn(nn(n.y)).getUTCDay() : e(nn(n.y)).getDay()),
                                (n.m = 0),
                                (n.d = "W" in n ? ((n.w + 6) % 7) + 7 * n.W - ((r + 5) % 7) : n.w + 7 * n.U - ((r + 6) % 7)));
                        return "Z" in n ? ((n.H += (n.Z / 100) | 0), (n.M += n.Z % 100), tn(n)) : e(n);
                    }
                };
            }
            function w(t, e) {
                return function (i) {
                    var n = [],
                        r = t.length,
                        o = -1,
                        a = 0;
                    for (i instanceof Date || (i = new Date(+i)); ++o < r; )
                        if (37 === t.charCodeAt(o)) {
                            n.push(t.slice(a, o));
                            var s = t.charAt(++o),
                                h = un[s];
                            null != h ? (s = t.charAt(++o)) : (h = "e" === s ? " " : "0");
                            var l = e[s];
                            l && (s = l(i, h)), n.push(s), (a = o + 1);
                        }
                    return n.push(t.slice(a, o)), n.join("");
                };
            }
            function S(t, e, i, n) {
                for (var r = 0, o = e.length, a = i.length; r < o; ) {
                    if (n >= a) return -1;
                    var s = e.charCodeAt(r++);
                    if (37 === s) {
                        var h = e.charAt(r++),
                            l = _[h in un ? e.charAt(r++) : h];
                        if (!l || (n = l(t, i, n)) < 0) return -1;
                    } else if (s != i.charCodeAt(n++)) return -1;
                }
                return n;
            }
            function O(t, e) {
                return cn(t.getMilliseconds(), e, 3);
            }
            function P(t, e) {
                return cn(t.getDate(), e, 2);
            }
            function C(t, e) {
                return cn(t.getUTCMilliseconds(), e, 3);
            }
            function D(t, e) {
                return cn(t.getUTCDate(), e, 2);
            }
            function A(t) {
                return "%";
            }
            function E(t) {
                return t.getTime();
            }
            function M(t) {
                return Math.floor(t.getTime() / 1e3);
            }
            function T(t, e, i) {
                var n = on.exec(e.slice(i, i + 2));
                return n ? ((t.H = +n[0]), i + n[0].length) : -1;
            }
            function j(t, e, i) {
                var n = on.exec(e.slice(i, i + 2));
                return n ? ((t.d = +n[0]), i + n[0].length) : -1;
            }
            return (
                (b.x = w(i, b)),
                (b.X = w(n, b)),
                (b.c = w(e, b)),
                (x.x = w(i, x)),
                (x.X = w(n, x)),
                (x.c = w(e, x)),
                {
                    format: function (t) {
                        var e = w(t, b);
                        return (
                            (e.toString = function () {
                                return t;
                            }),
                            e
                        );
                    },
                    parse: function (t) {
                        var e = k(t, Qi);
                        return (
                            (e.toString = function () {
                                return t;
                            }),
                            e
                        );
                    },
                    utcFormat: function (t) {
                        var e = w(t, x);
                        return (
                            (e.toString = function () {
                                return t;
                            }),
                            e
                        );
                    },
                    utcParse: function (t) {
                        var e = k(t, tn);
                        return (
                            (e.toString = function () {
                                return t;
                            }),
                            e
                        );
                    },
                }
            );
        })({
            dateTime: "%x, %X",
            date: "%-m/%-d/%Y",
            time: "%-I:%M:%S %p",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        });
        var fn,
            pn,
            dn,
            yn,
            gn = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            mn = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (
                        (e.year = Xi),
                        (e.month = Yi),
                        (e.week = Li),
                        (e.day = Ii),
                        (e.hour = Fi),
                        (e.minute = ji),
                        (e.second = Ti),
                        (e.millisecond = Mi),
                        (e.format = rn.format),
                        (e.tickIntervals = [
                            [e.second, 1, 1e3],
                            [e.second, 5, 5e3],
                            [e.second, 15, 15e3],
                            [e.second, 30, 3e4],
                            [e.minute, 1, 6e4],
                            [e.minute, 5, 3e5],
                            [e.minute, 15, 9e5],
                            [e.minute, 30, 18e5],
                            [e.hour, 1, 36e5],
                            [e.hour, 3, 108e5],
                            [e.hour, 6, 216e5],
                            [e.hour, 12, 432e5],
                            [e.day, 1, 864e5],
                            [e.day, 2, 1728e5],
                            [e.week, 1, 6048e5],
                            [e.month, 1, 2592e6],
                            [e.month, 3, 7776e6],
                            [e.year, 1, 31536e6],
                        ]),
                        (e.formatMillisecond = e.format(".%L")),
                        (e.formatSecond = e.format(":%S")),
                        (e.formatMinute = e.format("%I:%M")),
                        (e.formatHour = e.format("%I %p")),
                        (e.formatDay = e.format("%a %d")),
                        (e.formatWeek = e.format("%b %d")),
                        (e.formatMonth = e.format("%B")),
                        (e.formatYear = e.format("%Y")),
                        (e._domain = [new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
                        e
                    );
                }
                return (
                    gn(e, t),
                    (e.prototype.defaultTickFormat = function (t) {
                        return (this.second.floor(t) < t
                            ? this.formatMillisecond
                            : this.minute.floor(t) < t
                            ? this.formatSecond
                            : this.hour.floor(t) < t
                            ? this.formatMinute
                            : this.day.floor(t) < t
                            ? this.formatHour
                            : this.month.floor(t) < t
                            ? this.week.floor(t) < t
                                ? this.formatDay
                                : this.formatWeek
                            : this.year.floor(t) < t
                            ? this.formatMonth
                            : this.formatYear)(t);
                    }),
                    (e.prototype.tickInterval = function (t, e, i, n) {
                        var r;
                        if ((void 0 === t && (t = 10), "number" == typeof t)) {
                            var o = t,
                                a = this.tickIntervals,
                                s = Math.abs(i - e) / o,
                                h = Hi(a, s, function (t) {
                                    return t[2];
                                });
                            h === a.length
                                ? ((n = Ze(e / 31536e6, i / 31536e6, o)), (t = this.year))
                                : h
                                ? ((t = (r = a[s / a[h - 1][2] < a[h][2] / s ? h - 1 : h])[0]), (n = r[1]))
                                : ((n = Math.max(Ze(e, i, t), 1)), (t = this.millisecond));
                        }
                        return null == n ? t : t.every(n);
                    }),
                    Object.defineProperty(e.prototype, "domain", {
                        get: function () {
                            return t.prototype.getDomain.call(this).map(function (t) {
                                return new Date(t);
                            });
                        },
                        set: function (e) {
                            t.prototype.setDomain.call(
                                this,
                                Array.prototype.map.call(e, function (t) {
                                    return t instanceof Date ? +t : +new Date(+t);
                                })
                            );
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.invert = function (e) {
                        return new Date(t.prototype.invert.call(this, e));
                    }),
                    (e.prototype.ticks = function (e) {
                        void 0 === e && (e = 10);
                        var i = t.prototype.getDomain.call(this),
                            n = i[0],
                            r = i[i.length - 1],
                            o = r < n;
                        if (o) {
                            var a = n;
                            (n = r), (r = a);
                        }
                        var s = this.tickInterval(e, n, r),
                            h = s ? s.range(n, r + 1) : [];
                        return o ? h.reverse() : h;
                    }),
                    (e.prototype.tickFormat = function (t, e) {
                        return null == e ? this.defaultTickFormat.bind(this) : this.format(e);
                    }),
                    (e.prototype.nice = function (e) {
                        void 0 === e && (e = 10);
                        var i = t.prototype.getDomain.call(this),
                            n = this.tickInterval(e, i[0], i[i.length - 1]);
                        n && (this.domain = this._nice(i, n));
                    }),
                    (e.prototype._nice = function (t, e) {
                        var i,
                            n,
                            r = 0,
                            o = (t = t.slice()).length - 1,
                            a = t[r],
                            s = t[o];
                        return s < a && ((r = (i = [o, r])[0]), (o = i[1]), (a = (n = [s, a])[0]), (s = n[1])), (t[r] = e.floor(a)), (t[o] = e.ceil(s)), t;
                    }),
                    e
                );
            })(Ve),
            vn = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            bn = (function (t) {
                function e() {
                    var e = t.call(this, new mn()) || this;
                    return (e._nice = !0), (e.scale.clamp = !0), e;
                }
                return (
                    vn(e, t),
                    Object.defineProperty(e.prototype, "nice", {
                        get: function () {
                            return this._nice;
                        },
                        set: function (t) {
                            this._nice !== t && ((this._nice = t), t && this.scale.nice && this.scale.nice(10));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "domain", {
                        get: function () {
                            return this.scale.domain;
                        },
                        set: function (t) {
                            (this.scale.domain = t), this.nice && this.scale.nice && this.scale.nice(10);
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.className = "TimeAxis"),
                    (e.type = "time"),
                    e
                );
            })(Q),
            xn = (function () {
                function e() {}
                var n;
                return (
                    (e.createCartesianChart = function (e, i, n, r) {
                        var o = new he(r);
                        return (o.container = e), (i.position = t.ChartAxisPosition.Bottom), (n.position = t.ChartAxisPosition.Left), (o.axes = [i, n]), o;
                    }),
                    (e.createGroupedCategoryChart = function (e, i, n, r) {
                        var o = new ue(r);
                        return (o.container = e), (i.position = t.ChartAxisPosition.Bottom), (n.position = t.ChartAxisPosition.Left), (o.axes = [i, n]), o;
                    }),
                    (e.createBarChart = function (t, i) {
                        var n = this.createCartesianChart(t, e.createAxis(i.xAxis, "number"), e.createAxis(i.yAxis, "category"), i.document);
                        return (
                            e.initChart(n, i),
                            i.series &&
                                (n.series = i.series.map(function (t) {
                                    return e.initBarSeries(new Fe(), t);
                                })),
                            n
                        );
                    }),
                    (e.createGroupedBarChart = function (t, i) {
                        var n = this.createGroupedCategoryChart(t, e.createAxis(i.xAxis, "number"), e.createGroupedCategoryAxis(i.yAxis), i.document);
                        return (
                            e.initChart(n, i),
                            i.series &&
                                (n.series = i.series.map(function (t) {
                                    return e.initBarSeries(new Fe(), t);
                                })),
                            n
                        );
                    }),
                    (e.createColumnChart = function (t, i) {
                        var n = this.createCartesianChart(t, e.createAxis(i.xAxis, "category"), e.createAxis(i.yAxis, "number"), i.document);
                        return (
                            e.initChart(n, i),
                            i.series &&
                                (n.series = i.series.map(function (t) {
                                    return e.initBarSeries(new Fe(), t);
                                })),
                            n
                        );
                    }),
                    (e.createGroupedColumnChart = function (t, i) {
                        var n = this.createGroupedCategoryChart(t, e.createGroupedCategoryAxis(i.xAxis), e.createAxis(i.yAxis, "number"), i.document);
                        return (
                            e.initChart(n, i),
                            i.series &&
                                (n.series = i.series.map(function (t) {
                                    return e.initBarSeries(new Fe(), t);
                                })),
                            n
                        );
                    }),
                    (e.createLineChart = function (t, i) {
                        var n = this.createCartesianChart(t, e.createAxis(i.xAxis, "category"), e.createAxis(i.yAxis, "number"), i.document);
                        return (
                            e.initChart(n, i),
                            i.series &&
                                (n.series = i.series.map(function (t) {
                                    return e.initLineSeries(new Xe(), t);
                                })),
                            n
                        );
                    }),
                    (e.createGroupedLineChart = function (t, i) {
                        var n = this.createGroupedCategoryChart(t, e.createGroupedCategoryAxis(i.xAxis), e.createAxis(i.yAxis, "number"), i.document);
                        return (
                            e.initChart(n, i),
                            i.series &&
                                (n.series = i.series.map(function (t) {
                                    return e.initLineSeries(new Xe(), t);
                                })),
                            n
                        );
                    }),
                    (e.createScatterChart = function (t, i) {
                        var n = this.createCartesianChart(t, e.createAxis(i.xAxis, "number"), e.createAxis(i.yAxis, "number"), i.document);
                        return (
                            e.initChart(n, i),
                            i.series &&
                                (n.series = i.series.map(function (t) {
                                    return e.initScatterSeries(new oi(), t);
                                })),
                            n
                        );
                    }),
                    (e.createAreaChart = function (t, i) {
                        var n = this.createCartesianChart(t, e.createAxis(i.xAxis, "category"), e.createAxis(i.yAxis, "number"), i.document);
                        return (
                            e.initChart(n, i),
                            i.series &&
                                (n.series = i.series.map(function (t) {
                                    return e.initAreaSeries(new Pe(), t);
                                })),
                            n
                        );
                    }),
                    (e.createGroupedAreaChart = function (t, i) {
                        var n = this.createGroupedCategoryChart(t, e.createGroupedCategoryAxis(i.xAxis), e.createAxis(i.yAxis, "number"), i.document);
                        return (
                            e.initChart(n, i),
                            i.series &&
                                (n.series = i.series.map(function (t) {
                                    return e.initAreaSeries(new Pe(), t);
                                })),
                            n
                        );
                    }),
                    (e.createHistogramChart = function (t, i) {
                        var n = this.createCartesianChart(t, e.createNumberAxis(i.xAxis), e.createNumberAxis(i.yAxis), i.document);
                        return e.initChart(n, i), n;
                    }),
                    (e.createPolarChart = function (t) {
                        var e = new _e();
                        return (e.container = t), e;
                    }),
                    (e.createDoughnutChart = function (t, e) {
                        return this.createPieChart(t, e);
                    }),
                    (e.createPieChart = function (t, i) {
                        var n = this.createPolarChart(t);
                        return (
                            e.initChart(n, i),
                            i.series &&
                                (n.series = i.series.map(function (t) {
                                    return e.initPieSeries(new _i(), t);
                                })),
                            n
                        );
                    }),
                    (e.createSeries = function (t) {
                        switch (t && t.type) {
                            case "line":
                                return e.initLineSeries(new Xe(), t);
                            case "scatter":
                                return e.initScatterSeries(new oi(), t);
                            case "bar":
                                return e.initBarSeries(new Fe(), t);
                            case "area":
                                return e.initAreaSeries(new Pe(), t);
                            case "pie":
                                return e.initPieSeries(new _i(), t);
                            case "histogram":
                                return e.initHistogramSeries(new pi(), t);
                            default:
                                return null;
                        }
                    }),
                    (e.initChart = function (t, n) {
                        this.setValueIfExists(t, "width", n.width),
                            this.setValueIfExists(t, "height", n.height),
                            this.setValueIfExists(t, "tooltipClass", n.tooltipClass),
                            this.setTransformedValueIfExists(
                                t,
                                "title",
                                function (t) {
                                    return e.createTitle(t);
                                },
                                n.title
                            ),
                            this.setTransformedValueIfExists(
                                t,
                                "subtitle",
                                function (t) {
                                    return e.createSubtitle(t);
                                },
                                n.subtitle
                            ),
                            this.setTransformedValueIfExists(
                                t,
                                "padding",
                                function (t) {
                                    return new i(t.top, t.right, t.bottom, t.left);
                                },
                                n.padding
                            ),
                            n.background && (this.setValueIfExists(t.background, "fill", n.background.fill), this.setValueIfExists(t.background, "visible", n.background.visible)),
                            void 0 !== n.legend && e.initLegend(t.legend, n.legend);
                        var r = n.listeners;
                        if (r)
                            for (var o in r)
                                if (r.hasOwnProperty(o)) {
                                    var a = r[o];
                                    "function" == typeof a && t.addEventListener(o, a);
                                }
                        return t;
                    }),
                    (e.initSeries = function (t, e) {
                        this.setValueIfExists(t, "visible", e.visible), this.setValueIfExists(t, "showInLegend", e.showInLegend), this.setValueIfExists(t, "data", e.data);
                        var i = e.listeners;
                        if (i)
                            for (var n in i)
                                if (i.hasOwnProperty(n)) {
                                    var r = i[n];
                                    "function" == typeof r && t.addEventListener(n, r);
                                }
                        return t;
                    }),
                    (e.initLineSeries = function (t, i) {
                        e.initSeries(t, i), this.setValueIfExists(t, "title", i.title);
                        var n = i.field,
                            r = i.fill,
                            o = i.stroke,
                            a = i.highlightStyle,
                            s = i.marker,
                            h = i.tooltip;
                        return (
                            n && (this.setValueIfExists(t, "xKey", n.xKey), this.setValueIfExists(t, "xName", n.xName), this.setValueIfExists(t, "yKey", n.yKey), this.setValueIfExists(t, "yName", n.yName)),
                            r && this.setValueIfExists(t.marker, "fill", r.color),
                            o && (this.setValueIfExists(t, "stroke", o.color), this.setValueIfExists(t, "strokeWidth", o.width)),
                            a && this.initHighlightStyle(t.highlightStyle, a),
                            s && this.initMarker(t.marker, s),
                            h && (this.setValueIfExists(t, "tooltipEnabled", h.enabled), this.setValueIfExists(t, "tooltipRenderer", h.renderer)),
                            t
                        );
                    }),
                    (e.initScatterSeries = function (t, i) {
                        e.initSeries(t, i), this.setValueIfExists(t, "title", i.title);
                        var n = i.field,
                            r = i.fill,
                            o = i.stroke,
                            a = i.highlightStyle,
                            s = i.marker,
                            h = i.tooltip;
                        return (
                            n &&
                                (this.setValueIfExists(t, "xKey", n.xKey),
                                this.setValueIfExists(t, "xName", n.xName),
                                this.setValueIfExists(t, "yKey", n.yKey),
                                this.setValueIfExists(t, "yName", n.yName),
                                this.setValueIfExists(t, "sizeKey", n.sizeKey),
                                this.setValueIfExists(t, "sizeName", n.sizeName),
                                this.setValueIfExists(t, "labelKey", n.labelKey),
                                this.setValueIfExists(t, "labelName", n.labelName)),
                            r && this.setValueIfExists(t.marker, "fill", r.color),
                            o && (this.setValueIfExists(t.marker, "stroke", o.color), this.setValueIfExists(t.marker, "strokeWidth", o.width)),
                            a && this.initHighlightStyle(t.highlightStyle, a),
                            s && this.initMarker(t.marker, s),
                            h && (this.setValueIfExists(t, "tooltipEnabled", h.enabled), this.setValueIfExists(t, "tooltipRenderer", h.renderer)),
                            t
                        );
                    }),
                    (e.initLabelOptions = function (t, e) {
                        this.setValueIfExists(t, "enabled", e.enabled),
                            this.setValueIfExists(t, "fontStyle", e.fontStyle),
                            this.setValueIfExists(t, "fontWeight", e.fontWeight),
                            this.setValueIfExists(t, "fontSize", e.fontSize),
                            this.setValueIfExists(t, "fontFamily", e.fontFamily),
                            this.setValueIfExists(t, "color", e.color);
                    }),
                    (e.initBarSeries = function (t, i) {
                        e.initSeries(t, i), this.setValueIfExists(t, "grouped", i.grouped), this.setValueIfExists(t, "normalizedTo", i.normalizedTo);
                        var n = i.field,
                            r = i.fill,
                            o = i.stroke,
                            a = i.highlightStyle,
                            s = i.label,
                            h = i.tooltip;
                        return (
                            n && (this.setValueIfExists(t, "xKey", n.xKey), this.setValueIfExists(t, "yKeys", n.yKeys), this.setValueIfExists(t, "yNames", n.yNames)),
                            r && (this.setValueIfExists(t, "fills", r.colors), this.setValueIfExists(t, "fillOpacity", r.opacity)),
                            o && (this.setValueIfExists(t, "strokes", o.colors), this.setValueIfExists(t, "strokeOpacity", o.opacity), this.setValueIfExists(t, "strokeWidth", o.width)),
                            a && this.initHighlightStyle(t.highlightStyle, a),
                            s && (e.initLabelOptions(t.label, s), this.setValueIfExists(t.label, "enabled", s.enabled), this.setValueIfExists(t.label, "formatter", s.formatter)),
                            h && (this.setValueIfExists(t, "tooltipEnabled", h.enabled), this.setValueIfExists(t, "tooltipRenderer", h.renderer)),
                            this.setTransformedValueIfExists(
                                t,
                                "shadow",
                                function (t) {
                                    return e.createDropShadow(t);
                                },
                                i.shadow
                            ),
                            t
                        );
                    }),
                    (e.initAreaSeries = function (t, i) {
                        e.initSeries(t, i), this.setValueIfExists(t, "normalizedTo", i.normalizedTo);
                        var n = i.field,
                            r = i.fill,
                            o = i.stroke,
                            a = i.highlightStyle,
                            s = i.marker,
                            h = i.tooltip;
                        return (
                            n && (this.setValueIfExists(t, "xKey", n.xKey), this.setValueIfExists(t, "yKeys", n.yKeys), this.setValueIfExists(t, "yNames", n.yNames)),
                            r && (this.setValueIfExists(t, "fills", r.colors), this.setValueIfExists(t, "fillOpacity", r.opacity)),
                            o && (this.setValueIfExists(t, "strokes", o.colors), this.setValueIfExists(t, "strokeOpacity", o.opacity), this.setValueIfExists(t, "strokeWidth", o.width)),
                            a && this.initHighlightStyle(t.highlightStyle, a),
                            s && this.initMarker(t.marker, s),
                            h && (this.setValueIfExists(t, "tooltipEnabled", h.enabled), this.setValueIfExists(t, "tooltipRenderer", h.renderer)),
                            this.setTransformedValueIfExists(
                                t,
                                "shadow",
                                function (t) {
                                    return e.createDropShadow(t);
                                },
                                i.shadow
                            ),
                            t
                        );
                    }),
                    (e.initPieSeries = function (t, i) {
                        e.initSeries(t, i),
                            this.setTransformedValueIfExists(
                                t,
                                "title",
                                function (t) {
                                    return e.createPieTitle(t);
                                },
                                i.title
                            ),
                            this.setValueIfExists(t, "rotation", i.rotation),
                            this.setValueIfExists(t, "outerRadiusOffset", i.outerRadiusOffset),
                            this.setValueIfExists(t, "innerRadiusOffset", i.innerRadiusOffset);
                        var n = i.field,
                            r = i.fill,
                            o = i.stroke,
                            a = i.highlightStyle,
                            s = i.callout,
                            h = i.label,
                            l = i.tooltip;
                        return (
                            n &&
                                (this.setValueIfExists(t, "angleKey", n.angleKey),
                                this.setValueIfExists(t, "angleName", n.angleName),
                                this.setValueIfExists(t, "radiusKey", n.radiusKey),
                                this.setValueIfExists(t, "radiusName", n.radiusName),
                                this.setValueIfExists(t, "labelKey", n.labelKey),
                                this.setValueIfExists(t, "labelName", n.labelName)),
                            r && (this.setValueIfExists(t, "fills", r.colors), this.setValueIfExists(t, "fillOpacity", r.opacity)),
                            o && (this.setValueIfExists(t, "strokes", o.colors), this.setValueIfExists(t, "strokeOpacity", o.opacity), this.setValueIfExists(t, "strokeWidth", o.width)),
                            a && this.initHighlightStyle(t.highlightStyle, a),
                            s && (this.setValueIfExists(t.callout, "colors", s.colors), this.setValueIfExists(t.callout, "strokeWidth", s.strokeWidth), this.setValueIfExists(t.callout, "length", s.length)),
                            h && (e.initLabelOptions(t.label, h), this.setValueIfExists(t.label, "enabled", h.enabled), this.setValueIfExists(t.label, "minAngle", h.minRequiredAngle), this.setValueIfExists(t.label, "offset", h.offset)),
                            l && (this.setValueIfExists(t, "tooltipEnabled", l.enabled), this.setValueIfExists(t, "tooltipRenderer", l.renderer)),
                            this.setTransformedValueIfExists(
                                t,
                                "shadow",
                                function (t) {
                                    return e.createDropShadow(t);
                                },
                                i.shadow
                            ),
                            t
                        );
                    }),
                    (e.initHistogramSeries = function (t, i) {
                        e.initSeries(t, i);
                        var n = i.field,
                            r = i.fill,
                            o = i.stroke,
                            a = i.highlightStyle,
                            s = i.tooltip,
                            h = i.binCount;
                        return (
                            this.setValueIfExists(t, "binCount", h),
                            n && this.setValueIfExists(t, "xKey", n.xKey),
                            r && (this.setValueIfExists(t, "fill", r.color), this.setValueIfExists(t, "fillOpacity", r.opacity)),
                            o && (this.setValueIfExists(t, "stroke", o.color), this.setValueIfExists(t, "strokeOpacity", o.opacity), this.setValueIfExists(t, "strokeWidth", o.width)),
                            a && this.initHighlightStyle(t.highlightStyle, a),
                            s && (this.setValueIfExists(t, "tooltipEnabled", s.enabled), this.setValueIfExists(t, "tooltipRenderer", s.renderer)),
                            t
                        );
                    }),
                    (e.getMarkerByName = function (t) {
                        return this.markerShapes.get(t) || Ot;
                    }),
                    (e.initLegend = function (t, i) {
                        this.setValueIfExists(t, "enabled", i.enabled), this.setValueIfExists(t, "position", i.position);
                        var n = i.item;
                        if (n) {
                            var r = n.label,
                                o = n.marker;
                            r &&
                                (this.setValueIfExists(t, "fontFamily", r.fontFamily),
                                this.setValueIfExists(t, "fontSize", r.fontSize),
                                this.setValueIfExists(t, "fontStyle", r.fontStyle),
                                this.setValueIfExists(t, "fontWeight", r.fontWeight),
                                this.setValueIfExists(t, "color", r.color)),
                                o &&
                                    (this.setValueIfExists(t, "markerShape", e.getMarkerByName(o.shape)),
                                    this.setValueIfExists(t, "strokeWidth", o.strokeWidth),
                                    this.setValueIfExists(t, "markerSize", o.size),
                                    this.setValueIfExists(t, "itemSpacing", o.padding)),
                                this.setValueIfExists(t, "layoutHorizontalSpacing", n.paddingX),
                                this.setValueIfExists(t, "layoutVerticalSpacing", n.paddingY);
                        }
                    }),
                    (e.initMarker = function (t, i) {
                        (t.shape = e.getMarkerByName(i.shape)),
                            this.setValueIfExists(t, "enabled", i.enabled),
                            this.setValueIfExists(t, "size", i.size),
                            this.setValueIfExists(t, "minSize", i.minSize),
                            this.setValueIfExists(t, "fill", i.fill),
                            this.setValueIfExists(t, "stroke", i.stroke),
                            this.setValueIfExists(t, "strokeWidth", i.strokeWidth);
                    }),
                    (e.initHighlightStyle = function (t, e) {
                        this.setValueIfExists(t, "fill", e.fill), this.setValueIfExists(t, "stroke", e.stroke);
                    }),
                    (e.setDefaultFontOptions = function (t, e, i, n) {
                        void 0 === e && (e = 16),
                            void 0 === i && (i = "bold"),
                            void 0 === n && (n = "Verdana, sans-serif"),
                            void 0 === t.fontSize && (t.fontSize = e),
                            void 0 === t.fontWeight && (t.fontWeight = i),
                            void 0 === t.fontFamily && (t.fontFamily = n);
                    }),
                    (e.createTitle = function (t) {
                        return void 0 === (t = Object.create(t)).text && (t.text = ""), this.setDefaultFontOptions(t), e.createCaption(t);
                    }),
                    (e.createSubtitle = function (t) {
                        return void 0 === (t = Object.create(t)).text && (t.text = ""), this.setDefaultFontOptions(t, 12), e.createCaption(t);
                    }),
                    (e.createPieTitle = function (t) {
                        return (t = Object.create(t)), this.setDefaultFontOptions(t, 12), e.createCaption(t);
                    }),
                    (e.createCaption = function (t) {
                        var e = new b();
                        return (
                            this.setValueIfExists(e, "enabled", t.enabled),
                            this.setValueIfExists(e, "text", t.text),
                            this.setValueIfExists(e, "fontStyle", t.fontStyle),
                            this.setValueIfExists(e, "fontWeight", t.fontWeight),
                            this.setValueIfExists(e, "fontSize", t.fontSize),
                            this.setValueIfExists(e, "fontFamily", t.fontFamily),
                            this.setValueIfExists(e, "color", t.color),
                            e
                        );
                    }),
                    (e.initAxis = function (t, i) {
                        this.setTransformedValueIfExists(
                            t,
                            "title",
                            function (t) {
                                return e.createTitle(t);
                            },
                            i.title
                        ),
                            this.setValueIfExists(t, "gridStyle", i.gridStyle);
                        var n = i.line,
                            r = i.tick,
                            o = i.label;
                        n && (this.setValueIfExists(t.line, "width", n.width), this.setValueIfExists(t.line, "color", n.color)),
                            r && (this.setValueIfExists(t.tick, "width", r.width), this.setValueIfExists(t.tick, "size", r.size), this.setValueIfExists(t.tick, "color", r.color)),
                            o &&
                                (this.setValueIfExists(t.label, "fontStyle", o.fontStyle),
                                this.setValueIfExists(t.label, "fontWeight", o.fontWeight),
                                this.setValueIfExists(t.label, "fontSize", o.fontSize),
                                this.setValueIfExists(t.label, "fontFamily", o.fontFamily),
                                this.setValueIfExists(t.label, "color", o.color),
                                this.setValueIfExists(t.label, "padding", o.padding),
                                this.setValueIfExists(t.label, "rotation", o.rotation),
                                this.setValueIfExists(t.label, "format", o.format),
                                this.setValueIfExists(t.label, "formatter", o.formatter));
                    }),
                    (e.createNumberAxis = function (t) {
                        var e = new Pi();
                        return this.initAxis(e, t), e;
                    }),
                    (e.createCategoryAxis = function (t) {
                        var e = new et();
                        return this.initAxis(e, t), e;
                    }),
                    (e.createGroupedCategoryAxis = function (t) {
                        var e = new vt();
                        return this.initAxis(e, t), e;
                    }),
                    (e.createTimeAxis = function (t) {
                        var e = new bn();
                        return this.initAxis(e, t), e;
                    }),
                    (e.createAxis = function (t, e) {
                        var i = this.toAxisClass(t.type || e);
                        if (!i) throw new Error("Unknown axis type");
                        var n = new i();
                        return this.initAxis(n, t), n;
                    }),
                    (e.toAxisClass = function (t) {
                        return this.types.get(t);
                    }),
                    (e.setValueIfExists = function (t, e, i, n) {
                        void 0 !== i && (t[e] = n ? n(i) : i);
                    }),
                    (e.setTransformedValueIfExists = function (t, e, i, n) {
                        void 0 !== n && (t[e] = i(n));
                    }),
                    (e.markerShapes = (function (t) {
                        var e = new Map();
                        return (
                            t.forEach(function (t) {
                                var i = t[0],
                                    n = t[1];
                                return e.set(i, n);
                            }),
                            e
                        );
                    })([
                        ["circle", At],
                        ["cross", Mt],
                        ["diamond", jt],
                        ["plus", Lt],
                        ["square", Ot],
                        ["triangle", zt],
                    ])),
                    (e.createDropShadow = function (t) {
                        void 0 === t && (t = {});
                        var e = new Si();
                        return (e.enabled = null == t.enabled || t.enabled), (e.xOffset = t.xOffset || 0), (e.yOffset = t.yOffset || 0), (e.blur = t.blur || 5), (e.color = t.color || "rgba(0, 0, 0, 0.5)"), e;
                    }),
                    (e.types = ((n = new Map()).set("category", et), n.set("number", Pi), n.set("time", bn), n)),
                    e
                );
            })(),
            _n = (function () {
                var t = function (e, i) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e;
                            }) ||
                        function (t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                };
                return function (e, i) {
                    function n() {
                        this.constructor = e;
                    }
                    t(e, i), (e.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
                };
            })(),
            kn = (function (t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e.isContainerNode = !0), (e.path = new L()), (e._active = !0), (e._dirtyPath = !0), (e._x = 0), (e._y = 0), (e._width = 10), (e._height = 10), e;
                }
                return (
                    _n(e, t),
                    (e.prototype.isPointInNode = function (t, e) {
                        var i = this.transformPoint(t, e);
                        return i.x >= this.x && i.x <= this.x + this.width && i.y >= this.y && i.y <= this.y + this.height;
                    }),
                    Object.defineProperty(e.prototype, "active", {
                        get: function () {
                            return this._active;
                        },
                        set: function (t) {
                            this._active !== t && ((this._active = t), (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "dirtyPath", {
                        get: function () {
                            return this._dirtyPath;
                        },
                        set: function (t) {
                            this._dirtyPath !== t && ((this._dirtyPath = t), t && (this.dirty = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "x", {
                        get: function () {
                            return this._x;
                        },
                        set: function (t) {
                            this._x !== t && ((this._x = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "y", {
                        get: function () {
                            return this._y;
                        },
                        set: function (t) {
                            this._y !== t && ((this._y = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "width", {
                        get: function () {
                            return this._width;
                        },
                        set: function (t) {
                            this._width !== t && ((this._width = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "height", {
                        get: function () {
                            return this._height;
                        },
                        set: function (t) {
                            this._height !== t && ((this._height = t), (this.dirtyPath = !0));
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.updatePath = function () {
                        var t = this.path;
                        t.clear(), t.rect(this.x, this.y, this.width, this.height), (this.dirtyPath = !1);
                    }),
                    (e.prototype.render = function (t) {
                        this.active && (this.dirtyPath && this.updatePath(), this.scene.appendPath(this.path), t.clip());
                        for (var e = this.children, i = e.length, n = 0; n < i; n++) {
                            t.save();
                            var r = e[n];
                            r.visible && r.render(t), t.restore();
                        }
                    }),
                    (e.className = "ClipRect"),
                    e
                );
            })(a),
            wn = new Ei(
                function (t) {
                    t.setUTCSeconds(0, 0);
                },
                function (t, e) {
                    t.setTime(t.getTime() + 6e4 * e);
                },
                function (t, e) {
                    return (e.getTime() - t.getTime()) / 6e4;
                },
                function (t) {
                    return t.getUTCMinutes();
                }
            ),
            Sn = new Ei(
                function (t) {
                    t.setUTCMinutes(0, 0, 0);
                },
                function (t, e) {
                    t.setTime(t.getTime() + 36e5 * e);
                },
                function (t, e) {
                    return (e.getTime() - t.getTime()) / 36e5;
                },
                function (t) {
                    return t.getUTCHours();
                }
            ),
            On = new Ei(
                function (t) {
                    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
                },
                function (t, e) {
                    t.setUTCMonth(t.getUTCMonth() + e);
                },
                function (t, e) {
                    return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear());
                },
                function (t) {
                    return t.getUTCMonth();
                }
            ),
            Pn = function () {
                return (Pn =
                    Object.assign ||
                    function (t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++) for (var r in (e = arguments[i])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t;
                    }).apply(this, arguments);
            },
            Cn = {
                background: { meta: { defaults: { visible: !0, fill: "white" } } },
                padding: { meta: { constructor: i, defaults: { top: 20, right: 20, bottom: 20, left: 20 } } },
                title: { meta: { constructor: b, defaults: { enabled: !0, padding: new i(10), text: "Title", fontStyle: void 0, fontWeight: "bold", fontSize: 14, fontFamily: "Verdana, sans-serif", color: "rgba(70, 70, 70, 1)" } } },
                subtitle: {
                    meta: { constructor: b, defaults: { enabled: !0, padding: new i(10), text: "Subtitle", fontStyle: void 0, fontWeight: void 0, fontSize: 12, fontFamily: "Verdana, sans-serif", color: "rgba(140, 140, 140, 1)" } },
                },
                legend: {
                    meta: {
                        constructor: Ht,
                        defaults: {
                            enabled: !0,
                            position: t.LegendPosition.Right,
                            spacing: 20,
                            layoutHorizontalSpacing: 16,
                            layoutVerticalSpacing: 8,
                            itemSpacing: 8,
                            markerShape: void 0,
                            markerSize: 15,
                            strokeWidth: 1,
                            color: "black",
                            fontStyle: void 0,
                            fontWeight: void 0,
                            fontSize: 12,
                            fontFamily: "Verdana, sans-serif",
                        },
                    },
                },
            },
            Dn = { container: void 0, data: [], padding: new i(20), title: void 0, subtitle: void 0 },
            An = { constructorParams: ["document"], setAsIs: ["container", "data", "tooltipOffset"] },
            En = { defaults: { gridStyle: [{ stroke: "rgba(219, 219, 219, 1)", lineDash: [4, 2] }] } },
            Mn = { visible: !0, showInLegend: !0 },
            Tn = { fills: ce.fills, strokes: ce.strokes, fillOpacity: 1, strokeOpacity: 1, xKey: "", xName: "", yKeys: [], yNames: [], grouped: !1, normalizedTo: void 0, strokeWidth: 1, shadow: void 0, highlightStyle: { fill: "yellow" } },
            jn = { shadow: { meta: { constructor: Si, defaults: { enabled: !0, color: "rgba(0, 0, 0, 0.5)", xOffset: 0, yOffset: 0, blur: 5 } } } },
            Fn = { enabled: !0, fontStyle: void 0, fontWeight: void 0, fontSize: 12, fontFamily: "Verdana, sans-serif", color: "rgba(70, 70, 70, 1)" },
            In = { label: { meta: { defaults: Pn({}, Fn) } } },
            Nn = {
                line: { meta: { defaults: { width: 1, color: "rgba(195, 195, 195, 1)" } } },
                title: { meta: { constructor: b, defaults: { enabled: !0, padding: new i(10), text: "Axis Title", fontStyle: void 0, fontWeight: "bold", fontSize: 12, fontFamily: "Verdana, sans-serif", color: "rgba(70, 70, 70, 1)" } } },
                label: { meta: { constructor: q, defaults: { fontStyle: void 0, fontWeight: void 0, fontSize: 12, fontFamily: "Verdana, sans-serif", padding: 5, color: "rgba(87, 87, 87, 1)", formatter: void 0 } } },
                tick: { meta: { constructor: G, defaults: { width: 1, size: 6, color: "rgba(195, 195, 195, 1)", count: 10 } } },
            },
            Ln =
                (((fn = {})[he.type] = Pn(
                    Pn(
                        {
                            meta: Pn(Pn({ constructor: he }, An), {
                                defaults: Pn(Pn({}, Dn), {
                                    axes: [
                                        { type: et.type, position: "bottom" },
                                        { type: Pi.type, position: "left" },
                                    ],
                                }),
                            }),
                        },
                        Cn
                    ),
                    {
                        axes:
                            ((pn = {}),
                            (pn[Pi.type] = Pn({ meta: Pn({ constructor: Pi, setAsIs: ["gridStyle"] }, En) }, Nn)),
                            (pn[et.type] = Pn({ meta: Pn({ constructor: et, setAsIs: ["gridStyle"] }, En) }, Nn)),
                            (pn[bn.type] = Pn({ meta: Pn({ constructor: bn, setAsIs: ["gridStyle"] }, En) }, Nn)),
                            pn),
                        series:
                            ((dn = {}),
                            (dn[Xe.type] = {
                                meta: { constructor: Xe, defaults: { title: void 0, xKey: "", xName: "", yKey: "", yName: "", stroke: ce.fills[0], strokeWidth: 2, fillOpacity: 1, strokeOpacity: 1, highlightStyle: { fill: "yellow" } } },
                                highlightStyle: {},
                                marker: {},
                            }),
                            (dn.column = Pn(Pn({ meta: { constructor: Fe, defaults: Pn(Pn({ flipXY: !1 }, Mn), Tn) }, highlightStyle: {} }, In), jn)),
                            (dn.bar = Pn(Pn({ meta: { constructor: Fe, defaults: Pn(Pn({ flipXY: !0 }, Mn), Tn) }, highlightStyle: {} }, In), jn)),
                            (dn[oi.type] = {
                                meta: {
                                    constructor: oi,
                                    defaults: Pn(Pn({}, Mn), {
                                        title: void 0,
                                        xKey: "",
                                        yKey: "",
                                        sizeKey: void 0,
                                        labelKey: void 0,
                                        xName: "",
                                        yName: "",
                                        sizeName: "Size",
                                        labelName: "Label",
                                        fill: ce.fills[0],
                                        stroke: ce.strokes[0],
                                        strokeWidth: 2,
                                        fillOpacity: 1,
                                        strokeOpacity: 1,
                                        tooltipRenderer: void 0,
                                        highlightStyle: { fill: "yellow" },
                                    }),
                                },
                                highlightStyle: {},
                                marker: {},
                            }),
                            (dn[Pe.type] = Pn(
                                {
                                    meta: {
                                        constructor: Pe,
                                        defaults: Pn(Pn({}, Mn), {
                                            xKey: "",
                                            xName: "",
                                            yKeys: [],
                                            yNames: [],
                                            normalizedTo: void 0,
                                            fills: ce.fills,
                                            strokes: ce.strokes,
                                            fillOpacity: 1,
                                            strokeOpacity: 1,
                                            strokeWidth: 2,
                                            shadow: void 0,
                                            highlightStyle: { fill: "yellow" },
                                        }),
                                    },
                                    highlightStyle: {},
                                    marker: {},
                                },
                                jn
                            )),
                            (dn[pi.type] = {
                                meta: {
                                    constructor: pi,
                                    defaults: Pn(Pn({}, Mn), {
                                        title: void 0,
                                        xKey: "",
                                        yKey: "",
                                        xName: "",
                                        yName: "",
                                        fill: ce.fills[0],
                                        stroke: ce.strokes[0],
                                        strokeWidth: 1,
                                        fillOpacity: 1,
                                        strokeOpacity: 1,
                                        aggregation: "sum",
                                        tooltipRenderer: void 0,
                                        highlightStyle: { fill: "yellow" },
                                    }),
                                },
                                highlightStyle: {},
                            }),
                            dn),
                    }
                )),
                (fn[_e.type] = Pn(Pn({ meta: Pn(Pn({ constructor: _e }, An), { defaults: Pn(Pn({}, Dn), { padding: new i(40) }) }) }, Cn), {
                    series:
                        ((yn = {}),
                        (yn[_i.type] = Pn(
                            {
                                meta: {
                                    constructor: _i,
                                    defaults: Pn(Pn({}, Mn), {
                                        title: void 0,
                                        calloutColors: ce.strokes,
                                        calloutStrokeWidth: 1,
                                        calloutLength: 10,
                                        angleKey: "",
                                        angleName: "",
                                        radiusKey: void 0,
                                        radiusName: void 0,
                                        labelKey: void 0,
                                        labelName: void 0,
                                        fills: ce.fills,
                                        strokes: ce.strokes,
                                        fillOpacity: 1,
                                        strokeOpacity: 1,
                                        rotation: 0,
                                        outerRadiusOffset: 0,
                                        innerRadiusOffset: 0,
                                        strokeWidth: 1,
                                        shadow: void 0,
                                    }),
                                },
                                highlightStyle: {},
                                title: {
                                    meta: { constructor: b, defaults: { enabled: !0, padding: new i(10), text: "Series Title", fontStyle: void 0, fontWeight: "bold", fontSize: 14, fontFamily: "Verdana, sans-serif", color: "black" } },
                                },
                                label: { meta: { defaults: Pn(Pn({}, Fn), { offset: 3, minAngle: 20 }) } },
                                callout: { meta: { defaults: { colors: ce.strokes, length: 10, strokeWidth: 1 } } },
                            },
                            jn
                        )),
                        yn),
                })),
                fn),
            Bn = { cartesian: ["line", "area", "bar", "column"], polar: ["pie"] },
            zn = function (t) {
                Bn[t].forEach(function (e) {
                    Ln[e] = Ln[t];
                });
            };
        for (var Kn in Bn) zn(Kn);
        Ln.scatter = Ln.histogram = Pn(Pn({}, Ln.cartesian), {
            meta: Pn(Pn({}, Ln.cartesian.meta), {
                defaults: Pn(Pn({}, Dn), {
                    axes: [
                        { type: "number", position: "bottom" },
                        { type: "number", position: "left" },
                    ],
                }),
            }),
        });
        var Rn = function () {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                var n = Array(t),
                    r = 0;
                for (e = 0; e < i; e++) for (var o = arguments[e], a = 0, s = o.length; a < s; a++, r++) n[r] = o[a];
                return n;
            },
            Vn = (function () {
                function t() {}
                return (
                    (t.create = function (t, e, i) {
                        (t = Object.create(t)), e && (t.container = e), i && (t.data = i);
                        var n = t && t.autoSize,
                            r = Hn(t);
                        return r && n && (r.autoSize = !0), r;
                    }),
                    (t.update = function (t, e) {
                        var i = e && e.autoSize;
                        !(function t(e, i, n) {
                            if (i && "object" == typeof i) {
                                Yn(i, n), n ? i.type && (n = n + "." + i.type) : (n = i.type);
                                var r = Xn(n);
                                if (r) {
                                    Un(i, r);
                                    var o = r.meta || {},
                                        a = (o && o.constructorParams) || [],
                                        s = ["type"].concat(a);
                                    for (var h in i)
                                        if (s.indexOf(h) < 0) {
                                            var l = i[h],
                                                u = n + "." + h;
                                            if (o.setAsIs && o.setAsIs.indexOf(h) >= 0) e[h] = l;
                                            else {
                                                var c = e[h];
                                                if (Array.isArray(c) && Array.isArray(l))
                                                    if (n in Ln) {
                                                        if ("series" === h) {
                                                            for (var f = e, p = l, d = c, y = void 0, g = 0; g < p.length; g++) {
                                                                var m = p[g];
                                                                if ((b = d[g]))
                                                                    if ((Yn(m, u), b.type === m.type)) t(b, m, u);
                                                                    else {
                                                                        var v = Hn(m, u);
                                                                        f.removeSeries(b), f.addSeriesAfter(v, y), (b = v);
                                                                    }
                                                                else (v = Hn(m, u)), f.addSeries(v);
                                                                y = b;
                                                            }
                                                            for (; g < d.length; g++) {
                                                                var b;
                                                                (b = d[g]) && f.removeSeries(b);
                                                            }
                                                        } else if ("axes" === h) {
                                                            f = e;
                                                            for (
                                                                var x = c,
                                                                    _ = [],
                                                                    k = [],
                                                                    w = function (e) {
                                                                        var i = it(x, function (t) {
                                                                            return t.type === e.type && t.position === e.position;
                                                                        });
                                                                        if (i) k.push(i), t(i, e, u);
                                                                        else {
                                                                            var n = Hn(e, u);
                                                                            n && _.push(n);
                                                                        }
                                                                    },
                                                                    S = 0,
                                                                    O = (p = l);
                                                                S < O.length;
                                                                S++
                                                            )
                                                                (m = O[S]), w(m);
                                                            f.axes = k.concat(_);
                                                        }
                                                    } else e[h] = l;
                                                else if ("object" == typeof c) l ? t(c, l, l.type ? n : u) : h in i && (e[h] = l);
                                                else {
                                                    var P = Gn(l) && Hn(l, l.type ? n : u);
                                                    e[h] = P || l;
                                                }
                                            }
                                        }
                                }
                                n in Ln && e.performLayout();
                            }
                        })(t, Object.create(e)),
                            t && i && (t.autoSize = !0);
                    }),
                    t
                );
            })(),
            Wn = { "cartesian.series": "line", "line.series": "line", "area.series": "area", "bar.series": "bar", "column.series": "column", "scatter.series": "scatter", "polar.series": "pie", "pie.series": "pie" };
        function Yn(t, e) {
            if (
                (e ||
                    (function (t) {
                        if (!t.type) {
                            var e = t.series && t.series[0];
                            if (e && e.type)
                                t: for (var i in Ln)
                                    for (var n in Ln[i].series)
                                        if (e.type === n) {
                                            t.type = i;
                                            break t;
                                        }
                            t.type || (t.type = "cartesian");
                        }
                    })(t),
                !t.type)
            ) {
                var i = Wn[e];
                i && (t.type = i);
            }
        }
        function Xn(t) {
            var e = t.split("."),
                i = Ln;
            return (
                e.forEach(function (t) {
                    i = i[t];
                }),
                i
            );
        }
        function Hn(t, e, i) {
            var n;
            Yn(t, e), e ? t.type && (e = e + "." + t.type) : (e = t.type);
            var r = Xn(e);
            if (r) {
                Un(t, r);
                var o = r.meta || {},
                    a = o.constructorParams || [],
                    s = ["type", "listeners"].concat(a),
                    h = a
                        .map(function (e) {
                            return t[e];
                        })
                        .filter(function (t) {
                            return void 0 !== t;
                        });
                i = i || new ((n = o.constructor).bind.apply(n, Rn([void 0], h)))();
                var l = function (n) {
                    if (s.indexOf(n) < 0) {
                        var a = t[n];
                        if (!a || !(n in r) || (o.setAsIs && o.setAsIs.indexOf(n) >= 0)) i[n] = a;
                        else if (Array.isArray(a)) {
                            var h = a
                                .map(function (t) {
                                    return Hn(t, e + "." + n);
                                })
                                .filter(function (t) {
                                    return !!t;
                                });
                            i[n] = h;
                        } else if (r[n] && i[n]) Hn(a, e + "." + n, i[n]);
                        else {
                            var l = Hn(a, a.type ? e : e + "." + n);
                            l && (i[n] = l);
                        }
                    }
                };
                for (var u in t) l(u);
                var c = t.listeners;
                if (i && i.addEventListener && c)
                    for (var u in c)
                        if (c.hasOwnProperty(u)) {
                            var f = c[u];
                            "function" == typeof f && i.addEventListener(u, f);
                        }
                return i;
            }
        }
        function Un(t, e) {
            var i = e && e.meta && e.meta.defaults;
            if (i) for (var n in i) n in t || (t[n] = i[n]);
        }
        function Gn(t) {
            return "object" == typeof t && !Array.isArray(t);
        }
        var qn = {
            millisecond: Mi,
            second: Ti,
            minute: ji,
            hour: Fi,
            day: Ii,
            sunday: Li,
            monday: Bi,
            tuesday: zi,
            wednesday: Ki,
            thursday: Ri,
            friday: Vi,
            saturday: Wi,
            month: Yi,
            year: Xi,
            utcMinute: wn,
            utcHour: Sn,
            utcDay: Ui,
            utcMonth: On,
            utcYear: Gi,
        };
        (t.AgChart = Vn),
            (t.Arc = X),
            (t.AreaSeries = Pe),
            (t.BandScale = x),
            (t.BarSeries = Fe),
            (t.Caption = b),
            (t.CartesianChart = he),
            (t.CategoryAxis = et),
            (t.Chart = ae),
            (t.ChartAxis = Q),
            (t.ChartBuilder = xn),
            (t.ClipRect = kn),
            (t.DropShadow = Si),
            (t.Group = k),
            (t.GroupedCategoryAxis = vt),
            (t.GroupedCategoryChart = ue),
            (t.HistogramBin = fi),
            (t.HistogramSeries = pi),
            (t.Line = P),
            (t.LineSeries = Xe),
            (t.LinearScale = ii),
            (t.Marker = wt),
            (t.Padding = i),
            (t.Path = z),
            (t.PieSeries = _i),
            (t.PolarChart = _e),
            (t.Rect = _t),
            (t.ScatterSeries = oi),
            (t.Scene = bt),
            (t.Sector = yi),
            (t.Shape = u),
            (t.borneo = ce),
            (t.bright = de),
            (t.extent = function (t) {
                for (var e, i, n, r = t.length, o = -1; ++o < r; ) if (null != (e = t[o]) && e >= e) for (i = n = e; ++o < r; ) null != (e = t[o]) && (i > e && (i = e), n < e && (n = e));
                return void 0 === i || void 0 === n ? void 0 : [i, n];
            }),
            (t.find = it),
            (t.findLargestMinMax = at),
            (t.findMinMax = ot),
            (t.finiteExtent = nt),
            (t.flat = ye),
            (t.flipChartAxisDirection = $),
            (t.linearScale = function () {
                return new ii();
            }),
            (t.material = fe),
            (t.normalizeAngle180 = E),
            (t.normalizeAngle360 = D),
            (t.normalizeAngle360Inclusive = A),
            (t.numericExtent = rt),
            (t.palettes = ge),
            (t.pastel = pe),
            (t.time = qn),
            (t.toDegrees = function (t) {
                return (t / Math.PI) * 180;
            }),
            (t.toRadians = M),
            Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(((t = t || self).agCharts = {}));

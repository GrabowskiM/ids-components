"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/react/cjs/react.production.js
var require_react_production = __commonJS({
  "../../node_modules/react/cjs/react.production.js"(exports2) {
    "use strict";
    var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
    var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
    var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
    var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
    var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
    var REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    var ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    };
    var assign = Object.assign;
    var emptyObject = {};
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    function ComponentDummy() {
    }
    ComponentDummy.prototype = Component.prototype;
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent;
    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    var isArrayImpl = Array.isArray;
    function noop() {
    }
    var ReactSharedInternals = { H: null, A: null, T: null, S: null };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function ReactElement(type, key, props) {
      var refProp = props.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== refProp ? refProp : null,
        props
      };
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      return ReactElement(oldElement.type, newKey, oldElement.props);
    }
    function isValidElement(object) {
      return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    var userProvidedKeyEscapeRegex = /\/+/g;
    function getElementKey(element, index) {
      return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
    }
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
            function(fulfilledValue) {
              "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
            },
            function(error) {
              "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
            }
          )), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if ("undefined" === type || "boolean" === type) children = null;
      var invokeCallback = false;
      if (null === children) invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(
                  invokeCallback(children._payload),
                  array,
                  escapedPrefix,
                  nameSoFar,
                  callback
                );
            }
        }
      if (invokeCallback)
        return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(
          callback,
          escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(
            userProvidedKeyEscapeRegex,
            "$&/"
          ) + "/") + invokeCallback
        )), array.push(callback)), 1;
      invokeCallback = 0;
      var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0; i < children.length; i++)
          nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if (i = getIteratorFn(children), "function" === typeof i)
        for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if ("object" === type) {
        if ("function" === typeof children.then)
          return mapIntoArray(
            resolveThenable(children),
            array,
            escapedPrefix,
            nameSoFar,
            callback
          );
        array = String(children);
        throw Error(
          "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
        );
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (null == children) return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (-1 === payload._status) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(
          function(moduleObject) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 1, payload._result = moduleObject;
          },
          function(error) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 2, payload._result = error;
          }
        );
        -1 === payload._status && (payload._status = 0, payload._result = ctor);
      }
      if (1 === payload._status) return payload._result.default;
      throw payload._result;
    }
    var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
      if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event)) return;
      } else if ("object" === typeof process && "function" === typeof process.emit) {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    };
    var Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function() {
            forEachFunc.apply(this, arguments);
          },
          forEachContext
        );
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return children;
      }
    };
    exports2.Activity = REACT_ACTIVITY_TYPE;
    exports2.Children = Children;
    exports2.Component = Component;
    exports2.Fragment = REACT_FRAGMENT_TYPE;
    exports2.Profiler = REACT_PROFILER_TYPE;
    exports2.PureComponent = PureComponent;
    exports2.StrictMode = REACT_STRICT_MODE_TYPE;
    exports2.Suspense = REACT_SUSPENSE_TYPE;
    exports2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports2.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(size) {
        return ReactSharedInternals.H.useMemoCache(size);
      }
    };
    exports2.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports2.cacheSignal = function() {
      return null;
    };
    exports2.cloneElement = function(element, config, children) {
      if (null === element || void 0 === element)
        throw Error(
          "The argument must be a React element, but you passed " + element + "."
        );
      var props = assign({}, element.props), key = element.key;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
      var propName = arguments.length - 2;
      if (1 === propName) props.children = children;
      else if (1 < propName) {
        for (var childArray = Array(propName), i = 0; i < propName; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      return ReactElement(element.type, key, props);
    };
    exports2.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      return defaultValue;
    };
    exports2.createElement = function(type, config, children) {
      var propName, props = {}, key = null;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (1 === childrenLength) props.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          void 0 === props[propName] && (props[propName] = childrenLength[propName]);
      return ReactElement(type, key, props);
    };
    exports2.createRef = function() {
      return { current: null };
    };
    exports2.forwardRef = function(render) {
      return { $$typeof: REACT_FORWARD_REF_TYPE, render };
    };
    exports2.isValidElement = isValidElement;
    exports2.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports2.memo = function(type, compare) {
      return {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: void 0 === compare ? null : compare
      };
    };
    exports2.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
      }
    };
    exports2.unstable_useCacheRefresh = function() {
      return ReactSharedInternals.H.useCacheRefresh();
    };
    exports2.use = function(usable) {
      return ReactSharedInternals.H.use(usable);
    };
    exports2.useActionState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useActionState(action, initialState, permalink);
    };
    exports2.useCallback = function(callback, deps) {
      return ReactSharedInternals.H.useCallback(callback, deps);
    };
    exports2.useContext = function(Context) {
      return ReactSharedInternals.H.useContext(Context);
    };
    exports2.useDebugValue = function() {
    };
    exports2.useDeferredValue = function(value, initialValue) {
      return ReactSharedInternals.H.useDeferredValue(value, initialValue);
    };
    exports2.useEffect = function(create, deps) {
      return ReactSharedInternals.H.useEffect(create, deps);
    };
    exports2.useEffectEvent = function(callback) {
      return ReactSharedInternals.H.useEffectEvent(callback);
    };
    exports2.useId = function() {
      return ReactSharedInternals.H.useId();
    };
    exports2.useImperativeHandle = function(ref, create, deps) {
      return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
    };
    exports2.useInsertionEffect = function(create, deps) {
      return ReactSharedInternals.H.useInsertionEffect(create, deps);
    };
    exports2.useLayoutEffect = function(create, deps) {
      return ReactSharedInternals.H.useLayoutEffect(create, deps);
    };
    exports2.useMemo = function(create, deps) {
      return ReactSharedInternals.H.useMemo(create, deps);
    };
    exports2.useOptimistic = function(passthrough, reducer) {
      return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
    };
    exports2.useReducer = function(reducer, initialArg, init) {
      return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
    };
    exports2.useRef = function(initialValue) {
      return ReactSharedInternals.H.useRef(initialValue);
    };
    exports2.useState = function(initialState) {
      return ReactSharedInternals.H.useState(initialState);
    };
    exports2.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return ReactSharedInternals.H.useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
      );
    };
    exports2.useTransition = function() {
      return ReactSharedInternals.H.useTransition();
    };
    exports2.version = "19.2.4";
  }
});

// ../../node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "../../node_modules/react/cjs/react.development.js"(exports2, module2) {
    "use strict";
    "production" !== process.env.NODE_ENV && (function() {
      function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info[0],
              info[1]
            );
          }
        });
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function ComponentDummy() {
      }
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function noop() {
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          oldElement.props,
          oldElement._owner,
          oldElement._debugStack,
          oldElement._debugTask
        );
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
      }
      function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function escape(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match) {
          return escaperLookup[match];
        });
      }
      function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = false;
        if (null === children) invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children._init, mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children;
          callback = callback(invokeCallback);
          var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
            return c;
          })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + childKey
          ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i = 0; i < children.length; i++)
            nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i = getIteratorFn(children), "function" === typeof i)
          for (i === children.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var ioInfo = payload._ioInfo;
          null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
          ioInfo = payload._result;
          var thenable = ioInfo();
          thenable.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 1;
                payload._result = moduleObject;
                var _ioInfo = payload._ioInfo;
                null != _ioInfo && (_ioInfo.end = performance.now());
                void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
              }
            },
            function(error) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 2;
                payload._result = error;
                var _ioInfo2 = payload._ioInfo;
                null != _ioInfo2 && (_ioInfo2.end = performance.now());
                void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            }
          );
          ioInfo = payload._ioInfo;
          if (null != ioInfo) {
            ioInfo.value = thenable;
            var displayName = thenable.displayName;
            "string" === typeof displayName && (ioInfo.name = displayName);
          }
          -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status)
          return ioInfo = payload._result, void 0 === ioInfo && console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            ioInfo
          ), "default" in ioInfo || console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            ioInfo
          ), ioInfo.default;
        throw payload._result;
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
      }
      function enqueueTask(task) {
        if (null === enqueueTaskImpl)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module2 && module2[requireString]).call(
              module2,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function(callback) {
              false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
      }
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
        actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              });
              return;
            } catch (error) {
              ReactSharedInternals.thrownErrors.push(error);
            }
          else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
      }
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i = 0;
          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i] = callback;
                    queue.splice(0, i);
                    return;
                  }
                  callback = continuation;
                } else break;
              } while (1);
            }
            queue.length = 0;
          } catch (error) {
            queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
          } finally {
            isFlushing = false;
          }
        }
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function(publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      }, assign = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign(deprecatedAPIs, Component.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
        didUsePromise: false,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      deprecatedAPIs = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
        deprecatedAPIs,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
          return queueMicrotask(callback);
        });
      } : enqueueTask;
      deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
          return resolveDispatcher().useMemoCache(size);
        }
      });
      var fnName = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        },
        toArray: function(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        },
        only: function(children) {
          if (!isValidElement(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        }
      };
      exports2.Activity = REACT_ACTIVITY_TYPE;
      exports2.Children = fnName;
      exports2.Component = Component;
      exports2.Fragment = REACT_FRAGMENT_TYPE;
      exports2.Profiler = REACT_PROFILER_TYPE;
      exports2.PureComponent = PureComponent;
      exports2.StrictMode = REACT_STRICT_MODE_TYPE;
      exports2.Suspense = REACT_SUSPENSE_TYPE;
      exports2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports2.__COMPILER_RUNTIME = deprecatedAPIs;
      exports2.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
        try {
          var result = callback();
        } catch (error) {
          ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
          var thenable = result;
          queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          });
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              thenable.then(
                function(returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      flushActQueue(queue), enqueueTask(function() {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                    } catch (error$0) {
                      ReactSharedInternals.thrownErrors.push(error$0);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else resolve(returnValue);
                },
                function(error) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                    ReactSharedInternals.thrownErrors
                  ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                }
              );
            }
          };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
              return recursivelyFlushAsyncActWork(
                returnValue$jscomp$0,
                resolve,
                reject
              );
            })) : resolve(returnValue$jscomp$0);
          }
        };
      };
      exports2.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports2.cacheSignal = function() {
        return null;
      };
      exports2.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
      };
      exports2.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " + element + "."
          );
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
          var JSCompiler_inline_result;
          a: {
            if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) && JSCompiler_inline_result.isReactWarning) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
          for (propName in config)
            !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i = 0; i < propName; i++)
            JSCompiler_inline_result[i] = arguments[i + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(
          element.type,
          key,
          props,
          owner,
          element._debugStack,
          element._debugTask
        );
        for (key = 2; key < arguments.length; key++)
          validateChildKeys(arguments[key]);
        return props;
      };
      exports2.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports2.createElement = function(type, config, children) {
        for (var i = 2; i < arguments.length; i++)
          validateChildKeys(arguments[i]);
        i = {};
        var key = null;
        if (null != config)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
            hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(
          i,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(
          type,
          key,
          i,
          getOwner(),
          propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports2.createRef = function() {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports2.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : "function" !== typeof render ? console.error(
          "forwardRef requires a render function but was given %s.",
          null === render ? "null" : typeof render
        ) : 0 !== render.length && 2 !== render.length && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        );
        null != render && null != render.defaultProps && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
          }
        });
        return elementType;
      };
      exports2.isValidElement = isValidElement;
      exports2.lazy = function(ctor) {
        ctor = { _status: -1, _result: ctor };
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: ctor,
          _init: lazyInitializer
        }, ioInfo = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [{ awaited: ioInfo }];
        return lazyType;
      };
      exports2.memo = function(type, compare) {
        null == type && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
          }
        });
        return compare;
      };
      exports2.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
        } catch (error) {
          reportGlobalError(error);
        } finally {
          null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
      };
      exports2.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
      };
      exports2.use = function(usable) {
        return resolveDispatcher().use(usable);
      };
      exports2.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports2.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports2.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
        return dispatcher.useContext(Context);
      };
      exports2.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
      };
      exports2.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
      };
      exports2.useEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useEffect(create, deps);
      };
      exports2.useEffectEvent = function(callback) {
        return resolveDispatcher().useEffectEvent(callback);
      };
      exports2.useId = function() {
        return resolveDispatcher().useId();
      };
      exports2.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
      };
      exports2.useInsertionEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useInsertionEffect(create, deps);
      };
      exports2.useLayoutEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useLayoutEffect(create, deps);
      };
      exports2.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
      };
      exports2.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
      };
      exports2.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
      };
      exports2.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports2.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports2.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports2.useTransition = function() {
        return resolveDispatcher().useTransition();
      };
      exports2.version = "19.2.4";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// ../../node_modules/react/index.js
var require_react = __commonJS({
  "../../node_modules/react/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_production();
    } else {
      module2.exports = require_react_development();
    }
  }
});

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  AltRadioInput: () => AltRadioInput,
  AltRadioInputStateful: () => AltRadioInputStateful,
  AssetsContext: () => AssetsContext,
  AssetsProvider: () => AssetsProvider,
  Autosave: () => Autosave,
  AutosaveStatus: () => AutosaveStatus,
  BASE_INPUT_TYPE_VALUES: () => BASE_INPUT_TYPE_VALUES,
  Badge: () => Badge,
  BadgeSize: () => BadgeSize,
  BadgeVariant: () => BadgeVariant,
  BaseChoiceInput: () => BaseChoiceInput,
  BaseChoiceInputField: () => BaseChoiceInputField,
  BaseDropdown: () => BaseDropdown,
  BaseField: () => BaseField,
  BaseInput: () => BaseInput,
  BaseInputsList: () => BaseInputsList,
  Button: () => Button,
  ButtonSize: () => ButtonSize,
  ButtonType: () => ButtonType,
  CheckboxField: () => CheckboxField,
  CheckboxFieldStateful: () => CheckboxFieldStateful,
  CheckboxInput: () => CheckboxInput,
  CheckboxInputStateful: () => CheckboxInputStateful,
  CheckboxesListField: () => CheckboxesListField,
  CheckboxesListFieldAction: () => CheckboxesListFieldAction,
  CheckboxesListFieldDirection: () => Direction,
  CheckboxesListFieldStateful: () => CheckboxesListFieldStateful,
  ChoiceInputLabel: () => ChoiceInputLabel,
  Direction: () => Direction,
  DropdownMultiInput: () => DropdownMultiInput,
  DropdownMultiInputAction: () => DropdownMultiInputAction,
  DropdownMultiInputStateful: () => DropdownMultiInputStateful,
  DropdownSingleInput: () => DropdownSingleInput,
  DropdownSingleInputStateful: () => DropdownSingleInputStateful,
  Expander: () => Expander,
  ExpanderType: () => ExpanderType,
  HelperText: () => HelperText,
  HelperTextType: () => HelperTextType,
  INPUT_CHOICE_TYPE_VALUES: () => INPUT_CHOICE_TYPE_VALUES,
  INPUT_TEXT_TYPE_VALUES: () => INPUT_TEXT_TYPE_VALUES,
  Icon: () => Icon,
  IconSize: () => IconSize,
  InputTextField: () => InputTextField,
  InputTextFieldSize: () => InputTextInputSize,
  InputTextFieldStateful: () => InputTextFieldStateful,
  InputTextInput: () => InputTextInput,
  InputTextInputSize: () => InputTextInputSize,
  InputTextInputStateful: () => InputTextInputStateful,
  Label: () => Label,
  RadioButtonField: () => RadioButtonField,
  RadioButtonFieldStateful: () => RadioButtonFieldStateful,
  RadioButtonInput: () => RadioButtonInput,
  RadioButtonInputStateful: () => RadioButtonInputStateful,
  RadioButtonsListField: () => RadioButtonsListField,
  RadioButtonsListFieldDirection: () => Direction,
  RadioButtonsListFieldStateful: () => RadioButtonsListFieldStateful,
  Tag: () => Tag,
  TagGhostType: () => TagGhostType,
  TagSize: () => TagSize,
  TagType: () => TagType,
  ToggleButtonField: () => ToggleButtonField,
  ToggleButtonFieldSize: () => ToggleButtonInputSize,
  ToggleButtonFieldStateful: () => ToggleButtonFieldStateful,
  ToggleButtonInput: () => ToggleButtonInput,
  ToggleButtonInputSize: () => ToggleButtonInputSize,
  ToggleButtonInputStateful: () => ToggleButtonInputStateful,
  TranslatorContext: () => TranslatorContext,
  TranslatorProvider: () => TranslatorProvider,
  useGetOrCreateId: () => useGetOrCreateId,
  useKeyDown: () => useKeyDown,
  validateInput: () => validateInput,
  withStateChecked: () => withStateChecked,
  withStateValue: () => withStateValue
});
module.exports = __toCommonJS(index_exports);

// src/components/Accordion/Accordion.tsx
var import_react6 = __toESM(require_react());

// src/components/Expander/Expander.tsx
var import_react4 = __toESM(require_react());

// src/components/Button/Button.tsx
var import_react3 = __toESM(require_react());

// src/components/Icon/Icon.tsx
var import_react2 = __toESM(require_react());

// src/context/Assets/Assets.tsx
var import_react = __toESM(require_react());
var AssetsContext = (0, import_react.createContext)({
  getIconPath: () => ""
});
var AssetsProvider = ({ children, value }) => {
  return /* @__PURE__ */ import_react.default.createElement(AssetsContext.Provider, { value }, children);
};

// src/components/Icon/Icon.tsx
var import_ids_core = require("@ibexa/ids-core");

// src/components/Icon/Icon.types.ts
var IconSize = /* @__PURE__ */ ((IconSize2) => {
  IconSize2["Tiny"] = "tiny";
  IconSize2["TinySmall"] = "tiny-small";
  IconSize2["Small"] = "small";
  IconSize2["SmallMedium"] = "small-medium";
  IconSize2["Medium"] = "medium";
  IconSize2["MediumLarge"] = "medium-large";
  IconSize2["Large"] = "large";
  IconSize2["LargeHuge"] = "large-huge";
  IconSize2["Huge"] = "huge";
  return IconSize2;
})(IconSize || {});

// src/components/Icon/Icon.tsx
var Icon = ({ path, className = "", name = "", size = "small" /* Small */ }) => {
  const { getIconPath } = (0, import_react2.useContext)(AssetsContext);
  const iconPath = path ?? getIconPath(name);
  const componentClassName = (0, import_ids_core.createCssClassNames)({
    "ids-icon": true,
    [`ids-icon--${size}`]: true,
    [className]: !!className
  });
  return /* @__PURE__ */ import_react2.default.createElement("svg", { "aria-label": name, className: componentClassName, role: "img" }, /* @__PURE__ */ import_react2.default.createElement("use", { xlinkHref: iconPath }));
};

// src/components/Button/Button.tsx
var import_ids_core2 = require("@ibexa/ids-core");

// src/components/Button/Button.types.ts
var ButtonSize = /* @__PURE__ */ ((ButtonSize2) => {
  ButtonSize2["Medium"] = "medium";
  ButtonSize2["Small"] = "small";
  return ButtonSize2;
})(ButtonSize || {});
var ButtonType = /* @__PURE__ */ ((ButtonType2) => {
  ButtonType2["Primary"] = "primary";
  ButtonType2["Secondary"] = "secondary";
  ButtonType2["Tertiary"] = "tertiary";
  ButtonType2["SecondaryAlt"] = "secondary-alt";
  ButtonType2["TertiaryAlt"] = "tertiary-alt";
  return ButtonType2;
})(ButtonType || {});

// src/components/Button/Button.tsx
var ICON_SIZE_MAPPING = {
  ["medium" /* Medium */]: "small" /* Small */,
  ["small" /* Small */]: "tiny-small" /* TinySmall */
};
var Button = ({
  onClick,
  children = null,
  ariaLabel,
  disabled = false,
  extraAria = {},
  className = "",
  icon,
  isFocusable = true,
  size = "medium" /* Medium */,
  title = "",
  type = "primary" /* Primary */
}) => {
  const iconOnly = !!icon && !children;
  const componentClassName = (0, import_ids_core2.createCssClassNames)({
    "ids-btn": true,
    [`ids-btn--${type}`]: true,
    [`ids-btn--${size}`]: true,
    "ids-btn--disabled": disabled,
    "ids-btn--icon-only": iconOnly,
    [className]: !!className
  });
  const getBtnAriaLabel = () => {
    if (ariaLabel) {
      return ariaLabel;
    } else if (iconOnly) {
      return icon;
    }
    return typeof children === "string" ? children : "";
  };
  const renderIcon = () => {
    if (icon) {
      const iconSize = ICON_SIZE_MAPPING[size];
      return /* @__PURE__ */ import_react3.default.createElement("div", { className: "ids-btn__icon" }, /* @__PURE__ */ import_react3.default.createElement(Icon, { name: icon, size: iconSize }));
    }
    return null;
  };
  const renderLabel = () => {
    if (!iconOnly) {
      return /* @__PURE__ */ import_react3.default.createElement("div", { className: "ids-btn__label" }, children);
    }
    return null;
  };
  return /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      "aria-disabled": disabled,
      "aria-label": getBtnAriaLabel(),
      className: componentClassName,
      disabled,
      onClick,
      role: "button",
      tabIndex: isFocusable && !disabled ? 0 : -1,
      title,
      type: "button",
      ...extraAria
    },
    renderIcon(),
    renderLabel()
  );
};

// src/components/Expander/Expander.tsx
var import_ids_core3 = require("@ibexa/ids-core");

// src/components/Expander/Expander.types.ts
var ExpanderType = /* @__PURE__ */ ((ExpanderType2) => {
  ExpanderType2["Caret"] = "caret";
  ExpanderType2["Chevron"] = "chevron";
  return ExpanderType2;
})(ExpanderType || {});

// src/components/Expander/Expander.tsx
var ICONS_MAP = {
  ["caret" /* Caret */]: "arrow-caret-down",
  ["chevron" /* Chevron */]: "arrow-chevron-down"
};
var Expander = ({
  onClick = () => void 0,
  type,
  collapseLabel = "",
  expandLabel = "",
  hasIcon = true,
  isExpanded = false,
  isFocusable = true
}) => {
  const label = isExpanded ? collapseLabel : expandLabel;
  const componentClassName = (0, import_ids_core3.createCssClassNames)({
    "ids-expander": true,
    "ids-expander--has-icon": hasIcon,
    "ids-expander--has-label": label !== "",
    "ids-expander--is-expanded": isExpanded
  });
  const extraAria = {
    "aria-expanded": isExpanded
  };
  const renderExpanderIcon = () => {
    if (!hasIcon) {
      return null;
    }
    return /* @__PURE__ */ import_react4.default.createElement(Icon, { name: ICONS_MAP[type], size: "small" /* Small */ });
  };
  return /* @__PURE__ */ import_react4.default.createElement(
    Button,
    {
      ariaLabel: label,
      className: componentClassName,
      extraAria,
      isFocusable,
      onClick: () => {
        onClick(!isExpanded);
      },
      size: "small" /* Small */,
      type: "tertiary-alt" /* TertiaryAlt */
    },
    label,
    renderExpanderIcon()
  );
};

// src/context/Translator/Translator.tsx
var import_react5 = __toESM(require_react());
var TranslatorContext = (0, import_react5.createContext)({
  trans: () => ""
});
var TranslatorProvider = ({ children, value }) => {
  return /* @__PURE__ */ import_react5.default.createElement(TranslatorContext.Provider, { value }, children);
};

// src/components/Accordion/Accordion.tsx
var import_ids_core4 = require("@ibexa/ids-core");
var FAKE_TIMEOUT_RERENDER = 1;
var Accordion = ({ children, header, initiallyExpanded = false, onHandleExpand = () => void 0 }) => {
  const Translator = (0, import_react6.useContext)(TranslatorContext);
  const accordionContentRef = (0, import_react6.useRef)(null);
  const [isExpanded, setIsExpanded] = (0, import_react6.useState)(initiallyExpanded);
  const [isAnimating, setIsAnimating] = (0, import_react6.useState)(false);
  const collapseLabel = Translator.trans(
    /*@Desc("Hide")*/
    "ibexa.expander.label.collapse"
  );
  const expandLabel = Translator.trans(
    /*@Desc("Show")*/
    "ibexa.expander.label.expand"
  );
  const changeExpanded = (nextIsExpanded) => {
    setIsExpanded(nextIsExpanded);
    onHandleExpand(nextIsExpanded);
    setIsAnimating(true);
    if (accordionContentRef.current) {
      const initialHeight = nextIsExpanded ? 0 : accordionContentRef.current.offsetHeight;
      accordionContentRef.current.style.height = `${initialHeight}px`;
      accordionContentRef.current.addEventListener(
        "transitionend",
        () => {
          setIsAnimating(false);
          if (accordionContentRef.current) {
            accordionContentRef.current.style.removeProperty("height");
          }
        },
        { once: true }
      );
    }
    setTimeout(() => {
      if (accordionContentRef.current) {
        const finalHeight = nextIsExpanded ? accordionContentRef.current.scrollHeight : 0;
        accordionContentRef.current.style.height = `${finalHeight}px`;
      }
    }, FAKE_TIMEOUT_RERENDER);
  };
  const mainClassName = (0, import_ids_core4.createCssClassNames)({
    "ids-accordion": true,
    "ids-accordion--is-animating": isAnimating,
    "ids-accordion--is-expanded": isExpanded
  });
  (0, import_react6.useEffect)(() => {
    setIsExpanded(initiallyExpanded);
  }, [initiallyExpanded]);
  return /* @__PURE__ */ import_react6.default.createElement("div", { className: mainClassName }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "ids-accordion__header" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "ids-accordion__header-content" }, header), /* @__PURE__ */ import_react6.default.createElement(
    Expander,
    {
      collapseLabel,
      expandLabel,
      hasIcon: true,
      isExpanded,
      onClick: changeExpanded,
      type: "caret" /* Caret */
    }
  )), /* @__PURE__ */ import_react6.default.createElement("div", { className: "ids-accordion__content", ref: accordionContentRef }, isExpanded || isAnimating ? children : null));
};

// src/components/AltRadio/AltRadioInput/AltRadioInput.tsx
var import_react11 = __toESM(require_react());

// src/partials/BaseChoiceInput/BaseChoiceInput.tsx
var import_react9 = __toESM(require_react());

// src/partials/BaseInput/BaseInput.tsx
var import_react8 = __toESM(require_react());
var import_ids_core5 = require("@ibexa/ids-core");

// src/hooks/generators.ts
var import_react7 = __toESM(require_react());
var useGetOrCreateId = (id) => {
  const generatedId = (0, import_react7.useId)();
  return id ?? generatedId;
};

// src/partials/BaseInput/BaseInput.tsx
var BaseInput = ({
  name,
  disabled = false,
  error = false,
  className = "",
  extraInputAttrs = {},
  id,
  ref,
  required = false,
  size = "medium",
  title = "",
  type = "text",
  value = ""
}) => {
  const componentId = useGetOrCreateId(id);
  const componentClassName = (0, import_ids_core5.createCssClassNames)({
    "ids-input": true,
    [`ids-input--${type}`]: true,
    [`ids-input--${size}`]: true,
    "ids-input--disabled": disabled,
    "ids-input--error": error,
    "ids-input--required": required,
    [className]: !!className
  });
  return /* @__PURE__ */ import_react8.default.createElement(
    "input",
    {
      "aria-invalid": error,
      "aria-required": required,
      className: componentClassName,
      disabled,
      id: componentId,
      name,
      ref,
      title,
      type,
      value,
      ...extraInputAttrs
    }
  );
};

// src/partials/BaseInput/BaseInput.types.ts
var BASE_INPUT_TYPE_VALUES = [
  "text",
  "password",
  "email",
  "number",
  "tel",
  "search",
  "url",
  "checkbox",
  "radio",
  "hidden"
];

// src/partials/BaseChoiceInput/BaseChoiceInput.tsx
var import_ids_core6 = require("@ibexa/ids-core");
var BaseChoiceInput = ({
  name,
  type,
  onBlur = () => void 0,
  onChange = () => void 0,
  onFocus = () => void 0,
  onInput = () => void 0,
  checked = false,
  className = "",
  disabled = false,
  error = false,
  extraAria = {},
  id,
  inputClassName = "",
  ref,
  title = "",
  value = ""
}) => {
  const componentClassName = (0, import_ids_core6.createCssClassNames)({
    "ids-choice-input": true,
    [className]: !!className
  });
  const componentOnBlur = (event) => {
    onBlur(event);
  };
  const componentOnChange = (event) => {
    onChange(event.target.checked, event);
  };
  const componentOnFocus = (event) => {
    onFocus(event);
  };
  const componentOnInput = (event) => {
    onInput(event);
  };
  return /* @__PURE__ */ import_react9.default.createElement("div", { className: componentClassName }, /* @__PURE__ */ import_react9.default.createElement(
    BaseInput,
    {
      className: inputClassName,
      disabled,
      error,
      extraInputAttrs: {
        checked,
        onBlur: componentOnBlur,
        onChange: componentOnChange,
        onFocus: componentOnFocus,
        onInput: componentOnInput,
        ...extraAria
      },
      id,
      name,
      ref,
      title,
      type,
      value
    }
  ));
};

// src/partials/BaseChoiceInput/BaseChoiceInput.types.ts
var INPUT_CHOICE_TYPE_VALUES = ["checkbox", "radio"];

// src/components/AltRadio/AltRadioInput/AltRadioInput.tsx
var import_ids_core7 = require("@ibexa/ids-core");

// src/hoc/withStateChecked.tsx
var import_react10 = __toESM(require_react());
var withStateChecked = (WrappedComponent) => {
  const WrapperComponent = ({ checked, onChange, ...restProps }) => {
    const [componentChecked, setComponentChecked] = (0, import_react10.useState)(checked);
    const handleChange = (...args) => {
      setComponentChecked(args[0]);
      if (onChange) {
        onChange(...args);
      }
    };
    (0, import_react10.useEffect)(() => {
      setComponentChecked(checked);
    }, [checked]);
    return /* @__PURE__ */ import_react10.default.createElement(WrappedComponent, { ...restProps, checked: componentChecked, onChange: handleChange });
  };
  WrapperComponent.displayName = `withStateChecked(${WrappedComponent.displayName ?? WrappedComponent.name})`;
  return WrapperComponent;
};

// src/components/AltRadio/AltRadioInput/AltRadioInput.tsx
var AltRadioInput = ({ className = "", label, tileClassName = "", title = "", ...inputProps }) => {
  const { checked = false, disabled = false, error = false, onBlur, onChange, onFocus } = inputProps;
  const inputRef = (0, import_react11.useRef)(null);
  const [isFocused, setIsFocused] = (0, import_react11.useState)(false);
  const altRadioClassName = (0, import_ids_core7.createCssClassNames)({
    "ids-alt-radio": true,
    [className]: !!className
  });
  const altRadioTileClassName = (0, import_ids_core7.createCssClassNames)({
    "ids-alt-radio__tile": true,
    "ids-alt-radio__tile--checked": checked,
    "ids-alt-radio__tile--disabled": disabled,
    "ids-alt-radio__tile--error": error,
    "ids-alt-radio__tile--focused": isFocused,
    [tileClassName]: !!tileClassName
  });
  const onTileClick = () => {
    inputRef.current?.focus();
    if (!checked) {
      onChange?.(true);
    }
  };
  const onInputFocus = (event) => {
    setIsFocused(true);
    onFocus?.(event);
  };
  const onInputBlur = (event) => {
    setIsFocused(false);
    onBlur?.(event);
  };
  return /* @__PURE__ */ import_react11.default.createElement("div", { className: altRadioClassName, title }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "ids-alt-radio__source" }, /* @__PURE__ */ import_react11.default.createElement(
    BaseChoiceInput,
    {
      ...inputProps,
      onBlur: onInputBlur,
      onFocus: onInputFocus,
      ref: (node) => {
        inputRef.current = node;
        if (typeof inputProps.ref === "function") {
          inputProps.ref(node);
        } else if (inputProps.ref) {
          inputProps.ref.current = node;
        }
      },
      type: "radio"
    }
  )), /* @__PURE__ */ import_react11.default.createElement("div", { className: altRadioTileClassName, onClick: onTileClick, role: "button" }, label));
};
var AltRadioInputStateful = withStateChecked(AltRadioInput);

// src/components/Autosave/Autosave.tsx
var import_react12 = __toESM(require_react());
var import_ids_core8 = require("@ibexa/ids-core");

// src/components/Autosave/Autosave.types.ts
var AutosaveStatus = /* @__PURE__ */ ((AutosaveStatus2) => {
  AutosaveStatus2["On"] = "on";
  AutosaveStatus2["Saving"] = "saving";
  AutosaveStatus2["Saved"] = "saved";
  AutosaveStatus2["Error"] = "error";
  return AutosaveStatus2;
})(AutosaveStatus || {});

// src/components/Autosave/Autosave.tsx
var Autosave = ({ isDarkMode = false, isEnabled, lastSavedTime, status = "on" /* On */ }) => {
  const Translator = (0, import_react12.useContext)(TranslatorContext);
  const classes = (0, import_ids_core8.createCssClassNames)({
    "ids-autosave": true,
    "ids-autosave--error": status === "error" /* Error */,
    "ids-autosave--light": isDarkMode
  });
  const tooltipMessage = "content.autosave.turn_off.message";
  const getIconName = () => {
    if (!isEnabled) {
      return "autosave-off";
    }
    switch (status) {
      case "on" /* On */:
        return "autosave-on";
      case "saving" /* Saving */:
        return "autosave-saving";
      case "saved" /* Saved */:
        return "autosave-saved";
      case "error" /* Error */:
        return "autosave-error";
      default:
        return "autosave-off";
    }
  };
  const getStatusMessage = () => {
    const offMessage = Translator.trans(
      /*@Desc("Autosave is off, draft not created")*/
      "content_edit.autosave.status_off.message"
    );
    if (!isEnabled) {
      return offMessage;
    }
    switch (status) {
      case "on" /* On */:
        return Translator.trans(
          /*@Desc("Autosave is on, draft created")*/
          "content_edit.autosave.status_on.message"
        );
      case "saving" /* Saving */:
        return Translator.trans(
          /*@Desc("Saving")*/
          "content_edit.autosave.status_saving.message"
        );
      case "saved" /* Saved */:
        return Translator.trans(
          /*@Desc("Autosave is on, draft saved %time%")*/
          "content_edit.autosave.status_saved.message.full",
          {
            time: lastSavedTime?.toString() ?? ""
          }
        );
      case "error" /* Error */:
        return Translator.trans(
          /*@Desc("Saving error")*/
          "content_edit.autosave.status_error.message"
        );
      default:
        return offMessage;
    }
  };
  return /* @__PURE__ */ import_react12.default.createElement("div", { className: classes, title: isEnabled ? tooltipMessage : void 0 }, /* @__PURE__ */ import_react12.default.createElement(Icon, { className: "ids-icon", name: getIconName(), size: "small" /* Small */ }), /* @__PURE__ */ import_react12.default.createElement("div", { className: "ids-autosave__status-message" }, getStatusMessage()));
};

// src/components/Badge/Badge.tsx
var import_react13 = __toESM(require_react());
var import_ids_core9 = require("@ibexa/ids-core");

// src/components/Badge/Badge.types.ts
var BadgeSize = /* @__PURE__ */ ((BadgeSize2) => {
  BadgeSize2["Medium"] = "medium";
  BadgeSize2["Small"] = "small";
  return BadgeSize2;
})(BadgeSize || {});
var BadgeVariant = /* @__PURE__ */ ((BadgeVariant2) => {
  BadgeVariant2["String"] = "string";
  BadgeVariant2["Number"] = "number";
  return BadgeVariant2;
})(BadgeVariant || {});

// src/components/Badge/Badge.tsx
var MAX_BADGE_VALUE = 99;
var THRESHOLD = {
  ["medium" /* Medium */]: 100,
  ["small" /* Small */]: 10
};
var STRING_THRESHOLD = {
  ["medium" /* Medium */]: 3,
  ["small" /* Small */]: 2
};
var Badge = ({
  className = "",
  maxValue = MAX_BADGE_VALUE,
  size = "medium" /* Medium */,
  value,
  variant = "string" /* String */
}) => {
  const isStretched = variant === "number" /* Number */ ? parseInt(value, 10) >= THRESHOLD[size] : value.length >= STRING_THRESHOLD[size];
  const componentClassName = (0, import_ids_core9.createCssClassNames)({
    "ids-badge": true,
    [`ids-badge--${size}`]: true,
    "ids-badge--stretched": isStretched,
    [className]: !!className
  });
  const formatBadgeValue = (badgeValue) => {
    if (variant === "string" /* String */) {
      return badgeValue;
    }
    const numericValue = parseInt(badgeValue, 10);
    return numericValue > maxValue ? `${maxValue}+` : numericValue.toString();
  };
  return /* @__PURE__ */ import_react13.default.createElement("div", { className: componentClassName }, formatBadgeValue(value));
};

// src/components/Checkbox/CheckboxField/CheckboxField.tsx
var import_react17 = __toESM(require_react());

// src/partials/BaseChoiceInputField/BaseChoiceInputField.tsx
var import_react15 = __toESM(require_react());

// src/components/ChoiceInputLabel/ChoiceInputLabel.tsx
var import_react14 = __toESM(require_react());
var import_ids_core10 = require("@ibexa/ids-core");
var ChoiceInputLabel = ({ children, htmlFor, className = "", title = "" }) => {
  const labelClassName = (0, import_ids_core10.createCssClassNames)({
    "ids-choice-input-label": true,
    [className]: !!className
  });
  return /* @__PURE__ */ import_react14.default.createElement("label", { className: labelClassName, htmlFor, title }, children);
};

// src/partials/BaseChoiceInputField/BaseChoiceInputField.tsx
var import_ids_core11 = require("@ibexa/ids-core");
var BaseChoiceInputField = ({
  children,
  className = "",
  disabled = false,
  error = false,
  id,
  inputWrapperClassName = "",
  labelClassName = "",
  renderInput
}) => {
  const componentClassName = (0, import_ids_core11.createCssClassNames)({
    "ids-choice-input-field": true,
    "ids-choice-input-field--disabled": disabled,
    "ids-choice-input-field--error": error,
    [className]: true
  });
  const componentInputWrapperClassName = (0, import_ids_core11.createCssClassNames)({
    "ids-choice-input-field__input-wrapper": true,
    [inputWrapperClassName]: true
  });
  const componentLabelClassName = (0, import_ids_core11.createCssClassNames)({
    "ids-choice-input-field__label": true,
    [labelClassName]: true
  });
  return /* @__PURE__ */ import_react15.default.createElement("div", { className: componentClassName }, /* @__PURE__ */ import_react15.default.createElement("div", { className: componentInputWrapperClassName }, renderInput()), /* @__PURE__ */ import_react15.default.createElement(ChoiceInputLabel, { className: componentLabelClassName, htmlFor: id }, children));
};

// src/components/Checkbox/CheckboxInput/CheckboxInput.tsx
var import_react16 = __toESM(require_react());
var import_ids_core12 = require("@ibexa/ids-core");
var CheckboxInput = ({ className = "", indeterminate = false, ...restProps }) => {
  const checkboxClassName = (0, import_ids_core12.createCssClassNames)({
    "ids-checkbox": true,
    [className]: true
  });
  const inputClassName = (0, import_ids_core12.createCssClassNames)({
    "ids-input--indeterminate": indeterminate
  });
  return /* @__PURE__ */ import_react16.default.createElement(
    BaseChoiceInput,
    {
      className: checkboxClassName,
      inputClassName,
      ref: (node) => {
        if (node) {
          node.indeterminate = indeterminate;
        }
      },
      type: "checkbox",
      ...restProps
    }
  );
};
var CheckboxInputStateful = withStateChecked(CheckboxInput);

// src/components/Checkbox/CheckboxField/CheckboxField.tsx
var import_ids_core13 = require("@ibexa/ids-core");
var CheckboxField = ({
  className = "",
  label,
  inputWrapperClassName = "",
  labelClassName = "",
  ...inputProps
}) => {
  const fieldClassName = (0, import_ids_core13.createCssClassNames)({
    "ids-checkbox-field": true,
    [className]: !!className
  });
  const renderInput = (0, import_react17.useCallback)(() => {
    return /* @__PURE__ */ import_react17.default.createElement(CheckboxInput, { ...inputProps });
  }, [inputProps]);
  return /* @__PURE__ */ import_react17.default.createElement(
    BaseChoiceInputField,
    {
      className: fieldClassName,
      id: inputProps.id,
      inputWrapperClassName,
      labelClassName,
      renderInput
    },
    label
  );
};
var CheckboxFieldStateful = withStateChecked(CheckboxField);

// src/components/Checkbox/CheckboxesListField/CheckboxesListField.tsx
var import_react23 = __toESM(require_react());

// src/partials/BaseInputsList/BaseInputsList.tsx
var import_react21 = __toESM(require_react());

// src/partials/BaseField/BaseField.tsx
var import_react20 = __toESM(require_react());

// src/components/HelperText/HelperText.tsx
var import_react18 = __toESM(require_react());
var import_ids_core14 = require("@ibexa/ids-core");

// src/components/HelperText/HelperText.types.ts
var HelperTextType = /* @__PURE__ */ ((HelperTextType2) => {
  HelperTextType2["Default"] = "default";
  HelperTextType2["Error"] = "error";
  return HelperTextType2;
})(HelperTextType || {});

// src/components/HelperText/HelperText.tsx
var ICONS_TYPE_MAP = {
  default: "info-circle",
  error: "alert-error"
};
var HelperText = ({ children, className = "", title = "", type = "default" /* Default */ }) => {
  if (!children) {
    return null;
  }
  const componentClassName = (0, import_ids_core14.createCssClassNames)({
    "ids-helper-text": true,
    [`ids-helper-text--${type}`]: !!type,
    [className]: !!className
  });
  return /* @__PURE__ */ import_react18.default.createElement("div", { className: componentClassName, title }, /* @__PURE__ */ import_react18.default.createElement("div", { className: "ids-helper-text__icon-wrapper" }, /* @__PURE__ */ import_react18.default.createElement(Icon, { className: "ids-helper-text__icon", name: ICONS_TYPE_MAP[type], size: "tiny-small" /* TinySmall */ })), /* @__PURE__ */ import_react18.default.createElement("div", { className: "ids-helper-text__content-wrapper" }, children));
};

// src/components/Label/Label.tsx
var import_react19 = __toESM(require_react());
var import_ids_core15 = require("@ibexa/ids-core");
var Label = ({ children, htmlFor, error = false, className = "", required = false, title = "" }) => {
  const componentClassName = (0, import_ids_core15.createCssClassNames)({
    "ids-label": true,
    "ids-label--error": error,
    "ids-label--required": required,
    [className]: !!className
  });
  return /* @__PURE__ */ import_react19.default.createElement("label", { className: componentClassName, htmlFor, title }, children);
};

// src/partials/BaseField/BaseField.tsx
var import_ids_core16 = require("@ibexa/ids-core");
var BaseField = ({ children, className = "", helperText, label, type }) => {
  const classes = (0, import_ids_core16.createCssClassNames)({
    "ids-field": true,
    [`ids-field--${type}`]: true,
    [className]: !!className
  });
  const renderLabel = () => {
    if (!label) {
      return null;
    }
    const { children: labelContent, ...labelProps } = label;
    return /* @__PURE__ */ import_react20.default.createElement("div", { className: "ids-field__label-wrapper" }, /* @__PURE__ */ import_react20.default.createElement(Label, { ...labelProps }, labelContent));
  };
  const renderHelperText = () => {
    if (!helperText) {
      return null;
    }
    const { children: helperTextContent, ...helperTextProps } = helperText;
    return /* @__PURE__ */ import_react20.default.createElement("div", { className: "ids-field__helper-text-wrapper" }, /* @__PURE__ */ import_react20.default.createElement(HelperText, { ...helperTextProps }, helperTextContent));
  };
  return /* @__PURE__ */ import_react20.default.createElement("div", { className: classes }, renderLabel(), /* @__PURE__ */ import_react20.default.createElement("div", { className: "ids-field__source-wrapper" }, children), renderHelperText());
};

// src/partials/BaseInputsList/BaseInputsList.tsx
var import_ids_core17 = require("@ibexa/ids-core");

// src/partials/BaseInputsList/BaseInputsList.types.ts
var Direction = /* @__PURE__ */ ((Direction2) => {
  Direction2["Horizontal"] = "horizontal";
  Direction2["Vertical"] = "vertical";
  return Direction2;
})(Direction || {});

// src/partials/BaseInputsList/BaseInputsList.tsx
var BaseInputsList = ({
  items,
  renderItem,
  className = "",
  direction = "vertical" /* Vertical */,
  helperTextProps,
  labelProps
}) => {
  const listClassName = (0, import_ids_core17.createCssClassNames)({
    "ids-choice-inputs-list": true,
    [`ids-choice-inputs-list--${direction}`]: true,
    [className]: true
  });
  return /* @__PURE__ */ import_react21.default.createElement(BaseField, { className: listClassName, helperText: helperTextProps, label: labelProps, type: "list" }, /* @__PURE__ */ import_react21.default.createElement("div", { className: "ids-choice-inputs-list__items" }, items.map((item) => renderItem(item))));
};

// src/components/Checkbox/CheckboxesListField/CheckboxesListField.tsx
var import_ids_core18 = require("@ibexa/ids-core");

// src/hoc/withStateValue.tsx
var import_react22 = __toESM(require_react());
var withStateValue = (WrappedComponent) => {
  const WrapperComponent = ({ value, onChange, ...restProps }) => {
    const [componentValue, setComponentValue] = (0, import_react22.useState)(value);
    const handleChange = (...args) => {
      setComponentValue(args[0]);
      if (onChange) {
        onChange(...args);
      }
    };
    (0, import_react22.useEffect)(() => {
      setComponentValue(value);
    }, [value]);
    return /* @__PURE__ */ import_react22.default.createElement(WrappedComponent, { ...restProps, onChange: handleChange, value: componentValue });
  };
  WrapperComponent.displayName = `withStateValue(${WrappedComponent.displayName ?? WrappedComponent.name})`;
  return WrapperComponent;
};

// src/components/Checkbox/CheckboxesListField/CheckboxesListField.types.ts
var CheckboxesListFieldAction = /* @__PURE__ */ ((CheckboxesListFieldAction2) => {
  CheckboxesListFieldAction2["Check"] = "check";
  CheckboxesListFieldAction2["Uncheck"] = "uncheck";
  return CheckboxesListFieldAction2;
})(CheckboxesListFieldAction || {});

// src/components/Checkbox/CheckboxesListField/CheckboxesListField.tsx
var CheckboxesListField = ({
  className = "",
  direction = "vertical" /* Vertical */,
  helperText,
  helperTextExtra = {},
  id,
  items,
  label,
  labelExtra = {},
  name,
  onChange = () => void 0,
  required = false,
  value = []
}) => {
  const componentClassName = (0, import_ids_core18.createCssClassNames)({
    "ids-checkboxes-list-field": true,
    [className]: !!className
  });
  const helperTextProps = {
    children: helperText,
    type: "default" /* Default */,
    ...helperTextExtra
  };
  const labelProps = {
    children: label,
    error: false,
    htmlFor: id,
    required,
    ...labelExtra
  };
  const addOrRemoveItem = (0, import_react23.useCallback)(
    (itemValue, itemAdded) => {
      if (itemAdded) {
        return [...value, itemValue];
      }
      return value.filter((checkedValue) => checkedValue !== itemValue);
    },
    [value]
  );
  const renderItem = (0, import_react23.useCallback)(
    (item) => {
      return /* @__PURE__ */ import_react23.default.createElement(
        CheckboxField,
        {
          ...item,
          checked: value.includes(item.value),
          key: item.id,
          name,
          onChange: (...args) => {
            const [itemAdded] = args;
            const nextValue = addOrRemoveItem(item.value, itemAdded);
            const actionPerformed = itemAdded ? "check" /* Check */ : "uncheck" /* Uncheck */;
            onChange(nextValue, item.value, actionPerformed);
            item.onChange?.(...args);
          }
        }
      );
    },
    [addOrRemoveItem, name, onChange, value]
  );
  return /* @__PURE__ */ import_react23.default.createElement(
    BaseInputsList,
    {
      className: componentClassName,
      direction,
      helperTextProps,
      items,
      labelProps,
      renderItem
    }
  );
};
var CheckboxesListFieldStateful = withStateValue(CheckboxesListField);

// src/components/Dropdown/DropdownSingleInput/DropdownSingleInput.tsx
var import_react33 = __toESM(require_react());

// src/partials/BaseDropdown/BaseDropdown.tsx
var import_react32 = __toESM(require_react());

// src/partials/BaseDropdown/components/ItemsContainer/ItemsContainer.tsx
var import_react30 = __toESM(require_react());
var import_react31 = require("@floating-ui/react");

// src/partials/BaseDropdown/components/Search/Search.tsx
var import_react28 = __toESM(require_react());

// src/components/InputText/InputTextField/InputTextField.tsx
var import_react27 = __toESM(require_react());

// src/components/InputText/InputTextField/InputTextField.utils.ts
var import_react24 = __toESM(require_react());
var import_ids_core19 = require("@ibexa/ids-core");

// src/shared/validators.ts
var validateInput = (value, validators) => {
  const errors = validators.reduce((errorsAcc, validator) => {
    if (!validator.validate(value)) {
      return [...errorsAcc, validator.getErrorMessage()];
    }
    return errorsAcc;
  }, []);
  return { isValid: !errors.length, messages: errors };
};

// src/components/InputText/InputTextField/InputTextField.utils.ts
var useInitValidators = ({ required }) => {
  const translator = (0, import_react24.useContext)(TranslatorContext);
  const validators = (0, import_react24.useMemo)(() => {
    const validatorsList = [];
    if (required) {
      validatorsList.push(new import_ids_core19.IsEmptyStringValidator(translator));
    }
    return validatorsList;
  }, [required, translator]);
  return validators;
};
var useValidateInput = ({
  validators,
  value
}) => {
  const initialValue = (0, import_react24.useRef)(value);
  const [isDirty, setIsDirty] = (0, import_react24.useState)(false);
  (0, import_react24.useEffect)(() => {
    if (initialValue.current !== value) {
      setIsDirty(true);
    }
    initialValue.current = value;
  }, [value]);
  return (0, import_react24.useMemo)(() => {
    if (!isDirty) {
      return { isValid: true, messages: [] };
    }
    return validateInput(value, validators);
  }, [initialValue.current, value, validators]);
};

// src/components/InputText/InputTextInput/InputTextInput.tsx
var import_react26 = __toESM(require_react());

// src/ui/ClearBtn/ClearBtn.tsx
var import_react25 = __toESM(require_react());
var import_ids_core20 = require("@ibexa/ids-core");
var ClearBtn = ({ onClick, disabled = false }) => {
  const Translator = (0, import_react25.useContext)(TranslatorContext);
  const clearMsg = Translator.trans(
    /*@Desc("Clear")*/
    "ids.clear_btn.label"
  );
  const componentClassName = (0, import_ids_core20.createCssClassNames)({
    "ids-clear-btn": true
  });
  return /* @__PURE__ */ import_react25.default.createElement(
    Button,
    {
      ariaLabel: clearMsg,
      className: componentClassName,
      disabled,
      icon: "discard",
      onClick,
      size: "small" /* Small */,
      title: clearMsg,
      type: "tertiary-alt" /* TertiaryAlt */
    }
  );
};

// src/components/InputText/InputTextInput/InputTextInput.tsx
var import_ids_core21 = require("@ibexa/ids-core");

// src/components/InputText/InputTextInput/InputTextInput.types.ts
var InputTextInputSize = /* @__PURE__ */ ((InputTextInputSize2) => {
  InputTextInputSize2["Medium"] = "medium";
  InputTextInputSize2["Small"] = "small";
  return InputTextInputSize2;
})(InputTextInputSize || {});
var INPUT_TEXT_TYPE_VALUES = ["text", "password", "email", "number", "tel", "search", "url"];

// src/components/InputText/InputTextInput/InputTextInput.tsx
var InputTextInput = ({
  name,
  onBlur = () => void 0,
  onChange = () => void 0,
  onFocus = () => void 0,
  onInput = () => void 0,
  disabled = false,
  error = false,
  extraAria = {},
  className = "",
  id,
  placeholder = "",
  processActions = (actions) => actions,
  readOnly = false,
  ref = null,
  required = false,
  size = "medium" /* Medium */,
  title = "",
  type = "text",
  value = ""
}) => {
  const actionsRef = (0, import_react26.useRef)(null);
  const [sourcePadding, setSourcePadding] = (0, import_react26.useState)(0);
  const inputTextClassName = (0, import_ids_core21.createCssClassNames)({
    "ids-input-text": true,
    [className]: true
  });
  const componentOnBlur = (event) => {
    onBlur(event);
  };
  const componentOnChange = (event) => {
    onChange(event.target.value, event);
  };
  const componentOnFocus = (event) => {
    onFocus(event);
  };
  const componentOnInput = (event) => {
    onInput(event);
  };
  const actions = (0, import_react26.useMemo)(() => {
    const baseActions = [];
    if (value) {
      baseActions.push({
        component: /* @__PURE__ */ import_react26.default.createElement(
          ClearBtn,
          {
            disabled,
            onClick: () => {
              onChange("");
            }
          }
        ),
        id: "clear"
      });
    }
    return processActions(baseActions);
  }, [disabled, onChange, processActions, value]);
  const renderActions = () => {
    if (actions.length === 0) {
      return null;
    }
    return /* @__PURE__ */ import_react26.default.createElement("div", { className: "ids-input-text__actions", ref: actionsRef }, actions.map((action) => /* @__PURE__ */ import_react26.default.createElement("div", { className: "ids-input-text__action", key: action.id }, action.component)));
  };
  (0, import_react26.useLayoutEffect)(() => {
    const actionsWidth = actionsRef.current?.offsetWidth ?? 0;
    setSourcePadding(actionsWidth);
  }, [value]);
  return /* @__PURE__ */ import_react26.default.createElement("div", { className: inputTextClassName }, /* @__PURE__ */ import_react26.default.createElement("div", { className: "ids-input-text__source" }, /* @__PURE__ */ import_react26.default.createElement(
    BaseInput,
    {
      disabled,
      error,
      extraInputAttrs: {
        onBlur: componentOnBlur,
        onChange: componentOnChange,
        onFocus: componentOnFocus,
        onInput: componentOnInput,
        placeholder,
        readOnly,
        style: { paddingRight: `${sourcePadding}px` },
        ...extraAria
      },
      id,
      name,
      ref,
      required,
      size,
      title,
      type,
      value
    }
  )), renderActions());
};
var InputTextInputStateful = withStateValue(InputTextInput);

// src/components/InputText/InputTextField/InputTextField.tsx
var import_ids_core22 = require("@ibexa/ids-core");
var InputTextField = ({
  className = "",
  helperText,
  helperTextExtra = {},
  id,
  input = {},
  label,
  labelExtra = {},
  name,
  onChange = () => void 0,
  onValidate = () => void 0,
  required = false,
  value = ""
}) => {
  const componentClassName = (0, import_ids_core22.createCssClassNames)({
    "ids-input-text-field": true,
    [className]: !!className
  });
  const validators = useInitValidators({ required });
  const { isValid, messages } = useValidateInput({ validators, value });
  const helperTextProps = {
    children: isValid ? helperText : messages.join(", "),
    type: isValid ? "default" /* Default */ : "error" /* Error */,
    ...helperTextExtra
  };
  const labelProps = {
    children: label,
    error: !isValid,
    htmlFor: id,
    required,
    ...labelExtra
  };
  const inputProps = {
    ...input,
    error: !isValid,
    id,
    name,
    onChange,
    value
  };
  (0, import_react27.useEffect)(() => {
    onValidate(isValid, messages);
  }, [isValid, messages, onValidate]);
  return /* @__PURE__ */ import_react27.default.createElement(BaseField, { className: componentClassName, helperText: helperTextProps, label: labelProps, type: "input-text" }, /* @__PURE__ */ import_react27.default.createElement(InputTextInput, { ...inputProps }));
};
var InputTextFieldStateful = withStateValue(InputTextField);

// src/partials/BaseDropdown/components/Search/Search.tsx
var Search = ({ isVisible, setSearchTerm, searchRef, searchTerm }) => {
  const Translator = (0, import_react28.useContext)(TranslatorContext);
  if (!isVisible) {
    return null;
  }
  const placeholderText = Translator.trans(
    /*@Desc("Search...")*/
    "ids.dropdown.search.placeholder"
  );
  return /* @__PURE__ */ import_react28.default.createElement("div", { className: "ids-dropdown__search" }, /* @__PURE__ */ import_react28.default.createElement(
    InputTextInput,
    {
      name: "dropdown-search",
      onChange: setSearchTerm,
      placeholder: placeholderText,
      ref: searchRef,
      size: "small" /* Small */,
      value: searchTerm
    }
  ));
};

// src/partials/BaseDropdown/components/ItemsContainer/ItemsContainer.tsx
var import_ids_core23 = require("@ibexa/ids-core");

// src/hooks/useKeyEvent.ts
var import_react29 = __toESM(require_react());
var useKeyDown = (key, callback, node) => {
  (0, import_react29.useEffect)(() => {
    const listenerElement = node ?? window;
    const handleKeyDown = (event) => {
      if (event instanceof KeyboardEvent && key.includes(event.key)) {
        callback(event);
      }
    };
    listenerElement.addEventListener("keydown", handleKeyDown);
    return () => {
      listenerElement.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
};

// src/partials/BaseDropdown/components/ItemsContainer/ItemsContainer.tsx
var ItemsContainer = ({
  closeDropdown,
  filterFunction,
  getItemAttributes,
  getNextFocusableItem: getNextFocusableItem2,
  isItemSelected,
  isOpen,
  items,
  maxVisibleItems,
  onDropdownItemClick,
  referenceElement,
  renderItem
}) => {
  const searchRef = (0, import_react30.useRef)(null);
  const itemsRef = (0, import_react30.useRef)(null);
  const originalItemsMaxHeightRef = (0, import_react30.useRef)(0);
  const [isTopPlacementForced, setIsTopPlacementForced] = (0, import_react30.useState)(false);
  const [searchTerm, setSearchTerm] = (0, import_react30.useState)("");
  const [popperElement, setPopperElement] = (0, import_react30.useState)(null);
  const [itemsContainerWidth, setItemsContainerWidth] = (0, import_react30.useState)(0);
  const [itemsMaxHeight, setItemsMaxHeight] = (0, import_react30.useState)(0);
  const { floatingStyles, placement } = (0, import_react31.useFloating)({
    elements: {
      floating: popperElement,
      reference: referenceElement
    },
    placement: isTopPlacementForced ? "top-start" : "bottom-start",
    strategy: "fixed",
    whileElementsMounted: import_react31.autoUpdate
  });
  const hasSearchInput = items.length > maxVisibleItems;
  const filteredItems = (0, import_react30.useMemo)(() => {
    if (!searchTerm) {
      return items;
    }
    return items.filter((item) => filterFunction(item, searchTerm));
  }, [items, searchTerm, filterFunction]);
  const onItemClick = (item) => {
    onDropdownItemClick(item, {
      closeDropdown
    });
  };
  const itemsContainerStyles = {
    ...floatingStyles,
    width: itemsContainerWidth ? `${itemsContainerWidth}px` : "auto"
  };
  const getItemsStyles = () => {
    const itemsStyles = {
      "--max-visible-items": maxVisibleItems
    };
    if (itemsMaxHeight) {
      itemsStyles.maxHeight = `${itemsMaxHeight}px`;
    }
    return itemsStyles;
  };
  const popperPlacement = placement === "top-start" ? "top" : "bottom";
  const calculateMaxAvailableItemsHeight = (0, import_react30.useCallback)(
    (availableHeight) => {
      if (!isOpen || !popperElement || !itemsRef.current) {
        return 0;
      }
      const { marginTop: itemsMarginTop, marginBottom: itemsMarginBottom } = window.getComputedStyle(popperElement);
      const { top: itemsContainerTop, bottom: itemsContainerBottom } = popperElement.getBoundingClientRect();
      const { top: itemsTop, bottom: itemsBottom } = itemsRef.current.getBoundingClientRect();
      const topHeight = parseInt(itemsMarginTop, 10) + (itemsTop - itemsContainerTop);
      const bottomHeight = parseInt(itemsMarginBottom, 10) + (itemsContainerBottom - itemsBottom);
      const calculatedAvailableHeight = availableHeight - topHeight - bottomHeight;
      return calculatedAvailableHeight;
    },
    [popperElement, isOpen]
  );
  const moveActiveFocus = (event, direction) => {
    if (isOpen) {
      event.preventDefault();
      const { activeElement } = window.document;
      if (activeElement instanceof HTMLElement && itemsRef.current instanceof HTMLUListElement) {
        const nextElement = getNextFocusableItem2(activeElement, direction, {
          itemsList: itemsRef.current,
          search: searchRef.current
        });
        if (nextElement) {
          nextElement.focus();
        }
      }
    }
  };
  (0, import_react30.useEffect)(() => {
    const clickOutsideHandler = (event) => {
      if (event.target instanceof Node && !popperElement?.contains(event.target) && !referenceElement?.contains(event.target)) {
        closeDropdown();
      }
    };
    if (isOpen) {
      setSearchTerm("");
      searchRef.current?.focus();
      window.document.body.addEventListener("click", clickOutsideHandler);
      return () => {
        window.document.body.removeEventListener("click", clickOutsideHandler);
      };
    }
  }, [isOpen, popperElement, referenceElement]);
  (0, import_react30.useLayoutEffect)(() => {
    if (isOpen && referenceElement) {
      setItemsContainerWidth(referenceElement.offsetWidth);
      originalItemsMaxHeightRef.current = itemsRef.current?.offsetHeight ?? 0;
    } else {
      setItemsMaxHeight(0);
    }
  }, [isOpen, referenceElement]);
  (0, import_react30.useLayoutEffect)(() => {
    if (floatingStyles.transform && referenceElement) {
      const getAvailableHeight = () => {
        if (popperPlacement === "bottom") {
          const { innerHeight: windowHeight } = window;
          const { bottom: dropdownBottom } = referenceElement.getBoundingClientRect();
          return windowHeight - dropdownBottom;
        }
        return referenceElement.getBoundingClientRect().top;
      };
      const availableHeight = getAvailableHeight();
      const availableItemsHeight = calculateMaxAvailableItemsHeight(availableHeight);
      const originalDropdownFitsInViewport = availableItemsHeight > originalItemsMaxHeightRef.current;
      if (originalDropdownFitsInViewport) {
        setItemsMaxHeight(0);
      } else {
        setItemsMaxHeight(availableItemsHeight);
      }
    }
  }, [floatingStyles.transform, popperPlacement, referenceElement]);
  (0, import_react30.useLayoutEffect)(() => {
    if (isOpen && referenceElement) {
      const { top: referenceTop, bottom: referenceBottom } = referenceElement.getBoundingClientRect();
      const { innerHeight: windowHeight } = window;
      if (referenceBottom < 0 || referenceTop > windowHeight) {
        closeDropdown();
        return;
      }
      const availableSpaceAbove = referenceTop;
      const availableSpaceBelow = windowHeight - referenceBottom;
      const originalDropdownFitsInViewport = availableSpaceBelow > originalItemsMaxHeightRef.current;
      const moreSpaceAbove = availableSpaceAbove > availableSpaceBelow;
      const showDropdownAbove = moreSpaceAbove && !originalDropdownFitsInViewport;
      setIsTopPlacementForced(showDropdownAbove);
    }
  }, [isOpen, referenceElement, floatingStyles.transform]);
  useKeyDown(
    ["Enter", " "],
    (event) => {
      const { activeElement } = window.document;
      if (isOpen && activeElement?.classList.contains("ids-dropdown__item") && activeElement instanceof HTMLElement) {
        event.preventDefault();
        activeElement.click();
      }
    },
    popperElement
  );
  useKeyDown(
    ["Escape"],
    () => {
      if (isOpen) {
        closeDropdown();
        referenceElement?.focus();
      }
    },
    popperElement
  );
  useKeyDown(
    ["ArrowDown", "Tab"],
    (event) => {
      moveActiveFocus(event, "down" /* Down */);
    },
    popperElement
  );
  useKeyDown(
    ["ArrowUp"],
    (event) => {
      moveActiveFocus(event, "up" /* Up */);
    },
    popperElement
  );
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ import_react30.default.createElement("div", { className: "ids-dropdown__items-container", ref: setPopperElement, style: itemsContainerStyles }, /* @__PURE__ */ import_react30.default.createElement(Search, { isVisible: hasSearchInput, searchRef, searchTerm, setSearchTerm }), /* @__PURE__ */ import_react30.default.createElement("ul", { className: "ids-dropdown__items", ref: itemsRef, style: getItemsStyles() }, filteredItems.map((item, index) => {
    const dropdownItemClassName = (0, import_ids_core23.createCssClassNames)({
      "ids-dropdown__item": true,
      "ids-dropdown__item--selected": isItemSelected(item)
    });
    return /* @__PURE__ */ import_react30.default.createElement(
      "li",
      {
        className: dropdownItemClassName,
        key: item.id,
        onClick: () => {
          onItemClick(item);
        },
        ref: (node) => {
          if (index === 0 && !hasSearchInput && node) {
            node.focus();
          }
        },
        role: "button",
        tabIndex: 0,
        ...getItemAttributes(item)
      },
      renderItem(item)
    );
  })));
};

// src/partials/BaseDropdown/BaseDropdown.tsx
var import_ids_core24 = require("@ibexa/ids-core");
var MAX_VISIBLE_ITEMS = 10;
var BaseDropdown = ({
  children,
  isEmpty = true,
  isItemSelected,
  items,
  disabled = false,
  error = false,
  filterFunction = (item, searchTerm) => item.label.toLowerCase().includes(searchTerm.toLowerCase()),
  getItemAttributes = () => ({}),
  getNextFocusableItem: getNextFocusableItem2 = () => null,
  maxVisibleItems = MAX_VISIBLE_ITEMS,
  onDropdownItemClick,
  renderEmptySelectionInfo,
  renderItem = (item) => item.label,
  renderSelectedItems = () => null,
  renderSource = () => null,
  className = ""
}) => {
  const Translator = (0, import_react32.useContext)(TranslatorContext);
  const [referenceElement, setReferenceElement] = (0, import_react32.useState)(null);
  const [isOpen, setIsOpen] = (0, import_react32.useState)(false);
  const dropdownClassName = (0, import_ids_core24.createCssClassNames)({
    "ids-dropdown": true,
    "ids-dropdown--disabled": disabled,
    "ids-dropdown--error": error,
    [className]: !!className
  });
  const dropdownWidgetClassName = (0, import_ids_core24.createCssClassNames)({
    "ids-dropdown__widget ids-input": true,
    "ids-input--disabled": disabled,
    "ids-input--error": error
  });
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const renderSelectionInfo = () => {
    if (children) {
      return children;
    }
    if (isEmpty) {
      if (renderEmptySelectionInfo) {
        return renderEmptySelectionInfo();
      }
      const placeholder = Translator.trans(
        /*@Desc("Select an item")*/
        "ids.dropdown.placeholder"
      );
      return /* @__PURE__ */ import_react32.default.createElement("div", { className: "ids-dropdown__placeholder" }, placeholder);
    }
    return /* @__PURE__ */ import_react32.default.createElement("div", { className: "ids-dropdown__selection-info-items" }, renderSelectedItems());
  };
  useKeyDown(
    ["Enter", " "],
    (event) => {
      const { activeElement } = window.document;
      if (activeElement === referenceElement) {
        event.preventDefault();
        toggleDropdown();
      }
    },
    referenceElement
  );
  return /* @__PURE__ */ import_react32.default.createElement("div", { className: dropdownClassName }, /* @__PURE__ */ import_react32.default.createElement("div", { className: "ids-dropdown__source" }, renderSource()), /* @__PURE__ */ import_react32.default.createElement("div", { className: dropdownWidgetClassName, onClick: toggleDropdown, ref: setReferenceElement, role: "button", tabIndex: 0 }, /* @__PURE__ */ import_react32.default.createElement("div", { className: "ids-dropdown__selection-info" }, renderSelectionInfo()), /* @__PURE__ */ import_react32.default.createElement("div", { className: "ids-dropdown__expander" }, /* @__PURE__ */ import_react32.default.createElement(Expander, { isExpanded: isOpen, isFocusable: false, onClick: toggleDropdown, type: "chevron" /* Chevron */ }))), /* @__PURE__ */ import_react32.default.createElement(
    ItemsContainer,
    {
      closeDropdown: () => {
        setIsOpen(false);
      },
      filterFunction,
      getItemAttributes,
      getNextFocusableItem: getNextFocusableItem2,
      isItemSelected,
      isOpen,
      items,
      maxVisibleItems,
      onDropdownItemClick,
      referenceElement,
      renderItem
    }
  ));
};

// src/components/Dropdown/utils/focus.ts
var getNextFocusableItem = (getFocusableElements, element, direction, extraParams) => {
  const focusableElements = getFocusableElements(extraParams);
  const focusedItemIndex = focusableElements.findIndex((el) => el === element);
  if (direction === "down" /* Down */) {
    const nextElement = focusableElements[focusedItemIndex + 1];
    return nextElement instanceof HTMLElement ? nextElement : element;
  }
  const prevElement = focusableElements[focusedItemIndex - 1];
  return prevElement instanceof HTMLElement ? prevElement : element;
};

// src/components/Dropdown/DropdownSingleInput/DropdownSingleInput.tsx
var import_ids_core25 = require("@ibexa/ids-core");
var DropdownSingleInput = ({
  name,
  className = "",
  items = [],
  onChange = () => void 0,
  value = "",
  ...restProps
}) => {
  const dropdownClassName = (0, import_ids_core25.createCssClassNames)({
    "ids-dropdown--single": true,
    [className]: !!className
  });
  const clickDropdownItem = ({ id }, { closeDropdown }) => {
    onChange(id);
    closeDropdown();
  };
  const selectedItem = value ? items.find((item) => item.id === value) : null;
  const isItemSelected = (item) => item.id === value;
  const renderItem = (item) => {
    return /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, item.label, isItemSelected(item) && /* @__PURE__ */ import_react33.default.createElement(Icon, { name: "check-circle", size: "tiny-small" /* TinySmall */ }));
  };
  const renderSource = () => {
    return /* @__PURE__ */ import_react33.default.createElement("select", { defaultValue: value, name, tabIndex: -1 }, items.map((item) => /* @__PURE__ */ import_react33.default.createElement("option", { key: item.id, value: item.id }, item.label)));
  };
  const getFocusableElements = ({ itemsList, search }) => {
    const focusableElements = [
      ...search ? [search] : [],
      ...Array.from(itemsList.children).filter((child) => !child.classList.contains("ids-dropdown__item--selected"))
    ];
    return focusableElements.filter((element) => element instanceof HTMLElement);
  };
  return /* @__PURE__ */ import_react33.default.createElement(
    BaseDropdown,
    {
      ...restProps,
      className: dropdownClassName,
      getNextFocusableItem: getNextFocusableItem.bind(null, getFocusableElements),
      isEmpty: !selectedItem,
      isItemSelected,
      items,
      onDropdownItemClick: clickDropdownItem,
      renderItem,
      renderSelectedItems: () => selectedItem?.label ?? "",
      renderSource
    }
  );
};
var DropdownSingleInputStateful = withStateValue(DropdownSingleInput);

// src/components/Dropdown/DropdownMultiInput/DropdownMultiInput.tsx
var import_react37 = __toESM(require_react());

// src/components/Chip/Chip.tsx
var import_react34 = __toESM(require_react());
var import_ids_core26 = require("@ibexa/ids-core");
var Chip = ({ children, className = "", disabled = false, error = false, isDeletable = true, onDelete }) => {
  const Translator = (0, import_react34.useContext)(TranslatorContext);
  const deleteMsg = Translator.trans(
    /*@Desc("Delete")*/
    "ibexa.chip.delete-btn.label"
  );
  const componentClassName = (0, import_ids_core26.createCssClassNames)({
    "ids-chip": true,
    "ids-chip--disabled": disabled,
    "ids-chip--error": error,
    [className]: !!className
  });
  const handleDeleteClick = (event) => {
    if (onDelete) {
      onDelete(event);
    }
  };
  const renderDeleteButton = () => {
    if (!isDeletable) {
      return null;
    }
    return /* @__PURE__ */ import_react34.default.createElement(
      Button,
      {
        "aria-label": deleteMsg,
        className: "ids-chip__delete",
        disabled,
        icon: "discard",
        isFocusable: true,
        onClick: handleDeleteClick,
        size: "small" /* Small */,
        type: "tertiary-alt" /* TertiaryAlt */
      }
    );
  };
  return /* @__PURE__ */ import_react34.default.createElement("div", { "aria-disabled": disabled, className: componentClassName, tabIndex: disabled ? -1 : 0 }, /* @__PURE__ */ import_react34.default.createElement("div", { className: "ids-chip__content" }, children), renderDeleteButton());
};

// src/components/OverflowList/OverflowList.tsx
var import_react36 = __toESM(require_react());
var import_ids_core27 = require("@ibexa/ids-core");

// src/hooks/useDebounce.ts
var import_react35 = __toESM(require_react());
var useDebounce = (delay) => {
  const timeoutRef = (0, import_react35.useRef)(null);
  (0, import_react35.useEffect)(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  });
  return (0, import_react35.useCallback)(
    (callback) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback();
      }, delay);
    },
    [delay]
  );
};

// src/components/OverflowList/OverflowList.tsx
var RESIZE_TIMEOUT = 200;
var OverflowList = ({
  className = "",
  items = [],
  renderItem,
  renderMore
}) => {
  const listRef = (0, import_react36.useRef)(null);
  const itemsRef = (0, import_react36.useRef)(null);
  const [itemsWidth, setItemsWidth] = (0, import_react36.useState)(0);
  const [currentAction, setCurrentAction] = (0, import_react36.useState)("none" /* None */);
  const [numberOfVisibleItems, setNumberOfVisibleItems] = (0, import_react36.useState)(items.length);
  const debounce = useDebounce(RESIZE_TIMEOUT);
  const componentClassName = (0, import_ids_core27.createCssClassNames)({
    "ids-overflow-list": true,
    [className]: !!className
  });
  const recalculateVisibleItems = () => {
    if (!itemsRef.current) {
      return;
    }
    const itemsNodes = Array.from(itemsRef.current.children);
    const { right: listRightPosition } = itemsRef.current.getBoundingClientRect();
    const newNumberOfVisibleItems = itemsNodes.findIndex((itemNode) => {
      const { right: itemRightPosition } = itemNode.getBoundingClientRect();
      return itemRightPosition > listRightPosition;
    });
    if (newNumberOfVisibleItems === -1 || newNumberOfVisibleItems === items.length) {
      return true;
    }
    if (newNumberOfVisibleItems === numberOfVisibleItems) {
      setNumberOfVisibleItems(newNumberOfVisibleItems - 1);
    } else {
      setNumberOfVisibleItems(newNumberOfVisibleItems);
    }
    return false;
  };
  const listResizeObserver = (0, import_react36.useMemo)(
    () => new ResizeObserver(() => {
      debounce(() => {
        setItemsWidth(listRef.current?.offsetWidth ?? 0);
        setNumberOfVisibleItems(items.length);
        setCurrentAction("calculate-items" /* CalculateItems */);
      });
    }),
    [items.length, debounce]
  );
  const renderItems = () => {
    return items.slice(0, numberOfVisibleItems).map((item) => renderItem(item));
  };
  const renderOverflow = () => {
    const hiddenCount = items.length - numberOfVisibleItems;
    if (hiddenCount > 0) {
      return renderMore({ hiddenCount });
    }
  };
  (0, import_react36.useLayoutEffect)(() => {
    if (currentAction === "calculate-items" /* CalculateItems */) {
      const stopRecalculating = recalculateVisibleItems();
      if (stopRecalculating) {
        setCurrentAction("none" /* None */);
      }
    }
  }, [currentAction, numberOfVisibleItems]);
  (0, import_react36.useLayoutEffect)(() => {
    if (listRef.current) {
      setItemsWidth(listRef.current.offsetWidth);
    }
  }, []);
  (0, import_react36.useEffect)(() => {
    if (currentAction === "none" /* None */) {
      setNumberOfVisibleItems(items.length);
      setCurrentAction("calculate-items" /* CalculateItems */);
    }
  }, [items]);
  (0, import_react36.useEffect)(() => {
    if (listRef.current) {
      listResizeObserver.observe(listRef.current);
    }
    return () => {
      listResizeObserver.disconnect();
    };
  }, []);
  return /* @__PURE__ */ import_react36.default.createElement("div", { className: componentClassName, ref: listRef }, /* @__PURE__ */ import_react36.default.createElement("div", { className: "ids-overflow-list__items", ref: itemsRef, style: { width: `${itemsWidth}px` } }, renderItems(), renderOverflow()));
};

// src/components/Dropdown/DropdownMultiInput/DropdownMultiInput.tsx
var import_ids_core28 = require("@ibexa/ids-core");

// src/components/Dropdown/DropdownMultiInput/DropdownMultiInput.types.ts
var DropdownMultiInputAction = /* @__PURE__ */ ((DropdownMultiInputAction2) => {
  DropdownMultiInputAction2["Check"] = "check";
  DropdownMultiInputAction2["Uncheck"] = "uncheck";
  return DropdownMultiInputAction2;
})(DropdownMultiInputAction || {});

// src/components/Dropdown/DropdownMultiInput/DropdownMultiInput.tsx
var DropdownMultiInput = ({
  name,
  className = "",
  items = [],
  onChange = () => void 0,
  value = [],
  ...restProps
}) => {
  const dropdownClassName = (0, import_ids_core28.createCssClassNames)({
    "ids-dropdown--multi": true,
    [className]: !!className
  });
  const changeValue = (id) => {
    const oldValueLength = value.length;
    const newValue = value.includes(id) ? value.filter((val) => val !== id) : [...value, id];
    const actionPerformed = newValue.length > oldValueLength ? "check" /* Check */ : "uncheck" /* Uncheck */;
    onChange(newValue, id, actionPerformed);
  };
  const clickDropdownItem = ({ id }) => {
    changeValue(id);
  };
  const getItemAttributes = () => {
    return {
      role: void 0,
      tabIndex: void 0
    };
  };
  const isItemSelected = (item) => value.includes(item.id);
  const renderItem = (item) => {
    return /* @__PURE__ */ import_react37.default.createElement(import_react37.default.Fragment, null, /* @__PURE__ */ import_react37.default.createElement(CheckboxInput, { checked: isItemSelected(item), name: `${name}-checkbox`, value: item.id }), item.label);
  };
  const selectedItems = value.length ? items.filter((item) => value.includes(item.id)) : [];
  const renderSelectedItems = () => /* @__PURE__ */ import_react37.default.createElement(
    OverflowList,
    {
      items: selectedItems,
      renderItem: (item) => /* @__PURE__ */ import_react37.default.createElement(
        Chip,
        {
          key: item.id,
          onDelete: () => {
            changeValue(item.id);
          }
        },
        item.label
      ),
      renderMore: ({ hiddenCount }) => /* @__PURE__ */ import_react37.default.createElement(Chip, { isDeletable: false }, "+", hiddenCount)
    }
  );
  const renderSource = () => {
    return /* @__PURE__ */ import_react37.default.createElement("select", { defaultValue: value, multiple: true, name, tabIndex: -1 }, items.map((item) => /* @__PURE__ */ import_react37.default.createElement("option", { key: item.id, value: item.id }, item.label)));
  };
  const getFocusableElements = ({ itemsList, search }) => {
    const focusableElements = [
      ...search instanceof HTMLElement ? [search] : [],
      ...Array.from(itemsList.children).reduce((acc, child) => {
        if (child instanceof HTMLElement) {
          const checkbox = child.querySelector(".ids-input--checkbox");
          if (checkbox instanceof HTMLElement && !checkbox.classList.contains("ids-input--disabled")) {
            acc.push(checkbox);
          }
        }
        return acc;
      }, [])
    ];
    return focusableElements;
  };
  return /* @__PURE__ */ import_react37.default.createElement(
    BaseDropdown,
    {
      ...restProps,
      className: dropdownClassName,
      getItemAttributes,
      getNextFocusableItem: getNextFocusableItem.bind(null, getFocusableElements),
      isEmpty: selectedItems.length === 0,
      isItemSelected,
      items,
      onDropdownItemClick: clickDropdownItem,
      renderItem,
      renderSelectedItems,
      renderSource
    }
  );
};
var DropdownMultiInputStateful = withStateValue(DropdownMultiInput);

// src/components/RadioButton/RadioButtonField/RadioButtonField.tsx
var import_react39 = __toESM(require_react());

// src/components/RadioButton/RadioButtonInput/RadioButtonInput.tsx
var import_react38 = __toESM(require_react());
var import_ids_core29 = require("@ibexa/ids-core");
var RadioButtonInput = ({ className = "", ...restProps }) => {
  const radioButtonClassName = (0, import_ids_core29.createCssClassNames)({
    "ids-radio-button": true,
    [className]: true
  });
  return /* @__PURE__ */ import_react38.default.createElement(BaseChoiceInput, { ...restProps, className: radioButtonClassName, type: "radio" });
};
var RadioButtonInputStateful = withStateChecked(RadioButtonInput);

// src/components/RadioButton/RadioButtonField/RadioButtonField.tsx
var import_ids_core30 = require("@ibexa/ids-core");
var RadioButtonField = ({
  className = "",
  inputWrapperClassName = "",
  label,
  labelClassName = "",
  ...inputProps
}) => {
  const fieldClassName = (0, import_ids_core30.createCssClassNames)({
    "ids-radio-button-field": true,
    [className]: !!className
  });
  const renderInput = (0, import_react39.useCallback)(() => {
    return /* @__PURE__ */ import_react39.default.createElement(RadioButtonInput, { ...inputProps });
  }, [inputProps]);
  return /* @__PURE__ */ import_react39.default.createElement(
    BaseChoiceInputField,
    {
      className: fieldClassName,
      disabled: inputProps.disabled,
      error: inputProps.error,
      id: inputProps.id,
      inputWrapperClassName,
      labelClassName,
      renderInput
    },
    label
  );
};
var RadioButtonFieldStateful = withStateChecked(RadioButtonField);

// src/components/RadioButton/RadioButtonsListField/RadioButtonsListField.tsx
var import_react40 = __toESM(require_react());
var import_ids_core31 = require("@ibexa/ids-core");
var RadioButtonsListField = ({
  className = "",
  direction = "vertical" /* Vertical */,
  helperText,
  helperTextExtra = {},
  id,
  items,
  label,
  labelExtra = {},
  name,
  onChange = () => void 0,
  required = false,
  value = ""
}) => {
  const componentClassName = (0, import_ids_core31.createCssClassNames)({
    "ids-radio-buttons-list-field": true,
    [className]: !!className
  });
  const helperTextProps = {
    children: helperText,
    type: "default" /* Default */,
    ...helperTextExtra
  };
  const labelProps = {
    children: label,
    error: false,
    htmlFor: id,
    required,
    ...labelExtra
  };
  const renderItem = (item) => {
    return /* @__PURE__ */ import_react40.default.createElement(
      RadioButtonField,
      {
        ...item,
        checked: item.value === value,
        name,
        onChange: (...args) => {
          onChange(item.value);
          item.onChange?.(...args);
        }
      }
    );
  };
  return /* @__PURE__ */ import_react40.default.createElement(
    BaseInputsList,
    {
      className: componentClassName,
      direction,
      helperTextProps,
      items,
      labelProps,
      renderItem
    }
  );
};
var RadioButtonsListFieldStateful = withStateValue(RadioButtonsListField);

// src/components/Tag/Tag.tsx
var import_react41 = __toESM(require_react());
var import_ids_core32 = require("@ibexa/ids-core");

// src/components/Tag/Tag.types.ts
var TagSize = /* @__PURE__ */ ((TagSize2) => {
  TagSize2["Medium"] = "medium";
  TagSize2["Small"] = "small";
  return TagSize2;
})(TagSize || {});
var TagGhostType = /* @__PURE__ */ ((TagGhostType2) => {
  TagGhostType2["SuccessGhost"] = "success-ghost";
  TagGhostType2["ErrorGhost"] = "error-ghost";
  TagGhostType2["NeutralGhost"] = "neutral-ghost";
  return TagGhostType2;
})(TagGhostType || {});
var TagType = /* @__PURE__ */ ((TagType3) => {
  TagType3["Primary"] = "primary";
  TagType3["PrimaryAlt"] = "primary-alt";
  TagType3["Success"] = "success";
  TagType3["Info"] = "info";
  TagType3["Warning"] = "warning";
  TagType3["Error"] = "error";
  TagType3["Neutral"] = "neutral";
  TagType3["IconTag"] = "icon-tag";
  return TagType3;
})(TagType || {});

// src/components/Tag/Tag.tsx
var Tag = ({ children, className = "", isDark = false, icon, size = "medium" /* Medium */, type }) => {
  const isGhostType = (tagType) => {
    return Object.values(TagGhostType).includes(tagType);
  };
  const isGhost = isGhostType(type);
  const componentClassName = (0, import_ids_core32.createCssClassNames)({
    "ids-tag": true,
    [`ids-tag--${type}`]: true,
    [`ids-tag--${size}`]: true,
    [`ids-tag--dark`]: isDark,
    [className]: !!className
  });
  const renderDot = () => {
    if (isGhost) {
      return /* @__PURE__ */ import_react41.default.createElement("div", { className: "ids-tag__ghost-dot" });
    }
    return null;
  };
  const renderIcon = () => {
    if (icon) {
      return /* @__PURE__ */ import_react41.default.createElement("div", { className: "ids-tag__icon" }, /* @__PURE__ */ import_react41.default.createElement(Icon, { name: icon, size: "small" /* Small */ }));
    }
    return null;
  };
  return /* @__PURE__ */ import_react41.default.createElement("div", { className: componentClassName }, renderDot(), renderIcon(), /* @__PURE__ */ import_react41.default.createElement("div", { className: "ids-tag__content" }, children));
};

// src/components/ToggleButton/ToggleButtonField/ToggleButtonField.tsx
var import_react43 = __toESM(require_react());

// src/components/ToggleButton/ToggleButtonInput/ToggleButtonInput.tsx
var import_react42 = __toESM(require_react());
var import_ids_core33 = require("@ibexa/ids-core");

// src/components/ToggleButton/ToggleButtonInput/ToggleButtonInput.types.ts
var ToggleButtonInputSize = /* @__PURE__ */ ((ToggleButtonInputSize2) => {
  ToggleButtonInputSize2["Small"] = "small";
  ToggleButtonInputSize2["Medium"] = "medium";
  return ToggleButtonInputSize2;
})(ToggleButtonInputSize || {});

// src/components/ToggleButton/ToggleButtonInput/ToggleButtonInput.tsx
var ToggleButtonInput = ({
  className = "",
  offLabel,
  onLabel,
  size = "medium" /* Medium */,
  title = "",
  ...inputProps
}) => {
  const {
    checked = false,
    disabled = false,
    id,
    onBlur = () => void 0,
    onChange = () => void 0,
    onFocus = () => void 0,
    onInput = () => void 0
  } = inputProps;
  const Translator = (0, import_react42.useContext)(TranslatorContext);
  const componentId = useGetOrCreateId(id);
  const inputRef = (0, import_react42.useRef)(null);
  const [isFocused, setIsFocused] = (0, import_react42.useState)(false);
  const toggleClassName = (0, import_ids_core33.createCssClassNames)({
    "ids-toggle": true,
    [`ids-toggle--${size}`]: true,
    "ids-toggle--checked": checked,
    "ids-toggle--disabled": disabled,
    "ids-toggle--focused": isFocused,
    [className]: !!className
  });
  const onTogglerClick = () => {
    inputRef.current?.focus();
    onChange(!checked);
  };
  const onInputFocus = (event) => {
    setIsFocused(true);
    onFocus(event);
  };
  const onInputBlur = (event) => {
    setIsFocused(false);
    onBlur(event);
  };
  const getLabel = () => {
    const defaultOnLabel = Translator.trans(
      /*@Desc("On")*/
      "ids.toggle.label.on"
    );
    const defaultOffLabel = Translator.trans(
      /*@Desc("Off")*/
      "ids.toggle.label.off"
    );
    if (checked) {
      return onLabel ?? defaultOnLabel;
    }
    return offLabel ?? defaultOffLabel;
  };
  return /* @__PURE__ */ import_react42.default.createElement("div", { className: toggleClassName, title }, /* @__PURE__ */ import_react42.default.createElement("div", { className: "ids-toggle__source" }, /* @__PURE__ */ import_react42.default.createElement(
    BaseChoiceInput,
    {
      ...inputProps,
      id: componentId,
      onBlur: onInputBlur,
      onChange,
      onFocus: onInputFocus,
      onInput,
      ref: (node) => {
        inputRef.current = node;
        if (typeof inputProps.ref === "function") {
          inputProps.ref(node);
        } else if (inputProps.ref) {
          inputProps.ref.current = node;
        }
      },
      type: "checkbox"
    }
  )), /* @__PURE__ */ import_react42.default.createElement("div", { className: "ids-toggle__widget", onClick: onTogglerClick, role: "button" }, /* @__PURE__ */ import_react42.default.createElement("div", { className: "ids-toggle__indicator" })), /* @__PURE__ */ import_react42.default.createElement(ChoiceInputLabel, { className: "ids-toggle__label", htmlFor: componentId, title }, getLabel()));
};
var ToggleButtonInputStateful = withStateChecked(ToggleButtonInput);

// src/components/ToggleButton/ToggleButtonField/ToggleButtonField.tsx
var import_ids_core34 = require("@ibexa/ids-core");
var ToggleButtonField = ({
  checked = false,
  className = "",
  helperText,
  helperTextExtra = {},
  id,
  input = {},
  label,
  labelExtra = {},
  name,
  onChange = () => void 0,
  required = false
}) => {
  const toggleClassName = (0, import_ids_core34.createCssClassNames)({
    "ids-toggle-field": true,
    [className]: !!className
  });
  const helperTextProps = {
    children: helperText,
    type: "default" /* Default */,
    ...helperTextExtra
  };
  const labelProps = {
    children: label,
    required,
    ...labelExtra
  };
  const inputProps = {
    ...input,
    checked,
    id,
    name,
    onChange
  };
  return /* @__PURE__ */ import_react43.default.createElement(BaseField, { className: toggleClassName, helperText: helperTextProps, label: labelProps, type: "toggle" }, /* @__PURE__ */ import_react43.default.createElement(ToggleButtonInput, { ...inputProps }));
};
var ToggleButtonFieldStateful = withStateChecked(ToggleButtonField);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AltRadioInput,
  AltRadioInputStateful,
  AssetsContext,
  AssetsProvider,
  Autosave,
  AutosaveStatus,
  BASE_INPUT_TYPE_VALUES,
  Badge,
  BadgeSize,
  BadgeVariant,
  BaseChoiceInput,
  BaseChoiceInputField,
  BaseDropdown,
  BaseField,
  BaseInput,
  BaseInputsList,
  Button,
  ButtonSize,
  ButtonType,
  CheckboxField,
  CheckboxFieldStateful,
  CheckboxInput,
  CheckboxInputStateful,
  CheckboxesListField,
  CheckboxesListFieldAction,
  CheckboxesListFieldDirection,
  CheckboxesListFieldStateful,
  ChoiceInputLabel,
  Direction,
  DropdownMultiInput,
  DropdownMultiInputAction,
  DropdownMultiInputStateful,
  DropdownSingleInput,
  DropdownSingleInputStateful,
  Expander,
  ExpanderType,
  HelperText,
  HelperTextType,
  INPUT_CHOICE_TYPE_VALUES,
  INPUT_TEXT_TYPE_VALUES,
  Icon,
  IconSize,
  InputTextField,
  InputTextFieldSize,
  InputTextFieldStateful,
  InputTextInput,
  InputTextInputSize,
  InputTextInputStateful,
  Label,
  RadioButtonField,
  RadioButtonFieldStateful,
  RadioButtonInput,
  RadioButtonInputStateful,
  RadioButtonsListField,
  RadioButtonsListFieldDirection,
  RadioButtonsListFieldStateful,
  Tag,
  TagGhostType,
  TagSize,
  TagType,
  ToggleButtonField,
  ToggleButtonFieldSize,
  ToggleButtonFieldStateful,
  ToggleButtonInput,
  ToggleButtonInputSize,
  ToggleButtonInputStateful,
  TranslatorContext,
  TranslatorProvider,
  useGetOrCreateId,
  useKeyDown,
  validateInput,
  withStateChecked,
  withStateValue
});
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=index.js.map
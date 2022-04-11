// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kn9T2":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"786KC"}],"786KC":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-refresh-runtime.development.js');

},{"./cjs/react-refresh-runtime.development.js":"hdge7"}],"hdge7":[function(require,module,exports) {
/** @license React v0.9.0
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    var REACT_FRAGMENT_TYPE = 60107;
    var REACT_STRICT_MODE_TYPE = 60108;
    var REACT_PROFILER_TYPE = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    var REACT_SUSPENSE_TYPE = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
        if (signature.fullKey !== null) return signature.fullKey;
        var fullKey = signature.ownKey;
        var hooks;
        try {
            hooks = signature.getCustomHooks();
        } catch (err) {
            // This can happen in an edge case, e.g. if expression like Foo.useSomething
            // depends on Foo which is lazily initialized during rendering.
            // In that case just assume we'll have to remount.
            signature.forceReset = true;
            signature.fullKey = fullKey;
            return fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if (typeof hook !== 'function') {
                // Something's wrong. Assume we need to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            var nestedHookSignature = allSignaturesByType.get(hook);
            if (nestedHookSignature === undefined) continue;
            var nestedHookKey = computeFullKey(nestedHookSignature);
            if (nestedHookSignature.forceReset) signature.forceReset = true;
            fullKey += '\n---\n' + nestedHookKey;
        }
        signature.fullKey = fullKey;
        return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
        var prevSignature = allSignaturesByType.get(prevType);
        var nextSignature = allSignaturesByType.get(nextType);
        if (prevSignature === undefined && nextSignature === undefined) return true;
        if (prevSignature === undefined || nextSignature === undefined) return false;
        if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) return false;
        if (nextSignature.forceReset) return false;
        return true;
    }
    function isReactClass(type) {
        return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
        if (isReactClass(prevType) || isReactClass(nextType)) return false;
        if (haveEqualSignatures(prevType, nextType)) return true;
        return false;
    }
    function resolveFamily(type) {
        // Only check updated types to keep lookups fast.
        return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function performReactRefresh() {
        if (pendingUpdates.length === 0) return null;
        if (isPerformingRefresh) return null;
        isPerformingRefresh = true;
        try {
            var staleFamilies = new Set();
            var updatedFamilies = new Set();
            var updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0], nextType = _ref[1];
                // Now that we got a real edit, we can create associations
                // that will be read by the React reconciler.
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(nextType, family);
                family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                if (canPreserveStateBetween(prevType, nextType)) updatedFamilies.add(family);
                else staleFamilies.add(family);
            }); // TODO: rename these fields to something more meaningful.
            var update = {
                updatedFamilies: updatedFamilies,
                // Families that will re-render preserving state
                staleFamilies: staleFamilies // Families that will be remounted
            };
            helpersByRendererID.forEach(function(helpers) {
                // Even if there are no roots, set the handler on first update.
                // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = false;
            var firstError = null; // We snapshot maps and sets that are mutated during commits.
            // If we don't do this, there is a risk they will be mutated while
            // we iterate over them. For example, trying to recover a failed root
            // may cause another root to be added to the failed list -- an infinite loop.
            var failedRootsSnapshot = cloneSet(failedRoots);
            var mountedRootsSnapshot = cloneSet(mountedRoots);
            var helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                failedRoots.has(root);
                if (rootElements === null) return;
                if (!rootElements.has(root)) return;
                var element = rootElements.get(root);
                try {
                    helpers.scheduleRoot(root, element);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = false;
        }
    }
    function register(type, id) {
        if (type === null) return;
        if (typeof type !== 'function' && typeof type !== 'object') return;
         // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) return;
         // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
            family = {
                current: type
            };
            allFamiliesByID.set(id, family);
        } else pendingUpdates.push([
            family,
            type
        ]);
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
        if (typeof type === 'object' && type !== null) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                register(type.render, id + '$render');
                break;
            case REACT_MEMO_TYPE:
                register(type.type, id + '$type');
                break;
        }
    }
    function setSignature(type, key) {
        var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
        allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) computeFullKey(signature);
    }
    function getFamilyByID(id) {
        return allFamiliesByID.get(id);
    }
    function getFamilyByType(type) {
        return allFamiliesByType.get(type);
    }
    function findAffectedHostInstances(families) {
        var affectedInstances = new Set();
        mountedRoots.forEach(function(root) {
            var helpers = helpersByRoot.get(root);
            if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
            var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
            instancesForRoot.forEach(function(inst) {
                affectedInstances.add(inst);
            });
        });
        return affectedInstances;
    }
    function injectIntoGlobalHook(globalObject) {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
            // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
            // Note that in this case it's important that renderer code runs *after* this method call.
            // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: true,
                inject: function(injected) {
                    return nextID++;
                },
                onScheduleFiberRoot: function(id, root, children) {},
                onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {},
                onCommitFiberUnmount: function() {}
            };
        } // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function(injected) {
            var id = oldInject.apply(this, arguments);
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
            return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function(injected, id) {
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
        }); // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {};
        hook.onScheduleFiberRoot = function(id, root, children) {
            if (!isPerformingRefresh) {
                // If it was intentionally scheduled, don't attempt to restore.
                // This includes intentionally scheduled unmounts.
                failedRoots.delete(root);
                if (rootElements !== null) rootElements.set(root, children);
            }
            return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
            var helpers = helpersByRendererID.get(id);
            if (helpers === undefined) return;
            helpersByRoot.set(root, helpers);
            var current = root.current;
            var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
            // This logic is copy-pasted from similar logic in the DevTools backend.
            // If this breaks with some refactoring, you'll want to update DevTools too.
            if (alternate !== null) {
                var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
                var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                if (!wasMounted && isMounted) {
                    // Mount a new root.
                    mountedRoots.add(root);
                    failedRoots.delete(root);
                } else if (wasMounted && isMounted) ;
                else if (wasMounted && !isMounted) {
                    // Unmount an existing root.
                    mountedRoots.delete(root);
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                    else helpersByRoot.delete(root);
                } else if (!wasMounted && !isMounted) {
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                }
            } else // Mount a new root.
            mountedRoots.add(root);
            return oldOnCommitFiberRoot.apply(this, arguments);
        };
    }
    function hasUnrecoverableErrors() {
        // TODO: delete this after removing dependency in RN.
        return false;
    } // Exposed for testing.
    function _getMountedRootCount() {
        return mountedRoots.size;
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Second call triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* First call specifies the signature: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
        // We'll fill in the signature in two steps.
        // First, we'll know the signature itself. This happens outside the component.
        // Then, we'll know the references to custom Hooks. This happens inside the component.
        // After that, the returned function will be a fast path no-op.
        var status = 'needsSignature';
        var savedType;
        var hasCustomHooks;
        return function(type, key, forceReset, getCustomHooks) {
            switch(status){
                case 'needsSignature':
                    if (type !== undefined) {
                        // If we received an argument, this is the initial registration call.
                        savedType = type;
                        hasCustomHooks = typeof getCustomHooks === 'function';
                        setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.
                        status = 'needsCustomHooks';
                    }
                    break;
                case 'needsCustomHooks':
                    if (hasCustomHooks) collectCustomHooksForSignature(savedType);
                    status = 'resolved';
                    break;
            }
            return type;
        };
    }
    function isLikelyComponentType(type) {
        switch(typeof type){
            case 'function':
                // First, deal with classes.
                if (type.prototype != null) {
                    if (type.prototype.isReactComponent) // React class.
                    return true;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (ownNames.length > 1 || ownNames[0] !== 'constructor') // This looks like a class.
                    return false;
                     // eslint-disable-next-line no-proto
                    if (type.prototype.__proto__ !== Object.prototype) // It has a superclass.
                    return false;
                     // Pass through.
                // This looks like a regular function with empty prototype.
                } // For plain functions and arrows, use name as a heuristic.
                var name = type.name || type.displayName;
                return typeof name === 'string' && /^[A-Z]/.test(name);
            case 'object':
                if (type != null) switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        // Definitely React components.
                        return true;
                    default:
                        return false;
                }
                return false;
            default:
                return false;
        }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"7IzUj":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f0c9f0f3f482b72b";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"e9Zfo":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$2430 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$2430.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _footer = require("./components/Footer");
var _footerDefault = parcelHelpers.interopDefault(_footer);
var _navbar = require("./components/navbar");
var _navbarDefault = parcelHelpers.interopDefault(_navbar);
var _accueil = require("./pages/Accueil");
var _accueilDefault = parcelHelpers.interopDefault(_accueil);
var _register = require("./pages/Register");
var _registerDefault = parcelHelpers.interopDefault(_register);
var _alimentaire = require("./pages/Alimentaire");
var _alimentaireDefault = parcelHelpers.interopDefault(_alimentaire);
var _post = require("./components/Post");
var _postDefault = parcelHelpers.interopDefault(_post);
var _profil = require("./pages/Profil");
var _profilDefault = parcelHelpers.interopDefault(_profil);
var _appCss = require("./Style/app.css");
const App = ()=>{
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.BrowserRouter, {
        children: [
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_navbarDefault.default, {}, void 0, false, {
                fileName: "src/App.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.Routes, {
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.Route, {
                        path: "/",
                        element: /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_accueilDefault.default, {}, void 0, false, void 0, void 0)
                    }, void 0, false, {
                        fileName: "src/App.jsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.Route, {
                        path: "/inscription",
                        element: /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_registerDefault.default, {}, void 0, false, void 0, void 0)
                    }, void 0, false, {
                        fileName: "src/App.jsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.Route, {
                        path: "/alimentation",
                        element: /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_alimentaireDefault.default, {}, void 0, false, void 0, void 0)
                    }, void 0, false, {
                        fileName: "src/App.jsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.Route, {
                        path: "/profil",
                        element: /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_profilDefault.default, {}, void 0, false, void 0, void 0)
                    }, void 0, false, {
                        fileName: "src/App.jsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.Route, {
                        path: "/post",
                        element: /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_postDefault.default, {}, void 0, false, void 0, void 0)
                    }, void 0, false, {
                        fileName: "src/App.jsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/App.jsx",
                lineNumber: 17,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_footerDefault.default, {}, void 0, false, {
                fileName: "src/App.jsx",
                lineNumber: 24,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/App.jsx",
        lineNumber: 15,
        columnNumber: 9
    }, undefined);
};
_c = App;
exports.default = App;
var _c;
$RefreshReg$(_c, "App");

  $parcel$ReactRefreshHelpers$2430.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"fdOAw","./components/Footer":"2OVeV","./components/navbar":"gEkAm","./pages/Accueil":"94zR7","./pages/Register":"PfLvz","./pages/Alimentaire":"gw9UF","./components/Post":"8aU1L","./pages/Profil":"e7FAL","./Style/app.css":"jid8p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"iTorj":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-jsx-dev-runtime.development.js');

},{"./cjs/react-jsx-dev-runtime.development.js":"48uCM"}],"48uCM":[function(require,module,exports) {
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    var React = require('react');
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types.
    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
    var REACT_MEMO_TYPE = Symbol.for('react.memo');
    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object') return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === 'function') return maybeIterator;
        return null;
    }
    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function error(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning('error', format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== '') {
            format += '%s';
            args = args.concat([
                stack
            ]);
        } // eslint-disable-next-line react-internal/safe-string-coercion
        var argsWithFormat = args.map(function(item) {
            return String(item);
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    // -----------------------------------------------------------------------------
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    var enableCacheElement = false;
    var enableTransitionTracing = false; // No known bugs, but needs performance testing
    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
    // stuff. Intended to enable React core members to more easily debug scheduling
    // issues in DEV builds.
    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
    var REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
    function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) return true;
        if (typeof type === 'object' && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) return true;
        }
        return false;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) return displayName;
        var functionName = innerType.displayName || innerType.name || '';
        return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
    } // Keep in sync with react-reconciler/getComponentNameFromFiber
    function getContextName(type) {
        return type.displayName || 'Context';
    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
    function getComponentNameFromType(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === 'number') error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
        if (typeof type === 'function') return type.displayName || type.name || null;
        if (typeof type === 'string') return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return 'Fragment';
            case REACT_PORTAL_TYPE:
                return 'Portal';
            case REACT_PROFILER_TYPE:
                return 'Profiler';
            case REACT_STRICT_MODE_TYPE:
                return 'StrictMode';
            case REACT_SUSPENSE_TYPE:
                return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
                return 'SuspenseList';
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
            case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) return outerName;
                return getComponentNameFromType(type.type) || 'Memo';
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentNameFromType(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    var assign = Object.assign;
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return '\n' + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return '';
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, 'props', {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === 'object' && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === 'string') {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split('\n');
                var controlLines = control.stack.split('\n');
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                            // but we have a user-provided "displayName"
                            // splice it in to make the stack more readable.
                            if (fn.displayName && _frame.includes('<anonymous>')) _frame = _frame.replace('<anonymous>', fn.displayName);
                            if (typeof fn === 'function') componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0)
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : '';
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
        if (typeof fn === 'function') componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return '';
        if (typeof type === 'function') return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === 'string') return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame('SuspenseList');
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
        }
        return '';
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame1.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                    // eslint-disable-next-line react-internal/prod-error-codes
                    var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                    err.name = 'Invariant Violation';
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || 'React class', location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error('Failed %s type: %s', location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
    function isArray(a) {
        return isArrayImpl(a);
    }
    /*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe only called in DEV, so void return is not possible.
    function typeName(value) {
        // toStringTag is needed for namespaced types like Temporal.Instant
        var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
        return type;
    } // $FlowFixMe only called in DEV, so void return is not possible.
    function willCoercionThrow(value) {
        try {
            testStringCoercion(value);
            return false;
        } catch (e) {
            return true;
        }
    }
    function testStringCoercion(value) {
        // If you ended up here by following an exception call stack, here's what's
        // happened: you supplied an object or symbol value to React (as a prop, key,
        // DOM attribute, CSS property, string ref, etc.) and when React tried to
        // coerce it to a string using `'' + value`, an exception was thrown.
        //
        // The most common types that will cause this exception are `Symbol` instances
        // and Temporal objects like `Temporal.Instant`. But any object that has a
        // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
        // exception. (Library authors do this to prevent users from using built-in
        // numeric operators like `+` or comparison operators like `>=` because custom
        // methods are needed to perform accurate arithmetic or comparison.)
        //
        // To fix the problem, coerce this object or symbol value to a string before
        // passing it to React. The most reliable way is usually `String(value)`.
        //
        // To find which value is throwing, check the browser or debugger console.
        // Before this exception was thrown, there should be `console.error` output
        // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
        // problem and how that type was used: key, atrribute, input value prop, etc.
        // In most cases, this console output also shows the component and its
        // ancestor components where the exception happened.
        //
        // eslint-disable-next-line react-internal/safe-string-coercion
        return '' + value;
    }
    function checkKeyStringCoercion(value) {
        if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
        }
    }
    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;
    var didWarnAboutStringRefs;
    didWarnAboutStringRefs = {};
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function warnIfStringRefCannotBeAutoConverted(config, self) {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */ function jsxDEV(type, config, maybeKey, source, self) {
        var propName; // Reserved names are extracted
        var props = {};
        var key = null;
        var ref = null; // Currently, key can be spread in as a prop. This causes a potential
        // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
        // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
        // but as an intermediary step, we will use jsxDEV for everything except
        // <div {...props} key="Hi" />, because we aren't currently able to tell if
        // key is explicitly declared to be undefined or not.
        if (maybeKey !== undefined) {
            checkKeyStringCoercion(maybeKey);
            key = '' + maybeKey;
        }
        if (hasValidKey(config)) {
            checkKeyStringCoercion(config.key);
            key = '' + config.key;
        }
        if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
        } // Remaining properties are added to a new props object
        for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
         // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner$1.current) {
            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
            if (name) return '\n\nCheck the render method of `' + name + '`.';
        }
        return '';
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }
        return '';
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = '';
        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== 'object') return;
        if (isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function') // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === 'string') return;
        var propTypes;
        if (typeof type === 'function') propTypes = type.propTypes;
        else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentNameFromType(type);
            error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }
        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid attribute `ref` supplied to `React.Fragment`.');
            setCurrentlyValidatingElement$1(null);
        }
    }
    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = '';
            if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendum(source);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = 'null';
            else if (isArray(type)) typeString = 'array';
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
                info = ' Did you accidentally export a JSX literal instead of a component?';
            } else typeString = typeof type;
            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) {
            var children = props.children;
            if (children !== undefined) {
                if (isStaticChildren) {
                    if (isArray(children)) {
                        for(var i = 0; i < children.length; i++)validateChildKeys(children[i], type);
                        if (Object.freeze) Object.freeze(children);
                    } else error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                } else validateChildKeys(children, type);
            }
        }
        if (type === REACT_FRAGMENT_TYPE) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    } // These two functions exist to still get child warnings in dev
    var jsxDEV$1 = jsxWithValidation;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = jsxDEV$1;
})();

},{"react":"21dqq"}],"21dqq":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react.development.js');

},{"./cjs/react.development.js":"6YvXz"}],"6YvXz":[function(require,module,exports) {
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var ReactVersion = '18.0.0-fc46dba67-20220329';
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types.
    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
    var REACT_MEMO_TYPE = Symbol.for('react.memo');
    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object') return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === 'function') return maybeIterator;
        return null;
    }
    /**
 * Keeps track of the current dispatcher.
 */ var ReactCurrentDispatcher = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    /**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */ var ReactCurrentBatchConfig = {
        transition: null
    };
    var ReactCurrentActQueue = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false
    };
    /**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */ var ReactCurrentOwner = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    var ReactDebugCurrentFrame1 = {};
    var currentExtraStackFrame = null;
    function setExtraStackFrame(stack) {
        currentExtraStackFrame = stack;
    }
    ReactDebugCurrentFrame1.setExtraStackFrame = function(stack) {
        currentExtraStackFrame = stack;
    }; // Stack implementation injected by the current renderer.
    ReactDebugCurrentFrame1.getCurrentStack = null;
    ReactDebugCurrentFrame1.getStackAddendum = function() {
        var stack = ''; // Add an extra top frame while an element is being validated
        if (currentExtraStackFrame) stack += currentExtraStackFrame;
         // Delegate to the injected renderer-specific implementation
        var impl = ReactDebugCurrentFrame1.getCurrentStack;
        if (impl) stack += impl() || '';
        return stack;
    };
    // -----------------------------------------------------------------------------
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    var enableCacheElement = false;
    var enableTransitionTracing = false; // No known bugs, but needs performance testing
    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
    // stuff. Intended to enable React core members to more easily debug scheduling
    // issues in DEV builds.
    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
    var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner
    };
    ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame1;
    ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
    // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.
    function warn(format) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        printWarning('warn', format, args);
    }
    function error1(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning('error', format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== '') {
            format += '%s';
            args = args.concat([
                stack
            ]);
        } // eslint-disable-next-line react-internal/safe-string-coercion
        var argsWithFormat = args.map(function(item) {
            return String(item);
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    var didWarnStateUpdateForUnmountedComponent = {};
    function warnNoop(publicInstance, callerName) {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
        var warningKey = componentName + "." + callerName;
        if (didWarnStateUpdateForUnmountedComponent[warningKey]) return;
        error1("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
    }
    /**
 * This is the abstract API for an update queue.
 */ var ReactNoopUpdateQueue = {
        /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */ isMounted: function(publicInstance) {
            return false;
        },
        /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, 'forceUpdate');
        },
        /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, 'replaceState');
        },
        /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */ enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, 'setState');
        }
    };
    var assign = Object.assign;
    var emptyObject = {};
    Object.freeze(emptyObject);
    /**
 * Base class helpers for the updating state of a component.
 */ function Component1(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
    }
    Component1.prototype.isReactComponent = {};
    /**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ Component1.prototype.setState = function(partialState, callback) {
        if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };
    /**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ Component1.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };
    var deprecatedAPIs = {
        isMounted: [
            'isMounted',
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            'replaceState',
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    };
    var defineDeprecationWarning = function(methodName, info) {
        Object.defineProperty(Component1.prototype, methodName, {
            get: function() {
                warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
                return undefined;
            }
        });
    };
    for(var fnName in deprecatedAPIs)if (deprecatedAPIs.hasOwnProperty(fnName)) defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    function ComponentDummy() {}
    ComponentDummy.prototype = Component1.prototype;
    /**
 * Convenience component with default shallow equality check for sCU.
 */ function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.
    assign(pureComponentPrototype, Component1.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    // an immutable object with a single mutable value
    function createRef() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    }
    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
    function isArray(a) {
        return isArrayImpl(a);
    }
    /*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe only called in DEV, so void return is not possible.
    function typeName(value) {
        // toStringTag is needed for namespaced types like Temporal.Instant
        var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
        return type;
    } // $FlowFixMe only called in DEV, so void return is not possible.
    function willCoercionThrow(value) {
        try {
            testStringCoercion(value);
            return false;
        } catch (e) {
            return true;
        }
    }
    function testStringCoercion(value) {
        // If you ended up here by following an exception call stack, here's what's
        // happened: you supplied an object or symbol value to React (as a prop, key,
        // DOM attribute, CSS property, string ref, etc.) and when React tried to
        // coerce it to a string using `'' + value`, an exception was thrown.
        //
        // The most common types that will cause this exception are `Symbol` instances
        // and Temporal objects like `Temporal.Instant`. But any object that has a
        // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
        // exception. (Library authors do this to prevent users from using built-in
        // numeric operators like `+` or comparison operators like `>=` because custom
        // methods are needed to perform accurate arithmetic or comparison.)
        //
        // To fix the problem, coerce this object or symbol value to a string before
        // passing it to React. The most reliable way is usually `String(value)`.
        //
        // To find which value is throwing, check the browser or debugger console.
        // Before this exception was thrown, there should be `console.error` output
        // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
        // problem and how that type was used: key, atrribute, input value prop, etc.
        // In most cases, this console output also shows the component and its
        // ancestor components where the exception happened.
        //
        // eslint-disable-next-line react-internal/safe-string-coercion
        return '' + value;
    }
    function checkKeyStringCoercion(value) {
        if (willCoercionThrow(value)) {
            error1("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
        }
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) return displayName;
        var functionName = innerType.displayName || innerType.name || '';
        return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
    } // Keep in sync with react-reconciler/getComponentNameFromFiber
    function getContextName(type) {
        return type.displayName || 'Context';
    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
    function getComponentNameFromType(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === 'number') error1("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
        if (typeof type === 'function') return type.displayName || type.name || null;
        if (typeof type === 'string') return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return 'Fragment';
            case REACT_PORTAL_TYPE:
                return 'Portal';
            case REACT_PROFILER_TYPE:
                return 'Profiler';
            case REACT_STRICT_MODE_TYPE:
                return 'StrictMode';
            case REACT_SUSPENSE_TYPE:
                return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
                return 'SuspenseList';
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
            case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) return outerName;
                return getComponentNameFromType(type.type) || 'Memo';
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentNameFromType(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    didWarnAboutStringRefs = {};
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error1("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error1("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    function warnIfStringRefCannotBeAutoConverted(config) {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error1('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */ function createElement(type, config, children) {
        var propName; // Reserved names are extracted
        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;
        if (config != null) {
            if (hasValidRef(config)) {
                ref = config.ref;
                warnIfStringRefCannotBeAutoConverted(config);
            }
            if (hasValidKey(config)) {
                checkKeyStringCoercion(config.key);
                key = '' + config.key;
            }
            self = config.__self === undefined ? null : config.__self;
            source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            if (Object.freeze) Object.freeze(childArray);
            props.children = childArray;
        } // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
    }
    /**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */ function cloneElement(element, config, children) {
        if (element === null || element === undefined) throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        var propName; // Original props are copied
        var props = assign({}, element.props); // Reserved names are extracted
        var key = element.key;
        var ref = element.ref; // Self is preserved since the owner is preserved.
        var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.
        var source = element._source; // Owner will be preserved, unless ref is overridden
        var owner = element._owner;
        if (config != null) {
            if (hasValidRef(config)) {
                // Silently steal the ref from the parent.
                ref = config.ref;
                owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
                checkKeyStringCoercion(config.key);
                key = '' + config.key;
            } // Remaining properties override existing props
            var defaultProps;
            if (element.type && element.type.defaultProps) defaultProps = element.type.defaultProps;
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === undefined && defaultProps !== undefined) // Resolve default props
                props[propName] = defaultProps[propName];
                else props[propName] = config[propName];
            }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    /**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */ function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
            '=': '=0',
            ':': '=2'
        };
        var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
        });
        return '$' + escapedString;
    }
    /**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */ var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;
    function escapeUserProvidedKey(text) {
        return text.replace(userProvidedKeyEscapeRegex, '$&/');
    }
    /**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */ function getElementKey(element, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (typeof element === 'object' && element !== null && element.key != null) {
            checkKeyStringCoercion(element.key);
            return escape('' + element.key);
        } // Implicit key determined by the index in the set
        return index.toString(36);
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if (type === 'undefined' || type === 'boolean') // All of the above are perceived as null.
        children = null;
        var invokeCallback = false;
        if (children === null) invokeCallback = true;
        else switch(type){
            case 'string':
            case 'number':
                invokeCallback = true;
                break;
            case 'object':
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = true;
                }
        }
        if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
            // so that it's consistent if the number of children grows:
            var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
                var escapedChildKey = '';
                if (childKey != null) escapedChildKey = escapeUserProvidedKey(childKey) + '/';
                mapIntoArray(mappedChild, array, escapedChildKey, '', function(c) {
                    return c;
                });
            } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                    // The `if` statement here prevents auto-disabling of the safe
                    // coercion ESLint rule, so we must manually disable it below.
                    // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) checkKeyStringCoercion(mappedChild.key);
                    mappedChild = cloneAndReplaceKey(mappedChild, // traverseAllChildren used to do for objects as children
                    escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
                }
                array.push(mappedChild);
            }
            return 1;
        }
        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.
        var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (isArray(children)) for(var i = 0; i < children.length; i++){
            child = children[i];
            nextName = nextNamePrefix + getElementKey(child, i);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        }
        else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === 'function') {
                var iterableChildren = children;
                // Warn about using Maps as children
                if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    didWarnAboutMaps = true;
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while(!(step = iterator.next()).done){
                    child = step.value;
                    nextName = nextNamePrefix + getElementKey(child, ii++);
                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
            } else if (type === 'object') {
                // eslint-disable-next-line react-internal/safe-string-coercion
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
            }
        }
        return subtreeCount;
    }
    /**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */ function mapChildren(children, func, context) {
        if (children == null) return children;
        var result = [];
        var count = 0;
        mapIntoArray(children, result, '', '', function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    /**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */ function countChildren(children) {
        var n = 0;
        mapChildren(children, function() {
            n++; // Don't return anything
        });
        return n;
    }
    /**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */ function forEachChildren(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
            forEachFunc.apply(this, arguments); // Don't return anything.
        }, forEachContext);
    }
    /**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */ function toArray(children) {
        return mapChildren(children, function(child) {
            return child;
        }) || [];
    }
    /**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */ function onlyChild(children) {
        if (!isValidElement(children)) throw new Error('React.Children.only expected to receive a single React element child.');
        return children;
    }
    function createContext(defaultValue) {
        // TODO: Second argument used to be an optional `calculateChangedBits`
        // function. Warn to reserve for future use?
        var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
        };
        context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;
        var hasWarnedAboutDisplayNameOnConsumer = false;
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here
        Object.defineProperties(Consumer, {
            Provider: {
                get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                        hasWarnedAboutUsingConsumerProvider = true;
                        error1("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                },
                set: function(_Provider) {
                    context.Provider = _Provider;
                }
            },
            _currentValue: {
                get: function() {
                    return context._currentValue;
                },
                set: function(_currentValue) {
                    context._currentValue = _currentValue;
                }
            },
            _currentValue2: {
                get: function() {
                    return context._currentValue2;
                },
                set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                }
            },
            _threadCount: {
                get: function() {
                    return context._threadCount;
                },
                set: function(_threadCount) {
                    context._threadCount = _threadCount;
                }
            },
            Consumer: {
                get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                        hasWarnedAboutUsingNestedContextConsumers = true;
                        error1("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                }
            },
            displayName: {
                get: function() {
                    return context.displayName;
                },
                set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                        warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                        hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                }
            }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
        context.Consumer = Consumer;
        context._currentRenderer = null;
        context._currentRenderer2 = null;
        return context;
    }
    var Uninitialized = -1;
    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;
    function lazyInitializer(payload) {
        if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor(); // Transition to the next state.
            // This might throw either because it's missing or throws. If so, we treat it
            // as still uninitialized and try again next time. Which is the same as what
            // happens if the ctor or any wrappers processing the ctor throws. This might
            // end up fixing it if the resolution was a concurrency bug.
            thenable.then(function(moduleObject) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                    // Transition to the next state.
                    var resolved = payload;
                    resolved._status = Resolved;
                    resolved._result = moduleObject;
                }
            }, function(error) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                    // Transition to the next state.
                    var rejected = payload;
                    rejected._status = Rejected;
                    rejected._result = error;
                }
            });
            if (payload._status === Uninitialized) {
                // In case, we're still uninitialized, then we're waiting for the thenable
                // to resolve. Set it as pending in the meantime.
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
            }
        }
        if (payload._status === Resolved) {
            var moduleObject1 = payload._result;
            if (moduleObject1 === undefined) error1("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject1);
            if (!('default' in moduleObject1)) error1("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject1);
            return moduleObject1.default;
        } else throw payload._result;
    }
    function lazy(ctor) {
        var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
        };
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
        };
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes; // $FlowFixMe
        Object.defineProperties(lazyType, {
            defaultProps: {
                configurable: true,
                get: function() {
                    return defaultProps;
                },
                set: function(newDefaultProps) {
                    error1("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, 'defaultProps', {
                        enumerable: true
                    });
                }
            },
            propTypes: {
                configurable: true,
                get: function() {
                    return propTypes;
                },
                set: function(newPropTypes) {
                    error1("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, 'propTypes', {
                        enumerable: true
                    });
                }
            }
        });
        return lazyType;
    }
    function forwardRef(render) {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) error1("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
        else if (typeof render !== 'function') error1('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
        else if (render.length !== 0 && render.length !== 2) error1('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
        if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) error1("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        }
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        };
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name; // The inner component shouldn't inherit this display name in most cases,
                // because the component may be used elsewhere.
                // But it's nice for anonymous functions to inherit the name,
                // so that our component-stack generation logic will display their frames.
                // An anonymous function generally suggests a pattern like:
                //   React.forwardRef((props, ref) => {...});
                // This kind of inner function is not used elsewhere so the side effect is okay.
                if (!render.name && !render.displayName) render.displayName = name;
            }
        });
        return elementType;
    }
    var REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
    function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) return true;
        if (typeof type === 'object' && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) return true;
        }
        return false;
    }
    function memo(type, compare) {
        if (!isValidElementType(type)) error1("memo: The first argument must be a component. Instead received: %s", type === null ? 'null' : typeof type);
        var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: compare === undefined ? null : compare
        };
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name; // The inner component shouldn't inherit this display name in most cases,
                // because the component may be used elsewhere.
                // But it's nice for anonymous functions to inherit the name,
                // so that our component-stack generation logic will display their frames.
                // An anonymous function generally suggests a pattern like:
                //   React.memo((props) => {...});
                // This kind of inner function is not used elsewhere so the side effect is okay.
                if (!type.name && !type.displayName) type.displayName = name;
            }
        });
        return elementType;
    }
    function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;
        if (dispatcher === null) error1("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        // intentionally don't throw our own error because this is in a hot path.
        // Also helps ensure this is inlined.
        return dispatcher;
    }
    function useContext(Context) {
        var dispatcher = resolveDispatcher();
        // TODO: add a more generic warning for invalid values.
        if (Context._context !== undefined) {
            var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
            // and nobody should be using this in existing code.
            if (realContext.Consumer === Context) error1("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
            else if (realContext.Provider === Context) error1("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return dispatcher.useContext(Context);
    }
    function useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
    }
    function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
    }
    function useRef(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
    }
    function useEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
    }
    function useInsertionEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useInsertionEffect(create, deps);
    }
    function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
    }
    function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
    }
    function useMemo(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
    }
    function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
    }
    function useDebugValue(value, formatterFn) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
    }
    function useTransition() {
        var dispatcher = resolveDispatcher();
        return dispatcher.useTransition();
    }
    function useDeferredValue(value) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDeferredValue(value);
    }
    function useId() {
        var dispatcher = resolveDispatcher();
        return dispatcher.useId();
    }
    function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    }
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error1("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return '\n' + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return '';
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher$1.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, 'props', {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === 'object' && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === 'string') {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split('\n');
                var controlLines = control.stack.split('\n');
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                            // but we have a user-provided "displayName"
                            // splice it in to make the stack more readable.
                            if (fn.displayName && _frame.includes('<anonymous>')) _frame = _frame.replace('<anonymous>', fn.displayName);
                            if (typeof fn === 'function') componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0)
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher$1.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : '';
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
        if (typeof fn === 'function') componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return '';
        if (typeof type === 'function') return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === 'string') return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame('SuspenseList');
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
        }
        return '';
    }
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                    // eslint-disable-next-line react-internal/prod-error-codes
                    var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                    err.name = 'Invariant Violation';
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error1("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || 'React class', location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error1('Failed %s type: %s', location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            setExtraStackFrame(stack);
        } else setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) return '\n\nCheck the render method of `' + name + '`.';
        }
        return '';
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }
        return '';
    }
    function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) return getSourceInfoErrorAddendum(elementProps.__source);
        return '';
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = '';
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error1('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== 'object') return;
        if (isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function') // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === 'string') return;
        var propTypes;
        if (typeof type === 'function') propTypes = type.propTypes;
        else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentNameFromType(type);
            error1('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }
        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) error1("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error1("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error1('Invalid attribute `ref` supplied to `React.Fragment`.');
            setCurrentlyValidatingElement$1(null);
        }
    }
    function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = '';
            if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = 'null';
            else if (isArray(type)) typeString = 'array';
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
                info = ' Did you accidentally export a JSX literal instead of a component?';
            } else typeString = typeof type;
            error1("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], type);
        if (type === REACT_FRAGMENT_TYPE) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    }
    var didWarnAboutDeprecatedCreateFactory = false;
    function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;
        if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true;
            warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
        } // Legacy hook: remove it
        Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, 'type', {
                    value: type
                });
                return type;
            }
        });
        return validatedFactory;
    }
    function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);
        for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], newElement.type);
        validatePropTypes(newElement);
        return newElement;
    }
    function startTransition(scope, options) {
        var prevTransition = ReactCurrentBatchConfig.transition;
        ReactCurrentBatchConfig.transition = {};
        var currentTransition = ReactCurrentBatchConfig.transition;
        ReactCurrentBatchConfig.transition._updatedFibers = new Set();
        try {
            scope();
        } finally{
            ReactCurrentBatchConfig.transition = prevTransition;
            if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                currentTransition._updatedFibers.clear();
            }
        }
    }
    var didWarnAboutMessageChannel = false;
    var enqueueTaskImpl = null;
    function enqueueTask(task) {
        if (enqueueTaskImpl === null) try {
            // read require off the module object to get around the bundlers.
            // we don't want them to detect a require and bundle a Node polyfill.
            var requireString = ('require' + Math.random()).slice(0, 7);
            var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
            // version of setImmediate, bypassing fake timers if any.
            enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
        } catch (_err) {
            // we're in a browser
            // we can't use regular timers because they may still be faked
            // so we try MessageChannel+postMessage instead
            enqueueTaskImpl = function(callback) {
                if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === 'undefined') error1("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(undefined);
            };
        }
        return enqueueTaskImpl(task);
    }
    var actScopeDepth = 0;
    var didWarnNoAwaitAct = false;
    function act(callback) {
        // `act` calls can be nested, so we track the depth. This represents the
        // number of `act` scopes on the stack.
        var prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        if (ReactCurrentActQueue.current === null) // This is the outermost `act` scope. Initialize the queue. The reconciler
        // will detect the queue and use it instead of Scheduler.
        ReactCurrentActQueue.current = [];
        var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
        var result;
        try {
            // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
            // set to `true` while the given callback is executed, not for updates
            // triggered during an async event, because this is how the legacy
            // implementation of `act` behaved.
            ReactCurrentActQueue.isBatchingLegacy = true;
            result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
            // which flushed updates immediately after the scope function exits, even
            // if it's an async function.
            if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                }
            }
        } catch (error2) {
            popActScope(prevActScopeDepth);
            throw error2;
        } finally{
            ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
        }
        if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
            var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
            // for it to resolve before exiting the current scope.
            var wasAwaited = false;
            var thenable = {
                then: function(resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue) {
                        popActScope(prevActScopeDepth);
                        if (actScopeDepth === 0) // We've exited the outermost act scope. Recursively flush the
                        // queue until there's no remaining work.
                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                        else resolve(returnValue);
                    }, function(error) {
                        // The callback threw an error.
                        popActScope(prevActScopeDepth);
                        reject(error);
                    });
                }
            };
            if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') // eslint-disable-next-line no-undef
            Promise.resolve().then(function() {}).then(function() {
                if (!wasAwaited) {
                    didWarnNoAwaitAct = true;
                    error1("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                }
            });
            return thenable;
        } else {
            var returnValue1 = result; // The callback is not an async function. Exit the current scope
            // immediately, without awaiting.
            popActScope(prevActScopeDepth);
            if (actScopeDepth === 0) {
                // Exiting the outermost act scope. Flush the queue.
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                } // Return a thenable. If the user awaits it, we'll flush again in
                // case additional work was scheduled by a microtask.
                var _thenable = {
                    then: function(resolve, reject) {
                        // Confirm we haven't re-entered another `act` scope, in case
                        // the user does something weird like await the thenable
                        // multiple times.
                        if (ReactCurrentActQueue.current === null) {
                            // Recursively flush the queue until there's no remaining work.
                            ReactCurrentActQueue.current = [];
                            recursivelyFlushAsyncActWork(returnValue1, resolve, reject);
                        } else resolve(returnValue1);
                    }
                };
                return _thenable;
            } else {
                // Since we're inside a nested `act` scope, the returned thenable
                // immediately resolves. The outer scope will flush the queue.
                var _thenable2 = {
                    then: function(resolve, reject) {
                        resolve(returnValue1);
                    }
                };
                return _thenable2;
            }
        }
    }
    function popActScope(prevActScopeDepth) {
        if (prevActScopeDepth !== actScopeDepth - 1) error1("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
        actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactCurrentActQueue.current;
        if (queue !== null) try {
            flushActQueue(queue);
            enqueueTask(function() {
                if (queue.length === 0) {
                    // No additional work was scheduled. Finish.
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                } else // Keep flushing work until there's none left.
                recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
        } catch (error) {
            reject(error);
        }
        else resolve(returnValue);
    }
    var isFlushing = false;
    function flushActQueue(queue) {
        if (!isFlushing) {
            // Prevent re-entrance.
            isFlushing = true;
            var i = 0;
            try {
                for(; i < queue.length; i++){
                    var callback = queue[i];
                    do callback = callback(true);
                    while (callback !== null)
                }
                queue.length = 0;
            } catch (error) {
                // If something throws, leave the remaining callbacks on the queue.
                queue = queue.slice(i + 1);
                throw error;
            } finally{
                isFlushing = false;
            }
        }
    }
    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
    };
    exports.Children = Children;
    exports.Component = Component1;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.startTransition = startTransition;
    exports.unstable_act = act;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useDeferredValue = useDeferredValue;
    exports.useEffect = useEffect;
    exports.useId = useId;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useInsertionEffect = useInsertionEffect;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.useSyncExternalStore = useSyncExternalStore;
    exports.useTransition = useTransition;
    exports.version = ReactVersion;
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();

},{}],"fdOAw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MemoryRouter", ()=>_reactRouter.MemoryRouter
);
parcelHelpers.export(exports, "Navigate", ()=>_reactRouter.Navigate
);
parcelHelpers.export(exports, "NavigationType", ()=>_reactRouter.NavigationType
);
parcelHelpers.export(exports, "Outlet", ()=>_reactRouter.Outlet
);
parcelHelpers.export(exports, "Route", ()=>_reactRouter.Route
);
parcelHelpers.export(exports, "Router", ()=>_reactRouter.Router
);
parcelHelpers.export(exports, "Routes", ()=>_reactRouter.Routes
);
parcelHelpers.export(exports, "UNSAFE_LocationContext", ()=>_reactRouter.UNSAFE_LocationContext
);
parcelHelpers.export(exports, "UNSAFE_NavigationContext", ()=>_reactRouter.UNSAFE_NavigationContext
);
parcelHelpers.export(exports, "UNSAFE_RouteContext", ()=>_reactRouter.UNSAFE_RouteContext
);
parcelHelpers.export(exports, "createPath", ()=>_reactRouter.createPath
);
parcelHelpers.export(exports, "createRoutesFromChildren", ()=>_reactRouter.createRoutesFromChildren
);
parcelHelpers.export(exports, "generatePath", ()=>_reactRouter.generatePath
);
parcelHelpers.export(exports, "matchPath", ()=>_reactRouter.matchPath
);
parcelHelpers.export(exports, "matchRoutes", ()=>_reactRouter.matchRoutes
);
parcelHelpers.export(exports, "parsePath", ()=>_reactRouter.parsePath
);
parcelHelpers.export(exports, "renderMatches", ()=>_reactRouter.renderMatches
);
parcelHelpers.export(exports, "resolvePath", ()=>_reactRouter.resolvePath
);
parcelHelpers.export(exports, "useHref", ()=>_reactRouter.useHref
);
parcelHelpers.export(exports, "useInRouterContext", ()=>_reactRouter.useInRouterContext
);
parcelHelpers.export(exports, "useLocation", ()=>_reactRouter.useLocation
);
parcelHelpers.export(exports, "useMatch", ()=>_reactRouter.useMatch
);
parcelHelpers.export(exports, "useNavigate", ()=>_reactRouter.useNavigate
);
parcelHelpers.export(exports, "useNavigationType", ()=>_reactRouter.useNavigationType
);
parcelHelpers.export(exports, "useOutlet", ()=>_reactRouter.useOutlet
);
parcelHelpers.export(exports, "useOutletContext", ()=>_reactRouter.useOutletContext
);
parcelHelpers.export(exports, "useParams", ()=>_reactRouter.useParams
);
parcelHelpers.export(exports, "useResolvedPath", ()=>_reactRouter.useResolvedPath
);
parcelHelpers.export(exports, "useRoutes", ()=>_reactRouter.useRoutes
);
parcelHelpers.export(exports, "BrowserRouter", ()=>BrowserRouter
);
parcelHelpers.export(exports, "HashRouter", ()=>HashRouter
);
parcelHelpers.export(exports, "Link", ()=>Link
);
parcelHelpers.export(exports, "NavLink", ()=>NavLink
);
parcelHelpers.export(exports, "createSearchParams", ()=>createSearchParams
);
parcelHelpers.export(exports, "unstable_HistoryRouter", ()=>HistoryRouter
);
parcelHelpers.export(exports, "useLinkClickHandler", ()=>useLinkClickHandler
);
parcelHelpers.export(exports, "useSearchParams", ()=>useSearchParams
);
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var _react = require("react");
var _history = require("history");
var _reactRouter = require("react-router");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const _excluded = [
    "onClick",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to"
], _excluded2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children"
];
function warning(cond, message) {
    if (!cond) {
        // eslint-disable-next-line no-console
        if (typeof console !== "undefined") console.warn(message);
        try {
            // Welcome to debugging React Router!
            //
            // This error is thrown as a convenience so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message); // eslint-disable-next-line no-empty
        } catch (e) {}
    }
} ////////////////////////////////////////////////////////////////////////////////
// COMPONENTS
////////////////////////////////////////////////////////////////////////////////
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */ function BrowserRouter(_ref) {
    let { basename , children , window  } = _ref;
    let historyRef = _react.useRef();
    if (historyRef.current == null) historyRef.current = _history.createBrowserHistory({
        window
    });
    let history = historyRef.current;
    let [state, setState] = _react.useState({
        action: history.action,
        location: history.location
    });
    _react.useLayoutEffect(()=>history.listen(setState)
    , [
        history
    ]);
    return /*#__PURE__*/ _react.createElement(_reactRouter.Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */ function HashRouter(_ref2) {
    let { basename , children , window  } = _ref2;
    let historyRef = _react.useRef();
    if (historyRef.current == null) historyRef.current = _history.createHashHistory({
        window
    });
    let history = historyRef.current;
    let [state, setState] = _react.useState({
        action: history.action,
        location: history.location
    });
    _react.useLayoutEffect(()=>history.listen(setState)
    , [
        history
    ]);
    return /*#__PURE__*/ _react.createElement(_reactRouter.Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */ function HistoryRouter(_ref3) {
    let { basename , children , history  } = _ref3;
    const [state, setState] = _react.useState({
        action: history.action,
        location: history.location
    });
    _react.useLayoutEffect(()=>history.listen(setState)
    , [
        history
    ]);
    return /*#__PURE__*/ _react.createElement(_reactRouter.Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
HistoryRouter.displayName = "unstable_HistoryRouter";
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
/**
 * The public API for rendering a history-aware <a>.
 */ const Link = /*#__PURE__*/ _react.forwardRef(function LinkWithRef(_ref4, ref) {
    let { onClick , reloadDocument , replace =false , state , target , to  } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
    let href = _reactRouter.useHref(to);
    let internalOnClick = useLinkClickHandler(to, {
        replace,
        state,
        target
    });
    function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented && !reloadDocument) internalOnClick(event);
    }
    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
    _react.createElement("a", _extends({}, rest, {
        href: href,
        onClick: handleClick,
        ref: ref,
        target: target
    })));
});
Link.displayName = "Link";
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */ const NavLink = /*#__PURE__*/ _react.forwardRef(function NavLinkWithRef(_ref5, ref) {
    let { "aria-current": ariaCurrentProp = "page" , caseSensitive =false , className: classNameProp = "" , end =false , style: styleProp , to , children  } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
    let location = _reactRouter.useLocation();
    let path = _reactRouter.useResolvedPath(to);
    let locationPathname = location.pathname;
    let toPathname = path.pathname;
    if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        toPathname = toPathname.toLowerCase();
    }
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
    let ariaCurrent = isActive ? ariaCurrentProp : undefined;
    let className;
    if (typeof classNameProp === "function") className = classNameProp({
        isActive
    });
    else // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [
        classNameProp,
        isActive ? "active" : null
    ].filter(Boolean).join(" ");
    let style = typeof styleProp === "function" ? styleProp({
        isActive
    }) : styleProp;
    return /*#__PURE__*/ _react.createElement(Link, _extends({}, rest, {
        "aria-current": ariaCurrent,
        className: className,
        ref: ref,
        style: style,
        to: to
    }), typeof children === "function" ? children({
        isActive
    }) : children);
});
NavLink.displayName = "NavLink";
// HOOKS
////////////////////////////////////////////////////////////////////////////////
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */ function useLinkClickHandler(to, _temp) {
    let { target , replace: replaceProp , state  } = _temp === void 0 ? {} : _temp;
    let navigate = _reactRouter.useNavigate();
    let location = _reactRouter.useLocation();
    let path = _reactRouter.useResolvedPath(to);
    return _react.useCallback((event)=>{
        if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event) // Ignore clicks with modifier keys
        ) {
            event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
            // a push, so do the same here.
            let replace = !!replaceProp || _reactRouter.createPath(location) === _reactRouter.createPath(path);
            navigate(to, {
                replace,
                state
            });
        }
    }, [
        location,
        navigate,
        path,
        replaceProp,
        state,
        target,
        to
    ]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */ function useSearchParams(defaultInit) {
    warning(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
    let defaultSearchParamsRef = _react.useRef(createSearchParams(defaultInit));
    let location = _reactRouter.useLocation();
    let searchParams1 = _react.useMemo(()=>{
        let searchParams = createSearchParams(location.search);
        for (let key of defaultSearchParamsRef.current.keys())if (!searchParams.has(key)) defaultSearchParamsRef.current.getAll(key).forEach((value)=>{
            searchParams.append(key, value);
        });
        return searchParams;
    }, [
        location.search
    ]);
    let navigate = _reactRouter.useNavigate();
    let setSearchParams = _react.useCallback((nextInit, navigateOptions)=>{
        navigate("?" + createSearchParams(nextInit), navigateOptions);
    }, [
        navigate
    ]);
    return [
        searchParams1,
        setSearchParams
    ];
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */ function createSearchParams(init) {
    if (init === void 0) init = "";
    return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key)=>{
        let value = init[key];
        return memo.concat(Array.isArray(value) ? value.map((v)=>[
                key,
                v
            ]
        ) : [
            [
                key,
                value
            ]
        ]);
    }, []));
}

},{"react":"21dqq","history":"iE5Zp","react-router":"btA8E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iE5Zp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Action", ()=>Action
);
parcelHelpers.export(exports, "createBrowserHistory", ()=>createBrowserHistory
);
parcelHelpers.export(exports, "createHashHistory", ()=>createHashHistory
);
parcelHelpers.export(exports, "createMemoryHistory", ()=>createMemoryHistory
);
parcelHelpers.export(exports, "createPath", ()=>createPath
);
parcelHelpers.export(exports, "parsePath", ()=>parsePath
);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
/**
 * Actions represent the type of change to a location value.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
 */ var Action;
(function(Action1) {
    /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */ Action1["Pop"] = "POP";
    /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */ Action1["Push"] = "PUSH";
    /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */ Action1["Replace"] = "REPLACE";
})(Action || (Action = {}));
var readOnly = function(obj) {
    return Object.freeze(obj);
};
function warning(cond, message) {
    if (!cond) {
        // eslint-disable-next-line no-console
        if (typeof console !== 'undefined') console.warn(message);
        try {
            // Welcome to debugging history!
            //
            // This error is thrown as a convenience so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message); // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}
var BeforeUnloadEventType = 'beforeunload';
var HashChangeEventType = 'hashchange';
var PopStateEventType = 'popstate';
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */ function createBrowserHistory(options) {
    if (options === void 0) options = {};
    var _options = options, _options$window = _options.window, window = _options$window === void 0 ? document.defaultView : _options$window;
    var globalHistory = window.history;
    function getIndexAndLocation() {
        var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
        var state = globalHistory.state || {};
        return [
            state.idx,
            readOnly({
                pathname: pathname,
                search: search,
                hash: hash,
                state: state.usr || null,
                key: state.key || 'default'
            })
        ];
    }
    var blockedPopTx = null;
    function handlePop() {
        if (blockedPopTx) {
            blockers.call(blockedPopTx);
            blockedPopTx = null;
        } else {
            var nextAction = Action.Pop;
            var _getIndexAndLocation = getIndexAndLocation(), nextIndex = _getIndexAndLocation[0], nextLocation = _getIndexAndLocation[1];
            if (blockers.length) {
                if (nextIndex != null) {
                    var delta = index1 - nextIndex;
                    if (delta) {
                        // Revert the POP
                        blockedPopTx = {
                            action: nextAction,
                            location: nextLocation,
                            retry: function retry() {
                                go(delta * -1);
                            }
                        };
                        go(delta);
                    }
                } else warning(false, // detail and link to it here so people can understand better what
                // is going on and how to avoid it.
                "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
            } else applyTx(nextAction);
        }
    }
    window.addEventListener(PopStateEventType, handlePop);
    var action1 = Action.Pop;
    var _getIndexAndLocation2 = getIndexAndLocation(), index1 = _getIndexAndLocation2[0], location1 = _getIndexAndLocation2[1];
    var listeners = createEvents();
    var blockers = createEvents();
    if (index1 == null) {
        index1 = 0;
        globalHistory.replaceState(_extendsDefault.default({}, globalHistory.state, {
            idx: index1
        }), '');
    }
    function createHref(to) {
        return typeof to === 'string' ? to : createPath(to);
    } // state defaults to `null` because `window.history.state` does
    function getNextLocation(to, state) {
        if (state === void 0) state = null;
        return readOnly(_extendsDefault.default({
            pathname: location1.pathname,
            hash: '',
            search: ''
        }, typeof to === 'string' ? parsePath(to) : to, {
            state: state,
            key: createKey()
        }));
    }
    function getHistoryStateAndUrl(nextLocation, index) {
        return [
            {
                usr: nextLocation.state,
                key: nextLocation.key,
                idx: index
            },
            createHref(nextLocation)
        ];
    }
    function allowTx(action, location, retry) {
        return !blockers.length || (blockers.call({
            action: action,
            location: location,
            retry: retry
        }), false);
    }
    function applyTx(nextAction) {
        action1 = nextAction;
        var _getIndexAndLocation3 = getIndexAndLocation();
        index1 = _getIndexAndLocation3[0];
        location1 = _getIndexAndLocation3[1];
        listeners.call({
            action: action1,
            location: location1
        });
    }
    function push(to, state) {
        var nextAction = Action.Push;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            push(to, state);
        }
        if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index1 + 1), historyState = _getHistoryStateAndUr[0], url = _getHistoryStateAndUr[1]; // TODO: Support forced reloading
            // try...catch because iOS limits us to 100 pushState calls :/
            try {
                globalHistory.pushState(historyState, '', url);
            } catch (error) {
                // They are going to lose state here, but there is no real
                // way to warn them about it since the page will refresh...
                window.location.assign(url);
            }
            applyTx(nextAction);
        }
    }
    function replace(to, state) {
        var nextAction = Action.Replace;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            replace(to, state);
        }
        if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index1), historyState = _getHistoryStateAndUr2[0], url = _getHistoryStateAndUr2[1]; // TODO: Support forced reloading
            globalHistory.replaceState(historyState, '', url);
            applyTx(nextAction);
        }
    }
    function go(delta) {
        globalHistory.go(delta);
    }
    var history = {
        get action () {
            return action1;
        },
        get location () {
            return location1;
        },
        createHref: createHref,
        push: push,
        replace: replace,
        go: go,
        back: function back() {
            go(-1);
        },
        forward: function forward() {
            go(1);
        },
        listen: function listen(listener) {
            return listeners.push(listener);
        },
        block: function block(blocker) {
            var unblock = blockers.push(blocker);
            if (blockers.length === 1) window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
            return function() {
                unblock(); // Remove the beforeunload listener so the document may
                // still be salvageable in the pagehide event.
                // See https://html.spec.whatwg.org/#unloading-documents
                if (!blockers.length) window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
            };
        }
    };
    return history;
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */ function createHashHistory(options) {
    if (options === void 0) options = {};
    var _options2 = options, _options2$window = _options2.window, window = _options2$window === void 0 ? document.defaultView : _options2$window;
    var globalHistory = window.history;
    function getIndexAndLocation() {
        var _parsePath = parsePath(window.location.hash.substr(1)), _parsePath$pathname = _parsePath.pathname, pathname = _parsePath$pathname === void 0 ? '/' : _parsePath$pathname, _parsePath$search = _parsePath.search, search = _parsePath$search === void 0 ? '' : _parsePath$search, _parsePath$hash = _parsePath.hash, hash = _parsePath$hash === void 0 ? '' : _parsePath$hash;
        var state = globalHistory.state || {};
        return [
            state.idx,
            readOnly({
                pathname: pathname,
                search: search,
                hash: hash,
                state: state.usr || null,
                key: state.key || 'default'
            })
        ];
    }
    var blockedPopTx = null;
    function handlePop() {
        if (blockedPopTx) {
            blockers.call(blockedPopTx);
            blockedPopTx = null;
        } else {
            var nextAction = Action.Pop;
            var _getIndexAndLocation4 = getIndexAndLocation(), nextIndex = _getIndexAndLocation4[0], nextLocation = _getIndexAndLocation4[1];
            if (blockers.length) {
                if (nextIndex != null) {
                    var delta = index2 - nextIndex;
                    if (delta) {
                        // Revert the POP
                        blockedPopTx = {
                            action: nextAction,
                            location: nextLocation,
                            retry: function retry() {
                                go(delta * -1);
                            }
                        };
                        go(delta);
                    }
                } else warning(false, // detail and link to it here so people can understand better
                // what is going on and how to avoid it.
                "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
            } else applyTx(nextAction);
        }
    }
    window.addEventListener(PopStateEventType, handlePop); // popstate does not fire on hashchange in IE 11 and old (trident) Edge
    // https://developer.mozilla.org/de/docs/Web/API/Window/popstate_event
    window.addEventListener(HashChangeEventType, function() {
        var _getIndexAndLocation5 = getIndexAndLocation(), nextLocation = _getIndexAndLocation5[1]; // Ignore extraneous hashchange events.
        if (createPath(nextLocation) !== createPath(location2)) handlePop();
    });
    var action2 = Action.Pop;
    var _getIndexAndLocation6 = getIndexAndLocation(), index2 = _getIndexAndLocation6[0], location2 = _getIndexAndLocation6[1];
    var listeners = createEvents();
    var blockers = createEvents();
    if (index2 == null) {
        index2 = 0;
        globalHistory.replaceState(_extendsDefault.default({}, globalHistory.state, {
            idx: index2
        }), '');
    }
    function getBaseHref() {
        var base = document.querySelector('base');
        var href = '';
        if (base && base.getAttribute('href')) {
            var url = window.location.href;
            var hashIndex = url.indexOf('#');
            href = hashIndex === -1 ? url : url.slice(0, hashIndex);
        }
        return href;
    }
    function createHref(to) {
        return getBaseHref() + '#' + (typeof to === 'string' ? to : createPath(to));
    }
    function getNextLocation(to, state) {
        if (state === void 0) state = null;
        return readOnly(_extendsDefault.default({
            pathname: location2.pathname,
            hash: '',
            search: ''
        }, typeof to === 'string' ? parsePath(to) : to, {
            state: state,
            key: createKey()
        }));
    }
    function getHistoryStateAndUrl(nextLocation, index) {
        return [
            {
                usr: nextLocation.state,
                key: nextLocation.key,
                idx: index
            },
            createHref(nextLocation)
        ];
    }
    function allowTx(action, location, retry) {
        return !blockers.length || (blockers.call({
            action: action,
            location: location,
            retry: retry
        }), false);
    }
    function applyTx(nextAction) {
        action2 = nextAction;
        var _getIndexAndLocation7 = getIndexAndLocation();
        index2 = _getIndexAndLocation7[0];
        location2 = _getIndexAndLocation7[1];
        listeners.call({
            action: action2,
            location: location2
        });
    }
    function push(to, state) {
        var nextAction = Action.Push;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            push(to, state);
        }
        warning(nextLocation.pathname.charAt(0) === '/', "Relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
        if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index2 + 1), historyState = _getHistoryStateAndUr3[0], url = _getHistoryStateAndUr3[1]; // TODO: Support forced reloading
            // try...catch because iOS limits us to 100 pushState calls :/
            try {
                globalHistory.pushState(historyState, '', url);
            } catch (error) {
                // They are going to lose state here, but there is no real
                // way to warn them about it since the page will refresh...
                window.location.assign(url);
            }
            applyTx(nextAction);
        }
    }
    function replace(to, state) {
        var nextAction = Action.Replace;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            replace(to, state);
        }
        warning(nextLocation.pathname.charAt(0) === '/', "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(to) + ")");
        if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index2), historyState = _getHistoryStateAndUr4[0], url = _getHistoryStateAndUr4[1]; // TODO: Support forced reloading
            globalHistory.replaceState(historyState, '', url);
            applyTx(nextAction);
        }
    }
    function go(delta) {
        globalHistory.go(delta);
    }
    var history = {
        get action () {
            return action2;
        },
        get location () {
            return location2;
        },
        createHref: createHref,
        push: push,
        replace: replace,
        go: go,
        back: function back() {
            go(-1);
        },
        forward: function forward() {
            go(1);
        },
        listen: function listen(listener) {
            return listeners.push(listener);
        },
        block: function block(blocker) {
            var unblock = blockers.push(blocker);
            if (blockers.length === 1) window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
            return function() {
                unblock(); // Remove the beforeunload listener so the document may
                // still be salvageable in the pagehide event.
                // See https://html.spec.whatwg.org/#unloading-documents
                if (!blockers.length) window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
            };
        }
    };
    return history;
}
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#creatememoryhistory
 */ function createMemoryHistory(options) {
    if (options === void 0) options = {};
    var _options3 = options, _options3$initialEntr = _options3.initialEntries, initialEntries = _options3$initialEntr === void 0 ? [
        '/'
    ] : _options3$initialEntr, initialIndex = _options3.initialIndex;
    var entries = initialEntries.map(function(entry) {
        var location = readOnly(_extendsDefault.default({
            pathname: '/',
            search: '',
            hash: '',
            state: null,
            key: createKey()
        }, typeof entry === 'string' ? parsePath(entry) : entry));
        warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: " + JSON.stringify(entry) + ")");
        return location;
    });
    var index = clamp(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);
    var action3 = Action.Pop;
    var location3 = entries[index];
    var listeners = createEvents();
    var blockers = createEvents();
    function createHref(to) {
        return typeof to === 'string' ? to : createPath(to);
    }
    function getNextLocation(to, state) {
        if (state === void 0) state = null;
        return readOnly(_extendsDefault.default({
            pathname: location3.pathname,
            search: '',
            hash: ''
        }, typeof to === 'string' ? parsePath(to) : to, {
            state: state,
            key: createKey()
        }));
    }
    function allowTx(action, location, retry) {
        return !blockers.length || (blockers.call({
            action: action,
            location: location,
            retry: retry
        }), false);
    }
    function applyTx(nextAction, nextLocation) {
        action3 = nextAction;
        location3 = nextLocation;
        listeners.call({
            action: action3,
            location: location3
        });
    }
    function push(to, state) {
        var nextAction = Action.Push;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            push(to, state);
        }
        warning(location3.pathname.charAt(0) === '/', "Relative pathnames are not supported in memory history.push(" + JSON.stringify(to) + ")");
        if (allowTx(nextAction, nextLocation, retry)) {
            index += 1;
            entries.splice(index, entries.length, nextLocation);
            applyTx(nextAction, nextLocation);
        }
    }
    function replace(to, state) {
        var nextAction = Action.Replace;
        var nextLocation = getNextLocation(to, state);
        function retry() {
            replace(to, state);
        }
        warning(location3.pathname.charAt(0) === '/', "Relative pathnames are not supported in memory history.replace(" + JSON.stringify(to) + ")");
        if (allowTx(nextAction, nextLocation, retry)) {
            entries[index] = nextLocation;
            applyTx(nextAction, nextLocation);
        }
    }
    function go(delta) {
        var nextIndex = clamp(index + delta, 0, entries.length - 1);
        var nextAction = Action.Pop;
        var nextLocation = entries[nextIndex];
        function retry() {
            go(delta);
        }
        if (allowTx(nextAction, nextLocation, retry)) {
            index = nextIndex;
            applyTx(nextAction, nextLocation);
        }
    }
    var history = {
        get index () {
            return index;
        },
        get action () {
            return action3;
        },
        get location () {
            return location3;
        },
        createHref: createHref,
        push: push,
        replace: replace,
        go: go,
        back: function back() {
            go(-1);
        },
        forward: function forward() {
            go(1);
        },
        listen: function listen(listener) {
            return listeners.push(listener);
        },
        block: function block(blocker) {
            return blockers.push(blocker);
        }
    };
    return history;
} ////////////////////////////////////////////////////////////////////////////////
// UTILS
////////////////////////////////////////////////////////////////////////////////
function clamp(n, lowerBound, upperBound) {
    return Math.min(Math.max(n, lowerBound), upperBound);
}
function promptBeforeUnload(event) {
    // Cancel the event.
    event.preventDefault(); // Chrome (and legacy IE) requires returnValue to be set.
    event.returnValue = '';
}
function createEvents() {
    var handlers = [];
    return {
        get length () {
            return handlers.length;
        },
        push: function push(fn) {
            handlers.push(fn);
            return function() {
                handlers = handlers.filter(function(handler) {
                    return handler !== fn;
                });
            };
        },
        call: function call(arg) {
            handlers.forEach(function(fn) {
                return fn && fn(arg);
            });
        }
    };
}
function createKey() {
    return Math.random().toString(36).substr(2, 8);
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath
 */ function createPath(_ref) {
    var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? '/' : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? '' : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? '' : _ref$hash;
    if (search && search !== '?') pathname += search.charAt(0) === '?' ? search : '?' + search;
    if (hash && hash !== '#') pathname += hash.charAt(0) === '#' ? hash : '#' + hash;
    return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath
 */ function parsePath(path) {
    var parsedPath = {};
    if (path) {
        var hashIndex = path.indexOf('#');
        if (hashIndex >= 0) {
            parsedPath.hash = path.substr(hashIndex);
            path = path.substr(0, hashIndex);
        }
        var searchIndex = path.indexOf('?');
        if (searchIndex >= 0) {
            parsedPath.search = path.substr(searchIndex);
            path = path.substr(0, searchIndex);
        }
        if (path) parsedPath.pathname = path;
    }
    return parsedPath;
}

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fTBFS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
exports.default = _extends;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"btA8E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NavigationType", ()=>_history.Action
);
parcelHelpers.export(exports, "createPath", ()=>_history.createPath
);
parcelHelpers.export(exports, "parsePath", ()=>_history.parsePath
);
parcelHelpers.export(exports, "MemoryRouter", ()=>MemoryRouter
);
parcelHelpers.export(exports, "Navigate", ()=>Navigate
);
parcelHelpers.export(exports, "Outlet", ()=>Outlet
);
parcelHelpers.export(exports, "Route", ()=>Route
);
parcelHelpers.export(exports, "Router", ()=>Router
);
parcelHelpers.export(exports, "Routes", ()=>Routes
);
parcelHelpers.export(exports, "UNSAFE_LocationContext", ()=>LocationContext
);
parcelHelpers.export(exports, "UNSAFE_NavigationContext", ()=>NavigationContext
);
parcelHelpers.export(exports, "UNSAFE_RouteContext", ()=>RouteContext
);
parcelHelpers.export(exports, "createRoutesFromChildren", ()=>createRoutesFromChildren
);
parcelHelpers.export(exports, "generatePath", ()=>generatePath
);
parcelHelpers.export(exports, "matchPath", ()=>matchPath
);
parcelHelpers.export(exports, "matchRoutes", ()=>matchRoutes
);
parcelHelpers.export(exports, "renderMatches", ()=>renderMatches
);
parcelHelpers.export(exports, "resolvePath", ()=>resolvePath
);
parcelHelpers.export(exports, "useHref", ()=>useHref
);
parcelHelpers.export(exports, "useInRouterContext", ()=>useInRouterContext
);
parcelHelpers.export(exports, "useLocation", ()=>useLocation
);
parcelHelpers.export(exports, "useMatch", ()=>useMatch
);
parcelHelpers.export(exports, "useNavigate", ()=>useNavigate
);
parcelHelpers.export(exports, "useNavigationType", ()=>useNavigationType
);
parcelHelpers.export(exports, "useOutlet", ()=>useOutlet
);
parcelHelpers.export(exports, "useOutletContext", ()=>useOutletContext
);
parcelHelpers.export(exports, "useParams", ()=>useParams
);
parcelHelpers.export(exports, "useResolvedPath", ()=>useResolvedPath
);
parcelHelpers.export(exports, "useRoutes", ()=>useRoutes
);
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var _history = require("history");
var _react = require("react");
const NavigationContext = /*#__PURE__*/ _react.createContext(null);
NavigationContext.displayName = "Navigation";
const LocationContext = /*#__PURE__*/ _react.createContext(null);
LocationContext.displayName = "Location";
const RouteContext = /*#__PURE__*/ _react.createContext({
    outlet: null,
    matches: []
});
RouteContext.displayName = "Route";
function invariant(cond, message) {
    if (!cond) throw new Error(message);
}
function warning(cond, message) {
    if (!cond) {
        // eslint-disable-next-line no-console
        if (typeof console !== "undefined") console.warn(message);
        try {
            // Welcome to debugging React Router!
            //
            // This error is thrown as a convenience so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message); // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
        alreadyWarned[key] = true;
        warning(false, message);
    }
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/docs/en/v6/api#generatepath
 */ function generatePath(path, params) {
    if (params === void 0) params = {};
    return path.replace(/:(\w+)/g, (_, key)=>{
        !(params[key] != null) && invariant(false, "Missing \":" + key + "\" param");
        return params[key];
    }).replace(/\/*\*$/, (_)=>params["*"] == null ? "" : params["*"].replace(/^\/*/, "/")
    );
}
/**
 * A RouteMatch contains info about how a route matched a URL.
 */ /**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchroutes
 */ function matchRoutes(routes, locationArg, basename) {
    if (basename === void 0) basename = "/";
    let location = typeof locationArg === "string" ? _history.parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) return null;
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    let matches = null;
    for(let i = 0; matches == null && i < branches.length; ++i)matches = matchRouteBranch(branches[i], pathname);
    return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
    if (branches === void 0) branches = [];
    if (parentsMeta === void 0) parentsMeta = [];
    if (parentPath === void 0) parentPath = "";
    routes.forEach((route, index)=>{
        let meta = {
            relativePath: route.path || "",
            caseSensitive: route.caseSensitive === true,
            childrenIndex: index,
            route
        };
        if (meta.relativePath.startsWith("/")) {
            !meta.relativePath.startsWith(parentPath) && invariant(false, "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
            meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = joinPaths([
            parentPath,
            meta.relativePath
        ]);
        let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
        // route tree depth-first and child routes appear before their parents in
        // the "flattened" version.
        if (route.children && route.children.length > 0) {
            !(route.index !== true) && invariant(false, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
            flattenRoutes(route.children, branches, routesMeta, path);
        } // Routes without a path shouldn't ever match by themselves unless they are
        // index routes, so don't add them to the list of possible branches.
        if (route.path == null && !route.index) return;
        branches.push({
            path,
            score: computeScore(path, route.index),
            routesMeta
        });
    });
    return branches;
}
function rankRouteBranches(branches) {
    branches.sort((a, b)=>a.score !== b.score ? b.score - a.score // Higher score first
         : compareIndexes(a.routesMeta.map((meta)=>meta.childrenIndex
        ), b.routesMeta.map((meta)=>meta.childrenIndex
        ))
    );
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s)=>s === "*"
;
function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) initialScore += splatPenalty;
    if (index) initialScore += indexRouteValue;
    return segments.filter((s)=>!isSplat(s)
    ).reduce((score, segment)=>score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue)
    , initialScore);
}
function compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i)=>n === b[i]
    );
    return siblings ? // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1] : // so they sort equally.
    0;
}
function matchRouteBranch(branch, pathname) {
    let { routesMeta  } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for(let i = 0; i < routesMeta.length; ++i){
        let meta = routesMeta[i];
        let end = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match = matchPath({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end
        }, remainingPathname);
        if (!match) return null;
        Object.assign(matchedParams, match.params);
        let route = meta.route;
        matches.push({
            params: matchedParams,
            pathname: joinPaths([
                matchedPathname,
                match.pathname
            ]),
            pathnameBase: normalizePathname(joinPaths([
                matchedPathname,
                match.pathnameBase
            ])),
            route
        });
        if (match.pathnameBase !== "/") matchedPathname = joinPaths([
            matchedPathname,
            match.pathnameBase
        ]);
    }
    return matches;
}
/**
 * A PathPattern is used to match on some portion of a URL pathname.
 */ /**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchpath
 */ function matchPath(pattern, pathname) {
    if (typeof pattern === "string") pattern = {
        path: pattern,
        caseSensitive: false,
        end: true
    };
    let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match.slice(1);
    let params = paramNames.reduce((memo, paramName, index)=>{
        // We need to compute the pathnameBase here using the raw splat value
        // instead of using params["*"] later because it will be decoded then
        if (paramName === "*") {
            let splatValue = captureGroups[index] || "";
            pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
        return memo;
    }, {});
    return {
        params,
        pathname: matchedPathname,
        pathnameBase,
        pattern
    };
}
function compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) caseSensitive = false;
    if (end === void 0) end = true;
    warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    let paramNames = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
    .replace(/^\/*/, "/") // Make sure it has a leading /
    .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
    .replace(/:(\w+)/g, (_, paramName)=>{
        paramNames.push(paramName);
        return "([^\\/]+)";
    });
    if (path.endsWith("*")) {
        paramNames.push("*");
        regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
         : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
    } else regexpSource += end ? "\\/*$" // When matching to the end, ignore trailing slashes
     : // parent routes to matching only their own words and nothing more, e.g. parent
    // route "/home" should not match "/home2".
    // Additionally, allow paths starting with `.`, `-`, `~`, and url-encoded entities,
    // but do not consume the character in the matched path so they can match against
    // nested paths.
    "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
    let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
    return [
        matcher,
        paramNames
    ];
}
function safelyDecodeURIComponent(value, paramName) {
    try {
        return decodeURIComponent(value);
    } catch (error) {
        warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
        return value;
    }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/docs/en/v6/api#resolvepath
 */ function resolvePath(to, fromPathname) {
    if (fromPathname === void 0) fromPathname = "/";
    let { pathname: toPathname , search ="" , hash =""  } = typeof to === "string" ? _history.parsePath(to) : to;
    let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
        pathname,
        search: normalizeSearch(search),
        hash: normalizeHash(hash)
    };
}
function resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment)=>{
        if (segment === "..") // Keep the root "" segment so the pathname starts at /
        {
            if (segments.length > 1) segments.pop();
        } else if (segment !== ".") segments.push(segment);
    });
    return segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo(toArg, routePathnames, locationPathname) {
    let to = typeof toArg === "string" ? _history.parsePath(toArg) : toArg;
    let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname; // If a pathname is explicitly provided in `to`, it should be relative to the
    // route context. This is explained in `Note on `<Link to>` values` in our
    // migration guide from v5 as a means of disambiguation between `to` values
    // that begin with `/` and those that do not. However, this is problematic for
    // `to` values that do not provide a pathname. `to` can simply be a search or
    // hash string, in which case we should assume that the navigation is relative
    // to the current location's pathname and *not* the route pathname.
    let from;
    if (toPathname == null) from = locationPathname;
    else {
        let routePathnameIndex = routePathnames.length - 1;
        if (toPathname.startsWith("..")) {
            let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
            // URL segment".  This is a key difference from how <a href> works and a
            // major reason we call this a "to" value instead of a "href".
            while(toSegments[0] === ".."){
                toSegments.shift();
                routePathnameIndex -= 1;
            }
            to.pathname = toSegments.join("/");
        } // If there are more ".." segments than parent routes, resolve relative to
        // the root / URL.
        from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original to value had one.
    if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) path.pathname += "/";
    return path;
}
function getToPathname(to) {
    // Empty strings should be treated the same as / paths
    return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? _history.parsePath(to).pathname : to.pathname;
}
function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) return null;
    let nextChar = pathname.charAt(basename.length);
    if (nextChar && nextChar !== "/") // pathname does not start with basename/
    return null;
    return pathname.slice(basename.length) || "/";
}
const joinPaths = (paths)=>paths.join("/").replace(/\/\/+/g, "/")
;
const normalizePathname = (pathname)=>pathname.replace(/\/+$/, "").replace(/^\/*/, "/")
;
const normalizeSearch = (search)=>!search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search
;
const normalizeHash = (hash)=>!hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash
;
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usehref
 */ function useHref(to) {
    !useInRouterContext() && invariant(false, // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component.");
    let { basename , navigator  } = _react.useContext(NavigationContext);
    let { hash , pathname , search  } = useResolvedPath(to);
    let joinedPathname = pathname;
    if (basename !== "/") {
        let toPathname = getToPathname(to);
        let endsWithSlash = toPathname != null && toPathname.endsWith("/");
        joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([
            basename,
            pathname
        ]);
    }
    return navigator.createHref({
        pathname: joinedPathname,
        search,
        hash
    });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useinroutercontext
 */ function useInRouterContext() {
    return _react.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/docs/en/v6/api#uselocation
 */ function useLocation() {
    !useInRouterContext() && invariant(false, // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component.");
    return _react.useContext(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigationtype
 */ function useNavigationType() {
    return _react.useContext(LocationContext).navigationType;
}
/**
 * Returns true if the URL for the given "to" value matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usematch
 */ function useMatch(pattern) {
    !useInRouterContext() && invariant(false, // router loaded. We can help them understand how to avoid that.
    "useMatch() may be used only in the context of a <Router> component.");
    let { pathname  } = useLocation();
    return _react.useMemo(()=>matchPath(pattern, pathname)
    , [
        pathname,
        pattern
    ]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */ /**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigate
 */ function useNavigate() {
    !useInRouterContext() && invariant(false, // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component.");
    let { basename , navigator  } = _react.useContext(NavigationContext);
    let { matches  } = _react.useContext(RouteContext);
    let { pathname: locationPathname  } = useLocation();
    let routePathnamesJson = JSON.stringify(matches.map((match)=>match.pathnameBase
    ));
    let activeRef = _react.useRef(false);
    _react.useEffect(()=>{
        activeRef.current = true;
    });
    let navigate = _react.useCallback(function(to, options) {
        if (options === void 0) options = {};
        warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered.");
        if (!activeRef.current) return;
        if (typeof to === "number") {
            navigator.go(to);
            return;
        }
        let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
        if (basename !== "/") path.pathname = joinPaths([
            basename,
            path.pathname
        ]);
        (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
    }, [
        basename,
        navigator,
        routePathnamesJson,
        locationPathname
    ]);
    return navigate;
}
const OutletContext = /*#__PURE__*/ _react.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/docs/en/v6/api#useoutletcontext
 */ function useOutletContext() {
    return _react.useContext(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useoutlet
 */ function useOutlet(context) {
    let outlet = _react.useContext(RouteContext).outlet;
    if (outlet) return /*#__PURE__*/ _react.createElement(OutletContext.Provider, {
        value: context
    }, outlet);
    return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useparams
 */ function useParams() {
    let { matches  } = _react.useContext(RouteContext);
    let routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useresolvedpath
 */ function useResolvedPath(to) {
    let { matches  } = _react.useContext(RouteContext);
    let { pathname: locationPathname  } = useLocation();
    let routePathnamesJson = JSON.stringify(matches.map((match)=>match.pathnameBase
    ));
    return _react.useMemo(()=>resolveTo(to, JSON.parse(routePathnamesJson), locationPathname)
    , [
        to,
        routePathnamesJson,
        locationPathname
    ]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useroutes
 */ function useRoutes(routes, locationArg) {
    !useInRouterContext() && invariant(false, // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component.");
    let { matches: parentMatches  } = _react.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    {
        // You won't get a warning about 2 different <Routes> under a <Route>
        // without a trailing *, but this is a best-effort warning anyway since we
        // cannot even give the warning unless they land at the parent route.
        //
        // Example:
        //
        // <Routes>
        //   {/* This route path MUST end with /* because otherwise
        //       it will never match /blog/post/123 */}
        //   <Route path="blog" element={<Blog />} />
        //   <Route path="blog/feed" element={<BlogFeed />} />
        // </Routes>
        //
        // function Blog() {
        //   return (
        //     <Routes>
        //       <Route path="post/:id" element={<Post />} />
        //     </Routes>
        //   );
        // }
        let parentPath = parentRoute && parentRoute.path || "";
        warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
        var _parsedLocationArg$pa;
        let parsedLocationArg = typeof locationArg === "string" ? _history.parsePath(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) && invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop."));
        location = parsedLocationArg;
    } else location = locationFromContext;
    let pathname = location.pathname || "/";
    let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
    let matches = matchRoutes(routes, {
        pathname: remainingPathname
    });
    warning(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ");
    warning(matches == null || matches[matches.length - 1].route.element !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" does not have an element. " + "This means it will render an <Outlet /> with a null value by default resulting in an \"empty\" page.");
    return _renderMatches(matches && matches.map((match)=>Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: joinPaths([
                parentPathnameBase,
                match.pathname
            ]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
                parentPathnameBase,
                match.pathnameBase
            ])
        })
    ), parentMatches);
}
function _renderMatches(matches, parentMatches) {
    if (parentMatches === void 0) parentMatches = [];
    if (matches == null) return null;
    return matches.reduceRight((outlet, match, index)=>{
        return /*#__PURE__*/ _react.createElement(RouteContext.Provider, {
            children: match.route.element !== undefined ? match.route.element : outlet,
            value: {
                outlet,
                matches: parentMatches.concat(matches.slice(0, index + 1))
            }
        });
    }, null);
}
/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/docs/en/v6/api#memoryrouter
 */ function MemoryRouter(_ref) {
    let { basename , children , initialEntries , initialIndex  } = _ref;
    let historyRef = _react.useRef();
    if (historyRef.current == null) historyRef.current = _history.createMemoryHistory({
        initialEntries,
        initialIndex
    });
    let history = historyRef.current;
    let [state, setState] = _react.useState({
        action: history.action,
        location: history.location
    });
    _react.useLayoutEffect(()=>history.listen(setState)
    , [
        history
    ]);
    return /*#__PURE__*/ _react.createElement(Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/docs/en/v6/api#navigate
 */ function Navigate(_ref2) {
    let { to , replace , state  } = _ref2;
    !useInRouterContext() && invariant(false, // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component.");
    warning(!_react.useContext(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let navigate = useNavigate();
    _react.useEffect(()=>{
        navigate(to, {
            replace,
            state
        });
    });
    return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/docs/en/v6/api#outlet
 */ function Outlet(props) {
    return useOutlet(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#route
 */ function Route(_props) {
    invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/docs/en/v6/api#router
 */ function Router(_ref3) {
    let { basename: basenameProp = "/" , children =null , location: locationProp , navigationType =_history.Action.Pop , navigator , static: staticProp = false  } = _ref3;
    !!useInRouterContext() && invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let basename = normalizePathname(basenameProp);
    let navigationContext = _react.useMemo(()=>({
            basename,
            navigator,
            static: staticProp
        })
    , [
        basename,
        navigator,
        staticProp
    ]);
    if (typeof locationProp === "string") locationProp = _history.parsePath(locationProp);
    let { pathname ="/" , search ="" , hash ="" , state =null , key ="default"  } = locationProp;
    let location = _react.useMemo(()=>{
        let trailingPathname = stripBasename(pathname, basename);
        if (trailingPathname == null) return null;
        return {
            pathname: trailingPathname,
            search,
            hash,
            state,
            key
        };
    }, [
        basename,
        pathname,
        search,
        hash,
        state,
        key
    ]);
    warning(location != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.");
    if (location == null) return null;
    return /*#__PURE__*/ _react.createElement(NavigationContext.Provider, {
        value: navigationContext
    }, /*#__PURE__*/ _react.createElement(LocationContext.Provider, {
        children: children,
        value: {
            location,
            navigationType
        }
    }));
}
/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#routes
 */ function Routes(_ref4) {
    let { children , location  } = _ref4;
    return useRoutes(createRoutesFromChildren(children), location);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/docs/en/v6/api#createroutesfromchildren
 */ function createRoutesFromChildren(children) {
    let routes = [];
    _react.Children.forEach(children, (element)=>{
        if (!/*#__PURE__*/ _react.isValidElement(element)) // Ignore non-elements. This allows people to more easily inline
        // conditionals in their route config.
        return;
        if (element.type === _react.Fragment) {
            // Transparently support React.Fragment and its children.
            routes.push.apply(routes, createRoutesFromChildren(element.props.children));
            return;
        }
        !(element.type === Route) && invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>");
        let route = {
            caseSensitive: element.props.caseSensitive,
            element: element.props.element,
            index: element.props.index,
            path: element.props.path
        };
        if (element.props.children) route.children = createRoutesFromChildren(element.props.children);
        routes.push(route);
    });
    return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */ function renderMatches(matches) {
    return _renderMatches(matches);
}

},{"history":"iE5Zp","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2OVeV":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$66c2 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$66c2.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _footerCss = require("../Style/footer.css");
var _homeSvg = require("../images/home.svg");
var _homeSvgDefault = parcelHelpers.interopDefault(_homeSvg);
const Footer = ()=>{
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_react.Fragment, {
        children: [
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                className: "footer"
            }, void 0, false, {
                fileName: "src/components/Footer.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                className: "footer-mobile",
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "home",
                        children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("img", {
                            src: _homeSvgDefault.default,
                            alt: "home button"
                        }, void 0, false, {
                            fileName: "src/components/Footer.jsx",
                            lineNumber: 13,
                            columnNumber: 21
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/Footer.jsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "plus-btn",
                        children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                            className: "round",
                            children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "roundplus-btn",
                                children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "src/components/Footer.jsx",
                                    lineNumber: 18,
                                    columnNumber: 29
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/Footer.jsx",
                                lineNumber: 17,
                                columnNumber: 25
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/Footer.jsx",
                            lineNumber: 16,
                            columnNumber: 21
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/Footer.jsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "user",
                        children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                            className: "image"
                        }, void 0, false, {
                            fileName: "src/components/Footer.jsx",
                            lineNumber: 23,
                            columnNumber: 21
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/Footer.jsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Footer.jsx",
                lineNumber: 11,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Footer.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, undefined);
};
_c = Footer;
exports.default = Footer;
var _c;
$RefreshReg$(_c, "Footer");

  $parcel$ReactRefreshHelpers$66c2.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../Style/footer.css":"ewAhO","../images/home.svg":"6NsvK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"ewAhO":[function() {},{}],"6NsvK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('kFIdX') + "home.2c7b2091.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"km3Ru":[function(require,module,exports) {
"use strict";
var Refresh = require('react-refresh/runtime');
function debounce(func, delay) {
    var args1;
    var timeout = undefined;
    return function(args) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = undefined;
            func.call(null, args);
        }, delay);
    };
}
var enqueueUpdate = debounce(function() {
    Refresh.performReactRefresh();
}, 30); // Everthing below is either adapted or copied from
// https://github.com/facebook/metro/blob/61de16bd1edd7e738dd0311c89555a644023ab2d/packages/metro/src/lib/polyfills/require.js
// MIT License - Copyright (c) Facebook, Inc. and its affiliates.
module.exports.prelude = function(module) {
    window.$RefreshReg$ = function(type, id) {
        Refresh.register(type, module.id + ' ' + id);
    };
    window.$RefreshSig$ = Refresh.createSignatureFunctionForTransform;
};
module.exports.postlude = function(module) {
    if (isReactRefreshBoundary(module.exports)) {
        registerExportsForReactRefresh(module);
        if (module.hot) {
            module.hot.dispose(function(data) {
                if (Refresh.hasUnrecoverableErrors()) window.location.reload();
                data.prevExports = module.exports;
            });
            module.hot.accept(function(getParents) {
                var prevExports = module.hot.data.prevExports;
                var nextExports = module.exports; // Since we just executed the code for it, it's possible
                // that the new exports make it ineligible for being a boundary.
                var isNoLongerABoundary = !isReactRefreshBoundary(nextExports); // It can also become ineligible if its exports are incompatible
                // with the previous exports.
                // For example, if you add/remove/change exports, we'll want
                // to re-execute the importing modules, and force those components
                // to re-render. Similarly, if you convert a class component
                // to a function, we want to invalidate the boundary.
                var didInvalidate = shouldInvalidateReactRefreshBoundary(prevExports, nextExports);
                if (isNoLongerABoundary || didInvalidate) {
                    // We'll be conservative. The only case in which we won't do a full
                    // reload is if all parent modules are also refresh boundaries.
                    // In that case we'll add them to the current queue.
                    var parents = getParents();
                    if (parents.length === 0) {
                        // Looks like we bubbled to the root. Can't recover from that.
                        window.location.reload();
                        return;
                    }
                    return parents;
                }
                enqueueUpdate();
            });
        }
    }
};
function isReactRefreshBoundary(exports) {
    if (Refresh.isLikelyComponentType(exports)) return true;
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    return false;
    var hasExports = false;
    var areAllExportsComponents = true;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        hasExports = true;
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) // Don't invoke getters for CJS as they may have side effects.
        return false;
        var exportValue = exports[key];
        if (!Refresh.isLikelyComponentType(exportValue)) areAllExportsComponents = false;
    }
    return hasExports && areAllExportsComponents;
}
function shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {
    var prevSignature = getRefreshBoundarySignature(prevExports);
    var nextSignature = getRefreshBoundarySignature(nextExports);
    if (prevSignature.length !== nextSignature.length) return true;
    for(var i = 0; i < nextSignature.length; i++){
        if (prevSignature[i] !== nextSignature[i]) return true;
    }
    return false;
} // When this signature changes, it's unsafe to stop at this refresh boundary.
function getRefreshBoundarySignature(exports) {
    var signature = [];
    signature.push(Refresh.getFamilyByType(exports));
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return signature;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        signature.push(key);
        signature.push(Refresh.getFamilyByType(exportValue));
    }
    return signature;
}
function registerExportsForReactRefresh(module) {
    var exports = module.exports, id = module.id;
    Refresh.register(exports, id + ' %exports%');
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        Refresh.register(exportValue, id + ' %exports% ' + key);
    }
}

},{"react-refresh/runtime":"786KC"}],"gEkAm":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$e54a = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$e54a.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _connect = require("./Connect");
var _connectDefault = parcelHelpers.interopDefault(_connect);
var _logPng = require("../images/log.png");
var _logPngDefault = parcelHelpers.interopDefault(_logPng);
var _navbarCss = require("../Style/navbar.css");
var _s = $RefreshSig$(), _s1 = $RefreshSig$();
function useOutsideAlerter(ref, form, setCheck, isActive) {
    _s();
    _react.useEffect(()=>{
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) && form.current && !form.current.contains(event.target)) {
                setCheck(false);
                isActive('');
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        ref,
        form
    ]);
}
_s(useOutsideAlerter, "OD7bBpZva5O2jO+Puf00hKivP7c=");
const Navbar = (props)=>{
    _s1();
    const [check, setCheck] = _react.useState(false);
    const [active, isActive] = _react.useState('');
    const btn = _react.useRef(null);
    const form = _react.useRef(null);
    useOutsideAlerter(btn, form, setCheck, isActive);
    const linkList = [
        [
            '/',
            'Logements'
        ],
        [
            '/',
            'Transports'
        ],
        [
            '/',
            'Alimentaire'
        ],
        [
            '/',
            'Sorties'
        ],
        [
            '/',
            'Forum'
        ]
    ];
    const handleButton = ()=>{
        if (check) ;
        else {
            setCheck(true);
            isActive(' active');
        }
    };
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
        className: "navbar",
        children: [
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                className: "navbar-mobile",
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("img", {
                        className: "logo",
                        src: _logPngDefault.default,
                        alt: "logo",
                        width: "100"
                    }, void 0, false, {
                        fileName: "src/components/navbar.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "btn-burger",
                        children: [
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "line"
                            }, void 0, false, {
                                fileName: "src/components/navbar.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "line"
                            }, void 0, false, {
                                fileName: "src/components/navbar.jsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "line"
                            }, void 0, false, {
                                fileName: "src/components/navbar.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/navbar.jsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/navbar.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                className: "navbar-top",
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.Link, {
                        to: "/",
                        children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("img", {
                            className: "logo",
                            src: _logPngDefault.default,
                            alt: "logo",
                            width: "200"
                        }, void 0, false, {
                            fileName: "src/components/navbar.jsx",
                            lineNumber: 59,
                            columnNumber: 22
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/navbar.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("button", {
                        form: "connection",
                        type: active.length && check ? 'submit' : '',
                        ref: btn,
                        className: "connect" + active,
                        onClick: handleButton,
                        children: "Se connecter"
                    }, void 0, false, {
                        fileName: "src/components/navbar.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, undefined),
                    check && /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_connectDefault.default, {
                        form: form,
                        isActive: isActive,
                        setCheck: setCheck,
                        check: check
                    }, void 0, false, {
                        fileName: "src/components/navbar.jsx",
                        lineNumber: 62,
                        columnNumber: 20
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/navbar.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                className: "navbar-bottom",
                children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("nav", {
                    children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("ul", {
                        children: linkList.map(([url, titre], index)=>/*#__PURE__*/ _jsxDevRuntime.jsxDEV("li", {
                                children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.Link, {
                                    to: url,
                                    children: titre
                                }, void 0, false, {
                                    fileName: "src/components/navbar.jsx",
                                    lineNumber: 69,
                                    columnNumber: 69
                                }, undefined)
                            }, index, false, {
                                fileName: "src/components/navbar.jsx",
                                lineNumber: 69,
                                columnNumber: 53
                            }, undefined)
                        )
                    }, void 0, false, {
                        fileName: "src/components/navbar.jsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/navbar.jsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/navbar.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/navbar.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, undefined);
};
_s1(Navbar, "vfQAHV8BF5w4s2F8lyHArdb0/VQ=", false, function() {
    return [
        useOutsideAlerter
    ];
});
_c = Navbar;
exports.default = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");

  $parcel$ReactRefreshHelpers$e54a.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"fdOAw","./Connect":"jhJYG","../images/log.png":"7vw2l","../Style/navbar.css":"2P91k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"jhJYG":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$9a98 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$9a98.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRouterDom = require("react-router-dom");
var _connectCss = require("../Style/connect.css");
const Connect = (props)=>{
    const form = props.form;
    const isActive = props.isActive;
    const setCheck = props.setCheck;
    const check = props.check;
    const handleCreate = ()=>{
        if (check) {
            setCheck(false);
            isActive('');
        }
    };
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV("form", {
        id: "connection",
        className: "connection",
        ref: form,
        onSubmit: (e)=>e.preventDefault()
        ,
        children: [
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                className: "inputs",
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "col",
                        children: [
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "email",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                        htmlFor: "email",
                                        children: "Adresse mail"
                                    }, void 0, false, {
                                        fileName: "src/components/Connect.jsx",
                                        lineNumber: 22,
                                        columnNumber: 25
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                        type: "email",
                                        name: "email",
                                        id: "email"
                                    }, void 0, false, {
                                        fileName: "src/components/Connect.jsx",
                                        lineNumber: 23,
                                        columnNumber: 25
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Connect.jsx",
                                lineNumber: 21,
                                columnNumber: 21
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "password",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                        htmlFor: "password",
                                        children: "Mot de passe"
                                    }, void 0, false, {
                                        fileName: "src/components/Connect.jsx",
                                        lineNumber: 26,
                                        columnNumber: 25
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                        type: "password",
                                        name: "password",
                                        id: "password"
                                    }, void 0, false, {
                                        fileName: "src/components/Connect.jsx",
                                        lineNumber: 27,
                                        columnNumber: 25
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Connect.jsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Connect.jsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "switch-check",
                        children: [
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                className: "switch",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                        type: "checkbox"
                                    }, void 0, false, {
                                        fileName: "src/components/Connect.jsx",
                                        lineNumber: 32,
                                        columnNumber: 25
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                        className: "slider"
                                    }, void 0, false, {
                                        fileName: "src/components/Connect.jsx",
                                        lineNumber: 33,
                                        columnNumber: 25
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Connect.jsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                children: "Restez connect\xe9 ?"
                            }, void 0, false, {
                                fileName: "src/components/Connect.jsx",
                                lineNumber: 35,
                                columnNumber: 21
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Connect.jsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Connect.jsx",
                lineNumber: 19,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                className: "inscription",
                children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactRouterDom.Link, {
                    to: "/inscription",
                    onClick: handleCreate,
                    children: [
                        "Vous n'avez pas encore de compte ? ",
                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("br", {}, void 0, false, {
                            fileName: "src/components/Connect.jsx",
                            lineNumber: 39,
                            columnNumber: 99
                        }, undefined),
                        " Cliquez ici pour vous inscrire."
                    ]
                }, void 0, true, {
                    fileName: "src/components/Connect.jsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Connect.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Connect.jsx",
        lineNumber: 18,
        columnNumber: 9
    }, undefined);
};
_c = Connect;
exports.default = Connect;
var _c;
$RefreshReg$(_c, "Connect");

  $parcel$ReactRefreshHelpers$9a98.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react-router-dom":"fdOAw","../Style/connect.css":"2TXih","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"2TXih":[function() {},{}],"7vw2l":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('kFIdX') + "log.8754315d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2P91k":[function() {},{}],"94zR7":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$365f = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$365f.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _accueilCss = require("../Style/accueil.css");
var _bg1Png = require("../images/bg1.png");
var _bg1PngDefault = parcelHelpers.interopDefault(_bg1Png);
var _planktonSvg = require("../images/plankton.svg");
var _planktonSvgDefault = parcelHelpers.interopDefault(_planktonSvg);
const Accueil = ()=>{
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_react.Fragment, {
        children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
            className: "mainContent",
            children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                className: "homepage-top",
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("img", {
                        src: _bg1PngDefault.default,
                        alt: "background image"
                    }, void 0, false, {
                        fileName: "src/pages/Accueil.jsx",
                        lineNumber: 11,
                        columnNumber: 21
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "top-content",
                        children: [
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "text",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("h1", {
                                        children: "La communaut\xe9 des bons planktons"
                                    }, void 0, false, {
                                        fileName: "src/pages/Accueil.jsx",
                                        lineNumber: 14,
                                        columnNumber: 29
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                        children: "Rejoins nous pour d\xe9couvrir les bons plans  pour les \xe9tudiants sur l\u2019agglom\xe9ration de Saint-Malo !"
                                    }, void 0, false, {
                                        fileName: "src/pages/Accueil.jsx",
                                        lineNumber: 15,
                                        columnNumber: 29
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Accueil.jsx",
                                lineNumber: 13,
                                columnNumber: 25
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "plankton",
                                children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("img", {
                                    src: _planktonSvgDefault.default,
                                    alt: "Plankton"
                                }, void 0, false, {
                                    fileName: "src/pages/Accueil.jsx",
                                    lineNumber: 18,
                                    columnNumber: 29
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/pages/Accueil.jsx",
                                lineNumber: 17,
                                columnNumber: 25
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Accueil.jsx",
                        lineNumber: 12,
                        columnNumber: 21
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/pages/Accueil.jsx",
                lineNumber: 10,
                columnNumber: 17
            }, undefined)
        }, void 0, false, {
            fileName: "src/pages/Accueil.jsx",
            lineNumber: 9,
            columnNumber: 13
        }, undefined)
    }, void 0, false, {
        fileName: "src/pages/Accueil.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, undefined);
};
_c = Accueil;
exports.default = Accueil;
var _c;
$RefreshReg$(_c, "Accueil");

  $parcel$ReactRefreshHelpers$365f.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../Style/accueil.css":"hasH6","../images/bg1.png":"5Nkjv","../images/plankton.svg":"fWMNe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"hasH6":[function() {},{}],"5Nkjv":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('kFIdX') + "bg1.d979bfc2.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"fWMNe":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('kFIdX') + "plankton.821552db.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"PfLvz":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$a6f0 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$a6f0.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _registerCss = require("../Style/register.css");
var _s = $RefreshSig$();
const Register = ()=>{
    _s();
    // Input partie top //
    const [lastname, setLastname] = _reactDefault.default.useState("");
    const [day, setDay] = _reactDefault.default.useState("");
    const [mouth, setMouth] = _reactDefault.default.useState("");
    const [year, setYear] = _reactDefault.default.useState("");
    const [firstname, setFirstname] = _reactDefault.default.useState("");
    const [adress, setAdresse] = _reactDefault.default.useState("");
    const [zipcode, setZipcode] = _reactDefault.default.useState("");
    const [email, setEmail] = _reactDefault.default.useState("");
    const [city, setCity] = _reactDefault.default.useState("");
    const [password, setPassword] = _reactDefault.default.useState("");
    const [phone, setPhone] = _reactDefault.default.useState("");
    // Input partie bottom //
    const [asso, setAsso] = _reactDefault.default.useState("");
    const [cateAsso, setCateAsso] = _reactDefault.default.useState("");
    const [adresseAgain, setAdresseAgain] = _reactDefault.default.useState("");
    const [zipcodeAgain, setZipcodeAgain] = _reactDefault.default.useState("");
    const [cityAgain, setCityAgain] = _reactDefault.default.useState("");
    const [phoneAgain, setPhoneAgain] = _reactDefault.default.useState("");
    const [typeAgain, setTypeAgain] = _reactDefault.default.useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch("http://localhost:3467/createAccount", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lastname,
                day,
                mouth,
                year,
                firstname,
                adress,
                zipcode,
                email,
                city,
                password,
                phone,
                asso,
                cateAsso,
                adresseAgain,
                zipcodeAgain,
                cityAgain,
                phoneAgain,
                typeAgain
            })
        }).then((res)=>console.log(res)
        );
    };
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
        className: "main",
        children: [
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("form", {
                className: "box_form",
                id: "Form",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("h1", {
                        className: "title_form",
                        children: "Inscription"
                    }, void 0, false, {
                        fileName: "src/pages/Register.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "select_type",
                        children: [
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "box_for_association",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                        type: "checkbox",
                                        id: "Association",
                                        className: "input_for_association"
                                    }, void 0, false, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                        htmlFor: "Association",
                                        className: "label_for_association",
                                        children: "Association"
                                    }, void 0, false, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Register.jsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "box_for_etudiant",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                        type: "checkbox",
                                        id: "Etudiant",
                                        className: "input_for_etudiant"
                                    }, void 0, false, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                        htmlFor: "Etudiant",
                                        className: "label_for_etudiant",
                                        children: "Etudiant"
                                    }, void 0, false, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Register.jsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "box_for_professionnel",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                        type: "checkbox",
                                        id: "Professionnel",
                                        className: "input_for_professionnel"
                                    }, void 0, false, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                        htmlFor: "Professionnel",
                                        className: "label_for_professionnel",
                                        children: "Professionnel"
                                    }, void 0, false, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Register.jsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Register.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "box_for_top_input",
                        children: [
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "box_name_birthday",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                        className: "box_name",
                                        children: [
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                                htmlFor: "Name",
                                                className: "label_for_association",
                                                children: "Nom"
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                                type: "text",
                                                id: "Name",
                                                className: "input_for_name",
                                                onChange: (e)=>setLastname(e.target.value)
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                        className: "box_birthday",
                                        children: [
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                                className: "label_for_birthday",
                                                children: "Date de naissance"
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                                className: "box_for_input_date",
                                                children: [
                                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                                        type: "number",
                                                        id: "Day",
                                                        className: "input_for_day",
                                                        onChange: (e)=>setDay(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Register.jsx",
                                                        lineNumber: 95,
                                                        columnNumber: 17
                                                    }, undefined),
                                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                                        type: "number",
                                                        id: "Month",
                                                        className: "input_for_month",
                                                        onChange: (e)=>setMouth(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Register.jsx",
                                                        lineNumber: 96,
                                                        columnNumber: 17
                                                    }, undefined),
                                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                                        type: "number",
                                                        id: "Year",
                                                        className: "input_for_year",
                                                        onChange: (e)=>setYear(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Register.jsx",
                                                        lineNumber: 102,
                                                        columnNumber: 17
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Register.jsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "box_firstname",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                        htmlFor: "Firstame",
                                        className: "label_for_firstname",
                                        children: "Pr\xe9nom"
                                    }, void 0, false, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                        type: "text",
                                        id: "Firstame",
                                        className: "input_for_firstname",
                                        onChange: (e)=>setFirstname(e.target.value)
                                    }, void 0, false, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Register.jsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "box_addresse",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                        htmlFor: "Addresse",
                                        className: "label_for_address",
                                        children: "Adresse"
                                    }, void 0, false, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                        type: "text",
                                        id: "Addresse",
                                        className: "input_for_adresse",
                                        onChange: (e)=>setAdresse(e.target.value)
                                    }, void 0, false, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Register.jsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "box_zipcode_email",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                        className: "box_zipcode",
                                        children: [
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                                htmlFor: "Zipcode",
                                                className: "label_for_zipcode",
                                                children: "Code postal"
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                                type: "text",
                                                id: "Zipcode",
                                                className: "input_for_zipcode",
                                                onChange: (e)=>setZipcode(e.target.value)
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                        className: "box_for_email",
                                        children: [
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                                htmlFor: "Email",
                                                className: "label_for_email",
                                                children: "Adresse mail"
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                                type: "text",
                                                id: "Email",
                                                className: "input_for_email",
                                                onChange: (e)=>setEmail(e.target.value)
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Register.jsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "box_city_password",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                        className: "box_for_cityname",
                                        children: [
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                                htmlFor: "City",
                                                className: "label_for_city",
                                                children: "Ville"
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                                type: "text",
                                                id: "City",
                                                className: "input_for_city",
                                                onChange: (e)=>setCity(e.target.value)
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                        className: "box_for_first_password",
                                        children: [
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                                htmlFor: "Password",
                                                className: "label_for_password",
                                                children: "Mot de passe"
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                                type: "password",
                                                id: "Password",
                                                className: "input_for_password",
                                                onChange: (e)=>setPassword(e.target.value)
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Register.jsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "box_phone_password",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                        className: "box_phone_number",
                                        children: [
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                                htmlFor: "Phone",
                                                className: "label_for_phone",
                                                children: "T\xe9l\xe9phone"
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                                type: "text",
                                                id: "Phone",
                                                className: "input_for_phone",
                                                onChange: (e)=>setPhone(e.target.value)
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                        className: "box_for_confirm_password",
                                        children: [
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                                htmlFor: "ConfirmPassword",
                                                className: "label_for_confirm_password",
                                                children: "Confirmer le mot de passe"
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                                type: "password",
                                                id: "ConfirmPassword",
                                                className: "input_for_corfirm_password"
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Register.jsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Register.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("hr", {
                        className: "separate_input"
                    }, void 0, false, {
                        fileName: "src/pages/Register.jsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "box_for_input_bot",
                        children: [
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "box_name_category",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                        className: "box_for_name_asso",
                                        children: [
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                                htmlFor: "NameAsso",
                                                className: "label_for_name_asso",
                                                children: "Nom de l'association"
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 207,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                                type: "text",
                                                id: "NameAsso",
                                                className: "input_for_asso",
                                                onChange: (e)=>setAsso(e.target.value)
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 210,
                                                columnNumber: 15
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                        className: "box_for_category",
                                        children: [
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                                htmlFor: "Category",
                                                className: "label_for_category",
                                                children: "Cat\xe9gorie associ\xe9e \xe0 votre association"
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                                type: "text",
                                                id: "Category",
                                                className: "input_for_category",
                                                onChange: (e)=>setCateAsso(e.target.value)
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 222,
                                                columnNumber: 15
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Register.jsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "box_addresse_again",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                        htmlFor: "AddresseAgain",
                                        className: "label_for_address_again",
                                        children: "Adresse"
                                    }, void 0, false, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                        type: "text",
                                        id: "AddresseAgain",
                                        className: "input_for_adresse_again",
                                        onChange: (e)=>setAdresseAgain(e.target.value)
                                    }, void 0, false, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Register.jsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "box_zipcode_again",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                        htmlFor: "ZipcodeAgain",
                                        className: "label_for_zipcode_again",
                                        children: "Code postal"
                                    }, void 0, false, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                        type: "text",
                                        id: "ZipcodeAgain",
                                        className: "input_for_zipcode_again",
                                        onChange: (e)=>setZipcodeAgain(e.target.value)
                                    }, void 0, false, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Register.jsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "box_city_again",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                        htmlFor: "CityAgain",
                                        className: "label_for_city_again",
                                        children: "Ville"
                                    }, void 0, false, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                        type: "text",
                                        id: "CityAgain",
                                        className: "input_for_city_again",
                                        onChange: (e)=>setCityAgain(e.target.value)
                                    }, void 0, false, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Register.jsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "box_phone_type_asso",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                        className: "box_for_phone_again",
                                        children: [
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                                htmlFor: "PhoneAgain",
                                                className: "label_for_phone_again",
                                                children: "Num\xe9ro de t\xe9l\xe9phone"
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                                type: "text",
                                                id: "PhoneAgain",
                                                className: "input_for_phone_again",
                                                onChange: (e)=>setPhoneAgain(e.target.value)
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                        className: "box_for_type_asso",
                                        children: [
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("label", {
                                                htmlFor: "TypeAsso",
                                                className: "label_for_type_asso",
                                                children: "Type d'association"
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 281,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                                type: "text",
                                                id: "TypeAsso",
                                                className: "input_for_type_asso",
                                                onChange: (e)=>setTypeAgain(e.target.value)
                                            }, void 0, false, {
                                                fileName: "src/pages/Register.jsx",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Register.jsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Register.jsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Register.jsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "box_for_conditions",
                        children: [
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                type: "checkbox"
                            }, void 0, false, {
                                fileName: "src/pages/Register.jsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                className: "text_for_conditions",
                                children: "J\u2019accepte les Conditions d\u2019Utilisation et je comprends que la Politique relative \xe0 la protection des donn\xe9es personnelles et aux cookies s\u2019applique \xe0 mon utilisation des services Plankton."
                            }, void 0, false, {
                                fileName: "src/pages/Register.jsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Register.jsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/pages/Register.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("button", {
                form: "Form",
                className: "btn_inscription",
                type: "submit",
                children: "S'inscrire"
            }, void 0, false, {
                fileName: "src/pages/Register.jsx",
                lineNumber: 304,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/pages/Register.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, undefined);
};
_s(Register, "sQDgvDch9w9U0Fa6zWPt0y5/b6U=");
_c = Register;
exports.default = Register;
var _c;
$RefreshReg$(_c, "Register");

  $parcel$ReactRefreshHelpers$a6f0.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../Style/register.css":"bO2SM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"bO2SM":[function() {},{}],"gw9UF":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$67f4 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$67f4.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _alimentaireCss = require("../Style/alimentaire.css");
const Alimentaire = ()=>{
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_jsxDevRuntime.Fragment, {
        children: [
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                className: "wrapper_alimentaire",
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "border_and_title",
                        children: [
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                className: "border"
                            }, void 0, false, {
                                fileName: "src/pages/Alimentaire.jsx",
                                lineNumber: 8,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("h1", {
                                className: "title_alimentaire",
                                children: "Alimentaire"
                            }, void 0, false, {
                                fileName: "src/pages/Alimentaire.jsx",
                                lineNumber: 9,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Alimentaire.jsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "svg_and_text",
                        children: [
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("svg", {
                                className: "svg_assiette",
                                width: "365",
                                height: "243",
                                viewBox: "0 0 365 243",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("path", {
                                        d: "M289.661 72.095C288.813 63.6445 287.118 55.194 282.732 47.6646C278.345 40.1352 273.344 32.9184 268.269 25.7693C266.554 23.3304 264.296 21.2437 261.64 19.6429C258.984 18.0422 255.989 16.9627 252.846 16.4737C244.669 15.1977 236.241 15.2991 227.981 14.4203C224.148 14.1217 220.347 13.5567 216.609 12.7302C212.356 12.3098 208.259 11.0369 204.614 9.00347C204.206 8.96251 203.809 8.85668 203.441 8.69081C198.784 6.49367 194.454 3.74726 189.676 1.9304C182.412 -0.900527 174.906 -0.494904 167.669 2.34447C154.221 7.58379 144.052 16.8709 133.64 25.82C132.187 27.0707 131.33 28.6847 133.118 29.9354C133.761 30.3917 135.912 29.7072 136.909 29.0143C140.131 26.8256 142.943 24.1214 146.277 22.1018C151.251 19.1018 156.578 16.5751 161.672 13.7358C169.839 9.19784 178.482 7.43168 187.748 10.2203C193.55 11.9696 199.166 14.2005 204.856 16.2118C209.233 17.7582 213.527 19.5159 217.997 20.775C222.125 21.9009 226.332 22.776 230.588 23.3947C237.61 24.4848 244.669 25.3299 251.71 26.3017L257.168 28.4819C263.808 31.803 267.859 37.2789 271.007 43.2196C273.086 47.2997 274.754 51.5423 275.989 55.8954C277.74 61.1954 279.029 66.6119 279.845 72.095C280.385 76.5653 279.77 81.1878 279.314 85.7088C278.569 93.1621 274.657 99.4662 270.122 105.534C268.471 107.715 266.945 109.971 265.549 112.294C261.284 119.553 260.436 127.446 260.427 135.499C260.427 142.843 262.29 149.823 264.534 156.82C266.051 161.764 267.009 166.835 267.393 171.955C267.868 177.084 267.505 182.273 267.505 188.949C266.508 191.754 265.419 195.988 263.528 199.934C261.116 204.929 258.76 210.16 255.147 214.385C249.652 220.723 242.248 224.703 233.373 227.061C223.833 229.661 214.02 231.347 204.093 232.089C196.968 232.562 189.965 232.503 182.831 230.669C174.395 228.655 166.205 225.875 158.384 222.37C153.868 220.249 148.96 218.762 144.601 216.455C137.225 212.5 129.188 211.309 120.946 211.385C113.894 211.586 106.861 212.15 99.88 213.075C91.638 214.03 86.9815 212.154 84.7278 204.481C83.7965 201.422 84.0852 198.101 83.7127 194.906C83.0049 188.788 82.651 182.602 81.3285 176.603C80.332 172.056 78.2459 167.679 76.2995 163.361C73.9154 158.087 72.4905 152.628 73.2169 147.034C73.9992 141.043 78.2459 136.361 81.9153 131.536C84.4111 128.249 87.3727 125.139 89.1608 121.547C91.5826 116.377 93.6448 111.074 95.3353 105.669C96.6837 101.959 97.6472 98.1421 98.213 94.2692C98.8649 88.8017 98.6787 83.2835 99.1443 77.7569C99.5075 73.7429 100.457 69.7796 101.007 65.774C101.049 65.393 101.007 65.0081 100.882 64.6423C100.757 64.2765 100.553 63.9371 100.281 63.6445C99.9508 63.4989 99.5848 63.434 99.2189 63.4562C98.853 63.4785 98.4998 63.587 98.1944 63.7713C96.5201 65.1888 95.0467 66.7898 93.808 68.5373C90.3249 74.0724 91.3866 80.3681 90.8464 86.2834C90.1293 94.1847 90.6229 102.263 86.4321 109.59C83.573 114.584 80.8443 119.671 77.4916 124.378C74.3345 128.798 70.0412 132.533 66.9399 136.986C61.2683 145.167 62.7398 154.031 65.8782 162.499C68.2251 168.828 71.9224 174.76 71.9969 181.656C72.0621 187.284 72.09 192.904 71.9038 198.557C71.7361 203.898 73.9619 208.545 76.4206 213.168C77.5705 215.511 79.3668 217.545 81.6361 219.074C83.9053 220.603 86.5707 221.576 89.375 221.897C93.2284 222.444 97.1415 222.558 101.026 222.235C105.282 221.838 109.407 220.638 113.673 219.852C115.582 219.489 117.64 218.754 119.437 219.092C124.094 219.937 128.918 220.782 133.193 222.599C139.945 225.447 146.231 229.148 152.825 232.325C160.275 235.925 167.809 239.432 176.349 240.472C181.937 241.156 187.571 242.364 193.169 242.322C201.196 242.271 209.215 241.266 217.243 240.759C217.32 240.764 217.396 240.781 217.466 240.81C220.791 239.964 224.097 239.119 227.357 238.114C230.57 236.989 233.716 235.711 236.781 234.286C240.32 232.638 243.701 230.711 247.324 229.215H247.473L255.026 225.565C259.163 222.89 262.743 219.568 265.596 215.754C268.641 211.917 270.56 207.354 273.158 203.196C276.688 197.543 276.762 191.222 277.032 185.104C277.256 180.101 276.054 175.048 275.365 170.028C274.611 164.535 273.884 159.042 272.841 153.583C271.91 148.792 270.364 144.093 269.526 139.294C268.725 135.36 268.413 131.358 268.595 127.361C269.098 120.787 273.13 115.37 276.846 109.911C280.562 104.452 284.445 98.7986 287.798 93.01C289.347 90.3296 290.26 87.385 290.48 84.3652C290.741 80.3005 290.07 76.1851 289.661 72.095Z",
                                        fill: "#E4796B"
                                    }, void 0, false, {
                                        fileName: "src/pages/Alimentaire.jsx",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("path", {
                                        d: "M257.657 97.0706C256.135 89.8791 255.355 82.4679 252.905 75.5553C249.498 65.9131 241.339 59.1187 233.273 52.5188C225.355 46.0456 215.859 42.1498 205.583 40.2231C200.339 39.2428 194.76 39.6569 189.321 39.6231C182.266 39.6231 175.852 41.8625 169.401 44.2202C155.886 49.1554 144.468 57.0145 133.756 65.6764C130.378 68.406 128.354 72.6144 126.052 76.3158C121.727 83.2622 118.793 90.6059 118.338 98.7185C118.023 104.271 118.106 110.059 116.324 115.256C113.745 122.4 110.393 129.293 106.318 135.834C101.24 144.234 99.9502 152.617 103.394 161.693C106.244 169.205 110.012 176.431 109.734 184.78C109.567 189.994 113.335 194.143 117.819 196.822C123.388 200.16 130.155 200.507 136.773 200.667C142.528 200.808 148.277 201.028 154.02 201.326C156.48 201.453 159.069 201.462 161.334 202.171C166.235 203.735 170.83 206.194 175.815 207.453C181.533 208.898 187.641 210.571 193.377 210.098C200.181 209.532 207.301 209.304 213.613 205.315C217.595 202.78 223.275 203.27 227.22 199.56C231.574 195.47 236.159 191.338 237.264 185.828C238.443 179.972 237.858 173.803 237.849 167.769C237.849 159.834 236.364 151.898 239.993 144.107C244.031 135.462 247.28 126.521 251.225 117.842C254.251 111.175 257.165 104.558 256.729 97.1636L257.657 97.0706ZM249.869 103.265C248.681 109.417 245.33 115.223 242.908 121.172C239.195 130.239 234.424 139.07 232.131 148.417C230.274 155.887 231.509 163.966 231.37 171.774C231.286 176.236 231.908 180.842 230.868 185.118C230.098 188.338 227.155 191.126 225.225 194.101C225.2 194.137 225.172 194.171 225.141 194.202C225.142 194.29 225.12 194.377 225.077 194.455C225.033 194.533 224.969 194.6 224.891 194.65C224.278 194.997 223.656 195.293 223.034 195.58C222.149 196.193 221.174 196.691 220.138 197.059C218.755 197.574 217.353 197.971 215.924 198.478C210.494 201.132 205.036 203.262 198.872 204.047C190.738 205.173 182.422 204.298 174.784 201.512C170.468 199.924 166.375 197.65 161.919 196.645C157.464 195.639 152.72 195.597 148.088 195.529C139.994 195.402 131.742 196.264 123.954 193.645C118.218 191.71 115.452 187.214 115.6 181.755C115.749 173.853 112.017 166.966 109.297 159.834C107.051 153.918 106.763 148.146 109.483 142.577C112.203 137.008 116.009 131.904 118.868 126.411C120.845 122.794 122.258 118.943 123.063 114.969C124.131 108.893 123.991 102.648 124.92 96.5382C126.386 86.5073 130.489 77.1862 137.915 69.7496C143.057 64.5694 149.583 60.2596 156.201 56.6173C163.896 52.392 172.343 49.2822 180.512 45.8005L183.918 45.0568C189.265 45.0568 194.649 44.6935 199.94 45.1751C204.107 45.5639 208.21 46.8653 212.257 47.9977C215.055 48.7028 217.751 49.71 220.287 50.9976C226.872 54.6081 232.743 59.2018 237.654 64.5863C239.445 66.5299 241.627 68.237 243.112 70.3496C244.817 72.8357 246.229 75.4785 247.326 78.2341C250.619 86.2202 251.497 94.8645 249.869 103.265Z",
                                        fill: "#E4796B"
                                    }, void 0, false, {
                                        fileName: "src/pages/Alimentaire.jsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("path", {
                                        d: "M48.3944 51.3779C48.6047 46.8477 49.6105 42.3008 49.3637 37.8124C49.1899 34.6948 47.7544 31.5437 46.3645 28.6183C45.1576 26.1108 42.5242 25.9437 40.156 27.6738C35.1269 31.3598 34.7337 36.2243 34.88 41.6739C35.008 46.2125 33.7645 50.7845 33.0513 55.323C32.9964 55.7075 32.393 56.0167 32.0455 56.3594C31.826 55.9666 31.3871 55.5236 31.4329 55.1809C32.1735 49.2549 32.7496 43.3038 33.8559 37.4446C34.3406 34.8703 33.5451 31.6524 31.2043 30.5323C28.3514 29.1783 26.1752 30.0643 24.8585 32.3712C22.1154 37.219 22.0514 42.5683 21.768 47.8925C21.5759 51.3863 23.2492 55.1642 20.3324 58.332C19.8038 58.7642 19.2055 59.1195 18.5585 59.3851C18.1562 58.7833 17.3698 58.1648 17.4064 57.5881C17.6899 52.4979 18.1288 47.4161 18.5037 42.3342C18.8786 37.2524 19.4729 32.413 19.4912 27.4565C19.4793 26.5126 19.2424 25.5824 18.7971 24.7308C18.3518 23.8791 17.7087 23.1264 16.9127 22.5251C16.8076 22.5488 16.6977 22.5488 16.5926 22.5251C15.6718 22.2755 14.7058 22.1964 13.7512 22.2926C12.7965 22.3888 11.8725 22.6582 11.0333 23.0851C9.37772 23.7302 8.05117 24.9249 7.32091 26.4284C7.33101 26.4669 7.33101 26.507 7.32091 26.5454C7.32091 26.6123 7.26606 26.6708 7.24777 26.7293C7.21691 26.8249 7.16389 26.9133 7.09232 26.9884C6.08513 28.7018 5.24965 30.495 4.59609 32.3461C3.84654 34.8313 3.47727 37.3994 3.49884 39.9772C3.66343 43.914 4.77896 47.8256 4.81554 51.754C4.88869 57.9726 5.42817 64.049 7.94268 69.9082C10.1555 75.082 12.3408 80.2725 12.0116 85.9979C11.7465 90.7454 11.3624 95.4929 11.3441 100.207C11.3441 104.595 11.7739 108.983 11.9659 113.38C12.2128 119.23 12.0208 125.081 12.7066 130.848C13.7306 139.533 12.542 147.757 8.36329 155.614C6.34254 159.417 3.48056 163.053 2.52047 167.065C0.975183 173.526 0.69173 180.229 0.0791016 185.194C1.58781 192.474 2.62106 198.024 6.66257 202.521C8.27186 204.326 10.0823 206.391 12.3042 207.243C16.2817 208.764 19.6192 206.24 21.896 203.791C25.462 199.938 26.7421 195.023 26.6964 189.967C26.6964 185.261 26.3398 180.563 26.1752 175.858C25.9924 170.433 25.3249 164.992 25.8461 159.593C26.4038 153.942 28.2417 148.409 29.2932 142.784C30.1345 138.254 30.8385 133.682 31.25 129.093C31.5974 125.198 31.25 121.245 31.5334 117.333C31.796 113.71 32.2691 110.103 32.9507 106.526C33.2707 104.796 34.3223 103.183 34.8526 101.511C36.215 97.1479 37.0928 92.6344 38.8484 88.4218C40.6771 84.0504 43.8409 80.1304 45.4136 75.7089C46.9723 70.8321 48.0194 65.8308 48.5407 60.7726C48.9613 57.7218 48.2847 54.5206 48.3944 51.3779ZM43.8226 59.6442C44.3895 65.6956 42.3413 71.1536 39.6805 76.4611C37.55 80.7322 34.8892 84.7776 32.777 89.057C31.8951 91.2023 31.2637 93.4269 30.8934 95.6935C29.659 100.951 28.1503 106.192 27.4096 111.516C26.7513 116.205 27.2268 121.019 26.7056 125.725C26.0381 131.684 25.1146 137.635 23.871 143.511C22.1337 151.778 19.8844 159.977 20.3507 168.461C20.7073 174.989 21.9417 181.491 21.8503 187.994C21.6404 192.111 20.6117 196.158 18.8145 199.938C17.4796 202.964 13.5935 202.379 11.3441 199.228C7.67478 194.372 5.93545 188.513 6.41569 182.628C6.91859 177.011 7.33006 171.328 8.74734 165.911C9.66171 162.501 12.6517 159.609 14.0873 156.258C15.8376 151.959 17.3183 147.572 18.5219 143.118C19.0066 141.447 18.8054 139.625 18.906 137.869C18.3939 131.835 17.7539 125.808 17.3973 119.774C17.1595 115.77 17.2418 111.75 17.3058 107.738C17.4339 100.708 18.1471 93.6457 17.6807 86.6582C17.3241 81.4259 15.4039 76.3023 14.3433 71.1034C13.7124 68.0109 13.4289 64.8598 12.9351 61.7589C12.0208 56.56 10.4938 51.3946 10.3292 46.1874C10.1372 39.81 10.2469 33.2739 13.6849 27.3478C13.8404 27.0804 14.0232 26.8213 14.1878 26.512C14.3981 26.8213 14.8005 27.1305 14.8005 27.4398C14.8005 31.5521 15.1936 35.7312 14.5262 39.7599C13.6118 45.3181 11.9659 50.7928 13.246 56.4765C13.6034 58.2907 14.2928 60.037 15.2851 61.6419C16.931 64.1493 19.4272 63.6228 21.5119 62.1768C23.0686 61.1851 24.3174 59.8414 25.1363 58.2769C25.9553 56.7123 26.3164 54.9804 26.1844 53.2502C26.0381 47.6919 26.8427 42.1002 27.2542 36.5336C27.251 36.2384 27.3398 35.9485 27.5102 35.6978C28.0497 35.1712 28.6715 34.7031 29.2658 34.21C29.4415 34.9399 29.5243 35.686 29.5127 36.4333C28.7538 42.1587 27.7297 47.8507 27.2176 53.5845C27.0622 55.3732 27.9491 57.3791 28.8726 59.0424C29.2565 59.4759 29.7479 59.8195 30.306 60.0448C30.8642 60.2701 31.473 60.3706 32.0821 60.338C35.2641 59.9619 37.8975 56.9947 38.3089 54.0525C38.885 49.9821 39.7079 45.9367 40.1377 41.8578C40.3571 39.8602 39.9274 37.8041 39.8908 35.7646C39.8189 34.9846 39.9603 34.2005 40.3023 33.4828C40.8169 32.8305 41.433 32.2505 42.131 31.761C42.5961 32.3029 42.9861 32.8953 43.2922 33.5246C45.0661 38.5396 44.5358 43.5044 43.7403 48.5695C43.3208 52.2531 43.3576 55.9682 43.85 59.6442H43.8226Z",
                                        fill: "#E4796B"
                                    }, void 0, false, {
                                        fileName: "src/pages/Alimentaire.jsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("path", {
                                        d: "M353.014 115.405C350.229 115.292 347.438 115.326 344.658 115.506C344.172 115.691 343.745 115.981 343.415 116.35C343.086 116.718 342.864 117.153 342.769 117.617C342.59 119.879 343.09 122.184 342.864 124.438C342.618 126.961 341.806 129.485 341.353 132.008C340.673 135.877 340.116 139.771 339.464 143.64C338.312 150.31 337.123 156.879 334.29 163.305C332.449 167.51 332.912 172.557 332.685 177.191C332.505 180.883 332.874 184.609 332.949 188.319C333.063 193.205 333.393 198.109 333.138 202.987C332.874 208.034 332.723 213.215 331.089 217.942C330.419 219.893 326.17 221.239 323.262 222.097C319.032 223.35 315.349 221.861 312.573 218.732C309.976 215.839 309.618 212.391 309.74 208.875C309.995 203.063 310.213 197.234 310.685 191.439C311.119 186.569 312.356 181.733 312.479 176.871C312.611 171.522 311.789 166.156 311.534 160.79C311.232 154.743 310.439 148.636 311.025 142.648C311.818 134.481 313.857 126.423 315.104 118.256C315.916 113.058 316.397 107.818 316.86 102.587C317.322 97.3552 317.908 91.9049 317.804 86.564C317.747 81.5175 316.916 76.471 316.435 71.4245C315.878 65.4528 315.425 59.4642 314.773 53.4925C314.197 48.2694 313.187 43.0715 312.828 37.8399C312.649 35.3167 311.336 32.1794 314.565 30.472C316.454 29.4543 318.852 29.1599 320.995 31.0776C324.253 33.9877 328.011 36.4437 331.24 39.3707C332.272 40.1967 332.986 41.2911 333.281 42.4988C333.576 43.7064 333.437 44.9661 332.883 46.0994C332.742 46.4825 332.706 46.8902 332.779 47.2883C332.851 47.6863 333.029 48.0631 333.299 48.3871C335.322 49.9081 337.54 51.2097 339.908 52.2646C340.041 52.3122 340.156 52.3917 340.241 52.4941C340.326 52.5966 340.377 52.718 340.39 52.8449C340.56 55.4523 338.879 58.0765 343.109 60.4147C344.119 60.975 344.964 61.742 345.573 62.652C346.688 64.2584 346.121 67.9676 346.357 68.5396C346.801 69.5236 350.436 70.7937 350.483 71.7609C350.634 75.0159 350.266 77.1439 352.192 79.9279C355.346 83.8305 357.565 84.4193 355.526 90.576C354.912 92.4517 357.367 96.8169 359.992 98.3477C360.122 98.4171 360.222 98.5239 360.275 98.6505C361.795 101.889 365.487 107.902 364.288 110.3C362.872 113.117 357.678 115.632 353.788 115.413C353.531 115.393 353.272 115.39 353.014 115.405ZM327.52 180.101H327.161C327.161 179.26 327.095 178.419 327.161 177.578C327.681 172.262 327.813 166.879 328.908 161.665C330.032 156.324 332.685 151.235 333.629 145.886C335.187 137.155 335.895 128.299 336.972 119.493C337.312 116.65 336.301 113.184 340.05 111.654C342.564 110.748 345.227 110.214 347.934 110.072C350.701 109.828 353.543 110.207 356.328 110.072C357.074 110.03 358.471 108.701 358.349 108.474C356.876 105.741 355.884 101.392 353.628 99.1299C352.801 98.3201 352.137 97.3897 351.664 96.3795C350.956 94.7899 350.474 93.36 349.775 91.4508C348.831 88.6499 348.227 85.7566 347.273 82.9642C346.584 80.9372 344.167 79.5999 343.251 77.6401C342.004 74.9486 342.165 71.6432 340.852 68.9769C339.606 66.4537 336.622 65.0238 335.612 62.4081C334.422 59.3381 334.432 55.57 331.08 53.8794C326.85 51.7515 325.981 49.6235 327.067 45.4686C327.165 45.0083 327.156 44.5349 327.041 44.0777C326.926 43.6205 326.706 43.1893 326.396 42.8107C323.96 40.4052 321.317 38.1595 318.72 35.8886C318.609 35.7891 318.466 35.7227 318.31 35.6984C318.155 35.6742 317.995 35.6933 317.852 35.7531C317.71 35.813 317.591 35.9107 317.513 36.0328C317.435 36.1549 317.402 36.2955 317.417 36.4353C317.413 36.4969 317.413 36.5587 317.417 36.6203C318.248 41.8183 319.22 46.9993 319.9 52.2225C320.646 57.8578 321.014 63.5435 321.789 69.1788C322.195 72.2908 323.564 75.3608 323.526 78.4307C323.441 84.9492 322.657 91.4592 322.308 97.986C322.081 102.133 322.62 106.397 321.94 110.434C320.788 117.297 318.578 124.018 317.492 130.881C316.477 137.023 316.026 143.228 316.142 149.435C316.425 159.831 317.861 170.21 317.917 180.598C317.917 186.376 315.698 192.137 315.368 197.941C315.134 203.417 315.491 208.901 316.435 214.317C316.945 217.513 320.608 217.513 323.252 216.798C324.087 216.45 324.824 215.94 325.409 215.306C325.994 214.671 326.412 213.928 326.632 213.131C327.207 209.958 327.459 206.747 327.388 203.534C327.577 195.737 327.52 187.923 327.52 180.101Z",
                                        fill: "#E4796B"
                                    }, void 0, false, {
                                        fileName: "src/pages/Alimentaire.jsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Alimentaire.jsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                className: "text_wrapper",
                                children: "Une p'tite bouffe ?"
                            }, void 0, false, {
                                fileName: "src/pages/Alimentaire.jsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Alimentaire.jsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/pages/Alimentaire.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                className: "box_for_search",
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "style_bottom_box_for_search"
                    }, void 0, false, {
                        fileName: "src/pages/Alimentaire.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "right_part_top_search",
                        children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                            className: "box_contain_searchbar",
                            children: [
                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("button", {
                                    className: "filter_btn_search",
                                    children: "Filtrer"
                                }, void 0, false, {
                                    fileName: "src/pages/Alimentaire.jsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                    type: "text",
                                    className: "searchbar_input",
                                    placeholder: "Rechercher"
                                }, void 0, false, {
                                    fileName: "src/pages/Alimentaire.jsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("svg", {
                                    className: "loupe_icon",
                                    width: "40",
                                    height: "45",
                                    viewBox: "0 0 73 73",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("path", {
                                        d: "M47.1458 42.5833H44.7429L43.8913 41.7621C46.8721 38.2946 48.6667 33.7929 48.6667 28.8958C48.6667 17.9763 39.8154 9.125 28.8958 9.125C17.9763 9.125 9.125 17.9763 9.125 28.8958C9.125 39.8154 17.9763 48.6667 28.8958 48.6667C33.7929 48.6667 38.2946 46.8721 41.7621 43.8913L42.5833 44.7429V47.1458L57.7917 62.3237L62.3237 57.7917L47.1458 42.5833ZM28.8958 42.5833C21.3221 42.5833 15.2083 36.4696 15.2083 28.8958C15.2083 21.3221 21.3221 15.2083 28.8958 15.2083C36.4696 15.2083 42.5833 21.3221 42.5833 28.8958C42.5833 36.4696 36.4696 42.5833 28.8958 42.5833Z",
                                        fill: "#FCFAFA"
                                    }, void 0, false, {
                                        fileName: "src/pages/Alimentaire.jsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/pages/Alimentaire.jsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Alimentaire.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/pages/Alimentaire.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/pages/Alimentaire.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true);
};
_c = Alimentaire;
exports.default = Alimentaire;
var _c;
$RefreshReg$(_c, "Alimentaire");

  $parcel$ReactRefreshHelpers$67f4.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","../Style/alimentaire.css":"68Bva","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"68Bva":[function() {},{}],"8aU1L":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$bbb7 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$bbb7.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _postCss = require("../Style/post.css");
var _testProfilPng = require("../images/test_profil.png");
var _testProfilPngDefault = parcelHelpers.interopDefault(_testProfilPng);
const Post = ()=>{
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_jsxDevRuntime.Fragment, {
        children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
            className: "card_for_post",
            children: [
                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                    className: "localisation",
                    children: [
                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("svg", {
                            width: "56",
                            height: "40",
                            viewBox: "0 0 56 81",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("path", {
                                d: "M28 0.666016C12.52 0.666016 0 13.186 0 28.666C0 49.666 28 80.666 28 80.666C28 80.666 56 49.666 56 28.666C56 13.186 43.48 0.666016 28 0.666016ZM28 38.666C22.48 38.666 18 34.186 18 28.666C18 23.146 22.48 18.666 28 18.666C33.52 18.666 38 23.146 38 28.666C38 34.186 33.52 38.666 28 38.666Z",
                                fill: "#E4796B"
                            }, void 0, false, {
                                fileName: "src/components/Post.jsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/Post.jsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("h3", {
                            className: "localisation_text",
                            children: "Saint-Malo"
                        }, void 0, false, {
                            fileName: "src/components/Post.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/Post.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                    className: "content_text_and_arrow",
                    children: [
                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                            className: "content_and_name",
                            children: [
                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                    className: "content_post",
                                    children: "Un panier diff\xe9rent chaque semaine pour les \xe9tudiants contre une petite cotisation ! Faites-vous plaisir !"
                                }, void 0, false, {
                                    fileName: "src/components/Post.jsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("h2", {
                                    className: "poster_name",
                                    children: "Corsaire_Malin"
                                }, void 0, false, {
                                    fileName: "src/components/Post.jsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Post.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("svg", {
                            width: "181",
                            height: "182",
                            viewBox: "0 0 181 182",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("path", {
                                d: "M64.7832 125.782L99.324 91.166L64.7832 56.5498L75.417 45.916L120.667 91.166L75.417 136.416L64.7832 125.782Z",
                                fill: "#E4796B"
                            }, void 0, false, {
                                fileName: "src/components/Post.jsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/Post.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/Post.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                    className: "bottom_of_post_card",
                    children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "box_for_picture",
                        children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("img", {
                            className: "avatar",
                            alt: "avatar",
                            src: _testProfilPngDefault.default
                        }, void 0, false, {
                            fileName: "src/components/Post.jsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/Post.jsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/Post.jsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/Post.jsx",
            lineNumber: 11,
            columnNumber: 7
        }, undefined)
    }, void 0, false);
};
_c = Post;
exports.default = Post;
var _c;
$RefreshReg$(_c, "Post");

  $parcel$ReactRefreshHelpers$bbb7.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","../Style/post.css":"cxnjw","../images/test_profil.png":"6TTPD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"cxnjw":[function() {},{}],"6TTPD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('kFIdX') + "test_profil.2efcf164.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"e7FAL":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$d0f2 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$d0f2.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _profilCss = require("../Style/profil.css");
const Profil = ()=>{
    return /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_jsxDevRuntime.Fragment, {}, void 0, false);
};
_c = Profil;
exports.default = Profil;
var _c;
$RefreshReg$(_c, "Profil");

  $parcel$ReactRefreshHelpers$d0f2.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","../Style/profil.css":"fK9vP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"fK9vP":[function() {},{}],"jid8p":[function() {},{}]},["kn9T2","7IzUj","e9Zfo"], "e9Zfo", "parcelRequire411b")

//# sourceMappingURL=App.js.map

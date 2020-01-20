function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-layout>\n\n  <nb-layout-column>\n\n    <nb-layout>\n    \n    \n      <nb-layout-column>\n    \n        <app-board></app-board>\n        <app-controls></app-controls>\n        <router-outlet></router-outlet>\n      </nb-layout-column>\n    \n\n    \n    </nb-layout>\n    \n  </nb-layout-column>\n\n\n\n</nb-layout>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBoardBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>{{player}} ist am Zug</h1>\n<h1>Du bist in Team {{team}}.</h1>\n<button (click)=\"newGame()\">Neues Spiel</button>\n<p>&nbsp;</p>\n<h2 *ngIf=\"winner\">Team {{winner}} hat gewonnen!</h2>\n<div class=\"columns\">\n    <main>\n        <app-square *ngFor=\"let obj of combinedArray; let j = index;\" [value]=\"obj[0]\" [result]=\"obj[1]\"\n            [clicked]=\"obj[2]\" [disable]=\"hinter\" (click)=\"makeMove(j)\">\n        </app-square>\n\n        <ng-container *ngIf=\"hinter\">\n            <p>Lösung:&nbsp;</p>\n            <p>&nbsp;</p>\n            <p>&nbsp;</p>\n            <p>&nbsp;</p>\n            <p>&nbsp;</p>\n            <app-square-hinter *ngFor=\"let obj of combinedArray; let j = index;\" [value]=\"obj[0]\" [result]=\"obj[1]\">\n            </app-square-hinter>\n        </ng-container>\n    </main>\n    <div>\n        \n        <div *ngIf=\"hintIn\">\n            <h4>Der Hinweis ist: {{hintIn}}</h4>\n            <h4>Der Hinweis beschreibt {{quantIn}} Worte.</h4>\n        </div>\n        <button *ngIf=\"!hinter && ((redIsNext && user_Data.team == 'red') || (!redIsNext && user_Data.team == 'blue'))\" class=\"btn btn-primary\" nbButton (click)=\"guesserDone()\" >done</button>\n        <form *ngIf=\"hinter && !hintGiven && ((redIsNext && user_Data.team == 'red') || (!redIsNext && user_Data.team == 'blue'))\" name=\"hintForm\" [formGroup]=\"hintForm\" (ngSubmit)=\"hintForm.valid && onSubmit()\"\n            class=\"was-validated\">\n            <div class=\"form-group\">\n                <input nbInput type=\"text\" class=\"form-control\" formControlName=\"word\" placeholder=\"Hinweis\"\n                    [ngClass]=\"{'is-invalid':hintForm.get('word').touched && hintForm.get('word').invalid}\" required />\n                <div *ngIf=\"hintForm.get('word').touched && hintForm.get('word').invalid\" class=\"invalid-feedback\">\n                    <div *ngIf=\"hintForm.get('word').errors.required\">\n                        Notwendig\n                    </div>\n                    <div *ngIf=\"hintForm.get('word').errors.maxlength\">zu lang</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <input nbInput type=\"number\" class=\"form-control\" formControlName=\"quantity\" placeholder=\"Wortanzahl\"\n                    [ngClass]=\"{'is-invalid':hintForm.get('quantity').touched && hintForm.get('quantity').invalid}\"\n                    required />\n                <div *ngIf=\"hintForm.get('quantity').touched && hintForm.get('quantity').invalid\"\n                    class=\"invalid-feedback\">\n                    Notwendig\n                </div>\n            </div>\n                <button class=\"btn btn-primary\" nbButton [disabled]=\"!hintForm.valid\">Senden</button>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/controls/controls.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controls/controls.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppControlsControlsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'cn_client';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _square_square_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./square/square.component */
    "./src/app/square/square.component.ts");
    /* harmony import */


    var _board_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./board/board.component */
    "./src/app/board/board.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/fesm2015/index.js");
    /* harmony import */


    var _controls_controls_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./controls/controls.component */
    "./src/app/controls/controls.component.ts");
    /* harmony import */


    var _square_hinter_square_hinter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./square-hinter/square-hinter.component */
    "./src/app/square-hinter/square-hinter.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _square_square_component__WEBPACK_IMPORTED_MODULE_6__["SquareComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"], _controls_controls_component__WEBPACK_IMPORTED_MODULE_11__["ControlsComponent"], _square_hinter_square_hinter_component__WEBPACK_IMPORTED_MODULE_12__["SquareHinterComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbThemeModule"].forRoot({
        name: 'cosmic'
      }), _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbLayoutModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_10__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbThemeModule"].forRoot({
        name: 'default'
      }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/board/board.component.scss":
  /*!********************************************!*\
    !*** ./src/app/board/board.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppBoardBoardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "main {\n  display: grid;\n  grid-template-columns: 200px 200px 200px 200px 200px;\n  grid-gap: 10px;\n}\n\napp-square {\n  height: 58px;\n}\n\n.columns {\n  display: grid;\n  grid-template-columns: 1100px 200px;\n  grid-gap: 10px;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 250px 200px;\n  grid-gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZGF0YS9uZXh0Y2xvdWQvbGVhcm5pbmcvY29kZW5hbWVzX2FuZ3VsYXIvY29kZW5hbWVzL2NuX2NsaWVudC9zcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxvREFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMjAwcHggMjAwcHggMjAwcHggMjAwcHg7XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG59XG5cbmFwcC1zcXVhcmV7XG4gICAgaGVpZ2h0OiA1OHB4O1xufVxuXG4uY29sdW1uc3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTEwMHB4IDIwMHB4O1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xufVxuXG5mb3Jte1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAyMDBweDtcbiAgICBncmlkLWdhcDogMTBweDtcbn0iLCJtYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAyMDBweCAyMDBweCAyMDBweCAyMDBweDtcbiAgZ3JpZC1nYXA6IDEwcHg7XG59XG5cbmFwcC1zcXVhcmUge1xuICBoZWlnaHQ6IDU4cHg7XG59XG5cbi5jb2x1bW5zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMTAwcHggMjAwcHg7XG4gIGdyaWQtZ2FwOiAxMHB4O1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAyMDBweDtcbiAgZ3JpZC1nYXA6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/board/board.component.ts":
  /*!******************************************!*\
    !*** ./src/app/board/board.component.ts ***!
    \******************************************/

  /*! exports provided: BoardComponent */

  /***/
  function srcAppBoardBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardComponent", function () {
      return BoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var BoardComponent =
    /*#__PURE__*/
    function () {
      function BoardComponent() {
        _classCallCheck(this, BoardComponent);

        this.user_Data = {
          team: "",
          hinter: false
        };
        this.hint = {
          word: String,
          quantity: Number
        };
        this.hintForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          word: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]),
          quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2)])
        });
      }

      _createClass(BoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()("http://localhost:3000");
        }
      }, {
        key: "newGame",
        value: function newGame() {
          this.socket.emit("newGame");
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.socket.on("game", function (game) {
            console.log(game);
            _this.combinedArray = [];
            _this.words = game.board.words;
            _this.clicked = game.board.clicked;
            _this.labels = game.board.labels;

            if (_this.redIsNext != game.redIsNext) {
              console.log("new round");
              _this.hintGiven = false;
            }

            _this.redIsNext = game.redIsNext;
            _this.winner = game.winner;
            _this.hintIn = game.hint.word;
            _this.quantIn = game.hint.quantity;

            for (var i = 0; i < _this.words.length; i++) {
              _this.combinedArray.push([_this.words[i], _this.labels[i], _this.clicked[i]]);
            }
          });
          this.socket.on("user_data", function (user_data) {
            _this.user_Data.team = user_data.team;
            _this.user_Data.hinter = user_data.hinter;
            console.log(_this.user_Data);
          });
        }
      }, {
        key: "guesserDone",
        value: function guesserDone() {
          this.socket.emit("guesserDone", true);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var hint = {
            word: this.hintForm.value.word,
            quantity: this.hintForm.value.quantity
          };
          this.socket.emit("sendHint", hint);
          this.hintGiven = true;
          console.log(this.hintGiven);
        }
      }, {
        key: "makeMove",
        value: function makeMove(idx) {
          if (this.user_Data.team == "red" && this.redIsNext || this.user_Data.team == "blue" && !this.redIsNext) {
            this.socket.emit("move", idx);
          }
        }
      }, {
        key: "word",
        get: function get() {
          return this.hintForm.get('word');
        }
      }, {
        key: "quantity",
        get: function get() {
          return this.hintForm.get('quantity');
        }
      }, {
        key: "player",
        get: function get() {
          return this.redIsNext ? "red" : "blue";
        }
      }, {
        key: "hinter",
        get: function get() {
          return this.user_Data.hinter;
        }
      }, {
        key: "team",
        get: function get() {
          return this.user_Data.team;
        }
      }]);

      return BoardComponent;
    }();

    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-board",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./board.component.scss */
      "./src/app/board/board.component.scss")).default]
    })], BoardComponent);
    /***/
  },

  /***/
  "./src/app/controls/controls.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/controls/controls.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppControlsControlsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xzL2NvbnRyb2xzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/controls/controls.component.ts":
  /*!************************************************!*\
    !*** ./src/app/controls/controls.component.ts ***!
    \************************************************/

  /*! exports provided: ControlsComponent */

  /***/
  function srcAppControlsControlsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlsComponent", function () {
      return ControlsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ControlsComponent =
    /*#__PURE__*/
    function () {
      function ControlsComponent() {
        _classCallCheck(this, ControlsComponent);
      }

      _createClass(ControlsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ControlsComponent;
    }();

    ControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-controls',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./controls.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/controls/controls.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./controls.component.scss */
      "./src/app/controls/controls.component.scss")).default]
    })], ControlsComponent);
    /***/
  },

  /***/
  "./src/app/square-hinter/square-hinter.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/square-hinter/square-hinter.component.ts ***!
    \**********************************************************/

  /*! exports provided: SquareHinterComponent */

  /***/
  function srcAppSquareHinterSquareHinterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SquareHinterComponent", function () {
      return SquareHinterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SquareHinterComponent = function SquareHinterComponent() {
      _classCallCheck(this, SquareHinterComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value')], SquareHinterComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('result')], SquareHinterComponent.prototype, "result", void 0);
    SquareHinterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-square-hinter',
      template: "\n    <button nbButton hero status=\"primary\" size=\"giant\" fullWidth *ngIf=\"result == 'blue'\">{{value}}</button>\n    <button nbButton hero status=\"danger\" size=\"giant\" fullWidth *ngIf=\"result == 'red'\">{{value}}</button>\n    <button nbButton hero status=\"warning\" size=\"giant\" fullWidth *ngIf=\"result == 'neutral'\">{{value}}</button>\n    <button nbButton hero status=\"info\" size=\"giant\" fullWidth *ngIf=\"result == 'kill'\">{{value}}</button>\n  ",
      styles: [""]
    })], SquareHinterComponent);
    /***/
  },

  /***/
  "./src/app/square/square.component.ts":
  /*!********************************************!*\
    !*** ./src/app/square/square.component.ts ***!
    \********************************************/

  /*! exports provided: SquareComponent */

  /***/
  function srcAppSquareSquareComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SquareComponent", function () {
      return SquareComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SquareComponent =
    /*#__PURE__*/
    function () {
      function SquareComponent() {
        _classCallCheck(this, SquareComponent);

        this.disable_bool = this.convert(this.disable);
      }

      _createClass(SquareComponent, [{
        key: "convert",
        value: function convert(arr) {
          var arr2;

          for (var item in arr) {
            arr2.push(Boolean(arr[item]));
          }

          return arr2;
        }
      }]);

      return SquareComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value')], SquareComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('result')], SquareComponent.prototype, "result", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('clicked')], SquareComponent.prototype, "clicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disable')], SquareComponent.prototype, "disable", void 0);
    SquareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-square',
      template: "\n    <button nbButton status=\"basic\" *ngIf=\"!clicked\" fullWidth size=\"giant\" [disabled]=\"disable\">{{value}}</button>\n    <button nbButton hero status=\"primary\" size=\"giant\" fullWidth *ngIf=\"result == 'blue' && clicked==1\"  [disabled]=\"disable_bool\">{{value}}</button>\n    <button nbButton hero status=\"danger\" size=\"giant\" fullWidth *ngIf=\"result == 'red' && clicked==1\"  [disabled]=\"disable_bool\">{{value}}</button>\n    <button nbButton hero status=\"warning\" size=\"giant\" fullWidth *ngIf=\"result == 'neutral' && clicked==1\"  [disabled]=\"disable_bool\">{{value}}</button>\n    <button nbButton hero status=\"info\" size=\"giant\" fullWidth *ngIf=\"result == 'kill' && clicked==1\"  [disabled]=\"disable_bool\">{{value}}</button>\n  ",
      styles: [""]
    })], SquareComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /mnt/data/nextcloud/learning/codenames_angular/codenames/cn_client/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
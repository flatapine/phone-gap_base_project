"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular2_onsenui_1 = require("angular2-onsenui");
var page_component_1 = require("../page/page.component");
var DefaultPageComponent = /** @class */ (function () {
    function DefaultPageComponent(_navigator, _params) {
        this._navigator = _navigator;
        this._params = _params;
        console.log('parameters:', _params.data);
    }
    DefaultPageComponent.prototype.push = function () {
        // 遷移
        this._navigator.element.pushPage(page_component_1.PageComponent, { data: { hoge: 'fuga' } });
    };
    DefaultPageComponent = __decorate([
        core_1.Component({
            selector: 'ons-page',
            templateUrl: './src/components/defaultPage/defaultPage.template.html'
        }),
        __metadata("design:paramtypes", [angular2_onsenui_1.OnsNavigator, angular2_onsenui_1.Params])
    ], DefaultPageComponent);
    return DefaultPageComponent;
}());
exports.DefaultPageComponent = DefaultPageComponent;

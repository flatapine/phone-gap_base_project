"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular2_onsenui_1 = require("angular2-onsenui");
var core_1 = require("@angular/core");
var app_component_1 = require("./components/app/app.component");
var defaultPage_component_1 = require("./components/defaultPage/defaultPage.component");
var page_component_1 = require("./components/page/page.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [angular2_onsenui_1.OnsenModule],
            declarations: [app_component_1.AppComponent, defaultPage_component_1.DefaultPageComponent, page_component_1.PageComponent],
            entryComponents: [defaultPage_component_1.DefaultPageComponent, page_component_1.PageComponent],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

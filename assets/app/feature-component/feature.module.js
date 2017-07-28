"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var home_component_1 = require("./home/home.component");
var voyage_component_1 = require("./voyage/voyage.component");
var find_by_date_component_1 = require("./find-by-date/find-by-date.component");
var FeatureModule = (function () {
    function FeatureModule() {
    }
    return FeatureModule;
}());
FeatureModule = __decorate([
    core_1.NgModule({
        declarations: [
            home_component_1.HomeComponent,
            voyage_component_1.VoyageComponent,
            find_by_date_component_1.FindByDateComponent
        ],
        imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule]
    })
], FeatureModule);
exports.FeatureModule = FeatureModule;
//# sourceMappingURL=feature.module.js.map
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
var forms_1 = require("@angular/forms");
var port_call_service_1 = require("../../services/port-call.service");
var FindByDateComponent = (function () {
    function FindByDateComponent(formBuilder, portCallService) {
        this.formBuilder = formBuilder;
        this.portCallService = portCallService;
        this.voyages = [];
        this.findVoyageForm = this.formBuilder.group({
            gtd: new forms_1.FormControl(null),
            gta: new forms_1.FormControl(null)
        });
    }
    FindByDateComponent.prototype.ngOnInit = function () {
        this.findVoyageForm = this.formBuilder.group({
            gtd: new forms_1.FormControl(null),
            gta: new forms_1.FormControl(null)
        });
    };
    FindByDateComponent.prototype.findVoyage = function () {
        var _this = this;
        this.portCallService.GetPortCallByDate(this.findVoyageForm.value.gtd, this.findVoyageForm.value.gta)
            .subscribe(function (data) {
            console.log(data);
            _this.voyages = data;
        }, function (err) { return console.log(err); });
    };
    FindByDateComponent.prototype.isVoyage = function () {
        if (this.voyages.length == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    return FindByDateComponent;
}());
FindByDateComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-component/find-by-date/find-by-date.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, port_call_service_1.PortCallService])
], FindByDateComponent);
exports.FindByDateComponent = FindByDateComponent;
//# sourceMappingURL=find-by-date.component.js.map
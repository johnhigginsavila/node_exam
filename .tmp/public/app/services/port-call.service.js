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
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/toPromise");
var PortCallService = (function () {
    function PortCallService(http) {
        this.http = http;
        this.portCallNormalUrl = 'portcall/list';
        this.portCallUrl = 'portcall/find';
        this.portCallFindByDateUrl = 'portcall/findByDate';
    }
    PortCallService.prototype.GetAllPortCall = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.portCallNormalUrl, options)
            .map(function (response) { return response.json(); });
    };
    PortCallService.prototype.GetPortCall = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.portCallUrl, options)
            .map(function (response) { return response.json(); });
    };
    PortCallService.prototype.GetPortCallByDate = function (gtd, gta) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.portCallFindByDateUrl, { gtd: gtd, gta: gta }, options)
            .map(function (response) { return response.json(); })
            .map(function (data) { return _this.filterByListOfVoyage(data); });
    };
    PortCallService.prototype.filterByListOfVoyage = function (data) {
        var newData = [];
        data.forEach(function (item, index, array) {
            if (item.listOfVoyage.length != 0) {
                newData.push(item);
            }
        });
        return newData;
    };
    return PortCallService;
}());
PortCallService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PortCallService);
exports.PortCallService = PortCallService;
//# sourceMappingURL=port-call.service.js.map
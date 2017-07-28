"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("../feature-component/home/home.component");
var voyage_component_1 = require("../feature-component/voyage/voyage.component");
var find_by_date_component_1 = require("../feature-component/find-by-date/find-by-date.component");
exports.routerConfig = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'voyage', component: voyage_component_1.VoyageComponent },
    { path: 'findByDate', component: find_by_date_component_1.FindByDateComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
//# sourceMappingURL=router.config.js.map
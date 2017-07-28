import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PortCallService } from './port-call.service';





@NgModule({
    declarations: [],
    exports: [],
    imports: [CommonModule, HttpModule]
})

export class ServiceModule {
    static forRoot() : ModuleWithProviders {
        return{
            ngModule : ServiceModule,
            providers: [PortCallService]
        }
    }

}
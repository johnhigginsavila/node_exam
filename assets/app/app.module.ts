import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { routerConfig } from './router-config/router.config';
import { AppComponent }   from './app.component';

import { ServiceModule } from './services/services.module';
import { FeatureModule } from './feature-component/feature.module';
@NgModule({
    declarations: [AppComponent],
    imports:      [
        BrowserModule,
        RouterModule.forRoot(routerConfig, { useHash: true }),
        ServiceModule.forRoot(), 
        FeatureModule
        ],
    bootstrap:    [AppComponent],
})
export class AppModule {}

import { NgModule }       from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { VoyageComponent } from './voyage/voyage.component';
import { FindByDateComponent } from './find-by-date/find-by-date.component';

@NgModule({
    declarations: [
        HomeComponent,
        VoyageComponent,
        FindByDateComponent
        ],
    imports:      [CommonModule, FormsModule, ReactiveFormsModule]
})
export class FeatureModule {}
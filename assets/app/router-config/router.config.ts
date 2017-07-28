import { HomeComponent } from '../feature-component/home/home.component';
import { VoyageComponent } from '../feature-component/voyage/voyage.component';
import { FindByDateComponent } from '../feature-component/find-by-date/find-by-date.component';

export const routerConfig = [
    { path: 'home', component: HomeComponent},
    { path: 'voyage', component: VoyageComponent },
    { path: 'findByDate', component: FindByDateComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full'},
];
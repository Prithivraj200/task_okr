import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayOkrComponent } from './okr/display/display-okr.component';

const routes: Routes = [
    { path: 'display-okr', component: DisplayOkrComponent },
    { path: '', pathMatch: 'full', redirectTo: '/display-okr' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

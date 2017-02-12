import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriaisComponent } from './materiais/materiais.component';

const appRoutes:Routes = [
    {path: '', component: MateriaisComponent},
    {path: ':url', component: MateriaisComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
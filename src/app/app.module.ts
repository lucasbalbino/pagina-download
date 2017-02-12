import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MateriaisComponent } from './materiais/materiais.component';
import { MateriaisService } from './materiais/materiais.service';
import { AppRoutingModule } from './app.routing.module';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu/menu.service';

@NgModule({
    declarations: [
        AppComponent,
        MateriaisComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        MenuService,
        MateriaisService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

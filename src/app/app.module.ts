import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

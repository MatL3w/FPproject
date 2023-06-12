import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { BottomComponent } from './bottom/bottom.component';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '/', component: BodyComponent },
  { path: '**', redirectTo: '/' },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { BottomComponent } from './bottom/bottom.component';
import { RouterModule,Routes } from '@angular/router';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { KontaktComponent } from './kontakt/kontakt.component';

const appRoutes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'katalogi', component: CatalogsComponent },
  { path: '**', redirectTo: '/' },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    BottomComponent,
    CatalogsComponent,
    KontaktComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

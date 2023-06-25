import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { BottomComponent } from './bottom/bottom.component';
import { RouterModule,Routes } from '@angular/router';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { RealizacjeComponent } from './realizacje/realizacje.component';
import { Util } from './util.service';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'katalogi', component: CatalogsComponent },
  { path: 'realizacje', component: RealizacjeComponent },
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
    RealizacjeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [Util],
  bootstrap: [AppComponent],
})
export class AppModule {}

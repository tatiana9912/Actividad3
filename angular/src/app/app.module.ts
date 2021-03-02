import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { IndexComponent } from './pages/index/index.component';
import { HistoryComponent } from './components/history/history.component';
import { FooterComponent } from './components/footer/footer.component';
import { PeopleComponent } from './components/people/people.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuLoginComponent } from './components/menu-login/menu-login.component';
import { DetailsComponent } from './components/details/details.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselComponent,
    IndexComponent,
    HistoryComponent,
    FooterComponent,
    PeopleComponent,
    ContactComponent,
    DashboardComponent,
    LoginComponent,
    MenuLoginComponent,
    DetailsComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditStockComponent } from './components/edit-stock/edit-stock.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { StocksComponent } from './components/stocks/stocks.component';

// flash messages
import { FlashMessagesModule } from 'angular2-flash-messages';

// Angular fire
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Services
import { StockService } from './services/stock.service';
import { AuthService } from './services/auth.service';
// Forms Module
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';



@NgModule({
  declarations: [
    AppComponent,
    AddStockComponent,
    DashboardComponent,
    EditStockComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    RegisterComponent,
    SettingsComponent,
    SidebarComponent,
    StockDetailsComponent,
    StocksComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'fincheez'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [StockService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

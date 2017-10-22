import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';


export const firebaseConfig = {
  apiKey: "AIzaSyAN3mTzAzadd3FzAGi9cVXJ0NkUsqpAmaU",
  authDomain: "cocow-79a36.firebaseapp.com",
  databaseURL: "https://cocow-79a36.firebaseio.com",
  storageBucket: "cocow-79a36.appspot.com",
  messagingSenderId: "179020787791"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

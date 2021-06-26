import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapViewComponent} from './map-view/map-view.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {AngularFireModule} from '@angular/fire';

const firebaseConfig = {
  apiKey: 'AIzaSyDNaiqc4gAyA97ZZ7W7xRNqMSckHi0s5sg',
  authDomain: 'hackathon-4f45a.firebaseapp.com',
  projectId: 'hackathon-4f45a',
  storageBucket: 'hackathon-4f45a.appspot.com',
  messagingSenderId: '278492018357',
  appId: '1:278492018357:web:4b9beec97215a647e770fc',
  measurementId: 'G-1QGRSLNZ3S'
};

@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularFireModule } from '@angular/fire'
import { StoreModule } from '@ngrx/store'

import { environment } from '@env/environment'
import { CoreModule } from './core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppStoreModule } from './store/app-store.module'
import { refundReducer } from './store'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    AppStoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot({ refunds: refundReducer }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

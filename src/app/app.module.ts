import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { CalculateStandardDeviationComponent } from './calculate-standard-deviation/calculate-standard-deviation.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculateStandardDeviationComponent,
    calcStandardDeviation
  ],
  imports: [
    BrowserModule,
    UserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { CalculateStandardDeviationComponent } from './calculate-standard-deviation/calculate-standard-deviation.component';
import { StandardDeviationDirective } from './directives/standard-deviation.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalculateStandardDeviationComponent,
    StandardDeviationDirective,
  ],
  imports: [BrowserModule, UserModule, AppRoutingModule,FormsModule,ReactiveFormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

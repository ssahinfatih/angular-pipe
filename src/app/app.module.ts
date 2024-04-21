import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipe } from './pipes/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    {provide: DEFAULT_CURRENCY_CODE, useValue: '₺'},
    CustomPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

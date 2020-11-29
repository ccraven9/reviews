import { BroBeansModule } from './bro-beans/bro-beans.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    BroBeansModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

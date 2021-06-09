import { DataFormModule } from './data-form/data-form.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { OutputPropertyComponent } from './output-property/output-property.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OutputPropertyComponent,
    DataBindingComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    DataFormModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

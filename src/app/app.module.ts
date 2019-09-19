import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// dynamic form builder

import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';


import { AppComponent } from './app.component';



@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, DynamicFormBuilderModule],
  declarations: [AppComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { TextBoxComponent } from './atoms/textbox';
import { DropDownComponent } from './atoms/dropdown';




@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DynamicFormBuilderComponent,
    FieldBuilderComponent,
    TextBoxComponent,
    DropDownComponent


  ],
  exports: [DynamicFormBuilderComponent],
  providers: []
})
export class DynamicFormBuilderModule { }

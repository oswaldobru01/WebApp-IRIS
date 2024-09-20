import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DropdownModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    CheckboxModule,
    DividerModule
  ],
  exports: [
    DropdownModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    CheckboxModule,
    DividerModule
  ]
})
export class SharedModule { }

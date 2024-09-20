import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
@NgModule({
  declarations: [

  ],
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
  ],
  providers: [
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class SharedModule { }

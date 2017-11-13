import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [HeaderComponent, FooterComponent, LoginComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    FormsModule,],
  entryComponents: [
    LoginComponent
  ]
})
export class SharedModule {
}

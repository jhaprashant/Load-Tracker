import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Routes, RouterModule } from '@angular/router'
let routes: Routes = [
  {
    path: '#register', component: RegisterComponent
  },
  {
    path: '#login', component: LoginComponent
  },
  {
    path: '#contact', component: ContactusComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

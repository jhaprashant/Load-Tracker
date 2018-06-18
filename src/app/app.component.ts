import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isRegisterSelected : boolean;
  isLoginSelected : boolean;
  isHomeSelected : boolean;
  isContactSelected : boolean;

  ngOnInit(){
    this.isHomeSelected=true;
  }
}

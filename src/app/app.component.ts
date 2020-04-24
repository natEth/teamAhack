import { Component } from '@angular/core';
declare var Tesseract;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A team  Hackathon Project';
  Result = 'Recognizing...';
  constructor() {    
     this. test();     
  }
  test(){
    Tesseract.recognize('assets/Images/TestDemo.png').then(function(result){         
      alert(result.text);      
      });    
  }
}

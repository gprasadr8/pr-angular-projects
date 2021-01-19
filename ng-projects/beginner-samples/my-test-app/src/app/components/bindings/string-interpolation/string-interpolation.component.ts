import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent implements OnInit {

  message = "This is the message from StringInterpolation Component";
  constructor() { }

  ngOnInit(): void {
  }

  getMessage(){
    console.log("this method is called .....");
    return "This is the message from getMessage() method";
  }

}

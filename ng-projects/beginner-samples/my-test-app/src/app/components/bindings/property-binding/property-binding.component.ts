import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  message = "Bound Via Property Binding";
  constructor() { }

  ngOnInit(): void {
  }

  getMessage(){
    console.log("getMessage() called...");
    return "message from getMessage()...";
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  animal = 'Tiger';
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    alert("Button is clicked..!");
  }

  onKeyUp(keyUpEvent){

    console.log(keyUpEvent);
    console.log(keyUpEvent.code);
    if (keyUpEvent.code === "Enter") alert("User clicked on Enter");
  }
}

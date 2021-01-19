import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.scss']
})
export class CounterActionsComponent implements OnInit {

  @Output() counterChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() someNumber:number;
  // for two way binding name should be like input-param-name+Change
  @Output() someNumberChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  handleButton(operation:string){
    //this.counterChange.emit(operation);
    operation === 'INC'? this.someNumber++ : this.someNumber--;
    console.log(operation);
    console.log(`someNumber: ${this.someNumber}`);
    this.someNumberChange.emit(this.someNumber);
  }

}

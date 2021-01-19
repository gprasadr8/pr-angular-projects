import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.scss']
})
export class NoteListItemComponent implements OnChanges, OnInit, AfterContentInit, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input() note:string;
  @Input() noteIndex:number;
  @Output() deleteNote:EventEmitter<number> = new EventEmitter<number>();

  timer:number = 0;
  intervalId:number;
  timeoutId:number;

  handleDeleteClick(){
    this.deleteNote.emit(this.noteIndex);
  }

  constructor(){
    console.log(
    ` %c NoteListItemComponent:: constructor: Called on Component/Directive
    instantiation by angular: ${this.note}`,
    "color:white;background-color:black"
    );
  }

   ngOnChanges(simpleChanges: SimpleChanges): void {
    console.log(`%c Note List Item component:: ngOnChanges: called on every @Input Propery change
    ${JSON.stringify(simpleChanges)}`,
    "color: blue");
  }

  ngOnInit(): void {
    console.log(`%c NoteListItemComponent::ngOnInit: Called after first ngOnChanges ${this.note}`,
    "color:green");
    this.intervalId =  setInterval(()=>{
      this.timer++;
      console.log("Timer logged from setInterval!: ",this.timer);
    },1000 );
    this.timeoutId = setTimeout(()=>{
      console.log("Logged from setTimoutOut! ")
    }, 5000);
  }

  //Avoid writing anything in this funciton
  // it can cost a lot of performance
  ngDoCheck(): void {
    console.log(
      `%c   NoteListItemComponent: ngDoCheck: called after first ngOnInit and
      then after every ngOnChanges. `,"color:orange"
    );
  }

  ngAfterContentInit(): void {

    console.log(`
    %c NoteListItemComponent:: ngAfterContentInit: called after
    first ngDoCheck when Angualar has finished projecting the content in the
    child component`,
    "color:green");
  }

   //Avoid writing anything in this funciton
  // it can cost a lot of performance
  ngAfterContentChecked(): void {
    console.log(
      `%c NoteListItemComponent:: ngAfterContentChecked: called once after
      Angular has checked the projected content while running it's changeDetection cycle and after
      every ngDoCheck `,
      "color: orange"
    );


  }

   ngAfterViewInit(): void {
    console.log(
      `%c NoteListItemComponent:: ngAfterViewInit: Called once after Angualr has
      initialized the view of a component and all it's children`,
      "color:green"
    );
  }
  //Avoid writing anything in this funciton
  // it can cost a lot of performance
  ngAfterViewChecked(): void {
    console.log(
      `%c NoteListItemComponent:: ngAfterViewChecked: called once after
      Angular has checked the view of a component and all it's children while running
      it's chnage detection cycle and after every ngAfterContentChecked`,
      "color: orange"
    );
  }

 ngOnDestroy(): void {
    console.log(
      `%c NoteListItemComponent:: ngOnDestroy: Called right
      before Angular is about to destroy the component from DOM`,
      "color:red"
    );
    clearInterval(this.intervalId);
    clearTimeout(this.timeoutId);
  }
}

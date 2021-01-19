import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages: string[] = [
    'message 1',
    'message 2',
    'message 3',
    'message 4'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.scss']
})
export class AttributeBindingComponent implements OnInit {

  actionName:string = "Alert";
  numbers = [1,2];
  constructor() { }

  ngOnInit(): void {
  }

}

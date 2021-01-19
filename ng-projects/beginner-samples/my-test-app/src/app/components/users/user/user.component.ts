import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state,style,animate,transition} from '@angular/animations';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom,
  animations:[
    trigger("openClose",[
      state("open",style({
        height:"200px",
        opacity:1,
        backgroundColor:"yellow"
      })),
      state("closed", style({
        height:"100px",
        opacity:0.5,
        backgroundColor:"green"

      })),
      transition("open => closed", [animate("1s")]),
      transition("closed => open", [animate("0.5s")])
    ])
  ]
})
export class UserComponent implements OnInit {

  isOpen = true;

  toggle(){
    this.isOpen = !this.isOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

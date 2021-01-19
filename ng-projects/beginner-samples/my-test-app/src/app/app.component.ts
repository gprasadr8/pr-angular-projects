import { Component } from '@angular/core';

import { trigger, state,style,animate,transition} from '@angular/animations';


@Component({
  selector: 'app-root',
    // template:` <h1> Hello World</h1>
    //   <p> This is the para tag </p>
    // `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',"./app1.component.scss"]
  // styles:[
  //   `
  //   p {
  //     color:blue;
  //   }
  //   `
  // ]

})
export class AppComponent {
  title = 'Angular 9!';

  counter = 0;
  classToSet = 'positive';

  onCounterChange(buttonType: string){
    console.log(`clicked for ${buttonType}`);
    buttonType === 'INC'? this.counter++ : this.counter--;
    this.classToSet = this.counter >=0 ? 'positive' : 'negative';
  }
}

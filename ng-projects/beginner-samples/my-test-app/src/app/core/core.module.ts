import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CorePipePipe } from './core-pipe.pipe';
import { CoreDirectiveDirective } from './core-directive.directive';


// if you want to user this module declartions in some other angular module then
// you have to add those to exports array
@NgModule({
  declarations: [HeaderComponent, CorePipePipe, CoreDirectiveDirective],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent]
})
export class CoreModule { }

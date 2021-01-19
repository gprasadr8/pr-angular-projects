import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:IUser;

  constructor(private activatedRoute: ActivatedRoute, private userService:UsersService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      console.log(params);
      this.user = this.userService.getUserById(+params.userId);
      console.log("User: ",this.user);
    });

    this.activatedRoute.queryParams.subscribe(queryParams=>{
      console.log("Query Params:",queryParams);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
// instead of duplicating the whole data we can use service class will discuss it later
  users:Array<IUser>;
  selectedUserId:number;
  user;

  constructor(private activatedRoute:ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    console.log("ngOnInit  is called");
    this.activatedRoute.params.subscribe(params=>{
      console.log(params);
      // it will give params which we have mentioned on routes in AppRoutingModule
      //Ex: here param name = userId
      //Below +will convert from string to number
      this.selectedUserId = +params.userId;
      this.user = this.users.filter(user=>user.id ===this.selectedUserId)[0];

    });
    this.activatedRoute.queryParams.subscribe(queryString=>{
      console.log("query String: ",queryString);
    })
  }

}

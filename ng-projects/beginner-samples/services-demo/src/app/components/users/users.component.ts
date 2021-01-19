import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:Array<IUser>;
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }


}

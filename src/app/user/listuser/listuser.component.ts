import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  acrions:any;
}

const ELEMENT_DATA: User[] = [];
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email','actions'];
  dataSource = ELEMENT_DATA;
  listUser:User[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.listUser().subscribe(data  =>{
      this.listUser=data;
    })
  }

}

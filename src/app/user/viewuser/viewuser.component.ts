import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
userId:string=' ';
userDetails:any;
  constructor(private userService:UserService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
    this.userId=data['id'];
    console.log(this.userId)
    
    })
    this.userService.viewUser(this.userId).subscribe(data=>{
      // console.log(data);
      this.userDetails=data;
    })
  }

}

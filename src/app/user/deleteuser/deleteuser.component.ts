import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  userid:string=' ';
  constructor(private userService:UserService,private activetedRoute:ActivatedRoute,private _snackbar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  this.activetedRoute.params.subscribe(data=>{
    this.userid=data['id'];
    // console.log(this.userid);
  })
  if(this.userid){
  this.userService.deleteUser(this.userid).subscribe(data=>{
    this._snackbar.open("the user is successfully deleted");
    // console.log(data); 
  },err=>{
    this._snackbar.open("sorry there are some trouble to delete the user");
  })
  }
}
  

}

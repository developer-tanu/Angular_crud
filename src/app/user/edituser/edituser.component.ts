import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
userId:any;
userDetails:any;
dataLoaded:boolean=false;
editFormUser:FormGroup=new FormGroup({})
  constructor(private _snackBar:MatSnackBar     ,private activateRoute:ActivatedRoute,private userService:UserService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    dataLoaded:false;
    this.activateRoute.params.subscribe(data=>{
    this.userId=data['id'];  
    })
  if(this.userId !== ''){
    this.userService.viewUser(this.userId)
    .toPromise()
    .then(data=>{
      this.userDetails=data;
      Object.assign(this.userDetails,data);
      console.log(this.userDetails);
      this.editFormUser=this.formBuilder.group({
        'username':new FormControl(this.userDetails.name),
        'email':new FormControl(this.userDetails.email),
      })
      this.dataLoaded=true;
    })
 
  }
  }
  updateUser(){
    this.userService.updateUser(this.userId,this.editFormUser.value).subscribe(data=>{
      this._snackBar.open("user is updated");
      console.log(data);
  },err=>{
    this._snackBar.open("there is some err while updating user")
  
 
    })
  }

}

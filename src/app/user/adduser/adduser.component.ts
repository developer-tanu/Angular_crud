import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 addUserForm:FormGroup=new FormGroup({});
  constructor(private formBuilder:FormBuilder,private userService:UserService,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm=this.formBuilder.group({
     'username':new FormControl(' ',[Validators.required,Validators.minLength(3)]),
      'email':new FormControl(' ',[Validators.required,Validators.minLength(3)]),
      'phone':new FormControl('',[Validators.required,Validators.maxLength(10)]),
    })
  }
  createUser()
  {
    this.userService.adduser(this.addUserForm.value).subscribe(data=>{
      this._snackBar.open("user is created");
        console.log(data);
    },err=>{
      this._snackBar.open("there is some err while creating user")
    })
   
  }

}

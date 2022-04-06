import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AdduserComponent,
    EdituserComponent,
    DeleteuserComponent,
    ViewuserComponent,
    ListuserComponent,
   
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule
   ],
   exports:[
     
    AdduserComponent,
    EdituserComponent,
    DeleteuserComponent,
    ViewuserComponent,
    ListuserComponent
   ],
   providers:[
   { provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue:{duration:2500}}
   ]
   
})
export class UserModule { }

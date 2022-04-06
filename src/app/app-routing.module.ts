import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './user/adduser/adduser.component';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { ListuserComponent } from './user/listuser/listuser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { DeleteuserComponent } from './user/deleteuser/deleteuser.component';
const routes: Routes = [
  {path:'users',
  children:
  [
    {path:"create",component:AdduserComponent},
    {path:"view/:id",component:ViewuserComponent},
    {path:"list",component:ListuserComponent},
    {path:"edit/:id",component:EdituserComponent},
    {path:"delete/:id",component:DeleteuserComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

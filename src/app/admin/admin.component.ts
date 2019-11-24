import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from './admin.service';
import { AuthenticationUser } from '../model/authenticationuser';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../services/user.service';


export interface DialogData {
  user: AuthenticationUser;
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  usersTitle: string = "Liste des Utilisateurs";
  helloAdmin: any;
  listUsers: Array<AuthenticationUser> = [];
  showUsers: boolean = false;
  showFormAddUser: boolean = false

  constructor(private userService: UserService, private adminService: AdminService, private router: Router, private route: ActivatedRoute, public dialog: MatDialog) {
  }


  ngOnInit() {
    this.getAdminHello();
  }

  getAdminHello() {
    this.adminService.getAdminHello().subscribe(res => this.helloAdmin = res);
  }

  getAllUsers() {
    if (this.adminService.listUsers.length < 1) {
      this.adminService.getAllUsers().subscribe((res: AuthenticationUser[]) => {
        this.adminService.listUsers = res;
        this.listUsers = res;
      })
    } else {
      this.listUsers = this.adminService.listUsers;
    }
    this.showUsers = true;
    this.showFormAddUser = false;
  }

  AddUser() {
    this.showFormAddUser = true;
    this.showUsers = false;
  }

  openDialog(u: AuthenticationUser) {
    this.dialog.open(DialogDataUserDialog, {
      data: {
        user: u
      }
    });
  }

}

@Component({
  selector: 'user-data-dialog',
  templateUrl: 'dialog-data-user-dialog.html',
})
export class DialogDataUserDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}

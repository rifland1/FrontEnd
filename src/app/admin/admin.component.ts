import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminService } from './admin.service';
import  { AuthenticationUser } from '../model/authenticationuser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usersTitle: string = "Liste des Utilisateurs";
  helloAdmin: any;
  listUsers: Array<AuthenticationUser> = [];

  constructor(private adminService: AdminService) {
  }


  ngOnInit() {
    this.getAdminHello();
  }

  getAdminHello() {
    this.adminService.getAdminHello().subscribe(res => this.helloAdmin = res);
  }

  getAllUsers() {
    this.adminService.getAllUsers().subscribe((res: AuthenticationUser[]) => this.listUsers = res);
  }

}

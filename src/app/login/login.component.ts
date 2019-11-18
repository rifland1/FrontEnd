import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient }from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};
  title: string;
  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(private userService: UserService, private http: HttpClient, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.title = "Bienvenue sur la page du LOGIN !";
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  login() {
    if (this.form.valid) {
      this.userService.login(this.form.value).subscribe(res => {
        if (this.userService.isLogged) {
          this.userService.getUser();
          this.router.navigate(['/home']);
        }
      });
    }
    this.formSubmitAttempt = true;
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient }from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationUser } from '../model/authenticationuser';
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
        debugger
        if (this.userService.loggedIn) {
          this.userService.getUser().subscribe(res => {
            let array = res['roles'];
            let roles: Array<string> = [];
            for (let i = 0; i < array.length; i++) {
              roles[i] = array[i]['authority'];
            }
            this.userService.user = new AuthenticationUser(res['id'], res['username'], roles);
            //let url = this.userService.urlToNavigayte ? this.userService.urlToNavigayte : '/home';
            this.router.navigate(['/home']);
          });
        }
      });
    }
    this.formSubmitAttempt = true;
  }
}

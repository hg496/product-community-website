import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  baseUrl: string = 'http://localhost:8080/users';
  emailRegx =
    /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailID: ['', [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16),
        ],
      ],
    });
  }

  userID: number = 0;
  loginUser() {
    if (this.loginForm.valid) {
      this.http.get<any>(this.baseUrl).subscribe(
        (res) => {
          const isUserExit = res.find((user: any) => {
            if (
              user.emailID === this.loginForm.value.emailID &&
              user.password === this.loginForm.value.password
            ) {
              this.userID = user.id;
              return true;
            } else {
              return false;
            }
          });

          if (isUserExit) {
            this.loginForm.reset();
            this.router.navigate(['dashboard/' + this.userID]);
          } else {
            alert('User Not Found!!');
          }
        },
        () => alert('Something went wrong!!')
      );
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CustomValidators } from './custom-validators';
import { MatDialogRef } from '@angular/material/dialog';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass'],
})
export class RegistrationComponent implements OnInit {
  userForm!: FormGroup;
  emailRegx =
    /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    private dialogRef: MatDialogRef<RegistrationComponent>
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group(
      {
        emailID: [
          '',
          [Validators.required, Validators.pattern(this.emailRegx)],
        ],
        firstName: ['', [Validators.required, Validators.maxLength(50)]],
        lastName: ['', [Validators.required, Validators.maxLength(50)]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(16),
          ],
        ],
        confirm_password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(16),
          ],
        ],
      },
      { Validator: CustomValidators.MatchingPasswords }
    );
  }

  registerUser() {
    if (this.userForm.valid) {
      this.api.postUser(this.userForm.value).subscribe({
        next: () => {
          swal.fire(
            'Success',
            'Congratulations, your account has been successfully created.',
            'success'
          );
          this.userForm.reset();
          this.dialogRef.close('save');
          this.router.navigate(['login']);
        },
        error: () => {
          swal.fire(
            'Oops!!',
            'You are already registered with this email id.<br> Please login or register with new email id.',
            'error'
          );
          this.userForm.reset();
        },
      });
    }
  }

  loginPage() {
    this.dialogRef.close();
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 1);
  }
}

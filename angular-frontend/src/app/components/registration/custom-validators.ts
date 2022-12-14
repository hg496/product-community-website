import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static MatchingPasswords(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirm_password')?.value;
    const currentErrors = control.get('confirm_password')?.errors;
    const confirmControl = control.get('confirm_password');

    if (compare(password, confirmPassword)) {
      confirmControl?.setErrors({not_matching: true });
    } else {
      confirmControl?.setErrors({ ...currentErrors });
    }
    //   if (password !== confirmPassword) {
    //     control.get('confirmPassword')?.setErrors({ConfirmPassword: true})
    // } else {}
  }
}

function compare(password: string, confirmPassword: string) {
  return password !== confirmPassword && confirmPassword !== '';
}

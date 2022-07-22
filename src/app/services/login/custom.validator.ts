import {
  AbstractControl,
  FormControl,

  ValidationErrors,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class CustomValidator {
  static passwordMatch(control: AbstractControl): ValidationErrors | null {
    if(!control.get('confirmPassword')){
      return null;
    }

    if (
      control.get('password')?.value !== control.get('confirmPassword')?.value
    ) {
      return { passwordMatch: true };
    }
    else {
      return null;
    }

  }
}

export class ConfirmValidParentMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
  ): boolean {
    return Boolean(control?.parent?.invalid && control?.touched);
  }
}

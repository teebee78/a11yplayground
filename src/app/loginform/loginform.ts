import {Component, DestroyRef, inject, signal} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../user-service';
import {Router} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-loginform',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './loginform.html',
  styleUrl: './loginform.scss',
})
export class Loginform {

  private readonly userService = inject(UserService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  canSubmit = signal(true);

  form = new FormGroup({
    email: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
    password: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
  });

  onLogin() {
    if (this.form.valid) {
      this.canSubmit.set(false);
      const {email, password} = this.form.getRawValue();
      this.userService.logIn(email, password)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(result => {
          if (result) {
            this.router.navigate(['dashboard']);
            this.canSubmit.set(true);
          }
        })
    }
  }
}

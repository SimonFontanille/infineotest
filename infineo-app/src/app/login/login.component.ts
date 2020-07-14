import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLogged: boolean;
  public loginForm: FormGroup;
  private isLoginSubsription: Subscription;
  public submitted: boolean;
  public connectionRefused: boolean;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.isLoginSubsription = this.authService.currentUserIsLogged.subscribe(
      (value) => {
        this.isLogged = value;
        if (value) {
          this.router.navigate(['/']);
        }
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.connectionRefused = this.authService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
  }

}

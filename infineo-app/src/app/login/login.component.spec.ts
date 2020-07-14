import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [
        AuthService,
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be a valid connection', () => {
    component.loginForm.controls['username'].setValue("user");
    component.loginForm.controls['password'].setValue("pass");

    component.onSubmit();
    expect(component.connectionRefused).toEqual(false);
  });

  it('should be connection refused', () => {
    component.loginForm.controls['username'].setValue("user2");
    component.loginForm.controls['password'].setValue("pass2");

    component.onSubmit();
    expect(component.connectionRefused).toEqual(true);
  });
});

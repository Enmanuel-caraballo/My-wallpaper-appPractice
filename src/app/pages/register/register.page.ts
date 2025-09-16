import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/services/user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
 name!: FormControl;
 lastName!: FormControl;
 email!: FormControl;
 password!: FormControl;
 registerForm!: FormGroup;

  constructor(private readonly userSrv: User ) {
    this.initForm();
  }

  public async doRegister(){
    console.log(this.registerForm.value);
   await this.userSrv.create(this.registerForm.value);
  }

  ngOnInit() {
  }

  private initForm(){
    this.name = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);

    this.registerForm = new FormGroup({
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password,

    });
  }

}

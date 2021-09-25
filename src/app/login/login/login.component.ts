import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  responce : any;
  errorMsg : string;
  constructor( private loginservice:LoginService, private router:Router) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    userName : new FormControl('', Validators.required),
    passwordtype : new FormControl('', Validators.required),
    password : new FormControl(''),
  });

  loginUser(){
    const md5 = new Md5();
    let pass = this.loginForm.controls['passwordtype'].value;
    this.loginForm.controls['password'].setValue(md5.appendStr(pass).end());
    this.loginservice.loginUser(this.loginForm.value).subscribe(
      data => { 
        this.responce = data;
        if(this.responce.responseStatusCode == 200){
          localStorage.setItem('token', this.responce.responseObject.tokenString);
        }
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.responce = err.error;
        this.errorMsg = this.responce.responseMessage;
      }
    );

  }

}

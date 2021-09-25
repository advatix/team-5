import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsso',
  templateUrl: './loginsso.component.html',
  styleUrls: ['./loginsso.component.scss']
})
export class LoginssoComponent implements OnInit {
  responce : any;
  ssotoken : string;
  errorMsg : string;
  attempt : number;
  constructor( private keycloakService : KeycloakService, private loginService:LoginService, private router:Router) {}

  ngOnInit() {
    this.keycloakService.getToken().then( value => { 
      localStorage.setItem('ssoToken', value);
    });
    this.getWmsToken();
    this.attempt = 1;
  }


  

  getWmsToken(){
    this.ssotoken = localStorage.getItem('ssoToken');
    
    if(this.ssotoken){
      this.loginService.getWmsToken(this.ssotoken).subscribe(
        data => { 
          this.responce = data;
          if(this.responce.responseStatusCode == 200){
            localStorage.setItem('token', this.responce.responseObject.tokenString);
          }
          this.loginService.setUserData(JSON.stringify(this.responce.responseObject));
          this.router.navigate(['/dashboard']);
        },
        err => {
          this.attempt = this.attempt + 1;
          if(this.attempt < 3){
            this.getWmsToken();
          } else {
            this.keycloakService.clearToken();
            this.keycloakService.logout();
            this.router.navigate(['/']);
          }
          this.responce = err.error;
          this.errorMsg = this.responce.responseMessage;
        }
      )
    } else {
      setTimeout(()=>{ window.location.reload() }, 2000)
    }
  }

}

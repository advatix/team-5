//loader.interceptor.ts
import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { interval, Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';



@Component({
  selector: 'app-loading',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading: boolean;
  subscription: Subscription;
  ssotoken: any;
  responce: any;
  attempt = 0;

  progressbarValue = 100;
  curSec: number = 0;
  constructor(private loaderService: LoaderService, private commonService: CommonService,private router: Router) {

    
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
     // console.log(this.loading);
    });
  }
  
  ngOnInit() {
    this.subscription = interval(10000).subscribe(val => {
   
    });
  }
}
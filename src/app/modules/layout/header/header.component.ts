import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  url="";
  userData : any;
  icons=true;
  constructor(private router:Router) {
  }

  ngOnInit() {
  
  }
}

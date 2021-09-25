import {Component, OnInit} from '@angular/core';


declare var $;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  userData : any;

  constructor() {
  }

  ngOnInit() {
    // $(document).ready(() => {
    //   $('.sidebar-menu').tree();
    // });

   //this.userData = this.loginService.getUserData();
    
  }

}

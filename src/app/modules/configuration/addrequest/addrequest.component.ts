import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import Swal from 'sweetalert2';
declare var moment: any;
@Component({
  selector: 'app-addrequest',
  templateUrl: './addrequest.component.html',
  styleUrls: ['./addrequest.component.scss']
})
export class AddrequestComponent implements OnInit {
  ConfigurationForm : any;
  response: any;
  cityList: any = [];
  dayList:any=[];
  message:any;
  respData:any;
  submitted:any=false;
  constructor( private router:Router,private ordersService: OrdersService) {
    this.ConfigurationForm = new FormGroup({
      inventoryurl:new FormControl(''),
      orderurl:new FormControl('')
    });
   }
  ngOnInit() {
    
  }

  ConfigurationSave() {
    this.submitted = true;
    let postData={
      "inventoryurl":this.ConfigurationForm.controls['inventoryurl'].value,
      "orderurl":this.ConfigurationForm.controls['orderurl'].value
    };
    this.ordersService.ConfigurationUpdate(postData).subscribe((data) => {
        this.respData = data;
        Swal.fire({
          title: '',
          text: "Configuration has been Update successfully",
          icon: 'success',
          showCancelButton: false,
          cancelButtonText: 'OK'
        }).then((result) => {
          this.router.navigate(['configuration/view']);
        });
      },
      error => {
        Swal.fire({
          title: '',
          text: error.error.responseMessage,
          icon: 'error',
          showCancelButton: false,
          cancelButtonText: 'OK'
        });
      }
    );
  }
}
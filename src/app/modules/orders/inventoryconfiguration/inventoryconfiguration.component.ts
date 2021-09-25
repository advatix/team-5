import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { OrdersService } from 'src/app/services/orders.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventoryconfiguration',
  templateUrl: './inventoryconfiguration.component.html',
  styleUrls: ['./inventoryconfiguration.component.scss']
})
export class InventoryconfigurationComponent implements OnInit {

  uploadForm: FormGroup;
  fileUrl: string;
  batchListData: any;
  uploadList: any;
  uploadResponce: any;
  batchId: string;
  selectedFiles: FileList;
  currentFile: File;
  message = '';
  batchResponse: any;
  batchDetails: any;
  respData : any;
  locations : any;
  selectedLocation : string = '';
  userData : any;
  userLocation : any;
  config : any;
  pageSize : any;
  filterLocation : any;
  locationFlag : any = 0;
  constructor(private router:Router,private fb: FormBuilder, private oredrService: OrdersService, private commonService: CommonService) { }
  ngOnInit() {
    this.commonService.setTitle('Upload Orders');
    this.uploadForm = this.fb.group({
      files: new FormControl('', Validators.required)
    });
    this.pageSize = 10;
    this.config = {
      itemsPerPage: this.pageSize,
      currentPage: 0,
      totalItems: 0
    };
    this.fileUrl = environment.WEB_URL + '/assets/Order.json';
    this.getUploadList(0);
  }

  getUploadList(pageNumber) {
    pageNumber = (pageNumber != 0) ? pageNumber - 1 : 0;
    this.uploadList = [];
    this.oredrService.getUploadList(pageNumber, this.pageSize).subscribe(
      data => {
        this.batchListData = data;
        if (this.batchListData.responseStatusCode == 200) {
          this.uploadList = this.batchListData.responseObject;
          pageNumber = pageNumber + 1;
          this.config = {
            itemsPerPage: (this.pageSize == '') ? this.batchListData.responseObject.totalElements : this.pageSize,
            currentPage: pageNumber,
            totalItems: (this.batchListData.responseObject.totalElements) ? this.batchListData.responseObject.totalElements : 0
          };
        }
      },
      err => {
        console.log('err', err);
      }
    )
  }
  
  selectFile(event) {
    this.selectedFiles = event.target.files;
    let fileItem = this.selectedFiles.item(0)
    if (fileItem.size > 10485760) {
      this.message = 'Could not upload the file! File Size must be less than 10 MB.';
      setTimeout(() => { this.message = '' }, 7000);
      event.target.value = '';
    }
  }

  upload() {
    this.batchDetails = {};
    this.batchId = '';
    //console.log(this.currentFile);
    this.currentFile = this.selectedFiles.item(0);
    this.oredrService.orderupload(this.currentFile).subscribe(
      data => {
        this.uploadResponce = data;
        if (this.uploadResponce.status == "success") {
          Swal.fire({
            title: '',
            text: "Order has been Uploaded successfully",
            icon: 'success',
            showCancelButton: false,
            cancelButtonText: 'OK'
          }).then((result) => {
          //this.getUploadList(0);
            this.router.navigate(['orders']);
          });
        }
      },
      err => {
        console.log('err', err);
        this.message = err.error.responseMessage;
        setTimeout(() => { this.message = '' }, 7000);
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }



  selectLocation(event) {
    this.selectedLocation = event.target.value;
  }


  pageChanged(event) {
    this.config.currentPage = event;
    this.getUploadList(this.config.currentPage);
  }

  setPageSize(pageSize) {
    this.pageSize = pageSize;
    this.getUploadList(0);
  }
}


import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http : HttpClient,
    private titleService:Title
  ) { }

  getPageSize(){
    if(sessionStorage.getItem('PAGE_SIZE') === null){
      return environment.PAGE_SIZE;
    } else if(sessionStorage.getItem('PAGE_SIZE') =="all"){
      return environment.PAGE_SIZE_ALL;
    }else{
      return parseInt(sessionStorage.getItem('PAGE_SIZE'));
    }
  }


  setPageSize(page_size){
   
    return sessionStorage.setItem('PAGE_SIZE', page_size);
  }


  setTitle(title){
    this.titleService.setTitle("XPDEL" + (title ? " || " + title.toUpperCase() : '') );
  }

  formatDate(dt){
    if(dt){
      return `${
        (dt.getMonth()+1).toString().padStart(2, '0')}-${
        dt.getDate().toString().padStart(2, '0')}-${
        dt.getFullYear().toString().padStart(4, '0')}`;
    } else {
      return '';
    }
  }
}

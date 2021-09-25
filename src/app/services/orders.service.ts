import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  getUploadList(pageNumber, pageSize) {
    return this.http.get(environment.WEBSERVICE_URL + '/order/fileStatusList');
  }
  
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('files', file);
    const req = new HttpRequest('POST', environment.WEBSERVICE_URL + '/uploads/uploadOrders', formData);
    return this.http.request(req);
  }

  orderupload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('files', file);
    formData.append('customerId','amit1');
    formData.append('docName','orderFile');
    const req = new HttpRequest('POST', environment.WEBSERVICE_URL + '/order/uploadFile', formData);
    return this.http.request(req);
  }


  getOrdersData(postData, pageNumber, pageSize){
    return this.http.post(environment.WEBSERVICE_URL + '/order/getAllOrders?pageNumber=' + pageNumber + '&pageSize=' + pageSize, postData);
  }
  
  getOrdersDetails(orderId){
    return this.http.get(environment.WEBSERVICE_URL + '/order/findByOrderNumber/' + orderId);
  }

  getOrderStatusList(){
    return this.http.get(environment.WEBSERVICE_URL + '/config/getOrderStatusList');
  }

  ConfigurationUpdate(postData){
    return this.http.post(environment.WEBSERVICE_URL + 'middleMile/saveMiddlemileOrderCreationConfig',postData);
  }
}

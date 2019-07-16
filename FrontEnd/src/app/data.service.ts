import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // adding http module to use for http request



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClick(){
    return console.log("clicked")
  }


  getBCVersion(){
    return this.http.get('https://equinixmiddleware.herokuapp.com/getbcversion')
  }


  getMiddlewareStatus(){
    return this.http.get('https://equinixmiddleware.herokuapp.com/middlewarestatus')
  }

  getOICStatus(){
    return this.http.get('https://equinixmiddleware.herokuapp.com/oicstatus')
  }

  getApp1status(){
    return this.http.get('https://equinixmiddleware.herokuapp.com/app1status')
  }

  getApp2status(){
    return this.http.get('https://equinixmiddleware.herokuapp.com/app2status')
  }

  getEmployeeList(){
    return this.http.get('http://localhost:3000/hcm/allEmployeeProfile');
  }

  getEmployeeData( personId ){
    return this.http.get('http://localhost:3000/hcm/employeeProfile/'+personId);
  }

  getRecentTransactions(){
    return this.http.get('https://equinixmiddleware.herokuapp.com/app2status')
  }


  postEmployeeUpdate( id, data ){
    return this.http.post(`http://localhost:3000/hcm/employeeUpdate/${id}`, data)
    
  }
  
  getEmployeeInfo( id ){
    return this.http.get(`http://localhost:3000/hcm/employeeProfile/${id}`)
  }




}

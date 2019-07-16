import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashComponent implements OnInit {

  loading: boolean = true;
  employeeList: Object;
  h1Style: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    //placing a get user subscribe on the on init lifecycle hook so it populates when app is opened
    this.data.getEmployeeList().subscribe(data =>{
      this.employeeList = data['items'];
      console.log(this.employeeList);
      console.log(data);
      this.loading = false;
    });
  }

  loadProfile(employeeId) {
    console.log('clicked');
    console.log(employeeId);
  }

}

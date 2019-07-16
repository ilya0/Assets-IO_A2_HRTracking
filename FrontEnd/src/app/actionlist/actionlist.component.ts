import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-actionlist',
  templateUrl: './actionlist.component.html',
  styleUrls: ['./actionlist.component.scss']
})
export class ActionlistComponent implements OnInit {

  personId: any;
  loading: boolean = false;
  employeeData: FormGroup;
  error:boolean = false;
  errormessage:string = "";
  testRenewalResponse;
  middleware: Object;
  errormessagecode;
  employeeDataPopulated = false;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private data: DataService) { }

  ngOnInit() {
      this.personId = this.route.snapshot.paramMap.get('personId');
      console.log("----------------personId----------------------", this.personId);
      if(this.personId)
          this.loadUserData();
      else
          this.showSearch();
  }

  loadUserData() {
      console.log("----------------personId----------------------");
      console.log(this.personId);
      this.data.getEmployeeData(this.personId).subscribe(data => {
          console.log("--------------------------------------");
          console.log(data);
          let emplData:any = data;
          this.employeeData = this.formBuilder.group({
              PersonId: [emplData.items[0].PersonId],
              UserName: [emplData.items[0].FirstName],
              FirstName: [emplData.items[0].FirstName],
              MiddleName: [emplData.items[0].MiddleName],
              LastName: [emplData.items[0].LastName],
              PersonNumber: [emplData.items[0].PersonNumber],
              WorkPhoneNumber: [emplData.items[0].WorkPhoneNumber],
              WorkMobilePhoneNumber: [emplData.items[0].WorkMobilePhoneNumber],
              WorkEmail: [emplData.items[0].WorkEmail],
              WorkerType: [emplData.items[0].WorkerType],
              AddressLine1: [emplData.items[0].AddressLine1],
              AddressLine2: [emplData.items[0].AddressLine2],
              AddressLine3: [emplData.items[0].AddressLine3],

              // CitzenshipStatus: [emplData.items[0].CitzenshipStatus]
            });
          this.employeeDataPopulated = true;
      });


      // PassportID            string `json:"passportID"`
      // LicenseNumber         string `json:"licenseNumber"`
      // DriversLicenseID      string `json:"driversLicenseID"`

      // this.messageForm = this.formBuilder.group({
      //   UserName: ['IlyaO', Validators.required],
      //   Salutation: ['Mr', Validators.required],
      //   FirstName: ['ilya', Validators.required],
      //   MiddleName: ['Alex', Validators.required],
      //   LastName: ['Oso', Validators.required],
      //   PersonNumber: ['1234', Validators.required],
      //   WorkPhoneNumber: ['1231231234', Validators.required],
      //   WorkMobilePhoneNumber: ['3213213214', Validators.required],
      //   WorkEmail: ['ilya.osovets@oracl.com', Validators.required]
      // });
  }

  showSearch() {

  }

  async onSubmit(employeeData) {
    if(this.employeeData.invalid){ // if form is not complete
      return;
    }else{ 
      // else set loading to true, send data to ap
    this.loading = true // turn on loading message
    console.log("this is the message form value -",this.employeeData.value);

      this.loading = true;
      await this.data.postEmployeeUpdate( this.personId, this.employeeData.value ).subscribe( 
        res => { 
          this.testRenewalResponse = res;
          
          console.log("response after submitting to HCM - ", res);
          //location.reload();
          //show error messages on screeen
          // if(this.testRenewalResponse.statusCode != 200 ||this.testRenewalResponse.statusCode == null ){
          //   //admin stuff
          //   this.loading = false;
          //   this.error = true;
          //   this.errormessage = this.testRenewalResponse.error;
          //   this.errormessagecode = this.testRenewalResponse.statusCode
          // }
          this.router.navigate(['/submit/'+this.personId]);
        },
        err => { console.log(err);
           console.log("Error occured");
       }
      );

    }
}

}

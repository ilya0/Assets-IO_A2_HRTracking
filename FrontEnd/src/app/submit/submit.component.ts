import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  
  loading: boolean = false;
  messageForm: FormGroup;
  error:boolean = false;
  errormessage:string = "";
  testRenewalResponse;
  middleware: Object;
  errormessagecode;
  id: any;
  private sub: any;
  empldata : any;
  


  constructor(
    private formBuilder: FormBuilder,
    private data: DataService, 
    private transactionsdata: DataService, 
    private middlejson: DataService, 
    private router: ActivatedRoute
    ) { }


  ngOnInit() {

    //getting id of route
    this.sub = this.router.params.subscribe(
      params => {
      this.id = +params['personId']; // (+) converts string 'id' to a number
   });

   console.log("this is the id", this.id);


   if(isNaN(this.id)){
    // if no id exists use this to populate the form
    console.log("default route hit")
    this.messageForm = this.formBuilder.group({
      UserName: ['IlyaO', Validators.required],
      Salutation: ['Mr', Validators.required],
      FirstName: ['ilya', Validators.required],
      MiddleName: ['Alex', Validators.required],
      LastName: ['Oso', Validators.required],
      PersonNumber: ['1234', Validators.required],
      WorkPhoneNumber: ['1231231234', Validators.required],
      WorkMobilePhoneNumber: ['3213213214', Validators.required],
      WorkEmail: ['ilya.osovets@oracl.com', Validators.required]
    });

   }else{
// if id exists, find id information through api call
    console.log("id populated route hit");
    this.loading = true; // loading graphics on
    console.log("loading", this.loading)

    this.data.getEmployeeInfo(this.id).subscribe(
        //call api and save as data
        data =>{ 
          this.empldata = data;
          console.log("calling get empl info api");
          console.log(this.empldata);
        },

        //if error
        error => console.log("Error:", error),

        //if no error create form with api info after the api has comeback
        () => {
          if(this.error){
            console.log("Error:", this.error)
          }else{
            this.messageForm = this.formBuilder.group({
              PersonId: [this.empldata.items[0].PersonId],
              UserName: [this.empldata.items[0].FirstName],
              FirstName: [this.empldata.items[0].FirstName],
              MiddleName: [this.empldata.items[0].MiddleName],
              AddressLine1: [this.empldata.items[0].AddressLine1],
              LastName: [this.empldata.items[0].LastName],
              PersonNumber: [this.empldata.items[0].PersonNumber],
              WorkPhoneNumber: [this.empldata.items[0].WorkPhoneNumber],
              WorkMobilePhoneNumber: [this.empldata.items[0].WorkMobilePhoneNumber],
              WorkEmail: [this.empldata.items[0].WorkEmail],
              WorkerType: [this.empldata.items[0].WorkerType]
            })
            this.loading = false;
            console.log("loading", this.loading)
            
          }
        }
    );


   
   }

  }

//   FirstName
// Type: string
// Title: First Name
// Maximum Length: 150
// Person's first name.

  // LastName
  // Type: string
  // Title: Last Name
  // Maximum Length: 150
  // Person's last name.

  // DriversLicenseId
  // Type: integer (int64)
  // System-generated primary key. Surrogate key.


//   CitizenshipId
// Type: integer (int64)
// System-generated primary key. Surrogate key.

//   CitizenshipStatus
// Type: string
// Title: Citizenship Status
// Maximum Length: 30
// Status of person citizenship.

// WorkEmail
// Type: string
// Title: E-Mail
// Maximum Length: 240
// Person's work email address. Not marked as mandatory to allow creation of a first row for every person even when email address is not provided. Search on this attribute is not case sensitive.



  onSubmit(messageForm){
      if(this.messageForm.invalid){ // if form is not complete
        return;
      }else{ 
        // else set loading to true, send data to ap
     this.loading = true // turn on loading message
      console.log("this is the message form value -",this.messageForm.value);


        this.data.postEmployeeUpdate( this.id, this.messageForm.value ).subscribe( 
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
          },
          err => { console.log("Error occured"); }
        );


      }
  }


}

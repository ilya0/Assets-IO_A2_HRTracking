import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
 
@Injectable()
export class AuthServiceProvider {
  currentUser: User;
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
		if(credentials.password === "123456" && credentials.email === "retailer@nordstorm.com"){
        let access = true;
        this.currentUser = new User('Joe', 'retailer@nordstorm.com');
        observer.next(access);
        observer.complete();
		}
		else if(credentials.password === "123456" && credentials.email === "distributor@winsupply.com"){
			let access = true;
        this.currentUser = new User('Chris', 'distributor@winsupply.com');
        observer.next(access);
        observer.complete();
		}
		else if(credentials.password === "123456" && credentials.email === "customs@nationalwide.com"){
			let access = true;
        this.currentUser = new User('John', 'customs@nationalwide.com');
        observer.next(access);
        observer.complete();
		}
		else if(credentials.password === "123456" && credentials.email === "manufacturer@givenchy.com"){
			let access = true;
        this.currentUser = new User('JSmith', 'manufacturer@givenchy.com');
        observer.next(access);
        observer.complete();
		}
			else if(credentials.password === "123456" && credentials.email === "distributorcenter@prologis.com"){
			let access = true;
        this.currentUser = new User('David', 'distributorcenter@prologis.com');
        observer.next(access);
        observer.complete();
		}
			else if(credentials.password === "123456" && credentials.email === "admin@hhs.com"){
			let access = true;
        this.currentUser = new User('Smith', 'admin@hhs.com');
        observer.next(access);
        observer.complete();
		}
      });
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
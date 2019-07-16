import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpHeaders, HttpParams } from '@angular/common/http';

/*
  Generated class for the ProductBlockchainProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductBlockchainProvider {
  ROOT_URL: any;
  localhost_URL: any;
 
  channel: any;
  chaincode: any;
  chaincodeVer: any;

  constructor(public http: HttpClient) {
    console.log('Hello ProductBlockchainProvider Provider');
    this.ROOT_URL = 'https://08907A5277DF46A9B24950C4023F710A.blockchain.ocp.oraclecloud.com:443/restproxy1/bcsgw/rest/v1/transaction/query'
    this.localhost_URL ='http://localhost:8081' //'https://hhs-gse00015257.uscom-east-1.oraclecloud.com'

    this.channel = 'default';
    this.chaincode = 'Smart6';
    this.chaincodeVer = 'v1'

  }

  //get product detail from blockchain by calling readpProduct

  // getProducHistory(): Observable<any> {
  //   console.log("getProductDetailByProductId provider -- barcode --")
  //   return this.http.post(`${this.localhost_URL}/api/readProductHistory`, {


  //     productArray: [{
  //       prodid: 4902453
  //     },
  //     {
  //       prodid: 5019492
  //     }]


  //   })
  //     .map((res: any) => {
  //       console.log('prod details blockchain provider map', res)
  //       return res;
  //     })

  // }

  transferProduct(productDetails):  Observable<any>  {

    console.log("transfer product", productDetails)

    return this.http.post(`${this.localhost_URL}/api/transferProduct`, {
      "channel": this.channel,
      "chaincode": this.chaincode,
      "args":[ productDetails.productid, productDetails.mot, productDetails.nata, productDetails.shipmentype, productDetails.shipmentquantity,productDetails.newowner,productDetails.location],
      "method":"transferProduct",
      "chaincodeVer":this.chaincodeVer
      })
      .map((res: any) => {
        console.log('prod details blockchain provider map', res)
        return res;
      })

  }

  createProduct(productDetails): Observable<any>  {
    console.log("create product", productDetails)

    return this.http.post(`${this.localhost_URL}/api/initProduct`, {


      "channel": this.channel,
      "chaincode": this.chaincode,
      "method": "initProduct",
      "args": [productDetails.productid,productDetails.poid, productDetails.name, productDetails.owner,productDetails.pbrand,productDetails.mfd,
       productDetails.pmaterial,
      productDetails.plocation, productDetails.color],
      "chaincodeVer": this.chaincodeVer

    })
      .map((res: any) => {
        console.log('prod details blockchain provider map', res)
        return res;
      })
  }

  getProductdetailForManufacturer(productId) : Observable<any> {
    console.log(productId)
    return this.http.post(`${this.localhost_URL}/api/readProduct`, {
      "channel": this.channel,
      "chaincode": this.chaincode,
      "method": "readUser",
      "args": [productId],
      "chaincodeVer": this.chaincodeVer
    })
      .map((res: any) => {
        console.log('prod details blockchain provider map', res)
        return res;
      })
  }
  
    readDistributionCentre(poheaderid) : Observable<any> {
    
    return this.http.post(`${this.localhost_URL}/api/readDistributionCentre`, {
      "channel": this.channel,
      "chaincode": this.chaincode,
      "method": "readDistributionCentre",
      "args": [poheaderid],
      "chaincodeVer": this.chaincodeVer
    })
      .map((res: any) => {
        console.log('reading distribution center', res)
        return res;
      })
  }

  getProductDetailByOwner1(ownervalue) : Observable<any> {
    console.log(ownervalue)
    const params = new HttpParams({
      fromObject: {
       owner : ownervalue
      }
    });
    return this.http.post(`${this.localhost_URL}/api/productDetailByOwner?owner=${ownervalue}`, {
   params : params
    })
      .map((res: any) => {
        console.log('prod details blockchain provider map', res)
        return res;
      })

    }


    initCustomer(customer): Observable<any> {
      console.log("initt customer product", customer)
  
      return this.http.post(`${this.localhost_URL}/api/initCustomer`, {
        "channel": this.channel,
        "chaincode": this.chaincode,
        "method": "initCustomer",
        "args": [customer.crnumber, customer.dop, customer.location, customer.productid],
        "chaincodeVer": this.chaincodeVer
      })
        .map((res: any) => {
          console.log('prod details blockchain provider map', res)
          return res;
        })
    }
  
    getProductDetailByOwner(ownerName): Observable<any> {
      console.log("prod details by owner",ownerName)
      return this.http.post(`${this.localhost_URL}/api/productDetailByOwner`, {
        "channel": this.channel,
        "chaincode": this.chaincode,
        "method": "queryProduct",
        "args": [`{\"selector\":{\"docType\":\"Employee\",\"EmployeeID\":\"${ownerName}\"}}`],
        "chaincodeVer": this.chaincodeVer
      })
        .map((res: any) => {
          console.log('prod details blockchain provider map', res)
          return res;
        })
    }

    initCustomsForStatusUpdate(productid,status) : Observable<any> {
      console.log("initt customer product", status)
  
      return this.http.post(`${this.localhost_URL}/api/initCustomsStatusupdate`, {
        "channel": this.channel,
        "chaincode": this.chaincode,
        "method":"initCustom",
        "args":[ productid, status],
        "chaincodeVer": this.chaincodeVer
      })
        .map((res: any) => {
          console.log('prod details blockchain provider map', res)
          return res;
        })
    }
	
	getHistoryForProduct(productid) : Observable<any> {
      console.log("initt customer product", status)
  
      return this.http.post(`${this.ROOT_URL}`, {
        "channel": this.channel,
        "chaincode": this.chaincode,
        "method":"getHistoryForProduct",
        "args":[productid],
        "chaincodeVer": this.chaincodeVer
      },  {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa("api.user:J0S-puk+!SEmuyDS0G:l")
        })
      })
        .map((res: any) => {
          console.log('prod details blockchain provider map---', res)
          return res.result;
        })
    }

    getHistoryForMedicine(pdata) : Observable<any> {
      console.log("initt customer product", status)
  
      return this.http.post(`${this.localhost_URL}/api/getHistoryForMedicine?pdata=${pdata}`, {})
        .map((res: any) => {
          console.log('prod details blockchain provider map---', res)
          return res;
        })
    }
	
	
		getPurchaseQuotes() : Observable<any> {
      console.log("getPurchaseQuotes", status)
  
      return this.http.post(`${this.localhost_URL}/api/getPurchaseQuotes`,{})
        .map((res: any) => {
          console.log('getPurchaseQuotes---', res.items)
          return res;
        })
    }
	
		readPurchaseOrderfromERP(orderid) : Observable<any> {
      console.log("orderid", orderid)
  
      return this.http.post(`${this.localhost_URL}/api/readPurchaseOrderfromERP?OrderNumber=${orderid}`,{})
        .map((res: any) => {
          console.log('readPurchaseOrderfromERP---', res.items)
          return res;
        })
    }
	
		initPurchaseReciptNumber(ponumber,productid) : Observable<any> {
      console.log("initPurchaseReciptNumber", status)
  
      return this.http.post(`${this.localhost_URL}/api/initPurchaseReciptNumber?ponumber=${ponumber}&productid=${productid}`, {
        "channel": this.channel,
        "chaincode": this.chaincode,
        "method":"initPurchaseReciptNumber",
        "args":[ ponumber, productid],
        "chaincodeVer": this.chaincodeVer
      })
        .map((res: any) => {
          console.log('prod details blockchain provider map---', res)
          return res;
        })
    }
	
	initPurchaseQuote(pquote) : Observable<any> {
      console.log(pquote.ponumber+"initPurchaseQuote")
  
      return this.http.post(`${this.localhost_URL}/api/initPurchaseQuote`, {
        "channel": this.channel,
        "chaincode": this.chaincode,
        "method":"initPurchasequote",
        "args":[pquote.ponumber,pquote.ordernumber,pquote.creationdate,pquote.statuscode,pquote.status,pquote.buyerid,pquote.buyer,pquote.supplierid,pquote.supplier,pquote.ordered,pquote.ccode,pquote.currency,pquote.totaltax,pquote.total],
        "chaincodeVer": this.chaincodeVer
      })
        .map((res: any) => {
          console.log('prod details blockchain provider map---', res)
          return res;
        })
    }
	
	readPurchasequote(poid) : Observable<any> {
      console.log("initt customer product", poid)
  
      return this.http.post(`${this.localhost_URL}/api/readPurchasequote?poid=${poid}`, {
        "channel": this.channel,
        "chaincode": this.chaincode,
        "method":"readPurchasequote",
        "args":[ poid],
        "chaincodeVer": this.chaincodeVer
      })
        .map((res: any) => {
          console.log('readPurchasequote---', res)
          return res;
        })
    }

}

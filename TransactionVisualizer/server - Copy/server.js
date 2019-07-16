var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var rp = require('request-promise');
var fs = require('fs');
var obj = {
    product: []
};

global.__basedir = __dirname;
var fileName = __basedir + '/uploads/'

const headersToPass = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'authorization': 'Basic Y2xvdWQuYWRtaW46dW5Td2VlVEAzU2FGZQ=='

}

const ERPheadersToPass = {
    
    'authorization': 'Basic Y2FzZXkuYnJvd246enZoaUNNOUE3'

}
//https://044E744C4F8B4AA29B2C2808B8B5A0C9.blockchain.ocp.oraclecloud.com:443/restproxy1
const API_URL = 'https://044E744C4F8B4AA29B2C2808B8B5A0C9.blockchain.ocp.oraclecloud.com:443/restproxy1/bcsgw/rest/v1/transaction/invocation'
const prodDetailByOwner_URL = 'https://044E744C4F8B4AA29B2C2808B8B5A0C9.blockchain.ocp.oraclecloud.com:443/restproxy1/bcsgw/rest/v1/transaction/query'
const ERP_API_URL = 'https://ucf1-edsm-fa-ext.oracledemos.com/fscmRestApi/resources/latest/purchaseOrders/'

const channel = 'default';
const chaincode = 'end2';
const chaincodeVer = 'v1'


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {

    res.sendFile(__dirname + "/index.html");
});





//get nordstorm data for a barcode number
// app.get('/api/nordStormProductDetail', (req, res) => {

//     console.log("connected toooo")
//     var productid = req.query.productId

//     console.log(productid)
//     let rawdata = fs.readFileSync('./nordstorm_db_data/productDetailsHistory.json');
//     let productHistory = JSON.parse(rawdata);
//     productHistory = productHistory.products
//     for (product in productHistory) {
//         console.log(product)
//         if (productHistory[product].ProductId == productid) {
//             console.log('true')
//             res.json(productHistory[product])
//         }
//     }




// });

app.post('/api/initPurchaseReciptNumber', (req, res) => {
    
console.log(req.query.productid+"---------------")
    const options = {
        method: 'POST',
        uri: API_URL,
        headers: headersToPass,
        body: {
            "channel": channel,
            "chaincode": chaincode,
            "method": "initPurchaseReciptNumber",
            "args": [req.query.ponumber,req.query.productid],
            "chaincodeVer": chaincodeVer
        },
        json: true,

    }

    rp(options)
        .then(function (parsedBody) {
            // POST succeeded...
            console.log('result initPurchaseReciptNumber-----', parsedBody)
            res.json(JSON.parse(parsedBody))
        })
        .catch(function (err) {
            // POST failed...
            res.json(err)
        });
})


app.post('/api/initPurchaseQuote', (req, res) => {
    
console.log(req.body+"---------------")
    const options = {
        method: 'POST',
        uri: API_URL,
        headers: headersToPass,
         body: req.body,
        json: true,

    }
	


    rp(options)
        .then(function (parsedBody) {
            // POST succeeded...
            console.log('result initPurchaseQuote-----', parsedBody)
            res.json(JSON.parse(parsedBody))
        })
        .catch(function (err) {
            // POST failed...
            res.json(err)
        });
})

app.post('/api/getHistoryForProduct', (req, res) => {
    
console.log(req.query.productid+"---------------")
    const options = {
        method: 'POST',
        uri: API_URL,
        headers: headersToPass,
        body: {
            "channel": channel,
            "chaincode": chaincode,
            "method": "getHistoryForProduct",
            "args": [req.query.productid],
            "chaincodeVer": chaincodeVer
        },
        json: true,

    }

    rp(options)
        .then(function (parsedBody) {
            // POST succeeded...
            console.log('result getHistoryForProduct-----', parsedBody.result.payload)
            res.json(JSON.parse(parsedBody.result.payload))
        })
        .catch(function (err) {
            // POST failed...
            res.json(err)
        });
})

app.post('/api/getPurchaseQuotes', (req, res) => {
    console.log('getPurchaseQuotes-----')

    const options = {
        method: 'GET',
        uri: ERP_API_URL,
        headers: ERPheadersToPass,
        json: true,

    }

    rp(options)
        .then(function (parsedBody) {
			    console.log(parsedBody.items)
            // POST succeeded...
            //console.log('result getPurchaseQuotes-----', parsedBody)
            res.json(parsedBody)
        })
        .catch(function (err) {
            // POST failed...
            res.json(err)
        });
})

app.post('/api/readPurchaseOrderfromERP', (req, res) => {
    console.log('readPurchaseOrderfromERP-----'+req.query.OrderNumber)

    const options = {
        method: 'GET',
        uri: ERP_API_URL+'?q=OrderNumber='+[req.query.OrderNumber],
        headers: ERPheadersToPass,
		body: {           
            "args": [req.query.OrderNumber],
           
        },
        json: true,

    }

    rp(options)
        .then(function (parsedBody) {
			    console.log(parsedBody)
              //  console.log(parsedBody.items)
                if(parsedBody.items.length ==0){
                    console.log(true)
                    res.json({
                        "statusCode" : 500
                    })
                }
            // POST succeeded...
            //console.log('result getPurchaseQuotes-----', parsedBody)
            else{
                res.json(parsedBody)
            }
           
        })
        .catch(function (err) {
            // POST failed...
            console.log(err)
            res.json(err)
        });
})

app.post('/api/readPurchasequote', (req, res) => {
    
console.log(req.query.poid+"readPurchasequote")
    const options = {
        method: 'POST',
        uri: API_URL,
        headers: headersToPass,
        body: {
            "channel": channel,
            "chaincode": chaincode,
            "method": "readPurchasequote",
            "args": [req.query.poid],
            "chaincodeVer": chaincodeVer
        },
        json: true,

    }

    rp(options)
        .then(function (parsedBody) {
            // POST succeeded...
            console.log('result getHistoryForProduct-----', parsedBody.result.payload)
            res.json(JSON.parse(parsedBody.result.payload))
        })
        .catch(function (err) {
            // POST failed...
            res.json(err)
        });
})


app.post('/api/readProduct', (req, res) => {
    //console.log("read Product")
    //console.log(req.body)
    const options = {
        method: 'POST',
        uri: API_URL,
        headers: headersToPass,
        body: req.body

        ,
        json: true,

    }

    rp(options)
        .then(function (parsedBody) {
            // POST succeeded...
            console.log('result-----', parsedBody.result)
            if (parsedBody.returnCode != 'Success') {
                console.log("failure")
                res.json("failure").status(500)
            }
            else {
                console.log('suceess')
                res.json(JSON.parse(parsedBody.result.payload))
            }
        })
        .catch(function (err) {
            // POST failed...
            res.json(err)
        });

})

app.post('/api/readDistributionCentre', (req, res) => {
    console.log("readDistributionCentre")
    //console.log(req.body)
    const options = {
        method: 'POST',
        uri: API_URL,
        headers: headersToPass,
        body: req.body

        ,
        json: true,

    }

    rp(options)
        .then(function (parsedBody) {
            // POST succeeded...
            console.log('result-----', parsedBody.result)
            if (parsedBody.returnCode != 'Success') {
                console.log("failure")
                res.json("failure").status(500)
            }
            else {
                console.log('suceess')
                res.json(JSON.parse(parsedBody.result.payload))
            }
        })
        .catch(function (err) {
            // POST failed...
            res.json(err)
        });

})


// app.post('/api/readProductHistory', (req, res) => {
//     var completed_requests = 0;
//     console.log(req.body)
//     var productArray = req.body.productArray;
//     console.log('array --', productArray)
//     var productHistory = [];
//     for (j = 0; j < productArray.length; j++) {
//         var prodId = productArray[j].prodid
//         console.log(prodId);
//         var productHistorycallback = function (form, index) {
//             console.log('form', form)

//             const options = {
//                 method: 'POST',
//                 uri: 'http://129.213.54.206:5123/bcsgw/rest/v1/transaction/query',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Access-Control-Allow-Origin': '*',

//                 },
//                 body: {
//                     "channel": "directororderer",
//                     "chaincode": "chain4",
//                     "method": "readProduct",
//                     "args": [form],
//                     "chaincodeVer": "v1"
//                 }
//                 ,
//                 json: true,

//             }

//             rp(options, function (err, httpResponse, parsedBody) {
//                 // options = options; Superfluous
//                 if (!err) {
//                     console.log(parsedBody.result.payload)
//                     completed_requests += 1;
//                     var prodDetails = JSON.parse(parsedBody.result.payload);
//                     productHistory.push(prodDetails)

//                     if (completed_requests == productArray.length) {
//                         console.log('<----------data pushed to AMCE successfully---------->')
//                         console.log(productHistory)
//                         res.json(productHistory)
//                     }
//                     else {
//                         //  console.log('func()---->loop ', j, 'completed')
//                         //return;
//                     }
//                 }
//                 else {
//                     console.log('<----------Data insertion to AMCE failed---------->')
//                     res.status(500).json({
//                         error: 'File is not uploaded successfully!',
//                     })
//                 }
//             });


//         }
//         //  console.log('Iterating loop index = ', j)
//         productHistorycallback(prodId, j);
//     }

// })


app.post('/api/transferProduct', (req, res) => {

    console.log('TRANSFERRRRIIINNGGGG')
    const options = {
        method: 'POST',
        uri: API_URL,
        headers: headersToPass,
        body: req.body
        ,
        json: true,

    }
    console.log(options)

    rp(options)
        .then(function (response) {
            // POST succeeded...
            console.log('result-----', response)
            if (response.returnCode == "Failure") {
                console.log('failure')
                res.json("failure").status(500)
            }
            else {
                console.log('success')
                res.json('success').status(200)
            }
        })
        .catch(function (err) {
            // POST failed...
            res.json(err)
        });

})


app.post('/api/initProduct', (req, res) => {
console.log("init product is called")
    console.log(req.body)
    // console.log(req.query.productId)


    const options = {
        method: 'POST',
        uri: API_URL,
        headers: headersToPass,
        body: req.body
        ,
        json: true,

    }


    rp(options)
        .then(function (response) {
            // POST succeeded...
            console.log('result-----', response)
            if (response.returnCode == "Failure") {
                res.json("failure").status(500)
            }
            else {


                res.json(response)
            }

        })
        .catch(function (err) {
            // POST failed...
            res.json(err)
        });
})


// app.post('/api/productDetailByOwner1', (req, res) => {
//     console.log('owner====', req.query)

//     console.log(" product history")
//     let prodDetails = [];

//     let rawdata = fs.readFileSync('./nordstorm_db_data/productDetailByOwner.json');
//     let productHistory = JSON.parse(rawdata);
//     productHistory = productHistory.products
//     for (product in productHistory) {
//         console.log(product)
//         console.log(productHistory[product].owner, '-----------', req.query.owner)
//         if (productHistory[product].owner == req.query.owner) {
//             console.log('true')
//             prodDetails.push(productHistory[product])
//         }
//     }

//     console.log(prodDetails)
//     res.json(prodDetails)

//     // const options = {
//     //     method: 'POST',
//     //     uri: 'http://129.213.54.206:5123/bcsgw/rest/v1/transaction/invocation',
//     //     headers: {
//     //         'Content-Type': 'application/json',
//     //         'Access-Control-Allow-Origin': '*',

//     //     },
//     //     body: req.body
//     //     ,
//     //     json: true,

//     // }


//     // rp(options)
//     //     .then(function (response) {
//     //         // POST succeeded...
//     //         console.log('result-----', response.returnCode)
//     //         if (response.returnCode == "Failure") {
//     //             res.json("failure").status(500)
//     //         }
//     //         else {

//     //             res.json(response)
//     //         }

//     //     })
//     //     .catch(function (err) {
//     //         // POST failed...
//     //         res.json(err)
//     //     });


// })

app.post('/api/initCustomer', (req, res) => {
    console.log('init custmer', req.body)
    const options = {
        method: 'POST',
        uri: API_URL,
        headers: headersToPass,
        body: req.body
        ,
        json: true,

    }


    rp(options)
        .then(function (response) {
            // POST succeeded...
            console.log('result-----', response.returnCode)
            if (response.returnCode == "Failure") {
                res.json("failure").status(500)
            }
            else {


                res.json(response)
            }

        })
        .catch(function (err) {
            // POST failed...
            res.json(err)
        });

})


app.post('/api/productDetailByOwner', (req, res) => {

    console.log('get ownerrrrrrrrr', req.body)
    const options = {
        method: 'POST',
        uri: prodDetailByOwner_URL,
        headers: headersToPass,
        body: req.body
        ,
        json: true,

    }


    rp(options)
        .then(function (response) {
            // POST succeeded...
            console.log('result-----', response.returnCode)
            if (response.returnCode == "Failure") {
                res.json("failure").status(500)
            }
            else {

console.log(JSON.parse(response.result.payload))
                res.json(JSON.parse(response.result.payload))
            }

        })
        .catch(function (err) {
            // POST failed...
            res.json(err)
        });
})


app.post('/api/initCustomsStatusupdate', (req, res) => {
    console.log('init customs', req.body)
    const options = {
        method: 'POST',
        uri: API_URL,
        headers: headersToPass,
        body: req.body
        ,
        json: true,

    }


    rp(options)
        .then(function (response) {
            // POST succeeded...
            console.log('result-----', response.returnCode)
            if (response.returnCode == "Failure") {
                res.json("failure").status(500)
            }
            else {


                res.json(response)
            }

        })
        .catch(function (err) {
            // POST failed...
            res.json(err)
        });

})

var port = process.env.PORT || 8081;
app.listen(port, function () {
    console.log('<----------listening on localhost and ' + port + '---------->')
});

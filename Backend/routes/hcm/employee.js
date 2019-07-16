const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const config = require('../../config/config');
const blockchainService = require('../../service/blockchainService');
const hcmService = require('../../service/hcmService');


/*
*   Get All Employee Profiles
*/
router.get('/allEmployeeProfile', (req, res) => {
    let options = config.options;
    options.uri = config.baseHCMURL + "emps";
    console.log(options);

    rp(options)
    .then(function (data) {
        res.send(data);
    })
    .catch(function (err) {
        console.log("Error on allEmployeeProfile", err.message);
    });

});


/*
*   Get Single Employee Profile by ID
*/
router.get('/employeeProfile/:personId', (req, res) => {
    let options = config.options;
    options.uri = config.baseHCMURL + "emps?q=PersonId=" + req.params.personId;

    rp(options)
    .then(function (data) {
        res.send(data);
    })
    .catch(function (err) {
        console.log("Error on employeeProfile", err.message);
    });

});

/*
*   Update Employee Profile
*/
router.post('/employeeUpdate/:personId', async (req, res) => {

    
    let options = JSON.parse(JSON.stringify(config.options));
    options.method = "PATCH";
    options.body = req.body;
    console.log("Update Employee Profile hit")
        console.log(options.body);
    try {
        options.uri = await hcmService.getUpdateAssignmentUrl(config.baseHCMURL + "emps?q=PersonId=" +req.params.personId);
    } catch(e) {
        console.log(e.message);
        res.send(e.message);
    }

    console.log("-=------------options-----")
    console.log(options)

    rp(options)
    .then(async function (data) {
        console.log("put a big dash--------------------------")
        console.log(data);
       await blockchainService.updateEmployee(data, req.body.PersonId);
        res.send(data);
    })
    .catch(function (err) {
        console.log("Error on updateEmployee", err.message);
        res.send(err.message);
    });

});

module.exports = router;
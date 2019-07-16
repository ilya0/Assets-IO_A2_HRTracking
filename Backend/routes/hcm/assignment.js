const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const config = require('../../config/config');
const blockchainService = require('../../service/blockchainService')
const hcmService = require('../../service/hcmService')

/*
*   Get employee assignment
*/
router.post('/viewAssignment/:param', async (req, res) => {
    let options = config.options;
    
    try {
        options.uri = await hcmService.getUpdateAssignmentUrl(req.body.assignmentUrl);
    } catch(e) {
        console.log(e);
        res.send(e);
    }

    rp(options)
    .then(function (data) {
        console.log(data);
        res.send(data);
    })
    .catch(function (err) {
        console.log("Error on viewAssignment", err);
    });

});


/*
*   Create employee assignment
*/
router.post('/createAssignment', async (req, res) => {
    let options = config.options;
    try {
        options.uri = await hcmService.getUpdateAssignmentUrl(req.body.assignmentUrl);
    } catch(e) {
        console.log(e);
        res.send(e);
    }
    options.method = "POST";
    options.body = req.body;

    rp(options)
    .then(function (data) {
        console.log(data);
        res.send(data);
    })
    .catch(function (err) {
        console.log("Error on createAssignment", err);
    });

});

/*
*   Update employee assignment
*/
router.post('/updateAssignment', async (req, res) => {
    let options = config.options;
    try {
        options.uri = await hcmService.getUpdateAssignmentUrl(req.body.assignmentUrl);
    } catch(e) {
        console.log(e);
        
    }
    
    options.method = "PATCH";
    options.body = req.body.updateBody;

    console.log("options : ", options)

    rp(options)
    .then(function (data) {
        console.log(data);
        blockchainService.updateAssignment(data, req.body.profileId);
        res.send('success');
    })
    .catch(function (err) {
        console.log("Error on updateAssignment", err);
    });
});

module.exports = router;
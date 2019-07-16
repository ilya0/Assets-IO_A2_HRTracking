const rp = require('request-promise');
const _ = require('lodash');
const config = require('../config/config');


function getAssignment(assignmentUrl) {
    console.log("in getAssignment");
    //get assignement 
    let options = config.options;
    options.uri = assignmentUrl;
    return rp(options)
    .then(function (data) {
     console.log(data);
     return data;
    })
    .catch(function (err) {
        console.log("Error on getAssignment", err);
        return {};
    });
} 

async function getAssignmentId(employeeData) {
    let assignementId = "dummy";
    let assignmentLinkArray = _.filter(employeeData.links, {
      name: "assignments"
    });
    console.log("assignment link array: " , assignmentLinkArray);
    if (assignmentLinkArray.length > 0) {
      let assignmentDetails = await getAssignment(
        assignmentLinkArray[0].href
      );
      if (assignmentDetails.items && assignmentDetails.items.length > 0) {
        assignementId = assignmentDetails.items[0].AssignmentId;
      }
    }
  
    return assignementId;
  }

async function getUpdateAssignmentUrl(getUrl) {
    let assignmentDetails = await getAssignment(getUrl);
    if(!assignmentDetails.items || assignmentDetails.items.length === 0) {
        throw new Error("Could not fetch update Url");
    }
    let updateUrlArray = _.filter(assignmentDetails.items[0].links, {
        "rel": "self"
      });
      console.log("hgvygvbjhbjhbhjbjhvbughbjb");
    console.log(updateUrlArray);
    return updateUrlArray[0].href;
}


// /*
// *   Get url to update employee
// */
// async function getUpdateEmployeeUrl(url) {

//     let employeeDetails = await getEmployeeUrl(url);
//     if(!employeeDetails.items || employeeDetails.items.length === 0) {
//       throw new Error("Could not fetch update Url");
//     }
//     let updateUrlArray = _.filter(employeeDetails.items[0].links, {
//       "rel": "self"
//     });
//     console.log(updateUrlArray);
//     return updateUrlArray[0].href;

// }

// function getEmployeeUrl(url) {
//     console.log("in getUpdateEmployeeUrl");
    
//     let options = config.options;
//     options.uri = url;

//     return rp(options)
//         .then(function (data) {
//           console.log(data);
//           return data;
//         })
//         .catch(function (err) {
//             console.log("Error on getEmployeeUrl", err.message);
//             return {};
//         });
// }



module.exports = {
    getAssignment,
    getAssignmentId,
    getUpdateAssignmentUrl
}
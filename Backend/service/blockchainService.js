const rp = require("request-promise");
const _ = require("lodash");
const hcmService = require("./hcmService");
const config = require("../config/blockchainConfig");

async function updateAssignment(updatedAssignmentData, empId) {
  console.log("in updateAssignment");

  _.each(_.keys(updatedAssignmentData), key => {
    if (updatedAssignmentData[key] === null) {
      updatedAssignmentData[key] = "null";
    }
  });
  let args = [
    updatedAssignmentData.AssignmentId,
    updatedAssignmentData.AssignmentNumber,
    empId,
    updatedAssignmentData.AssignmentName,
    updatedAssignmentData.PersonTypeId,
    updatedAssignmentData.BusinessUnitId,
    updatedAssignmentData.LocationId,
    updatedAssignmentData.JobId,
    updatedAssignmentData.GradeId,
    updatedAssignmentData.DepartmentId,
    updatedAssignmentData.WorkerCategory,
    updatedAssignmentData.AssignmentCategory,
    updatedAssignmentData.WorkingAtHome,
    updatedAssignmentData.WorkingAsManager,
    updatedAssignmentData.SalaryCode,
    updatedAssignmentData.WorkingHours,
    updatedAssignmentData.Frequency,
    updatedAssignmentData.StartTime,
    updatedAssignmentData.EndTime,
    updatedAssignmentData.SalaryAmount,
    updatedAssignmentData.ActionCode,
    updatedAssignmentData.ActionReasonCode,
    updatedAssignmentData.AssignmentStatus,
    updatedAssignmentData.EffectiveStartDate,
    updatedAssignmentData.EffectiveEndDate,
    updatedAssignmentData.TermsEffectiveStartDate,
    updatedAssignmentData.ManagerId,

    updatedAssignmentData.ManagerAssignmentId,
    updatedAssignmentData.ManagerType,
    updatedAssignmentData.OriginalHireDate,
    updatedAssignmentData.AssignmentStatusTypeId,
    updatedAssignmentData.PrimaryAssignmentFlag,
    updatedAssignmentData.CreationDate,
    updatedAssignmentData.LastUpdateDate,
    updatedAssignmentData.PeriodOfServiceId,
    updatedAssignmentData.DefaultExpenseAccount
  ];
  console.log(args);
  let options = config.config.options;
  options.uri = config.config.baseBlockchainUrl;
  options.method = "POST";

  options.body = config.requestBody;
  options.body.method =  "initAssignment";
  options.body.args = args;
  rp(options)
    .then(function(data) {
      console.log(data);
    })
    .catch(function(err) {
      console.log("Error on Update Assignment", err);
    });
}

async function updateEmployee(updatedEmployeeData, empID) {
  console.log("in comming updatedEmployeeData - ",updatedEmployeeData)
  console.log("incomming empID -", empID)
  console.log("in updateEmployee");
  //get assignement id and update
  _.each(_.keys(updatedEmployeeData), key => {
    if (updatedEmployeeData[key] === null) {
      updatedEmployeeData[key] = "null";
    }
  });
  let assignementId = "dummy";
  try {
    assignementId = await hcmService.getAssignmentId(updatedEmployeeData);
  } catch (e) {
      console.log("Error : " , e);  
  }
 
  let employeeId = empID;
  let args = [
    employeeId,
    assignementId,
    updatedEmployeeData.UserName.toString(),
    updatedEmployeeData.Salutation.toString(),
    updatedEmployeeData.FirstName.toString(),
    updatedEmployeeData.MiddleName.toString(),
    updatedEmployeeData.LastName.toString(),
    updatedEmployeeData.PersonNumber.toString(),
    updatedEmployeeData.WorkPhoneNumber.toString(),
    updatedEmployeeData.WorkMobilePhoneNumber.toString(),
    updatedEmployeeData.WorkEmail.toString(),
    updatedEmployeeData.AddressLine1.toString(),
    updatedEmployeeData.City.toString(),
    updatedEmployeeData.Region.toString(),
    updatedEmployeeData.Country.toString(),
    updatedEmployeeData.PostalCode.toString(),
    updatedEmployeeData.DateOfBirth.toString(),
    updatedEmployeeData.HireDate.toString(),
    updatedEmployeeData.TerminationDate.toString(),
    updatedEmployeeData.Gender.toString(),
    updatedEmployeeData.MaritalStatus.toString(),
    updatedEmployeeData.EffectiveStartDate.toString(),
    updatedEmployeeData.CitizenshipId.toString(),
    updatedEmployeeData.PassportNumber.toString(),
    updatedEmployeeData.PassportId.toString(),
    updatedEmployeeData.LicenseNumber.toString(),
    updatedEmployeeData.DriversLicenseId.toString()
  ];
  console.log("the args to be submitted are - ", args);


  let options = config.config.options;
  options.uri = config.config.baseBlockchainUrl;
  options.method = "POST";
  options.body = config.requestBody;
  options.body.method =  "initEmployee";
  options.body.args = args;


  rp(options)
    .then(function(data) {
      console.log(data);
    })
    .catch(function(err) {
      console.log("Error on updateEmployee", err);
    });
}


module.exports = {
  updateAssignment,
  updateEmployee
};

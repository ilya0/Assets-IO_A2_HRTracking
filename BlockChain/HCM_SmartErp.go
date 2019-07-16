package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"strconv"
	"time"

	"github.com/hyperledger/fabric/core/chaincode/shim"
	pb "github.com/hyperledger/fabric/protos/peer"
)

type SimpleChaincode struct {
}

type EmployeeInfo struct {
	ObjectType            string `json:"docType"`
	EmpolyeeID            string `json:"empolyeeID"`
	AssignmentID          string `json:"assignmentID"`
	UserName              string `json:"userName"`
	Salutation            string `json:"salutation"`
	FirstName             string `json:"firstName"`
	MiddleName            string `json:"middleName"`
	LastName              string `json:"lastName"`
	PersonNumber          string `json:"personNumber"`
	WorkPhoneNumber       string `json:"workPhoneNumber"`
	WorkMobilePhoneNumber string `json:"workMobilePhoneNumber"`
	WorkEmail             string `json:"workEmail"`
	AddressLine           string `json:"addressLine"`
	City                  string `json:"city"`
	Region                string `json:"region"`
	Country               string `json:"country"`
	PostalCode            string `json:"postalCode"`
	DateOfBirth           string `json:"dateOfBirth"`
	HireDate              string `json:"hireDate"`
	TerminationDate       string `json:"terminationDate"`
	Gender                string `json:"gender"`
	MaritalStatus         string `json:"maritalStatus"`
	EffectiveStartDate    string `json:"effectiveStartDate"`
	CitizenshipID         string `json:"citizenshipID"`
	PassportNumber        string `json:"passportNumber"`
	PassportID            string `json:"passportID"`
	LicenseNumber         string `json:"licenseNumber"`
	DriversLicenseID      string `json:"driversLicenseID"`

	///these are going to be milestones that are going to be changed and recorded when full records or checkpoints are accomplished
	NewHireforms    string `json:"newhireforms"`
	PayrollAndTaxes string `json:"payrollandtaxes"`
	Policies        string `json:"policies"`
	Benefits        string `json:"benefits"`
	PreSubmitTasks  string `json:"benefits"`
	SubmitToHR      string `json:"submittedtohr"`

	//waypoints for taleo - these are taken from the api documentation
	//https://docs.oracle.com/en/cloud/paas/integration-cloud/talent-cloud-midsize-adapter-user/oracle-talent-cloud-midsize-adapter-capabilities.html#GUID-7E2CCF73-8125-4CC8-9B36-AC39D7B7D6C7

	Offboardstatus     string `json:"offboardstatus"`
	Onboardstatus      string `json:"onboardstatus"`
	Packets            string `json:"packets"`
	GetAllCertificates string `json:"getallcertificates"`
}

type Assignment struct {
	ObjectType              string `json:"docType"`
	AssignmentID            string `json:"assignmentID"`
	AssignmentNumber        string `json:"assignmentNumber"`
	EmpolyeeID              string `json:"empolyeeID"`
	AssignmentName          string `json:"assignmentName"`
	PersonTypeID            string `json:"personTypeID"`
	BusinessUnitID          string `json:"businessUnitID"`
	LocationID              string `json:"locationID"`
	JobID                   string `json:"jobID"`
	GradeID                 string `json:"gradeID"`
	DepartmentID            string `json:"departmentID"`
	WorkerCategory          string `json:"workerCategory"`
	AssignmentCategory      string `json:"assignmentCategory"`
	WorkingAtHome           string `json:"workingAtHome"`
	WorkingAsManager        string `json:"workingAsManager"`
	SalaryCode              string `json:"salaryCode"`
	WorkingHours            string `json:"workingHours"`
	Frequency               string `json:"frequency"`
	StartTime               string `json:"startTime"`
	EndTime                 string `json:"endTime"`
	SalaryAmount            string `json:"salaryAmount"`
	ActionCode              string `json:"actionCode"`
	ActionReasonCode        string `json:"actionReasonCode"`
	AssignmentStatus        string `json:"assignmentStatus"`
	EffectiveStartDate      string `json:"effectiveStartDate"`
	EffectiveEndDate        string `json:"effectiveEndDate"`
	TermsEffectiveStartDate string `json:"termsEffectiveStartDate"`
	ManagerID               string `json:"managerID"`
	ManagerAssignmentID     string `json:"managerAssignmentID"`
	ManagerType             string `json:"managerType"`
	OriginalHireDate        string `json:"originalHireDate"`
	AssignmentStatusTypeID  string `json:"assignmentStatusTypeID"`
	PrimaryAssignmentFlag   string `json:"primaryAssignmentFlag"`
	CreationDate            string `json:"CreationDate"`
	LastUpdateDate          string `json:"LastUpdateDate"`
	PeriodOfServiceID       string `json:"PeriodOfServiceID"`
	DefaultExpenseAccount   string `json:"DefaultExpenseAccount"`
}

func main() {
	err := shim.Start(new(SimpleChaincode))
	if err != nil {
		fmt.Printf("Error starting Simple chaincode: %s", err)
	}
}

func (t *SimpleChaincode) Init(stub shim.ChaincodeStubInterface) pb.Response {
	return shim.Success(nil)
}

func (t *SimpleChaincode) Invoke(stub shim.ChaincodeStubInterface) pb.Response {
	function, args := stub.GetFunctionAndParameters()
	fmt.Println("invoke is running " + function)

	if function == "initEmployee" { //create a new employee
		return t.initEmployee(stub, args)
	} else if function == "initAssignment" { //create a new assignment
		return t.initAssignment(stub, args)
	} else if function == "readUser" { //read a user
		return t.readUser(stub, args)
	} else if function == "getHistoryForProduct" { //get history of values for a marble
		return t.getHistoryForProduct(stub, args)
	} else if function == "queryProduct" { //get history of values for a marble
		return t.queryProduct(stub, args)
	}
	fmt.Println("invoke did not find func: " + function)

	return shim.Error("Received unknown function invocation")

}

func (t *SimpleChaincode) initEmployee(stub shim.ChaincodeStubInterface, args []string) pb.Response {

	// ==== Input sanitation ====

	fmt.Println("start init Employee")
	var err error
	if len(args) != 27 {
		return shim.Error("Incorrect number of arguments. Expecting 27")
	}

	objectType := "Employee"

	NewHireforms := "Completed"
	PayrollAndTaxes := "Assigned"
	Policies := "Assigned"
	Benefits := "Assigned"
	PreSubmitTasks := "Completed"
	SubmitToHR := "SubmitToHR"

	Employee := &EmployeeInfo{objectType, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9], args[10], args[11], args[12], args[13], args[14], args[15], args[16], args[17], args[18], args[19], args[20], args[21], args[22], args[23], args[24], args[25], args[26], NewHireforms, PayrollAndTaxes, Policies, Benefits, PreSubmitTasks, SubmitToHR}

	EmployeeJSONasBytes, err := json.Marshal(Employee)

	if err != nil {
		return shim.Error(err.Error())
	}

	err = stub.PutState(args[0], EmployeeJSONasBytes)

	if err != nil {
		return shim.Error(err.Error())
	}
	return shim.Success(nil)
}

func (t *SimpleChaincode) initAssignment(stub shim.ChaincodeStubInterface, args []string) pb.Response {

	// ==== Input sanitation ====

	fmt.Println("start init Assignment")
	var err error
	if len(args) != 36 {
		return shim.Error("Incorrect number of arguments. Expecting 36")
	}

	objectType := "Assignment"

	Assignment := &Assignment{objectType, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9], args[10], args[11], args[12], args[13], args[14], args[15], args[16], args[17], args[18], args[19], args[20], args[21], args[22], args[23], args[24], args[25], args[26], args[27], args[28], args[29], args[30], args[31], args[32], args[33], args[34], args[35]}

	AssignmentJSONasBytes, err := json.Marshal(Assignment)
	if err != nil {
		return shim.Error(err.Error())
	}
	err = stub.PutState(args[0], AssignmentJSONasBytes)
	if err != nil {
		return shim.Error(err.Error())
	}
	return shim.Success(nil)
}

func (t *SimpleChaincode) readUser(stub shim.ChaincodeStubInterface, args []string) pb.Response {

	var id, jsonResp string
	var err error

	if len(args) != 1 {
		return shim.Error("Incorrect number of arguments. Expecting Id to query")
	}

	id = args[0]
	valAsbytes, err := stub.GetState(id) //get the medicine from chaincode state

	if err != nil {
		jsonResp = "{\"Error\":\"Failed to get state for " + id + "\"}"
		return shim.Error(jsonResp)

	} else if valAsbytes == nil {
		jsonResp = "{\"Error\":\" does not exist: " + id + "\"}"
		return shim.Error(jsonResp)
	}
	return shim.Success(valAsbytes)
}

func (t *SimpleChaincode) queryProduct(stub shim.ChaincodeStubInterface, args []string) pb.Response {

	// 0

	// "queryString"

	if len(args) < 1 {
		return shim.Error("Incorrect number of arguments. Expecting 1")
	}

	queryString := args[0]
	queryResults, err := getQueryResultForQueryString(stub, queryString)

	if err != nil {
		return shim.Error(err.Error())
	}

	return shim.Success(queryResults)

}

func getQueryResultForQueryString(stub shim.ChaincodeStubInterface, queryString string) ([]byte, error) {

	fmt.Printf("- getQueryResultForQueryString queryString:\n%s\n", queryString)

	resultsIterator, err := stub.GetQueryResult(queryString)

	if err != nil {
		return nil, err

	}

	defer resultsIterator.Close()

	// buffer is a JSON array containing QueryRecords

	var buffer bytes.Buffer
	buffer.WriteString("[")
	bArrayMemberAlreadyWritten := false
	for resultsIterator.HasNext() {

		queryResponse, err := resultsIterator.Next()

		if err != nil {
			return nil, err

		}

		// Add a comma before array members, suppress it for the first array member

		if bArrayMemberAlreadyWritten == true {
			buffer.WriteString(",")

		}

		buffer.WriteString("{\"Key\":")
		buffer.WriteString("\"")
		buffer.WriteString(queryResponse.Key)
		buffer.WriteString("\"")
		buffer.WriteString(", \"Record\":")
		// Record is a JSON object, so we write as-is
		buffer.WriteString(string(queryResponse.Value))
		buffer.WriteString("}")
		bArrayMemberAlreadyWritten = true

	}

	buffer.WriteString("]")

	fmt.Printf("- getQueryResultForQueryString queryResult:\n%s\n", buffer.String())

	return buffer.Bytes(), nil

}

func (t *SimpleChaincode) getHistoryForProduct(stub shim.ChaincodeStubInterface, args []string) pb.Response {

	if len(args) < 1 {
		return shim.Error("Incorrect number of arguments. Expecting 1")
	}

	productid := args[0]
	fmt.Printf("- start getHistoryForProduct: %s\n", productid)
	resultsIterator, err := stub.GetHistoryForKey(productid)
	if err != nil {
		return shim.Error(err.Error())
	}

	defer resultsIterator.Close()

	// buffer is a JSON array containing historic values for the medicine

	var buffer bytes.Buffer
	buffer.WriteString("[")
	bArrayMemberAlreadyWritten := false
	for resultsIterator.HasNext() {
		response, err := resultsIterator.Next()
		if err != nil {
			return shim.Error(err.Error())
		}

		// Add a comma before array members, suppress it for the first array member

		if bArrayMemberAlreadyWritten == true {
			buffer.WriteString(",")
		}

		buffer.WriteString("{\"TxId\":")
		buffer.WriteString("\"")
		buffer.WriteString(response.TxId)
		buffer.WriteString("\"")
		buffer.WriteString(", \"Value\":")

		// if it was a delete operation on given key, then we need to set the

		//corresponding value null. Else, we will write the response.Value

		//as-is (as the Value itself a JSON medicine)

		if response.IsDelete {
			buffer.WriteString("null")
		} else {
			buffer.WriteString(string(response.Value))
		}
		buffer.WriteString(", \"Timestamp\":")
		buffer.WriteString("\"")
		buffer.WriteString(time.Unix(response.Timestamp.Seconds, int64(response.Timestamp.Nanos)).String())
		buffer.WriteString("\"")
		buffer.WriteString(", \"IsDelete\":")
		buffer.WriteString("\"")
		buffer.WriteString(strconv.FormatBool(response.IsDelete))
		buffer.WriteString("\"")
		buffer.WriteString("}")
		bArrayMemberAlreadyWritten = true

	}

	buffer.WriteString("]")
	fmt.Printf("- getHistoryForProduct returning:\n%s\n", buffer.String())
	return shim.Success(buffer.Bytes())

}

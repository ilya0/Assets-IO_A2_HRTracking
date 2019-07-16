const config = {
  options: {
    headers: {
      Content_Type: "application/json",
      Authorization: "Basic YXBpLnVzZXI6UXdlcnR5MTIzNDU2QA=="
    },
    json: true
  },
  baseBlockchainUrl:
    "https://08907A5277DF46A9B24950C4023F710A.blockchain.ocp.oraclecloud.com:443/restproxy1/bcsgw/rest/v1/transaction/invocation"
};

const requestBody = {
    channel: "default",
    chaincode: "Smart6",
    method: "",
    args : [],
    chaincodeVer: "v1"
  };

module.exports = {
    requestBody,
    config
}
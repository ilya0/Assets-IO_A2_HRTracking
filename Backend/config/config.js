
const config = {
    options: {
        auth: {
            username: "hcm_impl",
            // password: "6uwKvkXK7"
           password: "Xku48636"
        },
        headers: {
            "Content_Type": "application/json"
        },
        json: true,
        timeout: 1800000
    },
    baseHCMURL: "https://adc3-zarg-fa-ext.oracledemos.com/hcmRestApi/resources/11.13.18.05/"
};


module.exports = config;
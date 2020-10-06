const dev = {
    API_BASE_URL:'https://api.rbitex.com/v1.0/customer/'
}

const prod = {
    API_BASE_URL:'https//api.rbitex.com /v1.0/customers/'
}

export let config_url = process.env.REACT_APP_STAGE == "prod" ? prod : dev;

export const API_BASE_URL = 'https//api.rbitex.com /v1.0/customer/';

export var crypto_secretKey = "wtAgeaRmonkeYsecreTkeY";

console.log(process.env.REACT_APP_STAGE,"----");

// header data
export const config = {
    headers: {
        'Content-Type': 'application/json'
    }
  }  

//   console.log(JSON.stringify(process.env));
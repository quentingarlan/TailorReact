import axios from 'axios';

class MailApiCall { }

const baseUrl = "https://api.mytaylor.org/"
//const baseUrl = "http://localhost:2000/"

const mailUrl = baseUrl + "mail";

MailApiCall.postMail = function (cartItems, firstName, lastName, address, zipCode, email, country) {
    axios.post(mailUrl, { cartItems: cartItems, firstName: firstName, lastName: lastName, address: address, zipCode: zipCode, email: email, country: country })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const functions = MailApiCall;
import axios from "axios"

class MailApiCall {}

// const baseUrl = "https://api.ghanatailor.com/"
//const baseUrl = "http://localhost:2000/"
const mailUrl =
  "https://me6ldwephuilwes6rfucomswwe0ivnpa.lambda-url.eu-central-1.on.aws/"

MailApiCall.postMail = function (
  cartItems,
  firstName,
  lastName,
  address,
  zipCode,
  email,
  country,
  phone
) {
  axios
    .post(mailUrl, {
      cartItems: cartItems,
      firstName: firstName,
      lastName: lastName,
      address: address,
      zipCode: zipCode,
      email: email,
      country: country,
      phone: phone,
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const functions = MailApiCall

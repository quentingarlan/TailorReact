import axios from 'axios';

class ClothesApiCalls { }

const baseUrl = "http://api.ghanatailor.com/"
//const baseUrl = "http://localhost:2000/"
const pantUrl = baseUrl + "pant";

ClothesApiCalls.postPant = function (waistSize, hipSize, crotchSize, thighSize, length, clothImageName, sex) {
  axios.post(pantUrl, {
    waistSize: waistSize,
    hipSize: hipSize,
    crotchSize: crotchSize,
    thighSize: thighSize,
    length: length,
    clothImageName: clothImageName,
    sex: sex
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const functions = ClothesApiCalls;
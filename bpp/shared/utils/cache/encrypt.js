// const fs = require('fs');
// const crypto = require('crypto');
import fs from 'fs'
import crypto from 'crypto'
import { getCounter,resetCounter } from '../../../subscription/subscription.js';
import axios from 'axios';
// import res from 'express/lib/response.js';
// import { get } from 'lodash';
// Encrypt and store the data object in a text file
function encryptCache(key_id,data={}){
  var temp = decryptCache();
  var counter = temp?.counter || 0;
//   var data = {};

  (async () => {
    try {
        // if(data)
        var params = {
            key: key_id,
          };
      const response = await axios.get('https://adya-backend-prod.eunimart.com/api/v1/paywalls/subscription_orders/validation',{params});
      // if(response.data?.data?.plan_details?.usage?.mapper)
    var data={
        key_id:key_id,
        // counter:(counter!=0?counter+response.data?.data?.plan_details?.usage?.mapper:),
        counter:response.data?.data?.plan_details?.usage?.mapper,
        total_counter:response.data?.data?.plan_details?.services?.SDK?.USAGE_COUNTER?.rules?.sdk
    }
    //   var data={
    //     key_id:key_id,
    //     counter:(counter!=0?counter+response.data?.plan?.services?.usage?.mapper:response.data?.plan?.services?.usage?.mapper),
    //     total_counter:response.data?.plan?.services?.sdk?.usage_counter
    // }
    // data.counter=data.counter+getCounter()
    // console.log("----- encrypt data",data);
    resetCounter()

    // console.log("[[[[[",data)
    const encryptionKey = 'myEncryptionKey';
    
    const cipher = crypto.createCipher('aes-256-cbc', encryptionKey);
    let encryptedData = cipher.update(JSON.stringify(data), 'utf8', 'hex');
    encryptedData += cipher.final('hex');
    fs.writeFileSync('./bpp/shared/utils/cache/output.txt', encryptedData, 'utf8');
    // console.log('Response:', response.data);
    return true
    } catch (error) {
        console.error('Error:', error);
        return false
    }
  })();
    // (async()=>{
    //     await axios.get('http://localhost:8081/get_subscription')
    //     .then(response => {
    //         console.log(";;;;;",data)
    //         data={
    //             key_id:key_id,
    //             counter:counter || response.data?.data?.plan?.services?.sdk?.usage?.mapper,
    //             total_counter:response.data?.data?.plan?.services?.sdk?.usage_counter
    //         }
    //         data.counter=data.counter+getCounter()
    //         // is_authenticated=response.data?.data.is_valid
    //         // encryptCache(key_id)
    //     })
    //     .catch(error => {
    //       console.error("please authorize with valid credentials in encypt data");
    //       return
    //     });
    // })()

    // const data = { key: key_id,counter: counter+getCounter(),total_count:2}; // need to make an api call to get 

}

function decryptCache(){
// Read and decrypt the data from the text file
const encryptedDataFromFile = fs.readFileSync('./bpp/shared/utils/cache/output.txt', 'utf8');
// console.log("-----",encryptedDataFromFile)
const encryptionKey = 'myEncryptionKey';

// Decrypt the data
const decipher = crypto.createDecipher('aes-256-cbc', encryptionKey);
let decryptedData = decipher.update(encryptedDataFromFile, 'hex', 'utf8');
if(decryptedData){
decryptedData += decipher.final('utf8');
}else{
    return undefined
}

// Parse the decrypted data
const decryptedObject = JSON.parse(decryptedData);
return decryptedObject
}


export {encryptCache,decryptCache}
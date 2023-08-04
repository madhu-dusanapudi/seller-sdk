import axios from "axios";
import { decryptCache,encryptCache } from "../shared/utils/cache/encrypt.js";
import { getCounter } from "../subscription/subscription.js";
import JsonWebToken from "../shared/utils/authentication/json-web-token.js";
const jsonWebToken = new JsonWebToken();

var is_authenticated
async function Authentication(key_id){
    try{
        try {
            let token = await jsonWebToken.verify(key_id);
            key_id = token?.api_key;
          } catch (error) {
            process.on('unhandledRejection', (reason, promise) => {
                console.error('reason in catch', reason);
                // You can handle the error further or terminate the server gracefully.
                process.exit(1); // Optionally, you can choose to terminate the process.
              });
              
            // throw error.message;
          }

    // token=temp.api_key
    // console.log("decoded",token)
    // })(key_id)
    if(key_id && is_authenticated==undefined){
        // (async()=>{
             var params = {
                key: key_id,
              };
              await axios.get('https://adya-backend-prod.eunimart.com/api/v1/paywalls/subscription_orders/validation', { params })
                .then(response => {
                    // console.log("???",JSON.stringify(response.data))
                    if(response?.data?.data?.plan_details?.usage?.mapper>=response.data?.data?.plan_details?.services?.SDK?.USAGE_COUNTER?.rules?.sdk || !response.data?.data.is_valid)
                    throw new Error("please authorize with valid credentials").message
                    else
                    is_authenticated=response.data?.data.is_valid
                    encryptCache(key_id)
                })
                .catch(error => {
                    throw error
                });
        // })()
        return true
    }else if(is_authenticated){
        var data=decryptCache()
        if(data){
            if((data?.counter+getCounter())>=data?.total_counter){
                is_authenticated=false
                throw new Error("please authorize with valid credentials").message
                process.exit(1)
            }
        }
        return is_authenticated
    }
    else{
        is_authenticated=undefined
        throw new Error("please authorize with valid credentials").message
    }
}
catch(error){
    throw error
}
}
function setAuthentication(auth){
    is_authenticated=auth
}
export {Authentication,is_authenticated,setAuthentication}
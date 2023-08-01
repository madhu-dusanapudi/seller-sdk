import axios from "axios";
import { decryptCache,encryptCache } from "../shared/utils/cache/encrypt.js";
import { getCounter } from "../subscription/subscription.js";
import JsonWebToken from "../shared/utils/authentication/json-web-token.js";
const jsonWebToken = new JsonWebToken();

var is_authenticated
async function Authentication(key_id){
    try{

        let token=await jsonWebToken.verify(key_id)
        key_id=token?.api_key
    }catch(error){
        // console.log("your token has expired please regenerate")
        throw new Error("your token has expired please regenerate")
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
                    is_authenticated=response.data?.data.is_valid
                    encryptCache(key_id)
                })
                .catch(error => {
                    throw new Error("please authorize with valid credentials")
                });
        // })()
        return true
    }else if(is_authenticated){
        var data=decryptCache()
        if(data){
            if((data?.counter+getCounter())>=data?.total_counter){
                is_authenticated=false
                return false
            }
        }
        return is_authenticated
    }
    else{
        is_authenticated=undefined
        return false
    }
}
function setAuthentication(auth){
    is_authenticated=auth
}
export {Authentication,is_authenticated,setAuthentication}
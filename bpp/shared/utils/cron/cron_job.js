import cron from 'node-cron'
import axios from 'axios';
import { encryptCache,decryptCache } from '../cache/encrypt.js';
import { getCounter, resetCounter } from '../../../subscription/subscription.js';
import { is_authenticated,setAuthentication } from '../../../auth/auth.js';
import JsonWebToken from '../authentication/json-web-token.js';
const jsonWebToken=new JsonWebToken()
// import { get } from 'lodash';
// import data from '../../../../mock_data.js';
// import { getCounter } from '../../../subscription/subscription';
async function cronInit(user_token){
    cron.schedule('*/5 * * * * *', () => {
        console.log('Running a task every 5 seconds',user_token);
        (async()=>{
          let token
          try{

            token=await jsonWebToken.verify(user_token)
            // key_id=token?.api_key
        }catch(error){
            console.log("your token has expired please regenerate")
            return false
        }
          let key_id=token?.api_key
            var params = {
               key: key_id,
             };
             let get_counter=getCounter()
             if(get_counter!=0){
               var data=decryptCache()
              //  console.log("counter   ----",get_counter,data)
              data.counter=data?.counter+ get_counter
              await axios.get('https://adya-backend-prod.eunimart.com/api/v1/paywalls/subscription_orders/validation', { params })
              .then(response => {
                let flag=false
                var plan_details = response.data?.data?.plan_details;
                if((plan_details.usage.mapper+get_counter)>data?.total_counter){
                  plan_details.usage.mapper+=(data.total_counter-plan_details.usage.mapper)
                  flag=true
                }else{

                  plan_details.usage.mapper += get_counter;
                }
// var old_mapper = plan_details.usage.mapper;

                // =plan_details?.usage?.mapper
                (async()=>{
                await axios.post('https://adya-backend-prod.eunimart.com/api/v1/paywalls/subscription_orders/sdk_update?key='+key_id, {plan_details})
                .then(response => {
                    if(is_authenticated){
                     encryptCache(key_id)
                     if(flag){
                      setAuthentication(false)
                     }
                    }
                })
                .catch(error => {
                  console.error("in cron update",error);
                });
              }
                )()

                  // is_authenticated=response.data?.data.is_valid
                  // is_authenticated=true
                  // encryptCache(key_id)
              })
              .catch(error => {
                console.error("in cron get",error);
              });
            //  await axios.post('http://localhost:8081/post_subscription', data)
            //    .then(response => {
            //        if(is_authenticated){
            //         encryptCache(key_id)
            //         resetCounter()
            //        }
            //    })
            //    .catch(error => {
            //      console.error("please authorize with valid credentials in cron job",error);
            //    });
              }
       })()
      }).start();
      
    }
export default cronInit
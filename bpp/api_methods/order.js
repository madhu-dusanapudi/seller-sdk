import axios from "axios";
import Mappers from '../shared/mapper/dynamic_mapper.js'
import {getCounter, setCounter} from '../subscription/subscription.js'
import { getContext } from "../config/global_context.js";
import MapperVersion2 from "../shared/mapper/mapper_v2.js";
// import temp from "../mapper/on_select.js";
import {PayloadConstructor, PayloadConstructorVersion2} from '../mapper/mapper.js'
const payloadConstructor=new PayloadConstructor()
// const payloadConstructorV2=new PayloadConstructorVersion2()
const mappers=new Mappers()
const mapperv2=new MapperVersion2()
import {Authentication} from "../auth/auth.js";   
const domain="http://localhost:3000"
class Order{
  constructor(key_id){
    this.key_id=key_id
    // this.secret_key=secret_key
  }
async Search(payload,mapping,callback){
  try{
  const key_id=`${this.key_id}`
  if (await Authentication(key_id)) {
    // setCounter()
    try {
      var [response, mapping_response] = await Promise.all([
        axios.get(payload.http_entity_endpoint),
        axios.get(domain + "/get_search_request", {
          headers: {
            "Authorization": "Bearer "+key_id,
          },
        })
      ]);
      const mappedData = await mapperv2.MapperV2ForSearch(
        response.data,
        mapping_response.data
      );
    
      callback(mappedData, null);
    } catch (error) {
      callback(null, error);
    }
      // const response = await axios.get(payload.http_entity_endpoint);
    
      // const mapping_response = await axios.get(domain + "/get_search_request", {
      //   headers: {
      //     "api-key": key_id,
      //   },
      // });
      // mapping_response=mapping_response.data
      // let mapping2={}
      // mapping2=JSON.stringify(mapping_response.data)
      // console.log(mapping_response.data,mapping)
    
        // const data=mappers.searchMapper(mapping,response.data)
        // const context=getContext()
        // if (context?.core_version == "1.1.0"){
          // callback(await payloadConstructor.searchMapper(data),null)
        // }
        // else if(data?.context?.core_version == "1.1.2"){
        //   callback(await payloadConstructorV2.searchMapper(data),null)
        // }
      // })
      // .catch(function (error) {
      //   callback(null,error)
      // });
    } 
  //   else{
  //     console.log("please authorize with valid credentials")
  // }
}catch(err){
  throw new Error("please authorize with valid credentials")
}
}

async Select(payload,mapping,callback){
  const key_id=`${this.key_id}`
  if (await Authentication(key_id)) {
    setCounter()
    try {
      var [response, mapping_response] = await Promise.all([
        axios.get(payload.http_entity_endpoint),
        axios.get(domain + "/get_select_request", {
          headers: {
            "Authorization": key_id,
          },
        })
      ]);
      const mappedData = await mapperv2.MapperV2ForSelect(
        response.data,
        mapping_response.data
      );
    
      callback(mappedData, null);
    } catch (error) {
      callback(null, error);
    }
      //   await axios.get(payload.http_entity_endpoint)
      // .then(async function (response) {
      //   // const data=mappers.commonMapper(mapping,response.data)
      //   await axios.get(domain+"/get_select_request",{headers:{
      //     "Authorization":`${this.key_id}`
      //   }}).then(async function(mapper_response){
      //     callback(await mapperv2.MapperV2ForSelect(response.data,mapping),null)
      //   }).catch(function (error){
      //     callback(null,error)
      //   })
        // var temporary={
        //   "provider": data.provider,
        //   "fulfillments": data.fulfillments,
        //   "quote": data.quote,
        //   "items": data.items
        // }
        // const context=getContext()
        // if (context?.core_version == "1.1.0"){ 
        //   callback(await payloadConstructor.selectMapper(data),null)
        // }
        // callback(data,null)
      // })
      // .catch(function (error) {
      //   callback(null,error)
      // });
    } else{
      console.log("please authorize with valid credentials")
  }
}
async Init(payload,mapping,callback){
  const key_id=`${this.key_id}`
  if (await Authentication(key_id)) {
    setCounter()
    try {
      var [response, mapping_response] = await Promise.all([
        axios.get(payload.http_entity_endpoint),
        axios.get(domain + "/init/view", {
          headers: {
            "Authorization": key_id,
          },
        })
      ]);
      const mappedData = await mapperv2.MapperV2ForInit(
        response.data,
        mapping_response.data
      );
    
      callback(mappedData, null);
    } catch (error) {
      callback(null, error);
    }
//   await axios.get(payload.http_entity_endpoint)
// .then(async function (response) {
//   await axios.get(domain+"/init/view",{headers:{
//           "Authorization":`${this.key_id}`
//         }}).then(async function(){
//           callback(await mapperv2.Init(response.data,mapping),null)
//         }).catch(function (error){
//           callback(null,error)
//         })
  // const data=mappers.commonMapper(mapping,response.data)
  // const context=getContext()
  //       if (context?.core_version == "1.1.0"){ 
  //   callback(await payloadConstructor.initMapper(data),null)
  // }
  // callback(data,null)
// })
// .catch(function (error) {
//   callback(null,error)
// });
} else{
  console.log("please authorize with valid credentials")
}
}
async Confirm(payload,mapping,callback){
  const key_id=`${this.key_id}`
    if (await Authentication(key_id)) {
      setCounter()
      try {
        var [response, mapping_response] = await Promise.all([
          axios.get(payload.http_entity_endpoint),
          axios.get(domain + "/confirm/view", {
            headers: {
              "Authorization": key_id,
            },
          })
        ]);
        const mappedData = await mapperv2.MapperV2ForConfirm(
          response.data,
          mapping_response.data
        );
      
        callback(mappedData, null);
      } catch (error) {
        callback(null, error);
      }
    
//   await axios.get(payload.http_entity_endpoint)
// .then(async function (response) {
//   await axios.get(domain+"/init/view",{headers:{
//     "Authorization":`${this.key_id}`
//   }}).then(async function(){
//     callback(await mapperv2.MapperV2ForConfirm(response.data,mapping),null)
//   }).catch(function (error){
//     callback(null,error)
//   })
  // const data=mappers.commonMapper(mapping,response.data)
  // var temporary={
  //   "order_id": data.order_id,
  //   "bpp_descriptor": data.bpp_descriptor,
  //   "bpp_providers": data.bpp_providers
  // }
  // console.log("-----",JSON.stringify(data))
  // const context=getContext()
  //       if (context?.core_version == "1.1.0"){ 
  //   callback(await payloadConstructor.confirmMapper(data),null)
  // }
  // callback(data,null)
// })
// .catch(function (error) {
//   callback(null,error)
// });
} else{
  console.log("please authorize with valid credentials")
}
}
async Status(payload,mapping,callback){
  const key_id=`${this.key_id}`
  if (await Authentication(key_id)) {
    setCounter()
    try {
      var [response, mapping_response] = await Promise.all([
        axios.get(payload.http_entity_endpoint),
        axios.get(domain + "/confirm/view", {
          headers: {
            "Authorization": key_id,
          },
        })
      ]);
      const mappedData = await mapperv2.MapperV2ForConfirm(
        response.data,
        mapping_response.data
      );
    
      callback(mappedData, null);
    } catch (error) {
      callback(null, error);
    }
//   await axios.get(payload.http_entity_endpoint)
// .then(async function (response) {
//   const data=mappers.commonMapper(mapping,response.data)
//   const context=getContext()
//         if (context?.core_version == "1.1.0"){ 
//     callback(await payloadConstructor.statusMapper(data),null)
//   }
//   // callback(data,null)
// })
// .catch(function (error) {
//   callback(null,error)
// });
} else{
  console.log("please authorize with valid credentials")
}
}

async Update(payload,mapping,callback){
  const key_id=`${this.key_id}`
  if (await Authentication(key_id)) {
    setCounter()
    try {
      var [response, mapping_response] = await Promise.all([
        axios.get(payload.http_entity_endpoint),
        axios.get(domain + "/update/view", {
          headers: {
            "Authorization": key_id,
          },
        })
      ]);
      const mappedData = await mapperv2.MapperV2ForUpdate(
        response.data,
        mapping_response.data
      );
    
      callback(mappedData, null);
    } catch (error) {
      callback(null, error);
    }
//   await axios.get(payload.http_entity_endpoint)
// .then(async function (response) {
//   const data=mappers.commonMapper(mapping,response.data)
//   const context=getContext()
//         if (context?.core_version == "1.1.0"){ 
//     callback(await payloadConstructor.updateMapper(data),null)
//   }
//   // callback(data,null)
// })
// .catch(function (error) {
//   callback(null,error)
// });
} else{
  console.log("please authorize with valid credentials")
}
}

async Cancel(payload,mapping,callback){
  
  const key_id=`${this.key_id}`
  if (await Authentication(key_id)) {
    setCounter()
    try {
      var [response, mapping_response] = await Promise.all([
        axios.get(payload.http_entity_endpoint),
        axios.get(domain + "/cancel/view", {
          headers: {
            "Authorization": key_id,
          },
        })
      ]);
      const mappedData = await mapperv2.MapperV2ForCancel(
        response.data,
        mapping_response.data
      );
    
      callback(mappedData, null);
    } catch (error) {
      callback(null, error);
    }
//   await axios.get(payload.http_entity_endpoint)
// .then(async function (response) {
//   const data=mappers.commonMapper(mapping,response.data)
//   const context=getContext()
//         if (context?.core_version == "1.1.0"){ 
//     callback(await payloadConstructor.cancelMapper(data),null)
//   }
//   // callback(data,null)
// })
// .catch(function (error) {
//   callback(null,error)
// });
} else{
  console.log("please authorize with valid credentials")
}
}

async Support(payload,mapping,callback){
  const key_id=`${this.key_id}`
  if (await Authentication(key_id)) {
    setCounter()
    try {
      var [response, mapping_response] = await Promise.all([
        axios.get(payload.http_entity_endpoint),
        axios.get(domain + "/support/view", {
          headers: {
            "Authorization": key_id,
          },
        })
      ]);
      const mappedData = await mapperv2.MapperV2ForSupport(
        response.data,
        mapping_response.data
      );
    
      callback(mappedData, null);
    } catch (error) {
      callback(null, error);
    }
//   await axios.get(payload.http_entity_endpoint)
// .then(async function (response) {
//   const data=mappers.commonMapper(mapping,response.data)
//   const context=getContext()
//         if (context?.core_version == "1.1.0"){ 
//     callback(await payloadConstructor.supportMapper(data),null)
//   }
//   // callback(data,null)
// })
// .catch(function (error) {
//   callback(null,error)
// });
} else{
  console.log("please authorize with valid credentials")
}
}

async Track(payload,mapping,callback){
  const key_id=`${this.key_id}`
  if (await Authentication(key_id)) {
    setCounter()
    try {
      var [response, mapping_response] = await Promise.all([
        axios.get(payload.http_entity_endpoint),
        axios.get(domain + "/track/view", {
          headers: {
            "Authorization": key_id,
          },
        })
      ]);
      const mappedData = await mapperv2.MapperV2ForTrack(
        response.data,
        mapping_response.data
      );
    
      callback(mappedData, null);
    } catch (error) {
      callback(null, error);
    }
//   await axios.get(payload.http_entity_endpoint)
// .then(async function (response) {
//   const data=mappers.commonMapper(mapping,response.data)
//   const context=getContext()
//         if (context?.core_version == "1.1.0"){ 
//     callback(await payloadConstructor.trackMapper(data),null)
//   }
//   // callback(data,null)
// })
// .catch(function (error) {
//   callback(null,error)
// });
} else{
  console.log("please authorize with valid credentials")
}
}
}

export default Order
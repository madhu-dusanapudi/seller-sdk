import EventEmitter from 'events';
import {Authentication,is_authenticated} from '../auth/auth.js'
import{setSearch,setConfirm,setInit,setSelect,setSupport,setTrack,setUpdate,setCancel} from '../shared/utils/requests/requests_data.js'
const eventEmitter = new EventEmitter();

async function Emitter(message_id, data) {
    if(is_authenticated){
    console.log("emitted a message with name -----> ",message_id)
    if(message_id=="seller_search")
        setSearch(data)
    if(message_id=="seller_select")
        setSelect(data)
    if(message_id=="seller_init")
        setInit(data)
    if(message_id=="seller_confirm")
        setConfirm(data)
    if(message_id=="seller_update")
        setUpdate(data)
    if(message_id=="seller_cancel")
        setCancel(data)
    if(message_id=="seller_support")
        setSupport(data)
    if(message_id=="seller_track")
        setTrack(data)
    eventEmitter.emit(message_id,data)
    }else{
        console.log("please authorize with valid credentials")
    }
}

export {Emitter,eventEmitter}
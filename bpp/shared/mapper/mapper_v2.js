import { setContext,getContext } from "../../config/global_context.js"
import { bppProtocolOnCancel, bppProtocolOnConfirm, bppProtocolOnInit, bppProtocolOnSearch, bppProtocolOnSelect, bppProtocolOnStatus, bppProtocolOnSupport, bppProtocolOnTrack, bppProtocolOnUpdate } from "../on_action_call/on_action.js"
class MapperVersion2{
    Looper(data,mapper,array_index){
        var result={}
        if(Array.isArray(mapper) && mapper.length!=0){
            var index=0
            var dup_mapper=mapper[0]
            var temp=[]
            while(true){
                try{
                    var array_data={}
                    for(let key in dup_mapper){
                        const d=this.Looper(data,dup_mapper[key],index)
                        if(Object.keys(d).length===0)
                        continue
                        array_data[key]=d
                    }
                    temp.push(array_data)
                    index+=1
                }catch(error){
                    break
                }
                
            }
            result=temp
        }else if(typeof(mapper)=='object')
            for(let key in mapper){
                const res=this.Looper(data,mapper[key],array_index)
                if(res=="undefined" || Object.keys(res).length===0)
                continue
                result[key]=res
            }
            else{
            const keys=mapper.split(".")
            const obj=keys.reduce((acc,currentValue)=>{
                    if(Array.isArray(acc))
                    acc=acc[array_index]
                    if(!acc[currentValue])
                    return "undefined"
                    else
                    return acc[currentValue]
            },data)
            return obj
        }
        return result
    }
    async MapperV2ForSearch(products,mapper){
        const res={
            "context":{},
            "message":{
                "catalog":{
                    "bpp/providers":[]
                }
            }
        }
        var final_result=[]
        products.forEach((newData) => {
            // var mapper=mapper
            let category_id=this.Looper(newData,mapper["message"]["catalog"]["bpp/providers"][0]["items"][0]["category_id"],0)
            let items_data=mapper.product_attribute_values.find((i)=>i.category_code===category_id)
            if(items_data){
                
                mapper["message"]["catalog"]["bpp/providers"][0]["items"][0]={...mapper["message"]["catalog"]["bpp/providers"][0]["items"][0],...items_data.value}
                let value=this.Looper(newData,mapper["message"]["catalog"]["bpp/providers"][0])

                let foundObject = final_result.find((item) => item.id === value.id);
                if (foundObject) {
                    foundObject.items.push(...foundObject.items);
                    if(foundObject.tags && items_data.tags){
                        let v=items_data.tags[0].list.find((i)=>"code" in i)
                        foundObject.tags.map((item)=>{
                        let temp=item.list.find((list_item)=>"code" in list_item)
                        if(temp.code!==v.code)
                        foundObject.tags.push(...items_data.tags)
                        })
                    }
                    else if(items_data.tags)
                    foundObject.tags=items_data.tags
            } else {
                value.tags=items_data.tags
                final_result.push(value);
                }
            }
        });
        res.message.catalog["bpp/providers"]=final_result
        setContext({
            "timestamp": new Date(),
            "action": "on_search"
        })
        res.context=getContext()
        return await bppProtocolOnSearch(res.context?.bap_uri, res); 
    }
    async MapperV2ForSelect(data,mapper){
        const res={
            "context":{},
            "message":{
                "order":{}
            }
        }
        res.message.order=Looper(data,mapper)
        setContext({
            "timestamp": new Date(),
            "action": "on_select"
        })
        res.context=getContext()
        return await bppProtocolOnSelect(res.context?.bap_uri, res); 
    }
    async MapperV2ForInit(data,mapper){
        const res=Looper(data,mapper)
        setContext({
            "timestamp": new Date(),
            "action": "on_init"
        })
        res["context"]=getContext()
        return await bppProtocolOnInit(res.context?.bap_uri, res); 
    }
    async MapperV2ForConfirm(data,mapper){
        const res=Looper(data,mapper)
        setContext({
            "timestamp": new Date(),
            "action": "on_confirm"
        })
        res["context"]=getContext()
        return await bppProtocolOnConfirm(res.context?.bap_uri, res); 
    }
    async MapperV2ForUpdate(data,mapper){v83sqH4JZuoCZciBLxYfx75klrM7tQ6z
        const res=Looper(data,mapper)
        setContext({
            "timestamp": new Date(),
            "action": "on_update"
        })
        res["context"]=getContext()
        return await bppProtocolOnUpdate(res.context?.bap_uri, res); 
    }
    async MapperV2ForStatus(data,mapper){
        const res=Looper(data,mapper)
        setContext({
            "timestamp": new Date(),
            "action": "on_status"
        })
        res["context"]=getContext()
        return await bppProtocolOnStatus(res.context?.bap_uri, res); 
    }
    async MapperV2ForTrack(data,mapper){
        const res=Looper(data,mapper)
        setContext({
            "timestamp": new Date(),
            "action": "on_track"
        })
        res["context"]=getContext()
        return await bppProtocolOnTrack(res.context?.bap_uri, res); 
    }
    async MapperV2ForSupport(data,mapper){
        const res=Looper(data,mapper)
        setContext({
            "timestamp": new Date(),
            "action": "on_support"
        })
        res["context"]=getContext()
        return await bppProtocolOnSupport(res.context?.bap_uri, res); 
    }
    async MapperV2ForCancel(data,mapper){
        const res=Looper(data,mapper)
        setContext({
            "timestamp": new Date(),
            "action": "on_cancel"
        })
        res["context"]=getContext()
        return await bppProtocolOnCancel(res.context?.bap_uri, res); 
    }
}

export default MapperVersion2

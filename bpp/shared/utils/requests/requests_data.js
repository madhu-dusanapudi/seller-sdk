var Search={}
var Select={}
var Init={}
var Confirm={}
var Update={}
var Cancel={}
var Track={}
var Support={}

function setSearch(data){
    Search=data
}
function getSearch(){
    return Search
}
function setSelect(data){
    Select=data
}
function getSelect(){
    return Select
}
function setInit(data){
    Init=data
}
function getInit(){
    return Init
}
function setConfirm(data){
    Confirm=data
}
function getConfirm(){
    return Confirm
}
function setUpdate(data){
    Update=data
}
function getUpdate(){
    return Update
}
function setCancel(data){
    Cancel=data
}
function getCancel(){
    return Cancel
}
function setTrack(data){
    Track=data
}
function getTrack(){
    return Track
}
function setSupport(data){
    Support=data
}
function getSupport(){
    return Support
}


export{
    setCancel,
    setConfirm,
    setInit,
    setSearch,
    setSelect,
    setSupport,
    setTrack,
    setUpdate,
    getSearch
}
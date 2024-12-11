function walkdog() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("u walk the dog");
            
        }, 2000);
    });    
}
function cleankitchen() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("u clean the kitchen");
            
            
        },1000);
});
    
}
function trashout() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("u trash out");    
        }, 5000);
    });    
}
trashout()
.then((value)=>{
    console.log(value);
    return cleankitchen();
    
})
.then((value)=>{
    console.log(value);
    
})

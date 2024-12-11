function walkdog() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const walkdog = true;
            if (walkdog) {
                resolve("u walk the dog");
                
            } else {
                reject("u did not walk the dog");
                
            }
            }, 2500);
    });
    
}
function feedfood() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const feed = false;
            if (feed) {
                resolve("u feed the child");
                
            } else {
                reject("u did not feed the child");
                
            }
            }, 1000);
    });
    
}
function plumbing() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const plumb = true;
            if (plumb) {
                resolve ("u do the plumbing");

                
            } else {
                reject("u didnt do the plumbing");
                
            }
            
        }, 3000);
    });
    
}
walkdog()
.then((value)=>{
    console.log(value);
    return feedfood();
    
    
})
.then((value)=>{
    console.log(value);
    return plumbing();
    
})
.then((value)=>{
    console.log(value);
    
})
.catch((error)=>{
    console.error(error);
    
}
);

async function taskcompleted(){
    const walkedresult = await walkdog();
    console.log(walked);
    

    const feededresult = await feedfood();
    console.log(feeded);
    
    
    const plubedresult = await plumbing();
    console.log(plumbed);
    
}
taskcompleted();
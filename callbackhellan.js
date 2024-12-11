function walkdog(callback) {
    setTimeout(() => {
        console.log("u walk the dog");
        callback();     
    }, 2000);
    
}
function cleankitchen(callback) {
    setTimeout(() => {
        console.log("u clean the kitchen");
        callback();    
    }, 1000);
    
}
function trashout(callback) {
    setTimeout(() => {
        console.log("u trash out");
        callback();    
    }, 5000);
    
}
trashout(() =>{
    cleankitchen(() =>{
        walkdog(() =>{
            console.log("task is completed");
            
        });
    });
});
function walkdown() {
    setTimeout(() => {
        console.log("to the park");
        
        
    }, 2000);
    
}
function trashout() {
    setTimeout(() => {
        console.log("clean the kitchen");
        
        
    },1000);
    
}
function cleankitchen() {
    setTimeout(() => {
        console.log("first do it");
        
        
    }, 5000);
    
}
walkdown();
trashout();
cleankitchen();
function Details(employee_name,employee_id,ispresent){
    (this.employee_name = employee_name),
    (this.employee_id   = employee_id),
    (this.ispresent     = ispresent);

}
const person1 = new Details("rakul",74,true);
const person2 = new Details("hari",55,false);
const person3 = new Details("easwar",36,true);
const person4 = new Details("vetri",78,true);


console.log(person1.employee_name);
console.log(person2.ispresent);
console.log(person1.employee_id);
console.log(person3.ispresent);
console.log(person2.employee_name);
console.log(person4.employee_id);








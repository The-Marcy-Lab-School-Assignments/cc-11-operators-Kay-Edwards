//1
function areBothSame(int1,int2){
    if (int1 == int2){
        return true;
    }else{
        return false;
    }
  
}
//console.log(areBothSame(true, 1)); // returns true
//console.log(areBothSame("2", 2)) // returns true
//console.log(areBothSame("5", 2)); // returns false

//2
function areBothEqual(int1, int2){
    if(int1===int2){
        return true;
    }else{
        return false;
    }
  
}
//console.log(areBothEqual("2", "2")); // returns true
//console.log(areBothEqual("2", 2)) // returns false 
//console.log(areBothEqual(true, 1)); // returns false 
//console.log(areBothEqual(7, 7));// returns true  

//3
function areAllFourEqual(int1,int2,int3,int4){
    if(int1 === int2 && int3 === int4 && int1 === int3){
        return true;
    }else{
        return false;
    }
  
}
console.log(areAllFourEqual("2", "2", "2", "2")); // returns true
console.log(areAllFourEqual("2", "2", "2", 2)); // returns false 

//4
function areAllFourSame(int1,int2,int3,int4){
    if(int1 == int2 && int3 == int4 && int3 == int1){
        return true
    }else{
        return false
    }
  
}
//console.log(areAllFourSame("2", "2", "2", "2")) // returns true
//console.log(areAllFourSame("2", "2", "2", 2)) // returns true 
//console.log(areAllFourSame(true, true, 1, "1")) // returns true

//5
function areAllFourSameOrEqual(int1,int2,int3,int4){
    if((int1 === (int2 && int3 &&int4))){
        return 'equal'
    }else if((int1 == (int2&& int3 && int4))) {
        return 'same'
    }else{
        return 'null'
    }
    
}

areAllFourSame("2", "2", "2", "2") // returns "equal"
//areAllFourSame(true, true, 1, "1") // returns "same"
//areAllFourSame(true, false, 1, "1") // returns null



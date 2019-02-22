//Calculating tips and bills
//tiparr is array that contains tips
//totarr array contains tips+bills
var bill1,bill2,bill3;
function bill(price){
    if(price>0 && price<=50)
    {
        return tip=0.2*price;
    }
    else if(price>200)
    {
        return tip=0.1*price;
     }
     else{
        return tip=0.15*price;
    }
    
   
}
var tiparr=[],totarr=[];
tiparr.push(bill(124));
tiparr.push(bill(48));
tiparr.push(bill(268));
bill1=124+bill(124);
bill2=48+bill(48);
bill3=268+bill(268);
totarr.push(bill1);
totarr.push(bill2);
totarr.push(bill3);
console.log('The tips for $124,$24, $268 are:');
console.log(tiparr);
console.log('The total is');
console.log(totarr);
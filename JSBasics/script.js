//decision making
/*var age=18;
if(age<18)
{
    console.log("minor");
}else if(age>18)
{
    console.log("major");
}
age>=18?console.log("major"):console.log("minor");
//function
function manasa(firstname,lastname)
{
    console.log(firstname+' '+lastname);
}
manasa('Manasa','Deshpande');

//array
var names=['gddh1','jdhj','dghd'];
console.log(names[2]);

names.push('jhhsdh');
names.pop();
names.unshift("abc");
console.log(names);

//Calculating tips and bills
//tiparr is array that contains tips
//totarr array contains tips+billsg
var tip1,tip2,tip3;
function bill(price){
    if(price<50)
    {
        return tip=0.2*price;
    }else if(price>=50 && price<200){
        return tip=0.15*price;
    }
    else
    {
       return tip=0.1*tip;
    }
}
var tiparr,totarr;
tiparr.push(bill(124));
tiparr.push(bill(48));
tiparr.push(bill(268));
tip1=124+bill(124);
tip2=48+bill(48);
tip3=268+bill(268);
totarr.push(tip1);
totarr.push(tip2);
totarr.push(tip3);
*/
var mydetails= {
    fname:'Manasa',
    lname:'D',
    dob:1998,
    calcage: function(byear){
        return 2019-byear;
    }

};
console.log(mydetails.fname);
var z='dob';
console.log(mydetails[z]);
mydetails.dob=1999;
console.log(mydetails);
console.log(mydetails.calcage(1998));

var abc=new Object(mydetails);
abc.fname='abc';
console.log(abc);
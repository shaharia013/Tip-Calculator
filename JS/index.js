
// Variables

let bill = 0 ;
let tipPerc = 15 ;
let person  = 1 ;
let totalAmount = 0 ;
  let totalAmountindividually = 0 ;

 // destructuring = properties of an object can be individually fetched out and can be used directly
    //used to reduce redundency




// functions


const onBillAmountChange =({type,value})=>{  // here type and value are objects so we are using curly brackets
   
    if(value<0){
        alert("Value can't be less than zero");
    }   
    else{
    bill = value;
    totalFinalBill();
    totalAmountPerPerson();
    
    }
}

const onTipPercentageChange = (rangeElement)=>{
    tipPerc = rangeElement.value;
    document.getElementById('tip-percent').innerText = `${tipPerc}%` ;
    totalFinalBill();
    totalAmountPerPerson();

}
const onNoOfPersonChange = (pElement)=>{
   person = pElement.value;
   document.getElementById('num-person').innerText = `${person}`;
   totalAmountPerPerson();

}

const totalFinalBill = ()=>{

   const tipAmount = bill * tipPerc / 100 ;
   document.getElementById('tip-amount').value= tipAmount;
   
   totalAmount = tipAmount + Number(bill);
      document.getElementById("total-amount").value = totalAmount ; 

}

const totalAmountPerPerson = ()=>{

     totalAmountindividually = Math.floor(totalAmount/person);
        document.getElementById('total-amount-per-person').value = totalAmountindividually;

}
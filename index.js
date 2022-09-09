function validateLoanAmount(){
    var loanamount=document.getElementById("loanamount1").value;
    //if amount of loan is not a number and more than 15 lakhs
    if(isNaN(loanamount)){
        alert("loan Amount should be a number");
        document.getElementById("loanamount1").focus();
        document.getElementById("loanamount1").select();
        return false;
    }
    else if(loanamount>1500000){
        alert("loan Amount should not be greater than 15 lakhs");
        document.getElementById("loanamount1").focus();
        document.getElementById("loanamount1").select();
        return false;
    }
}
function validateNumber(elementId,elementName){
    var elemmentValue=document.getElementById(elementId).value;
    var numbers=/^[0-9]+$/;
    //if element value is not a number
    if(!elemmentValue.match(numbers)){
        alert(elementName+" should be a number");
        document.getElementById(elementId).focus();
        document.getElementById(elementId).select();
    }
}
function validatrPeriod(elementId){
    var period=document.getElementById(elementId).value;
    //if period is not a number and not between 7yrs to 15yrs
    if(isNaN(period)){
        alert("Period should be a number");
        document.getElementById(elementId).focus();
        document.getElementById(elementId).select();
        return false;
    }
    else if((period<7)||(period>15)){
        alert("repayment period should be between 7 to 15 yrs");
        document.getElementById(elementId).focus();
        document.getElementById(elementId).select();
        return false;
    }
}
function calculatePayment(){
    //Monthly Payment formula=[P*R*(1+R)^N]/[(1+R)^N-1]
    var loanamount=document.getElementById("loanamount1").value;
    var intrest=document.getElementById("interest1").value;
    var period=document.getElementById("years1").value;
    //convert interest from percentage to a decimal
    var Monthlyinterest=(intrest/100)/12;
    //convert annual rate to monthly rate
    var payments=period*12;
    //now compute monthly payment figure,using esoteric math,
    var x=Math.pow(1+Monthlyinterest,payments);
    var monthly=(loanamount*x*Monthlyinterest)/(x-1);
    //check whether the result is finite member or not.if yes display result
    if(loanamount==""){
        alert("loan amount cannot be empty");
        document.getElementById("loanamount1").focus();
        document.getElementById("loanamount1").select();
        return false;
    }
    if(intrest==""){
        alert("interest cannot be empty");
        document.getElementById("interest1").focus();
        document.getElementById("interest1").select();
        return false;
    }
    if(period==""){
        alert("repayment period cannot be empty");
        document.getElementById("years1").focus();
        document.getElementById("years1").select();
        return false;
    }
    if(!isNaN(monthly)&&(monthly!=Number.POSITIVE_INFINITY)&&(monthly!=Number.NEGATIVE_INFINITY)){
        document.getElementById("monthlypayment1").value=round(monthly);
        document.getElementById("totalpayment1").value=round(monthly*payments);
        document.getElementById("totalinterest1").value=round((monthly*payments)-loanamount);
        document.getElementById("monthlypayment1").readOnly=true;
        document.getElementById("totalpayment1").readOnly=true;
        document.getElementById("totalinterest1").readOnly=true;
    }
    else{
        //display empty values
        document.loanForm.monthlypayment.value="";
        document.loanForm.totalpayment.value="";
        document.loanForm.totalinterest.value="";
    } 
}
//this function rounds a number to two decimal places
function round(x){
    return Math.round(x*100)/200;
}
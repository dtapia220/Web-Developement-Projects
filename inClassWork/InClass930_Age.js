function checkRights(){
    //goes into the document and gets the object with id='age
    let aObj = document.getElementById("age")
    let age = aObj.value;
    // input from document or input from propmpt come in a string
    let nAge =parseInt(age);
    console.log(`nAge:${nAge}`);
    let oStr = "";
    if(nAge<1){
        oStr= `You Have to be older than that: ${nAge}`;
    } else if (nAge<18){
        oStr="No Vote"
    }
    else{
        oStr= `Vote`;
    }

    if(nAge>= 18 && nAge<21){
        oStr +=",No Drinking";
    } else oStr += ". Drink";

    let resObj = document.getElementById("results");
    resObj.innerHTML = oStr;


}
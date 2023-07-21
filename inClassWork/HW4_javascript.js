let saleItems = new Array ("Pizza","Chicken","PeanutButter","Butter","Eggs","Bacon");
let itemsCost = new Array(9.99,12.99,4.00,1.99,3.99,5.99);

let apples=10;
function myFunction(){
    if ( apples >= 10 )
        apples += 10;
    else apples += 1;
}
myFunction();
alert( `a=${apples}` )

function checkForItem() {
   // alert("Inside Check For Items")
    let txt = document.getElementById("item").value;
    let res = document.getElementById("results");
    let oStr = "Works";
    let num = 0;

    if(txt === ""){
        oStr = `You need to provide a value for item`
        document.getElementById("results").style.backgroundColor = "red";

    } else if (isItThere(saleItems, txt)) {
       num = getNum(saleItems,txt);
        oStr =  "Yes item:" + txt + " is on the list in position:" + num +  " Price:$" + itemsCost[num];
        document.getElementById("results").style.backgroundColor = "green";

    }
    else {
        oStr = `Item:${txt} is NOT in the list`
        document.getElementById("results").style.backgroundColor = "yellow";
    }


   // alert(`oStr:${oStr}`);
    res.innerHTML=oStr;
}

function isItThere(myList,inTxt) {
    for (let i = 0; i < myList.length; i++) {
        if (myList[i] === inTxt) {
            return true;
        }
    }
}
function getNum(myList,inTxt){
    for (let i = 0; i < myList.length; i++) {
        if (myList[i] === inTxt) {
            return i+1;
        }
}
}
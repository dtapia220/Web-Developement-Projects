const MAX = 10;
let cRem = MAX;
function countChars(){
    // <textarea name="tweet" id="myTweet" onkeyup="countChars()">
    //alert("Click")

    let tweet = document.getElementById("myTweet").value;
    let tLen = tweet.length;
    //alert(`tLen:${tLen}`)
    if (tLen > MAX){
        alert(`Sorry that is more than max ${MAX} characters`)
        tweet = tweet.substr(0,tLen-1);
        document.getElementById("myTweet").value = tweet;
    } else{
        cRem -= 1;
    }
    let results = document.getElementById("cRemain");
    results.innerHTML = `cRem:${cRem}`;

}

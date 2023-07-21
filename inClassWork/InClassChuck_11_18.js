$(document).ready( function() {
    // This code will executed when the DOM is loaded
    $("#showButton").click( function() {
        alert("CLICKED");
        let URL = "http://api.icndb.com/jokes/random/5";
        let  settings = {
            "url" : URL,
            "method": "GET",
            "async": true,
            "dataType": 'jsonp',
            "crossDomain": true,
            "timeout": 5,
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
        };
       $.ajax(settings).done( function( resp ){
           alert("Response done");
           console.log("Response follows:");
           console.log(  resp );
           console.log("Joke 0 is:");
           console.log(  resp.value[0].joke );
           let objList = resp.value;
           let oStr = "<table border='1'>";
           objList.forEach( function ( o ){
               oStr += `<tr> <td> ID=${o.id}</td><td>J:${o.joke}</td></tr>`;

           })
           oStr += `</table>`;
           alert( `oString:${oStr}`);
           $("#showResults").html( oStr );


       })
    })
})
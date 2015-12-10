var truckID;//=document.getElementById('testid').value;

function loginValidate() {
truckID=document.getElementById('truckid').value;
sessionStorage.setItem("check",truckID);
			var username=document.getElementById('user').value;
			var passwd=document.getElementById('pass').value;
		                var webserUrl = "http://vinmove.com/epod/abcmove.asmx";
                var soapRequest ='<?xml version="1.0" encoding="utf-8"?> \
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \
xmlns:xsd="http://www.w3.org/2001/XMLSchema" \
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> \
<soap:Body> \
<GetLogin xmlns="http://www.Move.com/">\
 <pUserCode>'+ username + '</pUserCode>\
      <pPassWord>' + passwd + '</pPassWord>\
    </GetLogin>\
</soap:Body> \
</soap:Envelope>';
             $.ajax({
                    type: "POST",
                    url: webserUrl,
                    contentType: "text/xml",
                    dataType: "xml",
                    data: soapRequest,
                    success: SuccessOccur,
                    error: ErrorOccur
                });

}
                    function SuccessOccur(data, status, req) {
try{
var resultMsg;
            if (status == "success"){
		
$(req.responseXML).find('GetLoginResponse').each(function(){
resultMsg = $(this).find('GetLoginResult').text();});
//alert(resultMsg);
if(resultMsg == "Sucsess")
{
window.location.href = "getload.html";
}
else if (resultMsg == "Failure")
{
document.write("Invalid login details");
}		
}
}
catch(e)
{
alert(e.message);
}
        }
        function ErrorOccur(data, status, req) {
            alert(req.responseText + " " + status);
        }



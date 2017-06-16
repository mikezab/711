/**
 * Created by JPMC-B2-PC010 on 16/06/2017.
 */
function checkCookie()
{
    if(document.cookie!==""){
        $('#reg-form').remove();
    }
}


function writeCookie()
{
    if(typeof(Storage) !== "undefined"){

        if (document.reg-form.Name.value == ""){
            alert("Please Enter Name!");
            return;
        }

    }else {
        alert("Sorry! No Web Storage support..");
    }

    cookievalue=encodeURI(document.reg-form.Name.value);
    document.cookie="name=" + cookievalue;
    alert("Thank you: " + " " + cookievalue );

    $('#reg-form').remove();
}

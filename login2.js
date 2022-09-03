function validate()
{
    var username=document.getElementById("username").Value
    var password=document.getElementById("password").Value
    if(username=="admin"&& password=="user")
    {
        alert("login succesfully");
        return false;
    }
    else
    {
        alert("login failed");
    }
}
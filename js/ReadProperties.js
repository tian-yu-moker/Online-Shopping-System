function loadProperties()
{
    let path = "../Property/API_Path.json";
    let request = new XMLHttpRequest();
    request.open("get", path);
    request.send(null);
    var json;
    request.onload = function ()
    {
        if(request.status == 200)
        {
            json = JSON.parse(request.responseText);
        }
    }
    return json;
}
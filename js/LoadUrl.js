
let apiPathData;

function loadUrl()
{
    let path = "../Property/API_Path.json";
    $.ajax({
        url: path,
        type: 'GET',
        dateType: "json",
        async: false,
        success: function (data)
        {
            apiPathData = data;
        }
    });
    return apiPathData;
}
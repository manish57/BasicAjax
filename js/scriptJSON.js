function loadJSONDoc()
{
    var request;
    if (window.XMLHttpRequest)
    {
        request=new XMLHttpRequest();
    }
    else
    {
        request=new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open('GET','data/data.json');

    request.onreadystatechange = function()
    {
        if (request.readyState==4 && request.status==200)
        {
            var items = JSON.parse(request.responseText);
            var output="<thead><tr><th>Product Code</th><th>Product Name</th><th>Manufacturing Date</th><th>Product Price</th><th><button class='btn btn-primary' id='tog'>Show Image</button></th></tr></thead>";
            
            for(var i in items){
                img = items[i].image;
                output += '<tbody><tr><td>' + items[i].pCode + '</td><td>' +
                items[i].pName + '</td><td>' +
                items[i].mfgDate + '</td><td>' +
                items[i].pPrice + '</td><td>'+
                "<img style='margin-right:auto;margin-left:auto;' src='"+img+"'></td></tr></tbody>";        
            } 
            document.getElementById('demo').innerHTML = output;
        }
    };

    request.send();
    
        $(document).ready(function(){
        $("img").hide();

        $("#tog").click(function(){
            console.log("key pressed");
            $("img").toggle();
        });
    });
}
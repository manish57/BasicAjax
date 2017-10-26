function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "data/data.xml", true);
  xhttp.send();
}

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<thead><tr><th>Product Code</th><th>Product Name</th><th>Manufacturing Date</th><th>Product Price</th><th><button class='btn btn-primary' id='tog'>Show Image</button></th></tr></thead>";
  var x = xmlDoc.getElementsByTagName("pDetail");
  for (i = 0; i <x.length; i++) {
    var img = x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
   
    table += "<tbody><tr><td>" +
    x[i].getElementsByTagName("pCode")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("pName")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("mfgDate")[0].childNodes[0].nodeValue +
    "</td><td>" +  
    x[i].getElementsByTagName("pPrice")[0].childNodes[0].nodeValue +
    "</td><td><img style='margin-right:auto;margin-left:auto;' src='"+img+"'></td><tr><tbody>" 
    document.getElementById("demo").innerHTML = table;
  }

  $(document).ready(function(){
      $("img").hide();

      $("#tog").click(function(){
          console.log("key pressed");
          $("img").toggle();
      });
  });
}

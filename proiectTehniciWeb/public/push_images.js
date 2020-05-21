function loadImages() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
           if (xmlhttp.status == 200) {
               const response = JSON.parse(xmlhttp.responseText);
               for (var i = 1; i <= response.nrOfImages; ++i) {
                   pushImage(response.imageData[i].title, response.imageData[i].source, response.imageData[i].desc, response.imageData[i].width, response.imageData[i].height);
               }
           }
           else {
               alert("NOT 200");
           }
        }
    };
    
    xmlhttp.open("GET", "http://localhost:8080/images", true);
    xmlhttp.send();
}

loadImages();
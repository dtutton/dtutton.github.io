showContent("home.html");


function Button2Clicked() {
    document.body.style.backgroundColor = "powderblue"; 
}

function placeMarker(map, location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

function functionAlert(){
    alert('menu clicked and called function');
};

function showContent(pageName){
    $('#contentDiv').load(pageName);
};

function initMap() {
  var location = {lat : 31.354676 , lng : 34.308826};
  var map      = new google.maps.Map(document.getElementById("map") , {
    zoom : 4 ,
    center : location
  });
  var maker =new google.maps.Marker({
    position : location ,
    map : map
  });
}
(function () {
  "use strict";
  var icon = document.querySelector(".icon"),
      buttons = document.querySelectorAll("form button"),
      isAnimate = false;
  function iconAnim() {
    if (isAnimate) {return; }
    icon.classList.add("icon-anim");
    isAnimate = true;
    setTimeout(function () {
      isAnimate = false;
      icon.classList.remove("icon-anim");
    }, 10000);
  }
  buttons.forEach(function (button) {
    button.addEventListener("click", iconAnim);
  });
})();



function batata(id){
  const container = document.querySelector('.de');
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.status == 200 && xhr.readyState == 4){
      container.innerHTML = xhr.responseText;

    }
}
  xhr.open("POST", '/delete' ,true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({id}));
}

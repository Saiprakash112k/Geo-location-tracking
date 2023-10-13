var latitude  = 11.127123
var longitude = 78.656891
var zoomValue = 5
async function initMap(a) {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },
        zoom: zoomValue,
        mapId: "4504f8b37365c3d0",
      });
      const marker = new AdvancedMarkerElement({
        map,
        position: { lat:latitude, lng: longitude },
      });
}
initMap();

let intervalClear
 const locateme=()=>{navigator.geolocation.getCurrentPosition(
     function (position) {
         latitude = position.coords.latitude
         longitude =  position.coords.longitude
         zoomValue = 15
         initMap(15)
     },
     function errorCallback(error) {
         console.log(error);
     } );    
 intervalClear= setInterval(initMap,10000)
}  
const stopTracking = ()=>{
   latitude  = 11.127123
longitude = 78.656891
 zoomValue = 5
 initMap()
    clearInterval(intervalClear)
}
const toggleBtn = document.querySelector('.toggle-btn')
const dataSharing = document.getElementById('dataSharing')
let toggleButton = ()=>{
    toggleBtn.classList.toggle('active')
    if(toggleBtn.classList.contains('active')){
        dataSharing.style.color = '#fff'
    }
    else{
        dataSharing.style.color = 'rgb(171,123,231)'
    }
}
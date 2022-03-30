window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }
  
  
  function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;
  
    if (query === url || query === "") return;
  
    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);
  
        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
  }
  
  
  function geoFindMe() {
  
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
      //window.location.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      //window.location.href = `https://www.mbruzda.github.io/map.html?a=${latitude}&b=${longitude}`;
  
  
          // Creating map options
      var mapOptions = {
        center: [17.385044, 78.486671],
        zoom: 10
      }
  
      // Creating a map object
      var map = new L.map('map', mapOptions);
  
      // Creating a Layer object
      var params = parseURLParams(window.location.href)
  
      var layer = new L.TileLayer(`http://{s}.tile.openstreetmap.org/${latitude}/${longitude}/10.png`);
  
      // Adding layer to the map
      map.addLayer(layer);
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  function vibrate() {
    navigator.vibrate(500)
  }
  
  
  var map = L.map('map').setView([51.505, -0.09], 13);
  
function handleLeaflet(){
      
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
      //window.location.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      //window.location.href = `https://www.mbruzda.github.io/map.html?a=${latitude}&b=${longitude}`;
  
  
          // Creating map options
      var mapOptions = {
        center: [17.385044, 78.486671],
        zoom: 10
      }
  
      // Creating a map object
      var map = new L.map('map').setView([latitude, longitude], 14)
  
      // Creating a Layer object
      var params = parseURLParams(window.location.href)
  
      var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(map);  
      // Adding layer to the map
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
}  
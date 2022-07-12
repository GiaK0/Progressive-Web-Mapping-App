console.log("neue Datei");
console.log("Hallo Welt");
//alert("Hallo Welt"); 
// add a XYZ layer to our map
var positron = new ol.layer.Tile({
        title: 'Carto Positron Basemap',
        source: new ol.source.XYZ({
            url: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
            attributions: "Maps: © <a href='https://carto.com/attribution/' target='_blank'>CARTO</a> | <a href='https://openstreetmap.org/copyright' target='_blank'>© OpenStreetMap</a>-contributors | "
        })
    });

// This is my map
var map = new ol.Map({
        controls:
            ol.control.defaults(),
        layers: [
            positron
        ],
        target: 'map',
        view: new ol.View({
            center: [1224514.40, 5942074.07],
            zoom: 10
        }
        )
    });
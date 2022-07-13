# Progressive Web Mapping App
 Offline Web Mapping App

A [Progressive Web App](https://web.dev/progressive-web-apps/) with Web Mapping capabilities.

The source code is based on [indexeddb-geojson](https://github.com/gislayer/indexeddb-geojson).

The basemap is the city centre of Vienna, Austria. Available under https://www.wien.gv.at/ma41datenviewer/public/

## Dependencies

- [OpenLayers](https://openlayers.org/) - for map controls

## Components

- [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- Basemap

## Installation

- With the [app.js](app.js) file the service worker will be registered. With the [sw.js](sw.js) file the service worker will be installed and    activated. 
- The basemap will be embedded with [map.js](src/map.js) as rastertiles. The indexedDB will be created with [indexedDB.js](src/indexedDB.js). The files saved in the indexedDB will be available offline and online. 

## Start

1. Set up a local HTTP server with Python 
   (for more Information: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server)
2. Run "localhost:port/(html-file)" in the web browser


## Sources

- Ali Kilic (2021), available under: https://gislayer.medium.com/using-geojson-indexeddb-together-giscoding-7f1d53df9abe
- Geodatenviewer der Stadtvermessung Wien, available under: https://www.wien.gv.at/ma41datenviewer/public/
  Datenquelle: Stadt Wien – data.wien.gv.at

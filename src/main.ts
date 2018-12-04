//Open layers kütüphanesi any olarak declare edilir.
declare var ol: any;
//Jquery  kütüphanesi any olarak declare edilir.
declare var $: any;
var  map: any;
function  transformPoint (coordinate: [number, number]): [number, number]{
  return ol.proj.transform(coordinate, "EPSG:4326","EPSG:3857");
}

function initMap() {
  //harita ilk acildiginda gosterecegi konum
  const mapCenter: [number, number] = transformPoint([35, 39]);

  var view = new ol.View({
    center: mapCenter,
    zoom: 4
  });

  map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: "map",
    view: view
  });
}

function gotoCoordinate() {
  var lat= Number(($("#lat").val()));
  var lng= Number($("#lng").val());
  var coords : [number, number] = transformPoint([lng, lat]);
  map.getView().animate({center: coords, zoom: 10});
}

initMap();
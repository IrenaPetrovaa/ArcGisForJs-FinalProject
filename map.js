require([
    "esri/config", 
    "esri/WebMap", 
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Search"
], function(esriConfig, WebMap, MapView, ScaleBar,Legend, Home, LayerList, BasemapToggle, BasemapGallery, Search) {
    esriConfig.apiKey = "AAPK11470563ebea40ca8dc828aabaa1ff34NHMnY0teh1E2ut_mvV-mFNRsb2nkwyUOwl5KxIy3YBm84ppxazR_vHgx4u5tFspW"

    const webMap = new WebMap({
        portalItem: {
            id: "232b4d297d054b2a831a3ce629ac8495"
        }
    });

    const view = new MapView({
        container: "viewDiv",
        map: webMap


    });

    const homeBtn = new Home({
        view: view
    });

    view.ui.add(homeBtn, "top-left");

    const legend = new Legend({
        view: view
    });

    view.ui.add(legend, "bottom=left");


})

(function () {
    // script goes here!
    var southWest = L.latLng(39.361307, -84.308877);
    var northEast = L.latLng(39.370116, -84.293513);
    var options = {
        scrollWheelZoom: true
        , zoomSnap: 0.1
        , zoom: 17
        , maxZoom: 18
        , minZoom: 17
        , maxBounds: L.latLngBounds(southWest, northEast)
    }
    var map = L.map('map', options);
    var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWlrdXMzMSIsImEiOiJjanVrNGgyaTIxcDNpM3lwaXB3dnowa2VpIn0.uNKvtTY9Is0M7xKSl_ukjQ', {
        attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> | &copy; <a href="https://www.digitalglobe.com/">Digital Globe</a> | <a href="https://www.mapbox.com/feedback/">Improve this map</a>'
    }).addTo(map);
    $.getJSON("data/field-map-wgs.geojson", function (data) {
        drawMap(data);
    });

    function drawMap(data) {
        // console.log(data);
        var dataLayer = L.geoJson(data, {
            style: function (feature) {
                // console.log(feature.geometry.coordinates);
                // console.log(feature);
                return {
                    color: '#FFFFFF'
                    , weight: 3
                    , fillOpacity: .5
                    , fillColor: '#3FBF3F'
                    , interactive: false
                };
            }
        }).addTo(map);
        map.fitBounds(dataLayer.getBounds());
        createSliderUI(dataLayer);
        updateMap(dataLayer, "FRI", "1");
    }

    function updateMap(dataLayer, day, currentRound) {
        // loop through layers
        // console.log(currentRound);
        dataLayer.eachLayer(function (layer) {
            // reference values
            var props = layer.feature.properties
                , fieldNum = props.FIELD_NUM
                , currentMensGame = props[day + "_M" + currentRound]
                , menLabel = fieldNum + ": " + currentMensGame
                , currentWomensGame = props[day + "_W" + currentRound]
                , womenLabel = fieldNum + ": " + currentWomensGame;
            // remove any previously bound tooltip
            layer.unbindTooltip();
            // if it's true there is a men's game
            if (currentMensGame) {
                // bind the tooltip
                layer.bindTooltip(menLabel, {
                    className: "mensTooltip"
                    , direction: "top"
                    , permanent: true
                    , opacity: 1
                }).openTooltip();
            }
            // if it's true there is a women's game
            if (currentWomensGame) {
                // bind the tooltip
                layer.bindTooltip(womenLabel, {
                    className: "womensTooltip"
                    , direction: "top"
                    , permanent: true
                    , opacity: 1
                }).openTooltip();
            }
        });
    };

    function createSliderUI(dataLayer) {
        var sliderControl = L.control({
            position: 'bottomleft'
        });
        sliderControl.onAdd = function (map) {
            var slider = L.DomUtil.get("ui-controls");
            L.DomEvent.disableScrollPropagation(slider);
            L.DomEvent.disableClickPropagation(slider);
            return slider;
        }
        sliderControl.addTo(map);
        $(".round-slider").on('input change', function () {
            var currentRound = $(this).val()
                , currentDay = $("input[name='day']:checked").val(); // will be FRI or SAT
            updateMap(dataLayer, currentDay, currentRound);
        });
        $("#radio-button").on('input change', function () {
            // reset currentRound value to 1 so that the slider resets itself to first round position when user changes day
            var currentRound = $(".round-slider").val("1");
            // reset currentDay to selected day
            var currentDay = $("input[name='day']:checked").val();
            // send currentDay selection to updateMap and send currentRound = 1 to updateMap
            updateMap(dataLayer, currentDay, "1");
        });
    }
})();
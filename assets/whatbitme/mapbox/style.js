
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "StamenTerrainBackground_0": {
            "type": "raster",
            "tiles": ["https://stamen-tiles.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "mosquitosubmission_1": {
            "type": "geojson",
            "data": json_mosquitosubmission_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_StamenTerrainBackground_0_0",
            "type": "raster",
            "source": "StamenTerrainBackground_0"
        },
        {
            "id": "lyr_mosquitosubmission_1_0",
            "type": "circle",
            "source": "mosquitosubmission_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#0000ff', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}
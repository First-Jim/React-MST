import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import * as control from 'ol/control';                                            
import { Logo, TileSuperMapRest } from '@supermap/iclient-ol';
import React, {Children, useEffect} from 'react'
import {observer} from 'mobx-react-lite'

const SuperMap = () => {


  useEffect(() => {
    var url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World";
    var map = new Map({
      target: 'map',
      controls: control.defaults({attributionOptions: {collapsed: false}}).extend([new Logo()]),
      view: new View({
          center: [0, 0],
          zoom: 2,
          projection: 'EPSG:4326'
      })
    });
    var layer = new TileLayer({
          source: new TileSuperMapRest({
              url: url,
              wrapX: true
      }),
      projection: 'EPSG:4326'
    });
    map.addLayer(layer);

  }, [])

  return <div id="map"></div>
}

export default observer(SuperMap)




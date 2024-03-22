expotr const initialViewState = {
      longitude: -58.4171,
      latitude: -34.6076,
      zoom: 1.5,
      minZoom: 1,
      maxZoom: 18,
      maxBounds: [
        [-58.65981, -34.71960], // Lower-left limit of CABA
        [-58.28348, -34.50316], // Upper-right limit of CABA
      ],
    };
export const mapLayers = {
  deps: {
    id:"departamentos-layer",
    type:"fill", // Capa de relleno para representar polígonos
    paint:{
          'fill-color': "#2d2532",
          'fill-opacity': 1,
          'fill-outline-color': "#9423ed",
        }
  },
  barrios: {
    id: 'barrios-layer',
    type: 'fill',
    paint: {
          'fill-color': "#2d2532",
          'fill-opacity': 1,
          'fill-outline-color': "#2cb34c",
        }
  },
  caba: {
    id: 'caba-layer',
    type: 'fill',
    paint: {
          'fill-color': "rgba(255, 255, 255, 0)",
          'fill-opacity': 1,
          'fill-outline-color': "#9423ed",
        }
  }
}

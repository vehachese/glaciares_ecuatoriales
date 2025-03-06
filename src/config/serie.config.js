const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://vehachese.github.io",
  "baseurl": "/glaciares_ecuatoriales",
  "title": "Imágenes de los glaciares ecuatoriales",
  "subtitle": "La imaginación de los no humanos",
  "credits": "Santiago Villalba Hernández",
  "copyright": "Esta información puede ser copiada, reproducida y modificada",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "creator",
        "label": "Creator",
        "type": "text"
      },
      {
        "key": "label",
        "label": "Label",
        "type": "text"
      },
      {
        "key": "date",
        "label": "Date",
        "type": "text"
      },
      {
        "key": "medium",
        "label": "Medium",
        "type": "text"
      },
      {
        "key": "location",
        "label": "Location",
        "type": "text"
      },
      {
        "key": "type",
        "label": "Type",
        "type": "text"
      },
      {
        "key": "altitude",
        "label": "Altitude",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "creator",
      "label",
      "medium",
      "location"
    ]
  }
};
export default config;
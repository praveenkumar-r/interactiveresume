import React, { useEffect, useRef } from "react";

var googleMap;
const Map = (props) => {
  const googleMapRef = useRef();
  useEffect(() => {
    if (!googleMap) {
      setTimeout(() => {
        googleMap = createGoogleMap();

        createMarker();
      }, 1000);
    }
    if (googleMap) {
      if (props.theme === "dark") {
        googleMap.setOptions({
          styles: [
            {
              featureType: "all",
              stylers: [{ invert_lightness: true }],
            },
          ],
        });
      } else if (props.theme === "light") {
        googleMap.setOptions({
          styles: [
            {
              featureType: "all",
              stylers: [{ invert_lightness: false }],
            },
          ],
        });
      }
    }
  }, [props.theme]);

  const createGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      zoom: 15,
      center: { lat: 12.9777885, lng: 80.1435489 },
      mapTypeControl: true,

      mapTypeControlOptions: {
        mapTypeIds: [
          window.google.maps.MapTypeId.ROADMAP,
          window.google.maps.MapTypeId.SATELLITE,
          "applyDarkStyle",
          "applyLightStyle",
        ],
      },
    });
  };
  const createMarker = () => {
    new window.google.maps.Marker({
      position: { lat: 12.9777885, lng: 80.1435489 },
      map: googleMap,
    });
  };
  return (
    <>
      <div
        style={{ border: "1px solid #e1e1e1" }}
        className="map"
        ref={googleMapRef}
      ></div>
    </>
  );
};

export default Map;

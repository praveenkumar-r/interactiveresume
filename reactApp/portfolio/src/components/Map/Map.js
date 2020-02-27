import React, { useEffect, useRef } from "react";

var googleMap;
const Map = () => {
  const googleMapRef = useRef();
  //   const { googleMap, setgoogleMap } = useState();

  useEffect(() => {
    setTimeout(() => {
      googleMap = createGoogleMap();
      createMarker();
    }, 1000);
  }, []);

  const createGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      zoom: 15,
      center: { lat: 12.9777885, lng: 80.1435489 },
      mapTypeControl: true,
      mapTypeControlOptions: {
        mapTypeIds: [
          window.google.maps.MapTypeId.ROADMAP,
          window.google.maps.MapTypeId.SATELLITE
        ]
      }
    });
  };
  const createMarker = () => {
    new window.google.maps.Marker({
      position: { lat: 12.9777885, lng: 80.1435489 },
      map: googleMap
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

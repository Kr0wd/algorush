import React, { useEffect, useRef, useState } from 'react';
const MapRoute = ({ startLat, startLng, endLat, endLng }) => {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB0GaCcgWCpr9ARb124wiGo1wnVchEfCkA&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = () => {
        setMapLoaded(true);
      };
      document.head.appendChild(script);
    };

    loadScript();
  }, []);

  useEffect(() => {
    if (!mapLoaded) return;

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    const map = new google.maps.Map(mapRef.current, {
      zoom: 7,
      center: { lat: startLat, lng: startLng },
    });

    directionsRenderer.setMap(map);

    calculateAndDisplayRoute(directionsService, directionsRenderer, startLat, startLng, endLat, endLng);
  }, [mapLoaded, startLat, startLng, endLat, endLng]);

  const calculateAndDisplayRoute = (directionsService, directionsRenderer, startLat, startLng, endLat, endLng) => {
    directionsService.route({
      origin: { query: `${startLat}, ${startLng}` },
      destination: { query: `${endLat}, ${endLng}` },
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(response);
      } else {
        alert(`Directions request failed due to ${status}`);
      }
    });
  };

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default MapRoute;
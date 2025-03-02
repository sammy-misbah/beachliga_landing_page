import { GoogleMap, MarkerF } from "@react-google-maps/api"; // Notice MarkerF

const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "10px",
};

export default function MapComponent({ location }) {
  const center = {
    lat: location.latitude,
    lng: location.longitude,
  };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <MarkerF position={center} />
    </GoogleMap>
  );
}

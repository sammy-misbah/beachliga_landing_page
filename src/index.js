import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { LoadScriptNext } from "@react-google-maps/api";
import { GoogleOAuthProvider } from "@react-oauth/google";

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const libraries = ["places"];
const googleClientId = process.env.REACT_APP_GOOGLE_WEB_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <BrowserRouter>
        <LoadScriptNext
          googleMapsApiKey={googleMapsApiKey}
          libraries={libraries}
        >
          <App />
        </LoadScriptNext>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();

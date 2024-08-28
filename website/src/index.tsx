import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider } from "reactfire";
import { ThemeProvider } from "@emotion/react";
import theme from "./providers/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const firebaseConfig = {
  apiKey: "AIzaSyDiJLZDvpzV3f_kpq0GtRSnPTIvd5ReshM",
  authDomain: "exampleapp-9da02.firebaseapp.com",
  projectId: "exampleapp-9da02",
  storageBucket: "exampleapp-9da02.appspot.com",
  messagingSenderId: "370086918521",
  appId: "1:370086918521:web:f22f3873c8e160146557a8",
  measurementId: "G-JL8LN9YZ2N",
};
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <App />
      </FirebaseAppProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import building from "./assets/building.svg";
import coconutTree from "./assets/coconut-tree.svg";
import hotAirBalloon from "./assets/hot-air-balloon.svg";
import hotel from "./assets/hotel.svg";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <>
            <h2>React Static Site</h2>
            <div className="grid-wrapper">
                <App img={building} name="Building" />
                <App img={coconutTree} name="Coconut Tree" />
                <App img={hotAirBalloon} name="Hot Air Balloon" />
                <App img={hotel} name="Hotel" />
            </div>
        </>
    </React.StrictMode>
);

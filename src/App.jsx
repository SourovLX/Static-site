import "./App.css";

function App(props) {
    return (
        <div className="grid-items">
            <img src={props.img} alt="" />
            <h2>{props.name}</h2>
        </div>
    );
}

export default App;

var React = require("react");
var ReactDOM = require("react-dom");

const name = "Nikita";

ReactDOM.render(<div>
  <h1 className="heading" >Navbar {name}!!!</h1>
  <ul>
    <li>Add med</li>
    <li>Del med</li>
    <li>Search med</li>
    <li>Log out</li>
  </ul>
  </div>
  , document.getElementById("root"));

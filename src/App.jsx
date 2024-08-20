import Navigation from "./component/Navigation/Navigation";

import "./App.css";
import FromHeader from "./component/FromHeader/FromHeader";
import Contactbody from "./component/Contactbody/Contactbody";

function App() {
  return (
    <div className="container">
      <Navigation />
    <FromHeader/>
    <Contactbody/>
      </div>
      
  );
}

export default App;


import './App.css';
import Header from "./Header.js"
import Home from "./Home.js"

function App() {
  return (
    // following BEM convention of classNames
    <div className="app">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;

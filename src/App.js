import logo from './logo.svg';
import './App.css';
import Nav from './AppComponent/Nav.js';
import Scroll from './AppComponent/Scroll.js';
import Search from './AppComponent/Search.js';
import Gender from './AppComponent/Gender.js';
import Slide from './AppComponent/Slide.js';


function App() {
  return (
    <div className="container">
      <Nav/>
      <div class="center"> 
        <Slide/>
        {/* <Search/> */}
        <Gender/>
        <Scroll/>
      </div>
    </div>
  );
}

export default App;

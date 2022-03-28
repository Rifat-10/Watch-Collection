import logo from './logo.svg';
import './App.css';
import QuestionAnswer from './Components/QuestionAnswer';
import AllProducts from './Components/AllProducts'


// importing all the images I need
import image1 from "./images/breitling-triumph.jpg";
import image2 from "./images/Cartier-Santos.jpg";
import image3 from "./images/g-shock_Jellyfish.jpg";
import image4 from "./images/harga-rolex.jpg";
import image5 from "./images/monaco-longines-lyre.jpg";
import image6 from "./images/omega-constellation 29.jpg";
import image7 from "./images/omega-seamaster.jpg";
import image8 from "./images/rolex-retailer.jpg";
import image9 from "./images/tag-heuer-carrera-green.jpg";
import image10 from "./images/tag-heuer-carrera.jpg";

// Making an "Array of ObjectS"
const products = [
  { id: 1, image: image1, name: "Breitling Triumph", price: "1750" },
  {id: 2,image: image2,name: "Cartier-Santos",price: "2450",},
  { id: 3, image: image3, name: "G-Shock Jellyfish", price: "1150" },
  { id: 4, image: image4, name: "Harga Rolex", price: "3500" },
  { id: 5, image: image5, name: "Monaco Longines", price: "2480" },
  { id: 6, image: image6, name: "Omega Constellation", price: "5599" },
  { id: 7, image: image7, name: "Omega Seamaster", price: "3450" },
  { id: 8, image: image8, name: "Rolex-Retailer", price: "6750" },
  { id: 9, image: image9, name: "Heuer Carrera Green", price: "2450" },
  { id: 10, image: image10, name: "Heuer Carrera", price: "4675" },
];
function App() {
  return (
    <div>
       <h1 style={{'textAlign': 'center'}}>Watch Collection</h1>
      <div>
       
      <AllProducts arrayOfProducts = {products}></AllProducts>
      <QuestionAnswer></QuestionAnswer>
    </div>
    </div>
  );
}

export default App;

import './App.css';
import Products from './component/categories/AllProducts/Products';
import Electronics from './component/categories/electronics/electronics';
import Header from './component/header/header';
import Main from './component/main/main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Products/>
    </div>
  );
}

export default App;

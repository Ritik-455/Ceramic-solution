import './App.css';
import Choose from './components/Choose';
import Customer from './components/Customer';
import Herosection from './components/Herosection';
import Whatwedo from './components/Whatwedo';

function App() {
  return (
    <>
      <Herosection />
      <Whatwedo />
      <Choose />
      <Customer />
    </>
  );
}

export default App;

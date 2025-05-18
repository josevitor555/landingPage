import './App.css'
import './tailwind.css'

// Components for the layout
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Modals from './components/Modals';

const App = () => {

  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
      <Modals />
    </div>
  )
}

export default App;

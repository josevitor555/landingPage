import './App.css'
import './tailwind.css'

// Components for the layout
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';

const App = () => {

  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
    </div>
  )
}

export default App;

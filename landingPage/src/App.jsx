import './App.css'
import './tailwind.css'

// Components for the layout
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Modals from './components/Modals';
import Features from './components/Features';
import Usertestimonial from './components/Usertestimonial';
import Faq from './components/Faq';
import Pricing from './components/Pricing';

const App = () => {

  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
      <Modals />
      <Features />
      <Usertestimonial />
      <Faq />
      <Pricing />
    </div>
  )
}

export default App;

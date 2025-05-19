import './App.css'
import './tailwind.css'

// Components for the layout
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Modals from './components/Modals';
// import Faq from './components/Faq';
import Features from './components/Features';
import Usertestimonial from './components/Usertestimonial';

const App = () => {

  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
      <Modals />
      {/* <Faq /> */}
      <Features />
      <Usertestimonial />
    </div>
  )
}

export default App;

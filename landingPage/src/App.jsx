import './App.css'
import './tailwind.css'

// Components for the layout
import Header from './components/Header';
import Banner from './components/Banner';

const App = () => {

  return (
    <div className="app">
      <Header />
      <Banner />
    </div>
  )
}

export default App;

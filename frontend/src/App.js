import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import FindUs from './components/FindUs'
import Map from './components/Map'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Header />

      <div id='about'>
        <About />
      </div>

      <div id='srvcs'>
        <Services />
      </div>

      <div id='noustrouver'>
        <Map />
      </div>

      <div id='contactez'>
        <Contact />
      </div>
    </>
  )
}

export default App

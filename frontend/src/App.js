import Menu from './components/Menu'
import Header from './components/Header'
import Services from './components/Services'
import ReactFullpage from '@fullpage/react-fullpage'

const App = () => {
  return (
    <>
      <Menu />

      <ReactFullpage
        anchors={['accueil', 'services', 'noustrouver', 'contact']}
        menu='#menu'
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section'>
                <Header />
              </div>

              <div className='section'>
                <Services />
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </>
  )
}

export default App

import Header from './components/Header'
import Services from './components/Services'
import ReactFullpage from '@fullpage/react-fullpage'

const App = () => {
  return (
    <>
      <ReactFullpage
        anchors={['accueil', 'services', 'noustrouver', 'contact']}
        navigationTooltips={['Accueil', 'Services', 'Nous trouver', 'Contact']}
        menu='#menu'
        navigation='true'
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section'>
                <Header />
              </div>

              <div className='section' id='srvcs'>
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

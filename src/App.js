import { Routes, Route , Navigate , useLocation } from 'react-router-dom'
import Layout from "./scripts/Layout"
import { Provider } from "./scripts/Context"
import './App.css'
import Head from './scripts/head'
import Footer from './scripts/footer'
import  AboutPage from './scripts/aboutPage'
import ShoppingPage from './scripts/shoppingPage'
import Home from './scripts/home'
import Login from './scripts/loginPage'

function App() {  

  const location = useLocation();
  const isLoginPage = location.pathname === "/" // Verifica se está na página de login

  return (
    <Provider>
      <div className="App">
        
            {/* Exibe o Head (Menu) apenas se NÃO estiver na página de login */}
        {!isLoginPage && (
          <header className="App-header">
            <Head />
          </header>
        )}

         
            <Layout>
              <Routes>
                  <Route path="/" element={<Login />}/>
                  <Route path="/Home" element={<Home/>}/>
                  <Route path="/perfil-loja" element={<AboutPage />} />
                  <Route path="/shopping" element={<ShoppingPage/>}/>  
                  <Route path="*" element={<Navigate to="/" />} />              
              </Routes>
            </Layout>
            {/* Exibe o Footer apenas se NÃO estiver na página de login */}
        {!isLoginPage && (
          <footer>
            <Footer />
          </footer>
        )}
      </div>
    </Provider>
  )
}

export default App

import { Routes, Route , Navigate , useLocation } from 'react-router-dom'
import Layout from "./components/Layout"
import { Provider } from "./components/Context"
import './App.css'
import Head from './scripts/head'
import Footer from './scripts/footer'
import  AboutPage from './scriptPages/aboutPage'
import ShoppingPage from './scriptPages/shoppingPage'
import Home from './scriptPages/homePage'
import Login from './scriptPages/loginPage'
import Cart from './scriptPages/buyCartPage'

function App() {  

  const location = useLocation();
    const isLoginPage = location.pathname === "/" // Verifica se está na página de login
    const isLoginBuy = location.pathname === "/buy"
  return (
    <Provider>
      <div className="App">
        
            {/* Exibe o Head (Menu) apenas se NÃO estiver na página de login */}
        {!isLoginBuy && !isLoginPage && (
          <header className="App-header">
            <Head />
          </header>
        )}

         
            <Layout>
              <Routes>
                  <Route path="/" element={<Login />}/>
                  <Route path="/Home" element={<Home />}/>
                  <Route path="/perfil-loja" element={<AboutPage />} />
                  <Route path="/shopping" element={<ShoppingPage />}/> 
                  <Route path="/buy" element={<Cart />}/> 
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

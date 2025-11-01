import { Routes, Route , Navigate  } from 'react-router-dom'
import Layout from "./components/Layout"
import { Provider } from "./components/Context"
import './App.css'
import  AboutPage from './scriptPages/aboutPage'
import ShoppingPage from './scriptPages/shoppingPage'
import Home from './scriptPages/homePage'
import Login from './scriptPages/loginPage'
import Cart from './scriptPages/buyCartPage'

function App() {  


  return (
    <Provider>
      <div className="App">    
           
         
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
       
      </div>
    </Provider>
  )
}

export default App

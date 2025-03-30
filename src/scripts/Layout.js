import { useLocation } from "react-router-dom"
import Menu from "../scripts/head"
import Footer from "../scripts/footer"

const Layout = ({ children }) => {
  const location = useLocation()
  const isLoginPage = location.pathname === "/" // Verifica se está na página de login

  return (
    <div>
      {/* Exibe Menu e Footer apenas se NÃO for a página de login */}
      {!isLoginPage && <Menu />}
      <main>{children}</main>
      {!isLoginPage && <Footer />}
    </div>
  )
}

export default Layout

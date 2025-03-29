import React, { createContext, useState, useContext } from "react"

// Criando o contexto
const FooterContext = createContext()

// Provider que envolve os componentes
export const FooterProvider = ({ children }) => {
  const [estilosFooter, setEstilosFooter] = useState("visible")

  const mostrarFooter = () => {
    setEstilosFooter((prev) => (prev === 'hidden' ? 'visible' : 'visible'))
 
  }
  const esconderFooter = () => {
    setEstilosFooter((prev) => (prev === "visible" ? "hidden" : "hidden"))

  }

  return (
    <FooterContext.Provider value={{ estilosFooter, mostrarFooter ,esconderFooter }}>
      {children}
    </FooterContext.Provider>
  )
}

// Hook para acessar o contexto
export const useFooterContext = () => useContext(FooterContext);
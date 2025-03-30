import React, { createContext, useState, useContext } from "react"

// Criando o contexto
const Context = createContext()

// Provider que envolve os componentes
export const Provider = ({ children }) => {
  const [estilos, setEstilos] = useState("visible")

  const mostrarFooter = () => {
    setEstilos((prev) => (prev === 'hidden' ? 'visible' : 'visible'))
 
  }
  const esconderFooter = () => {
    setEstilos((prev) => (prev === "visible" ? "hidden" : "hidden"))

  }
  const mostrarScrool = () => {
    setEstilos((prev) => (prev === 'hidden' ? 'visible' : 'visible'))
 
  }
  const esconderScrool = () => {
    setEstilos((prev) => (prev === "visible" ? "hidden" : "hidden"))

  }

  return (
    <Context.Provider value={{ estilos, mostrarFooter ,esconderFooter,mostrarScrool,esconderScrool}}>
      {children}
    </Context.Provider>
  )
}

// Hook para acessar o contexto
export const useEstiloContext = () => useContext(Context);
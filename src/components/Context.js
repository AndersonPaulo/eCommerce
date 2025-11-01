import React, { createContext, useState, useContext } from "react"
import CartSlect from "./CartToSelect"

const cartSelect = new CartSlect()

// Criando o contexto
const Context = createContext()

// Provider que envolve os componentes
export const Provider = ({ children }) => {
  const [estilos, setEstilos] = useState("visible")
  const [total, setTotal] = useState(0)

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
  const mostrarTotal = () =>{
    setTotal((prev) => (prev === cartSelect.getItens() ? 0 : cartSelect.getItens()))

  }

  return (
    <Context.Provider value={{estilos,total,mostrarTotal, mostrarFooter ,esconderFooter,mostrarScrool,esconderScrool}}>
      {children}
    </Context.Provider>
  )
}

// Hook para acessar o contexto
export const useEstiloContext = () => useContext(Context);
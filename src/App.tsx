import { Route, Routes } from "react-router-dom"

import { Layout } from "@/components/Layout"
import Contato from "@/pages/Contato"
import Home from "@/pages/Home"
import Portfolio from "@/pages/Portfolio"
import Servicos from "@/pages/Servicos"
import Sobre from "@/pages/Sobre"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
      </Route>
    </Routes>
  )
}

export default App

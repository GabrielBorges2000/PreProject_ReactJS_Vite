import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayouts'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router(){
  return(
     <Routes>
         <Route path="/" element={<DefaultLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/history" element={<History/>}/>
         </Route>
     </Routes>
  )
}


/* o Path representa como tem que estar o meu url de refência
após a barra para que uma página especifica tenha que ser acessada. */
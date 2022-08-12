import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login }  from './assets/components/login/login'
import { Cadastro }  from './assets/components/cadastro/cadastro';

export const Rotas = () => {
    return (
        <Routes>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Cadastro' element={<Cadastro />}/>
        </Routes>        
    )
}
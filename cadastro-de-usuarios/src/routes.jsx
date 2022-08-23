import {Routes, Route} from 'react-router-dom';
import { Login }  from './assets/components/login/login'
import { Cadastro }  from './assets/components/cadastro/cadastro';
import { Home } from './assets/components/home/home';

export const Rotas = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Cadastro' element={<Cadastro />}/>
        </Routes>        
    )
}
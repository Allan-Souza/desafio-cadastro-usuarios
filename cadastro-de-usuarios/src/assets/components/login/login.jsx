import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'

export const Login = () => {
    return(
        <section id='page'>
            <main id='main-content'>
                <div className='container bg-light p-5 w-50 rounded mb-5' id='card-login'>
                    <h1 className='text-center'>Login</h1> <br />
                    <form action="#">
                        <label htmlFor="#" className="col-sm-2 col-form-label">E-mail: </label>
                        <input type='text' placeholder='Digite seu Nome' className="form-control"/> <br />
                        <label htmlFor="#" className="col-sm-2 col-form-label">Senha: </label>
                        <input type="password" placeholder='Digite sua senha' className="form-control"/>
                        <br />
                        <div class="text-center">
                            <button type="submit" class="btn btn-dark mb-3" id='botao'>Entrar</button>
                        </div>
                    </form>              
                </div>
            </main>
        </section>       
    )
}


import './cadastro.css'

export const Cadastro = () => {
    return(
        <section id='page-cadastro'>
            <main id='main-content'>
                <div className='container bg-light p-5 w-50 rounded mb-5' id='card-login'>
                    <h1 className='text-center'>Cadastro</h1> <br />
                    <form action="#">
                        <label htmlFor="#" className="col-sm-6 col-form-label">Nome: </label>
                        <input type='text' placeholder='Digite seu nome' className="form-control"/> <br />
                        <label htmlFor="#" className="col-sm-6 col-form-label">E-mail: </label>
                        <input type='text' placeholder='Digite seu e-mail' className="form-control"/> <br />
                        <label htmlFor="#" className="col-sm-6 col-form-label">CPF: </label>
                        <input type='text' placeholder='Digite seu CPF' className="form-control"/> <br />
                        <label htmlFor="#" className="col-sm-6 col-form-label">PIS: </label>
                        <input type='text' placeholder='Digite seu PIS' className="form-control"/> <br />
                        <label htmlFor="#" className="col-sm-6 col-form-label">Senha: </label>
                        <input type="password" placeholder='Digite sua senha' className="form-control"/> <br />
                        <label htmlFor="#" className="col-sm-6 col-form-label">Confirmar senha: </label>
                        <input type="password" placeholder='Digite novamente sua senha' className="form-control"/>
                        <br />
                        <div class="text-center">
                            <button type="submit" class="btn btn-dark mb-3" id='botao'>Cadastrar</button>
                        </div>
                        <p className='text-center' id='link'>Já possui cadastro? <a href="/login">Clique aqui</a></p>
                    </form>              
                </div>
            </main>
        </section>       
    )
}
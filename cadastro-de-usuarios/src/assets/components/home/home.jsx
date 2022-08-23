import './home.css'

export const Home = () =>{
    return(
        <main>
            <section id='page-home'>
                <main id='main-content'>
                    <h1 className='text-center'>Olá visitante</h1>
                    <section id='cards'>
                        <div id='card-1' className='text-center'>
                            <h2 className='text-center'>Login</h2>
                            <p>Caso você já possua uma conta</p>
                            <a href="/login"><button className='btn btn-dark'>Clique aqui</button></a>
                        </div>
                        <div id='card-2' className='text-center'>
                            <h2 className='text-center'>Cadastro</h2>
                            <p>E se você ainda não é cadastrado</p>
                            <a href="/cadastro"><button className='btn btn-dark'>Clique aqui</button></a>
                        </div>
                    </section>
                </main>
            </section>
        </main>
    )
}
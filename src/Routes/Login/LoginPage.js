function LoginPage() {
    return (
        <main className="container py-5">
            <div className="col-md-10 mx-auto col-lg-5 mt-5">
                <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Senha</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" className="c-p" value="remember-me" /> Permanecer conectado
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-warning" type="submit">Entrar</button>
                    <hr className="my-4" />
                    <small className="text-body-secondary">Não tem uma conta? Clique aqui: <a href="register">Cadastrar-se</a></small>
                </form>
            </div>
        </main>
    )
}
export default LoginPage;
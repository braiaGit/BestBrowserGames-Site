function LoginSection(){
    // const inputChange = (e)=>{
    //   const inputValue = e.target.value;
    //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //   const emailValited = emailRegex.test(inputValue)
    //   if(emailValited){
    //     console.log("email válido")
    //   }else console.log('email inválido')
    // }
    // const validationForm = (e)=>{
    //   e.preventDefault();
    // }
    return (
        <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Faça login para aproveitar todos os recursos</h1>
        <p class="col-lg-10 fs-4">Fazendo login você podera comentar sobre os jogos que já jogou, avaliar, e até mesmo interagir com outros usuários. Se ainda não tiver uma conta, você pode se cadastrar rapidamente clicando em "Cadastrar-se".</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Senha</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" class="c-p" value="remember-me"/> Permanecer conectado
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-warning" type="submit">Entrar</button>
          <hr class="my-4"/>
          <small class="text-body-secondary">Não tem uma conta? Clique aqui: <a href="#">Cadastrar-se</a></small>
        </form>
      </div>
    </div>
    )
}

export default LoginSection
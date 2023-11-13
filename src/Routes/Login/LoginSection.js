import LoginForm from "./loginForm"

function LoginSection(){
        return (
          <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Faça login para aproveitar todos os recursos</h1>
        <p class="col-lg-10 fs-4">Fazendo login você podera comentar sobre os jogos que já jogou, avaliar, e até mesmo interagir com outros usuários. Se ainda não tiver uma conta, você pode se cadastrar rapidamente clicando em "Cadastrar-se".</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
          <LoginForm/>
      </div>
    </div>
    )
}

export default LoginSection
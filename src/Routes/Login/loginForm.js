import { useState } from "react"
import { Link } from "react-router-dom"


function LoginForm(){
    const inputs= {
        floatingInput: "",
        floatingPassword: "",
     };
     const [user, setUser] = useState(inputs);
 const onChange= (e) => {
         const { id, value } = e.target;
         setUser((prevState) => ({ ...prevState, [id]: value }));
     };
    const onClick = ()=> fetch('https://api-best-browser-games.vercel.app/users/login',{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        "email": user.floatingInput,
        "password": user.floatingPassword
    })}).then(resposta=>resposta.json()).then((resposta)=>{
        console.log(resposta)
        console.log(user.floatingInput)
        console.log(user.floatingPassword)
    })

    return(
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={user.floatingInput} onChange={onChange} />
            <label for="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={onChange} value={user.floatingPassword}  />
            <label for="floatingPassword">Senha</label>
        </div>
        <div className="checkbox mb-3">
            <label>
                <input type="checkbox" className="c-p" value="remember-me" /> Permanecer conectado
            </label>
        </div>
        <button className="w-100 btn btn-lg btn-warning" type="button" onClick={onClick}>Entrar</button>
        <hr className="my-4" />
        <small className="text-body-secondary">Não tem uma conta? Clique aqui: <Link to="/register">Cadastrar-se</Link></small>
    </form>
    )
}
export default LoginForm
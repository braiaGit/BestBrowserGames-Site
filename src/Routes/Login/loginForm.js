import { useContext, useState } from "react"
import { Link, redirect } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import './loginForm.css'


function LoginForm() {
    const { session, setSession } = useContext(AuthContext);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const inputs = {
        floatingInput: "",
        floatingPassword: "",
    };

    const [user, setUser] = useState(inputs);
    const onChange = (e) => {
        const { id, value } = e.target;
        setUser((prevState) => ({ ...prevState, [id]: value }));
    };




    const [spanMessage, setMessage] = useState('Usuario ou senha está incorreto ou não está cadastrado.')
    const [spanMessageClass , setClass] = useState('alert alert-danger d-none')

    const inputOfEmailError = ()=>{
        setMessage('Formato de email inválido !')
        setClass('alert alert-danger errorLoginMessage')
    }

    const loginError = () => {
        setMessage('Email ou senha incorreto ou não cadastrado !')
        setClass('alert alert-danger errorLoginMessage')
    }




    const emailValited = emailRegex.test(user.floatingInput)

    const onClick = () => emailValited === true ? fetch('https://api-best-browser-games.vercel.app/users/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email": user.floatingInput,
            "password": user.floatingPassword
        })
    }).then(resposta => resposta.json()).then((resposta) => {
        if(typeof resposta === 'array'){
            loginError()
            return
        } else  {
            setSession(resposta)
            window.location.href = '/'
        }
    }) : inputOfEmailError()

    return (
        <>
            <section className="text-center">
                <span className={spanMessageClass} id="loginError" role="alert">
                    {spanMessage}
                </span>
                <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            name="floatingInput"
                            placeholder="name@example.com"
                            value={user.floatingInput}
                            onChange={onChange}
                        />
                        <label for="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            name="floatingPassword"
                            placeholder="Password"
                            onChange={onChange}
                            value={user.floatingPassword} />
                        <label for="floatingPassword">Senha</label>
                    </div>
                    <button
                        className="w-100 btn btn-lg btn-warning"
                        type="button"
                        onClick={onClick}>Entrar</button>
                    <hr className="my-4" />
                    <small className="text-body-secondary">
                        Não tem uma conta? Clique aqui: 
                        <Link to="/register"> Cadastrar-se</Link>
                    </small>
                </form>
            </section>
        </>
    )
}
export default LoginForm
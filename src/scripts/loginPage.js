import '../style/login.css'

const Login = () =>{

    return(
        <div className="conteiner">

            <div className="form" data-qa="form">
                <div className='name'>Login</div>
                <div className="username">
                <label>username</label>
                <input type="text" data-qa="username" className="inputusername" name="username" placeholder="username.."></input>
                </div>
                <div className="password">
                <label>Password</label>
                <input type="text" data-qa="" className="inputPassword" name="password" placeholder="password.."></input>
                </div>              
                
                <input  className="login" type="submit" value="Login"></input>


            </div>

        </div>
    )

}
export default Login
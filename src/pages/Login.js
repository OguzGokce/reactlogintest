import logo from '../logo.svg';
import './Login.css';
import Users from '../../src/kullanicilar.json';
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        Users.map(record => {
            if (record.name == username) {
                if (record.password == password) {
                    localStorage.setItem('username', username);

                    if (record.rights.indexOf('admin') > -1) {
                        localStorage.setItem('admin', true);
                    } else {
                        localStorage.setItem('admin', false);
                    }

                    if (record.rights.indexOf('editor') > -1) {
                        localStorage.setItem('editor', true);
                    } else {
                        localStorage.setItem('editor', false);
                    }

                    if (record.rights.indexOf('contributor') > -1) {
                        localStorage.setItem('contributor', true);
                    } else {
                        localStorage.setItem('contributor', false);
                    }
                }
            }
        })

        navigate("/");
    }

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
      };

    return (
        <>
            {localStorage.getItem("username") ? (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Zaten {localStorage.getItem("username")} olarak giriş yaptınız.
                            <button onClick={handleLogout}>
                                Logout
                            </button>
                            <a href='/' className="App-link">Geri dön.</a>
                        </p>
                    </header>
                </div>
            ) : (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p className='head'>
                            Giriş Sayfası
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="LoginBox">
                                <div className="Row">
                                    <label>Kullanıcı:</label>
                                    <input
                                        type="text"
                                        id="username"
                                        autoComplete="off"
                                        onChange={({ target }) => setUsername(target.value)}
                                        value={username}
                                        required
                                    />
                                </div>
                                <div className="Row">
                                    <label htmlFor="password">Parola:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        onChange={({ target }) => setPassword(target.value)}
                                        value={password}
                                        required
                                    />
                                </div>
                                <div className="ButtonRow">

                                    <button type="submit">
                                        Giriş
                                    </button>
                                </div>
                            </div>
                        </form>
                        <a
                            className="App-link"
                            href="/"
                        >
                            Geri Dön
                        </a>
                    </header>
                </div>
            )
            }
        </>
    )
}

export default Login;

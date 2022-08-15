import logo from '../logo.svg';
import './Home.css';
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        localStorage.setItem('admin', false);
        localStorage.setItem('editor', false);
        navigate("/");
      };

    return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='head'>
          Anasayfa
        </p>
        {localStorage.getItem("username") ? (<div>{localStorage.getItem("username")} olarak giriş yapıldı. (<a className="App-link" href='#' onClick={handleLogout}>Çıkış yap.</a>)</div> ) :
        (<div><a
          className="App-link"
          href="/login"
        >
          Giriş Yap
        </a></div>)
        }
        
        <a
          className="App-link"
          href="/iletisim"
        >
          İletişim
        </a>
        <a
          className="App-link"
          href="/raporlar"
        >
          Raporlar
        </a>
      </header>
    </div>
    );
}

export default Home;

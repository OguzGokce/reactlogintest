import './Home.css';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';

function Raporlar() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 60 },
        { field: 'name', headerName: 'Name', width: 220 },
        { field: 'email', headerName: 'E-mail', width: 300 },
        { field: 'gender', headerName: 'Gender', width: 80 },
        { field: 'status', headerName: 'Status', width: 80 },
    ];

    const rows = [
        { id: 1, name: 'test', email: 'test', gender: 'test', status: 'test' },
    ];

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://gorest.co.in/public/v2/users')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    posts.map(
        (e) =>
            rows.push({ id: e.id, name: e.name, email: e.email, gender: e.gender, status: e.status })
    );




    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };



    if (localStorage.getItem("admin") == 'true') {
        return (<div className="App">
            <header className="App-header">
                <div className='datatable' style={{ height: 400, width: 800 }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
                <p className='head'>
                    Raporlar
                </p>
                {localStorage.getItem("username") ? (<div>{localStorage.getItem("username")} olarak giriş yapıldı. (<a className="App-link" href='#' onClick={handleLogout}>Çıkış yap.</a>)</div>) :
                    (<div><a
                        className="App-link"
                        href="/login"
                    >
                        Giriş Yap
                    </a></div>)
                }

                <a
                    className="App-link"
                    href="/"
                >
                    Ana Sayfa
                </a>
                <a
                    className="App-link"
                    href="/iletisim"
                >
                    İletişim
                </a>
            </header>
        </div>);
    }
    else {
        return (<>
            <div>
                Bu sayfaya erişebilmek için admin rolüne sahip olmanız gerekmektedir.
            </div>
            <div>
                <a href='/'>Geri dön.</a>
            </div>
        </>);
    }

}
export default Raporlar;

import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://avatars.mds.yandex.net/get-pdb/51720/9a2abcbb-cc7c-4abd-a7d8-5fbbfefe97eb/s1200' />

        <div className={s.loginBlock}>
            { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;
import React from "react";
import s from './Header.module.css'
const Header = () => {
    return (

        <header className={s.header}>
            <img alt='logo' src='https://cdn.pixabay.com/photo/2016/11/25/18/24/cat-1858951_960_720.png'/>

        </header>


    )
}

// const Header = () => {
//     return (
//         <div >
//             <a href="#">Home </a>
//             <a href="">News </a>
//             <a href="">Feed </a>
//             <a href="">Messages </a>
//         </div>
//     )
// }


export default Header;

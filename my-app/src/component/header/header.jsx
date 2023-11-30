import React from "react";
import './header.css'

export default function Header(){
    return(
        <div className="header">
            <div className="logo"> ORACLE <span> DIGITAL </span></div>
            <nav>
                <a href=""> Главная </a>
                <a href=""> О компании </a>
                <a href=""> Услуги </a>
                <a href=""> Контакты </a>     
         </nav>
         <div> Get started </div>

        </div>
    )
}
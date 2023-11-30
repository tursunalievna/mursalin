import React from "react";
import './section.css'
import Blog from "../blog/blog";
import Shkl from '../img/shkl.jpg';
import Mkl from '../img/mkl.jpg';
import Jkl from '../img/jkl.jpg';
import Der from '../img/der.jpg';

export default function Section(){
    return(
        <div className="section">
            <Blog text={'авторский метод'} color={'#5699E8'} image={Shkl}/>
            <Blog text={'онлайн обучение'} color={'#ccc'} image={Mkl}/>
            <Blog text={'авторский метод'} color={'#ccc'} image={Jkl}/>
            <Blog text={'авторский метод'} color={'#5699E8'} image={Der}/>
        </div>
    )
}
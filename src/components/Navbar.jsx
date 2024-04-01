import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
        <Link to='/' style={{margin: '10px'}}>Home</Link>         {/* Home이 제일 꼭대기로 가란뜻 */}
        <Link to='/board'>Board</Link>
        </nav>
    );
}
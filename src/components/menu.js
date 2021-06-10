import '../styles/menu.css';
import * as FaIcons from 'react-icons/fa';
import {Link } from 'react-router-dom';

export function Menu(){
    return(
        <div className="menuBar">
            <Link to="/" className="menuItem">
                <FaIcons.FaSearch className="menuIcon"/>
                <span className="menuTitle">Busca</span>
            </Link>
            <Link to="/sobre" className="menuItem">
                <FaIcons.FaInfo className="menuIcon"/>
                <span className="menuTitle">Sobre</span>
            </Link>
            <Link to="/contato" className="menuItem">
                <FaIcons.FaSearch className="menuIcon"/>
                <span className="menuTitle">Contato</span>
            </Link>
        </div>

    )
}
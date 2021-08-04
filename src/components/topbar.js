import '../styles/topbar.css';
import '../styles/menu.css';
import * as AiIcons from "react-icons/ai";
import {Link } from 'react-router-dom';
import React, {useState } from "react";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function Topbar(){
    const { t } = useTranslation();

    const [show,setShow]=useState(false)

    return(
    <div>
    <div className="Topbar">

        <AiIcons.AiOutlineMenu className="hambmenu" onClick={()=>setShow(!show)}/>

        <img className="maucLogo" src={
            process.env.PUBLIC_URL + "/assets/mauc60.png"
          }  />
    
    </div>
    
    { show?<div className="menuBar">
            <Link to="/busca" className="menuItem">
                <span className="menuTitle">{t("menuItem.1")}</span>
            </Link>
            <Link to="/sobre" className="menuItem">
                <span className="menuTitle">{t("menuItem.2")}</span>
            </Link>
            <Link to="/contato" className="menuItem">
                <span className="menuTitle">{t("menuItem.3")}</span>
            </Link>
        </div>: null}

    </div>
    
    )
}
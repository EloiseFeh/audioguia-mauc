import * as AiIcons from "react-icons/ai";
import '../styles/topbar.css';
import {Link } from 'react-router-dom';
import React, {useState } from "react";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function Topbar(){
    const { t } = useTranslation();

    return(
    <div className="Topbar">
        <AiIcons.AiOutlineMenu className="hambmenu"/>

        <img className="maucLogo" src={
            process.env.PUBLIC_URL + "/assets/mauc60.png"
          }/>

    </div>
    )
}
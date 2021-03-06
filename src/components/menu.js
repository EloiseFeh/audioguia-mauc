import '../styles/menu.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from "react-icons/ai";
import {Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function Menu(){
    const { t } = useTranslation();

    function handleClick(lang) {
      i18next.changeLanguage(lang)
    }

    return(
        <div className="menuBar">
            <Link to="/busca" className="menuItem">
                <span className="menuTitle">{t("menuItem.1")}</span>
            </Link>
            <Link to="/sobre" className="menuItem">
                <span className="menuTitle">{t("menuItem.2")}</span>
            </Link>
            <Link to="/contato" className="menuItem">
                <span className="menuTitle">{t("menuItem.3")}</span>
            </Link>
        </div>

    )
}
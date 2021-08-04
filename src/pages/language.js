import React, {useState } from "react";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Topbar from '../components/topbar';
import Menu from '../components/menu';
import '../styles/language.css';

function Language() {

    const [languageState, setLanguageState] = useState("");

    const { t } = useTranslation();

    function handleClick(lang) {
      i18next.changeLanguage(lang)
    }
    return (
      <div style={{ width: '100%'}}>

       
        

       <select className="selectLanguage" onChange={(e)=>{
           const selectedLanguage = e.target.value;
           setLanguageState(selectedLanguage);
           handleClick(selectedLanguage);
       }}
       style={{
          height: '51px', width: '80%', margin: '15vh auto', display: 'flex',
          backgroundColor: '#104466', color: '#ffffff', border: '1px solid white',
          borderRadius: '30px', padding: '0 1rem' }}>

          <option value="en">English</option>
          <option value="pt-BR">Português</option>
          <option value="es">Espanol</option>
        </select>

        <p>{languageState}</p>
        
        

      </div>
    );
  }
  
  export default Language;
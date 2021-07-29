import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import '../styles/language.css';

function Language() {

    const [languageState, setLanguageState] = useState("");

    const { t } = useTranslation();

    function handleClick(lang) {
      i18next.changeLanguage(lang)
    }
    return (
      <div style={{ width: '100%', padding: '1rem 0' }}>
       <select clasName="selectLanguage" onChange={(e)=>{
           const selectedLanguage = e.target.value;
           setLanguageState(selectedLanguage);
           handleClick(selectedLanguage);
       }} style={{height: '51px', width: '80%', margin: '0 auto'}}>
          <option value="en">English</option>
          <option value="pt-BR">Português</option>
          <option value="es">Espanol</option>
        </select>
        
        

      </div>
    );
  }
  
  export default Language;
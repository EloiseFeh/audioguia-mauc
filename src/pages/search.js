import '../styles/search.css';
import ReactSearchBox from 'react-search-box';
import {useHistory} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Information from '../filter-json';

export default function Search(){

  const history = useHistory(); 
  function handleClickAudio(item) {
    history.push( `/audio/${item.key}`, { item });
  }

    const { t } = useTranslation();

    function handleClick(lang) {
      i18next.changeLanguage(lang)
    }

  
    return(
    <div>
      <nav style={{ width: '100%', padding: '1rem 0', backgroundColor:'gray' }}>
          <button onClick={()=>handleClick('en')} >
            English
          </button>
          <button onClick={()=>handleClick('pt-BR')} >
            Português
          </button>
          <button onClick={()=>handleClick('es')} >
            Espanol
         </button>
        </nav>

        <div className="container">
          <h2>{t("PageTitle.1")}</h2>

          <div className="search-box" >
            <ReactSearchBox
              placeholder={t("placeholderSearch.1")}
              value= ""
              data = { Information }
              callback = {record => console.log(record)}
              onSelect = { (event) => handleClickAudio(event) }
            />
          </div>

      </div>
      
    </div>
    )
}
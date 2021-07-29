import '../styles/search.css';
import ReactSearchBox from 'react-search-box';
import {useHistory} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Information from '../filter-json';
import './language';

export default function Search(){

  const history = useHistory(); 
  function handleClickAudio(item) {
    history.push( `/audio/${item.key}`, { item });
  }

    const { t } = useTranslation();

  
    return(
    <div>
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
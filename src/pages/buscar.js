import '../styles/buscar.css';
import ReactLanguageSelect from 'react-languages-select';
import 'react-languages-select/css/react-languages-select.css';
import ReactSearchBox from 'react-search-box';
import {useHistory} from 'react-router-dom';

import Information from '../filter-json';

export default function Buscar(){

    const history = useHistory(); 
    function handleClick(item) {
      history.push( `/audio/${item.key}`, { item });
    }
    return(
    <div>
        <h2>pesquisa page</h2>

        <ReactLanguageSelect defaultLanguage="pt" />

        <div className="SearchBox">
        <ReactSearchBox
          placeholder="Insira o nome da obra"
          value= ""
          data = { Information }
          callback = {record => console.log(record)}
          onSelect = { (event) => handleClick(event) }
         />

        </div>
    </div>
    )
}
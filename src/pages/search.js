import '../styles/search.css';
import ReactSearchBox from 'react-search-box';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import React, { useState, useEffect } from 'react';
// import Information from '../filter-json';
import '../api';
import axios from 'axios';
import './language';
import { fetchGuides } from '../api';

export default function Search() {
  const [Information, setInformation] = useState([]);
  const [initialized, setInitialized] = useState(false);

  function treatArrayToSearchBox(arr) {
    arr = arr.map(item => {
      item.key = item.id
      item.value = item.name
      return item
    })
    return arr
  }

  async function fetchData() {
    await fetchGuides()
      .then(res => treatArrayToSearchBox(res))
      .then(arr => setInformation(arr))
  }

  useEffect(() => {
    if (!initialized) {
      fetchData()
      setInitialized(true)
    }
  });


  const history = useHistory();
  function handleClickAudio(item) {
    history.push(`/audio/${item.name}`, { item });
  }

  const { t } = useTranslation();

  return (
    <div>
      <div className="container" style={{ marginTop: '15vh' }}>
        <p> hello world</p>
        <div className="search-box" >
          <ReactSearchBox
            placeholder={t("placeholderSearch.1")}
            value=""
            data={Information}
            callback={record => console.log(record)}
            onSelect={(event) => handleClickAudio(event)}
            style={{}}
          />
        </div>
      </div>

    </div>
  )
}
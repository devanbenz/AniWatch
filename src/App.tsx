import React, { useEffect, useState } from 'react';
import * as AnimeSvc from './services/AniSVC'; 


function App() {
  const [searchResults, setSearch] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    (async() => {
      const getall = await AnimeSvc.getAnime(title);
      if(getall){
        const aniObj = await getall.json();
        setSearch(aniObj.data.documents)
      }
    })();
  },[title])


  const newAnimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  return (
    <div>
      <input value={title} onChange={newAnimeChange} />
      {
        searchResults.length > 50 ? 
        <h2>More than 50 results</h2> :
        <div>
          <p>Amount of results: {searchResults.length}</p>
          {searchResults.map((x:any) =>
            <div> 
              <h2 key={x.anilist_id}>{x.titles.en}</h2>
              <img alt='cover' src={x.cover_image} />
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default App;
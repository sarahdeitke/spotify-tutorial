import './App.css';
import { useEffect, useState } from 'react';
import { Track } from './track/Track.js';
import topHits from "./data/todaysTopHits.json";
import { PlayButton } from './playButton/PlayButton';

function App() {
  const hits = topHits.tracks.items;
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // setSelectedIndex(11);
    const shuffle = Math.floor(Math.random() * 11);
    setSelectedIndex(shuffle);
  }, []);

  return (
    <div>
      <PlayButton/>
      {hits.map((x, i) => {
          const name = x.track.name;
          const artist = x.track.artists[0].name;
          const cover = x.track.album.images[2].url;
          const album = x.track.album.name;

          return (
            <div key={i} onClick={() => setSelectedIndex(i)}>
              <Track
                name={name}
                artist={artist}
                cover={cover}
                album={album}
                isSelected={selectedIndex === i}
              />
            </div>
        )
      })
      }
    </div>
  );
}

export default App;

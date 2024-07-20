import React from 'react';
import MusicTile from '../../common/MusicTile/MusicTile';
import styles from './Home.module.css';

interface Song {
  title: string;
  artist: string;
  album: string;
  image: string;
  release_date: string;
  genre: string;
  artist_id: number;
  url: string;
}

interface HomeProps {
  searchResults: Song[];
  setCurrentSongLink: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<HomeProps> = ({ searchResults, setCurrentSongLink }) => {
  const initialContent = (
    <div>
      <h1>Welcome to the Music App</h1>
      <p>Use the search bar above to find your favorite songs!</p>
      {/* You can add more initial content here */}
    </div>
  );
  console.log(searchResults);

  return (
    <div className={styles.container}>
      <div className={styles.titles}>
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((song, index) => (
            <MusicTile
              key={index}
              title={song.title}
              artist={song.artist}
              imageSrc={song.image}
              song_link={song.url}
              setCurrentSongLink={setCurrentSongLink} // Pass the function here
            />
          ))
        ) : (
          initialContent
        )}
      </div>
    </div>
  );
};

export default Home;

import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import './ArtistDetail.css';
class ArtistDetail extends Component {

render() {
    console.log("Detail page props: ", this.props);
    console.log("Detail page artists*2: ", this.props.artists);
    const selectedArtist = this.props.artists[this.props.match.params.id-1]
    const artistSongs = selectedArtist.Songs.map((song) => {
        return (
          <li key={song.id}>
              {song.title}
          </li>
        );
      });

    return (
        <div>
           <h1> Artist Detail </h1>
           {artistSongs}
        </div>

        )
    }
}

export default ArtistDetail;
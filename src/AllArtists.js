import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllArtists extends Component {
  render() {

    console.log("Artists page props: ", this.props.artists);
    const allArtists = this.props.artists.map(artist => {
    console.log("Songs",artist.Songs);
      return (
        <li key={artist.id}>
          <Link to={`/artists/${artist.id}`}>{artist.name} </Link>
        </li>
      )
     }
   ); 
  return (
      <div>
        <h1>All Artists</h1>
        <ul>{allArtists}</ul>
      </div>
    );
  }
}

export default AllArtists;
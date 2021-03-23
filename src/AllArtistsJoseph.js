import './AllArtists.css';
import React from 'react';
import { Link } from 'react-router-dom';
export default function AllArtists(props) {
    const artists = props.artists.map(artist => {
        console.log('Songs ', artist.Songs);
        return <li key={artist.id}><Link to={`/artists/${artist.id}`}>{artist.name}</Link></li>
    });
    return (
        <section className='AllArtists'>
            <h1>All Artists</h1>
            <form onSubmit={(e) => props.createArtists(e)}>
                <input placeholder='name' name='name' />
            </form>
            <ul>{artists}</ul>
        </section>
    );
}
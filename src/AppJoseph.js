import "./App.css";
import React, { Component } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import AllArtists from '../AllArtists/AllArtists';
import ArtistDetail from '../ArtistDetail/ArtistDetail';
import axios from 'axios';
class App extends Component {
  constructor() {
    super();
    this.artistsBaseUrl =  'http://localhost:3000/api/artists';
    this.state = {
      artists: []
    }
  }
  async getAllArtists() {
    const response = await axios.get(this.artistsBaseUrl);
    this.setState({ artists: response.data.artists });
    console.log(this.state.artists)
  }
  async componentDidMount() {
    await this.getAllArtists()
  }
  addArtist = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    await axios.post(this.artistsBaseUrl, { name });
    await this.getAllArtists()
  }
  async addSong(id, data) {
    await axios.post(`${this.artistsBaseUrl}/${id}/newsong`, data);
  }
  render() {
    return (
      <div className="App">
        <nav className='App-nav'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/artists'>Artists</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/'>
            <h1>Welcome to muse!</h1>
          </Route>
          <Route exact path='/artists'>
            <AllArtists artists={this.state.artists} createArtists={this.addArtist} />
          </Route>
          <Route path='/artists/:id'>
            <ArtistDetail />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default App;
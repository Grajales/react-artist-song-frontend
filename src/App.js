import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import Homepage from './Homepage';
import AllArtists from './AllArtists';
import ArtistDetail from './ArtistDetail';

class App extends Component {
  //to manage the state, need to have a constructor
  constructor(props) {
    super(props)
    this.state = {
      artists: [],
    }
  }

  componentDidMount = () => {
    
    //  let getURL = 'https://muse-backend.herokuapp.com/';
     let getURL = 'http://localhost:3000/api/artists';
     
     axios.get(getURL).then(response => {
        console.log("App response: ", response.data);
     
        this.setState({
          artists: response.data.artists
        })
      }) 
      .catch(error => {
        console.log('look here', error)
      })
  }

  render() {
    console.log("showing state",this.state)
    console.log("showing state artists",this.state.artists)
    
    return (
      <div className="App">
        <main>

          <Header></Header>

           <Switch>
            
          <Route exact path='/'
              render={(props) =>
                <Homepage {...this.state} />
              }>
            </Route>

            <Route exact path='/artists'
              render={(props) =>
                <AllArtists {...this.state} />
              }>
            </Route>
             
            <Route path='/artists/:id'
              render={(routerProps) =>
                <ArtistDetail {...routerProps} artists={this.state.artists}
                addSong={this.addSong} />
              }>

            </Route>
          </Switch> 

        </main >
        {/* <Footer></Footer> */}
      </div >
    );
  }
}

export default App;

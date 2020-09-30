import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import MyData from './MyData';
import styled from 'styled-components';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      myFollowers: [],
      followersToggled: false,
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/starullo')
    .then(res=>{
      this.setState({
        myData: res.data,
      });
    });
    axios.get('https://api.github.com/users/starullo/followers')
    .then(data=>{
      this.setState({
        myFollowers: data.data
      });
    });



  };

  toggleFollowers = e => {
    if (this.state.followersToggled) {
      this.setState({
        followersToggled: false,
      })
    } else {
      this.setState({
        followersToggled: true,
      })
    }
  }

  render() {
    return(
      <MyData toggleFollowers={this.toggleFollowers} state={this.state}/>
    )
  }
}

export default App;

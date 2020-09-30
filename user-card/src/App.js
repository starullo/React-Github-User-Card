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
      myFollowersUrls: [],
      myFollowersData: [],
      followersToggled: false,
    }
  }

  componentDidMount() {
this.getData();
};

getData = async () => {
  await axios.get('https://api.github.com/users/starullo')
  .then(res=>{
    this.setState({
      myData: res.data,
    })
  });
  await axios.get('https://api.github.com/users/starullo/followers')
  .then(res=>{
    this.setState({
      myFollowersUrls: res.data.map(obj=>{
        return obj.login
      })
    });
    return this.state.myFollowersUrls
  })
  .then(urls=>{
    urls.forEach(url=>{
      axios.get(`https://api.github.com/users/${url}`)
      .then(res=>{
        console.log(res)
        this.setState({
          myFollowersData: [...this.state.myFollowersData, res.data]
        })
      });
    })
    })
}
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

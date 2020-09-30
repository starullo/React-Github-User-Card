import React from 'react';
import Follower from'./Follower';
import styled from 'styled-components';


const MyInfo = styled.div`
background-color: lightskyblue;
text-align: center;
color: black;
padding-top: 1%;
`

const TitleSpan = styled.span`
font-weight: bold;
`

const Button = styled.button`
padding: 1%;
font-family: arial;
background-color: darkblue;
color: white;
font-size: 1rem;
margin-bottom: 1%;
border-radius: 20px;
`

const MyData = (props) => {
    const {avatar_url, html_url, name, location, bio, followers, following} = props.state.myData;
    return (
        <>
            <MyInfo>
                <img style={{border: 'solid darkgray 4px'}} height='200' width='200' src={avatar_url} />
                <h2>{name}</h2>
                <h5>{html_url}</h5>
                <p><TitleSpan>Location:</TitleSpan> {location}</p>
                <p><TitleSpan>Bio:</TitleSpan> {bio}</p>
                <p><TitleSpan>Followers:</TitleSpan> {followers}</p>
                <p><TitleSpan>Following:</TitleSpan> {following}</p>
                <Button onClick={props.toggleFollowers}>{props.state.followersToggled ? 'Hide Followers' : 'See Followers'}</Button>
            </MyInfo>
            {props.state.followersToggled && 
            <div style={{display: 'flex', flexWrap: 'wrap', backgroundColor: 'lightskyblue', justifyContent: 'space-around', alignContent: "space-between"}}>
                {props.state.myFollowersData.map(follower=>{
                    console.log(follower)
                    return (
                        <Follower followerData={follower} key={follower.id} />
                    )
                })}
            </div>
            }
        </>
    )
}

export default MyData

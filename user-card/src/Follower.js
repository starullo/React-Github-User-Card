import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledFollower = styled.div`
width: 30%;
border: solid 4px darkgray;
margin: 1% auto;
`

const TitleSpan = styled.span`
font-weight: bold;
`

const Follower = (props) => {
const {avatar_url, name, html_url, location, bio, followers, following} = props.followerData;

    return (
        <StyledFollower style={{textAlign: 'center'}}>
            <img style={{border: 'solid darkgray 4px'}} height='200' width='200' src={avatar_url} />
            <h2>{name}</h2>
            <h5>{html_url}</h5>
            {location && <p><TitleSpan>Location:</TitleSpan> {location}</p>}
            {bio && <p><TitleSpan>Bio:</TitleSpan> {bio}</p>}
            <p><TitleSpan>Followers:</TitleSpan> {followers}</p>
            <p><TitleSpan>Following:</TitleSpan> {following}</p>

        </StyledFollower>
    )
}

export default Follower

import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledFollower = styled.div`
width: 30%;
border: solid 4px darkgray;
margin: 1% auto;

`

const Follower = (props) => {
const {avatar_url, name, html_url, location, bio, followers, following} = props.followerData;

    return (
        <StyledFollower style={{textAlign: 'center'}}>
            <img height='200' width='200' src={avatar_url} />
            <h2>{name}</h2>
            <h5>{html_url}</h5>

        </StyledFollower>
    )
}

export default Follower

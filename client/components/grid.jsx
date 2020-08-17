import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageGrid = styled.div`
position: absolute;
display: grid;
overflow-y: scroll;
grid-template-columns: repeat(auto-fill, minmax(300px, 2fr));
width: 90%;
grid-gap: 5px;
height: auto;
background-color: rgba(0, 0, 0, 0.8);
left: 50%;
top: 13%;
transform: translate(-50%);
`;

const Modal = styled.div`
position: fixed;
z-index: 2;
left: 0%;
top: 0%;
transform: translate:(0, 0);
padding-top: 30px;
overflow-y: auto;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.95);
`;

const Pic = styled.img`
max-width: 100%;
height: auto;
cursor: pointer;
`;

const RestaurantName = styled.div`
position: absolute;
font-family: Roboto, "Helvetica Neue", sans-serif;
color: white;
left: 50%;
z-index: 2;
height: auto;
font-weight: bold;
`;

const TopBar = styled.div`
position: fixed;
margin-bottom: 40px;
width: 100%;
z-index: 3;
display: block;
`;

const CloseButton = styled.span`
position: fixed;
z-index: 2;
right: 5%;
color: white;
border-color: rgba(0,0,0,1);
display: flex;
justify-content: center;
align-items: center;
font-size: 30px;
font-family: "Lucida Sans Unicode", "Arial Unicode MS";
cursor: pointer;
border: 1px hidden;
width: 40px;
height: 40px;
border-radius: 50%;
background-color: rgba(0,0,0,1);
&:hover{
  color: rgba(0,0,0,1);
  background-color: white;
  border-color: white;
}
`;

const GridModal = (props) => {
  if (props.displayGridModal) {
    return <Modal>
      <TopBar>
        <RestaurantName> {props.name} </RestaurantName>
        <CloseButton onClick={props.closeGridModal}>{props.closeSymbol}</CloseButton>
      </TopBar>
      <ImageGrid >
        {props.photoArray.map((photo, i) => <Pic src={photo.Image_url}
          onClick={() => { props.openCarousel(photo.Image_id); }} key={i} />)}
      </ImageGrid>
    </Modal>;
  }
  return null;
};

export default GridModal;

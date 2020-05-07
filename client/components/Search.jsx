import React from 'react';
import styled from 'styled-components';

const Icon = styled.i`
  background-image: url(https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIIcon-sprite_1x-e9434610f810a3a99b3f0e49c1b938c9d76628b8._V2_.png);
  background-position-x:-271px;
  background-position-y:-86px;
  height:13px;
  left:10px;
  line-height:19px;
  opacity:0.55;
  position:absolute;
  width:13px;
  top: 30%;
`;
const SearchWrapper = styled.div`
  width: 800px;
  margin-bottom:10px;
  margin-top:14px;
`;

const Input = styled.input`
background-color:rgb(255, 255, 255);
border-bottom-color:rgb(166, 166, 166);
border-bottom-left-radius:3px;
border-bottom-right-radius:3px;
border-bottom-style:solid;
border-bottom-width:1px;
border-image-outset:0px;
border-image-repeat:stretch;
border-image-slice:100%;
border-image-source:none;
border-image-width:1;
border-left-color:rgb(166, 166, 166);
border-left-style:solid;
border-left-width:1px;
border-right-color:rgb(166, 166, 166);
border-right-style:solid;
border-right-width:1px;
border-top-color:rgb(148, 148, 148);
border-top-left-radius:3px;
border-top-right-radius:3px;
border-top-style:solid;
border-top-width:1px;
box-shadow:rgba(255, 255, 255, 0.5) 0px 1px 0px 0px, rgba(0, 0, 0, 0.07) 0px 1px 0px 0px inset;
box-sizing:border-box;
color:rgb(17, 17, 17);
cursor:text;
display:inline-block;
float:none;
font-family:"Amazon Ember", Verdana, Arial, Helvetica, sans-serif;
font-size:13px;
font-stretch:100%;
font-style:normal;
font-variant-caps:normal;
font-variant-east-asian:normal;
font-variant-ligatures:normal;
font-variant-numeric:normal;
font-weight:400;
height:31px;
letter-spacing:normal;
line-height:normal;
margin-bottom:0px;
margin-left:0px;
margin-right:0px;
margin-top:0px;
outline-color:rgb(17, 17, 17);
outline-style:none;
outline-width:0px;
overflow-wrap:break-word;
padding-bottom:3px;
padding-left:29px;
padding-right:25px;
padding-top:3px;
text-align:start;
text-indent:0px;
text-rendering:auto;
text-shadow:none;
text-size-adjust:100%;
text-transform:none;
transition-delay:0s;
transition-duration:0.1s;
transition-property:all;
transition-timing-function:linear;
vertical-align:middle;
width:800px;

&:focus {
  background-color:rgb(255, 255, 255);
border-bottom-color:rgb(231, 118, 0);
border-bottom-left-radius:3px;
border-bottom-right-radius:3px;
border-bottom-style:solid;
border-bottom-width:1px;
border-image-outset:0px;
border-image-repeat:stretch;
border-image-slice:100%;
border-image-source:none;
border-image-width:1;
border-left-color:rgb(231, 118, 0);
border-left-style:solid;
border-left-width:1px;
border-right-color:rgb(231, 118, 0);
border-right-style:solid;
border-right-width:1px;
border-top-color:rgb(231, 118, 0);
border-top-left-radius:3px;
border-top-right-radius:3px;
border-top-style:solid;
border-top-width:1px;
box-shadow:rgba(228, 121, 17, 0.5) 0px 0px 3px 2px;
box-sizing:border-box;
color:rgb(17, 17, 17);
cursor:text;
display:inline-block;
float:none;
font-family:"Amazon Ember", Verdana, Arial, Helvetica, sans-serif;
font-size:13px;
font-stretch:100%;
font-style:normal;
font-variant-caps:normal;
font-variant-east-asian:normal;
font-variant-ligatures:normal;
font-variant-numeric:normal;
font-weight:400;
height:31px;
letter-spacing:normal;
line-height:normal;
margin-bottom:0px;
margin-left:0px;
margin-right:0px;
margin-top:0px;
outline-color:rgb(17, 17, 17);
outline-offset:0px;
outline-style:none;
outline-width:0px;
overflow-wrap:break-word;
padding-bottom:3px;
padding-left:29px;
padding-right:25px;
padding-top:3px;
text-align:start;
text-indent:0px;
text-rendering:auto;
text-shadow:none;
text-size-adjust:100%;
text-transform:none;
transition-delay:0s;
transition-duration:0.1s;
transition-property:all;
transition-timing-function:linear;
vertical-align:middle;
width:800px;
}
`;
const InnerDiv = styled.div`
  position:relative;
`;

const Search = (props) => {
  return (
    <SearchWrapper>
      <form className="search-container">
        <InnerDiv>
          <Icon />
          <Input type="text" id="search-bar" placeholder="Have a question? Search for answers" />
        </InnerDiv>
      </form>
    </SearchWrapper>
  );
};

export default Search;

import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";

const fadeInTop = keyframes`
{
	0%
	{
		transform: translateY(-50px);
	}
	100%
	{
		transform: translateY(0);
		opacity: 1;
	}
}
`;

const StyledLi = styled.li`
  position: relative;
  list-style: none;
  margin: 0px 10px;
  @media (min-width: 1000px) {
    opacity: 0;
    animation: ${fadeInTop} 0.5s linear forwards;
    &:nth-child(1) {
      animation-delay: 1s;
    }
    &:nth-child(2) {
      animation-delay: 1.25s;
    }
    &:nth-child(3) {
      animation-delay: 1.5s;
    }
  }
`;

const StyledLink = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0px 10px 0 10px;
  height: 40px;
  overflow: hidden;
  font-size: 30px;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1px;
  /* letter-spacing: 2px; */
  color: #fff;
  text-decoration: none;
  transition: 0.5s;
  span {
    width: 100%;
    height: 100%;
    transition: 0.5s;
  }
  @media (max-width: 1000px) {
    font-size: 1.5em;
    height: 50px;
    padding: 0px;
    font-weight: 400;
    margin: 15px 0;
  }
  @media (max-width: 260px) {
    font-size: 1em;
    height: 35px;
  }
  :hover,
  &.active {
    span:nth-child(1) {
      transform: translateY(-100%);
    }
    span:nth-child(2) {
      transform: translateY(-100%);
      -webkit-text-fill-color: #ffd000;
    }
  }
`;

const MenuElement = ({ active, title, callback }) => (
  <StyledLi className={`navigation`}>
    <StyledLink
      className={active}
      title={title}
      onClick={(e) => {
        e.preventDefault();
        callback();
      }}
    >
      <span>{title}</span>
      <span style={{ color: "#ffd000" }}>{title}</span>
    </StyledLink>
  </StyledLi>
);

export default MenuElement;

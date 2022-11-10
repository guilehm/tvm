import Link from "next/link"
import styled from "styled-components"

export const Footer = styled.footer`
  color: rgba(255, 255, 255, 0.75);
  background-color: black;

  & h5 {
    color: white;
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 1.17rem;
  }

  & section p {
    font-size: 0.8rem;
  }

  & section a {
    font-size: 0.8rem;
    color: white;
  }
`

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 20px 10px;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    width: 90vw;
  }
`

export const Section = styled.section`
  max-width: 200px;
`

export const Rights = styled.section`
  text-transform: lowercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  margin-top: 20px;
  padding-bottom: 40px;

  & h5 {
    margin: 0px;
    font-size: 0.83rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.5);
  }

  & a {
    color: white;
    margin-left: 3px;
  }
`

export const Email = styled.p`
  margin-bottom: 3px;
`

export const About = styled.h5`
  margin-top: 20px;
`

export const StyledLink = styled(Link)`
  display: block;
`

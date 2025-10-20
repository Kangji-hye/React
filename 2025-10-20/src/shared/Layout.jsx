import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <HeaderWrap>
            <h3>Goorm React</h3>
             <button onClick={()=>{navigate("/");}}>Home</button>
             <button onClick={()=>{navigate("/about");}}>About</button>
             <button onClick={()=>{navigate("/works");}}>Works</button>
             <button onClick={()=>{navigate("/contact");}}>Contact</button>
        </HeaderWrap>
    )
};

const Footer = () => {
    return (
        <FooterWrap>
            copyright @SCC
        </FooterWrap>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column; 
    min-height: 100vh;
    margin:0;
`;

const HeaderWrap = styled.div`
    height:100px;
    padding:10px;
    background: black;
    color: white;
`;

const Main = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FooterWrap = styled.div`
    height:50px;
    padding:10px;
    background: black;
    color: white;
`;

const Layout = ({ children }) => {
  return (
    <div>
        <Container>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Container>
    </div>
  )
}

export default Layout
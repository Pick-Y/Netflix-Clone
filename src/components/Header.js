import styled  from "styled-components"
import Navbar from "./Navbar"

const HeaderContainer = styled.div`
display: flex;
flex-direcion: row;
background-color: #0c0c0c;
height: 100%;
width: 100%;
`
const Header = () => {

    return (

        <>
        <HeaderContainer>
            <Navbar></Navbar>
        </HeaderContainer>

      
        
        </>
    )
}

export default Header;
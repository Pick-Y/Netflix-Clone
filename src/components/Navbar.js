import styled  from "styled-components"
import netflixLogo from '../assets/netflixLogo.png';



const NavContainer = styled.div`

 color: white;
 

`

const Logo = styled.img`

width: 130px;
height: 50px;

`

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;

`
const Li = styled.li`
list-style: none;
margin-right: 2rem;
color: white;
`

const  Navbar = () => {


    return (        

        <>
        
           
            
            <Ul>
                <Li><Logo src={netflixLogo} alt="logo"></Logo></Li>
                <Li>Home</Li>
                <Li>TV Shows</Li>
                <Li>Movies</Li>
                <Li>New & popular</Li>
                <Li>My list</Li>
                <Li>Browse by Languages</Li>


            </Ul>
            
       
    


        </>
    )
}

export default Navbar;
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #d3ddf0;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.img`
  height: 40px;
`;

const Nav = styled.nav`
  a {
    color: #0077cc;
    margin: 0 10px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Header({ logo }) {
    return (
        <StyledHeader>
            <Logo src={logo} alt='logo' />
            <h1>My Portfolio</h1>
            <Nav>
                <RouterLink to='/'>About me</RouterLink>
                <RouterLink to='/projects'>Projects</RouterLink>
            </Nav>
        </StyledHeader>
    );
}

export default Header;
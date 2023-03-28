import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import logo from "../../assets/dark-logo.png";

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color:white; border-radius:30px; background-color: ${colors.primary};`}
`;
function Header() {
  return (
    <div>
      <img src="{logo}" />
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
        <StyledLink to="/freelances">Freelances</StyledLink>
      </nav>
    </div>
  );
}

export default Header;

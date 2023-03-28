import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">Accueil</Link>
      <Link to="/survey/42">Questionnaire</Link>
    </div>
  );
}

export default Header;

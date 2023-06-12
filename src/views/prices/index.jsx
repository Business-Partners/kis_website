import { Link } from "react-router-dom";
import { ContainerHeading } from "../styles";
import { PriceCard, PriceContainer } from "./styles";

function Prices() {
  return (
    <PriceContainer id="prices">
      <ContainerHeading type="white"> Preços </ContainerHeading>

      <ul>
        <PriceCard>
          <div>
            <strong> Básico </strong>

            <h3>
              25.000,00 <span> Kzs </span>
            </h3>

            <p> por mês </p>
          </div>

          <ul>
            <li> 10 GB Em Disco </li>
            <li> 10+ Funcionários </li>
            <li> 15+ Crianças </li>
            <li> 5+ Turmas </li>
            <li> App Desktop </li>
          </ul>

          <Link to="/buy"> Escolher o Plano </Link>
        </PriceCard>

        <PriceCard>
          <div>
            <strong> Básico </strong>

            <h3>
              25.000,00 <span> Kzs </span>
            </h3>

            <p> por mês </p>
          </div>

          <ul>
            <li> 10 GB Em Disco </li>
            <li> 10+ Funcionários </li>
            <li> 15+ Crianças </li>
            <li> 5+ Turmas </li>
            <li> App Desktop </li>
          </ul>

          <Link to="/buy"> Escolher o Plano </Link>
        </PriceCard>

        <PriceCard>
          <div>
            <strong> Básico </strong>

            <h3>
              25.000,00 <span> Kzs </span>
            </h3>

            <p> por mês </p>
          </div>

          <ul>
            <li> 10 GB Em Disco </li>
            <li> 10+ Funcionários </li>
            <li> 15+ Crianças </li>
            <li> 5+ Turmas </li>
            <li> App Desktop </li>
          </ul>

          <Link to="/buy"> Escolher o Plano </Link>
        </PriceCard>
      </ul>
    </PriceContainer>
  );
}

export default Prices;

import { ContainerHeading } from "../styles";
import { AboutContainer } from "./styles";

function About() {
  return (
    <AboutContainer id="about">
      <ContainerHeading>Sobre </ContainerHeading>

      <div>
        <div>
          <p>
            O KIS, kindergarten Integrated System surgiu com o objectivo de
            facilitar todos processos administrativos, estatísticos e
            financeiros das instituições infantis, pois são instituições com
            alguma demanda, o que dificulta muito a gerência dos mesmos.
          </p>
          <p>
            Sabe se também que tais instituições limitam se apenas no sistema de
            gerencia e faturação, deixando que outros processos necessários
            sejam processados de uma maneira menos prática.
          </p>

          <p>
            O KIS é um sistema integrado criado, pensado e desenvolvido por 3
            jovens na fase final do ensino médio, com objetivo de disponibilizar
            o mesmo no mercado e tornar possível a informatização praticidade na
            gerencia e no contacto dos encarregados com a instituição.
          </p>
        </div>

        <div>
          <img
            src="https://img.freepik.com/fotos-gratis/adoraveis-criancas-negras-africanas_23-2149219997.jpg?w=740&t=st=1677077463~exp=1677078063~hmac=e5d2f16025d3a2370737d70678ea8e60cb3af74d4f9ded43c5b3fd996b8f6d04"
            alt="Kis About Picture"
          />
        </div>
      </div>
    </AboutContainer>
  );
}

export default About;

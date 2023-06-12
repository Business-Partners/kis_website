import { ContainerHeading } from "../styles";
import {
  ContactsContainer,
  FormContainer,
  ContactsTag,
  ContactsContent,
} from "./styles";

function Contacts() {
  return (
    <ContactsContainer id="contacts">
      <ContainerHeading> Contacts </ContainerHeading>
      <div>
        <FormContainer>
          <h3>Entre em contacto connosco</h3>
          <input type="text" placeholder="Insira o seu nome" />
          <input type="email" placeholder="Insira o seu email" />
          <textarea
            name=""
            id=""
            cols="20"
            rows="4"
            placeholder="Escreva aqui a sua mensagem"
          ></textarea>
        </FormContainer>
        <ContactsTag>
          <ContactsContent>
            <h2>Email</h2>
            <span>joelpitra44@mail.com</span>
            <span>josanasilva1105@gmal.com</span>
            <span>marioteixeiravarela@gmail.com</span>
          </ContactsContent>
          <ContactsContent>
            <h2>Número de telefone</h2>
            <span>+244 940 541 416</span>
            <span>+244 934 157 192</span>
            <span>+244 946 506 875</span>
          </ContactsContent>
          <ContactsContent>
            <h2>Endereço</h2>
            <span>Luanda, Ingombota</span>
          </ContactsContent>
        </ContactsTag>
      </div>
    </ContactsContainer>
  );
}

export default Contacts;

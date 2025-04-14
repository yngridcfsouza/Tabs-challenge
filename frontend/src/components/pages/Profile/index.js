import { Container } from './styles';

import ProfileForm from "../../ProfileForm";
import Home from "../Home";

export default function Profile() {
  return (
    <Container>
      <Home />

      <strong>Meu perfil</strong>

      <ProfileForm buttonLabel={'Editar perfil'}>

      </ProfileForm>
    </Container>
  );
}

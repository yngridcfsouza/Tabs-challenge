import FormGroup from "../FormGroup";
import { Form, ButtonContainer } from "./styles";

import Input from "../Input";
import Button from "../Button";
import Select from "../Select";

export default function ProfileForm() {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome"></Input>
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail"></Input>
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone"></Input>
      </FormGroup>

      <FormGroup>
        <Select>
          <option value=''>Gênero</option>
          <option value='Feminino'>Feminino</option>
          <option value='Masculino'>Masculino</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">Alterar perfil</Button>
      </ButtonContainer>
    </Form>

  );
}

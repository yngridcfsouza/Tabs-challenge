import { useState } from "react";

import FormGroup from "../FormGroup";
import { Form, ButtonContainer } from "./styles";

import Input from "../Input";
import Button from "../Button";
import Select from "../Select";

export default function ProfileForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      name, email, phone, gender,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          value={name}
          placeholder="Nome"
          onChange={handleNameChange}
         />
      </FormGroup>

      <FormGroup>
        <Input
          value={email}
          placeholder="E-mail"
          onChange={handleEmailChange}
         />
      </FormGroup>

      <FormGroup>
        <Input
          value={phone}
          placeholder="Telefone"
          onChange={(event) => setPhone(event.target.value)}
         />
      </FormGroup>

      <FormGroup>
        <Select
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
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

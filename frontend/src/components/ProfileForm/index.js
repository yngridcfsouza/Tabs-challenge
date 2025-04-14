import { useState } from "react";
import PropTypes from "prop-types";

import FormGroup from "../FormGroup";
import { Form, ButtonContainer } from "./styles";

import Input from "../Input";
import Button from "../Button";
import Select from "../Select";

import useErrors from "../../hooks/useErrors";

export default function ProfileForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  const [isNameFocused, setIsNameFocused] = useState(false);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field:'name', message:'O campo nome é obrigatório!'});
    } else {
      removeError('name');
    }
  }

  /* falta validar o email */
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
      <FormGroup error={getErrorMessageByFieldName('name')} isFocused={isNameFocused}>
        <Input
          value={name}
          placeholder="Nome"
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
          onFocus={() => setIsNameFocused(true)}
          onBlur={() => setIsNameFocused(false)}
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
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>

  );
}

ProfileForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}

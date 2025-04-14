import { useState } from "react";
import PropTypes from "prop-types";

import useErrors from "../../hooks/useErrors";
import isEmailValid from "../../utils/isEmailValid";

import FormGroup from "../FormGroup";
import { Form, ButtonContainer } from "./styles";

import Input from "../Input";
import Button from "../Button";
import Select from "../Select";

export default function ProfileForm({ buttonLabel }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field:'name', message:'O campo nome é obrigatório!'});
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field:'email', message:'O formato do e-mail é inválido!'});
    } else {
      removeError('email');
    }
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

      <FormGroup error={getErrorMessageByFieldName('email')} isFocused={isEmailFocused}>
        <Input
          value={email}
          placeholder="E-mail"
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
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

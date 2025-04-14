import PropTypes from "prop-types";

import { Container } from "./styles";

export default function FormGroup({ children, error, isFocused }) {
  return (
    <Container>
      {children}
      {error && isFocused && <small>{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  isFocused: PropTypes.bool,
}

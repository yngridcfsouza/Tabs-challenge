import { Link } from 'react-router-dom';

import { Container, Header, NavLinks } from './styles';

export default function Home() {
  return (
    <Container>
      <Header>
        <NavLinks>
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/notifications">Notifications</Link>
        </NavLinks>
      </Header>
    </Container>
  )
}

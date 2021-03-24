import React from 'react';
import { styled, useStyletron } from 'styletron-react';
import NavBar from '../components/NavBar'
// statically styled component
const Title = styled('h1', {
  color: 'red',
  fontSize: '82px',
});

// dynamically styled component
const SubTitle = styled('h2', (props: { $size: number }) => ({
  color: 'blue',
  fontSize: `${props.$size}px`,
}));

const Home: React.FC = function () {
  // an alternative hook based API
  const [css] = useStyletron();
  return (
    <React.Fragment>
      <NavBar  />
      <Title>Title</Title>
      <SubTitle $size={50}>Subtitle</SubTitle>
      <p className={css({ fontSize: '32px' })}>Styled by hook</p>
    </React.Fragment>
  );
};

export default Home;

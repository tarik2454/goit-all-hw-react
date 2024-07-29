import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

export const Loader = ({ component }) => {
  return (
    <StyledLoaderWrapper component={component}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </StyledLoaderWrapper>
  );
};

const StyledLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.component === 'Suspense' ? '600px' : '100vh')};
`;

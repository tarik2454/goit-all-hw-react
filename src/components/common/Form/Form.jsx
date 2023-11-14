import styled from 'styled-components';

export const Form = ({ as: FormElement = 'input', ...props }) => {
  const StyledFormElement =
    FormElement === 'input'
      ? StyledInput
      : FormElement === 'textarea'
      ? StyledTextarea
      : null;

  return StyledFormElement ? <StyledFormElement {...props} /> : null;
};

const StyledInput = styled.input`
  display: block;
  width: 100%;
  max-width: ${props => props.$maxWidth || ''};
  margin-bottom: ${props => props.$marginBottom || '4px'};
  padding: ${props => props.$padding || '14px 12px'};
  font-size: ${props => props.$fontSize || '16px'};
  font-weight: ${props => props.$fontWeight || '400'};
  line-height: ${props => props.$lineHeightt || '20px'};
  color: ${({ theme }) => theme.colors.$secondaryTextColor};
  background-color: ${({ theme }) => theme.colors.$secondaryBgColor};
  border: ${({ theme }) => theme.input.$border};
  border-radius: ${({ theme }) => theme.input.$borderRadius};
  transition: ${({ theme }) => theme.$transition};

  &:focus {
    outline: transparent;
    border-color: ${({ theme }) => theme.colors.$accentColor};
  }

  &::placeholder {
    font-size: ${props => props.$fontSize || '16px'};
    font-weight: ${props => props.$fontWeight || '500'};
    line-height: ${props => props.$lineHeightt || '16px'};
    color: #979899;
  }
`;

const StyledTextarea = styled.textarea`
  display: block;
  height: 50px;
  max-height: 220px;
  width: 100%;
  max-width: 344px;
  resize: vertical;
  margin-bottom: 32px;
  padding: 14px 12px 13px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.$secondaryTextColor};
  background-color: ${({ theme }) => theme.colors.$secondaryBgColor};
  border: ${({ theme }) => theme.input.$border};
  border-radius: ${({ theme }) => theme.input.$borderRadius};
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    border-color: ${({ theme }) => theme.colors.$accentColor};
    outline: transparent;
  }

  &::placeholder {
    font-size: ${props => props.$fontSize || '16px'};
    font-weight: ${props => props.$fontWeight || '500'};
    line-height: ${props => props.$lineHeightt || '16px'};
    color: #979899;
  }

  @media screen and (min-width: 768px) {
    max-width: 416px;
  }

  /* Для веб-кит браузеров (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 5px; /* Ширина полосы прокрутки */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.colors.$accentColor}; /* Цвет ползунка */
    border-radius: 5px; /* Скругление углов ползунка */
  }
`;

import styled from 'styled-components';
import Select from 'react-select';

export const StyledForm = styled.form`
  width: 100%;
  max-width: 344px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 416px;
  }
`;

export const StyledInputWrapper = styled.div``;

export const StyledSpanError = styled.span`
  display: block;
  height: 20px;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: #ca250e;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 4px;
  padding: 14px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.secondaryTextColor};
  background-color: var(--bg-main);
  border: none;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: 2px solid var(--bg-primery);
  }

  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color: #979899;
  }
`;

export const StyledSelect = styled(Select)`
  /* Добавьте остальные стили здесь */
  background-color: black;

  &.option:hover {
    background-color: red; // Цвет фона при наведении
  }
`;

export const stylesSelect = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    marginBottom: '4px',
    padding: '7px 2px',
    backgroundColor: '#FFFBF3',
    border: 'none',
    borderRadius: '0',
    outline: '2px solid transparent',
    outlineColor: state.isFocused ? 'var(--bg-primery)' : 'transparent',
    cursor: 'pointer',
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  }),

  singleValue: (baseStyles, state) => ({
    ...baseStyles,
    // fontFamily: 'ProximaNova-400',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    color: 'var(--main-text)',
  }),

  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    // fontFamily: 'ProximaNova-500',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '16px',
    color: '#c5c1c1',
    // outlineColor: state.isFocused ? 'var(--bg-primery)' : 'transparent',
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  }),

  indicatorSeparator: (baseStyles, state) => ({
    ...baseStyles,
    display: 'none',
  }),

  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    // color: 'var(--primery-text)',
  }),

  menu: (baseStyles, state) => ({
    ...baseStyles,
    maxWidth: '268px',
    marginTop: '17px',
    left: 'auto',
    fontSize: '46px',
    // background: 'var(--bg-main)',
    borderRadius: '0',
    position: 'absolute',
    right: 0,
    zIndex: 2,

    ':after': {
      position: 'absolute',
      display: 'block',
      content: '""',
      width: 28,
      height: 12,
      borderLeft: '14px solid transparent',
      borderRight: '14px solid transparent',
      borderBottom: '12px solid #F2F1F3',
      top: -9,
      right: 0,
      zIndex: 1,
    },
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    fontFamily: 'ProximaNova-500',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '16px',
    // color: 'var(--primery-text)',
    backgroundColor: state.isSelected ? '#E1DEE5' : 'none',
    borderBottom: '1px solid rgba(136, 123, 121, 0.20)',
    cursor: 'pointer',

    ':hover': {
      backgroundColor: '#E1DEE5',
    },

    ':active': {
      backgroundColor: 'none',
    },

    ':last-child': {
      borderBottom: 'none',
    },
  }),
};

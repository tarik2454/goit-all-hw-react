import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  max-width: 344px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 416px;
  }
`;

export const StyledPhoneInput = styled(PhoneInput)`
  margin-bottom: 4px;
  position: relative;

  .PhoneInputInput {
    padding: 14px 12px 14px 63px;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.$secondaryTextColor};
    background-color: ${({ theme }) => theme.colors.$secondaryBgColor};
    border: ${({ theme }) => theme.input.$border};
    border-radius: ${({ theme }) => theme.input.$borderRadius};
    outline: transparent;
    transition: ${({ theme }) => theme.$transition};
  }

  .PhoneInputInput:focus {
    outline: 1px solid #437aa5;
  }

  .PhoneInputCountry {
    position: absolute !important;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
  }

  .PhoneInputCountrySelectArrow {
    /* color: ${({ theme }) => theme.colors.$accentColor}; */
  }

  .PhoneInputCountrySelect {
    height: 59px;
    width: 55px;
    left: -13px;
    top: -10px;
  }

  .PhoneInputCountrySelect option {
    color: ${({ theme }) => theme.colors.$secondaryTextColor};
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const StyledSpanError = styled.span`
  display: block;
  height: 20px;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: #ca250e;
`;

export const stylesSelect = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    marginBottom: '4px',
    padding: '7px 2px',
    backgroundColor: '#FFFBF3',
    border: 'none',
    borderRadius: '5px',
    outline: '1px solid',
    outlineColor: state.isFocused ? '#437aa5' : 'rgba(33, 33, 33, 0.2)',
    cursor: 'pointer',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  }),

  singleValue: (baseStyles, state) => ({
    ...baseStyles,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    color: '#424141',
  }),

  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '16px',
    color: '#979899',
  }),

  indicatorSeparator: (baseStyles, state) => ({
    ...baseStyles,
    display: 'none',
  }),

  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
  }),

  menu: (baseStyles, state) => ({
    ...baseStyles,
    maxWidth: '268px',
    marginTop: '17px',
    left: 'auto',
    fontSize: '46px',
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
    fontSize: '16px',
    lineHeight: '16px',
    color: state.isSelected ? '#424141' : '#393737',
    backgroundColor: state.isSelected ? '#FFFBF3' : 'none',
    borderBottom: '1px solid rgba(136, 123, 121, 0.20)',
    cursor: 'pointer',

    ':hover': {
      backgroundColor: '#FFFBF3',
    },

    ':active': {
      backgroundColor: 'none',
    },

    ':last-child': {
      borderBottom: 'none',
    },
  }),
};

import { Container } from '../../shared/components/Container/Container';
import { Section } from '../../shared/components/Section/Section';
import { useEffect, useState } from 'react';
import { postRequest } from '../../modules/LeaveRequestForm/services/request-api-service';
import {
  StyledForm,
  StyledPhoneInput,
  StyledSpanError,
  stylesSelect,
} from './LeaveRequestForm.styled';
import Select from 'react-select';
import {
  dataFormat,
  dataServices,
} from 'modules/LeaveRequestForm/data/data-request';
import { Button } from '../../shared/components/Button/Button';
import { Form } from '../../shared/components/Form/Form';

export default function LeaveRequestForm() {
  // const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: null,
    format: null,
    question: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    service: null,
    format: null,
    question: '',
  });

  const handleNameChange = event => {
    if (/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ\s]*$/.test(event.target.value)) {
      setFormData({
        ...formData,
        name: event.target.value,
      });
    } else {
      setErrors({
        ...errors,
        name: 'Введіть своє ім’я кирилицею або латиницею',
      });
    }
  };

  const handleCommentChange = event => {
    setFormData({
      ...formData,
      question: event.target.value,
    });
  };

  const handleServiceChange = selectedOption => {
    setFormData({
      ...formData,
      service: selectedOption,
    });
  };

  const handleFormatChange = selectedOption => {
    setFormData({
      ...formData,
      format: selectedOption,
    });
  };

  const handlePhoneChange = value => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const handleFormReset = () => {
    setFormData({
      name: '',
      phone: '',
      service: null,
      format: null,
      question: '',
    });
  };

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('USER_DATA'));
    if (storedUserData) {
      setFormData(storedUserData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('USER_DATA', JSON.stringify(formData));
  }, [formData]);

  function formValidation(formData) {
    let objErrors = {};

    if (formData.name.length === 0) {
      objErrors.name = 'Введіть ім’я';
    } else if (formData.name.length <= 1 || formData.name.length > 50) {
      objErrors.name = "Ім'я має містити від 2 до 50 символів";
    } else if (formData.name.includes('  ')) {
      objErrors.name = 'Введіть правильне ім’я';
    }

    if (!formData.phone) {
      objErrors.phone = 'Вкажіть номер телефону';
    } else if (formData.phone.length < 11 || formData.phone.length > 50) {
      objErrors.phone = 'Некоректно введений номер';
    }

    if (!formData.service) {
      objErrors.service = 'Виберіть послугу';
    }

    if (!formData.format) {
      objErrors.format = 'Виберіть формат';
    }

    return objErrors;
  }

  const handleSubmit = async event => {
    event.preventDefault();

    const objErrors = formValidation(formData);
    setErrors(objErrors);

    if (Object.keys(objErrors).length === 0 && formData)
      try {
        const formDataForBackend = {
          ...formData,
          service: formData.service.value,
          format: formData.format.value,
        };

        console.log(formDataForBackend);

        // setIsLoading(true);

        const data = await postRequest(formDataForBackend);
        if (data) {
          // setIsLoading(false);
          handleFormReset();
          localStorage.removeItem('USER_DATA');
        }
      } catch (error) {
        // setIsLoading(false);
        console.log('Помилка при надсиланні запиту:', error.message);
      }
    return;
  };

  return (
    <Section title="Залишити заявку">
      <Container>
        <StyledForm onSubmit={handleSubmit}>
          <div>
            <Form
              as="input"
              data-value
              type="text"
              aria-label="Ваше ім'я"
              name="name"
              placeholder="Ім’я*"
              maxLength="50"
              value={formData.name}
              onChange={handleNameChange}
            />
            <StyledSpanError
              style={{
                visibility: errors.name ? 'visible' : 'hidden',
              }}
            >
              {errors.name}
            </StyledSpanError>
          </div>

          <div>
            <StyledPhoneInput
              aria-label="Ваш номер телефону"
              international
              countryCallingCodeEditable={false}
              defaultCountry="UA"
              maxLength="50"
              value={formData.phone}
              onChange={handlePhoneChange}
            />
            <StyledSpanError
              style={{
                visibility: errors.phone ? 'visible' : 'hidden',
              }}
            >
              {errors.phone}
            </StyledSpanError>
          </div>

          <div>
            <Select
              aria-label="Оберіть послугу"
              styles={stylesSelect}
              options={dataServices}
              value={formData.service}
              onChange={handleServiceChange}
              placeholder="Послуга*"
            />
            <StyledSpanError
              style={{
                visibility: errors.service ? 'visible' : 'hidden',
              }}
            >
              {errors.service}
            </StyledSpanError>
          </div>

          <div>
            <Select
              aria-label="Оберіть формат"
              styles={stylesSelect}
              options={dataFormat}
              value={formData.format}
              onChange={handleFormatChange}
              placeholder="Формат*"
            />
            <StyledSpanError
              style={{
                visibility: errors.format ? 'visible' : 'hidden',
              }}
            >
              {errors.format}
            </StyledSpanError>
          </div>

          <Form
            as="textarea"
            type="text"
            aria-label="Ваше питання (до 500 символiв)"
            name="question"
            maxLength="500"
            placeholder="Ваше питання (до 500 символiв)"
            value={formData.question}
            onChange={handleCommentChange}
          />

          <Button
            $width="100%"
            $padding="10px 0"
            $fontSize="18px"
            $fontWeight="600"
          >
            Відправити
          </Button>
        </StyledForm>
      </Container>
    </Section>
  );
}

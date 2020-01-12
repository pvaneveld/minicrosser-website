import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FormWrapper from '../../../components/Form/FormWrapper/FormWrapper';
import FormInput from '../../../components/Form/FormInput/FormInput';
import Button from '../../../components/Buttons/Button/Button';
import style from './configurator-form.module.css';
import { regexLibrary } from '../../../../utils/regex';

interface ConfiguratorForm {
  firstName: string;
  prefix: string;
  surname: string;
  mail: string;
  phone: string;
  zipcode: string;
  city: string;
}

const ConfiguratorForm: React.SFC = () => {
  const query = useStaticQuery(graphql`
    query {
      formData: markdownRemark(frontmatter: { templateKey: { eq: "configurator-form" } }) {
        frontmatter {
          formTitle
          submitButton
          formFields {
            firstName {
              label
              required
              errorMessage
            }
            prefix {
              label
              required
              errorMessage
            }
            surname {
              label
              required
              errorMessage
            }
            mail {
              label
              required
              errorMessage
            }
            phone {
              label
              required
              errorMessage
            }
            zipcode {
              label
              required
              errorMessage
            }
            city {
              label
              required
              errorMessage
            }
            popups {
              errorPopup
              successPopup
            }
          }
        }
      }
    }
  `);

  const { frontmatter: formContent } = query.formData;
  const { firstName, prefix, surname, mail, phone, zipcode, city, popups } = formContent.formFields;
  const { textOnly: textOnlyRegex, mail: mailRegex, phone: phoneRegex, zipcode: zipcodeRegex } = regexLibrary;

  const keys: ConfiguratorForm = {
    firstName: 'firstName',
    prefix: 'prefix',
    surname: 'surname',
    mail: 'mail',
    phone: 'phone',
    zipcode: 'zipcode',
    city: 'city',
  };

  return (
    <div className={style.form}>
      <FormWrapper
        formName="configurator-form"
        submitSuccessText={popups.successPopup}
        submitFailText={popups.errorPopup}
      >
        <h1 className={style.header}>{formContent.formTitle}</h1>
        <div className={style.formFieldsContainer}>
          <FormInput
            name={keys.firstName}
            type="text"
            id={keys.firstName}
            label={firstName.label}
            required={firstName.required}
            regex={textOnlyRegex}
            classString={`${style.firstName} ${style.formField}`}
            errorMessage={firstName.errorMessage}
          />
          <FormInput
            name={keys.prefix}
            type="text"
            id={keys.prefix}
            label={prefix.label}
            required={prefix.required}
            regex={textOnlyRegex}
            classString={`${style.prefix} ${style.formField}`}
            errorMessage={prefix.errorMessage}
          />
          <FormInput
            name={keys.surname}
            type="text"
            id={keys.surname}
            label={surname.label}
            required={surname.required}
            regex={textOnlyRegex}
            classString={`${style.surname} ${style.formField}`}
            errorMessage={surname.errorMessage}
          />
          <FormInput
            name={keys.mail}
            type="email"
            id={keys.mail}
            label={mail.label}
            required={mail.required}
            regex={mailRegex}
            classString={`${style.mail} ${style.formField}`}
            errorMessage={mail.errorMessage}
          />
          <FormInput
            name={keys.phone}
            type="tel"
            id={keys.phone}
            label={phone.label}
            required={phone.required}
            regex={phoneRegex}
            classString={`${style.phone} ${style.formField}`}
            errorMessage={phone.errorMessage}
          />
          <FormInput
            name={keys.zipcode}
            type="text"
            id={keys.zipcode}
            label={zipcode.label}
            required={zipcode.required}
            regex={zipcodeRegex}
            classString={`${style.zipcode} ${style.formField}`}
            errorMessage={zipcode.errorMessage}
          />
          <FormInput
            name={keys.city}
            type="text"
            id={keys.city}
            label={city.label}
            required={city.required}
            regex={textOnlyRegex}
            classString={`${style.city} ${style.formField}`}
            errorMessage={city.errorMessage}
          />
          <Button type="cta" link={false} submit={true} classString={`${style.submit} ${style.formField}}`}>
            {formContent.submitButton}
          </Button>
        </div>
      </FormWrapper>
    </div>
  );
};

export default ConfiguratorForm;

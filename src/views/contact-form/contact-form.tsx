import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FormWrapper from '../../components/Form/FormWrapper/FormWrapper';
import FormInput from '../../components/Form/FormInput/FormInput';
import Button from '../../components/Buttons/Button/Button';
import style from './contact-form.module.css';
import { regexLibrary } from '../../../utils/regex';

interface ContactForm {
  firstName: string;
  prefix: string;
  surname: string;
  mail: string;
  phone: string;
  remarks: string;
}

const ContactForm: React.SFC = () => {
  const query = useStaticQuery(graphql`
    query {
      formData: markdownRemark(frontmatter: { templateKey: { eq: "contact-form" } }) {
        frontmatter {
          title
          buttonText
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
            remarks {
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
  const { firstName, prefix, surname, mail, phone, remarks, popups } = formContent.formFields;
  const { textOnly: textOnlyRegex, mail: mailRegex, phone: phoneRegex } = regexLibrary;

  const keys: ContactForm = {
    firstName: 'firstName',
    prefix: 'prefix',
    surname: 'surname',
    mail: 'mail',
    phone: 'phone',
    remarks: 'remarks',
  };

  return (
    <div className={style.form}>
      <FormWrapper
        title={formContent.title}
        formName="contact-form"
        submitSuccessText={popups.successPopup}
        submitFailText={popups.errorPopup}
        classStringHeader={style.header}
      >
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
            name={keys.remarks}
            type="textarea"
            id={keys.remarks}
            label={remarks.label}
            required={remarks.required}
            regex={textOnlyRegex}
            classString={`${style.remarks} ${style.formField}`}
            errorMessage={remarks.errorMessage}
          />
          <Button type="cta" link={false} submit={true} classString={`${style.submit} ${style.formField}}`}>
            {formContent.buttonText}
          </Button>

          <span className={style.companyInfo}>
            Minicrosser.nl is onderdeel van RevaMed B.V.
            <br />
            <br />
            Eckertstraat 1<br />
            <br />
            8263 CB Kampen
          </span>
        </div>
      </FormWrapper>
    </div>
  );
};

export default ContactForm;

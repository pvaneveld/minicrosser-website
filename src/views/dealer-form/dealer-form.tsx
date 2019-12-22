import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FormWrapper from '../../components/Form/FormWrapper/FormWrapper';
import FormInput from '../../components/Form/FormInput/FormInput';
import style from './dealer-form.module.css';

interface DealerForm {
  firstName: string;
  prefix: string;
  surname: string;
  mail: string;
  phone: string;
  remarks: string;
}

const DealerForm: React.SFC = () => {
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "dealer-form" } }) {
        frontmatter {
          title
          formFields {
            firstName {
              label
              required
              errorMessage
            }
          }
        }
      }
    }
  `);

  const { frontmatter: content } = query.markdownRemark;
  const { firstName, prefix, surname, mail, phone, remarks } = content.formFields;

  const keys: DealerForm = {
    firstName: 'firstName',
    prefix: 'prefix',
    surname: 'surname',
    mail: 'mail',
    phone: 'phone',
    remarks: 'remarks',
  };

  return (
    <div className={style.form}>
      <FormWrapper formName="dealer-form">
        <h1>{content.title}</h1>
        <FormInput
          name={keys.firstName}
          type="text"
          id={keys.firstName}
          label={firstName.label}
          errorMessage={firstName.errorMessage}
        />
      </FormWrapper>
    </div>
  );
};

export default DealerForm;

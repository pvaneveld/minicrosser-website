import React, { useState, useCallback, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FormInput from '../../components/Form/FormInput/FormInput';
import style from './dealer-form.module.css';
import useForm from 'react-hook-form';

interface DealerForm {
  firstName: string;
  prefix: string;
  surname: string;
  mail: string;
  phone: string;
  remarks: string;
}

const DealerForm: React.SFC = () => {
  const formName = 'dealer-form';

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
  //   const { firstName, prefix, surname, mail, phone, remarks } = content.formFields;

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const onSubmit = (data: DealerForm): void => {
    fetch(window.location.pathname, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': formName, ...data }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  const { register, errors, handleSubmit } = useForm<DealerForm>();

  const keys: DealerForm = {
    firstName: 'firstName',
    prefix: 'prefix',
    surname: 'surname',
    mail: 'mail',
    phone: 'phone',
    remarks: 'remarks',
  };

  return (
    <form name={formName} method="post" data-netlify="true" onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <h1>{content.title}</h1>
      <FormInput
        name={keys.firstName}
        type="text"
        id={keys.firstName}
        label={firstName.label}
        register={register({ required: firstName.required, pattern: /[A-Za-z]/ })}
        error={errors[keys.firstName]}
        errorMessage={firstName.errorMessage}
      />

      <input type="submit" />
    </form>
  );
};

export default DealerForm;

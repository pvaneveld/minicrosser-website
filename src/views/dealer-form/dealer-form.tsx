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
  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "dealer-form" } }) {
        frontmatter {
          title
          formLabels {
            firstName
            prefix
            surname
            mail
            phone
            remarks
          }
        }
      }
    }
  `);

  const { frontmatter: content } = query.markdownRemark;
  const { firstName, prefix, surname, mail, phone, remarks } = content.formLabels;

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const onSubmit = (data: DealerForm): void => {
    fetch(window.location.href, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'dealer-form', ...data }),
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
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <h1>{content.title}</h1>
      <FormInput
        name={keys.firstName}
        type="text"
        id={keys.firstName}
        label={firstName}
        register={register({ required: true, pattern: /[A-Za-z]/ })}
        error={errors[keys.firstName]}
        errorMessage="ik ben een foutje"
      />

      <input type="submit" />
    </form>
  );
};

export default DealerForm;

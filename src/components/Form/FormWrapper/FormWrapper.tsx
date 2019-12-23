import React, { ReactNode } from 'react';
import useForm, { FormContext } from 'react-hook-form';

interface FormWrapperProps {
  formName: string;
  children: ReactNode;
}

const FormWrapper: React.SFC<FormWrapperProps> = props => {
  const { children, formName } = props;
  const methods = useForm();

  const encode = (data: object): string => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const onSubmit = (data: object): void => {
    fetch(window.location.pathname, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': formName, ...data }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  return (
    <FormContext {...methods}>
      <form name={formName} method="post" data-netlify="true" onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormContext>
  );
};

export default FormWrapper;

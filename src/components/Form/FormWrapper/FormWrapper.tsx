import React, { ReactNode, useState } from 'react';
import useForm, { FormContext } from 'react-hook-form';
import FormStatusBanner from '../FormStatusBanner/FormStatusBanner';

interface FormWrapperProps {
  formName: string;
  children: ReactNode;
  submitSuccessText: string;
  submitFailText: string;
}

const FormWrapper: React.SFC<FormWrapperProps> = props => {
  const { children, formName } = props;
  const methods = useForm();
  const [formError, setFormError] = useState(false);

  const encode = (data: object): string => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const onSubmit = async (data: object): Promise<any> => {
    setFormError(false);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': formName, ...data }),
      });
    } catch (error) {
      setFormError(true);
    }
  };

  return (
    <FormContext {...methods}>
      <FormStatusBanner succesText={props.submitSuccessText} errorText={props.submitSuccessText} hasError={formError} />

      <form name={formName} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormContext>
  );
};

export default FormWrapper;

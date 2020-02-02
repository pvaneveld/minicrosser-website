import React, { ReactNode, useState } from 'react';
import useForm, { FormContext } from 'react-hook-form';
import FormStatusBanner from '../FormStatusBanner/FormStatusBanner';
import { CSSTransition } from 'react-transition-group';
import style from './FormWrapper.module.css';

interface FormWrapperProps {
  formName?: string;
  children: ReactNode;
  submitSuccessText: string;
  submitFailText: string;
  lambdaFunctionName?: string;
  title?: string;
}

const FormWrapper: React.SFC<FormWrapperProps> = props => {
  const { children, formName } = props;
  const methods = useForm();
  const [formError, setFormError] = useState(false);
  const [formVisible, setFormVisible] = useState(true);

  const encode = (data: object): string => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const onSubmit = async (data: object): Promise<any> => {
    setFormError(false);
    try {
      const { lambdaFunctionName: lambda } = props;

      if (lambda) {
        await fetch(`/.netlify/functions/${lambda}`, {
          method: 'POST',
          body: JSON.stringify({ ...data }),
        });
      } else {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': formName, ...data }),
        });
      }
      setFormVisible(false);
    } catch (error) {
      setFormError(true);
    }
  };

  return (
    <FormContext {...methods}>
      <FormStatusBanner hasError={formError} errorText={props.submitFailText} />

      <CSSTransition classNames="title" in={formVisible} enter={false} exit={true} unmountOnExit={true} timeout={1000}>
        <h1 className={style.header}>{props.title}</h1>
      </CSSTransition>
      <CSSTransition classNames="show-text" in={!formVisible} enter={true} exit={false} timeout={1000}>
        <h1 className={`${style.header} ${style.succesText}`}>{props.submitSuccessText}</h1>
      </CSSTransition>

      <CSSTransition
        classNames="form-animation"
        in={formVisible}
        enter={false}
        exit={true}
        unmountOnExit={true}
        timeout={1000}
      >
        <form name={formName} onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
        </form>
      </CSSTransition>
    </FormContext>
  );
};

export default FormWrapper;

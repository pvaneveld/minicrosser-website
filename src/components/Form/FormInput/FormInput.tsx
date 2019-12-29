import React from 'react';
import style from './FormInput.module.css';
import { useFormContext } from 'react-hook-form';

interface InputProps {
  type: 'text' | 'email' | 'tel' | 'textarea' | 'selectbox';
  id: string;
  label: string;
  name: string;
  errorMessage?: string;
  regex?: RegExp;
  required: boolean;
  classString?: string;
  selectBoxOptions?: { value: string; text: string }[];
  placeholder?: string;
}

const Input: React.SFC<InputProps> = props => {
  const { id, type, label, name, errorMessage, required, regex, classString, selectBoxOptions, placeholder } = props;
  const { register, errors } = useFormContext();

  return (
    <div className={classString ? classString : ''}>
      <label htmlFor={id}>
        <span className={style.label}>{label}</span>

        {type === 'textarea' && (
          <textarea
            className={style.textarea}
            name={name}
            ref={register({ required, pattern: regex || /.*/ })}
            id={id}
            cols={30}
            rows={5}
          ></textarea>
        )}

        {(type === 'text' || type === 'email' || type === 'tel') && (
          <input
            name={name}
            id={id}
            type={type}
            className={style.input}
            ref={register({ required, pattern: regex || /.*/ })}
          />
        )}

        {type === 'selectbox' && selectBoxOptions && (
          <select name={name} id={id} className={style.selectBox} ref={register({ required, pattern: regex || /.*/ })}>
            {placeholder && <option value="">{placeholder}</option>}
            {selectBoxOptions.map((option, index) => (
              <option key={`dealer-${index}`} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        )}
      </label>
      {errorMessage && <span className={`${style.error} ${errors[name] ? style.showError : ''}`}>{errorMessage}</span>}
    </div>
  );
};

export default React.memo(Input);

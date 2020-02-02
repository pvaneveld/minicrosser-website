import React, { useEffect } from 'react';
import style from './FormInput.module.css';
import { useFormContext } from 'react-hook-form';

interface InputProps {
  type: 'text' | 'email' | 'tel' | 'textarea' | 'selectbox' | 'hidden';
  autoSelect?: { key: string; value: string } | false;
  disabled?: boolean;
  id: string;
  label?: string;
  name: string;
  errorMessage?: string;
  regex?: RegExp;
  required?: boolean;
  classString?: string;
  selectBoxOptions?: { value: string; text: string }[];
  placeholder?: string;
  value?: any;
}

const Input: React.SFC<InputProps> = props => {
  const {
    id,
    type,
    label,
    name,
    errorMessage,
    required,
    regex,
    classString,
    selectBoxOptions,
    placeholder,
    disabled,
    value,
  } = props;
  const { register, errors, setValue } = useFormContext();

  useEffect(() => {
    const { autoSelect } = props;
    if (autoSelect) {
      setValue(autoSelect.key, autoSelect.value);
    }
  }, [props.autoSelect]);

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

        {type === 'hidden' && (
          <input name={name} id={id} type="hidden" value={value} ref={register({ required: true })} />
        )}

        {type === 'selectbox' && selectBoxOptions && (
          <div className="select-wrapper">
            <select
              disabled={disabled ? true : false}
              name={name}
              id={id}
              className={style.selectBox}
              ref={register({ required, pattern: regex || /.*/ })}
            >
              {placeholder && <option value="">{placeholder}</option>}
              {selectBoxOptions.map((option, index) => (
                <option key={`dealer-${index}`} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        )}
      </label>
      {errorMessage && <span className={`${style.error} ${errors[name] ? style.showError : ''}`}>{errorMessage}</span>}
    </div>
  );
};

export default React.memo(Input);

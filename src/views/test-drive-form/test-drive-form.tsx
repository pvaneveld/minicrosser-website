import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FormWrapper from '../../components/Form/FormWrapper/FormWrapper';
import FormInput from '../../components/Form/FormInput/FormInput';
import Button from '../../components/Buttons/Button/Button';
import style from './test-drive-form.module.css';
import { regexLibrary } from '../../../utils/regex';

interface TestDriveForm {
  firstName: string;
  prefix: string;
  surname: string;
  mail: string;
  phone: string;
  remarks: string;
  dealer: string;
}

interface TestDriveFormProps {
  preselectedDealer: string;
}

const TestDriveForm: React.SFC<TestDriveFormProps> = props => {
  const { preselectedDealer } = props;
  const query = useStaticQuery(graphql`
    query {
      formData: markdownRemark(frontmatter: { templateKey: { eq: "test-drive-form" } }) {
        frontmatter {
          title
          titleDealerPreselected
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
            dealer {
              label
              placeholder
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
      dealers: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "dealers" } } }) {
        edges {
          node {
            frontmatter {
              companyName
              city
            }
          }
        }
      }
    }
  `);

  const { frontmatter: formContent } = query.formData;
  const { firstName, prefix, surname, mail, phone, remarks, dealer, popups } = formContent.formFields;
  const { textOnly: textOnlyRegex, mail: mailRegex, phone: phoneRegex } = regexLibrary;
  const { edges: dealerData } = query.dealers;
  interface DealerData {
    node: {
      frontmatter: {
        companyName: string;
        city: string;
      };
    };
  }

  const getDealerOptionsData = (dealerData: DealerData[]): { value: string; text: string }[] =>
    dealerData.reduce((acc, curr) => {
      const { city, companyName } = curr.node.frontmatter;
      return acc.concat({ value: companyName, text: `${companyName} | ${city}` });
    }, []);

  const keys: TestDriveForm = {
    firstName: 'firstName',
    prefix: 'prefix',
    surname: 'surname',
    mail: 'mail',
    phone: 'phone',
    remarks: 'remarks',
    dealer: 'dealer',
  };

  const getTitle = (preselectedDealer: string): string =>
    preselectedDealer ? formContent.titleDealerPreselected.replace('$dealer$', preselectedDealer) : formContent.title;

  return (
    <div className={style.form}>
      <FormWrapper
        formName="proefrit-formulier"
        submitSuccessText={popups.successPopup}
        submitFailText={popups.errorPopup}
      >
        <h1 className={style.header}>{getTitle(preselectedDealer)}</h1>
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
          <FormInput
            autoSelect={preselectedDealer ? { key: keys.dealer, value: preselectedDealer } : false}
            disabled={preselectedDealer ? true : false}
            name={keys.dealer}
            type="selectbox"
            id={keys.dealer}
            label={dealer.label}
            required={dealer.required}
            regex={textOnlyRegex}
            selectBoxOptions={getDealerOptionsData(dealerData)}
            placeholder={dealer.placeholder}
            classString={`${style.select} ${style.formField}`}
            errorMessage="selecteer een dealer"
          />
          <Button type="cta" link={false} submit={true} classString={`${style.submit} ${style.formField}}`}>
            {formContent.buttonText}
          </Button>
        </div>
      </FormWrapper>
    </div>
  );
};

export default TestDriveForm;

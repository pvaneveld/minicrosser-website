import React, { ReactNode, useEffect, useState } from 'react';
import style from './FormStatusBanner.module.css';
import { useFormContext } from 'react-hook-form';
import InfoBanner from '../../InfoBanner/InfoBanner';

interface FormStatusBannerProps {
  succesText: string;
  errorText: string;
  hasError: boolean;
}

const FormStatusBanner: React.SFC<FormStatusBannerProps> = props => {
  const { formState } = useFormContext();
  const [bannerText, setBannerText] = useState('');
  const [bannerVisible, setBannerVisible] = useState(false);
  const [classString, setClasstring] = useState('');

  const showSuccesBanner = (): void => {
    if (formState.isValid) {
      setBannerText(props.succesText);
      setClasstring(style.valid);
      setBannerVisible(true);
    }
  };

  const showErrorBanner = (): void => {
    setBannerText(props.errorText);
    setClasstring(style.invalid);
    setBannerVisible(true);
  };

  const hideBanner = () => {
    setClasstring(style.neutral);
    setBannerVisible(false);
  };

  useEffect(() => {
    showSuccesBanner();
  }, [formState.submitCount]);

  useEffect(() => {
    if (props.hasError) {
      showErrorBanner();
    }
  }, [props.hasError]);

  return (
    <InfoBanner
      visible={bannerVisible}
      content={bannerText}
      classString={classString}
      hideBannerCallBack={hideBanner}
    />
  );
};

export default FormStatusBanner;

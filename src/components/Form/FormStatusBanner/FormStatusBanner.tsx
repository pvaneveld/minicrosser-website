import React, { ReactNode, useEffect, useState } from 'react';
import style from './FormStatusBanner.module.css';
import InfoBanner from '../../InfoBanner/InfoBanner';

interface FormStatusBannerProps {
  errorText: string;
  hasError: boolean;
}

const FormStatusBanner: React.SFC<FormStatusBannerProps> = props => {
  const [bannerText, setBannerText] = useState('');
  const [bannerVisible, setBannerVisible] = useState(false);
  const [classString, setClasstring] = useState('');

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

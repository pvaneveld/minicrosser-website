import React, { ReactNode, useEffect, useRef } from 'react';
import style from './InfoBanner.module.css';

interface InfoBannerProps {
  visible: boolean;
  content: string;
  classString?: string;
  hideBannerCallBack: () => void;
}

const InfoBanner: React.SFC<InfoBannerProps> = props => {
  const { visible, content, classString } = props;

  const banner = useRef(null);

  const setListener = (): void => {
    if (banner.current) {
      banner.current.addEventListener('animationend', props.hideBannerCallBack, false);
    }
  };

  useEffect(() => {
    setListener();
    return (): void => banner.current.removeEventListener('animationend', props.hideBannerCallBack, false);
  }, [banner]);

  const classes = `${style.banner} ${visible ? style.visible : ''} ${classString ? classString : ''}`;
  return (
    <div ref={banner} className={classes}>
      {content}
    </div>
  );
};

export default InfoBanner;

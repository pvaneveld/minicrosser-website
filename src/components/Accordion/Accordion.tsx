import React, { useState, useRef, ReactNode } from 'react';
import ChevronDown from '../../icons/chevron-down.svg';
import style from './Accordion.module.css';

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.SFC<AccordionProps> = props => {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState(style.accordionIcon);

  const content = useRef(null);

  const toggleAccordion = (): void => {
    setActiveState(setActive === '' ? style.active : '');
    setHeightState(setActive === style.active ? '0px' : `${content.current.scrollHeight}px`);
    setRotateState(setActive === style.active ? style.accordionIcon : `${style.accordionIcon} ${style.rotate}`);
  };

  return (
    <div className={style.accordionSection}>
      <button className={`${style.accordion} ${setActive}`} onClick={toggleAccordion}>
        <p className={style.accordionTitle}>{props.title}</p>
        <ChevronDown className={`${setRotate}`} width={10} fill={'#777'} />
      </button>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className={style.accordionContent}>
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;

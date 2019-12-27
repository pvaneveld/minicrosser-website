import React, { useState, useRef, ReactNode, useEffect } from 'react';
import ChevronDown from '../../icons/chevron-down.svg';
import style from './Accordion.module.css';
import { connect } from 'http2';

interface AccordionProps {
  title: ReactNode;
  children: ReactNode;
  id?: string;
  classString?: string;
  opened?: boolean;
}

const Accordion: React.SFC<AccordionProps> = props => {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState(style.accordionIcon);
  const [openState, setOpenState] = useState(false);

  const content = useRef(null);
  const accordion = useRef(null);

  const toggleAccordion = (): void => {
    setOpenState(!openState);
    setActiveState(setActive === '' ? style.active : '');
    setHeightState(setActive === style.active ? '0px' : `${content.current.scrollHeight}px`);
    setRotateState(setActive === style.active ? style.accordionIcon : `${style.accordionIcon} ${style.rotate}`);
  };

  useEffect(() => {
    if (props.opened && accordion.current) {
      if (!openState) {
        toggleAccordion();
        accordion.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      } else {
        accordion.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }
  }, [props.opened]);

  const { classString, title } = props;

  return (
    <div ref={accordion} className={style.accordionSection}>
      <button className={`${style.accordion} ${setActive} ${classString ? classString : ''}`} onClick={toggleAccordion}>
        {title}
        <ChevronDown className={`${setRotate}`} width={10} fill={'#777'} />
      </button>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className={style.accordionContent}>
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;

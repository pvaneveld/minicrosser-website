import React, { useState, useRef, ReactNode, useEffect } from 'react';
import ChevronDown from '../../icons/chevron-down.svg';
import style from './Accordion.module.css';
import { connect } from 'http2';
import { forEachTrailingCommentRange } from 'typescript';

interface AccordionProps {
  title: ReactNode;
  children: ReactNode;
  classString?: string;
  opened?: boolean;
  scrollStateHandler?: (openedId: string) => void;
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

  const scrollAccordionInView = () => {
    const { current: currentContent } = content;
    accordion.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    currentContent.removeEventListener('transitionend', scrollAccordionInView, false);
  };

  const scrollIntoViewHandler = () => {
    const { opened, scrollStateHandler } = props;
    const { current: currentAccordion } = accordion;
    const { current: currentContent } = content;

    if (opened && currentAccordion && scrollStateHandler) {
      if (!openState) {
        currentContent.addEventListener('transitionend', scrollAccordionInView, false);
        toggleAccordion();
      } else {
        currentAccordion.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
      scrollStateHandler('');
    }
  };

  useEffect(() => {
    scrollIntoViewHandler();
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

import React from 'react';
import Markdown from '../../components/Markdown/Markdown';
import style from './content.module.css';

interface ContentProps {
  title: string;
  text: string;
}

const Content: React.SFC<ContentProps> = props => {
  const { title, text } = props;
  return (
    <div className={style.container}>
      <h1 className={style.header}>{title}</h1>
      <Markdown>{text}</Markdown>
    </div>
  );
};

export default Content;

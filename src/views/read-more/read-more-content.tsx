import React from 'react';
import style from './read-more-content.module.css';
import Markdown from '../../components/Markdown/Markdown';

interface ReadMoreContentProps {
  title: string;
  text: string;
}

const ReadMoreContent: React.SFC<ReadMoreContentProps> = props => {
  const { title, text } = props;

  return (
    <div className={style.container}>
      <h1>{title}</h1>
      <Markdown>{text}</Markdown>
    </div>
  );
};

export default ReadMoreContent;

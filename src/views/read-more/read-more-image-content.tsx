import React from 'react';
import style from './read-more-image-content.module.css';
import Markdown from '../../components/Markdown/Markdown';

interface ImageContentProps {
  title: string;
  text: string;
}

const ImageContent: React.SFC<ImageContentProps> = props => {
  const { title, text } = props;

  return (
    <div className={style.container}>
      <h2>{title}</h2>
      <Markdown>{text}</Markdown>
    </div>
  );
};

export default ImageContent;

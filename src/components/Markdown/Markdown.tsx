import React from 'react';
import marked from 'marked';
import style from './Markdown.module.css';

interface MarkdownProps {
  children: string;
  classString?: string;
}

const Markdown: React.SFC<MarkdownProps> = props => {
  const markdown = marked(props.children, { gfm: true, breaks: false });
  return (
    <div
      className={`${style.markdown} ${props.classString ? props.classString : ''}`}
      dangerouslySetInnerHTML={{ __html: markdown }}
    />
  );
};

export default Markdown;

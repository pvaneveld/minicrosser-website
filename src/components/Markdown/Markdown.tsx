import React from 'react';
import marked from 'marked';

interface MarkdownProps {
  children: string;
  classString?: string;
}

const Markdown: React.SFC<MarkdownProps> = props => {
  const markdown = marked(props.children);
  return <span className={props.classString ? props.classString : ''} dangerouslySetInnerHTML={{ __html: markdown }} />;
};

export default Markdown;

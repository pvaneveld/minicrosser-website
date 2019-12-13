import React from 'react';
import marked from 'marked';

interface MarkdownProps {
  children: string;
}

const Markdown: React.SFC<MarkdownProps> = props => {
  const markdown = marked(props.children);
  return <div dangerouslySetInnerHTML={{ __html: markdown }} />;
};

export default Markdown;

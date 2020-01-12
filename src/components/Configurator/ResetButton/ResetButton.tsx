import React from 'react';
import Button from '../../Buttons/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeConfiguratorPage, updateConfiguratorSelection } from '../../../state/actions';
import style from './ResetButton.module.css';
import { useStaticQuery, graphql } from 'gatsby';

const PrevNext: React.SFC = () => {
  const dispatch = useDispatch();

  const query = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "configurator-form" } }) {
        frontmatter {
          restartButton
        }
      }
    }
  `);

  const { restartButton } = query.markdownRemark.frontmatter;

  return (
    <Button
      clickHandler={(): void => {
        dispatch(changeConfiguratorPage(1));
        dispatch(updateConfiguratorSelection([]));
      }}
      classString={style.button}
      type="secondary-dark"
    >
      {restartButton}
    </Button>
  );
};

export default PrevNext;

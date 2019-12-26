import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Accordion from '../../components/Accordion/Accordion';
import style from './dealer-locator.module.css';
import Mail from '../../icons/mail.svg';
import Address from '../../icons/house.svg';
import Phone from '../../icons/phone.svg';
import Website from '../../icons/site.svg';
import Button from '../../components/Buttons/Button/Button';

const DealerLocator: React.SFC = () => {
  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "dealers" } } }) {
        edges {
          node {
            frontmatter {
              companyName
              zipCode
              address
              city
              phone
              mail
              site
            }
          }
        }
      }
    }
  `);

  console.log(process.env.MAPS_API_KEY);

  interface InnerDealerData {
    companyName: string;
    zipCode: string;
    address: string;
    city: string;
    phone: string;
    mail: string;
    site: string;
  }

  interface DealerData {
    node: {
      frontmatter: InnerDealerData;
    };
  }

  const { edges: dealerArray } = query.allMarkdownRemark;

  const sanitizeDealerData = (dealerData: DealerData[]): InnerDealerData[] =>
    dealerData.map(dealer => dealer.node.frontmatter);

  return (
    <div className={style.container}>
      <div className={style.dealerContainer}>
        {sanitizeDealerData(dealerArray).map((dealer, index) => {
          const { companyName, zipCode, address, city, phone, mail, site } = dealer;
          return (
            <Accordion key={`dealer-${index}`} title={companyName}>
              <div className={style.dealerInformation}>
                <div className={style.dealerInfoRow}>
                  <Address className={style.dealerIcon} />
                  {address} | {zipCode} | {city}
                </div>
                <div className={style.dealerInfoRow}>
                  <Phone className={style.dealerIcon} />
                  {phone}
                </div>
                <div className={style.dealerInfoRow}>
                  <Mail className={style.dealerIcon} />
                  {mail}
                </div>
                <div className={style.dealerInfoRow}>
                  <Website className={style.dealerIcon} />
                  {site}
                </div>

                <Button type="cta">Plan een proefrit</Button>
              </div>
            </Accordion>
          );
        })}
      </div>
      <div className={style.mapContainer}></div>
    </div>
  );
};

export default DealerLocator;

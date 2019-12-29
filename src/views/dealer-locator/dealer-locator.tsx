import React, { useEffect, useState, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Accordion from '../../components/Accordion/Accordion';
import style from './dealer-locator.module.css';
import Mail from '../../icons/mail.svg';
import Address from '../../icons/house.svg';
import Phone from '../../icons/phone.svg';
import Website from '../../icons/site.svg';
import Button from '../../components/Buttons/Button/Button';
import GoogleMapReact from 'google-map-react';
import HeaderFooterSpacing from '../../components/Layouts/HeaderFooterSpacing/HeaderFooterSpacing';
import Marker from '../../components/Marker/Marker';
import { navigate } from 'gatsby';

const DealerLocator: React.SFC = () => {
  const [dealerData, setdealerData] = useState<DealerData[] | null>(null);
  const [selectedDealer, setSelectedDealer] = useState('');
  const center = { lat: 52.092876, lng: 5.10448 };
  const zoom = 7;
  const map = useRef(null);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

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
      markdownRemark(frontmatter: { templateKey: { eq: "dealer-locator" } }) {
        frontmatter {
          buttonText
        }
      }
    }
  `);

  interface DealerData {
    companyName: string;
    zipCode: string;
    address: string;
    city: string;
    phone: string;
    mail: string;
    site: string;
    lat: number;
    lng: number;
    letter: string;
  }

  interface RawDealerData {
    node: {
      frontmatter: Omit<DealerData, 'lat' | 'long' | 'letter'>;
    };
  }

  const { edges: dealerArray } = query.allMarkdownRemark;

  const sanitizeDealerData = (dealerData: RawDealerData[]): Omit<DealerData, 'lat' | 'lng' | 'letter'>[] =>
    dealerData.map(dealer => dealer.node.frontmatter);

  const enrichLatLong = async (dealers: Omit<DealerData, 'lat' | 'lng' | 'letter'>[]): Promise<any> => {
    const urlBase = `https://maps.googleapis.com/maps/api/geocode/json?`;
    const addressPromises = dealers.map(async dealer => {
      const address = `address=${dealer.address}, ${dealer.city}, ${dealer.zipCode}`.replace(/\s/g, '+');
      const key = `key=${process.env.GATSBY_MAPS_API_KEY}`;
      const response = await fetch([urlBase, ...[address, key].join('&')].join(''));
      const jsonResponse = await response.json();
      return { ...dealer, ...jsonResponse.results[0].geometry.location };
    });

    return await Promise.all(addressPromises);
  };

  const enrichDealerHandler = async () => {
    const withLatLng = await enrichLatLong(sanitizeDealerData(dealerArray));
    const withLetter = withLatLng.map((dealer, index: number): DealerData[] => ({
      ...dealer,
      ...{ letter: alphabet[index] },
    }));
    setdealerData(withLetter);
  };

  const selectDealer = (companyName: string): void => {
    navigate('/proefrit', {
      state: { companyName },
    });
  };

  const handleMarkerClick = (companyName: string): void => {
    setSelectedDealer(companyName);
  };

  useEffect(() => {
    enrichDealerHandler();
  }, []);

  return (
    <div className={style.container}>
      <HeaderFooterSpacing headerSpacing={true} />
      <div className={style.flexContainer}>
        <div className={style.dealerContainer}>
          <div className={style.dealerList}>
            {dealerData &&
              dealerData.map((dealer, index) => {
                const { companyName, zipCode, address, city, phone, mail, site, letter } = dealer;
                return (
                  <Accordion
                    scrollStateHandler={dealerId => setSelectedDealer(dealerId)}
                    opened={companyName === selectedDealer}
                    key={`dealer-${index}`}
                    title={
                      <div className={style.accordionTitle}>
                        <Marker classString={style.accordionMarker} children={letter} />
                        {companyName}
                      </div>
                    }
                  >
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

                      <Button type="cta" clickHandler={() => selectDealer(companyName)}>
                        {query.markdownRemark.frontmatter.buttonText}
                      </Button>
                    </div>
                  </Accordion>
                );
              })}
          </div>
        </div>
        <div className={style.mapContainer}>
          <div className={style.map} ref={map}>
            <GoogleMapReact
              onChildClick={handleMarkerClick}
              bootstrapURLKeys={{ key: process.env.GATSBY_MAPS_API_KEY }}
              defaultCenter={center}
              defaultZoom={zoom}
              resetBoundsOnResize={true}
            >
              {dealerData &&
                dealerData.map((dealer, index) => (
                  <Marker key={dealer.companyName} lat={dealer.lat} lng={dealer.lng}>
                    {dealer.letter}
                  </Marker>
                ))}
            </GoogleMapReact>
          </div>
        </div>
      </div>

      <HeaderFooterSpacing footerSpacing={true} />
    </div>
  );
};

export default DealerLocator;

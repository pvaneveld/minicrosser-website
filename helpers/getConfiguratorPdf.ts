import { parseSidebarConfig, parseTotalPrice } from './parseConfiguration';
import { toCurrency } from '../src/helpers/toCurrency';

const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export function getConfiguratorPdf(
  {
    firstName,
    surname,
    prefix,
    phone,
    mail,
  }: {
    firstName: string;
    surname: string;
    prefix: string;
    phone: string;
    mail: string;
  },
  selectedItems,
) {
  const docDefinition = {
    content: [
      { text: 'Minicrosser configuratie', fontSize: 25, bold: true, margin: [0, 0, 0, 20] },
      ...parseSidebarConfig(selectedItems).reduce((acc, curr) => {
        const [title, items] = curr;
        return acc.concat(
          { text: title, bold: true, margin: [0, 10, 0, 5] },
          items.reduce((acc, curr) => {
            if (!acc.ul) {
              acc.ul = [];
            }
            acc.ul.push(`${curr.name} (${toCurrency(curr.price)})`);

            return acc;
          }, {}),
        );
      }, []),
      { text: `Totale prijs: ${parseTotalPrice(selectedItems)}`, bold: true, margin: [0, 20] },
      { text: 'Contactgegevens', fontSize: 25, bold: true, margin: [0, 0, 0, 20] },

      {
        table: {
          body: [
            ['Naam', `${firstName}${prefix ? ' ' + prefix : ''} ${surname}`],
            ['E-mailadres', mail],
            ['Telefoonnummer', phone],
          ],
        },
      },
    ],
  };

  return pdfMake.createPdf(docDefinition);
}

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const SibApiV3Sdk = require('sib-api-v3-sdk');
const atob = require('atob');
const Blob = require('cross-blob');

exports.handler = async (event, context) => {
  // https://developers.sendinblue.com/reference#sendtransacemail
  try {
    const { firstName, surname, prefix, dealer, phone, mail, pdf } = JSON.parse(event.body);
    const { mail: dealerMail, companyName: dealerName } = JSON.parse(dealer);
    const templateId = 10;

    const mailInfo = {
      to: [
        {
          email: 'vaneveld.paul@gmail.com',
          name: dealerName,
        },
      ],
      cc: [
        {
          email: 'vaneveld.paul@gmail.com',
          name: 'Minicrosser',
        },
      ],
    };

    const name = `${firstName}${prefix ? ' ' + prefix : ''} ${surname}`;

    const defaultClient = SibApiV3Sdk.ApiClient.instance;

    // Configure API key authorization: api-key
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = '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';

    const apiInstance = new SibApiV3Sdk.SMTPApi();

    const sendSmtpEmail = new SibApiV3Sdk.SendEmail();
    sendSmtpEmail.htmlContent = `
      <h1>Configuratie-aanvraag van ${name}</h1>

      <table>
        <tr>
          <td>
            Telefoonnummer
          </td>
          <td>
            ${phone}
          </td>
        </tr>
        <tr>
          <td>
            Mail
          </td>
          <td>
            ${mail}
          </td>
        </tr>
      </table>
    `; // SendSmtpEmail | Values to send a transactional emai // SendSmtpEmail | Values to send a transactional email
    sendSmtpEmail.sender = {
      name: 'Mincrosser',
      email: 'mincrosser@info.com',
    };
    sendSmtpEmail.subject = `Minicrosser configuratie van ${name}`;
    sendSmtpEmail.cc = mailInfo.cc;
    sendSmtpEmail.to = mailInfo.to;
    sendSmtpEmail.attachment = [
      {
        content: pdf,
        name: 'test.pdf',
      },
    ];
    sendSmtpEmail.params = { firstName, surname, prefix, dealer, phone, mail, dealerMail, dealerName };

    await apiInstance.sendTransacEmail(sendSmtpEmail);
    return {
      statusCode: 200,
      body: 'Done!',
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    console.log(err);
    return { statusCode: 500, body: err.toString() };
  }
};

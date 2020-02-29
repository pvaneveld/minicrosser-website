// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const SibApiV3Sdk = require('sib-api-v3-sdk');

exports.handler = async (event, context) => {
  // https://developers.sendinblue.com/reference#sendtransacemail
  try {
    const { firstName, surname, prefix, dealer, phone, mail, pdf } = JSON.parse(event.body);
    const { mail: dealerMail, companyName: dealerName } = JSON.parse(dealer);

    const mailInfo = {
      to: [
        {
          email: dealerMail,
          name: dealerName,
        },
      ],
      cc: [
        {
          email: 'info@revamed.com',
          name: 'Revamed',
        },
      ],
    };

    const name = `${firstName}${prefix ? ' ' + prefix : ''} ${surname}`;

    const defaultClient = SibApiV3Sdk.ApiClient.instance;

    // Configure API key authorization: api-key
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = apiKey.apiKey = process.env.SEND_IN_BLUE_API_KEY;

    const apiInstance = new SibApiV3Sdk.SMTPApi();

    const sendSmtpEmail = new SibApiV3Sdk.SendEmail();
    sendSmtpEmail.htmlContent = `
      Beste Minicrosser dealer,
      <br />
      <br />
      Via <a href="http://www.minicrosser.nl/" target="_blank">minicrosser.nl</a> is er een configurator samengesteld van de Minicrosser X. De klantgegevens en de samengestelde configurator zijn bijgevoegd.
      <br />
      <br />
      Hierbij het verzoek om binnen 1 werkdag contact op te nemen met de aanvrager om een eventuele vervolgafspraak in te plannen.
      <br />
      <br />
      Team RevaMed
      <br />Tel. 088-1100 111
    `; // SendSmtpEmail | Values to send a transactional emai // SendSmtpEmail | Values to send a transactional email
    sendSmtpEmail.sender = {
      name: 'Revamed',
      email: 'info@revamed.com',
    };
    sendSmtpEmail.subject = `Minicrosser configuratie van ${name}`;
    sendSmtpEmail.cc = mailInfo.cc;
    sendSmtpEmail.to = mailInfo.to;
    sendSmtpEmail.attachment = [
      {
        content: pdf,
        name: `aanvraag-minicrosser-${surname}.pdf`,
      },
    ];
    sendSmtpEmail.params = { firstName, surname, prefix, dealer, phone, mail, dealerMail, dealerName };

    await apiInstance.sendTransacEmail(sendSmtpEmail);
    return {
      statusCode: 200,
      body: 'Done!',
    };
  } catch (err) {
    console.log(err);
    return { statusCode: 500, body: err.toString() };
  }
};

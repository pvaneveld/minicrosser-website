// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const SibApiV3Sdk = require('sib-api-v3-sdk');

exports.handler = async (event, context) => {
  // https://developers.sendinblue.com/reference#sendtransacemail
  try {
    const { firstName, surname, prefix, dealer, phone, mail } = JSON.parse(event.body);
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

    const defaultClient = SibApiV3Sdk.ApiClient.instance;

    // Configure API key authorization: api-key
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = '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';

    const apiInstance = new SibApiV3Sdk.SMTPApi();

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

    sendSmtpEmail.templateId = templateId;
    sendSmtpEmail.cc = mailInfo.cc;
    sendSmtpEmail.to = mailInfo.to;

    sendSmtpEmail.params = { firstName, surname, prefix, dealer, phone, mail, dealerMail, dealerName };

    // await apiInstance.sendTransacEmail(sendSmtpEmail);

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

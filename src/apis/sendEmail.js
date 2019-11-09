import emailjs from 'emailjs-com';
import api_keys from './email_token';

const formatJSON = (dataObject) => {
  if (Object.keys(dataObject).length > 0) {
    var returnString = "they want ";
    var subString = "";
    for (var key of Object.keys(dataObject)) {
      if (dataObject[key]){
        subString += key;
        subString += ", ";
      }
    }
    if (subString.length === 0) {
      return "They did not inquire.";
    }
    return returnString + subString;
  } else {
    return "They did not inquire.";
  }
}

const sendMail = (data, mailSuccess, mailError) => {
  let templateParams = {
    name: data.name,
    email: data.email,
    body: data.body,
    services: formatJSON(data.services),
    objects: formatJSON(data.objects),
    colors: formatJSON(data.colors),
    quantity: formatJSON(data.quantity)
  };

  emailjs.send(
    api_keys.SERVICE_ID,
    api_keys.TEMPLATE_ID,
    templateParams,
    api_keys.USER_ID
  ).then(
    function(response){
      mailSuccess();
    },
    function(err){
      mailError();
    }
  )
}

export default sendMail;

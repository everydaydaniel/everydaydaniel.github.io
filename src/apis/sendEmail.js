import emailjs from 'emailjs-com';
import api_keys from './email_token';

const sendMail = (data) => {

  const templateParams = {
    name: data.name,
    email: data.email,
    body: data.body,
    services: JSON.stringify(data.services),
    objects: JSON.stringify(data.objects),
    colors: JSON.stringify(data.colors),
    quantity: JSON.stringify(data.quantity)
  };

  emailjs.send(
    api_keys.SERVICE_ID,
    api_keys.TEMPLATE_ID,
    templateParams,
    api_keys.USER_ID
  ).then(
    function(response){
      console.log(response);
    },
    function(err){
      console.log(err);
    }
  )
}

export default sendMail;

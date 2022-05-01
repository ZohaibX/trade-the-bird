// go to sendgrid, to account 
// settings tab -> sender authentication -> verify a single sender -> create sender -> 
// from and reply section can be same -> after creating -> verify from email address 
// then on settings tab -> api keys -> create a key -- copy that 

import sgmail from "@sendgrid/mail";
import { BadRequestException } from '@zbtickets/common';

module.exports = (to , subject, text) => {

if(!process.env.APIKEY) throw new BadRequestException("Error Coming from Mail Sending API-Key")
sgmail.setApiKey(process.env.APIKEY);

const msg = {
  to: [to]  ,
  from: "ZohaibButt045@gmail.com" , // email name will be displayed as zohaibbutt045, so it should be a better email
  subject ,
  text
}

sgmail.send(msg)

}
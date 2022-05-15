import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "59a75cdd89dd17",
    pass: "d3f9759c28d57b"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body } : SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Patrick Machado <patrickmm1996@gmail.com',
      subject,
      html: body,
    });
  };
}
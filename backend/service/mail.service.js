import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT * 1,
      secure: false,
      auth: {
        user: process.env.SMT_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }
  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMT_USER,
      to,
      subject: `Активація акаунта ${process.env.API_URL}`,
      text: "",
      html: `
          <div>
            <h1>Для активації перейдіть по <a href="${link}">посианню</a></h1>
          </div>
        `,
    });
  }
}

export default new MailService();

import nodemailer from "nodemailer";

export const mailer = async ({ email, name, mobile, subject, message }: any) => {
    try {
        const transport = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.USER_ID,
                pass: process.env.PASSWORD,
            },
        });

        const mailOption = {
            from: process.env.USER_ID,
            to: email,
            subject: subject,
            html: `<p style={{fontSize:18}}> </p>`,
        };
        const mailResponse = await transport.sendMail(mailOption);
        return mailResponse;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

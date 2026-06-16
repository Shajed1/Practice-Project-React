const nodemailer = require('nodemailer');

const SendEmailUtility = async (EmailTo, EmailText, EmailSubject) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",      // Gmail-এর সঠিক SMTP হোস্ট
        port: 587,                    // TLS-এর জন্য 587 (বা 465 SSL-এর জন্য)
        secure: false,                // 587-এর জন্য false (STARTTLS), 465-এর জন্য true
        auth: {
            user: "shajedshohan11@gmail.com",
            pass: "ekvw myjv pyhf fayg"   // আপনার App Password (স্পেস ছাড়া দিন)
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: '"Task Manager MERN" <shajedshohan11@gmail.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };

    return await transporter.sendMail(mailOptions);
};

module.exports = SendEmailUtility;
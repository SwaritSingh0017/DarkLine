import { resendClient, sender} from "../lib/resend.js"
import {createWelcomeEmailTemplate} from "../email/emialTemplates.js"

export const sendWelcomeEmail = async(email,name,clintURL) => {
    const {data,error} = await resendClient.emails.send({
        from:`${sender.name}<${sender.email}>`,
        to: email,
        subject: "Welcome To DarkLine",
        html:  createWelcomeEmailTemplate(name,clintURL),
    });

    if(error){
        console.error("Error sending welcome Email...", error);
        throw new Error("Failed to send welcome email...");
    }

    console.log("welcome email sent successfully", data); 
}
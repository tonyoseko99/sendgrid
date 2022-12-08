import react from "react";
import { Mail } from "@sendgrid/mail";

const Home = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = {
      to: "recipient@example.com",
      from: "sender@example.com",
      subject: "Hello world",
      text: "This is a test email from Sendgrid in a React app.",
    };

    //   set up your Sendgrid API key as an environment variable
    const sendEmail = () => {
      Mail.setApiKey(process.env.SENDGRID_API_KEY);
      Mail.send(msg);
    };

    sendEmail();
  };

  return (
    <>
      <h5>Sendgrid Email</h5>
      <p>let's send some emails to random people </p>
    </>
  );
};

export default Home;

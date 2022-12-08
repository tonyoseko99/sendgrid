import react from 'react';
import { Mail } from '@sendgrid/mail';

const Home = () => {
    const msg = {
        to: 'recipient@example.com',
        from: 'sender@example.com',
        subject: 'Hello world',
        text: 'This is a test email from Sendgrid in a React app.',
      };
      
}

export default Home;
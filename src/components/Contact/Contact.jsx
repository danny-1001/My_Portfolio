import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Get in touch'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://linkedin.com/in/danny-aviles-a1730a178'}
            >
              {btn || "LinkedIn"}
            </a>
           <hr/>
            <p>
              <h2>
                And feel free to send me an email at danielaviles1027@gmail.com.
              </h2>
            </p>

          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;

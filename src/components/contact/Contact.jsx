import React from "react";
import "./contact.css";
import { SiMaildotru } from "react-icons/si";
import { SiMessenger } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_69572xj",
      "template_n8q0gqf",
      form.current,
      "GyOKH1R0saYvMD1DZ"
    );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>La Oss Snakke</h5>
      <h2>Kontakt Meg</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <SiMaildotru className='contact__option-icon' />
            <h4>Epost</h4>
            <h5>andreas.takvam@gmail.com</h5>
            <a
              href='mailto:andreas.takvam@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Send meg en mail
            </a>
          </article>

          <article className='contact__option'>
            <SiMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Andreas</h5>
            <a
              href='https://m.me/andreas.takvam'
              target='_blank'
              rel='noreferrer'
            >
              Nå meg på Messenger
            </a>
          </article>

          <article className='contact__option'>
            <MdPhoneIphone className='contact__option-icon' />
            <h4>Telefon</h4>
            <h5>Andreas Takvam</h5>
            <a href='tel:004741627916' target='_blank' rel='noreferrer'>
              Ring Meg
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Ditt Navn' required />
          <input
            type='email'
            name='email'
            placeholder='Din Mailadresse'
            required
          />
          <textarea
            name='message'
            rows='7'
            placeholder='Din Melding'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Melding
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

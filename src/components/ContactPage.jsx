import React, { useState } from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPlus, FaMinus, FaTwitter, FaLinkedin, FaFacebook, FaPaperPlane } from "react-icons/fa";
import contactimg from "../Images/contactimg.jpg";
import Swal from "sweetalert2";
import axios from "axios";

// Styled Components
const ContactPage = styled.div`
  font-family: "Arial", sans-serif;
  background: white;
  color: #333;
  padding: 50px 20px;
  text-align: center;
  padding-top: 100px;
  position: relative;
  background-image: url(${contactimg});
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: white;
  position: relative;
  z-index: 2;
`;

const ContactContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.2rem;
  margin: 15px 0;
  color: #0092CF;
`;

const FAQSection = styled.div`
  max-width: 800px;
  margin: 40px auto;
  text-align: left;
  position: relative;
  z-index: 2;
`;

const FAQTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  color: white;
`;

const FAQItem = styled.div`
  background: #eef2ff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  border: 1px solid  #0092CF;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
`;

const Answer = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #555;
  display: ${({ show }) => (show ? "block" : "none")};
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color:  #0092CF;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  font-size: 1rem;
  border: 1px solid  #0092CF;
  border-radius: 5px;
  background: #fff;
  color: #333;
  outline: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  font-size: 1rem;
  border: 1px solid  #0092CF;
  border-radius: 5px;
  background: #fff;
  color: #333;
  outline: none;
  height: 120px;
`;

const SubmitButton = styled.button`
  background:  #0092CF;
  color: white;
  padding: 12px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: white;
    color: #0092CF;
    border: 1px solid  #0092CF;
  }
`;

const ContactSupport = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Sending...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await axios.post("https://ockensuniversal.com.ng/api/contact_form_endpoint.php", formData, {
        headers: {
          "Content-Type": "application/json", 
        },
      });

      if (response.data.success) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: response.data.message,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: response.data.error,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "There was an error sending the message.",
      });
    }
  };

  return (
    <ContactPage>
      <Title>Contact Us</Title>

      <ContactContainer>
        <h2>Get In Touch</h2>
        {/* <ContactItem>
          <FaMapMarkerAlt /> 123 Oilfield Road, Energy City, TX
        </ContactItem> */}
        <ContactItem>
          <FaEnvelope /> Ockens1@yahoo.com
        </ContactItem>
        <ContactItem>
          <FaPhone /> +234-80-333-87270 , 070-683-90237
        </ContactItem>
      </ContactContainer>

      <FAQSection>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        {[
          { question: "What services do you offer?", answer: "We specialize in surveying and oil field services." },
          { question: "How can I request a quote?", answer: "Fill out the contact form, and we will get back to you." },
        ].map((faq, index) => (
          <FAQItem key={index} onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
            <Question>
              {faq.question} {openFAQ === index ? <FaMinus /> : <FaPlus />}
            </Question>
            <Answer show={openFAQ === index}>{faq.answer}</Answer>
          </FAQItem>
        ))}
      </FAQSection>

      <FormContainer>
        <FormTitle>Contact Form</FormTitle>
        <form onSubmit={handleSubmit}>
          <Input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required />
          <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" required />
          <Input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Your Phone  Number" required />
         
          <TextArea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message" required />
          <SubmitButton type="submit">
            <FaPaperPlane /> Send Message
          </SubmitButton>
        </form>
      </FormContainer>
    </ContactPage>
  );
};

export default ContactSupport;

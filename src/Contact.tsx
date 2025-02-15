import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

// Define the form data type
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes, specify event type
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission, specify event type
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_tegq71q';  // Replace with your actual service ID
    const templateID = 'template_duqj3hz';  // Replace with your actual template ID
    const userID = 'nR6LOCfyaMbb3Xsox';  // Replace with your actual user ID

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-indigo-600 text-white flex flex-col items-center"
    >
      <motion.h2
        className="text-3xl font-semibold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className="text-lg max-w-4xl text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Feel free to reach out for collaborations, job opportunities, or just to talk about QA and automation!
      </motion.p>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full sm:w-1/2 bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg text-black">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg text-black">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg text-black">Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-yellow-500 text-white px-6 py-3 rounded-md text-lg">
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;

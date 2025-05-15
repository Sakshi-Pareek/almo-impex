import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

interface FormValues {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const initialValues: FormValues = {
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
      .required('Mobile number is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    setIsSubmitting(true);
    try {
      await axios.post('http://localhost:5000/api/contact', values);
      setSubmitted(true);
      resetForm();
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 rounded-md p-4 text-green-800"
        >
          <p>Thank you for your message! We'll get back to you shortly.</p>
        </motion.div>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting: formikSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#056773] focus:border-transparent"
                  placeholder="Your name"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#056773] focus:border-transparent"
                  placeholder="Your email address"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-gray-700 mb-2">Mobile Number</label>
                <Field
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#056773] focus:border-transparent"
                  placeholder="Your 10-digit mobile number"
                />
                <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <Field
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#056773] focus:border-transparent"
                  placeholder="Subject of your message"
                />
                <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#056773] focus:border-transparent resize-none"
                  placeholder="Your message"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || formikSubmitting}
                className="w-full btn-primary flex items-center justify-center"
              >
                {(isSubmitting || formikSubmitting) ? (
                  <div className="flex items-center">
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <span>Send Message</span>
                    <Send className="ml-2 h-5 w-5" />
                  </div>
                )}
              </button>
            </Form>
          )}
        </Formik>
      )}
    </motion.div>
  );
};

export default ContactForm;
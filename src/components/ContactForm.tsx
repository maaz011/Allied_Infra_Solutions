import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SendIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    // setIsSubmitting(true);
    // const serviceID = 'service_13lvyeg';
    // const templateID = 'template_e8089g1';
    // const publickey = 'MylrLw5zBRs5yqgx6'

    // emailjs.send(serviceID, templateID, data, publickey)
    // .then(() => {
    //   setIsSubmitting(false);
    //   setSubmitSuccess(true);
    //   reset();

    //   setTimeout(() => {
    //     setSubmitSuccess(false);
    //   }, 5000);
    // })
    // .catch((error) => {
    //   console.error('Email send error:', error);
    //   setIsSubmitting(false);
    // });
    // // Simulate form submission
    // setTimeout(() => {
    //   console.log('Form data:', data);
    //   setIsSubmitting(false);
    //   setSubmitSuccess(true);
    //   reset();
      
    //   // Reset success message after 5 seconds
    //   setTimeout(() => {
    //     setSubmitSuccess(false);
    //   }, 5000);
    // }, 1500);
  setIsSubmitting(true);

  const serviceID = 'service_13lvyeg';
  const adminTemplateID = 'template_mluya8x';     // replace with your actual admin template ID
  const userTemplateID = 'template_e8089g1';       // replace with your actual user template ID
  const publicKey = 'MylrLw5zBRs5yqgx6';
  const timestamp = new Date().toLocaleString();   // Send human-readable time

  // Payload shared between both templates
  const templateParams = {
    name: data.name,
    email: data.email,
    mobile: data.mobile,
    subject: data.subject,
    message: data.message,
    time: timestamp,
    logo_url: `${window.location.origin}/logo.png`,
  };

  // Send email to Admin
  const sendAdminEmail = emailjs.send(serviceID, adminTemplateID, templateParams, publicKey);

  // Send email to User (confirmation)
  const sendUserEmail = emailjs.send(serviceID, userTemplateID, templateParams, publicKey);

  Promise.all([sendAdminEmail, sendUserEmail])
    .then(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      reset();

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    })
    .catch((error) => {
      console.error('Email send error:', error);
      setIsSubmitting(false);
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h3 className="font-heading text-2xl font-semibold mb-6 text-secondary">Get In Touch</h3>
      
      {submitSuccess && (
        <div className="mb-6 p-4 bg-success/10 border border-success text-success rounded-md">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-darkgray mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.name ? 'border-error' : 'border-mediumgray'}`}
              placeholder="John Doe"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="text-error text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-sm font-medium text-darkgray mb-1">
             Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.mobile ? 'border-error' : 'border-mediumgray'}`}
              placeholder="10-digit mobile number"
              {...register('mobile', {
                required: 'Mobile number is required',
                pattern: {
                value: /^[6-9]\d{9}$/,
                message: 'Enter a valid 10-digit mobile number'
               }
             })}
           />
           {errors.mobile && <p className="text-error text-xs mt-1">{errors.mobile.message}</p>}
          </div>


          




          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-darkgray mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.email ? 'border-error' : 'border-mediumgray'}`}
              placeholder="your.email@example.com"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && (
              <p className="text-error text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-darkgray mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.subject ? 'border-error' : 'border-mediumgray'}`}
            placeholder="How can we help you?"
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && (
            <p className="text-error text-xs mt-1">{errors.subject.message}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-darkgray mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.message ? 'border-error' : 'border-mediumgray'}`}
            placeholder="Your message here..."
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors.message && (
            <p className="text-error text-xs mt-1">{errors.message.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
          ) : (
            <SendIcon size={18} className="mr-2" />
          )}
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
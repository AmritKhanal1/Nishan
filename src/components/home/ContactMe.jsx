import React, { useState } from 'react'
import { MdOutlineArrowBack } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Magnet from '../effects/Magnet';
import ScrollFloat from '../effects/ScrollFloat';
import { Bounce, toast } from 'react-toastify';

const initialFormState = {
  name: '',
  nameError: 'hidden',
  email: '',
  emailError: 'hidden',
  subject: '',
  subjectError: 'hidden',
  message: '',
  messageError: 'hidden',
};

const ContactMe = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      [`${field}Error`]: 'hidden',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = {
      nameError: formData.name.trim() ? 'hidden' : 'block',
      emailError: formData.email.trim() ? 'hidden' : 'block',
      subjectError: formData.subject ? 'hidden' : 'block',
      messageError: formData.message.trim() ? 'hidden' : 'block',
    };

    setFormData((prev) => ({ ...prev, ...nextErrors }));

    if (!formData.name.trim()) return toast.warn('Please enter your name.', { autoClose: 5000, theme: 'dark', transition: Bounce, });
    if (!formData.email.trim()) return toast.error('Oops! Please enter your email.', { autoClose: 5000, theme: 'dark', transition: Bounce, });
    if (!formData.subject) return toast.info('Uh-oh! Don’t forget your subject.', { autoClose: 5000, theme: 'dark', transition: Bounce, });
    if (!formData.message.trim()) return toast.warn('Please add a short message.', { autoClose: 5000, theme: 'dark', transition: Bounce, });

    setIsSubmitting(true);

    try {
      // Simulate submission delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      setFormData(initialFormState);
      toast.success('Your message has been sent successfully!', { autoClose: 5000, theme: 'dark', transition: Bounce, });
      toast.success('Thanks for reaching out! I will reply shortly.', { delay: 1000, autoClose: 5000, theme: 'dark', transition: Bounce, });
    } catch (error) {
      toast.error('Something went wrong while sending your message.', { autoClose: 5000, theme: 'dark', transition: Bounce, });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id='Contact' className='my-10 md:my-[112px]'>
        <div className="container">
          <div className="mb-10 md:mb-20">
            <div className='flex items-center justify-center font-poppins text-Primary font-medium text-lg md:text-2xl'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>CONTACT ME</ScrollFloat></div>
            <div className='flex items-center justify-center font-soldier text-Primary font-medium text-2xl md:text-4xl tracking-[2px] md:tracking-[5px] mt-3 md:mt-5'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=70%' scrollEnd='bottom bottom-=40%' stagger={0.03}>NO NEED TO BE SHY</ScrollFloat></div>
          </div>
          <div id="main" className='flex flex-col md:flex-row items-start gap-6 md:gap-10'>
            {/* -----------Left Side-------------- */}
            <form onSubmit={handleSubmit} id="LeftSide" className='w-full md:w-[700px] flex flex-col gap-5 md:gap-[20px]'>
              <div className='border-1 border-borderCol p-4 md:p-[20px] rounded-xl' data-aos="fade-up">
                <div className='flex items-center gap-4 md:gap-[24px]'>
                  <p className='text-second'>01</p>
                  <h2 className='text-second text-lg md:text-[26px] font-poppins font-medium'>What's your name? *</h2>
                </div>
                <input value={formData.name} onChange={(e) => updateField('name', e.target.value)} type="text" className='w-full py-3 md:py-[15px] text-base md:text-[24px] text-borderCol pl-6 md:pl-[40px] outline-none' placeholder='John Smith' />
                <p className={`text-coffee text-lg ml-10 ${formData.nameError}`}>Please fill out this field.</p>
              </div>
              <div className='border-1 border-borderCol p-4 md:p-[20px] rounded-xl' data-aos="fade-up">
                <div className='flex items-center gap-4 md:gap-[24px]'>
                  <p className='text-second'>02</p>
                  <h2 className='text-second text-lg md:text-[26px] font-poppins font-medium'>What's your Email? *</h2>
                </div>
                <input value={formData.email} onChange={(e) => updateField('email', e.target.value)} type="email" id='email' className='w-full py-3 md:py-[15px] text-base md:text-[24px] text-borderCol pl-6 md:pl-[40px] outline-none' placeholder='john@example.com' />
                <p className={`text-coffee text-lg ml-10 ${formData.emailError}`}>Please fill out this field.</p>
              </div>
              <div className='border-1 border-borderCol p-4 md:p-[20px] rounded-xl' data-aos="fade-up">
                <div className='flex items-center gap-4 md:gap-[24px]'>
                  <p className='text-second'>03</p>
                  <h2 className='text-second text-lg md:text-[26px] font-poppins font-medium'>What would you like to talk about? *</h2>
                </div>
                <label htmlFor="subject" className="sr-only">Conversation Topic</label>
                <select value={formData.subject} onChange={(e) => updateField('subject', e.target.value)} id="subject" aria-label="Conversation Topic" className='w-full py-3 md:py-[15px] text-base md:text-[22px] text-borderCol pl-6 md:pl-[40px] outline-none'>
                  <option value="">Please Choose An Option</option>
                  <option value="ca-studies">CA Studies & Academic Discussion</option>
                  <option value="accounting-finance">Finance & Accounting Query</option>
                  <option value="community-project">Community / Volunteering Initiative</option>
                  <option value="creative-design">Creative Design & Presentations</option>
                  <option value="general-networking">General Networking / Say Hello</option>
                  <option value="other">Other Inquiries</option>
                </select>
                <p className={`text-coffee text-lg ml-10 ${formData.subjectError}`}>Please fill out this field.</p>
              </div>
              <div className='border-1 border-borderCol p-4 md:p-[20px] rounded-xl' data-aos="fade-up">
                <div className='flex items-center gap-4 md:gap-[24px]'>
                  <p className='text-second'>04</p>
                  <h2 className='text-second text-lg md:text-[26px] font-poppins font-medium'>Your message *</h2>
                </div>
                <textarea value={formData.message} onChange={(e) => updateField('message', e.target.value)} name="TextArea" cols={40} rows={5} maxLength={2000} className='w-full pt-3 md:pt-[15px] text-base md:text-[24px] text-borderCol pl-6 md:pl-[40px] outline-none' placeholder='Hello Nishan, I would like to connect with you regarding...'></textarea>
                <p className={`text-coffee text-lg ml-10 ${formData.messageError}`}>Please fill out this field.</p>
              </div>
              <div data-aos="fade-up">
                <button disabled={isSubmitting} className='bg-coffee text-white font-medium font-poppins py-2 md:py-[12px] px-7 md:px-[28px] rounded-full cursor-pointer border-3 border-white outline-4 outline-coffee duration-300 hover:scale-[1.05] hover:bg-Primary hover:outline-Primary hover:outline-6 disabled:cursor-not-allowed disabled:opacity-70'>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            {/* -----------Right Side-------------- */}
            <div id="RightSide" className='relative w-full md:w-auto mt-10 md:mt-0'>
              <MdOutlineArrowBack data-aos="fade-up" className='hidden md:block text-[200px] md:text-[300px] rotate-[-45deg] text-borderCol absolute left-[-40px] md:left-[-80px] top-[-40px] md:top-[-80px]' />
              <div className='mt-0 md:mt-[180px]' data-aos="fade-up">
                <p className='font-poppins text-borderCol text-base md:text-[18px] font-medium opacity-50 uppercase'>Let's Talk</p>
                <h2 className='font-poppins text-second font-medium text-base md:text-[19px] max-w-full md:max-w-[500px] mt-4 md:mt-6'>Whether you want to discuss chartered accountancy, share study insights, collaborate on community projects, or simply connect — my inbox is always open.</h2>
              </div>
              <div className='mt-6 md:mt-10 opacity-90'>
                <p className='font-poppins text-borderCol text-base md:text-[18px] font-medium opacity-50 uppercase' data-aos="fade-up">Details</p>
                <div data-aos="fade-up" className='font-poppins text-second font-medium text-base md:text-[19px] max-w-full md:max-w-[500px] mt-4 md:mt-6 uppercase flex items-center gap-3 md:gap-5'>
                  <FaLocationDot />
                  <p>Bijayakharka, Khotang, Koshi Zone, Nepal</p>
                </div>
                <div data-aos="fade-up" className='font-poppins text-second font-medium text-base md:text-[19px] max-w-full md:max-w-[500px] mt-4 md:mt-6 flex items-center gap-3 md:gap-5'>
                  <MdEmail />
                  <p>nishankhanal@gmail.com</p>
                </div>
              </div>
              <div data-aos="fade-up" className='mt-6 md:mt-10'>
                <p className='font-poppins text-borderCol text-base md:text-[18px] font-medium opacity-50 uppercase'>Socials</p>
                <div className='mt-4 md:mt-7 flex items-center gap-4 md:gap-7'>
                  <Magnet padding={20} disabled={false} magnetStrength={2}>
                    <a href='https://www.facebook.com/' target='_blank' rel='noreferrer' aria-label="Facebook"><FaFacebookF className='text-[18px] hover-brown' /></a>
                  </Magnet>
                  <Magnet padding={20} disabled={false} magnetStrength={2}>
                    <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' aria-label="Instagram"><FaInstagram className='text-[18px] hover-brown' /></a>
                  </Magnet>
                  <Magnet padding={20} disabled={false} magnetStrength={2}>
                    <a href='https://www.tiktok.com/' target='_blank' rel='noreferrer' aria-label="TikTok"><FaTiktok className='text-[18px] hover-brown' /></a>
                  </Magnet>
                  <Magnet padding={20} disabled={false} magnetStrength={2}>
                    <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer' aria-label="LinkedIn"><FaLinkedinIn className='text-[18px] hover-brown' /></a>
                  </Magnet>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactMe
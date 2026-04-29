import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        
        <div className="space-y-7">
          <div className=''>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-[14px] md:text-lg max-w-md">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects and creative ideas.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
                <FaEnvelope size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Email me</p>
                <p className="text-gray-800 font-medium text-sm md:text-base">ihiasobuchi@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Location</p>
                <p className="text-gray-800 font-medium text-sm md:text-base">Lagos, Nigeria</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Let's talk</p>
                <p className="text-gray-800 font-medium text-sm md:text-base">+234 903 563 1639</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-100/50">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="user@gmail.com"
                  className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
              <input 
                type="text" 
                placeholder="How can I help you?"
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
              <textarea 
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-110 transition-all duration-200 ease-in-out shadow-lg active:scale-[0.98]"
            >
              Send Message <FaPaperPlane size={14} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
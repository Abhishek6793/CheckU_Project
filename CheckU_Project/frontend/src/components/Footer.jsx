import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-blue-50 to-indigo-100 mt-20'>
      <div className='md:mx-10 px-6 py-16'>
        <div className='flex flex-col lg:grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12'>
          
          {/* ---------- Left Section ---------- */}
          <div className='space-y-6'>
            <div className='flex items-center space-x-3'>
              <img className='w-12 h-12 rounded-lg shadow-lg' src={assets.logo} alt="Logo" />
              <div>
                <h2 className='text-2xl font-bold text-gray-800'>HealthCare+</h2>
                <p className='text-sm text-blue-600'>Your Health, Our Priority</p>
              </div>
            </div>
            <p className='text-gray-600 leading-relaxed max-w-md'>
              Our healthcare platform connects patients with qualified doctors, 
              providing convenient online consultations and comprehensive medical services. 
              We're committed to making quality healthcare accessible to everyone.
            </p>
            <div className='flex space-x-4'>
              <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer'>
                <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'/>
                </svg>
              </div>
              <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer'>
                <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z'/>
                </svg>
              </div>
              <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer'>
                <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.196.233.225.437.166.676-.402 1.676-.402 1.676-.402 1.676-.402 1.676-.402 1.676-.131.402-.402 1.676-.402 1.676-.131.402-.402 1.676-.402 1.676-.131.402-.131.402-.131.402-.131.402-.131.402-.131.402z'/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* ---------- Company Section ---------- */}
          <div className='space-y-6'>
            <h3 className='text-lg font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 inline-block'>
              Company
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link to="/" className='text-gray-600 hover:text-blue-600 hover:translate-x-1 transform transition-all duration-300 flex items-center group'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600'></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className='text-gray-600 hover:text-blue-600 hover:translate-x-1 transform transition-all duration-300 flex items-center group'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600'></span>
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" className='text-gray-600 hover:text-blue-600 hover:translate-x-1 transform transition-all duration-300 flex items-center group'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600'></span>
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/doctors" className='text-gray-600 hover:text-blue-600 hover:translate-x-1 transform transition-all duration-300 flex items-center group'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600'></span>
                  All Doctors
                </Link>
              </li>
            </ul>
          </div>
          
          {/* ---------- Quick Links Section ---------- */}
          <div className='space-y-6'>
            <h3 className='text-lg font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 inline-block'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link to="/my-profile" className='text-gray-600 hover:text-blue-600 hover:translate-x-1 transform transition-all duration-300 flex items-center group'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600'></span>
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="/my-appointments" className='text-gray-600 hover:text-blue-600 hover:translate-x-1 transform transition-all duration-300 flex items-center group'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600'></span>
                  My Appointments
                </Link>
              </li>
              <li>
                <Link to="/login" className='text-gray-600 hover:text-blue-600 hover:translate-x-1 transform transition-all duration-300 flex items-center group'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600'></span>
                  Login
                </Link>
              </li>
            </ul>
          </div>
          
          {/* ---------- Contact Section ---------- */}
          <div className='space-y-6'>
            <h3 className='text-lg font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 inline-block'>
              Get In Touch
            </h3>
            <div className='space-y-4'>
              <div className='flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center'>
                  <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'></path>
                  </svg>
                </div>
                <div>
                  <p className='text-sm text-gray-500'>Phone</p>
                  <a href="tel:+1-212-456-7890" className='text-gray-700 hover:text-blue-600 font-medium'>
                    +1-212-456-7890
                  </a>
                </div>
              </div>
              
              <div className='flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center'>
                  <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path>
                  </svg>
                </div>
                <div>
                  <p className='text-sm text-gray-500'>Email</p>
                  <a href="mailto:abhianand6793@gmail.com" className='text-gray-700 hover:text-blue-600 font-medium'>
                    abhianand6793@gmail.com
                  </a>
                </div>
              </div>
              
              <div className='flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm'>
                <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center'>
                  <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'></path>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'></path>
                  </svg>
                </div>
                <div>
                  <p className='text-sm text-gray-500'>Address</p>
                  <p className='text-gray-700 text-sm'>123 Health Street, Medical City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* ---------- Newsletter Section ---------- */}
        <div className='bg-white rounded-xl p-6 mb-8 shadow-lg'>
          <div className='text-center max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold text-gray-800 mb-2'>Stay Updated</h3>
            <p className='text-gray-600 mb-6'>Subscribe to our newsletter for health tips and updates</p>
            <div className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
              <input 
                type='email' 
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
              <button className='bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium whitespace-nowrap'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* ---------- Copyright Section ---------- */}
        <div className='border-t border-gray-200 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-600 text-sm'>
              © 2024 HealthCare+. All rights reserved.
            </p>
            <div className='flex space-x-6 text-sm text-gray-600'>
              <Link to="/privacy" className='hover:text-blue-600 transition-colors'>Privacy Policy</Link>
              <Link to="/terms" className='hover:text-blue-600 transition-colors'>Terms of Service</Link>
              <Link to="/cookies" className='hover:text-blue-600 transition-colors'>Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
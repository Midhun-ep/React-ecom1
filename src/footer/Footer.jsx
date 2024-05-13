import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram ,FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div className='bg-zinc-100'>
    <footer className="footer mt-4  text-gray-700">
      <div className=" mx-auto px-4 py-8 flex flex-wrap justify-between md:ml-20">
        <div className="w-full md:w-auto lg:w-auto md:flex-1 lg:flex-1">
          <h2 className="mb-3 text-lg font-semibold">About Us</h2>
          <p className="text-sm">
            Welcome to SHOPIFY, where style meets comfort. We offer a curated selection of trendy and timeless footwear, ensuring every step you take is a confident stride towards fashion-forward expression.
          </p>
          <ul className="mt-6 list-none space-y-2">
            <li key="about-company">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Company
              </a>
            </li>
            <li key="about-team">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Team
              </a>
            </li>
            <li key="about-careers">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-auto lg:w-auto md:flex-1 lg:flex-1 md:ml-48">
          <h2 className="mb-3 text-lg font-semibold">Group Companies</h2>
          <ul className="mt-6 list-none space-y-2">
            <li key="group-myntra">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Myntra
              </a>
            </li>
            <li key="group-flipkart">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Flipkart Wholesale
              </a>
            </li>
            <li key="group-cleartrip">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Cleartrip
              </a>
            </li>
            <li key="group-shopsy">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Shopsy
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-auto lg:w-auto md:flex-1 lg:flex-1">
          <h2 className="mb-3 text-lg font-semibold">Help</h2>
          <ul className="mt-6 list-none space-y-2">
            <li key="help-faq">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                FAQ
              </a>
            </li>
            <li key="help-shipping">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Shipping
              </a>
            </li>
            <li key="help-cancellation">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Cancellation & Returns
              </a>
            </li>
            <li key="help-contact">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        

      </div>

    </footer>

    <div className="flex justify-center md:mt-2 mb-2 pb-4">
          <a href="#" className="text-gray-500 mx-2 hover:text-gray-900">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-500 mx-2 hover:text-gray-900">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-500 mx-2 hover:text-gray-900">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-500 mx-2 hover:text-gray-900">
            <FaLinkedin size={24} />
          </a>
        </div>

    <hr />
    <div>
    <p className="mt-3 pb-4 text-center text-lg">© 2024 SHOPIFY. All Rights Reserved.</p>
    </div>
    </div>
    </>
  );
};

export default Footer;

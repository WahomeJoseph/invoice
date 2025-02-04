/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

 const Footer = ({name, email, phone, bankName, bankAccount, website, address}) => {
  return (
    <footer className="footer border-t-2 border-gray-300 pt-5">
    <ul className="flex flex-wrap p-2 sm:p-2 items-center justify-center">
      <li className='my-2 mx-6'>
        <span className="font-bold">Full Name:</span> {name}
      </li>
      <li  className='my-2 mx-6'>
        <span className="font-bold">Email:</span> {email}
      </li>
      <li  className='my-2 mx-6'>
        <span className="font-bold">Address:</span> {address}
      </li>
      <li  className='my-2 mx-6'>
        <span className="font-bold">Phone Number:</span> {phone}
      </li>
      <li  className='my-2 mx-6'>
        <span className="font-bold">Bank Name:</span> {bankName}
      </li>
      <li  className='my-2 mx-6'>
        <span className="font-bold">Account Holder:</span> {name}
      </li>
      <li  className='my-2 mx-6'>
        <span className="font-bold">Account Number:</span> {bankAccount}
      </li>
      <li  className='my-2 mx-6'>
        <span className="font-bold">Website:</span>{" "}
        <a href={website} target="_blank" rel="noopenner noreferrer">
          {website}
        </a>
      </li>
    </ul>
    <p className="text-center px-5 mt-8 text-xs ">
    Invoice is built by{" "}
    <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
      Wahome Joseph
    </a>
  </p>
  </footer>
  )
}

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  bankName: PropTypes.string.isRequired,
  bankAccount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  website: PropTypes.string.isRequired,
}
export default Footer

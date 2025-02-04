/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Dates = ({invoiceNumber, invoiceDate, dueDate}) => {
  return (
    <article className="mt-10 mb-14 flex items-end justify-end">
    <ul>
      <li className="p-2 ">
        <span className="font-bold">Invoicer Number:</span> {invoiceNumber}
      </li>
      <li className="p-2 bg-gray-100 border border-blue-700 rounded-sm">
        <span className="font-bold">Invoice Date:</span> {invoiceDate}
      </li>
      <li className="p-2 ">
        <span className="font-bold">Due Date:</span> {dueDate}
      </li>
    </ul>
  </article>
  )
}
Dates.propTypes = {
  invoiceNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  invoiceDate: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
}

export default Dates

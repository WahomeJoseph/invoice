/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Header = ({handlePrint}) => {
  return (
    <header className="bg-[#f1f1f1] items-center justify-center p-2 rounded-sm xl:flex-row xl:justify-between">
        <div>
          <h2 className="font-bold uppercase text-2xl">JW Recipes Invoice</h2>
        </div>
        
        <ul className='flex flex-wrap items-center justify-end gap-6'>
            <li>
              <button onClick={handlePrint} className="bg-black text-white font-bold py-2 px-8 border border-black rounded-md shadow-sm hover:bg-transparent hover:text-black cursor-pointer transition-all duration-300">Print</button>
            </li>
            <li>
              <button className="bg-green-700 text-white font-bold py-2 px-8 border border-green-700 rounded-md shadow-sm hover:bg-transparent hover:text-green-700 transition-all duration-300">Download</button>
            </li>
            <li>
              <button className="bg-blue-700 text-white font-bold py-2 px-8 border border-blue-700 rounded-md shadow-sm hover:bg-transparent hover:text-blue-700 transition-all duration-300">Send</button>
            </li>
          </ul>
          {/* <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li>
              <button
                onClick={handlePrint}
                className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
              >
                Print
              </button>
            </li>
            <li className="mx-2">
              <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                Download
              </button>
            </li>
            <li>
              <button className="bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300">
                Send
              </button>
            </li>
          </ul>
        </div> */}
    </header>
  )
}
Header.propTypes = {
  handlePrint: PropTypes.func.isRequired,
}

export default Header

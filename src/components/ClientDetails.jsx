/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

 const ClientDetails = ({clientName, clientAddress, email}) => {
  return (
    <section className="mt-10">
        <h2 className="text-2xl uppercase font-bold mb-1">{clientName}</h2>
        <span>{clientAddress}</span>
        {/* <span>{email}</span> */}
      </section>
  )
}
ClientDetails.propTypes = {
  clientName: PropTypes.string.isRequired,
  clientAddress: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

export default ClientDetails

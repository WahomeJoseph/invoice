/* eslint-disable no-unused-vars */
import React from 'react'
import propTypes from 'prop-types'

 const MainDetails = ({name,bankName, address}) => {
  return (
    <section className="flex flex-col items-end justify-end">
    <h2 className="font-bold text-3xl uppercase mb-1 md:text-3xl">{name}</h2>
    <span>{bankName}</span>
    <p>{address}</p>
  </section>
  )
}
MainDetails.propTypes = {
  name: propTypes.string.isRequired,
  bankName: propTypes.string.isRequired,
  address: propTypes.string.isRequired
}
export default MainDetails
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Notes = ({notes}) => {
  return (
    <div>
      <section className="mt-10 mb-5">
        <h2 className='font-bold'>Additional notes</h2>
        <p className="lg:w-2/3 md:w-1/2 p-4 text-justify">{notes}</p>
      </section>
    </div>
  )
}

Notes.propTypes = {
  notes: PropTypes.string.isRequired
}

export default Notes

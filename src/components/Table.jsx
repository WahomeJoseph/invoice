import React from 'react'
import PropTypes from 'prop-types'

const Table = ({ list }) => {
  return (
    <>
      <table width="100%" className="mb-10 w-full">
        <thead>
          <tr className="bg-gray-100 border border-blue-700">
            <td className="font-bold p-2">Description</td>
            <td className="font-bold p-2">Quantity</td>
            <td className="font-bold p-2">Price</td>
            <td className="font-bold p-2">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td className='p-2'>{description}</td>
                <td className='p-2'>{quantity}</td>
                <td className='p-2'>{price}</td>
                <td className='p-2'>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      {/* <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Kshs. {total.toLocaleString()}
        </h2>
      </div> */}
    </>

  )
}

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
}
export default Table

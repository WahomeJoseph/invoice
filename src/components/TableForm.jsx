import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuidv4 } from 'uuid'
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

 const TableForm = ({description,setDescription, quantity,setQuantity, price,setPrice, amount, setAmount, list, setList}) => {
  const [edit, setEdit] = useState(false)
  const handleSubmit = (e) =>{
    e.preventDefault()
    const newItem = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount,
    }
    setDescription('')
    setQuantity('')
    setPrice('')
    setAmount('')
    setList([...list, newItem])
    console.log(newItem)
  }
  
  useEffect(() => {
    const calcAmount = () => {
      setAmount(quantity * price)
    }
    calcAmount()
  }, [quantity, amount, price, setAmount])

  const handleEdit = (id) => {
    const edit= list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setEdit(true)
    setDescription(edit.description)
    setQuantity(edit.quantity)
    setPrice(edit.price)
  }
  const handleDelete = (id) => {
    setList(list.filter((row) => row.id !== id))
  }
  
  return (
    <div>
      <ToastContainer position="top-right" theme="colored" />
      <form onSubmit={handleSubmit}>
        <div className="flex p-2 space-y-2 flex-col">
          <label htmlFor="description" className='font-bold'>Item Description:</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Enter item description"
            maxLength={96}
            value={description}
            className="p-2 rounded-sm border border-blue-900"
            onChange={(e) => setDescription(e.target.value)}/>
        </div>

        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex p-2 space-y-2 flex-col">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Enter item quantity"
              maxLength={33}
              value={quantity}
              className="p-2 rounded-sm border border-blue-900"
              onChange={(e) => setQuantity(e.target.value)}/>
          </div>

          <div className="flex p-2 space-y-2 flex-col">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Enter item price"
              maxLength={33}
              value={price}
              className="p-2 rounded-sm border border-blue-900"
              onChange={(e) => setPrice(e.target.value)}/>
          </div>
          <div  className="flex p-2 space-y-2 flex-col">
            <label htmlFor="price">Amount:</label>
            <span>{amount}</span>
          </div>
        </div>
        <button type='submit' className="bg-blue-700 p-2 text-white ml-2 mt-2 mb-4 font-bold py-2 px-4 border border-blue-700 rounded-md shadow-sm cursor-pointer hover:bg-transparent hover:text-blue-700 hover:border-blue-700 transition-all duration-300">Add Item</button>
      </form>

      <>
      <table width="100%" className="mb-10 w-full">
        <thead>
          <tr className="bg-gray-100 border border-blue-700">
            <td className="font-bold p-2">Description</td>
            <td className="font-bold p-2">Quantity</td>
            <td className="font-bold p-2">Price</td>
            <td className="font-bold p-2">Amount</td>
            <td className="font-bold p-2">Actions</td>
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
                <td className='flex flex-wrap p-2 justify-between'>
                  <button onClick={() => handleEdit(id)}><CiEdit className="text-green-600 text-3xl cursor-pointer hover:scale-[+1.2] transition-all duration-300" /></button>
                  <button onClick={() => handleDelete(id)}><MdDeleteOutline className="text-red-500 font-bold text-3xl cursor-pointer hover:scale-[+1.2] transition-all duration-300" /></button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </>

      <ul>
      
      </ul>
    </div>
  )
}
TableForm.propTypes = {
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setQuantity: PropTypes.func.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setPrice: PropTypes.func.isRequired,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setAmount: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  setList: PropTypes.func.isRequired
}

export default TableForm

/* eslint-disable no-unused-vars */
import React, { useState} from "react";
import Notes from './Notes.jsx'
import ClientDetails from './ClientDetails.jsx'
import Footer from './Footer.jsx'
import MainDetails from './MainDetails.jsx'
import Dates from './Dates.jsx'
import Header from './Header.jsx'
import TableForm from "./TableForm.jsx";
import Table from "./Table.jsx";
// import ReactToPrint from "react-to-print";
// import { StateInvoice } from "../context/UseContext.jsx";
// import { DonateButton } from "../buttons";

const Invoice = () => {
  const handlePrint = () => {
    window.print()
  }

  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  // const { name, setName, address, setAddress, email, setEmail, phone, setPhone, bankName, setBankName, bankAccount, setBankAccount, website, setWebsite, clientName, setClientName, clientAddress, setClientAddress, invoiceNumber, setInvoiceNumber, invoiceDate, setInvoiceDate, dueDate, setDueDate, notes, setNotes, componentRef } = useContext(StateInvoice)
  return (
    <>
    <div>
      <main className="flex my-8 bg-[#ffffff] w-full p-8 md:max-w-2xl md:mx-auto sm:mx:auto rounded xl:grid grid-cols-1 gap-10 xl:items-start" style={{
          maxWidth: "1920px",
          margin: "auto",
        }}>

        {/* Invoice Preview */}
        <div className="invoice__preview sm:p-2 bg-gray-200 p-12 rounded-sm shadow-md">
          {/* <ReactToPrint
            trigger={() => (
              <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
                Print / Download
              </button>
            )}
            /> */}

          {showInvoice ? 
          <div className="p-8 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-[#3f3f46] via-[#71717a] to-[#d4d4d8]">
            <Header handlePrint={handlePrint} />
            <MainDetails name={name} bankName={bankName} address={address} />
            <ClientDetails clientName={clientName} clientAddress={clientAddress} email={email}/>
            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/>
            <Table description={description} quantity={quantity} price={price} amount={amount} list={list} setList={setList} />
            <Notes notes={notes} />
            <Footer name={name} address={address} email={email} phone={phone} website={website} bankName={bankName} bankAccount={bankAccount} />
          <button onClick={() => setShowInvoice(false)} className="mt-5 bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-sm border cursor-pointer hover:bg-transparent hover:border-blue-700 hover:text-blue-700 transition-all duration-300">Edit Info</button>
        </div> : (
          <>
          <section className="py-4">
            <h2 className="items-center text-center font-bold text-3xl text-blue-700 uppercase">Edit Information</h2>
          <div className=" bg-transparent p-8 rounded-xl">
            <div className="flex p-2 flex-col justify-center">
              <article className="grid grid-cols-2 bg-transparent p-1 rounded-sm gap-10">
                <div className="flex space-y-2 p-2 flex-col">
                  <label htmlFor="name">Full Name:</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your full name"
                    maxLength={56}
                    autoComplete="off"
                    value={name}
                    className="p-2 rounded-sm border border-blue-700"
                    onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="flex p-2 space-y-2 flex-col">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    maxLength={96}
                    value={address}
                    className="p-2 rounded-sm border border-blue-700"
                    onChange={(e) => setAddress(e.target.value)}/>
                </div>
              </article>

              <article className="md:grid grid-cols-3 p-1 mt-2 gap-10">
                <div className="flex p-2 space-y-2 flex-col">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    maxLength={255}
                    autoComplete="off"
                    value={email}
                    className="p-2 rounded-sm border border-blue-700"
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="flex p-2 space-y-2 flex-col">
                  <label htmlFor="website">Website url:</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Website url"
                    maxLength={96}
                    autoComplete="off"
                    value={website}
                    className="p-2 rounded-sm border border-blue-700"
                    onChange={(e) => setWebsite(e.target.value)}/>
                </div>

                <div className="flex p-2 space-y-2 flex-col">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="text"
                    name="Enter phone number"
                    id="phone"
                    placeholder="Enter phone number"
                    maxLength={12}
                    autoComplete="off"
                    value={phone}
                    className="p-2 rounded-sm border border-blue-700"
                    onChange={(e) => setPhone(e.target.value)}/>
                </div>
              </article>

              <article className="md:grid grid-cols-2 p-1 mt-10 sm:mt-10 md:mt-10 gap-10">
                <div className="flex p-2 space-y-2 flex-col">
                  <label htmlFor="bankName">Bank Name:</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter your bank name"
                    maxLength={56}
                    autoComplete="off"
                    value={bankName}
                    className="p-2 rounded-sm border border-blue-700"
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>

                <div className="flex p-2 space-y-2 flex-col">
                  <label htmlFor="bankAccount">Bank Account Number:</label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter bank account number"
                    maxLength={20}
                    autoComplete="off"
                    value={bankAccount}
                    className="p-2 rounded-sm border border-blue-700"
                    onChange={(e) => setBankAccount(e.target.value)}/>
                </div>
              </article>

              <article className="md:grid grid-cols-2 p-1 mt-4 gap-10">
                <div className="flex p-2 space-y-2 flex-col">
                  <label htmlFor="clientName">Clients Name:</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter client's name"
                    maxLength={56}
                    autoComplete="off"
                    value={clientName}
                    className="p-2 rounded-sm border border-blue-700"
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex p-2 space-y-2 flex-col">
                  <label htmlFor="clientAddress">Clients Address:</label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter client's address"
                    maxLength={96}
                    autoComplete="off"
                    value={clientAddress}
                    className="p-2 rounded-sm border border-blue-700"
                    onChange={(e) => setClientAddress(e.target.value)}/>
                </div>
              </article>

              <article className="md:grid grid-cols-3 p-1 mt-6 mb-6 gap-10">
                <div className="flex p-2 space-y-2 flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number:</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Enter the Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    className="p-2 rounded-sm border border-blue-700"
                    onChange={(e) => setInvoiceNumber(e.target.value)}/>
                </div>

                <div className="flex p-2 space-y-2 flex-col">
                  <label htmlFor="invoiceDate">Invoice Date:</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    className="p-2 rounded-sm border border-blue-700"
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex p-2 space-y-2 flex-col">
                  <label htmlFor="dueDate">Due Date:</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Enter Invoice Due Date"
                    autoComplete="off"
                    value={dueDate}
                    className="p-2 rounded-sm border border-blue-700"
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              <article className="mt-10">
                <TableForm
                 description={description} setDescription={setDescription}
                 quantity={quantity} setQuantity={setQuantity}
                 price={price} setPrice={setPrice} 
                 amount={amount} setAmount={setAmount}
                 list={list}
                 setList={setList}
                 total={total}
                 setTotal={setTotal}/>
              </article>

              <label htmlFor="notes" className="text-xl mt-6 p-2">Additional Notes:</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Enter additional notes to the client"
                maxLength={500}
                value={notes}
                className="p-2 rounded-sm border border-blue-700"
                onChange={(e) => setNotes(e.target.value)}>
              </textarea>
            </div>
          </div>
        </section>

          <div className="flex justify-center mb-2 gap-10">
            <input type="text" name="text" placeholder="ENTER YOUR NAME" autoComplete="off" className="w-1/2 p-2 rounded-sm border border-blue-700"/>
            <button onClick={() => setShowInvoice(true)} className="bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-md shadow-sm cursor-pointer hover:bg-transparent hover:text-blue-700 hover:border-blue-700 transition-all duration-300">Preview Invoice</button>
          </div>
          </>
        )}
        </div>
      </main>
    </div>
    </>
  );
}

export default Invoice
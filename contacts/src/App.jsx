import React from 'react';

function App() {
  return (
    <div className='flex flex-column'>
    <div className="text-center text-white size-20 bg-black mr-44">
      <h1 className=" text-black mr-14">Contact</h1>
      
      <div className="flex flex-column text-center gap-7 ">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 flex-1"
          placeholder="Firstname"
        />
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 flex-1"
          placeholder="Lastname"
        />
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 flex-1"
          placeholder="Email"
        />
        <button className="bg-blue-500 text-white rounded-md px-4 py-2">
          Add Contact
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;
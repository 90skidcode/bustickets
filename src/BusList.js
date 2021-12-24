import React from 'react'
const people = [
    {
      name: 'Rhythm Xpress',
      type: 'Bharat Benz A/C Sleeper (2+1)',
      departure: '21:00',
      from : 'Erode Bus stand',
      to : 'Tambaram',
      duration: '08h 00m',
      arrival : '05:00',
      fare : '799',
      seats_available : '15'
    },{
        name: 'Rhythm Xpress',
        type: 'Bharat Benz A/C Sleeper (2+1)',
        departure: '21:00',
        from : 'Erode Bus stand',
        to : 'Tambaram',
        duration: '08h 00m',
        arrival : '05:00',
        fare : '799',
        seats_available : '15'
      },{
        name: 'Rhythm Xpress',
        type: 'Bharat Benz A/C Sleeper (2+1)',
        departure: '21:00',
        from : 'Erode Bus stand',
        to : 'Tambaram',
        duration: '08h 00m',
        arrival : '05:00',
        fare : '799',
        seats_available : '15'
      }
  ]
  
  export default function BusList() {
    return (
        <>
        
<div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 border-separate">
                <thead className="">
                  <tr className="border-separate">
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-thin text-gray-500 uppercase tracking-wider"
                    >
                      21 Buses Found
                    </th>
                   
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-thin text-gray-500 uppercase tracking-wider"
                    >
                      Departure
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-thin text-gray-500 uppercase tracking-wider"
                    >
                      Duration
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-thin text-gray-500 uppercase tracking-wider"
                    >
                      Arrival
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-thin text-gray-500 uppercase tracking-wider"
                    >
                       Fare
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-thin text-gray-500 uppercase tracking-wider"
                    >
                      Seats Available
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {people.map((person) => (
                    <tr cell className="border-2 my-5 box-border" key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">                         
                          <div>
                            <div className="text-sm font-medium text-gray-900">{person.name}</div>
                            <div className="text-sm text-gray-500">{person.type}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{person.departure}</div>
                        <div className="text-sm text-gray-500">{person.from}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{person.duration}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.arrival}</div>
                        <div className="text-sm text-gray-500">{person.to}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-bold">
                     
                      <span className="px-2 inline-flex text-xs leading-5 font-normal rounded-full -mr-1">
                          Start from INR</span>{person.fare}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {person.seats_available}  </span>                           
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        View Seat
                        </button>
                          </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div></>
     
    )
  }
  
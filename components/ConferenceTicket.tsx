
import React from 'react';
import { RegistrationResult } from '../types';
import { CONFERENCE_INFO } from '../constants';

interface TicketProps {
  data: RegistrationResult;
}

const ConferenceTicket: React.FC<TicketProps> = ({ data }) => {
  return (
    <div className="max-w-lg w-full bg-white border-2 border-dashed border-gray-300 rounded-3xl overflow-hidden shadow-2xl mx-auto">
      {/* Header */}
      <div className="bg-amber-400 text-gray-900 p-6 text-center">
        <h2 className="text-2xl font-bold serif leading-tight">{CONFERENCE_INFO.title}</h2>
        <p className="text-xs text-gray-800 mt-1 uppercase tracking-widest">{CONFERENCE_INFO.type}</p>
      </div>
      
      {/* Body */}
      <div className="p-8 relative">
        <div className="absolute top-4 right-8 opacity-10">
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Participant Name</p>
              <p className="text-lg font-bold text-gray-800">{data.fullName}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Reg ID</p>
              <p className="text-lg font-mono font-bold text-amber-700">{data.registrationId}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Profession</p>
              <p className="text-sm font-medium text-gray-700">{data.profession}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Status</p>
              <p className="text-sm font-bold text-green-600">PAID - CONFIRMED</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Payment ID</p>
              <p className="text-[10px] font-mono text-gray-500 truncate">{data.paymentId}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Amount Paid</p>
              <p className="text-sm font-bold text-gray-800">₹{data.amount}</p>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <div className="bg-gray-50 p-4 border border-gray-100 rounded-xl">
               {/* Simplified QR Placeholder */}
               <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded">
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data.registrationId}`} alt="QR Code" className="w-full h-full" />
               </div>
               <p className="text-[10px] text-center mt-2 text-gray-400 font-mono">Scan for entry</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 p-4 border-t border-gray-100 text-center">
        <p className="text-[10px] text-gray-400">
          This is a virtual ticket generated on {data.paymentDate}.<br />
          Please carry a digital or printed copy to the venue.
        </p>
      </div>
    </div>
  );
};

export default ConferenceTicket;

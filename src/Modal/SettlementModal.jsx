import React from 'react';

function SettlementModal({ close }) {
    return (
        <div className="fixed right-5 top-5 flex items-center justify-center z-50">
            <div className="bg-red-100 p-5 rounded shadow-lg w-80">
                <p className="text-center text-gray-600 mb-4">You are blocklisted. Please contact the Barangay for settlement.</p>
                <button
                    onClick={close}
                    className="w-full bg-red-500 text-white py-2 rounded mt-4"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default SettlementModal;

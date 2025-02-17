import React, { useState } from "react";

interface Report {
  id: number;
  name: string;
  department: string;
  status: string;
  date: string;
  owner: boolean;
}

interface CustomModalProps {
  report: Report | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reportId: number) => void;
  onReject: (reportId: number, reason: string) => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  report,
  isOpen,
  onClose,
  onConfirm,
  onReject
}) => {
  const [rejectReason, setRejectReason] = useState("");

  if (!isOpen || !report) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] h-[90%] overflow-auto">
        <h2 className="text-xl font-semibold">{report.name}</h2>

        <div className="mt-3">
          <p>
            <strong>Department:</strong> {report.department}
          </p>
          <p>
            <strong>Status:</strong> {report.status}
          </p>
          <p>
            <strong>Date:</strong> {report.date}
          </p>
        </div>

        <div className="mt-4">
          <h3 className="font-medium">Report Details</h3>
          <p className="text-gray-600">
            Detailed information about the report goes here...
          </p>
        </div>

        <div className="mt-4">
          <h3 className="font-medium">Reject Reason (if rejecting)</h3>
          <textarea
            className="w-full border p-2 rounded"
            rows={3}
            placeholder="Enter reason..."
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
          />
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button className="bg-gray-400 px-4 py-2 rounded" onClick={onClose}>
            Close
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => {
              onConfirm(report.id);
              onClose();
            }}>
            Confirm
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded"
            onClick={() => {
              if (!rejectReason.trim()) {
                alert("Please enter a rejection reason.");
                return;
              }
              onReject(report.id, rejectReason);
              setRejectReason(""); // Clear input
              onClose();
            }}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;

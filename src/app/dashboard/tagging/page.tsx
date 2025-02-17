"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ChevronDown, User, X, Filter } from "lucide-react";

type TagStatus = string;
type TrackingStatus = string;

interface Tag {
  serialNumber: string;
  number: string;
  type: string;
  createdAt: string;
  status: TagStatus;
  trackingStatus: TrackingStatus;
  site: string;
  received: boolean;
}

const TagManagementInterface = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"status" | "receive">("status");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [selectedSite, setSelectedSite] = useState<string>("");
  const [tags, setTags] = useState<Tag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulated data and constants
  const statuses = ["Active", "Inactive", "Pending", "Completed","dancing"];
  const trackingStatuses = ["In Transit", "Delivered", "Processing", "Unknown"];
  const sites = ["Site A", "Site B", "Site C", "Site D"];

  // Function to generate dummy data
  const generateDummyTags = (count: number): Tag[] => {
    return Array.from({ length: count }, (_, i) => ({
      serialNumber: `TAG-${Math.floor(Math.random() * 1000000)}`,
      number: `NUM-${Math.floor(Math.random() * 1000)}`,
      type: `Type-${Math.floor(Math.random() * 5)}`,
      createdAt: new Date(
        Date.now() - Math.random() * 10000000000
      ).toISOString(),
      status: statuses[Math.floor(Math.random() * statuses.length)],
      trackingStatus:
        trackingStatuses[Math.floor(Math.random() * trackingStatuses.length)],
      site: sites[Math.floor(Math.random() * sites.length)],
      received: Math.random() > 0.5
    }));
  };

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        // Simulate API call with a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const dummyData = generateDummyTags(10);
        setTags(dummyData);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load tags");
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Rest of the component remains the same, only showing key changes
  const uniqueStatuses = useMemo(() => {
    const statuses = new Set(tags.map((tag) => tag.status));
    return Array.from(statuses);
  }, [tags]);

  const uniqueSites = useMemo(() => {
    const sites = new Set(tags.map((tag) => tag.site));
    return Array.from(sites).map((site) => ({
      id: site,
      name: site
    }));
  }, [tags]);

  const uniqueTrackingStatuses = useMemo(() => {
    const trackingStatuses = new Set(tags.map((tag) => tag.trackingStatus));
    return Array.from(trackingStatuses);
  }, [tags]);

  const filteredTags = useMemo(() => {
    return tags.filter((tag) => {
      const statusMatch = !filterStatus || tag.status === filterStatus;
      const siteMatch = !selectedSite || tag.site === selectedSite;
      return statusMatch && siteMatch;
    });
  }, [tags, filterStatus, selectedSite]);

  const handleStatusChange = async (
    serialNumber: string,
    newStatus: string
  ) => {
    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      setTags((prevTags) =>
        prevTags.map((tag) =>
          tag.serialNumber === serialNumber
            ? { ...tag, status: newStatus }
            : tag
        )
      );
    } catch (err) {
      setError("Failed to update tag status");
    }
  };

  const handleReceiveTags = async () => {
    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      setTags((prevTags) =>
        prevTags.map((tag) =>
          selectedTags.includes(tag.serialNumber)
            ? { ...tag, received: true }
            : tag
        )
      );
      setSelectedTags([]);
      setIsModalOpen(false);
    } catch (err) {
      setError("Failed to mark tags as received");
    }
  };

  // StatusModal component and rest of the JSX remain the same
  const StatusModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[600px] max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {modalType === "receive"
              ? "Mark Tags as Received"
              : "Manage Tag Status"}
          </h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          {filteredTags.map((tag) => (
            <div
              key={tag.serialNumber}
              className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div>
                <span className="font-medium">{tag.serialNumber}</span>
                <span className="text-sm text-gray-500 ml-2">({tag.site})</span>
              </div>
              <select
                className="border rounded p-2 w-48"
                value={tag.status}
                onChange={(e) =>
                  handleStatusChange(tag.serialNumber, e.target.value)
                }>
                {uniqueStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {modalType === "receive" && (
          <button
            className="mt-6 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
            onClick={handleReceiveTags}>
            Mark Selected Tags as Received
          </button>
        )}
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {isModalOpen && <StatusModal />}

      <div className="bg-gray-200 p-4 rounded-t-lg">
        <div className="flex justify-between items-center">
          <div className="bg-black text-white px-4 py-2 rounded-md">
            COMPANY ADMINISTRATOR
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm">AM</span>
            </div>
            <span>Arnaud Manzi</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <select
              className="border rounded p-2"
              value={selectedSite}
              onChange={(e) => setSelectedSite(e.target.value)}>
              <option value="">All Sites</option>
              {uniqueSites.map((site) => (
                <option key={site.id} value={site.id}>
                  {site.name}
                </option>
              ))}
            </select>

            <select
              className="border rounded p-2"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="">All Statuses</option>
              {uniqueStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="flex space-x-4">
            <button
              className="bg-black text-white px-6 py-2 rounded"
              onClick={() => {
                setFilterStatus("");
                setSelectedSite("");
              }}>
              View Existing Tags
            </button>
            <button
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
              onClick={() => {
                setModalType("receive");
                setIsModalOpen(true);
              }}>
              Mark As Received
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4">
                  <input
                    type="checkbox"
                    className="rounded"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedTags(
                          filteredTags.map((tag) => tag.serialNumber)
                        );
                      } else {
                        setSelectedTags([]);
                      }
                    }}
                    checked={
                      selectedTags.length === filteredTags.length &&
                      filteredTags.length > 0
                    }
                  />
                </th>
                <th className="p-4 text-left">Tag Serial Number</th>
                <th className="p-4 text-left">Site</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Created At</th>
                <th className="p-4 text-left">Tracking Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTags.map((tag) => (
                <tr
                  key={tag.serialNumber}
                  className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={selectedTags.includes(tag.serialNumber)}
                      onChange={() => {
                        if (selectedTags.includes(tag.serialNumber)) {
                          setSelectedTags((prev) =>
                            prev.filter((id) => id !== tag.serialNumber)
                          );
                        } else {
                          setSelectedTags((prev) => [
                            ...prev,
                            tag.serialNumber
                          ]);
                        }
                      }}
                    />
                  </td>
                  <td className="p-4">{tag.serialNumber}</td>
                  <td className="p-4">{tag.site}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded text-sm bg-gray-100">
                      {tag.status}
                    </span>
                  </td>
                  <td className="p-4">{tag.createdAt}</td>
                  <td className="p-4">{tag.trackingStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TagManagementInterface;

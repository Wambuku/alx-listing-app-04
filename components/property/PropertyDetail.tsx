import { PropertyProps } from "@/interfaces";
import { useState } from "react";
import ReviewSection from "./ReviewSection";

const tabs = [
  { key: "offer", label: "What We Offer" },
  { key: "reviews", label: "Reviews" },
  { key: "host", label: "About Host" }
];

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("offer");

  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-1">{property.name}</h1>
      <div className="flex flex-wrap items-center gap-2 text-gray-600 mb-6">
        <span className="text-yellow-500 font-semibold">{property.rating} ★</span>
        <span>|</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <img src={property.images[0]} alt="Main" className="col-span-2 row-span-2 w-full h-64 md:h-full object-cover rounded-xl" />
        {property.images.slice(1).map((img, i) => (
          <img key={i} src={img} alt={`Other ${i+1}`} className="w-full h-32 md:h-40 object-cover rounded-xl" />
        ))}
      </div>

      {/* Tabs */}
      <div className="mb-6 border-b border-gray-200 flex gap-4">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`py-2 px-4 -mb-px border-b-2 transition ${activeTab === tab.key ? 'border-green-600 font-semibold text-green-700' : 'border-transparent text-gray-500'}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="mb-8">
        {activeTab === "offer" && (
          <>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700 mb-4">{property.description}</p>
            <h2 className="text-xl font-semibold mb-2">Amenities</h2>
            <ul className="flex flex-wrap gap-2">
              {property.amenities.map((amenity, idx) => (
                <li key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-gray-800 text-sm">
                  {amenity}
                </li>
              ))}
            </ul>
          </>
        )}
        {activeTab === "reviews" && <ReviewSection reviews={property.reviews} />}
        {activeTab === "host" && (
          <div className="flex items-center gap-4">
            <img src={property.host.avatar} alt={property.host.name} className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="font-bold text-lg">{property.host.name}</h3>
              <p className="text-gray-700 mt-1">{property.host.about}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetail;

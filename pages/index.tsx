import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Pill } from "../components/common/Pill";
import { useEffect, useState } from "react";
import axios from "axios";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const filters = ["Top Villa", "Self Checkin", "Free Parking"];

export default function Home() {
  // Property list state and loading/error management
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch properties from the API
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (err) {
        setError("Failed to load properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      {/* Hero Section */}
      <section
        className="h-[400px] bg-cover bg-center text-white flex flex-col justify-center items-center text-center w-full"
        style={{ backgroundImage: "url('/your-image-url.jpg')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">Find your favorite place here!</h1>
        <p className="text-xl mt-4">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap p-4">
        {filters.map((filter) => (
          <Pill title={filter} key={filter} />
        ))}
      </div>

      {/* Property List Section */}
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        {loading ? (
          <div className="w-full flex justify-center text-lg">Loading properties...</div>
        ) : error ? (
          <div className="w-full flex justify-center text-red-500">{error}</div>
        ) : properties.length === 0 ? (
          <div className="w-full flex justify-center text-gray-400">No properties found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {properties.map((property: any) => (
              <div key={property.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col">
                <Image
                  src={property.imageUrl || "/default-image.jpg"}
                  alt={property.title}
                  width={400}
                  height={250}
                  className="rounded-lg mb-4 w-full h-[250px] object-cover"
                />
                <h2 className="text-xl font-semibold">{property.title}</h2>
                <p className="text-gray-600">{property.location}</p>
                <p className="mt-2 text-green-600 font-bold">${property.price} / night</p>
                <a
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  href={`/property/${property.id}`}
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Example Next.js starter content or actions */}
        {/* ... leave this in or remove as desired ... */}
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* ... (keep your footer as you have it) ... */}
      </footer>
    </div>
  );
}

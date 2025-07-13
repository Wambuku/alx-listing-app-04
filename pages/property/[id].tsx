import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        setError("Error fetching property details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p className="text-center p-8">Loading...</p>;
  if (error) return <p className="text-center p-8 text-red-600">{error}</p>;
  if (!property) return <p className="text-center p-8">Property not found</p>;

  return (
    <div className="container mx-auto px-2 md:px-6 py-6 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-2/3">
        <PropertyDetail property={property} />
      </div>
      <div className="w-full md:w-1/3">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
}

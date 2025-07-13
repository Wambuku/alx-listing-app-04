import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === id);

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

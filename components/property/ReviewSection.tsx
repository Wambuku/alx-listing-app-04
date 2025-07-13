import axios from "axios";
import { useState, useEffect } from "react";
import { Review } from "@/interfaces";

interface ReviewSectionProps {
  propertyId: string | number;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        setError("Error fetching reviews.");
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) fetchReviews();
  }, [propertyId]);

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Reviews</h3>
      {loading ? (
        <div>Loading reviews...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="space-y-6">
          {reviews.length === 0 ? (
            <div className="text-gray-500">No reviews yet.</div>
          ) : (
            reviews.map((review, idx) => (
              <div key={review.id ?? idx} className="flex gap-4 border-b pb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-yellow-500">
                      {"★".repeat(review.rating)}
                      <span className="text-gray-300">
                        {"★".repeat(5 - review.rating)}
                      </span>
                    </span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ReviewSection;

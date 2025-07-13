import { Review } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Reviews</h3>
      <div className="space-y-6">
        {reviews.length === 0 ? (
          <div className="text-gray-500">No reviews yet.</div>
        ) : (
          reviews.map((review, idx) => (
            <div key={idx} className="flex gap-4 border-b pb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-yellow-500">{'★'.repeat(review.rating)}<span className="text-gray-300">{'★'.repeat(5 - review.rating)}</span></span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewSection;

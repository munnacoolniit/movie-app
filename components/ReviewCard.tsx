import { Reviews } from "@/store/movie";
import React from "react";


const ReviewCard = ({ review }: { review: Reviews }) => {
  return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{review?.author}</h3>
            <p className="text-gray-600 mb-4 line-clamp-6">{review?.content}</p>
        </div>
    );
};

export default ReviewCard;

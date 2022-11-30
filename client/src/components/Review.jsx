import { useState, useEffect } from "react";

const Review = ({ quizId }) => {
    const [quizReviews, setQuizReviews] = useState();

    useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/review/quiz/:${quizId}`);
      const data = (await res.json()).payload[0];

      setQuizReviews(data);
    };

    fetchData();
  }, [quizId]);
    
    return (
        <>
            {quizReviews && (
                <div>
                    {quizReviews.map((review) => {
                        return (
                            <>
                                {review}
                            </>
                        )
                    })}
                </div>
            )}
        </>
    )
}

export default Review;
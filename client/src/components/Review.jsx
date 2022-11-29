import { useState, useEffect } from "react";

const Review = ({ quizName }) => {
    const [quizReviews, setQuizReviews] = useState();

    useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/review/");
      const data = (await res.json()).payload[0];

      setQuizReviews(data);
    };

    fetchData();
  }, []);
    
    return (
        <>
            {quizReviews (
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
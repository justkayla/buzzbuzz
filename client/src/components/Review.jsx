import { useState, useEffect } from "react";

const Review = ({ quizId }) => {
    const [quizReviews, setQuizReviews] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(`/api/review/quiz/:${quizId}`);
        const data = (await res.json()).payload;
        setQuizReviews(data);
    };

    fetchData();
  }, []);
    console.log(quizReviews)
    return (
        <>
            {quizReviews !== null && (
                <div>
                    {quizReviews.map((review) => {
                        return (
                            <>
                                {review.review}
                            </>
                        )
                    })}
                </div>
            )}
        </>
    )
}

export default Review;
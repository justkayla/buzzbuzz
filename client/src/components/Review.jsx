const ListContainer = ({quizName}) => {
    
    const getQuizReviews = async () => {

        const reviews = await fetch("/api/review", {
            method: "Get",
            headers: { "Content-Type": "application/json" },
        })
    
        const quizReviews = await reviews.json()

        if(quizReviews){
            console.log("Reviews retrieved");
        }
        else {
            console.log("Failed to get quiz reviews.");
        }
    }

    
    return (
        <ul>
            { props.children }
        </ul>
    )
}

export default ListContainer;
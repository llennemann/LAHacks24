function ReviewNoRating({ data }) {
    return (
        <div id="review-list">
            {data?.map((rev, index) => (
                <div key={index} id="review">
                    <p>{rev}</p>
                </div>
            ))}
        </div>
    )
}

export default ReviewNoRating;
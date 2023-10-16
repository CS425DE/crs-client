import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const FeedbackForm = ({create}) => {
    const [feedback, setFeedback] = useState({
        rating: 5, 
        comment: ''
    })


    const addNewFeedback = (e) => {
        e.preventDefault()
        create(feedback)
        setFeedback({rating: 1, 
            comment: ''})
    }

    return (
        <form> 
           <label htmlFor="rating">Rating:</label>
                <select name="rating" id="rating" onChange={e => setFeedback({...feedback, rating: e.target.value})} value={feedback.rating}>
                    {[1,2,3,4,5].map((rating) => 
                        <option key={rating} value={rating}>{rating}</option>
                    )}
                </select>
        
            <MyInput
                value={feedback.comment}
                onChange={e => setFeedback({...feedback, comment: e.target.value})}
                type="text"
                placeholder="Type a comment"
            />
            <MyButton onClick={addNewFeedback}>Create feedback</MyButton>
        </form>
    );
};

export default FeedbackForm;


import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react';
import Card from './Shared/Card'
import FeedbackContext from "../context/FeedbackContext"




function Feedbackitem({item}) {
    const {deleteFeedback, editFeedback}  = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes onClick={ () => deleteFeedback(item.id)} color="purple" />
      </button>
      <button onClick={ () => editFeedback(item) } className="edit">
        <FaEdit color="Purple"/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default Feedbackitem
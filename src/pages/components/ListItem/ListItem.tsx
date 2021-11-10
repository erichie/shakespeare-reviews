import { Link } from 'react-router-dom';
import { ReviewObject } from "../../../types";
import placeholderPerson from '../../../images/person_placeholder.png'
import './ListItem.css';

export function ListItem({author, body, id, publish_date, rating}: ReviewObject) {
	const dateString = new Date(publish_date).toDateString();
	return (
		<div className="ListItem">
			<div className="ListItem__author">
				<img className="ListItem__authorPhoto" src={placeholderPerson} alt="Placeholder Person" />
				<span>{author}</span>
			</div>
			<p><span className="ListItem__rating">{rating}</span> out of 5 stars</p>
			<p className="ListItem__date">Reviewed on {dateString}</p>

			<div className="ListItem__body">
				{body}
			</div>
			<Link className="ListItem__viewMore" to={`/review/${id}`}>{'Show Review'}</Link>
		</div>
	);
}
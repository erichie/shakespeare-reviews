import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useGetSingleReview from "../hooks/useGetSingleReview";
import placeholderPerson from '../images/person_placeholder.png';
import './ReviewDetails.css';

export function ReviewDetails() {
	const { id } = useParams();
	const { isLoading, review } = useGetSingleReview(id as string);
	const {
		author,
		body,
		publish_date,
		rating
	} = review;
	const dateString = new Date(publish_date).toDateString();

	return (
		<>
			{ !isLoading && (
				<div className="ReviewDetails">
					<Link className="ReviewDetails__back" to={'/'}>{'< Back to Reviews'}</Link>
					<div className="ReviewDetails__author">
						<img className="ReviewDetails__authorPhoto" src={placeholderPerson} alt="Placeholder Person" />
						<span>{author}</span>
					</div>
					<p><span className="ReviewDetails__rating">{rating}</span> out of 5 stars</p>
					<p className="ReviewDetails__date">Reviewed on {dateString}</p>

					<div className="ReviewDetails__body">
						{body}
					</div>
				</div>
			)}
		</>
	)
}
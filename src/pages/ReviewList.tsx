import { useGetAllReviews } from "../hooks/useGetAllReviews";
import { ReviewObject } from "../types";
import { ListItem } from "./components/ListItem/ListItem";
import './ReviewList.css';

export function ReviewList() {
	const { isLoading, reviews } = useGetAllReviews();

	const mappedReviews = reviews.map((review: ReviewObject, index: number) => {
		return <ListItem key={index} {...review} />
	});

	return (
		<div className="ReviewList">
			{ !isLoading && mappedReviews }
		</div>
	)
}
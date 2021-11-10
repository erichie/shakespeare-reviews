import { useEffect, useState } from 'react';
import { useGet } from "./useGet";
import { defaultReviewObject, ReviewObject } from "../types";

type GetAllReviewsResponse = {
	reviews: ReviewObject[];
	isLoading: boolean;
}

export function useGetAllReviews(): GetAllReviewsResponse {
	const [jsonResponse, setJsonResponse] = useState<Array<ReviewObject>>([defaultReviewObject]);
	const [isLoading, setIsLoading] = useState(true);
	const url = 'https://shakespeare.podium.com/api/reviews';
	const { data } = useGet(url);

	useEffect(() => {
		if (data) {
			setIsLoading(false);
			setJsonResponse(data);
		}
	}, [data]);

	return {
		reviews: jsonResponse,
		isLoading
	}
}
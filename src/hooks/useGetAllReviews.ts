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
	const url = `${process.env.REACT_APP_API_BASE_URL}/api/reviews`;
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
import { useEffect, useState } from 'react';
import { useGet } from "./useGet";
import { defaultReviewObject, ReviewObject } from "../types";

type GetSingleReviewResponse = {
	review: ReviewObject;
	isLoading: boolean;
}

export default function useGetSingleReview(id: string): GetSingleReviewResponse {
	const [jsonResponse, setJsonResponse] = useState<ReviewObject>(defaultReviewObject);
	const [isLoading, setIsLoading] = useState(true);
	const url = `https://shakespeare.podium.com/api/reviews/${id}`;
	const { data } = useGet(url);

	useEffect(() => {
		if (data) {
			setIsLoading(false);
			setJsonResponse(data);
		}
	}, [data]);

	return {
		review: jsonResponse,
		isLoading
	}
}
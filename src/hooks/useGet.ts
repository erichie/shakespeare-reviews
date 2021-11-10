import { useEffect, useState } from "react";

export function useGet(url: string): any {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(url,
			{
				headers: {
					'x-api-key': process.env.REACT_APP_API_KEY as string
				}
			}
		)
		.then(response => response.json())
		.then((result) => {
			setData(result);
		});
	}, []);

	return {
		data
	}
}
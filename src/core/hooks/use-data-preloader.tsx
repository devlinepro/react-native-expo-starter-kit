import { useEffect, useState } from "react";
import { map } from "lodash";
import { QueryStatus } from "@reduxjs/toolkit/query";

export function useDataPreloader(rtkQueries: any[]): {
	ready: boolean;
} {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		if (
			rtkQueries.find((query) => ![QueryStatus.fulfilled, QueryStatus.rejected].includes(query.status)) === undefined
		) {
			setReady(true);
		}
	}, map(rtkQueries, "status"));

	return {
		ready,
	};
}

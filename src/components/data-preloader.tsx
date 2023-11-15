import { useDataPreloader } from "../core/hooks/use-data-preloader";
import { useGetCatsQuery } from "../app/api/cats.api";
import { ReactElement, useEffect } from "react";

export function DataPreloader({ children, onReady }: { children: ReactElement; onReady?: () => void }) {
	// list here requests you want to preload before splash screen hided
	const { ready } = useDataPreloader([useGetCatsQuery()]);

	useEffect(() => {
		ready && onReady?.call(null);
	}, [ready]);

	return ready ? children : <></>;
}

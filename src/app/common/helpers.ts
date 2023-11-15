/**
 * Example usage: <Text>Found {data.length} {getNoun(data.length, "cat", "cats", "cats")}</Text>
 */
export function getNoun(number: number, one: string, two: string, five: string): string {
	let n = Math.abs(number);
	n %= 100;
	if (n >= 5 && n <= 20) {
		return five;
	}
	n %= 10;
	if (n === 1) {
		return one;
	}
	if (n >= 2 && n <= 4) {
		return two;
	}
	return five;
}

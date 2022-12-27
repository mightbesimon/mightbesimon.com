export function range(size: number)
{
	return Array(size).fill(null).map((x, idx) => idx);
}


export function formatCount(downloads: number | undefined)
{
	return downloads ? downloads.toLocaleString('en-NZ') : '-';
}

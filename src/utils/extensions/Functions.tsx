export const range = (size: number) =>
	Array(size).fill(null).map((x, idx) => idx);


export const format = (downloads: number | undefined) =>
	downloads ? downloads.toLocaleString('en-NZ') : '-';


const emojiRegex = /(\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
export const wrapEmoji = (text: string) => text
	.split(emojiRegex)
	.map((seg, idx) => emojiRegex.test(seg)
		? <span key={idx} className='stroke'>{seg}</span>
		: seg
	);

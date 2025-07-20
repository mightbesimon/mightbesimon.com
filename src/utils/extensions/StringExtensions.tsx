/* eslint-disable no-extend-native */
// export { };

declare global
{
	interface String
	{
		wrapEmoji(): (JSX.Element | string)[];
	}
}

const emojiRegex = /(\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;

String.prototype.wrapEmoji = function ()
{
	return this
		.split(emojiRegex)
		.map((seg, idx) => emojiRegex.test(seg)
			? <span key={idx} className='stroke'>{seg}</span>
			: seg
		);
};

type ResponseBase<T> = {
	content?: T,
	status: number,
	success: boolean,
};

export default ResponseBase;

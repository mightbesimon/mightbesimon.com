export type BatchCallRequest<TRequest, TResponse> = {
	requests: TRequest[],
	func: (request: TRequest) => Promise<TResponse | undefined>,
};

async function batchCall<TRequest, TResponse>(
	{ requests, func }: BatchCallRequest<TRequest, TResponse>
): Promise<(TResponse | undefined)[]>
{
	return Promise.all(requests.map(
		async request => await func(request)
	));
}

export default batchCall;

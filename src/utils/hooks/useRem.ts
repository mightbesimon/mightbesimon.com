const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

const useRem = () => {
	return rem;
};

export default useRem;

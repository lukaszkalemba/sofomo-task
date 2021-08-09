const { REACT_APP_API_URL, REACT_APP_IP_STACK_ACCESS_KEY } = process.env;

export const getUrl = (inputValue: string) =>
  `${REACT_APP_API_URL}/${inputValue}?access_key=${REACT_APP_IP_STACK_ACCESS_KEY}`;

export const validateDomainName = (domainName: string) => {
  const domainRegex = /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;
  const isValid = domainRegex.test(domainName);

  return isValid;
};

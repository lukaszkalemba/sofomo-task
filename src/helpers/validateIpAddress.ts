export const validateIpAddress = (IpAddress: string) => {
  const octets = IpAddress.split('.');

  for (const octet of octets) {
    if (+octet >= 0 && +octet <= 255) {
      continue;
    }

    return false;
  }

  return true;
};

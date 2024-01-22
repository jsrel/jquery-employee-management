export function validateUsername(username: string): boolean {
  return /^[a-zA-Z\s]{1,15}$/.test(username);
}

export function validateEmail(email: string): boolean {
  const usernameRegex =
    /^[a-zA-Z0-9](?:(?:[a-zA-Z0-9%+-]*[a-zA-Z0-9])?\.?)?[a-zA-Z0-9][a-zA-Z0-9%+-]{0,62}[a-zA-Z0-9]$/;
  const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isValidUsername = usernameRegex.test(email.split("@")[0]);
  const isValidDomain = domainRegex.test(email.split("@")[1]);

  return isValidUsername && isValidDomain;
}

export function validatePassword(password: string): boolean {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#()])[A-Za-z\d@$!%*?&#()]{8,16}$/;
  return regex.test(password);
}

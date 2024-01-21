export function validateUsername(username: string): boolean {
  return /^[a-zA-Z]+$/.test(username);
}

export function validateEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}

export function validatePassword(password: string): boolean {
  return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password);
}

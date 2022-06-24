const FORMAT = /^[\w!#$%&'*+./=?^`{|}~-]+@[\dA-Za-z](?:[\dA-Za-z-]{0,61}[\dA-Za-z])?(?:\.[\dA-Za-z](?:[\dA-Za-z-]{0,61}[\dA-Za-z])?)*$/;

export const isValidEmail = (email: string): boolean => email.length < 320 && FORMAT.test(email);

export const getEmailDomain = (email: string): string => email.slice(Math.max(0, email.lastIndexOf('@') + 1));

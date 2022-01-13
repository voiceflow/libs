const FORMAT = /^\w+(['+-.]\w+)*@\w+([.-]\w+)*\.\w+([.-]\w+)*$/;

export const isValidEmail = (email: string): boolean => !!email.match(FORMAT);

export const getEmailDomain = (email: string): string => email.slice(Math.max(0, email.lastIndexOf('@') + 1));

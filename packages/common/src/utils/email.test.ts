import { getEmailDomain, isValidEmail } from './emails';

describe('Utils | email', () => {
  describe('isValid()', () => {
    it('should be valid', () => {
      const validEmails = ['joe.doe@test.com', 'john.-last@sub.domain.com', 'test+@voiceflow.com', 't-est+34@voice-flow.com'];

      validEmails.forEach((email) => expect(isValidEmail(email)).toBe(true));
    });

    it('should be invalid', () => {
      const invalidEmails = ['joe@.com', 'joe@', '@voiceflow.com', '', 'voiceflow.com'];

      invalidEmails.forEach((email) => expect(isValidEmail(email)).toBe(false));
    });
  });

  describe('getEmailDomain()', () => {
    it('works', () => {
      expect(getEmailDomain('test@voiceflow.com')).toBe('voiceflow.com');
      expect(getEmailDomain('')).toBe('');
      expect(getEmailDomain('totally@invalid@voiceflow.com')).toBe('voiceflow.com');
    });
  });
});

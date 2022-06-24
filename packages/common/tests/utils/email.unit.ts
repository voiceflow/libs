import { getEmailDomain, isValidEmail } from '@common/utils/emails';
import { expect } from 'chai';

describe('Utils | email', () => {
  describe('isValid()', () => {
    it('should be valid', () => {
      const validEmails = ['joe.doe@test.com', 'john.-last@sub.domain.com', 'test+@voiceflow.com', 't-est+34@voice-flow.com'];

      validEmails.forEach((email) => expect(isValidEmail(email)).to.eq(true));
    });

    it('should be invalid', () => {
      const invalidEmails = ['joe@.com', 'joe@', '@voiceflow.com', '', 'voiceflow.com'];

      invalidEmails.forEach((email) => expect(isValidEmail(email)).to.eq(false));
    });
  });

  describe('getEmailDomain()', () => {
    it('works', () => {
      expect(getEmailDomain('test@voiceflow.com')).to.eq('voiceflow.com');
      expect(getEmailDomain('')).to.eq('');
      expect(getEmailDomain('totally@invalid@voiceflow.com')).to.eq('voiceflow.com');
    });
  });
});

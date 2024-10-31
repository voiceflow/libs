import type { BaseCommand } from '@base-types/models';
import { describe, expect, it } from 'vitest';

import type {
  JumpEventMatchedCommand,
  JumpOnMatchedCommand,
  PushEventMatchedCommand,
  PushOnMatchedCommand,
} from './command';
import {
  CommandType,
  isJumpEventMatchedCommand,
  isJumpOnMatchedCommand,
  isPushEventMatchedCommand,
  isPushOnMatchedCommand,
  isWithEventMatching,
  isWithJump,
  isWithOnMatching,
  isWithPush,
} from './command';

describe('command.ts', () => {
  const basePushCommand: BaseCommand = {
    type: CommandType.PUSH,
  };

  const baseJumpCommand: BaseCommand = {
    type: CommandType.JUMP,
  };

  const jumpOnMatchedCommand: JumpOnMatchedCommand = {
    type: CommandType.JUMP,
    on: {
      'event.type': 'event-A',
    },
    nextID: 'next-id',
  };

  const pushOnMatchedCommand: PushOnMatchedCommand = {
    type: CommandType.PUSH,
    on: {
      'event.type': 'event-A',
    },
    diagramID: 'diagram-id',
  };

  const jumpEventMatchedCommand: JumpEventMatchedCommand = {
    type: CommandType.JUMP,
    event: {
      type: 'event-A',
    },
    nextID: 'next-id',
  };

  const pushEventMatchedCommand: PushEventMatchedCommand = {
    type: CommandType.PUSH,
    event: {
      type: 'event-A',
    },
    diagramID: 'diagram-id',
  };

  describe('isWithJump', () => {
    it('fails if base command type is not jump', () => {
      const result = isWithJump(basePushCommand);

      expect(result).to.eql(false);
    });

    it('passes if base command type is jump', () => {
      const result = isWithJump(baseJumpCommand);

      expect(result).to.eql(true);
    });
  });

  describe('isWithPush', () => {
    it('fails if base command type is not push', () => {
      const result = isWithPush(baseJumpCommand);

      expect(result).to.eql(false);
    });

    it('passes if base command type is push', () => {
      const result = isWithPush(basePushCommand);

      expect(result).to.eql(true);
    });
  });

  describe('isWithEventMatching', () => {
    it('fails if does not have event', () => {
      expect(isWithEventMatching(basePushCommand)).to.eql(false);
      expect(isWithEventMatching(jumpOnMatchedCommand)).to.eql(false);
      expect(isWithEventMatching(pushOnMatchedCommand)).to.eql(false);
    });

    it('passes if does have event', () => {
      expect(isWithEventMatching(jumpEventMatchedCommand)).to.eql(true);
      expect(isWithEventMatching(pushEventMatchedCommand)).to.eql(true);
    });
  });

  describe('isWithOnMatching', () => {
    it('fails if does not have on', () => {
      expect(isWithOnMatching(basePushCommand)).to.eql(false);
      expect(isWithOnMatching(jumpEventMatchedCommand)).to.eql(false);
      expect(isWithOnMatching(pushEventMatchedCommand)).to.eql(false);
    });

    it('passes if does have on', () => {
      expect(isWithOnMatching(jumpOnMatchedCommand)).to.eql(true);
      expect(isWithOnMatching(pushOnMatchedCommand)).to.eql(true);
    });
  });

  describe('isJumpEventMatched', () => {
    it('fails non-matching commands', () => {
      expect(isJumpEventMatchedCommand(baseJumpCommand)).to.eql(false);
      expect(isJumpEventMatchedCommand(basePushCommand)).to.eql(false);
      expect(isJumpEventMatchedCommand(jumpOnMatchedCommand)).to.eql(false);
      expect(isJumpEventMatchedCommand(pushOnMatchedCommand)).to.eql(false);
      expect(isJumpEventMatchedCommand(pushEventMatchedCommand)).to.eql(false);
    });

    it('passes matching commands', () => {
      expect(isJumpEventMatchedCommand(jumpEventMatchedCommand)).to.eql(true);
    });
  });

  describe('isPushEventMatched', () => {
    it('fails non-matching commands', () => {
      expect(isPushEventMatchedCommand(baseJumpCommand)).to.eql(false);
      expect(isPushEventMatchedCommand(basePushCommand)).to.eql(false);
      expect(isPushEventMatchedCommand(jumpOnMatchedCommand)).to.eql(false);
      expect(isPushEventMatchedCommand(pushOnMatchedCommand)).to.eql(false);
      expect(isPushEventMatchedCommand(jumpEventMatchedCommand)).to.eql(false);
    });

    it('passes matching commands', () => {
      expect(isPushEventMatchedCommand(pushEventMatchedCommand)).to.eql(true);
    });
  });

  describe('isJumpOnMatched', () => {
    it('fails non-matching commands', () => {
      expect(isJumpOnMatchedCommand(baseJumpCommand)).to.eql(false);
      expect(isJumpOnMatchedCommand(basePushCommand)).to.eql(false);
      expect(isJumpOnMatchedCommand(pushOnMatchedCommand)).to.eql(false);
      expect(isJumpOnMatchedCommand(jumpEventMatchedCommand)).to.eql(false);
      expect(isJumpOnMatchedCommand(pushEventMatchedCommand)).to.eql(false);
    });

    it('passes matching commands', () => {
      expect(isJumpOnMatchedCommand(jumpOnMatchedCommand)).to.eql(true);
    });
  });

  describe('isPushOnMatched', () => {
    it('fails non-matching commands', () => {
      expect(isPushOnMatchedCommand(baseJumpCommand)).to.eql(false);
      expect(isPushOnMatchedCommand(basePushCommand)).to.eql(false);
      expect(isPushOnMatchedCommand(jumpOnMatchedCommand)).to.eql(false);
      expect(isPushOnMatchedCommand(jumpEventMatchedCommand)).to.eql(false);
      expect(isPushOnMatchedCommand(pushEventMatchedCommand)).to.eql(false);
    });

    it('passes matching commands', () => {
      expect(isPushOnMatchedCommand(pushOnMatchedCommand)).to.eql(true);
    });
  });
});

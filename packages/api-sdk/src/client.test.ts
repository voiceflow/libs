import JWT from 'jsonwebtoken';
import { describe, expect, it } from 'vitest';

import { Client } from './client';
import Fetch from './fetch';
import {
  Analytics,
  APIKey,
  Diagram,
  Note,
  Program,
  Project,
  ProjectSecret,
  PrototypeProgram,
  User,
  VariableState,
  Version,
} from './resources';

const CLIENT_RESOURCES = [
  Fetch,
  Diagram,
  Program,
  Project,
  ProjectSecret,
  Version,
  User,
  APIKey,
  Analytics,
  VariableState,
  Note,
];

const USER_HASH = 'UserHash_16chars';
const createClient = (authorization?: string) =>
  new Client({
    clientKey: '123qwe123',
    apiEndpoint: 'apiEndpoint',
    authorization: authorization ?? `${USER_HASH}${JWT.sign({}, 'test')}`,
  });

describe('Client', () => {
  it('.constructor', () => {
    const client = createClient();
    expect(
      Object.values(client).every((resource) => CLIENT_RESOURCES.some((Resource) => resource instanceof Resource))
    ).toBe(true);
  });

  it('.project', () => {
    const client = createClient();

    expect(client.project).toBeInstanceOf(Project);
  });

  it('.project secret', () => {
    const client = createClient();

    expect(client.projectSecret).toBeInstanceOf(ProjectSecret);
  });

  it('.version', () => {
    const client = createClient();

    expect(client.version).toBeInstanceOf(Version);
  });

  it('.program', () => {
    const client = createClient();

    expect(client.program).toBeInstanceOf(Program);
  });

  it('.diagram', () => {
    const client = createClient();

    expect(client.diagram).toBeInstanceOf(Diagram);
  });

  it('.user', () => {
    const client = createClient();

    expect(client.user).toBeInstanceOf(User);
  });

  it('.prototypeProgram', () => {
    const client = createClient();

    expect(client.prototypeProgram).toBeInstanceOf(PrototypeProgram);
  });

  it('.apiKey', () => {
    const client = createClient();

    expect(client.apiKey).toBeInstanceOf(APIKey);
  });
});

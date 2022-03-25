import { Client } from '@api-sdk/client';
import Fetch from '@api-sdk/fetch';
import { Analytics, APIKey, Diagram, Note, Program, Project, PrototypeProgram, User, VariableState, Version } from '@api-sdk/resources';
import { expect } from 'chai';
import JWT from 'jsonwebtoken';

const CLIENT_RESOURCES = [Fetch, Diagram, Program, Project, Version, User, APIKey, Analytics, VariableState, Note];

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
    expect(Object.values(client).every((resource) => CLIENT_RESOURCES.some((Resource) => resource instanceof Resource))).to.eql(true);
  });

  it('.project', () => {
    const client = createClient();

    expect(client.project).to.be.instanceOf(Project);
  });

  it('.version', () => {
    const client = createClient();

    expect(client.version).to.be.instanceOf(Version);
  });

  it('.program', () => {
    const client = createClient();

    expect(client.program).to.be.instanceOf(Program);
  });

  it('.diagram', () => {
    const client = createClient();

    expect(client.diagram).to.be.instanceOf(Diagram);
  });

  it('.user', () => {
    const client = createClient();

    expect(client.user).to.be.instanceOf(User);
  });

  it('.prototypeProgram', () => {
    const client = createClient();

    expect(client.prototypeProgram).to.be.instanceOf(PrototypeProgram);
  });

  it('.apiKey', () => {
    const client = createClient();

    expect(client.apiKey).to.be.instanceOf(APIKey);
  });
});

import { expect } from 'chai';
import JWT from 'jsonwebtoken';

import { Client } from '@/client';
import Fetch from '@/fetch';
import { APIKey, Diagram, Program, Project, PrototypeProgram, User, Version } from '@/resources';

const CLIENT_RESOURCES = [Fetch, Diagram, Program, Project, Version, User, APIKey];

const createClient = (authorization?: string) =>
  new Client({
    clientKey: '123qwe123',
    apiEndpoint: 'apiEndpoint',
    authorization: authorization ?? JWT.sign({}, 'test'),
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

import { expect } from 'chai';
import JWT from 'jsonwebtoken';

import { Client } from '@/client';
import Fetch from '@/fetch';
import { Diagram, Program, Project, Session, User, Version } from '@/resources';

const CLIENT_RESOURCES = [Fetch, Diagram, Program, Project, Version, User];

const createClient = () =>
  new Client({
    clientKey: '123qwe123',
    apiEndpoint: 'apiEndpoint',
    authorization: JWT.sign({}, 'test'),
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
});

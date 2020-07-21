import ApiSDK from '@/index';

const main = async () => {
  const apiSdk = new ApiSDK({ clientKey: 'mock', apiEndpoint: 'https://localhost:8080' });
  const client = apiSdk.generateClient({ authorization: 'mock' });

  // project
  const createdProject = await client.project.create<{ data: string }, { data: number }>({
    teamID: '1',
    moduleID: 1,
    creatorID: 1,
    name: 'name',
    members: [],
    platform: 'alexa',
    platformData: { data: 'data' },
  });
  const project = await client.project.get<{ data: string }, { data: number }>('1');
  const projectPartial = await client.project.get<{ name: string }>('1', ['name']);
  const partialProject = await client.project.update<{ data: string }, { data: number }>('1', {
    name: 'name 1',
    members: [
      {
        creatorID: 1,
        platformData: { data: 10 },
      },
    ],
    platformData: { data: 'data2' },
  });
  await client.project.delete('1');
  const platformData = await client.project.updatePlatformData<{ a: number }>('1', { a: 2 });
  const versions = await client.project.getVersions<{ settings: { a: number }; publishing: { b: string } }>('1');

  // project members
  const createdUser = await client.project.members.createCurrentUser<{ data: number }>('1', { platformData: { data: 1 } });
  const users = await client.project.members.list('1');
  const user = await client.project.members.getCurrentUser<{ data: number }>('1');
  const updatedUser = await client.project.members.updateCurrentUser<{ data: number }>('1', { platformData: { data: 2 } });
  await client.project.members.deleteCurrentUser('1');

  // version
  // etc...
};

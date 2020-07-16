import * as t from 'io-ts';

import type Fetch from '@/fetch';
import type { WorkspaceID } from '@/types';
import { validate } from '@/utils';
import { TCreatorID, TPlatform, TProjectID, TTeamID, TTimestamp, TVersionID, TWorkspaceID } from '@/validations';

import CrudResource from './crud';
import { TMember } from './member';

export const TProject = t.type({
  teamID: TTeamID,
  projectID: TProjectID,
  creatorID: TCreatorID,

  name: t.string,
  members: t.array(TMember),
  created: TTimestamp,
  platform: TPlatform,
  masterVersion: TVersionID,
});

export type Project = t.TypeOf<typeof TProject>;

export const ENDPOINT = 'project';

export class ProjectResource extends CrudResource<typeof TProject.props, 'projectID'> {
  constructor(fetch: Fetch) {
    super({
      id: TProjectID,
      props: TProject.props,
      fetch,
      modalIDKey: 'projectID',
      resourceEndpoint: ENDPOINT,
    });
  }

  async list(workspaceID: WorkspaceID): Promise<Project[]> {
    validate(TWorkspaceID.decode(workspaceID));

    const { data } = await this.fetch.get<Project[]>(`workspace/${workspaceID}/projects`);

    return data;
  }
}

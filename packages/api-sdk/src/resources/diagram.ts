import * as s from 'superstruct';

import type Fetch from '@/fetch';
import { Diagram, DiagramID, Node, NodeID, SDiagram, SNode, SNodeID } from '@/models';
import { createPutAndPostStruct } from '@/utils';

import CrudResource from './crud';

const ENDPOINT = 'diagrams';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class DiagramResource extends CrudResource<typeof SDiagram['schema'], ModelIDKey> {
  private _nodePutAndPostStruct = createPutAndPostStruct(SNode.schema, 'id');

  constructor(fetch: Fetch) {
    super({
      fetch,
      schema: SDiagram.schema,
      modelIDKey,
      resourceEndpoint: ENDPOINT,
    });
  }

  public get(id: DiagramID): Promise<Diagram> {
    return super._getByID<Diagram>(id);
  }

  public create(body: Omit<Diagram, ModelIDKey>): Promise<Diagram> {
    return super._post<Diagram>(body);
  }

  public update(id: DiagramID, body: Partial<Diagram>): Promise<Partial<Diagram>> {
    return super._patch<Diagram>(id, body);
  }

  public async updateNode(id: DiagramID, nodeID: NodeID, body: Omit<Node, 'id'>): Promise<Node> {
    this._assertModelID(id);
    s.assert(nodeID, SNodeID);
    s.assert(body, this._nodePutAndPostStruct);

    const { data } = await this.fetch.put<Node>(`${this._getCRUDEndpoint(id)}/nodes/${nodeID}`, body);

    return data;
  }

  public delete(id: DiagramID): Promise<DiagramID> {
    return super._delete(id);
  }
}

export default DiagramResource;

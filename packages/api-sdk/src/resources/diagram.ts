import * as s from 'superstruct';

import type Fetch from '@/fetch';
import { Diagram, DiagramID, Node, NodeID, SDiagram, SNode, SNodeID } from '@/models';
import { createPutAndPostStruct } from '@/utils';

import CrudResource from './crud';

const ENDPOINT = 'diagrams';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class DiagramResource extends CrudResource<typeof SDiagram['schema'], ModelIDKey> {
  private _nodePutAndPostStruct = createPutAndPostStruct(SNode.schema, 'id', true);

  constructor(fetch: Fetch) {
    super({
      fetch,
      schema: SDiagram.schema,
      modelIDKey,
      resourceEndpoint: ENDPOINT,
    });
  }

  public async get<T extends Partial<Diagram>>(id: DiagramID, fields: string[]): Promise<T>;

  public async get(id: DiagramID): Promise<Diagram>;

  public async get(id: DiagramID, fields?: string[]) {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  public async create(body: Omit<Diagram, ModelIDKey>): Promise<Diagram> {
    return super._post<Diagram>(body);
  }

  public async update(id: DiagramID, body: Partial<Diagram>): Promise<Partial<Diagram>> {
    return super._patch<Diagram>(id, body);
  }

  public async updateNode(id: DiagramID, nodeID: NodeID, body: Omit<Node, 'id'>): Promise<Node> {
    this._assertModelID(id);
    s.assert(nodeID, SNodeID);
    s.assert(body, this._nodePutAndPostStruct);

    const { data } = await this.fetch.put<Node>(`${this._getCRUDEndpoint(id)}/nodes/${nodeID}`, body);

    return data;
  }

  public async delete(id: DiagramID): Promise<DiagramID> {
    return super._delete(id);
  }
}

export default DiagramResource;

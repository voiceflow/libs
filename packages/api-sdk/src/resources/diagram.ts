import * as s from 'superstruct';

import type Fetch from '@/fetch';
import { Diagram, DiagramID, DiagramNode, NodeID, SDiagram, SNode, SNodeID } from '@/models';
import { createPutAndPostStruct } from '@/utils';

import CrudResource from './crud';

const ENDPOINT = 'diagrams';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class DiagramResource extends CrudResource<typeof SDiagram['schema'], ModelIDKey, DiagramResource, 'modified'> {
  private _nodePutAndPostStruct = createPutAndPostStruct(SNode.schema, 'id', [], true);

  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: DiagramResource,
      schema: SDiagram.schema,
      modelIDKey,
      resourceEndpoint: ENDPOINT,
    });
  }

  public async get<T extends Partial<Diagram>>(id: DiagramID, fields: string[]): Promise<T>;

  public async get<T extends DiagramNode = DiagramNode>(id: DiagramID): Promise<Diagram<T>>;

  public async get(id: DiagramID, fields?: string[]) {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  public async getRTC<T extends Diagram>(id: DiagramID) {
    const { data } = await this.fetch.get<{ diagram: T; timestamp: number }>(`${this._getCRUDEndpoint(id)}/rtc`);

    return data;
  }

  public async create<T extends DiagramNode = DiagramNode>(body: Omit<Diagram<T>, '_id'> & Partial<Pick<Diagram<T>, '_id'>>): Promise<Diagram<T>> {
    return super._post<Diagram<T>>(body);
  }

  public async update<T extends DiagramNode = DiagramNode>(id: DiagramID, body: Partial<Diagram<T>>): Promise<Partial<Diagram<T>>> {
    return super._patch<Diagram<T>>(id, body);
  }

  public async updateNode(id: DiagramID, nodeID: NodeID, body: Omit<DiagramNode, 'nodeID'>): Promise<DiagramNode> {
    this._assertModelID(id);
    s.assert(nodeID, SNodeID);
    s.assert(body, this._nodePutAndPostStruct);

    const { data } = await this.fetch.put<DiagramNode>(`${this._getCRUDEndpoint(id)}/nodes/${nodeID}`, body);

    return data;
  }

  public async delete(id: DiagramID): Promise<DiagramID> {
    return super._delete(id);
  }
}

export default DiagramResource;

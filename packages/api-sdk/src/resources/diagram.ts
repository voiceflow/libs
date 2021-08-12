import * as s from 'superstruct';

import type Fetch from '@/fetch';
import { BaseDiagramNode, Diagram, DiagramID, NodeID, SDiagram, SNode, SNodeID } from '@/models';
import { createPutAndPostStruct } from '@/utils';

import CrudResource from './crud';

const ENDPOINT = 'diagrams';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class DiagramResource extends CrudResource<typeof SDiagram['schema'], ModelIDKey, DiagramResource, 'modified'> {
  private _nodePutAndPostStruct = createPutAndPostStruct(SNode.schema, 'id', [], true);

  // private _nodePatchStruct = s.partial(this._nodePutAndPostStruct);

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

  public async get<T extends BaseDiagramNode = BaseDiagramNode>(id: DiagramID): Promise<Diagram<T>>;

  public async get(id: DiagramID, fields?: string[]) {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  public async getRTC<T extends Diagram>(id: DiagramID) {
    const { data } = await this.fetch.get<{ diagram: T; timestamp: number }>(`${this._getCRUDEndpoint(id)}/rtc`);

    return data;
  }

  public async create<T extends BaseDiagramNode = BaseDiagramNode>(
    body: Omit<Diagram<T>, '_id'> & Partial<Pick<Diagram<T>, '_id'>>
  ): Promise<Diagram<T>> {
    return super._post<Diagram<T>>(body);
  }

  public async update<T extends BaseDiagramNode = BaseDiagramNode>(id: DiagramID, body: Partial<Diagram<T>>): Promise<Partial<Diagram<T>>> {
    return super._patch<Diagram<T>>(id, body);
  }

  public async updateNode<T extends BaseDiagramNode>(id: DiagramID, nodeID: NodeID, body: Omit<T, 'nodeID'>): Promise<T> {
    this._assertModelID(id);
    s.assert(nodeID, SNodeID);
    s.assert(body, this._nodePutAndPostStruct);

    const { data } = await this.fetch.put<T>(`${this._getCRUDEndpoint(id)}/nodes/${nodeID}`, body);

    return data;
  }

  public async patchNode<T extends BaseDiagramNode>(id: DiagramID, nodeID: NodeID, body: Partial<Omit<T, 'nodeID'>>): Promise<T> {
    this._assertModelID(id);
    s.assert(nodeID, SNodeID);
    // s.assert(body, this._nodePatchStruct);

    const { data } = await this.fetch.patch<T>(`${this._getCRUDEndpoint(id)}/nodes/${nodeID}`, body);

    return data;
  }

  public async deleteNode(id: DiagramID, nodeID: NodeID): Promise<string> {
    this._assertModelID(id);
    s.assert(nodeID, SNodeID);

    const { data } = await this.fetch.delete<string>(`${this._getCRUDEndpoint(id)}/nodes/${nodeID}`);

    return data;
  }

  public async delete(id: DiagramID): Promise<DiagramID> {
    return super._delete(id);
  }
}

export default DiagramResource;

import * as s from 'superstruct';

import type Fetch from '@/fetch';
import { BaseDiagramNode, Diagram, DiagramID, NodeID, SDiagram, SNode, SNodeID, SNodePartial } from '@/models';
import { createPutAndPostStruct } from '@/utils';

import CrudResource from './crud';

const ENDPOINT = 'diagrams';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class DiagramResource extends CrudResource<typeof SDiagram['schema'], ModelIDKey, DiagramResource, 'modified'> {
  private _nodePutAndPostStruct = createPutAndPostStruct(SNode.schema, 'id', [], true);

  private _nodePatchStruct = createPutAndPostStruct(SNodePartial.schema, 'id', [], true);

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

  public async get<T extends Diagram<any> = Diagram>(id: DiagramID): Promise<T>;

  public async get(id: DiagramID, fields?: string[]): Promise<Diagram<any>> {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  public async getRTC<T extends Diagram<any> = Diagram>(id: DiagramID): Promise<{ diagram: T; timestamp: number }> {
    const { data } = await this.fetch.get<{ diagram: T; timestamp: number }>(`${this._getCRUDEndpoint(id)}/rtc`);

    return data;
  }

  public async create<T extends BaseDiagramNode = BaseDiagramNode>(
    body: Omit<Diagram<T>, '_id'> & Partial<Pick<Diagram<T>, '_id'>>
  ): Promise<Diagram<T>>;

  public async create<T extends Omit<Diagram<any>, '_id'>>(body: T): Promise<T & Pick<Diagram<any>, '_id'>>;

  public async create(body: Diagram<any>): Promise<Diagram<any>> {
    return super._post(body);
  }

  public async update<T extends BaseDiagramNode = BaseDiagramNode>(id: DiagramID, body: Partial<Diagram<T>>): Promise<Partial<Diagram<T>>>;

  public async update<T extends Partial<Diagram<any>>>(id: DiagramID, body: T): Promise<T>;

  public async update(id: DiagramID, body: Partial<Diagram<any>>): Promise<Partial<Diagram<any>>> {
    return super._patch(id, body);
  }

  public async updateNode<T extends Omit<BaseDiagramNode, 'nodeID'>>(
    id: DiagramID,
    nodeID: NodeID,
    body: T
  ): Promise<T & Pick<BaseDiagramNode, 'nodeID'>> {
    this._assertModelID(id);
    s.assert(nodeID, SNodeID);
    s.assert(body, this._nodePutAndPostStruct);

    const { data } = await this.fetch.put<T & Pick<BaseDiagramNode, 'nodeID'>>(`${this._getCRUDEndpoint(id)}/nodes/${nodeID}`, body);

    return data;
  }

  public async patchNode<T extends Omit<BaseDiagramNode, 'nodeID'>>(
    id: DiagramID,
    nodeID: NodeID,
    body: Partial<T>
  ): Promise<T & Pick<BaseDiagramNode, 'nodeID'>> {
    this._assertModelID(id);
    s.assert(nodeID, SNodeID);
    s.assert(body, this._nodePatchStruct);

    const { data } = await this.fetch.patch<T & Pick<BaseDiagramNode, 'nodeID'>>(`${this._getCRUDEndpoint(id)}/nodes/${nodeID}`, body);

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

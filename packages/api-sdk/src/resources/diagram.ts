import { Models } from '@voiceflow/base-types';

import type Fetch from '@/fetch';

import { Fields } from './base';
import CrudResource from './crud';

const ENDPOINT = 'diagrams';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class DiagramResource extends CrudResource<Models.Diagram, ModelIDKey, DiagramResource, 'modified'> {
  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: DiagramResource,
      endpoint: ENDPOINT,
    });
  }

  public async get<T extends Partial<Models.Diagram>>(id: Models.DiagramID, fields: Fields): Promise<T>;

  public async get<T extends Models.BaseDiagramNode = Models.BaseDiagramNode>(id: Models.DiagramID): Promise<Models.Diagram<T>>;

  public async get<T extends Models.Diagram<any> = Models.Diagram>(id: Models.DiagramID): Promise<T>;

  public async get(id: Models.DiagramID, fields?: Fields): Promise<Models.Diagram<any>> {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  public async getRTC<T extends Models.Diagram<any> = Models.Diagram>(id: Models.DiagramID): Promise<{ diagram: T; timestamp: number }> {
    const { data } = await this.fetch.get<{ diagram: T; timestamp: number }>(`${this._getCRUDEndpoint(id)}/rtc`);

    return data;
  }

  public async create<T extends Models.BaseDiagramNode = Models.BaseDiagramNode>(
    body: Omit<Models.Diagram<T>, '_id'> & Partial<Pick<Models.Diagram<T>, '_id'>>
  ): Promise<Models.Diagram<T>>;

  public async create<T extends Omit<Models.Diagram<any>, '_id'>>(body: T): Promise<T & Pick<Models.Diagram<any>, '_id'>>;

  public async create(body: Models.Diagram<any>): Promise<Models.Diagram<any>> {
    return super._post(body);
  }

  public async update<T extends Models.BaseDiagramNode = Models.BaseDiagramNode>(
    id: Models.DiagramID,
    body: Partial<Models.Diagram<T>>
  ): Promise<Partial<Models.Diagram<T>>>;

  public async update<T extends Partial<Models.Diagram<any>>>(id: Models.DiagramID, body: T): Promise<T>;

  public async update(id: Models.DiagramID, body: Partial<Models.Diagram<any>>): Promise<Partial<Models.Diagram<any>>> {
    return super._patch(id, body);
  }

  public async updateNode<T extends Omit<Models.BaseDiagramNode, 'nodeID'>>(
    id: Models.DiagramID,
    nodeID: Models.NodeID,
    body: T
  ): Promise<T & Pick<Models.BaseDiagramNode, 'nodeID'>> {
    const { data } = await this.fetch.put<T & Pick<Models.BaseDiagramNode, 'nodeID'>>(`${this._getCRUDEndpoint(id)}/nodes/${nodeID}`, body);

    return data;
  }

  public async patchNode<T extends Omit<Models.BaseDiagramNode, 'nodeID'>>(
    id: Models.DiagramID,
    nodeID: Models.NodeID,
    body: Partial<T>
  ): Promise<T & Pick<Models.BaseDiagramNode, 'nodeID'>> {
    const { data } = await this.fetch.patch<T & Pick<Models.BaseDiagramNode, 'nodeID'>>(`${this._getCRUDEndpoint(id)}/nodes/${nodeID}`, body);

    return data;
  }

  public async deleteNode(id: Models.DiagramID, nodeID: Models.NodeID): Promise<string> {
    const { data } = await this.fetch.delete<string>(`${this._getCRUDEndpoint(id)}/nodes/${nodeID}`);

    return data;
  }

  public async delete(id: Models.DiagramID): Promise<Models.DiagramID> {
    return super._delete(id);
  }
}

export default DiagramResource;

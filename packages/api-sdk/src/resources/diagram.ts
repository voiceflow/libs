import type Fetch from '@api-sdk/fetch';
import { BaseModels } from '@voiceflow/base-types';

import { Fields } from './base';
import CrudResource from './crud';

const ENDPOINT = 'diagrams';

export const modelIDKey = '_id';
export type ModelIDKey = typeof modelIDKey;

class DiagramResource extends CrudResource<BaseModels.Diagram.Model, ModelIDKey, DiagramResource, 'modified'> {
  constructor(fetch: Fetch) {
    super({
      fetch,
      clazz: DiagramResource,
      endpoint: ENDPOINT,
    });
  }

  public async get<T extends Partial<BaseModels.Diagram.Model>>(id: string, fields: Fields): Promise<T>;

  public async get<T extends BaseModels.BaseDiagramNode = BaseModels.BaseDiagramNode>(id: string): Promise<BaseModels.Diagram.Model<T>>;

  public async get<T extends BaseModels.Diagram.Model<any> = BaseModels.Diagram.Model>(id: string): Promise<T>;

  public async get(id: string, fields?: Fields): Promise<BaseModels.Diagram.Model<any>> {
    return fields ? super._getByID(id, fields) : super._getByID(id);
  }

  public async getBatch<T extends Partial<BaseModels.Diagram.Model>>(ids: string[]): Promise<T[]>;

  public async getBatch<T extends BaseModels.BaseDiagramNode = BaseModels.BaseDiagramNode>(ids: string[]): Promise<BaseModels.Diagram.Model<T>[]>;

  public async getBatch<T extends BaseModels.Diagram.Model<any> = BaseModels.Diagram.Model>(ids: string[]): Promise<T[]>;

  public async getBatch(ids: string[]): Promise<BaseModels.Diagram.Model[]> {
    const joinedIDs = ids.join(',');
    const { data } = await this.fetch.get<{ diagrams: BaseModels.Diagram.Model[] }>(`${this._getCRUDEndpoint()}/batch/?diagramIDs=${joinedIDs}`);
    return data.diagrams;
  }

  public async getRTC<T extends BaseModels.Diagram.Model<any> = BaseModels.Diagram.Model>(id: string): Promise<{ diagram: T; timestamp: number }> {
    const { data } = await this.fetch.get<{ diagram: T; timestamp: number }>(`${this._getCRUDEndpoint(id)}/rtc`);

    return data;
  }

  public async create<T extends BaseModels.BaseDiagramNode = BaseModels.BaseDiagramNode>(
    body: Omit<BaseModels.Diagram.Model<T>, '_id'> & Partial<Pick<BaseModels.Diagram.Model<T>, '_id'>>
  ): Promise<BaseModels.Diagram.Model<T>>;

  public async create<T extends Omit<BaseModels.Diagram.Model<any>, '_id'>>(body: T): Promise<T & Pick<BaseModels.Diagram.Model<any>, '_id'>>;

  public async create(body: BaseModels.Diagram.Model<any>): Promise<BaseModels.Diagram.Model<any>> {
    return super._post(body);
  }

  public async update<T extends BaseModels.BaseDiagramNode = BaseModels.BaseDiagramNode>(
    id: string,
    body: Partial<BaseModels.Diagram.Model<T>>
  ): Promise<Partial<BaseModels.Diagram.Model<T>>>;

  public async update<T extends Partial<BaseModels.Diagram.Model<any>>>(id: string, body: T): Promise<T>;

  public async update(id: string, body: Partial<BaseModels.Diagram.Model<any>>): Promise<Partial<BaseModels.Diagram.Model<any>>> {
    return super._patch(id, body);
  }

  public async updateNode<T extends Omit<BaseModels.BaseDiagramNode, 'nodeID'>>(
    id: string,
    nodeID: string,
    body: T
  ): Promise<T & Pick<BaseModels.BaseDiagramNode, 'nodeID'>> {
    const { data } = await this.fetch.put<T & Pick<BaseModels.BaseDiagramNode, 'nodeID'>>(`${this._getCRUDEndpoint(id)}/nodes/${nodeID}`, body);

    return data;
  }

  public async patchNode<T extends Omit<BaseModels.BaseDiagramNode, 'nodeID'>>(
    id: string,
    nodeID: string,
    body: Partial<T>
  ): Promise<T & Pick<BaseModels.BaseDiagramNode, 'nodeID'>> {
    const { data } = await this.fetch.patch<T & Pick<BaseModels.BaseDiagramNode, 'nodeID'>>(`${this._getCRUDEndpoint(id)}/nodes/${nodeID}`, body);

    return data;
  }

  public async deleteNode(id: string, nodeID: string): Promise<string> {
    const { data } = await this.fetch.delete<string>(`${this._getCRUDEndpoint(id)}/nodes/${nodeID}`);

    return data;
  }

  public async delete(id: string): Promise<string> {
    return super._delete(id);
  }
}

export default DiagramResource;

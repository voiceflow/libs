import { Config, InstanceMap } from '@/types';

import { ClientMap } from '../clients';
import ExampleManager from './exampleManager';

const SERVICES = {
  exampleManager: ExampleManager,
} as const;

export type ServiceMap = InstanceMap<typeof SERVICES>;

/**
 * Build all services
 */

const buildServices = ({ config, clients }: { config: Config; clients: ClientMap }): ServiceMap => {
  return Object.entries(SERVICES).reduce<ServiceMap>(
    (acc, [key, Service]) => Object.assign(acc, { [key]: new Service({ clients, services: acc, config }) }),
    {} as any
  );
};

export default buildServices;

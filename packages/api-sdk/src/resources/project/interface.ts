export enum NLUType {
  VFNLU = 'vfnlu',
}
interface BaseUpdateNLUMetadataBody {
  type: NLUType;
}

interface VFNLUUpdateMetadataBody extends BaseUpdateNLUMetadataBody {
  type: NLUType.VFNLU;
}

export type UpdateMetadataBody = VFNLUUpdateMetadataBody;

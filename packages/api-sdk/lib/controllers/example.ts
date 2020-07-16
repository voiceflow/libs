import { Validator } from '@voiceflow/backend-utils';
import VError from '@voiceflow/verror';

import { Request } from '@/types';

import { AbstractController, route } from '../utils';

const { param } = Validator;

class ExampleController extends AbstractController {
  static VALIDATIONS = {
    PARAMS: {
      ID: param('id')
        .exists()
        .isInt(),
    },
  };

  @route({ PARAMS_ID: ExampleController.VALIDATIONS.PARAMS.ID })
  async getExample(req: Request<{ id: string }>) {
    const { exampleManager } = this.services;

    // do some work here
    if (req.params.id === '0') {
      throw new VError('Invalid request', VError.HTTP_STATUS.BAD_REQUEST);
    }

    return exampleManager.getExample(+req.params.id);
  }
}

export default ExampleController;

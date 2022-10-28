import { ErrorCode } from './error-code.enum';
import { ErrorPayload } from './error-payload.interface';

export class ClientException extends Error implements ErrorPayload {
  public static instanceOf(err: any): err is ClientException {
    return err instanceof ClientException;
  }

  public response: Response;

  public statusCode: number;

  public errorCode?: ErrorCode;

  public cause?: string;

  public details?: object;

  constructor(response: Response) {
    super();
    this.response = response.clone();
    this.statusCode = response.status;
    this.applyResponse(response);
  }

  private async applyDetailedError(response: Response, body: Partial<ErrorPayload>) {
    this.message = body.message || response.statusText;
    if (body.cause) this.cause = body.cause;
    if (body.details) this.details = body.details;
    if (body.errorCode) this.errorCode = body.errorCode;
  }

  private async applyOpaqueError(response: Response, text: string) {
    this.message = text || response.statusText;
  }

  private async applyResponse(response: Response) {
    const text = await response.text();

    try {
      await this.applyDetailedError(response, JSON.parse(text));
    } catch {
      await this.applyOpaqueError(response, text);
    }
  }
}

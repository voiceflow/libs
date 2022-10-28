import { ErrorCode } from './error-code.enum';
import { ErrorPayload } from './error-payload.interface';

export class ClientException extends Error implements ErrorPayload {
  public static instanceOf(err: any): err is ClientException {
    return err instanceof ClientException;
  }

  public response: Response;

  public statusCode: number;

  public statusText: string;

  public errorCode?: ErrorCode;

  public cause?: string;

  public details?: object;

  constructor(response: Response) {
    super();
    this.name = this.constructor.name;
    this.response = response.clone();
    this.statusCode = response.status;
    this.statusText = response.statusText;
  }

  private extractDetailedError(body: Partial<ErrorPayload>) {
    this.message = body.message || this.response.statusText;
    if (body.cause) this.cause = body.cause;
    if (body.details) this.details = body.details;
    if (body.errorCode) this.errorCode = body.errorCode;
  }

  private extractOpaqueError(text: string) {
    this.message = text || this.response.statusText;
  }

  public async build() {
    const text = await this.response.text();

    try {
      this.extractDetailedError(JSON.parse(text));
    } catch {
      this.extractOpaqueError(text);
    }

    return this;
  }
}

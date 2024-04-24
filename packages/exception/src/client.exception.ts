import type { BaseResponse } from './base-response.interface';
import type { ErrorCode } from './error-code.enum';
import type { ErrorPayload } from './error-payload.interface';

export class ClientException<Res extends BaseResponse = BaseResponse> extends Error implements ErrorPayload {
  public static instanceOf(err: any): err is ClientException {
    return err instanceof ClientException;
  }

  public response: Res;

  public statusCode: number;

  public statusText: string;

  public errorCode?: ErrorCode;

  public cause?: string;

  public details?: unknown;

  constructor(response: Res) {
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

  public getCause() {
    return this.cause;
  }

  public async build() {
    const text = await this.response.clone().text();

    try {
      this.extractDetailedError(JSON.parse(text));
    } catch {
      this.extractOpaqueError(text);
    }

    return this;
  }

  public is<Details>(code: ErrorCode): this is { details: Details } {
    return this.errorCode === code;
  }
}

export abstract class ApplicationException extends Error {
  readonly status: number;

  readonly code: string;

  protected constructor(status: number, code: string, message: string) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

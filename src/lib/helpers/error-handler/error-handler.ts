import logger from "../../logger";


export class ErrorHandler {
  private readonly msg: unknown[] = [];

  constructor(...msg: unknown[]) {
    this.msg = msg;
  }

  fatal(): void {
    logger.error(this.msg);
    process.exit(1);
  }
}

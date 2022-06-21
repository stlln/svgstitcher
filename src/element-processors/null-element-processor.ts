import ElementProcessor from './element-processor';

export default class NullElementProcessor extends ElementProcessor {
  async process(): Promise<void> {
    return;
  }
}

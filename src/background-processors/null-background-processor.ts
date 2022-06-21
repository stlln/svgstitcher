import BackgroundProcessor from './background-processor';

export default class NullBackgroundProcessor extends BackgroundProcessor {
  async process(): Promise<void> {
    return;
  }
}

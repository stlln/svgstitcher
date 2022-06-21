import createSvg from './lib/create-svg';
import logger from './lib/logger';
import elementProcessorFactory from './element-processors/element-processor-factory';
import backgroundProcessorFactory from './background-processors/background-processor-factory';
import { AssetOutput } from './types/processed-asset';
import { AssetParams } from './types/asset-params';

export async function stitch(assetParams: AssetParams): Promise<AssetOutput> {
  logger.debug(`Starting to generate output for asset: ${assetParams.label}`);

  const output: AssetOutput = {
    params: assetParams,
    result: ''
  };

  // Create SVG
  const container = createSvg();

  // Set size
  container.size(assetParams.width, assetParams.height);

  // Add background if background key is present in asset config
  if (assetParams.background) {
    await backgroundProcessorFactory(assetParams.background, container)
      .process();
  }

  // Add elements
  for (const element of assetParams.elements) {
    await elementProcessorFactory(element, container)
      .process();
  }

  output.result = container.svg();

  return output;
}

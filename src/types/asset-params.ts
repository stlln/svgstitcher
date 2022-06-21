import {AssetElement} from './asset-element';
import {AssetBackground} from './asset-background';

export type AssetParams = {
  label?: string;
  width: number;
  height: number;
  background?: AssetBackground;
  elements: AssetElement[];
}

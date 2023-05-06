/* tslint:disable */
import { Disease } from './disease';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageDisease {
  content?: Array<Disease>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: Pageable;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}

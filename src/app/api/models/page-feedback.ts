/* tslint:disable */
import { Feedback } from './feedback';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageFeedback {
  content?: Array<Feedback>;
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

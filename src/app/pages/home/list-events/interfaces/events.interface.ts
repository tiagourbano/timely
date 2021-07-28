import { IItemEvent } from './item-event.interface';

export interface IEvents {
  data: {
    from: number;
    has_next: boolean;
    has_prior: boolean;
    size: number;
    total: number;
    items?: IItemEvent;
  };
}

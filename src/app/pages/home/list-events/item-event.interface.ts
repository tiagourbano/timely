export interface IEvent {
  allday: boolean,
  calendar_id: number,
  canonical_url: string,
  cost_display: string,
  cost_external_url: string,
  cost_type: string,
  custom_url: string,
  description_short: string,
  end_datetime: string,
  event_status: string,
  feed_id: number,
  id: number,
  images: any[],
  instance: string,
  is_example_event: boolean,
  post_to_facebook: boolean,
  post_to_twitter: boolean,
  start_datetime: string,
  taxonomies: {
    taxonomy_venue: any[]
  },
  timezone: string,
  title: string,
  uid: string,
  url: string,
  user: string,
};

export interface IItemEvent {
  [key: string]: IEvent[],
};

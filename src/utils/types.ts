export type Skip = {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string | null;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
};

// {"id":11554,"size":4,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":311,"vat":20,"postcode":"NR32","area":null,"forbidden":false,"created_at":"2021-04-06T17:04:42","updated_at":"2024-04-02T09:22:38","allowed_on_road":true,"allows_heavy_waste":true}
export interface ResponseSchema {
  status: number;
  data: Skip[] | { message: string };
}

export type AppStore = {
  selected: Skip;
};

export type Payload = Partial<AppStore>;

export type StoreAction = {
  type: string;
  payload: Payload;
};

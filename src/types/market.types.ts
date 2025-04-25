export interface Market {
  items: Item[];
}

export interface Item {
  id:          string;
  name:        string;
  type:        string;
  description: string;
  cost:        number;
}

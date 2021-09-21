export enum EItemType {
  TEXT = 'text',
  VIDEO = 'video',
}

export interface IItem {
  key: string;
  body: string;
  type: EItemType;
}

export interface IVideoItem extends IItem {
  type: EItemType.VIDEO;
  video: {
    provider: string;
    link: string;
  };
  title: string;
}

export interface ITextItem extends IItem {
  type: EItemType.TEXT;
}

export type TItem = IVideoItem | ITextItem;

export interface IKeyItem {
  label: string;
  group: string;
  value: string;
}

export interface IAppState {
  items: TItem[];
  current: number;
  filter: string;
  keys: IKeyItem[];
}

export enum EActionType {
  SET_CURRENT_ITEM = 'Edit item',
  REMOVE_ITEM = 'Remove item',
  SAVE_ITEM = 'SAVE item',
  SET_KEYS = 'Set Keys',
  SET_ITEMS = 'Set Items',
  SET_FILTER = 'Set filter',
}

export interface TSetCurrentItemAction {
  type: EActionType.SET_CURRENT_ITEM;
  payload: number;
}

export interface TSetKeysAction {
  type: EActionType.SET_KEYS;
  payload: IKeyItem[];
}

export interface TRemoveItemAction {
  type: EActionType.REMOVE_ITEM;
  payload: number;
}

export interface TSaveItemAction {
  type: EActionType.SAVE_ITEM;
  payload: {
    item: TItem;
    index: number;
  };
}

export interface TSetItemsAction {
  type: EActionType.SET_ITEMS;
  payload: TItem[];
}

export interface TSetFilterAction {
  type: EActionType.SET_FILTER;
  payload: string;
}

export type TAction =
  | TSetCurrentItemAction
  | TSetKeysAction
  | TRemoveItemAction
  | TSaveItemAction
  | TSetFilterAction
  | TSetItemsAction;

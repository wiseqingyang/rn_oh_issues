import { useMemoizedFn } from '@/hooks/useMemoizedFn';
import { useEffect } from 'react';
import { DeviceEventEmitter } from 'react-native';

export enum EEventName {
  COMMENT_LIKE = 'COMMENT_LIKE',
  ADD_REPLY = 'ADD_REPLY',
  ADD_COMMENT = 'ADD_COMMENT',
  CHANGE_TAB = 'CHANGE_TAB',
  SHOW_FLOAT_ENTRY = 'SHOW_FLOAT_ENTRY',
  SCROLL_TO_CASE = 'SCROLL_TO_CASE',
  COLLECT_READ = 'COLLECT_READ',
  PERCIPIENCE_LIKE = 'PERCIPIENCE_LIKE',
  CREATE_BADGE = 'CREATE_BADGE',
  SCROLL_REACH_END = 'SCROLL_REACH_END',
  SCROLL_PULL_REFRESH = 'SCROLL_PULL_REFRESH',
  COMMUNITY_FOLLOW = 'COMMUNITY_FOLLOW',
  COMMUNITY_CANCEL_FOLLOW = 'COMMUNITY_CANCEL_FOLLOW',
  COMMUNITY_DELETE = 'COMMUNITY_DELETE',
  COMMUNITY_CREATE_OR_UPDATE = 'COMMUNITY_CREATE_OR_UPDATE',
  COURSE_PLAY_PAUSE = 'COURSE_PLAY_PAUSE',
  DROP_DOWN_SELECT_TOGGLE = 'DROP_DOWN_SELECT_TOGGLE',
  RECEIVE_ALL_AWARDS = 'RECEIVE_ALL_AWARDS',
  BARCODE_SCANNED = 'BARCODE_SCANNED',
}

export enum EScrollName {
  COMMUNITY_HOME,
  INTERACT_HOME,
  COURSE_LIST,
  SERVICE_HOME,
}

type TEventParams = Record<string, undefined> & {
  [EEventName.ADD_REPLY]: { id: number };
  [EEventName.ADD_COMMENT]: { id: number };
  [EEventName.CHANGE_TAB]: { name: string };
  [EEventName.SHOW_FLOAT_ENTRY]: { visible: boolean };
  [EEventName.COLLECT_READ]: { id: number; collected: boolean };
  [EEventName.PERCIPIENCE_LIKE]: { id: number; liked: boolean };
  [EEventName.SCROLL_REACH_END]: { id: string };
  [EEventName.COMMUNITY_FOLLOW]: { id: number };
  [EEventName.COMMUNITY_CANCEL_FOLLOW]: { id: number };
  [EEventName.COMMUNITY_DELETE]: { id: number };
  [EEventName.COMMUNITY_CREATE_OR_UPDATE]: { id: number };
  [EEventName.SCROLL_PULL_REFRESH]: { id: string };
  [EEventName.COURSE_PLAY_PAUSE]: { isPlay: boolean };
  [EEventName.DROP_DOWN_SELECT_TOGGLE]: { id: number | string };
  [EEventName.BARCODE_SCANNED]: { code: string };
};

type TEventListener<P> = (params: P) => void;

class EventBus<M extends { [K in keyof M]: any }> {
  emit = <K extends keyof M>(name: K, params?: M[K]) => {
    DeviceEventEmitter.emit(name as string, params);
  };

  addEventListener = <K extends keyof M>(
    name: K,
    listener: TEventListener<M[K]>,
  ) => {
    return DeviceEventEmitter.addListener(name as string, listener);
  };
}

const eventBus = new EventBus<TEventParams>();

export const useEventBus = <K extends keyof TEventParams>(
  name: K,
  listener: (data: TEventParams[K]) => void,
) => {
  const fn = useMemoizedFn(listener);
  useEffect(() => {
    const subscription = eventBus.addEventListener(name, fn);
    return () => {
      subscription.remove();
    };
  }, [fn, name]);
};

export default eventBus;

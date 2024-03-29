import { Reducer } from '@reduxjs/toolkit';
import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {
  ReduxStoreWithManager,
  StateSchema,
  StateSchemaKey,
} from '@/app/providers/StoreProvider';

export type ReducersMap = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersMap;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({
  children,
  reducers,
  removeAfterUnmount = true,
}: PropsWithChildren<DynamicModuleLoaderProps>) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([reducerName, reducer]) => {
      const mounted = Boolean(mountedReducers[reducerName as StateSchemaKey]);

      if (!mounted) {
        store.reducerManager.add(reducerName as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${reducerName} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerName]) => {
          store.reducerManager.remove(reducerName as StateSchemaKey);
          dispatch({ type: `@REMOVE ${reducerName} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

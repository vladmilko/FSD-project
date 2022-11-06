import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersMap = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

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
    Object.entries(reducers).forEach(
      ([reducerName, reducer]: ReducerListEntry) => {
        store.reducerManager.add(reducerName, reducer);
        dispatch({ type: `@INIT ${reducerName} reducer` });
      },
    );

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerName]: ReducerListEntry) => {
          store.reducerManager.remove(reducerName);
          dispatch({ type: `@REMOVE ${reducerName} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
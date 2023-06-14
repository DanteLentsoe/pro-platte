import React, {
  useReducer,
  useContext,
  ReactNode,
  createContext,
  Dispatch,
  FC
} from "react";

interface DialogState {
  isOpen: boolean;
}

interface DialogAction {
  type: "OPEN" | "CLOSE";
}

const DialogContext = createContext<[DialogState, Dispatch<DialogAction>]>([
  { isOpen: false },
  () => {}
]);

const dialogReducer = (
  state: DialogState,
  action: DialogAction
): DialogState => {
  switch (action.type) {
    case "OPEN":
      return { isOpen: true };
    case "CLOSE":
      return { isOpen: false };
    default:
      return state;
  }
};

export const DialogProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(dialogReducer, { isOpen: false });

  return (
    <DialogContext.Provider value={[state, dispatch]}>
      {children}
    </DialogContext.Provider>
  );
};

export function useDialog() {
  return useContext(DialogContext);
}

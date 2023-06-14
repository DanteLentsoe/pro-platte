import { Dialog } from "@headlessui/react";
import { useDialog } from "@/context/DialogContext";
import { FC } from "react";

interface ToastProps {
  title: string;
  description: string;
  actionLabel: string;
  cancelLabel: string;
  onAction: () => void;
  type?: "Modal" | "Toast";
}

export const Toast: FC<ToastProps> = ({
  title,
  description,
  actionLabel,
  cancelLabel,
  type = "Modal",
  onAction
}) => {
  const [{ isOpen }, dispatch] = useDialog();

  return (
    <Dialog open={isOpen} onClose={() => dispatch({ type: "CLOSE" })}>
      <Dialog.Panel>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>{description}</Dialog.Description>
        {type === "Modal" && <button onClick={onAction}>{actionLabel}</button>}
        {type === "Modal" && (
          <button onClick={() => dispatch({ type: "CLOSE" })}>
            {cancelLabel}
          </button>
        )}
      </Dialog.Panel>
    </Dialog>
  );
};

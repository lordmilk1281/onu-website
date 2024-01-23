"use client"

import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import XIcon from "../icons/XIcon";

type Props = {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
};

const styleAnimation = {
  animation: "overlayShow 150s cubic-bezier(0.16, 1, 0.3, 1)",
};

const DialogModal = ({ open, onClose, children }: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      {open ? (
        <Dialog.Portal forceMount>
          <Dialog.Overlay
            className="fixed inset-0 z-50 bg-black/70"
            style={styleAnimation}
          />
          <Dialog.Content
            style={styleAnimation}
            className="fixed left-1/2 top-1/2 z-50 max-h-[85vh] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6"
          >
            <button onClick={onClose}>
              <XIcon />
            </button>
            {children}
          </Dialog.Content>
        </Dialog.Portal>
      ) : null}
    </Dialog.Root>
  );
};

export default DialogModal;

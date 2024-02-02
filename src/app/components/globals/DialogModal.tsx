"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import XIcon from "../icons/XIcon";
import { cn } from "@/utils";

type Props = {
  open: boolean;
  children: ReactNode;
  className?: string;
  onClose: () => void;
};

const styleAnimation = {
  animation: "overlayShow 150s cubic-bezier(0.16, 1, 0.3, 1)",
};

const DialogModal = ({ open, onClose, className, children }: Props) => {
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
            className={cn(
              "fixed inset-2 z-50 m-auto h-full max-h-[85vh] w-[90vw] max-w-lg overflow-y-auto rounded-lg bg-white p-6",
              className,
            )}
          >
            <button className="fixed top-4 right-4 text-white" onClick={onClose}>
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

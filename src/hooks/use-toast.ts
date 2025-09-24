import * as React from "react";

export type Toast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type ToastReturn = {
  toasts: Toast[];
  toast: (value: string | Partial<Toast>) => string;
  dismiss: (toastId?: string) => void;
};

export const toast: ToastReturn["toast"] = (value) => {
  // No-op shim: return a stable id without rendering a toast
  return typeof value === "string"
    ? value
    : value.id ?? Math.random().toString(36).slice(2);
};

export function useToast(): ToastReturn {
  // No-op shim: shadcn Toaster will render nothing since list is empty
  const [toasts] = React.useState<Toast[]>([]);
  const dismiss = (_id?: string) => {};
  return { toasts, toast, dismiss };
}
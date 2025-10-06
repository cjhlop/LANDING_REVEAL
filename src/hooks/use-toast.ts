// This file is kept for compatibility with shadcn/ui components
// but we use sonner for actual toast notifications (see src/utils/toast.ts)

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
  return typeof value === "string"
    ? value
    : value.id ?? Math.random().toString(36).slice(2);
};

export function useToast(): ToastReturn {
  const toasts: Toast[] = [];
  const dismiss = (_id?: string) => {};
  return { toasts, toast, dismiss };
}
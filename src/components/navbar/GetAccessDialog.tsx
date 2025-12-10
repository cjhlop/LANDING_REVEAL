import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { showSuccess, showError } from "@/utils/toast";

const schema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  name: z
    .string()
    .max(64, "Name must be at most 64 characters")
    .optional()
    .or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

const GetAccessDialog: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", name: "" },
    mode: "onBlur",
  });

  React.useEffect(() => {
    const handler = () => setOpen(true);
    document.addEventListener("open-get-access", handler as EventListener);
    return () => document.removeEventListener("open-get-access", handler as EventListener);
  }, []);

  const onSubmit = (values: FormValues) => {
    showSuccess(`Thanks${values.name ? `, ${values.name}` : ""}! We'll be in touch at ${values.email}.`);
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="lg"
          aria-label="Try DemandSense for free"
        >
          Try for Free
        </Button>
      </DialogTrigger>
      <DialogContent 
        role="dialog" 
        aria-modal="true"
        className="sm:max-w-md border border-gray-200 shadow-xl bg-white/95 backdrop-blur-sm"
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">Start your free trial</DialogTitle>
          <DialogDescription className="text-gray-600">
            Enter your details and we&apos;ll set up your free trial account.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit, () => showError("Please fix the errors and try again."))}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      inputMode="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      aria-invalid={!!form.formState.errors.email}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Name (optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      aria-invalid={!!form.formState.errors.name}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="pt-4">
              <Button
                type="submit"
                variant="default"
                className="w-full"
              >
                Start Free Trial
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(GetAccessDialog);
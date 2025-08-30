import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { showSuccess, showError } from "@/utils/toast";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
});

type Values = z.infer<typeof schema>;

export type EmailCaptureProps = {
  placeholder?: string;
  buttonText?: string;
  onSubmitEmail?: (email: string) => void;
  className?: string;
};

const EmailCapture: React.FC<EmailCaptureProps> = ({
  placeholder = "you@company.com",
  buttonText = "Notify me",
  onSubmitEmail,
  className,
}) => {
  const form = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { email: "" }, mode: "onBlur" });

  const onSubmit = (vals: Values) => {
    showSuccess("Thanks! We'll be in touch soon.");
    onSubmitEmail?.(vals.email);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, () => showError("Please fix the errors and try again."))}
        className={className}
        role="form"
        aria-label="Email capture"
      >
        <div className="flex w-full max-w-md items-start gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    type="email"
                    inputMode="email"
                    placeholder={placeholder}
                    autoComplete="email"
                    aria-invalid={!!form.formState.errors.email}
                  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-5">
            {buttonText}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default React.memo(EmailCapture);
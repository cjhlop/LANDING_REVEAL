import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { showSuccess, showError } from "@/utils/toast";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
});

type FormValues = z.infer<typeof schema>;

const SubscribeForm: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
    mode: "onBlur",
  });

  const onSubmit = (values: FormValues) => {
    showSuccess(`Subscribed: ${values.email}`);
    form.reset();
  };

  const onError = () => showError("Please enter a valid email.");

  const { register, handleSubmit, formState } = form;
  const emailId = "bento-subscribe-email";
  const errorId = "bento-subscribe-error";

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="bento-form"
      role="form"
      aria-label="Subscribe for updates"
    >
      <div className="bento-form-field">
        <Input
          id={emailId}
          type="email"
          inputMode="email"
          placeholder="you@example.com"
          autoComplete="email"
          aria-invalid={!!formState.errors.email}
          aria-describedby={formState.errors.email ? errorId : undefined}
          {...register("email")}
        />
        <Button type="submit" className="bento-form-button">
          Subscribe
        </Button>
      </div>
      {formState.errors.email && (
        <p id={errorId} className="bento-form-error" role="alert">
          {formState.errors.email.message}
        </p>
      )}
    </form>
  );
};

export default React.memo(SubscribeForm);
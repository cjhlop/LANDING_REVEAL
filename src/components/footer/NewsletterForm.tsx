import * as React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { showSuccess, showError } from '@/utils/toast';

const schema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
});

type FormValues = z.infer<typeof schema>;

const NewsletterForm: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: '' },
    mode: 'onBlur',
  });

  const onSubmit = (values: FormValues) => {
    showSuccess(`Subscribed with ${values.email}!`);
    form.reset();
  };

  return (
    <div className="footer-newsletter">
      <p className="footer-heading">Join our newsletter</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, () => showError('Please enter a valid email.'))}
          className="mt-4 space-y-2"
        >
          <div className="flex items-center gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Jessica@email.com"
                      className="footer-newsletter-input"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="h-10 px-4 rounded-md bg-[#3875F6] hover:bg-[#2c5cc5] text-white font-medium tracking-tight">
              Subscribe
            </Button>
          </div>
          <FormMessage className="text-xs text-red-500" />
        </form>
      </Form>
      <p className="footer-newsletter-terms">By clicking, you’re agreeing to our Terms.</p>
    </div>
  );
};

export default React.memo(NewsletterForm);
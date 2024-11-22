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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useAuth } from "@/hooks/useAuth";
import { otpSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Verify = () => {
  const { email } = useAuth();
  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: " ",
      email,
    },
  });
  function onSubmit(values: z.infer<typeof otpSchema>) {
    // API call to verify OTP
    console.log(values);
    window.open("/", "_self");
  }
  return (
    <div className="w-full">
      <p className="text-center text-muted-foreground text-sm">
        We have sent you an email with a verification code to your email
        address. Please enter the code below.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full justify-center space-y-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="jonibek@example.com"
                    className="h-10 bg-secondary"
                    {...field}
                    disabled
                  />
                </FormControl>

                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>One-Time Password</FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    className="w-full"
                    pattern={REGEXP_ONLY_DIGITS}
                    {...field}
                  >
                    <InputOTPGroup className="w-full">
                      <InputOTPSlot
                        className="w-full h-10 dark:bg-primary-foreground bg-secondary"
                        index={0}
                      />
                      <InputOTPSlot
                        className="w-full h-10 dark:bg-primary-foreground bg-secondary"
                        index={1}
                      />
                      <InputOTPSlot
                        className="w-full h-10 dark:bg-primary-foreground bg-secondary"
                        index={2}
                      />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup className="w-full">
                      <InputOTPSlot
                        className="w-full h-10 dark:bg-primary-foreground bg-secondary"
                        index={3}
                      />
                      <InputOTPSlot
                        className="w-full h-10 dark:bg-primary-foreground bg-secondary"
                        index={4}
                      />
                      <InputOTPSlot
                        className="w-full h-10 dark:bg-primary-foreground bg-secondary"
                        index={5}
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>

                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <Button type="submit" size={"lg"} className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Verify;

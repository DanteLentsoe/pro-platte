import { PageWrapper } from "../organisms";
import { Button, Input } from "../atoms";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues
} from "react-hook-form";
import emailjs from "emailjs-com";

import { useState } from "react";

const Contact = () => {
  const [isemailSubmitting, setEmailSubmitting] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    reset,

    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (_, event) => {
    setEmailSubmitting(true);
    emailjs
      .sendForm(
        process.env.EMAIL_SERVICE_KEY as string,
        process.env.EMAIL_TEMPLATE_KEY as string,
        event?.target,
        process.env.EMAIL_USER_KEY as string
      )
      .then(
        (result) => {
          console.log(result);
          setEmailSubmitting(false);
          reset();
        },
        (error) => {
          console.log(error.text);
          setEmailSubmitting(false);
        }
      );
  };

  return (
    <PageWrapper>
      <div className="mx-auto max-w-2xl py-24 sm:py-24 lg:py-24">
        <div className="text-center">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center">
              <h2 className="mt-10 text-center text-2xl leading-9 tracking-tight text-gray-900">
                Contact Me
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                method="POST"
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      label="Name"
                      name="name"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      label="Email"
                      name="email"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      label="Message"
                      name="message"
                      type="textarea"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                <div>
                  <Button
                    isButton
                    href="/editor"
                    className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6">
                    {isemailSubmitting ? "Submiting..." : "Submit"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;

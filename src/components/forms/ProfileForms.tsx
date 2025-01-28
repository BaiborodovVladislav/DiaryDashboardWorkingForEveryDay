"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EditUserProfileSchema } from "@/lib/types";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";



type Props = {
  user: any;
  onUpdate?: any;
};

const ProfileForm = ({ user, onUpdate }: Props) => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: "onChange",
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: user?.name, 
      email: user?.email,
    },
  });

  const onSubmit = async (values: z.infer<typeof EditUserProfileSchema>) => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await onUpdate(values.name);
      alert("Профиль успешно обновлён!");
    } catch (error) {
      console.error("Ошибка при сохранении профиля:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    form.reset({
      name: user.name,
      email: user.email,
    });
  }, [user, form]);

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          disabled={loading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">User full name</FormLabel>
              <FormControl>
                <input
                  {...field}
                  type="text"
                  className="ml-10"
                  placeholder="Name"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl>
                <input
                  {...field}
                  type="email"
                  className="ml-10"
                  disabled={loading}
                  placeholder="email"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="self-start hover:bg-[#2f006b] hover:text-white"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving
            </>
          ) : (
            "Save User Settings"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ProfileForm;

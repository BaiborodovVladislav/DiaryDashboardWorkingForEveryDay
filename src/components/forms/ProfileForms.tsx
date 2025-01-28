"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EditUserProfileSchema } from "@/lib/types";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

const ProfileForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: "onChange",
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-6" onSubmit={() => {}}>
        <FormField
          disabled={loading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">User full name</FormLabel>
              <FormControl>
                <input type="text" className='ml-10' {...field} placeholder="Name" />
              </FormControl>
            </FormItem>
          )}
        />
	          <FormField
          disabled={true}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl>
                <input type="email" className='ml-10' {...field} placeholder="email" />
              </FormControl>
            </FormItem>
          )}
        />
	  <Button
	  type='submit'
	  className='self-start hover:bg-[#2f006b] hover:text-white'
	  >
		{loading ? (
			<>
			<Loader2 className='mr-2 h-4 w-4 animate-spin'/>
			Saving
			</>
			
		) : (
			'Save User Settings'
		)}
	  </Button>
      </form>
    </Form>
  );
};

export default ProfileForm;

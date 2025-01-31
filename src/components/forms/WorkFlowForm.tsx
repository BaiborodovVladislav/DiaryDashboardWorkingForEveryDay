import { WorkflowFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
};

const WorkFlowForm = ({ title, subtitle }: Props) => {
  const form = useForm<z.infer<typeof WorkflowFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(WorkflowFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const router = useRouter();

  useEffect(() => {
    console.log("Router pathname:", router);
  }, [router]);

  const handleSubmit = () => {};

  useEffect(() => {
    console.log("Form structure:", document.querySelector("form")?.outerHTML);
  }, []);

  return (
	<Card className="w-full max-w-[650px] border-none">
	  {title && subtitle && (
	    <CardHeader>
		<CardTitle>{title}</CardTitle>
		<CardDescription>{subtitle}</CardDescription>
	    </CardHeader>
	  )}
	  <CardContent>
	    <Form {...form}>
		<form
		  onSubmit={form.handleSubmit(handleSubmit)}
		  className="flex flex-col gap-4 text-left"
		>
		  <FormField
		    disabled={isLoading}
		    control={form.control}
		    name="name"
		    render={({ field }) => (
			<FormItem>
			  <FormLabel>Name</FormLabel>
			  <FormControl>
			    <Input
				{...field}
				placeholder="Name"
			    />
			  </FormControl>
			  <FormMessage />
			</FormItem>
		    )}
		  />
		  <FormField
		    disabled={isLoading}
		    control={form.control}
		    name="description"
		    render={({ field }) => (
			<FormItem>
			  <FormLabel>Description</FormLabel>
			  <FormControl>
			    <Input
				placeholder="Description"
				{...field}
			    />
			  </FormControl>
			  <FormMessage />
			</FormItem>
		    )}
		  />
		  <Button
		    className="mt-4"
		    disabled={isLoading}
		    type="submit"
		  >
		    {isLoading ? (
			<>
			  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving
			</>
		    ) : (
			'Save Settings'
		    )}
		  </Button>
		</form>
	    </Form>
	  </CardContent>
	</Card>
    )
};

export default WorkFlowForm;

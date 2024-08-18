"use client";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { LoaderCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendMessage } from "../actions/AiApi";
import { usePath } from "../store/position";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem } from "@/components/ui/form";

const formSchema = z.object({
  input: z.string().min(1),
});

const inputs = new Map([
  ["aboutme", "About Me"],
  ["personalprojects", "Personal Projects"],
  ["professionalexperiences", "Professional Experiences"],
  ["volunteeringexperience", "Volunteering Experience"],
  ["contact", "Contact"],
  ["study", "Study"]
]);
export default function ChatField() {
  const [showInput, setShowInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    form.resetField("input");
    if(inputs.has(data.input.toLowerCase().trim().split(" ").join(""))){
      const key = data.input.toLowerCase().trim().split(" ").join("") 
      setPath(inputs.get(key) ?? "" );
      setLoading(false);
      return;
    }
    form.resetField("input");
    const response = await sendMessage(data.input);
    setPath(response ?? "");
    console.log(response);
    setLoading(false);
  };

  const setPath = usePath((state) => state.setPath);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowInput(true);
    }, 3300); //in ms
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="absolute bottom-0 left-0 z-20 flex w-full justify-center p-16">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "relative w-0 transition-all duration-1000 ease-in-out",
            showInput && "w-1/2",
          )}
        >
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem>
                <Input
                  autoComplete="off"
                  autoFocus
                  {...field}
                  className={cn(
                    "w-full rounded-full border-none bg-transparent px-4 py-1 font-semibold text-white shadow-sm shadow-slate-400 backdrop-blur-[2px] focus:outline-none focus:ring-0",
                  )}
                />
              </FormItem>
            )}
          />
          <Button
            variant={"ghost"}
            type="submit"
            className={cn(
              "absolute right-0 top-0 opacity-0",
              showInput && "right-0 top-0 opacity-100",
            )}
            disabled={loading}
          >
            {!loading && <Send className="size-4 text-white" />}
            {loading && (
              <LoaderCircle className="size-4 animate-spin text-white" />
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}

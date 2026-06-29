"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  role: z.string(),
  store: z.string(),
  status: z.string(),
});

type FormData = z.infer<typeof schema>;

type Props = {
  onSuccess?: () => void;
};

export default function UserForm({ onSuccess }: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: "Sales",
      store: "Head Office",
      status: "Active",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);

    reset();

    onSuccess?.();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Name
          </label>

          <Input
            {...register("name")}
            placeholder="John Doe"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <Input
            {...register("email")}
            placeholder="john@company.com"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Phone
          </label>

          <Input
            {...register("phone")}
            placeholder="+91 9876543210"
          />

          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Store
          </label>

          <Select
            value={watch("store")}
            onValueChange={(value) =>
              setValue("store", value)
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Head Office">
                Head Office
              </SelectItem>

              <SelectItem value="Gandhi Nagar">
                Gandhi Nagar
              </SelectItem>

              <SelectItem value="Janipur">
                Janipur
              </SelectItem>

              <SelectItem value="Kathua">
                Kathua
              </SelectItem>

              <SelectItem value="Udhampur">
                Udhampur
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Role
          </label>

          <Select
            value={watch("role")}
            onValueChange={(value) =>
              setValue("role", value)
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Admin">
                Admin
              </SelectItem>

              <SelectItem value="Manager">
                Manager
              </SelectItem>

              <SelectItem value="Store Manager">
                Store Manager
              </SelectItem>

              <SelectItem value="Sales">
                Sales
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Status
          </label>

          <Select
            value={watch("status")}
            onValueChange={(value) =>
              setValue("status", value)
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Active">
                Active
              </SelectItem>

              <SelectItem value="Inactive">
                Inactive
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            reset();
            onSuccess?.();
          }}
        >
          Cancel
        </Button>

        <Button type="submit">
          Save User
        </Button>
      </div>
    </form>
  );
}
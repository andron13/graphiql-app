import { FC } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

import { GraphqlRequestType, RestRequestType } from "~/shared/types";
import { FormValues } from "~/shared/types/types";

interface RestApiRequestSectionProps {
  onSubmit: (data: FormValues) => void;
  defaultValues: FormValues;
}

export const RestApiRequestSection: FC<RestApiRequestSectionProps> = ({
  onSubmit,
  defaultValues,
}) => {
  const { control, handleSubmit, register, reset } = useForm<FormValues>({
    defaultValues,
  });

  const { fields, append } = useFieldArray({
    control,
    name: "headers",
  });

  const handleAddHeader = () => {
    append({ key: "", value: "" });
  };

  const handleFormSubmit = (data: FormValues) => {
    onSubmit(data);
    reset(defaultValues);
  };

  return (
    <form
      className="rounded bg-white p-4 shadow"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="mb-4 flex gap-4">
        <div className="flex-1">
          <label className="mb-2 block font-medium">Method</label>
          <select
            className="w-fit rounded border border-gray-300 p-2"
            {...register("method")}
          >
            {Object.values(RestRequestType).map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
            <option value={GraphqlRequestType.GRAPHQL}>GRAPHQL</option>
          </select>
        </div>
        <div className="flex-2 w-full">
          <label className="mb-2 block font-medium">Endpoint URL</label>
          <input
            type="text"
            className="w-full rounded border border-gray-300 p-2"
            {...register("endpoint")}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium">Headers</label>
        {fields.map((item, index) => (
          <div key={item.id} className="mb-2 flex gap-2">
            <input
              type="text"
              placeholder="Header Key"
              className="flex-1 rounded border border-gray-300 p-2"
              {...register(`headers.${index}.key` as const)}
            />
            <input
              type="text"
              placeholder="Header Value"
              className="flex-1 rounded border border-gray-300 p-2"
              {...register(`headers.${index}.value` as const)}
            />
          </div>
        ))}
        <button
          type="button"
          className="rounded bg-blue-500 p-2 text-white"
          onClick={handleAddHeader}
        >
          Add Header
        </button>
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium">Body</label>
        <Controller
          control={control}
          name="body"
          render={({ field }) => (
            <textarea
              className="h-32 w-full rounded border border-gray-300 p-2"
              placeholder="JSON/Text Editor"
              {...field}
            />
          )}
        />
      </div>

      <button
        type="submit"
        className="mt-4 rounded bg-green-500 p-2 text-white"
      >
        Send Request
      </button>
    </form>
  );
};

import { FC, useEffect } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";

import { FormValuesGraphql } from "~/shared/types/types";

interface GraphqlRequestSectionProps {
  onSubmit: (data: FormValuesGraphql) => void;
  defaultValues: FormValuesGraphql;
}

export const GraphiQLClientRequestSection: FC<GraphqlRequestSectionProps> = ({
  onSubmit,
  defaultValues,
}) => {
  const { handleSubmit, register, control, setValue, reset } =
    useForm<FormValuesGraphql>({
      defaultValues: defaultValues,
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "headers",
  });

  const endpoint = useWatch({
    control,
    name: "endpoint",
  });

  const handleFormSubmit = async (data: FormValuesGraphql) => {
    onSubmit(data);
    reset(defaultValues);
  };

  useEffect(() => {
    if (!endpoint) return;
    setValue("sdlURL", `${endpoint}?sdl`);
  }, [endpoint, setValue]);

  return (
    <form
      className="rounded bg-white p-4 shadow"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="mb-4">
        <label className="mb-2 block font-medium" htmlFor="endpoint">
          Endpoint URL
        </label>
        <input
          id="endpoint"
          type="text"
          {...register("endpoint")}
          className="w-full rounded border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-medium">SDL URL</label>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 rounded border border-gray-300 p-2"
            {...register("sdlURL")}
          />
          <button className="rounded bg-blue-500 p-2 text-white">
            Fetch SDL
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-medium">Headers</label>
        {fields.map((field, index) => (
          <div key={field.id} className="mb-2 flex gap-2">
            <input
              type="text"
              placeholder="Header Key"
              {...register(`headers.${index}.key`)}
              className="flex-1 rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              placeholder="Header Value"
              {...register(`headers.${index}.value`)}
              className="flex-1 rounded border border-gray-300 p-2"
            />
            <button
              type="button"
              className="rounded bg-red-500 p-2 text-white"
              onClick={() => remove(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <div className="mb-2 flex gap-2">
          <button
            className="rounded bg-blue-500 p-2 text-white"
            onClick={() => append({ key: "", value: "" })}
          >
            Add Header
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-medium" htmlFor="query">
          Query
        </label>
        <textarea
          id="query"
          className="h-32 w-full rounded border border-gray-300 p-2"
          placeholder="GraphQL Query"
          {...register("query")}
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-medium">Variables</label>
        <textarea
          className="h-32 w-full rounded border border-gray-300 p-2"
          placeholder="JSON Variables"
          {...register("variables")}
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

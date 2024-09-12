import { FC } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

import { FormValues, RestRequestType } from "~/shared/types";

export interface RestApiRequestSectionProps {
  onSubmit: (data: FormValues) => void;
  data?: FormValues;
}

export const RestApiRequestSection: FC<RestApiRequestSectionProps> = ({
  onSubmit,
  data = {
    method: RestRequestType.GET,
    endpoint: "test.url",
    headers: [
      {
        key: "Header key",
        value: "Header value",
      },
    ],
    body: "",
    variables: [
      {
        key: "Variable key",
        value: "Variable value",
      },
    ],
  },
}) => {
  const { control, handleSubmit, register } = useForm<FormValues>({
    defaultValues: data,
  });

  const {
    fields: headerFields,
    append: appendHeader,
    remove: removeHeader,
  } = useFieldArray({
    control,
    name: "headers",
  });

  const {
    fields: variableFields,
    append: appendVariable,
    remove: removeVariable,
  } = useFieldArray({
    control,
    name: "variables",
  });

  const handleAddHeader = () => {
    appendHeader({ key: "", value: "" });
  };

  const handleRemoveHeader = (index: number) => {
    removeHeader(index);
  };

  const handleAddVariable = () => {
    appendVariable({ key: "", value: "" });
  };

  const handleRemoveVariable = (index: number) => {
    removeVariable(index);
  };

  const handleFormSubmit = (data: FormValues) => {
    onSubmit(data);
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
            className="w-28 rounded border border-gray-300 p-2"
            {...register("method")}
          >
            {Object.values(RestRequestType).map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
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
        {headerFields.length > 0 ? (
          headerFields.map((item, index) => (
            <div key={item.id} className="mb-2 flex items-center gap-2">
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
              <button
                type="button"
                className="rounded bg-red-500 p-2 text-white"
                onClick={() => handleRemoveHeader(index)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No headers added</p>
        )}
        <button
          type="button"
          className="mt-2 rounded bg-blue-500 p-2 text-white"
          onClick={handleAddHeader}
        >
          Add Header
        </button>
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium">Variables</label>
        {variableFields.length > 0 ? (
          variableFields.map((item, index) => (
            <div key={item.id} className="mb-2 flex items-center gap-2">
              <input
                type="text"
                placeholder="Variable Key"
                className="flex-1 rounded border border-gray-300 p-2"
                {...register(`variables.${index}.key` as const)}
              />
              <input
                type="text"
                placeholder="Variable Value"
                className="flex-1 rounded border border-gray-300 p-2"
                {...register(`variables.${index}.value` as const)}
              />
              <button
                type="button"
                className="rounded bg-red-500 p-2 text-white"
                onClick={() => handleRemoveVariable(index)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No variables added</p>
        )}
        <button
          type="button"
          className="mt-2 rounded bg-blue-500 p-2 text-white"
          onClick={handleAddVariable}
        >
          Add Variable
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
              value={typeof field.value === "string" ? field.value : ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              ref={field.ref}
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

import { FC, useEffect } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";

import { FormValuesGraphql } from "~/shared/types/types";

interface GraphqlRequestSectionProps {
  onSubmit: (data: FormValuesGraphql) => void;
  onSDLSubmit: (endpoint: string) => void;
  defaultValues: FormValuesGraphql;
}

export const GraphiQLClientRequestSection: FC<GraphqlRequestSectionProps> = ({
  onSubmit,
  onSDLSubmit,
  defaultValues,
}) => {
  const { handleSubmit, register, control, setValue, getValues } =
    useForm<FormValuesGraphql>({
      defaultValues: defaultValues,
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

  const endpoint = useWatch({
    control,
    name: "endpoint",
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

  const handleFormSubmit = async (data: FormValuesGraphql) => {
    onSubmit(data);
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
          <button
            type="button"
            className="rounded bg-blue-500 p-2 text-white"
            onClick={() => onSDLSubmit(getValues("endpoint"))}
          >
            Fetch SDL
          </button>
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

      <button
        type="submit"
        className="mt-4 rounded bg-green-500 p-2 text-white"
      >
        Send Request
      </button>
    </form>
  );
};

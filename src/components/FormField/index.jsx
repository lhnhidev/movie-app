import React from "react";
import { Controller } from "react-hook-form";

export default function FormField({ label, control, name, Component }) {
  return (
    <div>
      <p className="mb-1 text-lg font-bold">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          React.createElement(Component, { ...field, control })
        }
      ></Controller>
    </div>
  );
}

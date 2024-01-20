import React from "react";
import InputField from "../globals/InputField";
import TextButton from "../buttons/TextButton";

type Props = {
  isEditing: boolean;
  onEdit: (value: string) => void;
};

const EmailAddress = ({ isEditing, onEdit }: Props) => {
  return (
    <div className="relative py-4">
      <div className="w-full">
        <p className="block text-zinc-900">Email Address</p>
        {!isEditing ? (
          <p className="text-sm text-zinc-700">john_doe@gmail.com</p>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-zinc-700">
              Use an address you’ll always have access to.
            </p>
            <div className="flex items-center gap-4 w-full">
              <InputField placeholder="Email address" />
            </div>
            <button className="rounded-lg bg-black px-6 py-3 font-medium text-white">
              Save
            </button>
          </div>
        )}
      </div>
      <TextButton
        label={isEditing ? "Cancel" : "Edit"}
        onClick={() => onEdit(isEditing ? "" : "email")}
      />
    </div>
  );
};

export default EmailAddress;

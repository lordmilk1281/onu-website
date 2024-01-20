import React from "react";
import InputField from "../globals/InputField";
import TextButton from "../buttons/TextButton";

type Props = {
  isEditing: boolean;
  onEdit: (value: string) => void;
};

const LegalName = ({ isEditing, onEdit }: Props) => {
  return (
    <div className="relative py-4">
      <div className="w-full">
        <p className="block text-zinc-900">Legal Name</p>
        {!isEditing ? (
          <p className="text-sm text-zinc-700">John Doe</p>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-zinc-700">
              This is the name on your travel document, which could be a license
              or a passport.
            </p>
            <div className="flex w-full items-center gap-4">
              <InputField placeholder="First name" />
              <InputField placeholder="Last name" />
            </div>
            <button className="rounded-lg bg-black px-6 py-3 font-medium text-white">
              Save
            </button>
          </div>
        )}
      </div>
      <TextButton
        label={isEditing ? "Cancel" : "Edit"}
        onClick={() => onEdit(isEditing ? "" : "name")}
      />
    </div>
  );
};

export default LegalName;

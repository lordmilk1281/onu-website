import React from "react";
import TextButton from "../buttons/TextButton";
import InputField from "../globals/InputField";
import DropDown from "../globals/DropDown";

type Props = {
  isEditing: boolean;
  onEdit: (value: string) => void;
};

const PhoneNumber = ({ isEditing, onEdit }: Props) => {
  return (
    <div className="relative py-4">
      <div className="mb-4">
        <p className="block text-zinc-900">Phone number</p>
        <p className="text-sm text-zinc-500">
          Add a number so confirmed guests and we can get in touch. You can add
          other numbers and choose how they’re used.
        </p>
      </div>

      {isEditing ? (
        <div className="space-y-4">
          <div className="rounded-lg border border-zinc-500 overflow-hidden divide-y divide-gray-500">
            <DropDown />
            <InputField placeholder="Phone number" className="border-0 rounded-t-none rounded-b-none" />
          </div>
          <button className="rounded-lg bg-black px-6 py-3 font-medium text-white">
            Save
          </button>
        </div>
      ) : null}

      <TextButton
        label={isEditing ? "Cancel" : "Edit"}
        onClick={() => onEdit(isEditing ? "" : "number")}
      />
    </div>
  );
};

export default PhoneNumber;


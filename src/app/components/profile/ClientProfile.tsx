"use client";

import React, { useState } from "react";
import Container from "../layouts/Container";
import LegalName from "./LegalName";
import EmailAddress from "./EmailAddress";
import PhoneNumber from "./PhoneNumber";

type Props = {};

const ClientProfile = (props: Props) => {
  const [edit, setEdit] = useState("");

  return (
    <Container className="space-y-6 py-12">
      <h1 className="text-2xl font-bold text-zinc-900">Personal Info</h1>
      <div className="divide-y divide-zinc-300 max-w-2xl">
        <LegalName isEditing={edit === "name"} onEdit={setEdit} />
        <EmailAddress isEditing={edit === "email"} onEdit={setEdit} />
        <PhoneNumber isEditing={edit === "number"} onEdit={setEdit} />
      </div>
    </Container>
  );
};

export default ClientProfile;

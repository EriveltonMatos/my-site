"use client";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export default function Training() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Saiba Mais!"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Header"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
    </div>
  );
}

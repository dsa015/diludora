"use client";

import { useState } from "react";
import { Drawer } from "../drawer/Drawer";
import { UserRecipeForm } from "../user-recipe-form/UserRecipeForm";
import { UserRecipeFormInfo } from "../user-recipe-form/UserRecipeFormInfo";

export const AddRecipe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen);
    if (!hasOpened) {
      setHasOpened(true);
    }
  };

  return (
    <>
      <div>
        <button onClick={handleToggleDrawer}>Add recipe!</button>
        {(isOpen || hasOpened) && (
          <div>
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
              <UserRecipeForm />
              <UserRecipeFormInfo />
            </Drawer>
          </div>
        )}
      </div>
    </>
  );
};

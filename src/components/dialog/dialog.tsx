import React from "react";
import "./dialog.css";

interface IDialogProps {
  title: string;
  description: string;
  showLoader: boolean;
  isLoading: boolean;
  onChangeLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

function Dialog({
  title,
  description,
  showLoader,
  isLoading,
  onChangeLoading,
  setShowDialog,
}: IDialogProps) {
  return (
    <div className="dialog">
      <div
        className="dialog-content h-60 w-[min(350px,90vw)] 
      bg-secondary shadow-grey-950 shadow-xl rounded-xl
      flex flex-col justify-start items-center
      "
      >
        <p className="font-bold text-lg uppercase">{title}</p>
        <p className="mt-6 text-center">{description}</p>
        {showLoader && isLoading && (
          <p>
            <img src="/loader.svg" height={20} className="h-24" />
          </p>
        )}
        {!isLoading && (
          <button
            className="outlinedBtn self-end mt-auto bg-tertiary"
            onClick={() => {
              onChangeLoading(false);
              setShowDialog(false);
            }}
          >
            YAY
          </button>
        )}
      </div>
    </div>
  );
}

export default Dialog;

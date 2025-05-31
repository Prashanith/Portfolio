import React from "react";
import "./dialog.css";

interface IDialogProps {
  title: string;
  description: string;
  showLoader: boolean;
  isLoading: boolean;
  onChangeLoading: React.Dispatch<React.SetStateAction<boolean>>;
  showDialog: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

function Dialog({
  title,
  description,
  showLoader,
  isLoading,
  onChangeLoading,
  showDialog,
  setShowDialog,
}: IDialogProps) {
  return (
    <div
      className={`dialog fixed left-0 top-0 z-30 h-full w-full overflow-auto backdrop-blur-md ${
        showDialog ? "block" : "hidden"
      }`}
    >
      <div
        className="dialog-content shadow-grey-950 relative 
      top-[32vh] m-auto flex h-60
      w-[min(350px,90vw)] flex-col items-center justify-start rounded-xl bg-secondary p-[20px] shadow-xl
      "
      >
        <p className="text-lg font-bold uppercase">{title}</p>
        <p className="mt-6 text-center">{description}</p>
        {showLoader && isLoading && (
          <p>
            <img src="/loader.svg" height={20} className="h-24" />
          </p>
        )}
        {!isLoading && (
          <button
            className="outlinedBtn mt-auto self-end bg-secondary"
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

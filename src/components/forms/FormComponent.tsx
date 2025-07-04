import { Button } from "@heroui/react";
import { useState } from "react";
import { BsQrCode, BsLink } from "react-icons/bs";
import ShortLinkForm from "./ShortLinkForm";
import QRCodeForm from "./QRCodeForm";

const FormComponent = () => {
  const [activeForm, setActiiveForm] = useState<number>(1);

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="max-w-4xl space-x-6 ">
        <Button
          startContent={<BsLink />}
          size="lg"
          variant="shadow"
          onPress={() => setActiiveForm(1)}
          color={activeForm === 1 ? "primary" : "default"}
          aria-pressed={activeForm === 1}
        >
          Short Link
        </Button>
        <Button
          startContent={<BsQrCode />}
          size="lg"
          variant="shadow"
          onPress={() => setActiiveForm(2)}
          color={activeForm === 2 ? "primary" : "default"}
          aria-pressed={activeForm === 2}
        >
          QR Code
        </Button>
      </div>
      {activeForm === 1 && <ShortLinkForm formToggle={setActiiveForm} />}

      {activeForm === 2 && <QRCodeForm formToggle={setActiiveForm} />}
    </div>
  );
};

export default FormComponent;

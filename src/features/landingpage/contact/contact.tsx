import { useFormik } from "formik";
import { useState } from "react";
import Dialog from "../../../components/dialog/dialog";
import { db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";

function Contact() {
  const [loading, setLoading] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState(false);
  const [desc, setDesc] = useState<string>("");

  async function submitDetails(values: { name: string; email: string; mobile: string; message: string; }) {
    setDesc("Submitting Your Details");
    setShowDialog(true);
    setLoading(true);
    try {
      await addDoc(collection(db, "requests"), values);
      setDesc("Details Submitted Successfully");
      setLoading(false);
      setTimeout(() => {
        setShowDialog(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      
      setDesc("Unknown Error Occured, Try Again Later");
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
    onSubmit: (values) => submitDetails(values),
  });
  return (
    <div
      id="contact"
      className="py-28 flex justify-center items-center bg-bgContact bg-opacity-50 bg-center bg-no-repeat"
    >
      {showDialog && (
        <Dialog
          title={"Alert"}
          description={desc}
          showLoader={true}
          isLoading={loading}
          onChangeLoading={setLoading}
          setShowDialog={setShowDialog}
        />
      )}
      <div className="rounded-xl bg-secondary text-center flex flex-col items-stretch justify-center space-y-6 w-[min(85vw,500px)] bg-opacity-70 opacity-70">
        <div className="relative flex justify-center items-center rounded-t-xl  h-10 bg-black">
          <div className="absolute space-x-2 start-4">
            <span className="h-4 w-4 rounded-full inline-block bg-yellow-500"></span>
            <span className="h-4 w-4 rounded-full inline-block bg-red-500"></span>
            <span className="h-4 w-4 rounded-full inline-block bg-green-500"></span>
          </div>

          <p className="absolute self-center ">Contact Me</p>
        </div>
        <div className="flex flex-col items-stretch space-y-5 px-12 py-8">
          <input
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <input
            id="mobile"
            name="mobile"
            type="mobile"
            placeholder="Mobile Number"
            onChange={formik.handleChange}
            value={formik.values.mobile}
          />

          <textarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            placeholder="Message"
          />

          <button
            type="submit"
            className="outlinedBtn"
            onClick={() => formik.handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

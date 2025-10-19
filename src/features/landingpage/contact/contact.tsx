import { useFormik } from "formik";
import { useState } from "react";
import Dialog from "../../../components/dialog/dialog";
import { db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { motion } from "framer-motion";
import { Animation } from "../../../config/animationConfig";

function Contact() {
  const [loading, setLoading] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState(false);
  const [desc, setDesc] = useState<string>("");

  async function submitDetails(values: {
    name: string;
    email: string;
    mobile: string;
    message: string;
  }) {
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
    } finally {
      formik.resetForm();
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
      id='contact'
      className='pagePadding flex items-center justify-center bg-opacity-50 bg-bgContact bg-center bg-no-repeat py-16 sm:py-28'
    >
      <Dialog
        title={"Alert"}
        description={desc}
        showLoader={true}
        isLoading={loading}
        onChangeLoading={setLoading}
        setShowDialog={setShowDialog}
        showDialog={showDialog}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, type: "spring" }}
        className='flex w-[min(85vw,500px)] flex-col items-stretch justify-center rounded-xl text-center'
      >
        <div className='relative flex h-10 items-center justify-center  rounded-t-xl bg-black'>
          <div className='absolute start-4 top-3 space-x-2'>
            <span className='inline-block h-4 w-4 rounded-full bg-yellow-500'></span>
            <span className='inline-block h-4 w-4 rounded-full bg-red-500'></span>
            <span className='inline-block h-4 w-4 rounded-full bg-green-500'></span>
          </div>

          <p className='absolute self-center '>Contact Me</p>
        </div>
        <div className='glass-card flex flex-col items-stretch space-y-5 rounded-t-none p-6 py-8 sm:px-12'>
          <motion.input
            initial={{ x: -120 }}
            whileInView={{ x: 0 }}
            transition={{ duration: Animation.delay }}
            id='name'
            name='name'
            placeholder='Name'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.name}
            className='p-6'
          />
          <motion.input
            initial={{ x: 120 }}
            whileInView={{ x: 0 }}
            transition={{ duration: Animation.delay }}
            id='email'
            name='email'
            type='email'
            placeholder='Email'
            onChange={formik.handleChange}
            className='p-6'
            value={formik.values.email}
          />

          <motion.input
            initial={{ x: -120 }}
            whileInView={{ x: 0 }}
            transition={{ duration: Animation.delay }}
            id='mobile'
            name='mobile'
            type='mobile'
            placeholder='Mobile Number'
            onChange={formik.handleChange}
            className='p-6'
            value={formik.values.mobile}
          />

          <motion.textarea
            initial={{ x: 120 }}
            whileInView={{ x: 0 }}
            transition={{ duration: Animation.delay }}
            id='message'
            name='message'
            value={formik.values.message}
            onChange={formik.handleChange}
            placeholder='Message'
            className='p-6'
            rows={5}
          />

          <motion.button
            initial={{ x: -120 }}
            whileInView={{ x: 0 }}
            transition={{ duration: Animation.delay }}
            type='submit'
            className='containedBtn'
            onClick={() => formik.handleSubmit()}
          >
            Submit
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;

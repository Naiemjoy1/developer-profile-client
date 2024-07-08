import { MdEmail } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="container mx-auto w-10/12 justify-center p-6 text-neutral mt-10">
      <p className="text-center uppercase text-3xl font-bold opacity-70">
        CONTACT
      </p>
      <div className="bg-secondary py-12 px-32 shadow-2xl rounded-xl mt-5">
        <div className="flex gap-10 justify-center items-center">
          <section className="w-1/2 space-y-6">
            <p className="text-4xl opacity-60">GET IN TOUCH</p>
            <p className="opacity-80 text-sm">
              Fill in the form to start a conversation.
            </p>
            <p className="flex items-center gap-2 opacity-80">
              <RiMapPin2Line />
              <span>Dhaka, Bangladesh</span>
            </p>
            <p className="flex items-center gap-2 opacity-80">
              <MdEmail />
              <span>naiemunhasan@gmail.com</span>
            </p>
          </section>
          <section className="w-1/2">
            <ContactForm></ContactForm>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;

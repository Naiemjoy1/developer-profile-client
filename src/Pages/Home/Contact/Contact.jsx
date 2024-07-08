import { MdEmail } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="container mx-auto lg:w-10/12 2xl:w-7/12 justify-center p-6 text-neutral mt-10"
    >
      <p className="text-center uppercase text-3xl font-bold opacity-70">
        CONTACT
      </p>
      <div className="bg-secondary py-12 lg:px-32 px-10 shadow-2xl rounded-xl mt-5">
        <div className="lg:flex gap-10 justify-center items-center space-y-4">
          <section className="lg:w-1/2 space-y-6">
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
          <section className="lg:w-1/2">
            <ContactForm></ContactForm>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    setLoading(true);
    try {
      const response = await fetch(
        "https://naiem-hasan-server.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        // console.log("Message sent successfully");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Message sent successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body border border-secondary rounded-xl p-0"
      >
        <div className="form-control">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input border-none bg-accent"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className="form-control">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input border-none bg-accent"
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && <span>{errors.subject.message}</span>}
        </div>
        <div className="form-control">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input border-none bg-accent"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="form-control">
          <textarea
            name="message"
            className="textarea border-none bg-accent"
            placeholder="Your Message"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && <span>{errors.message.message}</span>}
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary border-none text-white">
            {loading ? (
              <span className="loading loading-ring loading-md"></span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

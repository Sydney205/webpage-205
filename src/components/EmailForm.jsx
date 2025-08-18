"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MdSend } from "react-icons/md";

// Regular Expressions...
const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_ ]{2,100}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const MESSAGE_REGEX = /^[a-zA-Z][a-zA-Z0-9-_!@#$%&*()<>:''"",./? ]{9,500}$/;

export default function EmailForm() {
  const form = useRef(null); // UseRef with form type

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [message, setMessage] = useState("");
  const [validMessage, setValidMessage] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [feedback, setFeedback] = useState("");

  // Test input's data with the REGEX
  useEffect(() => {
    setValidName(NAME_REGEX.test(name));
  }, [name]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidMessage(MESSAGE_REGEX.test(message));
  }, [message]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const sendEmail = async (e) => {
    // Form event type
    e.preventDefault();

    setSending(true);
    setFeedback("Sending mail...");
    
    if (form.current) {
      emailjs
        .sendForm(
          `${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
          `${process.env.NEXT_PUBLIC_TEMPLATE_KEY}`,
          form.current,
          `${process.env.NEXT_PUBLIC_KEY}`,
        )
        .then(
          () => {
            setSending(false);
            setError(false);
            setSuccess(true);
            setFeedback("Thanks for the mail");
            console.log("SUCCESS!");
          },
          (error) => {
            setSending(false);
            setSuccess(false);
            setError(true);
            setFeedback("Mail not sent... Check connection");
            console.log("FAILED...", error.text);
          },
        );

      // Clear inputs after sending email
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="card w-full h-auto flex flex-col justify-start items-start gap-6 p-8"
    >
      <p
        className={
          error
            ? "w-full p-4 border-2 border-red-500 bg-opacity-20 text-red-500 text-center rounded"
            : success
              ? "w-full p-4 border-2 border-green-500 bg-opacity-20 text-green-500 text-center rounded"
              : sending
                ? "w-full p-4 border-2 border-yellow bg-opacity-20 text-yellow text-center rounded"
                : "hidden"
        }
        aria-live="assertive"
      >
        {feedback}
      </p>

      {/* name Input */}
      <div
        className={
          !nameFocus && name && !validName
            ? "w-full transition-all animate-shake"
            : "w-full transition-all"
        }
      >
        <span
          className={
            nameFocus || (name && validName)
              ? "absolute -mt-4 ml-6 text-lg text-blue-400 bg-[#0d1117] px-2 transition-all"
              : !nameFocus && name && !validName // Invalid data
                ? "absolute -mt-4 ml-6 text-lg text-red-400 bg-[#0d1117] px-2 transition-all"
                : "absolute mt-4 ml-6 text-md text-gray-500 transition-all"
          }
        >
          Name
        </span>

        <input
          className={
            nameFocus || (name && validName)
              ? "w-full p-4 border-2 rounded border-blue-400 outline-none bg-transparent"
              : !nameFocus && name && !validName // Invalid data
                ? "w-full p-4 border-2 rounded border-red-400 outline-none bg-transparent"
                : "w-full h-full p-4 border-2 rounded border-gray-500 outline-none bg-transparent"
          }
          type="text"
          id="name"
          name="sender_name"
          value={name}
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
          onFocus={() => {
            setNameFocus(true);
            setSuccess(false);
            setError(false);
          }}
          onBlur={() => setNameFocus(false)}
          aria-invalid={validName ? "false" : "true"}
          required
        />

        <p
          className={
            !nameFocus && name && !validName ? "flex text-red-400" : "hidden"
          }
        >
          {"❗ Name too short or long or contains special character"}
        </p>
      </div>

      {/* Email Input */}
      <div
        className={
          !emailFocus && email && !validEmail
            ? "w-full transition-all animate-shake"
            : "w-full transition-all"
        }
      >
        <span
          className={
            emailFocus || (email && validEmail)
              ? "absolute -mt-4 ml-6 text-lg text-blue-400 bg-[#0d1117] px-2 transition-all"
              : !emailFocus && email && !validEmail // Invalid data
                ? "absolute -mt-4 ml-6 text-lg text-red-400 bg-[#0d1117] px-2 transition-all"
                : "absolute mt-4 ml-6 text-md text-gray-500 transition-all"
          }
        >
          Email
        </span>

        <input
          className={
            emailFocus || (email && validEmail)
              ? "w-full p-4 border-2 rounded border-blue-400 outline-none bg-transparent"
              : !emailFocus && email && !validEmail // Invalid data
                ? "w-full p-4 border-2 rounded border-red-400 outline-none bg-transparent"
                : "w-full h-full p-4 border-2 rounded border-gray-500 outline-none bg-transparent"
          }
          type="email"
          id="email"
          name="sender_email"
          value={email}
          autoComplete="on"
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => {
            setEmailFocus(true);
            setSuccess(false);
            setError(false);
          }}
          onBlur={() => setEmailFocus(false)}
          aria-invalid={validEmail ? "false" : "true"}
          required
        />

        <p
          className={
            !emailFocus && email && !validEmail ? "flex text-red-800" : "hidden"
          }
        >
          ❗ Invalid email format
        </p>
      </div>

      {/* Message Input */}
      <div
        className={
          !messageFocus && message && !validMessage
            ? "w-full transition-all animate-shake"
            : "w-full h-32 transition-all"
        }
      >
        <span
          className={
            messageFocus || (message && validMessage)
              ? "absolute -mt-4 ml-6 text-lg text-blue-400 bg-[#0d1117] px-2 transition-all"
              : !messageFocus && message && !validMessage // Invalid data
                ? "absolute -mt-4 ml-6 text-lg text-red-400 bg-[#0d1117] px-2 transition-all"
                : "absolute mt-4 ml-6 text-md text-gray-500 transition-all"
          }
        >
          Write a message
        </span>
        
        <textarea
          className={
            messageFocus || (message && validMessage)
              ? "w-full p-4 border-2 rounded border-blue-400 outline-none bg-transparent"
              : !messageFocus && message && !validMessage // Invalid data
                ? "w-full p-4 border-2 rounded border-red-400 outline-none bg-transparent"
                : "w-full h-full p-4 border-2 rounded border-gray-500 outline-none bg-transparent"
          }
          id="message"
          name="message"
          value={message}
          autoComplete="off"
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => {
            setMessageFocus(true);
            setSuccess(false);
            setError(false);
          }}
          onBlur={() => setMessageFocus(false)}
          aria-invalid={validMessage ? "false" : "true"}
          required
        />

        <p
          className={
            !messageFocus && message && !validMessage
              ? "flex text-red-800"
              : "hidden"
          }
        >
          ❗ Less than 10
        </p>
      </div>

      <input
        type="text"
        name="from_name"
        value={"My Portfolio website"}
        id="fromName"
        className="hidden"
        readOnly
      />

      <button
        type="submit"
        disabled={!validName || !validEmail || !validMessage ? true : false}
        className="flex justify-center items-center px-6 py-2 border-2 border-green-600 rounded text-green-600 hover:cursor-pointer hover:bg-green-600 hover:text-white transition-all gap-2 disabled:opacity-60 disabled:hover:cursor-not-allowed disabled:hover:bg-[#0d1117] disabled:hover:text-green-600"
        value={message}
      >
        Send <MdSend size={"1.3rem"} />
      </button>
    </form>
  );
}

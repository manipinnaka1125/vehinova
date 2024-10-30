import React from "react";
import './FAQs.css'; // Import styles for FAQs

const FAQs = () => {
  const faqs = [
    {
      question: "What is the duration of the Internship?",
      answer: "All our internships are for a period of 1 month only."
    },
    {
      question: "Can I complete multiple tracks together?",
      answer: "We believe to provide an actual learning environment, we have limited our internship offerings to 1 track per month for each student. This allows students to explore the chosen track in-depth and get quality results."
    },
    {
      question: "Is there any fees for the internship?",
      answer: "The internship is completely free. However, a documentation fee of ₹119 must be paid to cover the processing charges."
    },
    {
      question: "When will I receive the Offer Letter?",
      answer: "We process the Offer Letters at the mid & end of the month in batches. We request you to please wait in the meantime. If you have received the Task Submission Email, we request you to review your spam folder for the Offer Letter. Kindly contact us via email if you are unable to find it."
    },
    {
      question: "How to submit Tasks?",
      answer: "A Submission Form will be mailed to you 10-15 days after you receive your Offer Letter. For batches starting on the 1st of the month, the form will be mailed between the 11th and 14th. For batches starting on the 15th of the month, the form will be mailed between the 26th and 29th."
    }
  ];

  return (
    <div className="faqs">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h2 className="faq-question">{faq.question}</h2>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;

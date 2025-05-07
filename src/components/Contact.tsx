
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-elle-500 mb-4">צור קשר</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            אנחנו כאן לענות על כל שאלה ולעזור לך לקבל את המשכנתא האופטימלית.
            השאירו פרטים ונחזור אליכם בהקדם דרך וואטסאפ.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;

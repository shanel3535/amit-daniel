
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = 
      `שם: ${formData.name}%0A` + 
      `אימייל: ${formData.email}%0A` +  
      `טלפון: ${formData.phone}%0A` +  
      `הודעה: ${formData.message}`;
    
    // WhatsApp phone number - make sure to include country code
    const phoneNumber = "972546361746";
    
    // Create WhatsApp URL with pre-filled message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
    
    // Show success toast
    toast({
      title: "הפרטים נשלחו בהצלחה לווטסאפ",
      description: "תודה שיצרת קשר, נחזור אליך בהקדם",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

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
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-marble-200 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            <h3 className="text-xl font-bold text-elle-500 mb-6">השאירו פרטים ונחבר אתכם לוואטסאפ</h3>
            
            <form onSubmit={handleSubmit} className="animate-fade-in">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    שם מלא
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-marble-50 transition-all duration-300 focus:scale-[1.01]"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      אימייל
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-marble-50 transition-all duration-300 focus:scale-[1.01]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      טלפון
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-marble-50 transition-all duration-300 focus:scale-[1.01]"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    הודעה
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-marble-50 min-h-[120px] transition-all duration-300 focus:scale-[1.01]"
                    required
                  />
                </div>
                
                <Button type="submit" className="elle-button w-full flex items-center gap-2 hover:scale-[1.02] transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  שליחת פרטים לוואטסאפ
                </Button>
              </div>
            </form>
          </div>
          
          <div className="bg-elle-500 text-white rounded-xl shadow-xl p-6 md:p-8 h-full relative overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex flex-col md:flex-row items-center">
            {/* Updated image layout to be side-by-side with contact details */}
            <div className="md:w-1/2 h-full relative mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/4c610f2f-4977-4ef8-826d-6dca59197f98.png" 
                alt="עמית דניאל" 
                className="w-full h-auto md:h-full object-cover rounded-lg shadow-xl animate-fade-in"
              />
            </div>

            <div className="md:w-1/2 md:pr-6 animate-fade-in">
              <h3 className="text-xl font-bold mb-6">פרטי התקשרות</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 transform transition duration-300 hover:translate-x-2">
                  <div className="h-12 w-12 bg-marble-200/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-marble-200" />
                  </div>
                  <div>
                    <h4 className="font-medium text-marble-200">טלפון</h4>
                    <p className="text-white/90">054-636-1746</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 transform transition duration-300 hover:translate-x-2">
                  <div className="h-12 w-12 bg-marble-200/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-marble-200" />
                  </div>
                  <div>
                    <h4 className="font-medium text-marble-200">אימייל</h4>
                    <p className="text-white/90">elhamashkanta@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 transform transition duration-300 hover:translate-x-2">
                  <div className="h-12 w-12 bg-marble-200/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-marble-200" />
                  </div>
                  <div>
                    <h4 className="font-medium text-marble-200">כתובת</h4>
                    <p className="text-white/90">יגאל בשן 2, קרית ביאליק</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium text-marble-200 mb-3">שעות פעילות</h4>
                <div className="space-y-2 text-white/90">
                  <div className="flex justify-between">
                    <span>ראשון - חמישי</span>
                    <span>9:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>שישי</span>
                    <span>9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>שבת</span>
                    <span>סגור</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

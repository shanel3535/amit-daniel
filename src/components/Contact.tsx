
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
    console.log("Form submitted:", formData);
    
    // Form validation could go here
    
    // Show success toast
    toast({
      title: "הודעה נשלחה בהצלחה",
      description: "נחזור אליך בהקדם האפשרי",
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
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-amitblue-500 mb-4">צור קשר</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            אנחנו כאן לענות על כל שאלה ולעזור לך לקבל את המשכנתא האופטימלית.
            השאירו פרטים ונחזור אליכם בהקדם.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-amitblue-500 mb-6">השאירו פרטים</h3>
            
            <form onSubmit={handleSubmit}>
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
                    className="bg-gray-50"
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
                      className="bg-gray-50"
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
                      className="bg-gray-50"
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
                    className="bg-gray-50 min-h-[120px]"
                    required
                  />
                </div>
                
                <Button type="submit" className="amit-button w-full flex items-center gap-2">
                  <Send className="h-4 w-4" /> 
                  שליחת הודעה
                </Button>
              </div>
            </form>
          </div>
          
          <div>
            <div className="bg-amitblue-500 text-white rounded-xl shadow-xl p-6 md:p-8 h-full">
              <h3 className="text-xl font-bold mb-6">פרטי התקשרות</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-amitgold-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-amitgold-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-amitgold-500">טלפון</h4>
                    <p className="text-white/90">054-636-1746</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-amitgold-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-amitgold-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-amitgold-500">אימייל</h4>
                    <p className="text-white/90">amit@standardmortgage.co.il</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-amitgold-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-amitgold-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-amitgold-500">כתובת</h4>
                    <p className="text-white/90">רחוב הברוש 15, תל אביב</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium text-amitgold-500 mb-3">שעות פעילות</h4>
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


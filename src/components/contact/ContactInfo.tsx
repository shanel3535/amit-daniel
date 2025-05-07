
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-elle-500 text-white rounded-xl shadow-xl p-6 md:p-8 h-full relative overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex flex-col md:flex-row items-center">
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
          <div className="flex items-start gap-4 transform transition duration-300 hover:translate-x-2 w-full overflow-visible">
            <div className="h-12 w-12 bg-marble-200/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Phone className="h-6 w-6 text-marble-200" />
            </div>
            <div className="min-w-0 w-full">
              <h4 className="font-medium text-marble-200">טלפון</h4>
              <p className="text-white/90 whitespace-normal break-all">054-636-1746</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 transform transition duration-300 hover:translate-x-2 w-full overflow-visible">
            <div className="h-12 w-12 bg-marble-200/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Mail className="h-6 w-6 text-marble-200" />
            </div>
            <div className="min-w-0 w-full">
              <h4 className="font-medium text-marble-200">אימייל</h4>
              <p className="text-white/90 whitespace-normal break-all">elhamashkanta@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 transform transition duration-300 hover:translate-x-2 w-full overflow-visible">
            <div className="h-12 w-12 bg-marble-200/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <MapPin className="h-6 w-6 text-marble-200" />
            </div>
            <div className="min-w-0 w-full">
              <h4 className="font-medium text-marble-200">כתובת</h4>
              <p className="text-white/90 whitespace-normal break-all">יגאל בשן 2, קרית ביאליק</p>
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
  );
};

export default ContactInfo;


import React from "react";
import { useForm } from "react-hook-form";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";

const AccessibilityForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      issue: ""
    }
  });
  
  const onSubmit = (data: any) => {
    console.log("Accessibility report submitted:", data);
    // Here you would typically send this data to your server
    alert("הדיווח נשלח בהצלחה. נחזור אליך בהקדם.");
    form.reset();
  };

  return (
    <div className="border-t pt-4 mt-4">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-medium">יצירת קשר נגישות</h4>
        <a href="tel:052-123-4567" className="flex items-center text-elle-600 hover:text-elle-700">
          <Phone className="h-4 w-4 ml-1" />
          052-123-4567
        </a>
      </div>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="w-full">
            הצהרת נגישות / דיווח על בעיית נגישות
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]" dir="rtl">
          <DialogHeader>
            <DialogTitle>הצהרת נגישות</DialogTitle>
            <DialogDescription>
              דווחו על בעיות נגישות באתר ואנו נטפל בהן בהקדם האפשרי
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">שם מלא</label>
                <Input
                  id="name"
                  {...form.register("name")}
                  placeholder="השם המלא שלך"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">טלפון</label>
                <Input
                  id="phone"
                  {...form.register("phone")}
                  placeholder="מספר טלפון"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">אימייל</label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                placeholder="כתובת האימייל שלך"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="issue" className="text-sm font-medium">תיאור הבעיה</label>
              <Textarea
                id="issue"
                {...form.register("issue")}
                placeholder="תאר/י את בעיית הנגישות שנתקלת בה"
                rows={4}
              />
            </div>
            
            <Button type="submit" className="w-full bg-elle-500 hover:bg-elle-600">שליחת הדיווח</Button>
          </form>
        </DialogContent>
      </Dialog>

      <div className="mt-4">
        <h4 className="font-medium mb-2">הצהרת נגישות</h4>
        <p className="text-sm text-gray-600">
          אתר זה פועל לפי תקן הנגישות הישראלי (ת"י 5568) והתקן הבינלאומי לנגישות (WCAG 2.1 ברמה AA).
          לדיווח על בעיות נגישות, אנא פנו אלינו בטופס יצירת הקשר או צרו קשר בטלפון.
        </p>
      </div>
    </div>
  );
};

export default AccessibilityForm;

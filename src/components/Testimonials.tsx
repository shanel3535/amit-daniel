
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { StarIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "משפחת לוי",
    image: "/lovable-uploads/9d9e52f0-2e81-40cc-a2c0-1300765932fd.png",
    text: "עמית דניאל ליוותה אותנו בתהליך רכישת הדירה הראשונה שלנו. היא הצליחה למקסם את יכולת ההחזר שלנו ולהשיג עבורנו תנאים מעולים. חסכנו מעל 120,000 ₪ בעלות הכוללת של המשכנתא!",
    role: "רכישת דירה ראשונה",
  },
  {
    name: "רונית כהן",
    image: "/lovable-uploads/308adf70-9c52-4824-bf69-4fece67a2c94.png",
    text: "מחזרתי משכנתא באמצעות השירות של עמית דניאל והצלחתי לחסוך אלפי שקלים בחודש. התהליך היה פשוט, מהיר ועם תוצאות מדהימות. ממליצה בחום!",
    role: "מחזור משכנתא",
  },
  {
    name: "דנה ואלון",
    image: "/lovable-uploads/20b14bcb-396b-4f59-82e4-eee71f697aa3.png",
    text: "בזכות הייעוץ המקצועי של עמית דניאל, הצלחנו לקבל משכנתא בתנאים מעולים למרות שבנקים אחרים דחו אותנו. היא ידעה בדיוק איך להתמודד עם המורכבות של המקרה שלנו.",
    role: "משכנתא בתנאים מיוחדים",
  },
  {
    name: "מיכל גולדשטיין",
    image: "/lovable-uploads/68c799d7-fe06-4f1b-8850-f20c84ea9eff.png",
    text: "עמית דניאל הובילה אותנו לחיסכון משמעותי במחזור המשכנתא שלנו. היא פירקה את המסלולים הקיימים לפרטי פרטים והציעה תמהיל חדש שמתאים לנו בצורה מושלמת.",
    role: "משקיעת נדל״ן",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-elle-500 mb-4">מה לקוחותינו אומרים</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            הסיפוק הגדול ביותר שלנו הוא לראות את הלקוחות שלנו מגשימים את חלום הדיור שלהם
            ונהנים מחיסכון משמעותי לאורך כל תקופת המשכנתא.
          </p>
        </div>

        <div className="md:px-12 lg:px-24">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="h-5 w-5 text-elle-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6">{testimonial.text}</p>
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden">
                          <Avatar className="h-full w-full">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="mr-4">
                          <h4 className="font-bold text-elle-500">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

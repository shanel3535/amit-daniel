
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

const testimonials = [
  {
    name: "משפחת לוי",
    image: "https://images.unsplash.com/photo-1581054399371-12cc5cdb9627?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    text: "עמית ליווה אותנו בתהליך רכישת הדירה הראשונה שלנו. הוא הצליח למקסם את יכולת ההחזר שלנו ולהשיג עבורנו תנאים מעולים. חסכנו מעל 120,000 ₪ בעלות הכוללת של המשכנתא!",
    role: "רכישת דירה ראשונה",
  },
  {
    name: "רון כהן",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    text: "מחזרתי משכנתא באמצעות השירות של עמית דניאל והצלחתי לחסוך אלפי שקלים בחודש. התהליך היה פשוט, מהיר ועם תוצאות מדהימות. ממליץ בחום!",
    role: "מחזור משכנתא",
  },
  {
    name: "דנה ואלון",
    image: "https://images.unsplash.com/photo-1515463138280-a8ab572304d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    text: "בזכות הייעוץ המקצועי של עמית, הצלחנו לקבל משכנתא בתנאים מעולים למרות שבנקים אחרים דחו אותנו. הוא ידע בדיוק איך להתמודד עם המורכבות של המקרה שלנו.",
    role: "משכנתא בתנאים מיוחדים",
  },
  {
    name: "איתי גולדשטיין",
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    text: "עמית דניאל הוביל אותנו לחיסכון משמעותי במחזור המשכנתא שלנו. הוא פירק את המסלולים הקיימים לפרטי פרטים והציע תמהיל חדש שמתאים לנו בצורה מושלמת.",
    role: "משקיע נדל״ן",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-amitblue-500 mb-4">מה לקוחותינו אומרים</h2>
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
                  <Card className="h-full bg-gray-50 border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="h-5 w-5 text-amitgold-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6">{testimonial.text}</p>
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden">
                          <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="mr-4">
                          <h4 className="font-bold text-amitblue-500">{testimonial.name}</h4>
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


import Navbar from '@/components/Navbar';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Smith",
      role: "Project Manager",
      company: "Tech Solutions",
      text: "Shubh's technical expertise and problem-solving skills were instrumental in the successful completion of our project. His attention to detail and dedication to excellence make him a standout developer."
    },
    {
      name: "Robert Johnson",
      role: "CTO",
      company: "DataFlow Inc.",
      text: "Working with Shubh has been a pleasure. He consistently delivers high-quality code, communicates effectively, and is always willing to go the extra mile to ensure project success."
    },
    {
      name: "Lisa Chen",
      role: "Product Manager",
      company: "Innovate Labs",
      text: "Shubh's deep understanding of data structures and algorithms allowed us to optimize critical parts of our application. His contributions resulted in a 40% improvement in system performance."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        <Navbar />
        <div className="py-16 px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-8">Testimonials</h1>
          <p className="text-gray-400 text-lg mb-12">
            What people say about working with me.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6">
                <blockquote className="text-gray-300 italic mb-6">
                  "{testimonial.text}"
                </blockquote>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

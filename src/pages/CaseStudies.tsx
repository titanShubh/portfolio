
import Navbar from '@/components/Navbar';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        <Navbar />
        <div className="py-16 px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
          <p className="text-gray-400 text-lg mb-12">
            Detailed analyses of projects I've worked on, highlighting challenges, solutions, and results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Smart Attendance System Case Study */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Smart Attendance System</h2>
                <p className="text-gray-400 mb-4">
                  A face recognition-based attendance and management system with OpenCV
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Python • OpenCV • SQL</span>
                  <span>Jul 2023</span>
                </div>
              </div>
            </div>
            
            {/* Invoice Processing Case Study */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Invoice Processing</h2>
                <p className="text-gray-400 mb-4">
                  Systematic handling of incoming invoices from vendors, ensuring accurate tracking and payment
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Python • MySQL • SQL</span>
                  <span>Jul 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;

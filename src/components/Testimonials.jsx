import React from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'John Smith',
      company: 'ABC Corp',
      testimonial: 'Smart Innovative Technologies transformed our office IT infrastructure. Their prompt service and expertise are unmatched. Highly recommended!',
      image: '/fake.jpeg', // Placeholder image URL
    },
    {
      id: 2,
      name: 'Alice Johnson',
      company: 'XYZ Solutions',
      testimonial: 'We feel so much safer with the E-Security system installed by Smart Innovative Technologies. The CCTV and access control provide peace of mind.',
      image: '/fake.jpeg', // Placeholder image URL
    },
    {
      id: 3,
      name: 'Bob Williams',
      company: '123 Industries',
      testimonial: 'The Smart Home automation has made our lives so much easier and more comfortable. Controlling everything from our phones is a game-changer!',
      image: '/fake.jpeg', // Placeholder image URL
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`Photo of ${testimonial.name}`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
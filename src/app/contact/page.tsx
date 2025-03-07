"use client"
const Contact = () => {
  return (
    <div className="bg-gray-100 text-center py-12 px-6">
      <div className="flex flex-col items-center">
        <img
          src="/fotosaya.jpg" 
          alt="Profile Picture"
          width={80}
          height={80}
          className="rounded-full"
        />
        <h2 className="text-2xl font-bold mt-4">Contact Us</h2>
        <p className="text-gray-600 mt-2 max-w-md">
          Use our contact form for all information requests or contact us directly using the contact information below.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="flex flex-col items-center">
          <div className="text-blue-500 w-12 h-12"></div>
          <h3 className="font-semibold text-lg mt-3">Tentang Kami</h3>
          <p className="text-gray-500">Technology School</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-blue-500 w-12 h-12"></div>
          <h3 className="font-semibold text-lg mt-3">PHONE</h3>
          <p className="text-gray-500">+62 8127 3802 368</p>
          <p className="text-gray-500">+62 8237 3802 368</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-blue-500 w-12 h-12"></div>
          <h3 className="font-semibold text-lg mt-3">Location</h3>
          <p className="text-gray-500">Purwhadika Technology School</p>
          <p className="text-gray-500">Menara Asia Afrika</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

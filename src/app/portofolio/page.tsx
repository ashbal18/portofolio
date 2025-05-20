"use client";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
        Portofolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Proyek 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="p-2 sm:p-4 bg-white shadow-lg rounded-xl border border-gray-200 flex flex-col text-xs sm:text-sm">
            <img
              src="/company.png"
              alt="E-commerce"
              className="w-full h-20 sm:h-40 object-cover rounded-lg mb-2 sm:mb-4"
            />
            <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-center sm:text-left">
              Platform E-commerce XYZ
            </h2>
            <p>
              <strong>Teknologi:</strong> React, Node.js, Prisma Express, AWS
            </p>
            <p>
              <strong>Situasi:</strong> XYZ Retail ingin memperluas bisnisnya ke
              e-commerce.
            </p>
            <p>
              <strong>Hasil:</strong> Peningkatan penjualan 35% dalam 3 bulan.
            </p>
            <a
              href="https://company1-git-main-adams-projects-0257165f.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-600 hover:underline text-center"
            >
              Lihat Proyek
            </a>
          </div>
        </motion.div>

        {/* Proyek 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="p-2 sm:p-4 bg-white shadow-lg rounded-xl border border-gray-200 flex flex-col text-xs sm:text-sm">
            <img
              src="/portofolio.png"
              alt="Portfolio Website"
              className="w-full h-20 sm:h-40 object-cover rounded-lg mb-2 sm:mb-4"
            />
            <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-center sm:text-left">
              Website Portofolio
            </h2>
            <p>
              <strong>Teknologi:</strong> React, Next.Js, Tailwind CSS, Express Prisma
            </p>
            <p>
              <strong>Situasi:</strong> Membangun website portofolio pribadi.
            </p>
            <p>
              <strong>Hasil:</strong> Website responsif & menarik.
            </p>
             <a
              href="https://adam-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-600 hover:underline text-center"
            >
              Lihat Proyek
            </a>
          </div>
        </motion.div>

        {/* Proyek 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="p-2 sm:p-4 bg-white shadow-lg rounded-xl border border-gray-200 flex flex-col text-xs sm:text-sm">
            <img
              src="/blog.png"
              alt="Admin Dashboard"
              className="w-full h-20 sm:h-40 object-cover rounded-lg mb-2 sm:mb-4"
            />
            <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-center sm:text-left">
              Webiste Blogs
            </h2>
            <p>
              <strong>Teknologi:</strong> React, Next.Js, Tailwind CSS, Express Prisma
            </p>
            <p>
              <strong>Situasi:</strong> Perusahaan butuh dashboard analytics.
            </p>
            <p>
              <strong>Hasil:</strong> Data real-time untuk keputusan lebih baik.
            </p>
             <a
              href="https://blogs-me.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-600 hover:underline text-center"
            >
              Lihat Proyek
            </a>
          </div>
        </motion.div>
      </div>

              {/* Proyek 4 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="p-2 sm:p-4 bg-white shadow-lg rounded-xl border border-gray-200 flex flex-col text-xs sm:text-sm">
            <img
              src="/concerthub.png"
              alt="Dashboard"
              className="w-full h-20 sm:h-40 object-cover rounded-lg mb-2 sm:mb-4"
            />
            <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-center sm:text-left">
              Webiste Tiket Konser Musik
            </h2>
            <p>
              <strong>Teknologi:</strong> React, Next.Js, Tailwind CSS, Express Prisma
            </p>
            <p>
              <strong>Situasi:</strong> Jual Beli Tiket Konser Musik.
            </p>
            <p>
              <strong>Hasil:</strong> Data real-time untuk keputusan lebih baik.
            </p>
             <a
              href="https://concerthubs.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-600 hover:underline text-center"
            >
              Lihat Proyek
            </a>
          </div>
        </motion.div>
      </div>
  );
}

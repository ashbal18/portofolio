"use client";
import Image from "next/image";

export default function About() {
  return (
    <div
    className="min-h-screen bg-gray-200 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 w-full"
    style={{
      backgroundImage: "url(/bgwhite3.webp)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="flex flex-col md:flex-row bg-cover bg-center min-h-screen p-4 md:p-10">
      {/* Gambar Profil */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <Image
          src="/profile.jpg"
          alt="foto"
          width={500}
          height={800}
          className="w-40 h-40 md:w-80 md:h-80 rounded-full shadow-lg"
        />
      </div>

      {/* Informasi Profil */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-10 text-center md:text-left">
        <h1 className="text-xl md:text-2xl font-extrabold font-serif">
          Muhammad Ashbal Al Saddam
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-black mt-4">
          Biografi Singkat
        </h2>
        <p className="text-sm md:text-base text-gray-700 mt-2">
          Saya seorang lulusan S1 Teknik Informatika Universitas Putra Indonesia
          YPTK Padang. Sebagai seorang yang terampil dalam mengolah data, saya
          memiliki latar belakang dalam teknik informatika dan pengalaman dalam
          mengelola, menganalisa, dan mengoptimalkan data. Saya memiliki
          semangat dan dedikasi yang tinggi dalam bekerja, jujur, cepat tanggap,
          dan memiliki kemampuan komunikasi yang baik.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-black mt-6">
          Keterampilan
        </h2>
        <p className="text-sm md:text-base text-gray-700 mt-2">
          1. Microsoft Office ( Microsoft Word, Microsoft Excel, Microsoft Power
          Point)<br/>
          2. Pengelolaan dan analisis data <br/>
          3. Pengelolaan dokumen <br/>
          4.Administrasi data<br/>
          5. Pemahaman terhadap konsep pemrograman berorientasi objek <br/>
          6. Keterampilan komunikasi yang baik <br/>
          7. Kemampuan untuk bekerja sama dalam lingkungan tim <br/>
          8. Keterampilan pemecahan masalah yang baik <br/>
          9. Pengalaman dengan teknologi pengembangan web seperti HTML, CSS, JavaScript <br/>
          10. Pengetahuan tentang sistem manajemen basis data seperti MYSQL<br/>
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-black mt-6">
          Nilai Utama
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          Ketepatan waktu, perhatian terhadap detail, dan komunikasi yang jelas.
        </p>

        {/* Sosial Media */}
        <div className="flex justify-center md:justify-start items-center gap-6 mt-6">
          <a href="https://www.google.com">
            <img src="./globe.svg" width={30} alt="Globe" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="./ig.jpg" width={30} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/feed/">
            <img src="./linked.png" width={30} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

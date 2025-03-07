"use client"
import React from "react";

function Experience() {
  return (
    <div className="max-w-3xl mx-auto p-5 ">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-5">Pengalaman</h2>
      {[{
        title: "Praktek Kerja Lapangan di Universitas Putra Indonesia YPTK Padang",
        duration: "Mar 2023 - Jun 2023",
        responsibilities: [
          "Merancang, menganalisa dan mengembangkan website untuk toko Padang Thrifting Shop.",
          "Mengoptimalisasi customer relationship management pada toko Padang Thrifting Shop."
        ]
      }, {
        title: "Staff Dinas Pengendalian Penduduk dan Keluarga Berencana",
        duration: "Jul 2024 - Nov 2024",
        responsibilities: [
          "Perencanaan dan administrasi keuangan pada Dinas Pengendalian Penduduk dan Keluarga Berencana.",
          "Mengolah data dan dokumen perencanaan keuangan pada Dinas Pengendalian Penduduk dan Keluarga Berencana.",
          "Administrasi data keuangan pada Dinas Pengendalian Penduduk dan Keluarga Berencana."
        ]
      }].map((exp, index) => (
        <div key={index} className="bg-white shadow-lg rounded-2xl p-5 mb-5 border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{exp.duration}</p>
          <ul className="list-disc pl-5 text-gray-700">
            {exp.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;

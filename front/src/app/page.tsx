"use client";

import { useEffect, useState } from "react";
import { supabase } from "./comp/supabase";

export default function Home() {
  useEffect(() => {
    submit();
  }, []);

  async function submit() {
    try {
      const res = await supabase.from("clienti").insert([{ credits: "300" }]);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mx-auto p-4">
      {/* Bronze Plan */}
      <div className="bg-gray-100 p-6 mb-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Bronze Plan</h2>
        <p className="text-gray-700 mb-4">
          Plan gratuit - Tu încarci designul CAD, timp de așteptare în coadă,
          imprimantă de calitate standard.
        </p>
        <h3 className="font-semibold">Features:</h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>
            Buton de încărcare CAD și opțiunea{" "}
            <a
              href="https://www.thingiverse.com/"
              className="text-blue-500 underline"
            >
              aici
            </a>{" "}
            pentru a alege un design de pe Thingiverse.
          </li>
          <li>Vizualizator 3D pentru designurile încărcate.</li>
          <li>Cost estimat.</li>
        </ul>
        <h3 className="font-semibold">Actions:</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Plasează comanda</li>
          <li>Se adaugă în coadă</li>
          <li>Imprimarea în maximum o săptămână</li>
          <li>
            Confirmare pe email înainte de imprimare, cu link pentru plata
            online. Confirmare necesară în 24h.
          </li>
        </ul>
      </div>

      {/* Silver Plan */}
      <div className="bg-gray-200 p-6 mb-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Silver Plan</h2>
        <p className="text-gray-700 mb-4">
          Plan cu costuri - Serviciu de proiectare (descriere idee), prioritate
          în coadă, imprimantă avansată.
        </p>
        <h3 className="font-semibold">Features:</h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Opțiunea de a adăuga schițe și a descrie ideea în chat.</li>
          <li>Prioritate față de planul Bronze în coadă.</li>
        </ul>
        <h3 className="font-semibold">Actions:</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Plasează comanda</li>
          <li>Chat pentru descrierea proiectului și încărcare schițe</li>
        </ul>
      </div>

      {/* Gold Plan */}
      <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Gold Plan</h2>
        <p className="text-gray-700 mb-4">
          Plan premium - Serviciu de proiectare (întâlnire cu inginer
          proiectant), prioritate maximă în coadă, imprimantă pe rășină.
        </p>
        <h3 className="font-semibold">Features:</h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Întâlnire cu inginer proiectant pentru a detalia cerințele.</li>
          <li>Prioritate maximă în coadă.</li>
        </ul>
      </div>
      <button onClick={submit}>APASA-l</button>
    </div>
  );
}

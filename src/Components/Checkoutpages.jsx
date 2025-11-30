import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaTruck, FaCreditCard } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Checkoutpages() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);



  const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const shipping = 5;
  const tax = 24;
  const total = subtotal + shipping + tax;

  return (
    <section id="Checkout" className="py-20 font-[var(--font-poppins)] ">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 px-4">
        {/* LEFT FORMS */}

        <div className="space-y-6">
          <div className="border border-gray-200 bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <FaPhoneAlt className="text-[var(--color-primery)]" />
              <h2 className="font-semibold text-lg text-[var(--color-primery)]">
                Contact Info
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your phone number"
                className="border border-gray-200 p-3 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email address"
                className="border border-gray-200 p-3 rounded-lg"
              />
            </div>
          </div>

   
        </div>



 

        
      </div>
    </section>
  );
}

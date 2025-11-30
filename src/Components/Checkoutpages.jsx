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

          <div className="border border-gray-200 bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <FaTruck className="text-[var(--color-primery)]" />
              <h2 className="font-semibold text-lg text-[var(--color-primery)]">
                Shipping Address
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-200 outline-none p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-200 outline-none p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Address line 1"
                className="border border-gray-200 outline-none p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Apt, Suite"
                className="border border-gray-200 outline-none p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Address line 2"
                className="border border-gray-200 outline-none p-3 rounded-lg sm:col-span-2"
              />
              <input
                type="text"
                placeholder="City"
                className="border border-gray-200 outline-none p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Country"
                className="border border-gray-200 outline-none p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="State/Province"
                className="border border-gray-200 outline-none p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Postal code"
                className="border border-gray-200 outline-none p-3 rounded-lg"
              />
            </div>
          </div>

          <div className="border border-gray-200 bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-10">
              <FaCreditCard className="text-[var(--color-primery)]" />
              <h2 className="font-semibold text-lg text-[var(--color-primery)]">
                Payment
              </h2>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Card number"
                className="border border-gray-200 outline-none p-3 w-full rounded-lg"
              />
              <input
                type="text"
                placeholder="Name on the card"
                className="border border-gray-200 outline-none p-3 w-full rounded-lg"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Expiration date (MM/YY)"
                  className="border border-gray-200 outline-none p-3 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="border border-gray-200 outline-none p-3 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>



        {/* RIGHT SUMMARY */}
        <div className="border border-gray-200 bg-white p-6 rounded-2xl shadow-sm h-fit">
          <h2 className="font-semibold text-2xl mb-6 text-[var(--color-primery)]">
            Order summary
          </h2>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="py-6">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="flex gap-4 pb-4 pt-4 border-b border-gray-200"
                >
                  <img src={p.thumbnail} className="w-16 h-16 rounded-lg" />

                  <div className="flex-1 ">
                    <h3 className="font-medium text-[var(--color-primery)]">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-500">One size</p>

                    <div className="flex items-center gap-3 mt-6">
                      <button
                        className="p-1  border border-gray-200 rounded"
                        onClick={() => updateQuantity(p.id, "dec")}
                      >
                        <AiOutlineMinus />
                      </button>

                      <span>{p.quantity}</span>

                      <button
                        className="p-1  border border-gray-200 rounded"
                        onClick={() => updateQuantity(p.id, "inc")}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>

                  <div className="text-right  font-semibold text-[var(--color-primery)]">
                    ${(p.price * p.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          )}

  
        </div>

        
      </div>
    </section>
  );
}

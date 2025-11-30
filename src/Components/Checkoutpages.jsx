import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaTruck, FaCreditCard } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Checkoutpages() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  // ------fetch products from api------
  
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=2")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products.map((p) => ({ ...p, quantity: 1 })));
        setLoading(false);
      });
  }, []);

  // --------update quantity function------
  const updateQuantity = (id, type) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              quantity:
                type === "inc"
                  ? p.quantity + 1
                  : p.quantity > 1
                  ? p.quantity - 1
                  : 1,
            }
          : p
      )
    );
  };

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

          {/* --------sub total part------ */}

          <div className="mt-5 py-2 text-sm text-[var(--color-primery)]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping estimate</span>
              <span>${shipping}.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax estimate</span>
              <span>${tax}.00</span>
            </div>
          </div>

          <div className="flex justify-between font-semibold text-lg mt-4 text-[var(--color-primery)]">
            <span>Order total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="w-full bg-[var(--color-primery)] text-white py-3 mt-6 rounded-full hover:bg-gray-900 transition">
            Confirm order
          </button>
        </div>
      </div>
    </section>
  );
}

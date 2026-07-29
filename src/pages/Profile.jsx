import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  User,
  MapPin,
  Package,
  LogOut,
  CreditCard,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState("Profile Identity");

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  if (!user) return null;

  const menuItems = [
    {
      icon: <User size={14} />,
      label: "Profile Identity",
    },
    {
      icon: <Package size={14} />,
      label: "Order Archive",
    },
    {
      icon: <MapPin size={14} />,
      label: "Saved Destinations",
    },
    {
      icon: <CreditCard size={14} />,
      label: "Payment Methods",
    },
    {
      icon: <ShieldCheck size={14} />,
      label: "Security",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F2] pt-32 pb-20 px-8 font-sans text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[10px] tracking-[0.6em] text-neutral-400 uppercase mb-4">
            The Boutique Collection
          </p>

          <h1 className="text-5xl font-extralight tracking-tight italic">
            Bonjour,{" "}
            <span className="font-normal not-italic underline decoration-[1px] underline-offset-[12px] decoration-neutral-200">
              {user.displayName?.split(" ")[0] || "Client"}
            </span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-20">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-40">
              <nav className="flex flex-col gap-8">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSection(item.label)}
                    className={`flex items-center gap-4 transition-all duration-500 group
                      ${activeSection === item.label
                        ? "text-black translate-x-2"
                        : "text-neutral-400 hover:text-black hover:translate-x-2"
                      }`}
                  >
                    <span
                      className={`p-2 rounded-full transition-all duration-500
                        ${activeSection === item.label
                          ? "bg-white shadow-md"
                          : "bg-neutral-100 group-hover:bg-white"
                        }`}
                    >
                      {item.icon}
                    </span>

                    <span className="text-[11px] uppercase tracking-[0.25em] font-medium">
                      {item.label}
                    </span>
                  </button>
                ))}
              </nav>

              <div className="pt-10 mt-10 border-t border-neutral-200">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-red-900/60 hover:text-red-600 transition-colors font-bold"
                >
                  <LogOut size={14} />
                  Terminate Session
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-10 border border-neutral-100 hover:scale-[1.02] hover:shadow-xl transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-neutral-400">
                    Member Status
                  </h4>

                  <Sparkles size={14} />
                </div>

                <p className="text-2xl font-light tracking-[0.2em]">
                  AROME ELITE
                </p>
              </div>

              <div className="bg-white p-10 border border-neutral-100 hover:scale-[1.02] hover:shadow-xl transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-neutral-400">
                    Latest Discovery
                  </h4>

                  <Package size={14} />
                </div>

                <p className="text-2xl font-light tracking-[0.2em]">
                  OUD NUIT — 100ML
                </p>
              </div>
            </div>

            {/* Profile Identity */}
            {activeSection === "Profile Identity" && (
              <section className="bg-white p-12 border border-neutral-100 shadow-sm">
                <div className="flex items-center gap-6 mb-16">
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.6em]">
                    Personal Archive
                  </h3>
                  <div className="h-[1px] flex-1 bg-neutral-100"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
                  <Info
                    label="Legal Name"
                    value={user.displayName || "Not Provided"}
                  />

                  <Info
                    label="Contact Channel"
                    value={user.email || "Not Provided"}
                  />

                  <Info
                    label="Phone Connection"
                    value={user.phoneNumber || "Not Linked"}
                  />

                  <Info
                    label="Location"
                    value="Rajasthan, India"
                  />
                </div>
              </section>
            )}

            {/* Orders */}
            {activeSection === "Order Archive" && (
              <section className="bg-white p-12 border border-neutral-100 shadow-sm">
                <h2 className="text-2xl font-light mb-10">
                  Order Archive
                </h2>

                <div className="border border-neutral-200 p-8">
                  <p className="text-neutral-500">
                    No orders available yet.
                  </p>
                </div>
              </section>
            )}

            {/* Addresses */}
            {activeSection === "Saved Destinations" && (
              <section className="bg-white p-12 border border-neutral-100 shadow-sm">
                <h2 className="text-2xl font-light mb-10">
                  Saved Destinations
                </h2>

                <div className="border border-neutral-200 p-8">
                  <p className="text-neutral-500">
                    No saved addresses found.
                  </p>
                </div>
              </section>
            )}

            {/* Payments */}
            {activeSection === "Payment Methods" && (
              <section className="bg-white p-12 border border-neutral-100 shadow-sm">
                <h2 className="text-2xl font-light mb-10">
                  Payment Methods
                </h2>

                <div className="border border-neutral-200 p-8">
                  <p className="text-neutral-500">
                    No payment methods added.
                  </p>
                </div>
              </section>
            )}

            {/* Security */}
            {activeSection === "Security" && (
              <section className="bg-white p-12 border border-neutral-100 shadow-sm">
                <h2 className="text-2xl font-light mb-10">
                  Security Settings
                </h2>

                <div className="space-y-6">
                  <button className="px-8 py-4 bg-black text-white uppercase tracking-widest text-xs hover:bg-neutral-800 transition">
                    Change Password
                  </button>

                  <div>
                    <p className="text-neutral-500">
                      Email Verification:
                    </p>

                    <p className="font-medium">
                      {user.emailVerified
                        ? "Verified ✓"
                        : "Not Verified"}
                    </p>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="group relative py-2">
      <label className="text-[9px] text-neutral-400 uppercase tracking-[0.3em] mb-3 block">
        {label}
      </label>

      <div className="text-[13px] tracking-widest text-black">
        {value}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-100 group-hover:bg-black transition-all duration-500"></div>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const cards = [
    "visa.svg",
    "amex.svg",
    "mastercard.svg",
    "paypal.svg",
    "stripe.svg",
    "alipay.svg",
  ];

  const menus = [
    { name: "Catalog", items: [{ label: "Catelog One", href: "catalog-one" }] },
    {
      name: "About Us",
      items: [{ label: "Catelog One", href: "catalog-one" }],
    },
    {
      name: "Customer Service",
      items: [
        { label: "Catelog One", href: "contact-us" },
        { label: "Track YOur Order", href: "track-order" },
        { label: "Product Care & Repair", href: "product-care-&-repair" },
        { label: "Shipping & Returns", href: "shipping-&-returns" },
      ],
    },
  ];

  return (
    <footer>
      <div className="bg-[#f2f2f2]">
        <div className="container mx-auto px-5 py-10">
          <div className="grid grid-cols-9 gap-5">
            <div className="col-span-3"></div>
            {menus.map((menu, index) => (
              <div key={index} className="col-span-2">
                <h3 className="uppercase font-medium">{menu.name}</h3>
                <ul className="mt-2 space-y-2">
                  {menu.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={`/${item.href}`}
                        className="text-sm hover:underline transition-all"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className="bg-black">
        <div className="container mx-auto px-5 py-2">
          <div className="flex items-center justify-between">
            <p className="text-[#f2f2f2] text-sm">@2024 Dong, Inc.</p>
            <div className="flex items-center space-x-2">
              {cards.map((card, index) => (
                <Image
                  key={index}
                  src={`./cards/${card}`}
                  alt="card"
                  className="h-auto w-30"
                  width={50}
                  height={30}
                  draggable={false}
                />
              ))}
            </div>
            <p className="text-[#f2f2f2] text-sm">Scroll To Top</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

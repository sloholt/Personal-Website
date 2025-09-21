"use client";
import { useState } from "react";

export default function ContactCard(){
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(()=>setCopied(null), 1500);
    } catch(e){
      alert("Copy failed");
    }
  };
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl border">
        <h3 className="text-xl font-semibold mb-2">Email</h3>
        <p className="p mb-4"><a className="underline" href="mailto:you@domain.com">you@domain.com</a></p>
        <button className="btn" onClick={()=>copy("you@domain.com","email")}>
          {copied==="email" ? "Copied!" : "Copy email"}
        </button>
      </div>
      <div className="p-6 rounded-2xl border">
        <h3 className="text-xl font-semibold mb-2">Phone</h3>
        <p className="p mb-4"><a className="underline" href="tel:+15551234567">+1 (555) 123-4567</a></p>
        <button className="btn" onClick={()=>copy("+15551234567","phone")}>
          {copied==="phone" ? "Copied!" : "Copy phone"}
        </button>
      </div>
    </div>
  );
}

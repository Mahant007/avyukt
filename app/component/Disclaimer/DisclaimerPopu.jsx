"use client"

import { useEffect, useState } from "react"

export default function DisclaimerPopup() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("disclaimerAccepted")
    if (!accepted) {
      setShow(true)
    }
  }, [])

  const acceptDisclaimer = () => {
    localStorage.setItem("disclaimerAccepted", "true")
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-white max-w-xl w-full rounded-lg shadow-lg p-6">
        <h2 className="text-xl text-black font-bold mb-4 text-center">
          Legal Disclaimer
        </h2>

        <p className="text-l text-black text-700 mb-6 leading-relaxed">
          The information provided on this website is for general informational and educational 
          purposes only and does not constitute legal advice. No lawyer-client
          relationship is created by browsing this website or contacting
          Avyukat Associate without formal engagement.
        </p>

        <button
          onClick={acceptDisclaimer}
          className="w-full bg-[#020e33] text-white py-2 rounded hover:bg-gray-800 transition"
        >
          I Agree & Continue
        </button>
      </div>
    </div>
  )
}

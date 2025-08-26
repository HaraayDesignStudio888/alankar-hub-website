import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex flex-col items-center mb-4 space-y-2">
              <Link href="/" className="block">
                <img
                  src="/Logo2.png"
                  alt="Logo"
                  width={150}
                  className="rounded-md"
                />
              </Link>
              <h3 className="font-bold text-lg text-center">
                ALANKAR DIGITAL HUB
              </h3>
            </div>

            <p className="text-gray-400 mb-4 text-center">
              Your trusted partner for all printing and digital solutions.
              Quality, reliability, and innovation in every project.
            </p>

            <div className="text-sm text-gray-400"></div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">+91 8422925097</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">
                  alankardigitalhub@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Gate no-8, Orient Park, near Stylo Tailor, besides Nilesh park
                  society, Malwadi road,
                  <br />
                  Hadapsar, Pune- 411028
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">
                  Mon-Sat: 9:00 AM - 8:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/terms"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
               <Link
                href="/refund"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Refund Policy
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <div className="space-y-2 text-gray-300">
              <p>• Business Cards</p>
              <p>• Wedding Invitations</p>
              <p>• Brochures & Flyers</p>
              <p>• Banners & Signage</p>
              <p>• Digital Printing</p>
              <p>• Packaging Solutions</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 ALANKAR DIGITAL HUB. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* <Link
                href="/refund"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Refund Policy
              </Link> */}
              {/* <Link href="/shipping" className="text-gray-400 hover:text-white text-sm transition-colors">
                Shipping Policy
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

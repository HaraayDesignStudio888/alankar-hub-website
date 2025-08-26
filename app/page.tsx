"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Star } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  // ✅ Carousel Images
const popularWorks = [
    {
      title: "Letter Head Print",
      image: "/Letter Head Print.png",
      category: "Post Prints",
    },
    {
      title: "A3 Sticker Print",
      image: "/A3 Sticker Print.png",
      category: "Post Prints",
    },
    {
      title: "Canvas Print",
      image: "/Canvas Print.png",
      category: "Post Prints",
    },
    {
      title: "5 Piece Canvas Wallpaper Art",
      image: "/5 Piece Canvas Wallpaper Art.png",
      category: "Post Prints",
    },
    {
      title: "Canvas Floater Frame",
      image: "/Canvas Floater Frame.png",
      category: "Photo Frames",
    },
    {
      title: "Wall Photo Frames",
      image: "/Wall Photo Frames.png",
      category: "Photo Frames",
    },
    {
      title: "Event ID Cards",
      image: "/Event ID Cards.png",
      category: "Vinyl Prints",
    },
    {
      title: "ID Cards Lanyards",
      image: "/Service Images/Vinyl Prints/ID Cards linyards.png",
      category: "Vinyl Prints",
    },
    {
      title: "ID Cards Accessories",
      image: "/Service Images/Vinyl Prints/ID Cards Accessories.png",
      category: "Vinyl Prints",
    },
  ];

  // ✅ Keen slider config
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 3, spacing: 15 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
    },
  });

  // ✅ Auto-slide with pause on hover
  const timer = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!slider) return;

    const startAutoPlay = () => {
      stopAutoPlay();
      timer.current = setInterval(() => {
        slider.current?.next();
      }, 1500); // 4s delay
    };

    const stopAutoPlay = () => {
      if (timer.current) clearInterval(timer.current);
    };

    startAutoPlay();

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", stopAutoPlay);
      container.addEventListener("mouseleave", startAutoPlay);
    }

    return () => {
      stopAutoPlay();
      if (container) {
        // container.removeEventListener("mouseenter", stopAutoPlay);
        // container.removeEventListener("mouseleave", startAutoPlay);
      }
    };
  }, [slider]);

  // ✅ Services Items
  const portfolioItems = [
    {
      id: 1,
      title: "Wallpaper",
      description: "5 Piece Canvas Wallpaper that transforms spaces.",
      image: "/5 Piece Canvas Wallpaper Art.png",
      category: "Post Prints",
    },
    {
      id: 2,
      title: "Table Top Photo Frame",
      description: "Elegant table top photo frame",
      image: "/Table Top Photo Frame.png",
      category: "Photo Frames",
    },
    {
      id: 3,
      title: "Photo Frame",
      description: "Stylish wall photo frames for memories.",
      image: "/Wall Photo Frames.png",
      category: "Photo Frame",
    },
    {
      id: 4,
      title: "Canvas Floater Frame",
      description: "Professional canvas floater frame",
      image: "/Canvas Floater Frame.png",
      category: "Photo Frames",
    },
    {
      id: 5,
      title: "Vinyl Prints",
      description: "Durable and high-quality vinyl printing solutions.",
      image: "/Service Images/Vinyl Prints/ID Cards linyards.png",
      category: "Vinyl",
    },
  ];

  // ✅ Testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Kumar Enterprises",
      rating: 5,
      comment:
        "Excellent quality printing services. Very professional and timely delivery.",
    },
    {
      name: "Priya Sharma",
      business: "Sharma Wedding Planners",
      rating: 5,
      comment:
        "Beautiful wedding cards with amazing designs. Highly recommended!",
    },
    {
      name: "Amit Patel",
      business: "Patel Industries",
      rating: 5,
      comment:
        "Great service for all our corporate printing needs. Quality is top-notch.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* 🖼 Hero Section */}

      <section className="relative w-full overflow-hidden">
        {/* 🔥 Common Overlay Text */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 -translate-y-16">
          {/* Welcome Text */}
          <h3 className="text-3xl md:text-5xl font text-white drop-shadow-lg mb-2">
            Welcome to
          </h3>

          {/* Vibrant Business Name */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {"ALANKAR_DIGITAL_HUB".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                animate={{
                  color: [
                    "#ffffff",
                    "#f8f4f4ff",
                    "#fafcfaff",
                    "#f6f8faff",
                    "#ffffff",
                  ], // white → red → green → blue → white
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 5,
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl font text-white drop-shadow-lg mb-3">
            Print Your Memories
          </h2>

          {/* Short Tagline */}
          <p className="text-lg md:text-xl text-gray-200 drop-shadow-lg mb-1">
            High-quality prints, frames & vinyls — all in one place
          </p>

          {/* Long Description */}
          <p className="text-base md:text-lg text-gray-300 drop-shadow-md max-w-3xl">
            From business cards to large format banners, we deliver exceptional
            quality printing services with cutting-edge technology and creative
            expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Banner 1 */}
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/4x6 Photo Print.png"
              alt="Post Prints"
              fill
              className="object-cover rounded-xl"
            />
            {/* Button Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center pb-10">
              <Link href={`/services?category=Post Prints`}>
                <Button className="bg-white text-black hover:bg-gray-200">
                  View All
                </Button>
              </Link>
            </div>
          </div>

          {/* Banner 2 */}
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/Wall Photo Frames.png"
              alt="Photo Frames"
              fill
              className="object-cover rounded-xl"
            />
            {/* Button Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center pb-10">
              <Link href={`/services?category=Photo Frames`}>
                <Button className="bg-white text-black hover:bg-gray-200">
                  View All
                </Button>
              </Link>
            </div>
          </div>

          {/* Banner 3 */}
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/Event ID Cards.png"
              alt="Vinyl Prints"
              fill
              className="object-cover rounded-xl"
            />
            {/* Button Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center pb-10">
              <Link href={`/services?category=Vinyl Prints`}>
                <Button className="bg-white text-black hover:bg-gray-200">
                  View All
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ Popular Work Carousel */}

       <section className="py-16 bg-white" ref={containerRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Most Popular Work
          </h2>
          <div ref={sliderRef} className="keen-slider">
            {popularWorks.map((work, index) => (
              <div
                key={index}
                className="keen-slider__slide flex justify-center"
              >
                <div className="relative w-full max-w-sm rounded-xl overflow-hidden  transition">
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-64 rounded-full shadow-lg"
                  />
                  <div className="absolute inset-0 text-white font-extrabold text-2xl md:text-1xl  bg-white bg-opacity-0 flex items-center justify-center opacity-100 hover:opacity-100 transition">
                    {work.title}
                  </div>
                  <div className="absolute inset-0   flex items-end justify-center opacity-100  transition mb-4">
                    <Link
                      href={`/services?category=${encodeURIComponent(
                        work.category
                      )}`}
                    >
                      <Button className="bg-white text-black hover:bg-gray-200">
                        View All
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🛠 Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive printing solutions for all your business
              and personal needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* A3 Sticker Print */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow md:col-span-2 border border-red-500">
              <div className="relative h-48">
                <Image
                  src="/A3 Sticker Print.png"
                  alt="/A3 Sticker Print.png"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  Post Prints
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Post Prints</h3>
                <p className="text-gray-600">
                  High-quality prints for Sticker and more.
                </p>
              </CardContent>
            </Card>

            {/* Portfolio Items */}
            {portfolioItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}

            {/* Wide Format Printing */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow md:col-span-2 border border-red-500">
              <div className="relative h-48">
                <Image
                  src="/Event ID Cards.png"
                  alt="Event ID Cards"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  Vinyl
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vinyl</h3>
                <p className="text-gray-600">
                  High-quality prints for ID Cards and more.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 💡 Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose ALANKAR DIGITAL HUB?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                State-of-the-art printing technology ensuring superior quality
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer support for all your queries
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored printing solutions for your specific requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🗣 Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.business}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 📞 CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote for your printing
            needs
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

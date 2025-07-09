import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Star } from "lucide-react";

export default function HomePage() {
  const portfolioItems = [
    {
      id: 1,
      title: "Vinyl Prints",
      description: "",
      image: "/Event ID Cards.png",
      category: "Vinyl",
    },

    {
      id: 2,
      title: "Wallpaper",
      description: "5 Piece Canvas Wallpaper",
      image: "/5 Piece Canvas Wallpap....png",
      category: "Wallpaper",
    },
    {
      id: 3,
      title: "Photo Frame",
      description: "Eye-catching marketing materials for your business",
      image: "/Photo Frame.png",
      category: "Photo Frame",
    },
    {
      id: 4,
      title: "Letter Head Print",
      description: "",
      image: "/Letter Head Print.png",
      category: "Digital print",
    },
    {
      id: 5,
      title: "Packaging Design Print",
      description: "Custom packaging solutions for products",
      image: "/packaging-design.webp",
      category: "Packaging",
    },
  ];

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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to ALANKAR DIGITAL HUB
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your Premier Printing Partner for All Digital Solutions
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            From business cards to large format banners, we deliver exceptional
            quality printing services with cutting-edge technology and creative
            expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get Quote Now
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
            {/* digital long page */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow md:col-span-2 border border-red-500 border-2">
              <div className="relative h-48">
                <Image
                  src="/Digital Printing.webp"
                  alt="Digital Printing"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  Digital Printing
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Digital Format Printing
                </h3>
                <p className="text-gray-600">
                  High-quality prints for banners, hoardings, and more.
                </p>
              </CardContent>
            </Card>
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
            {/* Wide format printing card spanning 2 columns */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow md:col-span-2 border border-pink-500 border-2">
              <div className="relative h-48">
                <Image
                  src="/wfp.jpg"
                  alt="wide format printing"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  wide format
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Wide Format Printing
                </h3>
                <p className="text-gray-600">
                  High-quality prints for banners, hoardings, and more.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-xl font-bold mb-4">
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

      {/* Testimonials */}
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

      {/* CTA Section */}
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

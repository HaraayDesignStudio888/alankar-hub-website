export default function ShippingPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Shipping & Delivery Policy</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Delivery Areas</h2>
            <p className="text-gray-700 leading-relaxed mb-3">We provide delivery services to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Mumbai and surrounding areas (same-day delivery available)</li>
              <li>Maharashtra state (1-2 business days)</li>
              <li>All major cities across India (2-5 business days)</li>
              <li>Remote locations (5-7 business days)</li>
              <li>International shipping (7-15 business days)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Delivery Timeframes</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Location</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Standard Delivery</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Express Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Mumbai City</td>
                    <td className="border border-gray-300 px-4 py-2">Same day / Next day</td>
                    <td className="border border-gray-300 px-4 py-2">4-6 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Maharashtra</td>
                    <td className="border border-gray-300 px-4 py-2">1-2 business days</td>
                    <td className="border border-gray-300 px-4 py-2">Next day</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Major Cities</td>
                    <td className="border border-gray-300 px-4 py-2">2-5 business days</td>
                    <td className="border border-gray-300 px-4 py-2">1-2 business days</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Remote Areas</td>
                    <td className="border border-gray-300 px-4 py-2">5-7 business days</td>
                    <td className="border border-gray-300 px-4 py-2">3-4 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Shipping Charges</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Shipping charges are calculated based on:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Order weight and dimensions</li>
              <li>Delivery location and distance</li>
              <li>Delivery speed (standard vs express)</li>
              <li>Special handling requirements</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Free shipping</strong> is available for orders above ₹2,500 within Mumbai and ₹5,000 for other
              locations in Maharashtra.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Order Processing Time</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Processing times vary by product type:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Business cards: 1-2 business days</li>
              <li>Brochures and flyers: 2-3 business days</li>
              <li>Wedding invitations: 3-5 business days</li>
              <li>Large format printing: 2-4 business days</li>
              <li>Custom packaging: 5-7 business days</li>
              <li>Rush orders: Same day to 24 hours (additional charges apply)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Delivery Methods</h2>
            <p className="text-gray-700 leading-relaxed mb-3">We offer multiple delivery options:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>
                <strong>Self Pickup:</strong> Free pickup from our facility
              </li>
              <li>
                <strong>Local Delivery:</strong> Our delivery team within Mumbai
              </li>
              <li>
                <strong>Courier Services:</strong> Professional courier partners
              </li>
              <li>
                <strong>Express Shipping:</strong> Priority delivery services
              </li>
              <li>
                <strong>Bulk Delivery:</strong> Special arrangements for large orders
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Packaging and Handling</h2>
            <p className="text-gray-700 leading-relaxed">
              All orders are carefully packaged to ensure safe delivery. We use appropriate packaging materials
              including bubble wrap, cardboard boxes, and protective sleeves. Fragile items receive extra protection and
              are marked accordingly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Delivery Confirmation</h2>
            <p className="text-gray-700 leading-relaxed mb-3">We provide delivery confirmation through:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>SMS notifications with tracking details</li>
              <li>Email updates on order status</li>
              <li>Real-time tracking for courier deliveries</li>
              <li>Delivery receipt with signature</li>
              <li>Photo confirmation for contactless delivery</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">8. Failed Delivery Attempts</h2>
            <p className="text-gray-700 leading-relaxed">
              If delivery fails due to incorrect address or recipient unavailability, we will make up to 3 delivery
              attempts. After failed attempts, the package will be held at the nearest facility for 7 days. Additional
              charges may apply for re-delivery attempts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">9. Damage During Shipping</h2>
            <p className="text-gray-700 leading-relaxed">
              If your order arrives damaged, please report it within 24 hours of delivery. Take photos of the damaged
              items and packaging. We will arrange for replacement or refund as appropriate. Do not accept visibly
              damaged packages.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">10. International Shipping</h2>
            <p className="text-gray-700 leading-relaxed">
              International orders are subject to customs regulations and duties. Customers are responsible for any
              customs fees, taxes, or duties. Delivery times may vary due to customs clearance. We provide all necessary
              documentation for customs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">11. Contact for Shipping Queries</h2>
            <p className="text-gray-700 leading-relaxed">
              For shipping-related questions or to track your order, contact us at shipping@alankardigitalhub.com or
              call +91 98765 43210. Our shipping department is available Monday to Saturday, 9:00 AM to 8:00 PM.
            </p>
          </div>

          <div className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-600">
              Last updated: January 2024
              <br />
              ALANKAR DIGITAL HUB PRIVATE LIMITED
              <br />
              123, Digital Plaza, MG Road, Mumbai, Maharashtra - 400001
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

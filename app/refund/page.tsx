export default function RefundPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Refund & Cancellation Policy</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Order Cancellation</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Orders can be cancelled under the following conditions:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Within 2 hours of order placement if production has not started</li>
              <li>Before the design approval stage for custom orders</li>
              <li>If we cannot meet the agreed delivery timeline</li>
              <li>In case of technical issues preventing order completion</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Refund Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Refunds are applicable in the following scenarios:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Printing defects or quality issues not meeting specifications</li>
              <li>Wrong quantity delivered (refund for excess amount)</li>
              <li>Damage during shipping (with proper documentation)</li>
              <li>Order cancellation within eligible timeframe</li>
              <li>Service failure from our end</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Non-Refundable Items</h2>
            <p className="text-gray-700 leading-relaxed mb-3">The following items are not eligible for refund:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Custom designed products approved by customer</li>
              <li>Orders with customer-provided incorrect specifications</li>
              <li>Products damaged due to customer mishandling</li>
              <li>Orders completed as per approved specifications</li>
              <li>Digital files and design services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Refund Process</h2>
            <p className="text-gray-700 leading-relaxed mb-3">To request a refund:</p>
            <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
              <li>Contact us within 48 hours of delivery</li>
              <li>Provide order details and reason for refund</li>
              <li>Submit supporting documentation (photos, etc.)</li>
              <li>Return products if required (in original condition)</li>
              <li>Refund will be processed within 7-10 business days</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Refund Methods</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Refunds will be processed through:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Original payment method (preferred)</li>
              <li>Bank transfer to customer account</li>
              <li>Store credit for future orders</li>
              <li>Cash refund for cash payments</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Partial Refunds</h2>
            <p className="text-gray-700 leading-relaxed">
              Partial refunds may be offered for orders that are partially defective or when only a portion of the order
              needs to be cancelled. The refund amount will be calculated proportionally based on the affected items.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Rush Order Cancellations</h2>
            <p className="text-gray-700 leading-relaxed">
              Rush orders have stricter cancellation policies due to expedited processing. Cancellation fees may apply
              if production has already begun. Rush order surcharges are non-refundable once production starts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">8. Quality Guarantee</h2>
            <p className="text-gray-700 leading-relaxed">
              We guarantee the quality of our printing services. If you're not satisfied with the quality, we will
              either reprint the order at no cost or provide a full refund, depending on the circumstances and customer
              preference.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">9. Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed">
              In case of disputes regarding refunds, we encourage customers to contact our customer service team first.
              We aim to resolve all issues amicably and fairly. Unresolved disputes may be subject to arbitration.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">10. Contact for Refunds</h2>
            <p className="text-gray-700 leading-relaxed">
              For refund requests or questions about this policy, contact us at  alankardigitalhub@gmail.com or call +91 8422925097. Our customer service team is available Monday to Saturday, 9:00 AM to 8:00 PM.
            </p>
          </div>

          <div className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-600">
               Last updated: July 2025
              <br />
              ALANKAR DIGITAL HUB
              <br />
              Gate no-8, Orient Park, near Stylo Tailor, besides Nilesh park
              society, Malwadi road,
              <br />
              Hadapsar, Pune- 411028
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RefundPolicy() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-300 font-light">
      <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">Refund <span className="text-[var(--color-gold-500)]">Policy</span></h1>
      <div className="h-1 w-24 bg-[var(--color-gold-500)] mb-12"></div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold uppercase tracking-wider text-white mb-4">1. Returns Overview</h2>
          <p className="leading-relaxed">
            At Coinchasers, we stand by the quality of our premium apparel. If you are not entirely satisfied with your purchase, we're here to help. You have 14 calendar days to return an item from the date you received it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase tracking-wider text-white mb-4">2. Eligibility for Returns</h2>
          <p className="leading-relaxed">
            To be eligible for a return, your item must be unused, unwashed, and in the exact same condition that you received it. It must also be in the original packaging with all tags attached. Items marked as "Final Sale" or from limited exclusive drops cannot be returned.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase tracking-wider text-white mb-4">3. Refunds</h2>
          <p className="leading-relaxed">
            Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your credit card (or original method of payment).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase tracking-wider text-white mb-4">4. Shipping Costs</h2>
          <p className="leading-relaxed">
            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
          </p>
        </section>
      </div>
    </div>
  );
}

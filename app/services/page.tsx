 import { Suspense } from "react";
import Services from "./Services";

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="text-center py-12">Loading services...</div>}>
      <Services />
    </Suspense>
  );
}

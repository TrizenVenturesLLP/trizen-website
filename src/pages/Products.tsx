import FadeIn from "@/components/marketing/FadeIn";
import { ListingPage, ProductCard } from "@/components/page";
import { getAllProducts } from "@/content/products";

const Products = () => {
  const items = getAllProducts();

  return (
    <ListingPage
      title="Products"
      path="/products"
      description="Trizen products: TrizenHR attendance and payroll, TrizenDialog WhatsApp ops, and Trizen Community founder events."
      eyebrow="Products"
      heading="Live platforms we build and operate"
      intro="Named products with production surfaces: workforce ops, WhatsApp notification infrastructure, and a founder community for events. Not slideware labeled as solutions."
      mesh="muted"
      cta={{
        title: "Want these products on your roadmap?",
        description:
          "We ship and operate TrizenHR, TrizenDialog, and Trizen Community—or embed them into delivery engagements for your teams.",
        secondaryLabel: "View services",
        secondaryHref: "/services",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {items.map((product, index) => (
          <FadeIn key={product.id} delay={index * 0.06}>
            <ProductCard product={product} variant="listing" />
          </FadeIn>
        ))}
      </div>
    </ListingPage>
  );
};

export default Products;

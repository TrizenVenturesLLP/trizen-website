import FadeIn from "@/components/marketing/FadeIn";
import { ListingPage, ProductCard } from "@/components/page";
import { getAllProducts } from "@/content/products";

const Products = () => {
  const items = getAllProducts();

  return (
    <ListingPage
      title="Products"
      path="/products"
      description="Ready-to-use products from Trizen AI: attendance and payroll, WhatsApp messaging, and a founders community."
      eyebrow="Products"
      heading="Tools your teams can use today"
      intro="Three live products - workforce, messaging, and community. Built for real work, not demos."
      mesh="muted"
      cta={{
        title: "Want to use these products?",
        description:
          "We can set up TrizenHR, TrizenDialog, or Trizen Community for your team - or include them in a larger project.",
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

import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

interface BookButtonProps extends Omit<ButtonProps, "asChild" | "children"> {
  /** Destination - defaults to site contact path */
  to?: string;
  label?: string;
  children?: ReactNode;
  /** External URL instead of internal `to` */
  href?: string;
}

/**
 * Primary “Book a Consultation” CTA with shared arrow animation styles.
 */
const BookButton = ({
  to = siteConfig.contactHref,
  href,
  label = "Book a Consultation",
  children,
  className,
  size = "lg",
  ...props
}: BookButtonProps) => {
  const content = children ?? (
    <>
      {label}
      <span className="btn-book__arrow" aria-hidden="true">
        <ArrowRight />
      </span>
    </>
  );

  return (
    <Button
      asChild
      size={size}
      className={cn("btn-micro btn-book shadow-none", className)}
      {...props}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <Link to={to}>{content}</Link>
      )}
    </Button>
  );
};

export default BookButton;

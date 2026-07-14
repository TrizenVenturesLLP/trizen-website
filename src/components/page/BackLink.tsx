import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackLinkProps {
  to: string;
  label: string;
  className?: string;
}

const BackLink = ({ to, label, className }: BackLinkProps) => (
  <Link
    to={to}
    className={cn(
      "inline-flex items-center text-sm text-zinc-600 hover:text-indigo-600 transition-colors mb-8",
      className
    )}
  >
    <ArrowLeft className="mr-2 h-4 w-4" />
    {label}
  </Link>
);

export default BackLink;

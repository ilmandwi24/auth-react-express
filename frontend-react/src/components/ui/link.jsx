import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { cn } from "@/lib/utils"; // pastikan kamu punya helper ini

export const Link = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  return (
    <RouterLink
      ref={ref}
      {...props}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary underline-offset-4 hover:underline",
        variant === "muted" && "text-muted-foreground",
        className
      )}
    />
  );
});

Link.displayName = "Link";
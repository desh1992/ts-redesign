import * as React from "react";
import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  isDark = false,
  backgroundPosition = "center center",
  index = 0,
}: {
  name: string;
  className: string;
  background: ReactNode | string;
  Icon: any;
  description: string;
  href: string;
  cta: string;
  isDark?: boolean;
  backgroundPosition?: string;
  index?: number;
}) => {
  const textColor = isDark 
    ? "text-white" 
    : "text-neutral-900 dark:text-neutral-100";
  const iconColor = isDark 
    ? "text-white" 
    : "text-neutral-700 dark:text-neutral-300";
  const descColor = isDark 
    ? "text-white/90" 
    : "text-neutral-600 dark:text-neutral-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className={cn(
        "group relative col-span-3 md:col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        "[backface-visibility:hidden] [-webkit-font-smoothing:antialiased]",
        className,
      )}
    >
      {typeof background === 'string' ? (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: backgroundPosition,
          }}
        />
      ) : (
        <div className="absolute inset-0 overflow-hidden">{background}</div>
      )}
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <Icon className={cn(
          "h-12 w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75",
          iconColor
        )} />
        <h3 className={cn("text-xl font-semibold", textColor)}>
          {name}
        </h3>
        <p className={cn("max-w-lg", descColor)}>{description}</p>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <Button 
          variant="ghost" 
          asChild 
          size="sm" 
          className={cn(
            "pointer-events-auto",
            isDark ? "text-white hover:bg-white/10" : "text-neutral-700 hover:bg-neutral-100"
          )}
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
      <div className={cn(
        "pointer-events-none absolute inset-0 transform-gpu transition-all duration-300",
        isDark 
          ? "group-hover:bg-white/[.05]" 
          : "group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10"
      )} />
    </motion.div>
  );
};

/**
 * BentoGridItem is a flexible component designed to be a child of BentoGrid.
 * It provides a consistent structure with a header, title, and description,
 * and includes a subtle scaling effect on hover.
 */
interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}

const BentoGridItem = React.forwardRef<HTMLDivElement, BentoGridItemProps>(
  ({ className, title, description, header, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]",
          className
        )}
        {...props}
      >
        {/* Header content, now perfect for images */}
        <div className="flex h-full min-h-[6rem] flex-1 overflow-hidden rounded-md">
            {header}
        </div>

        {/* Title and description */}
        <div className="transition-transform duration-200 group-hover:translate-x-1 flex items-start gap-3">
          {icon && (
            <div className="flex-shrink-0 mt-1">
              {icon}
            </div>
          )}
          <div className="flex-1">
            <div className="font-sans text-sm font-bold text-card-foreground">
              {title}
            </div>
            <p className="font-sans text-xs text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
);
BentoGridItem.displayName = "BentoGridItem";

export { BentoCard, BentoGrid, BentoGridItem };

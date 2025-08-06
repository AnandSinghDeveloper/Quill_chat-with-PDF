import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  className: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full md:px-20 px-2.5 max-w-screen-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;

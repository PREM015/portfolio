"use client";

import { cn } from "@/lib/utils";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

/* --------------------------------------------------
   CARD CONTAINER
-------------------------------------------------- */
export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("flex items-center justify-center", containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative flex items-center justify-center transition-all duration-200 ease-linear",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

/* --------------------------------------------------
   CARD BODY
-------------------------------------------------- */
export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-96 w-96",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

/* --------------------------------------------------
   POLYMORPHIC CARD ITEM (FIXED - typings safe & build-safe)
-------------------------------------------------- */

type CardItemBaseProps = {
  children?: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
};

type PolymorphicProps<T extends React.ElementType> = {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, "children"> &
  CardItemBaseProps;

export const CardItem = <T extends React.ElementType = "div">({
  as,
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: PolymorphicProps<T>) => {
  // force Tag to `any` to avoid TS complaining about spreading unknown props onto a dynamic element
  const Tag: any = (as || "div") as any;
  const ref = useRef<HTMLElement | null>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;

    if (isMouseEntered) {
      // Accept numbers or strings for translate/rotate props
      const tx = typeof translateX === "number" ? `${translateX}px` : translateX;
      const ty = typeof translateY === "number" ? `${translateY}px` : translateY;
      const tz = typeof translateZ === "number" ? `${translateZ}px` : translateZ;
      const rx = typeof rotateX === "number" ? `${rotateX}deg` : rotateX;
      const ry = typeof rotateY === "number" ? `${rotateY}deg` : rotateY;
      const rz = typeof rotateZ === "number" ? `${rotateZ}deg` : rotateZ;

      ref.current.style.transform = `
        translateX(${tx})
        translateY(${ty})
        translateZ(${tz})
        rotateX(${rx})
        rotateY(${ry})
        rotateZ(${rz})
      `;
    } else {
      ref.current.style.transform = `
        translateX(0px)
        translateY(0px)
        translateZ(0px)
        rotateX(0deg)
        rotateY(0deg)
        rotateZ(0deg)
      `;
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  return (
    <Tag
      ref={ref as any}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...(rest as any)}
    >
      {children}
    </Tag>
  );
};

/* --------------------------------------------------
   HOOK
-------------------------------------------------- */

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

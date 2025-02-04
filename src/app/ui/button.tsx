'use client';

import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv, VariantProps } from 'tailwind-variants';

import { cx } from '@/lib/utils';

const buttonVariants = tv({
  base: [
    "inline-flex w-fit cursor-pointer items-center justify-center rounded-md px-3 py-2 font-medium sm:text-sm",
    "disabled:pointer-events-none disabled:opacity-60",
    "transition-all duration-100 ease-in-out",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3108]",
  ],
  variants: {
    variant: {
      solid:
        "group relative bg-gradient-to-b from-[#274012] to-[#162508] text-white shadow-sm duration-200 hover:opacity-90 active:scale-[99%]",
      outline:
        "bg-white text-[#1D3108] ring-1 ring-inset ring-[#1D3108] hover:bg-[#E0E5DD]",
      light:
        "bg-white text-[#1D3108] ring-1 ring-inset ring-slate-300 hover:bg-slate-100",
      ghost: "bg-transparent text-[#1D3108] hover:bg-[#F4F6F5]",
      disabled: "bg-slate-400 text-white opacity-60",
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, className, children, asChild, ...props }: ButtonProps,
    forwardedRef,
  ) => {
    const Component = asChild ? Slot : 'button';
    return (
      <Component
        ref={forwardedRef}
        className={cx(buttonVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

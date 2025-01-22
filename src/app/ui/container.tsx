import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
};

export function Container<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T>) {
  let Component = as ?? 'div';

  return (
    <Component
      className={twMerge(clsx('mx-auto max-w-7xl px-4 lg:px-8', className))}
    >
      {children}
    </Component>
  );
}

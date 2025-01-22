import { PropsWithChildren } from 'react';

import Footer from '../ui/footer';

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

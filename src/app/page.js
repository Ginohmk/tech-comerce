import NavSection from '@/components/nav/Nav';
import PromoHead from '@/components/promo-head/page';
import Image from 'next/image';

export default function Home() {
  return (
    <section>
      <PromoHead />
      <NavSection />
    </section>
  );
}

import { Outlet } from 'react-router';
import Navigation from '~/navigation/navigation';
import About from '~/about/about';
import NavBar from '~/navbar/navbar';

export default function SideBarLayout() {
  return (
    <div className='antialiased'>
      <NavBar />
      <aside id='drawer-navigation' className='hidden'>
        <About />
        <Navigation />
      </aside>
      <main className='flex flex-col gap-4 px-4 h-auto pt-20 pb-5'>
        <Outlet />
      </main>
    </div>
  );
}

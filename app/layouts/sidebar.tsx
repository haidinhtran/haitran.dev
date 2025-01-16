import { Outlet } from 'react-router';
import About from '~/about/about';
import NavBar from '~/navbar/navbar';

export default function SideBarLayout() {
  return (
    <div className='antialiased'>
      <NavBar />
      <aside className='w-72 fixed top-0 left-0 z-40 h-screen pt-14 transition-transform -translate-x-full lg:translate-x-0 bg-slate-50'>
        <div className='flex justify-center overdflow-y-auto'>
          <About />
        </div>
      </aside>
      <main className='flex flex-col gap-4 px-4 h-auto pt-20 pb-5 bg-slate-200'>
        <Outlet />
      </main>
    </div>
  );
}

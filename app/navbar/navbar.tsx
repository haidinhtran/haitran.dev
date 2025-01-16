export default function NavBar() {
  return (
    <nav className='px-4 py-3 fixed left-0 right-0 top-0 bg-slate-50 z-50 shadow-sm'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-start items-center'>
          <span className='block md:hidden lg:hidden xl:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </span>
          <div className='group flex h-10 w-10 cursor-pointer items-center justify-center rounded-3xl p-2 hover:bg-slate-200'>
            <div className='space-y-2'>
              <span className='block h-1 w-5 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45'></span>
              <span className='block h-1 w-4 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-5 group-hover:-translate-y-1.5 group-hover:-rotate-45'></span>
            </div>
          </div>
          <a href='#' className='font-bold'>
            website.domain
          </a>
        </div>
        <div className='flex justify-end items-center'>
          <a
            href='#'
            className='rounded px-4 py-2 border border-orange-200 text-slate-800 bg-orange-100 hover:bg-orange-300'
          >
            <span className='sr-only'>Screen Reader Only</span>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
                />
              </svg>
              <span className='px-2'>Icon Button</span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}

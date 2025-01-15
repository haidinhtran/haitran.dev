export default function NavBar() {
  return (
    <nav className='px-4 py-3 fixed left-0 right-0 top-0 bg-slate-50'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-start items-center'>
          <a href='#' className='font-bold'>
            haitran.dev
          </a>
        </div>
        <div className='flex justify-end items-center'>
          <a
            href='#'
            className='rounded px-4 py-1 border border-orange-200 text-slate-800 bg-orange-100 hover:bg-orange-300'
          >
            <span className='hidden'>Download Resume</span>
            <span className='block'>Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

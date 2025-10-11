const Footer = () => {
  return (
    <>
      <div className="col-start-1 row-start-3 md:col-start-2 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
        <footer>
          <p>Footer</p>
        </footer>
      </div>

      {/* Copyright */}
      <div className="col-start-1 row-start-5 grid md:col-start-2">
        <div className="px-2 pt-10 pb-24">
          <p>Copyright</p>
        </div>
      </div>
    </>
  )
}

export default Footer

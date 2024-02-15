function Header({ children }) {
  return (
    <header className="pt-5 pb-2 flex justify-between flex-wrap items-center sticky top-0 z-[20] bg-white">
      {children}
    </header>
  );
}

export default Header;

function Header({ children }) {
  return (
    <header className="mt-5 flex justify-between flex-wrap items-center sticky top-0 z-[20]">
      {children}
    </header>
  );
}

export default Header;

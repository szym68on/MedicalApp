function MainSection({ children }) {
  return (
    <main className="flex flex-col md:flex-row items-center mt-10">
      {children}
    </main>
  );
}

export default MainSection;

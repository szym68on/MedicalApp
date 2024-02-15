function LeadingSection({ children }) {
  return (
    <section className="mt-14 flex flex-col gap-y-6 md:gap-y-0 md:flex-row items-center justify-center md:justify-between pb-5">
      {children}
    </section>
  );
}

export default LeadingSection;

const Navbar = ({title, children}) => {
    return (
        <section className="section">
        <h1 className="title">{title}</h1>
        {children}
      </section>
  );
};

export default Navbar;
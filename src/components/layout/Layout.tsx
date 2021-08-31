import Header from "./Header";

interface ILayout {
  children: any;
}

const Layout = (props: ILayout): JSX.Element => {
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <Header />

      <main>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;

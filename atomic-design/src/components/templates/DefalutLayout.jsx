import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";

export const DefalutLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

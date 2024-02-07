import Categories from "../components/Catalog/Categories";
import Main from "../components/Detail/Main";
function Detail() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto lg:px-8 px-5">
        <Categories />
        <Main />
      </div>
    </>
  );
}

export default Detail;

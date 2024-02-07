import Categories from "../components/Catalog/Categories";
import Main from "../components/Category/Main";
function Category() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto lg:px-8 px-5">
        <Categories />
        <Main />
      </div>
    </>
  );
}

export default Category;

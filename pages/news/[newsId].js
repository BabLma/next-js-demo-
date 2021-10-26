import { useRouter } from "next/router";

// domain.com/news/any-names

function SearchName() {
  const name = useRouter();

  // FIXME
  console.log(name.query.newsId);

  return (
    <div>
      <h2>Search</h2>
      <input type="text" />
    </div>
  );
}

export default SearchName;

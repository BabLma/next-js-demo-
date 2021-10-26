// domian.com/news
import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h2>The News Page..</h2>;
      <ul>
        <li>
          <Link href="/news/next-js-cource">Next Js Course</Link>
        </li>
        <li>React Js Cource</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;

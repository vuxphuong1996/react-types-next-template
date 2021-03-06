import * as React from "react";
import Link from "next/link";

const Nav: React.FunctionComponent = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      |
      <Link href="/about">
        <a>About</a>
      </Link>
      |
    </nav>
  );
};

export default Nav;

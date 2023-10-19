"use client";

import { myAction } from "./actions";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <form action={myAction}>
      <button type="submit">Action</button>
    </form>
  );
}

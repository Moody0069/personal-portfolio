import Survey from "../Survey/Survey";

export default function Understanding() {
  return (
    <Survey
      SCREAMER={"SET_UNDERSTANDING"}
      nextUrl={"/feedback/support"}
      label={"Understanding?"}
      Question={"How well are you understanding the content?"}
      backUrl={"/feedback/"}
    />
  );
}

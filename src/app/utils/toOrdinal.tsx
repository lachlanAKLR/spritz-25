export default function toOrdinalJSX(n: number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = n % 100;
  const suffix = (suffixes[(v - 20) % 10] ||
    suffixes[v] ||
    suffixes[0]) as string;

  return (
    <>
      {n}
      <span className="ordinal-suffix">{suffix}</span>
    </>
  );
}

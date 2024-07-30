export default function Category({
  params,
}: {
  params: { foodCategory: string };
}) {
  return (
    <div>
      <h1>{`/${params.foodCategory}`}</h1>
    </div>
  );
}

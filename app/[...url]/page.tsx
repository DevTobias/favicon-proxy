export default function Page({ params }: { params: { url: string } }) {
  return (
    <>
      <link rel="icon" href={`https://icon.horse/icon/${params.url}`} />
    </>
  );
}

import SubNavs from "./_components/subNavs";
import VersionNav from "./_components/VersionNav";

export default function InfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" mt-10 px-10 pb-10">
      <VersionNav />
      <div className=" my-8">
        <SubNavs />
      </div>

      {children}
    </div>
  );
}

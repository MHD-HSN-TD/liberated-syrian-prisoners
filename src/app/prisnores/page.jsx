import Image from "next/image";
import Table from "../components/Table";

export default function Home() {
  let header = `ان هذا الموقع هدقه الاساسي فقط لطمأنة  اخواننا الذين لديهم معتقلين في سجون النظام المجرم`
  return (
    <div
      className="hero min-h-lvh "
      style={{
        backgroundImage: "url('/imgs/freeSyria.png')",
      }}>
      <div className="hero-overlay bg-opacity-75 "></div>
      <div className="hero-content text-neutral-content  text-center ">
        <div className="text-base max-w-xs lg:max-w-screen-xl ">
          <h1 className="mb-5 lg:text-5xl text-3xl font-bold leading-relaxed"> اسماء المعتقلين <span className="text-green-600"> المحريين</span> بعون الله ثم المعارضة السورية   <span className="text-green-600"> الحرة</span></h1>

          <Table></Table>
        </div>
      </div>
    </div>


  );
}
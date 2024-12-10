'use client'
import Image from "next/image";
import Table from "../../components/Table";
import Link from "next/link";
import { usePrison } from "@/Hooks/usePrison";

// export const metadata = {
//   title: "اسماء المعتقلين",
//   description: "اسماء المعتقلين في سجن صيدنايا....  سورية حرة",
// };
export default function Home() {
  const {
    changeNameHandler,
    loading,
    names,
    namesNumber
  } = usePrison() //Hook pattern
  console.log(names.length)

  return (
    <div>
      <div className="bg-slate-800">
        <Link href={'/'} className=" btn  m-4 btn-primary" >
          <Image src={'/imgs/back.png'} width={30} height={30} alt="back arrow" />
          <div className=" "> العودة للصفحة الرئيسية</div>
        </Link>
      </div>

      <div
        className="hero min-h-lvh "
        style={{
          backgroundImage: "url('/imgs/freeSyria.png')",
        }}>
        <div className="hero-overlay bg-opacity-75 "></div>
        <div className="hero-content text-neutral-content  text-center ">
          <div className="text-base max-w-xs lg:max-w-screen-xl ">
            <h1 className="mb-5 lg:text-5xl text-3xl font-bold leading-relaxed"> اسماء المعتقلين <span className="text-green-600"> المحريين</span> بعون الله ثم المعارضة السورية   <span className="text-green-600"> الحرة</span></h1>

            <div className="  bg-white p-10 rounded-lg">
              <div className="text-black py-10 text-2xl" >قم بادخال الاسم او اسم الاب اوالكنية لمحاولة ايجاد المحررين </div>

              <span className="text-black py-4 lg:text-2xl text-lg px-2" >عدد الاسماء المطابقة للبحث هو</span>
              <span className="text-red-700 lg:text-2xl text-lg " >{!namesNumber ? <span span className="loading loading-bars loading-xs text-error mx-2"></span> : namesNumber}</span>



              <div className="flex align-middle justify-around my-2">
                <input
                  onChange={changeNameHandler}
                  type="text"
                  placeholder=" ادخل الاسم الكامل او الكنية"
                  className="input input-bordered input-success lg:w-1/2  text-red-600 lg:text-lg text-xs" />

              </div>

              {loading ? <div className="text-black">

                <p>الرجاء الانتظار</p>
                <span span className="loading loading-bars loading-lg text-success"></span>
              </div>
                : <Table data={names}></Table>}
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

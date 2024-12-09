'use client'
import Image from "next/image";
import Table from "../../components/Table";
import Link from "next/link";
import { usePrison } from "@/Hooks/usePrison";

export default function Home() {
  const {
    changeNameHandler,
    loading,
    names,
  } = usePrison() //Hook pattern

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
              <div className="text-black py-10 text-2xl" >قم بادخال الاسم و اسم الاب والكنية لمحاولة ايجاد المحررين </div>
              <div className="flex align-middle justify-around">
                <input
                  onChange={changeNameHandler}
                  type="text"
                  placeholder=" ادخل الاسم الكامل او الكنية"
                  className="input input-bordered input-success w-1/2 max-w-xs text-red-600" />

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

"use client"
// import { data } from '../store/data'
const Table = ({ data }) => {

    let names = data.data
    console.log(names, "names from table")

    return (
        <div className="lg:overflow-x-hidden  overflow-x-scroll py-10">
            <table className="table table-auto ">
                <thead>
                    <tr className="text-lg text-green-600">
                        <th></th>
                        <th>الاسم</th>
                        <th>الجنس</th>
                        <th>اسم الاب</th>
                        {/* <th>اسم الام</th> */}
                        <th>مواليد</th>
                        <th>المحافظة</th>
                    </tr>
                </thead>
                <tbody className="text-nowrap  text-black">
                    {

                        names.map((el, id) => <tr key={id + 1}>
                            <th>{id + 1}</th>
                            <td>{el.full_name}</td>
                            <td>{el.gender == "MALE" ? <p className="">ذكر</p> : <p className="text-red-400">انثى</p>}</td>
                            <td>{el.father_name}</td>
                            {/* <td>{el.mother}</td> */}
                            <td>{el.birthdate}</td>
                            <td>{el.district}</td>
                        </tr>)
                    }




                </tbody>
                <tfoot>
                    <tr className="text-sm text-green-200">
                        <th></th>
                        <th>الاسم</th>
                        <th>الجنس</th>
                        <th>اسم الاب</th>
                        <th>مواليد</th>
                        <th>المحافظة</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Table
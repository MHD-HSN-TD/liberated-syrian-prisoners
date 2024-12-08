import { data } from '../store/data'
const Table = () => {
    // let data = [
    //     {
    //         id: 0,
    //         name: "أحمد محمد",
    //         gender: "ذكر",
    //         father: "محمد أحمد",
    //         mother: "فاطمة أحمد",
    //         takenData: "2023-01-15",
    //         takenPlace: "الرياض"
    //     },
    //     {
    //         id: 1,
    //         name: "علي حسن",
    //         gender: "ذكر",
    //         father: "حسن علي",
    //         mother: "سارة علي",
    //         takenData: "2023-02-20",
    //         takenPlace: "جدة"
    //     },
    //     {
    //         id: 2,
    //         name: "فاطمة الزهراء",
    //         gender: "ذكر",
    //         father: "عبد الله الزهراء",
    //         mother: "مريم الزهراء",
    //         takenData: "2023-03-10",
    //         takenPlace: "الدمام"
    //     },
    //     {
    //         id: 3,
    //         name: "سعيد يوسف",
    //         gender: "ذكر",
    //         father: "يوسف سعيد",
    //         mother: "عائشة سعيد",
    //         takenData: "2023-04-05",
    //         takenPlace: "المدينة المنورة"
    //     },
    //     {
    //         id: 4,
    //         name: "نورة خالد",
    //         gender: "ذكر",
    //         father: "خالد نورة",
    //         mother: "سمية خالد",
    //         takenData: "2023-05-12",
    //         takenPlace: "أبها"
    //     },
    //     {
    //         id: 5,
    //         name: "محمد علي",
    //         gender: "ذكر",
    //         father: "علي محمد",
    //         mother: "هالة علي",
    //         takenData: "2023-06-18",
    //         takenPlace: "تبوك"
    //     },
    //     {
    //         id: 6,
    //         name: "ليلى عمر",
    //         gender: "ذكر",
    //         father: "عمر ليلى",
    //         mother: "رنا عمر",
    //         takenData: "2023-07-22",
    //         takenPlace: "الخبر"
    //     },
    //     {
    //         id: 7,
    //         name: "يوسف إبراهيم",
    //         gender: "ذكر",
    //         father: "إبراهيم يوسف",
    //         mother: "نجوى إبراهيم",
    //         takenData: "2023-08-30",
    //         takenPlace: "القطيف"
    //     },
    //     {
    //         id: 8,
    //         name: "سارة حسين",
    //         gender: "ذكر",
    //         father: "حسين سارة",
    //         mother: "منى حسين",
    //         takenData: "2023-09-14",
    //         takenPlace: "الأحساء"
    //     },
    //     {
    //         id: 9,
    //         name: "خالد سعيد",
    //         gender: "ذكر",
    //         father: "سعيد خالد",
    //         mother: "عائشة سعيد",
    //         takenData: "2023-10-02",
    //         takenPlace: "الخرج"
    //     },
    //     {
    //         id: 10,
    //         name: "منى عبد الله",
    //         gender: "ذكر",
    //         father: "عبد الله منى",
    //         mother: "نجلاء عبد الله",
    //         takenData: "2023-11-11",
    //         takenPlace: "بريدة"
    //     },
    //     {
    //         id: 11,
    //         name: "عمر فهد",
    //         gender: "ذكر",
    //         father: "فهد عمر",
    //         mother: "أمل فهد",
    //         takenData: "2023-12-01",
    //         takenPlace: "حائل"
    //     },
    //     {
    //         id: 12,
    //         name: "جميلة عادل",
    //         gender: "ذكر",
    //         father: "عادل جميلة",
    //         mother: "رغد عادل",
    //         takenData: "2024-01-05",
    //         takenPlace: "جازان"
    //     },
    //     {
    //         id: 13,
    //         name: "طارق سامي",
    //         gender: "ذكر",
    //         father: "سامي طارق",
    //         mother: "لينا سامي",
    //         takenData: "2024-02-15",
    //         takenPlace: "المدينة المنورة"
    //     },
    //     {
    //         id: 14,
    //         name: 'زهراء علي',
    //         gender: "ذكر",
    //         father: 'علي زهراء',
    //         mother: 'فاطمة علي',
    //         takenData: '2024-03-20',
    //         takenPlace: 'الرياض'
    //     }
    // ];


    return (
        <div className="lg:overflow-x-hidden  overflow-x-scroll">
            <table className="table table-auto ">
                <thead>
                    <tr className="text-lg text-green-600">
                        <th></th>
                        <th>الاسم</th>
                        <th>الجنس</th>
                        <th>اسم الاب</th>
                        <th>اسم الام</th>
                        <th>مواليد</th>
                        <th>مكان الاعتقال (السجن) </th>
                    </tr>
                </thead>
                <tbody className="text-nowrap text-white">
                    {data.map((el, id) =>
                        <tr key={id + 1}>
                            <th>{id + 1}</th>
                            <td>{el.name}</td>
                            <td>{el.gender}</td>
                            <td>{el.father}</td>
                            <td>{el.mother}</td>
                            <td>{el.takenData}</td>
                            <td>{el.takenPlace}</td>
                        </tr>)}




                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>company</th>
                        <th>location</th>
                        <th>Last Login</th>
                        <th>Favorite Color</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Table
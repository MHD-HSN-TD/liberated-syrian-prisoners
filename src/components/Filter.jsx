
export const Filter = () => {
    return (
        <div className="  bg-white p-10 rounded-lg">
            <div className="text-black py-10 text-2xl" >قم بادخال الاسم و اسم الاب والكنية لمحاولة ايجاد المحررين </div>
            <div className="flex align-middle justify-around">
                <input
                    type="text"
                    placeholder="الاسم"
                    className="input input-bordered input-success w-1/2 max-w-xs" />
                <input
                    type="text"
                    placeholder="اسم الاب"
                    className="input input-bordered input-success w-1/2 max-w-xs" />
                <input
                    type="text"
                    placeholder="الكنية"
                    className="input input-bordered input-success w-full max-w-xs" />
            </div>
        </div>
    )
}

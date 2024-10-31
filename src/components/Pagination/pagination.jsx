export default function Pagination({ halaman, halamanTotal, setHalaman }) {
    const nextPage = () => {
        if (halaman < halamanTotal) {
            setHalaman((prevState) => prevState + 1);
        }
    };
    const prevPage = () => {
        if (halaman > 1) {
            setHalaman((prevState) => prevState - 1);
        }
    };
    return (
        <>
            <div className="flex justify-center items-center gap-4">
                {/* btn prev */}
                <button
                onClick={prevPage}
                className={`text-acent ${halaman > 1 ? "" : "cursor-not-allowed"}`}
                >
                Prev
                </button>
                {/* no halaman */}
                <span className="text-acent">
                {halaman} Dari {halamanTotal}
                </span>
                {/* btn next */}
                <button
                onClick={nextPage}
                className={`text-acent ${
                    halaman < halamanTotal ? "" : "cursor-not-allowed"
                }`}
                >
                Next
                </button>
            </div>
        </>
    );
}

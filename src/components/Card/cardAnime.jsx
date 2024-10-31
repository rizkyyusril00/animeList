import Link from "next/link";

export default function CardAnime({ api }) {
    return (
        <>
            {api.data?.map((data) => (
                <Link
                key={data.mal_id}
                href={`/detail-anime/${data.mal_id}`}
                className="shadow-lg bg-acent"
                >
                    <figure className="group bg-acent">
                        <img
                        src={data.images.jpg.image_url}
                        alt={data.title}
                        className="w-full h-[400px] object-cover group-hover:scale-[101%] transition-all duration-500 ease-in-out"
                        />
                        <figcaption className="p-4 text-[16px] font-bold text-secondary">
                        {data.title}
                        </figcaption>
                    </figure>
                </Link>
            ))}
        </>
    );
}

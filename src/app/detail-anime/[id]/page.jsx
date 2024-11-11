import { getAnimeResponse } from "../../../libs/api-libs";
import BadgeDetailAnime from "../../../components/Badge/badgeDetailAnime";
import Header from "../../../components/Header/header";
import VideoPlayer from "../../../components/VideoPlayer/videoPlayer";

export default async function DetailAnimeId({ params }) {
    const detailAnime = await getAnimeResponse(`anime/${params.id}`);
    const badges = [
        {
            id: 1,
            name: "rank:",
            api: detailAnime.data.rank,
        },
        {
            id: 2,
            name: "Score:",
            api: detailAnime.data.score,
        },
        {
            id: 3,
            name: "Total Episodes:",
            api: detailAnime.data.episodes,
        },
        {
            id: 4,
            name: "Status:",
            api: detailAnime.data.status,
        },
        {
            id: 5,
            name: "Studios:",
            api: detailAnime.data.studios.name,
        },
    ];
    return (
        <>
            <div className="pt-[70px]">
                <div className="p-4 flex flex-col gap-4">
                    <Header title={`${detailAnime.data.title}`} visibility={false} />
                    <div className="flex gap-4">
                        {/* sidebar img */}
                        <div className="w-[20%] h-auto group transition-all duration-500 ease-in-out relative overflow-hidden">
                            <img
                                src={detailAnime.data.images.jpg.image_url}
                                alt="detail anime"
                                className="w-full h-full object-cover"
                            />
                            <div className="w-full h-full transition-all duration-300 ease-in-out bg-transparent bg-opacity-50 absolute top-96 group-hover:top-0">
                                <div className="w-full h-auto bg-acent p-2 absolute bottom-0 flex items-center justify-center text-center">
                                    <span className="text-secondary">
                                        {detailAnime.data.genres &&
                                        detailAnime.data.genres.length > 0
                                        ? detailAnime.data.genres
                                            .map((genre) => genre.name)
                                            .join(", ")
                                        : "No genres available"}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* main bar */}
                        <div className="w-[80%] p-2 rounded-[15px] bg-acent bg-opacity-10 filter backdrop-blur-xl flex flex-col gap-2">    
                            <span className="w-full text-acent">{detailAnime.data.synopsis}</span>
                            <div className="flex items-center gap-3">
                                {badges.map((badge) => (
                                    <div
                                        key={badge.id}
                                        className="p-3 border border-acent rounded-md max-w-[200px]"
                                    >
                                        <BadgeDetailAnime detail={`${badge.name} ${badge.api}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* videoplayer */}
            <VideoPlayer YouTubeId={detailAnime.data.trailer.youtube_id} />
        </>
    );
}

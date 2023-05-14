import { InfoBar } from "@/components/common/Nav";
import GirlListUser from "@/public/icons/GirlListUsers.svg"
import GirlListImage from "@/public/icons/GirlListImage.svg"

import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import { useRouter } from "next/router";
import TabBar from "@/components/common/TabBar";
import { getGirlListDetail } from "@/pages/api/girlApi";
import { useSelector } from "react-redux";
import { RootState } from "@/store/configureStore";

interface GirlListParamType{
    lat : number,
    lng : number,
}
export default function List() {
    const girlDetailList = useSelector((state : RootState) => state.girlListDetailState);
    const {resultData} = getGirlListDetail();
    const router = useRouter();
    return(
        <div className="flex flex-col items-center gap-y-4">
            <InfoBar title={"대전시 유성구"}></InfoBar>
            <div className="relative flex items-center justify-center h-4 gap-x-2">
                <GirlListUser></GirlListUser>
                <p>{resultData?.totalUserCnt}</p>
                <GirlListImage></GirlListImage>
                <p>{resultData?.totalPhotoCnt}</p>
                {/* TODO : 정렬 기준 들어가야됨 */}
            </div>
            <Map
                center={{lat : girlDetailList.latitude, lng: girlDetailList.longitude}}
                style={{width : "100vw", height:"40vh"}}
                level={1}>
                {resultData !== undefined && <>
                    {resultData.photoList.map((photo) => {
                        return(
                            <CustomOverlayMap key={photo.photoId} position={{lat : photo.mapLatitude, lng: photo.mapLongitude}}>
                                <div onClick={() => router.push(`/girl-home/list/${photo.photoId}`)} className="w-4 h-4 rounded-full" style={{background: "linear-gradient(238.55deg, rgba(244, 114, 182, 0.75) 15.98%, rgba(145, 153, 217, 0.75) 55.85%, rgba(56, 189, 248, 0.75) 84.59%), linear-gradient(134.36deg, #F472B6 15.23%, #9797D7 49.79%, #38BDF8 84.77%)"}}>
                                </div>
                            </CustomOverlayMap>
                        )
                    })}
                </>}
            </Map>
            <div >
                {resultData !== undefined && <div className="grid grid-cols-4 gap-4 px-2">
                    {resultData.photoList.map((photo) => {
                        return(
                            <div key={photo.photoId} className="flex items-center justify-center w-full h-full">
                                <div onClick={() => router.push(`/girl-home/list/${photo.photoId}`)} className="col-span-1 bg-cover" style={{width : "80px", height: "80px", backgroundImage : `url(${photo.s3Url})`}}></div>
                            </div>
                        )
                    })}
                </div>}
            </div>
            <TabBar></TabBar>
        </div>
    )
};
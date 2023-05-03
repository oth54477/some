// 라이브러리
import React from "react";
import { useRouter } from "next/router";

// 컴포넌트
import Photo from "components/common/Photo";
import NewPhoto from "components/pages/album/NewPhoto";

// CSS
import styles from "styles/album.module.scss";
import { useGetPhotos } from "@/pages/api/albumApi";

// 인터페이스
interface PhotosType {
  isSelect: boolean;
  selectedCategory: number;
  selectedPhotos: Set<number>;
  setSelectedPhotos: React.Dispatch<React.SetStateAction<Set<number>>>;
  selectMembers: Set<number>;
  setInputPhoto: React.Dispatch<React.SetStateAction<FileList | null>>;
}

interface PhotoType {
  id: number;
  img: string;
  user: number;
  category: number;
  createdTime: string;
}

/**
 * 사진들이 표시되는 컴포넌트
 * @param isSelect 선택 여부
 * @param selectedCategory 선택된 카테고리 id
 * @param selectedPhotos 선택된 사진들 Set
 * @param setSelectedPhotos 선택된 사진들 Set의 Setter 함수
 * @param selectMembers 선택된 멤버들 Set
 * @param setInputPhoto 선택된 멤버들 Set의 Setter 함수
 * @returns
 */
function Photos({
  isSelect,
  selectedCategory,
  selectedPhotos,
  setSelectedPhotos,
  selectMembers,
  setInputPhoto,
}: PhotosType) {
  const router = useRouter();
  const { getPhotos, getPhotosIsLoading } = useGetPhotos();

  /**
   * 사진 선택 상태 바꾸기
   * @param id 사진 id
   */
  const changeSelect = (id: number) => {
    selectedPhotos.has(id) ? selectedPhotos.delete(id) : selectedPhotos.add(id);
    setSelectedPhotos(new Set(selectedPhotos));
  };

  /**
   * 사진 보기 페이지로 이동
   * @param id 사진 id
   */
  const goPhoto = (id: number) => {
    router.push(`/photo/${id}`);
  };

  return (
    <section className={`${styles.photos} grid grid-cols-4`}>
      {getPhotosIsLoading ? (
        // TODO : 로딩중
        <p>로딩중</p>
      ) : (
        <>
          {getPhotos?.data.map(
            (photo) =>
              (selectedCategory === 0 || selectedCategory === photo.category) &&
              selectMembers.has(photo.user) && (
                <div
                  key={photo.id}
                  onClick={() =>
                    isSelect ? changeSelect(photo.id) : goPhoto(photo.id)
                  }
                >
                  <Photo
                    key={photo.id}
                    width={"22.564vw"}
                    height={"22.564vw"}
                    selectedPhotos={selectedPhotos}
                    photoId={photo.id}
                    img={photo.img}
                  />
                </div>
              )
          )}
          {!isSelect && <NewPhoto setInputPhoto={setInputPhoto} />}
        </>
      )}
    </section>
  );
}

export default Photos;